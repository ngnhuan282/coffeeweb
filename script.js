
const formRegister = document.getElementById("form-register");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");

const numberphoneError = document.getElementById("numberphone-error");

const userLocal = JSON.parse(localStorage.getItem("user")) || [];

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
formRegister.addEventListener("submit",function(e){
    e.preventDefault();

    const usernameVaule = document.getElementById("username").value;
    const passwordVaule = document.getElementById("password").value;
    const numberphoneVaule = document.getElementById("numberphone").value;
    const emailVaule = document.getElementById("email").value;
    if(!usernameVaule){
        usernameError.style.display="flex"; 
    }else
        usernameError.style.display="none";
    if(!passwordVaule){
        passwordError.style.display="flex"; 
    }else
        passwordError.style.display="none";
    if(!emailVaule){
        emailError.style.display="flex"; 
    }else
        emailError.style.display="none";
    if(!numberphoneVaule){
        numberphoneError.style.display="flex"; 
    }else
        numberphoneError.style.display="none";
    
    if(!validateEmail(emailVaule)){
        emailError.style.display="flex";
        emailError.innerHTML="Email không đúng định dạng"

    }else
        emailError.style.display="none";
    if(usernameVaule && passwordVaule && emailError && numberphoneVaule && validateEmail(emailVaule)){
        const user = {
            userId: Math.ceil(Math.random * 1000000),
            username: usernameVaule,
            password: passwordVaule,
            email: emailVaule,
            numphone: 
            numberphoneVaule,
        }
        userLocal.push(user);
        localStorage.setItem("users",JSON.stringify(userLocal));
        setTimeout(function(){
            window.location.href = "./form-login.html";
        }, 1000);
    }   
});


