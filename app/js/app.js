var trackIt = angular.module('trackIt', 
	[
	'trackIt.services', 
	'trackIt.controllers',
	
	'ngRoute',
	'UserApp'
	]);

trackIt.run(function($rootScope, user){
	user.init({ appId: '53174f7f315ed'});	
});


//routing
trackIt.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/login', 
		{
			templateUrl: 'partials/login.html',
		}).
	when('/signup', 
		{
			templateUrl: 'partials/signup.html',
			public: true
		}).
	when('/home',
		{
			templateUrl: 'partials/main.html'
		}).
	otherwise({redirectTo: '/home'});
}]);