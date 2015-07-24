(function() {
	
var module = angular.module('yvn');
	
	module.filter('level', function() {
		return function(input) {
	    	return input < 0 ? '' : '+';
		};
	});

})();
