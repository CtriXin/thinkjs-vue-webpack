/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 */
import log4js from 'log4js';
log4js.configure({
  appenders: [
    {
      type: 'console'
    },
    {
      type: 'dateFile',
      filename: think.ROOT_PATH+'/logs/',
      pattern: "yyyy-MM-dd.log",
      maxLogSize: 1024,
      alwaysIncludePattern: true,
      backups: 4
      //category: 'normal'
    }
  ],
  replaceConsole: true
});

let API_URL = think.config('api_url');
let path = think.config('path');



global.api = async function(self,url,params){
    let user_account_info = await self.session('user_account_info');
    let request = require('request');
    let headers = {
        "timestamp": new Date().getTime(),
        "token": user_account_info.token,
        "uid": user_account_info.uid
    };
    let option = {
        url: API_URL + url,
        method: "POST",
        json: true,
        headers: headers,
        body: params
    };
    console.log('请求接口:',url,'--','请求头：',headers,'--','参数:',params);
    request(option, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return self.json(body)
        } else {
            console.log('请求出错了:',error);
        }
    });
};


global.path = function () {
    return path
};

global.env = function () {
    return think.env
};
