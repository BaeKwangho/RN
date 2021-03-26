import React, { Component } from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { Footer, FooterTab, Text, Icon, Button, Badge} from 'native-base';
import {NavigationService} from '../common';

export default class Navi extends Component {
	constructor(props){
		super(props);
		this.state={info:props.info}
	}

	render() {
		return (
			<Footer>
				<FooterTab>
					{/*badge 추가 가능*/}
					<TouchableOpacity
						onPress={()=>NavigationService.navigate('Maps',{
							screen:'Maps',
							info:'Maps'
						})}>
						{/*<Badge><Text>2</Text></Badge>*/}
						<Icon type="AntDesign" name="windows"/>
						<Text>Maps</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={()=> {
							NavigationService.navigate('Home',{
								screen:'Home',
								info:'Home'});
						}}>
						{/*<Badge></Badge>*/}
						<Icon type="AntDesign" name='home'/>
						<Text>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={()=> {
							NavigationService.navigate('Info',{
								screen:'Info',
								info:'Info'});
						}}>
						{/*<Badge><Text></Text></Badge>*/}
						<Icon type="AntDesign" name="info"/>
						<Text>Info</Text>
					</TouchableOpacity>
				</FooterTab>
			</Footer>
		);
	}
}
