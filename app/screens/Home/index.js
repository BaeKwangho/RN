import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import VolunList from '../Components/VolunList';
import {SearchBar} from 'react-native-elements';
import Swiper from 'react-native-swiper';

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

//const getOther = test();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: {
        title: '메인화면',
        info: 'home',
        value: '',
      },
    };
  }
  _navigate() {
    this.props.navigation.navigate('Review');
  }

  changeText(text) {
    this.setState({curPage: {value: text}});
  }

  render() {
    return (
      <Container>
        <Content>
          <ScrollView>
            <View style={styles.banner}>
              <Swiper
                autoplay={true}
                removeClippedSubviews={false}
                dot={<View></View>}
                activeDot={<View></View>}>
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
            <SearchBar
              platform="default"
              containerStyle={{backgroundColor: 'white'}}
              inputContainerStyle={{backgroundColor: '#F5FCFF'}}
              inputStyle={{}}
              leftIconContainerStyle={{}}
              rightIconContainerStyle={{}}
              loadingProps={{}}
              onChangeText={(newVal) => this.changeText(newVal)}
              onClearText={() => console.log(onClearText())}
              placeholder="Type query here..."
              placeholderTextColor="#888"
              round
              lightTheme
              cancelButtonTitle="Cancel"
              cancelButtonProps={{}}
              onCancel={() => console.log(onCancel())}
              value={this.state.curPage.value}
            />
            <VolunList navigation={this.props.navigation} volunObj={datalist} />
          </ScrollView>
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
    minHeight: 250,
    maxHeight: 250,
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
