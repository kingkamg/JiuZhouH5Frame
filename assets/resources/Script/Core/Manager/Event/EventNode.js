/**
 * 事件节点
 */

let EventNode = cc.Class({

    ctor() {
        // 数据（脚本对象）
        this.m_objData = null;
        // 上一个节点
        this.m_objPrev = null;
        // 下一个节点
        this.m_objNext = null;

        // 赋值
        let arg = arguments;
        this.setData( arg[0] )
    },

    /**
     * 获取数据
     * @returns {object}
     */
    getData() {
        return this.m_objData;
    },

    /**
     * 设置数据
     * @param data
     */
    setData( data ) {
        this.m_objData = data;
    },

});

module.exports = EventNode;