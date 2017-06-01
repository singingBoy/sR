import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'

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

  cleanCache=()=>{
      storage.remove({key:'dailyBooks'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
            raised
            onPress={this.cleanCache}
            icon={{name: 'cached'}}
            title='清除缓存' />
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