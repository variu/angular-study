angular.module('book')
.controller('bookListCtrl', function($scope, $filter){
	var selectedGrade = null;
	$scope.scopeOrderBy = false;	// true : asc , false : desc
	$scope.scopeStar = false;		// 별로 만들건지 말건지

	$scope.selectGrade = function(newGrade){
		selectedGrade = newGrade==undefined?null:parseInt(newGrade);		
	}

	$scope.gradeFilterFn = function(book){
		return selectedGrade == null || parseInt(book.grade) == selectedGrade;
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

	$scope.toStar = function(num){
		if($scope.scopeStar){
			var star = '';
			for(var i = 0; i < num; i++ ){
				star = star.concat("*");		
			}

			return star;	
		}
		else{
			return num;
		}
		
	}

});