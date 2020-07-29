import React, { Component, Children } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ToastAndroid,
    Button,
    ScrollView,
    Alert,
} from "react-native";
import {
    Table,
    TableWrapper,
    Row,
    Col,
    Cell,
    Cols,
} from "react-native-table-component"; // table Component
import AsyncStorage from "@react-native-community/async-storage";
import { AppLoading } from "expo";
import { Card } from "react-native-shadow-cards";
import { Badge } from "react-native-elements";
import * as Font from "expo-font";
import { BadgeWeights } from "./BadgeWeights";

const CellDesign = (text) => {
    const styles = StyleSheet.create({
        textStyle: {
            backgroundColor: "#fffeb3",
            alignItems: "center",

        },
    });

    // if (!fontsLoaded) {
    //     return <AppLoading />;
    //   }else
    return (
        <View style={styles.textStyle}>
            <Text>{text}</Text>
        </View>
    );
};

export class TablePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableData: {},
            tableScrollData: {},
            widthArr: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            isVisible: false,
            pageState: true,
            dataSet: this.props.dataSet,
            weights: {
                wPer: 0,
                wPbr: 0,
                wRoa: 0,
                wRoe: 0,
                wDebtRatio: 0,
                wOperMargin: 0,
                wReserveRatio: 0,
            },
            weightsList: [
                {
                    name: "PER",
                    stateKey: "wPer",
                },
                {
                    name: "PBR",
                    stateKey: "wPbr",
                },
                {
                    name: "ROA",
                    stateKey: "wRoa",
                },
                {
                    name: "ROE",
                    stateKey: "wRoe",
                },
                {
                    name: "DEBT",
                    stateKey: "wDebtRatio",
                },
                {
                    name: "OPER",
                    stateKey: "wOperMargin",
                },
                {
                    name: "RES",
                    stateKey: "wReserveRatio",
                },
            ],
        };
    }

    UNSAFE_componentWillMount() {
        this.setState({
            weights: { ...this.props.weights },
        });

        let tableData = {};
        let tableScrollData = {};
        const hey = () => {
            let nameData = ["기업이름"];
            let codeData = ["종목코드"];
            let perdata = ["PER"];
            let pbrdata = ["PBR"];
            let operatingdata = ["ROA"];
            let roadata = ["ROE"];
            let roedata = ["부채비율"];
            let reverseRatiodata = ["영업이익률"];
            let debtRatiodata = ["유보율"];

            this.props.dataSet.map((val, i) => {
                nameData.push(i % 2 == 0 ? CellDesign(val.cmpName) : val.cmpName);
                codeData.push(val.code);
                perdata.push(val.per);
                pbrdata.push(val.pbr);
                operatingdata.push(val.operatingProfitRatio);
                roadata.push(val.roa);
                roedata.push(val.roe);
                reverseRatiodata.push(val.reserveRatio);
                debtRatiodata.push(val.debtRatio);
            });
            tableData = [nameData, codeData];

            tableScrollData = [
                perdata,
                pbrdata,
                operatingdata,
                roadata,
                roedata,
                reverseRatiodata,
                debtRatiodata,
            ];

        };

        hey();



        this.setState({ tableData: tableData })
        this.setState({ tableScrollData: tableScrollData })
    }

    setVisibleTrue = () => {
        this.setState({ isVisible: true });
    };

    setVisibleFalse = () => {
        this.setState({ isVisible: false });
    };

    setTableData = (per, pbr, roa, roe) => {
        //  AsyncStorage
    };

    whatColor = (weight) => {
        if (weight >= 50) {
            return "error";
        } else if (weight >= 30) {
            return "warning";
        } else if (weight >= 10) {
            return "primary";
        } else {
            return "success";
        }
    };

    render() {
        const state = this.state;

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                padding: 16,
                paddingTop: 13,
                backgroundColor: "#fff",
                marginHorizontal: 10,
                alignContent: "center",
                paddingBottom: 30,
            },
            tableContainer: {
                flex: 1,
                backgroundColor: "#fff",
                alignContent: "center",
                flexDirection: "row",
            },
            scrollTable: { paddingRight: 130 },
            header: { height: 50, backgroundColor: "#ffb81c" },
            text: { textAlign: "center", fontWeight: "100" },
            // discription: { textAlign: 'left', fontSize: 25, backgroundColor: '#5e514d', color: 'white', padding: 3, paddingHorizontal: 20, position: 'absolute', translateX: -20, translateY: 10 },
            dataWrapper: { marginTop: -1 },
            row: {flex:1,height:51.6 },
            semiheader: {
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 15,
                borderBottomWidth: 3,
                borderBottomColor: "gray",
                marginBottom: 5,
            },
            headtextmain: {
                flex: 1,
                textAlign: "center",
                paddingRight: 15,
                borderBottomColor: "#ffb81c",
                borderBottomWidth: 0,
            },
            headtexttable: {
                flex: 1,
                textAlign: "center",
                paddingLeft: 15,
                borderBottomColor: "#ffb81c",
                borderBottomWidth: 3,
            },
            modal: {
                // flex: 1,
                // alignItems: 'center',

                backgroundColor: "#ffffff",
                borderWidth: 5,
                borderColor: "#ffffff", //#8D9093
                padding: 20,
                paddingHorizontal: 10,
                borderStyle: "solid",
                borderColor: "#ffb81c",
                overflow: "visible",
            },
            test: {
                borderStyle: "solid",
                borderWidth: 5,
                borderColor: "white",
                padding: 0,
                marginHorizontal: 30,
                borderRadius: 2,
            },
            badgeList: {
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 15,
                backgroundColor: "#60584c",
                paddingVertical: 10,
            },
            badgeComp: {
                alignItems: "center",
                marginHorizontal: 2,
                backgroundColor: "#89734c",
                padding: 5,
                width: 40,
                borderRadius: 20,
            },
            shadow: {
                ...Platform.select({
                    ios: {
                        shadowColor: "#4D4D4D",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 4,
                    },
                    android: {
                        shadowColor: "#4D4D4D",
                        elevation: 5,
                    },
                }),
            },
            badgeTitle: {
                // fontFamily: "NanumGothic-Bold",
                marginBottom: 2,
                color: "#ffbc00",
                fontSize: 8,
            },
        });

        const { weightsList, weights } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.badgeList}>
                    {weightsList.map((weight) => {
                        return (
                            <Card style={[styles.badgeComp, styles.shadow]}>
                                <Text style={styles.badgeTitle}>{weight.name}</Text>
                                <Badge
                                    value={weights[weight.stateKey].toString()}
                                    status={this.whatColor(weights[weight.stateKey])}
                                />
                            </Card>
                        );
                    })}
                </View>
                <View style={styles.tableContainer}>
                    <Table
                        borderStyle={{ borderBottomWidth: 3, borderBottomColor: "#C1C0B9" }}
                    >
                        {
                            this.state.tableData.map((rowData, index) => (
                               
                                <TableWrapper key={index} style={styles.row}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell key={cellIndex} data={cellData} textStyle={styles.text} />
                                        ))
                                    }
                                </TableWrapper>
                              
                            ))
                        }


                        {/* <TableWrapper style={styles.row}>
                      
                            <Cols
                navigation={this.props.navigation}
                data={this.state.tableData}
                heightArr={state.widthArr}
                widthArr={[68, 59]}
                style={[styles.row]}
                textStyle={styles.text}
              />
              
                        </TableWrapper> */}
                    </Table>
                    <View style={styles.scrollTable}>
                        <ScrollView horizontal={true}>
                            <Table
                                borderStyle={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#C1C0B9",
                                }}
                            >
                                <TableWrapper>
                                    <Cols
                                        navigation={this.props.navigation}
                                        data={this.state.tableScrollData}
                                        heightArr={state.widthArr}
                                        widthArr={[50, 43, 43, 48, 55, 65, 55]}
                                        style={[styles.row]}
                                        textStyle={styles.text}
                                    />
                                </TableWrapper>
                            </Table>
                        </ScrollView>
                    </View>
                </View>
                <Button
                    title="Submit"
                    onPress={() => this.props.navigation.navigate("Modify")}
                />
            </View>
        );
    }
}
