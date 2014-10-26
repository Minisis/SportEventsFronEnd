(function (){
	angular.module('sedes.services', [])
		.factory('sedeService', ['$http','$q', function ($http, $q){
			function all (){

				var deferred = $q.defer();

				$http.get('/todoSedes.json')
					.success(function (result){
						deferred.resolve(result);
				 	});
				return deferred.promise;
			}

			function byidSede (id){
				var deferred = $q.defer()

				all().then(function (result){
					var filtroResult = result.data.filter(function (idSede){
						return idSede.id === id;
					});

				if (filtroResult.length > 0){
					deferred.resolve (filtroResult[0]);
					} else{
						deferred.reject();
					}					 
				});

				return deferred.promise;
			}

			return{
				all: all,
				byidSede: byidSede
			}
		}]);
})();