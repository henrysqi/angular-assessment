angular.module('assessment').directive('productDirective', function(){
	
	return {
		restrict: 'EA',
		templateUrl: 'views/product-tmpl.html',
		scope: {
			product: "="
		}
	}
	
})