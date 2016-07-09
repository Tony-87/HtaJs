/**
 * Created by hwb on 2016/6/2.
 */
$(function(){
    function intborder(obj){
    $(obj).focus(function(){
        $(this).css("border","1px solid #31ae94");
    });
    $(obj).focusout(function(){
        $(this).css("border","1px solid #CCCCCC");
    });
    }
    intborder(".borderStyl");
    intborder(".textStyle");
	 //右侧浮动元素选择
    var oDiv = document.getElementById('webright');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(oDiv!=undefined)
  {
   oDiv.style.top = scrollTop+(document.documentElement.clientHeight - oDiv.offsetHeight)/2+'px'
  }
})

$(function(){

    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
     *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
     * type 请求方式("POST" 或 "GET")， 默认为 "GET"
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     * successfn 成功回调函数
     * errorfn 失败回调函数
     */
    jQuery.ax=function(url, data, async, type, dataType, successfn, errorfn) {
        async = (async==null || async=="" || typeof(async)=="undefined")? "true" : async;
        type = (type==null || type=="" || typeof(type)=="undefined")? "post" : type;
        dataType = (dataType==null || dataType=="" || typeof(dataType)=="undefined")? "json" : dataType;
        data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;

        $.ajax({
            type: type,
            async: async,
            data: data,
            url: url,
            dataType: dataType,
            success: function(d){
                if(d.code==200)
                {
                    successfn(d);
                }
                else
                {
                    alert(d.message);
                }

            },
            error: function(e){
                errorfn(e);
            }
        });
    };

    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * successfn 成功回调函数
     */
    jQuery.axs=function(url, data, successfn) {
        data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
        $.ajax({
            type: "post",
            data: data,
            url: url,
            dataType: "json",
            success: function(d){
                successfn(d);
            }
        });
    };

    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     * successfn 成功回调函数
     * errorfn 失败回调函数
     */
    jQuery.axse=function(url, data, successfn, errorfn) {
        data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
        $.ajax({
            type: "post",
            data: data,
            url: url,
            dataType: "json",
            success: function(d){
                successfn(d);
            },
            error: function(e){
                errorfn(e);
            }
        });
    };



});

//右侧浮动

window.onscroll = function(){
    var oDiv = document.getElementById('webright');
    if(oDiv!=undefined)
    {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //oDiv.style.top = scrollTop+(document.documentElement.clientHeight - oDiv.offsetHeight)/2+'px'
    var t =scrollTop+(document.documentElement.clientHeight - oDiv.offsetHeight)/2

    stratMove(parseInt(t))
    }
}


var timer = null;

function stratMove(iTarget){
    var oDiv =  document.getElementById('webright');
    clearInterval(timer)
    timer = setInterval(function(){
        var iSpeed = (iTarget - oDiv.offsetTop)/8;
        if(oDiv.offsetTop == iTarget)
        {
            clearInterval(timer)
        }
        else
        {
            oDiv.style.top = oDiv.offsetTop + iSpeed+'px';
        }
    },30)
}