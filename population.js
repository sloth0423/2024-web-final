// const selectLoc = document.querySelector("#selectLoc");

//       selectLoc.addEventListener("click", function () {
//         const savedEmail = localStorage.getItem("email");
//         let hasArrayWithEmail = userInfo.some(
//           (userInfo) => userInfo.email === savedEmail
//         );
//         if (hasArrayWithEmail) {
//           const info = userInfo.find(
//             (userInfo) => userInfo.email === savedEmail
//           );
//           const birthInfo = info.birthyear;
//           const gender = info.gender;
//           const year = 2024;
//           const age = year + 1 - birthInfo;
//           if ((age <= 20 && 10 < age) || gender == "남자") {
//             console.log("성공!");
//           }
//         }
//       });
const selectLoc = document.querySelector("#selectLoc");

selectLoc.addEventListener("click", function () {
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");
  const savedAge = localStorage.getItem("age");
  const savedGender = localStorage.getItem("gender");

  if (savedAge> 10 && savedAge <= 20 || savedGender == "남자"){
    console.log("성공!");
  }
});
