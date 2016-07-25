/**
 * Created by wxb on 2016/7/23.
 */

    function CommonController($scope){
    $scope.commonFn=function(){
      console.log("这里是通用功能！");
    };
}

function  Controller1($scope){
    $scope.greeting={
        text:'Hello1'
    };
    $scope.test1=function(){
        console.log("test1");
    };
}

function  Controller2($scope){
    $scope.greeting={
        text:'Hello2'
    };
    $scope.test2=function(){
        console.log("test2");
    };
}
