/**
 * Author: luyang(yanghr0209@gmail.com)
 * Copyright (c) 2018-03
 */

// 获取Socket
let Socket = require('socket')
let pbkiller = require('../pbkiller/src/pbkiller');

// 定义网络变量
window.NetSocket = null;
window.PBKiller = null;
window.PB = null;
window.G_asyncLoadProto = function () {
    if( window.PB )
        return;
    asyncLoadProto();
}
// 加载 resource/pb下的所有 proto
var loadProto = function () {
    // loadAll自动加载resources/pb下所有proto
    window.PB = PBKiller.loadAll('proto', 'grace.proto.msg');
}
// 异步加载 PB 函数，微信小程序 必须 异步
var asyncLoadProto = function () {
    PBKiller.preload(() => {
        loadProto();
    });
}

// 创建 NetSocket
var CreateNetSocket = function ( host ) {
    if( !host )
        return;
    // 创建 Socket
    let socket = Socket( host );
    window.NetSocket = socket;
    window.PBKiller = pbkiller;
    cc.log( "PBKiller = " + PBKiller );
    if( false && PBKiller )
        asyncLoadProto(); // 加载 pb 文件
}

// 创建函数
var Create = function(){
    cc.log( "NetSocket = " + NetSocket );
    if( NetSocket && PBKiller && PB )
        return;
    var NetConfig = require( "NetConfig" );
    if( NetConfig == null || NetConfig.IP == null || NetConfig.Port == null )
        return;
    var host = NetConfig.IP + ":" + NetConfig.Port;
    cc.log( "connet host = " + host );
    CreateNetSocket( host );
}
// 调用创建
Create();
