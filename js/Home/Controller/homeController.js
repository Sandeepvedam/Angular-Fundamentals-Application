
var homeController = angular.module('homeModule',[]);

homeController.controller('HomeController',['$rootScope',function($rootScope){

    $rootScope.goToBinding = function(){
        location.href = '#/binding';
    };

    $rootScope.goToStartPage = function(){
        location.href = '#/startPage';
    };

}]);