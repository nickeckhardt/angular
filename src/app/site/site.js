window.site = angular.module('site', ['ngRoute']);

site.config(['$routeProvider', function($routeProvider){
		$routeProvider
		  .when('/', {
			templateUrl: '/app/site/home/index.html',
		  })
		  .when('/About', {
			templateUrl: '/app/site/about/index.html',
		  })
		  .otherwise({
			redirectTo: '/'
		  });
	}])
	.config(['$locationProvider', function ($locationProvider) {        
		$locationProvider.html5Mode(true);
    }])