(function () {
	var app = angular.module('SportEvents', []);

	app.controller('SedesControler', function () {
		this.Sede = {
			id: 001,
			Nombre: "Colima",
			Status: "A",
			imagenUrl: "http//server.com/path",								
		};
	});
})();




