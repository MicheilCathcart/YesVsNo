(function() {

    var module = angular.module('yvn.home');

    module.controller('home', ['$scope','getList', 
    
        function($scope, getList) {

            $scope.title = 'Homepage';
            $scope.list = getList;
            
          			           
        }
    ]);
})();