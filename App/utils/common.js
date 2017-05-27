
/**
 * 处理GBK编码页面
 * @blob {blob} 字节流
 * @translateType {string} 编码符
 * @return Promise
 * */
export async function translateHtml(blob, translateType){
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsText(blob, translateType);
        reader.onload = (event) => {
            resolve(reader.result);
        };
        reader.onerror = reject;
    });
}