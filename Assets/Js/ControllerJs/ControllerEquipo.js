angular.module("EquipoController", [])
.controller("EquipoController", ["$scope", "$http", function (sp, http) {
  sp.Equipos = [];
  http.get("https://api-net.herokuapp.com/api/Equipos")
    .then(function (data) {
      sp.Equipos = data.data;
      console.log(data.data);
    }, function (err) {

    });
}]);