define(["avalon", "text!./thesis_list.html", "base"],
    function (avalon, thesis_list) {
        avalon.templateCache.thesis_list = thesis_list
    }
)

//创建论文列表模块
function createThesisListModule(vmID, showpage) {

    vmID = vmID + "_thesis_list";
    avalon.templateCache[vmID] = avalon.templateCache.thesis_list.replace(/thesis_list/g, vmID);

    var model = avalon.define({
        $id: vmID,

        morelink: ""  //更多

    })
}
