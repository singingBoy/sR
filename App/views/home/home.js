import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home2',
  };

  onPress = ()=>{
    // this.props.navigation.navigate('Search', {
    //   name: 'Home',
    // });
  };

  render() {
    console.log('home',this.props);
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>书架</Text>
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