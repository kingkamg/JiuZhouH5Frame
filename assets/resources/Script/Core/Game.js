/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 游戏管理器
 */

let DefView = require( "DefView" );
let DefStorage = require( "DefStorage" );
let Storage = require( "Storage" );

// 实例化对象
let instance = null;

let Game = cc.Class({

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
                instance = new Game();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {
        // 游戏ID
        this.m_nGameId = 0;
        // 游戏语言
        this.m_nLanguage = 0;
        // ...

    },

    /**
     * 初始化游戏需要的模块
     */
    init() {
        // 初始化语言
        this.initLanguage();
        // 初始化SDK
        this.initSDK();
        // 初始化网络
        this.initNet();
        // 初始化资源
        this.initRes();

        // 运行游戏
        this.run();
    },

    /**
     * 初始化语言
     */
    initLanguage() {
        let language = Storage.getInstance().get( DefStorage.KEY.Language );
    },

    /**
     * 初始化SDK
     */
    initSDK() {

    },

    /**
     * 初始化网络
     */
    initNet() {
        // 初始化网络模块
        require("NetSocket");
        // 初始化 PB
        G_asyncLoadProto();
        NetSocket.on( "__Connect", (eventName) => {
            cc.log( "eventName = " + eventName );
            // let player = new PB.Player();
            // player.id = 1000;
            // player.name = 'jiuzhou';
            // player.enterTime = Date.now();
            // NetSocket.send( PB.ActionCode.EnterRoot, player,(protoData)=>{
            //     let data = PB.Player.decode(protoData);
            //     cc.log( "data : " + data );
            //     cc.log( "data.id : " + data.id );
            //     cc.log( "data.name : " + data.name );
            //     cc.log( "data.enterTime : " + data.enterTime );
            // } );
        });
    },

    /**
     * 初始化资源
     */
    initRes() {

    },

    /**
     * 运行
     */
    run() {
        G.ViewManager.replaceScene( DefView.SCENE.Login );
    },

});

module.exports = Game;