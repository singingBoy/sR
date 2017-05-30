import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class About extends Component {
  static navigationOptions = {
    title: '关于',
    drawerIcon:({ tintColor }) => (
      <Image
      source={require('../../asset/images/about.png')}
      style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  onPress = ()=>{
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>关于页</Text>
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