import React, {Component} from 'react';
import {Container} from 'native-base';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {View,Text} from 'react-native';


export default class Login extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
            <Container>
                <Head/>
				<View><Text>Login</Text></View>
				<Navi/>
            </Container>
		)
	}
}
