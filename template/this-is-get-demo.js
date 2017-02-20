// Page Main Component
let indexPage = {
    methods: {
        getvalenRank: function () {


            let self = this;

            /*
             * get信息
             * 1. 请求接口地址
             * 2. get需要带的参数值
             * header
             */
            let postData = {
                'apiURL':'/your-api',
                'data':'start=0&end=50',
                'header':self.header,
            };

            $.ajax({
                type: "POST",
                url: '/asyncinfo/get',
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
