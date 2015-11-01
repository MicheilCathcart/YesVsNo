(function() {
	
// Yes Vs No App

var app = angular.module('yvn', [
	'yvn.home',
	'yvn.canvass',
	'ui.router'
]);

// Dependencies

angular.module('yvn.home', []);
angular.module('yvn.canvass', []);
	
// Route Config

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl:'app/home/home.html',
				controller: 'home'
			})
			.state('canvass', {
				url:'/canvass/{id}',
				templateUrl:'app/canvass/canvass.html',
				controller: 'canvass'
			});
			
			$urlRouterProvider.otherwise('home');

	}
])

})();