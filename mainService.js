angular.module('assessment').service('mainService', function($http, $q){
	
	this.getAllProducts = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://practiceapi.devmounta.in/products'
		}).then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise;
	}
	
	this.getSpecificProduct = function(id){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://practiceapi.devmounta.in/products/' + id
		}).then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise;
	}
	
})