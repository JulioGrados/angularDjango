(function () {
	var app = angular.module('noticiero', []);

	app.controller('NoticieroController', function(){
		this.tab = 1;

		this.noticia = {
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

		this.selectTab = function (tab) {
			console.log(this.noticia);
	      	this.tab = tab;
	    };
	});

	app.directive('noticiaData', function () {
		return {
			restrict: 'A',
			templateUrl: 'static/js/partials/noticia-data.html'
		};
	});

	app.directive('noticiaComments', function () {
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