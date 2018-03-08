/**
 * 网络事件
 */

let EventBase = require( "EventBase" );
let EventCenter = require( "EventCenter" );
let DefMsg = require( "DefMsg" );

let EventAudio = cc.Class({
    extends: EventBase,

    /**
     * 构造
     */
    ctor() {

    },

    /**
     * 发送 消息事件
     * @param msgNode
     */
    sendMsg( msgNode ) {
        if( msgNode.getEventId() === DefMsg.EVENT_ID.AUDIO ) {
            this.onMessageEvent( msgNode );
        } else {
            EventCenter.getInstance().sendMsg( msgNode );
        }
    },

});

module.export = EventAudio;