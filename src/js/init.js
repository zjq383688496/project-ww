

// var s = navigator.userAgent.toLowerCase(), 
// t = navigator.platform.toLowerCase(), 
// u = !(!t.match("mac") && !t.match("win")), 
// v = -1 != s.indexOf("wxdebugger"), 
// w = -1 != s.indexOf("micromessenger"), 
// x = -1 != s.indexOf("android"), 
// y = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"), 
// z = function() {
//     var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);
//     return a ? a[1] : ""
// }();


// console.log("s=",s);
// console.log("t=",t);
// console.log("u=",u);
// console.log("v=",v);
// console.log("w=",w);
// console.log("x=",x);
// console.log("y=",y);
// console.log("z=",z);


// window.JSG = {
    

// };

// var deviceType = "";
// var browserType = "";

// console.log("config ui 设置界面大小");

// $("#total").attr("style", "width: " + $(window).width() + "px; height: " + $(window).height() + "px;");

// $("#body").attr("style", "width: " + $(window).width() + "px; height: " + $(window).height() + "px");
// navigator.userAgent.indexOf("MicroMessenger") > -1 || navigator.userAgent.indexOf("QQ") > -1 ? ($("#body_wrap").attr("style", "width: " + $(window).width() + "px; height: " + $(window).height() + "px; margin: 0 auto; position: relative;"), $("#gameFrameDiv").attr("style", "width: " + $(window).width() + "px; height: " + $(window).height() + "px;"), $("#gameFrame").attr("style", "width: " + $(window).width() + "px; height: " + $(window).height() + "px;")) : ($("#body_wrap").attr("style", "width: " + 640 * $(window).height() / 1039 + "px; height: " + $(window).height() + "px; margin: 0 auto; position: relative;"), $("#gameFrameDiv").attr("style", "width: " + 640 * $(window).height() / 1039 + "px; height: " + $(window).height() + "px;"), $("#gameFrame").attr("style", "width: " + 640 * $(window).height() / 1039 + "px; height: " + $(window).height() + "px;"))