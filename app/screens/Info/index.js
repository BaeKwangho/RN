import React, { Component } from 'react';
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
				<Content>
                    <Text>Info</Text>
                </Content>
            </Container>
        );
    }
}
