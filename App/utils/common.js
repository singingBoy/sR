import { Toast } from 'antd-mobile';
/**
 * 处理GBK编码页面
 * @blob {blob} 字节流
 * @translateType {string} 编码符
 * @return Promise
 * */
export async function translateHtml(blob, translateType){
    return new Promise((resolve, reject) => {
        try{
            const reader = new FileReader();
            // reader.readAsText(blob, translateType);
            // reader.onload = (event) => {
            //     resolve(reader.result);
            // };
            // reader.onerror = reject;
        }catch (err){
            Toast.fail(err.message, 0);
        }
    });
}

/*
* 循环截取数组
* */
export function sliceData (start, end, arr){
    let res = arr.slice(start, end);
    if(end > arr.length && start < arr.length){
        const num = end % arr.length;
        res = res.concat(arr.slice(0, num))
    }else if(start > arr.length){
        start = start % arr.length;
        end = end % arr.length;
        res = arr.slice(start, end);
    }
    return res
}

/*
* 字符串剔除：任何空白字符，包括空格、制表符、换页符等等。
* */
export function replaceVoid(str) {
    return str.replace(/\s/g,"");
}