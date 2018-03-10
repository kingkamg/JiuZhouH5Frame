/**
 * 事件基类
 */

let Utils = require( "Utils" );
let List = require( "List" );

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
        list.insert( script );
    },

    /**
     * 内部函数 注册事件_2
     * @param script
     * @param msgIds
     * @private
     */
    _register2( script, msgIds ) {
        for( let i = 0; i < msgIds.length; ++i ) {
            this._register1( script, msgIds[i] );
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
        if( Utils.isObject( param1 ) && Utils.isNumber( param2 ) ) {
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
        if( !Utils.isNull( list ) && !Utils.isNull( list.find( script ) ) ) {
            list.delete( script );
            if( list.isEmpty() ) {
                delete this.m_objMsgList[msgId];
            }
        }
    },
    
    /**
     * 内部函数 删除注册事件_2
     * @param script
     * @param msgIds
     * @private
     */
    _unRegister2( script, msgIds ) {
        for( let i = 0; i < msgIds.length; ++i ) {
            this._unRegister1( script, msgIds[i] );
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
     * 发送 消息事件（提供给子类重写函数，无需实现）
     * @param msg
     */
    sendMsg( msg ) {

    },

    /**
     * 接收 消息事件 回调
     * @param msg {object} EventMsg 消息节点
     */
    onMessageEvent( msg ) {
        let list = this.m_objMsgList[msg.getId()];
        if( !Utils.isNull( list ) ) {
            list.forEach( function( node ) {
                let data = node.getData();
                data.onMessageEvent( msg );
            } );
        }
    },

});

module.exports = EventBase;