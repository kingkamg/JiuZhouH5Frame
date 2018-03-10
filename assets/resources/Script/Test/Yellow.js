// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

let DefView = require( "DefView" );
let UIBase = require( "UIBase" );
let Log = require( "Log" );
let DefEvent = require( "DefEvent" );

cc.Class({
    extends: UIBase,

    properties: {
        label_text: { default: null, type: cc.Label, toolTip: "打开次数" },

    },

    // LIFE-CYCLE CALLBACKS:

    /**
     * 开始
     */
    start () {

    },

    /**
     * 加载
     */
    onLoad() {
        this.initData();
        this.initView();
        this.register();
    },

    /**
     * 销毁
     */
    onDestroy() {
        // 释放消息
        this.unRegisterEvent( this, this.m_arrEventId );


        this.m_nBlackCount = null;
        this.m_nSelfCount = null;
        this.m_arrEventId = null
    },

    /**
     * 初始化数据
     */
    initData() {
        // 打开黄色次数
        this.m_nBlackCount = 0;
        // 打开自己次数
        this.m_nSelfCount = 0;
        // 注册消息ID集合
        this.m_arrEventId = [DefEvent.CUSTOM.TEST_0, DefEvent.CUSTOM.TEST_1];
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
        this.registerEvent( this, this.m_arrEventId );
    },

    /**
     * 关闭视图
     */
    onCloseUI() {
        G.ViewManager.closeUI( DefView.UI.Yellow );
    },

    /**
     * 打开黑色视图
     */
    onOpenBlack() {
        let data = {};
        data.count = ++this.m_nBlackCount;
        G.ViewManager.openUI( DefView.UI.Loading, data );
    },

    /**
     * 刷新视图
     * @param data
     */
    updateUI( data ) {
        this.label_text.string = data;
    },

    /**
     * 事件接收
     * @param event
     */
    onEvent( event ) {
        let data = event.getData();
        switch( event.getId() ) {
            case DefEvent.CUSTOM.TEST_0:
                Log.print( data );
                break;
            case DefEvent.CUSTOM.TEST_1:
                Log.print( data );
                break;
            case DefEvent.CUSTOM.TEST_2:
                Log.print( data );
                break;
            default:

                break;
        }
    },

    // update (dt) {},
});
