
var startingPageController = angular.module('startingPageModule',[]);

startingPageController.controller('StartingPageController',['$rootScope',function($rootScope){

    var originatorEv;

    $rootScope.goToAngularJS_VERSION1 = function(){
        location.href = '#/home';
    };

    $rootScope.goToAngularJS_VERSION2 = function(){
        location.href = '#/home';
    }

}]);