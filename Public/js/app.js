(function () {
  var app = angular.module('SportEvents', []);

  app.controller('SedesControler', function () {
    this.Sede = {
      id: "001",
      Nombre: "Colima",
      imageUrl: "http://server.com/path",
      Status: "A",
      Deportes: {
        Nombre: "Futbol",
        Status: "A",
        imageUrl: "http://server.com/path",
        info: "La competencia de futbol mas grande de mexico",
        ramas: ["Varonil", "Femenil"],
        Categorias: {
          Nombre: "18 +",
          Status: "A",
          info: "Categoria de 18 anios el gran premio es...."
        }
      },              
    };
  });
})();
