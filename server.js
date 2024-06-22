const express = require("express");
const { createHmac } = require("node:crypto");
const userInfo = require("./userinfo.js");
const populationInfo = require("./populationinfo.js");

// const qs = require('qs');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/html/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/html/signup.html");
});

app.get("/start", (req, res) => {
  res.sendFile(__dirname + "/public/html/start.html");
});

app.get("/locationinfo", (req, res) => {
  const seoulGu = {
    dong: "",
    guName1: "강남구",
    guName2: "마포구",
    guName3: "용산구",
    dongName1: "",
    dongName2: "",
    dongName3: "",
    dongName4: "",
    dongName5: "",
    dongName6: "",
    dongName7: "",
    dongName8: "",
    dongName9: "",
    dongName10: "",
    dongName11: "",
    dongName12: "",
  };
  res.render("locationinfo", seoulGu);
});

app.get("/locationinfo/gangnam", (req, res) => {
  const gangnamDong = {
    dong: "동",
    guName1: "강남구",
    guName2: "마포구",
    guName3: "용산구",
    dongName1: "신사동",
    dongName2: "논현동",
    dongName3: "압구정동",
    dongName4: "개포동",
    dongName5: "삼성동",
    dongName6: "대치동",
    dongName7: "",
    dongName8: "",
    dongName9: "",
    dongName10: "",
    dongName11: "",
    dongName12: "",
  };
  res.render("locationinfo", gangnamDong);
});

app.get("/locationinfo/mapo", (req, res) => {
  const mapoDong = {
    dong: "동",
    guName1: "강남구",
    guName2: "마포구",
    guName3: "용산구",
    dongName1: "",
    dongName2: "",
    dongName3: "",
    dongName4: "",
    dongName5: "",
    dongName6: "",
    dongName7: "연남동",
    dongName8: "합정동",
    dongName9: "망원동",
    dongName10: "상암동",
    dongName11: "",
    dongName12: "",
  };
  res.render("locationinfo", mapoDong);
});

app.get("/locationinfo/yongsan", (req, res) => {
  const yongsanDong = {
    dong: "동",
    guName1: "강남구",
    guName2: "마포구",
    guName3: "용산구",
    dongName1: "",
    dongName2: "",
    dongName3: "",
    dongName4: "",
    dongName5: "",
    dongName6: "",
    dongName7: "",
    dongName8: "",
    dongName9: "",
    dongName10: "",
    dongName11: "한남동",
    dongName12: "이태원동",
  };
  res.render("locationinfo", yongsanDong);
});

let sinsa = {
  dongTwo: "신사",
  teensMale: "0",
  teensFemale: "0",
  twentiesMale: "0",
  twentiesFemale: "0",
  thirtiesMale: "0",
  thirtiesFemale: "0",
  fortiesMale: "0",
  fortiesFemale: "0",
  fiftiesMale: "0",
  fiftiesFemale: "0",
  sixtiesMale: "0",
  sixtiesFemale: "0",
  seventiesMale: "0",
  seventiesFemale: "0",
};

app.get("/population/sinsa", (req, res) => {
  // 여기서부터 다시 해야함-----------------------------------------------
  // const sinsa = {
  //   dongTwo: "신사",
  //   teensMale: "0",
  //   teensFemale: "0",
  //   twentiesMale: "0",
  //   twentiesFemale: "0",
  //   thirtiesMale: "0",
  //   thirtiesFemale: "0",
  //   fortiesMale: "0",
  //   fortiesFemale: "0",
  //   fiftiesMale: "0",
  //   fiftiesFemale: "0",
  //   sixtiesMale: "0",
  //   sixtiesFemale: "0",
  //   seventiesMale: "0",
  //   seventiesFemale: "0",
  //   // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  // };
  res.render("population.ejs", sinsa);
});

app.get("/api/population/sinsa", (req,res) =>{
  res.json(sinsa);
})

app.post("/api/population/sinsa",(req,res )=> {
  sinsa = { ...sinsa, ...req.body };
  // 여기서 ...은 객체를 병합시키는 연산자라고 함...
  res.json(sinsa);
})

app.get("/population/nonhyeon", (req, res) => {
  const nonhyeon = {
    dongTwo: "논현",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", nonhyeon);
});

app.get("/population/apgujeong", (req, res) => {
  const apgujeong = {
    dongTwo: "압구정",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", apgujeong);
});

app.get("/population/gaepo", (req, res) => {
  const gaepo = {
    dongTwo: "개포",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", gaepo);
});

app.get("/population/samsung", (req, res) => {
  const samsung = {
    dongTwo: "삼성",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", samsung);
});

app.get("/population/daechi", (req, res) => {
  const daechi = {
    dongTwo: "대치",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", daechi);
});

app.get("/population/yeonnam", (req, res) => {
  const yeonnam = {
    dongTwo: "연남",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", yeonnam);
});

app.get("/population/hapjeong", (req, res) => {
  const hapjeong = {
    dongTwo: "합정",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", hapjeong);
});

app.get("/population/mangwon", (req, res) => {
  const mangwon = {
    dongTwo: "망원",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", mangwon);
});

app.get("/population/sangam", (req, res) => {
  const sangam = {
    dongTwo: "상암",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", sangam);
});

app.get("/population/hannam", (req, res) => {
  const hannam = {
    dongTwo: "한남",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", hannam);
});

app.get("/population/itaewon", (req, res) => {
  const itaewon = {
    dongTwo: "이태원",
    teensMale: "0",
    teensFemale: "0",
    twentiesMale: "0",
    twentiesFemale: "0",
    thirtiesMale: "0",
    thirtiesFemale: "0",
    fortiesMale: "0",
    fortiesFemale: "0",
    fiftiesMale: "0",
    fiftiesFemale: "0",
    sixtiesMale: "0",
    sixtiesFemale: "0",
    seventiesMale: "0",
    seventiesFemale: "0",
    // 여기다가 DB?의 값들을 넣어야 하는데 할 수 있겠지...
  };
  res.render("population.ejs", itaewon);
});

// 여기서 부터 비밀번호 해시화 하는 부분
// 여기서 부터
app.post("/login", (req, res) => {
  // console.log(req.body);
  // const email = req.body.email;
  // const password = req.body.password;
  // 바로 아래 코드랑 똑같다. 완벽히 똑같지는 않지만 개념상 똑같다.
  const { email, password, age, gender } = req.body;

  const secret = "423";
  const hash = createHmac("sha256", secret).update(password).digest("hex");
  // console.log(hash);
  let hasArrayWithEmail = userInfo.some((userInfo) => userInfo.email === email);
  let ElimentWithEmail = userInfo.find((userInfo) => userInfo.email === email);
  if (
    hasArrayWithEmail &&
    ElimentWithEmail.password === hash &&
    ElimentWithEmail.age === age &&
    ElimentWithEmail.gender === gender
  ) {
    res.json({ result: "success" });
  } else {
    res.json({ result: "fail" });
  }
  // 여기서 DB에 있는 이메일 , 패스워드 빼서 아래 예제 코드 처럼
  // 성공과 실패를 login페이지에 보내야 함

  // DB가 없으므로 하드 코딩(데이터를 코드에 직접 입력하는 것)을 해보자
  // 정보가 일치하면
  //   if (email === 'asdfasdf' && hash === '4e1752806fc26ed7300a307a5c5054a27127184eea239e47ea60e2c77b648c51' ){
  //     res.json({result:'success'});
  //   } else{
  //     res.json({result:'fail'});
  //   }
});
// // 여기까지 2024/06/13

app.post("/signup", (req, res) => {
  // console.log(req.body);

  const emails = req.body.email;
  const passwords = req.body.password;
  const ages = req.body.age;
  const genders = req.body.gender;
  // const{emails, passwords,birthYears, genders}= req.body;
  const secret = "423";
  const hash = createHmac("sha256", secret).update(passwords).digest("hex");
  // console.log(hash);
  // 여기서 이메일, 패스워드 DB에 넣고
  let hasArrayWithEmail = userInfo.some(
    (userInfo) => userInfo.email === emails
  );
  if (hasArrayWithEmail) {
    res.json({ result: "already" });
  } else {
    let personInfo = {
      email: emails,
      password: hash,
      age: ages,
      gender: genders,
    };
    userInfo.push(personInfo);
  }

  // console.log(userInfo);
  // birthYears,genders  변수들 잘 조작해야함
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
