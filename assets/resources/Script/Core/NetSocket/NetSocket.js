// 获取Socket
let Socket = require('socket')
let pbkiller = require('../pbkiller/src/pbkiller');

// 定义网络变量
window.NetSocket = null;
window.PBKiller = null;
window.PB = null;

// 加载 resource/pb下的所有 proto
var loadProto = function () {
    // loadAll自动加载resources/pb下所有proto
    return PBKiller.loadAll('proto', 'grace.proto.msg');
}

// 创建 NetSocket
var CreateNetSocket = function ( host ) {
    if( !host )
        return;
    // 创建 Socket
    let socket = Socket( host );
    window.NetSocket = socket;
    window.PBKiller = pbkiller;
    // 加载 pb 文件
    window.PB = loadProto();
}

// 创建函数
var Create = function(){
    cc.log( "NetSocket = " + NetSocket );
    if( NetSocket && PBKiller )
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
