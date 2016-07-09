
require(["jquery","base"], function() {
    //全局变量
    console.log("script 2 load completely");

    console.log("script 2 : window.GLOBAL.token="+window.GLOBAL.token);
    console.log("script 2 : window.GLOBAL="+window.GLOBAL);
    console.log("script 2 : window.GLOBAL.token="+window.GLOBAL.token);
    /*  //模拟登陆
     var loginUrl=GLOBAL.ajaxUrl+"/user/signin";
     var reqData={"email":"zhangsan@bimt.com","password":"111111"}
     // url, data, async, type, dataType, successfn, errorfn
     $.axs(loginUrl,reqData,function (data) {
     alert(data);
     GLOBAL.token=data.result;
     })*/
});


require([ ], function() {
    console.log("script 2.5 '' load completely");
});

require([ ], function() {

    setTimeout(function () {
        console.log("script 2.4 == token =="+GLOBAL.token);
        console.log("script 2.4 == token cookie =="+$.cookie("token"));
    },1000)
    console.log("script 2.4 '' load completely");
});

