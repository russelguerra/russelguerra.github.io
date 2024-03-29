'use strict';

(function () {
    var indexApp = angular.module('indexApp', ['ngRoute']);

    indexApp.config(function ($routeProvider) {
            $routeProvider
                .when('/',
                    {
                        templateUrl: 'pages/index/index.html',
                        controller: 'indexController'
                    })
                .otherwise('/');
        });
})();