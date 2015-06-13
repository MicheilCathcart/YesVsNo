(function() {

    var yvn = angular.module('yvn.controllers', []);

    yvn.controller('comments', ['$scope',
    
        function($scope) {

            $scope.title = 'Do electric sheep dream?';
			
			// Data
			
            $scope.comments = [ 
	            {
					userName: "Jim Jones",
					userComment: "I think this is absolutely true",
					userPoints: 1245,
					commentPoints: 10,
					userVote: "Yes"
	            }, 
	            {
		            userName: "David Masbourough",
					userComment: "I do not think this is very true, it could be anything!",
					userPoints: 865,
					commentPoints: 13,
					userVote: "No"
	
	            }, 
	            {
		            userName: "Julie Grey",
					userComment: "Perhaps, I am a little undecided",
					userPoints: 555,
					commentPoints: 8,
					userVote: "Undecided"
	            }
            ];
            
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