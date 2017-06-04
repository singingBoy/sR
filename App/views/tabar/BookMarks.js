import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class BookMarks extends Component {
  static navigationOptions = {
    title: '书架',
    tabBarIcon: ({ focused, tintColor }) => (
        <Image
            resizeMode="center"
            style={[styles.icon, { tintColor: focused ? tintColor : '#bbb' }]}
            source={require('../../asset/images/bookMarks.png')}
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
        <Text>我的书架</Text>
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
    width: 32,
    height: 32,
  },
});

export default BookMarks
