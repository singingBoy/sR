import React from 'react'
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native'

export default class SlideMenu extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      pressed: ''
    }
  }

  render() {
    function icon(index) {
      if (index == 0) {
        return <Image source={require('../asset/images/icon-standings.png')} style={styles.btnIcon} />
      } else {
        return <Image source={require('../asset/images/icon-calendar.png')} style={styles.btnIcon} />
      }
    }

    return (
      <View style={styles.content}>
        <Image
          style={styles.menuImg}
          source={require('../asset/images/menu-img.jpg')}/>
        {this.props.navigation.state.routes.map((route, index) => (
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate(route.routeName)}
            onHideUnderlay={()=>{this.setState({pressed: ''})}}
            onShowUnderlay={()=>{this.setState({pressed: route.routeName})}}
            style={[styles.btn, this.state.pressed === route.routeName ? styles.tabPress : {}]}
            key={route.routeName}>
            <View style={styles.btnBox}>
              {icon(index)}
              <Text style={[styles.btnTxt, this.props.navigation.state.index === index ? styles.btnTxtActive : {}]}>
                {route.routeName}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',//TODO Drawer背景色
  },
  menuImg: {
    position: 'relative',
    width: null,
    height: 150
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#fff'
  },
  btnBox: {
    flexDirection: 'row'
  },
  btnIcon: {
    height: 16,
    width: 16,
    backgroundColor: '#01c497',//TODO 选中栏背景色
  },
  btnTxt: {
    paddingLeft: 20,
    color: '#ccc',
    fontSize: 16,
    lineHeight: 17,
    fontFamily: 'Raleway-Regular'
  },
  btnTxtActive: {
    color: '#01c497' //TODO 选中背景色
  }
});
