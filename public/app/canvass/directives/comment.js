(function() {

    var module = angular.module('yvn.canvass');

    module.directive('comments', ['getComments','$http', function(getComments, $http) {
	    
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
								
								console.log(o.comment_user);
								
								var parent = _.filter(data, function(a) {
									return a.id == o.comment_parent_id;
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
								console.log('data');
								console.log(data);
								$scope.comments = buildCommentTree(data);
								console.log('$scope.comments');
								console.log($scope.comments);
							});

						}
						
						loadComments();
					
					} else {
						$scope.comments = $scope.data;
					}
					
					// Add Post Comment
					
					$scope.addPostComment = function(comment, userComment) {
						
						console.log(userComment);
						
						// Get the canvass ID


						// Construct Comment Data
						
						if (comment) {

							var commentData = {
								canvass_id: 101,
								comment_date: new Date(),
								comment: userComment,
								level: 0,
								comment_user: 'Dom Marley', 
								comment_parent_id: comment.id,
								tier: comment.tier + 1,
								comment_vote: 'Two',
							}
						
						} else {
							
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