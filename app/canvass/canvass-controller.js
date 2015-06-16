(function() {

    var module = angular.module('yvn.canvass');

    module.controller('canvass', ['$scope', 'getCanvass', '$stateParams',
    
        function($scope, getCanvass, $stateParams) {

            $scope.title = 'Do electric sheep dream?';
			
			// Data
			
            $scope.comments = getCanvass.comments;
            
            $scope.addComment = function() {
	            if(!$scope.userComment || $scope.userComment === '') { return; }
	            $scope.comments.push(
	            {
		            id: Math.random(),
		            user: $scope.userName, 
		            comment: $scope.userComment,
					level: 0,
					vote: $scope.userVote,
					date: new Date()
		        }
		        )
		        
		        $scope.userName = '';
		        $scope.userComment = '';
		        $scope.userVote = '';
		        
            }
            
            // Buttons
            
            $scope.commentUp = function(comment) {
	            comment.level +=1; 
          	} 
            
            $scope.commentDown = function(comment) {
	            comment.level -=1; 
          	} 
            
        }
    ]);
})();