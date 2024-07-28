import express from 'express'; //express 웹 프레임 워크를 이용한 서버 띄우기
const app = express(); //app은 express 함수를 실행
const port = 3000; // port 값은 3000
import bodyParser from 'body-parser'; //body-parser는 클라이언트에서 서버로 데이터를 전송할 때 데이터를 전달받는 역할을 함
import cors from 'cors'; //cors는 서버에 요청을 할 때 도메인이 다른 경우에 요청을 제한하는 것을 해제하는 것
import path from 'path'; //path는 파일의 경로를 설정할 때 사용하는 모듈
const __dirname = path.resolve();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const homeList = [
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '엑스 맨션에서 훈련하기',
    host: 'Jubilee 님',
    price: '₩52,782/인',
  },
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '박주영 집에서 자기',
    host: 'Jubilee 님',
    price: '₩52,782/인',
  },
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '프린스의 퍼플레인 하우스',
    host: 'Jubilee 님',
    price: '₩52,782/인',
  },
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '거실에서 펼쳐지는 도자켓의 단독공연',
    host: 'Jubilee 님',
    price: '₩52,782/인',
  },
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '둥둥 떠다니는 up하우스',
    host: 'Jubilee 님',
    price: '₩52,782/인',
  },
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '인사이드 아웃 세계',
    host: 'Jubilee 님',
    price: '₩52,782/인',
  },
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '오르세 미술관에서 맞이하는 아침',
    host: 'Jubilee 님',
    price: '₩52,782/인',
  },
  {
    img: 'http://localhost:3000/file/image/home.png',
    title: '사수님의 집',
    host: '신재훈 님',
    price: '₩500,000,000,000/인',
  },
];
// let id = 2;
// const todoList = [{ id: 1, text: '할일1', done: false }];

app.get('/homeList', (req, res) => {
  res.json(homeList);
});

// app.post('/api/todo', (req, res) => {
//   const { text, done } = req.body;
//   todoList.push({
//     id: id++,
//     text,
//     done,
//   });
//   return res.send('success!');
// });

app.get('/file/image/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(
    // 'c:User',
    // 'sdcmo7',
    // 'Documents',
    // 'airbnb-copy',
    // 'backend',
    'assets',
    'image',
    fileName
  );
  console.log(filePath);
  res.sendFile(filePath, { root: __dirname });
});

app.listen(port, () => {
  console.log(`server is start! in ${port}`);
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/user/:id', (req, res) => {
//   // const q = req.params;
//   // console.log(q);

//   const q = req.query;
//   console.log(q);

//   res.json({ userid: q.q, name: q.name });
// });

// app.get('/sound/:name', (req, res) => {
//   const { name } = req.params;
//   console.log(name);
//   if (name == 'dog') {
//     res.json({ sound: '멍멍' });
//   } else if (name == 'cat') {
//     res.json({ sound: '야옹' });
//   } else {
//     res.json({ sound: '알수없음' });
//   }
// });
