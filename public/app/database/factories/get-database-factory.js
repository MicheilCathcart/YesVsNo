(function() {

    var module = angular.module('yvn.canvass');

    module.factory('getDatabase', ['$http',
	    
	    function($http) {
			
			 return {
    			comments: function() {
					return $http({
						url: '/api/comments',
						method: 'GET'
					})
    			}
 			}
			
	    }
    ]);
    
})();