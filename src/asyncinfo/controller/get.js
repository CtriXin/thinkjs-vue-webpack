/**
 * Created by songxin on 2017/2/6.
 */
'use strict';

import Base from './base.js';
let request = require('request');

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let API_URL = think.config('api_url');

        let url = this.post('apiURL');
        let method = this.post('type');
        let data = this.post('data');
        let header = JSON.parse(this.post('header'));

        console.log('传过来的链接地址为为',API_URL + url,'传过来的token为',header.token);
        console.log('传过来的过滤数据为',data);
        console.log('传过来的header为',header);


        let self = this;
        let option = {
            url: API_URL + url + '?' + data,
            method: "GET",
            json: true,
            dataType: "json",
            contentType: "application/json",
            headers: {
                //你需要的header
            }
        };
        request(option, function (error, response, body) {
            // console.log('body is: ',body)
            if (!error && response.statusCode == 200) {
                console.log(body);
                self.success(body);
            } else {
                console.log('error code is:',response.statusCode);
                console.log('请求出错了:',error);
                self.fail({errno: 400, errmsg: '请求出错了', data: error});
            }

        });


    }
}
