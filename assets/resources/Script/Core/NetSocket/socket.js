
function Socket(host) {
    this.sequence = 0;
    this.queue = {};
    this.IsConnect = false;
    this.ws =  new WebSocket(host);
    this.ws.binaryType = "arraybuffer";
    this.ws.onmessage = this.message.bind(this);
    this.ws.onopen = this.connected.bind(this);
    this.ws.onerror = this.onerror.bind(this);
    this.ws.onclose = this.onclose.bind(this);
    // this.ws.on('connected', this.connected.bind(this));
    // this.ws.on('message', this.message.bind(this));
    this.notification = new cc.EventTarget();
}


Socket.prototype = {
    connected() {
        this.IsConnect = true;
        this.notification.emit( "__Connect", "success");
        cc.log( "send message end" );
    },

    message(event) {

        console.log("response text msg: " + event.data);

        // let player = PB.Player.decode( event.data );
        // cc.log(`反序列化后：${JSON.stringify(player, null, 4)}`);
        // { return }
        var pbMessage = PB.PBMessage.decode(event.data);    
        var callback = this.queue[pbMessage.sequence];
        
        delete this.queue[pbMessage.sequence];
        try{
            if (callback) {
                callback(pbMessage.data);
            }
            this.notification.emit(pbMessage.actionCode.toString(), pbMessage.data);
        }catch(e) {

        }

    },

    on(actionCode, cb) {
        this.notification.on(actionCode.toString(), (event) => {
            if (cb) {
                cb(event.detail);
            }
        })    
    },

    send(actionCode, proto, callback) {
        if( this.ws.readyState !== WebSocket.OPEN )
        // if( !this.IsConnect )
        {
            cc.log( "NetSocket Connect Failure. IsConnect as false" );
            return;
        }
        // let str = actionCode + ":" + proto;
        // // this.ws.send( str );
        // this.ws.send( proto );
        // { return }
        var base = new PB.PBMessage();   
        base.actionCode = actionCode;
        base.sequence = this.sequence;
        base.data = proto.toArrayBuffer();
        this.ws.send(base.toArrayBuffer());
        
        this.queue[this.sequence++] = callback;
    },

    onerror( event ){
        this.IsConnect = false;
        this.notification.emit( "__Connect", "error");
        cc.log(" onerror IsConnect false ");
    },
    onclose( event ){
        this.IsConnect = false;
        this.notification.emit( "__Connect", "close");
        cc.log(" onclose IsConnect false ");
    }
}

var socket = null;

module.exports = function(host) {
    if (!socket) {
        socket = new Socket(host);
    }
    return socket;
}