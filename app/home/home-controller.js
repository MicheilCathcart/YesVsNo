(function() {

    var module = angular.module('yvn.home');

    module.controller('home', ['$scope','canvass', 
    
        function($scope, canvass) {

            $scope.title = 'Homepage';
            
            $scope.canvasses = canvass.canvass;
            
            $scope.upsMinusDowns = function(canvass) {
	            return "-" + canvass.ups - canvass.downs;
            }
			           
        }
    ]);
})();