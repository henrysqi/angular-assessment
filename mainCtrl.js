angular.module('assessment').controller('mainCtrl', function($scope, mainService, $state, $stateParams){
	
	mainService.getAllProducts().then(function(res){
		$scope.products = res;
		console.log($scope.products)
	})
	
	console.log($stateParams)
	
	mainService.getSpecificProduct($stateParams.id).then(function(res){
			$scope.specific = res;
	})
	
})