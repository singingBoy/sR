import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation';
import Search from './search';

const Main = StackNavigator({
    Search: { screen: Search },
},{
    initialRouteName: 'Search',
    mode: 'modal',
    headerMode: 'screen',
    cardStyle: {
        backgroundColor: 'rgba(230, 229, 229, 0.5)',
    },
    onTransitionStart: (navigation)=>{/*页面跳转开始时候调用*/},
    // navigationOptions: {
    //     header: {
    //         style:{
    //             backgroundColor: '#01c497',//TODO titleBar背景色
    //         }
    //     }
    // },
});

export default Main;