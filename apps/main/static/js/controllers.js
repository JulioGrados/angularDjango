(function(){
	angular.module('noticiero.controllers', [])

		.controller('NoticieroController', function(){
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

})();