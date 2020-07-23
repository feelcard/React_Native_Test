import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator,TransitionPresets } from 'react-navigation-stack';
import AnimatedSplash from "react-native-animated-splash-screen";// AnimatedSplash Component
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';// table Component
import ViewPager from '@react-native-community/viewpager';
import { Modal } from 'react-native-paper';
import { Card } from "@paraboly/react-native-card";
import AsyncStorage from '@react-native-community/async-storage';
import { Modify } from './Modify';
import { Detail } from './Detail';







class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [Hello('기업이름'), Hello('상품코드'), Hello('PER'), Hello('PBR'), Hello('ROA'), Hello('ROE'), Hello('Head7'), Hello('Head8'), Hello('Head9')],
            widthArr: [81, 81, 62, 62, 62, 62, 62, 62, 62],
            isVisible: false,
            pageState:true
            
        }
    }
    setVisibleTrue = () => { this.setState({ isVisible: true }) };

    setVisibleFalse = () => { this.setState({ isVisible: false }) };

    viewPager = React.createRef();

    render() {
        const state = this.state;
        
        const tableData = [];
        for (let i = 0; i < 20; i += 1) {
            const rowData = [];
            for (let j = 0; j < 9; j += 1) {
                rowData.push(`${i}${j}`);

            }
            tableData.push(rowData);
        }

        const styles = StyleSheet.create({
            container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',marginHorizontal:10, alignContent:'center' },
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

        pageChange = (page) =>{
            this.viewPager.current.setPage(page);
            this.setState({pageState:!this.state.pageState});
        }

        return (


            <View style={styles.container}>

                <View style={StyleSheet.create({
                    container: { flex: 1, paddingTop: 10, backgroundColor: '#fff' }
                }).container}>
                      <View style={styles.semiheader}>
                                <Text style={styles.headtextmain} onPress= {()=>{state.pageState&&pageChange(1)}}>main</Text>
                                <Text style={styles.headtexttable} onPress= {()=>{!state.pageState&&pageChange(0)}}>Table</Text>
                            </View>
                         
                    <ViewPager ref ={this.viewPager} style={styles.container} initialPage={1} orientation='horizontal' transitionStyle='curl' pageMargin={10}>
                        <View key="1">
                            <ScrollView Virtical={true} horizontal={true}>
                                <View>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row header={true} setVisibleTrue={this.setVisibleTrue} data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                                    </Table>
                                    <ScrollView style={styles.dataWrapper} onMoveShouldSetResponder={false}>
                                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }} heightArr={[30]}>

                                            {
                                                tableData.map((rowData, index) => (
                                                    <Row
                                                        navigation={this.props.navigation}
                                                        rowKey={index}
                                                        data={rowData}
                                                        widthArr={state.widthArr}
                                                        style={[styles.row, index % 2 && { backgroundColor: '#F7F9F9' }]}
                                                        textStyle={styles.text}
                                                    />
                                                ))
                                            }

                                        </Table>
                                    </ScrollView>

                                </View>
                            </ScrollView>
                        </View>
                        <View key="2">
                           
                                    <Card
                                        styles={{ height: 200 }}
                                        title="Title"
                                        iconName="numeric-1"
                                        defaultTitle=""
                                        iconType ="MaterialCommunityIcons"
                                        iconSize={50}
                                        defaultContent=""
                                        onPress={() => { }}
                                        content="Lorem ipsum dolor sit."
                                    />
                        </View>
                    </ViewPager>

                    <Button

                        color='#89734c'
                        title='수치 설정하기'
                        onPress={() => this.props.navigation.navigate('Modify')} />

                </View>
                <Modal animationType={"slide"} transparent={false} onDismiss={this.setVisibleFalse}
                    visible={this.state.isVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>
                    <View style={styles.test}>

                        <View style={styles.modal}>
                            <Text style={styles.discription} onPress={
                                this.setVisibleFalse
                            }>PER 이란?</Text>
                            <View>
                                <Text></Text>
                                <Text></Text>
                                <Text>description1</Text>
                                <Text>description2</Text>
                                <Text>description3</Text>
                                <Text>description4</Text>
                                <Text>description5</Text>
                                <Text>description6</Text>
                                <Text>description7</Text>
                                <Text>description8</Text>
                            </View>




                        </View>
                    </View>
                </Modal>
            </View>
        )


    }

}

const Hello = (name) => {
    return (
        <View><Text>{name}</Text></View>
    );
}


class ModifyScreen extends React.Component {


    render() {

        return (
            <Modify navigation = {this.props.navigation}/>
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
                title: "Table",
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
        loadingText:'반갑습니다'
    }



    async componentDidMount() {
        const getApiAsync = async (setLoadingText =(text)=>{this.setState({loadingText:text}) }) => {
            try {
                
                let response = await fetch(
                'http://ec2-15-164-117-230.ap-northeast-2.compute.amazonaws.com:8080/quantdata/rank'
                );
                let json = await response.json();
                const companyData = await JSON.parse(JSON.stringify(json));
               
                AsyncStorage.setItem('updated_date','');
                await AsyncStorage.getItem('updated_date').then(function(data) {
                   console.log('updated_date:'+data);
            
                })
                
              const worker = new Worker('Received_Data.js');
               worker.onmessage = function(event) {
                setLoadingText(event.data);
              };
                setTimeout(() => {
                    this.setState({loadingText:'Do It Quent'});
                    setTimeout(() => {
                        this.setState({  loadingText:'',isLoaded: true });
                         }, 2500);
                     }, 2000);
               

               
            } catch (error) {
                console.error(error);
            }
        };
        getApiAsync();
       
        //  setTimeout(() => {
        //     this.setState({ isLoaded: true });
        // }, 3000);


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