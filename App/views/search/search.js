import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import { SearchBar,Icon, Badge} from 'react-native-elements'
import {ThemeList} from '../../utils/themeFactory'
import {queryBooks} from '../../services'
import { List } from 'antd-mobile'
import {replaceVoid} from '../../utils/common'
import { Toast } from 'antd-mobile';

export default class Search extends Component {
    static navigationOptions = ({ navigation, screenProps })=>({
        title: '搜索',
        headerRight: (
          <View style={{flex:1, flexDirection: 'row',alignItems: 'center',width:200,justifyContent:'flex-end'}}>
              <SearchBar
                  round
                  lightTheme
                    /*{ TODO 搜索框背景色}*/
                  containerStyle={{backgroundColor:'#01c497',borderTopWidth: 0,borderBottomWidth: 0, flex:5}}
                  inputStyle={{backgroundColor:'#fff'}}
                  onChangeText={(txt)=>navigation.state.params.onChange(txt)}
                  icon={{name: 'forward'}}
                  placeholder='搜索...' />
              <Icon style={{width:50}} name='search' color="#fff" onPress={()=>navigation.state.params.onSearch()}/>
          </View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            search: false,//显示历史还是搜索结构
            keyWord: "",//搜索关键字
            history: [],//搜索历史
            list: [],//搜索结构
            refreshing: false,//刷新状态
            page: 0,//搜索第几页
        }
        console.log(props);
    }

    componentWillMount(){
        // !important 头部调用 组件方法 处理
        this.props.navigation.setParams({
            onChange: this.onChange,
            onSearch: this.onSearch,
        });
        //load 读取
        storage.load({key: 'history'}).then(ret => {
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
        const {keyWord, history} = this.state;
        this.setState({refreshing: true,});

        if(keyWord){
            history.splice(0,0,keyWord);

            //1、存储 搜索记录
            storage.save({
                key: 'history',  // 注意:请不要在key中使用_下划线符号!
                data:  history.slice(0, 10),//只保存最新10条记录
                expires: 1000 * 3600 * 24 * 7// 如果设为null，则永不过期,如果不指定过期时间，则会使用defaultExpires参数
            });
        }

        //2、搜索请求
        const params = {q: keyWord, p: 0,};
        queryBooks(params).then( list => {
            this.setState({
                search: true,
                list: list,
                refreshing: false,
            });
        });

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
            </View>
        )
    }

    onRefreshEnd = ()=>{
        const {list, page} = this.state;
        this.setState({
            page: page+1,
            refreshing: true,
        });
        const params = {
            q: this.state.keyWord,
            p: this.state.page,
        };
        queryBooks(params).then( data => {
            this.setState({
                list: list.concat(data),
                refreshing: false,
            });
        })
    };

    _onRefresh = ()=>{
        this.setState({
            page: 0,
            refreshing: true,
        });
        const params = {
            q: this.state.keyWord,
            p: this.state.page,
        };
        queryBooks(params).then( data => {
            this.setState({
                list: data,
                refreshing: false,
            });
        })
    };

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => {
        const author = replaceVoid(item.info[0]).split('：')[1];
        const title = replaceVoid(item.title);
        const dec = replaceVoid(item.dec);
        return(
            <List.Item
                key={item.id}
                extra={ author }
                align="top"
                thumb={<Image style={{width:60,height:80}} source={{uri:item.imgUrl}}/>}
                multipleLine >
                { title }
                <List.Item.Brief style={{marginVertical:10,width:280}}>{dec}</List.Item.Brief>
            </List.Item>
        )
    };

    renderList(){
        console.log(this.state.list);
        const {showHeader, showFooter} = this.state;
        return (
            <FlatList
                onRefresh={this._onRefresh}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                refreshing={this.state.refreshing}
                data={this.state.list}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                onEndReachedThreshold={0.1}
                onEndReached={()=>this.onRefreshEnd()}
            />
        )
    }
}

class HeaderComponent extends Component {
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Text >(顶部下拉出现 TODO )加载中...</Text>
            </View>
        )
    }
}

class FooterComponent extends Component {
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Text >(加载更多... TODO )</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    icon: {marginTop: 3, width: 32, height: 29,},
    historyBox: {flexDirection:'row',justifyContent:'space-between'},
    margin10: {marginHorizontal:10,marginVertical:10},
    content: {flexDirection:'row',flexWrap: 'wrap',borderBottomWidth:1,borderColor:'#ccc',marginHorizontal:10},
});