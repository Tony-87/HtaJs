define(["avalon", "text!./content.html", "jquery", "base"], function (avalon, index_content) {
    avalon.templateCache.index_content = index_content;
   
    var vm_lc = avalon.define({
        $id: "index_content",
        index_content:"我是index_content的内容"

    });

})