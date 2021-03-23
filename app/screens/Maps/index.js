import React, {Component} from 'react';
import {Container,Content} from 'native-base';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {View,Text} from 'react-native';


export default class Maps extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
            <Container>
                <Head/>
				<Content><Text>Maps</Text></Content>
				<Navi/>
            </Container>
		)
	}
}
