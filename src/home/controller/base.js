'use strict';

export default class extends think.controller.base {
    /**
     * some base method in here
     */
    async __before(){

        //

        // 这里可以获取cookie


        //


        this.assign({
            title: "your-website-name",
            ogtitle:"your-website-name",
            description: "your-description",
            ogimg: "your-favicon",
            lessdescription: "your-description",
            metaurl:"your-url",
        });
    }
}