import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Login';
import Info from './Info';
import Home from './Home';

/*
const AuthStack = createStackNavigator(
	{
		Login: {screen:Login},
		Info: {screen:Info},
		Home: {screen:Home},
	},
	{
		initialRouteName:'Home'
	}
);

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
		Login: {screen:Login},
		Info: {screen:Info},
		Home: {screen:Home},
	},
	{
		initialRouteName:'Home'
	}
)


export default createAppContainer(AppNavigator);