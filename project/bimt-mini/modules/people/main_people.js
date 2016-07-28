require(["domReady", 'base'], function () {//第二块，添加根VM（处理共用部分）

    var model = avalon.define({
        $id: "main_people",
        people_content: '我是主页内容',

        m_header: '',
        m_content: '',
        m_list: '',
        content_render: function () {
            console.log("people content render1"+new Date());
        }

    })

    //第三块，加载其他模块
    require(['modules/common/header.js',
            'modules/people/subpage/people_all.js'],
        function () {
            setTimeout(function(){

            },1000)
            model.m_header = "header";
            model.m_content = "people_all";
        });


    avalon.scan()


});