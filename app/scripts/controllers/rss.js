'use strict';

app.controller('RssCtrl', ['$scope', '$location', 'RSSFeed', function($scope, $location, RSSFeed){

	RSSFeed.getRSSFeed().then(function(data){
		$scope.feed = data;
	});

	$scope.goToPost = function(index){
		$location.path('/posts/' + index);
	};
	
}]);