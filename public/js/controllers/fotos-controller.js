angular.module('alurapic').controller('FotosController', function($scope, $http) {
	$scope.fotos = [];
	$scope.filtro = '';
	
	//Primeira forma de obter os dados através de uma requisição do servidor.
	// var promise = $http.get('v1/fotos');
	// promise.then(function(retorno) {
	// 	$scope.fotos = retorno.data;
	// }).catch(function(error) {
	// 	console.log(error);
	// });

	//Forma simplificada (usual) de obter os dados através de uma requisição do servidor.
	$http.get('v1/fotos')
		.success(function(fotos) {
			$scope.fotos = fotos;
		}).error(function(erro) {
			console.log(erro);
		});
});