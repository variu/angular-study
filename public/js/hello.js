

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