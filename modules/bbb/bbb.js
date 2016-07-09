
define(["avalon", "text!./bbb.html", "../pager/avalon.pager"], function(avalon, bbb) {
    avalon.templateCache.btmp = bbb
})

function  createModuleB(vmID,name) {
    avalon.define({
        $id: vmID,
        //username: "通过load修改的模板"+name,
        userImg:""
    })
 
}

