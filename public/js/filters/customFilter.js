

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
	return function(data,prop){		// data : item, prop : 'grade'
		if(angular.isArray(data) && angular.isString(prop)){
alert($scope.scopeStar);

			var results=[];
			var keys={};
			for(var i=0; i<data.length; i++){

				var val = Math.floor(data[i][prop]);	// 내림처리, 소수점 없애기

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
.filter('sum', function(){
	return function(data,prop){		// data : item, prop : ''
		if(angular.isArray(data) && angular.isString(prop)){

			var result=0;
			for(var i=0; i<data.length; i++){

				var val = data[i]['count']) * data[i]['price']);

				result = result + val;
			}
			return result;
		}
		else{
			return data;
		}
	}
});

