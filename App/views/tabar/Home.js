import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon : ({focused, tintColor }) => (
        <Image
            style={[styles.icon, { tintColor: focused ? tintColor : '#bbb' }]}
          source={require('../../asset/images/house.png')}
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

  onPress = ()=>{
    this.props.navigation.navigate('Login', {
      name: 'Home',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>首页</Text>
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

export default Home
