import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, Alert, NativeModules } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import AnimatedSplash from "react-native-animated-splash-screen";// AnimatedSplash Component
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import { Modify } from './Modify';
import { Detail } from './Detail';
import { CardPage } from './CardPage';
import { TablePage } from './TablePage';


let navigationForSend;




class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        navigationForSend=this.props.navigation;
        this.state = {
            isVisible: false,
            pageState: true
            

        }
    }
    setVisibleTrue = () => { this.setState({ isVisible: true }) };

    setVisibleFalse = () => { this.setState({ isVisible: false }) };

  
    render() {
        const state = this.state;
        const Tab = createMaterialTopTabNavigator();

        const styles = StyleSheet.create({
            container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', marginHorizontal: 10, alignContent: 'center' },
            header: { height: 50, backgroundColor: '#ffb81c' },
            text: { textAlign: 'center', fontWeight: '100' },
            discription: { textAlign: 'left', fontSize: 25, backgroundColor: '#5e514d', color: 'white', padding: 3, paddingHorizontal: 20, position: 'absolute', translateX: -20, translateY: 10 },
            dataWrapper: { marginTop: -1 },
            row: { height: 51.6, backgroundColor: '#ECF0F1' },
            semiheader: { flexDirection: 'row', flexWrap: 'wrap', padding: 15, borderBottomWidth: 3, borderBottomColor: 'gray', marginBottom: 5 },
            headtextmain: { flex: 1, textAlign: 'center', paddingRight: 15, borderBottomColor: '#ffb81c', borderBottomWidth: 0 },
            headtexttable: { flex: 1, textAlign: 'center', paddingLeft: 15, borderBottomColor: '#ffb81c', borderBottomWidth: 3 },
            modal: {
                // flex: 1,
                // alignItems: 'center',

                backgroundColor: '#ffffff',
                borderWidth: 5,
                borderColor: '#ffffff',//#8D9093
                padding: 20,
                paddingHorizontal: 10,
                borderStyle: 'solid',
                borderColor: '#ffb81c',
                overflow: 'visible'
            },
            test: { borderStyle: 'solid', borderWidth: 5, borderColor: 'white', padding: 0, marginHorizontal: 30, borderRadius: 2 }

        });

        
       
        return (
        <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#ffb81c',
            inactiveTintColor :'black',
            labelStyle: { fontSize: 12 },
            indicatorStyle  :{borderColor:'#ffb81c', borderWidth:1}
          }} 
          >
              { console.log('HomeScreen : '+JSON.stringify(this.props))}
            <Tab.Screen name="Card" component={CardScreen} />
            <Tab.Screen name="Table" component={TableScreen}  />
          </Tab.Navigator>
          </NavigationContainer>
       

          
        )


    }

}



class CardScreen extends React.Component{

    render(){
        return(
            <CardPage navigation={navigationForSend}/>
        )
    }
}

class TableScreen extends React.Component{

    render(){
        console.log(navigationForSend)
        return(
           
            <TablePage navigation={navigationForSend}/>
        )
    }
}


class ModifyScreen extends React.Component {


    render() {
        console.log('ModifyScreen : '+JSON.stringify(this.props));
        return (
            <Modify navigation={this.props.navigation} />
        );
    }


}

class DetailsScreen extends React.Component {



    render() {

        return (
            <Detail />

        );
    }


}





const AppNavigator = createStackNavigator(
    {

        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Main",
                headerTitleAlign: 'center'
            },
        },
        Modify: {
            screen: ModifyScreen,
            navigationOptions: {
                title: "Modify",
                headerTitleAlign: 'center',

            },
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                title: "Details",
                headerTitleAlign: 'center',

            },
        },
        CardScreen: {
            screen: CardScreen,
            navigationOptions: {
                title: "Cards",
                headerTitleAlign: 'center',

            },
        },
        TableScreen: {
            screen: TableScreen,
            navigationOptions: {
                title: "Tables",
                headerTitleAlign: 'center',

            },
        }

    },
    {
        initialRouteName: "Home",
    }
)

const Container = createAppContainer(AppNavigator)


class App extends React.Component {
    state = {
        isLoaded: false,
        loadingText: '반갑습니다'
    }



    componentDidMount() {
        let todayDate= new Date().toDateString()
        const getCompanyApiAsync = async ( url,setLoadingText = (text) => { this.setState({ loadingText: text }) },setLoaded=(loadbool)=>{this.setState({ isLoaded: loadbool })}) => {
            try {

                let response = await fetch(
                    'http://ec2-15-164-117-230.ap-northeast-2.compute.amazonaws.com:8080/quantdata'
                );
                let json = await response.json();
                const companyData = json;
              
               
                let update_companyData = async (companyData,setLoadingText,setLoaded) => {
                   
               
                    setLoadingText("기업 정보 업데이트 중입니다.")
                  
                  
                     await AsyncStorage.setItem('updated_date', new Date().toDateString())
    
                     await companyData.map(async (value, index) => {
                       
                            AsyncStorage.setItem(value.cmpName,JSON.stringify(value));
                        
                      
                    });
                  

               
             
                }

            
                update_companyData(companyData,setLoadingText);

                setTimeout(() => {
                    setLoadingText("Do IT Quant");
                    AsyncStorage.getItem('삼성전자').then(function (data) {
                        console.log('삼성전자:' + data);
                    })
                setTimeout(() => {
                    setLoadingText('');
                    setLoaded(true);
                     }, 1000);
                 }, 1000);
        
                  
                    

            } catch (error) {
                console.error(error);
            }
        };

        // const getCompanyRankApiAsync = async (setLoadingText = (text) => { this.setState({ loadingText: text }) },setLoaded=(loadbool)=>{this.setState({ isLoaded: loadbool })}) => {
        //     try {
        //         await getCompanyApiAsync();
        //         let response = await fetch(
        //             'http://ec2-15-164-117-230.ap-northeast-2.compute.amazonaws.com:8080/quantdata/rank'
        //         );
        //         let json =  response.json();
        //         const companyData = JSON.parse(JSON.stringify(json));
           
                
        //         let update_companyData = async (companyData,setLoadingText,setLoaded) => {
                    
        //              await AsyncStorage.setItem('updated_date', new Date().toDateString());
        //             await companyData.map(async (value, index) => { 
        //                AsyncStorage.getItem(value.cmpName).then(async function (data) {

        //                 let mergeData = JSON.stringify(Object.assign(value,JSON.parse(data)));
        //                    if(index<20){
        //                     console.log('mergeDate:'+mergeData);
        //                     data==null?console.log('data is null'):AsyncStorage.setItem(value.cmpName,mergeData);
        //                    }
                          
                           
                    
        //                 });
                       
                           
                       
                      
        //             });
                 
             
        //         }
            
              
                  
        //         update_companyData(companyData,setLoadingText).then(()=>{
        //             setTimeout(() => {
        //                 setLoadingText("Do IT Quant");
        //                 AsyncStorage.getItem('삼성전자').then(function (data) {
        //                     console.log('삼성전자:' + data);
        //                 })
        //             setTimeout(() => {
        //                 setLoadingText('');
        //                 setLoaded(true);
        //                  }, 1000);
        //              }, 1000);
        //         });
             

              
                


        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
      AsyncStorage.getItem('updated_date').then((date,setLoadingText = (text) => { this.setState({ loadingText: text }) },
      setLoaded = (bool) => { this.setState({ isLoaded:bool }) })=>{
        console.log('date:'+date);
        console.log('todayDate:'+todayDate);
       date==todayDate?setLoaded(true):getCompanyApiAsync();
      })
     
      
      
    }

    render() {

        return (
            <AnimatedSplash
                translucent={true}
                isLoaded={this.state.isLoaded}
                logoImage={require("./assets/KBDataSystems_CI_eng.jpg")}
                backgroundColor={"#ffcc22"}
                logoHeight={150}
                logoWidht={150}
                loadingText={this.state.loadingText}
            >
                {console.disableYellowBox = true}
                <Container />

            </AnimatedSplash>
        )
    }
}


export default App