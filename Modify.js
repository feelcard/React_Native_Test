import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, Button, ScrollView, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AnimatedSplash from "react-native-animated-splash-screen";// AnimatedSplash Component
import { Table, TableWrapper, Row, Col} from 'react-native-table-component';// table Component
import { TextInput } from 'react-native-paper';
import { Modal } from 'react-native-paper';



export class Modify extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          per:1,
          pbr:1,
          roa:1,
        }
        this.onScroll = this.onScroll.bind(this)
      }
      
      onScroll(event){
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.state.offset ? currentOffset+' down '+this.state.offset  : currentOffset+' up '+this.state.offset;
        this.setState({
              offset : currentOffset
            }),
        Alert.alert(direction);
      }


    render() {
        // const state = this.state;
        const statusStyle = { flex: 1, flexDirection: 'row', flexWrap: 'wrap', height: 100 };
        const inputStyle = { fontSize: 35, textAlign: 'center'};
        const semiheader ={flexDirection:'row', flexWrap:'wrap',padding:15};
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'white'}}>
                <ScrollView showsVerticalScrollIndicator={false} Virtical={true}>
                    
                    
                        <View style={semiheader}>
                            <View>
                            <Text>PER:{this.state.per}</Text>
                            <TextInput mode='outlined' style={inputStyle} keyboardType='number-pad' placeholder='PER' onChangeText={per =>{per==''?per=0:null; this.setState({per});}} defaultValue={this.state.per}></TextInput>
                            </View>
                            <View>
                            <Text>PBR:{this.state.pbr}</Text>
                            <TextInput mode='outlined' style={inputStyle} keyboardType='number-pad' placeholder='PBR' onChangeText={pbr =>{pbr==''?pbr=0:null; this.setState({pbr});}} defaultValue={this.state.pbr}></TextInput>
                            </View>
                            <View>
                            <Text>ROA:{this.state.roa}</Text>
                            <TextInput mode='outlined' style={inputStyle} keyboardType='number-pad' placeholder='ROA' onChangeText={roa =>{roa==''?roa=0:null; this.setState({roa});}} defaultValue={this.state.roa}></TextInput>
                            </View>
                        </View>
                        
                        <View style={semiheader}>
                            <View>
                            <Text>PER : </Text>
                            <TextInput mode='outlined' style={inputStyle} keyboardType='number-pad' placeholder='PER'></TextInput>
                            </View>
                            <View>
                            <Text>PER</Text>
                            <TextInput mode='outlined' style={inputStyle} keyboardType='number-pad' placeholder='PER'></TextInput>
                            </View>
                            <View>
                            <Text>PER</Text>
                            <TextInput mode='outlined' style={inputStyle} keyboardType='number-pad' placeholder='PER'></TextInput>
                            </View>
                        </View>
                        
                        <View >
                        <Text>ROA:{this.state.roa}</Text>
                            <TextInput mode='outlined' style={{ fontSize: 35, textAlign: 'center'}} keyboardType='number-pad' placeholder='ROA' onChangeText={roa =>{roa==''?roa=0:null; this.setState({roa});}} defaultValue={this.state.roa}></TextInput>

                        </View>
                        
                </ScrollView>
                <Button
                    title='Submit'
                    onPress={() => this.props.navigation.navigate('Home')} />

            </View>

        );
    }


}

