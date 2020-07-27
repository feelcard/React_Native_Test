import React, { Component } from 'react';
import {Card} from '@paraboly/react-native-card'
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, Alert, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['기업이름', '상품코드', 'PER', 'PBR', 'ROA','ROE', 'Head7', 'Head8','Head9'],
            widthArr: [81, 81, 62, 62, 62, 62, 62, 62, 62],
            isVisible: false,
            pageState: true,
            TestData:{}

        }
    }
    setVisibleTrue = () => { this.setState({ isVisible: true }) };

    setVisibleFalse = () => { this.setState({ isVisible: false }) };

  

    render() {
       
        AsyncStorage.multiGet(["삼성전자","KB금융"]).then(data =>{
          
          let insert= [data[1][0],JSON.parse(data[1][1])];
            this.setState({TestData:insert})
        })
        const state = this.state;
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
    
       console.log('TestData[1]:'+ JSON.stringify(state.TestData[1]));

        
        return (

            <View style={styles.container}>
           
 
                      <Card
                      styles={{ height: 200 }}
                      title={this.state.TestData[0]}
                      iconName="numeric-1"
                      defaultTitle=""
                      iconType="MaterialCommunityIcons"
                      iconSize={30}
                      defaultContent=""
                      onPress={() => this.props.navigation.navigate('Details')}
                      content={JSON.stringify(state.TestData[1])}
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

