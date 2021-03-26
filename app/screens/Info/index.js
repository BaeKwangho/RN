import React, { Component } from 'react';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {Container,Content} from 'native-base';
import {View,Text} from 'react-native';

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state={
			curPage:{
                title:'정보보기',
                info:'info',
            }
		}
    }
    render() {
        return (
            <Container>
                <Head title={this.state.curPage.title}/>
				<Content><Text>Info</Text></Content>
				<Navi info={this.state.curPage.info}/>
            </Container>
        );
    }
}
