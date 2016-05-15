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
	
					// Create Empty User Comment
	
					$scope.userComment = '';
	
					// Create Comment Tree
					
					var buildCommentTree = function(data) {
							
							var ordered = _.orderBy(data, ['tier'], ['desc'])

							_.each(ordered, function(o) {

								var parent = _.filter(data, function(a) {
									return a.id == o.comment_parent_id;
								})
								
								if (parent[0]) {
									
									// Check whether parent.comments alreadu exists
									
									if (!parent[0].comments) {
										parent[0].comments = [];
									}
									
									parent[0].comments.push(o);
								} 
								
							})
							
							var commentTree = _.filter(data, function(o) {
									return o.comment_parent_id == 0;
							});

							return commentTree;
					}
					
					// Load Comments Function
	
					var loadComments = function () {
						
						$scope.comments = [];
						
							getComments.comments().success(function(data){
								$scope.comments = buildCommentTree(data);
								console.log($scope.comments);
							});

					}
	
					// Check whether comments are provided, otherwise load them
					
					if (!$scope.data) {
						$scope.comments = [];
						loadComments();
					
					} else {
						$scope.comments = [];
						$scope.comments = $scope.data;
					}
					
					// Watch the comment stack and update if a comment is made
					
					/*$scope.$watch('comments', function (newVal, oldVal) { 
						console.log('Something changed in comments');	
					}, true);*/
					
					// Add Post Comment
					
					$scope.addPostComment = function(comment) {

						
						// Create Dummy Data Function
						
						var fakeUserList = [
							{
								userName: 'Mary Sue',
								commentVote: 'One'
							},
							{
								userName: 'Jane Placemat',
								commentVote: 'One'
							},
							{
								userName: 'Donald Trumpet',
								commentVote: 'Two'
							},
							{
								userName: 'Jessica Cathcart',
								commentVote: 'One'
							},
							{
								userName: 'Magnus Opum',
								commentVote: 'Two'
							},
							{
								userName: 'Bigfoot Rebound',
								commentVote: 'One'
							},
							{
								userName: 'Total Recall',
								commentVote: 'Two'
							},
							{
								userName: 'Nice Party',
								commentVote: 'Two'
							},
							{
								userName: 'Legitimate Name',
								commentVote: 'One'
							}
						]
						
						
						var getFakeUser = function() {
							return fakeUserList[Math.floor(Math.random()*9)];
						}
						
						// Get the canvass ID


						// Construct Comment Data
						
						if (comment) {
							
							var user = getFakeUser();

							var commentData = {
								canvass_id: 101,
								comment_date: new Date(),
								comment: comment.userComment,
								level: 0,
								comment_user: user.userName, 
								comment_parent_id: comment.id,
								tier: comment.tier + 1,
								comment_vote: user.commentVote,
							}
						
						} else {
							
						}
						
						$http.post('/api/comments/new', commentData).then(function successCallback(response) {
							
							if (comment) {
							
								// Check if it already has children, otherwise create the empty array
								
								if (!comment.comments) {
									comment.comments = [];
								}
								
								// Add the comment returned with ID to the Parent Comment
								comment.comments.push(response.data[0]);
							
								// Hide the comment menu
								
								comment.commentMenuVisible = false;
								comment.replyAreaVisible = false;
							
							}

							// Clear the user comment
							
							comment.userComment = '';

						}, function errorCallback(response) {
							console.log('Error In Posting');
							console.log(response);
						});

					}
					
			

	            }
        	}
		}]);
  
})();