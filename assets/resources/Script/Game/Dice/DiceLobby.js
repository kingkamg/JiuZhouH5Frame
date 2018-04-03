/**
 * 骰子游戏 大厅
 */

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

    onLoad () {

    },

    start () {

    },

    /**
     * 返回到平台
     */
    onClickGoBackPlatform() {
        G.ViewManager.replaceScene( DefView.SCENE.Platform );
    },

    /**
     * 进入混战模式
     */
    onClickEnterModeMelee() {
        // 发送协议匹配
        G.ViewManager.openPrefab( DefView.PREFAB.DiceModeMelee );
    },

    /**
     * 分享
     */
    onClickShare() {
        G.ViewManager.openPrefab( DefView.PREFAB.DiceShare );
    },

});
