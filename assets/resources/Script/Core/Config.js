/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

let DefView = require( "DefView" );

/**
 * 游戏配置
 */
let Config = {
    // 调试模式
    Debug: false,
    // 热更新
    HotUpdate: false,
    // 第一个场景
    Scene: DefView.SCENE.Login,

    // 版本号
    Version: "1.0.0.0",

};

module.exports = Config;