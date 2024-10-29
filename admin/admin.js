$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('fa-eye fa-eye-slash');
        $(this).toggleClass('open');
        if($(this).hasClass('open'))
            $(this).prev().attr('type', 'text');
        else
            $(this).prev().attr('type', 'password');
    });
});
document.querySelector('.form-login').addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (username && password) {
        const usernameValue = username.value;
        const passwordValue = password.value;
    if((usernameValue == 'hanhut' && passwordValue == 'hanhut123')
    ||  (usernameValue == 'svngnhuan' && passwordValue == 'svngnhuan123')
    ||  (usernameValue == 'svnguyen' && passwordValue == 'svnguyen123') 
    ||  (usernameValue == 'svminleo' && passwordValue == 'svminleo123'))
        window.location.href='../admin.html';
    else
        alert('Tên tài khoản hoặc mật khẩu không đúng');
    }else
        console.error('loiii');
});