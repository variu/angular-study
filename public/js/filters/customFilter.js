// 파라미터 중 data 는 ng-repeat 관련해서 데이터를 자동으로 받고, 그 뒤로는 파라미터이다.

angular.module('customFilter',[])
.filter('unique', function(){
	return function(data,prop){	// data : item, prop : 'category' 처럼 들어온다.
		if(angular.isArray(data) && angular.isString(prop)){
			var results=[];
			var keys={};
			for(var i=0; i<data.length; i++){

				var val = data[i][prop];

				// data.Watersports 가 없으면 넣어준다.
				if(angular.isUndefined(keys[val])){
					keys[val] = true;
					results.push(val);
				}
			}
			return results;
		}
		else{
			return data;
		}
	}
})
.filter('limit', function(){
	return function(data,prop,$scope){		// data : item, prop : 'grade'
		if(angular.isArray(data) && angular.isString(prop)){

			var results=[];
			var keys={};
			for(var i=0; i<data.length; i++){

				var val = parseInt(data[i][prop]);	// 정수로 바꾼다

				if(angular.isUndefined(keys[val])){
					keys[val] = true;
					results.push(val);
				}
			}
			return results;
		}
		else{
			return data;
		}
	}
})
.filter('range', function($filter){
	return function(data, page, size){	
		if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
			var startIndex = (page - 1) * size;
			if(data.length < startIndex){
				return [];
			}else{
				return $filter('limitTo')(data.splice(startIndex), size);	// 새로운 배열을 만들어준다.
			}
		}
		else{
			return data;
		}



	}
})
.filter('pageCount', function(){
	return function(data, size){	
		if(angular.isArray(data)){
			var results=[];
			for(var i=0; i<Math.ceil(data.length / size); i++){
				results.push(i);	
			}
			return results;
		}
		else{
			return data;
		}
	}
});
