(function() {

    var yvn = angular.module('yvn.controllers', []);

    yvn.controller('comments', ['$scope',
    
        function($scope) {

            $scope.title = 'Yes Vs No Comments';
			
			// Data
			
            $scope.comments = [ 
	            {
		            id: 1,
					userName: "Jim Jones",
					userComment: "I think this is absolutely true",
					userPoints: 1245,
					commentPoints: 10,
					userVote: "Yes"
	            }, 
	            {
		            id: 2,
		            userName: "David Masbourough",
					userComment: "I do not think this is very true, it could be anything!",
					userPoints: 865,
					commentPoints: 13,
					userVote: "No"
	
	            }, 
	            {
		            id: 3,
		            userName: "Julie Grey",
					userComment: "Perhaps, I am a little undecided",
					userPoints: 555,
					commentPoints: 8,
					userVote: "Undecided"
	            }
            ];
            
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