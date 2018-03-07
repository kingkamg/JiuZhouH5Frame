
/**
 * 间隔ID
 * @type {number}
 */
const SPAN_ID = 3000;

/**
 * 事件ID段
 * @type {{VIEW: number, NET: number}}
 */
let EVENT_ID = {
    VIEW: 0,
    NET: SPAN_ID * 1,
};

module.exports = {
    EVENT_ID: EVENT_ID,
    SPAN_ID: SPAN_ID,
};