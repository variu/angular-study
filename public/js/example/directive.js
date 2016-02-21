/*
angularJS 에서는 
html 형식으로
기본 카멜케이스 방식을 - 로 나눠준다.
ex) ngModel -> ng-model
*/

angular.module('example')
    .directive('ngInitFocus', function(){
        return {
        	link : function(scope, element){
        		// scope는 $scope와 같음
        		// element 자신 태그
        		// attrs : attribute 집합
		element[0].focus();
        	}
        }
    })
    .directive('helloWorld', function(){
        return {
        	restrict : 'E', // E : element, A : attribute, C : class, M : comment
        	template : '<div><h3>디렉티브잼</h3></div>'
        }
    })
    .directive('movie', function(){
        return {
        	restrict : 'E', // E : element, A : attribute, C : class, M : comment
        	link : function(scope, element, attrs){
        		scope.username = attrs.username,
        		scope.reputation = attrs.reputation,
        		scope.img = attrs.img
        	},
        	template : '<div><p><h3>영화소개</p></h3>'+
        		     '<p>Username : {{username}} </p>'+
        		     '<p>Reputation : {{reputation}} </p>'+
        		     '<img src="{{img}}" width="200" height="280" ' +
        		     '</div>'
        }
    })
    .directive('restricted', function(){
        return {
        	restrict : 'A', // E : element, A : attribute, C : class, M : comment
        	link : function(scope, element, attrs){
        		var isAuth = Math.floor( ( Math.random() * 10 ) + 1 ) > 5 ;

        		if(!isAuth){
        			element.css('display', 'none');
        		}
        	}
        }
    })
    .directive('products', function(){
        return {
        	restrict : 'E', // E : element, A : attribute, C : class, M : comment
        	link : function(scope, element, attrs){
        		var  products = [
		    {category : 'Watersports', description:'1인용 보트', name:'카약', price:'270000', id:1},
		    {category : 'Watersports', description:'보호 장비', name:'보호재킷', price:'48000', id:2},
		    {category : 'Soccer', description:'FIFA 규격의 무게', name:'축구공', price:'28000', id:3},
		    {category : 'Soccer', description:'Nike', name:'축구화', price:'160000', id:4},
		    {category : 'Soccer', description:'상,하의', name:'유니폼', price:'97000', id:5},
		    {category : 'BasketBall', description:'KBL 공식 지정구', name:'농구공', price:'56000', id:6},
		    {category : 'BasketBall', description:'2015 서울 StreetBall', name:'대회참가권', price:'20000', id:7},
		    {category : 'BasketBall', description:'조던 6', name:'농구화', price:'180000', id:8},
		    {category : 'BasketBall', description:'겨울용', name:'이너웨어', price:'46000', id:9}
		];

		scope.products = products;
	},
        	template : '<div><ul ng-repeat="item in products">'+
        		     '<li>{{item.name}}</li>'+
        		     '</ul></div>'
        }
    })
    .directive('templateList', function(){
        return {
        	restrict : 'A', // E : element, A : attribute, C : class, M : comment
        	// templateUrl : '../../html/exampleTemplate.html'
        	templateUrl : function(el, attrs){
        		// 바로 위 directive인 products에서 scope에
        		// products 데이터를 넣어주므로 해당 데이터를 활용하자
        		var defaultPath = '../../html/';
        		var templateName = (attrs['template'] === 'table')?
        			'exampleTableTemplate.html':'exampleTemplate.html';
        		return defaultPath + templateName;
        	},
        	// 속성을 적용한 태그 자체를 바꾼다. 
        	// 이때,태그 자체 외의 속성은 그대로 두기 때문에 공통모듈로 만들기 용이하다
        	replace : true	

        	// scope : true 이것은 해당 태그 내에서만 사용할 수 있는 scope 영역을 만든다.

        }
    });