(function () {
	angular.module('sportEvents.controllers', [])


	.controller('SedesTodoController', ['$scope', '$http', function($scope, $http){
		$scope.sedes = [];

		$http.get('/sedes.json')
			.success(function(data){
				$scope.sedes = data;
			});		
	}])


	.controller('SedesControler', function () {
	this.Sede = {
		id: "01",
		Nombre: "Colima",
		imageUrl: "http://deporte.pri.org.mx/img/soporte/Fut7Home.png",
		Status: "A",
		Deportes: {
			Nombre: "Futbol",
			Status: "A",
			imageUrl: "http://www.lssc.k12.in.us/highschool/English/Hayden/Creative%20Writing/Nathan/Webpage/soccer%20ball.jpg",
			info: "La competencia de futbol mas grande de mexico",
			ramas: ["Varonil", "Femenil"],
			Categorias: {
				Nombre: "18 +",
				Status: "A",
				info: "Categoria de 18 anios y el gran premio es..."
			},	 
		},
	};
})

.controller('TabsController', function(){
	this.tab = 1

	this.selectTab = function (tab){
		this.tab = tab;
	};
})

.controller('CommentsController', function (){
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
})













})();