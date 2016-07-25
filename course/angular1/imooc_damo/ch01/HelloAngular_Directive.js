/**
 * Created by wxb on 2016/7/23.
 */

var myModule=angular.module("MyModule",[]);
myModule.directive("hello",
    function  (){
        return{
            restrict:'E',
            template:'<div>Hi everyone!</div>',
            replace:true
        }

    }
 );
