import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class Search extends Component {
  static navigationOptions = {
    title: '分类',
    tabBarIcon: ({ focused, tintColor }) => (
        <Image
            resizeMode="center"
            style={[styles.icon, { tintColor: focused ? tintColor : '#bbb' }]}
            source={require('../../asset/images/filter.png')}
        />
    ),
    drawerLabel: '首页',
    drawerIcon:({ tintColor }) => (
        <Image
            source={require('../../asset/images/house.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>分类页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 3,
    width: 32,
    height: 29,
  },
});

export default Search
