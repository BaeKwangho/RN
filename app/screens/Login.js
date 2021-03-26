import { Text } from 'native-base';
import React , {Component} from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {NavigationService} from '../common';

class Login extends Component{
	constructor(props){
		super(props)
	}

	
	render(){
		return(
			<View>
				<TouchableOpacity
					onPress={()=>NavigationService.navigate('TabNavigator',{
						screen:'TabNavigator',
						info:'AppLoginSuccess'})}>
					<Text>이동</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Login;