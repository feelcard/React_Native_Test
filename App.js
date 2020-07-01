import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AnimatedSplash from "react-native-animated-splash-screen";// AnimatedSplash Component
import { Table, TableWrapper, Row } from 'react-native-table-component';// table Component

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['기업이름', '상품코드', 'PER', 'PBR', 'ROA', 'ROE', 'Head7', 'Head8', 'Head9'],
            widthArr: [80, 80, 60, 60, 60, 60, 60, 60, 60]
        }
    }

    render() {
        const state = this.state;
        const tableData = [];
        for (let i = 0; i < 10; i += 1) {
            const rowData = [];
            for (let j = 0; j < 9; j += 1) {
                rowData.push(`${i}${j}`);
            }
            tableData.push(rowData);
        }
        const styles = StyleSheet.create({
            container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
            header: { height: 50, backgroundColor: '#537791' },
            text: { textAlign: 'center', fontWeight: '100' },
            dataWrapper: { marginTop: -1 },
            row: { height: 51.6, backgroundColor: '#E7E6E1' }
        });

        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}>
                    <View>
                        <Text style={{ fontSize: 30 }}>DO IT Quant!</Text>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }} heightArr={[30]}>
                                {
                                    tableData.map((rowData, index) => (
                                        <Row
                                            key={index}
                                            data={rowData}
                                            widthArr={state.widthArr}
                                            style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                            textStyle={styles.text}
                                        />
                                    ))
                                }
                            </Table>
                        </ScrollView>
                        <Button

                            color='#89734c'
                            title='수치 설정하기'
                            onPress={() => this.props.navigation.navigate('Modify')} />
                    </View>
                </ScrollView>
            </View>
        )


    }

}


class DetailsScreen extends React.Component {



    render() {
   
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               
                <Button
                    title='Submit'
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}


const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        Modify: {
            screen: DetailsScreen,
            navigationOptions: {
                title: "Modify",
            },
        },

    },
    {
        initialRouteName: "Home",
    }
)

const Container = createAppContainer(AppNavigator)



class App extends React.Component {
    state = {
        isLoaded: false,
    }


    async componentDidMount() {
        await setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 2000);


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

            >

                <Container />
            </AnimatedSplash>
        )
    }
}

export default App