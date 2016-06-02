var animateApp = angular.module('animateApp', ['ngRoute','ngAnimate']);
animateApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: '/view/page-home.html',
            controller: 'mainController'
        })
        // about page
        .when('/about', {
            templateUrl: '/view/page-about.html',
            controller: 'aboutController'
        })

        // contact page
        .when('/contact', {
            templateUrl: '/view/page-contact.html',
            controller: 'contactController'
        })

        .otherwise({
            redirectTo: '/'
        });
}]);

// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});