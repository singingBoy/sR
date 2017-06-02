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