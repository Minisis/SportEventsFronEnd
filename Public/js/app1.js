(function () {
	var app = angular.module('SportEvents', []);

	app.controller('SedesControlers', function () {
		this.Sede = {
			id: 001,
			Nombre: 'Colima',
			Status: 'A',
			imagenUrl: 'http//server.com/path',
			deportes [{
				Nombre: 'Futbol'
				status: 'A'
				info: 'La competencia de Futbol mas grande en mexico'
				imagenUrl: 'http:server.com/path'
				ramas: ['varonil', 'femenil'],	
				categorias: [{
					Nombre: '18 +',
					info: 'Categoria de 18 anios premio....',
					status 'A'
				}]
			}]						
		}
	})
})();