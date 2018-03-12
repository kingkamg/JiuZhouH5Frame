/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 全局 对象
 */

let AudioManager = require( "AudioManager" );
let EventManager = require( "EventManager" );
let ViewManager = require( "ViewManager" );

let Global = {
    // 声音管理器
    AudioManager: AudioManager.getInstance(),
    // 事件管理器
    EventManager: EventManager.getInstance(),
    // 视图管理器
    ViewManager: ViewManager.getInstance(),

};

module.exports = Global;