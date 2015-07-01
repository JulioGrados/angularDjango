(function(){
	angular.module('noticiero.directives', [])

		.directive('noticiaData', function () {
			return {
				restrict: 'A',
				templateUrl: 'static/js/partials/noticia-data.html'
			};
		})

		.directive('noticiaComments', function () {
			return {
				restrict: 'A',
				templateUrl: 'static/js/partials/noticia-coments.html',
				controller: function () {
					this.comments = [];
					this.comment= {
						edit: false,
					};

					this.addComment = function () {
						this.comments.push(this.comment);
						this.comment = {};
					};

					this.editarComentario = function (comentario) {
						comentario.edit = true;
						comentario.bodyReplace = comentario.body;
					};

					this.guardarComentario = function (comentario) {
						comentario.edit = false;
						comentario.bodyReplace = "";
					};

					this.cancelarComentario = function (comentario) {
						comentario.edit = false;
						comentario.body = comentario.bodyReplace;
						comentario.bodyReplace = "";
					};
				},

				controllerAs: 'cmtsCtrl'
			};
		});
})();