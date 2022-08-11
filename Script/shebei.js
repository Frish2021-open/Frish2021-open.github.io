var userAgent = navigator.userAgent.toLowerCase();
var platform;
if (userAgent == null || userAgent == '') {
    platform = 'WEB';
} else {
    if (userAgent.indexOf("android") != -1) {
        platform = 'ANDROID';
        location.href = "./phone.html";
    } else if (userAgent.indexOf("ios") != -1 || userAgent.indexOf("iphone") != -1) {
        platform = 'IOS';
        location.href = "./phone.html";
    } else if (userAgent.indexOf("ipad") != -1) {
        platform = 'IOS';
        location.href = "./ipad.html";
    } else if (userAgent.indexOf("windows phone") != -1) {
        platform = 'WP';
        location.href = "./phone.html";
    } else {
        platform = 'WEB';
        location.href = "./computer.html";
    }
}