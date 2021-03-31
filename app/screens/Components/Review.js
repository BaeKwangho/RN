import {Container, Content} from 'native-base';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import VolunList from './VolunList';

const datalist = fetch('http://edge.cafe24app.com/datelist', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => {
    return json.items.item;
  });

export default class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <Content>
          <ScrollView>
            <View style={styles.banner}>
              <Swiper>
                <View style={styles.slide1}>
                  <Text>gd</Text>
                </View>
                <View style={styles.slide2}>
                  <Text>gd</Text>
                </View>
                <View style={styles.slide3}>
                  <Text>gd</Text>
                </View>
              </Swiper>
            </View>
            <View>
              <Text>{JSON.stringify(navigation.getParam('title'))}</Text>
              <Text>{JSON.stringify(navigation.getParam('auth'))}</Text>
            </View>
          </ScrollView>
          <VolunList navigation={this.props.navigation} volunObj={datalist} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    height: 250,
  },
  text: {
    textAlign: 'center',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
});
