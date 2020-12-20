(function(){
    'use strict';

    angular.module('ListApp',[])
    .controller('BtnCheckController',BtnCheckController);

    BtnCheckController.$inject = ['$scope'];
    function BtnCheckController($scope){
        $scope.name="hello";
    }
})