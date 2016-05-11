(function() {

    var module = angular.module('yvn.canvass');

    module.controller('canvass', ['$scope',
    
        function($scope) {

			// Canvass Data

			$scope.canvass_id = 101;
            $scope.title = 'Do electric sheep dream?';
			
			// User Data
			
			$scope.userVote = "YES"
			$scope.userName = "Jessica Jones"
            
        }
    ]);
})();