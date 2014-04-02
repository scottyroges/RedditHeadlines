'use strict';

app.factory('RSSFeed', [ '$http', function($http){
	return {
		getRSSFeed : function(){
			return $http({method: 'GET', url: 'http://www.reddit.com/.rss',transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
		            var x2js = new X2JS();
		            var json = x2js.xml_str2json( data );
		            var items = json.rss.channel.item;
					for(var i = 0; i < items.length; i++){
							if(typeof items[i].title === 'object'){
								items[i].title = items[i].title[0];
							}
						}
		            return items;
		        }
            }).then(function(response) {
      				return response.data;	
   				},function(error) {
   					console.log('error getting rss feed' + error);
   				});
		}
	};
	
}]);

