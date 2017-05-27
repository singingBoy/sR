'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Image, Text ,Button} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

// import MainNavigator from './MainNavigator';
import Home from '../views/home';
import SlideMenu from '../views/SlideMenu';

/**
 * Top-level navigator. Renders the application UI.
 */
const DrawerRouter = DrawerNavigator(
    {
        // Drawer: {screen: MainNavigator},
        Home: {screen: Home},
    },{
        // drawerWidth :200,
        drawerPosition :'left',
        //自定义Drawer界面
        contentComponent: SlideMenu,
    }
);

export default DrawerRouter;