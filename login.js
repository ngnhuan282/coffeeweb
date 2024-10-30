const formLogin = document.getElementById("form-login");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const loginError = document.getElementById("login-error");
formLogin.addEventListener("submit", function(event){
    event.preventDefault();
    
    const usernameVaule = document.getElementById("username").value;
    const passwordVaule = document.getElementById("password").value;
    if(!usernameVaule){
        usernameError.style.display="flex"; 
    }else
        usernameError.style.display="none";
    if(!passwordVaule){
        passwordError.style.display="flex"; 
    }else
        passwordError.style.display="none";
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];
    const findUser = userLocal.find(
        (user) =>
            user.username === usernameVaule &&
            user.password === passwordVaule
    );

    if(!findUser){
        loginError.style.display = "flex";
    }else 
        window.location.href = "index.html";

    
});