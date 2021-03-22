import React, {Component} from 'react';
import Navigation from './screens';
import {NavigationService} from '../app/common';

export default class Router extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Navigation
				ref={navigatorRef => {
					NavigationService.setTopLevelNavigator(navigatorRef);
				}}
			/>
		)
	}
}