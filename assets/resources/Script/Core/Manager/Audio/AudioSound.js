/**
 * 音效
 * @type {Function}
 */

let AudioBase = require( "AudioBase" );

let AudioSound = cc.Class({
    extends: AudioBase,

    /**
     * 构造
     */
    ctor() {
        // 是否循环
        this.m_bIsLoop = false;
    },

});

module.exports = AudioSound;