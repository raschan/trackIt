var controllers = angular.module('trackIt',[]);

controllers.controller('saveTrack', ['$scope', function ($scope) {
	
	$scope.list = [];

	$scope.add = function (trackTime) {
		
		$scope.addedLine = angular.copy($scope.trackTime);	
		$scope.list.push($scope.trackTime);
}

}]);