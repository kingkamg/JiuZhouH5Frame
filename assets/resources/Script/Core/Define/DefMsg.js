
/**
 * 间隔ID
 * @type {number}
 */
const SPAN_ID = 3000;

/**
 * 事件ID段
 */
let EVENT_ID = {
    VIEW: 0,
    NET: SPAN_ID * 1,
    AUDIO: SPAN_ID * 2,
};

/**
 * 自定义ID
 * @type {{}}
 */
let CUSTOM_ID = {
    // VIEW
    TEST_0: EVENT_ID.VIEW+0,
    TEST_1: EVENT_ID.VIEW+1,
};

module.exports = {
    SPAN_ID: SPAN_ID,
    EVENT_ID: EVENT_ID,
    CUSTOM_ID: CUSTOM_ID,
};