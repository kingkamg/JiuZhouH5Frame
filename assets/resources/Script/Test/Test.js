/**
 * 测试
 */

let ViewBase = require( "ViewBase" );
let DefMsg = require( "DefMsg" );
let EventManager = require( "EventManager" );
let Utils = require( "Utils" );

cc.Class({
    extends: ViewBase,

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
        if( !Utils.isNull( this.msgIds ) && this.msgIds.length > 0 ) {
            this.unRegisterEvent( this, this.msgIds );
        }
    },

    /**
     * 初始化数据
     */
    initData() {
        this.msgIds = [
            DefMsg.CUSTOM_ID.TEST_0,
            DefMsg.CUSTOM_ID.TEST_1,
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
        if( !Utils.isNull( this.msgIds ) && this.msgIds.length > 0 ) {
            this.registerEvent( this, this.msgIds );
        }
    },

    /**
     * 点击卸载事件 回调
     */
    onUnRegister() {
        if( !Utils.isNull( this.msgIds ) && this.msgIds.length > 0 ) {
            this.unRegisterEvent( this, this.msgIds );
        }
    },

    /**
     * 消息事件
     * @param msgNode
     */
    onMessageEvent( msgNode ) {
        switch( msgNode.getId() ) {
            case DefMsg.CUSTOM_ID.TEST_0:
                cc.log( "TEST_0" );
                break;
            case DefMsg.CUSTOM_ID.TEST_1:
                cc.log( "TEST_1" );
                break;
            default:

                break;
        }
    }

    // update (dt) {},
});
