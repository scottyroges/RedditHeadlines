'use strict';

app.controller('PostViewCtrl', ['$scope', '$routeParams','RSSFeed', function($scope,$routeParams, RSSFeed){
	RSSFeed.getRSSFeed().then(function(data){
		$scope.feed = data;
		$scope.item = $scope.feed[$routeParams.postId];

		var div = document.getElementById('description');
		div.innerHTML = $scope.item.description;
	});
}]);