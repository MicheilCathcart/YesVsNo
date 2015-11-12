(function() {

    var module = angular.module('yvn.canvass');

    module.controller('database', ['$scope', 'getDatabase','getCanvass', '$stateParams',
    
        function($scope, getDatabase, $stateParams, getCanvass) {

            $scope.title = 'Database?';
			
			// Data
			
			$scope.userVote = "Neutral"
			$scope.userName = "michsail"
            
            $scope.comments = [];
            
            // Use factory to get Data
            
            getDatabase.comments().success(function(data){
                $scope.comments = data;
                console.log($scope.comments);
            });
            
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