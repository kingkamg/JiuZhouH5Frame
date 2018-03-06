/**
 * 视图管理器
 */

// 实例化对象
let instance = null;

cc.Class({

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
                instance = new AudioManager();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {
        // 视图列表
        this.m_objViewList = {};

    },



});
