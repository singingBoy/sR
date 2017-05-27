import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class Search extends Component {
  static navigationOptions = {
    title: 'Filter',
  };

  onPress = ()=>{
    this.props.navigation.navigate('Home', {
      name: 'Search',
    });
  };

  render() {
    console.log('search',this.props);
    return (
      <View style={styles.container}>
        <Text>分类页</Text>
        <Text onPress={this.onPress}>Go to Detail</Text>
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