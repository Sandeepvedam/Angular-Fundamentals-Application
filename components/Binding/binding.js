'use strict';
var binding = angular.module('bindingModule',[]);
binding.controller('BindingController',['$rootScope',function($rootScope){
    $rootScope.bindingModuleData = "Data-binding in Angular apps is the automatic synchronization of data between the model and view components. The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application.";
}]);