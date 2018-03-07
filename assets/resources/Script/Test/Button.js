/**
 * 按钮
 */

let ViewBase = require( "ViewBase" );
let DefMsg = require( "DefMsg" );
let MsgNode = require( "MsgNode" );

const SEND_COUNT = 100;

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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    /**
     * 发送消息
     */
    onSendMsg() {
        let msgNode = new MsgNode();
        msgNode.setId( DefMsg.CUSTOM_ID.TEST_1 );
        msgNode.setData( 999 );
        for( let i = 0; i < SEND_COUNT; ++i ) {
            this.sendMsg( msgNode );
        }
    },

    // update (dt) {},
});
