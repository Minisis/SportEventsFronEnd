(function (){
	var app = angular.module('SportEvents', [
			'ngRoute',
			'sportEvents.controllers',
			'sportEvents.directives',
			'sedes.services',
		]);

	app.config(['$routeProvider', function ($routeProvider){

		$routeProvider
			.when ('/',{
				templateUrl: 'views/todo.html',
				controller: 'SedesTodoController',
			})
			.when ('/sede/:sedeid',{
				templateUrl: 'views/sede.html',
				controller: 'sedeController',
			})
			.when('/comments',{
				templateUrl: 'views/comments.html',
				controller: 'CommentsController',
				controllerAs: 'cmtsCtrl'
			})
			.otherwise({
				redirectTo: '/',
			});

	}]);
})(); 