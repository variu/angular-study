angular.module('book')
.constant('bookListActiveClass', 'btn-success')		
.constant('bookListPageCount', 2)
.controller('bookListCtrl', function($scope, $filter, bookListActiveClass, bookListPageCount) {
	var selectedGrade = null;
	$scope.scopeOrderBy = false;	// true : asc , false : desc
	$scope.scopeStar = false;		// 별로 만들건지 말건지

	$scope.selectGrade = function(newGrade){
		selectedGrade = newGrade==undefined?null:parseInt(newGrade);
		$scope.selectedPage = 1;		
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

	// 페이징 관련
	$scope.selectedPage = 1;
	$scope.pageSize = bookListPageCount;

	$scope.selectPage = function(newPage){
		$scope.selectedPage = newPage;
	}

	$scope.getPageClass = function(page){
		return ($scope.selectedPage == page)?bookListActiveClass : '';
	}

	// 등급에 따른 클래스 이벤트
	$scope.getPageClass = function(page){
		return $scope.selectedPage == page? bookListActiveClass : '';
	};

	// 클릭하면 내용 보여주기
	$scope.show = function(book){
		var msg = '';

             	for(prop in book){
	                 	if(prop != '$$hashKey'){
	                     		msg += prop + ' : ' + book[prop] + '\n';
	                 	}
	             }

	             alert(msg);
         	}

});