import React, {Component, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackActions} from 'react-navigation';

/*
##########################################
########## must be modified ##############
##########################################
*/
const VolunList = (props) => {
  //원래 _w를 fetch에서 나눠주려고 했는데 object props로 넘겨주면서 자꾸 -W안에 담아서 안됨
  if (props.volunObj._W.constructor == Object){
    props.volunObj._W = [props.volunObj._W]
  }else{
    console.log('not executed');
  }
  const [volunObj, setVolun] = useState(props.volunObj._W);

  
  const listItems = volunObj.map((volun) => (
    <Volun nav={props.navigation} key={volun.progrmRegistNo} data={volun} />
  ));

  return <View>{listItems}</View>;
};

const Volun = (props) => {
  const [title, setTitle] = useState(props.data.progrmSj);
  const [auth, setAuth] = useState(props.data.nanmmbyNm);
  const [date, setDate] = useState(props.data.progrmBgnde);

  const pushReview = StackActions.push({
    routeName: 'Review',
    params: {
      title: title,
      auth: auth,
    },
  });

  const navigate = () => {
    props.nav.dispatch(pushReview);
  };

  return (
    <TouchableOpacity onPress={navigate}>
      <View style={styles.banner}>
        <Text>제목 : {title}</Text>
        <Text>글쓴이 : {auth}</Text>
        <Text>날짜 : {date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  banner: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
    minHeight: 250,
  },
});

export default VolunList;
