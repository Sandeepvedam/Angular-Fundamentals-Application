
'use strict';
var app = angular.module('fundamentalsApp',['ngRoute','ngResource']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home',{
            controller:'HomeController',
            templateUrl : 'js/Home/Partials/homePage.html'
        })
        .otherwise({ redirectTo: '/home' });
});