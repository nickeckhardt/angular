
/// <reference path="site.js" />
/// <reference path="../../plugins/angular-ui-router.js" />

angular.module('site')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise('/');

            // Use $stateProvider to configure your states.
            $stateProvider
                .state({
                    name: "home",
                    url: "/",
                    templateUrl: '/app/site/home/index.html'
                })
                .state({
                    name: "about",
                    url: "/About",
                    templateUrl: '/app/site/about/index.html'
                })
                .state({
                    name: "products",
                    url: "/Products",
                    templateUrl: '/app/site/products/index.html'
                })
                .state({
                    name: "services",
                    url: "/Services",
                    templateUrl: '/app/site/services/index.html'
                })
                .state({
                    name: "contact",
                    url: "/Contact",
                    templateUrl: '/app/site/contact/index.html'
                })
            ;
        }]
    );

function depends($q, deps) {
    var deferred = $q.defer();
    require(deps, function () {
        deferred.resolve();
    });
    return deferred.promise;
}