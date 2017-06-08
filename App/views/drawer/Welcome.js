import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { queryDaily } from '../../services';
import { Toast } from 'antd-mobile';
import RNFetchBlob from 'react-native-fetch-blob';
import { NavigationActions } from 'react-navigation'

class Welcome extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: false,
        }
        console.log(props)
    }

    componentDidMount(){
        this.initData();
    }

    //初始化数据
    initData() {
        //初始推荐小说数据
        storage.load({key: 'dailyBooks'}).then(data => {
            global.dailyBooks = data;
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Main'})
                ]
            });
            this.props.navigation.dispatch(resetAction);
            // this.props.navigation.navigate('Home');
        }).catch( err=> {
            queryDaily(this.props.navigation)
        });
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={{color: 'green'}}>欢迎！！！</Text>
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
