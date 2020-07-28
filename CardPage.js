import React, { Component } from 'react';
import {Card} from 'react-native-shadow-cards';
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
            dataSet : this.props.dataSet
          

        }
    }
    setVisibleTrue = () => { this.setState({ isVisible: true }) };

    setVisibleFalse = () => { this.setState({ isVisible: false }) };

    
  

    render() {
       
       
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
            test: { borderStyle: 'solid', borderWidth: 5, borderColor: 'white', padding: 0, marginHorizontal: 30, borderRadius: 2 },
            cardCompanyDetailA: {
                flex: 1,
                marginTop: 15,
                paddingTop: 0,
                width: '90%',
                height:'5%',
                borderRadius: 8,
                flexDirection: 'row',
            },
shadow: {
                ...Platform.select({
                    ios: {
                        shadowColor: '#4D4D4D',
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 4,
                    },
                    android: {
                        shadowColor: '#4D4D4D',
                        elevation: 5,
                    },
                }),
            },

        });
    
        
        return (

            <View style={styles.container}>
           <ScrollView Virtical={true}>
              
    
           <Card
            title="companyDetailA"
                style={[styles.cardCompanyDetailA, styles.shadow]}
            >
                <Text>{JSON.stringify(state.dataSet[0])}</Text>
            </Card>
            <Card
                title="companyDetailA"
                style={[styles.cardCompanyDetailA, styles.shadow]}
            >
                <Text>{JSON.stringify(state.dataSet[1])}</Text>
            </Card>
            <Card
                title="companyDetailA"
                style={[styles.cardCompanyDetailA, styles.shadow]}
            >
                <Text>{JSON.stringify(this.props.dataSet[2])}</Text>
            </Card>
            <Card
                title="companyDetailA"
                style={[styles.cardCompanyDetailA, styles.shadow]}
            >
                <Text>{JSON.stringify(this.props.dataSet[3])}</Text>
            </Card>
            <Card
                title="companyDetailA"
                style={[styles.cardCompanyDetailA, styles.shadow]}
            >
                <Text>{JSON.stringify(this.props.dataSet[4])}</Text>
            </Card>

           
      

           </ScrollView>
 
    
       
                 
              
            </View>

        )


    }

}

