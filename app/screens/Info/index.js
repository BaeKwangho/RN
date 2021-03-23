import React, { Component } from 'react';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {Container,Content} from 'native-base';
import {View,Text} from 'react-native';

export default class Info extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Head/>
				<Content><Text>Info</Text></Content>
				<Navi/>
            </Container>
        );
    }
}
