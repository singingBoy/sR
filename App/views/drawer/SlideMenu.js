import React from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Text, ScrollView} from 'react-native'
import { DrawerItems } from 'react-navigation';

export default class SlideMenu extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const {navigation,exclude,items} = this.props;
    return (
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Image
              style={styles.menuImg}
              source={require('../../asset/images/menu-img.jpg')}/>
        </TouchableOpacity>

        <DrawerItems {...this.props} items={items.filter((item) => exclude.indexOf(item.key)==-1)}/>
      </ScrollView>
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
});
