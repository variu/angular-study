angular.module('book')
.controller('bookListCtrl', function($scope, $filter){
	var selectedGrade = null;
	$scope.scopeOrderBy = false;	// true : asc , false : desc
	$scope.scopeStar = false;		// 별로 만들건지 말건지

	$scope.selectGrade = function(newGrade){
		selectedGrade = Math.floor(newGrade);		
	}

	$scope.gradeFilterFn = function(book){
		return selectedGrade == null || Math.floor(book.grade) == selectedGrade;
	}

	$scope.selectOrder = function(){
		$scope.scopeOrderBy = !$scope.scopeOrderBy;
	}	

	$scope.orderFilterFn = function(){
		return $scope.scopeOrderBy;
	}

	$scope.changeStar = function(){
		$scope.scopeStar = !$scope.scopeStar;
	}

});