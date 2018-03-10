let DefView = require( "DefView" );
let UIBase = require( "UIBase" );

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
     * 点击切换场景
     */
    onClickReplaceScene() {
        G.ViewManager.replaceScene( DefView.SCENE.Login );
    },

    /**
     * 点击打开视图
     */
    onClickOpenView() {
        G.ViewManager.openPrefab( DefView.PREFAB.Audio );
    },

    /**
     * 点击打开网页
     */
    onClickOpenHttps() {
        G.ViewManager.openPrefab( DefView.PREFAB.Yellow );
    },

    /**
     * 点击关闭
     */
    onClickClose() {
        G.ViewManager.closePrefab( cc.js.getClassName( this.constructor ) );
    },

    // update (dt) {},
});
