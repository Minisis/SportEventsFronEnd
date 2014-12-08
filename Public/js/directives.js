(function (){
	angular.module('sportEvents.directives', [])

	.directive('tituloTodoSedes', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/titulo-sedes.html',
		};
	})

	.directive('datosRegistro', function(){
		return {
			restrict:'E',
			templateUrl: 'partials/datos-registro.html'
		};
	})

	.directive('sedesComments',function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/sedes-comments.html',
			controller: function(){ 
				this.comments = [];
				this.comment = {};
				this.show = false;

			this.anonymousChanged = function () {
				if (this.comment.anonymous){
					this.comment.email = "";
					}
			};

			this.addComment = function (){
				this.comment.date = Date.now();
				this.comments.push(this.comment);
				this.comment = {};
				};
			},
			controllerAs: 'cmtsCtrl',
		};
	});
})();