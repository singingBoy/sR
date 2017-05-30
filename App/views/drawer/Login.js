import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class Login extends Component {
  static navigationOptions = {
    title: '登录',
    drawerIcon:({ tintColor }) => (
        <Image
            source={require('../../asset/images/house.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>登录页</Text>
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