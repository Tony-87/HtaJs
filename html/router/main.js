require.config({//第一块，配置
    baseUrl: '../../',
    paths: {
        jquery: 'js/jquery/jquery-1.7.2.min',
        //avalon: "js/avalon/avalon-2.10",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        avalon: "js/avalon/avalon-1.46",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        mmHistory: 'js/avalon/mmHistory',
        mmRouter: 'js/avalon/mmRouter',
        text: 'js/require/text',
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
        }
    }
});


require(['avalon', "domReady", "mmRouter", "domReady"], function () {//第二块，添加根VM（处理共用部分）
    avalon.templateCache["empty"] = "&nbsp;"
    
    var model = avalon.define({
        $id: "root",
        header: "这是根模块，用于放置其他模块都共用的东西，比如<b>用户名</b>什么的",
        footer: "页脚消息",
        page: "empty",
        currPath: "",
        params: {},
        query: {},
        args: "[]",

        page_render: function () {

        }
    })

    console.log(location.hash);
    console.log(location.host);
    console.log(location.hostname);
    console.log(location.href);
    console.log(location.pathname);
    console.log(location.port);
    console.log(location.protocol);
    console.log(location.search);


    //导航回调
    function callback() {

        model.currPath = this.path
        model.params = this.params
        model.query = this.query
        model.args = "[" + [].slice.call(arguments, 0) + "]"

        // model.params["lname"] = model.params["lname"] == undefined ? "i" : model.params["lname"];
        // model.params["ptype"] = model.params["ptype"] == undefined ? "all" : model.params["ptype"];
        // model.params["page"] = model.params["page"] == undefined ? "1" : model.params["page"];

        if(model.params["ptype"]!=undefined)
        {
            loadTemplate(model.params["ptype"]);
        }
        
    }

    //要监控的路由
    avalon.router.get("/", callback)
    avalon.router.get("/{lname}", callback)
    avalon.router.get("/{lname}/{ptype}", callback)
    avalon.router.get("/{lname}/{ptype}/{page}", callback)

    avalon.history.start({
        basepath: "/avalon"
    })

    avalon.scan();

});