
'use strict';
var app = angular.module('fundamentalsApp',['ngRoute','ngResource','ngMaterial','startingPageModule','homeModule','intializeComponents']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/startPage',{
            controller:'StartingPageController',
            templateUrl : 'js/StartingPage/Partials/StartingPage.html'
        })
        .when('/home',{
            controller:'HomeController',
            templateUrl : 'js/Home/Partials/homePage.html'
        })
        .when('/binding',{
            controller:'BindingController',
            templateUrl : 'components/Binding/binding.html'
        })
        .otherwise({ redirectTo: '/startPage' });
});