(function () {
	angular.module('sportEvents.controllers', [])


	.controller('SedesTodoController', ['$scope', 'sedeService', function($scope, sedeService){
		sedeService.all().then( function (result){
 			$scope.sedes = result.data;
		});
	}])

	.controller('sedeController', ['$scope', '$routeParams', 'sedeService', function($scope, $routeParams, sedeService){
		var id = parseInt($routeParams.sedeid);
		$scope.sede = {};

		sedeService.byidSede(id)
			.then(function (result){
				console.log(result)
				$scope.sedes = result;
			});
	}])

.controller('TabsController', function(){
	/*this.tab = 1*/

	this.selectTab = function (tab){
		this.tab = tab;
	};
})
})();