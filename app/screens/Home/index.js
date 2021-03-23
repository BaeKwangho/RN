import React, {Component} from 'react';
import {Container,Content} from 'native-base';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {View,Text,ScrollView,StyleSheet} from 'react-native';

class List extends Component {
	constructor(props){
		super(props);

		this.state={
			title:"title",
			auth:"auth",
			date:"date",
		}
	}

	render(){
		return (
			<View style={styles.banner}>
				<Text>제목 : {this.state.title}</Text>
				<Text>글쓴이 : {this.state.auth}</Text>
				<Text>날짜 : {this.state.date}</Text>
			</View>
		)
	}

}

export default class Home extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Container>
                <Head/>
				<Content>
					<ScrollView>
						<View style={styles.banner}>
							<Text style={styles.text}> 여기는 배너공간</Text>
						</View>
						<List/>
						<List/>
						<List/>
					</ScrollView>
				</Content>
				<Navi/>
			</Container>
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
	text:{
		textAlign:"center"
	}


})
