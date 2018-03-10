/**
 * 视图基类
 */

let DefView = require( "DefView" );
let Utils = require( "Utils" );

let ViewBase = cc.Class({

    /**
     * 构造
     */
    ctor() {
        // 路径
        this.m_strPath = "";
        // 数据
        this.m_objData = null;
        // 层级
        this.m_nZOrder = DefView.ZORDER.UI;
        // 根节点
        this.m_objRootNode = null;

        // 初始化数据
        this.initData( arguments[0], arguments[1], arguments[2] );
        // 初始化视图
        this.initView();
    },

    /**
     * 初始化数据
     * @param path
     * @param data
     * @param zorder {*|number} [] 传入的层级
     */
    initData( path, data, zorder ) {
        if( !Utils.isNull( path ) ) {
            this.m_strPath = path;
        }
        if( !Utils.isNull( data ) ) {
            this.m_objData = data;
        }
        if( !Utils.isNull( zorder ) ) {
            this.m_nZOrder = zorder;
        }
    },

    /**
     * 初始化视图
     */
    initView() {

    },

    /**
     * 加载预制
     */
    load( callback ) {
        cc.loader.loadRes( this.m_strPath, function( _, prefab ) {
            this.m_objRootNode = cc.instantiate( prefab );
            callback( this.m_objRootNode );
        }.bind( this ) );
    },

    /**
     * 卸载预制
     */
    unload() {
        cc.loader.releaseRes( this.m_strPath );
    },

    /**
     * 销毁节点
     */
    destroy() {
        this.unload();
        this.m_strPath = null;
        this.m_objData = null;
        this.m_nZOrder = null;
        this.m_objRootNode.destroy();
        this.m_objRootNode = null;
    },

    /**
     * 更新视图
     */
    updateView() {
        let script = this.m_objRootNode.getComponent( this.getName() );
        if( !Utils.isNull( script ) ) {
            script.updateUI( this.m_objData );
        }
    },

    /**
     * 设置路径
     * @param path
     */
    setPath( path ) {
        this.m_strPath = path;
    },

    /**
     * 获取路径
     * @returns {string|*}
     */
    getPath(){
        return this.m_strPath;
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
     * @returns {object|*}
     */
    getData(){
        return this.m_objData;
    },

    /**
     * 设置层级
     * @param zorder {number} 层级
     */
    setZOrder( zorder ) {
        this.m_nZOrder = zorder;
    },

    /**
     * 获取层级
     * @returns {number|*}
     */
    getZOrder(){
        return this.m_nZOrder;
    },

    /**
     * 设置预制对象
     * @param node
     */
    setRootNode( node ) {
        this.m_objRootNode = node;
    },

    /**
     * 获取预制对象
     * @returns {object|*}
     */
    getRootNode(){
        return this.m_objRootNode;
    },

    /**
     * 获取预制名
     */
    getName() {
        let name = "";
        let lastOffset = this.m_strPath.lastIndexOf( "/" );
        name = this.m_strPath.substr( lastOffset + 1, this.m_strPath.length );
        return name;
    },

});

module.exports = ViewBase;