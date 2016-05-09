(function() {

    var module = angular.module('yvn.canvass');

       module.factory('getComments', ['$http',
	    
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