import React, { Component, Children } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, Alert } from 'react-native';
import { Table, TableWrapper, Row, Col, Cell, Cols } from 'react-native-table-component';// table Component
import AsyncStorage from '@react-native-community/async-storage';

const Hello = (name) => {
    return (
        <View><Text>{name}</Text></View>
    );
}


export class TablePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableHead: {},
            widthArr: [30, 30, 30, 30, 30, 30, 30, 30, 30,30],
            isVisible: false,
            pageState: true,
            dataSet: this.props.dataSet


        }

    }
    setVisibleTrue = () => { this.setState({ isVisible: true }) };

    setVisibleFalse = () => { this.setState({ isVisible: false }) };

    setTableData = (per, pbr, roa, roe) => {
        //  AsyncStorage
    }


    render() {
        const state = this.state;

        let tableData = {};
        const asdf = () => {
            let perdata = [];
            let pbrdata = [];
            let operatingdata = [];
            let roadata = [];
            let roedata = [];
            let reverseRatiodata = [];
            let debtRatiodata = [];

            this.props.dataSet.map((val, i) => {
                perdata.push(val.per);
                pbrdata.push(val.pbr);
                operatingdata.push(val.operatingProfitRatio);
                roadata.push(val.roa);
                roedata.push(val.roe);
                reverseRatiodata.push(val.reserveRatio);
                debtRatiodata.push(val.debtRatio);

            })

            tableData = [
                perdata,
                pbrdata,
                operatingdata,
                roadata,
                roedata,
                reverseRatiodata,
                debtRatiodata
            ]

            console.log('tableData:', tableData);
        }

        asdf();

        const styles = StyleSheet.create({
            container: { flex: 1, padding: 16, paddingTop: 13, backgroundColor: '#fff', marginHorizontal: 10, alignContent: 'center' },
            header: { height: 50, backgroundColor: '#ffb81c' },
            text: { textAlign: 'center', fontWeight: '100' },
            // discription: { textAlign: 'left', fontSize: 25, backgroundColor: '#5e514d', color: 'white', padding: 3, paddingHorizontal: 20, position: 'absolute', translateX: -20, translateY: 10 },
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

            <View style={styles.container}>

            <ScrollView horizontal={true}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                    <TableWrapper>
                        <Cols
                            navigation={this.props.navigation}
                            data={tableData}
                            heightArr={state.widthArr}
                            widthArr={[50,50,50,50,50,80,80,80,80,80]}
                            style={[styles.row, { backgroundColor: '#F7F9F9' }]}
                            textStyle={styles.text}
                        />

                    </TableWrapper>
                </Table>
                </ScrollView>
            </View>


        )


    }

}



