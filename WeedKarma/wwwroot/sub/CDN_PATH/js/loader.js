(function() {
    var e, n, t, i, o, r, s, c, a, d;
    e = window.device, window.device = {}, t = window.document.documentElement, d = window.navigator.userAgent.toLowerCase(), device.ios = function() {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function() {
        return i("iphone")
    }, device.ipod = function() {
        return i("ipod")
    }, device.ipad = function() {
        return i("ipad")
    }, device.android = function() {
        return i("android")
    }, device.androidPhone = function() {
        return device.android() && i("mobile")
    }, device.androidTablet = function() {
        return device.android() && !i("mobile")
    }, device.blackberry = function() {
        return i("blackberry") || i("bb10") || i("rim")
    }, device.blackberryPhone = function() {
        return device.blackberry() && !i("tablet")
    }, device.blackberryTablet = function() {
        return device.blackberry() && i("tablet")
    }, device.windows = function() {
        return i("windows")
    }, device.windowsPhone = function() {
        return device.windows() && i("phone")
    }, device.windowsTablet = function() {
        return device.windows() && i("touch") && !device.windowsPhone()
    }, device.fxos = function() {
        return (i("(mobile;") || i("(tablet;")) && i("; rv:")
    }, device.fxosPhone = function() {
        return device.fxos() && i("mobile")
    }, device.fxosTablet = function() {
        return device.fxos() && i("tablet")
    }, device.meego = function() {
        return i("meego")
    }, device.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }, device.nodeWebkit = function() {
        return "object" == typeof window.process
    }, device.mobile = function() {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
    }, device.tablet = function() {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.desktop = function() {
        return !device.tablet() && !device.mobile()
    }, device.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    }, device.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    }, device.noConflict = function() {
        return window.device = e, this
    }, i = function(e) {
        return -1 !== d.indexOf(e)
    }, r = function(e) {
        var n;
        return n = new RegExp(e, "i"), t.className.match(n)
    }, n = function(e) {
        return r(e) ? void 0 : t.className += " " + e
    }, c = function(e) {
        return r(e) ? t.className = t.className.replace(e, "") : void 0
    }, device.ios() ? device.ipad() ? n("ios ipad tablet") : device.iphone() ? n("ios iphone mobile") : device.ipod() && n("ios ipod mobile") : n(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && n("cordova"), o = function() {
        return device.landscape() ? (c("portrait"), n("landscape")) : (c("landscape"), n("portrait"))
    }, a = "onorientationchange" in window, s = a ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(s, o, !1) : window.attachEvent ? window.attachEvent(s, o) : window[s] = o, o()
}).call(this), define("libs/device", function(e) {
    return function() {
        var n;
        return n || e.device
    }}(this)), define("config", ["modernizr", "libs/device"], function(e, n) {
    var t;
    switch (window.location.hostname.indexOf("www.vteam.am")) {
        case -1:
            switch (0 === window.location.hostname.indexOf("192.168") && (t = "local"), (0 === window.location.hostname.indexOf("www.resn.co.nz") || 0 === window.location.hostname.indexOf("resn.co.nz")) && (t = "local"),
                window.location.hostname) {
                case "www.su.am":
                case "0.0.0.0":
                case "localhost":
                    t = "frozen_local";
                    break;
                case "":
                    t = "frozen_staging"
            }
            break;
        default:
            t = "subaru"
    }

    var i = {
        SITE_URL: "http://",
        APP_URL: "",
        ENV: t,
        CDN_PATH: {
            testing: "CDN_PATH",
            local: "CDN_PATH",
            frozen_local: "sub/CDN_PATH",
            staging: "CDN_PATH",
            frozen_staging: "CDN_PATH",
            subaru: "/etc/designs/subaru/environment/app"
        },
        STRUCTURE_JSON: {
            testing: "CDN_PATH/data/tree_structure.json",
            local: "proxy.php?url=http%3A%2F%2Fwww.subaru.com%2Fcontent%2Fsubaru%2Fen%2Fcsr%2Fenvironment.years.html",
            frozen_local: "sub/CDN_PATH/data/frozen/structure.json",
            frozen_staging: "CDN_PATH/data/frozen/structure.json",
            staging: "proxy.php?url=http%3A%2F%2Fwww.subaru.com%2Fcontent%2Fsubaru%2Fen%2Fcsr%2Fenvironment.years.html",
            subaru: "/content/subaru/en/csr/environment.years.html"
        },
        ARCHIVE_JSON: {
            testing: "CDN_PATH/data/tree_archive.json",
            local: "proxy.php?url=http%3A%2F%2Fwww.subaru.com%2Fcontent%2Fsubaru%2Fen%2Fcsr%2Fenvironment.archive.html",
            frozen_local: "sub/CDN_PATH/data/frozen/archive.json",
            frozen_staging: "CDN_PATH/data/frozen/archive.json",
            staging: "proxy.php?url=http%3A%2F%2Fwww.subaru.com%2Fcontent%2Fsubaru%2Fen%2Fcsr%2Fenvironment.archive.html",
            subaru: "/content/subaru/en/csr/environment.archive.html"
        },
        YEAR_JSON: {
            testing: "CDN_PATH/data/tree_",
            local: "proxy.php?url=http%3A%2F%2Fwww.subaru.com%2Fcontent%2Fsubaru%2Fen%2Fcsr%2Fenvironment.months.html%3Fyear%3D",
            frozen_local: "sub/CDN_PATH/data/frozen/year_",
            frozen_staging: "CDN_PATH/data/frozen/year_",
            staging: "proxy.php?url=http%3A%2F%2Fwww.subaru.com%2Fcontent%2Fsubaru%2Fen%2Fcsr%2Fenvironment.months.html%3Fyear%3D",
            subaru: "/content/subaru/en/csr/environment.months.html?year="
        },
        FACEBOOK_APP_IDS: {
            testing: "1603917593205079",
            local: "1603917593205079",
            frozen_local: "",
            frozen_staging: "1603917593205079",
            staging: "1603917899871715",
            subaru: "1603917476538424"
        },
        SITE_URLS: {
            testing: {
                mobile: "http://www.su.am/index_mobile.html",
                desktop:"http://vteam.am/subaru"
                //desktop: "http://localhost/sub.am"
            },
            local: {
                mobile: "http://" + window.location.host + "/index_mobile.html",
                desktop: "http://" + window.location.host
            },
            frozen_local: {
                mobile: "http://" + window.location.host + "/index_mobile.html",
                desktop: "http://" + window.location.host
            },
            frozen_staging: {
                mobile: "http://" + window.location.host + "/index_mobile.html",
                desktop: "http://" + window.location.host
            },
            staging: {
                mobile: "http://www.su.am/index_mobile.html",
                desktop:"http://www.su.am"
                //desktop: "http://localhost/sub.am"
            },
            subaru: {
                mobile: "http://" + window.location.hostname + "/mobile/csr/environment.html",
                desktop: "http://" + window.location.hostname + "/csr/environment.html"
            }
        },
         FORM_ENDPOINT: "/services/contact/updatesignup",
        SUGGESTION_ENDPOINT: "/services/contact/comments",
        csstransforms: e.csstransforms,
        csstransforms3d: e.csstransforms3d,
        OLD_DESKTOP: !e.csstransforms,
        MOBILE: n.mobile(),
        TABLET: n.tablet(),
        IOS: n.ios(),
        ANDROID: n.android(),
        HI_DPI: window.devicePixelRatio > 1,
        FLOWS: {
            BASIC: "BASIC",
            EXTENDED: "EXTENDED",
            MOBILE: "MOBILE",
            TABLET: "TABLET"
        },
        FLOW: "none",
        MONTH_NAME: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        FLASH_VESRION: "11.0.0",
        IE_VERSION: null,
        FIREFOX: -1 !== navigator.userAgent.toLocaleLowerCase().indexOf("firefox"),
        getIEversion: function() {
            var e = /MSIE 9/i.test(navigator.userAgent),
                n = /MSIE 10/i.test(navigator.userAgent),
                t = /rv:11.0/i.test(navigator.userAgent);
            return e ? 9 : n ? 10 : t ? 11 : null
        },

        FLASH: null,
        FLASH_BYPASS: window.location.href.match(/bypass/),
        getFBID: function() {
            return this.FACEBOOK_APP_IDS[this.ENV]
        },

        getSiteUrl: function() {
            return this.MOBILE ? this.SITE_URLS[this.ENV].mobile : this.SITE_URLS[this.ENV].desktop
        },
        getCdnPath: function() {
            return this.CDN_PATH[this.ENV]
        },
        getStructureJsonPath: function() {
            return this.STRUCTURE_JSON[this.ENV]
        },
        getArchiveJsonPath: function() {
            return this.ARCHIVE_JSON[this.ENV]
        },

        getYearJsonPath: function() {
            return this.YEAR_JSON[this.ENV]
        },
        GA: {
            testing: "UA-11345405-1",
            local: "UA-11345405-1",
            staging: "UA-11345405-1",
            frozen_staging: "UA-11345405-1",
            subaru: "UA-11345405-1"
        },
        getAnalytics: function() {
            return this.GA[this.ENV]
        }
    };
    return i.CDN = i.getCdnPath(), i.STRUCTURE_JSON = i.getStructureJsonPath(), i.ARCHIVE_JSON = i.getArchiveJsonPath(), i.YEAR_JSON = i.getYearJsonPath(), i.SITE_URL = i.getSiteUrl(), i.BASE_URL = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1), i.IE_VERSION = i.getIEversion(), i
}), require.config({
    paths: {
        jquery: "libs/jquery-2.1.3",
        underscore: "libs/underscore",
        backbone: "libs/backbone",
        handlebars: "libs/handlebars-v3.0.0",
        text: "libs/text",
        TweenMax: "libs/greensock/TweenMax.min",
        TweenLite: "libs/greensock/TweenLite.min",
        TimelineLite: "libs/greensock/TimelineLite.min",
        TimelineMax: "libs/greensock/TimelineMax.min",
        draggable: "libs/greensock/utils/Draggable.min",
        curve: "libs/curve.min",
        console: "util/debugger",
        modernizr: "empty:",
        sylvester: "libs/sylvester-min",
        hammerjs: "libs/hammer.min",
        "hammer-jquery": "libs/jquery.hammer",
        createjs: "shims/shim_createjs",
        "libs/createjs/preloadjs": "libs/createjs/preloadjs-0.6.0.combined"
    },
    shim: {
        "libs/console-shim": {
            exports: "console"
        },
        jquery: {
            exports: "jQuery"
        },
        sylvester: {
            exports: "$M"
        },
        "libs/device": {
            exports: "device"
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        handlebars: {
            exports: "handlebars"
        },
        curve: {
            exports: "curve"
        },
        console: {
            exports: "console"
        },
        "libs/mocha": {
            exports: "mocha"
        },
        "libs/expect": {
            exports: "expect"
        }
    },
    waitSeconds: 0
}), define("modernizr", [], function() {
    return window.Modernizr
}), require(["config"], function(e) {
    function n(e) {
        for (var n = document.getElementsByTagName("head")[0], t = 0; t < e.length; t++) {
            var i = document.createElement("link");
            i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", e[t]), n.appendChild(i)
        }
    }
  var t = [],
        i = [],
        o = null;
    if (e.MOBILE) e.FLOW = e.FLOWS.MOBILE, i.push(e.CDN + "/css/all_mobile.css"), t.push("main_mobile");
    else {
        if (e.OLD_DESKTOP) return e.FLOW = e.FLOWS.BASIC, i.push(e.CDN + "/css/all.css"), n(i), document.getElementById("unsupported").style.display = "block", void(document.getElementsByTagName("body")[0].style.display = "block");
        e.TABLET ? (e.FLOW = e.FLOWS.TABLET, i.push(e.CDN + "/css/all.css"), t.push("main_desktop_extended")) : (e.FLOW = e.FLOWS.EXTENDED, i.push(e.CDN + "/css/all.css"), t.push("main_desktop_extended"))
    }
    window.location.toString().indexOf("?testing") > -1 && (o = "tests/mocha"), n(i), require(t, function(e) {
        o ? require([o], function(n) {
            e.start(), n.run()
        }) : e.start();
    })
}), define("loader", function() {});