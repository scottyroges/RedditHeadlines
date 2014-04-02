'use strict';

/* global app:true */
var app = angular.module('redditHeadlinesApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/rss.html',
        controller: 'RssCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showPost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
