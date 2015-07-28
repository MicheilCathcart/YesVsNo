(function() {

    var module = angular.module('yvn.canvass');

    module.directive('comment', ['RecursionHelper', function(RecursionHelper) {
	    
		return {
			restrict: 'E',
			scope: { comment: '=', userVote: '='},
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
	        	
	        	scope.replyVisible = false; 
	        		        	
	        	scope.addReply = function(comment) {
	            if(!scope.userComment || scope.userComment === '') { return; }
	            if (!comment.comments) { comment.comments = []; }
	            comment.comments.push(
		            {
			            id: Math.random(),
			            user: "michsail", 
			            comment: scope.userComment,
						level: 0,
						tier: comment.tier + 1,
						vote: scope.userVote,
						date: new Date()
			        }
		        )
		        		        
		        scope.userComment = '';
		        scope.replyVisible = false;
		        
            }

	            });
        	}
		}
    	
    }]);
  
})();