'use strict';

/**
 * hook config
 * https://thinkjs.org/doc/middleware.html#toc-df6
 */


export default {
    controller_before: ["append", "token"], //controller 处理之前
    view_filter : ['append', 'debug_toolbar'],
}