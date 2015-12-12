

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
});
