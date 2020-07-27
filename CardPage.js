import React, { Component } from 'react';
import {Card} from '@paraboly/react-native-card'
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, Alert, NativeModules, RecyclerViewBackedScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';

export class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['기업이름', '상품코드', 'PER', 'PBR', 'ROA','ROE', 'Head7', 'Head8','Head9'],
            widthArr: [81, 81, 62, 62, 62, 62, 62, 62, 62],
            isVisible: false,
            pageState: true,
            TestData:[],
            insertTest:{}
          

        }
    }
    setVisibleTrue = () => { this.setState({ isVisible: true }) };

    setVisibleFalse = () => { this.setState({ isVisible: false }) };

  

    render() {
       
        AsyncStorage.getAllKeys().then((keys) =>{
            AsyncStorage.multiGet(keys).then((data)=>{
              
                let mergeArr=[];
                 data.map((value,index)=>{
                    if(index<20){
                        let parseString= value[1]
                        console.log(value[1])
                        let parseData= JSON.parse(parseString);
                        let jsonArr =[{'key':value[0],'data':parseData}];
                        mergeArr=mergeArr.concat(jsonArr);
                       
                    }
             
                })
               
                console.log(mergeArr);
              
            })
          
        }) 
        const state = this.state;
        const styles = StyleSheet.create({
            container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', marginHorizontal: 10, alignContent: 'center' },
            header: { height: 50, backgroundColor: '#ffb81c' },
            text: { textAlign: 'center', fontWeight: '100' },
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
    
        console.log(state.TestData[0].key);
        
        return (

            <View style={styles.container}>
           
 
                      <Card
                      styles={{ height: 200 }}
                      title={'test'}
                      iconName="numeric-1"
                      defaultTitle=""
                      iconType="MaterialCommunityIcons"
                      iconSize={30}
                      defaultContent=""
                      onPress={() => this.props.navigation.navigate('Details')}
                      content={'TEST'}
                  />

                  {/* <Card
                  styles={{ height: 200 }}
                  title={this.state.TestData[0][1]}
                  iconName="numeric-2"
                  defaultTitle=""
                  iconType="MaterialCommunityIcons"
                  iconSize={30}
                  defaultContent=""
                  onPress={() => {() => this.props.navigation.navigate('Details')}}
                  content="Lorem ipsum dolor sit."
              /> */}
              
            </View>

        )


    }

}

