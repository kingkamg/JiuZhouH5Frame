/**
 * 按钮
 */

let UIBase = require( "UIBase" );
let DefEvent = require( "DefEvent" );
let EventMsg = require( "EventMsg" );

const SEND_COUNT = 1;

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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    /**
     * 发送消息
     */
    onSendMsg() {
        let msg = new EventMsg();
        msg.setId( DefEvent.CUSTOM.VIEW_1 );
        msg.setData( 999 );
        for( let i = 0; i < SEND_COUNT; ++i ) {
            this.sendEvent( msg );
        }
    },

    // update (dt) {},
});
