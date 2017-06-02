'use strict';
import RNFetchBlob from 'react-native-fetch-blob';

/**
 * 获取HTML请求
 * const options = {headers:{'Content-Type': 'text/html; charset=UTF-8'}};
 * @param: {string} url 请求路径
 * @param: {object} options 请求头
 * @return: {object} 返回HTML或者err
 * */
export const requestHtmlText = (url, options={})=>{
    options.headers = {'Content-Type': 'text/html; charset=gb2312'};
    return fetch(url,{...options})
        .then(response => response.text())
        .then(data => ({data}))
        .catch(error => ({error}))
};

export const requestHtmlBlob = (url, options={}) =>{
    return fetch(url,{...options})
        .then(res=> res.blob())
        .then(blob => blob)
        .catch( err => ({err}))
};

export const requestPage = (url, options={}) =>{
    return RNFetchBlob.fetch('GET', url, options)
        // when response status code is 200
        .then((res) => {
            // the conversion is done in native code
            // let base64Str = res.base64()
            // the following conversions are done in js, it's SYNC
            // let text = res.text()
            // let json = res.json()
            return res.data
        })
        // Status code is not 200
        .catch((errorMessage, statusCode) => {
            // error handling
            console.log(errorMessage)
        })
};