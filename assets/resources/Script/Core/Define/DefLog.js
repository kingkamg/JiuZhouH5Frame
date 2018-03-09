/**
 * 错误类型
 */
const TYPE = {
    CODER_ERROR: 0,
    CODER_WARN: 1,
    CODER_PRINT: 2,

    PLAYER_ERROR: 10,
    PLAYER_WARN: 11,
    PLAYER_PRINT: 12,

};

/**
 * 程序员打印
 */
const CODER = {
    CODER_1: "第一个参数错误",
    CODER_2: "第二个参数错误",
    CODER_3: "第三个参数错误",
    CODER_4: "第四个参数错误",

    CODER_10: "场景加载成功",
    CODER_11: "视图加载成功",

};

/**
 * 玩家打印
 */
const PLAYER = {

};

module.exports = {
    TYPE: TYPE,
    CODER: CODER,
    PLAYER: PLAYER,
};