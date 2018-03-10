/**
 * 测试
 */

let UIBase = require( "UIBase" );
let DefEvent = require( "DefEvent" );
let EventManager = require( "EventManager" );
let Utils = require( "Utils" );
let DefView = require( "DefView" );

cc.Class({
    extends: UIBase,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    start () {
        this.initData();
        this.initView();
        this.register();
    },

    onDestroy() {
        if( !Utils.isNull( this.eventIds ) && this.eventIds.length > 0 ) {
            this.unRegisterEvent( this, this.eventIds );
        }
    },

    /**
     * 初始化数据
     */
    initData() {
        this.eventIds = [
            DefEvent.CUSTOM.TEST_0,
            DefEvent.CUSTOM.TEST_1,
        ]
    },

    /**
     * 初始化视图
      */
    initView() {

    },

    /**
     * 注册
     */
    register() {
        if( !Utils.isNull( this.eventIds ) && this.eventIds.length > 0 ) {
            this.registerEvent( this, this.eventIds );
        }
    },

    /**
     * 点击注册事件 回调
     */
    onRegister(){
        this.register();
    },

    /**
     * 点击卸载事件 回调
     */
    onUnRegister() {
        if( !Utils.isNull( this.eventIds ) && this.eventIds.length > 0 ) {
            this.unRegisterEvent( this, this.eventIds );
        }
    },

    /**
     * 提取名字
     * @param path
     */
    extractName( path ) {
        let lastOffset = path.lastIndexOf( "/" );
        return path.substr( lastOffset + 1, path.length );
    },


    /**
     * 通用按钮
     */
    onCommon() {
        let path = "/assets/resources/Script/Core/Define/Login";
        cc.log( this.extractName( path ) );
    },

    /**
     * 登录
     */
    onLogin() {
        let data = {};
        data.count = 55;
        G.ViewManager.openUI( DefView.UI.Loading, data );
    },

    /**
     * 消息事件
     * @param event
     */
    onEvent( event ) {
        switch( event.getId() ) {
            case DefEvent.CUSTOM.TEST_0:
                cc.log( "TEST_0" );
                break;
            case DefEvent.CUSTOM.TEST_1:
                cc.log( "TEST_1" );
                break;
            default:

                break;
        }
    }

    // update (dt) {},
});
