(function(){
    'use strict';

    angular.module('ListApp',[])
    .controller('BtnCheckController',BtnCheckController);
$scope.name="";
    BtnCheckController.$inject = ['$scope'];
    function BtnCheckController($scope){
        $scope.name="";
    }
})