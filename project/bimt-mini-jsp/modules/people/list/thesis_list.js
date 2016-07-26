define(["avalon", "text!./thesis_list.html", "jquery", "layer", "../../pager/avalon.pager"],
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
        moduleTitle: "发表的学术论文",
        morelink: "",//更多
        showpage: showpage, //是否显示分页
        ajaxCount:0,
        result: {}, //数据对象
        data_list: [],//数据列表
        show_thesis_summary: function (el) {
            layer.alert(el.summary);
        },
        remove: function ($remove, el) {
            layer.confirm('确定要删除该论文吗?',
                {icon: 3, title: '提示'},
                function (index) {
                    deleteThesisAPI($remove, el);
                    layer.close(index);
                });
        },
        uploadThesis: function (el) {
            require([GLOBAL.moduleDir + 'modules/people/other/thesisupload_win.js'], function () {
                var vmodelsID = vmID + "_" + el.thesisId;

                if (avalon.vmodels[vmodelsID + "_thesisupload_win"] == undefined) {
                    createUploadThesisWin(vmodelsID);
                    avalon.vmodels[vmodelsID + "_thesisupload_win"].result = el;
                    //avalon.vmodels[vmodelsID + "_thesisupload_win"].result= {"thesisId":el.thesisId};
                }

                //页面层
                layer.open({
                    type: 1, title: "上传论文", area: ['630px', '460px'], //宽高
                    content: avalon.templateCache[vmodelsID + "_thesisupload_win"]
                });

                avalon.scan();
            });

        },
        pager: {
            nextText: "下一页",
            prevText: "上一页",
            totalItems: 100,
            showPages: 5,
            onJump: function (e, data) {
               main_people_turnpage(location, data.currentPage);
                getPageThesis(vmID, data.currentPage);
            }
        },
        $skipArray: ["pager"]
    })
}

//删除论文
function deleteThesisAPI($remove, obj_thesis) {
    var url = GLOBAL.ajaxUrl + '/homepage/deleteThesis';
    var reqData = {"token": GLOBAL.token, "thesisId": obj_thesis.thesisId};
    $.axs(url, reqData, function (data) {
        $remove();
    });
}

//获取分页数据
function getPageThesis(vmID, page) {

    console.log(page);
    var url = GLOBAL.ajaxUrl + '/homepage/thesisListInfo';
    var reqData = {
        "token": GLOBAL.token,
        "loginName": avalon.vmodels.people_root.params["lname"],
        "pageNo": page,
        "pageSize": GLOBAL.pageSize
    };
    console.log(  avalon.vmodels[vmID].ajaxCount+"-888888888888");
    avalon.vmodels[vmID].ajaxCount++;
    $.axs(url, reqData, function (data) {
        avalon.vmodels[vmID].data_list = data.result.list;
        if (page != 1)
            avalon.vmodels[vmID + "_page"].currentPage = page;
    });
}

