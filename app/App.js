import React, { Component } from 'react';
import RootRouter from './Router';
import {StyleSheet,Platform,SafeAreaView} from 'react-native';

export default class App extends Component{
  render(){
    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <RootRouter/>
        </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      backgroundColor: 'white',
      //paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});