(function(){
	angular.module('noticiero.controllers', [])
		.controller('NoticiasController',
			['$rootScope', 'noticieroService', function($rootScope, noticieroService){
				$rootScope.detail = false;
				if ($rootScope.select == 1) {
					noticieroService.all().then(function (data){
						$rootScope.noticias = data;
					});
				} else if ($rootScope.select == 2) {
					noticieroService.byType('sports').then(function (data){
						$rootScope.noticias = data;
					});
				} else if ($rootScope.select == 3) {
					noticieroService.byType('actualidad').then(function (data){
						$rootScope.noticias = data;
					});
				} else if ($rootScope.select == 4) {
					noticieroService.byType('mundo').then(function (data){
						$rootScope.noticias = data;
					});
				}
				noticieroService.all().then(function (data){
					$rootScope.noticias = data;
				});
				
		}])

		.controller('NoticieroController', 
			['$scope', '$rootScope', '$routeParams', 'noticieroService', function($scope, $rootScope,$routeParams, noticieroService){
				var id = $routeParams.id;
				$rootScope.detail = true;
				$scope.noticia = {};

				noticieroService.byId(id)
					.then(function (data) {
						$scope.noticia = data;
					});
		}])

		.controller('TabsController', 
			['$rootScope', 'noticieroService', function($rootScope, noticieroService){
				$rootScope.select = 1;
				this.tab = 1;

				this.selectTab = function (tab) {
					this.tab = tab;
					$rootScope.select = tab;
					if (this.tab == 1 && $rootScope.detail === false) {
						noticieroService.all().then(function (data){
							$rootScope.noticias = data;
						});
					} else if (this.tab == 2 && $rootScope.detail === false) {
						noticieroService.byType('sports').then(function (data){
							$rootScope.noticias = data;
						});
					} else if (this.tab == 3 && $rootScope.detail === false) {
						noticieroService.byType('actualidad').then(function (data){
							$rootScope.noticias = data;
						});
					} else if (this.tab == 4 && $rootScope.detail === false) {
						noticieroService.byType('mundo').then(function (data){
							$rootScope.noticias = data;
						});
					}

				};
	    }]);
})();