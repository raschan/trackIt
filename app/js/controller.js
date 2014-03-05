var controllers = angular.module('trackIt',[]);

controllers.controller('saveTrack', ['$scope', function ($scope) {
	
	$scope.list = [];

	$scope.add = function (trackTime) {
		
		var temp = [];
		temp = angular.copy($scope.list);
		temp.push($scope.trackTime);

		$scope.list = angular.copy(temp);

		$scope.trackTime.description = '';
}

}]);