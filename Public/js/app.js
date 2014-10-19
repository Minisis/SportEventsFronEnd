(function (){
	var app = angular.module('SportEvents', [
			'ngRoute',
			'sportEvents.controllers',
			'sportEvents.directives'
		]);

	app.config(['$routeProvider', function ($routeProvider){

		$routeProvider
			.when('/',{
				templateUrl: 'views/sedes.html',
				controller: 'SedesControler',
				controllerAs: 'sedesCtrl'
			})
			.when('/comments',{
				templateUrl: 'views/comments.html',
				controller: 'CommentsController',
				controllerAs: 'cmtsCtrl'
			})
			.when ('/todo',{
				templateUrl: 'views/todo.html',
				controller: 'SedesTodoController',
			})
			.otherwise({
				redirectTo: '/',
			});

	}]);
})();