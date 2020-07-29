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
import { Modal } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { Card } from "react-native-shadow-cards";
import * as Font from "expo-font";

const Hello = (name) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export class TablePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: {},
      widthArr: [81, 81, 62, 62, 62, 62, 62, 62, 62],
      isVisible: false,
      pageState: true,
      tableDatas: [],
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
      weights: {
        wPer: 0,
        wPbr: 0,
        wRoa: 0,
        wRoe: 0,
        wDebtRatio: 0,
        wOperMargin: 0,
        wReserveRatio: 0,
      },
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      weights: { ...this.props.weights },
    });

    
  }

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

  setVisibleTrue = () => {
    this.setState({ isVisible: true });
  };

  setVisibleFalse = () => {
    this.setState({ isVisible: false });
  };

  setTableData = (per, pbr, roa, roe) => {
    //  AsyncStorage
  };

  
  render() {

    Font.loadAsync({
      Lobster: require("./assets/fonts/Lobster-Regular.ttf"),
      "NanumGothic-Regular": require("./assets/fonts/NanumGothic-Regular.ttf"),
      "NanumGothic-Bold": require("./assets/fonts/NanumGothic-Bold.ttf"),
    });

    const state = this.state;
    AsyncStorage.multiGet(["삼성전자", "KB금융"]).then((data) => {
      this.setState({ tableHead: JSON.parse(data[0][1]).per });
    });

    // AsyncStorage.getAllKeys((err, keys) => {
    //     AsyncStorage.multiGet(keys, (error, stores) => {
    //       stores.map((result, i, store) => {
    //         console.log(' [store[i][0]]: '+ store[i][1] );
    //         return true;
    //       });
    //     });
    //   });
    const tableData = [];
    for (let i = 0; i < 20; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        alignContent: "center",
      },
      header: { height: 50, backgroundColor: "#ffb81c" },
      text: { textAlign: "center", fontWeight: "100" },
      // discription: { textAlign: 'left', fontSize: 25, backgroundColor: '#5e514d', color: 'white', padding: 3, paddingHorizontal: 20, position: 'absolute', translateX: -20, translateY: 10 },
      dataWrapper: { marginTop: -1 },
      row: { height: 51.6, backgroundColor: "#ECF0F1" },
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
        backgroundColor: '#89734c',
        padding: 5,
        width: 40,
        borderRadius: 20
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
        fontFamily: "NanumGothic-Bold",
        marginBottom: 2,
        color: "#ffbc00",
        fontSize: 8,
      },
      scrollView: {
        marginHorizontal: 10,
      },
    });

    pageChange = (page) => {
      this.viewPager.current.setPage(page);
      this.setState({ pageState: !this.state.pageState });
    };

    const { weightsList, weights } = this.state;

    // console.log('tablePage: ', weights);

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
        <ScrollView Vertical={true} style={styles.scrollView}>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
            <TableWrapper>
              <Cols
                navigation={this.props.navigation}
                data={tableData}
                HeightArr={state.widthArr}
                style={[styles.row, { backgroundColor: "#F7F9F9" }]}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </ScrollView>

        <Button
          color="#89734c"
          title="수치 설정하기"
          onPress={() => this.props.navigation.navigate("Modify")}
        />
      </View>
    );
  }
}

/* <Modal animationType={"slide"} transparent={false} onDismiss={this.setVisibleFalse}
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
                </Modal> */

/* <ScrollView Virtical={true} horizontal={true}>
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
 */
