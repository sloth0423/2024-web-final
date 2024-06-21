const btnSubmit = document.querySelector("#btnSubmit");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
// inputPassword.addEventListener('input',function (e) {

// });


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
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      const result = json.result;
      if (result === "success") {
        window.location.replace("/start");
        localStorage.setItem("email",inputEmail.value);
      } else if (result === "fail") {
        window.alert("로그인 실패");
        localStorage.getItem("");
      }
    });
});

