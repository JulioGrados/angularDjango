(function (){
	angular.module('noticiero.services', [])

		.factory('noticieroService', ['$http', '$q', function($http, $q){
			
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

			return {
				all: all,
				byId: byId,
				byType: byType
			}
		}])
})();