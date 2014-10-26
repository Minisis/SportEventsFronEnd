(function (){
	angular.module('sedes.services', [])
		.factory('sedeService', ['$http','$q' function($http, $q){
			
			function all(){
				var deferred = $q.defer();

				$http.get('/todoSedes.json')
					.success(function (data){
						deferred.resolve(data);
				 	});
				return deferred.promise;
			}

			return{
				all: all
			}
		}])
})();