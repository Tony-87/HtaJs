define(["avalon", "text!./ddd.html", "../pager/avalon.pager"],
    function (avalon, ddd) {
        avalon.templateCache.dtmp = ddd
    }

)

function createModuleD(vmID, name) {

   
    var dtmp=avalon.templateCache.dtmp.replace(/d-controller/g,vmID) ;

    avalon.templateCache[vmID] = dtmp
 
  var modelD= avalon.define({
        $id: vmID,
        username: "司徒正美" + name,
        pager: {
            onInit: function (p) {
                console.log("d======初始化分页插件");
            },
            nextText: "下一页",
            prevText: "上一页",
            totalItems: 100,
            showPages: 6,
            onJump: function (e, data) {

                getPageD(modelD, data , 1);
            }
        },
        $skipArray: ["pager"]

        //, $skipArray: ["username"]

    })

}
 
function  getPageD(vm, dataObj, page,objName) {
   // console.log("d page obj = "+typeof(dataObj));
    //console.log("d page obj = "+dataObj);

    var p=page;
    if(dataObj==undefined)
    {
        dataObj=avalon.vmodels[objName];
      //  dataObj.currentPage=page;
    }

    if(dataObj!=undefined)
    {
      //  console.log("dataObj!=undefined");
      //  console.log(JSON.stringify(dataObj));
        p=dataObj.currentPage;
        dataObj.totalItems=1200;
    }
else

    {
      //  console.log("dataObj!=undefined else");

    }
   // console.log("+++++++++ d 请求了第"+p+" 页");

    vm.username=vm.$id+ "dd---"+p;

}

