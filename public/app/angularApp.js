(function() {
	
// Yes Vs No App

var app = angular.module('yvn', [
	'yvn.home',
	'yvn.canvass',
	'ui.router'
]);

// Modules

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
			}).state('database', {
				url:'/database',
				templateUrl:'app/database/database.html',
				controller: 'database'
			});
			
			$urlRouterProvider.otherwise('home');

	}
])

})();
