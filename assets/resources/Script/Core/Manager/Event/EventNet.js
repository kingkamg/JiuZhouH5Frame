/**
 * 网络事件
 */

let EventBase = require( "EventBase" );
let EventCenter = require( "EventCenter" );
let DefMsg = require( "DefMsg" );

let EventNet = cc.Class({
    extends: EventBase,

    /**
     * 构造
     */
    ctor() {

    },

    /**
     * 发送 消息事件
     * @param msg
     */
    sendMsg( msg ) {
        if( msg.getEventId() === DefMsg.EVENT.NET ) {
            this.onMessageEvent( msg );
        } else {
            EventCenter.getInstance().sendMsg( msg );
        }
    },

});

module.export = EventNet;