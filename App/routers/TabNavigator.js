'use strict';
import { TabNavigator, TabBarBottom, } from 'react-navigation';

import Home from '../views/tabar/Home';
import Update from '../views/tabar/Update';
import Filter from '../views/tabar/Filter';

/**
 * Screen with tabs shown on app startup.
 */
const HomeTabNavigator = TabNavigator(
    {
        Home: {screen: Home,},
        Update: {screen: Update,},
        Filter: {screen: Filter,},
    }
    ,{
        initialRouteName: 'Home',
        tabBarComponent: TabBarBottom,
        order:['Filter','Home','Update',],
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazyLoad: true,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#01c497', //TODO tabBar选中颜色
            inactiveTintColor: '#bbb',
            style: {
                backgroundColor: '#fff',
            },
        },
    },
);

export default HomeTabNavigator;