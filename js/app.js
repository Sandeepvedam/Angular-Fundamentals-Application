
'use strict';
var app = angular.module('fundamentalsApp',['ngRoute','ngResource','ngMaterial','homeModule','intializeComponents']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home',{
            controller:'HomeController',
            templateUrl : 'js/Home/Partials/homePage.html'
        })
        .when('/binding',{
            controller:'BindingController',
            templateUrl : 'components/Binding/binding.html'
        })
        .otherwise({ redirectTo: '/home' });
});