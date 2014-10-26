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
			.when('/comments',{
				templateUrl: 'views/comments.html',
				controller: 'CommentsController',
				controllerAs: 'cmtsCtrl'
			})
			.when ('/sede/:sedeid/evento/:eventoid',{
				templateUrl: 'views/sede.html',
				controllers: 'SedesControler',
				controllerAs: 'sedesCtrl'
			})
			.otherwise({
				redirectTo: '/',
			});

	}]);
})(); 