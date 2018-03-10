/**
 * 网络事件
 */

let EventBase = require( "EventBase" );
let EventCenter = require( "EventCenter" );
let DefEvent = require( "DefEvent" );

let EventAudio = cc.Class({
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
        if( msg.getEventId() === DefEvent.EVENT.AUDIO ) {
            this.onMessageEvent( msg );
        } else {
            EventCenter.getInstance().sendMsg( msg );
        }
    },

});

module.export = EventAudio;