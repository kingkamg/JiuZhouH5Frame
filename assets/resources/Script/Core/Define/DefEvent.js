
/**
 * 间隔ID
 * @type {number}
 */
const SPAN = 3000;

/**
 * 事件ID段
 */
const EVENT = {
    VIEW: SPAN * 0,
    NET: SPAN * 1,
    AUDIO: SPAN * 2,
};

/**
 * 自定义ID
 */
const CUSTOM = {
    // VIEW
    TEST_0: EVENT.VIEW+0,
    TEST_1: EVENT.VIEW+1,
    TEST_2: EVENT.VIEW+2,
};

module.exports = {
    SPAN: SPAN,
    EVENT: EVENT,
    CUSTOM: CUSTOM,
};