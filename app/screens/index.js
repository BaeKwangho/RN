import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Login from "./Login";
import Home from "./Home";
import Info from "./Info";
import Review from "./Components/Review";
import Maps from "./Maps";

const MapStack = createStackNavigator(
	{
		Maps,
	},
	{
		defaultNavigationOptions:({navigation}) =>({
			title: "Maps",
		}),
		initialRouteName: "Maps"
	}
);

const HomeStack = createStackNavigator(
  {
    Home,
	Review,
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
    }),
	initialRouteName: "Home",
	navigationOptions:({navigation})=>{
		let tabBarVisible = true;
		if(navigation.state.index > 0){
			tabBarVisible = false;
		}

		return{
			tabBarVisible,
		};
	}
  }
);
const InfoStack = createStackNavigator(
  {
    Info,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Info",
    }),
  }
);

const TabNavigator = createBottomTabNavigator(
  {
	Maps: MapStack,
	Home: HomeStack,
    Info: InfoStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = "▲";

        if (routeName === "Home") {
          icon = "🌈";
        } else if (routeName === "Info") {
          icon = "🌙";
        }

        // can use react-native-vector-icons
        // <Icon name={iconName} size={iconSize} color={iconColor} />
        return (
          <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
            {icon}
          </Text>
        );
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "#46c3ad",
      inactiveTintColor: "#888",
    },
	initialRouteName: "Home"
  }
);

const AppStack = createStackNavigator({
  Login: Login,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
});

export default createAppContainer(AppStack);