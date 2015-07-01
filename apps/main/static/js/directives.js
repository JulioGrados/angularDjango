(function(){
	angular.module('noticiero.directives', [])

		.directive('noticiaData', function () {
			return {
				restrict: 'A',
				templateUrl: 'static/js/partials/noticia-data.html'
			};
		})

		.directive('noticiaComments', ['noticieroService', function (noticieroService) {
			return {
				restrict: 'A',
				templateUrl: 'static/js/partials/noticia-coments.html',
				scope: {
					id: '@id'
				},
				link: function (scope, element, attributes) {
					attributes.$observe('id', function (value) {
						if (value) {
							scope.id = value;
							scope.comments = noticieroService.getComments(value);
						}
					});
				},
				controller: function ($scope) {
					$scope.comments = noticieroService.getComments($scope.id);
					$scope.comment= {
						edit: false,
					};

					$scope.addComment = function () {
						noticieroService.saveComment($scope.id, $scope.comment);
			            $scope.comments = noticieroService.getComments($scope.id);
			            $scope.comment = {};
					};

					$scope.editarComentario = function (comentario) {
						comentario.edit = true;
						comentario.bodyReplace = comentario.body;
					};

					$scope.guardarComentario = function (comentario) {
						comentario.edit = false;
						comentario.bodyReplace = "";
					};

					$scope.cancelarComentario = function (comentario) {
						comentario.edit = false;
						comentario.body = comentario.bodyReplace;
						comentario.bodyReplace = "";
					};
				},

				controllerAs: 'cmtsCtrl'
			};
		}]);
})();