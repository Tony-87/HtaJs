/**
 * Created by admin on 2016/7/28.
 */
define(["avalon", "text!./people_all.html", "jquery", 'base'], function (avalon, people_all) {
    avalon.templateCache.people_all = people_all

    var model = avalon.define({
        $id: "people_all",
        thesis_list: '', 
        result: {},
        data_list: [],
        init_thesis_list: content_render2
    })

    //left
    require([ 'modules/people/subpage/list/thesis_list.js'
    ], function () {
        createThesisListModule("people_all",true);
   model.thesis_list = "people_all_thesis_list";

    });


    avalon.scan();

    function content_render2() {
        console.log("people all render2");
    }
})


 