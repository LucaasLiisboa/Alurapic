angular.module('minhasDiretivas', [])
	.directive('meuPainel', function () {
		//DDO = Directive Definition Object
		var ddo = {};

		//AE = Attribute and Element
		ddo.restrict = "AE";

		ddo.scope = {
			//O @ significa que ao criar minhas tags ele vai injetar o valor passado como string para dentro do escopo privado da diretiva.
			//É comum passar apenas o @, pois o atributo da tag assume o nome do atributo aqui especificado.
			//Exemplo: Se o atributo for definido como titulo (conforme abaixo) o valor exibido na tag será <minha-tag titulo="valor passado por @".
			titulo: '@'
		};

		//Ao passar atributos dessa forma perdemos a referência dos dados que está vindo do servidor, portanto, se queremos manter tais informações
		//precisamos utilizar o transclude no objeto e referenciá-lo na tag que queremos manter.
		ddo.transclude = true;

		//Esse processo serve para diminuir a complexidade, pois podemos criar novos componentes que na nossa view apenas fará referência a ele, ou seja, 
		//se eu criar um componente chamado batata com as características X, Y e Z
		//é possível reaproveitá-lo em vários pontos do sistema, evitando assim uma certa duplicidade de código.
		ddo.templateUrl = 'js/directives/meu-painel.html';			

		return ddo;
	})
	.directive('minhaFoto', function() {
		var ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
			titulo: '@',
			url: '@'
		};

		ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

		return ddo;
	});