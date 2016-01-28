// 이렇게 쓰면 기존에 product.js 에 만들어진 모듈에 추가한다는 것이다. 컨트롤러 별로 이렇게 만든다
angular.module('product')
.constant('productListActiveClass', 'btn-primary')		// java의 static final 과 같이 상수화 시킨 변수
.constant('productListPageCount', 3)
.controller('productListCtrl', function($scope, $filter, $http, $q, productListActiveClass, productListPageCount){

	// 카테고리 관련
	var selectedCategory = null;

	$scope.selectCategory = function(newCategory){
		selectedCategory = newCategory;	
		$scope.selectedPage = 1;	
	}

	$scope.categoryFilterFn = function(product){
		return selectedCategory == null || product.category == selectedCategory;
	}

	$scope.getCategoryClass = function(category){
		return (selectedCategory == category)?productListActiveClass : '';
	}

	
	// 페이징 관련
	$scope.selectedPage = 1;
	$scope.pageSize = productListPageCount;

	$scope.selectPage = function(newPage){
		$scope.selectedPage = newPage;
	}

	$scope.getPageClass = function(page){
		return ($scope.selectedPage == page)?productListActiveClass : '';
	}


	// 장바구니 관련
	$scope.totalPrice = 0;

	$scope.putToCart = function(product){
		var object = {
			name : product.name,
			price : product.price
		};
		$scope.data.cart.push(object);
		$scope.totalPrice += parseInt(product.price);
	}

	$scope.buy = function(){
		var data = {
                		list : $scope.data.cart,
                		secretKey : 0
           		};

            		$http.get('/product/secret')
                	.then(function(response){
                    		return response.data;

                	}).then(function(secretKey){
                    		data.secretKey = secretKey;
                    		$http.post('/product/buy', data)
                        		.then(function(response){
                                		alert(response.data);
                            	},
                            	function(response){
                                		alert('구매 실패!' + response.status);
                            	});
            		});
	}
	
})