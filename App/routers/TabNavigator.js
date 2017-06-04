'use strict';
import { TabNavigator, TabBarBottom, } from 'react-navigation';

import Home from '../views/tabar/Home';
import BookMarks from '../views/tabar/BookMarks';
import Filter from '../views/tabar/Filter';

/**
 * Screen with tabs shown on app startup.
 */
const HomeTabNavigator = TabNavigator(
    {
        Home: {screen: Home,},
        BookMarks: {screen: BookMarks,},
        Filter: {screen: Filter,},
    }
    ,{
        initialRouteName: 'Home',
        tabBarComponent: TabBarBottom,
        order:['Filter','Home','BookMarks',],
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