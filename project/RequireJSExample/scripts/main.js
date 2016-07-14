/**
 * Created by wxb on 2016/7/14.
 */
/*入口脚本*/
require.config({
    baseUrl: "scripts/",
    paths: {
        "util": "helper/util"
    },
    waitSeconds: 15,
    map: {
        '*': {
            'css': 'lib/css'
        }
    },
    shim : {
        'util': ['css!../style/1.css']
    }
});

require(["util"], function(util) {
    // todo
});