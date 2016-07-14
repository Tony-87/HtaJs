define(["text!./index_list.html", 'base'],
    function (index_list) {
        avalon.templateCache.index_list = index_list
        var vm_il = avalon.define({
            $id: "index_list",
            list_content: "我是列表内容 index_list"

        })


    })
