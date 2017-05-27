'use strict';

/**
 * 获取HTML请求
 * const options = {headers:{'Content-Type': 'text/html; charset=UTF-8'}};
 * @param: {string} url 请求路径
 * @param: {object} options 请求头
 * @return: {object} 返回HTML或者err
 * */
export const requestHtmlText = (url, options={})=>{
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