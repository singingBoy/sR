import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

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

  onselectedIndexChange(index) {}

  render() {
    return (
      <View style={styles.homeContainer}>
        <View>
          <Carousel
              style={styles.wrapper}
              autoplayTimeout={2}
              selectedIndex={2}
              autoplay
              infinite
              afterChange={this.onselectedIndexChange}
          >
              {this.renderCarousel(global.dailyBooks)}
          </Carousel>
            <Text>Carousel will adjust height based on content</Text>
        </View>
      </View>
    )
  }

  renderCarousel(dailyBooks){
    const showBooks = dailyBooks[1].books.slice(0,6);
    return showBooks.map( (book, index)=>
        (
            <View key={index} style={styles.container}>
              <Image source={{uri:book.imgUrl}} style={{width:100, height: 100}}/>
              <Text>{book.name}</Text>
            </View>
        )
    )
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  wrapper: {
      backgroundColor: '#fff',
  },
  container: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
  },
  text: {
      color: '#fff',
      fontSize: 36,
  },
});

export default Home
