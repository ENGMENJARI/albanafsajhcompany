angular.module('Banafsajh', [
	'Banafsajh.add',
	'Banafsajh.main',
	'Banafsajh.services',
	'Banafsajh.Location',
	'Banafsajh.Product',
	'ngRoute'
	])

.config(function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider
	
	.when('/product', {
		templateUrl: 'product‬‏/product‬‏.html',
		controller: 'ProductCtrl'	
	})
	
	
	.when('/', {
		templateUrl: 'main/main.html',
		controller: 'mainCtrl'
	})
	.when('/addproducts', {
		templateUrl: 'addproducts/addproducts.html',
		controller: 'addProductCtrl'
	}).when('/location', {
		templateUrl: 'location/location.html',
		controller: 'LocationCtrl'
	})
	
	.otherwise({redirectTo: "/"});


	$locationProvider.hashPrefix('');
	$httpProvider.interceptors.push('AttachTokens');
})


.factory('AttachTokens', function($window) {

	let attach = {
		request: function(object) {
			let jwt = $window.localStorage.getItem('MobileSmart');
			if (jwt) {
				object.headers['x-access-token'] = jwt;
			}
			object.headers['Allow-Control-Allow-Origin'] = '*'
			return object;
		},
	};
	return attach;

})
.run(function($rootScope, $location, serv) {

	$rootScope.$on('$routeChangeStart', function(evt, next, current) {
		if (next.$$route && next.$$route.authenticate && !serv.isAuth()) {
			$location.path('/signin');
		}
	});
});