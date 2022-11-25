import CryptoJS from 'crypto-js';
import qs from 'querystring';

const key = "密钥";  //后端给出的密钥
const iv = '密钥偏移量';   //后端给出的密钥偏移量

//加密方法
export function Encrypt(text) {
    var srcs = CryptoJS.enc.Utf8.parse(text);
    var encrypted = CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

//解密方法
export function Decrypt(text) {
    let baseResult = CryptoJS.enc.Base64.parse(text);   // Base64解密
    let ciphertext = CryptoJS.enc.Base64.stringify(baseResult);     // Base64解密
    let decryptResult = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(key), {    //  AES解密
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    let resData = decryptResult.toString(CryptoJS.enc.Utf8).toString();
    return resData;
}
// 有使用到下面的 handelEncryptedData 方法的话，可以直接放到这里就行了
//处理加密数据
/**
 * method:get post put delete
 * params:类似get的请求参数
 * data:类似post的请求参数
 * type:decrypt 解密 encrypt 加密
 * url:类似get的请求路径 ?拼接
 */
export function handelEncryptedData({ method, url, params, data }, type) {
    //加密
    if (type == 'encrypt') {
        let encryptionData = ''
        //如果是get或者delete请求方式，加密方式不一样
        if (method == 'get' || method == 'delete') {
            if (params) {
                encryptionData = Encrypt(qs.stringify(params))
                url = `${url}?${encryptionData}`
                // 加密后需要置空 params 否则仍然会默认拼接到url上
                params = undefined
            }
            return { url, params }
        } else {
            // post put 请求方式加密
            encryptionData = Encrypt(JSON.stringify(data))
            data = encryptionData
            return { data }
        }
    } else {
        // 解密
        let decryptData = JSON.parse(Decrypt(arguments[0]))
        return decryptData
    }
}


export const downloadFile = (url) => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none"; // 防止影响页面
    iframe.style.height = 0; // 防止影响页面
    iframe.src = url;
    document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
    // 5分钟之后删除（onload方法对于下载链接不起作用，就先抠脚一下吧）
    setTimeout(()=>{
        iframe.remove();
    }, 5 * 60 * 1000);
}
