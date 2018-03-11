// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

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
