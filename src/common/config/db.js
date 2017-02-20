'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: "mysql",
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: "127.0.0.1",
      port: "3306",
      database: "test", //数据库名称
      user: "root", //数据库帐号
      password: "toor", //数据库密码
      prefix: "think_",
      encoding: "utf8"
    },
    mongo: {

    }
  }
};
