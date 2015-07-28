(function() {

    var module = angular.module('yvn.canvass');

    module.controller('canvass', ['$scope', 'getCanvass', '$stateParams',
    
        function($scope, getCanvass, $stateParams) {

            $scope.title = 'Do electric sheep dream?';
			
			// Data
			
			$scope.userVote = "Neutral"
			$scope.userName = "michsail"
			
            $scope.comments = getCanvass.comments;
            
            $scope.addComment = function() {
	            if(!$scope.userComment || $scope.userComment === '') { return; }
	            $scope.comments.push(
	            {
		            id: Math.random(),
		            user: $scope.userName, 
		            comment: $scope.userComment,
					level: 0,
					tier: 1,
					vote: $scope.userVote,
					date: new Date()
		        }
		        )
		    
		        $scope.userComment = '';
		        
            }
            
        }
    ]);
})();