const express = require('express')
const app = express()
const port = 3000 // port 충돌 시 직접 다른 포트번호로 지정해도 됨

// html의 요청을 응답이 잘 되도록 CORS의 역할을 해줘야 함
// 모듈 설치 -> cors
var cors = require('cors') // html에서 보내는 요청을 허용하도록 함
app.use(cors()) // cors() 괄호 안에 조건을 부여해 특정 요청은 허용하지 않을수도 있음
// 지금처럼 비워두면 모든 접근 허용!

app.get('/sound/:name', (req, res) => {
    // const p = req.params;
    // p.name
    const {name} = req.params // 위 두 코드를 간결하게 한 코드, 중괄호에 키 값 넣음
    console.log(name)

    // 동물별로 울음소리 다르게 출력 - js 문법 사용
    if (name == "dog") {
        res.json({'sound': '멍멍'})
    } else if (name == "cat") {
        res.json({'sound': '야옹'})
    } else if (name == 'pig') {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})

app.listen(port, () => {
    console.log(`Listening on port : ${port}`)
})