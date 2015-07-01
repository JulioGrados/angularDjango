(function(){
	angular.module('noticiero.controllers', [])
		.controller('NoticiasController', 
			['$scope', '$http', function($scope, $http){
				$scope.noticias = [];
				$http.get('http://localhost:8000/api/noticias/')
					.success(function (data){
						$scope.noticias = data;
					});
		}])
		.controller('NoticieroController', ['$scope', '$http', function($scope, $http){
			$scope.tab = 1;

			$scope.noticia = {
				id: 001,
				img: 'images.jpg',
				titulo: 'Curso de programación de Html y Css',
				autor: 'Julio Grados',
				descripcion: 'Lorem ipsum dolor sit amet,' +
				'consectetur adipisicing elit.' + 
				'Neque totam voluptates expedita dolores.' +
				'Aperiam, aliquid! Eveniet fuga nam neque praesentium magnam,' +
				'accusantium nulla, ducimus,' + 
				'corrupti veritatis quibusdam vel quas delectus.',
				date: Date.now('2015-04-09T03:58:48.696836Z'),
			};

			$scope.selectTab = function (tab) {
				console.log($scope.noticia);
		      	$scope.tab = tab;
		    };
		}]);

})();