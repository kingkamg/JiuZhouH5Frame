/**
 * 视图基类
 */

let DefView = require( "DefView" );

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
        // 预制对象
        this.m_objPrefab = null;

        // 初始化数据
        this.initData( arguments[0], arguments[1], arguments[2] );
        // 初始化视图
        this.initView();
    },

    /**
     * 初始化数据
     * @param path
     * @param data
     * @param zorder
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
        // 预制实例化
        this.load();
    },

    /**
     * 加载预制
     */
    load() {
        cc.loader.loadRes( this.m_strPath, function( prefab ) {
            this.m_objPrefab = cc.instantiate( prefab );
        }.bind( this ) );
    },

    /**
     * 卸载预制
     */
    unload() {
        cc.loader.releaseRes( this.m_strPath );
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
        this.m_objData = path;
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
     * @param zorder
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
     * @param prefab
     */
    sePrefab( prefab ) {
        this.m_objPrefab = prefab;
    },

    /**
     * 获取预制对象
     * @returns {object|*}
     */
    getPrefab(){
        return this.m_objPrefab;
    },

});

module.exports = ViewBase;