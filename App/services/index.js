'use strict'
import {requestHtmlText, requestHtmlBlob, requestPage} from '../utils/request';
import {translateHtml} from '../utils/common'
import Cheerio from 'cheerio-without-node-native';
import { Toast } from 'antd-mobile';
import qs from 'qs';

//查询网址 酷包小说网 http://www.kushubao.com/
const kuShuBao = 'http://mip.kushubao.com';//首页
const detailHttp = 'http://m.kushubao.com/info-';//详情页
const searchHttp = "http://zhannei.baidu.com/cse/search?"//搜索网站?q=%E7%BB%9D%E4%B8%96&p=0&s=1393206249994657467

//酷书包每日推荐
export async function queryDaily(navigation) {
    // const data = await requestHtmlText(kuShuBao);
    // const bold = await requestHtmlBlob(kuShuBao);
    // const data = await translateHtml(bold, 'gb2312');
    const data = await requestPage(kuShuBao);
    try{
        dailyBooks(data,navigation);
    }catch (err){
        Toast.fail(err.message,0)
    }
}

//搜索
export async function queryBooks(params={}) {
    params.s = '1393206249994657467';
    const url = searchHttp+`${qs.stringify(params)}`;
    console.log(url);
    const data = await requestPage(url);
    return searchDeal(data);
}

function searchDeal(html) {
    const data = [];

    const $ = Cheerio.load(html);
    const items = $('body').find('.result-game-item');
    items.each( (i, item)=>{
        const imgUrl = $(item).find('img').attr('src');
        const title = $(item).find('.result-game-item-title-link').text();
        const id = $(item).find('.result-game-item-title-link').attr('href');
        const dec = $(item).find('.result-game-item-desc').text();
        const info = [];
        const others = $(item).find('.result-game-item-info-tag');
        others.map( (i, other) => info.push($(other).text()));

        let res = {id: id, title:title, imgUrl:imgUrl, dec:dec, info:info };
        data.push(res)
    });

    return data;
}

function dailyBooks(data, navigation) {
    const $ = Cheerio.load(data);
    const blocks = $('body').find('.article');
    let dailyBooks = [];
    blocks.each( (i, item)=>{
        const data = {
            type: $(item).find('.title').text(),
            books:[],
        };

        const bs = $(item).find('a');
        bs.each( (i, item)=> {
            const url = $(item).attr('href'),
                  name = $(item).text(),
                  urlArr = url.split('/'),
                  id = urlArr[urlArr.length-2],
                  imgUrl = `http://m.kushubao.com/cover/${id.slice(0,2)}/${id}/${id}s.jpg`;
            const book = {
                name: name,
                id: id,
                url: url,
                imgUrl: imgUrl,
            };
            data.books.push(book);
        });
        dailyBooks.push(data)
    });

    storage.save({
        key: 'dailyBooks',
        data:  dailyBooks,
        expires: 1000 * 3600 * 24
    });
    global.dailyBooks = dailyBooks;
    navigation.navigate('Home');
}

