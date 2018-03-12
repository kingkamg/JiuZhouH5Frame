/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

let UIBase = require( "UIBase" );
let DefView = require( "DefView" );
let DefEvent = require( "DefEvent" );
let Log = require( "Log" );

cc.Class({
    extends: UIBase,

    properties: {
        label_text: { default: null, type: cc.Label, toolTip: "打开次数" },

    },

    // LIFE-CYCLE CALLBACKS:

    start () {

    },

    onLoad() {
        this.initData();
        this.initView();
        this.register();
    },

    /**
     * 初始化数据
     */
    initData() {
        // 打开黄色次数
        this.m_nYeloowCount = 0;
        // 打开自己次数
        this.m_nSelfCount = 0;
    },

    /**
     * 初始化视图
     */
    initView() {
        this.label_text.string = this.m_nSelfCount;
    },

    /**
     * 注册
     */
    register() {

    },

    /**
     * 关闭视图
     */
    onClose() {
        let data = "您好";
        this.sendEvent( DefEvent.CUSTOM.VIEW_0, data );
        this.sendEvent( DefEvent.CUSTOM.VIEW_1, data );
        G.ViewManager.closePrefab( DefView.PREFAB.Loading );
    },

    /**
     * 打开黄色视图
     */
    onOpenYellow() {
        let data = ++this.m_nYeloowCount;
        G.ViewManager.openPrefab( DefView.PREFAB.Yellow, data );
    },

    /**
     * 刷新视图
     * @param data
     */
    refresh( data ) {
        this.label_text.string = data.count;
    },

    // update (dt) {},
});
