

/** $scope를 바로 쓸 수 있는 이유는 AngularJS가 DI 를 지원하기 때문.
*    AngularJS 는 namespace 패턴을 주로 사용한 기술
*/

angular.module('hello', [])
.controller('HelloController', function($scope, $filter){
	$scope.hello = 
	{
		msg : 'hello'
	}

	$scope.toUpper = function(){
		$scope.hello.msg = $filter('uppercase')($scope.hello.msg);
	}

	$scope.items = [
		{
			title : '볼펜',
			count : 4,
			price : 1800
		},
		{
			title : '지우개',
			count : 1,
			price : 800
		},
		{
			title : '연필',
			count : 12,
			price : 400
		}
	];

	$scope.delete = function(index){
		$scope.items.splice(index,1);
	}

	// 최초에는 input 파라미터를 안받음.
	// 파라미터를 받아서 insert 가 자기 기능만 충실하게 하는 코드가 더 좋다.
	$scope.insert = function(input){
		// 앞으로는 이런 부분에 undefined 까지 더 걸어주자 
		if(!angular.equals(input.title, '') || 
		   angular.isNumber(input.count) ||
		   angular.isNumber(input.price)		
		){
			$scope.items.push($scope.input);
			$scope.input = null;
			// $scope.input.refresh();
		}
	}

	$scope.getSum = function(items){
		var sum = 0;
		for(var i = 0; i < items.length; i++){
			var obj = items[i];
			sum += (obj.count * obj.price);
		}

		return sum;
	}

	$scope.getDiscount = function(sum){
		var discount = 0;

		if(angular.isNumber(sum)){
			if(sum > 20000){
				discount = sum/10;
			}
		}

		return discount;
	}



	// 위의 코드는 아래와 같이 쓰는게 더 좋다.
	/*
	$scope = {
		hello : {
			msg : '안녕하세요.'
		},
		toUpper = function(){
			로직
		}
	}
	*/

});