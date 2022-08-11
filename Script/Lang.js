var input = document.getElementById('mc');
var uu;
var web = document.getElementById("mc");
var mc = document.getElementById("eyou");
var lang = navigator.language || navigator.userLanguage; //常规浏览器语言和IE浏览器
lang = lang.substr(0, 2); //截取lang前2位字符
if (lang == 'zh') {
    web.setAttribute("placeholder", "输入你想搜索的内容");
    document.title = "ArismaCanGG起始页";
    uu = 'https://cn.bing.com/search?q=';
    document.getElementById("about").innerHTML = "关于";
    document.getElementById("aboutzz").innerHTML = "帮助";
    document.getElementById("ss1").innerHTML = "选择搜索引擎";
    var input = document.getElementById('mc');
    var but = document.getElementById('bu');
    but.onclick = function () {
        mc();
    }

    function mc() {
        if (input.value == "") {
            // 防止跳转至必应首页
            input.setAttribute("placeholder", "你没有输入你要输入的内容!!!");
        } else {
            // 拼接字符串
            var url = uu + input.value;
            // 跳转
            location.href = url;
        }
    }
    var uu = "https://cn.bing.com/search?q=";
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            mc();
        }
    });

    function bing() {
        alert("搜索引擎已设置成Bing");
        return "https://cn.bing.com/search?q=";
    }

    function google() {
        alert("搜索引擎已设置成google");
        return "https://www.google.com/search?q=";
    }

    function baidu() {
        alert("搜索引擎已设置成baidu");
        return "https://www.baidu.com/s?wd=";
    }
    function fsou() {
        alert("搜索引擎已设置成fsou");
        return "https://fsoufsou.com/search?q=";
    }
} else if (lang == 'en') {
    web.setAttribute("placeholder", "Enter what you want to search");
    document.title = "ArismaCanGG Start Page";
    uu = 'https://www.google.com/search?q=';
    document.getElementById("about").innerHTML = "about";
    document.getElementById("aboutzz").innerHTML = "help";
    document.getElementById("ss1").innerHTML = "Choose a search engine";
    var input = document.getElementById('mc');
    var but = document.getElementById('bu');
    but.onclick = function () {
        mc();
    }

    function mc() {
        if (input.value == "") {
            // 防止跳转至必应首页
            input.setAttribute("placeholder", "You didn't type what you were trying to type!!!");
        } else {
            // 拼接字符串
            var url = uu + input.value;
            // 跳转
            location.href = url;
        }
    }
    var uu = "https://cn.bing.com/search?q=";
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            mc();
        }
    });

    function bing() {
        alert("The search engine has been set to Bing");
        return "https://cn.bing.com/search?q=";
    }

    function google() {
        alert("The search engine has been set to google");
        return "https://www.google.com/search?q=";
    }

    function baidu() {
        alert("The search engine has been set to baidu");
        return "https://www.baidu.com/s?wd=";
    }
    function fsou() {
        alert("The search engine has been set to fsou");
        return "https://fsoufsou.com/search?q=";
    }
} else if (lang == 'ja') {
    web.setAttribute("placeholder", "検索したいものを入力してください");
    document.title = "ArismaCanGGスタートページ";
    uu = 'https://www.google.com/search?q=';
    document.getElementById("about").innerHTML = "約";
    document.getElementById("aboutzz").innerHTML = "ヘルプ";
    document.getElementById("ss1").innerHTML = "検索エンジンの選択";
    var input = document.getElementById('mc');
    var but = document.getElementById('bu');
    but.onclick = function () {
        mc();
    }

    function mc() {
        if (input.value == "") {
            // 防止跳转至必应首页
            input.setAttribute("placeholder", "入力しようとしていたものを入力しませんでした!!!");
        } else {
            // 拼接字符串
            var url = uu + input.value;
            // 跳转
            location.href = url;
        }
    }
    var uu = "https://cn.bing.com/search?q=";
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            mc();
        }
    });

    function bing() {
        alert("検索エンジンは Bing に設定されています");
        return "https://cn.bing.com/search?q=";
    }

    function google() {
        alert("検索エンジンは google に設定されています");
        return "https://www.google.com/search?q=";
    }

    function baidu() {
        alert("検索エンジンは baidu に設定されています");
        return "https://www.baidu.com/s?wd=";
    }
    function fsou() {
        alert("検索エンジンは fsou に設定されています");
        return "https://fsoufsou.com/search?q=";
    }
} else if (lang == 'ru') {
    web.setAttribute("placeholder", "Введите то, что вы хотите найти");
    document.title = "Стартовая страница ArismaCanGG";
    uu = 'https://www.google.com/search?q=';
    document.getElementById("about").innerHTML = "о";
    document.getElementById("aboutzz").innerHTML = "помощь";
    document.getElementById("ss1").innerHTML = "Выберите поисковую систему";
    var input = document.getElementById('mc');
    var but = document.getElementById('bu');
    but.onclick = function () {
        mc();
    }

    function mc() {
        if (input.value == "") {
            // 防止跳转至必应首页
            input.setAttribute("placeholder", "Вы не напечатали то, что пытались напечатать!!!");
        } else {
            // 拼接字符串
            var url = uu + input.value;
            // 跳转
            location.href = url;
        }
    }
    var uu = "https://cn.bing.com/search?q=";
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            mc();
        }
    });

    function bing() {
        alert("В качестве поисковой системы выбран Bing.");
        return "https://cn.bing.com/search?q=";
    }

    function google() {
        alert("В качестве поисковой системы выбран google.");
        return "https://www.google.com/search?q=";
    }

    function baidu() {
        alert("В качестве поисковой системы выбран baidu.");
        return "https://www.baidu.com/s?wd=";
    }
    function fsou() {
        alert("В качестве поисковой системы выбран fsou.");
        return "https://fsoufsou.com/search?q=";
    }
} else if (lang == 'ko') {
    web.setAttribute("placeholder", "검색할 내용을 입력하세요");
    document.title = "ArismaCanGG 시작 페이지";
    uu = 'https://www.google.com/search?q=';
    document.getElementById("about").innerHTML = "~에 대한";
    document.getElementById("aboutzz").innerHTML = "돕다";
    document.getElementById("ss1").innerHTML = "검색 엔진 선택";
    var input = document.getElementById('mc');
    var but = document.getElementById('bu');
    but.onclick = function () {
        mc();
    }

    function mc() {
        if (input.value == "") {
            // 防止跳转至必应首页
            input.setAttribute("placeholder", "입력하려는 내용을 입력하지 않았습니다!!!");
        } else {
            // 拼接字符串
            var url = uu + input.value;
            // 跳转
            location.href = url;
        }
    }
    var uu = "https://cn.bing.com/search?q=";
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            mc();
        }
    });

    function bing() {
        alert("검색 엔진이 Bing으로 설정되었습니다.");
        return "https://cn.bing.com/search?q=";
    }

    function google() {
        alert("검색 엔진이 google으로 설정되었습니다.");
        return "https://www.google.com/search?q=";
    }

    function baidu() {
        alert("검색 엔진이 baidu으로 설정되었습니다.");
        return "https://www.baidu.com/s?wd=";
    }
    function fsou() {
        alert("검색 엔진이 fsou으로 설정되었습니다.");
        return "https://fsoufsou.com/search?q=";
    }

} else {
    web.setAttribute("placeholder", "Enter what you want to search");
    document.title = "ArismaCanGG Start Page";
    uu = 'https://www.google.com/search?q=';
    document.getElementById("about").innerHTML = "About";
    document.getElementById("aboutzz").innerHTML = "help";
    document.getElementById("ss1").innerHTML = "Choose a search engine";
    var input = document.getElementById('mc');
    var but = document.getElementById('bu');
    but.onclick = function () {
        mc();
    }

    function mc() {
        if (input.value == "") {
            // 防止跳转至必应首页
            input.setAttribute("placeholder", "You didn't type what you were trying to type!!!");
        } else {
            // 拼接字符串
            var url = uu + input.value;
            // 跳转
            location.href = url;
        }
    }
    var uu = "https://cn.bing.com/search?q=";
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            mc();
        }
    });

    function bing() {
        alert("The search engine has been set to Bing");
        return "https://cn.bing.com/search?q=";
    }

    function google() {
        alert("The search engine has been set to google");
        return "https://www.google.com/search?q=";
    }

    function baidu() {
        alert("The search engine has been set to baidu");
        return "https://www.baidu.com/s?wd=";
    }
    function fsou() {
        alert("The search engine has been set to fsou");
        return "https://fsoufsou.com/search?q=";
    }
}

window.alert = function (str) {
    var shield = document.createElement("DIV");
    shield.id = "shield";
    shield.style.position = "absolute";
    shield.style.left = "50%";
    shield.style.top = "50%";
    shield.style.width = "280px";
    shield.style.height = "150px";
    shield.style.marginLeft = "-140px";
    shield.style.marginTop = "-110px";
    shield.style.zIndex = "25";
    var alertFram = document.createElement("DIV");
    alertFram.id = "alertFram";
    alertFram.style.position = "absolute";
    alertFram.style.width = "280px";
    alertFram.style.height = "150px";
    alertFram.style.left = "50%";
    alertFram.style.top = "50%";
    alertFram.style.marginLeft = "-140px";
    alertFram.style.marginTop = "-110px";
    alertFram.style.textAlign = "center";
    alertFram.style.lineHeight = "150px";
    alertFram.style.zIndex = "300";
    strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
    strHtml += " <li style=\"background:#626262;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:25px;line-height:25px;border:1px solid #F9CADE;color:white\">[arismacangg]</li>\n";
    strHtml += " <li style=\"background:#787878;text-align:center;font-size:12px;height:95px;line-height:95px;border-left:1px solid #F9CADE;border-right:1px solid #F9CADE;color:#DCC722\">" + str + "</li>\n";
    strHtml += " <li style=\"background:#626262;text-align:center;font-weight:bold;height:30px;line-height:25px; border:1px solid #F9CADE;\"><input type=\"button\" value=\"确 定\" onclick=\"doOk()\" style=\"width:80px;height:20px;background:#626262;color:white;border:1px solid white;font-size:14px;line-height:20px;outline:none;margin-top: 4px\"/></li>\n";
    strHtml += "</ul>\n";
    alertFram.innerHTML = strHtml;
    document.body.appendChild(alertFram);
    document.body.appendChild(shield);
    this.doOk = function () {
        alertFram.style.display = "none";
        shield.style.display = "none";
    }
    alertFram.focus();
    document.body.onselectstart = function () { return false; };
}

var t = null;
t = setTimeout(time, 1000);//开始执行
function time() {
    clearTimeout(t);//清除定时器
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "";
    t = setTimeout(time, 1000); //设定定时器，循环执行           
}

var bodyBgs = [];    //创建一个数组变量来存储背景图片的路径
bodyBgs[0] = "img/qingyuan.jpg";
bodyBgs[1] = "img/1.jpg";
bodyBgs[2] = "img/2.jpg";

var randomBgIndex = Math.round(Math.random() * 2);

document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ');Background-size:cover;}</style>');

document.getElementById('zhezhao').style.display = "none";
function dianwo() {
    document.getElementById('zhezhao').style.display = "";
}
function hidder() {
    document.getElementById('zhezhao').style.display = "none";
}

document.oncontextmenu = function (e) { //整个页面的js事件
    abc();
    return false; //阻止右键弹窗
};

document.getElementById('tcc').style.display = "none";
document.getElementById('mmm').style.display = "none";
function abc() {
    document.getElementById('tcc').style.display = "";
    document.getElementById('mmm').style.display = "";
}
function abcd() {
    document.getElementById('tcc').style.display = "none";
    document.getElementById('mmm').style.display = "none";
}

document.onclick = function (e) { //整个页面的js事件
    abcd();
};
