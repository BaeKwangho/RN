import React, {Component} from 'react';
import { Header, Body, Title} from 'native-base';
import {StyleSheet} from 'react-native';

export default class Head extends Component{
	constructor(props){
		super(props);

		this.state={
			isBackPage : false
		}
	}

	isToggle = () => {
		this.setState(isBackpage = !isBackpage)
	};
	

	render() {
		return (
			<Header>{/*
				<Left>
					
					<Button isBackPage = {this.state.isBackPage}>
						<Icon name="arrow-back"/>
					</Button>
					
				</Left>*/}
				<Body>
					<Title>테스트</Title>
				</Body>
			</Header>
		);
	}
}

const styles=StyleSheet.create({
	center:{
		textAlign:"center"
	}
})