// Page Main Component
let indexPage = {
    methods: {
        getvalenRank: function () {
            let self = this;
            /*
             * 定义body参数
             * post过去的参数值为json
             */
            let data = {};
            data.uid = '11111';
            data.token = 'abc';


            //post数据
            let postData = {
                'apiURL':'/your-api',
                'data':JSON.stringify(data),
                'header':self.header,
            };

            $.ajax({
                type: "POST",
                url: '/asyncinfo/post',
                data: postData,
                beforeSend: function(xhr) {},
                success: function(response) {
                    console.log(response);
                },
                error: function(XHR, response, e) {
                    console.log(response);
                },
                complete: function(XHR, TS) {
                    // do something
                }
            });
        },


    },

};
