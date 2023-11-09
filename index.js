// 라우팅 => 주소창에 /dog라고 쓰는것
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})
// 주소창에 입력하는 get 방식으로 루트 페이지에 접속하면 res를 이용해 hello world 응답 출력

app.get('/dog', (req, res) => {
    res.send('<h1>강아지</h1>') //html 태그도 가능, 수정 시에는 서버 재실행!
})
// /dog로 get방식으로 접속하면 응답으로 강아지를 출력
app.get('/cat', (req, res) => {
    res.json({'sound': '야옹야옹'})
    // JSON : JavaScript Object Notation, res.json으로 하면 json이라고 더 명시하는 것.
})
// 뒤에 라우팅이 cat이므로 접속하면 응답으로 고양이 출력

// axios라는 라이브러리로 요청을 보냄. axios로 요청해서  response로 응답

// 변수로 요청 보내고 응답 받기
// GET: params, query 이용.
// params : user/toppingh -> 유저의 아이디(변수)로 받는 것
app.get('/user/:id', (req, res) => { // id로 받을 떈 : 필수!
    // const q = req.params
    // console.log(q) // params를 찍어 어떤 id값으로 들어왔는지 콘솔에 출력

    // query : google.com/search?q=질문 : q라는 변수에 '질문'을 넣는것
    // key : value 구조. (JSON 데이터, 파이썬 딕셔너리)
    const q = req.query
    console.log(q.q)
    console.log(q.name)
    res.json({'userid': q.name})
    // http://localhost:3000/user/dog?q=hwang&name=topping&age=3 이렇게 주소창에 입력
})

// POST - 주소창 말고 Axios 혹은 Fetch로 요청 가능(body에 적용)
app.use(express.json());
app.post('/user/:id', (req, res) => { // :id = github.com/topping -> topping 부분
    const p = req.params;
    console.log(p);

    const b = req.body;
    console.log(b);

    res.send({'message': 'Hello wolrd'});
})


app.listen(port, () => {
    console.log(`Listening on port : ${port}`)
})
// port(3000)을 항상 열어 둔다. 확인을 위해 콘솔에 port 출력