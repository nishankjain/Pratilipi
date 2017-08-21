// 'use strict';

var crashingPlanesApp = angular.module('crashingplanes', [
	'ngRoute',
	'crashingPlanesControllers',
	'crashingPlanesServices',
	'crashingPlanesFilters'
]);

crashingPlanesApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/search', {
				templateUrl: 'partials/search-params.html'
			}).
			when('/flights', {
				templateUrl: 'partials/flight-details.html'
			}).
			otherwise({
				redirectTo: '/search'
			});
	}
]);