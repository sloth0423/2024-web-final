const signupButton = document.querySelector("#signupButton");
const inputEmails = document.querySelector("#inputEmails");
const inputPasswords = document.querySelector("#inputPasswords");
const inputAge = document.querySelector("#age");
const inputGender = document.querySelector("#gender");
// rFN = residentFrontNumbers, rBFN = residentBackFirstNumber
signupButton.addEventListener("click", function () {
//   console.log(
//     inputEmails.value,
//     inputPasswords.value,
//     inputBirthYear.value,
//     inputGender.value
//   );

  fetch("http://localhost:3000/signup", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: inputEmails.value,
      password: inputPasswords.value,
      age: inputAge.value,
      gender: inputGender.value
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      const result = json.result;
      if (result === "already") {
        window.alert("이미 해당 이메일로 만든 계정이 있습니다.");
      }
    });
  window.location.replace("/login");
});
