require(["domReady", 'base'], function () {//第二块，添加根VM（处理共用部分）

    var model = avalon.define({
        $id: "main_people",
        people_content: '我是主页内容',

        m_header: '',
        m_list: ''

    })

    //第三块，加载其他模块
    require(['modules/common/header.js',
            'modules/people/list/thesis_list.js'],
        function () {
            model.m_header = "header";
            model.m_content = "index_content";
            model.m_list = "index_list";
        });

    require([GLOBAL.moduleDir + 'modules/common/head.js',
        GLOBAL.moduleDir + 'modules/people/people_head.js',
        GLOBAL.moduleDir + 'modules/people/people_nav.js'
    ], function () {
        avalon.vmodels.people_root.header = "header"
        avalon.vmodels.people_root.people_head = "people_head"
        avalon.vmodels.people_root.people_nav = "people_nav";
    });

    avalon.scan()


});