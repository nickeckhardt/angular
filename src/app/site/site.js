/// <reference path="../../plugins/angular-ui-router.js" />

window.site = angular.module('site', ['ui.router']);

site.config(['$provide', function ($provide) {
        $provide.decorator('$rootScope', ['$delegate', function ($delegate) {

            Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
                value: function (name, listener) {
                    var unsubscribe = $delegate.$on(name, listener);
                    this.$on('$destroy', unsubscribe);
                },
                enumerable: false
            });

            return $delegate;
        }]);
    }])
	.config(['$locationProvider', function ($locationProvider) {        
		$locationProvider.html5Mode(true);
    }])
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]
    );