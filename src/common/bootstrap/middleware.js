/**
 * this file will be loaded before server started
 * you can register middleware
 * https://thinkjs.org/doc/middleware.html
 */

/**
 *
 * think.middleware('xxx', http => {
 *
 * })
 *
 */
'use strict';

import debugToolbar from 'think-debug-toolbar';

let conf = {
  panels: ['request', 'session', 'view', 'template', 'response', 'config', 'info'],
  depth: 4,
  extra_attrs: '',
  disabled: false,
  sort: false
};

think.middleware('debug_toolbar', debugToolbar(conf));




think.middleware("token", async http => {

    //这里我的操作是获取我需要的token


});
