(function() {

    var module = angular.module('yvn.canvass');

    module.directive('comment', ['RecursionHelper', function(RecursionHelper) {
	    
		return {
			restrict: 'E',
			scope: { comment: '=' },
			templateUrl: 'app/canvass/directives/comment.html',
			compile: function(element) {
				
	            return RecursionHelper.compile(element, function(scope, element, attrs, ctrl, transcludeFn) {
		            
				// Link Function Defined Here

	            scope.commentUp = function(comment) {
		            comment.level +=1; 
		        } 
            
	            scope.commentDown = function(comment) {
			    	comment.level -=1; 
	        	} 

	            });
        	}
		}
    	
    }]);
  
})();