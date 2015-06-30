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
			'corrupti veritatis quibusdam vel quas delectus.'
		};

		this.selectTab = function (tab) {
			console.log(this.noticia);
	      	this.tab = tab;
	    };
	});

})();