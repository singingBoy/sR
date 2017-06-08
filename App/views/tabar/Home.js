import React, {Component} from "react";
import {StyleSheet, View, Image, Text, Dimensions, ScrollView} from "react-native";
import {Carousel, WhiteSpace, WingBlank, List} from "antd-mobile";
import {aType} from "../../asset/data/data";
import {sliceData} from "../../utils/common";
import { NavigationActions } from 'react-navigation'

const appWidth = Dimensions.get('window').width;
const bg = [
    require('../../asset/images/bg/bb.png'),
    require('../../asset/images/bg/ds.png'),
    require('../../asset/images/bg/xh.png'),
    require('../../asset/images/bg/xk.png'),
    require('../../asset/images/bg/ls.png'),
];
const icon = [
    require('../../asset/images/type/type10.png'),
    require('../../asset/images/type/type1.png'),
    require('../../asset/images/type/type12.png'),
    require('../../asset/images/type/type11.png'),
    require('../../asset/images/type/type2.png'),
    require('../../asset/images/type/type5.png'),
    require('../../asset/images/type/type4.png'),
    require('../../asset/images/type/type8.png'),
];

class Home extends Component {
    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({focused, tintColor}) => (
            <Image
                style={[styles.icon, {tintColor: focused ? tintColor : '#bbb'}]}
                source={require('../../asset/images/house.png')}
            />
        ),
        drawerLabel: '首页',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../asset/images/house.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            dailyBooks: dailyBooks,
        }
    }

    onPress = ()=> {
        this.props.navigation.navigate('Login', {
            name: 'Home',
        });
    };

    searchBook = (name)=> {
        this.props.navigation.navigate('Search', {
            name: name,
        });
    };

    /*轮播切换调用*/
    onselectedIndexChange(index) {}

    render() {
        return (
            <ScrollView style={styles.homeContainer}>
                <View style={{height: 150}}>
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
                {
                    dailyBooks.map((item, index)=> {
                        if (index % 2 === 0) {
                            return this.renderCard1(item, index)
                        } else {
                            return this.renderCard2(item, index)
                        }
                    })
                }
            </ScrollView>
        )
    }

    renderCarousel() {
        return aType.map((type, index)=>
            (
                <Image key={index} style={styles.carousel} source={bg[index]}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: appWidth}}>
                        <Text style={styles.text}>{type.name}</Text>
                    </View>
                </Image>
            )
        )
    }

    renderCard2(data, index) {
        const books = data.books;
        const header = (
            <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20, marginVertical: 20,}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image style={{width: 20, height: 20, marginRight: 5}} source={icon[index]}/>
                    <Text>{data.type}</Text>
                </View>
            </View>
        );
        return (
            <View key={index}>
                {header}
                <ScrollView horizontal={true} style={{paddingVertical: 10, backgroundColor: '#fff'}}>
                    { books.map(book => (
                        <View key={book.id} style={{alignItems: 'center', width: 100}}>
                            <Image style={{width: 60, height: 80}} source={{uri: book.imgUrl}}/>
                            <Text style={{
                                color: '#000',
                                flexWrap: 'wrap',
                                width: 80,
                                textAlign: 'center'
                            }}>{book.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }

    renderCard1(data, index) {
        const num = this.state['books' + index] || 0;
        const books = sliceData(num * 4, (num + 1) * 4, data.books);
        const header = (
            <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20, marginVertical: 20,}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image style={{width: 20, height: 20, marginRight: 5}} source={icon[index]}/>
                    <Text>{data.type}</Text>
                </View>
                <View style={{position: 'absolute', right: 10}}>
                    <Text onPress={()=>this.setState({['books' + index]: num + 1})}>换一换</Text>
                </View>

            </View>
        );
        return (
            <List key={index} renderHeader={() => header}>
                {
                    books.map(book =>(
                        <List.Item
                            key={book.id}
                            extra="【历史】"
                            align="top"
                            thumb={<Image style={{width: 60, height: 80}} source={{uri: book.imgUrl}}/>}
                            onClick={()=>this.searchBook(book.name)}
                            multipleLine>
                            {book.name}
                            <List.Item.Brief style={{marginVertical: 20}}>副标题</List.Item.Brief>
                        </List.Item>
                    ))
                }
            </List>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {flex: 1, backgroundColor: '#f8f8f8'},
    icon: {width: 32, height: 32,},
    wrapper: {backgroundColor: '#fff', height: 150,},
    carousel: {flexDirection: 'row', height: 150,},
    text: {color: '#fff', fontSize: 36,},
});

export default Home
