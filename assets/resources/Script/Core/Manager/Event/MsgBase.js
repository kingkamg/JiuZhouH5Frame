/**
 * 消息基类
 */

let DefMsg = require( "DefMsg" );

cc.Class({

    /**
     * 构造
     */
    ctor() {
        // 消息ID
        this.m_nId = 0;
        // 数据
        this.m_objData = null;

    },

    /**
     * 获取事件ID
     * @returns {number}
     */
    getEventId() {
        let eventId = Math.floor( this.m_nId / DefMsg.SPAN_ID );
        return eventId * DefMsg.SPAN_ID;
    },

    /**
     * 设置消息ID
     * @param id
     */
    setId( id ) {
        this.m_nId = id;
    },

    /**
     * 获取消息ID
     * @returns {number|*}
     */
    getId() {
        return this.m_nId;
    },

    /**
     * 设置数据
     * @param data
     */
    setData( data ) {
        this.m_objData = data;
    },

    /**
     * 获取数据
     * @returns {null|*}
     */
    getData() {
        return this.m_objData;
    },

});
