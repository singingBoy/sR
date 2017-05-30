import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class FontManager extends Component {
  static navigationOptions = {
    title: '字体管理',
    drawerIcon:({ tintColor }) => (
        <Image
            source={require('../../asset/images/fonts.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>字体管理页</Text>
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