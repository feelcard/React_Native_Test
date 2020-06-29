import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , ToastAndroid,Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const state= {    isLoaded : false }
export default function App() {
 


  const showToast = () => {
    ToastAndroid.show("데이터를 불러오고 있습니다....", ToastAndroid.SHORT,ToastAndroid.CENTER);
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.doItQuant}>   Do</Text>
      <Text style ={styles.doItQuant}>   It</Text>
      <Text style ={styles.doItQuant}>   Quant!</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Image style={{width: 350, height: 50, marginBottom: 20,marginLeft:5}} source={{ uri: 'https://l.incru.it/2009/11/KBDataSystems_CI_kor.jpg'} } />
      <Button title="Toast Test" onPress={() => showToast()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc22',
    alignItems: "flex-start",
    justifyContent: 'center',
    margin:0
  },
  doItQuant :{
    fontSize:50
  }
});
