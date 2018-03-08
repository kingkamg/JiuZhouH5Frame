require("NetSocket");

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        // this.asyncLoad();

        NetSocket.on( "__Connect", (eventName) => {
            cc.log( "eventName = " + eventName );
            this.label.string = "NetSocket Connect " + eventName;
            // NetSocket.on( PB.ActionCode.EnterRoot.toString(), ( protoData )=>{
            //     let data = PB.Player.decode(protoData);
            //     this.resEnterRoot(data);
            // });

            this.sendMsg();
        });
        
    },

    loadProto: function () {
        PB = PBKiller.loadAll('proto', 'grace.proto.msg');
    },
    asyncLoad: function () {
        PBKiller.preload(() => {
            this.loadProto();
        });
    },
    sendMsg: function () {

        let player = new PB.Player();
        player.id = 1000;
        player.name = 'jiuzhou';
        player.enterTime = Date.now();
        // cc.log( "player : " + player.toArrayBuffer() );
        NetSocket.send( PB.ActionCode.EnterRoot, player,(protoData)=>{
            let data = PB.Player.decode(protoData);
            this.resEnterRoot( data );
        } );

    },

    resEnterRoot: function( data ) {
        cc.log( "data : " + data );
        cc.log( "data.id : " + data.id );
        cc.log( "data.name : " + data.name );
        cc.log( "data.enterTime : " + data.enterTime );
        
    },

    // called every frame
    update: function (dt) {

    },
});
