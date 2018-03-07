/**
 * 事件处理中心
 * @type {Function}
 */
let DefMsg = require( "DefMsg" );

// 实例化对象
let instance = null;

let EventCenter = cc.Class({

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
                instance = new EventManager();
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
     * 发送消息
     * @param msgNode
     */
    sendMsg( msgNode ) {
        let eventId = msgNode.getEventId();
        switch( eventId ) {
            case DefMsg.EVENT_ID.VIEW:

                break;
            case DefMsg.EVENT_ID.NET:

                break;
        }
    },
});

module.exports = EventCenter;
