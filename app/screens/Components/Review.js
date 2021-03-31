import {Container, Content} from 'native-base';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ListItems from '../Components/List';

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
            <View>
              <Text>{JSON.stringify(navigation.getParam('title'))}</Text>
              <Text>{JSON.stringify(navigation.getParam('auth'))}</Text>
            </View>
          </ScrollView>
          <ListItems navigation={this.props.navigation} volunObj={datalist} />
        </Content>
      </Container>
    );
  }
}
