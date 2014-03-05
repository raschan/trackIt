var trackIt = angular.module('trackIt', 
	[
	'trackIt.services', 
	'trackIt.controllers',
	'trackIt.directives',
	'ngRoute',
	'UserApp'
	]);

trackIt.run(function($rootScope, user){
	user.init({ appId: 'trackIt'});	
});


//routing
trackIt.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/login', 
		{
			templateUrl: 'partials/login.html',
			login: true
		}).
	when('/signup', 
		{
			templateUrl: 'partials/signup.html',
			public: true
		}).
	otherwise({redirectTo: '/home'});
}]);