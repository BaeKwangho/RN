import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const avatarIcon = () => {
  return (
    <Icon
      color="#0CC"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="devices"
      onLongPress={() => console.log('onLongPress()')}
      onPress={() => console.log('onPress()')}
      size={40}
      type="material"
    />
  );
};

const menuList = ['Information', 'Review', 'Setting'];
const row = (menuTitle) => {
  return (
    <TouchableOpacity key={menuTitle}>
      <ListItem bottomDivider>
        <Text>{menuTitle}</Text>
      </ListItem>
    </TouchableOpacity>
  );
};

const AvatarComp = () => {
  return (
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{backgroundColor: '#BDBDBD'}}
      icon={avatarIcon}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert('onLongPress')}
      onPress={() => alert('onPress')}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="large"
      title="P"
      titleStyle={{}}
    />
  );
};

const Info = (props) => {
  return (
    <Container>
      <Content>
        <ScrollView>
          <View style={styles.personInfo}>
            <View style={styles.avatarInfo}>{AvatarComp()}</View>
            <View style={styles.userInfo}>
              <Text style={{fontSize: 30, color: 'white'}}>광광</Text>
              <Text style={{marginTop: 5}}>someInformation</Text>
            </View>
          </View>
          <View style={styles.menu}>
            {menuList.map((menuTitle) => row(menuTitle))}
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Info;

const styles = StyleSheet.create({
  personInfo: {
    backgroundColor: '#92BBD9',
    height: 150,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    flex: 0.5,
    margin: 10,
  },
  avatarInfo: {
    flex: 0.3,
    margin: 10,
  },
  userInfo: {
    flex: 0.7,
    margin: 10,
  },
});
