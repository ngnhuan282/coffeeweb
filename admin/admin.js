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