/**
 * 事件基类
 */

let Utils = require( "Utils" );
let List = require( "List" );
let EventNode = require( "EventNode" );

let EventBase = cc.Class({

    /**
     * 构造
     */
    ctor() {
        // 存储消息结构 事件列表
        this.m_objMsgList = {};

    },

    /**
     * 内部函数 注册事件_1
     * @param script
     * @param msgId
     * @private
     */
    _register1( script, msgId ) {
        if( Utils.isNull( this.m_objMsgList[msgId] ) ) {
            this.m_objMsgList[msgId] = new List();
        }
        let list = this.m_objMsgList[msgId];
        let eventNode = new EventNode( script );
        list.insert( eventNode );
    },

    /**
     * 内部函数 注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _register2( script, msgIdList ) {
        for( let i = 0; i < msgIdList.length; ++i ) {
            this._register1( script, msgIdList[i] );
        }
    },

    /**
     * 注册 消息事件（注：通过参数类型来重载注册函数）
     * 一、在脚本对象内，注册一个消息ID
     * 参数1 object 脚本对象
     * 参数2 number 消息ID
     *
     * 二、在脚本对象内，注册多个消息ID
     * 参数1 object 脚本对象
     * 参数2 array 消息ID数组
     */
    register() {
        // 参数
        // [ 0.可变参数 1.可变参数 ]
        let param1 = arguments[0];
        let param2 = arguments[1];

        // 脚本 注册 一个事件ID
        if( Utils.isObject( param2 ) && Utils.isNumber( param1 ) ) {
            this._register1( param1, param2 );
        // 脚本 注册 多个事件ID
        } else if( Utils.isObject( param1 ) && Utils.isArray( param2 ) ) {
            this._register2( param1, param2 );
        }
    },

    /**
     * 内部函数 删除注册事件_1
     * @param script
     * @param msgId
     * @private
     */
    _unRegister1( script, msgId ) {
        let list = this.m_objMsgList[msgId];
        if( !Utils.isNull( list ) && !Utils( list.find( script ) ) ) {
            list.delete( script );
            if( list.size() <= 0 ) {
                this.m_objMsgList.delete( msgId );
                delete this.m_objMsgList[msgId];
            }
        }
    },
    
    /**
     * 内部函数 删除注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _unRegister2( script, msgIdList ) {
        for( let i = 0; i < msgIdList.length; ++i ) {
            this._unRegister1( script, msgIdList[i] );
        }
    },

    /**
     * 卸载注册 消息事件
     * （注：通过参数类型来重载函数）
     * 一、在脚本对象内，卸载一个消息ID
     * 参数1 object 脚本对象
     * 参数2 number 消息ID
     *
     * 二、在脚本对象内，卸载多个消息ID
     * 参数1 object 脚本对象
     * 参数2 array 消息ID数组
     */
    unRegister() {
        // 参数
        // [ 0.可变参数 1.可变参数 ]
        let param1 = arguments[0];
        let param2 = arguments[1];

        if( Utils.isNumber( param1 ) && Utils.isObject( param2 ) ) {
            this._unRegister1( param1, param2 );
        } else if( Utils.isObject( param1 ) && Utils.isArray( param2 ) ) {
            this._unRegister2( param1, param2 );
        }
    },

    /**
     * 发送 消息事件
     * @param msgNode
     */
    sendMsg( msgNode ) {

    },

    /**
     * 接收 消息事件 回调
     * @param msgNode {object} MsgBase 消息节点
     */
    onMessageEvent( msgNode ) {
        let list = this.m_objMsgList[msgNode.getId()];
        if( !Utils.isNull( list ) ) {
            list.forEach( function( node ) {
                let data = node.getData();
                data.onMessageEvent( msgNode );
            } );
        } else {
            cc.warn( "未找到消息 [" + msgId + "]" );
        }
    },

});

module.exports = EventBase;