var controllers = angular.module('trackIt.controllers',[]);

controllers.controller('saveTrack', ['$scope','User', function ($scope,User) {
	
	$scope.list = [];

	$scope.add = function (trackTime) {
		
		var temp = [];
		temp = angular.copy($scope.list);
		temp.push($scope.trackTime);

		$scope.list = angular.copy(temp);

		$scope.trackTime.description = '';
	}

	$scope.savelist = function (list) {
		User.save({id:13}, angular.toJson(list));
	}
	$scope.load = function(){
		$scope.valami =User.get();
	}

}]);