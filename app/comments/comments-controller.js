(function() {

    var module = angular.module('yvn.comments');

    module.controller('comments', ['$scope', 'getComments',
    
        function($scope, getComments) {

            $scope.title = 'Do electric sheep dream?';
			
			// Data
			
            $scope.comments = getComments.comments;
            
            $scope.addComment = function() {
	            if(!$scope.userComment || $scope.userComment === '') { return; }
	            $scope.comments.push(
	            {
		            userName: $scope.userName, 
		            userComment: $scope.userComment,
		            userPoints: 0,
					commentPoints: 0,
					userVote: $scope.userVote
		        }
		        )
		        
		        $scope.userName = '';
		        $scope.userComment = '';
		        $scope.userVote = '';
		        
            }
            
            // Buttons
            
            $scope.commentUp = function(comment) {
	            comment.commentPoints +=1; 
          	} 
            
            $scope.commentDown = function(comment) {
	            comment.commentPoints -=1; 
          	} 
            
        }
    ]);
})();