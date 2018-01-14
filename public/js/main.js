angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function ($routeProvider, $locationProvider) {
	//Comando para não precisar incluir #/comando na url do browser, porém o backend precisa estar preparado ao utilizar isso, caso contrário teremos problemas.
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html'
	});

	//Caso seja informado/utilizado uma url incorreta o sistema direcionará o usuário para a rota /foto
	$routeProvider.otherwise({ redirectTo: '/fotos' });
});