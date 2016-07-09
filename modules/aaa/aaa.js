define(["avalon", "text!./aaa.html", "jquery", "kindeditor"], function (avalon, aaa, jq, KindEditor) {

    avalon.templateCache.aaa = aaa
    var model = avalon.define({
        $id: "aaa",
        result: {"name": "resultName", "title": "resultTitle"},
        username: "最普通模板",
        edu_list: [{"id": 1, "name": "name1"}]
    })
    avalon.vmodels.root.page = "aaa"

    //model.edu_list.push({"id":1,"name":"name1"});
    model.edu_list.push({"id": 2, "name": "name2"});
    model.edu_list.push({"id": 3, "name": "name3"});

    function aaaTest2()
    {
        console.log("aaaTest2");
    }

return this;

})


function aaaTest()
{
    console.log("aaaTest");
}