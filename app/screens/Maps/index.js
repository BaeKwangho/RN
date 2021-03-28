import React, {Component} from 'react';
import {Container,Content} from 'native-base';
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
				<Content><Text>Maps</Text></Content>
            </Container>
		)
	}
}
