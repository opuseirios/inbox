/*正则验证手机号码*/
function telReg(phone) {
    var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    return phone.match(mobile);
}

/*正则验证登录密码*/
function pwdReg(pwd) {
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
    return pwd.match(reg);
}

/*手机加密*/
function encryptPhone(num) {
    let head = num.slice(0,3);
    let tag = num.slice(-3);
    return head+'*****'+tag;
}