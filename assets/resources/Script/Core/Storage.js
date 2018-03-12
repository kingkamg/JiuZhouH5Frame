/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 存储管理器
 */

let DefView = require( "DefView" );

// 实例化对象
let instance = null;

let Storage = cc.Class({

    /**
     * 静态
     */
    statics: {

        /**
         * 获取实例
         * @returns {Function}
         */
        getInstance() {
            if( instance === null ) {
                instance = new Storage();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {

    },

    /**
     * 获取存储数据 通过key
     * @param key
     * @returns {*}
     */
    get( key ) {
        // 如果数据有加密，一定要解密后再返回，否则数据会出问题
        return JSON.parse( cc.sys.localStorage.getItem( key ) );
    },

    /**
     * 设置存储数据
     * @param key {string} 字符串
     * @param data {*} 数据
     */
    set( key, data ) {
        // 允许加密数据 封装他的原因就是为了调用时不让开发者手动写加密
        cc.sys.localStorage.setItem( key, data );
    },

    /**
     * 删除存储数据 通过key
     * @param key
     */
    del( key ) {
        cc.sys.localStorage.removeItem( key );
    },
});

module.exports = Storage;