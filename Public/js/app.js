(function (){
	var app = angular.module('SportEvents', []);

	app.controller('SedesControler', function () {
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
	});
})();