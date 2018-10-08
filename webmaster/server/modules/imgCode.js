var svgCaptcha = require('svg-captcha');  // npm install svg-captcha

module.exports = (req, res) => {
    var codeConfig = {
        size: 5,// 验证码长度
        ignoreChars: '0o1il', // 验证码字符中排除 0o1il
        noise: 3, // 干扰线条的数量
        height: 44 
    }
    var captcha = svgCaptcha.create(codeConfig);
    req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    
    return arr=[captcha.data,req.session.captcha]
    
}