require(["domReady", "base"], function () {
    var model = avalon.define({
        $id: "main_index",
        title: "我是主页入口文件",
        content: "我是主文件main_index的内容",
        m_header: '',
        m_content: '',//m 开头的都是模块，include进来的
        m_list: '',

        load_content: load_content,
        load_list: load_list

    })
    //第三块，加载其他模块
    require(['modules/common/header.js',
            'modules/index/content/content.js',
            'modules/index/list/index_list.js'],
        function () {
            model.m_header = "header";
            model.m_content = "index_content";
            model.m_list = "index_list";
        });
    setTimeout(function(){
        console.log(999999999999);
        model.content="我变了"
    },2000)
    avalon.scan()

    //加载默认数据
    load_content();

    //定义方法
    function load_content() {

    }

    function load_list() {

    }



});