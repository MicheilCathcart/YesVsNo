(function() {

    var module = angular.module('yvn.canvass');

    module.directive('comments', ['getComments', function(getComments) {
	    
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'app/canvass/directives/comment.html',
			controller: function($scope) {
				
					// Create Comment Tree
				
					var buildCommentTree = function(data) {
						
						// Create a new array of only parent comments
						
						var commentTree = _.filter(data, function(o) { return o.comment_parent_id == 0; })
						
						// Find the child comments to loop through
						
						var childComments = _.filter(data, function(o) { return !o.comment_parent_id == 0; })

console.log(childComments);

						// Loop through and add each comment to the tree array
						
						_.each(childComments, function(comment) {
							console.log('Iteration');
							var parentID = comment.comment_parent_id;
							var parent = _.filter(commentTree, function(o) { 
								return o.comment_id == parentID; 
							});
							console.log(parent);
							parent.comments = [];
							parent.comments.push(comment);
						})
						
						return commentTree;
						
					}
				
					// Comment Data
					
					$scope.comments = [];
					
					var loadComments = function () {
					
						getComments.comments().success(function(data){
							$scope.comments = buildCommentTree(data);
						})

					}
					
					loadComments();
					
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