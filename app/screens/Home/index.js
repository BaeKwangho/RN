import React, {Component} from 'react';
import {Container,Content} from 'native-base';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import List from '../Components/List';

export default class Home extends Component {
	constructor(props){
		super(props);

		this.state={
			curPage:{
                title:'메인화면',
                info:'home',
            }
		}
	}
	_navigate(){
		console.log(this.state);
		this.props.navigation.navigate('Review');
	}
	render() {
		return (
			<Container>
				<Content>
					<ScrollView>
						<View style={styles.banner}>
							<Text style={styles.text}> 여기는 배너공간</Text>
						</View>
						<List nav={this.props.navigation}/>
						<List nav={this.props.navigation}/>
						<List nav={this.props.navigation}/>
					</ScrollView>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	banner : {
		alignContent:"center",
		justifyContent:"center",
		backgroundColor: '#F5FCFF',
		margin:10,
		minHeight:250
	},
	text:{
		textAlign:"center"
	}


})
