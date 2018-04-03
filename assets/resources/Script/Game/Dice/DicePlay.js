/**
 * 骰子游戏 游戏内
 */

let UIBase = require( "UIBase" );
let DefView = require( "DefView" );
let Utils = require( "Utils" );

cc.Class({
    extends: UIBase,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    /**
     * 选择个数
     */
    onSelectAge() {
        if( Utils.isNull( G.ViewManager.findPrefab( DefView.PREFAB.DiceSelectAge ) ) ) {
            G.ViewManager.openPrefab( DefView.PREFAB.DiceSelectAge );
        }
    },

    /**
     * 选择点数
     */
    onSelectPoint() {
        G.ViewManager.openPrefab(  );
    },

    /**
     * 返回到大厅
     */
    onClickGoBackLobby() {
        G.ViewManager.replaceScene( DefView.SCENE.DiceLobby );
    },

    /**
     * 随机匹配
     */
    onClickRandomMatch() {
        // 发送协议匹配

    },

    /**
     * 分享
     */
    onClickShare() {
        G.ViewManager.openPrefab( DefView.DiceShare );
    },

    // update (dt) {},
});
