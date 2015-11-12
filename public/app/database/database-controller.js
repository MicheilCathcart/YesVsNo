(function() {

    var module = angular.module('yvn.canvass');

    module.controller('database', ['$scope', 'getDatabase','getCanvass', '$stateParams','$http',
    
        function($scope, getDatabase, $stateParams, getCanvass, $http) {

            $scope.title = 'Database?';
			
			// Data
			
			$scope.userVote = "Neutral"
			$scope.userName = "michsail"
            
            $scope.comments = [];
            
            // Use factory to get Data
            
            var loadComments = function () {
            
                getDatabase.comments().success(function(data){
                    $scope.comments = data;
                })
            
            }
            
            loadComments();
            
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
            
            $scope.addPostComment = function() {
	            if(!$scope.userComment || $scope.userComment === '') { return; }

                var commentData = {
		            user: $scope.userName, 
		            comment: $scope.userComment,
					level: 0,
					tier: 1,
					vote: $scope.userVote,
					date: new Date()
		        }
                
                $http.post('/api/comments/new', commentData).then(function successCallback(response) {
                    loadComments();
                }, function errorCallback(response) {
                    console.log('Error In Posting?');
                });
		    
		        $scope.userComment = '';
		        
            }
            
        }
    ]);
})();