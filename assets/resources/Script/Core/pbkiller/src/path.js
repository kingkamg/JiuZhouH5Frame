/**
 * Author: luyang(yanghr0209@gmail.com)
 * Copyright (c) 2018-03
 */

module.exports = {
    /**
     * 子路径字符串
     * @param {String} subPath 
     */
    resolve(subPath) {
        return cc.url.raw(`resources/${subPath}`);
    },
    
    join() {
        return cc.path.join.apply(null, arguments);
    }
}