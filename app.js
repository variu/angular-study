
var express = require('express'); //express 모듈 호출
var path = require('path'); //path 모듈 호출
var app = express(); //express 모듈 실행

app.use(express.static(path.join(__dirname, 'public'))); //public 폴더를 static으로 지정

//http method중 get방식으로 
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.get('/products', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/product.html'));
});


app.listen(8080);
console.log('Express Listening on port 8080...');