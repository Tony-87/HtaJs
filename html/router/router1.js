require(['avalon', "mmRouter", "domReady" ], function () {//第二块，添加根VM（处理共用部分）
    avalon.templateCache.empty = "&nbsp;"

    var model = avalon.define({
        $id: "people_root",
        people_head: 'empty',
        people_nav: 'empty',
        people_content: 'empty',
        result: {},
        currPath: "",
        params: {},
        query: {},
        args: "[]",
        nav_render: function () {
            console.log("people_nav - nav_render");
            if (avalon.vmodels.people_nav) {
                avalon.vmodels.people_nav.activeNode = model.params["ptype"];
                var targetName = model.params["lname"];
                console.log("targetName==" + targetName);
                avalon.vmodels.people_nav.data_list.forEach(function (el) {
                    //targetName=targetName==""?"i":targetName;
                    el.lname = targetName;
                })

            }
        }
    })
 

 
});
