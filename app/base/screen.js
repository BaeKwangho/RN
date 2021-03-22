import React,{Component} from 'react';
import {Container} from 'native-base';
import Navi from './navi';
import Head from './head';
import Src from './src';

export default class Screen extends Component {
	render(){
		return (
			<Container>
					<Head/>
					<Src/>
					<Navi/>
			</Container>
		);
	}
} 
