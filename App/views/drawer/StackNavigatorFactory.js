import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation';
import {StyleSheet,TouchableHighlight,Image,View} from 'react-native';
import { Icon } from 'react-native-elements'

const factory = (name, screen)=>{
      return  StackNavigator({
          [name]: { screen: screen },
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
                          <Image style={styles.tabIcon} source={require('../../asset/images/back-icon.png')}/>
                      </TouchableHighlight>
                  )
              }
          },
      });
};

export default factory;

const styles = StyleSheet.create({
    btn: {flex:1,justifyContent:'center'},
    tabIcon: {
        width: 20,
        height: 15,
        marginLeft: 10,
        marginRight:20,
    },
});
