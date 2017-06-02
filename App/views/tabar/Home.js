import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Dimensions, ScrollView } from 'react-native'
import { Carousel, WhiteSpace, WingBlank, List } from 'antd-mobile';
import {aType, bType} from '../../asset/data/data';

const appWidth = Dimensions.get('window').width;
const bg = [
    require('../../asset/images/bg/bb.png'),
    require('../../asset/images/bg/ds.png'),
    require('../../asset/images/bg/xh.png'),
    require('../../asset/images/bg/xk.png'),
    require('../../asset/images/bg/ls.png'),
];

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

  constructor(props){
    super(props);
    this.state = {
      dailyBooks: global.dailyBooks,
    }
  }

  onPress = ()=>{
    this.props.navigation.navigate('Login', {
      name: 'Home',
    });
  };

  /*轮播切换调用*/
  onselectedIndexChange(index) {}

  render() {
    return (
      <ScrollView style={styles.homeContainer}>
        <View style={{height:150}}>
          <Carousel
              style={styles.wrapper}
              autoplayTimeout={2}
              selectedIndex={2}
              autoplay
              infinite
              afterChange={this.onselectedIndexChange}
          >
              {this.renderCarousel()}
          </Carousel>
        </View>
          {this.renderCard1()}
      </ScrollView>
    )
  }

  renderCarousel(){
    return aType.map( (type, index)=>
        (
            <Image key={index} style={styles.carousel} source={bg[index]}>
                <View style={{justifyContent:'center', alignItems: 'center', width: appWidth}}>
                    <Text style={styles.text}>{type.name}</Text>
                </View>
            </Image>
        )
    )
  }

  renderCard1(){
      const header = (
          <View style={{flexDirection:'row',justifyContent:'center',marginHorizontal:20,marginVertical:20,}}>
              <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Image style={{width:20,height:20}} source={require('../../asset/images/type/type10.png')}/>
                  <Text>热门小说</Text>
              </View>
              <View style={{position:'absolute',right: 10}}>
                  <Text>换一换</Text>
              </View>

          </View>
      );
      return(
          <View>
              <List renderHeader={() => header}>
                  <List.Item
                      extra="10:30"
                      align="top"
                      thumb={<Image style={{width:80,height:80}} source={{uri:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"}}/>}
                      multipleLine >
                          标题文字
                          <List.Item.Brief style={{marginVertical:10}}>副标题</List.Item.Brief>
                  </List.Item>
                  <List.Item
                      extra="10:30"
                      align="top"
                      thumb={<Image style={{width:80,height:80}} source={{uri:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"}}/>}
                      multipleLine >
                      标题文字
                      <List.Item.Brief style={{marginVertical:10}}>副标题</List.Item.Brief>
                  </List.Item>
              </List>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  homeContainer: {flex: 1, backgroundColor: '#f8f8f8'},
  icon: {width: 32, height: 32,},
  wrapper: {backgroundColor: '#fff', height: 150,},
  carousel: {flexDirection:'row', height: 150,},
  text: {color: '#fff', fontSize: 36,},
});

export default Home
