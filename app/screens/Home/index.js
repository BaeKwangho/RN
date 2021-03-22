import React, {Component} from 'react';
import {Container} from 'native-base';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {View,Text} from 'react-native';


export default class Home extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View>
                <Head/>
				<View><Text>Home</Text></View>
				<Navi/>
			</View>
		)
	}
}
