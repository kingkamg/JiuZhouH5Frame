/**
 * 音乐
 * @type {Function}
 */

let AudioBase = require( "AudioBase" );

let AudioMusic = cc.Class({
    extends: AudioBase,

    /**
     * 构造
     */
    ctor() {
        // 是否循环
        this.m_bIsLoop = true;
    },

});

module.exports = AudioMusic;