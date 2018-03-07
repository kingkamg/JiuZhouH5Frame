/**
 * 事件管理器
 */

let EventView = require( "EventView" );
let EventNet = require( "EventNet" );

// 实例化对象
let instance = null;

let EventManager = cc.Class({

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
        // 视图事件对象
        this.m_objEventView = new EventView();
        // 网络事件对象
        this.m_objEventNet = new EventNet();

    },

    /**
     * 获取视图事件
     */
    getEventView() {
        return this.m_objEventView;
    },

    /**
     * 获取网络事件
     */
    getEventNet() {
        return this.m_objEventNet;
    },

});

module.exports = EventManager;