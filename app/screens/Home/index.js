import React, {Component} from 'react';
import {Container,Content} from 'native-base';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import List from '../Components/List';

const datalist = () => fetch('http://edge.cafe24app.com/datelist',{
	method:'GET',
	headers: {
		Accept:'application/json',
		'Content-Type':'application/json'
	}
}).then((response)=>{
	return response.json();
})

const test = async() => {
	console.log(await datalist());
	return await datalist();
}

const getOther = test();



		
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
		getOther;
		return (
			<Container>
				<Content>
					<ScrollView>
						<Text>
							
						</Text>
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
