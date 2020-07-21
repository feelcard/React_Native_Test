import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AnimatedSplash from "react-native-animated-splash-screen";// AnimatedSplash Component
import { Table, TableWrapper, Row, Col} from 'react-native-table-component';// table Component
import { TextInput } from 'react-native-paper';
import { Modal } from 'react-native-paper';

export class Detail extends React.Component {



    render() {
        // const state = this.state;
        function submitFunction() {
            //this.props.navigation.navigate('Home') ;


        }

        return (
            <View>
            <View style={{ flex: 1, alignItems: 'center' }}> 
                <Text>기업 이름</Text>
                <Text>종목 코드</Text>
                <Text>종가</Text>
                <Button title="Save CilpBoard"></Button>
                </View>
                <ScrollView>
                <View style={{ flex: 1, alignItems: 'center' }}>
                <Text>기업 이름</Text>
                <Text>기업 이름</Text>
                <Text>기업 이름</Text>
                <Text>기업 이름</Text>
                <Text>기업 이름</Text>
                <Text>기업 이름</Text>
                <Text>기업 이름</Text>     
                </View>       
                </ScrollView>
            
            </View>
            
        );
    }


}