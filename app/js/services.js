var services = angular.module("trackIt.services", ['ngResource']);

services.factory('User', ['$resource', function($resource){
	return $resource('/db/user/:userId.json', {userId: '@id'})
}]);
