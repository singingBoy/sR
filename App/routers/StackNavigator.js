import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation';
import {StyleSheet,TouchableHighlight,Image,View, Text} from 'react-native';
import About from '../views/drawer/About'
import Cache from '../views/drawer/Cache'
import FontManager from '../views/drawer/FontManager'
import Config from '../views/drawer/Config'
import Me from '../views/drawer/Me'
import Login from '../views/drawer/Login'
import Search from '../views/search/search';
import Welcome from '../views/drawer/Welcome';

import Home from './TabNavigator'
// import Home from '../views/tabar'

const stackNavigator =  StackNavigator({
        Home: { screen: Home },
        // About: { screen: About },
        // Cache: { screen: Cache },
        // FontManager: { screen: FontManager },
        // Config: { screen: Config },
        // Me: { screen: Me },
        // Login: { screen: Login },

        Search: { screen: Search },
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
                      <TouchableHighlight style={styles.btn} onPress={()=>navigation.goBack(null)}>
                          <Image style={styles.tabIcon} source={require('../asset/images/back-icon.png')}/>
                      </TouchableHighlight>
                  ),
              }
          },
      });


export default stackNavigator;

const styles = StyleSheet.create({
    btn: {flex:1,justifyContent:'center'},
    tabIcon: {
        width: 20,
        height: 15,
        marginLeft: 10,
        marginRight:20,
    },
});
