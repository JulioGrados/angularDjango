(function(){

	var a = 1;

	angular.module('noticiero.controllers', [])
		.controller('NoticiasController',
			['$scope', 'noticieroService', function($scope, noticieroService){

				console.log("entro");
				
				if (a == 1) {
					console.log(a);
					noticieroService.all().then(function (data){
						$scope.noticias = data;
					});
				} else if (a == 2) {
					console.log(a);
					noticieroService.byType('sports').then(function (data){
						$scope.noticias = data;
					});
				} else if (a == 3) {
					console.log(a);
					noticieroService.byType('actualidad').then(function (data){
						$scope.noticias = data;
					});
				} else if (a == 4) {
					console.log(a);
					noticieroService.byType('mundo').then(function (data){
						$scope.noticias = data;
					});
				}
				
		}])

		.controller('NoticieroController', 
			['$scope', '$routeParams', 'noticieroService', function($scope, $routeParams, noticieroService){
				var id = $routeParams.id;
				$scope.noticia = {};

				noticieroService.byId(id)
					.then(function (data) {
						$scope.noticia = data;
					});
		}])

		.controller('TabsController', 
			['$scope', 'noticieroService', '$controller', function($scope, noticieroService, $controller){
				this.tab = 1;

				this.selectTab = function (tab) {
					this.tab = tab;
					a = tab;
					console.log(a);
				};
	    }]);

})();