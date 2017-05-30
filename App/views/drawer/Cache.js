import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class Cache extends Component {
  static navigationOptions = {
    title: '缓存管理',
    drawerIcon:({ tintColor }) => (
        <Image
            source={require('../../asset/images/cache.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>缓存管理页</Text>
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
  tabIcon: {
    width: 32,
    height: 32,
  },
});