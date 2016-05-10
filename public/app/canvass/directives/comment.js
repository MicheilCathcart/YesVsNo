(function() {

    var module = angular.module('yvn.canvass');

    module.directive('comments', ['getComments', function(getComments) {
	    
		return {
			restrict: 'E',
			scope: {
				data: '=?' 
			},
			templateUrl: 'app/canvass/directives/comment.html',
			controller: function($scope) {
	
				
					// Check whether comments are provided, otherwise load them
					
					if (!$scope.data) {
				
						// Create Comment Tree
					
						var buildCommentTree = function(data) {
							
							var ordered = _.orderBy(data, ['tier'], ['desc'])

							_.each(ordered, function(o) {
								
								var parent = _.filter(data, function(a) {
									return a.comment_id == o.comment_parent_id;
								})
								
								if (parent[0]) {
									parent[0].comments = [];
									parent[0].comments.push(o);
								}
								
							})
							
							var commentTree = _.filter(data, function(o) {
									return o.comment_parent_id == 0;
							});

							return commentTree;
						}
					
						// Comment Data
						
						$scope.comments = [];
						
						var loadComments = function () {
						
							getComments.comments().success(function(data){
								$scope.comments = buildCommentTree(data);
							});

						}
						
						loadComments();
					
					} else {
						$scope.comments = $scope.data;
					}
					
					// Add Post Comment
					
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
					
					// Toggle Comment Menu
					
					$scope.toggleCommentMenu = function(comment) {
						console.log(comment);
						if ( comment.commentMenuVisible == undefined || comment.commentMenuVisible == false ) {
							comment.commentMenuVisible = true;
						} else if ( comment.commentMenuVisible == true ) {
							comment.commentMenuVisible = false;
						}
					}

	            }
        	}
		}]);
  
})();