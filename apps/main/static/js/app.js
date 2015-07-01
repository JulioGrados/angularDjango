(function () {
	var app = angular.module('noticiero', [
		'ngRoute',
		'noticiero.controllers',
		'noticiero.directives'
	]);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'static/js/view/noticiasTodas.html',
				controller: 'NoticiasController'
			})
			.when('/noticias/:id', {
				templateUrl: 'static/js/view/noticia.html',
				controller: 'NoticieroController',
				controllerAs: 'notCtrl'
			})
			.otherwise({
				redirecTo: '/'
			});
	}]);
})();