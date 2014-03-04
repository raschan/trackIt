var controllers = angular.module('trackIt',[]);

controllers.controller('saveTrack', ['$scope', function ($scope) {
	$scope.list = {};
	$scope.add = function (trackTime) {
		
		$scope.addedLine = angular.copy($scope.trackTime);	

		var current = $scope.list;
		var newList = current.append($scope.trackTime);
		$scope.list = newList;

}

}]);