/**
 * 事件基类
 */

let Utils = require( "Utils" );

let EventBase = cc.Class({

    /**
     * 构造
     */
    ctor() {
        // 存储消息结构 事件列表
        this.m_dictMsgList = {};

    },

    /**
     * 内部函数 注册事件_1
     * @param msgId
     * @param eventNode
     * @private
     */
    _register1( msgId, eventNode ) {
        if( this.m_dictMsgList.hasOwnProperty( msgId ) && Utils.isArray( this.m_dictMsgList[msgId] ) ) {
            let lastNode = getLastEventNode( msgId );
            if( !Utils.isNull( lastNode ) ) {
                eventNode.m_objPrevEventNode = lastNode;
                eventNode.m_objNextEventNode = null;
                lastNode.m_objNextEventNode = eventNode;
            }
        } else {
            // msgId 在字典中不存在
            this.m_dictMsgList[msgId] = [];
        }
        this.m_dictMsgList[msgId].push( eventNode );
    },

    /**
     * 内部函数 注册事件_2
     * @param script
     * @param msgIdList
     * @private
     */
    _register2( script, msgIdList ) {
        for( let i = 0; i < msgIdList.length; ++i ) {
            let eventNode = new EventNode( script );
            this._register1( msgIdList[i], eventNode );
        }
    },

    /**
     * 注册 消息事件（注：通过参数类型来重载注册函数）
     * 一、通过消息ID，注册事件
     * 参数1 number 消息ID
     * 参数2 object 事件节点
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

        // 以ID来注册事件
        if( Utils.isNumber( param1 ) && Utils.isObject( param2 ) ) {
            this._register1( param1, param2 );
        // 以脚本挂载多个事件
        } else if( Utils.isObject( param1 ) && Utils.isArray( param2 ) ) {
            this._register2( param1, param2 );
        }
    },
});

module.exports = EventBase;
