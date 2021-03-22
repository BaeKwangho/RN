import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text, Icon, Badge} from 'native-base';
import {NavigationService} from '../common';

export default class Navi extends Component {
	render() {
		return (
			<Footer>
				<FooterTab>
					<Button badge vertical
						onPress={()=>NavigationService.navigate('Login',{
							screen:'Login',
							info:'Login'
						})}>
						<Badge><Text>2</Text></Badge>
						<Icon type="AntDesign" name="windows"/>
						<Text>Maps</Text>
					</Button>
					<Button badge active vertical
						onPress={()=>NavigationService.navigate('Home',{
							screen:'Home',
							info:'Home'
						})}>
						<Badge></Badge>
						<Icon type="AntDesign" name='home'/>
						<Text>Home</Text>
					</Button>
					<Button badge vertical
						onPress={()=>NavigationService.navigate('Info',{
							screen:'Info',
							info:'Info'
						})}>
						<Badge><Text></Text></Badge>
						<Icon type="AntDesign" name="info"/>
						<Text>Info</Text>
					</Button>
				</FooterTab>
			</Footer>
		);
	}
}