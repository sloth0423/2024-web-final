const goLocationInfo = document.querySelector("#goLocationInfo");
const reset = document.querySelector("#reset");
const logOut = document.querySelector("#logout");

const savedAge = sessionStorage.getItem("age");
const savedGender = sessionStorage.getItem("gender");
const currentLoc = sessionStorage.getItem("currentLoc");

goLocationInfo.addEventListener("click", function () {
  let resetOnOff = sessionStorage.getItem("resetOnOff");
  // eventlistner 밖에 넣으면 새로고침해야 localStorage가 적용되어서 그냥 안에 넣음
  if (resetOnOff === "0" || resetOnOff === "2") {
    window.location.href = "/locationinfo";
  } else if (resetOnOff === "1") {
    window.alert("초기화를 하지 않고 지역을 변경할 수 없습니다.");
  }
});

logOut.addEventListener("click", deleteSessionStorage);

function deleteSessionStorage() {
  window.alert("다시 로그인해주세요.");
  sessionStorage.clear();
  logOut.addEventListener("click", deleteSessionStorage);
  window.location.replace("/login");
}

////////////////// 여기서 reset.removeEventListener 넣어야 하고 -완-
/////////////////// css 만들어야 하고
////////////////// 이벤트들에 경로 넣어서 이동시키고
////////////////// 비밀번호 찾기 구현하고 -완-
///////////////// 로그아웃 구현해야함 -완-
//////////////// 그럼 아마도 끝?

reset.addEventListener("click", resetNumber);

function resetNumber() {
  let resetOnOff = sessionStorage.getItem("resetOnOff");
  if (resetOnOff === "2") {
    window.alert("지역을 선택해야 초기화를 하실 수 있습니다.");
  } else {
    if (
      savedAge > 10 &&
      savedAge <= 20 &&
      savedGender === "남성" &&
      currentLoc === "sinsa"
    ) {
      // console.log("성공!");
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.teensMale = Number(data.teensMale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        // .then((response) => response.json())
        // .then(updatedData => {
        //   console.log("Updated Data:", updatedData);
        // })
        // 바로 위 .then()함수 두 개를 넣지 않으면(.then()으로 다른 일을 하게 해도 됨)
        // 데이터를 주고 서버에서 업데이트 하는 과정이 끝나기 전에 
        // 종료되어 원래 인구 수가 0 이하로 내려갈 경우가 없는데 음수가 되는 
        // 경우가 있어서 그냥 넣어봄
        // 근데 넣어도 음수가 가끔 나오는데 왜 이런지 모르겠음
    } else if (
      savedAge > 10 &&
      savedAge <= 20 &&
      savedGender === "여성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.teensFemale = Number(data.teensFemale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 20 &&
      savedAge <= 30 &&
      savedGender === "남성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.twentiesMale = Number(data.twentiesMale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 20 &&
      savedAge <= 30 &&
      savedGender === "여성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.twentiesFemale = Number(data.twentiesFemale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 30 &&
      savedAge <= 40 &&
      savedGender === "남성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.thirtiesMale = Number(data.thirtiesMale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 30 &&
      savedAge <= 40 &&
      savedGender === "여성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.thirtiesFemale = Number(data.thirtiesFemale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 40 &&
      savedAge <= 50 &&
      savedGender === "남성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fortiesMale = Number(data.fortiesMale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 40 &&
      savedAge <= 50 &&
      savedGender === "여성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fortiesFemale = Number(data.fortiesFemale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 50 &&
      savedAge <= 60 &&
      savedGender === "남성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fiftiesMale = Number(data.fiftiesMale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 50 &&
      savedAge <= 60 &&
      savedGender === "여성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fiftiesFemale = Number(data.fiftiesFemale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 60 &&
      savedAge <= 70 &&
      savedGender === "남성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.sixtiesMale = Number(data.sixtiesMale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 60 &&
      savedAge <= 70 &&
      savedGender === "여성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.sixtiesFemale = Number(data.sixtiesFemale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 70 &&
      savedAge <= 80 &&
      savedGender === "남성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.seventiesMale = Number(data.seventiesMale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 70 &&
      savedAge <= 80 &&
      savedGender === "여성" &&
      currentLoc === "sinsa"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.seventiesFemale = Number(data.seventiesFemale) - 1;
          fetch("/api/population/sinsa", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 10 &&
      savedAge <= 20 &&
      savedGender === "남성" &&
      currentLoc === "nonhyeon"
    ) {
      // 10대 남성이고 /population/sinsa페이지에 있을 때
      // console.log("성공!");
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.teensMale = Number(data.teensMale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 10 &&
      savedAge <= 20 &&
      savedGender === "여성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.teensFemale = Number(data.teensFemale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 20 &&
      savedAge <= 30 &&
      savedGender === "남성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.twentiesMale = Number(data.twentiesMale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 20 &&
      savedAge <= 30 &&
      savedGender === "여성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.twentiesFemale = Number(data.twentiesFemale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 30 &&
      savedAge <= 40 &&
      savedGender === "남성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.thirtiesMale = Number(data.thirtiesMale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 30 &&
      savedAge <= 40 &&
      savedGender === "여성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.thirtiesFemale = Number(data.thirtiesFemale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 40 &&
      savedAge <= 50 &&
      savedGender === "남성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fortiesMale = Number(data.fortiesMale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 40 &&
      savedAge <= 50 &&
      savedGender === "여성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fortiesFemale = Number(data.fortiesFemale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 50 &&
      savedAge <= 60 &&
      savedGender === "남성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fiftiesMale = Number(data.fiftiesMale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 50 &&
      savedAge <= 60 &&
      savedGender === "여성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fiftiesFemale = Number(data.fiftiesFemale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 60 &&
      savedAge <= 70 &&
      savedGender === "남성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.sixtiesMale = Number(data.sixtiesMale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 60 &&
      savedAge <= 70 &&
      savedGender === "여성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.sixtiesFemale = Number(data.sixtiesFemale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 70 &&
      savedAge <= 80 &&
      savedGender === "남성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.seventiesMale = Number(data.seventiesMale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 70 &&
      savedAge <= 80 &&
      savedGender === "여성" &&
      currentLoc === "nonhyeon"
    ) {
      fetch("/api/population/nonhyeon")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.seventiesFemale = Number(data.seventiesFemale) - 1;
          fetch("/api/population/nonhyeon", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 10 &&
      savedAge <= 20 &&
      savedGender === "남성" &&
      currentLoc === "apgujeong"
    ) {
      // 10대 남성이고 /population/sinsa페이지에 있을 때
      // console.log("성공!");
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.teensMale = Number(data.teensMale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 10 &&
      savedAge <= 20 &&
      savedGender === "여성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/sinsa")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.teensFemale = Number(data.teensFemale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 20 &&
      savedAge <= 30 &&
      savedGender === "남성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.twentiesMale = Number(data.twentiesMale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 20 &&
      savedAge <= 30 &&
      savedGender === "여성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.twentiesFemale = Number(data.twentiesFemale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 30 &&
      savedAge <= 40 &&
      savedGender === "남성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.thirtiesMale = Number(data.thirtiesMale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 30 &&
      savedAge <= 40 &&
      savedGender === "여성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.thirtiesFemale = Number(data.thirtiesFemale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 40 &&
      savedAge <= 50 &&
      savedGender === "남성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fortiesMale = Number(data.fortiesMale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 40 &&
      savedAge <= 50 &&
      savedGender === "여성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fortiesFemale = Number(data.fortiesFemale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 50 &&
      savedAge <= 60 &&
      savedGender === "남성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fiftiesMale = Number(data.fiftiesMale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 50 &&
      savedAge <= 60 &&
      savedGender === "여성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.fiftiesFemale = Number(data.fiftiesFemale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 60 &&
      savedAge <= 70 &&
      savedGender === "남성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.sixtiesMale = Number(data.sixtiesMale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 60 &&
      savedAge <= 70 &&
      savedGender === "여성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.sixtiesFemale = Number(data.sixtiesFemale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 70 &&
      savedAge <= 80 &&
      savedGender === "남성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.seventiesMale = Number(data.seventiesMale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    } else if (
      savedAge > 70 &&
      savedAge <= 80 &&
      savedGender === "여성" &&
      currentLoc === "apgujeong"
    ) {
      fetch("/api/population/apgujeong")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.seventiesFemale = Number(data.seventiesFemale) - 1;
          fetch("/api/population/apgujeong", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
        })
        .then((response) => response.json())
        .then(updatedData => {
          console.log("Updated Data:", updatedData);
        })
    }
    console.log("내리는게 문젠가?");
    sessionStorage.setItem("resetOnOff", 0);
    reset.removeEventListener("click", resetNumber);
    // 버튼을 눌렀을 때 이벤트를 발생시키고 다음에 눌렀을 때 이벤트를 발생시키지 못하도록
    // 이벤트 삭제
  }
}
