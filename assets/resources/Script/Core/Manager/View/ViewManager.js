/**
 * 视图管理器
 */
let List = require( "List" );
let Log = require( "Log" );
let ViewBase = require( "ViewBase" );
let DefView = require( "DefView" );
let DefLog = require( "DefLog" );
let Utils = require( "Utils" );

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

        // 当前场景
        this.m_objScene = null;
        // 当前UI
        this.m_objUI = null;

        //（维护视图 我使用了两个结构 map用来快速查找 list用来方便视图的打开先后顺序）
        // 视图 字典映射
        this.m_mapView = new Map();
        // 视图 链表
        this.m_listView = new List();

    },

    /**
     * 打开UI
     * @param pathName {string} 预制名（prefab文件夹后的路径+预制名）
     * @param data {object} 数据
     * @param zorder {number} 层级
     */
    openUI( pathName, data, zorder ){
        let viewObject = this.m_mapView.get( pathName );
        if( Utils.isNull( viewObject ) ) {
            viewObject = new ViewBase( DefView.UI_PATH + pathName, data, zorder );

            this.m_mapView.set( pathName, viewObject );
            this.m_listView.insert( viewObject );
        } else {
            viewObject.updateView( data );
        }

        cc.loader.loadRes();
    },

    /**
     * 关闭UI
     * @param pathName {string} 预制名（prefab后的 路径+预制名）
     */
    closeUI( pathName ){

    },

    /**
     * 打开场景
     * @param name
     */
    openScene( name ){
        // TODO 如果没有释放之前场景的节点
        // 系统能自动释放，就不管
        // 系统不能自动释放，就要手动调用removeAllChildren

        cc.director.loadScene( name, function( _, scene ) {
            Log.print( "[" + scene.getName() + "] " + DefLog.CODER.CODER_10 );
            let canvas = scene.getChildByName( "Canvas" );
            let designResolution = canvas.getComponent( cc.Canvas ).designResolution;
            for( let key in DefView.ZORDER ) {
                let node = new cc.Node();
                node.setName( key );
                node.setContentSize( designResolution.width, designResolution.height );
                node.setPosition( 0, 0 );
                canvas.addChild( node, DefView.ZORDER[key] );
            }
            this.m_objScene = scene;
        }.bind( this ) );
    },

    /**
     * 查找UI
     */
    findUI( pathName ) {
        let ui = this.m_mapView.get( pathName );
        if( !Utils.isNull( ui ) ) {
            ui = ui.getPrefab();
        }
        return ui;
    },

    /**
     * 获取当前场景
     * @returns {object|null}
     */
    getScene() {
        return this.m_objScene;
    },

    /**
     * 获取当前UI
     * @returns {object|null}
     */
    getUI() {
        return this.m_objUI;
    },

});

module.exports = ViewManager;