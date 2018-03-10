/**
 * 例子
 */

let UIBase = require( "UIBase" );
let DefAudio = require( "DefAudio" );

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

    onDestroy() {
        G.AudioManager.stopAll();
    },

    /**
     * 点击播放
     */
    onClickPlay() {
        G.AudioManager.playMusic( DefAudio.MUSIC.GAME_BGM );
    },

    /**
     * 点击停止
     */
    onClickStop() {
        G.AudioManager.stopMusic();
    },

    /**
     * 点击暂停
     */
    onClickPause() {
        G.AudioManager.pauseMusic();
    },

    /**
     * 点击恢复
     */
    onClickResume() {
        G.AudioManager.resumeMusic();
    },

    /**
     * 点击关闭
     */
    onClickClose() {
        G.ViewManager.closePrefab( cc.js.getClassName( this.constructor ) );
    },

    // update (dt) {},
});
