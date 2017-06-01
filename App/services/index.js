'use strict'
import {requestHtmlText, requestHtmlBlob} from '../utils/request';
import Cheerio from 'cheerio-without-node-native';

//查询网址 酷包小说网 http://www.kushubao.com/
const kuShuBao = 'http://mip.kushubao.com';//首页
const detailHttp = 'http://m.kushubao.com/info-';//详情页

//酷书包每日推荐
export async function queryDaily() {
    const data = await requestHtmlText(kuShuBao);
    dailyBooks(data);
}

export function dailyBooks(data) {
    const $ = Cheerio.load(data.data);
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
}

