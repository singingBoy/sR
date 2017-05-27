import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation';
import {StyleSheet,TouchableHighlight,Image} from 'react-native';
import Home from './home';
import Search from '../search/search';

const Main = StackNavigator({
    Home: { screen: Home },
    Search: { screen: Search },
    // Profile: {
    //     path: 'people/:name',
    //     screen: MyProfileScreen,
    // },
},{
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'screen',
    cardStyle: {
        backgroundColor: '#fff',
    },
    onTransitionStart: (navigation)=>{/*页面跳转开始时候调用*/},
    navigationOptions: (props)=>{
      const {navigation} = props;
      return{
            headerStyle :{
                backgroundColor: '#01c497',//TODO titleBar背景色
            },
            headerTitleStyle: {
                color:'#fff'
            },
            headerRight: (
                <TouchableHighlight onPress={()=> {navigation.navigate('Search',{name:'主页跳转'})}}>
                  <Image style={{width: 20, height: 20,}} source={require('../../asset/images/search.png')} />
                </TouchableHighlight>
            )
      }
    },
});

const styles = StyleSheet.create({
    searchImage:{
        width: 20,
        height: 20,
    },
});

export default Main;
