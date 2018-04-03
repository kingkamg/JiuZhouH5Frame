let UIBase = require( "UIBase" );
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

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {

    },

    /**
     * 点击分享微信
     */
    onClickShareWechat() {
        // 调用sdk分享到微信

    },

    /**
     * 点击分享QQ
     */
    onClickShareQQ() {
        // 调用sdk分享到QQ

    },

    /**
     * 点击关闭
     */
    onClickClose() {
        G.ViewManager.closePrefab( DefView.PREFAB.DiceShare );
    },

    // update (dt) {},
});
