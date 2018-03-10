/**
 * 事件管理器
 * @type {Function}
 */

let AudioMusic = require( "AudioMusic" );
let AudioSound = require( "AudioSound" );
let Utils = require( "Utils" );

// 实例化对象
let instance = null;

let AudioManager = cc.Class({

    /**
     * 静态
     */
    statics: {

        /**
         * 获取实例
         * @returns {Function}
         */
        getInstance() {
            if( instance === null ) {
                instance = new AudioManager();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {
        // 音乐ID 因为背景音乐唯一 { object }
        this.m_objMusic = null;
        // 音效ID 列表 { array object }
        this.m_arrSound = [];
        // // 语音ID 列表 { array object }
        // this.m_arrVoice = [];

    },

    /**
     * 播放音乐
     * @param path {string} 路径+文件
     * @param loop {boolean} 是否循环
     * @param volume {float} 音量
     */
    playMusic( path, loop, volume ) {
        if( !Utils.isNull( this.m_objMusic ) ) {
            this.m_objMusic.stop();
            this.m_objMusic = null;
        }
        let audio = new AudioMusic( path, loop, volume );
        let id = audio.play();
        cc.audioEngine.setFinishCallback( id, this.onPlayMusicFinish.bind( this ) );
        this.m_objMusic = audio;
    },

    /**
     * 播放音效
     * @param path
     * @param volume
     */
    playSound( path, volume ) {
        let audio = new AudioSound( path, volume );
        let id = audio.play();
        cc.audioEngine.setFinishCallback( id, this.onPlaySoundFinish.bind( this ) );
        this.m_arrSound[id] = audio;
    },

    /**
     * 停止音乐
     */
    stopMusic() {
        let audio = this.m_objMusic;
        if( !Utils.isNull( audio ) ) {
            audio.stop();
            this.m_objMusic = null;
        }
    },

    /**
     * 停止音效
     * @param id
     */
    stopSound( id ) {
        let audio = this.m_arrSound[id];
        if( !Utils.isNull( audio ) ) {
            audio.stop();
            this.m_arrSound.splice(id, 1);
        }
    },

    /**
     * 暂停音乐
     */
    pauseMusic() {
        let audio = this.m_objMusic;
        if( !Utils.isNull( audio ) ) {
            audio.pause();
        }
    },

    /**
     * 暂停音效
     * @param id
     */
    pauseSound( id ) {
        let audio = this.m_arrSound[id];
        if( !Utils.isNull( audio ) ) {
            audio.pause();
        }
    },

    /**
     * 恢复音乐
     */
    resumeMusic() {
        let audio = this.m_objMusic;
        if( !Utils.isNull( audio ) ) {
            audio.resume();
        }
    },

    /**
     * 恢复音效
     * @param id
     */
    resumeSound( id ) {
        let audio = this.m_arrSound[id];
        if( !Utils.isNull( audio ) ) {
            audio.resume();
        }
    },

    /**
     * 播放音乐完成
     * @param event
     */
    onPlayMusicFinish( event ) {
        this.m_objMusic = null;
    },

    /**
     * 播放音效完成
     * @param event
     */
    onPlaySoundFinish( event ) {
        let id = event.getCurrentTarget().instanceId;
        this.m_arrSound.splice( id, 1 );
    },

});

module.exports = AudioManager;