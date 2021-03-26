import React, {Component} from 'react';
import {Container,Content} from 'native-base';
import Head from '../../base/head';
import Navi from '../../base/navi';
import {View,Text} from 'react-native';


export default class Maps extends Component {
	constructor(props){
		super(props);

		this.state={
			curPage:{
				title:'주변정보',
				info:'maps',
			}
		}
	}

	render() {
		return (
            <Container>
                <Head title={this.state.curPage.title}/>
				<Content><Text>Maps</Text></Content>
				<Navi info={this.state.curPage.info}/>
            </Container>
		)
	}
}
