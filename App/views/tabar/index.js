import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation';
import {StyleSheet,TouchableHighlight,Image} from 'react-native';
import TabNavigator from '../../routers/TabNavigator'

const Main = StackNavigator({
    Main: { screen: TabNavigator },
},{
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
            headerLeft: (
                <TouchableHighlight style={styles.btn} onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Image style={styles.tabIcon} source={require('../../asset/images/config.png')}/>
                </TouchableHighlight>
            ),
            headerRight: (
                <TouchableHighlight style={styles.btn} onPress={()=> {navigation.navigate('Search',{name:'主页跳转'})}}>
                    <Image style={styles.searchImage} source={require('../../asset/images/search.png')} />
                </TouchableHighlight>
            )
      }
    },
});

const styles = StyleSheet.create({
    btn: {flex:1,justifyContent:'center'},
    searchImage:{
        width: 20,
        height: 20,
        marginRight: 10,
    },
    tabIcon: {
        width: 32,
        height: 32,
        marginLeft: 10,
    },
});

export default Main;
