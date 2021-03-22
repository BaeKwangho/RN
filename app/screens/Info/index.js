import React, { Component } from 'react';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {Container} from 'native-base';
import {View,Text} from 'react-native';

export default class Info extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Head/>
				<View><Text>Info</Text></View>
				<Navi/>
            </Container>
        );
    }
}
