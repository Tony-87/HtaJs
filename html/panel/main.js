require.config({//第一块，配置
    baseUrl: '../../',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        //avalon: "js/avalon/avalon-2.10",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        avalon: "js/avalon/avalon-1.46",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'js/require/text',
        "kindeditor":"js/jquery/kindeditor-all-min",
        domReady: 'js/require/domReady',
        css: 'js/require/css'
    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        },
        kindeditor:{
            exports:"kindeditor"
        }
    }
});


require(['avalon', "domReady"], function () {//第二块，添加根VM（处理共用部分）
    avalon.log("加载avalon完毕，开始构建根VM与加载其他模块")
    avalon.templateCache["empty"]= "&nbsp;"
   var model= avalon.define({
        $id: "root",
        header: "这是根模块，用于放置其他模块都共用的东西，比如<b>用户名</b>什么的",
        footer: "页脚消息",
        type:12,
        page: "empty",

        page2: "empty",
        page3: "",

        moduleC1:"",
        moduleC2:"",

        moduleD2:"empty",
        moduleD3Str:"moduleD3Str",

        page2_load: function (tmpl) {
            if (tmpl != "&nbsp;") {
                tmpl = tmpl.replace("b-controller", "b2");
                console.log("page2_load");
            }
            console.log("====== page2_load =========");
            model.page3_load=function(tmpl){
                if (tmpl != "&nbsp;") {
                    tmpl = tmpl.replace("b-controller", "b3");
                    console.log("page3_load");
                }
                console.log("====== page333_load =========");
                return tmpl;
            }
            return tmpl;
        },
        page3_load: function (tmpl) {
            if (tmpl != "&nbsp;") {
                tmpl = tmpl.replace("b-controller", "b3");
                console.log("page3_load");
            }
            console.log("====== page3_load =========");
            return tmpl;
        },
        modulec_render:function () {
            console.log("c render===="+model.moduleC1);
            if(avalon.vmodels.c2)
            getPageC(avalon.vmodels.c2,undefined,22,"c2_page")
        },
       test:function(val){
          // console.log("test--------");
          // avalon.vmodels.root.page2='empty';
          // avalon.scan();
           model.type=val;
       }
    })
    //avalon.scan(document.body)

    require(['modules/aaa/aaa'], function () {//第三块，加载其他模块
        avalon.log("加载其他完毕")
    });

    require(['modules/bbb/bbb'], function () {//第三块，加载其他模块
        avalon.log("加载bbb其他完毕")

        createModuleB("b2", "b2");
        avalon.vmodels.root.page2 = "btmp";
        createModuleB("b3", "b3");
        avalon.vmodels.root.page3 = "btmp";
    });

    require(['modules/ccc/ccc'], function () {//第三块，加载其他模块
        avalon.log("加载ccc其他完毕")

        createModuleC("c1", "c1");
        avalon.vmodels.root.moduleC1 = "c1";

        createModuleC("c2", "c2");
        avalon.vmodels.root.moduleC2 = "c2";

    });

    require(['modules/ddd/ddd',"jquery"], function () {//第三块，加载其他模块
        avalon.log("加载ddd其他完毕")

        createModuleD("moduleD1", "moduleD1");
        $("#moduleD1").html(avalon.templateCache["moduleD1"]);

        createModuleD("moduleD2", "moduleD2");
        $("#moduleD2").html(avalon.templateCache["moduleD2"]);

        avalon.scan(document.body);

        createModuleD("moduleD3", "moduleD3");
        model.moduleD3Str=avalon.templateCache["moduleD3"];

        getPageD(avalon.vmodels.moduleD3,undefined,13,"moduleD3_page")
        getPageD(avalon.vmodels.moduleD2,undefined,12,"moduleD2_page")

        console.log("d====修改页码");

    });
    avalon.scan(document.body);

});