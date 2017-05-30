'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Image, Text ,Button} from 'react-native'
import { DrawerNavigator } from 'react-navigation'

// import MainNavigator from './MainNavigator';
import Home from '../views/tabar'
import About from '../views/drawer/About'
import Cache from '../views/drawer/Cache'
import FontManager from '../views/drawer/FontManager'
import Config from '../views/drawer/Config'
import Me from '../views/drawer/Me'
import Login from '../views/drawer/Login'
import Search from '../views/search/search';

import SlideMenu from '../views/drawer/SlideMenu'
import factory from '../views/drawer/StackNavigatorFactory'

/**
 * Top-level navigator. Renders the application UI.
 */
const DrawerRouter = DrawerNavigator(
    {
        // Drawer: {screen: MainNavigator},
        Home: { screen: Home },
        About: { screen: factory('About',About )},
        Cache: { screen: factory('Cache',Cache )},
        FontManager: { screen: factory('FontManager',FontManager )},
        Config: { screen: factory('Config',Config )},
        Me: { screen: factory('Me',Me )},
        Login: { screen: factory('Login',Login )},
        Search: { screen: factory('Search',Search )},
    },{
        // drawerWidth :200,
        drawerPosition :'left',
        //自定义Drawer界面
        contentComponent: props => <SlideMenu exclude={["Login","Search"]} {...props}/>,
        contentOptions: {
            activeTintColor: '#01c497',
            activeBackgroundColor: '#fff',
            style: {
                marginVertical: 0,
            }
        }
    }
);

export default DrawerRouter;