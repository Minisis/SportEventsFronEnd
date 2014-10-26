(function (){
	var app = angular.module('SportEvents', [
			'ngRoute',
			'sportEvents.controllers',
			'sportEvents.directives',
		]);

	app.config(['$routeProvider', function ($routeProvider){

		$routeProvider
			.when('/sedes',{
				templateUrl: 'views/sedes.html',
				controller: 'SedesControler',
				controllerAs: 'sedesCtrl'
			})
			.when('/comments',{
				templateUrl: 'views/comments.html',
				controller: 'CommentsController',
				controllerAs: 'cmtsCtrl'
			})
			.when ('/',{
				templateUrl: 'views/todo.html',
				controller: 'SedesTodoController',
			})
			.when ('/sede/:sedeid/evento/:eventoid',{
				templateUrl: 'views/comments.html',
				controllers: 'CommentsController',
				controllerAs: 'cmtsCtrl'
			})
			.otherwise({
				redirectTo: '/',
			});

	}]);
})(); 