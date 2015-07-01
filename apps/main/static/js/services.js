(function (){
	angular.module('noticiero.services', [])

		.factory('noticieroService', 
			['$http', '$q', '$window', function($http, $q, $window){
			
			var localStorage = $window.localStorage;

			function all () {
				var deferred = $q.defer();

				$http.get('http://localhost:8000/api/noticias/', {cache: true})
					.success(function (data) {
						deferred.resolve(data);
					})

				return deferred.promise;
			}

			function byId (id) {
				var deferred = $q.defer();
				
				$http.get('http://localhost:8000/api/noticias/' + id, {cache: true})
					.success(function (data) {
						deferred.resolve(data);
					})

				return deferred.promise;
			}

			function byType (type) {
				var deferred = $q.defer();

				all().then(function (data){
					var results = data.filter(function (noticia){
						return noticia.category.name == type;
					});

					deferred.resolve(results);
				});

				return deferred.promise;
			}

			function saveComment (noticia, comment) {
				var comments = getComments(noticia);
				comments.push(comment);
				localStorage.setItem(noticia, JSON.stringify(comments));
			}

			function getComments (noticia) {
				var comments = localStorage.getItem(noticia);

				if ( !comments ) {
					comments = [];
				} else {
					comments = JSON.parse(comments);
				}

				return comments;
			}

			return {
				all: all,
				byId: byId,
				byType: byType,
				saveComment: saveComment,
				getComments: getComments
			}
		}])
})();