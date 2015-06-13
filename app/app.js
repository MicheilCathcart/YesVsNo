(function() {
	
// Create the Yes Vs No App

var app = angular.module('yvn', [
  'yvn.comments',
  'ui.router'
]);

// Yes Vs No Config

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl:'/home.html',
			})
			.state('electricSheep', {
				url:'/electric-sheep',
				templateUrl:'/electric-sheep.html',
			});
			
			$urlRouterProvider.otherwise('home');
		
	}
])

// Yes Vs No App Dependencies

angular.module('yvn.comments', []);
	
})();