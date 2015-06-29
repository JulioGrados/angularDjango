(function () {
	var app = angular.module('noticiero', []);

	app.controller('NoticieroController', function(){
		this.noticia = {
			id: 001,
			titulo: 'Curso de programación de Html y Css',
			autor: 'Julio Giampiere Grados Caballero',
			descripcion: 'Lorem ipsum dolor sit amet,' +
			'consectetur adipisicing elit.' + 
			'Neque totam voluptates expedita dolores.' +
			'Aperiam, aliquid! Eveniet fuga nam neque praesentium magnam,' +
			'accusantium nulla, ducimus,' + 
			'corrupti veritatis quibusdam vel quas delectus.'
		};
	});
})();