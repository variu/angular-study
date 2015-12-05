// 이렇게 쓰면 기존에 product.js 에 만들어진 모듈에 추가한다는 것이다. 컨트롤러 별로 이렇게 만든다
angular.module('product')
.controller('productListCtrl', function($scope, $filter){
	var selectedCategory = null;

	$scope.selectCategory = function(newCategory){
		selectedCategory = newCategory;		
	}

	$scope.categoryFilterFn = function(product){
		return selectedCategory == null || product.category == selectedCategory;
	}
});