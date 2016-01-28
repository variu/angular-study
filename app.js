
var express = require('express'); //express 모듈 호출
var path = require('path'); //path 모듈 호출
var bodyParser = require('body-parser');

var app = express(); //express 모듈 실행
app.use(express.static(path.join(__dirname, 'public'))); //public 폴더를 static으로 지정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//http method중 get방식으로 
// 기본
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

// 포인트 상점
app.get('/products', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/product.html'));
});

// 서점
app.get('/books', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/book.html'));
});

// 헬로우
app.get('/hello', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/hello.html'));
});

var items = [
    { title: '볼펜', count: 4, price: 1800 },
    { title: '지우개', count: 1, price: 800 },
    { title: '연필', count: 12, price: 400 },
    { title:'필통', count:3, price:2800 }
];

app.get('/hello/data', function(req, res){
    res.json(items);
});

app.post('/hello/data', function(req, res, next){
    var body = req.body;
    console.log('req body : ' + JSON.stringify(body));
    if( !body.title ||
        !body.count ||
        !body.price){

        next(new Error('빈값이 있다!'));
    }else{
        items.push(body);
        res.json(true);
    }
});

// 가계부용
var moneyBook = [
    {date: '2016. 1. 11. 오후 8:25:39', description : '저녁식사', money :7000},
    {date: '2016. 1. 12. 오전 7:29:49', description : '아침식사', money :3800},
    {date: '2016. 1. 12. 오전 11:45:19', description : '점심식사', money :5500}
];
app.get('/money-book', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/moneyBook.html'));
});

app.get('/money-book/history', function(req, res){
    res.send(moneyBook);
});

app.post('/money-book/history', function(req, res, next){
    var body = req.body;
    console.log('req body : ' + JSON.stringify(body));
    if( !body.date ||
        !body.description ||
        !body.money){

        next(new Error('빈값이 있다!'));
    }else{
        moneyBook.push(body);
        res.json(true);
    }
});

// product 장바구니 추가
var secretKey = 12345;
app.get('/product/secret', function(req, res){
    secretKey = Math.floor((Math.random()*99999) + 10000);
    console.log('current secret key : ' + secretKey);
    res.json(secretKey);
});

var limitMoney = 100000;
app.post('/product/buy', function(req, res){
    var list = req.body.list,
          key = req.body.secretKey,
          sum = 0;

    if(key != secretKey){
        console.log('request key : ' + key);
        res.json("secret key가 틀렸습니다.");
    }else{
        for(var i=0;i<list.length;i++){
            sum += parseInt(list[i].price);
        }

        res.json(sum<=limitMoney? '구매 성공' : '금액이 초과하였습니다.');
    }
});


//외부 API라고 가정
app.get('/name', function(req, res){
    var dice = Math.random() * 5 +1;
    res.send(dice>=3? 'hello' : 'world');
});

app.get('/gender/:name', function(req, res){
    if(!req.params.name){
                res.send(false);
    }
    res.send(req.params.name === 'hello'? 'male' : 'female');
});

app.get('/regist/:gender', function(req, res){
    if(!req.params.gender){
                res.send(false);
    }
    res.send(req.params.gender === 'male'? '13579' : '24680');
});

app.listen(8080);
console.log('Express Listening on port 8080...');