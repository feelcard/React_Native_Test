import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Button, ListItem, Overlay, Card } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AnimatedSplash from "react-native-animated-splash-screen"; // AnimatedSplash Component
import { Table, TableWrapper, Row, Col } from "react-native-table-component"; // table Component
import { TextInput } from "react-native-paper";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Info from "./Info";

export default class Modify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: {
        per: 0,
        pbr: 0,
        roa: 0,
        roe: 0,
        debtRatio: 0,
        reserveRatio: 0,
        operMargin: 0,
      },
      isRight: this.isPercentRight,
      id: 0,
      isVisible: false,
      dataList: [
        {
          id: 0,
          title: "PER",
          subtitle: "Price Earnings Ratio",
          stateKey: "per",
        },
        {
          id: 1,
          title: "PBR",
          subtitle: "Price Book Ratio",
          stateKey: "pbr",
        },
        {
          id: 2,
          title: "ROA",
          subtitle: "Return on Assets",
          stateKey: "roa",
        },
        {
          id: 3,
          title: "ROE",
          subtitle: "Return on Earnings",
          stateKey: "roe",
        },
        {
          id: 4,
          title: "부채비율",
          subtitle: "Debt Ratio",
          stateKey: "debtRatio",
        },
        {
          id: 5,
          title: "영업이익률",
          subtitle: "Operating Margin",
          stateKey: "operMargin",
        },
        {
          id: 6,
          title: "유보율",
          subtitle: "Reserve Ratio",
          stateKey: "reserveRatio",
        },
      ],
    };

    this.onScroll = this.onScroll.bind(this);
  }

  setInputData = (text, key) => {
    let newInput = parseInt(text);
    if (newInput === NaN) newInput = 0;

    this.setState((prevState) => ({
      inputData: {
        ...prevState.inputData,
        [key]: newInput, // => 요기
      },
    }));
  };

  isPercentRight = () => {
    const { inputData } = this.state;
    let arr = Object.values(inputData);
    let sum = arr.reduce((total, num) => total + num);
    if (sum === 100) {
      return true;
    } else {
      return false;
    }
  };

  setOverlayVisible = (id, visible) => {
    this.setState({
      id: id,
      isVisible: visible,
    });
  };

  handleNotVisible = () => {
    this.setState({ isVisible: false });
  };

  onScroll(event) {
    var currentOffset = event.nativeEvent.contentOffset.y;
    var direction =
      currentOffset > this.state.offset
        ? currentOffset + " down " + this.state.offset
        : currentOffset + " up " + this.state.offset;
    this.setState({
      offset: currentOffset,
    }),
      Alert.alert(direction);
  }

  render() {
    const { isRight, id, isVisible, dataList } = this.state;

    return (
      <View style={styles.item}>
        {/* Overlay start */}
        <Info
          id={id}
          propVisible={isVisible}
          onNotVisible={this.handleNotVisible}
        />
        {/* Overlay end */}

        {/* Modify content start */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataList.map((data) => {
            return (
              <ListItem
                title={
                  
                  <Text
                    style={styles.title}
                    onPress={() => {
                      this.setOverlayVisible(data.id, true); // => 요기
                    }}
                  >
                    {data.title + ' '}
                    <MaterialIcons 
                   name="info-outline" size={15} color="black" />
                  </Text>
                }
                leftIcon={
                  <AntDesign
                    name="pushpino"
                    size={24}
                    color="black"
                    onPress={() => {
                      this.setOverlayVisible(data.id, true); // => 요기
                    }}
                  />
                }
                subtitle={data.subtitle} // => 요기
                subtitleStyle={styles.subtitleStyle}
                rightElement={<Text>%</Text>}
                input={{
                  placeholder: "0",
                  keyboardType: "number-pad",
                  onChangeText: (text) =>
                    this.setInputData(text, data.stateKey),
                }}
                bottomDivider
              />
            );
          })}

          {!isRight() ? (
            <View>
              <Button
                title={
                  <Text>
                    7개 지표의 비중 총합이 100%를 만족해야 합니다. 다시
                    확인해주세요.
                  </Text>
                }
                titleStyle={styles.errorTitle}
                icon={
                  <MaterialIcons name="error-outline" size={18} color="red" />
                }
                type="outline"
                buttonStyle={styles.errorMsg}
              />
            </View>
          ) : (
            <View></View>
          )}

          <View style={styles.btnWrap}>
            <Button
              title=" Submit"
              buttonStyle={{
                backgroundColor: "#ffbc00",
              }}
              icon={<AntDesign name="checkcircleo" size={24} color="white" />}
              disabled={!isRight()}
              onPress={() => this.props.navigation.navigate("Home")}
            />
          </View>
        </ScrollView>
        {/* Modify content end */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  errorTitle: {
    fontSize: 8.5,
    color: "red",
    marginLeft: 4,
  },
  errorMsg: {
    marginTop: 20,
    marginHorizontal: 20,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
  },
  btnWrap: {
    marginHorizontal: 30,
    marginVertical: 20,
  },

  subtitleStyle: {
    width: 150,
  },
});
