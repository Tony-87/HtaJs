/**
 * Created by wxb on 2016/7/10.
 */

require.config({
    paths: {
        "jquery": "jquery-1.7.2.min",
        "mmCC": "moduleC"
    },
    shim:{
        "mmCC":{exports:"modC"},
        'moduleA': {
            deps: ['jquery'],
            exports:'mA'
        },
        'director':{
            exports:'listener'
        }
    }
});

console.log("load main.js ok 1");
require(["director"],function(director2){
    console.log(director2);
})
require(["mmCC"],function(director2){
    console.log(director2);
    director2.funCB()
})
require(['moduleA', 'jquery','moduleB', "math"], function (mA,jq, moduleB, mathF) {
    // some code here
console.log(mA);
    console.log(mathF);
    console.log("load A,B,C ok");

    funA_a();

   // moduleA.funA_a();
   // moduleB.funB_a();
  //   funC_a();
 //   modC.funCB();
  // mmC.funCB();
    var sum= mathF.add(4,5);
    console.log(sum);


});

console.log("load main.js ok 2");
