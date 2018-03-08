/**
 * 视图管理器
 */
let List = require( "List" );
let Log = require( "Log" );
let ViewBase = require( "ViewBase" );
let DefLog = require( "DefLog" );

// 实例化对象
let instance = null;

let ViewManager = cc.Class({

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
                instance = new ViewManager();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {
        // 视图链表
        this.m_listView = new List();
        // 视图字典列表
        this.m_dictViews = {};

    },

    /**
     * 打开UI
     * @param pathName {string} 预制名（prefab文件夹后的路径+预制名）
     * @param data {object} 数据
     * @param zorder {number} 层级
     */
    openUI( pathName, data, zorder ){
        let prefabName = this.extractName( pathName );
        let viewObject = this.getViewDict( prefabName );
        if( Utils.isNull( viewObject ) ) {
            let path = DefView.PREFAB_PATH + pathName;
            viewObject = new ViewBase( path, data, zorder );
            this.setViewDict( prefabName, viewObject );
        } else {
            viewObject.updateView( data );
        }
    },

    /**
     * 关闭UI
     * @param name {string} 预制名（prefab后的 路径+预制名）
     */
    closeUI( name ){


        this.setViewFlag( name, false );
    },

    openScene(){

    },

    /**
     * 设置视图标记
     * @param key 视图名
     * @param value 数据
     */
    setViewDict( key, value ) {
        this.m_dictViews[key] = value;
    },

    /**
     * 获取视图标记
     * @param key 视图名
     * @returns {*}
     */
    getViewDict( key ) {
        return this.m_dictViews[key];
    },

    /**
     * 提取名字
     * @param path
     */
    extractName( path ) {
        let name = "";
        let lastOffset = path.lastIndexOf( "/" );
        name = path.substr( lastOffset + 1, path.length );
        return name;
    },

});

module.exports = ViewManager;