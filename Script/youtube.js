var mc = document.getElementById("eyou");
var abb = document.getElementById("ooo");
var lang = navigator.language || navigator.userLanguage; //常规浏览器语言和IE浏览器
lang = lang.substr(0, 2); //截取lang前2位字符
if (lang == 'zh') {
    mc.setAttribute("action","https://www.bilibili.com");
    abb.style.cssText = "background-image: url(/img/bilibili.png);";
} else if (lang == 'en') {
    mc.setAttribute("action","https://www.youtube.com");
    abb.style.cssText = "background-image: url(/img/youtube-logo-1024x1024.png);";
} else if (lang == 'ja') {
    mc.setAttribute("action","https://www.youtube.com");
    abb.style.cssText = "background-image: url(/img/youtube-logo-1024x1024.png);";
} else if (lang == 'ru') {
    mc.setAttribute("action","https://www.youtube.com");
    abb.style.cssText = "background-image: url(/img/youtube-logo-1024x1024.png);";
} else if (lang == 'ko') {
    mc.setAttribute("action","https://www.youtube.com");
    abb.style.cssText = "background-image: url(/img/youtube-logo-1024x1024.png);";
} else {
    mc.setAttribute("action","https://www.youtube.com");
    abb.style.cssText = "background-image: url(/img/youtube-logo-1024x1024.png);";
}