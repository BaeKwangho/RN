import { Container, Content } from 'native-base';
import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import List from '../Components/List';

export default class Review extends Component{
	constructor(props){
		super(props);
		
	}

	render(){
		const {navigation} = this.props;

		return(
			<Container>
				<Content>
					<ScrollView>
						<View>
							<Text>{JSON.stringify(navigation.getParam('title'))}</Text>
							<Text>{JSON.stringify(navigation.getParam('auth'))}</Text>
							<List nav={this.props.navigation}></List>
						</View>
					</ScrollView>
				</Content>
			</Container>
		);
	}
}