import { Container, Content } from 'native-base';
import React, {Component} from 'react';
import {View} from 'react-native';
import Head from '../../base/head';
import Navi from '../../base/navi';

export default class Review extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container>
				<Head/>
				<Content>
					
				</Content>
				<Navi/>
			</Container>
		);
	}
}