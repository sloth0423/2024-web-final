const btnFindPassword = document.querySelector("#findpasswordbtn");
const inputEmail = document.querySelector("#inputEmail");

btnFindPassword.addEventListener("click",function(){
    fetch("http://localhost:3000/findpassword",{
        method: "post",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: inputEmail.value,
        }),
    })
    .then((res)=> res.json())
    .then((json)=>{
        const result = json.result;
        if(result === "fail"){
            window.alert("해당 이메일로 가입된 계정이 없습니다.")
        } else {
            window.alert(`해당 이메일로 가입된 계정의 비밀번호는 ${result}입니다.`);
        }
    })
    window.location.href = "/login";  // /로 바꾸기
})