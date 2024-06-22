const goLocationInfo = document.querySelector("#goLocationInfo");
const reset = document.querySelector("#reset");

const savedAge = localStorage.getItem("age");
const savedGender = localStorage.getItem("gender");
const currentLoc = localStorage.getItem("currentLoc");

goLocationInfo.addEventListener("click", function () {
  window.location.href = "/locationinfo";
});

reset.addEventListener( "click" , function () {
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
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
          });
      }
});
