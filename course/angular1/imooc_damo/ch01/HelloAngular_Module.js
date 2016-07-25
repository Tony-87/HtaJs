/**
 * Created by wxb on 2016/7/23.
 */

var myModule=angular.module("hiAngular",[]);

myModule.controller("HelloAngular",['$scope',
    function HelloAngular($scope){
        $scope.greeting={
            text:'Hello'
        };
    }
]);
