(function () {
	angular.module('sportEvents.controllers', [])


	.controller('SedesTodoController', ['$rootScope', '$scope', 'sedeService', function($rootScope,$scope, sedeService){
		$rootScope.title = "";
		sedeService.all().then( function (result){
 			$scope.sedes = result.data;
		});
	}])

	.controller('sedeController', ['$rootScope', '$scope', '$routeParams', 'sedeService', function($rootScope, $scope, $routeParams, sedeService){
		var id = parseInt($routeParams.sedeid);
		$scope.sede = {};

		sedeService.byidSede(id)
			.then(function (result){
				console.log(result);
				$rootScope.title=result.name	;
				$scope.sedes = result;
			});
	}])

	.controller('TabsController',['$scope', function($scope){
		$scope.tab = 1

		$scope.selectTab = function (tab){
			$scope.tab = tab;
		};
	}])

	.controller('cvController', ['$scope', '$routeParams', 'cvService', function($scope, $routeParams, cvService){

		var cv = $routeParams.key;
		$scope.datos = {};

		cvService.getCv(cv)
			.then(function (result){
				$scope.datos = result.data;
				console.log($scope.datos);
			});
	}])
})();




