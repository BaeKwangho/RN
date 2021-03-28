import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';


const pushReview = StackActions.push({
	routeName:'Review',
	params:{
		title:'test',
		auth:'also'
	},
});

export default class List extends Component {
	constructor(props){
		super(props);

		this.state={
			title:"title",
			auth:"auth",
			date:"date",
		}

	}

	_navigate(){
		this.props.nav.dispatch(pushReview);
	}

	render(){
		return (
			<TouchableOpacity
				onPress={this._navigate.bind(this)}>
				<View style={styles.banner}>
					<Text>제목 : {this.state.title}</Text>
					<Text>글쓴이 : {this.state.auth}</Text>
					<Text>날짜 : {this.state.date}</Text>
				</View>
			</TouchableOpacity>
		)
	}

}

const styles = StyleSheet.create({
	banner : {
		alignContent:"center",
		justifyContent:"center",
		backgroundColor: '#F5FCFF',
		margin:10,
		minHeight:250
	},
});