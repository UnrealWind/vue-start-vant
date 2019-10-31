
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisalert = $(input).parent();

        $(thisalert).addClass('layer.msg-validate');
    }

    function hideValidate(input) {
        var thisalert= $(input).parent();

        $(thisalert).removeClass('layer.msg-validate');
    }


    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }

    });


})(jQuery);

$(function(){
    var yaoqingma = getQueryString('code');
    if(yaoqingma != null && yaoqingma !=''){
        $("#yaoqingma").val(yaoqingma);
    }
})
// 登录
function authcheck() {
    console.log(document.referrer);
    var username = $(" input[ name='username' ] ").val();
    var password =$(" input[ name='password' ] ").val();
    var capcode =$(" input[ name='capcode' ] ").val();
    if (username==''){
        layer.msg("请输入用户名");
        return false;
    }
    if (password==''){
        layer.msg("请输入密码");
        return false;
    }
    if (capcode==''){
        layer.msg("请输入验证码");
        return false;
    }
    var formData = {
        'authcode'      : 'authcode',
        'username'      : username,
        'password'      : password,
        'code'      : capcode
    };
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    $.ajax({
        type        : 'POST',
        // url         : "index.php/Index/Login/loginHandle", // the url where we want to POST
        url         : "/Index/Login/loginHandle", // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true,
        success		: function(res){
            var ret = $.parseJSON(JSON.stringify(res));
            if(ret.message=='ok'){
                layer.msg(ret.tip);
                $("body").oneTime("1s",function(){
                    tiaozhuan();
                });
            }else if(ret.message=='codebad'){
                $("#codeImg").click();
                layer.msg("验证码输入错误");
            }else if(ret.message=='banned'){
                layer.msg(ret.tip);
            }else{
                layer.msg("账号或密码错误，请重试");
            }
        }
    });
}

// 注册
function registercheck() {
    var username = $(" input[ name='username' ] ").val();
    var password =$(" input[ name='password' ] ").val();
    var passwordAgain =$(" input[ name='password-again' ] ").val();
    var tuijianCode =$(" input[ name='tuijian-code' ] ").val();
    var phone =$(" input[ name='phone' ] ").val();
    var qqnum =$(" input[ name='qqnum' ] ").val();
    if (username==''){
        layer.msg("请输入用户名");
        $(" input[ name='username' ] ").focus();
        return false;
    }
    if(!isValidUserName(username)){
        layer.msg("用户名为6-16位的大小写字母和数字");
        $(" input[ name='username' ] ").focus();
        return false;
    }
    if (!isValidPassword(password)){
        layer.msg("密码为6-16位的大小字母和数字组合");
        $(" input[ name='password' ] ").focus();
        return false;
    }
    if (password==''){
        layer.msg("请输入密码");
        $(" input[ name='password' ] ").focus();
        return false;
    }
    if (password!=passwordAgain){
        layer.msg("两次输入密码不一致");
        $(" input[ name='password-again' ] ").focus();
        return false;
    }
    if (!tuijianCode){
        layer.msg("请输入推荐码");
        $(" input[ name='tuijian-code' ] ").focus();
        return false;
    }
    if (phone==''){
        layer.msg("请输入手机号");
        $(" input[ name='phone' ] ").focus();
        return false;
    }
    if (!isValidphone(phone)){
        layer.msg("请检查手机号码是否正确");
        $(" input[ name='phone' ] ").focus();
        return false;
    }
    if (qqnum==''){
        layer.msg("请输入QQ号");
        $(" input[ name='qqnum' ] ").focus();
        return false;
    }
    var formData = {
        'authcode'      : 'authcode',
        'username'      : username,
        'password'      : password,
        'repassword'    : passwordAgain,
        'reccode'      : tuijianCode,
        'phonenum'      : phone,
        'qqnum'      : qqnum,
    };
    $.ajax({
        type        : 'POST',
        // url         : "index.php/Index/Login/loginHandle", // the url where we want to POST
        url         : "/Index/Register/registerHandle", // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true,
        success		: function(res){
            if(res.code == 1){
                layer.msg(res.msg);
                $("body").oneTime("1s",function(){
                   window.location.href="/Index/Login/index";
                });
            }else{
                layer.msg(res.msg);
            }
        }
    });
}

function tiaozhuan(){
    var prevLink = document.referrer;
    if(prevLink == ''){
        window.location.href = encodeURI(encodeURI("/Index/Yxdttz/Index?type=北京PK10"));
    }else{
        if(prevLink.indexOf('Register') != -1){
            window.location.href = encodeURI(encodeURI("/Index/Yxdttz/Index?type=北京PK10"));
        }else{
            // window.location.href = prevLink;
            window.location.href = encodeURI(encodeURI("/Index/Yxdttz/Index?type=北京PK10"));
        }
    }
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}
function isValidphone(phonenum) {
    var pattern = new RegExp(/^[1]([3-9])[0-9]{9}$/);
    return pattern.test(phonenum);
}
function isValidUserName(username){
    var pattern = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/);
    return pattern.test(username);
}
function isValidPassword(password){
    var pattern = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/);
    return pattern.test(password);
}
function registnew() {
    window.location.href="/Index/register/index";
}
function gotologin() {
    window.location.href="/Index/login/index";
}
function forgetpwd() {
    window.location.href="/Index/wjmm/index";
}
function Wjmmxgmm() {
    var phonenum =$(" input[ name='phonenum' ] ").val();
    var capcode =$(" input[ name='capcode' ] ").val();
    if (phonenum==''){
        layer.msg("请输入手机号");
        return false;
    }
    if (!isValidphone(phonenum)){
        layer.msg("请检查手机号码是否正确");
        return false;
    }
    if (capcode==''){
        layer.msg("请获取输入验证码");
        return false;
    }

    $.ajax({
        type        : 'POST',
        url         : "/Index/Wjmm/validate", // the url where we want to POST
        data        : {phonenum:phonenum,code:capcode}, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true,
        success		: function(res){

            if(res.code == 1){
                window.location.href = '/Index/Wjmmxgmm/index?type=wjmm&phonenum='+phonenum;
            }else{
                layer.msg(res.msg);
            }
        }
    });
}
function getcode() {
    var phonenum = $(" input[ name='phonenum' ] ").val();
    if (!isValidphone(phonenum)){
        layer.msg("请检查手机号码是否正确");
        return false;
    }
    var formData = {
        'phonenum'  : phonenum
    };
    $.ajax({
        type        : 'POST',
        url         : "/Index/Wjmm/getphonecode", // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true,
        success		: function(res){
            var ret = $.parseJSON(JSON.stringify(res));
            if(ret.code == 1){
                layer.msg(ret.msg);
            }else{
                layer.msg(ret.msg);
            }
        }
    });
    return false;
}

function xgmm() {
    var newpass = $(" input[ name='newpass' ] ").val()
    var renewpass =$(" input[ name='renewpass' ] ").val()
    if (newpass==''){
        layer.msg("请输入新密码");
        return false;
    }
    if (renewpass==''){
        layer.msg("请再次输入新密码");
        return false;
    }
    if (newpass!=renewpass){
        layer.msg("两次输入的新密码不一致，请重新输入！");
        // $("#getcodeback").html('两次输入的新密码不一致，请重新输入！');
        return false;
    }
    var formData = {
        'authcode'      : 'authcode',
        'renewpass'      : renewpass,
        'newpass'      : newpass,
        'type'          :getQueryString("type"),
        'phonenum'      :getQueryString("phonenum")
    };
    $.ajax({
        type        : 'POST',
        url         : "/Index/Wjmmxgmm/xgmm",
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true,
        success		: function(res){
            layer.msg(res.msg);
            if(res.code == 1){
                $("body").oneTime("1s",function(){
                    window.location.href='/Index/Login/index';
                });
            }else if(res.code == -1){
                $("body").oneTime("1s",function(){
                    window.location.href='/Index/Login/index';
                });
            }
        }
    });


}
function regcheck() {
    var username = $(" input[ name='username' ] ").val();
    var password =$(" input[ name='password' ] ").val();
    var repassword =$(" input[ name='repassword' ] ").val();
    var reccode =$(" input[ name='reccode' ] ").val();
    var phonenum =$(" input[ name='phonenum' ] ").val();
    var qqnum =$(" input[ name='qqnum' ] ").val();
    if (username==''){
        layer.msg("请输入用户名");
        return false;
    }
    if (password==''){
        layer.msg("请输入密码");
        return false;
    }
    if (repassword==''){
        layer.msg("请再次输入密码");
        return false;
    }
    if (password!==repassword){
        layer.msg("两次输入的密码不一致");
        return false;
    }
    /*if (reccode==''){
        layer.msg("请输入推荐码");
        return false;
    }*/
    if (phonenum==''){
        layer.msg("请输入手机号");
        return false;
    }
    if (!isValidphone(phonenum)){
        layer.msg("请检查手机号码是否正确");
        return false;
    }
    if (qqnum==''){
        layer.msg("请输入QQ号");
        return false;
    }
    var formData = {
        'authcode'      : 'authcode',
        'username'      : username,
        'password'      : password,
        'repassword'      : repassword,
        'reccode'      : reccode,
        'phonenum'      : phonenum,
        'qqnum'      : qqnum
    };
    $.ajax({
        type        : 'POST',
        url         : "/Index/register/registerHandle", // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true,
        success		: function(res){
            if(res.code == 1){
                layer.msg(res.msg);
                $("body").oneTime("1.5s",function(){
                    window.location.href='/Index/Login/index';
                })
            }else{
                layer.msg(res.msg);
            }
        }
    });

    return false;
}




