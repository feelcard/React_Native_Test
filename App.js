import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, TextPropTypes, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AnimatedSplash from "react-native-animated-splash-screen";// AnimatedSplash Component
import { Table, TableWrapper, Row } from 'react-native-table-component';// table Component
import { TextInput } from 'react-native-gesture-handler';
import { Modal } from 'react-native-paper';






class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['기업이름', '상품코드', 'PER', 'PBR', 'ROA', 'ROE', 'Head7', 'Head8', 'Head9'],
            widthArr: [81, 81, 55, 55, 55, 55, 55, 55, 55],
            setData: (num) => this.widthArr[0] = num,
            isVisible: false,
            overflow:'hidden'
        }
    }
    setVisibleTrue = () => { this.setState({ isVisible: true }) };

    setVisibleFalse = () => { this.setState({ isVisible: false }) };

    

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
            container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
            header: { height: 50, backgroundColor: '#ffb81c' },
            text: { textAlign: 'center', fontWeight: '100' },
            discription:{textAlign: 'left', fontSize: 25 , backgroundColor:'#5e514d',color:'white',padding:3,paddingHorizontal:20, position:'absolute',translateX:-20,translateY:10},
            dataWrapper: { marginTop: -1 },
            row: { height: 51.6, backgroundColor: '#ECF0F1' },
            modal: {
                // flex: 1,
                // alignItems: 'center',
                backgroundColor: '#ffffff',
                borderWidth:5,
                borderColor:'#ffffff',//#8D9093
                padding: 20,
                paddingHorizontal:10,
                borderStyle:'solid',
                borderColor:'#ffb81c',
                overflow:'visible'
            },
            test:{borderStyle:'solid',borderWidth:5,borderColor:'white',padding:0, marginHorizontal: 30, borderRadius: 2}

        });

        return (


            <View style={styles.container}>
                <View style={StyleSheet.create({
                    container: { flex: 1, paddingTop: 10, backgroundColor: '#fff' }
                }).container}>
                    <ScrollView Virtical={true} horizontal={true}>
                        <View>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                <Row header={true} setVisibleTrue={this.setVisibleTrue} data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                            </Table>
                            <ScrollView style={styles.dataWrapper}>
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
                    <Button

                        color='#89734c'
                        title='수치 설정하기'
                        onPress={() => this.props.navigation.navigate('Modify')} />

                </View>
                <Modal animationType={"slide" } transparent={false } onDismiss ={this.setVisibleFalse } 
                    visible={this.state.isVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>
                    {/*All views of Modal*/}
                    {/*Animation can be slide, slide, none*/}
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
                      
                        {/* <Text onPress={
                            this.setState({overflow:'visible'})
                        }>description9</Text> */}


                    </View>
                    </View>
                </Modal>
            </View>
        )


    }

}

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text> {this.props.name}</Text>
            </View>
        );
    }
}


class DetailsScreen extends React.Component {



    render() {
        // const state = this.state;
        const statusStyle = { flex: 1, flexDirection: 'row', flexWrap: 'wrap', height: 100 };
        const inputStyle = { fontSize: 35, textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 3 };
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView showsVerticalScrollIndicator={false} Virtical={true} >
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>PER       :       </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='PER'></TextInput>
                    </View>
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>PBR       :       </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='PBR'></TextInput>
                    </View>
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>ROA       :      </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='ROA'></TextInput>
                    </View>
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>ROA       :      </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='ROA'></TextInput>
                    </View>
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>ROA       :      </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='ROA'></TextInput>
                    </View>
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>ROA       :      </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='ROA'></TextInput>
                    </View>
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>ROA       :      </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='ROA'></TextInput>
                    </View>
                    <View style={statusStyle}>
                        <Text style={{ fontSize: 35 }}>ROA       :      </Text>
                        <TextInput style={inputStyle} keyboardType='number-pad' placeholder='ROA'></TextInput>
                    </View>
                </ScrollView>
                <Button
                    title='Submit'
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>

        );
    }


}

class DetailsScreen2 extends React.Component {



    render() {
        // const state = this.state;
        function submitFunction() {
            //this.props.navigation.navigate('Home') ;


        }

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput >DetailsScreen</TextInput>

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
        Details: {
            screen: DetailsScreen2,
            navigationOptions: {
                title: "Details",
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
                {console.disableYellowBox = true}
                <Container />

            </AnimatedSplash>
        )
    }
}


export default App