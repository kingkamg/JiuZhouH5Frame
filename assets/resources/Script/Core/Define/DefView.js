/**
 * 间隔
 */
const SPAN = 100;

/**
 * 视图 层级
 */
const ZORDER = {
    BOTTOM: SPAN * 0,
    UI: SPAN * 1,
    POPUP: SPAN * 2,
    TOP: SPAN * 3,
    SYSTEM: SPAN * 4,
};

/**
 * 预制路径
 */
const UI_PATH = "Prefab/";

/**
 * 场景路径
 */
const SCENE_PATH = "Scene/";

/**
 * 场景
 */
const SCENE = {
    Loading: "Loading",
    Login: "Login",
};

/**
 * UI
 */
const UI = {
    Loading: "Loading"
};

module.exports = {
    SPAN: SPAN,
    ZORDER: ZORDER,
    UI_PATH: UI_PATH,
    SCENE: SCENE,
    UI: UI,
};