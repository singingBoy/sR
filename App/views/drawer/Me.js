import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class Me extends Component {
  static navigationOptions = {
    title: '我的',
    drawerIcon:({ tintColor }) => (
        <Image
            source={require('../../asset/images/me.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>我的页</Text>
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