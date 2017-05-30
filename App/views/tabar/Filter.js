import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import {aType, bType} from '../../asset/data/data';

const appWidth = Dimensions.get('window').width;

class Filter extends Component {
  static navigationOptions = {
    title: '分类',
    tabBarIcon: ({ focused, tintColor }) => (
        <Image
            resizeMode="center"
            style={[styles.icon, { tintColor: focused ? tintColor : '#bbb' }]}
            source={require('../../asset/images/filter.png')}
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
  // avatar={{uri:u.avatar}}
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderCard(aType,'猜你喜欢')}
        {this.renderCard(bType,'类型分类')}
      </ScrollView>
    )
  }

  renderCard(items, title){
    return(
        <Card title={title}>
          {
            this.renderRow(items)
          }
        </Card>
    )
  }

  renderRow(options){
    const rowNum = 3;
    const rows = Number.parseInt(options.length / rowNum) + 1;
    let rowList = [];
    for (let r=0; r<rows; r++){
      let rowOptions = options.slice(r*rowNum, (r+1)*rowNum);
      rowList.push(
          <View key={r} style={{flexDirection:'row',marginBottom: 20}}>
            {
              rowOptions.map((option,i) => (
                  <TouchableOpacity style={[styles.item, {width: (appWidth-60)/rowNum}]} key={i}>
                    {this.renderItem(option)}
                  </TouchableOpacity>
              ))
            }
          </View>
      )
    }
    return rowList;
  }

  renderItem({name,icon}){
    return(
        <View key={name} style={{alignItems:'center',justifyContent:'center'}}>
          <Image style={styles.typeIcon} source={icon}/>
          <Text>{name}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:'#eee'},
  typeIcon: {width:40, height: 40},
  icon: {
    marginTop: 3,
    width: 32,
    height: 29,
  },
});

export default Filter
