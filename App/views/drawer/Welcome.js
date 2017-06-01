import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { queryDaily } from '../../services';

class Welcome extends Component {

  componentDidMount(){
      this.initData();
  }

  //初始化数据
  initData() {
    //初始推荐小说数据
    storage.load({key: 'dailyBooks'}).then(data => {
        console.dir(data);
        global.dailyBooks = data;
        this.props.navigation.navigate('Home');
    }).catch( err=> queryDaily());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>欢迎！！！</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ddd',
      opacity: 0.5
  },
});

export default Welcome
