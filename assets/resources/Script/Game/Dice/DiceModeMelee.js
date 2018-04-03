/**
 * 骰子游戏 混战模式
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

    // onLoad () {},

    start () {

    },

    /**
     * 点击返回 关闭当前预制
     */
    onClickClose() {
        G.ViewManager.closePrefab( DefView.PREFAB.DiceModeMelee );
    },


    /**
     * 点击随机匹配
     */
    onClickRandomMatch() {
        // 发送协议匹配
        G.ViewManager.replaceScene( DefView.SCENE.DicePlay );
    },

    // update (dt) {},
});
