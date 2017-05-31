import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { SearchBar, Button ,Icon, Badge} from 'react-native-elements'
import {ThemeList} from '../../utils/themeFactory';

export default class Search extends Component {
    static navigationOptions = ({ navigation, screenProps })=>({
        title: '搜索',
        headerRight: (
          <View style={{flex:1, flexDirection: 'row',alignItems: 'center',width:200}}>
              <SearchBar
                  round
                  lightTheme
                    /*{ TODO 搜索框背景色}*/
                  containerStyle={{backgroundColor:'#01c497',borderTopWidth: 0,borderBottomWidth: 0, flex:5}}
                  inputStyle={{backgroundColor:'#fff'}}
                  onChangeText={(txt)=>navigation.state.params.onChange(txt)}
                  icon={{name: 'forward'}}
                  placeholder='搜索...' />
              <Icon name='search' color="#fff" onPress={()=>navigation.state.params.onSearch()}/>
          </View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            search: false,
            keyWord: "",
            history: [],
        }
    }

    componentWillMount(){
        // !important 头部调用 组件方法 处理
        this.props.navigation.setParams({
            onChange: this.onChange,
            onSearch: this.onSearch,
        });
        //load 读取
        storage.load({
            key: 'history'
        }).then(ret => {
            this.setState({
                history: ret
            });
        });
    }

    cleanHistory = ()=>{
        storage.remove({
            key: 'history',
        });
    };

    /*关键字改变*/
    onChange = (text)=>{
        this.setState({
            keyWord: text,
        });
    };

    /*搜索头部调用*/
    onSearch = ()=>{
        this.state.history.splice(0,0,this.state.keyWord);
        this.setState({
            search: true,
        });
        //1、存储 搜索记录
        storage.save({
            key: 'history',  // 注意:请不要在key中使用_下划线符号!
            data:  this.state.history.slice(0, 10),//只保存最新10条记录
            // 如果设为null，则永不过期,如果不指定过期时间，则会使用defaultExpires参数
            expires: 1000 * 3600 * 24 * 7
        });

        //2、搜索请求
    };

    onPress = ()=>{
      this.props.navigation.navigate('Home', {
        name: 'Search',
      });
    };


    render() {
      return (
        <View style={styles.container}>
            {!this.state.search?this.renderInit():this.renderList()}
        </View>
      )
    }

    renderInit(){
        return(
            <View>
                <View style={styles.historyBox}>
                    <Text style={[{color:'#000'},styles.margin10]}>搜索记录：</Text>
                    <Text style={[{color:'#03a9f4'},styles.margin10]} onPress={this.cleanHistory}>清除</Text>
                </View>
                <View style={styles.content}>
                    {this.state.history.map( (h,i) =>{
                        const badgeColor = ThemeList[Number.parseInt(Math.random()*20+1)];
                        return <Badge key={i} value={h} containerStyle={[{backgroundColor:badgeColor},styles.margin10]}/>
                    })}
                </View>
                <View style={styles.historyBox}>
                    <Text style={[{color:'#000'},styles.margin10]}>每日推荐：</Text>
                </View>
                <View style={styles.content}>
                    {/* TODO 查询 */}
                    {this.state.history.map( (h,i) =>{
                        const badgeColor = ThemeList[Number.parseInt(Math.random()*20+1)];
                        return <Badge key={i} value={h} containerStyle={[{backgroundColor:badgeColor},styles.margin10]}/>
                    })}
                </View>
            </View>
        )
    }

    renderList(){
        return <Text>结果页</Text>
    }
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    icon: {marginTop: 3, width: 32, height: 29,},
    historyBox: {flexDirection:'row',justifyContent:'space-between'},
    margin10: {marginHorizontal:10,marginVertical:10},
    content: {flexDirection:'row',flexWrap: 'wrap',borderBottomWidth:1,borderColor:'#ccc',marginHorizontal:10},
});