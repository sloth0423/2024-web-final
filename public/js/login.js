const btnSubmit = document.querySelector("#btnSubmit");
const inputEmail = document.querySelector("#inputEmail");
const inputAge = document.querySelector("#inputAge");
const inputGender = document.querySelector("#inputGender");

const inputPassword = document.querySelector("#inputPassword");
// inputPassword.addEventListener('input',function (e) {

// });
// 여기서 부터 바꾸는 부분

// 여기까지 

const email = localStorage.getItem("asdfasdf");

btnSubmit.addEventListener("click", function () {
  // 입력된 이메일과 비밀번호 가져오기
  //console.log(inputEmail.value, inputPassword.value);

  //fetch 를 통해 입력된 정보를 서버로 전달
  fetch("http://localhost:3000/login", {
    method: "post", // 메서드를 안넣으면 자동으로 get메서드
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: inputEmail.value,
      password: inputPassword.value,
      age: inputAge.value,
      gender: inputGender.value,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      const result = json.result;
      if (result === "success") {
        window.location.replace("/start");
        localStorage.setItem("email",inputEmail.value);
        localStorage.setItem("password",inputPassword.value);
        localStorage.setItem("age",inputAge.value);
        localStorage.setItem("gender",inputGender.value);
      } else if (result === "fail") {
        window.alert("로그인 실패");
        localStorage.getItem("");
      }
    });
});

