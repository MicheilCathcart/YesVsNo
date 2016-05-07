(function() {

    var module = angular.module('yvn.canvass');

    module.directive('votePlot', ['$log', function($log) {
	    
		return {
			restrict: 'E',
			scope: { votes: '=' },
			templateUrl: 'app/canvass/directives/vote-plot.html',
			link: link,
			controller: controller
		}
		
		function controller ($scope, $element) {

			
			// Sort the Votes by Date
			
			$scope.votes.sort(function(a,b){
			  return new Date(a.date) - new Date(b.date);
			});
		
			
			// Get the First and Last Votes
			
			$scope.firstVote = moment($scope.votes[0].date).hour(0).minute(0).second(0);
			$scope.lastVote = moment($scope.votes[$scope.votes.length -1].date).hour(24).minute(0).second(0);

			// Create an array of days between them including the days they land on
			
			$scope.days = []; 
			var loopDate = moment($scope.votes[0].date).hour(0).minute(0).second(0);
			
			$scope.days.push(moment(loopDate).toDate());
			
			while (loopDate.isBefore($scope.lastVote)) {
				$scope.days.push(moment(loopDate).add(1,'days').toDate());
				loopDate.add(1,'days');
			}
			
			// Add a current vote position to the vote array for each vote
			
			var votePosition = 0;
			$scope.highestPosition = 0;
			$scope.lowestPosition = 0;
			var maxPosition;
			
			_($scope.votes).forEach(function(item) {
				if ( item.vote == "Yes" ) {  votePosition++; $scope.highestPosition++ }
				if ( item.vote == "No" ) { votePosition--; $scope.lowestPosition++ }
				item.votePosition = votePosition;
				maxPosition = Math.max($scope.lowestPosition, $scope.highestPosition);
			}).value();
			
			$log.info("High");		
			$log.info($scope.lowestPosition);
			$log.info("Low");
			$log.info($scope.highestPosition);
			

			// D3 Scales
			
			$scope.scaleX = d3.time.scale();
			
			$scope.scaleX.domain([$scope.firstVote, $scope.lastVote])
			
			$scope.scaleX.range([0,100])
			
			$scope.scaleY = d3.scale.linear();
			
			$scope.scaleY.domain([ -maxPosition, maxPosition ]);
			
			$scope.scaleY.range([110,-110])
			
		}
		
		function link (scope, elem, attr, ngModel) {

			
			// Return a Date Object 
			
			scope.returnDate = function (date) {
				return new Date(date);
			}
			
			// Return the day of the month
			
			scope.returnDayOfMonth = function (date) {
				return moment(date).date() == 1 ? true : false;
			}
			
			// Return the percentage difference
			
			scope.findPercentage = function (a,b) {
				return a / ( a + b);
			}


		}
    	
    }]);
  
})();