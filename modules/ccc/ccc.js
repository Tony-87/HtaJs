
define(["avalon", "text!./ccc.html", "../pager/avalon.pager"], function(avalon, ccc) {
    avalon.templateCache.ctmp = ccc
})

function  createModuleC(vmID,name) {

    // avalon.templateCache[vmID] = avalon.templateCache.ctmp.replace("c-controller",vmID).replace("c_page","c_page_"+vmID);
   avalon.templateCache[vmID] = avalon.templateCache.ctmp.replace(/c-controller/g,vmID) ;

  var modelC=  avalon.define({
        $id: vmID,
        username: "司徒正美"+name,
        pageName:"c_page",
        age:"19",
        degree:2,
        xuewei:2,
        beginDate:'2016-05-21',
        beginMonth: 4,
        pager: {
            onInit: function (p) {
                console.log("c======初始化分页插件");
            },
            nextText: "下一页",
            prevText: "上一页",
            totalItems: 100,
            showPages: 6,
            onJump: function (e, data) {
                getPageC(modelC, data , 1);
            }
        },
        $skipArray: ["pager"]
    })
 
}


function  getPageC(vm, dataObj, page,objName) {

    var p=page;
    if(dataObj==undefined)
    {
        dataObj=avalon.vmodels[objName];
        dataObj.currentPage=page;
    }


    if(dataObj!=undefined)
    {

        //  console.log(JSON.stringify(dataObj));
        p=dataObj.currentPage;
        dataObj.totalItems=1600;
    }

    //console.log("++++++++++++++++++++++++ c 请求了第"+p+" 页");

    vm.username=vm.$id+ "c---"+p;


}

