/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 例子
 */

let UIBase = require( "UIBase" );
let DefView = require( "DefView" )

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
     * 点击声音
     */
    onClickAudio() {
        G.ViewManager.openPrefab( DefView.PREFAB.Audio );
    },

    /**
     * 点击事件
     */
    onClickEvent() {
        G.ViewManager.openPrefab( DefView.PREFAB.Event );
    },

    /**
     * 点击视图
     */
    onClickView() {
        G.ViewManager.openPrefab( DefView.PREFAB.View );
    },


    // update (dt) {},
});
