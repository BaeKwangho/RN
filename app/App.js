import React, { Component } from 'react';
import {StyleSheet,Platform,SafeAreaView} from 'react-native';
import AppStack from './screens';

export default class App extends Component{
  render(){
    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <AppStack />
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