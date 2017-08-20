(function () {

    window.JSG = {
        init: function (e) {
            this._config = {
                share: {
                    timeline: {},
                    friend: {}
                },
                hoverPosition: {
                    top: window.JSG_GAME_CONF.HoverPosition && window.JSG_GAME_CONF.HoverPosition.top || "140px",
                    onLeft: window.JSG_GAME_CONF.HoverPosition && window.JSG_GAME_CONF.HoverPosition.onLeft || !1
                }
            }, 
            this._chan = Channel.build({
                window: document.getElementById("gameFrame").contentWindow,
                origin: "*",
                scope: "jsgScope"
            }), 
//            this._chan.bind("config", this.config.bind(this)), 
            this._chan.bind("pay", this.pay.bind(this)), 
//            this._chan.bind("refresh", this.refresh.bind(this)), 
            this._chan.bind("showQRCode", this.showQRCode.bind(this)), 
//            this._chan.bind("auth", this.auth.bind(this)), 
//            this._chan.bind("showImg", this.showImg.bind(this)), 
//            this._chan.bind("getShareUrl", this.getShareUrl.bind(this)), 
//            this._chan.bind("isShowTimeline", this.isShowTimeline.bind(this)), 
//            this._chan.bind("isSafe", this.isSafe.bind(this)), 
            //this.initWebViewJavascriptBridge(), 
//            this._configWX(), 
            $(document).ready(function () {
                window.JSG._configUI(), 
                window.JSG.initMessageListener(),
                window.IsShowAppDownload = !1
            });
            var t = this;
            //$("#exitModal").html(o);
            t._registerEventListeners()
            
//          
//            $.get(JSG_CONF.ApiHost + "/gc/sdk/info-server?openId=" + JSG_CONF.UserId + "&gameId=" + JSG_GAME_CONF.GameId, function (e) {
//                JSG_CONF.InfoServerData = e, console.log("info server data:", e);
//                var n = function (e) {
//                    return e.unGetGift ? void $("#hover_coupon").show() : e.hasNewInfo ? void $("#hover_info").show() : void(e.hasNewServer && $("#hover_server").show())
//                };
//                n(e), t.loadSafariSaveMainModal(), t.loadGsVipAlert(e)
//            }), window.JSG_CONF.HasVipActivity && $.get(JSG_CONF.ApiHost + "/gc/sdk/vip-active?&gameId=" + JSG_GAME_CONF.GameId, function (e) {
//                JSG_CONF.VipActiveData = e, console.log("VipActive data:", e)
//            }), $.get(window.JSG_CONF.GameCenterHost + "/templates/sidebar.html?v=1.5.6", function (e) {
//                window.JSG_CONF.SidebarTemplate = e
//            }), $.get(window.JSG_CONF.GameCenterHost + "/templates/barcodeModal.html?v=1.3.4", function (e) {
//                var t = {
//                    GameCenterHost: JSG_CONF.GameCenterHost,
//                    SubscribeQRCode: JSG_GAME_CONF.SubscribeQRCode,
//                    ChannelName: JSG_CONF.ChannelName
//                },
//                        n = Mustache.render(e, t);
//                $("#barcodeModal").html(n)
//            }), $.get(window.JSG_CONF.GameCenterHost + "/templates/alertModal.html?v=1.5.5", function (e) {
//                window.JSG_CONF.AlertTemplate = e
//            }), $.get(window.JSG_CONF.GameCenterHost + "/templates/ios_pay_alert.html?v=1.4.1", function (e) {
//                var t = Mustache.render(e);
//                $("#iosPayAlertModal").html(t)
//            }), $.get(window.JSG_CONF.GameCenterHost + "/templates/showImg.html?v=1.5.0", function (e) {
//                var t = {
//                    SubscribeQRCode: JSG_GAME_CONF.SubscribeQRCode,
//                    ChannelName: JSG_CONF.ChannelName
//                },
//                        n = Mustache.render(e, t);
//                $("#showImg").html(n)
//            }), 
//            $.get(window.JSG_CONF.GameCenterHost + "/templates/exitModal.html?v=1.4.1", function (e) {
//                var n = {
//                    GameRecommendGameUrl: JSG_CONF.GameRecommend.GameUrl,
//                    GameRecommendBanner: JSG_CONF.GameRecommend.Banner,
//                    GameCenterHost: JSG_CONF.GameCenterHost,
//                    IsSubscribe: JSG_CONF.IsSubscribe,
//                    SubscribeQRCode: JSG_GAME_CONF.SubscribeQRCode
//                },
//                        o = Mustache.render(e, n);
//                $("#exitModal").html(o), t._registerEventListeners()
//            });
//            var n = "";
//            n = navigator.userAgent.indexOf("MicroMessenger") > -1 ? window.JSG_CONF.GameCenterHost + "/templates/payQrcodeModal_wechat.html?v=1.3.8" : window.JSG_CONF.GameCenterHost + "/templates/payQrcodeModal_pc.html?v=1.3.8", $.get(n, function (e) {
//                var n = navigator.userAgent.indexOf("Windows NT") > -1,
//                        o = {
//                            GameCenterHost: JSG_CONF.GameCenterHost,
//                            WindowWx: n
//                        },
//                        i = Mustache.render(e, o);
//                $("#payQrcodeModal").html(i), t._registerCancelPayEvent()
//            }), $.get(window.JSG_CONF.GameCenterHost + "/templates/h5payModal.html?v=1.4.1", function (e) {
//                var n = {
//                    GameCenterHost: JSG_CONF.GameCenterHost
//                },
//                        o = Mustache.render(e, n);
//                $("#h5PayModal").html(o), t._registerCancelH5PayEvent()
//            });
            setTimeout(function () {
                $("#preloading").hide();
            }, 1000);
        },
        initMessageListener: function() {
            console.info("init listener");
            window.addEventListener("message", function(msg) {
                console.log("window.event", msg.data);
                    var c, d, b = msg.data;
                    
                   switch (b.msg) {
//                    case MESSAGES.INIT:
//                            init(b.data);
//                            break;
                    case "show_recharge":
                            showRecharge(b.data);
                            break;
//                    case MESSAGES.RETURNORDERNO:
//                            c = b.data.orderData, d = b.data.amount;
//                            try {
//                                    pay(d, c)
//                            } catch (a) {
//                                    alert(a)
//                            }
//                            break;
//                    case MESSAGES.SET_SHARE:
//                            setShareInfo(b.data);
//                            break;
//                    case MESSAGES.SHOWQRCODE:
//                            showQrCode();
//                            break;
//                    case MESSAGES.REPORTDATA:
//                            reportData(b.data);
//                            break;
//                    case MESSAGES.SENDTODESKTOP:
//                            sendToDesktop();
//                            break;
//                    case MESSAGES.QQBROSER_LOGOUT:
//                            qqBorwserLogout(b.data);
//                            break;
//                    case MESSAGES.QQBROSER_TOPIC:
//                            openTopicCircle();
//                            break;
//                    case MESSAGES.SPECIALSHARE:
//                            setSpecialShare(b.data);
//                            break;
//                    case MESSAGES.FOCUS_GETSTATE:
//                            checkFocus(b.data);
//                            break;
//                    case MESSAGES.RECHARGE_PAY:
//                            pay(b.data.amount, b.data.orderData);
//                            break;
//                    case "qblogout":
//                            qqBorwserLogout();
//                            break;
//                    case MESSAGES.CHECKSHARE:
//                            isOpenShare();
//                            break;
//                    case MESSAGES.SPECIAL_GETLOGINTYPES:
//                            window.showLogout && postMessage(MESSAGES.SPECIAL_GETLOGINTYPES, !0);
//                            break;
//                    case MESSAGES.ON_LOGINERROR:
//                            onLoginError(b.data);
//                            break;
//                    case MESSAGES.SHARE_SHOW:
//                            showShare();
//                            break;
//                    case MESSAGES.SHARE_STATUS:
//                            shareStatus(b.data);
//                            break;
//                    case MESSAGES.RETURN_SCREENSHOT:
//                            screenShot = b.data;
//                            break;
//                    case MESSAGES.MQQ_SENDMSG:
//                            sendMqqMsg(b.data);
//                            break;
//                    case MESSAGES.GET_TOPURL:
//                            getTopUrl();
//                            break;
//                    case "FKInit":
//                            FKInit(b.data)
                    }
//                    "shareok" == a.data && (console.log("群黑分享成功"), postMessage(MESSAGES.SHARE_CALLBACK, !0))
            });
        },
        _getParameByName: function (e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                    n = t.exec(location.search);
            return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        },
        _loadBackupWXSDK: function () {
            var e = 1 == this._getParameByName("wxDebugMode");
            e && alert("微信sdk文件无法加载，改调备用sdk文件");
            var t = this,
                    n = document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
            o.setAttribute("type", "text/javascript"), o.setAttribute("src", "https://res.wx.qq.com/open/js/jweixin-1.2.0.js"), n.appendChild(o), o.onload = function () {
                e && alert("备用sdk文件加载成功"), t._configWX(2);
            }, o.onerror = function () {
                //t.showAlert("网络不稳定，调起微信接口失败！请刷新重试。")
            }
        },
        _configWX: function (type) {
            var e = 1 == this._getParameByName("wxDebugMode");
            if ("undefined" == typeof wx){
                if(type == 2)
                    return;
                return this._loadBackupWXSDK();
            }
            var t = this;
            console.log("是否开启 wxDebugMode:", e);
//            wx.config({
//                debug: e,
//                appId: JSG_WX_CONF.AppId,
//                timestamp: JSG_WX_CONF.TimeStamp,
//                nonceStr: JSG_WX_CONF.NonceStr,
//                signature: JSG_WX_CONF.Signature,
//                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "chooseWXPay", "hideMenuItems", "hideOptionMenu", "showOptionMenu", "closeWindow"]
//            }), wx.ready(function () {
//                wx.hideOptionMenu();
//                var e = ["menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone"];
//                window.JSG_WX_CONF.ShareHost == -1 && e.push("menuItem:share:timeline");
////                wx.hideMenuItems({
////                    menuList: e
////                });
//                console.log("[JSG] 微信JS-SDK初始化成功");
////                t._configShare();
//            })
        },
        _configUI: function () {
            console.log("config ui 设置界面大小");
            var e = $(window).height(), t = $(window).width();
            if(navigator.userAgent.indexOf("MicroMessenger") > -1 || navigator.userAgent.indexOf("QQ") > -1){
                $("#body_wrap").attr("style", "width: " + t + "px; height: " + e + "px;");
                $("#gameFrameDiv").attr("style", "width: " + t + "px; height: " + e + "px;");
                $("#gameFrame").attr("style", "width: " + t + "px; height: " + e + "px;");
            }
            else{
                if(e / t > 1.7){
                    $("#body_wrap").attr("style", "width: " + 640 * e / 1136 + "px; height: " + e + "px;");
                    $("#gameFrameDiv").attr("style", "width: " + 640 * e / 1136 + "px; height: " + e + "px;");
                    $("#gameFrame").attr("style", "width: " + 640 * e / 1136 + "px; height: " + e + "px;");
                }
                else{
                    $("#body_wrap").attr("style", "width: " + 640 * e / 1039 + "px; height: " + e + "px;");
                    $("#gameFrameDiv").attr("style", "width: " + 640 * e / 1039 + "px; height: " + e + "px;");
                    $("#gameFrame").attr("style", "width: " + 640 * e / 1039 + "px; height: " + e + "px;");
                }
            }
                        
                        
//            //$("#total").attr("style", "width: " + width + "px; height: " + height + "px;");
//            //$("#body").attr("style", "width: " + width + "px; height: " + height + "px;");
//            if(navigator.userAgent.indexOf("MicroMessenger") > -1 || navigator.userAgent.indexOf("QQ") > -1){
//                //alert('test1' + "|" + width + "|" + height);
//                //$("#body_wrap").attr("style", "width: " + width + "px; height: " + height + "px; margin: 0px auto; position: relative;");
//                $("#gameFrameDiv").attr("style", "width: " + width + "px; height: " + height + "px;");
//                $("#gameFrame").attr("style", "width: " + width + "px; height: " + height + "px;");
//            } 
//            else{
//                if(JSG_CONF.IsGuide && height / width > 1.7){
//                    //alert('test2' + "|" + width + "|" + height);
//                    //$("#body_wrap").attr("style", "width: " + 640 * height / 1136 + "px; height: " + height + "px; margin: 0 auto; position: relative;");
//                    $("#gameFrameDiv").attr("style", "width: " + 640 * height / 1136 + "px; height: " + height + "px;");
//                    $("#gameFrame").attr("style", "width: " + 640 * height / 1136 + "px; height: " + height + "px;");
//                }
//                else{
//                    //alert('test3' + "|" + width + "|" + height);
//                    //$("#body_wrap").attr("style", "width: " + 640 * height / 1039 + "px; height: " + height + "px; margin: 0 auto; position: relative;");
//                    $("#gameFrameDiv").attr("style", "width: " + 640 * height / 1039 + "px; height: " + height + "px;");
//                    $("#gameFrame").attr("style", "width: " + 640 * height / 1039 + "px; height: " + height + "px;");
//                }
//            }
//            
//            
//            //frameborder="no" border="0px" marginwidth="0px" marginheight="0px" scrolling="auto" style="width: 100%; height: 100%; background-color: red; display:none;"
//            var iframe1 = $("#ping_iframe");
//            console.log("iframe1",iframe1);
//            $(iframe1).attr("frameborder", "no");
//            $(iframe1).attr("border", "0px");
//            $(iframe1).attr("marginwidth", "0px");
//            $(iframe1).attr("marginheight", "0px");
//            $(iframe1).attr("scrolling", "auto");
//            var iframe2 = $("#__WeixinJSBridgeIframe_SetResult");
//            console.log("iframe2",iframe2);
//            $(iframe2).attr("frameborder", "no");
//            $(iframe2).attr("border", "0px");
//            $(iframe2).attr("marginwidth", "0px");
//            $(iframe2).attr("marginheight", "0px");
//            $(iframe2).attr("scrolling", "auto");
//            var iframe3 = $("#__WeixinJSBridgeIframe");
//            console.log("iframe3",iframe3);
//            $(iframe3).attr("frameborder", "no");
//            $(iframe3).attr("border", "0px");
//            $(iframe3).attr("marginwidth", "0px");
//            $(iframe3).attr("marginheight", "0px");
//            $(iframe3).attr("scrolling", "auto");
        },
        config: function (e, t) {
            console.log("config gameId:", t.gameId), t.share && (this._config.share.timeline = t.share.timeline ? t.share.timeline : this._config.share.timeline, this._config.share.friend = t.share.friend ? t.share.friend : this._config.share.friend, this._config.share.shareCustomParam = t.share.shareCustomParam ? t.share.shareCustomParam : this._config.share.shareCustomParam), t.share && this._configShare(), t.hoverPosition && (this._config.hoverPosition.top = t.hoverPosition.top || this._config.hoverPosition.top, this._config.hoverPosition.onLeft = void 0 == t.hoverPosition.onLeft ? this._config.hoverPosition.onLeft : t.hoverPosition.onLeft, window.JSG_SIDEBAR._initHoverPosition())
        },
//        refresh: function (e, t) {
//            console.log("refreshUrl:", t), window.location.href = t
//        },
        pay: function (e, t) {
//            console.log("userAgent:", window.navigator.userAgent, e, t);
//            if(typeof t == "string"){
//                t = JSON.parse(t);
//            }
//            console.log(t.order_id, t.order_no, t. total_amount, t.total);
//            alert("public web pay 123 | " + t);
            //window.open(t,"_blank");
            //return void(window.location.href = t);
//            !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
//            if (navigator.userAgent.indexOf("MicroMessenger") > -1) {
                //var n = ["orderId=" + t.order_id, "gameId=" + window.JSG_GAME_CONF.GameId, "openId=" + window.JSG_CONF.UserId, "time=" + window.JSG_CONF.TimeNow, "sign=" + window.JSG_CONF.Sign, "loginFrom=" + window.JSG_CONF.LoginFrom].join("&");
                return void(window.location.href = "/index.php/game/wxPay?" + "order_no=" + t.orderNo + "&price=" + t.price + "&open_id=" + t.payOpenId)
//            }
            
//            !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
//            if (window.JSG_CONF.WxToH5 && navigator.userAgent.indexOf("MicroMessenger") > -1) {
////                var n = ["orderId=" + t.order_id, "gameId=" + window.JSG_GAME_CONF.GameId, "openId=" + window.JSG_CONF.UserId, "time=" + window.JSG_CONF.TimeNow, "sign=" + window.JSG_CONF.Sign, "loginFrom=" + window.JSG_CONF.LoginFrom].join("&");
////                return void(window.location.href = "/pay/wxToH5Pay?" + n)
//            }
//            console.log("order:", t);
//            var o = "web";
//            navigator.userAgent.indexOf("Windows NT") > -1 ? o = "web" : navigator.userAgent.indexOf("JsgApp") > -1 ? o = "app" : navigator.userAgent.indexOf("MicroMessenger") > -1 ? o = "wx" : navigator.userAgent.indexOf("QQ") > -1 ? o = "qq" : navigator.userAgent.indexOf("Mobile") > -1 && (o = "mobile_web"), this._createWechatOrder(t.order_id, o)
        },
        showQRCode: function (e, qrCodeInfo) {
            if(qrCodeInfo.qrcode_type == "kefu"){
                var div_qrcode = document.getElementById("div_qrcode");
                $("#img_qrcode").attr("src", qrCodeInfo.qrcode_url);
                div_qrcode.style.display = "block";

                if(qrCodeInfo.action_action != null && qrCodeInfo.action_action != "" && qrCodeInfo.action_action != undefined && qrCodeInfo.action_action != "undefined"){
                    $("#action_display").html(qrCodeInfo.action_action);
                }else{
                    $("#action_display").html("长按保存二维码");
                }

                if(qrCodeInfo.qrcode_title != null && qrCodeInfo.qrcode_title != "" && qrCodeInfo.qrcode_title != undefined && qrCodeInfo.qrcode_title != "undefined"){
                    $("#qrcode_title").html(qrCodeInfo.qrcode_title);
                }else{
                    $("#qrcode_title").html("");
                }
            }
            else if(qrCodeInfo.qrcode_type == "invite"){
                var div_qrcode = document.getElementById("div_agent_qrcode");
                $("#img_agent_qrcode").attr("src", qrCodeInfo.qrcode_url);
                div_qrcode.style.display = "block";
            }
        },
        _registerEventListeners: function () {
            var t = this;
            $("#exit").click(function (e) {
                console.log("referrer:", document.referrer);
                //"" === document.referrer ? wx.closeWindow() : window.history.back();
                //window.close();
                //window.history.back();
                WeixinJSBridge.call('closeWindow');
            });
            
//            $("#exitModal").click(function (t) {
//                console.log("exitModal click", t), t.stopPropagation(), $("#exitModal").hide(), e()
//            });
            $(".cancel-button").click(function (t) {
                console.log("cancel-button click", t);
                t.stopPropagation();
                $("#exitModal").hide();
                window.history.pushState('forward', null, '#forward');
//                e()
            }), 
//            $(".exit-dialog").click(function (e) {
//                console.log("exit-dialog click", e), e.stopPropagation()
//            }), 
            setTimeout(function () {
                window.addEventListener && window.addEventListener("popstate", function (e) {
                    //console.log("popstate event:", e.state);
                    //if (!e.state) {
                        var n = $("#exitModal");
                        n.fadeIn(300);
                        //t.compaignStat(JSG_CONF.GameRecommend.CompaignTp + "-" + JSG_CONF.GameRecommend.GameId)
                        window.history.pushState('forward', null, '#forward');
                    //}
                });
                window.history.pushState('forward', null, '#forward');
            }, 1e3);
        }
    };
    
//    window.JSG_SIDEBAR = {
//        init: function () {
//            window.JSG_SIDEBAR._initHoverPosition(), window.JSG_SIDEBAR._registerModalTriggerMove(), window.JSG_SIDEBAR._registerModalTriggerMove_pc(), window.JSG_SIDEBAR._disableScroll(".dialog-box"), $("#hover").click(function (e) {
//                console.log("hover click", e), e.stopPropagation(), window.JSG_SIDEBAR.show(), navigator.userAgent.indexOf("MicroMessenger") > -1 && window.JSG_SIDEBAR.shortTrigger()
//            }), $("#hover span").click(function (e) {
//                console.log("hover span click", e), e.stopPropagation(), window.JSG_SIDEBAR.show(), navigator.userAgent.indexOf("MicroMessenger") > -1 && window.JSG_SIDEBAR.shortTrigger()
//            }), $("#hover img").click(function (e) {
//                console.log("hover img click", e), e.stopPropagation(), window.JSG_SIDEBAR.show(), navigator.userAgent.indexOf("MicroMessenger") > -1 && window.JSG_SIDEBAR.shortTrigger()
//            }), $("#sidebar").click(function (e) {
//                console.log("event.target.className:", e.target.className), "modal-left" != e.target.className && "modal-left-img" != e.target.className && "left-img" != e.target.className || window.JSG_SIDEBAR.hide()
//            }), setTimeout(function () {
//                $("#hover").show(), window.JSG_SIDEBAR.shortTrigger()
//            }, 2e3)
//        },
//        show: function () {
//            window.JSG_SIDEBAR.reyunStat("SidebarOpenEvent");
//            var e = {
//                GameCenterHost: window.JSG_CONF.GameCenterHost,
//                GameName: window.JSG_GAME_CONF.GameName,
//                GameIcon: window.JSG_GAME_CONF.GameIcon,
//                SubscribeQRCode: window.JSG_GAME_CONF.SubscribeQRCode,
//                IsCoupon: window.JSG_GAME_CONF.IsCoupon,
//                UserHeadImg: window.JSG_CONF.UserHeadImg,
//                UngetGift: JSG_CONF.InfoServerData.unGetGift,
//                HasNewGameOrServer: JSG_CONF.InfoServerData.hasNewInfo || JSG_CONF.InfoServerData.hasNewServer,
//                LogoTop: window.JSG_CONF.LogoTop,
//                Vip: JSG_CONF.VipLevel,
//                Level: JSG_CONF.Level,
//                Name: JSG_CONF.Name,
//                IsShowVip: JSG_CONF.VipLevel > 0,
//                IsShowAppDownload: window.IsShowAppDownload,
//                LevelToIcon: this.levelToIcon,
//                IsShowChat: JSG_CONF.IsShowChat,
//                Score: JSG_CONF.InfoServerData.score,
//                SignInUrl: JSG_CONF.SignInUrl,
//                IsSignIn: JSG_CONF.InfoServerData.isSignIn,
//                SaveToDesktop: window.JSG_CONF.ApiHost + "/auth/guide?openId=" + window.JSG_CONF.UserId + "&channel=" + window.JSG_CONF.Channel + "&loginFrom=" + window.JSG_CONF.LoginFrom + "&time=" + JSG_CONF.TimeNow + "&sign=" + JSG_CONF.Sign + "&gameId=" + JSG_GAME_CONF.GameId,
//                IsShowSaveDesktop: !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && navigator.userAgent.indexOf("MicroMessenger") > -1
//            };
//            if ("" != window.JSG_CONF.SidebarTemplate) {
//                var t = Mustache.render(window.JSG_CONF.SidebarTemplate, e);
//                return $("#sidebar").html(t), void window.JSG_SIDEBAR.initForShow()
//            }
//            $.get(window.JSG_CONF.GameCenterHost + "/templates/sidebar.html", function (t) {
//                window.JSG_CONF.SidebarTemplate = t;
//                var n = Mustache.render(t, e);
//                $("#sidebar").html(n), window.JSG_SIDEBAR.initForShow()
//            })
//        },
//        levelToIcon: function () {
//            return function (e, t) {
//                for (var n, o, i, r = parseInt(t(e)), a = "", s = 0, c = 0; c < 1 && (n = r % 4, r -= n, !(r <= 0)) && (o = r / 4 % 4, r -= 4 * o, !(r <= 0)) && (i = r / 4 / 4 % 4, r -= 4 * i * 4, !(r <= 0)); c++)
//                    s = r / 4 / 4 / 4 % 4;
//                for (c = 0; c < s; c++)
//                    a += '<img class="crown" src="' + JSG_CONF.GameCenterHost + '/img/crown.png">';
//                for (c = 0; c < i; c++)
//                    a += '<img class="sun" src="' + JSG_CONF.GameCenterHost + '/img/sun.png">';
//                for (c = 0; c < o; c++)
//                    a += '<img class="moon" src="' + JSG_CONF.GameCenterHost + '/img/moon.png">';
//                for (c = 0; c < n; c++)
//                    a += '<img class="star" src="' + JSG_CONF.GameCenterHost + '/img/star.png">';
//                return a
//            }
//        },
//        initForShow: function () {
//            window.JSG_SIDEBAR._registerPanelControl(), window.JSG_SIDEBAR._resizeDialog(), window.JSG_SIDEBAR._disableScroll(".dialog-box"), $("#sidebar").fadeIn(200), $("#sidebar .modal-dialog").animate({
//                "margin-left": "0px"
//            }, 200, function () {
//                return JSG_CONF.IsShowChat && window.JSG_CHAT.connect(), JSG_CONF.InfoServerData.unGetGift ? void $("#sidebar .gift").trigger("click") : JSG_CONF.InfoServerData.hasNewInfo || JSG_CONF.InfoServerData.hasNewServer ? void $("#sidebar .info").trigger("click") : void 0
//            })
//        },
//        hide: function () {
//            $("#sidebar").fadeOut(200), JSG_CONF.IsShowChat && window.JSG_CHAT.disconnect()
//        },
//        _disableScroll: function (e) {
//            window.el = document.querySelector("#sidebar " + e), window.sy = 0, document.body.addEventListener("touchstart", function (e) {
//                window.sy = e.touches[0].pageY
//            }), document.body.addEventListener("touchmove", function (e) {
//                if (null == window.el)
//                    return e.preventDefault(), !0;
//                var t = e.touches[0].pageY - window.sy > 0;
//                t && window.el.scrollTop <= 0 && e.preventDefault(), !t && window.el.scrollTop >= window.el.scrollHeight - window.el.clientHeight && e.preventDefault()
//            })
//        },
//        _resizeDialog: function () {
//            var e = 122;
//            window.IsShowAppDownload && (e = 147), $("#sidebar .dialog-box").height($(window).height() - e - 61), $("#sidebar .coupon-panel").height($(window).height() - e), $("#sidebar .game-more-panel").height($(window).height() - e), $("#sidebar .qr-panel").height($(window).height() - e), $("#sidebar .info-panel").height($(window).height() - e), $("#sidebar .vip-panel").height($(window).height() - e)
//        },
//        _initHoverPosition: function () {
//            var e = window.JSG._config.hoverPosition;
//            $("#hover").css({
//                top: e.top,
//                right: e.onLeft ? "auto" : 0,
//                left: e.onLeft ? 0 : "auto"
//            }).removeClass("modal-rotate-left"), $(".modal-trigger span").removeClass("modal-rotate-span-right"), $(".modal-trigger img").removeClass("modal-rotate-right")
//        },
//        _registerModalTriggerMove: function () {
//            var e = this,
//                    t = $(window).width(),
//                    n = $(window).height();
//            $(".modal-trigger").bind("touchstart", function (t) {
//                console.log("这是别的地方储存的两个timeout:", e.t, ";t1:", e.t1), clearTimeout(e.t), $(".modal-trigger").stop(), $(".modal-trigger").css("opacity", .8), $(".modal-trigger").removeClass("modal-rotate-left"), $(".modal-trigger span").removeClass("modal-rotate-span-right"), $(".modal-trigger img").removeClass("modal-rotate-right");
//                var n = t.originalEvent.touches[0];
//                touchStartX = n.clientX, touchStartY = n.clientY;
//                var o = $(".modal-trigger").offset();
//                modalTriggerOriginX = o.left, modalTriggerOriginY = o.top
//            }), $(".modal-trigger").bind("touchmove", function (e) {
//                var o = e.originalEvent.touches[0],
//                        i = o.clientX - touchStartX,
//                        r = o.clientY - touchStartY,
//                        a = modalTriggerOriginX + i > 0 ? modalTriggerOriginX + i : 0,
//                        s = modalTriggerOriginY + r > 0 ? modalTriggerOriginY + r : 0;
//                a = a + $(".modal-trigger").outerWidth(!0) > t ? t - $(".modal-trigger").outerWidth(!0) : a, s = s + $(".modal-trigger").outerHeight(!0) > n ? n - $(".modal-trigger").outerHeight(!0) : s, $(".modal-trigger").offset({
//                    left: a,
//                    top: s
//                })
//            }), $(".modal-trigger").bind("touchend", function (n) {
//                var o = $(".modal-trigger").offset();
//                modalTriggerOriginX = o.left, modalTriggerOriginY = o.top;
//                var i = (modalTriggerOriginX + $(".modal-trigger").outerWidth(!0) / 2) / t,
//                        r = i <= .5 ? 0 : t - $(".modal-trigger").outerWidth(!0);
//                $(".modal-trigger").offset({
//                    left: r
//                }), e.shortTrigger()
//            })
//        },
//        _registerModalTriggerMove_pc: function () {
//            var e = this;
//            $.fn.extend({
//                drag: function (e, t, n) {
//                    function o(o, i) {
//                        function r(e) {
//                            var e = e || window.event,
//                                    n = s + e.clientX - l,
//                                    i = c + e.clientY - d;
//                            $(o).css({
//                                left: n + "px",
//                                top: i + "px"
//                            }), e.stopPropagation ? e.stopPropagation() : e.cancleBubble && (e.cancleBubble = !0), $.isFunction(t) && t.apply(o, arguments)
//                        }
//                        function a(e) {
//                            document.addEventListener ? (document.removeEventListener("mousemove", r, !1), document.removeEventListener("mouseup", a, !1)) : document.detachEvent && (o.detachEvent("onlosecapture", a), o.detachEvent("onmouseup", a), o.detachEvent("onmousemove", r), o.releaseCapture()), e.stopPropagation ? e.stopPropagation() : e.cancleBubble && (e.cancleBubble = !0), $.isFunction(n) && n.apply(o, arguments)
//                        }
//                        var s, c, l, d;
//                        $.isFunction(e) && e.apply(o, arguments), s = parseInt($(o).css("left"), 10), c = parseInt($(o).css("top"), 10), l = i.clientX, d = i.clientY, document.addEventListener ? (document.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", a, !1)) : document.attachEvent && (o.setCapture(), o.attachEvent("onmousemove", r), o.attachEvent("onmouseup", a), o.attachEvent("onlosecapture", a))
//                    }
//                    return $(this).each(function () {
//                        $(this).bind("mousedown", function (e) {
//                            var t = this,
//                                    n = e;
//                            o(t, n)
//                        })
//                    }), this
//                }
//            }), function () {
//                var t = !1;
//                $(".modal-trigger").drag(function () {
//                    console.log("这是别的地方储存的两个timeout:", e.t, ";t1:", e.t1), clearTimeout(e.t), $(".modal-trigger").stop(), $(".modal-trigger").css("opacity", .8), $(".modal-trigger").removeClass("modal-rotate-left"), $(".modal-trigger span").removeClass("modal-rotate-span-right"), $(".modal-trigger img").removeClass("modal-rotate-right"), $(this).css({
//                        zIndex: 2
//                    }).siblings().css({
//                        zIndex: 10
//                    })
//                }, function () {
//                    t = !0
//                }, function () {
//                    if (t) {
//                        t = !1;
//                        var n = $("#body_wrap").offset(),
//                                o = $("#body_wrap").width(),
//                                i = $(".modal-trigger").offset();
//                        modalTriggerOriginX = i.left, modalTriggerOriginY = i.top, console.log("modalTriggerOriginX:", modalTriggerOriginX, ";modalTriggerOriginY:", modalTriggerOriginY);
//                        var r = (modalTriggerOriginX - n.left + $(".modal-trigger").outerWidth(!0) / 2) / o,
//                                a = r <= .5 ? 0 + n.left : o - $(".modal-trigger").outerWidth(!0) + n.left;
//                        $(".modal-trigger").offset({
//                            left: a
//                        }), e.shortTrigger()
//                    }
//                })
//            }()
//        },
//        shortTrigger: function () {
//            var e = this,
//                    t = function () {
//                        var e = $(".modal-trigger").offset(),
//                                t = e.left,
//                                n = e.top;
//                        console.log("modalTriggerOriginX:", t, ";modalTriggerOriginY:", n), $(".modal-trigger").offset({
//                            left: t,
//                            top: n
//                        });
//                        var o = $("#body_wrap").width(),
//                                i = $("#body_wrap").offset(),
//                                r = (t - i.left + $(".modal-trigger").outerWidth(!0) / 2) / o,
//                                a = r <= .5 ? "-=" + $(".modal-trigger").outerWidth(!0) / 2 + "px" : "+=" + $(".modal-trigger").outerWidth(!0) / 2 + "px";
//                        console.log("winWidth:", o, ";leftPercent:", r, ";hideStr:", a), $(".modal-trigger").animate({
//                            left: a
//                        }, 200, function () {
//                            r <= .5 ? $(".modal-trigger").addClass("modal-rotate-left") : ($(".modal-trigger span").addClass("modal-rotate-span-right"), $(".modal-trigger img").addClass("modal-rotate-right"))
//                        })
//                    };
//            e.t && clearTimeout(e.t), e.t = setTimeout(t, 3e3), console.log("t:", e.t)
//        },
//        _registerPanelControl: function () {
//            $("#sidebar .chat").click(function () {
//                $("#sidebar .tab .item").removeClass("active"), $("#sidebar .tab .chat").addClass("active"), $("#sidebar .coupon-panel").hide(), $("#sidebar .game-more-panel").hide(), $("#sidebar .qr-panel").hide(), $("#sidebar .chat-panel").show(), $("#sidebar .info-panel").hide(), $("#sidebar .vip-panel").hide(), window.JSG_SIDEBAR._disableScroll(".dialog-box");
//                var e = $("#sidebar .dialog-box");
//                void 0 != e[0] && (e[0].scrollTop = e[0].scrollHeight), window.JSG_SIDEBAR.reyunStat("ChatOpenEvent")
//            }), $("#sidebar .gift").click(function () {
//                $("#sidebar .tab .item").removeClass("active"), $("#sidebar .tab .gift").addClass("active"), $("#sidebar .chat-panel").hide(), $("#sidebar .game-more-panel").hide(), $("#sidebar .qr-panel").hide(), window.JSG_SIDEBAR.showCoupon(), $("#sidebar .coupon-panel").show(), $("#sidebar .info-panel").hide(), $("#sidebar .vip-panel").hide(), window.JSG_SIDEBAR._disableScroll(".coupon-panel"), window.JSG_SIDEBAR.reyunStat("GiftOpenEvent")
//            }), $("#sidebar .info").click(function () {
//                $("#sidebar .tab .item").removeClass("active"), $("#sidebar .tab .info").addClass("active"), $("#sidebar .chat-panel").hide(), $("#sidebar .game-more-panel").hide(), $("#sidebar .qr-panel").hide(), $("#sidebar .coupon-panel").hide(), $("#sidebar .vip-panel").hide(), window.JSG_SIDEBAR.showInfoList(), $("#sidebar .info-panel").show(), window.JSG_SIDEBAR._disableScroll(".info-panel"), window.JSG_SIDEBAR.reyunStat("infoOpenEvent"), JSG_SIDEBAR.updateAttentTimeForInfo(), JSG_SIDEBAR.updateAttentTimeForNewServer(), "" != JSG_CONF.GameInfoRecommend.GameId && JSG.compaignStat(JSG_CONF.GameInfoRecommend.CompaignTp + "-" + JSG_CONF.GameInfoRecommend.GameId), JSG_CONF.InfoServerData.unGetGift || ($(".modal-trigger .info").hide(), $(".modal-trigger .server").hide()), $("#sidebar .tab .info .modal-indicator").hide(), JSG_CONF.InfoServerData.hasNewInfo = !1, JSG_CONF.InfoServerData.hasNewServer = !1
//            }), $("#sidebar .vip").click(function () {
//                $("#sidebar .tab .item").removeClass("active"), $("#sidebar .tab .vip").addClass("active"), $("#sidebar .chat-panel").hide(), $("#sidebar .coupon-panel").hide(), $("#sidebar .qr-panel").hide(), $("#sidebar .game-more-panel").hide(), $("#sidebar .info-panel").hide(), window.JSG_SIDEBAR.showVipActive(), $("#sidebar .vip-panel").show(), window.JSG_SIDEBAR._disableScroll(".vip-panel"), window.JSG_SIDEBAR.reyunStat("VipOpenEvent")
//            }), $("#sidebar .service").click(function () {
//                $("#sidebar .tab .item").removeClass("active"), $("#sidebar .tab .service").addClass("active"), $("#sidebar .chat-panel").hide(), $("#sidebar .coupon-panel").hide(), $("#sidebar .game-more-panel").hide(), $("#sidebar .qr-title-collect").hide(), $("#sidebar .qr-title-gift").hide(), $("#sidebar .qr-title-service").show(), $("#sidebar .info-panel").hide(), $("#sidebar .vip-panel").hide(), $("#sidebar .qr-panel").show(), window.JSG_SIDEBAR.reyunStat("ServiceOpenEvent")
//            }), $("#sidebar .more").click(function () {
//                $("#sidebar .tab .item").removeClass("active"), $("#sidebar .tab .more").addClass("active"), $("#sidebar .chat-panel").hide(), $("#sidebar .coupon-panel").hide(), $("#sidebar .qr-panel").hide(), $("#sidebar .info-panel").hide(), $("#sidebar .vip-panel").hide(), window.JSG_SIDEBAR.showGameList(), $("#sidebar .game-more-panel").show(), window.JSG_SIDEBAR._disableScroll(".game-more-panel"), window.JSG_SIDEBAR.reyunStat("MoreGameOpenEvent")
//            }), $("#sidebar .collectGame").click(function () {
//                $("#sidebar .tab .item").removeClass("active"), $("#sidebar .chat-panel").hide(), $("#sidebar .coupon-panel").hide(), $("#sidebar .game-more-panel").hide(), $("#sidebar .qr-title-service").hide(), $("#sidebar .qr-title-gift").hide(), $("#sidebar .qr-title-collect").show(), $("#sidebar .info-panel").hide(), $("#sidebar .vip-panel").hide(), $("#sidebar .qr-panel").show(), window.JSG_SIDEBAR.reyunStat("CollectGameOpenEvent")
//            }), window.JSG_CONF.IsShowMoreGame || $("#sidebar .more").hide(), window.JSG_CONF.IsShowService || $("#sidebar .service").hide(), window.JSG_CONF.IsShowCollect || $("#sidebar .collectGame").hide(), window.JSG_CONF.HasVipActivity || $("#sidebar .vip").hide()
//        },
//        showCoupon: function () {
//            var e = ["openId=" + window.JSG_CONF.UserId, "gameId=" + window.JSG_GAME_CONF.GameId, "time=" + window.JSG_CONF.TimeNow, "sign=" + window.JSG_CONF.Sign].join("&");
//            $.getJSON(window.JSG_CONF.ApiHost + "/gc/sdk/giftbatch?" + e, function (e) {
//                $.get(window.JSG_CONF.GameCenterHost + "/templates/coupon.html?v=1.5.6", function (t) {
//                    function n(t, n) {
//                        var o = t + "Gifts";
//                        e[o] = e[o] || [], e[o].push(n)
//                    }
//                    var o = function (e) {
//                        return e.some(function (e) {
//                            if ("" == e.code && Number(JSG_CONF.VipLevel) >= e.vip && e.tp != CONST.GIFT_BATCH_TP.GROUP && (e.codeTp == CONST.GIFT_CODE_TP.COMMON && e.remain > 0 || e.codeTp == CONST.GIFT_CODE_TP.UNIQUE))
//                                return !0
//                        })
//                    },
//                            i = function (e) {
//                                if (!o(e.gameGiftCodeStatus)) {
//                                    if ($("#sidebar .tab .gift .modal-indicator").hide(), $("#hover .coupon").hide(), JSG_CONF.InfoServerData.unGetGift = !1, JSG_CONF.InfoServerData.hasNewInfo)
//                                        return void $("#hover_info").show();
//                                    if (JSG_CONF.InfoServerData.hasNewServer)
//                                        return void $("#hover_server").show()
//                                }
//                            };
//                    i(e), e.isShowGiftDesc = e.gameGiftCodeStatus.length > 0, e.scoreRuleUrl = JSG_CONF.ScoreRuleUrl, e.GameCenterHost = JSG_CONF.GameCenterHost, e.gameGiftCodeStatus.map(function (e) {
//                        e.tp == CONST.GIFT_BATCH_TP.VIP ? n("vip", e) : e.tp == CONST.GIFT_BATCH_TP.SCORE ? n("score", e) : n("normal", e)
//                    }), e.hasVipGifts = function () {
//                        return !!e.vipGifts
//                    }, e.hasScoreGifts = function () {
//                        return !!e.scoreGifts
//                    }, e.hasNormalGifts = function () {
//                        return !!e.normalGifts
//                    }, e.isVipLevelLimit = function () {
//                        return this.vip > 0
//                    }, e.isUniqueGift = function () {
//                        return this.codeTp == CONST.GIFT_CODE_TP.UNIQUE
//                    }, e.isGroupGift = function () {
//                        return this.tp == CONST.GIFT_BATCH_TP.GROUP
//                    }, e.isHolidayGift = function () {
//                        return this.tp == CONST.GIFT_BATCH_TP.HOLIDY
//                    }, e.progress = function () {
//                        return this.codeTp == CONST.GIFT_CODE_TP.UNIQUE || this.tp == CONST.GIFT_BATCH_TP.GROUP ? 100 : this.total ? Math.floor(this.remain / this.total * 100) : 0
//                    }, e.isScoreShowCheck = function () {
//                        return this.scoreTp != CONST.SCORE_BATCH_TP.UNLIMIT && this.code
//                    }, e.scoreLimitInfo = function () {
//                        return this.scoreTp == CONST.SCORE_BATCH_TP.ONLYONCE ? "仅可兑换一次" : this.scoreTp == CONST.SCORE_BATCH_TP.LIMITDAY ? this.intervalDay + "天内可兑换一次" : this.scoreTp == CONST.SCORE_BATCH_TP.UNLIMIT ? "无限兑换" : ""
//                    };
//                    var r = function (e, t) {
//                        JSG.showAlert({
//                            title: t || "",
//                            text: '<div style="text-align: center;"><p>兑换码：<i class="canselect-code">' + e + '</i></p><p class="desc">长按复制兑换码，去游戏中使用</p></div>',
//                            btns: [{
//                                    text: "知道了",
//                                    type: "primary"
//                                }]
//                        })
//                    };
//                    $("#sidebar .coupon-panel").html(Mustache.render(t, e)), $("#sidebar .game-coupon-content .coupon-view-btn").click(function (t) {
//                        for (var n, o = $(t.currentTarget).attr("data-batch"), i = 0; i < e.gameGiftCodeStatus.length; i++)
//                            e.gameGiftCodeStatus[i].batch == o && (n = e.gameGiftCodeStatus[i]);
//                        n && n.code && r(n.code)
//                    });
//                    var a = function (e, t) {
//                        $.ajax({
//                            url: window.JSG_CONF.ApiHost + "/gc/player/info",
//                            type: "GET",
//                            data: {
//                                openId: window.JSG_CONF.UserId,
//                                gameId: window.JSG_GAME_CONF.GameId,
//                                time: window.JSG_CONF.TimeNow,
//                                sign: window.JSG_CONF.Sign
//                            },
//                            success: function (e) {
//                                $.get(window.JSG_CONF.GameCenterHost + "/templates/selectPlayerModal.html?v=1.0.1", function (n) {
//                                    t && t(n, e)
//                                })
//                            },
//                            complete: function () {},
//                            error: function (e, t, n) {
//                                JSG.showAlert(e.responseText)
//                            }
//                        })
//                    },
//                            s = function (e, t) {
//                                console.log("兑换成功", e, t), JSG_CONF.InfoServerData.unGetGift = !1, window.JSG_SIDEBAR.showCoupon(), t.score && $("#score").html(JSG_CONF.InfoServerData.score -= t.score), t.autoSend ? JSG.showAlert('<p class="desc"> 此积分商品会自动下发到您的游戏中，请及时查看。<p>', "兑换成功！") : r(e.giftcode, "兑换成功！")
//                            },
//                            c = function (e, t) {
//                                var n = {
//                                    openId: window.JSG_CONF.UserId,
//                                    gameId: window.JSG_GAME_CONF.GameId,
//                                    batchId: e.batchId,
//                                    time: window.JSG_CONF.TimeNow,
//                                    sign: window.JSG_CONF.Sign
//                                };
//                                t && Object.assign(n, t), console.log("getCoupon", n), $.ajax({
//                                    url: window.JSG_CONF.ApiHost + "/gc/get-giftcode",
//                                    type: "POST",
//                                    data: n,
//                                    success: function (t) {
//                                        s(t, e)
//                                    },
//                                    complete: function () {},
//                                    error: function (e, t, n) {
//                                        JSG.showAlert(e.responseText)
//                                    }
//                                })
//                            },
//                            l = function (e, t, n) {
//                                JSG.showAlert({
//                                    text: e,
//                                    btns: [{
//                                            text: "确定",
//                                            type: "primary",
//                                            onClick: function () {
//                                                c(t, n)
//                                            }
//                                        }, {
//                                            text: "取消"
//                                        }]
//                                })
//                            },
//                            d = function (e, t) {
//                                e.find(".selsec-confirm").unbind("click"), JSG.hideModal(e)
//                            },
//                            u = function (e, t) {
//                                e.fadeIn(800).css("zIndex", "22"), e.children(":first").animate({
//                                    "margin-top": "50px"
//                                }, 500, function () {});
//                                var n = e.find(".server"),
//                                        o = e.find(".player"),
//                                        i = e.find(".selsec-confirm");
//                                i.bind("click", function () {
//                                    d(e);
//                                    var i = n.val(),
//                                            r = o.val(),
//                                            a = n.find("option:selected").text(),
//                                            s = o.find("option:selected").text(),
//                                            c = "您确定要使用 " + t.score + " 积分兑换此商品，并将其发送到 " + a + " 的 " + s + " 么？";
//                                    l(c, t, {
//                                        server: i,
//                                        player: r
//                                    })
//                                })
//                            },
//                            f = function (e, t) {
//                                var n = {
//                                    serverData: t,
//                                    playerData: t[0].playerInfos
//                                },
//                                        o = $("#selectPlayerModal").html(Mustache.render(e, n)),
//                                        i = o.find(".player"),
//                                        r = '{{#playerInfos}}<option value="{{playerId}}">{{playerName}}</option>{{/playerInfos}}';
//                                return o.on("change", ".server", function () {
//                                    var e = this.selectedIndex,
//                                            n = t[e],
//                                            o = Mustache.render(r, n);
//                                    i.html(o)
//                                }), o.on("click", ".selsec-cancel", function () {
//                                    d(o)
//                                }), o
//                            },
//                            p = "",
//                            h = function (t) {
//                                p ? u(p, t) : a(e, function (e, n) {
//                                    p = f(e, n), u(p, t)
//                                })
//                            };
//                    $("#sidebar .game-coupon-content .coupon-get-btn").click(function (e) {
//                        if (!window.JSG_CONF.IsSubscribe && window.JSG_CONF.IsSubscribeGift)
//                            return console.log("请先关注公众号"), $("#sidebar .tab .item").removeClass("active"), $("#sidebar .chat-panel").hide(), $("#sidebar .coupon-panel").hide(), $("#sidebar .game-more-panel").hide(), $("#sidebar .qr-title-service").hide(), $("#sidebar .qr-title-collect").hide(), $("#sidebar .qr-title-gift").show(), $("#sidebar .qr-panel").show(), window.JSG_SIDEBAR.reyunStat("UnsubscribeGetGiftEvent"), !1;
//                        var t = $(e.currentTarget),
//                                n = {
//                                    score: t.data("score") || 0,
//                                    autoSend: t.data("auto-send") || !1,
//                                    needPlayerInfo: t.data("need-player-info") || !1,
//                                    batchId: t.data("batch")
//                                };
//                        return n.score ? n.score > JSG_CONF.InfoServerData.score ? JSG.showAlert("积分不足，不能兑换") : n.autoSend && n.needPlayerInfo ? h(n) : void l("您确定使用" + n.score + "积分兑换该礼包么", n) : c(n)
//                    })
//                })
//            })
//        },
//        showGameList: function () {
//            var e = "web";
//            navigator.userAgent.indexOf("HortorApp") > -1 ? e = "app" : navigator.userAgent.indexOf("MicroMessenger") > -1 && (e = "wx"), $.getJSON(window.JSG_CONF.ApiHost + "/gc/sdk/more-game?compaign=hover&openId=" + window.JSG_CONF.UserId + "&channel=" + window.JSG_CONF.Channel + "&ext=" + window.JSG_CONF.Ext + "&loginFrom=" + window.JSG_CONF.LoginFrom + "&time=" + JSG_CONF.TimeNow + "&sign=" + JSG_CONF.Sign + "&platform=" + e, function (t) {
//                $.get(window.JSG_CONF.GameCenterHost + "/templates/gameList.html?v=1.0.1", function (n) {
//                    t.loadMore = 10 == t.gameList.length, t.page = 1;
//                    var o = Mustache.render(n, t);
//                    $("#sidebar .game-more-panel").html(o);
//                    var i = function (e) {
//                        for (var t = new Array, n = 0; n < e.gameList.length; n++)
//                            n >= 10 || t.push("hover" + Number(n + 1) + "-" + e.gameList[n].gameId);
//                        JSG.compaignStat(t.join(","))
//                    };
//                    i(t);
//                    var r = function () {
//                        $("#sidebar .load-more").click(function (o) {
//                            $("#more").html("加载中…"), o.preventDefault(), o.stopPropagation();
//                            var i = $(o.currentTarget).attr("data-page");
//                            $.ajax({
//                                url: window.JSG_CONF.ApiHost + "/gc/sdk/more-game-list?openId=" + window.JSG_CONF.UserId + "&channel=" + window.JSG_CONF.Channel + "&ext=" + window.JSG_CONF.Ext + "&loginFrom=" + window.JSG_CONF.LoginFrom + "&time=" + JSG_CONF.TimeNow + "&sign=" + JSG_CONF.Sign + "&platform=" + e,
//                                type: "GET",
//                                data: {
//                                    openId: window.JSG_CONF.UserId,
//                                    page: Number(i) + 1
//                                },
//                                success: function (e) {
//                                    t.page = t.page + 1;
//                                    var o = e.gameList;
//                                    o.length < 10 && (t.loadMore = !1);
//                                    for (var i = 0; i < o.length; i++)
//                                        t.gameList.push(o[i]);
//                                    var a = Mustache.render(n, t);
//                                    $("#sidebar .game-more-panel").html(a), t.loadMore && r()
//                                },
//                                complete: function () {},
//                                error: function (e, t, n) {
//                                    alert(n)
//                                }
//                            })
//                        })
//                    };
//                    r()
//                })
//            })
//        },
//        showInfoList: function () {
//            $.get(window.JSG_CONF.GameCenterHost + "/templates/infoServer.html?v=1.4.4", function (e) {
//                var t = JSG_CONF.InfoServerData;
//                "" != JSG_CONF.GameInfoRecommend.GameId && (t.gameInfoRecommend = JSG_CONF.GameInfoRecommend), t.infoTpRenderer = function () {
//                    return 0 === this.tp ? "<span class='activity icon'>活动</span>" : "<span class='strategy icon'>攻略</span>"
//                }, t.timeFormate_server = function () {
//                    var e = 1e3 * Number(this.startAt),
//                            t = (new Date).getTime();
//                    if (t <= e) {
//                        var n = new Date(e),
//                                o = n.getMonth() + 1 >= 10 ? n.getMonth() + 1 : "0" + (n.getMonth() + 1),
//                                i = n.getDate() >= 10 ? n.getDate() : "0" + n.getDate(),
//                                r = n.getHours() >= 10 ? n.getHours() : "0" + n.getHours(),
//                                a = n.getMinutes() >= 10 ? n.getMinutes() : "0" + n.getMinutes();
//                        return o + "-" + i + " " + r + ":" + a
//                    }
//                    var s = 36e5;
//                    return t - e <= s ? "刚刚" : "开服 " + Math.floor((t - e) / s) + "小时"
//                }, t.timeFormate = function () {
//                    var e = new Date(1e3 * Number(this.createdAt)),
//                            t = e.getMonth() + 1 >= 10 ? e.getMonth() + 1 : "0" + (e.getMonth() + 1),
//                            n = e.getDate() >= 10 ? e.getDate() : "0" + e.getDate();
//                    return t + "-" + n
//                };
//                var n = Mustache.render(e, t);
//                $("#sidebar .info-panel").html(n)
//            })
//        },
//        showVipActive: function () {
//            $.get(window.JSG_CONF.GameCenterHost + "/templates/vipactive.html?v=1.4.9", function (e) {
//                var t = JSG_CONF.VipActiveData;
//                t.GameCenterHost = window.JSG_CONF.GameCenterHost, t.isShowGift = t.vipGift.length > 0, t.isShowActive = t.actives.length > 0;
//                var n = Mustache.render(e, t);
//                $("#sidebar .vip-panel").html(n)
//            })
//        },
//        reyunStat: function (e) {
//            $.ajax({
//                url: "http://log.reyun.com/receive/rest/event",
//                type: "POST",
//                data: JSON.stringify({
//                    appid: "82a7638fe398434f83ce619be2fa1b59",
//                    who: window.JSG_CONF.UserId,
//                    what: e,
//                    context: {
//                        deviceid: window.JSG_CONF.UserId
//                    }
//                }),
//                success: function (e) {
//                    console.log("success:", e)
//                },
//                error: function (e, t, n) {
//                    console.log("error:", n)
//                }
//            })
//        },
//        updateAttentTimeForInfo: function () {
//            $.ajax({
//                url: window.JSG_CONF.ApiHost + "/gc/update-attenttime-info",
//                type: "POST",
//                data: {
//                    openId: JSG_CONF.UserId,
//                    attentTime: (new Date).getTime()
//                },
//                success: function (e) {
//                    console.log("更新关注时间成功")
//                },
//                complete: function () {}
//            })
//        },
//        updateAttentTimeForNewServer: function () {
//            $.ajax({
//                url: window.JSG_CONF.ApiHost + "/gc/update-attenttime-newserver",
//                type: "POST",
//                data: {
//                    openId: JSG_CONF.UserId,
//                    attentTime: (new Date).getTime()
//                },
//                success: function (e) {
//                    console.log("更新关注时间成功")
//                },
//                complete: function () {}
//            })
//        }
//    };

    String.stringFormat = function (e) {
        for (var t = 1; t < arguments.length; t++)
            e = e.replace(new RegExp("\\{" + (t - 1) + "\\}", "g"), void 0 != arguments[t] ? arguments[t] : "");
        return e
    };
//    window.JSG_CHAT = {
//        connect: function () {
//            if (window.IS_DEBUG)
//                window.JSG_CHAT.Config = {
//                    chatAppKey: "x4vkb1qpvsrkk",
//                    chatToken: "hy07iZAUFloEjozpvstMg/kCNayJdmr1w+5mjqkz9SXdrnEI+ZaihDKa/ke2SxSaEFY3+J/nEntxJSvEY7SYWw==",
//                    chatRoomId: "test_1"
//                }, window.JSG_CHAT._registerSend(), window.JSG_CHAT._rongIMConnect();
//            else {
//                if ("" == $.trim(window.JSG_GAME_CONF.GameId) || "" == $.trim(window.JSG_CONF.UserId))
//                    return void console.log("[connect]gameId:", window.JSG_GAME_CONF.GameId, ";userId:", window.JSG_CONF.UserId);
//                $.getJSON(window.JSG_CONF.ChatApiHost + "/chat?gameId=" + window.JSG_GAME_CONF.GameId + "&userId=" + window.JSG_CONF.UserId, function (e) {
//                    window.JSG_CHAT.Config = e, window.JSG_CHAT.Config.chatRoomId = window.JSG_GAME_CONF.GameId + "_" + window.JSG_CHAT.Config.chatRoomCnt, window.JSG_CHAT._registerSend(), window.JSG_CHAT._rongIMConnect()
//                })
//            }
//        },
//        disconnect: function () {
//            RongIMClient.getInstance().disconnect()
//        },
//        _rongIMConnect: function () {
//            RongIMClient.init(window.JSG_CHAT.Config.chatAppKey), RongIMClient.setConnectionStatusListener({
//                onChanged: function (e) {
//                    switch (e) {
//                        case RongIMLib.ConnectionStatus.CONNECTED:
//                            console.log("链接成功");
//                            break;
//                        case RongIMLib.ConnectionStatus.CONNECTING:
//                            console.log("正在链接");
//                            break;
//                        case RongIMLib.ConnectionStatus.DISCONNECTED:
//                            console.log("断开连接");
//                            break;
//                        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
//                            console.log("其他设备登陆");
//                            break;
//                        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
//                            console.log("网络不可用")
//                    }
//                }
//            }), RongIMClient.setOnReceiveMessageListener({
//                onReceived: function (e) {
//                    switch (e.messageType) {
//                        case RongIMClient.MessageType.TextMessage:
//                            console.log(e.content.content), window.JSG_CHAT._addMessage(e, !1);
//                            break;
//                        case RongIMClient.MessageType.ImageMessage:
//                            break;
//                        case RongIMClient.MessageType.DiscussionNotificationMessage:
//                            break;
//                        case RongIMClient.MessageType.LocationMessage:
//                            break;
//                        case RongIMClient.MessageType.RichContentMessage:
//                            break;
//                        case RongIMClient.MessageType.DiscussionNotificationMessage:
//                            break;
//                        case RongIMClient.MessageType.InformationNotificationMessage:
//                            break;
//                        case RongIMClient.MessageType.ContactNotificationMessage:
//                            break;
//                        case RongIMClient.MessageType.ProfileNotificationMessage:
//                            break;
//                        case RongIMClient.MessageType.CommandNotificationMessage:
//                            break;
//                        case RongIMClient.MessageType.CommandMessage:
//                            break;
//                        case RongIMClient.MessageType.UnknownMessage:
//                    }
//                }
//            }), RongIMClient.connect(window.JSG_CHAT.Config.chatToken, {
//                onSuccess: function (e) {
//                    console.log("Login successfully." + e), window.JSG_CHAT._joinTheChatRoom()
//                },
//                onTokenIncorrect: function () {
//                    console.log("token无效")
//                },
//                onError: function (e) {
//                    var t = "";
//                    switch (e) {
//                        case RongIMLib.ErrorCode.TIMEOUT:
//                            t = "超时";
//                            break;
//                        case RongIMLib.ErrorCode.UNKNOWN_ERROR:
//                            t = "未知错误";
//                            break;
//                        case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
//                            t = "不可接受的协议版本";
//                            break;
//                        case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
//                            t = "appkey不正确";
//                            break;
//                        case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
//                            t = "服务器不可用"
//                    }
//                    console.log(e)
//                }
//            })
//        },
//        _joinTheChatRoom: function () {
//            RongIMClient.getInstance().joinChatRoom(window.JSG_CHAT.Config.chatRoomId, 25, {
//                onSuccess: function () {
//                    console.info("加入聊天室成功")
//                },
//                onError: function () {
//                    console.info("加入聊天室失败")
//                }
//            })
//        },
//        _addMessage: function (e, t) {
//            var n = this;
//            if (!(e.content.content.indexOf("script") >= 0 || e.content.content.indexOf("style") >= 0 || e.content.content.indexOf("onload") >= 0 || e.content.content.indexOf("src") >= 0 || e.content.content.indexOf(n.htmlEncodeJQ("</a>")) >= 0 || e.content.content.indexOf(n.htmlEncodeJQ("<img")) >= 0 || e.content.content.indexOf(n.htmlEncodeJQ("<a")) >= 0)) {
//                var o = $("#sidebar .dialog-box"),
//                        i = 0 == o[0].scrollTop || o[0].scrollHeight - o[0].scrollTop >= $("#sidebar .dialog-box").outerHeight(!0) - 1 && o[0].scrollHeight - o[0].scrollTop <= $("#sidebar .dialog-box").outerHeight(!0) - 1 + 5 || (new Date).getTime() - e.sentTime > 1e3 || t,
//                        r = '<div class="clearfix message-body {0}"><div class="user-img"><img class="avatar" src="other/.php/{1}"><img class="user-level" data-user-id="{7}" style="display: none; padding-right: 2px" width="20px"></div><div class="msg clearfix"><div class="msg-info"><div class="user-name" data-user-id="{2}"></div><img class="user-sex" data-user-id="{6}" style="display: none;" width="11px"><div class="sentTime"></div><div class="accusation" data-user-id="{5}" data-msg="{8}" style="display: {4}">举报</div></div><div class="msgAngle"></div><div class="msgBody canselect">{3}</div></div></div>',
//                        a = window.JSG_CONF.ChatApiHost + "/chat/headImg?userId=" + e.senderUserId;
//                $("#sidebar .dialog-box:first").append(String.stringFormat(r, e.senderUserId == window.JSG_CONF.UserId ? "from-self" : "from-other", a, e.senderUserId, e.content.content, e.senderUserId == window.JSG_CONF.UserId ? "none" : "inline-block", e.senderUserId, e.senderUserId, e.senderUserId, e.content.content)), $("#sidebar .dialog-box .accusation").unbind("click"), $("#sidebar .dialog-box .accusation").click(function (e) {
//                    e.preventDefault(), e.stopPropagation();
//                    var t = $(e.currentTarget).attr("data-user-id"),
//                            n = $(e.currentTarget).attr("data-msg");
//                    console.log("msg:", n);
//                    var o = confirm("您确认要举报该玩家吗?");
//                    1 == o && $.ajax({
//                        url: window.JSG_CONF.ApiHost + "/auth/add-gag",
//                        type: "POST",
//                        data: {
//                            reportUserId: window.JSG_CONF.UserId,
//                            upborneUserId: t,
//                            chatRoomId: window.JSG_CHAT.Config.chatRoomId,
//                            msg: n
//                        },
//                        success: function (e) {
//                            alert(e.msg)
//                        },
//                        complete: function () {},
//                        error: function (e, t, n) {
//                            alert(n)
//                        }
//                    })
//                }), i && (o[0].scrollTop = o[0].scrollHeight), window.JSG_CHAT._showName(e.senderUserId, e.sentTime), t ? window.JSG_CHAT._showSentTime((new Date).getTime()) : window.JSG_CHAT._showSentTime(e.sentTime)
//            }
//        },
//        _showName: function (e, t) {
//            this._userInfoCache = this._userInfoCache || {}, console.log("userInfoCache:", this._userInfoCache);
//            var n = this._userInfoCache[e];
//            if (console.log("info:", n), n) {
//                if (n.name && $("#sidebar .user-name[data-user-id='" + e + "']").text(n.name), n.sex) {
//                    var o = 1 == n.sex ? "man" : "woman";
//                    $("#sidebar .user-sex[data-user-id='" + e + "']").attr("src", window.JSG_CONF.GameCenterHost + "/img/" + o + ".png").css("display", "inline-block")
//                }
//                n.vipLevel && ($("#sidebar .user-level[data-user-id='" + e + "']").attr("src", window.JSG_CONF.GameCenterHost + "/img/vip" + n.vipLevel + ".png").show(), $("#sidebar .user-level[data-user-id='" + e + "']").css("display", "inline-block"))
//            } else
//                this._userInfoCache[e] = {
//                    name: "..."
//                }, $.get(window.JSG_CONF.ChatApiHost + "/chat/name?userId=" + e, function (t) {
//                    console.log("userId:", e, "===返回的data:", t), this._userInfoCache[e] = t;
//                    var n = this._userInfoCache[e];
//                    if (n.name && $("#sidebar .user-name[data-user-id='" + e + "']").text(n.name), n.sex) {
//                        var o = 1 == n.sex ? "man" : "woman";
//                        $("#sidebar .user-sex[data-user-id='" + e + "']").attr("src", window.JSG_CONF.GameCenterHost + "/img/" + o + ".png").css("display", "inline-block")
//                    }
//                    n.vipLevel && ($("#sidebar .user-level[data-user-id='" + e + "']").attr("src", window.JSG_CONF.GameCenterHost + "/img/vip" + n.vipLevel + ".png").show(), $("#sidebar .user-level[data-user-id='" + e + "']").css("display", "inline-block"))
//                }.bind(this))
//        },
//        _showSentTime: function (e) {
//            var t = (new Date).getTime(),
//                    n = " (刚刚)",
//                    o = t - e;
//            o > 36e5 ? n = " (" + Math.round(o / 36e5) + "小时前)" : o > 6e4 && o < 36e5 && (n = " (" + Math.round(o / 6e4) + "分钟前)"), $("#sidebar .dialog-box:first").find(".sentTime:last").append(n)
//        },
//        _registerSend: function () {
//            $("#sidebar #send").click(function () {
//                window.JSG_CHAT._handleSend()
//            }), $("#sidebar #mainContent").keyup(function (e) {
//                13 == e.keyCode && window.JSG_CHAT._handleSend()
//            })
//        },
//        _handleSend: function () {
//            var e = this,
//                    t = $("#sidebar #mainContent").val();
//            if ("" != t) {
//                if (void 0 != window.JSG_CHAT.leastSendTime && (new Date).getTime() - window.JSG_CHAT.leastSendTime < 1e4)
//                    return void alert("请不要频繁发送消息! ");
//                if (console.log("上一条消息:", window.JSG_CHAT.leastMsg), void 0 != window.JSG_CHAT.leastMsg && window.JSG_CHAT.leastMsg == t && (new Date).getTime() - window.JSG_CHAT.leastSendTime < 18e4)
//                    return void alert("请不要频繁发送同一条消息!");
//                if (t.length > 40)
//                    return void alert("聊天内容不能超过40个字！");
//                var n = new RongIMLib.TextMessage({
//                    content: e.htmlEncodeJQ($("#sidebar #mainContent").val()),
//                    extra: "附加信息"
//                });
//                $("#sidebar #mainContent").val(""), $("#sidebar #mainContent").focus();
//                var o = RongIMLib.ConversationType.CHATROOM,
//                        i = window.JSG_CHAT.Config.chatRoomId,
//                        r = RongIMClient.getInstance();
//                r.sendMessage(o, i, n, {
//                    onSuccess: function (e) {
//                        console.log("Send successfully"), window.JSG_CHAT.leastSendTime = (new Date).getTime(), window.JSG_CHAT.leastMsg = t, window.JSG_CHAT._addMessage(e, !0)
//                    },
//                    onError: function (e, t) {
//                        console.log("message:", t);
//                        var n = "";
//                        switch (23408 == e && alert("您已被禁言,请不要发布不良信息或广告"), e) {
//                            case RongIMLib.ErrorCode.TIMEOUT:
//                                n = "超时";
//                                break;
//                            case RongIMLib.ErrorCode.UNKNOWN_ERROR:
//                                n = "未知错误";
//                                break;
//                            case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
//                                n = "在黑名单中，无法向对方发送消息";
//                                break;
//                            case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
//                                n = "不在讨论组中";
//                                break;
//                            case RongIMLib.ErrorCode.NOT_IN_GROUP:
//                                n = "不在群组中";
//                                break;
//                            case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
//                                n = "不在聊天室中";
//                                break;
//                            default:
//                                n = x
//                        }
//                        console.log("发送失败:" + n)
//                    }
//                })
//            }
//        },
//        htmlEncodeJQ: function (e) {
//            return $("<span/>").text(e).html()
//        },
//        htmlDecodeJQ: function (e) {
//            return $("<span/>").html(e).text()
//        }
//    };
})()