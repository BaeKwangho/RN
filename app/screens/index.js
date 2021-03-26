import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Maps from './Maps';
import Info from './Info';
import Home from './Home';
import Review from './Home/Review';
import Login from './Login';


const HomeStack = createStackNavigator(
	{
		Review:{
			screen:Review,
			navigationOptions: ({navigation}) => ({
				headerShown:false,
			}),},
		Home:{
			screen:Home,
			navigationOptions: ({navigation}) => ({
				headerShown:false,
			}),
		},
	},
	{
		initialRouteName:'Home',
	},
	
);
/*
const AppNavigator = createSwitchNavigator(
	{
		Auth: AuthStack
	},
	{
		initialRouteName:'Auth'
	}
)
*/

const AppNavigator = createSwitchNavigator(
	{
		Maps: {screen:Maps},
		Info: {screen:Info},
		HomeStack:{screen:HomeStack},
	},
	{
		initialRouteName:'HomeStack'
	}
)

const AppStack = createStackNavigator(
	{
		Login : Login,
		TabNavigator:{
			screen: AppNavigator,
			navigationOptions: ({navigation}) => ({
				headerShown:false,
			}),
		},
	}
);

export default createAppContainer(AppStack);