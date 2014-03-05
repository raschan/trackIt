var services = angular.module("trackIt.services", ['ngResource']);

/*
services.factory('saveList', ['$resource', function($resource){
	return $resource('user/:userId.json', {}, query: {method:'GET', params:})
}])
*/

/*
//ha van backend
services.factory('user', ['$http, $q', function($http, $q){
	var user = {};

	//kezdeti bejelentkezési állapot lekérése
	$http.GET("/loggedin").success(function(){
		user.isLogged = true;
	}).error(function(){
		user.isLogged = false;
	});

	user.login = function(username, password) {
		var defer = $q.defer();
		if(user.isLogged) {
			defer.resolve("Already logged in");
			return defer.promise;
		}
		$http.POST("/login", {username: username, password: password})
			.success(function(){
				user.isLogged = true;
				defer.resolve("User login success");
			})
			.error(function(){
				defer.reject("User login failed");
			})
		return defer.promise;
	}
	user.logout = function() {
		var defer = $q.defer();
		$http.POST("/logout",{})
			.success(function(){
				user.isLogged = false;
				defer.resolve();
			}).error(function(){
				defer.reject;
			});
		return defer.promise;
	}
	return user;
}]);

*/