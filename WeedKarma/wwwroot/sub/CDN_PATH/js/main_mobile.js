/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */

//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */

/*!
 *     Backbone.js 1.1.0

 *     (c) 2010-2011 Jeremy Ashkenas, DocumentCloud Inc.
 *     (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *     Backbone may be freely distributed under the MIT license.
 *     For all details and documentation:
 *     http://backbonejs.org
 */

/**
 * @preserve console-shim 1.0.2
 * https://github.com/kayahr/console-shim
 * Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */

/*!
 * PreloadJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2010 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */

/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

/*!

 handlebars v3.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/

// === Sylvester ===
// Vector and Matrix mathematics modules for JavaScript
// Copyright (c) 2007 James Coglan
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

// MIT license

! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = Z.type(t);
        return "function" === i || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (Z.isFunction(e)) return Z.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return Z.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (ot.test(e)) return Z.filter(e, t, i);
            e = Z.filter(e, t)
        }
        return Z.grep(t, function(t) {
            return G.call(e, t) >= 0 !== i
        })
    }

    function s(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function r(t) {
        var e = ft[t] = {};
        return Z.each(t.match(pt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function a() {
        Q.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), Z.ready()
    }

    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + o.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(bt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : yt.test(i) ? Z.parseJSON(i) : i
                } catch (s) {}
                _t.set(t, e, i)
            } else i = void 0;
        return i
    }

    function h() {
        return !0
    }

    function c() {
        return !1
    }

    function u() {
        try {
            return Q.activeElement
        } catch (t) {}
    }

    function d(t, e) {
        return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function f(t) {
        var e = Dt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
    }

    function m(t, e) {
        var i, n, s, r, a, o, l, h;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (r = vt.access(t), a = vt.set(e, r), h = r.events)) {
                delete a.handle, a.events = {};
                for (s in h)
                    for (i = 0, n = h[s].length; n > i; i++) Z.event.add(e, s, h[s][i])
            }
            _t.hasData(t) && (o = _t.access(t), l = Z.extend({}, o), _t.set(e, l))
        }
    }

    function v(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], i) : i
    }

    function _(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && St.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function y(e, i) {
        var n, s = Z(i.createElement(e)).appendTo(i.body),
            r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : Z.css(s[0], "display");
        return s.detach(), r
    }

    function b(t) {
        var e = Q,
            i = Bt[t];
        return i || (i = y(t, e), "none" !== i && i || (Ft = (Ft || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ft[0].contentDocument, e.write(), e.close(), i = y(t, e), Ft.detach()), Bt[t] = i), i
    }

    function w(t, e, i) {
        var n, s, r, a, o = t.style;
        return i = i || Vt(t), i && (a = i.getPropertyValue(e) || i[e]), i && ("" !== a || Z.contains(t.ownerDocument, t) || (a = Z.style(t, e)), qt.test(a) && Ht.test(e) && (n = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function x(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, s = Wt.length; s--;)
            if (e = Wt[s] + i, e in t) return e;
        return n
    }

    function S(t, e, i) {
        var n = Yt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function k(t, e, i, n, s) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === i && (a += Z.css(t, i + xt[r], !0, s)), n ? ("content" === i && (a -= Z.css(t, "padding" + xt[r], !0, s)), "margin" !== i && (a -= Z.css(t, "border" + xt[r] + "Width", !0, s))) : (a += Z.css(t, "padding" + xt[r], !0, s), "padding" !== i && (a += Z.css(t, "border" + xt[r] + "Width", !0, s)));
        return a
    }

    function E(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = Vt(t),
            a = "border-box" === Z.css(t, "boxSizing", !1, r);
        if (0 >= s || null == s) {
            if (s = w(t, e, r), (0 > s || null == s) && (s = t.style[e]), qt.test(s)) return s;
            n = a && (J.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + k(t, e, i || (a ? "border" : "content"), n, r) + "px"
    }

    function P(t, e) {
        for (var i, n, s, r = [], a = 0, o = t.length; o > a; a++) n = t[a], n.style && (r[a] = vt.get(n, "olddisplay"), i = n.style.display, e ? (r[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (r[a] = vt.access(n, "olddisplay", b(n.nodeName)))) : (s = Tt(n), "none" === i && s || vt.set(n, "olddisplay", s ? i : Z.css(n, "display"))));
        for (a = 0; o > a; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[a] || "" : "none"));
        return t
    }

    function A(t, e, i, n, s) {
        return new A.prototype.init(t, e, i, n, s)
    }

    function C() {
        return setTimeout(function() {
            Jt = void 0
        }), Jt = Z.now()
    }

    function j(t, e) {
        var i, n = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xt[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function L(t, e, i) {
        for (var n, s = (ie[e] || []).concat(ie["*"]), r = 0, a = s.length; a > r; r++)
            if (n = s[r].call(i, e, t)) return n
    }

    function O(t, e, i) {
        var n, s, r, a, o, l, h, c, u = this,
            d = {},
            p = t.style,
            f = t.nodeType && Tt(t),
            g = vt.get(t, "fxshow");
        i.queue || (o = Z._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
            o.unqueued || l()
        }), o.unqueued++, u.always(function() {
            u.always(function() {
                o.unqueued--, Z.queue(t, "fx").length || o.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = Z.css(t, "display"), c = "none" === h ? vt.get(t, "olddisplay") || b(t.nodeName) : h, "inline" === c && "none" === Z.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (s = e[n], Kt.exec(s)) {
                if (delete e[n], r = r || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || Z.style(t, n)
            } else h = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === h ? b(t.nodeName) : h) && (p.display = h);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = vt.access(t, "fxshow", {}), r && (g.hidden = !f), f ? Z(t).show() : u.done(function() {
                Z(t).hide()
            }), u.done(function() {
                var e;
                vt.remove(t, "fxshow");
                for (e in d) Z.style(t, e, d[e])
            });
            for (n in d) a = L(f ? g[n] : 0, n, u), n in g || (g[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function I(t, e) {
        var i, n, s, r, a;
        for (i in t)
            if (n = Z.camelCase(i), s = e[n], r = t[i], Z.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), a = Z.cssHooks[n], a && "expand" in a) {
                r = a.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = s)
            } else e[n] = s
    }

    function $(t, e, i) {
        var n, s, r = 0,
            a = ee.length,
            o = Z.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Jt || C(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, r = 1 - n, a = 0, l = h.tweens.length; l > a; a++) h.tweens[a].run(r);
                return o.notifyWith(t, [h, r, i]), 1 > r && l ? i : (o.resolveWith(t, [h]), !1)
            },
            h = o.promise({
                elem: t,
                props: Z.extend({}, e),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Jt || C(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = Z.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) h.tweens[i].run(1);
                    return e ? o.resolveWith(t, [h, e]) : o.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (I(c, h.opts.specialEasing); a > r; r++)
            if (n = ee[r].call(h, t, c, h.opts)) return n;
        return Z.map(c, L, h), Z.isFunction(h.opts.start) && h.opts.start.call(t, h), Z.fx.timer(Z.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function R(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                r = e.toLowerCase().match(pt) || [];
            if (Z.isFunction(i))
                for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function D(t, e, i, n) {
        function s(o) {
            var l;
            return r[o] = !0, Z.each(t[o] || [], function(t, o) {
                var h = o(e, i, n);
                return "string" != typeof h || a || r[h] ? a ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }), l
        }
        var r = {},
            a = t === ye;
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function M(t, e) {
        var i, n, s = Z.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && Z.extend(!0, t, n), t
    }

    function N(t, e, i) {
        for (var n, s, r, a, o = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (s in o)
                if (o[s] && o[s].test(n)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                a || (a = s)
            }
            r = r || a
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function F(t, e, i, n) {
        var s, r, a, o, l, h = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (a = h[l + " " + r] || h["* " + r], !a)
                for (s in h)
                    if (o = s.split(" "), o[1] === r && (a = h[l + " " + o[0]] || h["* " + o[0]])) {
                        a === !0 ? a = h[s] : h[s] !== !0 && (r = o[0], c.unshift(o[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: a ? u : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function B(t, e, i, n) {
        var s;
        if (Z.isArray(e)) Z.each(e, function(e, s) {
            i || Se.test(t) ? n(t, s) : B(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== Z.type(e)) n(t, e);
        else
            for (s in e) B(t + "[" + s + "]", e[s], i, n)
    }

    function H(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var q = [],
        V = q.slice,
        z = q.concat,
        Y = q.push,
        G = q.indexOf,
        X = {},
        U = X.toString,
        W = X.hasOwnProperty,
        J = {},
        Q = t.document,
        K = "2.1.3",
        Z = function(t, e) {
            return new Z.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        it = /-([\da-z])/gi,
        nt = function(t, e) {
            return e.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        },
        pushStack: function(t) {
            var e = Z.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return Z.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(Z.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: q.sort,
        splice: q.splice
    }, Z.extend = Z.fn.extend = function() {
        var t, e, i, n, s, r, a = arguments[0] || {},
            o = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof a && (h = a, a = arguments[o] || {}, o++), "object" == typeof a || Z.isFunction(a) || (a = {}), o === l && (a = this, o--); l > o; o++)
            if (null != (t = arguments[o]))
                for (e in t) i = a[e], n = t[e], a !== n && (h && n && (Z.isPlainObject(n) || (s = Z.isArray(n))) ? (s ? (s = !1, r = i && Z.isArray(i) ? i : []) : r = i && Z.isPlainObject(i) ? i : {}, a[e] = Z.extend(h, r, n)) : void 0 !== n && (a[e] = n));
        return a
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === Z.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !W.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[U.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(it, nt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s, r = 0,
                a = t.length,
                o = i(t);
            if (n) {
                if (o)
                    for (; a > r && (s = e.apply(t[r], n), s !== !1); r++);
                else
                    for (r in t)
                        if (s = e.apply(t[r], n), s === !1) break
            } else if (o)
                for (; a > r && (s = e.call(t[r], r, t[r]), s !== !1); r++);
            else
                for (r in t)
                    if (s = e.call(t[r], r, t[r]), s === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? Z.merge(n, "string" == typeof t ? [t] : t) : Y.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : G.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n, s = [], r = 0, a = t.length, o = !i; a > r; r++) n = !e(t[r], r), n !== o && s.push(t[r]);
            return s
        },
        map: function(t, e, n) {
            var s, r = 0,
                a = t.length,
                o = i(t),
                l = [];
            if (o)
                for (; a > r; r++) s = e(t[r], r, n), null != s && l.push(s);
            else
                for (r in t) s = e(t[r], r, n), null != s && l.push(s);
            return z.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (i = t[e], e = t, t = i), Z.isFunction(t) ? (n = V.call(arguments, 2), s = function() {
                return t.apply(e || this, n.concat(V.call(arguments)))
            }, s.guid = t.guid = t.guid || Z.guid++, s) : void 0
        },
        now: Date.now,
        support: J
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        X["[object " + e + "]"] = e.toLowerCase()
    });
    var st = function(t) {
        function e(t, e, i, n) {
            var s, r, a, o, l, h, u, p, f, g;
            if ((e ? e.ownerDocument || e : B) !== O && L(e), e = e || O, i = i || [], o = e.nodeType, "string" != typeof t || !t || 1 !== o && 9 !== o && 11 !== o) return i;
            if (!n && $) {
                if (11 !== o && (s = _t.exec(t)))
                    if (a = s[1]) {
                        if (9 === o) {
                            if (r = e.getElementById(a), !r || !r.parentNode) return i;
                            if (r.id === a) return i.push(r), i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && N(e, r) && r.id === a) return i.push(r), i
                    } else {
                        if (s[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((a = s[3]) && w.getElementsByClassName) return K.apply(i, e.getElementsByClassName(a)), i
                    }
                if (w.qsa && (!R || !R.test(t))) {
                    if (p = u = F, f = e, g = 1 !== o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                        for (h = k(t), (u = e.getAttribute("id")) ? p = u.replace(bt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                        f = yt.test(t) && c(e.parentNode) || e, g = h.join(",")
                    }
                    if (g) try {
                        return K.apply(i, f.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(lt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[F] = !0, t
        }

        function s(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
        }

        function a(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function o(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function h(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, r = t([], i.length, e), a = r.length; a--;) i[s = r[a]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function u() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                r = q++;
            return e.first ? function(e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s) return t(e, i, r)
            } : function(e, i, a) {
                var o, l, h = [H, r];
                if (a) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, a)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) {
                            if (l = e[F] || (e[F] = {}), (o = l[n]) && o[0] === H && o[1] === r) return h[2] = o[2];
                            if (l[n] = h, h[2] = t(e, i, a)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var s = 0, r = i.length; r > s; s++) e(t, i[s], n);
            return n
        }

        function m(t, e, i, n, s) {
            for (var r, a = [], o = 0, l = t.length, h = null != e; l > o; o++)(r = t[o]) && (!i || i(r, n, s)) && (a.push(r), h && e.push(o));
            return a
        }

        function v(t, e, i, s, r, a) {
            return s && !s[F] && (s = v(s)), r && !r[F] && (r = v(r, a)), n(function(n, a, o, l) {
                var h, c, u, d = [],
                    p = [],
                    f = a.length,
                    v = n || g(e || "*", o.nodeType ? [o] : o, []),
                    _ = !t || !n && e ? v : m(v, d, t, o, l),
                    y = i ? r || (n ? t : f || s) ? [] : a : _;
                if (i && i(_, y, o, l), s)
                    for (h = m(y, p), s(h, [], o, l), c = h.length; c--;)(u = h[c]) && (y[p[c]] = !(_[p[c]] = u));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (h = [], c = y.length; c--;)(u = y[c]) && h.push(_[c] = u);
                            r(null, y = [], h, l)
                        }
                        for (c = y.length; c--;)(u = y[c]) && (h = r ? tt(n, u) : d[c]) > -1 && (n[h] = !(a[h] = u))
                    }
                } else y = m(y === a ? y.splice(f, y.length) : y), r ? r(null, a, y, l) : K.apply(a, y)
            })
        }

        function _(t) {
            for (var e, i, n, s = t.length, r = x.relative[t[0].type], a = r || x.relative[" "], o = r ? 1 : 0, l = p(function(t) {
                    return t === e
                }, a, !0), h = p(function(t) {
                    return tt(e, t) > -1
                }, a, !0), c = [function(t, i, n) {
                    var s = !r && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                    return e = null, s
                }]; s > o; o++)
                if (i = x.relative[t[o].type]) c = [p(f(c), i)];
                else {
                    if (i = x.filter[t[o].type].apply(null, t[o].matches), i[F]) {
                        for (n = ++o; s > n && !x.relative[t[n].type]; n++);
                        return v(o > 1 && f(c), o > 1 && d(t.slice(0, o - 1).concat({
                            value: " " === t[o - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, n > o && _(t.slice(o, n)), s > n && _(t = t.slice(n)), s > n && d(t))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function y(t, i) {
            var s = i.length > 0,
                r = t.length > 0,
                a = function(n, a, o, l, h) {
                    var c, u, d, p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        _ = A,
                        y = n || r && x.find.TAG("*", h),
                        b = H += null == _ ? 1 : Math.random() || .1,
                        w = y.length;
                    for (h && (A = a !== O && a); f !== w && null != (c = y[f]); f++) {
                        if (r && c) {
                            for (u = 0; d = t[u++];)
                                if (d(c, a, o)) {
                                    l.push(c);
                                    break
                                }
                            h && (H = b)
                        }
                        s && ((c = !d && c) && p--, n && g.push(c))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; d = i[u++];) d(g, v, a, o);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = J.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return h && (H = b, A = _), g
                };
            return s ? n(a) : a
        }
        var b, w, x, T, S, k, E, P, A, C, j, L, O, I, $, R, D, M, N, F = "sizzle" + 1 * new Date,
            B = t.document,
            H = 0,
            q = 0,
            V = i(),
            z = i(),
            Y = i(),
            G = function(t, e) {
                return t === e && (j = !0), 0
            },
            X = 1 << 31,
            U = {}.hasOwnProperty,
            W = [],
            J = W.pop,
            Q = W.push,
            K = W.push,
            Z = W.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            st = nt.replace("w", "w#"),
            rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + it + "*\\]",
            at = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            ot = new RegExp(it + "+", "g"),
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ht = new RegExp("^" + it + "*," + it + "*"),
            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            dt = new RegExp(at),
            pt = new RegExp("^" + st + "$"),
            ft = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            xt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Tt = function() {
                L()
            };
        try {
            K.apply(W = Z.call(B.childNodes), B.childNodes), W[B.childNodes.length].nodeType
        } catch (St) {
            K = {
                apply: W.length ? function(t, e) {
                    Q.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, L = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : B;
            return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, I = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), $ = !S(n), w.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = s(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName), w.getById = s(function(t) {
                return I.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && $) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                return $ ? e.getElementsByClassName(t) : void 0
            }, D = [], R = [], (w.qsa = vt.test(n.querySelectorAll)) && (s(function(t) {
                I.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || R.push(".#.+[+~]")
            }), s(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
            })), (w.matchesSelector = vt.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && s(function(t) {
                w.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), D.push("!=", at)
            }), R = R.length && new RegExp(R.join("|")), D = D.length && new RegExp(D.join("|")), e = vt.test(I.compareDocumentPosition), N = e || vt.test(I.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, G = e ? function(t, e) {
                if (t === e) return j = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && N(B, t) ? -1 : e === n || e.ownerDocument === B && N(B, e) ? 1 : C ? tt(C, t) - tt(C, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return j = !0, 0;
                var i, s = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    l = [t],
                    h = [e];
                if (!r || !o) return t === n ? -1 : e === n ? 1 : r ? -1 : o ? 1 : C ? tt(C, t) - tt(C, e) : 0;
                if (r === o) return a(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) h.unshift(i);
                for (; l[s] === h[s];) s++;
                return s ? a(l[s], h[s]) : l[s] === B ? -1 : h[s] === B ? 1 : 0
            }, n) : O
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== O && L(t), i = i.replace(ut, "='$1']"), !(!w.matchesSelector || !$ || D && D.test(i) || R && R.test(i))) try {
                var n = M.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {}
            return e(i, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && L(t), N(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && L(t);
            var i = x.attrHandle[e.toLowerCase()],
                n = i && U.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
            return void 0 !== n ? n : w.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (j = !w.detectDuplicates, C = !w.sortStable && t.slice(0), t.sort(G), j) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return C = null, t
        }, T = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += T(e);
            return i
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = V[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && V(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var r = e.attr(s, t);
                        return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var r = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        o = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var h, c, u, d, p, f, g = r !== a ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = o && e.nodeName.toLowerCase(),
                            _ = !l && !o;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? m.firstChild : m.lastChild], a && _) {
                                for (c = m[F] || (m[F] = {}), h = c[t] || [], p = h[0] === H && h[1], d = h[0] === H && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++d && u === e) {
                                        c[t] = [H, p, d];
                                        break
                                    }
                            } else if (_ && (h = (e[F] || (e[F] = {}))[t]) && h[0] === H) d = h[1];
                            else
                                for (;
                                    (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((o ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (_ && ((u[F] || (u[F] = {}))[t] = [H, d]), u !== e)););
                            return d -= s, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[F] ? r(i) : r.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = r(t, i), a = s.length; a--;) n = tt(t, s[a]), t[n] = !(e[n] = s[a])
                    }) : function(t) {
                        return r(t, 0, s)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = E(t.replace(lt, "$1"));
                    return s[F] ? n(function(t, e, i, n) {
                        for (var r, a = s(t, null, n, []), o = t.length; o--;)(r = a[o]) && (t[o] = !(e[o] = r))
                    }) : function(t, n, r) {
                        return e[0] = t, s(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(wt, xt),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === I
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return gt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(t, e) {
                    return [e - 1]
                }),
                eq: h(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: h(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: h(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[b] = o(b);
        for (b in {
                submit: !0,
                reset: !0
            }) x.pseudos[b] = l(b);
        return u.prototype = x.filters = x.pseudos, x.setFilters = new u, k = e.tokenize = function(t, i) {
            var n, s, r, a, o, l, h, c = z[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (o = t, l = [], h = x.preFilter; o;) {
                (!n || (s = ht.exec(o))) && (s && (o = o.slice(s[0].length) || o), l.push(r = [])), n = !1, (s = ct.exec(o)) && (n = s.shift(), r.push({
                    value: n,
                    type: s[0].replace(lt, " ")
                }), o = o.slice(n.length));
                for (a in x.filter) !(s = ft[a].exec(o)) || h[a] && !(s = h[a](s)) || (n = s.shift(), r.push({
                    value: n,
                    type: a,
                    matches: s
                }), o = o.slice(n.length));
                if (!n) break
            }
            return i ? o.length : o ? e.error(t) : z(t, l).slice(0)
        }, E = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                r = Y[t + " "];
            if (!r) {
                for (e || (e = k(t)), i = e.length; i--;) r = _(e[i]), r[F] ? n.push(r) : s.push(r);
                r = Y(t, y(s, n)), r.selector = t
            }
            return r
        }, P = e.select = function(t, e, i, n) {
            var s, r, a, o, l, h = "function" == typeof t && t,
                u = !n && k(t = h.selector || t);
            if (i = i || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === e.nodeType && $ && x.relative[r[1].type]) {
                    if (e = (x.find.ID(a.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                    h && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (s = ft.needsContext.test(t) ? 0 : r.length; s-- && (a = r[s], !x.relative[o = a.type]);)
                    if ((l = x.find[o]) && (n = l(a.matches[0].replace(wt, xt), yt.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(s, 1), t = n.length && d(r), !t) return K.apply(i, n), i;
                        break
                    }
            }
            return (h || E(t, u))(n, e, !$, i, yt.test(t) && c(e.parentNode) || e), i
        }, w.sortStable = F.split("").sort(G).join("") === F, w.detectDuplicates = !!j, L(), w.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    Z.find = st, Z.expr = st.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = st.uniqueSort, Z.text = st.getText, Z.isXMLDoc = st.isXML, Z.contains = st.contains;
    var rt = Z.expr.match.needsContext,
        at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ot = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? Z.find.matchesSelector(n, t) ? [n] : [] : Z.find.matches(t, Z.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, Z.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                s = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (Z.contains(s[e], this)) return !0
            }));
            for (e = 0; i > e; e++) Z.find(t, s[e], n);
            return n = this.pushStack(i > 1 ? Z.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && rt.test(t) ? Z(t) : t || [], !1).length
        }
    });
    var lt, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = Z.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ht.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), at.test(i[1]) && Z.isPlainObject(e))
                        for (i in e) Z.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return n = Q.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        };
    ct.prototype = Z.fn, lt = Z(Q);
    var ut = /^(?:parents|prev(?:Until|All))/,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && Z(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, r = [], a = rt.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && Z.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? Z.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? G.call(Z(t), this[0]) : G.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), Z.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Z.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return Z.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return Z.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Z.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return Z.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return Z.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return Z.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || Z.merge([], t.childNodes)
        }
    }, function(t, e) {
        Z.fn[t] = function(i, n) {
            var s = Z.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = Z.filter(n, s)), this.length > 1 && (dt[t] || Z.unique(s), ut.test(t) && s.reverse()), this.pushStack(s)
        }
    });
    var pt = /\S+/g,
        ft = {};
    Z.Callbacks = function(t) {
        t = "string" == typeof t ? ft[t] || r(t) : Z.extend({}, t);
        var e, i, n, s, a, o, l = [],
            h = !t.once && [],
            c = function(r) {
                for (e = t.memory && r, i = !0, o = s || 0, s = 0, a = l.length, n = !0; l && a > o; o++)
                    if (l[o].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1, l && (h ? h.length && c(h.shift()) : e ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(e) {
                            Z.each(e, function(e, i) {
                                var n = Z.type(i);
                                "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                            })
                        }(arguments), n ? a = l.length : e && (s = i, c(e))
                    }
                    return this
                },
                remove: function() {
                    return l && Z.each(arguments, function(t, e) {
                        for (var i;
                            (i = Z.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (a >= i && a--, o >= i && o--)
                    }), this
                },
                has: function(t) {
                    return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = h = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return h = void 0, e || u.disable(), this
                },
                locked: function() {
                    return !h
                },
                fireWith: function(t, e) {
                    return !l || i && !h || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? h.push(e) : c(e)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, Z.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return Z.Deferred(function(i) {
                            Z.each(e, function(e, r) {
                                var a = Z.isFunction(t[e]) && t[e];
                                s[r[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Z.extend(t, n) : n
                    }
                },
                s = {};
            return n.pipe = n.then, Z.each(e, function(t, r) {
                var a = r[2],
                    o = r[3];
                n[r[1]] = a.add, o && a.add(function() {
                    i = o
                }, e[1 ^ t][2].disable, e[2][2].lock), s[r[0]] = function() {
                    return s[r[0] + "With"](this === s ? n : this, arguments), this
                }, s[r[0] + "With"] = a.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                r = V.call(arguments),
                a = r.length,
                o = 1 !== a || t && Z.isFunction(t.promise) ? a : 0,
                l = 1 === o ? t : Z.Deferred(),
                h = function(t, i, n) {
                    return function(s) {
                        i[t] = this, n[t] = arguments.length > 1 ? V.call(arguments) : s, n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
                    }
                };
            if (a > 1)
                for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) r[s] && Z.isFunction(r[s].promise) ? r[s].promise().done(h(s, n, r)).fail(l.reject).progress(h(s, i, e)) : --o;
            return o || l.resolveWith(n, r), l.promise()
        }
    });
    var gt;
    Z.fn.ready = function(t) {
        return Z.ready.promise().done(t), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (gt.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
        }
    }), Z.ready.promise = function(e) {
        return gt || (gt = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), gt.promise(e)
    }, Z.ready.promise();
    var mt = Z.access = function(t, e, i, n, s, r, a) {
        var o = 0,
            l = t.length,
            h = null == i;
        if ("object" === Z.type(i)) {
            s = !0;
            for (o in i) Z.access(t, e, o, i[o], !0, r, a)
        } else if (void 0 !== n && (s = !0, Z.isFunction(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                return h.call(Z(t), i)
            })), e))
            for (; l > o; o++) e(t[o], i, a ? n : n.call(t[o], o, e(t[o], i)));
        return s ? t : h ? e.call(t) : l ? e(t[0], i) : r
    };
    Z.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, o.uid = 1, o.accepts = Z.acceptData, o.prototype = {
        key: function(t) {
            if (!o.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = o.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, Z.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, s = this.key(t),
                r = this.cache[s];
            if ("string" == typeof e) r[e] = i;
            else if (Z.isEmptyObject(r)) Z.extend(this.cache[s], e);
            else
                for (n in e) r[n] = e[n];
            return r
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, Z.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, s, r = this.key(t),
                a = this.cache[r];
            if (void 0 === e) this.cache[r] = {};
            else {
                Z.isArray(e) ? n = e.concat(e.map(Z.camelCase)) : (s = Z.camelCase(e), e in a ? n = [e, s] : (n = s, n = n in a ? [n] : n.match(pt) || [])), i = n.length;
                for (; i--;) delete a[n[i]]
            }
        },
        hasData: function(t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new o,
        _t = new o,
        yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    Z.extend({
        hasData: function(t) {
            return _t.hasData(t) || vt.hasData(t)
        },
        data: function(t, e, i) {
            return _t.access(t, e, i)
        },
        removeData: function(t, e) {
            _t.remove(t, e)
        },
        _data: function(t, e, i) {
            return vt.access(t, e, i)
        },
        _removeData: function(t, e) {
            vt.remove(t, e)
        }
    }), Z.fn.extend({
        data: function(t, e) {
            var i, n, s, r = this[0],
                a = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (s = _t.get(r), 1 === r.nodeType && !vt.get(r, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = Z.camelCase(n.slice(5)), l(r, n, s[n])));
                    vt.set(r, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                _t.set(this, t)
            }) : mt(this, function(e) {
                var i, n = Z.camelCase(t);
                if (r && void 0 === e) {
                    if (i = _t.get(r, t), void 0 !== i) return i;
                    if (i = _t.get(r, n), void 0 !== i) return i;
                    if (i = l(r, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = _t.get(this, n);
                    _t.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && _t.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                _t.remove(this, t)
            })
        }
    }), Z.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || Z.isArray(i) ? n = vt.access(t, e, Z.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = Z.queue(t, e),
                n = i.length,
                s = i.shift(),
                r = Z._queueHooks(t, e),
                a = function() {
                    Z.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, a, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return vt.get(t, i) || vt.access(t, i, {
                empty: Z.Callbacks("once memory").add(function() {
                    vt.remove(t, [e + "queue", i])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = Z.queue(this, t, e);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Z.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = Z.Deferred(),
                r = this,
                a = this.length,
                o = function() {
                    --n || s.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = vt.get(r[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(o));
            return o(), s.promise(e)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        xt = ["Top", "Right", "Bottom", "Left"],
        Tt = function(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        },
        St = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Q.createDocumentFragment(),
            e = t.appendChild(Q.createElement("div")),
            i = Q.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    J.focusinBubbles = "onfocusin" in t;
    var Et = /^key/,
        Pt = /^(?:mouse|pointer|contextmenu)|click/,
        At = /^(?:focusinfocus|focusoutblur)$/,
        Ct = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var r, a, o, l, h, c, u, d, p, f, g, m = vt.get(t);
            if (m)
                for (i.handler && (r = i, i = r.handler, s = r.selector), i.guid || (i.guid = Z.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return typeof Z !== kt && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(pt) || [""], h = e.length; h--;) o = Ct.exec(e[h]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (u = Z.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = Z.event.special[p] || {}, c = Z.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && Z.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, a) !== !1 || t.addEventListener && t.addEventListener(p, a, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[p] = !0)
        },
        remove: function(t, e, i, n, s) {
            var r, a, o, l, h, c, u, d, p, f, g, m = vt.hasData(t) && vt.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(pt) || [""], h = e.length; h--;)
                    if (o = Ct.exec(e[h]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p) {
                        for (u = Z.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) c = d[r], !s && g !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                        a && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || Z.removeEvent(t, p, m.handle), delete l[p])
                    } else
                        for (p in l) Z.event.remove(t, p + e[h], i, n, !0);
                Z.isEmptyObject(l) && (delete m.handle, vt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var r, a, o, l, h, c, u, d = [n || Q],
                p = W.call(e, "type") ? e.type : e,
                f = W.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = o = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !At.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), h = p.indexOf(":") < 0 && "on" + p, e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : Z.makeArray(i, [e]), u = Z.event.special[p] || {}, s || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!s && !u.noBubble && !Z.isWindow(n)) {
                    for (l = u.delegateType || p, At.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), o = a;
                    o === (n.ownerDocument || Q) && d.push(o.defaultView || o.parentWindow || t)
                }
                for (r = 0;
                    (a = d[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : u.bindType || p, c = (vt.get(a, "events") || {})[e.type] && vt.get(a, "handle"), c && c.apply(a, i), c = h && a[h], c && c.apply && Z.acceptData(a) && (e.result = c.apply(a, i), e.result === !1 && e.preventDefault());
                return e.type = p, s || e.isDefaultPrevented() || u._default && u._default.apply(d.pop(), i) !== !1 || !Z.acceptData(n) || h && Z.isFunction(n[p]) && !Z.isWindow(n) && (o = n[h], o && (n[h] = null), Z.event.triggered = p, n[p](), Z.event.triggered = void 0, o && (n[h] = o)), e.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, i, n, s, r, a = [],
                o = V.call(arguments),
                l = (vt.get(this, "events") || {})[t.type] || [],
                h = Z.event.special[t.type] || {};
            if (o[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (a = Z.event.handlers.call(this, t, l), e = 0;
                    (s = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, i = 0;
                        (r = s.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, n = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, o), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, r, a = [],
                o = e.delegateCount,
                l = t.target;
            if (o && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [], i = 0; o > i; i++) r = e[i], s = r.selector + " ", void 0 === n[s] && (n[s] = r.needsContext ? Z(s, this).index(l) >= 0 : Z.find(s, this, null, [l]).length), n[s] && n.push(r);
                        n.length && a.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return o < e.length && a.push({
                elem: this,
                handlers: e.slice(o)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, r = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Q, n = i.documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, i, n, s = t.type,
                r = t,
                a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = Pt.test(s) ? this.mouseHooks : Et.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new Z.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return Z.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = Z.extend(new Z.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? Z.event.trigger(s, null, e) : Z.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, Z.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, Z.Event = function(t, e) {
        return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : c) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        Z.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    r = t.handleObj;
                return (!s || s !== n && !Z.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), J.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            Z.event.simulate(e, t.target, Z.event.fix(t), !0)
        };
        Z.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = vt.access(n, e);
                s || n.addEventListener(t, i, !0), vt.access(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = vt.access(n, e) - 1;
                s ? vt.access(n, e, s) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, i, n, s) {
            var r, a;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (a in t) this.on(a, e, i, t[a], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
            else if (!n) return this;
            return 1 === s && (r = n, n = function(t) {
                return Z().off(t), r.apply(this, arguments)
            }, n.guid = r.guid || (r.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, Z(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = c), this.each(function() {
                Z.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                Z.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? Z.event.trigger(t, e, i, !0) : void 0
        }
    });
    var jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Lt = /<([\w:]+)/,
        Ot = /<|&#?\w+;/,
        It = /<(?:script|style|link)/i,
        $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Rt = /^$|\/(?:java|ecma)script/i,
        Dt = /^true\/(.*)/,
        Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, Z.extend({
        clone: function(t, e, i) {
            var n, s, r, a, o = t.cloneNode(!0),
                l = Z.contains(t.ownerDocument, t);
            if (!(J.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                for (a = v(o), r = v(t), n = 0, s = r.length; s > n; n++) _(r[n], a[n]);
            if (e)
                if (i)
                    for (r = r || v(t), a = a || v(o), n = 0, s = r.length; s > n; n++) m(r[n], a[n]);
                else m(t, o);
            return a = v(o, "script"), a.length > 0 && g(a, !l && v(t, "script")), o
        },
        buildFragment: function(t, e, i, n) {
            for (var s, r, a, o, l, h, c = e.createDocumentFragment(), u = [], d = 0, p = t.length; p > d; d++)
                if (s = t[d], s || 0 === s)
                    if ("object" === Z.type(s)) Z.merge(u, s.nodeType ? [s] : s);
                    else if (Ot.test(s)) {
                for (r = r || c.appendChild(e.createElement("div")), a = (Lt.exec(s) || ["", ""])[1].toLowerCase(), o = Nt[a] || Nt._default, r.innerHTML = o[1] + s.replace(jt, "<$1></$2>") + o[2], h = o[0]; h--;) r = r.lastChild;
                Z.merge(u, r.childNodes), r = c.firstChild, r.textContent = ""
            } else u.push(e.createTextNode(s));
            for (c.textContent = "", d = 0; s = u[d++];)
                if ((!n || -1 === Z.inArray(s, n)) && (l = Z.contains(s.ownerDocument, s), r = v(c.appendChild(s), "script"), l && g(r), i))
                    for (h = 0; s = r[h++];) Rt.test(s.type || "") && i.push(s);
            return c
        },
        cleanData: function(t) {
            for (var e, i, n, s, r = Z.event.special, a = 0; void 0 !== (i = t[a]); a++) {
                if (Z.acceptData(i) && (s = i[vt.expando], s && (e = vt.cache[s]))) {
                    if (e.events)
                        for (n in e.events) r[n] ? Z.event.remove(i, n) : Z.removeEvent(i, n, e.handle);
                    vt.cache[s] && delete vt.cache[s]
                }
                delete _t.cache[i[_t.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return mt(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? Z.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || Z.cleanData(v(i)), i.parentNode && (e && Z.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return Z.clone(this, t, e)
            })
        },
        html: function(t) {
            return mt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !It.test(t) && !Nt[(Lt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(jt, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = z.apply([], t);
            var i, n, s, r, a, o, l = 0,
                h = this.length,
                c = this,
                u = h - 1,
                d = t[0],
                g = Z.isFunction(d);
            if (g || h > 1 && "string" == typeof d && !J.checkClone && $t.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                g && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (h && (i = Z.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (s = Z.map(v(i, "script"), p), r = s.length; h > l; l++) a = i, l !== u && (a = Z.clone(a, !0, !0), r && Z.merge(s, v(a, "script"))), e.call(this[l], a, l);
                if (r)
                    for (o = s[s.length - 1].ownerDocument, Z.map(s, f), l = 0; r > l; l++) a = s[l], Rt.test(a.type || "") && !vt.access(a, "globalEval") && Z.contains(o, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Mt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        Z.fn[t] = function(t) {
            for (var i, n = [], s = Z(t), r = s.length - 1, a = 0; r >= a; a++) i = a === r ? this : this.clone(!0), Z(s[a])[e](i), Y.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ft, Bt = {},
        Ht = /^margin/,
        qt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        Vt = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", s.appendChild(r);
            var e = t.getComputedStyle(a, null);
            i = "1%" !== e.top, n = "4px" === e.width, s.removeChild(r)
        }
        var i, n, s = Q.documentElement,
            r = Q.createElement("div"),
            a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), t.getComputedStyle && Z.extend(J, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, i = a.appendChild(Q.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", s.appendChild(r), e = !parseFloat(t.getComputedStyle(i, null).marginRight), s.removeChild(r), a.removeChild(i), e
            }
        }))
    }(), Z.swap = function(t, e, i, n) {
        var s, r, a = {};
        for (r in e) a[r] = t.style[r], t.style[r] = e[r];
        s = i.apply(t, n || []);
        for (r in e) t.style[r] = a[r];
        return s
    };
    var zt = /^(none|table(?!-c[ea]).+)/,
        Yt = new RegExp("^(" + wt + ")(.*)$", "i"),
        Gt = new RegExp("^([+-])=(" + wt + ")", "i"),
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Wt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = w(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, a, o = Z.camelCase(e),
                    l = t.style;
                return e = Z.cssProps[o] || (Z.cssProps[o] = T(l, o)), a = Z.cssHooks[e] || Z.cssHooks[o], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e] : (r = typeof i, "string" === r && (s = Gt.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(Z.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || Z.cssNumber[o] || (i += "px"), J.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i)), void 0)
            }
        },
        css: function(t, e, i, n) {
            var s, r, a, o = Z.camelCase(e);
            return e = Z.cssProps[o] || (Z.cssProps[o] = T(t.style, o)), a = Z.cssHooks[e] || Z.cssHooks[o], a && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = w(t, e, n)), "normal" === s && e in Ut && (s = Ut[e]), "" === i || i ? (r = parseFloat(s), i === !0 || Z.isNumeric(r) ? r || 0 : s) : s
        }
    }), Z.each(["height", "width"], function(t, e) {
        Z.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? zt.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Xt, function() {
                    return E(t, e, n)
                }) : E(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && Vt(t);
                return S(t, i, n ? k(t, e, n, "border-box" === Z.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), Z.cssHooks.marginRight = x(J.reliableMarginRight, function(t, e) {
        return e ? Z.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        Z.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + xt[n] + e] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, Ht.test(t) || (Z.cssHooks[t + e].set = S)
    }), Z.fn.extend({
        css: function(t, e) {
            return mt(this, function(t, e, i) {
                var n, s, r = {},
                    a = 0;
                if (Z.isArray(e)) {
                    for (n = Vt(t), s = e.length; s > a; a++) r[e[a]] = Z.css(t, e[a], !1, n);
                    return r
                }
                return void 0 !== i ? Z.style(t, e, i) : Z.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = A, A.prototype = {
        constructor: A,
        init: function(t, e, i, n, s, r) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (Z.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = A.propHooks[this.prop];
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = A.propHooks[this.prop];
            return this.options.duration ? this.pos = e = Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, Z.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, Z.fx = A.prototype.init, Z.fx.step = {};
    var Jt, Qt, Kt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [O],
        ie = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    s = Zt.exec(e),
                    r = s && s[3] || (Z.cssNumber[t] ? "" : "px"),
                    a = (Z.cssNumber[t] || "px" !== r && +n) && Zt.exec(Z.css(i.elem, t)),
                    o = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], s = s || [], a = +n || 1;
                    do o = o || ".5", a /= o, Z.style(i.elem, t, a + r); while (o !== (o = i.cur() / n) && 1 !== o && --l)
                }
                return s && (a = i.start = +a || +n || 0, i.unit = r, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
            }]
        };
    Z.Animation = Z.extend($, {
            tweener: function(t, e) {
                Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; s > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), Z.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? Z.extend({}, t) : {
                complete: i || !i && e || Z.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !Z.isFunction(e) && e
            };
            return n.duration = Z.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Z.fx.speeds ? Z.fx.speeds[n.duration] : Z.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                Z.isFunction(n.old) && n.old.call(this), n.queue && Z.dequeue(this, n.queue)
            }, n
        }, Z.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = Z.isEmptyObject(t),
                    r = Z.speed(e, i, n),
                    a = function() {
                        var e = $(this, Z.extend({}, t), r);
                        (s || vt.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, s || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        r = Z.timers,
                        a = vt.get(this);
                    if (s) a[s] && a[s].stop && n(a[s]);
                    else
                        for (s in a) a[s] && a[s].stop && te.test(s) && n(a[s]);
                    for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
                    (e || !i) && Z.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = vt.get(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        r = Z.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, Z.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                        r.splice(e, 1));
                    for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(t, e) {
            var i = Z.fn[e];
            Z.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(j(e, !0), t, n, s)
            }
        }), Z.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            Z.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var t, e = 0,
                i = Z.timers;
            for (Jt = Z.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || Z.fx.stop(), Jt = void 0
        }, Z.fx.timer = function(t) {
            Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Qt || (Qt = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Qt), Qt = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(t, e) {
            return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t = Q.createElement("input"),
                e = Q.createElement("select"),
                i = e.appendChild(Q.createElement("option"));
            t.type = "checkbox", J.checkOn = "" !== t.value, J.optSelected = i.selected, e.disabled = !0, J.optDisabled = !i.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", J.radioValue = "t" === t.value
        }();
    var ne, se, re = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(t, e) {
            return mt(this, Z.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Z.removeAttr(this, t)
            })
        }
    }), Z.extend({
        attr: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === kt ? Z.prop(t, e, i) : (1 === r && Z.isXMLDoc(t) || (e = e.toLowerCase(), n = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? se : ne)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = Z.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void Z.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                r = e && e.match(pt);
            if (r && 1 === t.nodeType)
                for (; i = r[s++];) n = Z.propFix[i] || i, Z.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!J.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), se = {
        set: function(t, e, i) {
            return e === !1 ? Z.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = re[e] || Z.find.attr;
        re[e] = function(t, e, n) {
            var s, r;
            return n || (r = re[e], re[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, re[e] = r), s
        }
    });
    var ae = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(t, e) {
            return mt(this, Z.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[Z.propFix[t] || t]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, s, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !Z.isXMLDoc(t), r && (e = Z.propFix[e] || e, s = Z.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || ae.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), J.optSelected || (Z.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var oe = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(t) {
            var e, i, n, s, r, a, o = "string" == typeof t && t,
                l = 0,
                h = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).addClass(t.call(this, e, this.className))
            });
            if (o)
                for (e = (t || "").match(pt) || []; h > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : " ")) {
                        for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        a = Z.trim(n), i.className !== a && (i.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, r, a, o = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                h = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).removeClass(t.call(this, e, this.className))
            });
            if (o)
                for (e = (t || "").match(pt) || []; h > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : "")) {
                        for (r = 0; s = e[r++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        a = t ? Z.trim(n) : "", i.className !== a && (i.className = a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : Z.isFunction(t) ? this.each(function(i) {
                Z(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function() {
                if ("string" === i)
                    for (var e, n = 0, s = Z(this), r = t.match(pt) || []; e = r[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === kt || "boolean" === i) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(oe, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    Z.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0]; {
                if (arguments.length) return n = Z.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, Z(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : Z.isArray(s) && (s = Z.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = Z.valHooks[s.type] || Z.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = Z.find.attr(t, "value");
                    return null != e ? e : Z.trim(Z.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || 0 > s, a = r ? null : [], o = r ? s + 1 : n.length, l = 0 > s ? o : r ? s : 0; o > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (J.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Z.nodeName(i.parentNode, "optgroup"))) {
                            if (e = Z(i).val(), r) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, r = Z.makeArray(e), a = s.length; a--;) n = s[a], (n.selected = Z.inArray(n.value, r) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(t, e) {
                return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
            }
        }, J.checkOn || (Z.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        Z.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), Z.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var he = Z.now(),
        ce = /\?/;
    Z.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, Z.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
    };
    var ue = /#.*$/,
        de = /([?&])_=[^&]*/,
        pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ge = /^(?:GET|HEAD)$/,
        me = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        _e = {},
        ye = {},
        be = "*/".concat("*"),
        we = t.location.href,
        xe = ve.exec(we.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we,
            type: "GET",
            isLocal: fe.test(xe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? M(M(t, Z.ajaxSettings), e) : M(Z.ajaxSettings, t)
        },
        ajaxPrefilter: R(_e),
        ajaxTransport: R(ye),
        ajax: function(t, e) {
            function i(t, e, i, a) {
                var l, c, v, _, b, x = e;
                2 !== y && (y = 2, o && clearTimeout(o), n = void 0, r = a || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (_ = N(u, w, i)), _ = F(u, _, w, l), l ? (u.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[s] = b), b = w.getResponseHeader("etag"), b && (Z.etag[s] = b)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, c = _.data, v = _.error, l = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(m), m = void 0, h && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, u, l ? c : v]), g.fireWith(d, [w, x]), h && (p.trigger("ajaxComplete", [w, u]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, r, a, o, l, h, c, u = Z.ajaxSetup({}, e),
                d = u.context || u,
                p = u.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                f = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                _ = {},
                y = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === y) {
                            if (!a)
                                for (a = {}; e = pe.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return y || (t = _[i] = _[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return y || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > y)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || we) + "").replace(ue, "").replace(me, xe[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = Z.trim(u.dataType || "*").toLowerCase().match(pt) || [""], null == u.crossDomain && (l = ve.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === xe[1] && l[2] === xe[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (xe[3] || ("http:" === xe[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Z.param(u.data, u.traditional)), D(_e, u, e, w), 2 === y) return w;
            h = Z.event && u.global, h && 0 === Z.active++ && Z.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ge.test(u.type), s = u.url, u.hasContent || (u.data && (s = u.url += (ce.test(s) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = de.test(s) ? s.replace(de, "$1_=" + he++) : s + (ce.test(s) ? "&" : "?") + "_=" + he++)), u.ifModified && (Z.lastModified[s] && w.setRequestHeader("If-Modified-Since", Z.lastModified[s]), Z.etag[s] && w.setRequestHeader("If-None-Match", Z.etag[s])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + be + "; q=0.01" : "") : u.accepts["*"]);
            for (c in u.headers) w.setRequestHeader(c, u.headers[c]);
            if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === y)) return w.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](u[c]);
            if (n = D(ye, u, e, w)) {
                w.readyState = 1, h && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (o = setTimeout(function() {
                    w.abort("timeout")
                }, u.timeout));
                try {
                    y = 1, n.send(v, i)
                } catch (x) {
                    if (!(2 > y)) throw x;
                    i(-1, x)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return Z.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return Z.get(t, void 0, e, "script")
        }
    }), Z.each(["get", "post"], function(t, e) {
        Z[e] = function(t, i, n, s) {
            return Z.isFunction(i) && (s = s || n, n = i, i = void 0), Z.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), Z._evalUrl = function(t) {
        return Z.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(t) {
            var e;
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = Z(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = Z.isFunction(t);
            return this.each(function(i) {
                Z(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, Z.expr.filters.visible = function(t) {
        return !Z.expr.filters.hidden(t)
    };
    var Te = /%20/g,
        Se = /\[\]$/,
        ke = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) B(i, t[i], e, s);
        return n.join("&").replace(Te, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = Z.prop(this, "elements");
                return t ? Z.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !Z(this).is(":disabled") && Pe.test(this.nodeName) && !Ee.test(t) && (this.checked || !St.test(t))
            }).map(function(t, e) {
                var i = Z(this).val();
                return null == i ? null : Z.isArray(i) ? Z.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ke, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Ae = 0,
        Ce = {},
        je = {
            0: 200,
            1223: 204
        },
        Le = Z.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ce) Ce[t]()
    }), J.cors = !!Le && "withCredentials" in Le, J.ajax = Le = !!Le, Z.ajaxTransport(function(t) {
        var e;
        return J.cors || Le && !t.crossDomain ? {
            send: function(i, n) {
                var s, r = t.xhr(),
                    a = ++Ae;
                if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) r[s] = t.xhrFields[s];
                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) r.setRequestHeader(s, i[s]);
                e = function(t) {
                    return function() {
                        e && (delete Ce[a], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? n(r.status, r.statusText) : n(je[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = e(), r.onerror = e("error"), e = Ce[a] = e("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (e) throw o
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return Z.globalEval(t), t
            }
        }
    }), Z.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), Z.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, s) {
                    e = Z("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                    }), Q.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Oe = [],
        Ie = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Oe.pop() || Z.expando + "_" + he++;
            return this[t] = !0, t
        }
    }), Z.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, r, a, o = e.jsonp !== !1 && (Ie.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Ie, "$1" + s) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return a || Z.error(s + " was not called"), a[0]
        }, e.dataTypes[0] = "json", r = t[s], t[s] = function() {
            a = arguments
        }, n.always(function() {
            t[s] = r, e[s] && (e.jsonpCallback = i.jsonpCallback, Oe.push(s)), a && Z.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Q;
        var n = at.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = Z.buildFragment([t], e, s), s && s.length && Z(s).remove(), Z.merge([], n.childNodes))
    };
    var $e = Z.fn.load;
    Z.fn.load = function(t, e, i) {
        if ("string" != typeof t && $e) return $e.apply(this, arguments);
        var n, s, r, a = this,
            o = t.indexOf(" ");
        return o >= 0 && (n = Z.trim(t.slice(o)), t = t.slice(0, o)), Z.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && Z.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, a.html(n ? Z("<div>").append(Z.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            a.each(i, r || [t.responseText, e, t])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        Z.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), Z.expr.filters.animated = function(t) {
        return Z.grep(Z.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Re = t.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, i) {
            var n, s, r, a, o, l, h, c = Z.css(t, "position"),
                u = Z(t),
                d = {};
            "static" === c && (t.style.position = "relative"), o = u.offset(), r = Z.css(t, "top"), l = Z.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, h ? (n = u.position(), a = n.top, s = n.left) : (a = parseFloat(r) || 0, s = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, i, o)), null != e.top && (d.top = e.top - o.top + a), null != e.left && (d.left = e.left - o.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, Z.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                Z.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                s = {
                    top: 0,
                    left: 0
                },
                r = n && n.ownerDocument;
            if (r) return e = r.documentElement, Z.contains(e, n) ? (typeof n.getBoundingClientRect !== kt && (s = n.getBoundingClientRect()), i = H(r), {
                top: s.top + i.pageYOffset - e.clientTop,
                left: s.left + i.pageXOffset - e.clientLeft
            }) : s
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (n = t.offset()), n.top += Z.css(t[0], "borderTopWidth", !0), n.left += Z.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - Z.css(i, "marginTop", !0),
                    left: e.left - n.left - Z.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Re; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                return t || Re
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        Z.fn[e] = function(s) {
            return mt(this, function(e, s, r) {
                var a = H(e);
                return void 0 === r ? a ? a[i] : e[s] : void(a ? a.scrollTo(n ? t.pageXOffset : r, n ? r : t.pageYOffset) : e[s] = r)
            }, e, s, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(t, e) {
        Z.cssHooks[e] = x(J.pixelPosition, function(t, i) {
            return i ? (i = w(t, e), qt.test(i) ? Z(t).position()[e] + "px" : i) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        Z.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            Z.fn[n] = function(n, s) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    a = i || (n === !0 || s === !0 ? "margin" : "border");
                return mt(this, function(e, i, n) {
                    var s;
                    return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? Z.css(e, i, a) : Z.style(e, i, n, a)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var De = t.jQuery,
        Me = t.$;
    return Z.noConflict = function(e) {
        return t.$ === Z && (t.$ = Me), e && t.jQuery === Z && (t.jQuery = De), Z
    }, typeof e === kt && (t.jQuery = t.$ = Z), Z
}),
function() {
    var t = this,
        e = t._,
        i = Array.prototype,
        n = Object.prototype,
        s = Function.prototype,
        r = i.push,
        a = i.slice,
        o = i.concat,
        l = n.toString,
        h = n.hasOwnProperty,
        c = Array.isArray,
        u = Object.keys,
        d = s.bind,
        p = function(t) {
            return t instanceof p ? t : this instanceof p ? void(this._wrapped = t) : new p(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : t._ = p, p.VERSION = "1.7.0";
    var f = function(t, e, i) {
        if (void 0 === e) return t;
        switch (null == i ? 3 : i) {
            case 1:
                return function(i) {
                    return t.call(e, i)
                };
            case 2:
                return function(i, n) {
                    return t.call(e, i, n)
                };
            case 3:
                return function(i, n, s) {
                    return t.call(e, i, n, s)
                };
            case 4:
                return function(i, n, s, r) {
                    return t.call(e, i, n, s, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    };
    p.iteratee = function(t, e, i) {
        return null == t ? p.identity : p.isFunction(t) ? f(t, e, i) : p.isObject(t) ? p.matches(t) : p.property(t)
    }, p.each = p.forEach = function(t, e, i) {
        if (null == t) return t;
        e = f(e, i);
        var n, s = t.length;
        if (s === +s)
            for (n = 0; s > n; n++) e(t[n], n, t);
        else {
            var r = p.keys(t);
            for (n = 0, s = r.length; s > n; n++) e(t[r[n]], r[n], t)
        }
        return t
    }, p.map = p.collect = function(t, e, i) {
        if (null == t) return [];
        e = p.iteratee(e, i);
        for (var n, s = t.length !== +t.length && p.keys(t), r = (s || t).length, a = Array(r), o = 0; r > o; o++) n = s ? s[o] : o, a[o] = e(t[n], n, t);
        return a
    };
    var g = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function(t, e, i, n) {
        null == t && (t = []), e = f(e, n, 4);
        var s, r = t.length !== +t.length && p.keys(t),
            a = (r || t).length,
            o = 0;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            i = t[r ? r[o++] : o++]
        }
        for (; a > o; o++) s = r ? r[o] : o, i = e(i, t[s], s, t);
        return i
    }, p.reduceRight = p.foldr = function(t, e, i, n) {
        null == t && (t = []), e = f(e, n, 4);
        var s, r = t.length !== +t.length && p.keys(t),
            a = (r || t).length;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            i = t[r ? r[--a] : --a]
        }
        for (; a--;) s = r ? r[a] : a, i = e(i, t[s], s, t);
        return i
    }, p.find = p.detect = function(t, e, i) {
        var n;
        return e = p.iteratee(e, i), p.some(t, function(t, i, s) {
            return e(t, i, s) ? (n = t, !0) : void 0
        }), n
    }, p.filter = p.select = function(t, e, i) {
        var n = [];
        return null == t ? n : (e = p.iteratee(e, i), p.each(t, function(t, i, s) {
            e(t, i, s) && n.push(t)
        }), n)
    }, p.reject = function(t, e, i) {
        return p.filter(t, p.negate(p.iteratee(e)), i)
    }, p.every = p.all = function(t, e, i) {
        if (null == t) return !0;
        e = p.iteratee(e, i);
        var n, s, r = t.length !== +t.length && p.keys(t),
            a = (r || t).length;
        for (n = 0; a > n; n++)
            if (s = r ? r[n] : n, !e(t[s], s, t)) return !1;
        return !0
    }, p.some = p.any = function(t, e, i) {
        if (null == t) return !1;
        e = p.iteratee(e, i);
        var n, s, r = t.length !== +t.length && p.keys(t),
            a = (r || t).length;
        for (n = 0; a > n; n++)
            if (s = r ? r[n] : n, e(t[s], s, t)) return !0;
        return !1
    }, p.contains = p.include = function(t, e) {
        return null == t ? !1 : (t.length !== +t.length && (t = p.values(t)), p.indexOf(t, e) >= 0)
    }, p.invoke = function(t, e) {
        var i = a.call(arguments, 2),
            n = p.isFunction(e);
        return p.map(t, function(t) {
            return (n ? e : t[e]).apply(t, i)
        })
    }, p.pluck = function(t, e) {
        return p.map(t, p.property(e))
    }, p.where = function(t, e) {
        return p.filter(t, p.matches(e))
    }, p.findWhere = function(t, e) {
        return p.find(t, p.matches(e))
    }, p.max = function(t, e, i) {
        var n, s, r = -(1 / 0),
            a = -(1 / 0);
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var o = 0, l = t.length; l > o; o++) n = t[o], n > r && (r = n)
        } else e = p.iteratee(e, i), p.each(t, function(t, i, n) {
            s = e(t, i, n), (s > a || s === -(1 / 0) && r === -(1 / 0)) && (r = t, a = s)
        });
        return r
    }, p.min = function(t, e, i) {
        var n, s, r = 1 / 0,
            a = 1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var o = 0, l = t.length; l > o; o++) n = t[o], r > n && (r = n)
        } else e = p.iteratee(e, i), p.each(t, function(t, i, n) {
            s = e(t, i, n), (a > s || s === 1 / 0 && r === 1 / 0) && (r = t, a = s)
        });
        return r
    }, p.shuffle = function(t) {
        for (var e, i = t && t.length === +t.length ? t : p.values(t), n = i.length, s = Array(n), r = 0; n > r; r++) e = p.random(0, r), e !== r && (s[r] = s[e]), s[e] = i[r];
        return s
    }, p.sample = function(t, e, i) {
        return null == e || i ? (t.length !== +t.length && (t = p.values(t)), t[p.random(t.length - 1)]) : p.shuffle(t).slice(0, Math.max(0, e))
    }, p.sortBy = function(t, e, i) {
        return e = p.iteratee(e, i), p.pluck(p.map(t, function(t, i, n) {
            return {
                value: t,
                index: i,
                criteria: e(t, i, n)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var m = function(t) {
        return function(e, i, n) {
            var s = {};
            return i = p.iteratee(i, n), p.each(e, function(n, r) {
                var a = i(n, r, e);
                t(s, n, a)
            }), s
        }
    };
    p.groupBy = m(function(t, e, i) {
        p.has(t, i) ? t[i].push(e) : t[i] = [e]
    }), p.indexBy = m(function(t, e, i) {
        t[i] = e
    }), p.countBy = m(function(t, e, i) {
        p.has(t, i) ? t[i]++ : t[i] = 1
    }), p.sortedIndex = function(t, e, i, n) {
        i = p.iteratee(i, n, 1);
        for (var s = i(e), r = 0, a = t.length; a > r;) {
            var o = r + a >>> 1;
            i(t[o]) < s ? r = o + 1 : a = o
        }
        return r
    }, p.toArray = function(t) {
        return t ? p.isArray(t) ? a.call(t) : t.length === +t.length ? p.map(t, p.identity) : p.values(t) : []
    }, p.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : p.keys(t).length
    }, p.partition = function(t, e, i) {
        e = p.iteratee(e, i);
        var n = [],
            s = [];
        return p.each(t, function(t, i, r) {
            (e(t, i, r) ? n : s).push(t)
        }), [n, s]
    }, p.first = p.head = p.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : 0 > e ? [] : a.call(t, 0, e)
    }, p.initial = function(t, e, i) {
        return a.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
    }, p.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, p.rest = p.tail = p.drop = function(t, e, i) {
        return a.call(t, null == e || i ? 1 : e)
    }, p.compact = function(t) {
        return p.filter(t, p.identity)
    };
    var v = function(t, e, i, n) {
        if (e && p.every(t, p.isArray)) return o.apply(n, t);
        for (var s = 0, a = t.length; a > s; s++) {
            var l = t[s];
            p.isArray(l) || p.isArguments(l) ? e ? r.apply(n, l) : v(l, e, i, n) : i || n.push(l)
        }
        return n
    };
    p.flatten = function(t, e) {
        return v(t, e, !1, [])
    }, p.without = function(t) {
        return p.difference(t, a.call(arguments, 1))
    }, p.uniq = p.unique = function(t, e, i, n) {
        if (null == t) return [];
        p.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = p.iteratee(i, n));
        for (var s = [], r = [], a = 0, o = t.length; o > a; a++) {
            var l = t[a];
            if (e) a && r === l || s.push(l), r = l;
            else if (i) {
                var h = i(l, a, t);
                p.indexOf(r, h) < 0 && (r.push(h), s.push(l))
            } else p.indexOf(s, l) < 0 && s.push(l)
        }
        return s
    }, p.union = function() {
        return p.uniq(v(arguments, !0, !0, []))
    }, p.intersection = function(t) {
        if (null == t) return [];
        for (var e = [], i = arguments.length, n = 0, s = t.length; s > n; n++) {
            var r = t[n];
            if (!p.contains(e, r)) {
                for (var a = 1; i > a && p.contains(arguments[a], r); a++);
                a === i && e.push(r)
            }
        }
        return e
    }, p.difference = function(t) {
        var e = v(a.call(arguments, 1), !0, !0, []);
        return p.filter(t, function(t) {
            return !p.contains(e, t)
        })
    }, p.zip = function(t) {
        if (null == t) return [];
        for (var e = p.max(arguments, "length").length, i = Array(e), n = 0; e > n; n++) i[n] = p.pluck(arguments, n);
        return i
    }, p.object = function(t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, p.indexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = 0,
            s = t.length;
        if (i) {
            if ("number" != typeof i) return n = p.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, s + i) : i
        }
        for (; s > n; n++)
            if (t[n] === e) return n;
        return -1
    }, p.lastIndexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = t.length;
        for ("number" == typeof i && (n = 0 > i ? n + i + 1 : Math.min(n, i + 1)); --n >= 0;)
            if (t[n] === e) return n;
        return -1
    }, p.range = function(t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), s = Array(n), r = 0; n > r; r++, t += i) s[r] = t;
        return s
    };
    var _ = function() {};
    p.bind = function(t, e) {
        var i, n;
        if (d && t.bind === d) return d.apply(t, a.call(arguments, 1));
        if (!p.isFunction(t)) throw new TypeError("Bind must be called on a function");
        return i = a.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            _.prototype = t.prototype;
            var s = new _;
            _.prototype = null;
            var r = t.apply(s, i.concat(a.call(arguments)));
            return p.isObject(r) ? r : s
        }
    }, p.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            for (var i = 0, n = e.slice(), s = 0, r = n.length; r > s; s++) n[s] === p && (n[s] = arguments[i++]);
            for (; i < arguments.length;) n.push(arguments[i++]);
            return t.apply(this, n)
        }
    }, p.bindAll = function(t) {
        var e, i, n = arguments.length;
        if (1 >= n) throw new Error("bindAll must be passed function names");
        for (e = 1; n > e; e++) i = arguments[e], t[i] = p.bind(t[i], t);
        return t
    }, p.memoize = function(t, e) {
        var i = function(n) {
            var s = i.cache,
                r = e ? e.apply(this, arguments) : n;
            return p.has(s, r) || (s[r] = t.apply(this, arguments)), s[r]
        };
        return i.cache = {}, i
    }, p.delay = function(t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        }, e)
    }, p.defer = function(t) {
        return p.delay.apply(p, [t, 1].concat(a.call(arguments, 1)))
    }, p.throttle = function(t, e, i) {
        var n, s, r, a = null,
            o = 0;
        i || (i = {});
        var l = function() {
            o = i.leading === !1 ? 0 : p.now(), a = null, r = t.apply(n, s), a || (n = s = null)
        };
        return function() {
            var h = p.now();
            o || i.leading !== !1 || (o = h);
            var c = e - (h - o);
            return n = this, s = arguments, 0 >= c || c > e ? (clearTimeout(a), a = null, o = h, r = t.apply(n, s), a || (n = s = null)) : a || i.trailing === !1 || (a = setTimeout(l, c)), r
        }
    }, p.debounce = function(t, e, i) {
        var n, s, r, a, o, l = function() {
            var h = p.now() - a;
            e > h && h > 0 ? n = setTimeout(l, e - h) : (n = null, i || (o = t.apply(r, s), n || (r = s = null)))
        };
        return function() {
            r = this, s = arguments, a = p.now();
            var h = i && !n;
            return n || (n = setTimeout(l, e)), h && (o = t.apply(r, s), r = s = null), o
        }
    }, p.wrap = function(t, e) {
        return p.partial(e, t)
    }, p.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }, p.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
            return n
        }
    }, p.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, p.before = function(t, e) {
        var i;
        return function() {
            return --t > 0 ? i = e.apply(this, arguments) : e = null, i
        }
    }, p.once = p.partial(p.before, 2), p.keys = function(t) {
        if (!p.isObject(t)) return [];
        if (u) return u(t);
        var e = [];
        for (var i in t) p.has(t, i) && e.push(i);
        return e
    }, p.values = function(t) {
        for (var e = p.keys(t), i = e.length, n = Array(i), s = 0; i > s; s++) n[s] = t[e[s]];
        return n
    }, p.pairs = function(t) {
        for (var e = p.keys(t), i = e.length, n = Array(i), s = 0; i > s; s++) n[s] = [e[s], t[e[s]]];
        return n
    }, p.invert = function(t) {
        for (var e = {}, i = p.keys(t), n = 0, s = i.length; s > n; n++) e[t[i[n]]] = i[n];
        return e
    }, p.functions = p.methods = function(t) {
        var e = [];
        for (var i in t) p.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, p.extend = function(t) {
        if (!p.isObject(t)) return t;
        for (var e, i, n = 1, s = arguments.length; s > n; n++) {
            e = arguments[n];
            for (i in e) h.call(e, i) && (t[i] = e[i])
        }
        return t
    }, p.pick = function(t, e, i) {
        var n, s = {};
        if (null == t) return s;
        if (p.isFunction(e)) {
            e = f(e, i);
            for (n in t) {
                var r = t[n];
                e(r, n, t) && (s[n] = r)
            }
        } else {
            var l = o.apply([], a.call(arguments, 1));
            t = new Object(t);
            for (var h = 0, c = l.length; c > h; h++) n = l[h], n in t && (s[n] = t[n])
        }
        return s
    }, p.omit = function(t, e, i) {
        if (p.isFunction(e)) e = p.negate(e);
        else {
            var n = p.map(o.apply([], a.call(arguments, 1)), String);
            e = function(t, e) {
                return !p.contains(n, e)
            }
        }
        return p.pick(t, e, i)
    }, p.defaults = function(t) {
        if (!p.isObject(t)) return t;
        for (var e = 1, i = arguments.length; i > e; e++) {
            var n = arguments[e];
            for (var s in n) void 0 === t[s] && (t[s] = n[s])
        }
        return t
    }, p.clone = function(t) {
        return p.isObject(t) ? p.isArray(t) ? t.slice() : p.extend({}, t) : t
    }, p.tap = function(t, e) {
        return e(t), t
    };
    var y = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof p && (t = t._wrapped), e instanceof p && (e = e._wrapped);
        var s = l.call(t);
        if (s !== l.call(e)) return !1;
        switch (s) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var r = i.length; r--;)
            if (i[r] === t) return n[r] === e;
        var a = t.constructor,
            o = e.constructor;
        if (a !== o && "constructor" in t && "constructor" in e && !(p.isFunction(a) && a instanceof a && p.isFunction(o) && o instanceof o)) return !1;
        i.push(t), n.push(e);
        var h, c;
        if ("[object Array]" === s) {
            if (h = t.length, c = h === e.length)
                for (; h-- && (c = y(t[h], e[h], i, n)););
        } else {
            var u, d = p.keys(t);
            if (h = d.length, c = p.keys(e).length === h)
                for (; h-- && (u = d[h], c = p.has(e, u) && y(t[u], e[u], i, n)););
        }
        return i.pop(), n.pop(), c
    };
    p.isEqual = function(t, e) {
        return y(t, e, [], [])
    }, p.isEmpty = function(t) {
        if (null == t) return !0;
        if (p.isArray(t) || p.isString(t) || p.isArguments(t)) return 0 === t.length;
        for (var e in t)
            if (p.has(t, e)) return !1;
        return !0
    }, p.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, p.isArray = c || function(t) {
        return "[object Array]" === l.call(t)
    }, p.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        p["is" + t] = function(e) {
            return l.call(e) === "[object " + t + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function(t) {
        return p.has(t, "callee")
    }), "function" != typeof /./ && (p.isFunction = function(t) {
        return "function" == typeof t || !1
    }), p.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, p.isNaN = function(t) {
        return p.isNumber(t) && t !== +t
    }, p.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
    }, p.isNull = function(t) {
        return null === t
    }, p.isUndefined = function(t) {
        return void 0 === t
    }, p.has = function(t, e) {
        return null != t && h.call(t, e)
    }, p.noConflict = function() {
        return t._ = e, this
    }, p.identity = function(t) {
        return t
    }, p.constant = function(t) {
        return function() {
            return t
        }
    }, p.noop = function() {}, p.property = function(t) {
        return function(e) {
            return e[t]
        }
    }, p.matches = function(t) {
        var e = p.pairs(t),
            i = e.length;
        return function(t) {
            if (null == t) return !i;
            t = new Object(t);
            for (var n = 0; i > n; n++) {
                var s = e[n],
                    r = s[0];
                if (s[1] !== t[r] || !(r in t)) return !1
            }
            return !0
        }
    }, p.times = function(t, e, i) {
        var n = Array(Math.max(0, t));
        e = f(e, i, 1);
        for (var s = 0; t > s; s++) n[s] = e(s);
        return n
    }, p.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, p.now = Date.now || function() {
        return (new Date).getTime()
    };
    var b = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        w = p.invert(b),
        x = function(t) {
            var e = function(e) {
                    return t[e]
                },
                i = "(?:" + p.keys(t).join("|") + ")",
                n = RegExp(i),
                s = RegExp(i, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, n.test(t) ? t.replace(s, e) : t
            }
        };
    p.escape = x(b), p.unescape = x(w), p.result = function(t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return p.isFunction(i) ? t[e]() : i
    };
    var T = 0;
    p.uniqueId = function(t) {
        var e = ++T + "";
        return t ? t + e : e
    }, p.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var S = /(.)^/,
        k = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        E = /\\|'|\r|\n|\u2028|\u2029/g,
        P = function(t) {
            return "\\" + k[t]
        };
    p.template = function(t, e, i) {
        !e && i && (e = i), e = p.defaults({}, e, p.templateSettings);
        var n = RegExp([(e.escape || S).source, (e.interpolate || S).source, (e.evaluate || S).source].join("|") + "|$", "g"),
            s = 0,
            r = "__p+='";
        t.replace(n, function(e, i, n, a, o) {
            return r += t.slice(s, o).replace(E, P), s = o + e.length, i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : a && (r += "';\n" + a + "\n__p+='"), e
        }), r += "';\n", e.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
        try {
            var a = new Function(e.variable || "obj", "_", r)
        } catch (o) {
            throw o.source = r, o
        }
        var l = function(t) {
                return a.call(this, t, p)
            },
            h = e.variable || "obj";
        return l.source = "function(" + h + "){\n" + r + "}", l
    }, p.chain = function(t) {
        var e = p(t);
        return e._chain = !0, e
    };
    var A = function(t) {
        return this._chain ? p(t).chain() : t
    };
    p.mixin = function(t) {
        p.each(p.functions(t), function(e) {
            var i = p[e] = t[e];
            p.prototype[e] = function() {
                var t = [this._wrapped];
                return r.apply(t, arguments), A.call(this, i.apply(p, t))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = i[t];
        p.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], A.call(this, i)
        }
    }), p.each(["concat", "join", "slice"], function(t) {
        var e = i[t];
        p.prototype[t] = function() {
            return A.call(this, e.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return p
    })
}.call(this), ! function(t, e, i, n) {
        "use strict";

        function s(t, e, i) {
            return setTimeout(c(t, i), e)
        }

        function r(t, e, i) {
            return Array.isArray(t) ? (a(t, i[e], i), !0) : !1
        }

        function a(t, e, i) {
            var s;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== n)
                for (s = 0; s < t.length;) e.call(i, t[s], s, t), s++;
            else
                for (s in t) t.hasOwnProperty(s) && e.call(i, t[s], s, t)
        }

        function o(t, e, i) {
            for (var s = Object.keys(e), r = 0; r < s.length;)(!i || i && t[s[r]] === n) && (t[s[r]] = e[s[r]]), r++;
            return t
        }

        function l(t, e) {
            return o(t, e, !0)
        }

        function h(t, e, i) {
            var n, s = e.prototype;
            n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && o(n, i)
        }

        function c(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function u(t, e) {
            return typeof t == ct ? t.apply(e ? e[0] || n : n, e) : t
        }

        function d(t, e) {
            return t === n ? e : t
        }

        function p(t, e, i) {
            a(v(e), function(e) {
                t.addEventListener(e, i, !1)
            })
        }

        function f(t, e, i) {
            a(v(e), function(e) {
                t.removeEventListener(e, i, !1)
            })
        }

        function g(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function m(t, e) {
            return t.indexOf(e) > -1
        }

        function v(t) {
            return t.trim().split(/\s+/g)
        }

        function _(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var n = 0; n < t.length;) {
                if (i && t[n][i] == e || !i && t[n] === e) return n;
                n++
            }
            return -1
        }

        function y(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function b(t, e, i) {
            for (var n = [], s = [], r = 0; r < t.length;) {
                var a = e ? t[r][e] : t[r];
                _(s, a) < 0 && n.push(t[r]), s[r] = a, r++
            }
            return i && (n = e ? n.sort(function(t, i) {
                return t[e] > i[e]
            }) : n.sort()), n
        }

        function w(t, e) {
            for (var i, s, r = e[0].toUpperCase() + e.slice(1), a = 0; a < lt.length;) {
                if (i = lt[a], s = i ? i + r : e, s in t) return s;
                a++
            }
            return n
        }

        function x() {
            return ft++
        }

        function T(t) {
            var e = t.ownerDocument;
            return e.defaultView || e.parentWindow
        }

        function S(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                u(t.options.enable, [t]) && i.handler(e)
            }, this.init()
        }

        function k(t) {
            var e, i = t.options.inputClass;
            return new(e = i ? i : vt ? F : _t ? q : mt ? z : N)(t, E)
        }

        function E(t, e, i) {
            var n = i.pointers.length,
                s = i.changedPointers.length,
                r = e & St && n - s === 0,
                a = e & (Et | Pt) && n - s === 0;
            i.isFirst = !!r, i.isFinal = !!a, r && (t.session = {}), i.eventType = e, P(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function P(t, e) {
            var i = t.session,
                n = e.pointers,
                s = n.length;
            i.firstInput || (i.firstInput = j(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = j(e) : 1 === s && (i.firstMultiple = !1);
            var r = i.firstInput,
                a = i.firstMultiple,
                o = a ? a.center : r.center,
                l = e.center = L(n);
            e.timeStamp = pt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = R(o, l), e.distance = $(o, l), A(i, e), e.offsetDirection = I(e.deltaX, e.deltaY), e.scale = a ? M(a.pointers, n) : 1, e.rotation = a ? D(a.pointers, n) : 0, C(i, e);
            var h = t.element;
            g(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h
        }

        function A(t, e) {
            var i = e.center,
                n = t.offsetDelta || {},
                s = t.prevDelta || {},
                r = t.prevInput || {};
            (e.eventType === St || r.eventType === Et) && (s = t.prevDelta = {
                x: r.deltaX || 0,
                y: r.deltaY || 0
            }, n = t.offsetDelta = {
                x: i.x,
                y: i.y
            }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
        }

        function C(t, e) {
            var i, s, r, a, o = t.lastInterval || e,
                l = e.timeStamp - o.timeStamp;
            if (e.eventType != Pt && (l > Tt || o.velocity === n)) {
                var h = o.deltaX - e.deltaX,
                    c = o.deltaY - e.deltaY,
                    u = O(l, h, c);
                s = u.x, r = u.y, i = dt(u.x) > dt(u.y) ? u.x : u.y, a = I(h, c), t.lastInterval = e
            } else i = o.velocity, s = o.velocityX, r = o.velocityY, a = o.direction;
            e.velocity = i, e.velocityX = s, e.velocityY = r, e.direction = a
        }

        function j(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                clientX: ut(t.pointers[i].clientX),
                clientY: ut(t.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: pt(),
                pointers: e,
                center: L(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function L(t) {
            var e = t.length;
            if (1 === e) return {
                x: ut(t[0].clientX),
                y: ut(t[0].clientY)
            };
            for (var i = 0, n = 0, s = 0; e > s;) i += t[s].clientX, n += t[s].clientY, s++;
            return {
                x: ut(i / e),
                y: ut(n / e)
            }
        }

        function O(t, e, i) {
            return {
                x: e / t || 0,
                y: i / t || 0
            }
        }

        function I(t, e) {
            return t === e ? At : dt(t) >= dt(e) ? t > 0 ? Ct : jt : e > 0 ? Lt : Ot
        }

        function $(t, e, i) {
            i || (i = Dt);
            var n = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return Math.sqrt(n * n + s * s)
        }

        function R(t, e, i) {
            i || (i = Dt);
            var n = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(s, n) / Math.PI
        }

        function D(t, e) {
            return R(e[1], e[0], Mt) - R(t[1], t[0], Mt)
        }

        function M(t, e) {
            return $(e[0], e[1], Mt) / $(t[0], t[1], Mt)
        }

        function N() {
            this.evEl = Ft, this.evWin = Bt, this.allow = !0, this.pressed = !1, S.apply(this, arguments)
        }

        function F() {
            this.evEl = Vt, this.evWin = zt, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function B() {
            this.evTarget = Gt, this.evWin = Xt, this.started = !1, S.apply(this, arguments)
        }

        function H(t, e) {
            var i = y(t.touches),
                n = y(t.changedTouches);
            return e & (Et | Pt) && (i = b(i.concat(n), "identifier", !0)), [i, n]
        }

        function q() {
            this.evTarget = Wt, this.targetIds = {}, S.apply(this, arguments)
        }

        function V(t, e) {
            var i = y(t.touches),
                n = this.targetIds;
            if (e & (St | kt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var s, r, a = y(t.changedTouches),
                o = [],
                l = this.target;
            if (r = i.filter(function(t) {
                    return g(t.target, l)
                }), e === St)
                for (s = 0; s < r.length;) n[r[s].identifier] = !0, s++;
            for (s = 0; s < a.length;) n[a[s].identifier] && o.push(a[s]), e & (Et | Pt) && delete n[a[s].identifier], s++;
            return o.length ? [b(r.concat(o), "identifier", !0), o] : void 0
        }

        function z() {
            S.apply(this, arguments);
            var t = c(this.handler, this);
            this.touch = new q(this.manager, t), this.mouse = new N(this.manager, t)
        }

        function Y(t, e) {
            this.manager = t, this.set(e)
        }

        function G(t) {
            if (m(t, ee)) return ee;
            var e = m(t, ie),
                i = m(t, ne);
            return e && i ? ie + " " + ne : e || i ? e ? ie : ne : m(t, te) ? te : Zt
        }

        function X(t) {
            this.id = x(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = d(this.options.enable, !0), this.state = se, this.simultaneous = {}, this.requireFail = []
        }

        function U(t) {
            return t & he ? "cancel" : t & oe ? "end" : t & ae ? "move" : t & re ? "start" : ""
        }

        function W(t) {
            return t == Ot ? "down" : t == Lt ? "up" : t == Ct ? "left" : t == jt ? "right" : ""
        }

        function J(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t
        }

        function Q() {
            X.apply(this, arguments)
        }

        function K() {
            Q.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Z() {
            Q.apply(this, arguments)
        }

        function tt() {
            X.apply(this, arguments), this._timer = null, this._input = null
        }

        function et() {
            Q.apply(this, arguments)
        }

        function it() {
            Q.apply(this, arguments)
        }

        function nt() {
            X.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function st(t, e) {
            return e = e || {}, e.recognizers = d(e.recognizers, st.defaults.preset), new rt(t, e)
        }

        function rt(t, e) {
            e = e || {}, this.options = l(e, st.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = k(this), this.touchAction = new Y(this, this.options.touchAction), at(this, !0), a(e.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function at(t, e) {
            var i = t.element;
            a(t.options.cssProps, function(t, n) {
                i.style[w(i.style, n)] = e ? t : ""
            })
        }

        function ot(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var lt = ["", "webkit", "moz", "MS", "ms", "o"],
            ht = e.createElement("div"),
            ct = "function",
            ut = Math.round,
            dt = Math.abs,
            pt = Date.now,
            ft = 1,
            gt = /mobile|tablet|ip(ad|hone|od)|android/i,
            mt = "ontouchstart" in t,
            vt = w(t, "PointerEvent") !== n,
            _t = mt && gt.test(navigator.userAgent),
            yt = "touch",
            bt = "pen",
            wt = "mouse",
            xt = "kinect",
            Tt = 25,
            St = 1,
            kt = 2,
            Et = 4,
            Pt = 8,
            At = 1,
            Ct = 2,
            jt = 4,
            Lt = 8,
            Ot = 16,
            It = Ct | jt,
            $t = Lt | Ot,
            Rt = It | $t,
            Dt = ["x", "y"],
            Mt = ["clientX", "clientY"];
        S.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(T(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(T(this.element), this.evWin, this.domHandler)
            }
        };
        var Nt = {
                mousedown: St,
                mousemove: kt,
                mouseup: Et
            },
            Ft = "mousedown",
            Bt = "mousemove mouseup";
        h(N, S, {
            handler: function(t) {
                var e = Nt[t.type];
                e & St && 0 === t.button && (this.pressed = !0), e & kt && 1 !== t.which && (e = Et), this.pressed && this.allow && (e & Et && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: wt,
                    srcEvent: t
                }))
            }
        });
        var Ht = {
                pointerdown: St,
                pointermove: kt,
                pointerup: Et,
                pointercancel: Pt,
                pointerout: Pt
            },
            qt = {
                2: yt,
                3: bt,
                4: wt,
                5: xt
            },
            Vt = "pointerdown",
            zt = "pointermove pointerup pointercancel";
        t.MSPointerEvent && (Vt = "MSPointerDown", zt = "MSPointerMove MSPointerUp MSPointerCancel"), h(F, S, {
            handler: function(t) {
                var e = this.store,
                    i = !1,
                    n = t.type.toLowerCase().replace("ms", ""),
                    s = Ht[n],
                    r = qt[t.pointerType] || t.pointerType,
                    a = r == yt,
                    o = _(e, t.pointerId, "pointerId");
                s & St && (0 === t.button || a) ? 0 > o && (e.push(t), o = e.length - 1) : s & (Et | Pt) && (i = !0), 0 > o || (e[o] = t, this.callback(this.manager, s, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: r,
                    srcEvent: t
                }), i && e.splice(o, 1))
            }
        });
        var Yt = {
                touchstart: St,
                touchmove: kt,
                touchend: Et,
                touchcancel: Pt
            },
            Gt = "touchstart",
            Xt = "touchstart touchmove touchend touchcancel";
        h(B, S, {
            handler: function(t) {
                var e = Yt[t.type];
                if (e === St && (this.started = !0), this.started) {
                    var i = H.call(this, t, e);
                    e & (Et | Pt) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: yt,
                        srcEvent: t
                    })
                }
            }
        });
        var Ut = {
                touchstart: St,
                touchmove: kt,
                touchend: Et,
                touchcancel: Pt
            },
            Wt = "touchstart touchmove touchend touchcancel";
        h(q, S, {
            handler: function(t) {
                var e = Ut[t.type],
                    i = V.call(this, t, e);
                i && this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: yt,
                    srcEvent: t
                })
            }
        }), h(z, S, {
            handler: function(t, e, i) {
                var n = i.pointerType == yt,
                    s = i.pointerType == wt;
                if (n) this.mouse.allow = !1;
                else if (s && !this.mouse.allow) return;
                e & (Et | Pt) && (this.mouse.allow = !0), this.callback(t, e, i)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Jt = w(ht.style, "touchAction"),
            Qt = Jt !== n,
            Kt = "compute",
            Zt = "auto",
            te = "manipulation",
            ee = "none",
            ie = "pan-x",
            ne = "pan-y";
        Y.prototype = {
            set: function(t) {
                t == Kt && (t = this.compute()), Qt && (this.manager.element.style[Jt] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return a(this.manager.recognizers, function(e) {
                    u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), G(t.join(" "))
            },
            preventDefaults: function(t) {
                if (!Qt) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) return void e.preventDefault();
                    var n = this.actions,
                        s = m(n, ee),
                        r = m(n, ne),
                        a = m(n, ie);
                    return s || r && i & It || a && i & $t ? this.preventSrc(e) : void 0
                }
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var se = 1,
            re = 2,
            ae = 4,
            oe = 8,
            le = oe,
            he = 16,
            ce = 32;
        X.prototype = {
            defaults: {},
            set: function(t) {
                return o(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (r(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return r(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (r(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = J(t, this), -1 === _(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (r(t, "dropRequireFailure", this)) return this;
                t = J(t, this);
                var e = _(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function e(e) {
                    i.manager.emit(i.options.event + (e ? U(n) : ""), t)
                }
                var i = this,
                    n = this.state;
                oe > n && e(!0), e(), n >= oe && e(!0)
            },
            tryEmit: function(t) {
                return this.canEmit() ? this.emit(t) : void(this.state = ce)
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (ce | se))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = o({}, t);
                return u(this.options.enable, [this, e]) ? (this.state & (le | he | ce) && (this.state = se), this.state = this.process(e), void(this.state & (re | ae | oe | he) && this.tryEmit(e))) : (this.reset(), void(this.state = ce))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, h(Q, X, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    i = t.eventType,
                    n = e & (re | ae),
                    s = this.attrTest(t);
                return n && (i & Pt || !s) ? e | he : n || s ? i & Et ? e | oe : e & re ? e | ae : re : ce
            }
        }), h(K, Q, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Rt
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & It && e.push(ne), t & $t && e.push(ie), e
            },
            directionTest: function(t) {
                var e = this.options,
                    i = !0,
                    n = t.distance,
                    s = t.direction,
                    r = t.deltaX,
                    a = t.deltaY;
                return s & e.direction || (e.direction & It ? (s = 0 === r ? At : 0 > r ? Ct : jt, i = r != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === a ? At : 0 > a ? Lt : Ot, i = a != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
            },
            attrTest: function(t) {
                return Q.prototype.attrTest.call(this, t) && (this.state & re || !(this.state & re) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = W(t.direction);
                e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
            }
        }), h(Z, Q, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ee]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & re)
            },
            emit: function(t) {
                if (this._super.emit.call(this, t), 1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + e, t)
                }
            }
        }), h(tt, X, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Zt]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    r = t.deltaTime > e.time;
                if (this._input = t, !n || !i || t.eventType & (Et | Pt) && !r) this.reset();
                else if (t.eventType & St) this.reset(), this._timer = s(function() {
                    this.state = le, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & Et) return le;
                return ce
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === le && (t && t.eventType & Et ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = pt(), this.manager.emit(this.options.event, this._input)))
            }
        }), h(et, Q, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ee]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & re)
            }
        }), h(it, Q, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: It | $t,
                pointers: 1
            },
            getTouchAction: function() {
                return K.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, i = this.options.direction;
                return i & (It | $t) ? e = t.velocity : i & It ? e = t.velocityX : i & $t && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && dt(e) > this.options.velocity && t.eventType & Et
            },
            emit: function(t) {
                var e = W(t.direction);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), h(nt, X, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [te]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    r = t.deltaTime < e.time;
                if (this.reset(), t.eventType & St && 0 === this.count) return this.failTimeout();
                if (n && r && i) {
                    if (t.eventType != Et) return this.failTimeout();
                    var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                        o = !this.pCenter || $(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, o && a ? this.count += 1 : this.count = 1, this._input = t;
                    var l = this.count % e.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = s(function() {
                        this.state = le, this.tryEmit()
                    }, e.interval, this), re) : le
                }
                return ce
            },
            failTimeout: function() {
                return this._timer = s(function() {
                    this.state = ce
                }, this.options.interval, this), ce
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == le && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), st.VERSION = "2.0.4", st.defaults = {
            domEvents: !1,
            touchAction: Kt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [et, {
                    enable: !1
                }],
                [Z, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [it, {
                    direction: It
                }],
                [K, {
                        direction: It
                    },
                    ["swipe"]
                ],
                [nt],
                [nt, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [tt]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var ue = 1,
            de = 2;
        rt.prototype = {
            set: function(t) {
                return o(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? de : ue
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var i, n = this.recognizers,
                        s = e.curRecognizer;
                    (!s || s && s.state & le) && (s = e.curRecognizer = null);
                    for (var r = 0; r < n.length;) i = n[r], e.stopped === de || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (re | ae | oe) && (s = e.curRecognizer = i), r++
                }
            },
            get: function(t) {
                if (t instanceof X) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null
            },
            add: function(t) {
                if (r(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (r(t, "remove", this)) return this;
                var e = this.recognizers;
                return t = this.get(t), e.splice(_(e, t), 1), this.touchAction.update(), this
            },
            on: function(t, e) {
                var i = this.handlers;
                return a(v(t), function(t) {
                    i[t] = i[t] || [], i[t].push(e)
                }), this
            },
            off: function(t, e) {
                var i = this.handlers;
                return a(v(t), function(t) {
                    e ? i[t].splice(_(i[t], e), 1) : delete i[t]
                }), this
            },
            emit: function(t, e) {
                this.options.domEvents && ot(t, e);
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](e), n++
                }
            },
            destroy: function() {
                this.element && at(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, o(st, {
            INPUT_START: St,
            INPUT_MOVE: kt,
            INPUT_END: Et,
            INPUT_CANCEL: Pt,
            STATE_POSSIBLE: se,
            STATE_BEGAN: re,
            STATE_CHANGED: ae,
            STATE_ENDED: oe,
            STATE_RECOGNIZED: le,
            STATE_CANCELLED: he,
            STATE_FAILED: ce,
            DIRECTION_NONE: At,
            DIRECTION_LEFT: Ct,
            DIRECTION_RIGHT: jt,
            DIRECTION_UP: Lt,
            DIRECTION_DOWN: Ot,
            DIRECTION_HORIZONTAL: It,
            DIRECTION_VERTICAL: $t,
            DIRECTION_ALL: Rt,
            Manager: rt,
            Input: S,
            TouchAction: Y,
            TouchInput: q,
            MouseInput: N,
            PointerEventInput: F,
            TouchMouseInput: z,
            SingleTouchInput: B,
            Recognizer: X,
            AttrRecognizer: Q,
            Tap: nt,
            Pan: K,
            Swipe: it,
            Pinch: Z,
            Rotate: et,
            Press: tt,
            on: p,
            off: f,
            each: a,
            merge: l,
            extend: o,
            inherit: h,
            bindFn: c,
            prefixed: w
        }), typeof define == ct && define.amd ? define("hammerjs", [], function() {
            return st
        }) : "undefined" != typeof module && module.exports ? module.exports = st : t[i] = st
    }(window, document, "Hammer"),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("backbone", ["underscore", "jquery", "exports"], function(i, n, s) {
            t.Backbone = e(t, s, i, n)
        });
        else if ("undefined" != typeof exports) {
            var i, n = require("underscore");
            try {
                i = require("jquery")
            } catch (s) {}
            e(t, exports, n, i)
        } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
    }(this, function(t, e, i, n) {
        var s = t.Backbone,
            r = [],
            a = (r.push, r.slice);
        r.splice;
        e.VERSION = "1.1.0", e.$ = n, e.noConflict = function() {
            return t.Backbone = s, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var o = e.Events = {
                on: function(t, e, i) {
                    if (!h(this, "on", t, [e, i]) || !e) return this;
                    this._events || (this._events = {});
                    var n = this._events[t] || (this._events[t] = []);
                    return n.push({
                        callback: e,
                        context: i,
                        ctx: i || this
                    }), this
                },
                once: function(t, e, n) {
                    if (!h(this, "once", t, [e, n]) || !e) return this;
                    var s = this,
                        r = i.once(function() {
                            s.off(t, r), e.apply(this, arguments)
                        });
                    return r._callback = e, this.on(t, r, n)
                },
                off: function(t, e, n) {
                    var s, r, a, o, l, c, u, d;
                    if (!this._events || !h(this, "off", t, [e, n])) return this;
                    if (!t && !e && !n) return this._events = void 0, this;
                    for (o = t ? [t] : i.keys(this._events), l = 0, c = o.length; c > l; l++)
                        if (t = o[l], a = this._events[t]) {
                            if (this._events[t] = s = [], e || n)
                                for (u = 0, d = a.length; d > u; u++) r = a[u], (e && e !== r.callback && e !== r.callback._callback || n && n !== r.context) && s.push(r);
                            s.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function(t) {
                    if (!this._events) return this;
                    var e = a.call(arguments, 1);
                    if (!h(this, "trigger", t, e)) return this;
                    var i = this._events[t],
                        n = this._events.all;
                    return i && c(i, e), n && c(n, arguments), this
                },
                stopListening: function(t, e, n) {
                    var s = this._listeningTo;
                    if (!s) return this;
                    var r = !e && !n;
                    n || "object" != typeof e || (n = this), t && ((s = {})[t._listenId] = t);
                    for (var a in s) t = s[a], t.off(e, n, this), (r || i.isEmpty(t._events)) && delete this._listeningTo[a];
                    return this
                }
            },
            l = /\s+/,
            h = function(t, e, i, n) {
                if (!i) return !0;
                if ("object" == typeof i) {
                    for (var s in i) t[e].apply(t, [s, i[s]].concat(n));
                    return !1
                }
                if (l.test(i)) {
                    for (var r = i.split(l), a = 0, o = r.length; o > a; a++) t[e].apply(t, [r[a]].concat(n));
                    return !1
                }
                return !0
            },
            c = function(t, e) {
                var i, n = -1,
                    s = t.length,
                    r = e[0],
                    a = e[1],
                    o = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx);
                        return;
                    case 1:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r);
                        return;
                    case 2:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, a);
                        return;
                    case 3:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, a, o);
                        return;
                    default:
                        for (; ++n < s;)(i = t[n]).callback.apply(i.ctx, e)
                }
            },
            u = {
                listenTo: "on",
                listenToOnce: "once"
            };
        i.each(u, function(t, e) {
            o[e] = function(e, n, s) {
                var r = this._listeningTo || (this._listeningTo = {}),
                    a = e._listenId || (e._listenId = i.uniqueId("l"));
                return r[a] = e, s || "object" != typeof n || (s = this), e[t](n, s, this), this
            }
        }), o.bind = o.on, o.unbind = o.off, i.extend(e, o);
        var d = e.Model = function(t, e) {
            var n = t || {};
            e || (e = {}), this.cid = i.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (n = this.parse(n, e) || {}), n = i.defaults({}, n, i.result(this, "defaults")), this.set(n, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(d.prototype, o, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(t) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return i.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, n) {
                var s, r, a, o, l, h, c, u;
                if (null == t) return this;
                if ("object" == typeof t ? (r = t, n = e) : (r = {})[t] = e, n || (n = {}), !this._validate(r, n)) return !1;
                a = n.unset, l = n.silent, o = [], h = this._changing, this._changing = !0, h || (this._previousAttributes = i.clone(this.attributes), this.changed = {}), u = this.attributes, c = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
                for (s in r) e = r[s], i.isEqual(u[s], e) || o.push(s), i.isEqual(c[s], e) ? delete this.changed[s] : this.changed[s] = e, a ? delete u[s] : u[s] = e;
                if (!l) {
                    o.length && (this._pending = n);
                    for (var d = 0, p = o.length; p > d; d++) this.trigger("change:" + o[d], this, u[o[d]], n)
                }
                if (h) return this;
                if (!l)
                    for (; this._pending;) n = this._pending, this._pending = !1, this.trigger("change", this, n);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(t, e) {
                return this.set(t, void 0, i.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var n in this.attributes) e[n] = void 0;
                return this.set(e, i.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t) return this.hasChanged() ? i.clone(this.changed) : !1;
                var e, n = !1,
                    s = this._changing ? this._previousAttributes : this.attributes;
                for (var r in t) i.isEqual(s[r], e = t[r]) || ((n || (n = {}))[r] = e);
                return n
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = t ? i.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = this,
                    n = t.success;
                return t.success = function(i) {
                    return e.set(e.parse(i, t), t) ? (n && n(e, i, t), void e.trigger("sync", e, i, t)) : !1
                }, M(this, t), this.sync("read", this, t)
            },
            save: function(t, e, n) {
                var s, r, a, o = this.attributes;
                if (null == t || "object" == typeof t ? (s = t, n = e) : (s = {})[t] = e, n = i.extend({
                        validate: !0
                    }, n), s && !n.wait) {
                    if (!this.set(s, n)) return !1
                } else if (!this._validate(s, n)) return !1;
                s && n.wait && (this.attributes = i.extend({}, o, s)), void 0 === n.parse && (n.parse = !0);
                var l = this,
                    h = n.success;
                return n.success = function(t) {
                    l.attributes = o;
                    var e = l.parse(t, n);
                    return n.wait && (e = i.extend(s || {}, e)), i.isObject(e) && !l.set(e, n) ? !1 : (h && h(l, t, n), void l.trigger("sync", l, t, n))
                }, M(this, n), r = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === r && (n.attrs = s), a = this.sync(r, this, n), s && n.wait && (this.attributes = o), a
            },
            destroy: function(t) {
                t = t ? i.clone(t) : {};
                var e = this,
                    n = t.success,
                    s = function() {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function(i) {
                        (t.wait || e.isNew()) && s(), n && n(e, i, t), e.isNew() || e.trigger("sync", e, i, t)
                    }, this.isNew()) return t.success(), !1;
                M(this, t);
                var r = this.sync("delete", this, t);
                return t.wait || s(), r
            },
            url: function() {
                var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || D();
                return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(t) {
                return this._validate({}, i.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate) return !0;
                t = i.extend({}, this.attributes, t);
                var n = this.validationError = this.validate(t, e) || null;
                return n ? (this.trigger("invalid", this, n, i.extend(e, {
                    validationError: n
                })), !1) : !0
            }
        });
        var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
        i.each(p, function(t) {
            d.prototype[t] = function() {
                var e = a.call(arguments);
                return e.unshift(this.attributes), i[t].apply(i, e)
            }
        });
        var f = e.Collection = function(t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, i.extend({
                    silent: !0
                }, e))
            },
            g = {
                add: !0,
                remove: !0,
                merge: !0
            },
            m = {
                add: !0,
                remove: !1
            };
        i.extend(f.prototype, o, {
            model: d,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            add: function(t, e) {
                return this.set(t, i.extend({
                    merge: !1
                }, e, m))
            },
            remove: function(t, e) {
                var n = !i.isArray(t);
                t = n ? [t] : i.clone(t), e || (e = {});
                var s, r, a, o;
                for (s = 0, r = t.length; r > s; s++) o = t[s] = this.get(t[s]), o && (a = this.indexOf(o), this.models.splice(a, 1), this.length--, e.silent || (e.index = a, o.trigger("remove", o, this, e)), this._removeReference(o, e));
                return n ? t[0] : t
            },
            set: function(t, e) {
                e = i.defaults({}, e, g), e.parse && (t = this.parse(t, e));
                var n = !i.isArray(t);
                t = n ? t ? [t] : [] : i.clone(t);
                var s, r, a, o, l, h, c, u = e.at,
                    p = this.model,
                    f = this.comparator && null == u && e.sort !== !1,
                    m = i.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    _ = [],
                    y = {},
                    b = e.add,
                    w = e.merge,
                    x = e.remove,
                    T = !f && b && x ? [] : !1;
                for (s = 0, r = t.length; r > s; s++) {
                    if (l = t[s] || {}, a = l instanceof d ? o = l : l[p.prototype.idAttribute || "id"], h = this.get(a)) x && (y[h.cid] = !0), w && (l = l === o ? o.attributes : l, e.parse && (l = h.parse(l, e)), h.set(l, e), f && !c && h.hasChanged(m) && (c = !0)), t[s] = h;
                    else if (b) {
                        if (o = t[s] = this._prepareModel(l, e), !o) continue;
                        v.push(o), this._addReference(o, e)
                    }
                    T && T.push(h || o)
                }
                if (x) {
                    for (s = 0, r = this.length; r > s; ++s) y[(o = this.models[s]).cid] || _.push(o);
                    _.length && this.remove(_, e)
                }
                if (v.length || T && T.length)
                    if (f && (c = !0), this.length += v.length, null != u)
                        for (s = 0, r = v.length; r > s; s++) this.models.splice(u + s, 0, v[s]);
                    else {
                        T && (this.models.length = 0);
                        var S = T || v;
                        for (s = 0, r = S.length; r > s; s++) this.models.push(S[s])
                    }
                if (c && this.sort({
                        silent: !0
                    }), !e.silent) {
                    for (s = 0, r = v.length; r > s; s++)(o = v[s]).trigger("add", o, this, e);
                    (c || T && T.length) && this.trigger("sort", this, e)
                }
                return n ? t[0] : t
            },
            reset: function(t, e) {
                e || (e = {});
                for (var n = 0, s = this.models.length; s > n; n++) this._removeReference(this.models[n], e);
                return e.previousModels = this.models, this._reset(), t = this.add(t, i.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function(t, e) {
                return this.add(t, i.extend({
                    at: this.length
                }, e))
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function(t, e) {
                return this.add(t, i.extend({
                    at: 0
                }, e))
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            slice: function() {
                return a.apply(this.models, arguments)
            },
            get: function(t) {
                return null == t ? void 0 : this._byId[t] || this._byId[t.id] || this._byId[t.cid]
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t, e) {
                return i.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var i in t)
                        if (t[i] !== e.get(i)) return !1;
                    return !0
                })
            },
            findWhere: function(t) {
                return this.where(t, !0)
            },
            sort: function(t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function(t) {
                return i.invoke(this.models, "get", t)
            },
            fetch: function(t) {
                t = t ? i.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success,
                    n = this;
                return t.success = function(i) {
                    var s = t.reset ? "reset" : "set";
                    n[s](i, t), e && e(n, i, t), n.trigger("sync", n, i, t)
                }, M(this, t), this.sync("read", this, t)
            },
            create: function(t, e) {
                if (e = e ? i.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                e.wait || this.add(t, e);
                var n = this,
                    s = e.success;
                return e.success = function(t, i) {
                    e.wait && n.add(t, e), s && s(t, i, e)
                }, t.save(null, e), t
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (t instanceof d) return t;
                e = e ? i.clone(e) : {}, e.collection = this;
                var n = new this.model(t, e);
                return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n
            },
            _addReference: function(t, e) {
                this._byId[t.cid] = t, null != t.id && (this._byId[t.id] = t), t.collection || (t.collection = this), t.on("all", this._onModelEvent, this)
            },
            _removeReference: function(t, e) {
                delete this._byId[t.id], delete this._byId[t.cid], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, i, n) {
                ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        i.each(v, function(t) {
            f.prototype[t] = function() {
                var e = a.call(arguments);
                return e.unshift(this.models), i[t].apply(i, e)
            }
        });
        var _ = ["groupBy", "countBy", "sortBy", "indexBy"];
        i.each(_, function(t) {
            f.prototype[t] = function(e, n) {
                var s = i.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return i[t](this.models, s, n)
            }
        });
        var y = e.View = function(t) {
                this.cid = i.uniqueId("view"), t || (t = {}), i.extend(this, i.pick(t, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            b = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(y.prototype, o, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(t, i) {
                return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], i !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(t) {
                if (!t && !(t = i.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var n = t[e];
                    if (i.isFunction(n) || (n = this[t[e]]), n) {
                        var s = e.match(b),
                            r = s[1],
                            a = s[2];
                        n = i.bind(n, this), r += ".delegateEvents" + this.cid, "" === a ? this.$el.on(r, n) : this.$el.on(r, a, n)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(i.result(this, "el"), !1);
                else {
                    var t = i.extend({}, i.result(this, "attributes"));
                    this.id && (t.id = i.result(this, "id")), this.className && (t["class"] = i.result(this, "className"));
                    var n = e.$("<" + i.result(this, "tagName") + ">").attr(t);
                    this.setElement(n, !1)
                }
            }
        }), e.sync = function(t, n, s) {
            var r = T[t];
            i.defaults(s || (s = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var a = {
                type: r,
                dataType: "json"
            };
            if (s.url || (a.url = i.result(n, "url") || D()), null != s.data || !n || "create" !== t && "update" !== t && "patch" !== t || (a.contentType = "application/json", a.data = JSON.stringify(s.attrs || n.toJSON(s))), s.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                    model: a.data
                } : {}), s.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                a.type = "POST", s.emulateJSON && (a.data._method = r);
                var o = s.beforeSend;
                s.beforeSend = function(t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", r), o ? o.apply(this, arguments) : void 0
                }
            }
            "GET" === a.type || s.emulateJSON || (a.processData = !1), "PATCH" === a.type && x && (a.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = s.xhr = e.ajax(i.extend(a, s));
            return n.trigger("request", n, l, s), l
        };
        var x = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            T = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        e.ajax = function() {
            return e.$.ajax.apply(e.$, arguments)
        };
        var S = e.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            k = /\((.*?)\)/g,
            E = /(\(\?)?:\w+/g,
            P = /\*\w+/g,
            A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(S.prototype, o, {
            initialize: function() {},
            route: function(t, n, s) {
                i.isRegExp(t) || (t = this._routeToRegExp(t)), i.isFunction(n) && (s = n, n = ""), s || (s = this[n]);
                var r = this;
                return e.history.route(t, function(i) {
                    var a = r._extractParameters(t, i);
                    s && s.apply(r, a), r.trigger.apply(r, ["route:" + n].concat(a)), r.trigger("route", n, a), e.history.trigger("route", r, n, a)
                }), this
            },
            navigate: function(t, i) {
                return e.history.navigate(t, i), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = i.result(this, "routes");
                    for (var t, e = i.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(A, "\\$&").replace(k, "(?:$1)?").replace(E, function(t, e) {
                    return e ? t : "([^/]+)"
                }).replace(P, "(.*?)"), new RegExp("^" + t + "$")
            },
            _extractParameters: function(t, e) {
                var n = t.exec(e).slice(1);
                return i.map(n, function(t) {
                    return t ? decodeURIComponent(t) : null
                })
            }
        });
        var C = e.History = function() {
                this.handlers = [], i.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            j = /^[#\/]|\s+$/g,
            L = /^\/+|\/+$/g,
            O = /msie [\w.]+/,
            I = /\/$/,
            $ = /[?#].*$/;
        C.started = !1, i.extend(C.prototype, o, {
            interval: 50,
            getHash: function(t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function(t, e) {
                if (null == t)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        t = this.location.pathname;
                        var i = this.root.replace(I, "");
                        t.indexOf(i) || (t = t.slice(i.length))
                    } else t = this.getHash();
                return t.replace(j, "")
            },
            start: function(t) {
                if (C.started) throw new Error("Backbone.history has already been started");
                C.started = !0, this.options = i.extend({
                    root: "/"
                }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var n = this.getFragment(),
                    s = document.documentMode,
                    r = O.exec(navigator.userAgent.toLowerCase()) && (!s || 7 >= s);
                this.root = ("/" + this.root + "/").replace(L, "/"), r && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
                var a = this.location,
                    o = a.pathname.replace(/[^\/]$/, "$&/") === this.root;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !o) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._hasPushState && o && a.hash && (this.fragment = this.getHash().replace(j, ""), this.history.replaceState({}, document.title, this.root + this.fragment + a.search))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), C.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function(t) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function(t) {
                return t = this.fragment = this.getFragment(t), i.any(this.handlers, function(e) {
                    return e.route.test(t) ? (e.callback(t), !0) : void 0
                })
            },
            navigate: function(t, e) {
                if (!C.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                });
                var i = this.root + (t = this.getFragment(t || ""));
                if (t = t.replace($, ""), this.fragment !== t) {
                    if (this.fragment = t, "" === t && "/" !== i && (i = i.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function(t, e, i) {
                if (i) {
                    var n = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(n + "#" + e)
                } else t.hash = "#" + e
            }
        }), e.history = new C;
        var R = function(t, e) {
            var n, s = this;
            n = t && i.has(t, "constructor") ? t.constructor : function() {
                return s.apply(this, arguments)
            }, i.extend(n, s, e);
            var r = function() {
                this.constructor = n
            };
            return r.prototype = s.prototype, n.prototype = new r, t && i.extend(n.prototype, t), n.__super__ = s.prototype, n
        };
        d.extend = f.extend = S.extend = y.extend = C.extend = R;
        var D = function() {
                throw new Error('A "url" property or function must be specified')
            },
            M = function(t, e) {
                var i = e.error;
                e.error = function(n) {
                    i && i(t, n, e), t.trigger("error", t, n, e)
                }
            };
        return e
    }), define("route/router", ["backbone", "underscore"], function(t, e) {
        var i = t.Router.extend({
            page: null,
            pageOptions: null,
            authCheck: null,
            fragmentList: null,
            initialize: function(t) {
                this.fragmentList = [], t && (this.authCheck = t.authCheck), this.on("route", this.onRoute, this)
            },
            start: function() {
                t.history.start()
            },
            setRoutes: function(t) {
                this.routeObjects = t, e.each(t, function(t) {
                    for (var e = t.fragments, i = 0; i < e.length; i++) {
                        var n = e[i];
                        this.route(n, t.id)
                    }
                }, this)
            },
            onRoute: function(t, e) {
                this.fragmentList.push({
                    page: t,
                    options: e
                });
                this.getRouteObjectByID(t);
                this._setPage(t, e)
            },
            setAuthCallBack: function(t) {
                this.authCheck = t
            },
            _setPage: function(t, e) {
                this.page = t, this.pageOptions = e, this.trigger("page", t, e)
            },
            getCloseDetailRedirectPage: function() {
                this.fragmentList[this.fragmentList.length - 1];
                if (this.fragmentList.length <= 1) return "TREE";
                for (var t = this.fragmentList.length - 1; t >= 0; t--) {
                    var e = this.fragmentList[t];
                    if ("DETAILS" !== e.page) return e
                }
                return "TREE"
            },
            getCloseHCIHRedirectPage: function() {
                this.fragmentList[this.fragmentList.length - 1];
                if (this.fragmentList.length <= 1) return "TREE";
                for (var t = this.fragmentList.length - 1; t >= 0; t--) {
                    var e = this.fragmentList[t];
                    if ("HOW_CAN_I_HELP" !== e.page) return e
                }
                return "TREE"
            },
            getPrevRoute: function() {
                return this.fragmentList.length <= 1 ? "TREE" : this.fragmentList[this.fragmentList.length - 2]
            },
            getRouteObjectByID: function(t) {
                var i = e.where(this.routeObjects, {
                    id: t
                });
                if (0 === i.length) throw Error("You requested a page without a valid routeID: " + t);
                var n = i[0];
                return n
            },
            back: function() {
                history.back()
            }
        });
        return new i
    }), define("model/tree/day_model", ["jquery", "underscore", "backbone"], function(t, e, i) {
        "use strict";
        var n = i.Model.extend({});
        return n
    }), define("model/tree/day_collection", ["jquery", "underscore", "backbone", "model/tree/day_model"], function(t, e, i, n) {
        "use strict";
        var s = i.Collection.extend({
            url: "#",
            model: n
        });
        return s
    }), define("model/categories/category_model", ["jquery", "underscore", "backbone", "config", "model/tree/day_collection"], function(t, e, i, n, s) {
        "use strict";
        var r = i.Model.extend({
            defaults: {
                index: 0,
                tag: "",
                title: "",
                route: "",
                days: null
            },
            initialize: function() {
                this.get("index") + 1;
                this.set("route", this.get("tag")), this.set("days", new s)
            },
            addDay: function(t) {
                var e = this.get("days").get(t.id);
                e && (e.set(t), t = e), this.get("days").add(t, {
                    merge: !0
                })
            },
            getDays: function() {
                return this.get("days")
            },
            getMediaDays: function() {
                var t = this.get("days").filter(function(t) {
                    return 0 !== t.get("media").length
                });
                return t
            },
            getIndexInCategory: function(t) {
                for (var e = 0; e < this.getMediaDays().length; e++)
                    if (this.getMediaDays()[e].get("fullRoute") === t) return e
            }
        });
        return r
    }), define("model/categories/category_collection", ["jquery", "underscore", "backbone", "config", "model/categories/category_model"], function(t, e, i, n, s) {
        "use strict";
        var r = i.Collection.extend({
            url: "#",
            model: s,
            initialize: function(t) {
                t.unshift({
                    tag: "hcih",
                    title: "How Can I Help?",
                    image: {
                        src: n.CDN + "/img/content/hcih.jpg",
                        w: "400",
                        h: "220"
                    }
                })
            },
            addDay: function(t, e) {
                var i = this.findWhere({
                    tag: t
                });
                i && i.addDay(e)
            }
        });
        return r
    }), define("model/tree/archive_model", ["jquery", "underscore", "backbone", "config"], function(t, e, i, n) {
        "use strict";
        var s = i.Model.extend({
            defaults: {
                index: 0,
                title: "",
                route: ""
            },
            initialize: function() {
                var t = this.get("index") + 1;
                this.set("route", 10 > t ? "0" + t : t.toString())
            }
        });
        return s
    }), define("model/tree/archive_collection", ["jquery", "underscore", "backbone", "model/app_model", "model/tree/archive_model"], function(t, e, i, n, s) {
        "use strict";
        var r = i.Collection.extend({
            url: "#",
            model: s,
            initialize: function(t) {
                n || (n = require("model/app_model"));
                for (var e, i, s, r = 0; r < t.length; r++) {
                    s = t[r], s.index = r;
                    var a = parseInt(s.date.substring(0, 4), 10);
                    if (0 === r ? (e = a, i = a) : e > a ? e = a : a > i && (i = a), s.tags)
                        for (var o = s.tags.length, l = 0; o > l; l++) n.addToCategory(s.tags[l], s)
                }
                this.firstYear = e, this.lastYear = i, this.title = e + " - " + i
            },
            getMediaDays: function() {
                var t = this.filter(function(t) {
                    return 0 !== t.get("media").length
                });
                return t
            }
        });
        return r
    }), define("model/howcanihelp/how_can_i_help_main_model", ["backbone", "config"], function(t, e) {
        "use strict";
        return t.Model.extend({
            initialize: function() {
                console.log("how_can_i_help_main_model initialize")
            },
            getFirstItemInCategory: function(t) {
                for (var e = this.get("howCanIHelp"), i = 0; i < e.length; i++) {
                    var n = e.at(i);
                    if (n.get("route") === t) {
                        var s = n.get("list");
                        return s.at(0)
                    }
                }
            },
            getCategoryAtIndex: function(t) {
                return this.get("howCanIHelp").at(t)
            },
            getFirstCategory: function() {
                var t = this.get("howCanIHelp");
                return t.at(0)
            },
            getInitRoute: function() {
                var t = this.getFirstCategory(),
                    e = this.getFirstItemInCategory(t.get("route"));
                return {
                    category: t.get("route"),
                    item: e.get("route")
                }
            },
            getCategoryTitle: function(t) {
                for (var e = this.get("howCanIHelp"), i = 0; i < e.length; i++) {
                    var n = e.at(i);
                    if (n.get("route") === t) {
                        var s = n.get("title");
                        return s
                    }
                }
            },
            getCategoryIndex: function(t) {
                for (var e = this.get("howCanIHelp"), i = 0; i < e.length; i++) {
                    var n = e.at(i);
                    if (n.get("route") === t) return i
                }
            },
            getIndexInCategory: function(t, e) {
                for (var i = this.get("howCanIHelp"), n = -1, s = null, r = 0; r < i.length; r++) {
                    var a = i.at(r);
                    if (a.get("route") === t) {
                        var o = a.get("list");
                        s = o;
                        for (var l = 0; l < o.length; l++) {
                            var h = o.at(l);
                            h.get("route") === e && (n = l)
                        }
                    }
                }
                return n + 1 + " / " + s.length
            },
            getItemInCategory: function(t, e) {
                var i = this.get("howCanIHelp"),
                    n = null;
                console.log("how can i help main model, getItemInCategory", t, e), console.log(i);
                for (var s = 0; s < i.length; s++) {
                    var r = i.at(s);
                    if (console.log("currnetCat", r), r.get("route") === t) {
                        var a = r.get("list");
                        n = a;
                        for (var o = 0; o < a.length; o++) {
                            var l = a.at(o);
                            if (l.get("route") === e) return l
                        }
                    }
                }
            },
            getNextItemInCategory: function(t, e) {
                for (var i = this.get("howCanIHelp"), n = -1, s = null, r = 0; r < i.length; r++) {
                    var a = i.at(r);
                    if (a.get("route") === t) {
                        var o = a.get("list");
                        s = o;
                        for (var l = 0; l < o.length; l++) {
                            var h = o.at(l);
                            h.get("route") === e && (n = l)
                        }
                    }
                }
                return s ? n + 1 < s.length ? s.at(n + 1) : s.at(0) : null
            },
            getPrevItemInCategory: function(t, e) {
                for (var i = this.get("howCanIHelp"), n = -1, s = null, r = 0; r < i.length; r++) {
                    var a = i.at(r);
                    if (a.get("route") === t) {
                        var o = a.get("list");
                        s = o;
                        for (var l = 0; l < o.length; l++) {
                            var h = o.at(l);
                            h.get("route") === e && (n = l)
                        }
                    }
                }
                return s ? n - 1 >= 0 ? s.at(n - 1) : s.at(s.length - 1) : null
            }
        })
    }), define("data/background_data", [], function() {
        return {
            landscape: [{
                small: "/img/background/background_01_small.jpg",
                large: "/img/background/background_01_large.jpg"
            }, {
                small: "/img/background/background_02_small.jpg",
                large: "/img/background/background_02_large.jpg"
            }, {
                small: "/img/background/background_03_small.jpg",
                large: "/img/background/background_03_large.jpg"
            }, {
                small: "/img/background/background_04_small.jpg",
                large: "/img/background/background_04_large.jpg"
            }, {
                small: "/img/background/background_05_small.jpg",
                large: "/img/background/background_05_large.jpg"
            }, {
                small: "/img/background/background_06_small.jpg",
                large: "/img/background/background_06_large.jpg"
            }, {
                small: "/img/background/background_07_small.jpg",
                large: "/img/background/background_07_large.jpg"
            }, {
                small: "/img/background/background_08_small.jpg",
                large: "/img/background/background_08_large.jpg"
            }, {
                small: "/img/background/background_09_small.jpg",
                large: "/img/background/background_09_large.jpg"
            }, {
                small: "/img/background/background_10_small.jpg",
                large: "/img/background/background_10_large.jpg"
            }, {
                small: "/img/background/background_11_small.jpg",
                large: "/img/background/background_11_large.jpg"
            }],
            detail: [{
                small: "/img/background/background_01_small.jpg",
                large: "/img/background/background_01_large.jpg"
            }, {
                small: "/img/background/background_02_small.jpg",
                large: "/img/background/background_10_large.jpg"
            }, {
                small: "/img/background/background_03_small.jpg",
                large: "/img/background/background_09_large.jpg"
            }, {
                small: "/img/background/background_04_small.jpg",
                large: "/img/background/background_08_large.jpg"
            }, {
                small: "/img/background/background_05_small.jpg",
                large: "/img/background/background_07_large.jpg"
            }, {
                small: "/img/background/background_06_small.jpg",
                large: "/img/background/background_06_large.jpg"
            }, {
                small: "/img/background/background_07_small.jpg",
                large: "/img/background/background_05_large.jpg"
            }, {
                small: "/img/background/background_08_small.jpg",
                large: "/img/background/background_04_large.jpg"
            }, {
                small: "/img/background/background_09_small.jpg",
                large: "/img/background/background_03_large.jpg"
            }, {
                small: "/img/background/background_10_small.jpg",
                large: "/img/background/background_02_large.jpg"
            }, {
                small: "/img/background/background_11_small.jpg",
                large: "/img/background/background_01_large.jpg"
            }]
        }
    }), define("model/app_model", ["backbone", "config", "route/router", "model/categories/category_collection", "model/tree/archive_collection", "model/howcanihelp/how_can_i_help_main_model", "data/background_data"], function(t, e, i, n, s, r, a) {
        "use strict";
        var o = t.Model.extend({
            PAGES: {
                TREE: "TREE",
                ABOUT: "ABOUT",
                HELP: "HELP",
                DETAILS: "DETAILS",
                LOADER: "LOADER",
                SUGGESTION: "SUGGESTION",
                CATEGORIES: "CATEGORIES",
                ARCHIVE: "ARCHIVE",
                HOW_CAN_I_HELP: "HOW_CAN_I_HELP"
            },
            PAGES_MOBILE: {
                TREE_MONTH: "TREE_MONTH",
                TREE_CATEGORY: "TREE_CATEGORY"
            },
            STATES: {
                YEAR: "YEAR",
                MONTH: "MONTH",
                DAY: "DAY"
            },
            ZOOM_IN_RANGE: .28,
            howCanIHelp: null,
            defaults: {
                page: null,
                years: null,
                categories: null,
                category: 1,
                categoryData: null,
                archive: null,
                archiveDay: 1,
                archiveData: null,
                features: null,
                backgrounds: null,
                feature: null,
                background: null,
                year: 0,
                month: 0,
                day: 0,
                zoom: 1,
                dayPoints: null,
                monthPoints: null,
                monthLines: null,
                treeSectionLegendPoint: null,
                rollOverYearIndex: -1,
                touchPinching: !1,
                state: "",
                progress: 0,
                isOverTree: !1,
                horizontalProgress: 0,
                horizontalProgressScale: 1,
                postLoaderPage: null,
                postLoaderPageOptions: null,
                applicationRatio: 1
            },
            needReint: !1,
            yearsLoaded: 0,
            PAGE_HEIGHT: 6e3,
            YEAR_TO_MONTH: .4,
            MONTH_TO_YEAR: .4,
            MONTH_TO_DAY: .8,
            DAY_TO_MONTH: .8,
            initialize: function() {
                _.bindAll(this, "onYearLoaded"), console.log("initializing how can i help"), this.howCanIHelp = new r, console.log("howCanIHelp", this.howCanIHelp), this.set("state", this.STATES.YEAR), t.on("year:loaded", this.onYearLoaded)
            },
            firstPageLoad: function() {
                return void 0 === this.get("pageOptions")
            },
            navigate: function(t, e, n) {
                this.set("isOnDetails", !1), t = this.getYear(t), e = t.getMonth(e), n = e.getDay(n), i.navigate("!/" + t.get("route") + "/" + e.get("route") + "/" + n.get("route"), {
                    trigger: !0
                })
            },
            navigateHome: function() {
                this.navigate(this.get("year"), this.get("month"), this.get("day"))
            },
            navigateYear: function(t) {
                this.navigate(t, 0, 0)
            },
            navigateMonth: function(t) {
                this.navigate(this.get("year"), t, 0)
            },
            navigateDay: function(t) {
                this.navigate(this.get("year"), this.get("month"), t)
            },
            navigateMonthDay: function(t, e) {
                this.navigate(this.get("year"), t, e)
            },
            navigateYearMonth: function(t, e) {
                this.navigate(t, e, 0)
            },
            navigateToDetails: function(t, e, n) {
                i.navigate("#!/" + t.get("route") + "/" + e.get("route") + "/" + n.get("route") + "/details", {
                    trigger: !0
                })
            },
            setCategory: function(t) {
                this.get("page") !== this.PAGES.DETAILS && this.set("archiveDay", 1);
                var e = this.get("categories").findWhere({
                        route: t
                    }),
                    i = e ? this.get("categories").indexOf(e) : 1;
                this.set("category", i)
            },
            addToCategory: function(t, e) {
                this.get("categories").addDay(t, e)
            },
            getCategories: function() {
                return this.get("categories")
            },
            getCategory: function(t) {
                t = void 0 !== t ? t : this.get("category");
                var e = this.getCategories().at(t);
                if (!e) throw "Category doesn't exist.";
                return e
            },
            navigateToCategories: function() {
                var t = this.get("categories").at(this.get("category"));
                t || (t = this.get("categories").at(0)), i.navigate("#!/categories/" + t.get("route"), {
                    trigger: !0
                })
            },
            navigateToCategory: function(t) {
                i.navigate("#!/categories/" + this.get("categories").at(t).get("route"), {
                    trigger: !0
                })
            },
            navigateToCategoryDetails: function(t) {
                if (this.set("category", t), console.log("navigate to category details"), console.log("index", t), 0 === t) {
                    var e = this.howCanIHelp.getInitRoute();
                    return console.log(e), void i.navigate("!/howcanihelp/" + e.category + "/" + e.item, {
                        trigger: !0
                    })
                }
                var n = this.getCategory(t).getDays().at(0),
                    s = this.get("pageOptions"),
                    r = s[0] + "/" + s[1] + "/" + s[2],
                    a = r === n.get("fullRoute") ? t : "";
                i.navigate("#!/" + n.get("fullRoute") + "/details/" + a, {
                    trigger: !0
                })
            },
            setCategoryPoints: function(t) {
                this.set("categoryPoints", t)
            },
            setArchiveDay: function(t, e, i) {
                this.get("page") !== this.PAGES.DETAILS && this.set("category", 1);
                var n = this.get("archive").findWhere({
                        fullRoute: t + "/" + e + "/" + i
                    }),
                    s = n ? this.get("archive").indexOf(n) : 1;
                this.set("archiveDay", s)
            },
            getArchive: function() {
                return this.get("archive")
            },
            getArchiveDay: function() {
                var t = this.get("archive").at(this.get("archiveDay"));
                if (!t) throw "Archive day doesn't exist.";
                return t
            },
            navigateToArchive: function() {
                var t = this.get("archive").at(this.get("archiveDay"));
                t || (t = this.get("archive").at(1)), i.navigate("#!/archive/" + t.get("fullRoute"), {
                    trigger: !0
                })
            },
            navigateToArchiveDay: function(t) {
                i.navigate("#!/archive/" + this.get("archive").at(t).get("fullRoute"), {
                    trigger: !0
                })
            },
            navigateToArchiveDetails: function(t) {
                var e = this.getArchive().at(t);
                i.navigate("#!/" + e.get("fullRoute") + "/details/", {
                    trigger: !0
                })
            },
            isArchiveDay: function(t) {
                for (var e = 0; e < this.getYears().models.length; e++)
                    if (this.getYears().models[e].get("route") === t) return !1;
                return !0
            },
            setArchivePoints: function(t) {
                this.set("archivePoints", t)
            },
            setDate: function(e, i, n) {
                this.get("page") !== this.PAGES.DETAILS && (this.set("archiveDay", 1), this.set("category", 1));
                var s = this.getYears(),
                    r = s.findWhere({
                        route: e
                    });
                if (!r) return void this.setArchiveDay(e, i, n);
                this.set("year", s.indexOf(r)), r.get("loaded") ? t.trigger("load:complete") : r.load();
                var a = this.getMonths(),
                    o = a.findWhere({
                        route: i
                    });
                o && this.set("month", a.indexOf(o));
                var l = this.getDays(),
                    h = l.findWhere({
                        route: n
                    });
                h && this.set("day", l.indexOf(h))
            },
            loadFullYearData: function() {
                var e = this.getYears(),
                    i = e.length;
                if (this.yearsLoaded === i) t.trigger("years:loaded");
                else
                    for (var n = 0; i > n; n++) {
                        var s = e.at(n);
                        s.get("loaded") || s.load()
                    }
            },
            onYearLoaded: function() {
                this.yearsLoaded++, console.log("onYearLoaded getInitRoute", this.howCanIHelp.getInitRoute()), this.yearsLoaded === this.getYears().length && (t.off("year:loaded", this.onYearLoaded), t.trigger("years:loaded"))
            },
            setProgress: function(t) {
                var e;
                e = t > this.getProgress() ? t > this.YEAR_TO_MONTH ? t > this.MONTH_TO_DAY ? this.STATES.DAY : e = this.STATES.MONTH : this.STATES.YEAR : t < this.DAY_TO_MONTH ? t < this.MONTH_TO_YEAR ? this.STATES.YEAR : this.STATES.MONTH : this.STATES.DAY;
                var i = +t.toFixed(4);.01 > i ? this.needReint && (this.needReint = !1, this.trigger("tree:section:need:init")) : (this.set("isOverTree", !1), this.needReint = !0), this.set("progress", i), this.set("state", e)
            },
            setState: function(t) {
                this.set("state", t)
            },
            setDayPoints: function(t) {
                this.set("dayPoints", t)
            },
            setMonthPoints: function(t) {
                this.set("monthPoints", t)
            },
            getNumberDaysByYear: function(t) {
                for (var e = 0, i = this.getYear(t), n = i.attributes.months.models, s = 0; s < n.length; s++) {
                    var r = n[s];
                    r.get("empty") || (e += r.attributes.days.length)
                }
                return e
            },
            getPrevYearLabel: function() {
                for (var t = this.getYear().get("route"), e = -1, i = 0; i < this.getYears().length; i++) {
                    var n = this.getYears().models[i];
                    n.get("route") === t && (e = i)
                }
                return 0 > e - 1 ? this.getYears().models[this.getYears().length - 1].get("route") : this.getYears().models[e - 1].get("route")
            },
            getNextYearLabel: function() {
                for (var t = this.getYear().get("route"), e = -1, i = 0; i < this.getYears().length; i++) {
                    var n = this.getYears().models[i];
                    n.get("route") === t && (e = i)
                }
                return e + 1 < this.getYears().length ? this.getYears().models[e + 1].get("route") : this.getYears().models[0].get("route")
            },
            getNonEmptyMonthForYear: function(t) {
                for (var e = this.getMonths(t).models, i = [], n = 0; n < e.length; n++) {
                    var s = e[n];
                    s.get("empty") || i.push(n)
                }
                if (i.length > 0) {
                    var r = parseInt(Math.random() * (i.length - .1), 10);
                    return i[r]
                }
                return null
            },
            getYears: function() {
                return this.get("years")
            },
            getYear: function(t) {
                t = void 0 !== t ? t : this.get("year");
                var e = this.getYears().at(t);
                if (!e) throw "Year doesn't exist.";
                return e
            },
            getMonths: function(t) {
                return this.getYear(t).getMonths()
            },
            getMonth: function(t) {
                t = void 0 !== t ? t : this.get("month");
                var e = this.getYear().getMonth(t);
                if (!e) throw "Month doesn't exist.";
                return e
            },
            getDays: function(t) {
                return this.getMonth(t).getDays()
            },
            getDay: function(t) {
                t = void 0 !== t ? t : this.get("day");
                var e = this.getMonth().getDay(t);
                if (!e) throw "Day doesn't exist.";
                return e
            },
            getProgress: function() {
                return this.get("progress")
            },
            getState: function() {
                return this.get("state")
            },
            returnPrevDay: function(t, e) {
                for (var i = -1, n = 0; n < e.length; n++) {
                    var s = e[n];
                    s.get("id") === t && (i = n)
                }
                return i - 1 >= 0 ? e[i - 1] : e[e.length - 1]
            },
            returnNextDay: function(t, e) {
                for (var i = -1, n = 0; n < e.length; n++) {
                    var s = e[n];
                    s.get("id") === t && (i = n)
                }
                return i + 1 < e.length ? e[i + 1] : e[0]
            },
            getPreviousDay: function(t) {
                t = void 0 !== t ? t : this.getDay().get("id");
                var e = this.getYear().getAllDays();
                return this.returnPrevDay(t, e)
            },
            getNextDay: function(t) {
                t = void 0 !== t ? t : this.getDay().get("id");
                var e = this.getYear().getAllDays();
                return this.returnNextDay(t, e)
            },
            getPreviousCatDay: function(t) {
                t = void 0 !== t ? t : this.getDay().get("id");
                var e = this.getCategory().getDays().models;
                return this.returnPrevDay(t, e)
            },
            getNextCatDay: function(t) {
                t = void 0 !== t ? t : this.getDay().get("id");
                var e = this.getCategory().getDays().models;
                return this.returnNextDay(t, e)
            },
            getPreviousArchiveDay: function(t) {
                t = void 0 !== t ? t : this.getArchiveDay().get("id");
                var e = this.getArchive().models;
                return this.returnPrevDay(t, e)
            },
            getNextArchiveDay: function(t) {
                t = void 0 !== t ? t : this.getArchiveDay().get("id");
                var e = this.getArchive().models;
                return this.returnNextDay(t, e)
            },
            getNextMonth: function() {
                var t = this.getDay().get("id"),
                    e = this.getMonthByDayID(t),
                    i = parseInt(e.get("index"), 10) + 1;
                if (11 >= i) {
                    var n = this.getMonth(i),
                        s = n.get("days").models;
                    if (s && s.length >= 1) {
                        var r = s[0];
                        return r
                    }
                }
                return null
            },
            getPrevMonth: function() {
                var t = this.getDay().get("id"),
                    e = this.getMonthByDayID(t),
                    i = parseInt(e.get("index"), 10) - 1;
                if (i >= 0) {
                    var n = this.getMonth(i),
                        s = n.get("days").models;
                    if (s && s.length >= 1) {
                        var r = s[0];
                        return r
                    }
                }
                return null
            },
            getMonthByDayID: function(t) {
                var e;
                return this.getYear().getMonths().each(function(i) {
                    i.getDays().each(function(n) {
                        n.get("id") === t && (e = i)
                    })
                }), e
            },
            getYearByMonthID: function(t) {
                var e;
                return this.getYears().each(function(i) {
                    i.getMonths().each(function(n) {
                        n.get("id") === t && (e = i)
                    })
                }), e
            },
            getYearIndex: function(t) {
                var e = this.getYears().indexOf(t);
                return e
            },
            getNextYear: function() {
                var t = this.get("year");
                return t < this.getYears().length - 1 ? t + 1 : 0
            },
            getPrevYear: function() {
                var t = this.get("year");
                return t > 0 ? t - 1 : this.getYears().length - 1
            },
            getBGLandscape: function() {
                return this.getBackground(a.landscape[0])
            },
            getBGLandscapeID: function() {
                return "background_landscape"
            },
            getBGDetail: function() {
                return this.getBackground(a.detail[0])
            },
            getBGDetailID: function() {
                return "background_detail"
            },
            getBackground: function(t) {
                var i = e.TABLET ? e.CDN + t.small : e.CDN + t.large;
                return i
            }
        });
        return new o
    }),
    function() {
        "use strict";
        var bind = function(t, e, i) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function() {
                var i = n.concat(Array.prototype.slice.call(arguments, 0));
                t.apply(e, i)
            }
        };
        window.console || (window.console = {});
        var console = window.console;
        if (!console.log)
            if (window.log4javascript) {
                var log = log4javascript.getDefaultLogger();
                console.log = bind(log.info, log), console.debug = bind(log.debug, log), console.info = bind(log.info, log), console.warn = bind(log.warn, log), console.error = bind(log.error, log)
            } else console.log = function(t) {};
        if (console.debug || (console.debug = console.log), console.info || (console.info = console.log), console.warn || (console.warn = console.log), console.error || (console.error = console.log), null != window.__consoleShimTest__ || eval("/*@cc_on @_jscript_version <= 9@*/")) {
            var wrap = function(t) {
                var e, i, n, s;
                if (t = Array.prototype.slice.call(arguments, 0), s = t.shift(), i = t.length, i > 1 && window.__consoleShimTest__ !== !1)
                    for ("string" != typeof t[0] && (t.unshift("%o"), i += 1), n = t[0].match(/%[a-z]/g), e = n ? n.length + 1 : 1; i > e; e += 1) t[0] += " %o";
                Function.apply.call(s, console, t)
            };
            console.log = bind(wrap, window, console.log), console.debug = bind(wrap, window, console.debug), console.info = bind(wrap, window, console.info), console.warn = bind(wrap, window, console.warn), console.error = bind(wrap, window, console.error)
        }
        if (console.assert || (console.assert = function() {
                var t = Array.prototype.slice.call(arguments, 0),
                    e = t.shift();
                e || (t[0] = "Assertion failed: " + t[0], console.error.apply(console, t))
            }), console.dir || (console.dir = console.log), console.dirxml || (console.dirxml = console.log), console.exception || (console.exception = console.error), !console.time || !console.timeEnd) {
            var timers = {};
            console.time = function(t) {
                timers[t] = (new Date).getTime()
            }, console.timeEnd = function(t) {
                var e = timers[t];
                e && (console.log(t + ": " + ((new Date).getTime() - e) + "ms"), delete timers[t])
            }
        }
        console.table || (console.table = function(t, e) {
            var i, n, s, r, a, o;
            if (t && t instanceof Array && t.length) {
                if (!(e && e instanceof Array)) {
                    e = [];
                    for (o in t[0]) t[0].hasOwnProperty(o) && e.push(o)
                }
                for (i = 0, n = t.length; n > i; i += 1) {
                    for (s = [], r = 0, a = e.length; a > r; r += 1) s.push(t[i][e[r]]);
                    Function.apply.call(console.log, console, s)
                }
            }
        }), console.clear || (console.clear = function() {}), console.trace || (console.trace = function() {}), console.group || (console.group = function() {}), console.groupCollapsed || (console.groupCollapsed = function() {}), console.groupEnd || (console.groupEnd = function() {}), console.timeStamp || (console.timeStamp = function() {}), console.profile || (console.profile = function() {}), console.profileEnd || (console.profileEnd = function() {}), console.count || (console.count = function() {})
    }(), define("libs/console-shim", function(t) {
        return function() {
            var e;
            return e || t.console
        }
    }(this)), define("console", ["libs/console-shim", "config"], function(t, e) {
        var i = {
            log: function(e) {
                this._isDebug() && t.log(e)
            },
            info: function(e) {
                this._isDebug() && t.info(e)
            },
            warn: function(e) {
                this._isDebug() && t.warn(e)
            },
            error: function(e) {
                this._isDebug() && t.error(e)
            },
            _isDebug: function() {
                return "local" === e.ENV || "true" === this._getParameterByName("debug") ? !0 : !1
            },
            _getParameterByName: function(t) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var e = new RegExp("[\\?&]" + t + "=([^&#]*)"),
                    i = e.exec(location.search);
                return null == i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
            }
        };
        return i
    }), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var t = createjs.PreloadJS = createjs.PreloadJS || {};
        t.version = "0.6.0", t.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
    }(), this.createjs = this.createjs || {}, createjs.extend = function(t, e) {
        "use strict";

        function i() {
            this.constructor = t
        }
        return i.prototype = e.prototype, t.prototype = new i
    }, this.createjs = this.createjs || {}, createjs.promote = function(t, e) {
        "use strict";
        var i = t.prototype,
            n = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
        if (n) {
            i[(e += "_") + "constructor"] = n.constructor;
            for (var s in n) i.hasOwnProperty(s) && "function" == typeof n[s] && (i[e + s] = n[s])
        }
        return t
    }, this.createjs = this.createjs || {}, createjs.indexOf = function(t, e) {
        "use strict";
        for (var i = 0, n = t.length; n > i; i++)
            if (e === t[i]) return i;
        return -1
    }, this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(t, e) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            throw "BrowserDetect cannot be instantiated"
        }
        var e = t.agent = window.navigator.userAgent;
        t.isWindowPhone = e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1, t.isFirefox = e.indexOf("Firefox") > -1, t.isOpera = null != window.opera, t.isChrome = e.indexOf("Chrome") > -1, t.isIOS = (e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) && !t.isWindowPhone, t.isAndroid = e.indexOf("Android") > -1 && !t.isWindowPhone, t.isBlackberry = e.indexOf("Blackberry") > -1, createjs.BrowserDetect = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var e = t.prototype;
        e.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        }, e.stopPropagation = function() {
            this.propagationStopped = !0;
        }, e.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, e.remove = function() {
            this.removed = !0
        }, e.clone = function() {
            return new t(this.type, this.bubbles, this.cancelable)
        }, e.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this
        }, e.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.Event_constructor("error"), this.title = t, this.message = e, this.data = i
        }
        var e = createjs.extend(t, createjs.Event);
        e.clone = function() {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(t, "Event")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this._listeners = null, this._captureListeners = null
        }
        var e = t.prototype;
        t.initialize = function(t) {
            t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
        }, e.addEventListener = function(t, e, i) {
            var n;
            n = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var s = n[t];
            return s && this.removeEventListener(t, e, i), s = n[t], s ? s.push(e) : n[t] = [e], e
        }, e.on = function(t, e, i, n, s, r) {
            return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function(t) {
                e.call(i, t, s), n && t.remove()
            }, r)
        }, e.removeEventListener = function(t, e, i) {
            var n = i ? this._captureListeners : this._listeners;
            if (n) {
                var s = n[t];
                if (s)
                    for (var r = 0, a = s.length; a > r; r++)
                        if (s[r] == e) {
                            1 == a ? delete n[t] : s.splice(r, 1);
                            break
                        }
            }
        }, e.off = e.removeEventListener, e.removeAllEventListeners = function(t) {
            t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
        }, e.dispatchEvent = function(t) {
            if ("string" == typeof t) {
                var e = this._listeners;
                if (!e || !e[t]) return !1;
                t = new createjs.Event(t)
            } else t.target && t.clone && (t = t.clone());
            try {
                t.target = this
            } catch (i) {}
            if (t.bubbles && this.parent) {
                for (var n = this, s = [n]; n.parent;) s.push(n = n.parent);
                var r, a = s.length;
                for (r = a - 1; r >= 0 && !t.propagationStopped; r--) s[r]._dispatchEvent(t, 1 + (0 == r));
                for (r = 1; a > r && !t.propagationStopped; r++) s[r]._dispatchEvent(t, 3)
            } else this._dispatchEvent(t, 2);
            return t.defaultPrevented
        }, e.hasEventListener = function(t) {
            var e = this._listeners,
                i = this._captureListeners;
            return !!(e && e[t] || i && i[t])
        }, e.willTrigger = function(t) {
            for (var e = this; e;) {
                if (e.hasEventListener(t)) return !0;
                e = e.parent
            }
            return !1
        }, e.toString = function() {
            return "[EventDispatcher]"
        }, e._dispatchEvent = function(t, e) {
            var i, n = 1 == e ? this._captureListeners : this._listeners;
            if (t && n) {
                var s = n[t.type];
                if (!s || !(i = s.length)) return;
                try {
                    t.currentTarget = this
                } catch (r) {}
                try {
                    t.eventPhase = e
                } catch (r) {}
                t.removed = !1, s = s.slice();
                for (var a = 0; i > a && !t.immediatePropagationStopped; a++) {
                    var o = s[a];
                    o.handleEvent ? o.handleEvent(t) : o(t), t.removed && (this.off(t.type, o, 1 == e), t.removed = !1)
                }
            }
        }, createjs.EventDispatcher = t
    }(), this.createjs = this.createjs || {},
    function(t) {
        "use strict";

        function e(t, e) {
            this.Event_constructor("progress"), this.loaded = t, this.total = null == e ? 1 : e, this.progress = 0 == e ? 0 : this.loaded / this.total
        }
        var i = createjs.extend(e, createjs.Event);
        i.clone = function() {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(e, "Event")
    }(window),
    function() {
        function t(e, n) {
            function r(t) {
                if (r[t] !== m) return r[t];
                var e;
                if ("bug-string-char-index" == t) e = "a" != "a" [0];
                else if ("json" == t) e = r("json-stringify") && r("json-parse");
                else {
                    var i, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == t) {
                        var l = n.stringify,
                            c = "function" == typeof l && y;
                        if (c) {
                            (i = function() {
                                return 1
                            }).toJSON = i;
                            try {
                                c = "0" === l(0) && "0" === l(new a) && '""' == l(new o) && l(_) === m && l(m) === m && l() === m && "1" === l(i) && "[1]" == l([i]) && "[null]" == l([m]) && "null" == l(null) && "[null,null,null]" == l([m, _, null]) && l({
                                    a: [i, !0, !1, null, "\x00\b\n\f\r	"]
                                }) == s && "1" === l(null, i) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new h(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == l(new h(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new h(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l(new h(-1))
                            } catch (u) {
                                c = !1
                            }
                        }
                        e = c
                    }
                    if ("json-parse" == t) {
                        var d = n.parse;
                        if ("function" == typeof d) try {
                            if (0 === d("0") && !d(!1)) {
                                i = d(s);
                                var p = 5 == i.a.length && 1 === i.a[0];
                                if (p) {
                                    try {
                                        p = !d('"	"')
                                    } catch (u) {}
                                    if (p) try {
                                        p = 1 !== d("01")
                                    } catch (u) {}
                                    if (p) try {
                                        p = 1 !== d("1.")
                                    } catch (u) {}
                                }
                            }
                        } catch (u) {
                            p = !1
                        }
                        e = p
                    }
                }
                return r[t] = !!e
            }
            e || (e = s.Object()), n || (n = s.Object());
            var a = e.Number || s.Number,
                o = e.String || s.String,
                l = e.Object || s.Object,
                h = e.Date || s.Date,
                c = e.SyntaxError || s.SyntaxError,
                u = e.TypeError || s.TypeError,
                d = e.Math || s.Math,
                p = e.JSON || s.JSON;
            "object" == typeof p && p && (n.stringify = p.stringify, n.parse = p.parse);
            var f, g, m, v = l.prototype,
                _ = v.toString,
                y = new h(-0xc782b5b800cec);
            try {
                y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
            } catch (b) {}
            if (!r("json")) {
                var w = "[object Function]",
                    x = "[object Date]",
                    T = "[object Number]",
                    S = "[object String]",
                    k = "[object Array]",
                    E = "[object Boolean]",
                    P = r("bug-string-char-index");
                if (!y) var A = d.floor,
                    C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    j = function(t, e) {
                        return C[e] + 365 * (t - 1970) + A((t - 1969 + (e = +(e > 1))) / 4) - A((t - 1901 + e) / 100) + A((t - 1601 + e) / 400)
                    };
                if ((f = v.hasOwnProperty) || (f = function(t) {
                        var e, i = {};
                        return (i.__proto__ = null, i.__proto__ = {
                            toString: 1
                        }, i).toString != _ ? f = function(t) {
                            var e = this.__proto__,
                                i = t in (this.__proto__ = null, this);
                            return this.__proto__ = e, i
                        } : (e = i.constructor, f = function(t) {
                            var i = (this.constructor || e).prototype;
                            return t in this && !(t in i && this[t] === i[t])
                        }), i = null, f.call(this, t)
                    }), g = function(t, e) {
                        var n, s, r, a = 0;
                        (n = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, s = new n;
                        for (r in s) f.call(s, r) && a++;
                        return n = s = null, a ? g = 2 == a ? function(t, e) {
                            var i, n = {},
                                s = _.call(t) == w;
                            for (i in t) s && "prototype" == i || f.call(n, i) || !(n[i] = 1) || !f.call(t, i) || e(i)
                        } : function(t, e) {
                            var i, n, s = _.call(t) == w;
                            for (i in t) s && "prototype" == i || !f.call(t, i) || (n = "constructor" === i) || e(i);
                            (n || f.call(t, i = "constructor")) && e(i)
                        } : (s = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], g = function(t, e) {
                            var n, r, a = _.call(t) == w,
                                o = !a && "function" != typeof t.constructor && i[typeof t.hasOwnProperty] && t.hasOwnProperty || f;
                            for (n in t) a && "prototype" == n || !o.call(t, n) || e(n);
                            for (r = s.length; n = s[--r]; o.call(t, n) && e(n));
                        }), g(t, e)
                    }, !r("json-stringify")) {
                    var L = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        O = "000000",
                        I = function(t, e) {
                            return (O + (e || 0)).slice(-t)
                        },
                        $ = "\\u00",
                        R = function(t) {
                            for (var e = '"', i = 0, n = t.length, s = !P || n > 10, r = s && (P ? t.split("") : t); n > i; i++) {
                                var a = t.charCodeAt(i);
                                switch (a) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        e += L[a];
                                        break;
                                    default:
                                        if (32 > a) {
                                            e += $ + I(2, a.toString(16));
                                            break
                                        }
                                        e += s ? r[i] : t.charAt(i)
                                }
                            }
                            return e + '"'
                        },
                        D = function(t, e, i, n, s, r, a) {
                            var o, l, h, c, d, p, v, y, b, w, P, C, L, O, $, M;
                            try {
                                o = e[t]
                            } catch (N) {}
                            if ("object" == typeof o && o)
                                if (l = _.call(o), l != x || f.call(o, "toJSON")) "function" == typeof o.toJSON && (l != T && l != S && l != k || f.call(o, "toJSON")) && (o = o.toJSON(t));
                                else if (o > -1 / 0 && 1 / 0 > o) {
                                if (j) {
                                    for (d = A(o / 864e5), h = A(d / 365.2425) + 1970 - 1; j(h + 1, 0) <= d; h++);
                                    for (c = A((d - j(h, 0)) / 30.42); j(h, c + 1) <= d; c++);
                                    d = 1 + d - j(h, c), p = (o % 864e5 + 864e5) % 864e5, v = A(p / 36e5) % 24, y = A(p / 6e4) % 60, b = A(p / 1e3) % 60, w = p % 1e3
                                } else h = o.getUTCFullYear(), c = o.getUTCMonth(), d = o.getUTCDate(), v = o.getUTCHours(), y = o.getUTCMinutes(), b = o.getUTCSeconds(), w = o.getUTCMilliseconds();
                                o = (0 >= h || h >= 1e4 ? (0 > h ? "-" : "+") + I(6, 0 > h ? -h : h) : I(4, h)) + "-" + I(2, c + 1) + "-" + I(2, d) + "T" + I(2, v) + ":" + I(2, y) + ":" + I(2, b) + "." + I(3, w) + "Z"
                            } else o = null;
                            if (i && (o = i.call(e, t, o)), null === o) return "null";
                            if (l = _.call(o), l == E) return "" + o;
                            if (l == T) return o > -1 / 0 && 1 / 0 > o ? "" + o : "null";
                            if (l == S) return R("" + o);
                            if ("object" == typeof o) {
                                for (O = a.length; O--;)
                                    if (a[O] === o) throw u();
                                if (a.push(o), P = [], $ = r, r += s, l == k) {
                                    for (L = 0, O = o.length; O > L; L++) C = D(L, o, i, n, s, r, a), P.push(C === m ? "null" : C);
                                    M = P.length ? s ? "[\n" + r + P.join(",\n" + r) + "\n" + $ + "]" : "[" + P.join(",") + "]" : "[]"
                                } else g(n || o, function(t) {
                                    var e = D(t, o, i, n, s, r, a);
                                    e !== m && P.push(R(t) + ":" + (s ? " " : "") + e)
                                }), M = P.length ? s ? "{\n" + r + P.join(",\n" + r) + "\n" + $ + "}" : "{" + P.join(",") + "}" : "{}";
                                return a.pop(), M
                            }
                        };
                    n.stringify = function(t, e, n) {
                        var s, r, a, o;
                        if (i[typeof e] && e)
                            if ((o = _.call(e)) == w) r = e;
                            else if (o == k) {
                            a = {};
                            for (var l, h = 0, c = e.length; c > h; l = e[h++], o = _.call(l), (o == S || o == T) && (a[l] = 1));
                        }
                        if (n)
                            if ((o = _.call(n)) == T) {
                                if ((n -= n % 1) > 0)
                                    for (s = "", n > 10 && (n = 10); s.length < n; s += " ");
                            } else o == S && (s = n.length <= 10 ? n : n.slice(0, 10));
                        return D("", (l = {}, l[""] = t, l), r, a, s, "", [])
                    }
                }
                if (!r("json-parse")) {
                    var M, N, F = o.fromCharCode,
                        B = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        H = function() {
                            throw M = N = null, c()
                        },
                        q = function() {
                            for (var t, e, i, n, s, r = N, a = r.length; a > M;) switch (s = r.charCodeAt(M)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    M++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return t = P ? r.charAt(M) : r[M], M++, t;
                                case 34:
                                    for (t = "@", M++; a > M;)
                                        if (s = r.charCodeAt(M), 32 > s) H();
                                        else if (92 == s) switch (s = r.charCodeAt(++M)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            t += B[s], M++;
                                            break;
                                        case 117:
                                            for (e = ++M, i = M + 4; i > M; M++) s = r.charCodeAt(M), s >= 48 && 57 >= s || s >= 97 && 102 >= s || s >= 65 && 70 >= s || H();
                                            t += F("0x" + r.slice(e, M));
                                            break;
                                        default:
                                            H()
                                    } else {
                                        if (34 == s) break;
                                        for (s = r.charCodeAt(M), e = M; s >= 32 && 92 != s && 34 != s;) s = r.charCodeAt(++M);
                                        t += r.slice(e, M)
                                    }
                                    if (34 == r.charCodeAt(M)) return M++, t;
                                    H();
                                default:
                                    if (e = M, 45 == s && (n = !0, s = r.charCodeAt(++M)), s >= 48 && 57 >= s) {
                                        for (48 == s && (s = r.charCodeAt(M + 1), s >= 48 && 57 >= s) && H(), n = !1; a > M && (s = r.charCodeAt(M), s >= 48 && 57 >= s); M++);
                                        if (46 == r.charCodeAt(M)) {
                                            for (i = ++M; a > i && (s = r.charCodeAt(i), s >= 48 && 57 >= s); i++);
                                            i == M && H(), M = i
                                        }
                                        if (s = r.charCodeAt(M), 101 == s || 69 == s) {
                                            for (s = r.charCodeAt(++M), (43 == s || 45 == s) && M++, i = M; a > i && (s = r.charCodeAt(i), s >= 48 && 57 >= s); i++);
                                            i == M && H(), M = i
                                        }
                                        return +r.slice(e, M)
                                    }
                                    if (n && H(), "true" == r.slice(M, M + 4)) return M += 4, !0;
                                    if ("false" == r.slice(M, M + 5)) return M += 5, !1;
                                    if ("null" == r.slice(M, M + 4)) return M += 4, null;
                                    H()
                            }
                            return "$"
                        },
                        V = function(t) {
                            var e, i;
                            if ("$" == t && H(), "string" == typeof t) {
                                if ("@" == (P ? t.charAt(0) : t[0])) return t.slice(1);
                                if ("[" == t) {
                                    for (e = []; t = q(), "]" != t; i || (i = !0)) i && ("," == t ? (t = q(), "]" == t && H()) : H()), "," == t && H(), e.push(V(t));
                                    return e
                                }
                                if ("{" == t) {
                                    for (e = {}; t = q(), "}" != t; i || (i = !0)) i && ("," == t ? (t = q(), "}" == t && H()) : H()), ("," == t || "string" != typeof t || "@" != (P ? t.charAt(0) : t[0]) || ":" != q()) && H(), e[t.slice(1)] = V(q());
                                    return e
                                }
                                H()
                            }
                            return t
                        },
                        z = function(t, e, i) {
                            var n = Y(t, e, i);
                            n === m ? delete t[e] : t[e] = n
                        },
                        Y = function(t, e, i) {
                            var n, s = t[e];
                            if ("object" == typeof s && s)
                                if (_.call(s) == k)
                                    for (n = s.length; n--;) z(s, n, i);
                                else g(s, function(t) {
                                    z(s, t, i)
                                });
                            return i.call(t, e, s)
                        };
                    n.parse = function(t, e) {
                        var i, n;
                        return M = 0, N = "" + t, i = V(q()), "$" != q() && H(), M = N = null, e && _.call(e) == w ? Y((n = {}, n[""] = i, n), "", e) : i
                    }
                }
            }
            return n.runInContext = t, n
        }
        var e = "function" == typeof define && define.amd,
            i = {
                "function": !0,
                object: !0
            },
            n = i[typeof exports] && exports && !exports.nodeType && exports,
            s = i[typeof window] && window || this,
            r = n && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!r || r.global !== r && r.window !== r && r.self !== r || (s = r), n && !e) t(s, n);
        else {
            var a = s.JSON,
                o = s.JSON3,
                l = !1,
                h = t(s, s.JSON3 = {
                    noConflict: function() {
                        return l || (l = !0, s.JSON = a, s.JSON3 = o, a = o = null), h
                    }
                });
            s.JSON = {
                parse: h.parse,
                stringify: h.stringify
            }
        }
        e && define("libs/createjs/preloadjs", [], function() {
            return h
        })
    }.call(this),
    function() {
        var t = {};
        t.parseXML = function(t, e) {
            var i = null;
            try {
                if (window.DOMParser) {
                    var n = new DOMParser;
                    i = n.parseFromString(t, e)
                } else i = new ActiveXObject("Microsoft.XMLDOM"), i.async = !1, i.loadXML(t)
            } catch (s) {}
            return i
        }, t.parseJSON = function(t) {
            if (null == t) return null;
            try {
                return JSON.parse(t)
            } catch (e) {
                throw e
            }
        }, createjs.DataUtils = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = 8e3
        }
        var e = t.prototype = {},
            i = t;
        i.create = function(e) {
            if ("string" == typeof e) {
                var n = new t;
                return n.src = e, n
            }
            if (e instanceof i) return e;
            if (e instanceof Object) return e;
            throw new Error("Type not recognized.")
        }, e.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this
        }, createjs.LoadItem = i
    }(),
    function() {
        var t = {};
        t.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, t.RELATIVE_PATT = /^[./]*?\//i, t.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i, t.parseURI = function(e) {
            var i = {
                absolute: !1,
                relative: !1
            };
            if (null == e) return i;
            var n = e.indexOf("?");
            n > -1 && (e = e.substr(0, n));
            var s;
            return t.ABSOLUTE_PATT.test(e) ? i.absolute = !0 : t.RELATIVE_PATT.test(e) && (i.relative = !0), (s = e.match(t.EXTENSION_PATT)) && (i.extension = s[1].toLowerCase()), i
        }, t.formatQueryString = function(t, e) {
            if (null == t) throw new Error("You must specify data.");
            var i = [];
            for (var n in t) i.push(n + "=" + escape(t[n]));
            return e && (i = i.concat(e)), i.join("&")
        }, t.buildPath = function(t, e) {
            if (null == e) return t;
            var i = [],
                n = t.indexOf("?");
            if (-1 != n) {
                var s = t.slice(n + 1);
                i = i.concat(s.split("&"))
            }
            return -1 != n ? t.slice(0, n) + "?" + this._formatQueryString(e, i) : t + "?" + this._formatQueryString(e, i)
        }, t.isCrossDomain = function(t) {
            var e = document.createElement("a");
            e.href = t.src;
            var i = document.createElement("a");
            i.href = location.href;
            var n = "" != e.hostname && (e.port != i.port || e.protocol != i.protocol || e.hostname != i.hostname);
            return n
        }, t.isLocal = function(t) {
            var e = document.createElement("a");
            return e.href = t.src, "" == e.hostname && "file:" == e.protocol
        }, t.isBinary = function(t) {
            switch (t) {
                case createjs.AbstractLoader.IMAGE:
                case createjs.AbstractLoader.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, t.isImageTag = function(t) {
            return t instanceof HTMLImageElement
        }, t.isAudioTag = function(t) {
            return window.HTMLAudioElement ? t instanceof HTMLAudioElement : !1
        }, t.isVideoTag = function(t) {
            return window.HTMLVideoElement ? t instanceof HTMLVideoElement : void 0
        }, t.isText = function(t) {
            switch (t) {
                case createjs.AbstractLoader.TEXT:
                case createjs.AbstractLoader.JSON:
                case createjs.AbstractLoader.MANIFEST:
                case createjs.AbstractLoader.XML:
                case createjs.AbstractLoader.CSS:
                case createjs.AbstractLoader.SVG:
                case createjs.AbstractLoader.JAVASCRIPT:
                    return !0;
                default:
                    return !1
            }
        }, t.getTypeByExtension = function(t) {
            if (null == t) return createjs.AbstractLoader.TEXT;
            switch (t.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.AbstractLoader.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.AbstractLoader.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.AbstractLoader.VIDEO;
                case "json":
                    return createjs.AbstractLoader.JSON;
                case "xml":
                    return createjs.AbstractLoader.XML;
                case "css":
                    return createjs.AbstractLoader.CSS;
                case "js":
                    return createjs.AbstractLoader.JAVASCRIPT;
                case "svg":
                    return createjs.AbstractLoader.SVG;
                default:
                    return createjs.AbstractLoader.TEXT
            }
        }, createjs.RequestUtils = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = i, this.resultFormatter = null, t ? this._item = createjs.LoadItem.create(t) : this._item = null, this._preferXHR = e, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var e = createjs.extend(t, createjs.EventDispatcher),
            i = t;
        i.POST = "POST", i.GET = "GET", i.BINARY = "binary", i.CSS = "css", i.IMAGE = "image", i.JAVASCRIPT = "javascript", i.JSON = "json", i.JSONP = "jsonp", i.MANIFEST = "manifest", i.SOUND = "sound", i.VIDEO = "video", i.SPRITESHEET = "spritesheet", i.SVG = "svg", i.TEXT = "text", i.XML = "xml", e.getItem = function() {
            return this._item
        }, e.getResult = function(t) {
            return t ? this._rawResult : this._result
        }, e.getTag = function() {
            return this._tag
        }, e.setTag = function(t) {
            this._tag = t
        }, e.load = function() {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var t = new createjs.Event("initialize");
            t.loader = this._request, this.dispatchEvent(t), this._request.load()
        }, e.cancel = function() {
            this.canceled = !0, this.destroy()
        }, e.destroy = function() {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, e.getLoadedItems = function() {
            return this._loadedItems
        }, e._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, e._createTag = function(t) {
            return null
        }, e._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, e._sendProgress = function(t) {
            if (!this._isCanceled()) {
                var e = null;
                "number" == typeof t ? (this.progress = t, e = new createjs.ProgressEvent(this.progress)) : (e = t, this.progress = t.loaded / t.total, e.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(e)
            }
        }, e._sendComplete = function() {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var t = new createjs.Event("complete");
                t.rawResult = this._rawResult, null != this._result && (t.result = this._result), this.dispatchEvent(t)
            }
        }, e._sendError = function(t) {
            !this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(t))
        }, e._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, e.resultFormatter = null, e.handleEvent = function(t) {
            switch (t.type) {
                case "complete":
                    this._rawResult = t.target._response;
                    var e = this.resultFormatter && this.resultFormatter(this),
                        i = this;
                    e instanceof Function ? e(function(t) {
                        i._result = t, i._sendComplete()
                    }) : (this._result = e || this._rawResult, this._sendComplete());
                    break;
                case "progress":
                    this._sendProgress(t);
                    break;
                case "error":
                    this._sendError(t);
                    break;
                case "loadstart":
                    this._sendLoadStart();
                    break;
                case "abort":
                case "timeout":
                    this._isCanceled() || this.dispatchEvent(t.type)
            }
        }, e.buildPath = function(t, e) {
            return createjs.RequestUtils.buildPath(t, e)
        }, e.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.AbstractLoader_constructor(t, e, i), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src"
        }
        var e = createjs.extend(t, createjs.AbstractLoader);
        e.load = function() {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, e._createTag = function() {}, e._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, e._formatResult = function(t) {
            return this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR && (t.getTag().src = t.getResult(!0)), t.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var t = function(t) {
                this._item = t
            },
            e = createjs.extend(t, createjs.EventDispatcher);
        e.load = function() {}, e.destroy = function() {}, e.cancel = function() {}, createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
        }
        var e = createjs.extend(t, createjs.AbstractRequest);
        e.load = function() {
            null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0), this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
            var t = new createjs.Event("initialize");
            t.loader = this._tag, this.dispatchEvent(t), this._hideTag(), this._tag[this._tagSrcAttribute] = this._item.src
        }, e.destroy = function() {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, e._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            ("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
        }, e._handleTagComplete = function() {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
        }, e._clean = function() {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag)
        }, e._hideTag = function() {
            this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
        }, e._showTag = function() {
            this._tag.style.visibility = this._startTagVisibility
        }, e._handleStalled = function() {}, createjs.TagRequest = createjs.promote(t, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var e = createjs.extend(t, createjs.TagRequest);
        e.load = function() {
            this._tag.onstalled = createjs.proxy(this._handleStalled, this), this._tag.onprogress = createjs.proxy(this._handleProgress, this), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, e._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            ("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
        }, e._handleStalled = function() {}, e._handleProgress = function(t) {
            if (t && !(t.loaded > 0 && 0 == t.total)) {
                var e = new createjs.ProgressEvent(t.loaded, t.total);
                this.dispatchEvent(e)
            }
        }, e._clean = function() {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._tag.onprogress = null, this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractRequest_constructor(t), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(t)
        }
        var e = createjs.extend(t, createjs.AbstractRequest);
        t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e.getResult = function(t) {
            return t && this._rawResponse ? this._rawResponse : this._response
        }, e.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, e.load = function() {
            if (null == this._request) return void this._handleError();
            this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (t) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t))
            }
        }, e.setResponseType = function(t) {
            this._request.responseType = t
        }, e.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, e.getResponseHeader = function(t) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
        }, e._handleProgress = function(t) {
            if (t && !(t.loaded > 0 && 0 == t.total)) {
                var e = new createjs.ProgressEvent(t.loaded, t.total);
                this.dispatchEvent(e)
            }
        }, e._handleLoadStart = function(t) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, e._handleAbort = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t))
        }, e._handleError = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(t.message))
        }, e._handleReadyStateChange = function(t) {
            4 == this._request.readyState && this._handleLoad()
        }, e._handleLoad = function(t) {
            if (!this.loaded) {
                this.loaded = !0;
                var e = this._checkError();
                if (e) return void this._handleError(e);
                this._response = this._getResponse(), this._clean(), this.dispatchEvent(new createjs.Event("complete"))
            }
        }, e._handleTimeout = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t))
        }, e._checkError = function() {
            var t = parseInt(this._request.status);
            switch (t) {
                case 404:
                case 0:
                    return new Error(t)
            }
            return null
        }, e._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (t) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (t) {}
            return null
        }, e._createXHR = function(t) {
            var e = createjs.RequestUtils.isCrossDomain(t),
                i = {},
                n = null;
            if (window.XMLHttpRequest) n = new XMLHttpRequest, e && void 0 === n.withCredentials && window.XDomainRequest && (n = new XDomainRequest);
            else {
                for (var r = 0, a = s.ACTIVEX_VERSIONS.length; a > r; r++) {
                    s.ACTIVEX_VERSIONS[r];
                    try {
                        n = new ActiveXObject(axVersions);
                        break
                    } catch (o) {}
                }
                if (null == n) return !1
            }
            t.mimeType && n.overrideMimeType && n.overrideMimeType(t.mimeType), this._xhrLevel = "string" == typeof n.responseType ? 2 : 1;
            var l = null;
            if (l = t.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(t.src, t.values) : t.src, n.open(t.method || createjs.AbstractLoader.GET, l, !0), e && n instanceof XMLHttpRequest && 1 == this._xhrLevel && (i.Origin = location.origin), t.values && t.method == createjs.AbstractLoader.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"), e || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), t.headers)
                for (var h in t.headers) i[h] = t.headers[h];
            for (h in i) n.setRequestHeader(h, i[h]);
            return n instanceof XMLHttpRequest && void 0 !== t.withCredentials && (n.withCredentials = t.withCredentials), this._request = n, !0
        }, e._clean = function() {
            clearTimeout(this._loadTimeout), this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)
        }, e.toString = function() {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.AbstractLoader_constructor(), this.init(t, e, i)
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        e.init = function(t, e, i) {
            this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(t), this.stopOnError = !1, this.maintainScriptOrder = !0, this.next = null, this._paused = !1, this._basePath = e, this._crossOrigin = i, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._loadStartWasDispatched = !1, this._maxConnections = 1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length
        }, i.loadTimeout = 8e3, i.LOAD_TIMEOUT = 0, i.BINARY = createjs.AbstractLoader.BINARY, i.CSS = createjs.AbstractLoader.CSS, i.IMAGE = createjs.AbstractLoader.IMAGE, i.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, i.JSON = createjs.AbstractLoader.JSON, i.JSONP = createjs.AbstractLoader.JSONP, i.MANIFEST = createjs.AbstractLoader.MANIFEST, i.SOUND = createjs.AbstractLoader.SOUND, i.VIDEO = createjs.AbstractLoader.VIDEO, i.SVG = createjs.AbstractLoader.SVG, i.TEXT = createjs.AbstractLoader.TEXT, i.XML = createjs.AbstractLoader.XML, i.POST = createjs.AbstractLoader.POST, i.GET = createjs.AbstractLoader.GET, e.registerLoader = function(t) {
            if (!t || !t.canLoadItem) throw new Error("loader is of an incorrect type.");
            if (-1 != this._availableLoaders.indexOf(t)) throw new Error("loader already exists.");
            this._availableLoaders.unshift(t)
        }, e.unregisterLoader = function(t) {
            var e = this._availableLoaders.indexOf(t); - 1 != e && e < this._defaultLoaderLength - 1 && this._availableLoaders.splice(e, 1)
        }, e.setUseXHR = function(t) {
            return this.setPreferXHR(t)
        }, e.setPreferXHR = function(t) {
            return this.preferXHR = 0 != t && null != window.XMLHttpRequest, this.preferXHR
        }, e.removeAll = function() {
            this.remove()
        }, e.remove = function(t) {
            var e = null;
            if (!t || t instanceof Array) {
                if (t) e = t;
                else if (arguments.length > 0) return
            } else e = [t];
            var i = !1;
            if (e) {
                for (; e.length;) {
                    var n = e.pop(),
                        s = this.getResult(n);
                    for (r = this._loadQueue.length - 1; r >= 0; r--)
                        if (a = this._loadQueue[r].getItem(), a.id == n || a.src == n) {
                            this._loadQueue.splice(r, 1)[0].cancel();
                            break
                        }
                    for (r = this._loadQueueBackup.length - 1; r >= 0; r--)
                        if (a = this._loadQueueBackup[r].getItem(), a.id == n || a.src == n) {
                            this._loadQueueBackup.splice(r, 1)[0].cancel();
                            break
                        }
                    if (s) delete this._loadItemsById[s.id], delete this._loadItemsBySrc[s.src], this._disposeItem(s);
                    else
                        for (var r = this._currentLoads.length - 1; r >= 0; r--) {
                            var a = this._currentLoads[r].getItem();
                            if (a.id == n || a.src == n) {
                                this._currentLoads.splice(r, 1)[0].cancel(), i = !0;
                                break
                            }
                        }
                }
                i && this._loadNext()
            } else {
                this.close();
                for (var o in this._loadItemsById) this._disposeItem(this._loadItemsById[o]);
                this.init(this.preferXHR, this._basePath)
            }
        }, e.reset = function() {
            this.close();
            for (var t in this._loadItemsById) this._disposeItem(this._loadItemsById[t]);
            for (var e = [], i = 0, n = this._loadQueueBackup.length; n > i; i++) e.push(this._loadQueueBackup[i].getItem());
            this.loadManifest(e, !1)
        }, e.installPlugin = function(t) {
            if (null != t && null != t.getPreloadHandlers) {
                var e = t.getPreloadHandlers();
                if (e.scope = t, null != e.types)
                    for (var i = 0, n = e.types.length; n > i; i++) this._typeCallbacks[e.types[i]] = e;
                if (null != e.extensions)
                    for (i = 0, n = e.extensions.length; n > i; i++) this._extensionCallbacks[e.extensions[i]] = e
            }
        }, e.setMaxConnections = function(t) {
            this._maxConnections = t, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, e.loadFile = function(t, e, i) {
            if (null == t) {
                var n = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                return void this._sendError(n)
            }
            this._addItem(t, null, i), e !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, e.loadManifest = function(t, e, n) {
            var s = null,
                r = null;
            if (t instanceof Array) {
                if (0 == t.length) {
                    var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                    return void this._sendError(a)
                }
                s = t
            } else if ("string" == typeof t) s = [{
                src: t,
                type: i.MANIFEST
            }];
            else {
                if ("object" != typeof t) {
                    var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                    return void this._sendError(a)
                }
                if (void 0 !== t.src) {
                    if (null == t.type) t.type = i.MANIFEST;
                    else if (t.type != i.MANIFEST) {
                        var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                        this._sendError(a)
                    }
                    s = [t]
                } else void 0 !== t.manifest && (s = t.manifest, r = t.path)
            }
            for (var o = 0, l = s.length; l > o; o++) this._addItem(s[o], r, n);
            e !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, e.load = function() {
            this.setPaused(!1)
        }, e.getItem = function(t) {
            return this._loadItemsById[t] || this._loadItemsBySrc[t];
        }, e.getResult = function(t, e) {
            var i = this._loadItemsById[t] || this._loadItemsBySrc[t];
            if (null == i) return null;
            var n = i.id;
            return e && this._loadedRawResults[n] ? this._loadedRawResults[n] : this._loadedResults[n]
        }, e.getItems = function(t) {
            for (var e = [], i = 0, n = this._loadQueueBackup.length; n > i; i++) {
                var s = this._loadQueueBackup[i],
                    r = s.getItem();
                (t !== !0 || s.loaded) && e.push({
                    item: r,
                    result: this.getResult(r.id),
                    rawResult: this.getResult(r.id, !0)
                })
            }
            return e
        }, e.setPaused = function(t) {
            this._paused = t, this._paused || this._loadNext()
        }, e.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
        }, e._addItem = function(t, e, i) {
            var n = this._createLoadItem(t, e, i);
            if (null != n) {
                var s = this._createLoader(n);
                null != s && (n._loader = s, this._loadQueue.push(s), this._loadQueueBackup.push(s), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT || n.maintainOrder === !0) && (this._scriptOrder.push(n), this._loadedScripts.push(null)))
            }
        }, e._createLoadItem = function(t, e, n) {
            var s = createjs.LoadItem.create(t);
            if (null == s) return null;
            var r = createjs.RequestUtils.parseURI(s.src);
            r.extension && (s.ext = r.extension), null == s.type && (s.type = createjs.RequestUtils.getTypeByExtension(s.ext));
            var a = "",
                o = n || this._basePath,
                l = s.src;
            if (!r.absolute && !r.relative)
                if (e) {
                    a = e;
                    var h = createjs.RequestUtils.parseURI(e);
                    l = e + l, null == o || h.absolute || h.relative || (a = o + a)
                } else null != o && (a = o);
            s.src = a + s.src, s.path = a, (void 0 === s.id || null === s.id || "" === s.id) && (s.id = l);
            var c = this._typeCallbacks[s.type] || this._extensionCallbacks[s.ext];
            if (c) {
                var u = c.callback.call(c.scope, s, this);
                if (u === !1) return null;
                u === !0 || null != u && (s._loader = u), r = createjs.RequestUtils.parseURI(s.src), null != r.extension && (s.ext = r.extension)
            }
            return this._loadItemsById[s.id] = s, this._loadItemsBySrc[s.src] = s, null == s.loadTimeout && (s.loadTimeout = i.loadTimeout), null == s.crossOrigin && (s.crossOrigin = this._crossOrigin), s
        }, e._createLoader = function(t) {
            if (null != t._loader) return t._loader;
            for (var e = this.preferXHR, i = 0; i < this._availableLoaders.length; i++) {
                var n = this._availableLoaders[i];
                if (n && n.canLoadItem(t)) return new n(t, e)
            }
            return null
        }, e._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var t = 0; t < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); t++) {
                    var e = this._loadQueue[t];
                    this._canStartLoad(e) && (this._loadQueue.splice(t, 1), t--, this._loadItem(e))
                }
            }
        }, e._loadItem = function(t) {
            t.on("fileload", this._handleFileLoad, this), t.on("progress", this._handleProgress, this), t.on("complete", this._handleFileComplete, this), t.on("error", this._handleError, this), t.on("fileerror", this._handleFileError, this), this._currentLoads.push(t), this._sendFileStart(t.getItem()), t.load()
        }, e._handleFileLoad = function(t) {
            t.target = null, this.dispatchEvent(t)
        }, e._handleFileError = function(t) {
            var e = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.item);
            this._sendError(e)
        }, e._handleError = function(t) {
            var e = t.target;
            this._numItemsLoaded++, this._finishOrderedItem(e, !0), this._updateProgress();
            var i = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.getItem());
            this._sendError(i), this.stopOnError || (this._removeLoadItem(e), this._loadNext())
        }, e._handleFileComplete = function(t) {
            var e = t.target,
                i = e.getItem(),
                n = e.getResult();
            this._loadedResults[i.id] = n;
            var s = e.getResult(!0);
            null != s && s !== n && (this._loadedRawResults[i.id] = s), this._saveLoadedItems(e), this._removeLoadItem(e), this._finishOrderedItem(e) || this._processFinishedLoad(i, e)
        }, e._saveLoadedItems = function(t) {
            var e = t.getLoadedItems();
            if (null !== e)
                for (var i = 0; i < e.length; i++) {
                    var n = e[i].item;
                    this._loadItemsBySrc[n.src] = n, this._loadItemsById[n.id] = n, this._loadedResults[n.id] = e[i].result, this._loadedRawResults[n.id] = e[i].rawResult
                }
        }, e._finishOrderedItem = function(t, e) {
            var i = t.getItem();
            if (this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT || i.maintainOrder) {
                t instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                var n = createjs.indexOf(this._scriptOrder, i);
                return -1 == n ? !1 : (this._loadedScripts[n] = e === !0 ? !0 : i, this._checkScriptLoadOrder(), !0)
            }
            return !1
        }, e._checkScriptLoadOrder = function() {
            for (var t = this._loadedScripts.length, e = 0; t > e; e++) {
                var i = this._loadedScripts[e];
                if (null === i) break;
                if (i !== !0) {
                    var n = this._loadedResults[i.id];
                    i.type == createjs.LoadQueue.JAVASCRIPT && (document.body || document.getElementsByTagName("body")[0]).appendChild(n);
                    var s = i._loader;
                    this._processFinishedLoad(i, s), this._loadedScripts[e] = !0
                }
            }
        }, e._processFinishedLoad = function(t, e) {
            this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(t, e), this._loadNext()
        }, e._canStartLoad = function(t) {
            if (!this.maintainScriptOrder || t.preferXHR) return !0;
            var e = t.getItem();
            if (e.type != createjs.LoadQueue.JAVASCRIPT) return !0;
            if (this._currentlyLoadingScript) return !1;
            for (var i = this._scriptOrder.indexOf(e), n = 0; i > n;) {
                var s = this._loadedScripts[n];
                if (null == s) return !1;
                n++
            }
            return this._currentlyLoadingScript = !0, !0
        }, e._removeLoadItem = function(t) {
            var e = t.getItem();
            delete e._loader;
            for (var i = this._currentLoads.length, n = 0; i > n; n++)
                if (this._currentLoads[n] == t) {
                    this._currentLoads.splice(n, 1);
                    break
                }
        }, e._handleProgress = function(t) {
            var e = t.target;
            this._sendFileProgress(e.getItem(), e.progress), this._updateProgress()
        }, e._updateProgress = function() {
            var t = this._numItemsLoaded / this._numItems,
                e = this._numItems - this._numItemsLoaded;
            if (e > 0) {
                for (var i = 0, n = 0, s = this._currentLoads.length; s > n; n++) i += this._currentLoads[n].progress;
                t += i / e * (e / this._numItems)
            }
            this._lastProgress != t && (this._sendProgress(t), this._lastProgress = t)
        }, e._disposeItem = function(t) {
            delete this._loadedResults[t.id], delete this._loadedRawResults[t.id], delete this._loadItemsById[t.id], delete this._loadItemsBySrc[t.src]
        }, e._sendFileProgress = function(t, e) {
            if (this._isCanceled()) return void this._cleanUp();
            if (this.hasEventListener("fileprogress")) {
                var i = new createjs.Event("fileprogress");
                i.progress = e, i.loaded = e, i.total = 1, i.item = t, this.dispatchEvent(i)
            }
        }, e._sendFileComplete = function(t, e) {
            if (!this._isCanceled()) {
                var i = new createjs.Event("fileload");
                i.loader = e, i.item = t, i.result = this._loadedResults[t.id], i.rawResult = this._loadedRawResults[t.id], t.completeHandler && t.completeHandler(i), this.hasEventListener("fileload") && this.dispatchEvent(i)
            }
        }, e._sendFileStart = function(t) {
            var e = new createjs.Event("filestart");
            e.item = t, this.hasEventListener("filestart") && this.dispatchEvent(e)
        }, e.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.TEXT)
        }
        var e = (createjs.extend(t, createjs.AbstractLoader), t);
        e.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.TEXT
        }, createjs.TextLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.BINARY
        }, e._updateXHR = function(t) {
            t.loader.setResponseType("arraybuffer")
        }, createjs.BinaryLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", e ? this._tag = document.createElement("style") : this._tag = document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.CSS
        }, e._formatResult = function(t) {
            if (this._preferXHR) {
                var e = t.getTag(),
                    i = document.getElementsByTagName("head")[0];
                if (i.appendChild(e), e.styleSheet) e.styleSheet.cssText = t.getResult(!0);
                else {
                    var n = document.createTextNode(t.getResult(!0));
                    e.appendChild(n)
                }
            } else e = this._tag;
            return e
        }, createjs.CSSLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(t) ? this._tag = t : createjs.RequestUtils.isImageTag(t.src) ? this._tag = t.src : createjs.RequestUtils.isImageTag(t.tag) && (this._tag = t.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.IMAGE
        }, e.load = function() {
            if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();
            var t = this._item.crossOrigin;
            1 == t && (t = "Anonymous"), null == t || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = t), this.AbstractLoader_load()
        }, e._updateXHR = function(t) {
            t.loader.mimeType = "text/plain; charset=x-user-defined-binary", t.loader.setResponseType && t.loader.setResponseType("blob")
        }, e._formatResult = function(t) {
            var e = this;
            return function(i) {
                var n = e._tag,
                    s = window.URL || window.webkitURL;
                if (e._preferXHR)
                    if (s) {
                        var r = s.createObjectURL(t.getResult(!0));
                        n.src = r, n.onload = function() {
                            s.revokeObjectURL(e.src)
                        }
                    } else n.src = t.getItem().src;
                else;
                n.complete ? i(n) : n.onload = function() {
                    i(this)
                }
            }
        }, createjs.ImageLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.JAVASCRIPT
        }, e._formatResult = function(t) {
            var e = t.getTag();
            return this._preferXHR && (e.text = t.getResult(!0)), e
        }, createjs.JavaScriptLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.JSON && !t._loadAsJSONP
        }, e._formatResult = function(t) {
            var e = null;
            try {
                e = createjs.DataUtils.parseJSON(t.getResult(!0))
            } catch (i) {
                var n = new createjs.ErrorEvent("JSON_FORMAT", null, i);
                return this._sendError(n), i
            }
            return e
        }, createjs.JSONLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.JSONP || t._loadAsJSONP
        }, e.cancel = function() {
            this.AbstractLoader_cancel(), this._dispose()
        }, e.load = function() {
            if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
            if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
            window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._tag.src = this._item.src
        }, e._handleLoad = function(t) {
            this._result = this._rawResult = t, this._sendComplete(), this._dispose()
        }, e._dispose = function() {
            window.document.body.removeChild(this._tag), delete window[this._item.callback]
        }, createjs.JSONPLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.MANIFEST), this._manifestQueue = null
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.MANIFEST_PROGRESS = .25, i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.MANIFEST
        }, e.load = function() {
            this.AbstractLoader_load()
        }, e._createRequest = function() {
            var t = this._item.callback;
            null != t ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, e.handleEvent = function(t) {
            switch (t.type) {
                case "complete":
                    return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(i.MANIFEST_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return t.loaded *= i.MANIFEST_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
            }
            this.AbstractLoader_handleEvent(t)
        }, e.destroy = function() {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, e._loadManifest = function(t) {
            if (t && t.manifest) {
                var e = this._manifestQueue = new createjs.LoadQueue;
                e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("complete", this._handleManifestComplete, this, !0), e.on("error", this._handleManifestError, this, !0), e.loadManifest(t)
            } else this._sendComplete()
        }, e._handleManifestFileLoad = function(t) {
            t.target = null, this.dispatchEvent(t)
        }, e._handleManifestComplete = function(t) {
            this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, e._handleManifestProgress = function(t) {
            this.progress = t.progress * (1 - i.MANIFEST_PROGRESS) + i.MANIFEST_PROGRESS, this._sendProgress(this.progress)
        }, e._handleManifestError = function(t) {
            var e = new createjs.Event("fileerror");
            e.item = t.data, this.dispatchEvent(e)
        }, createjs.ManifestLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e) {
            this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(t) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.src) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.tag) && (this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src), null != this._tag && (this._preferXHR = !1)
        }
        var e = createjs.extend(t, createjs.AbstractMediaLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.SOUND
        }, e._createTag = function(t) {
            var e = document.createElement("audio");
            return e.autoplay = !1, e.preload = "none", e.src = t, e
        }, createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e) {
            this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(t) || createjs.RequestUtils.isVideoTag(t.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(t) ? t : t.src), this._preferXHR = !1) : this.setTag(this._createTag())
        }
        var e = createjs.extend(t, createjs.AbstractMediaLoader),
            i = t;
        e._createTag = function() {
            return document.createElement("video")
        }, i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.VIDEO
        }, createjs.VideoLoader = createjs.promote(t, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.SPRITESHEET_PROGRESS = .25, i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.SPRITESHEET
        }, e.destroy = function() {
            this.AbstractLoader_destroy, this._manifestQueue.close()
        }, e._createRequest = function() {
            var t = this._item.callback;
            null != t && t instanceof Function ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
        }, e.handleEvent = function(t) {
            switch (t.type) {
                case "complete":
                    return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(i.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return t.loaded *= i.SPRITESHEET_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
            }
            this.AbstractLoader_handleEvent(t)
        }, e._loadManifest = function(t) {
            if (t && t.images) {
                var e = this._manifestQueue = new createjs.LoadQueue;
                e.on("complete", this._handleManifestComplete, this, !0), e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("error", this._handleManifestError, this, !0), e.loadManifest(t.images)
            }
        }, e._handleManifestFileLoad = function(t) {
            var e = t.result;
            if (null != e) {
                var i = this.getResult().images,
                    n = i.indexOf(t.item.src);
                i[n] = e
            }
        }, e._handleManifestComplete = function(t) {
            this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, e._handleManifestProgress = function(t) {
            this.progress = t.progress * (1 - i.SPRITESHEET_PROGRESS) + i.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
        }, e._handleManifestError = function(t) {
            var e = new createjs.Event("fileerror");
            e.item = t.data, this.dispatchEvent(e)
        }, createjs.SpriteSheetLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e) {
            this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", e ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml"), this.getTag().style.visibility = "hidden"
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.SVG
        }, e._formatResult = function(t) {
            var e = createjs.DataUtils.parseXML(t.getResult(!0), "text/xml"),
                i = t.getTag();
            return !this._preferXHR && document.body.contains(i) && document.body.removeChild(i), null != e.documentElement ? (i.appendChild(e.documentElement), i.style.visibility = "visible", i) : e
        }, createjs.SVGLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
        }
        var e = createjs.extend(t, createjs.AbstractLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.XML
        }, e._formatResult = function(t) {
            return createjs.DataUtils.parseXML(t.getResult(!0), "text/xml")
        }, createjs.XMLLoader = createjs.promote(t, "AbstractLoader")
    }(), define("createjs", ["libs/createjs/preloadjs"], function(t) {
        "use strict";
        return window.createjs
    }), define("model/loader_collection", ["console", "underscore", "jquery", "backbone", "config", "createjs"], function(t, e, i, n, s, r) {
        "use strict";
        var a = n.Collection.extend({
            loadDone: !1,
            loaders: {},
            initialize: function() {
                this.on("add", this.onAdded, this), this.on("change:loaded", this.onLoaded, this)
            },
            createLoader: function(t) {
                if (!this.loaders[t]) {
                    var i = new r.LoadQueue(!1);
                    i.setMaxConnections(4), i.maintainScriptOrder = !1, i.addEventListener("fileload", e.bind(this.onFileLoaded, this)), i.addEventListener("complete", e.bind(this.onComplete, this)), i.addEventListener("progress", e.bind(this.onProgress, this)), i.addEventListener("error", e.bind(this.onError, this)), this.loaders[t] = i
                }
                return this.loaders[t]
            },
            onLoaded: function(t, e) {
                if (!e) throw new Error("Load set to false")
            },
            onProgress: function(t) {
                this.trigger("progress", t)
            },
            onAdded: function(t, i, n) {
                t.has("id") || t.set({
                    id: t.get("src")
                }), t.has("loadTimeout ") || t.set({
                    loadTimeout: 6e5
                }), e.isUndefined(n.group) || t.set({
                    group: n.group
                }), t.has("group") || t.set({
                    group: "main"
                }), t.set({
                    loaded: !1
                }, {
                    silent: !0
                });
                var s = this.getLoader(t.get("group"));
                s || (s = this.createLoader(t.get("group")));
                var a = t.toJSON(),
                    o = (new r.LoadItem).set(a);
                s.loadFile(o, !1)
            },
            getLoader: function(t) {
                return this.loaders[t]
            },
            onFileLoaded: function(t) {
                this.get(t.item.id).set(e.extend(t.item, {
                    loaded: !0
                })), this.trigger("loaded", t)
            },
            onComplete: function(t) {
                this.loadDone = !0;
                var i;
                e.each(this.loaders, function(e, n) {
                    e === t.target && (i = n)
                }, this), i && e.extend(t, {
                    group: i
                }), this.trigger("complete", t)
            },
            setPaused: function(t, i) {
                e.isUndefined(i) && (i = "main");
                var n = this.getLoader(i);
                n && n.setPaused(t)
            },
            stop: function(t) {
                e.isUndefined(t) && (t = "main");
                var i = this.getLoader(t);
                i && (i.close(), i.reset())
            },
            start: function(t) {
                e.isUndefined(t) && (t = "main");
                var i = this.getLoader(t);
                i ? i.load() : this.onComplete({})
            },
            hasLoaded: function(t) {
                var e = !0;
                return t && this.loaders[t] ? e = this.loaders[t].loaded : i.each(this.loaders, function(t, i) {
                    var n = i.loaded;
                    n || (e = !1)
                }), e
            },
            getResult: function(t) {
                var e;
                return i.each(this.loaders, function(i, n) {
                    var s = n.getResult(t);
                    s && (e = s)
                }), e
            },
            onError: function(e) {
                t.error(e), this.get(e.item.id).set({
                    loaded: !0,
                    error: !0
                }), this.trigger("load_error", e)
            }
        });
        return new a
    }), define("events/app_events", [], function() {
        return {
            Slider: {
                StartDrag: "events:slider:startdrag",
                Release: "events:slider:release",
                Open: "events:slider:open",
                Close: "events:slider:close"
            },
            Timeline: {
                Grab: "events:timeline:grab",
                Click: {
                    Circle: "events:timeline:click:circle",
                    Ring: "events:timeline:click:ring"
                }
            },
            Share: {
                Global: "events:share:global",
                Details: "events:share:details"
            },
            Feature: {
                Next: "events:feature:next",
                Prev: "events:feature:prev"
            },
            Wheel: {
                Update: "events:wheel:update",
                Lock: "events:wheel:lock",
                UnLock: "events:wheel:unlock"
            },
            Progress: {
                Year: "events:progress:year",
                Month: "events:progress:month",
                Day: "events:progress:day"
            },
            Zoom: "events:zoom"
        }
    }), define("controller/feature_controller", ["jquery", "config", "underscore", "route/router", "model/app_model", "events/app_events", "model/loader_collection"], function(t, e, i, n, s, r, a) {
        "use strict";
        var o = {
            isStarted: !1,
            inervalInstance: null,
            featureIndex: 0,
            timer: 6e3,
            isOverTree: !1,
            init: function() {
                i.bindAll(this, "onTick", "onNextFeature", "onPrevFeature"), e.MOBILE || this.addEvents()
            },
            addEvents: function() {
                s.on("change:features", this.onFeatureInit, this), s.on("change:progress", this.onProgressChange, this), s.on("change:isOverTree", this.onOverTreeChange, this), s.on("change:page", this.onPageChange, this), Backbone.on(r.Feature.Next, this.onNextFeature), Backbone.on(r.Feature.Prev, this.onPrevFeature)
            },
            onFeatureInit: function() {
                this.onProgressChange(), this.updateFeature()
            },
            onOverTreeChange: function() {
                this.isOverTree = s.get("isOverTree"), this.onProgressChange()
            },
            onPageChange: function() {
                this.onProgressChange()
            },
            onProgressChange: function() {
                s.get("progress") <= .01 && this.isOverTree === !1 && s.get("page") === s.PAGES.TREE ? this.startFeature() : this.stopFeature()
            },
            startFeature: function() {
                this.isStarted || (this.isStarted = !0, this.destroyInterval(), this.inervalInstance = setInterval(this.onTick, this.timer))
            },
            stopFeature: function() {
                this.isStarted && (this.isStarted = !1, this.destroyInterval())
            },
            destroyInterval: function() {
                this.inervalInstance && (clearInterval(this.inervalInstance), this.inervalInstance = null)
            },
            reset: function() {
                this.stopFeature(), this.startFeature()
            },
            forceURL: function() {
                setTimeout(this.onTick, 800)
            },
            onTick: function() {
                this.nextFeature()
            },
            onNextFeature: function() {
                this.nextFeature(), this.reset()
            },
            nextFeature: function() {
                this.featureIndex = this.featureIndex < s.get("features").length - 1 ? this.featureIndex + 1 : 0, this.updateFeature()
            },
            onPrevFeature: function() {
                this.prevFeature(), this.reset()
            },
            prevFeature: function() {
                this.featureIndex = this.featureIndex > 0 ? this.featureIndex - 1 : s.get("features").length - 1, this.updateFeature()
            },
            updateFeature: function() {
                s.set("feature", s.get("features").at(this.featureIndex));
                var t = s.get("feature");
                s.get("page") === s.PAGES.TREE && n.navigate("!/" + t.get("date").substring(0, 4) + "/" + t.get("date").substring(4, 6) + "/" + t.get("date").substring(6, 8), {
                    trigger: !0
                })
            }
        };
        return o.init(), o
    }), define("text", ["module"], function(t) {
        "use strict";
        var e, i, n, s, r, a = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            o = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            h = "undefined" != typeof location && location.href,
            c = h && location.protocol && location.protocol.replace(/\:/, ""),
            u = h && location.hostname,
            d = h && (location.port || void 0),
            p = {},
            f = t.config && t.config() || {};
        return e = {
            version: "2.0.10",
            strip: function(t) {
                if (t) {
                    t = t.replace(o, "");
                    var e = t.match(l);
                    e && (t = e[1])
                } else t = "";
                return t
            },
            jsEscape: function(t) {
                return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: f.createXhr || function() {
                var t, e, i;
                if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                if ("undefined" != typeof ActiveXObject)
                    for (e = 0; 3 > e; e += 1) {
                        i = a[e];
                        try {
                            t = new ActiveXObject(i)
                        } catch (n) {}
                        if (t) {
                            a = [i];
                            break
                        }
                    }
                return t
            },
            parseName: function(t) {
                var e, i, n, s = !1,
                    r = t.indexOf("."),
                    a = 0 === t.indexOf("./") || 0 === t.indexOf("../");
                return -1 !== r && (!a || r > 1) ? (e = t.substring(0, r), i = t.substring(r + 1, t.length)) : e = t, n = i || e, r = n.indexOf("!"), -1 !== r && (s = "strip" === n.substring(r + 1), n = n.substring(0, r), i ? i = n : e = n), {
                    moduleName: e,
                    ext: i,
                    strip: s
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function(t, i, n, s) {
                var r, a, o, l = e.xdRegExp.exec(t);
                return l ? (r = l[2], a = l[3], a = a.split(":"), o = a[1], a = a[0], !(r && r !== i || a && a.toLowerCase() !== n.toLowerCase() || (o || a) && o !== s)) : !0
            },
            finishLoad: function(t, i, n, s) {
                n = i ? e.strip(n) : n, f.isBuild && (p[t] = n), s(n)
            },
            load: function(t, i, n, s) {
                if (s.isBuild && !s.inlineText) return void n();
                f.isBuild = s.isBuild;
                var r = e.parseName(t),
                    a = r.moduleName + (r.ext ? "." + r.ext : ""),
                    o = i.toUrl(a),
                    l = f.useXhr || e.useXhr;
                return 0 === o.indexOf("empty:") ? void n() : void(!h || l(o, c, u, d) ? e.get(o, function(i) {
                    e.finishLoad(t, r.strip, i, n)
                }, function(t) {
                    n.error && n.error(t)
                }) : i([a], function(t) {
                    e.finishLoad(r.moduleName + "." + r.ext, r.strip, t, n)
                }))
            },
            write: function(t, i, n, s) {
                if (p.hasOwnProperty(i)) {
                    var r = e.jsEscape(p[i]);
                    n.asModule(t + "!" + i, "define(function () { return '" + r + "';});\n")
                }
            },
            writeFile: function(t, i, n, s, r) {
                var a = e.parseName(i),
                    o = a.ext ? "." + a.ext : "",
                    l = a.moduleName + o,
                    h = n.toUrl(a.moduleName + o) + ".js";
                e.load(l, n, function(i) {
                    var n = function(t) {
                        return s(h, t)
                    };
                    n.asModule = function(t, e) {
                        return s.asModule(t, h, e)
                    }, e.write(t, l, n, r)
                }, r)
            }
        }, "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (i = require.nodeRequire("fs"), e.get = function(t, e, n) {
            try {
                var s = i.readFileSync(t, "utf8");
                0 === s.indexOf("\ufeff") && (s = s.substring(1)), e(s)
            } catch (r) {
                n(r)
            }
        }) : "xhr" === f.env || !f.env && e.createXhr() ? e.get = function(t, i, n, s) {
            var r, a = e.createXhr();
            if (a.open("GET", t, !0), s)
                for (r in s) s.hasOwnProperty(r) && a.setRequestHeader(r.toLowerCase(), s[r]);
            f.onXhr && f.onXhr(a, t), a.onreadystatechange = function(e) {
                var s, r;
                4 === a.readyState && (s = a.status, s > 399 && 600 > s ? (r = new Error(t + " HTTP status: " + s), r.xhr = a, n(r)) : i(a.responseText), f.onXhrComplete && f.onXhrComplete(a, t))
            }, a.send(null)
        } : "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function(t, e) {
            var i, n, s = "utf-8",
                r = new java.io.File(t),
                a = java.lang.System.getProperty("line.separator"),
                o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), s)),
                l = "";
            try {
                for (i = new java.lang.StringBuffer, n = o.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), null !== n && i.append(n); null !== (n = o.readLine());) i.append(a), i.append(n);
                l = String(i.toString())
            } finally {
                o.close()
            }
            e(l)
        } : ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (n = Components.classes, s = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), r = "@mozilla.org/windows-registry-key;1" in n, e.get = function(t, e) {
            var i, a, o, l = {};
            r && (t = t.replace(/\//g, "\\")), o = new FileUtils.File(t);
            try {
                i = n["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream), i.init(o, 1, 0, !1), a = n["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream), a.init(i, "utf-8", i.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), a.readString(i.available(), l), a.close(), i.close(), e(l.value)
            } catch (h) {
                throw new Error((o && o.path || "") + ": " + h)
            }
        }), e
    }), define("text!data/copy/ch_CH.json", [], function() {
        return '{\n "locale": "ch_CH",\n "share-global-mailto-subject": "Subaru loves the earth, and here\'s the proof. ",\n "share-global-mailto-body": "Doing right by the planet isn\'t just important to us, it guides every decision we make as a company. From the cars we make to the charities and organizations we support, we are dedicated to protecting and preserving our world\'s most meaningful places and resources. Visit subaru.com/environment to explore over a decade of our environmental progress.",\n "share-global-facebook": "Subaru loves the earth, and here\'s the proof.\\n",\n "share-global-facebook-title": "Who We Are Is What We Leave Behind",\n "share-global-twitter": "Subaru loves the earth, and here\'s the proof.\\n",\n "share-detail-mailto-subject": "See how Subaru and its partners are doing their part to keep the planet lovable.",\n "share-detail-mailto-body": "Doing right by the planet isn\'t just important to us, it guides every decision we make as a company. From the cars we make to the charities and organizations we support to our decision to help make our irreplaceable National Parks zero landfill, we are dedicated to protecting and preserving our world\'s most meaningful places and resources. Visit subaru.com/environment to follow our progress with the parks and explore over a decade of our environmental progress.\\n",\n "share-detail-facebook": "See how Subaru and its partners are doing their part to keep the planet lovable.",\n "share-detail-twitter": "See how Subaru and its partners are doing their part to keep the planet lovable.",\n "loader-page-title": "Zero <span>Landfill</span>",\n "loader-page-step-one": "Over a Decade of Subaru Environmental Progress.",\n "loader-page-summary": "From becoming America\'s first Zero-Landfill auto maker, with all waste recycled or reused, to our  current National Park Zero-Landfill initiative.",\n "loader-page-start-button": "Start Exploring",\n "about-page-title": "About",\n "about-page-headline": "Subaru and the Environment",\n "about-page-subhead": "Our Commitment",\n "about-page-body": "Doing right by the planet isn\'t just important to us, it guides every decision we make as a company. From the cars we make to the charities and organizations we support, we are dedicated to protecting and preserving our world\'s most meaningful places and resources. And it\'s reflected in Love Promise, our company-wide commitment to protecting the earth and making a positive impact out in the world.",\n "bottom-left-copy": "我如何能帮忙？",\n "legend-title": "探索",\n "legend-years-label": "年",\n "legend-months-label": "月",\n "legend-days-label": "天",\n "slider-years-label-first-letter": "年",\n "slider-years-label-letters": "",\n "slider-months-label-first-letter": "月",\n "slider-months-label-letters": "",\n "slider-days-label-first-letter": "天",\n "slider-days-label-letters": "",\n "details-page-title": "详细信息",\n "details-page-follow-link": "Follow progress",\n "details-page-share-link": "Share Content",\n "details-page-external-link": "Link",\n "how-can-i-help-page-title": "我如何能帮忙？",\n "how-can-i-help-page-more-button": "更多的途径来帮助",\n "how-can-i-help-page-follow-link": "Stay Updated",\n "how-can-i-help-page-share-link": "Share Content",\n "how-can-i-help-page-external-link": "Link",\n "header-feature-title": "Featured Content",\n "header-time-mode": "时间模式",\n "header-categories": "分类",\n "footer-share-link": "Share site",\n "footer-about-link": "About",\n "footer-subaru-link": "Subaru.com",\n "hints-ring": "选择年份环或月点",\n "hints-tablet-ring": "CLICK AND DRAG TO SELECT YEAR",\n "hints-circle": "CLICK CIRCLES TO OPEN",\n "hints-tablet-circle": "TAP CIRCLES TO OPEN",\n "hints-grab": "通过拖移导航",\n "suggestion-form-title": "Leave a Suggestion",\n "suggestion-form-subtitle": "Do you have a brilliant idea to help the parks become zero landfill? Let us know.",\n "suggestion-form-submit": "Submit",\n "form-title": "Join Our Journey",\n "form-subtitle": "SIGN UP BELOW FOR UPDATES",\n "form-twitter-copy": "Follow on Twitter",\n "form-facebook-copy": "Follow on Facebook",\n "form-submit-button": "Sign up",\n "mobile-rotate-overlay-copy": "Please Rotate Device to Landscape Mode"\n}'
    }), define("model/copy_model", ["backbone", "underscore", "config", "text!data/copy/ch_CH.json"], function(t, e, i, n) {
        var s = t.Model.extend({
            initialize: function() {
                this.set(JSON.parse(n)), this.set("share-suggestion", "I just shared an idea to help the National Parks become zero-landfill. You can to.")
            },
            getGlobalTwitter: function() {
                return this.get("share-global-twitter")
            },
            getGlobalFacebook: function() {
                return {
                    title: this.get("share-global-facebook-title"),
                    description: this.get("share-global-facebook")
                }
            },
            getGlobalPinterest: function() {
                return {
                    title: this.get("share-global-facebook-title"),
                    description: this.get("share-global-facebook")
                }
            },
            getGlobalMail: function() {
                return {
                    subject: this.get("share-global-mailto-subject"),
                    body: this.get("share-global-mailto-body")
                }
            },
            getDetailTwitter: function() {
                return this.get("share-detail-twitter")
            },
            getDetailFacebook: function() {
                return {
                    title: this.get("about-detail-headline"),
                    description: this.get("share-detail-facebook")
                }
            },
            getDetailPinterest: function() {
                return {
                    title: this.get("about-detail-headline"),
                    description: this.get("share-detail-facebook")
                }
            },
            getDetailMail: function() {
                return {
                    subject: this.get("share-detail-mailto-subject"),
                    body: this.get("share-detail-mailto-body")
                }
            },
            getSuggestionCopy: function() {
                return {
                    title: this.get("share-global-facebook-title"),
                    description: this.get("share-suggestion")
                }
            }
        });
        return new s
    }), define("util/google_analytics", [], function() {
        "use strict";
        return function(t, e, i, n, s, r, a) {
                t.GoogleAnalyticsObject = s, t[s] = t[s] || function() {
                    (t[s].q = t[s].q || []).push(arguments)
                }, t[s].l = 1 * new Date, r = e.createElement(i), a = e.getElementsByTagName(i)[0], r.async = 1, r.src = n, a.parentNode.insertBefore(r, a)
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
            function() {
                window.ga.apply(window.ga, arguments)
            }
    }), define("controller/tracking_controller", ["jquery", "underscore", "config", "route/router", "model/app_model", "util/google_analytics"], function(t, e, i, n, s, r) {
        "use strict";
        var a = {
            currentPage: "",
            init: function() {
                r("create", i.getAnalytics(), "auto"), window.s || (window.s = {
                    tl: function() {}
                })
            },
            page: function(t) {
                this.currentPage = t;
                var e = "csr-" + t;
                window.s.linkTrackVars = "prop65,eVar65", window.s.linkTrackEvents = "none", window.s.prop65 = e, window.s.eVar65 = e, window.s.tl(this, "o", "environment:" + e)
            },
            event: function(t, e, i, n) {
                var s = "csr-" + t;
                window.s.linkTrackVars = "prop65,eVar65", window.s.linkTrackEvents = "none", window.s.prop66 = s, window.s.eVar66 = s, "video" === i ? (window.s.linkTrackVars += ",prop28,eVar28", window.s.prop28 = s, window.s.eVar28 = s, "start" === e ? (window.s.linkTrackEvents = "event49", window.s.events = "event49") : "finish" === e && (window.s.linkTrackEvents = "event50", window.s.events = "event50")) : "share" === e && (window.s.linkTrackEvents = "event86", window.s.events = "event86"), window.s.tl(this, "o", "environment:" + s)
            },
            social: function(t, e, i, n) {
                console.log("GA social:", t, e, i, n), r("send", "social", "csr-" + t, e, i, n)
            }
        };
        return a.init(), a
    }), define("data/constants", [], function() {
        "use strict";
        return {
            Social: {
                Facebook: "facebook",
                Twitter: "twitter",
                Tumblr: "tumblr",
                Pinterest: "pinterest",
                GooglePlus: "gplus",
                Mail: "mail"
            }
        }
    }), define("util/facebook", ["config", "underscore", "backbone"], function(t, e, i) {
        var n = {
            SDK: null,
            ready: !1,
            onFBinit: function() {
                window.FB.init({
                    appId: t.getFBID(),
                    channelUrl: t.SITE_URL + "/channel.html",
                    status: !0,
                    cookie: !0,
                    xfbml: !0
                }), window.FB.Event.subscribe("edge.create", e.bind(this.onFBLike, this)), window.FB.Event.subscribe("comment.create", e.bind(this.onFBComment, this)), this.SDK = window.FB, this.ready = !0, this.trigger("fb_ready")
            },
            onFBComment: function(t) {
                this.trigger("fb_comment", t)
            },
            onFBLike: function(t) {
                this.trigger("fb_like", t)
            },
            renderAllLikes: function() {
                this.SDK.XFBML.parse()
            }
        };
        return e.extend(n, i.Events), window.fbAsyncInit = e.bind(n.onFBinit, n),
            function(t, e, i) {
                var n, s = t.getElementsByTagName(e)[0];
                t.getElementById(i) || (n = t.createElement(e), n.id = i, n.src = "//connect.facebook.net/en_US/all.js", s.parentNode.insertBefore(n, s))
            }(document, "script", "facebook-jssdk"), n
    }), define("util/resn/share", ["jquery", "config", "underscore", "util/facebook"], function(t, e, i, n) {
        "use strict";
        return {
            mailTo: function(t) {
                window.location.href = t
            },
            tweet: function(t, e, i) {
                t = t, i = i;
                var n = encodeURIComponent(e),
                    s = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&url=" + n;
                i && i.length > 0 && (s += "&related=" + encodeURIComponent(i)), window.open(s, "tweetFollow", "width=550,height=420,toolbar=no") || (window.location.href = s)
            },
            gplus: function(t) {
                window.open("https://plus.google.com/share?url=" + encodeURIComponent(t), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
            },
            pin: function(t) {
                t = "//www.pinterest.com/pin/create/button/" + t, window.open(t, "pinterestShare", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
            },
            facebook: function(t) {
                var e = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(t);
                window.open(e, "fbShare", "width=550,height=420,toolbar=no")
            },
            fbpost: function(t, e) {
                var s = {};
                s.method = "feed", s = i.extend(s, t), n.SDK.ui(s, e)
            },
            vk: function(t) {
                var e = "http://vkontakte.ru/share.php?url=" + encodeURIComponent(t);
                window.open(e, "vkShare", "width=550,height=420,toolbar=no")
            }
        }
    }), define("controller/share_controller", ["backbone", "underscore", "model/app_model", "model/copy_model", "controller/tracking_controller", "config", "data/constants", "events/app_events", "util/resn/share"], function(t, e, i, n, s, r, a, o, l) {
        "use strict";
        var h = {
            init: function() {
                e.templateSettings = {
                    interpolate: /\{\{(.+?)\}\}/g
                }, this.listenTo(t, o.Share.Suggestion, this.onSuggestionShare), this.listenTo(t, o.Share.Global, this.onGlobalShare), this.listenTo(t, o.Share.Detail, this.onDetailShare)
            },
            onGlobalShare: function(t) {
                var e = {
                    url: r.SITE_URL,
                    image: this.getGlobalImage()
                };
                switch (t) {
                    case a.Social.Twitter:
                        e.title = n.getGlobalTwitter(), this.onShareTwitter(e);
                        break;
                    case a.Social.Facebook:
                        e.title = n.getGlobalFacebook().title, e.description = n.getGlobalFacebook().description, this.onShareFacebook(e);
                        break;
                    case a.Social.Pinterest:
                        e.title = n.getGlobalPinterest().title, e.description = n.getGlobalPinterest().description, this.onSharePinterest(e);
                        break;
                    case a.Social.Mail:
                        e.subject = n.getGlobalMail().subject, e.body = n.getGlobalMail().body, this.onShareMail(e)
                }
            },
            onDetailShare: function(t) {
                var e = t.model,
                    i = {
                        title: e.get("title"),
                        image: this.getDetailImage(e),
                        type: t.type,
                        url: e.get("share"),
                        description: e.get("shortdesc") || e.get("description")
                    };
                switch (i.type) {
                    case a.Social.Twitter:
                        this.onShareTwitter(i);
                        break;
                    case a.Social.Facebook:
                        this.onShareFacebook(i);
                        break;
                    case a.Social.Pinterest:
                        this.onSharePinterest(i);
                        break;
                    case a.Social.Mail:
                        console.log(i), i.subject = i.title, i.body = i.description + "\n\n" + i.url, this.onShareMail(i)
                }
            },
            onSuggestionShare: function(t) {
                var e = {
                    url: r.SITE_URL,
                    image: this.getGlobalImage()
                };
                switch (t) {
                    case a.Social.Twitter:
                        e.title = n.getSuggestionCopy().description, this.onShareTwitter(e);
                        break;
                    case a.Social.Facebook:
                        e.title = n.getSuggestionCopy().title, e.description = n.getSuggestionCopy().description, this.onShareFacebook(e)
                }
            },
            onShareFacebook: function(t) {
                var e = {
                    method: "feed",
                    link: t.url,
                    picture: t.image,
                    name: t.title,
                    caption: t.url,
                    description: t.description
                };
                l.fbpost(e, function() {}), s.social("facebook", "share", t.url)
            },
            onShareTwitter: function(t) {
                var e = t.url,
                    i = t.title,
                    n = null;
                l.tweet(i, e, n), s.social("twitter", "share", t.url)
            },
            onSharePinterest: function(t) {
                var e = "?url=" + t.url + "&media=" + t.image + "&description=" + t.description;
                l.pin(e)
            },
            onShareMail: function(t) {
                var e = encodeURIComponent(t.subject),
                    i = encodeURIComponent(t.body),
                    n = "mailto:?subject=" + e + "&body=" + i;
                l.mailTo(n), s.social("twitter", "share", t.url)
            },
            getFormatedCopy: function(t, i) {
                var n = e.template(t);
                return n(i)
            },
            getDetailImage: function(t) {
                var e, i = t.get("media")[0];
                return e = "image" === i.type ? i.images.l.src : "video" === i.type ? i.poster.src : this.getGlobalImage()
            },
            getGlobalImage: function() {
                return "http://www.subaru.com/content/dam/subaru/Environment/env_thumb.jpg"
            }
        };
        return e.extend(h, t.Events), h.init(), h
    }), define("controller/app_controller", ["route/router", "model/app_model", "model/loader_collection", "controller/feature_controller", "controller/share_controller"], function(t, e, i, n, s) {
        var r = {
            init: function() {
                i.on("complete", this.onLoaderComplete, this), t.on("route", this.onRouterPage, this), e.on("start:application", this.startApplication, this)
            },
            onRouterPage: function(t, n) {
                t === e.PAGES.LOADER || i.hasLoaded("main") ? t === e.PAGES.TREE || t === e.PAGES.DETAILS || t === e.PAGES.ARCHIVE || t === e.PAGES_MOBILE.TREE_MONTH ? (e.set("page", t), e.setDate(n[0], n[1], n[2]), e.set("pageOptions", n)) : t === e.PAGES.CATEGORIES || t === e.PAGES_MOBILE.TREE_CATEGORY ? (e.set("page", t), e.setCategory(n[0]), e.set("pageOptions", n)) : t === e.PAGES.HOW_CAN_I_HELP ? (console.log("app controller how can i help", t, n), e.set("page", t), e.set("pageOptions", n)) : (e.set("page", t), e.set("pageOptions", null)) : (e.set({
                    postLoaderPage: t,
                    postLoaderPageOptions: n
                }), e.set("page", e.PAGES.LOADER))
            },
            onLoaderComplete: function(t) {
                i.off("complete", this.onLoaderComplete)
            },
            startApplication: function() {
                e.get("postLoaderPage") && (window.location.href.split("getinvolved").length > 1 ? this.onRouterPage(e.PAGES.ABOUT, null) : window.location.href.split("details").length > 1 ? this.onRouterPage(e.PAGES.DETAILS, e.get("postLoaderPageOptions")) : window.location.href.split("howcanihelp").length > 1 ? this.onRouterPage(e.PAGES.HOW_CAN_I_HELP, e.get("postLoaderPageOptions")) : this.onRouterPage(e.get("postLoaderPage"), e.get("postLoaderPageOptions")))
            }
        };
        return r.init(), r
    }), define("controller/loader_controller", ["underscore", "route/router", "model/loader_collection"], function(t, e, i) {
        "use strict";
        var n = {
            init: function() {},
            start: function() {
                i.start("main")
            }
        };
        return n.init(), n
    }), define("view/common/communicator", ["jquery", "underscore", "backbone"], function(t, e, i) {
        var n = {};
        return e.extend(n, i.Events), n
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    s = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    r = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    l = a.isArray,
                    h = s.prototype = i.to({}, .1, {}),
                    c = [];
                s.version = "1.17.0", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var n, s = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || r) {
                        this._initted = !1, this._init();
                        for (var o, l = 1 / (1 - s), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, s, o, l, h, c, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        g = this._totalTime,
                        m = this._cycle,
                        v = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > _ || _ === r) && _ !== t && (i = !0, _ > r && (s = "onReverseComplete")), this._rawPrevTime = d = !e || t || _ === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === v && _ > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = d = !e || t || _ === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / v, c = this._easeType, u = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : .5 > this._time / v ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && m === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = g, this._rawPrevTime = _, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || n) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === v && this._rawPrevTime === r && d !== r && (this._rawPrevTime = 0))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function(t, e, r, a, h, u, d) {
                    a = a || 0;
                    var p, f, g, m, v = r.delay || 0,
                        _ = [],
                        y = function() {
                            r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), h.apply(d || r.callbackScope || this, u || c)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), p = t.length - 1, g = 0; p >= g; g++) {
                        f = {};
                        for (m in r) f[m] = r[m];
                        f.delay = v, g === p && h && (f.onComplete = y), _[g] = new s(t[g], e, f), v += a
                    }
                    return _
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, a, o)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, a, o, l)
                }, s.delayedCall = function(t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(u(r, e)), s = n.length), r = r._next;
                        return n
                    },
                    d = s.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var r, a, o, l = d(0 != s),
                        h = l.length,
                        c = i && n && s;
                    for (o = 0; h > o; o++) a = l[o], (c || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, h, c, u, d, p = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t)), l(t))
                            for (u = t.length; --u > -1;) s.killChildTweensOf(t[u], e);
                        else {
                            r = [];
                            for (c in p)
                                for (h = p[c].target.parentNode; h;) h === t && (r = r.concat(p[c].tweens)), h = h.parentNode;
                            for (d = r.length, u = 0; d > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, n, s) {
                    i = i !== !1, n = n !== !1, s = s !== !1;
                    for (var r, a, o = d(s), l = i && n && s, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && a.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || r, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    r = i._internals,
                    a = n._internals = {},
                    o = r.isSelector,
                    l = r.isArray,
                    h = r.lazyTweens,
                    c = r.lazyRender,
                    u = [],
                    d = _gsScope._gsDefine.globals,
                    p = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = a.pauseCallback = function(t, e, i, n) {
                        var r, a = t._timeline,
                            o = a._totalTime,
                            l = t._startTime,
                            h = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                            c = h ? 0 : s,
                            d = h ? s : 0;
                        if (e || !this._forcingPlayhead) {
                            for (a.pause(l), r = t._prev; r && r._startTime === l;) r._rawPrevTime = d, r = r._prev;
                            for (r = t._next; r && r._startTime === l;) r._rawPrevTime = c, r = r._next;
                            e && e.apply(n || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
                        }
                    },
                    g = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.17.0", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, s) {
                    var r = n.repeat && d.TweenMax || i;
                    return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
                }, m.from = function(t, e, n, s) {
                    return this.add((n.repeat && d.TweenMax || i).from(t, e, n), s)
                }, m.fromTo = function(t, e, n, s, r) {
                    var a = s.repeat && d.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, n, s), r) : this.set(t, s, r)
                }, m.staggerTo = function(t, e, s, r, a, l, h, c) {
                    var u, d = new n({
                        onComplete: l,
                        onCompleteParams: h,
                        callbackScope: c,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = g(t)), r = r || 0, 0 > r && (t = g(t), t.reverse(), r *= -1), u = 0; t.length > u; u++) s.startAt && (s.startAt = p(s.startAt)), d.to(t[u], e, p(s), u * r);
                    return this.add(d, a)
                }, m.staggerFrom = function(t, e, i, n, s, r, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, a, o)
                }, m.staggerFromTo = function(t, e, i, n, s, r, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, a, o, l)
                }, m.call = function(t, e, n, s) {
                    return this.add(i.delayedCall(0, t, e, n), s)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, r, a = new n(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, s = o._first; s;) r = s._next, e && s instanceof i && s.target === s.vars.onComplete || a.add(s, s._startTime - s._delay), s = r;
                    return o.add(a, 0), a
                }, m.add = function(s, r, a, o) {
                    var h, c, u, d, p, f;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) {
                            for (a = a || "normal", o = o || 0, h = r, c = s.length, u = 0; c > u; u++) l(d = s[u]) && (d = new n({
                                tweens: d
                            })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === a ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof s) return this.addLabel(s, r);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > s._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, n, s) {
                    var r = i.delayedCall(0, f, ["{self}", e, n, s], this);
                    return r.data = "isPause", this.add(r, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, s) {
                    var r;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && l(s)))
                        for (r = s.length; --r > -1;) s[r] instanceof t && s[r].timeline === this && this.remove(s[r]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, a, o, l, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        p = this._startTime,
                        f = this._timeScale,
                        g = this._paused;
                    if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = u + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== d && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= d)
                            for (n = this._first; n && (a = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, !this._paused || g);)(n._active || d >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, s) {
                    s = s || -9999999999;
                    for (var r = [], a = this._first, o = 0; a;) s > a._startTime || (a instanceof i ? e !== !1 && (r[o++] = a) : (n !== !1 && (r[o++] = a), t !== !1 && (r = r.concat(a.getChildren(!0, e, n)), o = r.length))), a = a._next;
                    return r
                }, m.getTweensOf = function(t, e) {
                    var n, s, r = this._gc,
                        a = [],
                        o = 0;
                    for (r && this._enabled(!0, !0), n = i.getTweensOf(t), s = n.length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (a[o++] = n[s]);
                    return r && this._enabled(!1, !0), a
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (n in r) r[n] >= i && (r[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                    return s
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, 0 > s._startTime && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    s = 1e-10,
                    r = e._internals,
                    a = r.lazyTweens,
                    o = r.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = n.prototype = new t;
                return h.constructor = n, h.kill()._gc = !1, n.version = "1.17.0", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, n, s) {
                    return this.add(e.delayedCall(0, t, n, s), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                    return this
                }, h.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var n, s, r, a = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) a[s] = i[s];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, r = new e(this, n, a), a.onStart = function() {
                        r.target.paused(!0), r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && r._callback("onStart")
                    }, r
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, l, h, c, u, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        f = this._time,
                        g = this._totalTime,
                        m = this._startTime,
                        v = this._timeScale,
                        _ = this._rawPrevTime,
                        y = this._paused,
                        b = this._cycle;
                    if (t >= d) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > _ || _ === s) && _ !== t && this._first && (c = !0, _ > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === p && _ !== s && (_ > 0 || 0 > t && _ >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : _ >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        } else 0 === p && 0 > _ && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t,
                        0 !== this._repeat && (u = p + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & b),
                            x = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            T = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            E = this._time;
                        if (this._totalTime = b * p, b > this._cycle ? w = !w : this._totalTime += p, this._time = f, this._rawPrevTime = 0 === p ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, f = w ? 0 : p, this.render(f, e, 0 === p), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), x && (f = w ? p + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !y) return;
                        this._time = E, this._totalTime = T, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== f && this._first || i || c)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= f)
                        for (n = this._first; n && (l = n._next, !this._paused || y);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, !this._paused || y);)(n._active || f >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (m === this._startTime || v !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, s, r = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (n = 0; l > n; n++) s = a[n], s.isActive() && (r[o++] = s);
                    return r
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    s = {},
                    r = _gsScope._gsDefine.globals,
                    a = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var s = {
                                a: t
                            },
                            r = {},
                            a = {},
                            o = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + n) / 2,
                            u = (l + h) / 2,
                            d = (h + c) / 2,
                            p = (d - u) / 8;
                        return s.b = l + (t - l) / 4, r.b = u + p, s.c = r.a = (s.b + r.b) / 2, r.c = a.a = (u + d) / 2, a.b = d - p, o.b = c + (n - c) / 4, a.c = o.a = (a.b + o.b) / 2, [s, r, a, o]
                    },
                    h = function(t, s, r, a, o) {
                        var h, c, u, d, p, f, g, m, v, _, y, b, w, x = t.length - 1,
                            T = 0,
                            S = t[0].a;
                        for (h = 0; x > h; h++) p = t[T], c = p.a, u = p.d, d = t[T + 1].d, o ? (y = e[h], b = i[h], w = .25 * (b + y) * s / (a ? .5 : n[h] || .5), f = u - (u - c) * (a ? .5 * s : 0 !== y ? w / y : 0), g = u + (d - u) * (a ? .5 * s : 0 !== b ? w / b : 0), m = u - (f + ((g - f) * (3 * y / (y + b) + .5) / 4 || 0))) : (f = u - .5 * (u - c) * s, g = u + .5 * (d - u) * s, m = u - (f + g) / 2), f += m, g += m, p.c = v = f, p.b = 0 !== h ? S : S = p.a + .6 * (p.c - p.a), p.da = u - c, p.ca = v - c, p.ba = S - c, r ? (_ = l(c, S, v, u), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, S = g;
                        p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, r && (_ = l(p.a, S, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
                    },
                    c = function(t, n, s, r) {
                        var o, l, h, c, u, d, p = [];
                        if (r)
                            for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = r[n] + Number(d.charAt(0) + d.substr(2)));
                        if (o = t.length - 2, 0 > o) return p[0] = new a(t[0][n], 0, 0, t[-1 > o ? 0 : 1][n]), p;
                        for (l = 0; o > l; l++) h = t[l][n], c = t[l + 1][n], p[l] = new a(h, 0, 0, c), s && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                        return p[l] = new a(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    u = function(t, r, a, l, u, d) {
                        var p, f, g, m, v, _, y, b, w = {},
                            x = [],
                            T = d || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == r && (r = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], y = !0, p = x.length; --p > -1;)
                                if (f = x[p], Math.abs(T[f] - b[f]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = x.length; --p > -1;) f = x[p], s[f] = -1 !== u.indexOf("," + f + ","), w[f] = c(t, f, s[f], d);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = x.length; --p > -1;)
                                if (s[f])
                                    for (g = w[x[p]], _ = g.length - 1, m = 0; _ > m; m++) v = g[m + 1].da / i[m] + g[m].da / e[m], n[m] = (n[m] || 0) + v * v;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = x.length, m = a ? 4 : 1; --p > -1;) f = x[p], g = w[f], h(g, r, a, l, s[f]), y && (g.splice(0, m), g.splice(g.length - m, m));
                        return w
                    },
                    d = function(t, e, i) {
                        e = e || "soft";
                        var n, s, r, o, l, h, c, u, d, p, f, g = {},
                            m = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            _ = [];
                        if (v && i && (t = [i].concat(t)), null == t || m + 1 > t.length) throw "invalid Bezier data";
                        for (d in t[0]) _.push(d);
                        for (h = _.length; --h > -1;) {
                            for (d = _[h], g[d] = l = [], p = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && u - 1 > c && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (u = p - m + 1, p = 0, c = 0; u > c; c += m) n = l[c], s = l[c + 1], r = l[c + 2], o = 2 === m ? 0 : l[c + 3], l[p++] = f = 3 === m ? new a(n, s, r, o) : new a(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                            l.length = p
                        }
                        return g
                    },
                    p = function(t, e, i) {
                        for (var n, s, r, a, o, l, h, c, u, d, p, f = 1 / i, g = t.length; --g > -1;)
                            for (d = t[g], r = d.a, a = d.d - r, o = d.c - r, l = d.b - r, n = s = 0, c = 1; i >= c; c++) h = f * c, u = 1 - h, n = s - (s = (h * h * a + 3 * u * (h * o + u * l)) * h), p = g * i + c - 1, e[p] = (e[p] || 0) + n * n
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, s, r, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            c = e - 1,
                            u = [],
                            d = [];
                        for (i in t) p(t[i], a, e);
                        for (s = a.length, n = 0; s > n; n++) l += Math.sqrt(a[n]), r = n % e, d[r] = l, r === c && (h += l, r = n / e >> 0, u[r] = d, o[r] = h, l = 0, d = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: u
                        }
                    },
                    g = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, s, r, a, o, l = e.values || [],
                                h = {},
                                c = l[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (n in c) this._props.push(n);
                            for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), o || h[n] !== l[0][n] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : d(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                var g = f(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                                    for (a = 0; 3 > a; a++) n = p[r][a], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = p[r][2], this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, s, r, a, o, l, h, c, u, d = this._segCount,
                                p = this._func,
                                f = this._target,
                                g = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && d - 1 > s) {
                                    for (h = d - 1; h > s && e >= (this._l2 = c[++s]););
                                    this._l1 = c[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && s > 0) {
                                    for (; s > 0 && (this._l1 = c[--s]) >= e;);
                                    0 === s && this._l1 > e ? this._l1 = 0 : s++, this._l2 = c[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = s, e -= this._l1, s = this._si, e > this._s2 && u.length - 1 > s) {
                                    for (h = u.length - 1; h > s && e >= (this._s2 = u[++s]););
                                    this._s1 = u[s - 1], this._si = s
                                } else if (this._s1 > e && s > 0) {
                                    for (; s > 0 && (this._s1 = u[--s]) >= e;);
                                    0 === s && this._s1 > e ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                                }
                                o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, o = (e - i * (1 / d)) * d;
                            for (n = 1 - o, s = this._props.length; --s > -1;) r = this._props[s], a = this._beziers[r][i], l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._round[r] && (l = Math.round(l)), p[r] ? f[r](l) : f[r] = l;
                            if (this._autoRotate) {
                                var m, v, _, y, b, w, x, T = this._autoRotate;
                                for (s = T.length; --s > -1;) r = T[s][2], w = T[s][3] || 0, x = T[s][4] === !0 ? 1 : t, a = this._beziers[T[s][0]], m = this._beziers[T[s][1]], a && m && (a = a[i], m = m[i], v = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, v += (y - v) * o, y += (a.c + (a.d - a.c) * o - y) * o, _ = m.a + (m.b - m.a) * o, b = m.b + (m.c - m.b) * o, _ += (b - _) * o, b += (m.c + (m.d - m.c) * o - b) * o, l = g ? Math.atan2(b - _, y - v) * x + w : this._initialRotations[s], p[r] ? f[r](l) : f[r] = l)
                            }
                        }
                    }),
                    m = g.prototype;
                g.bezierThrough = u, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, g._cssRegister = function() {
                    var t = r.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            s = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, r, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new g;
                                var h, c, u, d = e.values,
                                    p = d.length - 1,
                                    f = [],
                                    m = {};
                                if (0 > p) return o;
                                for (h = 0; p >= h; h++) u = i(t, d[h], a, o, l, p !== h), f[h] = u.end;
                                for (c in e) m[c] = e[c];
                                return m.values = f, o = new s(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, m, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, m._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, s, r, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c, u, d, p, f, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    E = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) {
                        return e.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    j = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    O = /,(?=[^\)]*(?:\(|$))/gi,
                    I = Math.PI / 180,
                    $ = 180 / Math.PI,
                    R = {},
                    D = document,
                    M = function(t) {
                        return D.createElementNS ? D.createElementNS("http://www.w3.org/1999/xhtml", t) : D.createElement(t)
                    },
                    N = M("div"),
                    F = M("img"),
                    B = a._internals = {
                        _specialProps: l
                    },
                    H = navigator.userAgent,
                    q = function() {
                        var t = H.indexOf("Android"),
                            e = M("a");
                        return d = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || Number(H.substr(t + 8, 1)) > 3), f = d && 6 > Number(H.substr(H.indexOf("Version/") + 8, 1)), p = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (g = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    V = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    z = function(t) {
                        window.console && console.log(t)
                    },
                    Y = "",
                    G = "",
                    X = function(t, e) {
                        e = e || N;
                        var i, n, s = e.style;
                        if (void 0 !== s[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                        return n >= 0 ? (G = 3 === n ? "ms" : i[n], Y = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    U = D.defaultView ? D.defaultView.getComputedStyle : function() {},
                    W = a.getStyle = function(t, e, i, n, s) {
                        var r;
                        return q || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || U(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : V(t)
                    },
                    J = B.convertToPixels = function(t, i, n, s, r) {
                        if ("px" === s || !s) return n;
                        if ("auto" === s || !n) return 0;
                        var o, l, h, c = C.test(i),
                            u = t,
                            d = N.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === s && -1 !== i.indexOf("border")) o = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + W(t, "position") + ";line-height:0;", "%" !== s && u.appendChild) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                            else {
                                if (u = t.parentNode || D.body, l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                                d[c ? "width" : "height"] = n + s
                            }
                            u.appendChild(N), o = parseFloat(N[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(N), c && "%" === s && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (o / n)), 0 !== o || r || (o = J(t, i, n, s, !0))
                        }
                        return p ? -o : o
                    },
                    Q = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== W(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = W(t, "margin" + n, i);
                        return t["offset" + n] - (J(t, e, parseFloat(s), s.replace(b, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, n, s, r = {};
                        if (e = e || U(t, null))
                            if (i = e.length)
                                for (; --i > -1;) s = e[i], (-1 === s.indexOf("-transform") || St === s) && (r[s.replace(E, A)] = e.getPropertyValue(s));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(E, A)] = e[i]);
                        return q || (r.opacity = V(t)), n = Dt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Et && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    Z = function(t, e, i, n, s) {
                        var r, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(y, "") ? r : 0 : Q(t, a), void 0 !== h[a] && (o = new pt(h, a, h[a], o)));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = tt[e],
                            r = s.length;
                        for (i = i || U(t, null); --r > -1;) n -= parseFloat(W(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(W(t, "border" + s[r] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t
                    },
                    st = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    rt = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    at = function(t, e, i, n) {
                        var s, r, a, o, l, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, r = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : $) - (l ? 0 : e), r.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    ot = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ht = a.parseColor = function(t) {
                        var e, i, n, s, r, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (r + 1) : a + r - a * r, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(s + 1 / 3, e, i), t[1] = lt(s, e, i), t[2] = lt(s - 1 / 3, e, i), t) : (t = t.match(m) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                    },
                    ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in ot) ct += "|" + h + "\\b";
                ct = RegExp(ct + ")", "gi");
                var ut = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var s, r = e ? (t.match(ct) || [""])[0] : "",
                            a = t.split(r).join("").match(_) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = a.length,
                            u = c > 0 ? a[0].replace(m, "") : "";
                        return c ? s = e ? function(t) {
                            var e, d, p, f;
                            if ("number" == typeof t) t += u;
                            else if (n && O.test(t)) {
                                for (f = t.replace(O, "|").split("|"), p = 0; f.length > p; p++) f[p] = s(f[p]);
                                return f.join(",")
                            }
                            if (e = (t.match(ct) || [r])[0], d = t.split(e).join("").match(_) || [], p = d.length, c > p--)
                                for (; c > ++p;) d[p] = i ? d[0 | (p - 1) / 2] : a[p];
                            return o + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, d;
                            if ("number" == typeof t) t += u;
                            else if (n && O.test(t)) {
                                for (r = t.replace(O, "|").split("|"), d = 0; r.length > d; d++) r[d] = s(r[d]);
                                return r.join(",")
                            }
                            if (e = t.match(_) || [], d = e.length, c > d--)
                                for (; c > ++d;) e[d] = i ? e[0 | (d - 1) / 2] : a[d];
                            return o + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    dt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, s, r, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return s.parse(e, o, r, a)
                            }
                    },
                    pt = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, r = this.data, a = r.proxy, o = r.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                        if (r.autoRotate && (r.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = r.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = s
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, n, s) {
                        this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                    }),
                    ft = (B._parseToProxy = function(t, e, i, n, s, r) {
                        var a, o, l, h, c, u = n,
                            d = {},
                            p = {},
                            f = i._transform,
                            g = R;
                        for (i._transform = null, R = e, n = c = i.parse(t, e, n, s), R = g, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (1 >= n.type && (o = n.p, p[o] = n.s + n.c, d[o] = n.s, r || (h = new pt(n, "s", o, h, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, p[o] = n.data[l], d[o] = n[l], r || (h = new pt(n, l, o, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: p,
                            firstMPT: h,
                            pt: c
                        }
                    }, B.CSSPropTween = function(t, e, n, s, a, o, l, h, c, u, d) {
                        this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof ft || r.push(this.n), this.r = h, this.type = o || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === d ? n + s : d, a && (this._next = a, a._prev = this)
                    }),
                    gt = function(t, e, i, n, s, r) {
                        var a = new ft(t, e, i, n - i, s, -1, r);
                        return a.b = i, a.e = a.xs0 = n, a
                    },
                    mt = a.parseComplex = function(t, e, i, n, s, r, a, o, l, h) {
                        i = i || r || "", a = new ft(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, n), n += "";
                        var u, d, p, f, g, _, y, b, w, x, T, k, E = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            A = E.length,
                            C = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(O, ", ").split(" "), P = P.join(" ").replace(O, ", ").split(" "), A = E.length), A !== P.length && (E = (r || "").split(" "), A = E.length), a.plugin = l, a.setRatio = h, u = 0; A > u; u++)
                            if (f = E[u], g = P[u], b = parseFloat(f), b || 0 === b) a.appendXtra("", b, st(g, b), g.replace(v, ""), C && -1 !== g.indexOf("px"), !0);
                            else if (s && ("#" === f.charAt(0) || ot[f] || S.test(f))) k = "," === g.charAt(g.length - 1) ? ")," : ")", f = ht(f), g = ht(g), w = f.length + g.length > 6, w && !q && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(P[u]).join("transparent")) : (q || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], w ? "," : k, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, k, !1)));
                        else if (_ = f.match(m)) {
                            if (y = g.match(v), !y || y.length !== _.length) return a;
                            for (p = 0, d = 0; _.length > d; d++) T = _[d], x = f.indexOf(T, p), a.appendXtra(f.substr(p, x - p), Number(T), st(y[d], T), "", C && "px" === f.substr(x + T.length, 2), 0 === d), p = x + T.length;
                            a["xs" + a.l] += f.substr(p)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, u = 1; a.l > u; u++) k += a["xs" + u] + a.data["xn" + u];
                            a.e = k + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    vt = 9;
                for (h = ft.prototype, h.l = h.pr = 0; --vt > 0;) h["xn" + vt] = 0, h["xs" + vt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, s, r) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += r && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new ft(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (n || ""), a)
                };
                var _t = function(t, e) {
                        e = e || {}, this.p = e.prefix ? X(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    yt = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s, r = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], n = 0; r.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || a, s = new _t(r[n], e)
                    },
                    bt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            yt(t, {
                                parser: function(t, i, n, s, r, a, h) {
                                    var c = o.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, s, r, a, h)) : (z("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                h = _t.prototype, h.parseComplex = function(t, e, i, n, s, r) {
                    var a, o, l, h, c, u, d = this.keyword;
                    if (this.multi && (O.test(i) || O.test(e) ? (o = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) : d && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, d && (c = e.indexOf(d), u = i.indexOf(d), c !== u && (-1 === u ? o[a] = o[a].split(d).join("") : -1 === c && (o[a] += " " + d)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return mt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
                }, h.parse = function(t, e, i, n, r, a) {
                    return this.parseComplex(t.style, this.format(W(t, this.p, s, !1, this.dflt)), this.format(e), r, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    yt(t, {
                        parser: function(t, n, s, r, a, o) {
                            var l = new ft(t, s, 0, 0, a, 2, s, !1, i);
                            return l.plugin = o, l.setRatio = e(t, n, r._tween, s), l
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = d || p;
                var wt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Tt = X("transform"),
                    St = Y + "transform",
                    kt = X("transformOrigin"),
                    Et = null !== X("perspective"),
                    Pt = B.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Et ? a.defaultForce3D || "auto" : !1
                    },
                    At = window.SVGElement,
                    Ct = function(t, e, i) {
                        var n, s = D.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s), s
                    },
                    jt = D.documentElement,
                    Lt = function() {
                        var t, e, i, n = g || /Android/i.test(H) && !window.chrome;
                        return D.createElementNS && !n && (t = Ct("svg", jt), e = Ct("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[kt] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Et), jt.removeChild(t)), n
                    }(),
                    Ot = function(t, e, i, n, s) {
                        var r, o, l, h, c, u, d, p, f, g, m, v, _, y, b = t._gsTransform,
                            w = Rt(t, !0);
                        b && (_ = b.xOrigin, y = b.yOrigin), (!n || 2 > (r = n.split(" ")).length) && (d = t.getBBox(), e = nt(e).split(" "), r = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = h = parseFloat(r[0]), i.yOrigin = c = parseFloat(r[1]), n && w !== $t && (u = w[0], d = w[1], p = w[2], f = w[3], g = w[4], m = w[5], v = u * f - d * p, o = h * (f / v) + c * (-p / v) + (p * m - f * g) / v, l = h * (-d / v) + c * (u / v) - (u * m - d * g) / v, h = i.xOrigin = r[0] = o, c = i.yOrigin = r[1] = l), b && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - _, l = c - y, b.xOffset += o * w[0] + l * w[2] - o, b.yOffset += o * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), t.setAttribute("data-svg-origin", r.join(" "))
                    },
                    It = function(t) {
                        return !!(At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    $t = [1, 0, 0, 1, 0, 0],
                    Rt = function(t, e) {
                        var i, n, s, r, a, o = t._gsTransform || new Pt,
                            l = 1e5;
                        if (Tt ? n = W(t, St, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(j), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (o.svg || t.getBBox && It(t)) && (i && -1 !== (t.style[Tt] + "").indexOf("matrix") && (n = t.style[Tt], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (n = s, i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return $t;
                        for (s = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = s.length; --vt > -1;) r = Number(s[vt]), s[vt] = (a = r - (r |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + r : r;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    Dt = B.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var o, l, h, c, u, d, p = n ? t._gsTransform || new Pt : new Pt,
                            f = 0 > p.scaleX,
                            g = 2e-5,
                            m = 1e5,
                            v = Et ? parseFloat(W(t, kt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            _ = parseFloat(a.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getBBox || !It(t)), p.svg && (Ot(t, W(t, kt, s, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), wt = a.useSVGTransformAttr || Lt), o = Rt(t), o !== $t) {
                            if (16 === o.length) {
                                var y, b, w, x, T, S = o[0],
                                    k = o[1],
                                    E = o[2],
                                    P = o[3],
                                    A = o[4],
                                    C = o[5],
                                    j = o[6],
                                    L = o[7],
                                    O = o[8],
                                    I = o[9],
                                    R = o[10],
                                    D = o[12],
                                    M = o[13],
                                    N = o[14],
                                    F = o[11],
                                    B = Math.atan2(j, R);
                                p.zOrigin && (N = -p.zOrigin, D = O * N - o[12], M = I * N - o[13], N = R * N + p.zOrigin - o[14]), p.rotationX = B * $, B && (x = Math.cos(-B), T = Math.sin(-B), y = A * x + O * T, b = C * x + I * T, w = j * x + R * T, O = A * -T + O * x, I = C * -T + I * x, R = j * -T + R * x, F = L * -T + F * x, A = y, C = b, j = w), B = Math.atan2(O, R), p.rotationY = B * $, B && (x = Math.cos(-B), T = Math.sin(-B), y = S * x - O * T, b = k * x - I * T, w = E * x - R * T, I = k * T + I * x, R = E * T + R * x, F = P * T + F * x, S = y, k = b, E = w), B = Math.atan2(k, S), p.rotation = B * $, B && (x = Math.cos(-B), T = Math.sin(-B), S = S * x + A * T, b = k * x + C * T, C = k * -T + C * x, j = E * -T + j * x, k = b), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(S * S + k * k) * m + .5) / m, p.scaleY = (0 | Math.sqrt(C * C + I * I) * m + .5) / m, p.scaleZ = (0 | Math.sqrt(j * j + R * R) * m + .5) / m, p.skewX = 0, p.perspective = F ? 1 / (0 > F ? -F : F) : 0, p.x = D, p.y = M, p.z = N, p.svg && (p.x -= p.xOrigin - (p.xOrigin * S - p.yOrigin * A), p.y -= p.yOrigin - (p.yOrigin * k - p.xOrigin * C))
                            } else if (!(Et && !r && o.length && p.x === o[4] && p.y === o[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === W(t, "display", i))) {
                                var H = o.length >= 6,
                                    q = H ? o[0] : 1,
                                    V = o[1] || 0,
                                    z = o[2] || 0,
                                    Y = H ? o[3] : 1;
                                p.x = o[4] || 0, p.y = o[5] || 0, h = Math.sqrt(q * q + V * V), c = Math.sqrt(Y * Y + z * z), u = q || V ? Math.atan2(V, q) * $ : p.rotation || 0, d = z || Y ? Math.atan2(z, Y) * $ + u : p.skewX || 0, Math.abs(d) > 90 && 270 > Math.abs(d) && (f ? (h *= -1, d += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), p.scaleX = h, p.scaleY = c, p.rotation = u, p.skewX = d, Et && (p.rotationX = p.rotationY = p.z = 0, p.perspective = _, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * q + p.yOrigin * z), p.y -= p.yOrigin - (p.xOrigin * V + p.yOrigin * Y))
                            }
                            p.zOrigin = v;
                            for (l in p) g > p[l] && p[l] > -g && (p[l] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (wt && t.style[Tt] ? e.delayedCall(.001, function() {
                            Bt(t.style, Tt)
                        }) : !wt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    Mt = function(t) {
                        var e, i, n = this.data,
                            s = -n.rotation * I,
                            r = s + n.skewX * I,
                            a = 1e5,
                            o = (0 | Math.cos(s) * n.scaleX * a) / a,
                            l = (0 | Math.sin(s) * n.scaleX * a) / a,
                            h = (0 | Math.sin(r) * -n.scaleY * a) / a,
                            c = (0 | Math.cos(r) * n.scaleY * a) / a,
                            u = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -h, h = -i, e = d.filter, u.filter = "";
                            var p, f, m = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                _ = "absolute" !== d.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                x = n.x + m * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, f = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, x += p - (p * o + f * l), T += f - (p * h + f * c)), _ ? (p = m / 2, f = v / 2, y += ", Dx=" + (p - (p * o + f * l) + x) + ", Dy=" + (f - (p * h + f * c) + T) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(L, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === c && (_ && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !_) {
                                var S, k, E, P = 8 > g ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > h ? -h : h) * m)) / 2 + T), vt = 0; 4 > vt; vt++) k = et[vt], S = d[k], i = -1 !== S.indexOf("px") ? parseFloat(S) : J(this.t, k, parseFloat(S), S.replace(b, "")) || 0, E = i !== n[k] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : f - n.ieOffsetY, u[k] = (n[k] = Math.round(i - E * (0 === vt || 2 === vt ? 1 : P))) + "px"
                            }
                        }
                    },
                    Nt = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, n, s, r, a, o, l, h, c, u, d, f, g, m, v, _, y, b, w, x, T, S, k = this.data,
                            E = this.t.style,
                            P = k.rotation,
                            A = k.rotationX,
                            C = k.rotationY,
                            j = k.scaleX,
                            L = k.scaleY,
                            O = k.scaleZ,
                            $ = k.x,
                            R = k.y,
                            D = k.z,
                            M = k.svg,
                            N = k.perspective,
                            F = k.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || D || N || C || A) || wt && M || !Et) return void(P || k.skewX || M ? (P *= I, T = k.skewX * I, S = 1e5, e = Math.cos(P) * j, s = Math.sin(P) * j, i = Math.sin(P - T) * -L, r = Math.cos(P - T) * L, T && "simple" === k.skewType && (_ = Math.tan(T), _ = Math.sqrt(1 + _ * _), i *= _, r *= _, k.skewY && (e *= _, s *= _)), M && ($ += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, R += k.yOrigin - (k.xOrigin * s + k.yOrigin * r) + k.yOffset,
                            wt && (k.xPercent || k.yPercent) && (g = this.t.getBBox(), $ += .01 * k.xPercent * g.width, R += .01 * k.yPercent * g.height), g = 1e-6, g > $ && $ > -g && ($ = 0), g > R && R > -g && (R = 0)), b = (0 | e * S) / S + "," + (0 | s * S) / S + "," + (0 | i * S) / S + "," + (0 | r * S) / S + "," + $ + "," + R + ")", M && wt ? this.t.setAttribute("transform", "matrix(" + b) : E[Tt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + b) : E[Tt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + j + ",0,0," + L + "," + $ + "," + R + ")");
                        if (p && (g = 1e-4, g > j && j > -g && (j = O = 2e-5), g > L && L > -g && (L = O = 2e-5), !N || k.z || k.rotationX || k.rotationY || (N = 0)), P || k.skewX) P *= I, m = e = Math.cos(P), v = s = Math.sin(P), k.skewX && (P -= k.skewX * I, m = Math.cos(P), v = Math.sin(P), "simple" === k.skewType && (_ = Math.tan(k.skewX * I), _ = Math.sqrt(1 + _ * _), m *= _, v *= _, k.skewY && (e *= _, s *= _))), i = -v, r = m;
                        else {
                            if (!(C || A || 1 !== O || N || M)) return void(E[Tt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + $ + "px," + R + "px," + D + "px)" + (1 !== j || 1 !== L ? " scale(" + j + "," + L + ")" : ""));
                            e = r = 1, i = s = 0
                        }
                        h = 1, n = a = o = l = c = u = 0, d = N ? -1 / N : 0, f = k.zOrigin, g = 1e-6, w = ",", x = "0", P = C * I, P && (m = Math.cos(P), v = Math.sin(P), o = -v, c = d * -v, n = e * v, a = s * v, h = m, d *= m, e *= m, s *= m), P = A * I, P && (m = Math.cos(P), v = Math.sin(P), _ = i * m + n * v, y = r * m + a * v, l = h * v, u = d * v, n = i * -v + n * m, a = r * -v + a * m, h *= m, d *= m, i = _, r = y), 1 !== O && (n *= O, a *= O, h *= O, d *= O), 1 !== L && (i *= L, r *= L, l *= L, u *= L), 1 !== j && (e *= j, s *= j, o *= j, c *= j), (f || M) && (f && ($ += n * -f, R += a * -f, D += h * -f + f), M && ($ += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, R += k.yOrigin - (k.xOrigin * s + k.yOrigin * r) + k.yOffset), g > $ && $ > -g && ($ = x), g > R && R > -g && (R = x), g > D && D > -g && (D = 0)), b = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", b += (g > e && e > -g ? x : e) + w + (g > s && s > -g ? x : s) + w + (g > o && o > -g ? x : o), b += w + (g > c && c > -g ? x : c) + w + (g > i && i > -g ? x : i) + w + (g > r && r > -g ? x : r), A || C ? (b += w + (g > l && l > -g ? x : l) + w + (g > u && u > -g ? x : u) + w + (g > n && n > -g ? x : n), b += w + (g > a && a > -g ? x : a) + w + (g > h && h > -g ? x : h) + w + (g > d && d > -g ? x : d) + w) : b += ",0,0,0,0,1,0,", b += $ + w + R + w + D + w + (N ? 1 + -D / N : 1) + ")", E[Tt] = b
                    };
                h = Pt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, r, o, l) {
                        if (n._lastParsedTransform === l) return r;
                        n._lastParsedTransform = l;
                        var h, c, u, d, p, f, g, m, v, _ = t._gsTransform,
                            y = n._transform = Dt(t, s, !0, l.parseTransform),
                            b = t.style,
                            w = 1e-6,
                            x = xt.length,
                            T = l,
                            S = {},
                            k = "transformOrigin";
                        if ("string" == typeof T.transform && Tt) u = N.style, u[Tt] = T.transform, u.display = "block", u.position = "absolute", D.body.appendChild(N), h = Dt(N, null, !1), D.body.removeChild(N), null != T.xPercent && (h.xPercent = rt(T.xPercent, y.xPercent)), null != T.yPercent && (h.yPercent = rt(T.yPercent, y.yPercent));
                        else if ("object" == typeof T) {
                            if (h = {
                                    scaleX: rt(null != T.scaleX ? T.scaleX : T.scale, y.scaleX),
                                    scaleY: rt(null != T.scaleY ? T.scaleY : T.scale, y.scaleY),
                                    scaleZ: rt(T.scaleZ, y.scaleZ),
                                    x: rt(T.x, y.x),
                                    y: rt(T.y, y.y),
                                    z: rt(T.z, y.z),
                                    xPercent: rt(T.xPercent, y.xPercent),
                                    yPercent: rt(T.yPercent, y.yPercent),
                                    perspective: rt(T.transformPerspective, y.perspective)
                                }, g = T.directionalRotation, null != g)
                                if ("object" == typeof g)
                                    for (u in g) T[u] = g[u];
                                else T.rotation = g;
                                "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0, h.xPercent = rt(T.x, y.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0, h.yPercent = rt(T.y, y.yPercent)), h.rotation = at("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : y.rotation, y.rotation, "rotation", S), Et && (h.rotationX = at("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", S), h.rotationY = at("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", S)), h.skewX = null == T.skewX ? y.skewX : at(T.skewX, y.skewX), h.skewY = null == T.skewY ? y.skewY : at(T.skewY, y.skewY), (c = h.skewY - y.skewY) && (h.skewX += c, h.rotation += c)
                        }
                        for (Et && null != T.force3D && (y.force3D = T.force3D, f = !0), y.skewType = T.skewType || y.skewType || a.defaultSkewType, p = y.force3D || y.z || y.rotationX || y.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == T.scale || (h.scaleZ = 1); --x > -1;) i = xt[x], d = h[i] - y[i], (d > w || -w > d || null != T[i] || null != R[i]) && (f = !0, r = new ft(y, i, y[i], d, r), i in S && (r.e = S[i]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                        return d = T.transformOrigin, y.svg && (d || T.svgOrigin) && (m = y.xOffset, v = y.yOffset, Ot(t, nt(d), h, T.svgOrigin, T.smoothOrigin), r = gt(y, "xOrigin", (_ ? y : h).xOrigin, h.xOrigin, r, k), r = gt(y, "yOrigin", (_ ? y : h).yOrigin, h.yOrigin, r, k), (m !== y.xOffset || v !== y.yOffset) && (r = gt(y, "xOffset", _ ? m : y.xOffset, y.xOffset, r, k), r = gt(y, "yOffset", _ ? v : y.yOffset, y.yOffset, r, k)), d = wt ? null : "0px 0px"), (d || Et && p && y.zOrigin) && (Tt ? (f = !0, i = kt, d = (d || W(t, i, s, !1, "50% 50%")) + "", r = new ft(b, i, 0, 0, r, -1, k), r.b = b[i], r.plugin = o, Et ? (u = y.zOrigin, d = d.split(" "), y.zOrigin = (d.length > 2 && (0 === u || "0px" !== d[2]) ? parseFloat(d[2]) : u) || 0, r.xs0 = r.e = d[0] + " " + (d[1] || "50%") + " 0px", r = new ft(y, "zOrigin", 0, 0, r, -1, r.n), r.b = u, r.xs0 = r.e = y.zOrigin) : r.xs0 = r.e = d) : nt(d + "", y)), f && (n._transformType = y.svg && wt || !p && 3 !== this._transformType ? 2 : 3), r
                    },
                    prefix: !0
                }), yt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), yt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, a) {
                        e = this.format(e);
                        var o, l, h, c, u, d, p, f, g, m, v, _, y, b, w, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = X(T[l])), u = c = W(t, T[l], s, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), d = h = o[l], p = parseFloat(u), _ = u.substr((p + "").length), y = "=" === d.charAt(1), y ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), v = d.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(d), v = d.substr((f + "").length)), "" === v && (v = n[i] || _), v !== _ && (b = J(t, "borderLeft", p, _), w = J(t, "borderTop", p, _), "%" === v ? (u = 100 * (b / g) + "%", c = 100 * (w / m) + "%") : "em" === v ? (x = J(t, "borderLeft", 1, "em"), u = b / x + "em", c = w / x + "em") : (u = b + "px", c = w + "px"), y && (d = parseFloat(u) + f + v, h = parseFloat(c) + f + v)), a = mt(S, T[l], u + " " + c, d + " " + h, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ut("0px 0px 0px 0px", !1, !0)
                }), yt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, r, a) {
                        var o, l, h, c, u, d, p = "background-position",
                            f = s || U(t, null),
                            m = this.format((f ? g ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (d = W(t, "backgroundImage").replace(P, ""), d && "none" !== d)) {
                            for (o = m.split(" "), l = v.split(" "), F.setAttribute("src", d), h = 2; --h > -1;) m = o[h], c = -1 !== m.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - F.width : t.offsetHeight - F.height, o[h] = c ? parseFloat(m) / 100 * u + "px" : 100 * (parseFloat(m) / u) + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, v, r, a)
                    },
                    formatter: nt
                }), yt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), yt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), yt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), yt("transformStyle", {
                    prefix: !0
                }), yt("backfaceVisibility", {
                    prefix: !0
                }), yt("userSelect", {
                    prefix: !0
                }), yt("margin", {
                    parser: dt("marginTop,marginRight,marginBottom,marginLeft")
                }), yt("padding", {
                    parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), yt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, r, a) {
                        var o, l, h;
                        return 9 > g ? (l = t.currentStyle, h = 8 > g ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(W(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
                    }
                }), yt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), yt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, s) {
                        return s
                    }
                }), yt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, r, a) {
                        return this.parseComplex(t.style, this.format(W(t, "borderTopWidth", s, !1, "0px") + " " + W(t, "borderTopStyle", s, !1, "solid") + " " + W(t, "borderTopColor", s, !1, "#000")), this.format(e), r, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0]
                    }
                }), yt("borderWidth", {
                    parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), yt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, s) {
                        var r = t.style,
                            a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new ft(r, a, 0, 0, s, -1, i, !1, 0, r[a], e)
                    }
                });
                var Ft = function(t) {
                    var e, i = this.t,
                        n = i.filter || W(this.data, "filter") || "",
                        s = 0 | this.s + this.c * t;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !W(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(w, "opacity=" + s))
                };
                yt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, r, a) {
                        var o = parseFloat(W(t, "opacity", s, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === W(t, "visibility", s) && 0 !== e && (o = 0), q ? r = new ft(l, "opacity", o, e - o, r) : (r = new ft(l, "opacity", 100 * o, 100 * (e - o), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Ft), h && (r = new ft(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                    }
                });
                var Bt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ht = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Bt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                yt("className", {
                    parser: function(t, e, n, r, a, o, l) {
                        var h, c, u, d, p, f = t.getAttribute("class") || "",
                            g = t.style.cssText;
                        if (a = r._classNamePT = new ft(t, n, 0, 0, a, 2), a.setRatio = Ht, a.pr = -11, i = !0, a.b = f, c = K(t, s), u = t._gsClassPT) {
                            for (d = {}, p = u.data; p;) d[p.p] = 1, p = p._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = Z(t, c, K(t), l, d), t.setAttribute("class", f), a.data = h.firstMPT, t.style.cssText = g, a = a.xfirst = r.parse(t, h.difs, a, o)
                    }
                });
                var qt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, r, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", s = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? kt : l[i].p), Bt(a, i);
                        s && (Bt(a, Tt), r = this.t._gsTransform, r && (r.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (yt("clearProps", {
                        parser: function(t, e, n, s, r) {
                            return r = new ft(t, n, 0, 0, r, 2), r.setRatio = qt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), vt = h.length; vt--;) bt(h[vt]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, s = U(t, ""), r = this._overwriteProps;
                    var h, p, g, m, v, _, y, b, w, T = t.style;
                    if (u && "" === T.zIndex && (h = W(t, "zIndex", s), ("auto" === h || "" === h) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, h = K(t, s), T.cssText = m + ";" + e, h = Z(t, h, K(t)).difs, !q && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, T.cssText = m), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (w = 3 === this._transformType, Tt ? d && (u = !0, "" === T.zIndex && (y = W(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : T.zoom = 1, g = p; g && g._next;) g = g._next;
                        b = new ft(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, g), b.setRatio = Tt ? Nt : Mt, b.data = this._transform || Dt(t, s, !0), b.tween = o, b.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (_ = p._next, g = m; g && g.pr > p.pr;) g = g._next;
                            (p._prev = g ? g._prev : v) ? p._prev._next = p: m = p, (p._next = g) ? g._prev = p : v = p, p = _
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, r) {
                    var a, o, h, u, d, p, f, g, m, v, _ = t.style;
                    for (a in e) p = e[a], o = l[a], o ? i = o.parse(t, p, a, this, i, r, e) : (d = W(t, a, s) + "", m = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && S.test(p) ? (m || (p = ht(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = mt(_, a, d, p, !0, "transparent", i, 0, r)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (h = parseFloat(d), f = h || 0 === h ? d.substr((h + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (h = it(t, a, s), f = "px") : "left" === a || "top" === a ? (h = Q(t, a, s), f = "px") : (h = "opacity" !== a ? 0 : 1, f = "")), v = m && "=" === p.charAt(1), v ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), g = p.replace(b, "")) : (u = parseFloat(p), g = m ? p.replace(b, "") : ""), "" === g && (g = a in n ? n[a] : f), p = u || 0 === u ? (v ? u + h : u) + g : e[a], f !== g && "" !== g && (u || 0 === u) && h && (h = J(t, a, h, f), "%" === g ? (h /= J(t, a, 100, "%") / 100, e.strictUnits !== !0 && (d = h + "%")) : "em" === g ? h /= J(t, a, 1, "em") : "px" !== g && (u = J(t, a, u, g), g = "px"), v && (u || 0 === u) && (p = u + h + g)), v && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== _[a] && (p || "NaN" != p + "" && null != p) ? (i = new ft(_, a, u || h || 0, 0, i, -1, a, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : d) : z("invalid " + a + " tween value: " + e[a]) : (i = new ft(_, a, h, u - h, i, 0, a, c !== !1 && ("px" === g || "zIndex" === a), 0, d, p), i.xs0 = g)) : i = mt(_, a, d, p, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, n, s = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : r > e && e > -r && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (n = s.l, 2 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; s.l > n; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (e = Math.round(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; s.l > n; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(t);
                                s = s._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Dt(this._target, s, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Vt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Vt, n.data = this
                }, h._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, n, s, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (n in e) r[n] = e[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
                };
                var zt = function(t, e, i) {
                    var n, s, r, a;
                    if (t.slice)
                        for (s = t.length; --s > -1;) zt(t[s], e, i);
                    else
                        for (n = t.childNodes, s = n.length; --s > -1;) r = n[s], a = r.type, r.style && (e.push(K(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || zt(r, e, i)
                };
                return a.cascadeTo = function(t, i, n) {
                    var s, r, a, o, l = e.to(t, i, n),
                        h = [l],
                        c = [],
                        u = [],
                        d = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, zt(t, c, d), l.render(i, !0, !0), zt(t, u), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;)
                        if (r = Z(d[s], c[s], u[s]), r.firstMPT) {
                            r = r.difs;
                            for (a in n) p[a] && (r[a] = n[a]);
                            o = {};
                            for (a in r) o[a] = c[s][a];
                            h.push(e.fromTo(d[s], i, o, r))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, n = this._tween, s = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), r = s.length, a = {}, o = n._propLookup.roundProps; --r > -1;) a[s[r]] = 1;
                    for (r = s.length; --r > -1;)
                        for (t = s[r], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                var t = /(?:\d|\-|\+|=|#|\.)*/g,
                    e = /[A-Za-z%]/g;
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.4.0",
                    init: function(i, n) {
                        var s, r, a, o, l;
                        if ("function" != typeof i.setAttribute) return !1;
                        this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};
                        for (s in n) this._start[s] = this._proxy[s] = r = i.getAttribute(s) + "", this._end[s] = a = n[s] + "", this._suffix[s] = o = e.test(a) ? a.replace(t, "") : e.test(r) ? r.replace(t, "") : "", o && (l = a.indexOf(o), -1 !== l && (a = a.substr(0, l))), this._addTween(this._proxy, s, parseFloat(r), a, s) || (this._suffix[s] = ""), "=" === a.charAt(1) && (this._end[s] = this._firstPT.s + this._firstPT.c + o), this._overwriteProps.push(s);
                        return !0
                    },
                    set: function(t) {
                        this._super.setRatio.call(this, t);
                        for (var e, i = this._overwriteProps, n = i.length, s = 1 === t ? this._end : t ? this._proxy : this._start, r = s === this._proxy; --n > -1;) e = i[n], this._target.setAttribute(e, s[e] + (r ? this._suffix[e] : ""))
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, s, r, a, o, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), n = o[0], s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), r = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? s + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, a = r - s, o.length && (n = o.join("_"), -1 !== n.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== n.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== n.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > h || -h > a) && (this._addTween(t, i, s, s + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope,
                    r = s.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = r._class,
                    h = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    c = t.register || function() {},
                    u = function(t, e, i, n) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(s, t), s
                    },
                    d = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    f = u("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    g = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = g.prototype = new t;
                return m.constructor = g, m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
                    return new g(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, s, r, a, o, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = m ? m.getRatio(i) : i, "none" === l ? s = v : "out" === l ? (r = 1 - i, s = r * r * v) : "in" === l ? s = i * i * v : .5 > i ? (r = 2 * i, s = .5 * r * r * v) : (r = 2 * (1 - i), s = .5 * r * r * v), f ? n += Math.random() * s - .5 * s : p % 2 ? n += .5 * s : n -= .5 * s, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new d(1, 1, null), p = u; --p > -1;) a = h[p], o = new d(a.x, a.y, o);
                    this._prev = new d(0, 0, 0 !== o.t ? o : o.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var s = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function(t, e) {
                        return new s(t, e)
                    }, s
                }, u("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * o)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(s.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, s, r, a, o, l = function(t) {
                    var e, n = t.split("."),
                        s = i;
                    for (e = 0; n.length > e; e++) s[n[e]] = s = s[n[e]] || {};
                    return s
                },
                h = l("com.greensock"),
                c = 1e-10,
                u = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                d = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                g = function(n, s, r, a) {
                    this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = r;
                    var o = [];
                    this.check = function(h) {
                        for (var c, u, d, p, m = s.length, v = m; --m > -1;)(c = f[s[m]] || new g(s[m], [])).gsClass ? (o[m] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && r)
                            for (u = ("com.greensock." + n).split("."), d = u.pop(), p = l(u.join("."))[d] = this.gsClass = r.apply(r, o), a && (i[d] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, n) {
                    return new g(t, e, i, n)
                },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = i;
            var _ = [0, 0, 1, 1],
                y = [],
                b = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
                }, !0),
                w = b.map = {},
                x = b.register = function(t, e, i, n) {
                    for (var s, r, a, o, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (r = l[c], s = n ? v("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = s[o] = t.getRatio ? t : t[o] || new t
                };
            for (r = b.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;) r = n[s] + ",Power" + s, x(new b(null, null, 1, s), r, "easeOut", !0), x(new b(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), x(new b(null, null, 3, s), r, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = T.prototype, r.addEventListener = function(t, e, i, n, s) {
                s = s || 0;
                var r, l, h = this._listeners[t],
                    c = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === c && s > r.pr && (c = l + 1);
                h.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                }), this !== a || o || a.wake()
            }, r.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, r.dispatchEvent = function(t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for (e = s.length, i = this._eventTarget; --e > -1;) n = s[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                E = Date.now || function() {
                    return (new Date).getTime()
                },
                P = E();
            for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !S;) S = t[n[s] + "RequestAnimationFrame"], k = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, s, r, l, h = this,
                    u = E(),
                    p = e !== !1 && S,
                    f = 500,
                    g = 33,
                    m = "tick",
                    v = function(t) {
                        var e, a, o = E() - P;
                        o > f && (u += o - g), P += o, h.time = (P - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (s = n(v)), a && h.dispatchEvent(m)
                    };
                T.call(h), h.time = h.frame = 0, h.tick = function() {
                    v(!0)
                }, h.lagSmoothing = function(t, e) {
                    f = t || 1 / c, g = Math.min(e, f, 0)
                }, h.sleep = function() {
                    null != s && (p && k ? k(s) : clearTimeout(s), n = d, s = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== s ? h.sleep() : h.frame > 10 && (P = E() - f + 5), n = 0 === i ? d : p && S ? S : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), v(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), p = t, void h.fps(i)) : p
                }, h.fps(t), setTimeout(function() {
                    p && 5 > h.frame && h.useRAF(!1)
                }, 1500)
            }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var A = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, V) {
                    o || a.wake();
                    var i = this.vars.useFrames ? q : V;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = A.ticker = new h.Ticker, r = A.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var C = function() {
                o && E() - P > 2e3 && a.wake(), setTimeout(C, 2e3)
            };
            C(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, r._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, r.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), $.length && Y())
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var j = v("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = j.prototype = new A, r.constructor = j, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, r.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var L = v("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = L.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : L.selector(e) || e;
                    var s, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? H[L.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], s = 0; a.length > s; s++) r = a[s], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[s] = G(r, this, !1), 1 === l && this._siblings[s].length > 1 && U(r, this, null, 1, this._siblings[s])) : (r = a[s--] = L.selector(r), "string" == typeof r && a.splice(s + 1, 1)) : a.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                O = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                I = function(t, e) {
                    var i, n = {};
                    for (i in t) B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!M[i] || M[i] && M[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            r = L.prototype = new A, r.constructor = L, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, L.version = "1.17.0", L.defaultEase = r._ease = new b(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = a, L.autoSleep = 120, L.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, L.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (L.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var $ = [],
                R = {},
                D = L._internals = {
                    isArray: p,
                    isSelector: O,
                    lazyTweens: $
                },
                M = L._plugins = {},
                N = D.tweenLookup = {},
                F = 0,
                B = D.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                H = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                q = A._rootFramesTimeline = new j,
                V = A._rootTimeline = new j,
                z = 30,
                Y = D.lazyRender = function() {
                    var t, e = $.length;
                    for (R = {}; --e > -1;) t = $[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    $.length = 0
                };
            V._startTime = a.time, q._startTime = a.frame, V._active = q._active = !0, setTimeout(Y, 1), A._updateRoot = L.render = function() {
                var t, e, i;
                if ($.length && Y(), V.render((a.time - V._startTime) * V._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), $.length && Y(), a.frame >= z) {
                    z = a.frame + (parseInt(L.autoSleep, 10) || 120);
                    for (i in N) {
                        for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete N[i]
                    }
                    if (i = V._first, (!i || i._paused) && L.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", A._updateRoot);
            var G = function(t, e, i) {
                    var n, s, r = t._gsTweenID;
                    if (N[r || (t._gsTweenID = r = "t" + F++)] || (N[r] = {
                            target: t,
                            tweens: []
                        }), e && (n = N[r].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return N[r].tweens
                },
                X = function(t, e, i, n) {
                    var s, r, a = t.vars.onOverwrite;
                    return a && (s = a(t, e, i, n)), a = L.onOverwrite, a && (r = a(t, e, i, n)), s !== !1 && r !== !1
                },
                U = function(t, e, i, n, s) {
                    var r, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, r = 0; l > r; r++)
                            if ((o = s[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var h, u = e._startTime + c,
                        d = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (r = s.length; --r > -1;)(o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || W(e, 0, f), 0 === W(o, h, f) && (d[p++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (d[p++] = o)));
                    for (r = p; --r > -1;)
                        if (o = d[r], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                            if (2 !== n && !X(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                W = function(t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return r /= s, r > e ? r - e : i && r === e || !t._initted && 2 * c > r - e ? c : (r += t.totalDuration() / t._timeScale / s) > e + c ? 0 : r - e - c
                };
            r._init = function() {
                var t, e, i, n, s, r = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                    for (n in r.startAt) s[n] = r.startAt[n];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && r.lazy !== !1, s.startAt = s.delay = null, this._startAt = L.to(this.target, 0, s), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (r.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in r) B[n] && "autoCSS" !== n || (i[n] = r[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = L.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof b ? h : "function" == typeof h ? new b(h, r.easeParams) : w[h] || L.defaultEase : L.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && L._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, n, s) {
                var r, a, o, l, h, c;
                if (null == e) return !1;
                R[e._gsTweenID] && Y(), this.vars.css || e.style && e !== t && e.nodeType && M.css && this.vars.autoCSS !== !1 && I(this.vars, e);
                for (r in this.vars) {
                    if (c = this.vars[r], B[r]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                    else if (M[r] && (l = new M[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[r] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && U(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), o)
            }, r.render = function(t, e, i) {
                var n, s, r, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === c && "isPause" !== this.data) && h !== t && (i = !0, h > c && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        d = this._easeType,
                        p = this._easePower;
                    (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, $.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, r._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e;
                var n, s, r, a, o, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((p(e) || O(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, c = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (L.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) o[r] && (u || (u = []), u.push(r));
                            if ((u || !t) && !X(this, i, e, u)) return !1
                        }
                        for (r in h)(a = o[r]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), c && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, r._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = G(n[i], this, !0);
                    else this._siblings = G(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? L._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, L.to = function(t, e, i) {
                return new L(t, e, i)
            }, L.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(t, e, i)
            }, L.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new L(t, e, n)
            }, L.delayedCall = function(t, e, i, n, s) {
                return new L(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, L.set = function(t, e) {
                return new L(t, 0, e)
            }, L.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : L.selector(t) || t;
                var i, n, s, r;
                if ((p(t) || O(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(L.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
                } else
                    for (n = G(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, L.killTweensOf = L.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = L.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var J = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = J.prototype
            }, !0);
            if (r = J.prototype, J.version = "1.10.1", J.API = 2, r._firstPT = null, r._addTween = function(t, e, i, n, s, r) {
                    var a, o;
                    return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: s || e,
                        r: r
                    }, o._next && (o._next._prev = o), o) : void 0
                }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, L._onPluginEvent = function(t, e) {
                    var i, n, s, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : r) ? o._prev._next = o: s = o, (o._next = n) ? n._prev = o : r = o, o = a
                        }
                        o = e._firstPT = s
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, J.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === J.API && (M[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            J.call(this, i, n), this._overwriteProps = s || []
                        }, t.global === !0),
                        o = a.prototype = new J(i);
                    o.constructor = a, a.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, J.activate([a]), a
                }, n = t._gsQueue) {
                for (s = 0; n.length > s; s++) n[s]();
                for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), define("TweenMax", function() {}), define("model/sound_model", ["jquery", "underscore", "backbone", "config", "model/loader_collection", "createjs", "TweenMax"], function(t, e, i, n, s, r, a) {
        var o = i.Model.extend({
            defaults: {},
            initialize: function() {
                this.sounds = new i.Collection, this.currentPlaying = [], s.on("loaded", this.onItemLoaded, this)
            },
            onItemLoaded: function(t) {
                "sound" === t.item.type && this.sounds.add(t.item)
            },
            play: function(t, i) {
                i = i || {};
                var n = {
                    interrupt: r.Sound.INTERRUPT_ANY,
                    delay: 0,
                    offset: 0,
                    loop: 0,
                    volume: 1,
                    pan: 0,
                    time: 0
                };
                e.defaults(i, n);
                var s = ([t, i.interrupt, i.delay, i.offset, i.loop, i.volume, i.pan], r.Sound.play(t, i.interrupt, i.delay, i.offset, i.loop, i.volume, i.pan));
                return a.fromTo(s, i.time, {
                    volume: 0
                }, {
                    volume: i.volume
                }), this.currentPlaying.push(s), s
            },
            stop: function(t) {
                for (var e = this.getSoundsByID(t), i = [], n = 0; n < e.length; n++) {
                    var s = e[n];
                    s.stop(), i.push(s)
                }
                this.removeFromPlaying(i)
            },
            setSoundVolume: function(t, i, n) {
                (e.isUndefined(n) || null === n) && (n = 0);
                for (var s = this.getSoundsByID(t), r = 0; r < s.length; r++) {
                    var o = s[r];
                    a.to(o, n, {
                        volume: i
                    })
                }
            },
            setGlobalVolume: function(t) {
                r.SoundJS.setVolume(t)
            },
            removeFromPlaying: function(t) {
                e.each(this.currentPlaying, function(i) {
                    var n = e.indexOf(t, i);
                    n > -1 && (n = e.indexOf(this.currentPlaying, i), this.currentPlaying.splice(n, 1))
                }, this)
            },
            getSoundsByID: function(t) {
                var e = [],
                    i = this.sounds.get(t);
                if (!i) return [];
                for (var n = this.sounds.get(t).get("src"), s = 0; s < this.currentPlaying.length; s++) {
                    var r = this.currentPlaying[s];
                    r.src === n && e.push(r)
                }
                return e
            }
        });
        return new o
    }), define("events/sound_events", [], function() {
        var t = {
            PLAY_SOUND: "PLAY_SOUND",
            STOP_SOUND: "STOP_SOUND",
            SET_SOUND_VOLUME: "SET_SOUND_VOLUME",
            SET_GLOBAL_VOLUME: "SET_GLOBAL_VOLUME"
        };
        return t
    }), define("controller/sound_controller", ["route/router", "model/app_model", "view/common/communicator", "model/loader_collection", "model/sound_model", "events/sound_events"], function(t, e, i, n, s, r) {
        var a = {
            init: function() {
                i.on(r.PLAY_SOUND, this.onPlaySound, this), i.on(r.STOP_SOUND, this.onStopSound, this), i.on(r.SET_SOUND_VOLUME, this.onSetSoundVolume, this), i.on(r.SET_GLOBAL_VOLUME, this.onSetGlobalVolume, this)
            },
            onPlaySound: function(t, e) {
                s.play(t, e)
            },
            onStopSound: function(t, e) {
                s.stop(t, e)
            },
            onSetSoundVolume: function(t, e) {
                s.setSoundVolume(t, e)
            },
            onSetGlobalVolume: function(t) {
                s.setGlobalVolume(t)
            }
        };
        return a.init(), a
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("handlebars", [], e) : "object" == typeof exports ? module.exports = e() : t.Handlebars = e()
    }(this, function() {
        var t = function() {
                "use strict";

                function t(t) {
                    return l[t]
                }

                function e(t) {
                    for (var e = 1; e < arguments.length; e++)
                        for (var i in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], i) && (t[i] = arguments[e][i]);
                    return t
                }

                function i(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                }

                function n(e) {
                    return e && e.toHTML ? e.toHTML() : null == e ? "" : e ? (e = "" + e, c.test(e) ? e.replace(h, t) : e) : e + ""
                }

                function s(t) {
                    return t || 0 === t ? p(t) && 0 === t.length ? !0 : !1 : !0
                }

                function r(t, e) {
                    return t.path = e, t
                }

                function a(t, e) {
                    return (t ? t + "." : "") + e
                }
                var o = {},
                    l = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    h = /[&<>"'`]/g,
                    c = /[&<>"'`]/;
                o.extend = e;
                var u = Object.prototype.toString;
                o.toString = u;
                var d = function(t) {
                    return "function" == typeof t
                };
                d(/x/) && (d = function(t) {
                    return "function" == typeof t && "[object Function]" === u.call(t)
                });
                var d;
                o.isFunction = d;
                var p = Array.isArray || function(t) {
                    return t && "object" == typeof t ? "[object Array]" === u.call(t) : !1
                };
                return o.isArray = p, o.indexOf = i, o.escapeExpression = n, o.isEmpty = s, o.blockParams = r, o.appendContextPath = a, o
            }(),
            e = function() {
                "use strict";

                function t(t, e) {
                    var n, s, r = e && e.loc;
                    r && (n = r.start.line, s = r.start.column, t += " - " + n + ":" + s);
                    for (var a = Error.prototype.constructor.call(this, t), o = 0; o < i.length; o++) this[i[o]] = a[i[o]];
                    r && (this.lineNumber = n, this.column = s)
                }
                var e, i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                return t.prototype = new Error, e = t
            }(),
            i = function(t, e) {
                "use strict";

                function i(t, e) {
                    this.helpers = t || {}, this.partials = e || {}, n(this)
                }

                function n(t) {
                    t.registerHelper("helperMissing", function() {
                        if (1 === arguments.length) return void 0;
                        throw new a("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                    }), t.registerHelper("blockHelperMissing", function(e, i) {
                        var n = i.inverse,
                            s = i.fn;
                        if (e === !0) return s(this);
                        if (e === !1 || null == e) return n(this);
                        if (c(e)) return e.length > 0 ? (i.ids && (i.ids = [i.name]), t.helpers.each(e, i)) : n(this);
                        if (i.data && i.ids) {
                            var a = m(i.data);
                            a.contextPath = r.appendContextPath(i.data.contextPath, i.name), i = {
                                data: a
                            }
                        }
                        return s(e, i)
                    }), t.registerHelper("each", function(t, e) {
                        function i(e, i, a) {
                            n && (n.key = e, n.index = i, n.first = 0 === i, n.last = !!a, s && (n.contextPath = s + e)), d += o(t[e], {
                                data: n,
                                blockParams: r.blockParams([t[e], e], [s + e, null])
                            })
                        }
                        if (!e) throw new a("Must pass iterator to #each");
                        var n, s, o = e.fn,
                            l = e.inverse,
                            h = 0,
                            d = "";
                        if (e.data && e.ids && (s = r.appendContextPath(e.data.contextPath, e.ids[0]) + "."), u(t) && (t = t.call(this)), e.data && (n = m(e.data)), t && "object" == typeof t)
                            if (c(t))
                                for (var p = t.length; p > h; h++) i(h, h, h === t.length - 1);
                            else {
                                var f;
                                for (var g in t) t.hasOwnProperty(g) && (f && i(f, h - 1), f = g, h++);
                                f && i(f, h - 1, !0)
                            }
                        return 0 === h && (d = l(this)), d
                    }), t.registerHelper("if", function(t, e) {
                        return u(t) && (t = t.call(this)), !e.hash.includeZero && !t || r.isEmpty(t) ? e.inverse(this) : e.fn(this)
                    }), t.registerHelper("unless", function(e, i) {
                        return t.helpers["if"].call(this, e, {
                            fn: i.inverse,
                            inverse: i.fn,
                            hash: i.hash
                        })
                    }), t.registerHelper("with", function(t, e) {
                        u(t) && (t = t.call(this));
                        var i = e.fn;
                        if (r.isEmpty(t)) return e.inverse(this);
                        if (e.data && e.ids) {
                            var n = m(e.data);
                            n.contextPath = r.appendContextPath(e.data.contextPath, e.ids[0]), e = {
                                data: n
                            }
                        }
                        return i(t, e)
                    }), t.registerHelper("log", function(e, i) {
                        var n = i.data && null != i.data.level ? parseInt(i.data.level, 10) : 1;
                        t.log(n, e)
                    }), t.registerHelper("lookup", function(t, e) {
                        return t && t[e]
                    })
                }
                var s = {},
                    r = t,
                    a = e,
                    o = "3.0.0";
                s.VERSION = o;
                var l = 6;
                s.COMPILER_REVISION = l;
                var h = {
                    1: "<= 1.0.rc.2",
                    2: "== 1.0.0-rc.3",
                    3: "== 1.0.0-rc.4",
                    4: "== 1.x.x",
                    5: "== 2.0.0-alpha.x",
                    6: ">= 2.0.0-beta.1"
                };
                s.REVISION_CHANGES = h;
                var c = r.isArray,
                    u = r.isFunction,
                    d = r.toString,
                    p = "[object Object]";
                s.HandlebarsEnvironment = i, i.prototype = {
                    constructor: i,
                    logger: f,
                    log: g,
                    registerHelper: function(t, e) {
                        if (d.call(t) === p) {
                            if (e) throw new a("Arg not supported with multiple helpers");
                            r.extend(this.helpers, t)
                        } else this.helpers[t] = e
                    },
                    unregisterHelper: function(t) {
                        delete this.helpers[t]
                    },
                    registerPartial: function(t, e) {
                        if (d.call(t) === p) r.extend(this.partials, t);
                        else {
                            if ("undefined" == typeof e) throw new a("Attempting to register a partial as undefined");
                            this.partials[t] = e
                        }
                    },
                    unregisterPartial: function(t) {
                        delete this.partials[t]
                    }
                };
                var f = {
                    methodMap: {
                        0: "debug",
                        1: "info",
                        2: "warn",
                        3: "error"
                    },
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 1,
                    log: function(t, e) {
                        if ("undefined" != typeof console && f.level <= t) {
                            var i = f.methodMap[t];
                            (console[i] || console.log).call(console, e)
                        }
                    }
                };
                s.logger = f;
                var g = f.log;
                s.log = g;
                var m = function(t) {
                    var e = r.extend({}, t);
                    return e._parent = t, e
                };
                return s.createFrame = m, s
            }(t, e),
            n = function() {
                "use strict";

                function t(t) {
                    this.string = t
                }
                var e;
                return t.prototype.toString = t.prototype.toHTML = function() {
                    return "" + this.string
                }, e = t
            }(),
            s = function(t, e, i) {
                "use strict";

                function n(t) {
                    var e = t && t[0] || 1,
                        i = p;
                    if (e !== i) {
                        if (i > e) {
                            var n = f[i],
                                s = f[e];
                            throw new d("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + s + ").")
                        }
                        throw new d("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
                    }
                }

                function s(t, e) {
                    if (!e) throw new d("No environment passed to template");
                    if (!t || !t.main) throw new d("Unknown template object: " + typeof t);
                    e.VM.checkRevision(t.compiler);
                    var i = function(i, n, s) {
                            s.hash && (n = u.extend({}, n, s.hash)), i = e.VM.resolvePartial.call(this, i, n, s);
                            var r = e.VM.invokePartial.call(this, i, n, s);
                            if (null == r && e.compile && (s.partials[s.name] = e.compile(i, t.compilerOptions, e), r = s.partials[s.name](n, s)), null != r) {
                                if (s.indent) {
                                    for (var a = r.split("\n"), o = 0, l = a.length; l > o && (a[o] || o + 1 !== l); o++) a[o] = s.indent + a[o];
                                    r = a.join("\n")
                                }
                                return r
                            }
                            throw new d("The partial " + s.name + " could not be compiled when running in runtime-only mode")
                        },
                        n = {
                            strict: function(t, e) {
                                if (!(e in t)) throw new d('"' + e + '" not defined in ' + t);
                                return t[e]
                            },
                            lookup: function(t, e) {
                                for (var i = t.length, n = 0; i > n; n++)
                                    if (t[n] && null != t[n][e]) return t[n][e]
                            },
                            lambda: function(t, e) {
                                return "function" == typeof t ? t.call(e) : t
                            },
                            escapeExpression: u.escapeExpression,
                            invokePartial: i,
                            fn: function(e) {
                                return t[e]
                            },
                            programs: [],
                            program: function(t, e, i, n, s) {
                                var a = this.programs[t],
                                    o = this.fn(t);
                                return e || s || n || i ? a = r(this, t, o, e, i, n, s) : a || (a = this.programs[t] = r(this, t, o)), a
                            },
                            data: function(t, e) {
                                for (; t && e--;) t = t._parent;
                                return t
                            },
                            merge: function(t, e) {
                                var i = t || e;
                                return t && e && t !== e && (i = u.extend({}, e, t)), i
                            },
                            noop: e.VM.noop,
                            compilerInfo: t.compiler
                        },
                        s = function(e, i) {
                            i = i || {};
                            var r = i.data;
                            s._setup(i), !i.partial && t.useData && (r = h(e, r));
                            var a, o = t.useBlockParams ? [] : void 0;
                            return t.useDepths && (a = i.depths ? [e].concat(i.depths) : [e]), t.main.call(n, e, n.helpers, n.partials, r, o, a)
                        };
                    return s.isTop = !0, s._setup = function(i) {
                        i.partial ? (n.helpers = i.helpers, n.partials = i.partials) : (n.helpers = n.merge(i.helpers, e.helpers), t.usePartial && (n.partials = n.merge(i.partials, e.partials)))
                    }, s._child = function(e, i, s, a) {
                        if (t.useBlockParams && !s) throw new d("must pass block params");
                        if (t.useDepths && !a) throw new d("must pass parent depths");
                        return r(n, e, t[e], i, 0, s, a)
                    }, s
                }

                function r(t, e, i, n, s, r, a) {
                    var o = function(e, s) {
                        return s = s || {}, i.call(t, e, t.helpers, t.partials, s.data || n, r && [s.blockParams].concat(r), a && [e].concat(a))
                    };
                    return o.program = e, o.depth = a ? a.length : 0, o.blockParams = s || 0, o
                }

                function a(t, e, i) {
                    return t ? t.call || i.name || (i.name = t, t = i.partials[t]) : t = i.partials[i.name], t
                }

                function o(t, e, i) {
                    if (i.partial = !0, void 0 === t) throw new d("The partial " + i.name + " could not be found");
                    return t instanceof Function ? t(e, i) : void 0
                }

                function l() {
                    return ""
                }

                function h(t, e) {
                    return e && "root" in e || (e = e ? g(e) : {}, e.root = t), e
                }
                var c = {},
                    u = t,
                    d = e,
                    p = i.COMPILER_REVISION,
                    f = i.REVISION_CHANGES,
                    g = i.createFrame;
                return c.checkRevision = n, c.template = s, c.program = r, c.resolvePartial = a, c.invokePartial = o, c.noop = l, c
            }(t, e, i),
            r = function(t, e, i, n, s) {
                "use strict";
                var r, a = t,
                    o = e,
                    l = i,
                    h = n,
                    c = s,
                    u = function() {
                        var t = new a.HandlebarsEnvironment;
                        return h.extend(t, a), t.SafeString = o, t.Exception = l, t.Utils = h, t.escapeExpression = h.escapeExpression, t.VM = c, t.template = function(e) {
                            return c.template(e, t)
                        }, t
                    },
                    d = u();
                d.create = u;
                var p = "undefined" != typeof global ? global : window,
                    f = p.Handlebars;
                return d.noConflict = function() {
                    p.Handlebars === d && (p.Handlebars = f)
                }, d["default"] = d, r = d
            }(i, n, e, t, s),
            a = function() {
                "use strict";
                var t, e = {
                    Program: function(t, e, i, n) {
                        this.loc = n, this.type = "Program", this.body = t, this.blockParams = e, this.strip = i
                    },
                    MustacheStatement: function(t, e, i, n, s, r) {
                        this.loc = r, this.type = "MustacheStatement", this.path = t, this.params = e || [], this.hash = i, this.escaped = n, this.strip = s
                    },
                    BlockStatement: function(t, e, i, n, s, r, a, o, l) {
                        this.loc = l, this.type = "BlockStatement", this.path = t, this.params = e || [], this.hash = i, this.program = n, this.inverse = s, this.openStrip = r, this.inverseStrip = a, this.closeStrip = o
                    },
                    PartialStatement: function(t, e, i, n, s) {
                        this.loc = s, this.type = "PartialStatement", this.name = t, this.params = e || [], this.hash = i, this.indent = "", this.strip = n
                    },
                    ContentStatement: function(t, e) {
                        this.loc = e, this.type = "ContentStatement", this.original = this.value = t
                    },
                    CommentStatement: function(t, e, i) {
                        this.loc = i, this.type = "CommentStatement", this.value = t, this.strip = e
                    },
                    SubExpression: function(t, e, i, n) {
                        this.loc = n, this.type = "SubExpression", this.path = t, this.params = e || [], this.hash = i
                    },
                    PathExpression: function(t, e, i, n, s) {
                        this.loc = s, this.type = "PathExpression", this.data = t, this.original = n, this.parts = i, this.depth = e
                    },
                    StringLiteral: function(t, e) {
                        this.loc = e, this.type = "StringLiteral", this.original = this.value = t
                    },
                    NumberLiteral: function(t, e) {
                        this.loc = e, this.type = "NumberLiteral", this.original = this.value = Number(t)
                    },
                    BooleanLiteral: function(t, e) {
                        this.loc = e, this.type = "BooleanLiteral", this.original = this.value = "true" === t
                    },
                    Hash: function(t, e) {
                        this.loc = e, this.type = "Hash", this.pairs = t
                    },
                    HashPair: function(t, e, i) {
                        this.loc = i, this.type = "HashPair", this.key = t, this.value = e
                    },
                    helpers: {
                        helperExpression: function(t) {
                            return !("SubExpression" !== t.type && !t.params.length && !t.hash)
                        },
                        scopedId: function(t) {
                            return /^\.|this\b/.test(t.original)
                        },
                        simpleId: function(t) {
                            return 1 === t.parts.length && !e.helpers.scopedId(t) && !t.depth
                        }
                    }
                };
                return t = e
            }(),
            o = function() {
                "use strict";
                var t, e = function() {
                    function t() {
                        this.yy = {}
                    }
                    var e = {
                            trace: function() {},
                            yy: {},
                            symbols_: {
                                error: 2,
                                root: 3,
                                program: 4,
                                EOF: 5,
                                program_repetition0: 6,
                                statement: 7,
                                mustache: 8,
                                block: 9,
                                rawBlock: 10,
                                partial: 11,
                                content: 12,
                                COMMENT: 13,
                                CONTENT: 14,
                                openRawBlock: 15,
                                END_RAW_BLOCK: 16,
                                OPEN_RAW_BLOCK: 17,
                                helperName: 18,
                                openRawBlock_repetition0: 19,
                                openRawBlock_option0: 20,
                                CLOSE_RAW_BLOCK: 21,
                                openBlock: 22,
                                block_option0: 23,
                                closeBlock: 24,
                                openInverse: 25,
                                block_option1: 26,
                                OPEN_BLOCK: 27,
                                openBlock_repetition0: 28,
                                openBlock_option0: 29,
                                openBlock_option1: 30,
                                CLOSE: 31,
                                OPEN_INVERSE: 32,
                                openInverse_repetition0: 33,
                                openInverse_option0: 34,
                                openInverse_option1: 35,
                                openInverseChain: 36,
                                OPEN_INVERSE_CHAIN: 37,
                                openInverseChain_repetition0: 38,
                                openInverseChain_option0: 39,
                                openInverseChain_option1: 40,
                                inverseAndProgram: 41,
                                INVERSE: 42,
                                inverseChain: 43,
                                inverseChain_option0: 44,
                                OPEN_ENDBLOCK: 45,
                                OPEN: 46,
                                mustache_repetition0: 47,
                                mustache_option0: 48,
                                OPEN_UNESCAPED: 49,
                                mustache_repetition1: 50,
                                mustache_option1: 51,
                                CLOSE_UNESCAPED: 52,
                                OPEN_PARTIAL: 53,
                                partialName: 54,
                                partial_repetition0: 55,
                                partial_option0: 56,
                                param: 57,
                                sexpr: 58,
                                OPEN_SEXPR: 59,
                                sexpr_repetition0: 60,
                                sexpr_option0: 61,
                                CLOSE_SEXPR: 62,
                                hash: 63,
                                hash_repetition_plus0: 64,
                                hashSegment: 65,
                                ID: 66,
                                EQUALS: 67,
                                blockParams: 68,
                                OPEN_BLOCK_PARAMS: 69,
                                blockParams_repetition_plus0: 70,
                                CLOSE_BLOCK_PARAMS: 71,
                                path: 72,
                                dataName: 73,
                                STRING: 74,
                                NUMBER: 75,
                                BOOLEAN: 76,
                                DATA: 77,
                                pathSegments: 78,
                                SEP: 79,
                                $accept: 0,
                                $end: 1
                            },
                            terminals_: {
                                2: "error",
                                5: "EOF",
                                13: "COMMENT",
                                14: "CONTENT",
                                16: "END_RAW_BLOCK",
                                17: "OPEN_RAW_BLOCK",
                                21: "CLOSE_RAW_BLOCK",
                                27: "OPEN_BLOCK",
                                31: "CLOSE",
                                32: "OPEN_INVERSE",
                                37: "OPEN_INVERSE_CHAIN",
                                42: "INVERSE",
                                45: "OPEN_ENDBLOCK",
                                46: "OPEN",
                                49: "OPEN_UNESCAPED",
                                52: "CLOSE_UNESCAPED",
                                53: "OPEN_PARTIAL",
                                59: "OPEN_SEXPR",
                                62: "CLOSE_SEXPR",
                                66: "ID",
                                67: "EQUALS",
                                69: "OPEN_BLOCK_PARAMS",
                                71: "CLOSE_BLOCK_PARAMS",
                                74: "STRING",
                                75: "NUMBER",
                                76: "BOOLEAN",
                                77: "DATA",
                                79: "SEP"
                            },
                            productions_: [0, [3, 2],
                                [4, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [12, 1],
                                [10, 3],
                                [15, 5],
                                [9, 4],
                                [9, 4],
                                [22, 6],
                                [25, 6],
                                [36, 6],
                                [41, 2],
                                [43, 3],
                                [43, 1],
                                [24, 3],
                                [8, 5],
                                [8, 5],
                                [11, 5],
                                [57, 1],
                                [57, 1],
                                [58, 5],
                                [63, 1],
                                [65, 3],
                                [68, 3],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [18, 1],
                                [54, 1],
                                [54, 1],
                                [73, 2],
                                [72, 1],
                                [78, 3],
                                [78, 1],
                                [6, 0],
                                [6, 2],
                                [19, 0],
                                [19, 2],
                                [20, 0],
                                [20, 1],
                                [23, 0],
                                [23, 1],
                                [26, 0],
                                [26, 1],
                                [28, 0],
                                [28, 2],
                                [29, 0],
                                [29, 1],
                                [30, 0],
                                [30, 1],
                                [33, 0],
                                [33, 2],
                                [34, 0],
                                [34, 1],
                                [35, 0],
                                [35, 1],
                                [38, 0],
                                [38, 2],
                                [39, 0],
                                [39, 1],
                                [40, 0],
                                [40, 1],
                                [44, 0],
                                [44, 1],
                                [47, 0],
                                [47, 2],
                                [48, 0],
                                [48, 1],
                                [50, 0],
                                [50, 2],
                                [51, 0],
                                [51, 1],
                                [55, 0],
                                [55, 2],
                                [56, 0],
                                [56, 1],
                                [60, 0],
                                [60, 2],
                                [61, 0],
                                [61, 1],
                                [64, 1],
                                [64, 2],
                                [70, 1],
                                [70, 2]
                            ],
                            performAction: function(t, e, i, n, s, r, a) {
                                var o = r.length - 1;
                                switch (s) {
                                    case 1:
                                        return r[o - 1];
                                    case 2:
                                        this.$ = new n.Program(r[o], null, {}, n.locInfo(this._$));
                                        break;
                                    case 3:
                                        this.$ = r[o];
                                        break;
                                    case 4:
                                        this.$ = r[o];
                                        break;
                                    case 5:
                                        this.$ = r[o];
                                        break;
                                    case 6:
                                        this.$ = r[o];
                                        break;
                                    case 7:
                                        this.$ = r[o];
                                        break;
                                    case 8:
                                        this.$ = new n.CommentStatement(n.stripComment(r[o]), n.stripFlags(r[o], r[o]), n.locInfo(this._$));
                                        break;
                                    case 9:
                                        this.$ = new n.ContentStatement(r[o], n.locInfo(this._$));
                                        break;
                                    case 10:
                                        this.$ = n.prepareRawBlock(r[o - 2], r[o - 1], r[o], this._$);
                                        break;
                                    case 11:
                                        this.$ = {
                                            path: r[o - 3],
                                            params: r[o - 2],
                                            hash: r[o - 1]
                                        };
                                        break;
                                    case 12:
                                        this.$ = n.prepareBlock(r[o - 3], r[o - 2], r[o - 1], r[o], !1, this._$);
                                        break;
                                    case 13:
                                        this.$ = n.prepareBlock(r[o - 3], r[o - 2], r[o - 1], r[o], !0, this._$);
                                        break;
                                    case 14:
                                        this.$ = {
                                            path: r[o - 4],
                                            params: r[o - 3],
                                            hash: r[o - 2],
                                            blockParams: r[o - 1],
                                            strip: n.stripFlags(r[o - 5], r[o])
                                        };
                                        break;
                                    case 15:
                                        this.$ = {
                                            path: r[o - 4],
                                            params: r[o - 3],
                                            hash: r[o - 2],
                                            blockParams: r[o - 1],
                                            strip: n.stripFlags(r[o - 5], r[o])
                                        };
                                        break;
                                    case 16:
                                        this.$ = {
                                            path: r[o - 4],
                                            params: r[o - 3],
                                            hash: r[o - 2],
                                            blockParams: r[o - 1],
                                            strip: n.stripFlags(r[o - 5], r[o])
                                        };
                                        break;
                                    case 17:
                                        this.$ = {
                                            strip: n.stripFlags(r[o - 1], r[o - 1]),
                                            program: r[o]
                                        };
                                        break;
                                    case 18:
                                        var l = n.prepareBlock(r[o - 2], r[o - 1], r[o], r[o], !1, this._$),
                                            h = new n.Program([l], null, {}, n.locInfo(this._$));
                                        h.chained = !0, this.$ = {
                                            strip: r[o - 2].strip,
                                            program: h,
                                            chain: !0
                                        };
                                        break;
                                    case 19:
                                        this.$ = r[o];
                                        break;
                                    case 20:
                                        this.$ = {
                                            path: r[o - 1],
                                            strip: n.stripFlags(r[o - 2], r[o])
                                        };
                                        break;
                                    case 21:
                                        this.$ = n.prepareMustache(r[o - 3], r[o - 2], r[o - 1], r[o - 4], n.stripFlags(r[o - 4], r[o]), this._$);
                                        break;
                                    case 22:
                                        this.$ = n.prepareMustache(r[o - 3], r[o - 2], r[o - 1], r[o - 4], n.stripFlags(r[o - 4], r[o]), this._$);
                                        break;
                                    case 23:
                                        this.$ = new n.PartialStatement(r[o - 3], r[o - 2], r[o - 1], n.stripFlags(r[o - 4], r[o]), n.locInfo(this._$));
                                        break;
                                    case 24:
                                        this.$ = r[o];
                                        break;
                                    case 25:
                                        this.$ = r[o];
                                        break;
                                    case 26:
                                        this.$ = new n.SubExpression(r[o - 3], r[o - 2], r[o - 1], n.locInfo(this._$));
                                        break;
                                    case 27:
                                        this.$ = new n.Hash(r[o], n.locInfo(this._$));
                                        break;
                                    case 28:
                                        this.$ = new n.HashPair(r[o - 2], r[o], n.locInfo(this._$));
                                        break;
                                    case 29:
                                        this.$ = r[o - 1];
                                        break;
                                    case 30:
                                        this.$ = r[o];
                                        break;
                                    case 31:
                                        this.$ = r[o];
                                        break;
                                    case 32:
                                        this.$ = new n.StringLiteral(r[o], n.locInfo(this._$));
                                        break;
                                    case 33:
                                        this.$ = new n.NumberLiteral(r[o], n.locInfo(this._$));
                                        break;
                                    case 34:
                                        this.$ = new n.BooleanLiteral(r[o], n.locInfo(this._$));
                                        break;
                                    case 35:
                                        this.$ = r[o];
                                        break;
                                    case 36:
                                        this.$ = r[o];
                                        break;
                                    case 37:
                                        this.$ = n.preparePath(!0, r[o], this._$);
                                        break;
                                    case 38:
                                        this.$ = n.preparePath(!1, r[o], this._$);
                                        break;
                                    case 39:
                                        r[o - 2].push({
                                            part: r[o],
                                            separator: r[o - 1]
                                        }), this.$ = r[o - 2];
                                        break;
                                    case 40:
                                        this.$ = [{
                                            part: r[o]
                                        }];
                                        break;
                                    case 41:
                                        this.$ = [];
                                        break;
                                    case 42:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 43:
                                        this.$ = [];
                                        break;
                                    case 44:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 51:
                                        this.$ = [];
                                        break;
                                    case 52:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 57:
                                        this.$ = [];
                                        break;
                                    case 58:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 63:
                                        this.$ = [];
                                        break;
                                    case 64:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 71:
                                        this.$ = [];
                                        break;
                                    case 72:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 75:
                                        this.$ = [];
                                        break;
                                    case 76:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 79:
                                        this.$ = [];
                                        break;
                                    case 80:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 83:
                                        this.$ = [];
                                        break;
                                    case 84:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 87:
                                        this.$ = [r[o]];
                                        break;
                                    case 88:
                                        r[o - 1].push(r[o]);
                                        break;
                                    case 89:
                                        this.$ = [r[o]];
                                        break;
                                    case 90:
                                        r[o - 1].push(r[o])
                                }
                            },
                            table: [{
                                3: 1,
                                4: 2,
                                5: [2, 41],
                                6: 3,
                                13: [2, 41],
                                14: [2, 41],
                                17: [2, 41],
                                27: [2, 41],
                                32: [2, 41],
                                46: [2, 41],
                                49: [2, 41],
                                53: [2, 41]
                            }, {
                                1: [3]
                            }, {
                                5: [1, 4]
                            }, {
                                5: [2, 2],
                                7: 5,
                                8: 6,
                                9: 7,
                                10: 8,
                                11: 9,
                                12: 10,
                                13: [1, 11],
                                14: [1, 18],
                                15: 16,
                                17: [1, 21],
                                22: 14,
                                25: 15,
                                27: [1, 19],
                                32: [1, 20],
                                37: [2, 2],
                                42: [2, 2],
                                45: [2, 2],
                                46: [1, 12],
                                49: [1, 13],
                                53: [1, 17]
                            }, {
                                1: [2, 1]
                            }, {
                                5: [2, 42],
                                13: [2, 42],
                                14: [2, 42],
                                17: [2, 42],
                                27: [2, 42],
                                32: [2, 42],
                                37: [2, 42],
                                42: [2, 42],
                                45: [2, 42],
                                46: [2, 42],
                                49: [2, 42],
                                53: [2, 42]
                            }, {
                                5: [2, 3],
                                13: [2, 3],
                                14: [2, 3],
                                17: [2, 3],
                                27: [2, 3],
                                32: [2, 3],
                                37: [2, 3],
                                42: [2, 3],
                                45: [2, 3],
                                46: [2, 3],
                                49: [2, 3],
                                53: [2, 3]
                            }, {
                                5: [2, 4],
                                13: [2, 4],
                                14: [2, 4],
                                17: [2, 4],
                                27: [2, 4],
                                32: [2, 4],
                                37: [2, 4],
                                42: [2, 4],
                                45: [2, 4],
                                46: [2, 4],
                                49: [2, 4],
                                53: [2, 4]
                            }, {
                                5: [2, 5],
                                13: [2, 5],
                                14: [2, 5],
                                17: [2, 5],
                                27: [2, 5],
                                32: [2, 5],
                                37: [2, 5],
                                42: [2, 5],
                                45: [2, 5],
                                46: [2, 5],
                                49: [2, 5],
                                53: [2, 5]
                            }, {
                                5: [2, 6],
                                13: [2, 6],
                                14: [2, 6],
                                17: [2, 6],
                                27: [2, 6],
                                32: [2, 6],
                                37: [2, 6],
                                42: [2, 6],
                                45: [2, 6],
                                46: [2, 6],
                                49: [2, 6],
                                53: [2, 6]
                            }, {
                                5: [2, 7],
                                13: [2, 7],
                                14: [2, 7],
                                17: [2, 7],
                                27: [2, 7],
                                32: [2, 7],
                                37: [2, 7],
                                42: [2, 7],
                                45: [2, 7],
                                46: [2, 7],
                                49: [2, 7],
                                53: [2, 7]
                            }, {
                                5: [2, 8],
                                13: [2, 8],
                                14: [2, 8],
                                17: [2, 8],
                                27: [2, 8],
                                32: [2, 8],
                                37: [2, 8],
                                42: [2, 8],
                                45: [2, 8],
                                46: [2, 8],
                                49: [2, 8],
                                53: [2, 8]
                            }, {
                                18: 22,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                18: 31,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                4: 32,
                                6: 3,
                                13: [2, 41],
                                14: [2, 41],
                                17: [2, 41],
                                27: [2, 41],
                                32: [2, 41],
                                37: [2, 41],
                                42: [2, 41],
                                45: [2, 41],
                                46: [2, 41],
                                49: [2, 41],
                                53: [2, 41]
                            }, {
                                4: 33,
                                6: 3,
                                13: [2, 41],
                                14: [2, 41],
                                17: [2, 41],
                                27: [2, 41],
                                32: [2, 41],
                                42: [2, 41],
                                45: [2, 41],
                                46: [2, 41],
                                49: [2, 41],
                                53: [2, 41]
                            }, {
                                12: 34,
                                14: [1, 18]
                            }, {
                                18: 36,
                                54: 35,
                                58: 37,
                                59: [1, 38],
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                5: [2, 9],
                                13: [2, 9],
                                14: [2, 9],
                                16: [2, 9],
                                17: [2, 9],
                                27: [2, 9],
                                32: [2, 9],
                                37: [2, 9],
                                42: [2, 9],
                                45: [2, 9],
                                46: [2, 9],
                                49: [2, 9],
                                53: [2, 9]
                            }, {
                                18: 39,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                18: 40,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                18: 41,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                31: [2, 71],
                                47: 42,
                                59: [2, 71],
                                66: [2, 71],
                                74: [2, 71],
                                75: [2, 71],
                                76: [2, 71],
                                77: [2, 71]
                            }, {
                                21: [2, 30],
                                31: [2, 30],
                                52: [2, 30],
                                59: [2, 30],
                                62: [2, 30],
                                66: [2, 30],
                                69: [2, 30],
                                74: [2, 30],
                                75: [2, 30],
                                76: [2, 30],
                                77: [2, 30]
                            }, {
                                21: [2, 31],
                                31: [2, 31],
                                52: [2, 31],
                                59: [2, 31],
                                62: [2, 31],
                                66: [2, 31],
                                69: [2, 31],
                                74: [2, 31],
                                75: [2, 31],
                                76: [2, 31],
                                77: [2, 31]
                            }, {
                                21: [2, 32],
                                31: [2, 32],
                                52: [2, 32],
                                59: [2, 32],
                                62: [2, 32],
                                66: [2, 32],
                                69: [2, 32],
                                74: [2, 32],
                                75: [2, 32],
                                76: [2, 32],
                                77: [2, 32]
                            }, {
                                21: [2, 33],
                                31: [2, 33],
                                52: [2, 33],
                                59: [2, 33],
                                62: [2, 33],
                                66: [2, 33],
                                69: [2, 33],
                                74: [2, 33],
                                75: [2, 33],
                                76: [2, 33],
                                77: [2, 33]
                            }, {
                                21: [2, 34],
                                31: [2, 34],
                                52: [2, 34],
                                59: [2, 34],
                                62: [2, 34],
                                66: [2, 34],
                                69: [2, 34],
                                74: [2, 34],
                                75: [2, 34],
                                76: [2, 34],
                                77: [2, 34]
                            }, {
                                21: [2, 38],
                                31: [2, 38],
                                52: [2, 38],
                                59: [2, 38],
                                62: [2, 38],
                                66: [2, 38],
                                69: [2, 38],
                                74: [2, 38],
                                75: [2, 38],
                                76: [2, 38],
                                77: [2, 38],
                                79: [1, 43]
                            }, {
                                66: [1, 30],
                                78: 44
                            }, {
                                21: [2, 40],
                                31: [2, 40],
                                52: [2, 40],
                                59: [2, 40],
                                62: [2, 40],
                                66: [2, 40],
                                69: [2, 40],
                                74: [2, 40],
                                75: [2, 40],
                                76: [2, 40],
                                77: [2, 40],
                                79: [2, 40]
                            }, {
                                50: 45,
                                52: [2, 75],
                                59: [2, 75],
                                66: [2, 75],
                                74: [2, 75],
                                75: [2, 75],
                                76: [2, 75],
                                77: [2, 75]
                            }, {
                                23: 46,
                                36: 48,
                                37: [1, 50],
                                41: 49,
                                42: [1, 51],
                                43: 47,
                                45: [2, 47]
                            }, {
                                26: 52,
                                41: 53,
                                42: [1, 51],
                                45: [2, 49]
                            }, {
                                16: [1, 54]
                            }, {
                                31: [2, 79],
                                55: 55,
                                59: [2, 79],
                                66: [2, 79],
                                74: [2, 79],
                                75: [2, 79],
                                76: [2, 79],
                                77: [2, 79]
                            }, {
                                31: [2, 35],
                                59: [2, 35],
                                66: [2, 35],
                                74: [2, 35],
                                75: [2, 35],
                                76: [2, 35],
                                77: [2, 35]
                            }, {
                                31: [2, 36],
                                59: [2, 36],
                                66: [2, 36],
                                74: [2, 36],
                                75: [2, 36],
                                76: [2, 36],
                                77: [2, 36]
                            }, {
                                18: 56,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                28: 57,
                                31: [2, 51],
                                59: [2, 51],
                                66: [2, 51],
                                69: [2, 51],
                                74: [2, 51],
                                75: [2, 51],
                                76: [2, 51],
                                77: [2, 51]
                            }, {
                                31: [2, 57],
                                33: 58,
                                59: [2, 57],
                                66: [2, 57],
                                69: [2, 57],
                                74: [2, 57],
                                75: [2, 57],
                                76: [2, 57],
                                77: [2, 57]
                            }, {
                                19: 59,
                                21: [2, 43],
                                59: [2, 43],
                                66: [2, 43],
                                74: [2, 43],
                                75: [2, 43],
                                76: [2, 43],
                                77: [2, 43]
                            }, {
                                18: 63,
                                31: [2, 73],
                                48: 60,
                                57: 61,
                                58: 64,
                                59: [1, 38],
                                63: 62,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                66: [1, 68]
                            }, {
                                21: [2, 37],
                                31: [2, 37],
                                52: [2, 37],
                                59: [2, 37],
                                62: [2, 37],
                                66: [2, 37],
                                69: [2, 37],
                                74: [2, 37],
                                75: [2, 37],
                                76: [2, 37],
                                77: [2, 37],
                                79: [1, 43]
                            }, {
                                18: 63,
                                51: 69,
                                52: [2, 77],
                                57: 70,
                                58: 64,
                                59: [1, 38],
                                63: 71,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                24: 72,
                                45: [1, 73]
                            }, {
                                45: [2, 48]
                            }, {
                                4: 74,
                                6: 3,
                                13: [2, 41],
                                14: [2, 41],
                                17: [2, 41],
                                27: [2, 41],
                                32: [2, 41],
                                37: [2, 41],
                                42: [2, 41],
                                45: [2, 41],
                                46: [2, 41],
                                49: [2, 41],
                                53: [2, 41]
                            }, {
                                45: [2, 19]
                            }, {
                                18: 75,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                4: 76,
                                6: 3,
                                13: [2, 41],
                                14: [2, 41],
                                17: [2, 41],
                                27: [2, 41],
                                32: [2, 41],
                                45: [2, 41],
                                46: [2, 41],
                                49: [2, 41],
                                53: [2, 41]
                            }, {
                                24: 77,
                                45: [1, 73]
                            }, {
                                45: [2, 50]
                            }, {
                                5: [2, 10],
                                13: [2, 10],
                                14: [2, 10],
                                17: [2, 10],
                                27: [2, 10],
                                32: [2, 10],
                                37: [2, 10],
                                42: [2, 10],
                                45: [2, 10],
                                46: [2, 10],
                                49: [2, 10],
                                53: [2, 10]
                            }, {
                                18: 63,
                                31: [2, 81],
                                56: 78,
                                57: 79,
                                58: 64,
                                59: [1, 38],
                                63: 80,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                59: [2, 83],
                                60: 81,
                                62: [2, 83],
                                66: [2, 83],
                                74: [2, 83],
                                75: [2, 83],
                                76: [2, 83],
                                77: [2, 83]
                            }, {
                                18: 63,
                                29: 82,
                                31: [2, 53],
                                57: 83,
                                58: 64,
                                59: [1, 38],
                                63: 84,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                69: [2, 53],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                18: 63,
                                31: [2, 59],
                                34: 85,
                                57: 86,
                                58: 64,
                                59: [1, 38],
                                63: 87,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                69: [2, 59],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                18: 63,
                                20: 88,
                                21: [2, 45],
                                57: 89,
                                58: 64,
                                59: [1, 38],
                                63: 90,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                31: [1, 91]
                            }, {
                                31: [2, 72],
                                59: [2, 72],
                                66: [2, 72],
                                74: [2, 72],
                                75: [2, 72],
                                76: [2, 72],
                                77: [2, 72]
                            }, {
                                31: [2, 74]
                            }, {
                                21: [2, 24],
                                31: [2, 24],
                                52: [2, 24],
                                59: [2, 24],
                                62: [2, 24],
                                66: [2, 24],
                                69: [2, 24],
                                74: [2, 24],
                                75: [2, 24],
                                76: [2, 24],
                                77: [2, 24]
                            }, {
                                21: [2, 25],
                                31: [2, 25],
                                52: [2, 25],
                                59: [2, 25],
                                62: [2, 25],
                                66: [2, 25],
                                69: [2, 25],
                                74: [2, 25],
                                75: [2, 25],
                                76: [2, 25],
                                77: [2, 25]
                            }, {
                                21: [2, 27],
                                31: [2, 27],
                                52: [2, 27],
                                62: [2, 27],
                                65: 92,
                                66: [1, 93],
                                69: [2, 27]
                            }, {
                                21: [2, 87],
                                31: [2, 87],
                                52: [2, 87],
                                62: [2, 87],
                                66: [2, 87],
                                69: [2, 87]
                            }, {
                                21: [2, 40],
                                31: [2, 40],
                                52: [2, 40],
                                59: [2, 40],
                                62: [2, 40],
                                66: [2, 40],
                                67: [1, 94],
                                69: [2, 40],
                                74: [2, 40],
                                75: [2, 40],
                                76: [2, 40],
                                77: [2, 40],
                                79: [2, 40]
                            }, {
                                21: [2, 39],
                                31: [2, 39],
                                52: [2, 39],
                                59: [2, 39],
                                62: [2, 39],
                                66: [2, 39],
                                69: [2, 39],
                                74: [2, 39],
                                75: [2, 39],
                                76: [2, 39],
                                77: [2, 39],
                                79: [2, 39]
                            }, {
                                52: [1, 95]
                            }, {
                                52: [2, 76],
                                59: [2, 76],
                                66: [2, 76],
                                74: [2, 76],
                                75: [2, 76],
                                76: [2, 76],
                                77: [2, 76]
                            }, {
                                52: [2, 78]
                            }, {
                                5: [2, 12],
                                13: [2, 12],
                                14: [2, 12],
                                17: [2, 12],
                                27: [2, 12],
                                32: [2, 12],
                                37: [2, 12],
                                42: [2, 12],
                                45: [2, 12],
                                46: [2, 12],
                                49: [2, 12],
                                53: [2, 12]
                            }, {
                                18: 96,
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                36: 48,
                                37: [1, 50],
                                41: 49,
                                42: [1, 51],
                                43: 98,
                                44: 97,
                                45: [2, 69]
                            }, {
                                31: [2, 63],
                                38: 99,
                                59: [2, 63],
                                66: [2, 63],
                                69: [2, 63],
                                74: [2, 63],
                                75: [2, 63],
                                76: [2, 63],
                                77: [2, 63]
                            }, {
                                45: [2, 17]
                            }, {
                                5: [2, 13],
                                13: [2, 13],
                                14: [2, 13],
                                17: [2, 13],
                                27: [2, 13],
                                32: [2, 13],
                                37: [2, 13],
                                42: [2, 13],
                                45: [2, 13],
                                46: [2, 13],
                                49: [2, 13],
                                53: [2, 13]
                            }, {
                                31: [1, 100]
                            }, {
                                31: [2, 80],
                                59: [2, 80],
                                66: [2, 80],
                                74: [2, 80],
                                75: [2, 80],
                                76: [2, 80],
                                77: [2, 80]
                            }, {
                                31: [2, 82]
                            }, {
                                18: 63,
                                57: 102,
                                58: 64,
                                59: [1, 38],
                                61: 101,
                                62: [2, 85],
                                63: 103,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                30: 104,
                                31: [2, 55],
                                68: 105,
                                69: [1, 106]
                            }, {
                                31: [2, 52],
                                59: [2, 52],
                                66: [2, 52],
                                69: [2, 52],
                                74: [2, 52],
                                75: [2, 52],
                                76: [2, 52],
                                77: [2, 52]
                            }, {
                                31: [2, 54],
                                69: [2, 54]
                            }, {
                                31: [2, 61],
                                35: 107,
                                68: 108,
                                69: [1, 106]
                            }, {
                                31: [2, 58],
                                59: [2, 58],
                                66: [2, 58],
                                69: [2, 58],
                                74: [2, 58],
                                75: [2, 58],
                                76: [2, 58],
                                77: [2, 58]
                            }, {
                                31: [2, 60],
                                69: [2, 60]
                            }, {
                                21: [1, 109]
                            }, {
                                21: [2, 44],
                                59: [2, 44],
                                66: [2, 44],
                                74: [2, 44],
                                75: [2, 44],
                                76: [2, 44],
                                77: [2, 44]
                            }, {
                                21: [2, 46]
                            }, {
                                5: [2, 21],
                                13: [2, 21],
                                14: [2, 21],
                                17: [2, 21],
                                27: [2, 21],
                                32: [2, 21],
                                37: [2, 21],
                                42: [2, 21],
                                45: [2, 21],
                                46: [2, 21],
                                49: [2, 21],
                                53: [2, 21]
                            }, {
                                21: [2, 88],
                                31: [2, 88],
                                52: [2, 88],
                                62: [2, 88],
                                66: [2, 88],
                                69: [2, 88]
                            }, {
                                67: [1, 94]
                            }, {
                                18: 63,
                                57: 110,
                                58: 64,
                                59: [1, 38],
                                66: [1, 30],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                5: [2, 22],
                                13: [2, 22],
                                14: [2, 22],
                                17: [2, 22],
                                27: [2, 22],
                                32: [2, 22],
                                37: [2, 22],
                                42: [2, 22],
                                45: [2, 22],
                                46: [2, 22],
                                49: [2, 22],
                                53: [2, 22]
                            }, {
                                31: [1, 111]
                            }, {
                                45: [2, 18]
                            }, {
                                45: [2, 70]
                            }, {
                                18: 63,
                                31: [2, 65],
                                39: 112,
                                57: 113,
                                58: 64,
                                59: [1, 38],
                                63: 114,
                                64: 65,
                                65: 66,
                                66: [1, 67],
                                69: [2, 65],
                                72: 23,
                                73: 24,
                                74: [1, 25],
                                75: [1, 26],
                                76: [1, 27],
                                77: [1, 29],
                                78: 28
                            }, {
                                5: [2, 23],
                                13: [2, 23],
                                14: [2, 23],
                                17: [2, 23],
                                27: [2, 23],
                                32: [2, 23],
                                37: [2, 23],
                                42: [2, 23],
                                45: [2, 23],
                                46: [2, 23],
                                49: [2, 23],
                                53: [2, 23]
                            }, {
                                62: [1, 115]
                            }, {
                                59: [2, 84],
                                62: [2, 84],
                                66: [2, 84],
                                74: [2, 84],
                                75: [2, 84],
                                76: [2, 84],
                                77: [2, 84]
                            }, {
                                62: [2, 86]
                            }, {
                                31: [1, 116]
                            }, {
                                31: [2, 56]
                            }, {
                                66: [1, 118],
                                70: 117
                            }, {
                                31: [1, 119]
                            }, {
                                31: [2, 62]
                            }, {
                                14: [2, 11]
                            }, {
                                21: [2, 28],
                                31: [2, 28],
                                52: [2, 28],
                                62: [2, 28],
                                66: [2, 28],
                                69: [2, 28]
                            }, {
                                5: [2, 20],
                                13: [2, 20],
                                14: [2, 20],
                                17: [2, 20],
                                27: [2, 20],
                                32: [2, 20],
                                37: [2, 20],
                                42: [2, 20],
                                45: [2, 20],
                                46: [2, 20],
                                49: [2, 20],
                                53: [2, 20]
                            }, {
                                31: [2, 67],
                                40: 120,
                                68: 121,
                                69: [1, 106]
                            }, {
                                31: [2, 64],
                                59: [2, 64],
                                66: [2, 64],
                                69: [2, 64],
                                74: [2, 64],
                                75: [2, 64],
                                76: [2, 64],
                                77: [2, 64]
                            }, {
                                31: [2, 66],
                                69: [2, 66]
                            }, {
                                21: [2, 26],
                                31: [2, 26],
                                52: [2, 26],
                                59: [2, 26],
                                62: [2, 26],
                                66: [2, 26],
                                69: [2, 26],
                                74: [2, 26],
                                75: [2, 26],
                                76: [2, 26],
                                77: [2, 26]
                            }, {
                                13: [2, 14],
                                14: [2, 14],
                                17: [2, 14],
                                27: [2, 14],
                                32: [2, 14],
                                37: [2, 14],
                                42: [2, 14],
                                45: [2, 14],
                                46: [2, 14],
                                49: [2, 14],
                                53: [2, 14]
                            }, {
                                66: [1, 123],
                                71: [1, 122]
                            }, {
                                66: [2, 89],
                                71: [2, 89]
                            }, {
                                13: [2, 15],
                                14: [2, 15],
                                17: [2, 15],
                                27: [2, 15],
                                32: [2, 15],
                                42: [2, 15],
                                45: [2, 15],
                                46: [2, 15],
                                49: [2, 15],
                                53: [2, 15]
                            }, {
                                31: [1, 124]
                            }, {
                                31: [2, 68]
                            }, {
                                31: [2, 29]
                            }, {
                                66: [2, 90],
                                71: [2, 90]
                            }, {
                                13: [2, 16],
                                14: [2, 16],
                                17: [2, 16],
                                27: [2, 16],
                                32: [2, 16],
                                37: [2, 16],
                                42: [2, 16],
                                45: [2, 16],
                                46: [2, 16],
                                49: [2, 16],
                                53: [2, 16]
                            }],
                            defaultActions: {
                                4: [2, 1],
                                47: [2, 48],
                                49: [2, 19],
                                53: [2, 50],
                                62: [2, 74],
                                71: [2, 78],
                                76: [2, 17],
                                80: [2, 82],
                                90: [2, 46],
                                97: [2, 18],
                                98: [2, 70],
                                103: [2, 86],
                                105: [2, 56],
                                108: [2, 62],
                                109: [2, 11],
                                121: [2, 68],
                                122: [2, 29]
                            },
                            parseError: function(t, e) {
                                throw new Error(t)
                            },
                            parse: function(t) {
                                function e() {
                                    var t;
                                    return t = i.lexer.lex() || 1, "number" != typeof t && (t = i.symbols_[t] || t), t
                                }
                                var i = this,
                                    n = [0],
                                    s = [null],
                                    r = [],
                                    a = this.table,
                                    o = "",
                                    l = 0,
                                    h = 0,
                                    c = 0;
                                this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                                var u = this.lexer.yylloc;
                                r.push(u);
                                var d = this.lexer.options && this.lexer.options.ranges;
                                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                                for (var p, f, g, m, v, _, y, b, w, x = {};;) {
                                    if (g = n[n.length - 1], this.defaultActions[g] ? m = this.defaultActions[g] : ((null === p || "undefined" == typeof p) && (p = e()), m = a[g] && a[g][p]), "undefined" == typeof m || !m.length || !m[0]) {
                                        var T = "";
                                        if (!c) {
                                            w = [];
                                            for (_ in a[g]) this.terminals_[_] && _ > 2 && w.push("'" + this.terminals_[_] + "'");
                                            T = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[p] || p) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == p ? "end of input" : "'" + (this.terminals_[p] || p) + "'"), this.parseError(T, {
                                                text: this.lexer.match,
                                                token: this.terminals_[p] || p,
                                                line: this.lexer.yylineno,
                                                loc: u,
                                                expected: w
                                            })
                                        }
                                    }
                                    if (m[0] instanceof Array && m.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + g + ", token: " + p);
                                    switch (m[0]) {
                                        case 1:
                                            n.push(p), s.push(this.lexer.yytext), r.push(this.lexer.yylloc), n.push(m[1]), p = null, f ? (p = f, f = null) : (h = this.lexer.yyleng, o = this.lexer.yytext, l = this.lexer.yylineno, u = this.lexer.yylloc, c > 0 && c--);
                                            break;
                                        case 2:
                                            if (y = this.productions_[m[1]][1], x.$ = s[s.length - y], x._$ = {
                                                    first_line: r[r.length - (y || 1)].first_line,
                                                    last_line: r[r.length - 1].last_line,
                                                    first_column: r[r.length - (y || 1)].first_column,
                                                    last_column: r[r.length - 1].last_column
                                                }, d && (x._$.range = [r[r.length - (y || 1)].range[0], r[r.length - 1].range[1]]), v = this.performAction.call(x, o, h, l, this.yy, m[1], s, r), "undefined" != typeof v) return v;
                                            y && (n = n.slice(0, -1 * y * 2), s = s.slice(0, -1 * y), r = r.slice(0, -1 * y)), n.push(this.productions_[m[1]][0]), s.push(x.$), r.push(x._$), b = a[n[n.length - 2]][n[n.length - 1]], n.push(b);
                                            break;
                                        case 3:
                                            return !0
                                    }
                                }
                                return !0
                            }
                        },
                        i = function() {
                            var t = {
                                EOF: 1,
                                parseError: function(t, e) {
                                    if (!this.yy.parser) throw new Error(t);
                                    this.yy.parser.parseError(t, e)
                                },
                                setInput: function(t) {
                                    return this._input = t, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                        first_line: 1,
                                        first_column: 0,
                                        last_line: 1,
                                        last_column: 0
                                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                                },
                                input: function() {
                                    var t = this._input[0];
                                    this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t;
                                    var e = t.match(/(?:\r\n?|\n).*/g);
                                    return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t
                                },
                                unput: function(t) {
                                    var e = t.length,
                                        i = t.split(/(?:\r\n?|\n)/g);
                                    this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e - 1), this.offset -= e;
                                    var n = this.match.split(/(?:\r\n?|\n)/g);
                                    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i.length - 1 && (this.yylineno -= i.length - 1);
                                    var s = this.yylloc.range;
                                    return this.yylloc = {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.first_column,
                                        last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - e
                                    }, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - e]), this
                                },
                                more: function() {
                                    return this._more = !0, this
                                },
                                less: function(t) {
                                    this.unput(this.match.slice(t))
                                },
                                pastInput: function() {
                                    var t = this.matched.substr(0, this.matched.length - this.match.length);
                                    return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                                },
                                upcomingInput: function() {
                                    var t = this.match;
                                    return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                                },
                                showPosition: function() {
                                    var t = this.pastInput(),
                                        e = new Array(t.length + 1).join("-");
                                    return t + this.upcomingInput() + "\n" + e + "^"
                                },
                                next: function() {
                                    if (this.done) return this.EOF;
                                    this._input || (this.done = !0);
                                    var t, e, i, n, s;
                                    this._more || (this.yytext = "", this.match = "");
                                    for (var r = this._currentRules(), a = 0; a < r.length && (i = this._input.match(this.rules[r[a]]), !i || e && !(i[0].length > e[0].length) || (e = i, n = a, this.options.flex)); a++);
                                    return e ? (s = e[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
                                        first_line: this.yylloc.last_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.last_column,
                                        last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                                    }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], t = this.performAction.call(this, this.yy, this, r[n], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), t ? t : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                        text: "",
                                        token: null,
                                        line: this.yylineno
                                    })
                                },
                                lex: function() {
                                    var t = this.next();
                                    return "undefined" != typeof t ? t : this.lex()
                                },
                                begin: function(t) {
                                    this.conditionStack.push(t)
                                },
                                popState: function() {
                                    return this.conditionStack.pop()
                                },
                                _currentRules: function() {
                                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                                },
                                topState: function() {
                                    return this.conditionStack[this.conditionStack.length - 2]
                                },
                                pushState: function(t) {
                                    this.begin(t)
                                }
                            };
                            return t.options = {}, t.performAction = function(t, e, i, n) {
                                function s(t, i) {
                                    return e.yytext = e.yytext.substr(t, e.yyleng - i)
                                }
                                switch (i) {
                                    case 0:
                                        if ("\\\\" === e.yytext.slice(-2) ? (s(0, 1), this.begin("mu")) : "\\" === e.yytext.slice(-1) ? (s(0, 1), this.begin("emu")) : this.begin("mu"), e.yytext) return 14;
                                        break;
                                    case 1:
                                        return 14;
                                    case 2:
                                        return this.popState(), 14;
                                    case 3:
                                        return e.yytext = e.yytext.substr(5, e.yyleng - 9), this.popState(), 16;
                                    case 4:
                                        return 14;
                                    case 5:
                                        return this.popState(), 13;
                                    case 6:
                                        return 59;
                                    case 7:
                                        return 62;
                                    case 8:
                                        return 17;
                                    case 9:
                                        return this.popState(), this.begin("raw"), 21;
                                    case 10:
                                        return 53;
                                    case 11:
                                        return 27;
                                    case 12:
                                        return 45;
                                    case 13:
                                        return this.popState(), 42;
                                    case 14:
                                        return this.popState(), 42;
                                    case 15:
                                        return 32;
                                    case 16:
                                        return 37;
                                    case 17:
                                        return 49;
                                    case 18:
                                        return 46;
                                    case 19:
                                        this.unput(e.yytext), this.popState(), this.begin("com");
                                        break;
                                    case 20:
                                        return this.popState(), 13;
                                    case 21:
                                        return 46;
                                    case 22:
                                        return 67;
                                    case 23:
                                        return 66;
                                    case 24:
                                        return 66;
                                    case 25:
                                        return 79;
                                    case 26:
                                        break;
                                    case 27:
                                        return this.popState(), 52;
                                    case 28:
                                        return this.popState(), 31;
                                    case 29:
                                        return e.yytext = s(1, 2).replace(/\\"/g, '"'), 74;
                                    case 30:
                                        return e.yytext = s(1, 2).replace(/\\'/g, "'"), 74;
                                    case 31:
                                        return 77;
                                    case 32:
                                        return 76;
                                    case 33:
                                        return 76;
                                    case 34:
                                        return 75;
                                    case 35:
                                        return 69;
                                    case 36:
                                        return 71;
                                    case 37:
                                        return 66;
                                    case 38:
                                        return e.yytext = s(1, 2), 66;
                                    case 39:
                                        return "INVALID";
                                    case 40:
                                        return 5
                                }
                            }, t.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], t.conditions = {
                                mu: {
                                    rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                                    inclusive: !1
                                },
                                emu: {
                                    rules: [2],
                                    inclusive: !1
                                },
                                com: {
                                    rules: [5],
                                    inclusive: !1
                                },
                                raw: {
                                    rules: [3, 4],
                                    inclusive: !1
                                },
                                INITIAL: {
                                    rules: [0, 1, 40],
                                    inclusive: !0
                                }
                            }, t
                        }();
                    return e.lexer = i, t.prototype = e, e.Parser = t, new t
                }();
                return t = e
            }(),
            l = function(t, e) {
                "use strict";

                function i() {
                    this.parents = []
                }
                var n, s = t,
                    r = e;
                return i.prototype = {
                    constructor: i,
                    mutating: !1,
                    acceptKey: function(t, e) {
                        var i = this.accept(t[e]);
                        if (this.mutating) {
                            if (i && (!i.type || !r[i.type])) throw new s('Unexpected node type "' + i.type + '" found when accepting ' + e + " on " + t.type);
                            t[e] = i
                        }
                    },
                    acceptRequired: function(t, e) {
                        if (this.acceptKey(t, e), !t[e]) throw new s(t.type + " requires " + e)
                    },
                    acceptArray: function(t) {
                        for (var e = 0, i = t.length; i > e; e++) this.acceptKey(t, e), t[e] || (t.splice(e, 1), e--, i--)
                    },
                    accept: function(t) {
                        if (t) {
                            this.current && this.parents.unshift(this.current), this.current = t;
                            var e = this[t.type](t);
                            return this.current = this.parents.shift(), !this.mutating || e ? e : e !== !1 ? t : void 0
                        }
                    },
                    Program: function(t) {
                        this.acceptArray(t.body)
                    },
                    MustacheStatement: function(t) {
                        this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                    },
                    BlockStatement: function(t) {
                        this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash"), this.acceptKey(t, "program"), this.acceptKey(t, "inverse")
                    },
                    PartialStatement: function(t) {
                        this.acceptRequired(t, "name"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                    },
                    ContentStatement: function() {},
                    CommentStatement: function() {},
                    SubExpression: function(t) {
                        this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                    },
                    PartialExpression: function(t) {
                        this.acceptRequired(t, "name"), this.acceptArray(t.params), this.acceptKey(t, "hash")
                    },
                    PathExpression: function() {},
                    StringLiteral: function() {},
                    NumberLiteral: function() {},
                    BooleanLiteral: function() {},
                    Hash: function(t) {
                        this.acceptArray(t.pairs)
                    },
                    HashPair: function(t) {
                        this.acceptRequired(t, "value")
                    }
                }, n = i
            }(e, a),
            h = function(t) {
                "use strict";

                function e() {}

                function i(t, e, i) {
                    void 0 === e && (e = t.length);
                    var n = t[e - 1],
                        s = t[e - 2];
                    return n ? "ContentStatement" === n.type ? (s || !i ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(n.original) : void 0 : i
                }

                function n(t, e, i) {
                    void 0 === e && (e = -1);
                    var n = t[e + 1],
                        s = t[e + 2];
                    return n ? "ContentStatement" === n.type ? (s || !i ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(n.original) : void 0 : i
                }

                function s(t, e, i) {
                    var n = t[null == e ? 0 : e + 1];
                    if (n && "ContentStatement" === n.type && (i || !n.rightStripped)) {
                        var s = n.value;
                        n.value = n.value.replace(i ? /^\s+/ : /^[ \t]*\r?\n?/, ""), n.rightStripped = n.value !== s
                    }
                }

                function r(t, e, i) {
                    var n = t[null == e ? t.length - 1 : e - 1];
                    if (n && "ContentStatement" === n.type && (i || !n.leftStripped)) {
                        var s = n.value;
                        return n.value = n.value.replace(i ? /\s+$/ : /[ \t]+$/, ""), n.leftStripped = n.value !== s, n.leftStripped
                    }
                }
                var a, o = t;
                return e.prototype = new o, e.prototype.Program = function(t) {
                    var e = !this.isRootSeen;
                    this.isRootSeen = !0;
                    for (var a = t.body, o = 0, l = a.length; l > o; o++) {
                        var h = a[o],
                            c = this.accept(h);
                        if (c) {
                            var u = i(a, o, e),
                                d = n(a, o, e),
                                p = c.openStandalone && u,
                                f = c.closeStandalone && d,
                                g = c.inlineStandalone && u && d;
                            c.close && s(a, o, !0), c.open && r(a, o, !0), g && (s(a, o), r(a, o) && "PartialStatement" === h.type && (h.indent = /([ \t]+$)/.exec(a[o - 1].original)[1])), p && (s((h.program || h.inverse).body), r(a, o)), f && (s(a, o), r((h.inverse || h.program).body))
                        }
                    }
                    return t
                }, e.prototype.BlockStatement = function(t) {
                    this.accept(t.program), this.accept(t.inverse);
                    var e = t.program || t.inverse,
                        a = t.program && t.inverse,
                        o = a,
                        l = a;
                    if (a && a.chained)
                        for (o = a.body[0].program; l.chained;) l = l.body[l.body.length - 1].program;
                    var h = {
                        open: t.openStrip.open,
                        close: t.closeStrip.close,
                        openStandalone: n(e.body),
                        closeStandalone: i((o || e).body)
                    };
                    if (t.openStrip.close && s(e.body, null, !0), a) {
                        var c = t.inverseStrip;
                        c.open && r(e.body, null, !0), c.close && s(o.body, null, !0), t.closeStrip.open && r(l.body, null, !0), i(e.body) && n(o.body) && (r(e.body), s(o.body))
                    } else t.closeStrip.open && r(e.body, null, !0);
                    return h
                }, e.prototype.MustacheStatement = function(t) {
                    return t.strip
                }, e.prototype.PartialStatement = e.prototype.CommentStatement = function(t) {
                    var e = t.strip || {};
                    return {
                        inlineStandalone: !0,
                        open: e.open,
                        close: e.close
                    }
                }, a = e
            }(l),
            c = function(t) {
                "use strict";

                function e(t, e) {
                    this.source = t, this.start = {
                        line: e.first_line,
                        column: e.first_column
                    }, this.end = {
                        line: e.last_line,
                        column: e.last_column
                    }
                }

                function i(t, e) {
                    return {
                        open: "~" === t.charAt(2),
                        close: "~" === e.charAt(e.length - 3)
                    }
                }

                function n(t) {
                    return t.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
                }

                function s(t, e, i) {
                    i = this.locInfo(i);
                    for (var n = t ? "@" : "", s = [], r = 0, a = "", o = 0, l = e.length; l > o; o++) {
                        var c = e[o].part;
                        if (n += (e[o].separator || "") + c, ".." === c || "." === c || "this" === c) {
                            if (s.length > 0) throw new h("Invalid path: " + n, {
                                loc: i
                            });
                            ".." === c && (r++, a += "../")
                        } else s.push(c)
                    }
                    return new this.PathExpression(t, r, s, n, i)
                }

                function r(t, e, i, n, s, r) {
                    var a = n.charAt(3) || n.charAt(2),
                        o = "{" !== a && "&" !== a;
                    return new this.MustacheStatement(t, e, i, o, s, this.locInfo(r))
                }

                function a(t, e, i, n) {
                    if (t.path.original !== i) {
                        var s = {
                            loc: t.path.loc
                        };
                        throw new h(t.path.original + " doesn't match " + i, s)
                    }
                    n = this.locInfo(n);
                    var r = new this.Program([e], null, {}, n);
                    return new this.BlockStatement(t.path, t.params, t.hash, r, void 0, {}, {}, {}, n)
                }

                function o(t, e, i, n, s, r) {
                    if (n && n.path && t.path.original !== n.path.original) {
                        var a = {
                            loc: t.path.loc
                        };
                        throw new h(t.path.original + " doesn't match " + n.path.original, a)
                    }
                    e.blockParams = t.blockParams;
                    var o, l;
                    return i && (i.chain && (i.program.body[0].closeStrip = n.strip), l = i.strip, o = i.program), s && (s = o, o = e, e = s), new this.BlockStatement(t.path, t.params, t.hash, e, o, t.strip, l, n && n.strip, this.locInfo(r))
                }
                var l = {},
                    h = t;
                return l.SourceLocation = e, l.stripFlags = i, l.stripComment = n, l.preparePath = s, l.prepareMustache = r, l.prepareRawBlock = a, l.prepareBlock = o, l
            }(e),
            u = function(t, e, i, n, s) {
                "use strict";

                function r(t, e) {
                    if ("Program" === t.type) return t;
                    o.yy = d, d.locInfo = function(t) {
                        return new d.SourceLocation(e && e.srcName, t)
                    };
                    var i = new h;
                    return i.accept(o.parse(t))
                }
                var a = {},
                    o = t,
                    l = e,
                    h = i,
                    c = n,
                    u = s.extend;
                a.parser = o;
                var d = {};
                return u(d, c, l), a.parse = r, a
            }(o, a, h, c, t),
            d = function(t, e, i) {
                "use strict";

                function n() {}

                function s(t, e, i) {
                    if (null == t || "string" != typeof t && "Program" !== t.type) throw new h("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
                    e = e || {}, "data" in e || (e.data = !0), e.compat && (e.useDepths = !0);
                    var n = i.parse(t, e),
                        s = (new i.Compiler).compile(n, e);
                    return (new i.JavaScriptCompiler).compile(s, e)
                }

                function r(t, e, i) {
                    function n() {
                        var n = i.parse(t, e),
                            s = (new i.Compiler).compile(n, e),
                            r = (new i.JavaScriptCompiler).compile(s, e, void 0, !0);
                        return i.template(r)
                    }
                    if (null == t || "string" != typeof t && "Program" !== t.type) throw new h("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
                    e = e || {}, "data" in e || (e.data = !0), e.compat && (e.useDepths = !0);
                    var s, r = function(t, e) {
                        return s || (s = n()), s.call(this, t, e)
                    };
                    return r._setup = function(t) {
                        return s || (s = n()), s._setup(t)
                    }, r._child = function(t, e, i, r) {
                        return s || (s = n()), s._child(t, e, i, r)
                    }, r
                }

                function a(t, e) {
                    if (t === e) return !0;
                    if (c(t) && c(e) && t.length === e.length) {
                        for (var i = 0; i < t.length; i++)
                            if (!a(t[i], e[i])) return !1;
                        return !0
                    }
                }

                function o(t) {
                    if (!t.path.parts) {
                        var e = t.path;
                        t.path = new d.PathExpression(!1, 0, [e.original + ""], e.original + "", e.log)
                    }
                }
                var l = {},
                    h = t,
                    c = e.isArray,
                    u = e.indexOf,
                    d = i,
                    p = [].slice;
                return l.Compiler = n, n.prototype = {
                    compiler: n,
                    equals: function(t) {
                        var e = this.opcodes.length;
                        if (t.opcodes.length !== e) return !1;
                        for (var i = 0; e > i; i++) {
                            var n = this.opcodes[i],
                                s = t.opcodes[i];
                            if (n.opcode !== s.opcode || !a(n.args, s.args)) return !1
                        }
                        for (e = this.children.length, i = 0; e > i; i++)
                            if (!this.children[i].equals(t.children[i])) return !1;
                        return !0
                    },
                    guid: 0,
                    compile: function(t, e) {
                        this.sourceNode = [], this.opcodes = [], this.children = [], this.options = e, this.stringParams = e.stringParams, this.trackIds = e.trackIds, e.blockParams = e.blockParams || [];
                        var i = e.knownHelpers;
                        if (e.knownHelpers = {
                                helperMissing: !0,
                                blockHelperMissing: !0,
                                each: !0,
                                "if": !0,
                                unless: !0,
                                "with": !0,
                                log: !0,
                                lookup: !0
                            }, i)
                            for (var n in i) e.knownHelpers[n] = i[n];
                        return this.accept(t)
                    },
                    compileProgram: function(t) {
                        var e = (new this.compiler).compile(t, this.options),
                            i = this.guid++;
                        return this.usePartial = this.usePartial || e.usePartial, this.children[i] = e, this.useDepths = this.useDepths || e.useDepths, i
                    },
                    accept: function(t) {
                        this.sourceNode.unshift(t);
                        var e = this[t.type](t);
                        return this.sourceNode.shift(), e
                    },
                    Program: function(t) {
                        this.options.blockParams.unshift(t.blockParams);
                        for (var e = t.body, i = 0, n = e.length; n > i; i++) this.accept(e[i]);
                        return this.options.blockParams.shift(), this.isSimple = 1 === n, this.blockParams = t.blockParams ? t.blockParams.length : 0, this
                    },
                    BlockStatement: function(t) {
                        o(t);
                        var e = t.program,
                            i = t.inverse;
                        e = e && this.compileProgram(e), i = i && this.compileProgram(i);
                        var n = this.classifySexpr(t);
                        "helper" === n ? this.helperSexpr(t, e, i) : "simple" === n ? (this.simpleSexpr(t), this.opcode("pushProgram", e), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("blockValue", t.path.original)) : (this.ambiguousSexpr(t, e, i), this.opcode("pushProgram", e), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                    },
                    PartialStatement: function(t) {
                        this.usePartial = !0;
                        var e = t.params;
                        if (e.length > 1) throw new h("Unsupported number of partial arguments: " + e.length, t);
                        e.length || e.push({
                            type: "PathExpression",
                            parts: [],
                            depth: 0
                        });
                        var i = t.name.original,
                            n = "SubExpression" === t.name.type;
                        n && this.accept(t.name), this.setupFullMustacheParams(t, void 0, void 0, !0);
                        var s = t.indent || "";
                        this.options.preventIndent && s && (this.opcode("appendContent", s), s = ""), this.opcode("invokePartial", n, i, s), this.opcode("append")
                    },
                    MustacheStatement: function(t) {
                        this.SubExpression(t), t.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                    },
                    ContentStatement: function(t) {
                        t.value && this.opcode("appendContent", t.value)
                    },
                    CommentStatement: function() {},
                    SubExpression: function(t) {
                        o(t);
                        var e = this.classifySexpr(t);
                        "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
                    },
                    ambiguousSexpr: function(t, e, i) {
                        var n = t.path,
                            s = n.parts[0],
                            r = null != e || null != i;
                        this.opcode("getContext", n.depth), this.opcode("pushProgram", e), this.opcode("pushProgram", i), this.accept(n), this.opcode("invokeAmbiguous", s, r)
                    },
                    simpleSexpr: function(t) {
                        this.accept(t.path), this.opcode("resolvePossibleLambda")
                    },
                    helperSexpr: function(t, e, i) {
                        var n = this.setupFullMustacheParams(t, e, i),
                            s = t.path,
                            r = s.parts[0];
                        if (this.options.knownHelpers[r]) this.opcode("invokeKnownHelper", n.length, r);
                        else {
                            if (this.options.knownHelpersOnly) throw new h("You specified knownHelpersOnly, but used the unknown helper " + r, t);
                            s.falsy = !0, this.accept(s), this.opcode("invokeHelper", n.length, s.original, d.helpers.simpleId(s))
                        }
                    },
                    PathExpression: function(t) {
                        this.addDepth(t.depth), this.opcode("getContext", t.depth);
                        var e = t.parts[0],
                            i = d.helpers.scopedId(t),
                            n = !t.depth && !i && this.blockParamIndex(e);
                        n ? this.opcode("lookupBlockParam", n, t.parts) : e ? t.data ? (this.options.data = !0, this.opcode("lookupData", t.depth, t.parts)) : this.opcode("lookupOnContext", t.parts, t.falsy, i) : this.opcode("pushContext")
                    },
                    StringLiteral: function(t) {
                        this.opcode("pushString", t.value)
                    },
                    NumberLiteral: function(t) {
                        this.opcode("pushLiteral", t.value)
                    },
                    BooleanLiteral: function(t) {
                        this.opcode("pushLiteral", t.value)
                    },
                    Hash: function(t) {
                        var e, i, n = t.pairs;
                        for (this.opcode("pushHash"), e = 0, i = n.length; i > e; e++) this.pushParam(n[e].value);
                        for (; e--;) this.opcode("assignToHash", n[e].key);
                        this.opcode("popHash")
                    },
                    opcode: function(t) {
                        this.opcodes.push({
                            opcode: t,
                            args: p.call(arguments, 1),
                            loc: this.sourceNode[0].loc
                        })
                    },
                    addDepth: function(t) {
                        t && (this.useDepths = !0)
                    },
                    classifySexpr: function(t) {
                        var e = d.helpers.simpleId(t.path),
                            i = e && !!this.blockParamIndex(t.path.parts[0]),
                            n = !i && d.helpers.helperExpression(t),
                            s = !i && (n || e),
                            r = this.options;
                        if (s && !n) {
                            var a = t.path.parts[0];
                            r.knownHelpers[a] ? n = !0 : r.knownHelpersOnly && (s = !1)
                        }
                        return n ? "helper" : s ? "ambiguous" : "simple"
                    },
                    pushParams: function(t) {
                        for (var e = 0, i = t.length; i > e; e++) this.pushParam(t[e])
                    },
                    pushParam: function(t) {
                        var e = null != t.value ? t.value : t.original || "";
                        if (this.stringParams) e.replace && (e = e.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", e, t.type), "SubExpression" === t.type && this.accept(t);
                        else {
                            if (this.trackIds) {
                                var i;
                                if (!t.parts || d.helpers.scopedId(t) || t.depth || (i = this.blockParamIndex(t.parts[0])), i) {
                                    var n = t.parts.slice(1).join(".");
                                    this.opcode("pushId", "BlockParam", i, n)
                                } else e = t.original || e, e.replace && (e = e.replace(/^\.\//g, "").replace(/^\.$/g, "")), this.opcode("pushId", t.type, e)
                            }
                            this.accept(t)
                        }
                    },
                    setupFullMustacheParams: function(t, e, i, n) {
                        var s = t.params;
                        return this.pushParams(s), this.opcode("pushProgram", e), this.opcode("pushProgram", i), t.hash ? this.accept(t.hash) : this.opcode("emptyHash", n), s
                    },
                    blockParamIndex: function(t) {
                        for (var e = 0, i = this.options.blockParams.length; i > e; e++) {
                            var n = this.options.blockParams[e],
                                s = n && u(n, t);
                            if (n && s >= 0) return [e, s]
                        }
                    }
                }, l.precompile = s, l.compile = r, l
            }(e, t, a),
            p = function(t) {
                "use strict";

                function e(t, e, i) {
                    if (s(t)) {
                        for (var n = [], r = 0, a = t.length; a > r; r++) n.push(e.wrap(t[r], i));
                        return n
                    }
                    return "boolean" == typeof t || "number" == typeof t ? t + "" : t
                }

                function i(t) {
                    this.srcFile = t, this.source = []
                }
                var n, s = t.isArray;
                try {
                    var r = require("source-map"),
                        a = r.SourceNode
                } catch (o) {
                    a = function(t, e, i, n) {
                        this.src = "", n && this.add(n)
                    }, a.prototype = {
                        add: function(t) {
                            s(t) && (t = t.join("")), this.src += t
                        },
                        prepend: function(t) {
                            s(t) && (t = t.join("")), this.src = t + this.src
                        },
                        toStringWithSourceMap: function() {
                            return {
                                code: this.toString()
                            }
                        },
                        toString: function() {
                            return this.src
                        }
                    }
                }
                return i.prototype = {
                    prepend: function(t, e) {
                        this.source.unshift(this.wrap(t, e))
                    },
                    push: function(t, e) {
                        this.source.push(this.wrap(t, e))
                    },
                    merge: function() {
                        var t = this.empty();
                        return this.each(function(e) {
                            t.add(["  ", e, "\n"])
                        }), t
                    },
                    each: function(t) {
                        for (var e = 0, i = this.source.length; i > e; e++) t(this.source[e])
                    },
                    empty: function(t) {
                        return t = t || this.currentLocation || {
                            start: {}
                        }, new a(t.start.line, t.start.column, this.srcFile)
                    },
                    wrap: function(t, i) {
                        return t instanceof a ? t : (i = i || this.currentLocation || {
                            start: {}
                        }, t = e(t, this, i), new a(i.start.line, i.start.column, this.srcFile, t))
                    },
                    functionCall: function(t, e, i) {
                        return i = this.generateList(i), this.wrap([t, e ? "." + e + "(" : "(", i, ")"])
                    },
                    quotedString: function(t) {
                        return '"' + (t + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                    },
                    objectLiteral: function(t) {
                        var i = [];
                        for (var n in t)
                            if (t.hasOwnProperty(n)) {
                                var s = e(t[n], this);
                                "undefined" !== s && i.push([this.quotedString(n), ":", s])
                            }
                        var r = this.generateList(i);
                        return r.prepend("{"), r.add("}"), r
                    },
                    generateList: function(t, i) {
                        for (var n = this.empty(i), s = 0, r = t.length; r > s; s++) s && n.add(","), n.add(e(t[s], this, i));
                        return n
                    },
                    generateArray: function(t, e) {
                        var i = this.generateList(t, e);
                        return i.prepend("["), i.add("]"), i
                    }
                }, n = i
            }(t),
            f = function(t, e, i, n) {
                "use strict";

                function s(t) {
                    this.value = t
                }

                function r() {}

                function a(t, e, i, n) {
                    var s = e.popStack(),
                        r = 0,
                        a = i.length;
                    for (t && a--; a > r; r++) s = e.nameLookup(s, i[r], n);
                    return t ? [e.aliasable("this.strict"), "(", s, ", ", e.quotedString(i[r]), ")"] : s
                }
                var o, l = t.COMPILER_REVISION,
                    h = t.REVISION_CHANGES,
                    c = e,
                    u = i.isArray,
                    d = n;
                r.prototype = {
                    nameLookup: function(t, e) {
                        return r.isValidJavaScriptVariableName(e) ? [t, ".", e] : [t, "['", e, "']"]
                    },
                    depthedLookup: function(t) {
                        return [this.aliasable("this.lookup"), '(depths, "', t, '")']
                    },
                    compilerInfo: function() {
                        var t = l,
                            e = h[t];
                        return [t, e]
                    },
                    appendToBuffer: function(t, e, i) {
                        return u(t) || (t = [t]), t = this.source.wrap(t, e), this.environment.isSimple ? ["return ", t, ";"] : i ? ["buffer += ", t, ";"] : (t.appendToBuffer = !0, t)
                    },
                    initializeBuffer: function() {
                        return this.quotedString("")
                    },
                    compile: function(t, e, i, n) {
                        this.environment = t, this.options = e, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !n, this.name = this.environment.name, this.isChild = !!i, this.context = i || {
                            programs: [],
                            environments: []
                        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                            list: []
                        }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(t, e), this.useDepths = this.useDepths || t.useDepths || this.options.compat, this.useBlockParams = this.useBlockParams || t.useBlockParams;
                        var s, r, a, o, l = t.opcodes;
                        for (a = 0, o = l.length; o > a; a++) s = l[a], this.source.currentLocation = s.loc, r = r || s.loc, this[s.opcode].apply(this, s.args);
                        if (this.source.currentLocation = r, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new c("Compile completed with content left on stack");
                        var h = this.createFunctionContext(n);
                        if (this.isChild) return h;
                        var u = {
                                compiler: this.compilerInfo(),
                                main: h
                            },
                            d = this.context.programs;
                        for (a = 0, o = d.length; o > a; a++) d[a] && (u[a] = d[a]);
                        return this.environment.usePartial && (u.usePartial = !0), this.options.data && (u.useData = !0), this.useDepths && (u.useDepths = !0), this.useBlockParams && (u.useBlockParams = !0), this.options.compat && (u.compat = !0), n ? u.compilerOptions = this.options : (u.compiler = JSON.stringify(u.compiler), this.source.currentLocation = {
                            start: {
                                line: 1,
                                column: 0
                            }
                        }, u = this.objectLiteral(u), e.srcName ? (u = u.toStringWithSourceMap({
                            file: e.destName
                        }), u.map = u.map && u.map.toString()) : u = u.toString()), u
                    },
                    preamble: function() {
                        this.lastContext = 0, this.source = new d(this.options.srcName)
                    },
                    createFunctionContext: function(t) {
                        var e = "",
                            i = this.stackVars.concat(this.registers.list);
                        i.length > 0 && (e += ", " + i.join(", "));
                        var n = 0;
                        for (var s in this.aliases) {
                            var r = this.aliases[s];
                            this.aliases.hasOwnProperty(s) && r.children && r.referenceCount > 1 && (e += ", alias" + ++n + "=" + s, r.children[0] = "alias" + n)
                        }
                        var a = ["depth0", "helpers", "partials", "data"];
                        (this.useBlockParams || this.useDepths) && a.push("blockParams"), this.useDepths && a.push("depths");
                        var o = this.mergeSource(e);
                        return t ? (a.push(o), Function.apply(this, a)) : this.source.wrap(["function(", a.join(","), ") {\n  ", o, "}"])
                    },
                    mergeSource: function(t) {
                        var e, i, n, s, r = this.environment.isSimple,
                            a = !this.forceBuffer;
                        return this.source.each(function(t) {
                            t.appendToBuffer ? (n ? t.prepend("  + ") : n = t, s = t) : (n && (i ? n.prepend("buffer += ") : e = !0, s.add(";"), n = s = void 0), i = !0, r || (a = !1))
                        }), a ? n ? (n.prepend("return "), s.add(";")) : i || this.source.push('return "";') : (t += ", buffer = " + (e ? "" : this.initializeBuffer()), n ? (n.prepend("return buffer + "), s.add(";")) : this.source.push("return buffer;")), t && this.source.prepend("var " + t.substring(2) + (e ? "" : ";\n")), this.source.merge()
                    },
                    blockValue: function(t) {
                        var e = this.aliasable("helpers.blockHelperMissing"),
                            i = [this.contextName(0)];
                        this.setupHelperArgs(t, 0, i);
                        var n = this.popStack();
                        i.splice(1, 0, n), this.push(this.source.functionCall(e, "call", i))
                    },
                    ambiguousBlockValue: function() {
                        var t = this.aliasable("helpers.blockHelperMissing"),
                            e = [this.contextName(0)];
                        this.setupHelperArgs("", 0, e, !0), this.flushInline();
                        var i = this.topStack();
                        e.splice(1, 0, i), this.pushSource(["if (!", this.lastHelper, ") { ", i, " = ", this.source.functionCall(t, "call", e), "}"])
                    },
                    appendContent: function(t) {
                        this.pendingContent ? t = this.pendingContent + t : this.pendingLocation = this.source.currentLocation, this.pendingContent = t
                    },
                    append: function() {
                        if (this.isInline()) this.replaceStack(function(t) {
                            return [" != null ? ", t, ' : ""']
                        }), this.pushSource(this.appendToBuffer(this.popStack()));
                        else {
                            var t = this.popStack();
                            this.pushSource(["if (", t, " != null) { ", this.appendToBuffer(t, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                        }
                    },
                    appendEscaped: function() {
                        this.pushSource(this.appendToBuffer([this.aliasable("this.escapeExpression"), "(", this.popStack(), ")"]))
                    },
                    getContext: function(t) {
                        this.lastContext = t
                    },
                    pushContext: function() {
                        this.pushStackLiteral(this.contextName(this.lastContext))
                    },
                    lookupOnContext: function(t, e, i) {
                        var n = 0;
                        i || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[n++])), this.resolvePath("context", t, n, e)
                    },
                    lookupBlockParam: function(t, e) {
                        this.useBlockParams = !0, this.push(["blockParams[", t[0], "][", t[1], "]"]), this.resolvePath("context", e, 1)
                    },
                    lookupData: function(t, e) {
                        t ? this.pushStackLiteral("this.data(data, " + t + ")") : this.pushStackLiteral("data"), this.resolvePath("data", e, 0, !0)
                    },
                    resolvePath: function(t, e, i, n) {
                        if (this.options.strict || this.options.assumeObjects) return void this.push(a(this.options.strict, this, e, t));
                        for (var s = e.length; s > i; i++) this.replaceStack(function(s) {
                            var r = this.nameLookup(s, e[i], t);
                            return n ? [" && ", r] : [" != null ? ", r, " : ", s]
                        })
                    },
                    resolvePossibleLambda: function() {
                        this.push([this.aliasable("this.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                    },
                    pushStringParam: function(t, e) {
                        this.pushContext(), this.pushString(e), "SubExpression" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
                    },
                    emptyHash: function(t) {
                        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(t ? "undefined" : "{}")
                    },
                    pushHash: function() {
                        this.hash && this.hashes.push(this.hash), this.hash = {
                            values: [],
                            types: [],
                            contexts: [],
                            ids: []
                        }
                    },
                    popHash: function() {
                        var t = this.hash;
                        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(t.ids)), this.stringParams && (this.push(this.objectLiteral(t.contexts)), this.push(this.objectLiteral(t.types))), this.push(this.objectLiteral(t.values))
                    },
                    pushString: function(t) {
                        this.pushStackLiteral(this.quotedString(t))
                    },
                    pushLiteral: function(t) {
                        this.pushStackLiteral(t)
                    },
                    pushProgram: function(t) {
                        null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
                    },
                    invokeHelper: function(t, e, i) {
                        var n = this.popStack(),
                            s = this.setupHelper(t, e),
                            r = i ? [s.name, " || "] : "",
                            a = ["("].concat(r, n);
                        this.options.strict || a.push(" || ", this.aliasable("helpers.helperMissing")), a.push(")"), this.push(this.source.functionCall(a, "call", s.callParams))
                    },
                    invokeKnownHelper: function(t, e) {
                        var i = this.setupHelper(t, e);
                        this.push(this.source.functionCall(i.name, "call", i.callParams))
                    },
                    invokeAmbiguous: function(t, e) {
                        this.useRegister("helper");
                        var i = this.popStack();
                        this.emptyHash();
                        var n = this.setupHelper(0, t, e),
                            s = this.lastHelper = this.nameLookup("helpers", t, "helper"),
                            r = ["(", "(helper = ", s, " || ", i, ")"];
                        this.options.strict || (r[0] = "(helper = ", r.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", r, n.paramsInit ? ["),(", n.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", n.callParams), " : helper))"])
                    },
                    invokePartial: function(t, e, i) {
                        var n = [],
                            s = this.setupParams(e, 1, n, !1);
                        t && (e = this.popStack(), delete s.name), i && (s.indent = JSON.stringify(i)), s.helpers = "helpers", s.partials = "partials", t ? n.unshift(e) : n.unshift(this.nameLookup("partials", e, "partial")), this.options.compat && (s.depths = "depths"), s = this.objectLiteral(s), n.push(s), this.push(this.source.functionCall("this.invokePartial", "", n))
                    },
                    assignToHash: function(t) {
                        var e, i, n, s = this.popStack();
                        this.trackIds && (n = this.popStack()), this.stringParams && (i = this.popStack(), e = this.popStack());
                        var r = this.hash;
                        e && (r.contexts[t] = e), i && (r.types[t] = i), n && (r.ids[t] = n), r.values[t] = s
                    },
                    pushId: function(t, e, i) {
                        "BlockParam" === t ? this.pushStackLiteral("blockParams[" + e[0] + "].path[" + e[1] + "]" + (i ? " + " + JSON.stringify("." + i) : "")) : "PathExpression" === t ? this.pushString(e) : "SubExpression" === t ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                    },
                    compiler: r,
                    compileChildren: function(t, e) {
                        for (var i, n, s = t.children, r = 0, a = s.length; a > r; r++) {
                            i = s[r], n = new this.compiler;
                            var o = this.matchExistingProgram(i);
                            null == o ? (this.context.programs.push(""), o = this.context.programs.length, i.index = o, i.name = "program" + o, this.context.programs[o] = n.compile(i, e, this.context, !this.precompile), this.context.environments[o] = i, this.useDepths = this.useDepths || n.useDepths, this.useBlockParams = this.useBlockParams || n.useBlockParams) : (i.index = o, i.name = "program" + o, this.useDepths = this.useDepths || i.useDepths, this.useBlockParams = this.useBlockParams || i.useBlockParams)
                        }
                    },
                    matchExistingProgram: function(t) {
                        for (var e = 0, i = this.context.environments.length; i > e; e++) {
                            var n = this.context.environments[e];
                            if (n && n.equals(t)) return e
                        }
                    },
                    programExpression: function(t) {
                        var e = this.environment.children[t],
                            i = [e.index, "data", e.blockParams];
                        return (this.useBlockParams || this.useDepths) && i.push("blockParams"), this.useDepths && i.push("depths"), "this.program(" + i.join(", ") + ")"
                    },
                    useRegister: function(t) {
                        this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t))
                    },
                    push: function(t) {
                        return t instanceof s || (t = this.source.wrap(t)), this.inlineStack.push(t), t
                    },
                    pushStackLiteral: function(t) {
                        this.push(new s(t))
                    },
                    pushSource: function(t) {
                        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), t && this.source.push(t)
                    },
                    replaceStack: function(t) {
                        var e, i, n, r = ["("];
                        if (!this.isInline()) throw new c("replaceStack on non-inline");
                        var a = this.popStack(!0);
                        if (a instanceof s) e = [a.value], r = ["(", e], n = !0;
                        else {
                            i = !0;
                            var o = this.incrStack();
                            r = ["((", this.push(o), " = ", a, ")"], e = this.topStack()
                        }
                        var l = t.call(this, e);
                        n || this.popStack(), i && this.stackSlot--, this.push(r.concat(l, ")"))
                    },
                    incrStack: function() {
                        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                    },
                    topStackName: function() {
                        return "stack" + this.stackSlot
                    },
                    flushInline: function() {
                        var t = this.inlineStack;
                        this.inlineStack = [];
                        for (var e = 0, i = t.length; i > e; e++) {
                            var n = t[e];
                            if (n instanceof s) this.compileStack.push(n);
                            else {
                                var r = this.incrStack();
                                this.pushSource([r, " = ", n, ";"]), this.compileStack.push(r)
                            }
                        }
                    },
                    isInline: function() {
                        return this.inlineStack.length
                    },
                    popStack: function(t) {
                        var e = this.isInline(),
                            i = (e ? this.inlineStack : this.compileStack).pop();
                        if (!t && i instanceof s) return i.value;
                        if (!e) {
                            if (!this.stackSlot) throw new c("Invalid stack pop");
                            this.stackSlot--
                        }
                        return i
                    },
                    topStack: function() {
                        var t = this.isInline() ? this.inlineStack : this.compileStack,
                            e = t[t.length - 1];
                        return e instanceof s ? e.value : e
                    },
                    contextName: function(t) {
                        return this.useDepths && t ? "depths[" + t + "]" : "depth" + t
                    },
                    quotedString: function(t) {
                        return this.source.quotedString(t)
                    },
                    objectLiteral: function(t) {
                        return this.source.objectLiteral(t)
                    },
                    aliasable: function(t) {
                        var e = this.aliases[t];
                        return e ? (e.referenceCount++, e) : (e = this.aliases[t] = this.source.wrap(t), e.aliasable = !0, e.referenceCount = 1, e)
                    },
                    setupHelper: function(t, e, i) {
                        var n = [],
                            s = this.setupHelperArgs(e, t, n, i),
                            r = this.nameLookup("helpers", e, "helper");
                        return {
                            params: n,
                            paramsInit: s,
                            name: r,
                            callParams: [this.contextName(0)].concat(n)
                        }
                    },
                    setupParams: function(t, e, i) {
                        var n, s = {},
                            r = [],
                            a = [],
                            o = [];
                        s.name = this.quotedString(t), s.hash = this.popStack(), this.trackIds && (s.hashIds = this.popStack()), this.stringParams && (s.hashTypes = this.popStack(), s.hashContexts = this.popStack());
                        var l = this.popStack(),
                            h = this.popStack();
                        (h || l) && (s.fn = h || "this.noop", s.inverse = l || "this.noop");
                        for (var c = e; c--;) n = this.popStack(), i[c] = n, this.trackIds && (o[c] = this.popStack()), this.stringParams && (a[c] = this.popStack(), r[c] = this.popStack());
                        return this.trackIds && (s.ids = this.source.generateArray(o)), this.stringParams && (s.types = this.source.generateArray(a), s.contexts = this.source.generateArray(r)), this.options.data && (s.data = "data"), this.useBlockParams && (s.blockParams = "blockParams"), s
                    },
                    setupHelperArgs: function(t, e, i, n) {
                        var s = this.setupParams(t, e, i, !0);
                        return s = this.objectLiteral(s), n ? (this.useRegister("options"), i.push("options"), ["options=", s]) : (i.push(s), "")
                    }
                };
                for (var p = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), f = r.RESERVED_WORDS = {}, g = 0, m = p.length; m > g; g++) f[p[g]] = !0;
                return r.isValidJavaScriptVariableName = function(t) {
                    return !r.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
                }, o = r
            }(i, e, t, p),
            g = function(t, e, i, n, s) {
                "use strict";
                var r, a = t,
                    o = e,
                    l = i.parser,
                    h = i.parse,
                    c = n.Compiler,
                    u = n.compile,
                    d = n.precompile,
                    p = s,
                    f = a.create,
                    g = function() {
                        var t = f();
                        return t.compile = function(e, i) {
                            return u(e, i, t)
                        }, t.precompile = function(e, i) {
                            return d(e, i, t)
                        }, t.AST = o, t.Compiler = c, t.JavaScriptCompiler = p, t.Parser = l, t.parse = h, t
                    };
                a = g(), a.create = g;
                var m = "undefined" != typeof global ? global : window,
                    v = m.Handlebars;
                return a.noConflict = function() {
                    m.Handlebars === a && (m.Handlebars = v)
                }, a["default"] = a, r = a
            }(r, a, u, d, f);
        return g
    }), eval(function(t, e, i, n, s, r) {
        if (s = function(t) {
                return (e > t ? "" : s(parseInt(t / e))) + ((t %= e) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
            }, !"".replace(/^/, String)) {
            for (; i--;) r[s(i)] = n[i] || s(i);
            n = [function(t) {
                return r[t]
            }], s = function() {
                return "\\w+"
            }, i = 1
        }
        for (; i--;) n[i] && (t = t.replace(new RegExp("\\b" + s(i) + "\\b", "g"), n[i]));
        return t
    }("9 17={3i:'0.1.3',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8'['+7.4.2K(', ')+']'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K('\\n')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!='1f'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)=='1f'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)=='1f'&&1g(a.W)=='1f'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)=='1f'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;", 62, 206, "||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ".split("|"), 0, {})), define("sylvester", function(t) {
        return function() {
            var e;
            return e || t.$M
        }
    }(this)), define("util/resn/animation", ["jquery", "sylvester"], function(t, e) {
        "use strict";
        var i = {
            DEG_2_RAD: Math.PI / 180,
            getRotationXMatrix: function(t) {
                return e([
                    [1, 0, 0, 0],
                    [0, Math.cos(t * this.DEG_2_RAD), Math.sin(-t * this.DEG_2_RAD), 0],
                    [0, Math.sin(t * this.DEG_2_RAD), Math.cos(t * this.DEG_2_RAD), 0],
                    [0, 0, 0, 1]
                ])
            },
            getRotationYMatrix: function(t) {
                return e([
                    [Math.cos(t * this.DEG_2_RAD), 0, Math.sin(t * this.DEG_2_RAD), 0],
                    [0, 1, 0, 0],
                    [Math.sin(-t * this.DEG_2_RAD), 0, Math.cos(t * this.DEG_2_RAD), 0],
                    [0, 0, 0, 1]
                ])
            },
            getRotationZMatrix: function(t) {
                return e([
                    [Math.cos(t * this.DEG_2_RAD), Math.sin(-t * this.DEG_2_RAD), 0, 0],
                    [Math.sin(t * this.DEG_2_RAD), Math.cos(t * this.DEG_2_RAD), 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 1]
                ])
            },
            getScaleMatrix: function(t, i, n) {
                var s = t ? t : 1,
                    r = i ? i : 1,
                    a = n ? n : 1;
                return e([
                    [s, 0, 0, 0],
                    [0, r, 0, 0],
                    [0, 0, a, 0],
                    [0, 0, 0, 1]
                ])
            },
            getTransformationMatrix: function(t, i, n) {
                var s = t ? t : 0,
                    r = i ? i : 0,
                    a = n ? n : 0;
                return e([
                    [1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 1, 0],
                    [s, r, a, 1]
                ])
            },
            getResultMatrix: function(t) {
                if (1 === t.length) return t[0];
                for (var i = e([
                        [1, 0, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 1, 0],
                        [0, 0, 0, 1]
                    ]), n = 0; n < t.length; n++) {
                    var s = t[n];
                    i = s.x(i)
                }
                return i
            },
            getStringTransform3d: function(t) {
                var e = "matrix3d(";
                return e += t.e(1, 1).toFixed(5) + "," + t.e(1, 2).toFixed(5) + "," + t.e(1, 3) + "," + t.e(1, 4).toFixed(5) + ",", e += t.e(2, 1).toFixed(5) + "," + t.e(2, 2).toFixed(5) + "," + t.e(2, 3) + "," + t.e(2, 4).toFixed(5) + ",", e += t.e(3, 1).toFixed(5) + "," + t.e(3, 2).toFixed(5) + "," + t.e(3, 3) + "," + t.e(3, 4).toFixed(5) + ",", e += t.e(4, 1).toFixed(5) + "," + t.e(4, 2).toFixed(5) + "," + t.e(4, 3) + "," + t.e(4, 4).toFixed(5), e += ")"
            },
            getStringTranslate2d: function(t, e) {
                var i = "translate(";
                return i += t + "px,", i += e + "px)"
            },
            getStringScale2d: function(t, e) {
                var i = "scale(";
                return i += t + ",", i += e + ")"
            },
            getObjectTopLeft: function(t, e) {
                var i = {
                    left: t + "px",
                    top: e + "px"
                };
                return i
            }
        };
        return i
    }), define("view/common/base_view", ["jquery", "underscore", "config", "backbone", "handlebars", "util/resn/animation"], function(t, e, i, n, s, r) {
        "use strict";
        return n.View.extend({
            initialize: function(t) {},
            show: function() {},
            render: function() {},
            hide: function() {
                this.onHideComplete()
            },
            onHideComplete: function() {
                this.destroy()
            },
            onResize: function(t) {},
            compileAndAppendTemplate: function(e, i) {
                var n = i || {};
                this.$node = t(e(n)), this.$el.append(this.$node)
            },
            destroy: function() {
                this.stopListening(), this.off(), this.remove()
            },
            setOriginTransform: function(t, e, i) {
                var n = i || this.$el;
                n[0] && (n[0].style.webkitTransformOrigin = t + " " + e, n[0].style.MozTransformOrigin = t + " " + e, n[0].style.msTransformOrigin = t + " " + e, n[0].style.OTransformOrigin = t + " " + e, n[0].style.transformOrigin = t + " " + e)
            },
            setOpacity: function(t, e) {
                var i = e || this.$el;
                i.css({
                    "-webkit-filter": "opacity(" + t + ")",
                    opacity: t
                })
            },
            setPosition: function(t, e, n) {
                var s, a = n || this.$el;
                if (i.csstransforms3d) {
                    var o = r.getTransformationMatrix(t, e, 0);
                    s = r.getStringTransform3d(o)
                } else s = r.getStringTranslate2d(t, e);
                this.applyCss(a, s)
            },
            setScale: function(t, e, n) {
                var s, a = n || this.$el;
                if (i.csstransforms3d) {
                    var o = r.getScaleMatrix(t, e, 1);
                    s = r.getStringTransform3d(o)
                } else s = r.getStringTranslate2d(t, e);
                this.applyCss(a, s)
            },
            applyCss: function(t, e) {
                t[0] && (t[0].style.webkitTransform = e, t[0].style.MozTransform = e, t[0].style.msTransform = e, t[0].style.OTransform = e, t[0].style.transform = e)
            }
        })
    }), define("route/route_object", ["jquery", "underscore"], function(t, e) {
        "use strict";
        var i = function(t, i, n, s) {
            e.isArray(t) || (t = [t]), this.fragments = t, this.id = i, this.toURL = n || function() {}, this.fromURL = s || function() {}, this.getFragment = function() {
                return t[0]
            }
        };
        return i
    }), define("util/youtube", ["underscore", "jquery"], function(t, e) {
        "use strict";
        var i = {
            ready: !1,
            YT: null,
            cue: [],
            onReady: function() {
                this.YT = window.YT, this.ready = !0, t.each(this.cue, this.parse, this)
            },
            parse: function(t, i, n) {
                if (this.ready) {
                    var s = e(t),
                        r = s.attr("id");
                    return new this.YT.Player(r, {
                        playerVars: {
                            autoplay: 0,
                            rel: 0,
                            autohide: 0,
                            modestbranding: 1,
                            showinfo: 0,
                            enablejsapi: 1,
                            controls: 0
                        },
                        events: {
                            onStateChange: n
                        }
                    })
                }
                this.cue.push(t)
            }
        };
        return window.onYouTubeIframeAPIReady = t.bind(i.onReady, i), require(["//www.youtube.com/iframe_api"]), i
    }), define("util/anim_frame", ["config", "underscore", "backbone"], function(t, e, i) {
        "use strict";
        ! function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                var n = (new Date).getTime(),
                    s = Math.max(0, 16 - (n - t)),
                    r = window.setTimeout(function() {
                        e(n + s)
                    }, s);
                return t = n + s, r
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }();
        var n = {};
        n.onAnimRequestFrame = function() {
            this.trigger("anim_frame"), window.requestAnimationFrame(s)
        };
        var s = e.bind(n.onAnimRequestFrame, n);
        return e.extend(n, i.Events), n.onAnimRequestFrame(), n
    }), define("view/modules/preloader/canvas_loader", ["jquery", "underscore", "view/common/base_view", "config", "TweenMax", "route/router", "model/app_model", "util/anim_frame"], function(t, e, i, n, s, r, a, o) {
        "use strict";
        return i.extend({
            canvas: null,
            context: null,
            $window: null,
            $loader_text: null,
            canvasWidth: 0,
            canvasHeight: 0,
            ratio: 1,
            progress: 0,
            targetProgress: 0,
            progressBg: 0,
            progRt: 0,
            tgRad: 0,
            tgAlpha: 0,
            tgWidth: 1.5,
            radius: 0,
            rd: 0,
            deltaRadius: 0,
            overProgress: 0,
            doteAlpha: .5,
            scale: 1,
            isLoadComplete: !1,
            initialize: function(i) {
                e.bindAll(this, "loadComplete"), this.$loader_text = i.$loader_text, this.$window = t(window), this.createCanvas(), this.addEvents()
            },
            createCanvas: function() {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.$el.append(this.canvas), this.show()
            },
            show: function() {
                s.to(this, 2, {
                    progressBg: .9999,
                    ease: "Expo.easeInOut"
                }), s.to(this, 3, {
                    tgAlpha: 1,
                    ease: "Sine.easeInOut"
                })
            },
            loadComplete: function() {
                this.trigger("loader:complete")
            },
            animateOut: function() {
                this.tgWidth = 1.5, s.to(this, 2, {
                    progress: 0,
                    tgAlpha: 0,
                    ease: "Expo.easeInOut"
                })
            },
            addEvents: function() {
                o.on("anim_frame", this.onAnimFrame, this)
            },
            removeEvents: function() {
                o.off("anim_frame", this.onAnimFrame, this)
            },
            setProgress: function(t) {
                this.isLoadComplete || (this.targetProgress = t)
            },
            onOver: function() {
                s.to(this, .6, {
                    deltaRadius: -40,
                    doteAlpha: 1,
                    ease: "Expo.easeOut"
                })
            },
            onOut: function() {
                s.to(this, .6, {
                    deltaRadius: 0,
                    doteAlpha: .5,
                    ease: "Expo.easeOut"
                })
            },
            setToStart: function() {
                if (a.get("page") === a.PAGES.DETAILS) s.to(this, 1, {
                    rd: 1500 * this.scale,
                    delay: .5,
                    ease: "Expo.easeInOut"
                }), s.to(this, 1, {
                    deltaRadius: 0,
                    doteAlpha: .5,
                    delay: .5,
                    ease: "Expo.easeInOut"
                }), s.set(this, {
                    doteAlpha: 0,
                    delay: 1.5
                });
                else {
                    var t = a.get("page") === a.PAGES.TREE ? 50 : 8;
                    s.to(this, 1, {
                        rd: t * this.scale,
                        delay: .5,
                        ease: "Expo.easeInOut"
                    }), s.to(this, 1, {
                        deltaRadius: 0,
                        doteAlpha: .5,
                        delay: .5,
                        ease: "Expo.easeInOut"
                    }), s.set(this, {
                        doteAlpha: 0,
                        delay: 1.5
                    })
                }
            },
            setToStartMobile: function() {
                s.to(this, 1, {
                    rd: 0 * this.scale,
                    delay: .5,
                    ease: "Expo.easeInOut"
                }), s.to(this, 1, {
                    deltaRadius: 0,
                    doteAlpha: .5,
                    delay: .5,
                    ease: "Expo.easeInOut"
                }), s.set(this, {
                    doteAlpha: 0,
                    delay: 1.5
                })
            },
            onAnimFrame: function() {
                this.isLoadComplete || (this.progress += .05 * (this.targetProgress - this.progress), this.tgWidth += .2 * (1.5 - this.tgWidth), this.rd += .1 * (this.tgRad - this.rd)), this.$loader_text.text(parseInt(100 * this.progress + 1, 10) + "% LOADED"), this.progress >= .999 && this.isLoadComplete === !1 && (this.isLoadComplete = !0, this.loadComplete()), this.context.save(), this.context.globalAlpha = this.doteAlpha, this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.beginPath(), this.context.translate(this.canvas.width / 2, this.canvas.height / 2), this.context.rotate(this.progressBg * Math.PI * 1 + this.overProgress), this.context.arc(0, 0, this.rd + this.deltaRadius, 0, 2 * this.progressBg * Math.PI, !1), this.context.lineWidth = 1 * this.ratio, (!n.IE_VERSION || n.IE_VERSION >= 11) && this.context.setLineDash([2 * this.ratio, 4 * this.ratio]), this.context.strokeStyle = "#FFF", this.context.stroke(), this.context.restore(), this.context.save(), this.context.beginPath(), this.context.globalAlpha = 1, this.context.translate(this.canvas.width / 2, this.canvas.height / 2), this.context.rotate(1 * Math.PI * this.progress), this.context.arc(0, 0, this.rd + this.deltaRadius, 0, 2 * this.progress * Math.PI, !1), this.context.lineWidth = this.tgWidth * this.ratio, this.context.strokeStyle = "#FFF", this.context.stroke(), this.context.restore()
            },
            destroy: function() {
                this.removeEvents()
            },
            onResize: function(e) {
                if (this.canvas) {
                    this.ratio = 1, (!n.IE_VERSION || n.IE_VERSION >= 11) && (this.ratio = window.devicePixelRatio), this.canvasWidth = this.$window.width(), this.canvasHeight = this.$window.height(), this.canvas.width = this.canvasWidth * this.ratio, this.canvas.height = this.canvasHeight * this.ratio;
                    var i = n.MOBILE ? -100 : 100;
                    this.tgRad = this.canvasHeight / 2 * this.ratio + i, this.rd = this.tgRad, this.scale = Math.min(this.canvasHeight / 1050, 1), t(this.canvas).css({
                        width: this.canvasWidth,
                        height: this.canvasHeight
                    })
                }
            }
        })
    }), define("view/loader_mobile_view", ["jquery", "underscore", "TweenMax", "config", "route/router", "model/app_model", "model/loader_collection", "view/common/base_view", "view/modules/preloader/canvas_loader", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h) {
        "use strict";
        return a.add({
            src: n.CDN + "/img/mobile/mountains.jpg",
            group: "main"
        }), o.extend({
            canvasLoader: null,
            $bg: null,
            $canvasHolder: null,
            $loaderTextProgress: null,
            $containerStep1: null,
            $containerStep2: null,
            $textSummary: null,
            $startBtn: null,
            $titleText: null,
            $divider: null,
            initialize: function() {
                e.bindAll(this, "onTapStart", "swapText", "onCompleteLoader", "onForceTapStart", "destroy"), this.onCompleteLoader = e.after(2, this.onCompleteLoader), h.page("preloader")
            },
            setDefault: function() {
                i.set(this.$textStep1A, {
                    y: 50,
                    opacity: 0
                }), i.set(this.$textStep1B, {
                    y: 50,
                    opacity: 0
                }), i.set(this.$titleText, {
                    y: 25,
                    opacity: 0
                }), i.set(this.$textSummary, {
                    y: -25,
                    opacity: 0
                }), i.set(this.$startBtn, {
                    y: -25,
                    opacity: 0
                }), i.set(this.$divider, {
                    scaleX: 0
                })
            },
            show: function() {
                this.render(), this.canvasLoader = new l({
                    el: this.$canvasHolder,
                    $loader_text: this.$loaderTextProgress
                }), this.canvasLoader.on("loader:complete", this.onCompleteLoader, this), a.on("progress", this.onLoadProgress, this), this.onResize(), this.setDefault(), this.animateStepOne()
            },
            hide: function() {
                this.destroy()
            },
            animateStepOne: function() {
                i.to(this.$textStep1A, .82, {
                    y: 0,
                    force3D: !0,
                    opacity: 1,
                    delay: 1,
                    ease: "Expo.easeOut"
                }), e.delay(this.swapText, 2e3)
            },
            swapText: function() {
                i.killTweensOf(this.$textStep1A), i.to(this.$textStep1A, 1, {
                    y: -50,
                    force3D: !0,
                    opacity: 0,
                    ease: "Expo.easeIn"
                }), i.killTweensOf(this.$textStep1B), i.to(this.$textStep1B, 1, {
                    y: 0,
                    force3D: !0,
                    opacity: 1,
                    delay: 1,
                    ease: "Expo.easeOut"
                }), e.delay(this.onCompleteLoader, 2400)
            },
            animateStepTwo: function() {
                this.$containerStep2.css({
                    visibility: "visible",
                    "pointer-events": "auto"
                }), i.to(this.$containerStep1, 1, {
                    y: -25,
                    force3D: !0,
                    autoAlpha: 0,
                    ease: "Expo.easeIn"
                }), i.to(this.$loaderTextProgress, 1, {
                    autoAlpha: 0,
                    ease: "Expo.easeIn"
                }), i.to(this.$titleText, 1, {
                    y: 0,
                    force3D: !0,
                    opacity: 1,
                    delay: 1,
                    ease: "Expo.easeOut"
                }), i.to(this.$textSummary, 1, {
                    y: 0,
                    force3D: !0,
                    opacity: 1,
                    delay: 1,
                    ease: "Expo.easeOut"
                }), i.to(this.$divider, 1, {
                    scaleX: 1,
                    force3D: !0,
                    opacity: 1,
                    delay: 1,
                    ease: "Expo.easeOut"
                })
            },
            animateStepLeave: function() {
                i.to(this.$bg, 1, {
                    opacity: 0,
                    force3D: !0,
                    ease: "Expo.easeIn"
                }), i.to(this.$titleText, 1, {
                    y: 25,
                    force3D: !0,
                    opacity: 0,
                    ease: "Expo.easeIn"
                }), i.to(this.$textSummary, 1, {
                    y: -25,
                    force3D: !0,
                    opacity: 0,
                    ease: "Expo.easeIn"
                }), i.to(this.$startBtn, 1, {
                    y: -25,
                    force3D: !0,
                    opacity: 0,
                    ease: "Expo.easeIn"
                }), i.to(this.$divider, 1, {
                    scaleX: 0,
                    force3D: !0,
                    ease: "Expo.easeIn"
                })
            },
            onCompleteLoader: function(t) {
                var e;
                e = window.location.href.split("getinvolved").length > 1 || window.location.href.split("details").length > 1 || window.location.href.split("howcanihelp").length > 1 ? !0 : !1, e && i.delayedCall(3, this.onForceTapStart), this.$startBtn.hammer().on("tap", this.onTapStart), this.animateStepTwo(), this.canvasLoader.animateOut(), e || i.to(this.$startBtn, 1, {
                    y: 0,
                    force3D: !0,
                    opacity: 1,
                    delay: 1.3,
                    ease: "Expo.easeOut"
                })
            },
            onForceTapStart: function() {
                this.onTapStart()
            },
            onTapStart: function(t) {
                this.animateStepLeave(), this.canvasLoader.setToStartMobile(), h.event("start exploring", "click", "button"), h.page("intro"), i.delayedCall(1.5, function() {
                    r.trigger("start:application")
                })
            },
            onResize: function(t) {
                this.canvasLoader && this.canvasLoader.onResize()
            },
            onLoadProgress: function(t) {
                this.canvasLoader && this.canvasLoader.setProgress(t.progress)
            },
            render: function() {
                this.$bg = t(".js-loader_bg"), this.$canvasHolder = t(".js-loader_canvas_holder"), this.$loaderTextProgress = t(".js-loader_text_progress"), this.$containerStep1 = t(".js-loader_step_1"), this.$containerStep2 = t(".js-loader_step_2"), this.$textStep1A = t(".js-loader__step1TextA"), this.$textStep1B = t(".js-loader__step1TextB"), this.$textSummary = t(".js-loader__summary"), this.$startBtn = t(".js-loader_start_btn"), this.$titleText = t(".js-loader_text"), this.$divider = t(".js-loader__divider")
            },
            destroy: function() {
                this.$startBtn.data("hammer").destroy(), this.canvasLoader && (this.canvasLoader.off("loader:complete", this.onCompleteLoader), this.canvasLoader.destroy()), this.$el.detach()
            }
        })
    }), define("view/modules/mobile/shell/header", ["jquery", "underscore", "TweenMax", "config", "route/router", "model/app_model", "view/common/base_view"], function(t, e, i, n, s, r, a) {
        "use strict";
        return a.extend({
            page: null,
            pageOptions: null,
            $bg: null,
            $prevBtn: null,
            $closeBtn: null,
            $yearSection: null,
            $monthSection: null,
            $detailSection: null,
            $hcihSection: null,
            showHeader: null,
            shouldShowBG: null,
            currentState: null,
            currentSection: null,
            prevSection: null,
            isArchiveDay: null,
            initialize: function() {
                e.bindAll(this, "onPrevButton", "onCloseButton"), this.page = r.get("page"), this.pageOptions = r.get("pageOptions"), this.render(), this.addEvents(), this.setDefault()
            },
            addEvents: function() {
                this.$prevBtn.hammer().on("tap", this.onPrevButton), this.$closeBtn.hammer().on("tap", this.onCloseButton)
            },
            removerEvents: function() {
                this.$prevBtn.data("hammer").destroy(), this.$closeBtn.data("hammer").destroy()
            },
            show: function() {
                this.showHeader || (this.showHeader = !0, this.$el.show())
            },
            hide: function() {
                this.showHeader && (this.showHeader = !1, this.$el.hide())
            },
            showBG: function() {
                this.shouldShowBG || (this.shouldShowBG = !0, this.$bg.show())
            },
            hideBG: function() {
                this.shouldShowBG && (this.shouldShowBG = !1, this.$bg.hide())
            },
            animateOutPrevSection: function() {
                this.prevSection && (i.killTweensOf(this.prevSection), i.to(this.prevSection, .15, {
                    autoAlpha: 0,
                    ease: "Sine.easeInOut"
                })), this.currentState && this.animateInCurrentSection()
            },
            animateInCurrentSection: function() {
                i.killTweensOf(this.currentSection), i.to(this.currentSection, .15, {
                    autoAlpha: 1,
                    ease: "Sine.easeInOut",
                    delay: .15
                })
            },
            onPageChange: function(t) {
                switch (this.page = t, t) {
                    case r.PAGES.LOADER:
                        break;
                    case r.PAGES_MOBILE.TREE_MONTH:
                    case r.PAGES_MOBILE.TREE_CATEGORY:
                    case r.PAGES.DETAILS:
                    case r.PAGES.ARCHIVE:
                    case r.PAGES.HOW_CAN_I_HELP:
                        this.showBG(), this.show();
                        break;
                    case r.PAGES.TREE:
                    case r.PAGES.ABOUT:
                        this.hideBG(), this.hide();
                        break;
                    default:
                        this.hideBG(), this.show()
                }
            },
            onPageOptions: function(t) {
                switch (this.pageOptions = t, this.isArchiveDay = r.isArchiveDay(t[0]), this.currentSection && (this.prevSection = this.currentSection), r.get("page")) {
                    case r.PAGES.TREE:
                        this.setYearElements();
                        break;
                    case r.PAGES_MOBILE.TREE_MONTH:
                        this.setMonthsElements();
                        break;
                    case r.PAGES_MOBILE.TREE_CATEGORY:
                        this.setCategoryElements();
                        break;
                    case r.PAGES.ARCHIVE:
                        this.setArchiveElements();
                        break;
                    case r.PAGES.DETAILS:
                        this.setDetailsElements();
                        break;
                    case r.PAGES.HOW_CAN_I_HELP:
                        this.setHCIHElements()
                }
            },
            onPrevButton: function() {
                if (r.get("page") === r.PAGES.DETAILS) {
                    var t, e = s.getCloseDetailRedirectPage().page;
                    t = e === r.PAGES_MOBILE.TREE_CATEGORY ? "#!/cat/" + r.getCategory().get("route") : this.isArchiveDay ? "#!/archive/" : "#!/" + r.getYear().get("route"), s.navigate(t, {
                        trigger: !0
                    })
                }
            },
            onCloseButton: function() {
                s.navigate("#!/", {
                    trigger: !0
                })
            },
            setDefault: function() {
                this.$yearSection.css({
                    visibility: "hidden"
                }), this.$monthSection.css({
                    visibility: "hidden"
                }), this.$detailSection.css({
                    visibility: "hidden"
                }), this.$hcihSection.css({
                    visibility: "hidden"
                })
            },
            setYearElements: function() {
                this.currentState = null, this.animateOutPrevSection()
            },
            setMonthsElements: function() {
                this.switchSection(this.$monthSection);
                var t = this.$monthSection.find(".js-text");
                t.html(r.getYear().get("title"))
            },
            setCategoryElements: function() {
                this.switchSection(this.$monthSection);
                var t = this.$monthSection.find(".js-text");
                t.html(r.getCategory().get("title"))
            },
            setArchiveElements: function() {
                this.switchSection(this.$monthSection);
                var t = this.$monthSection.find(".js-text");
                t.html("The Archive")
            },
            setDetailsElements: function() {
                this.switchSection(this.$detailSection);
                var t = this.$detailSection.find(".js-year"),
                    e = this.$detailSection.find(".js-month"),
                    i = s.getCloseDetailRedirectPage().page;
                i === r.PAGES_MOBILE.TREE_CATEGORY ? (t.html(""), e.html(r.getCategory().get("title"))) : this.isArchiveDay ? (t.html(""), e.html(r.getArchiveDay().get("archiveTitle"))) : (t.html(r.getYear().get("title")), e.html(r.getMonth().get("title")))
            },
            setHCIHElements: function() {
                this.switchSection(this.$hcihSection)
            },
            switchSection: function(t) {
                this.currentState !== this.page && (this.currentState = this.page, this.currentSection = t, this.animateOutPrevSection(), this.$el.attr("data-page", this.currentState.toLowerCase()))
            },
            render: function() {
                this.$bg = this.$(".js-bg"), this.$prevBtn = this.$(".js-prev"), this.$closeBtn = this.$(".js-close"), this.$yearSection = this.$(".js-yearText"), this.$monthSection = this.$(".js-monthText"), this.$detailSection = this.$(".js-detailText"), this.$hcihSection = this.$(".js-hcihText")
            }
        })
    }), define("view/modules/mobile/shell/menu_btn", ["jquery", "underscore", "config", "route/router", "model/app_model", "view/common/base_view"], function(t, e, i, n, s, r) {
        "use strict";
        return r.extend({
            events: {
                touchend: "onTouch"
            },
            initialize: function() {
                this.addEvents()
            },
            addEvents: function() {
                s.on("change:menuMobileOpen", this.onMenuOpen, this)
            },
            onTouch: function() {
                var t = s.get("menuMobileOpen");
                t ? s.set("menuMobileOpen", !1) : s.set("menuMobileOpen", !0)
            },
            onMenuOpen: function(t, e) {
                e ? this.$el.attr("data-icon", "close") : this.$el.removeAttr("data-icon")
            },
            onPageChange: function(t) {
                switch (t) {
                    case s.PAGES.LOADER:
                        break;
                    default:
                        this.showMenuBtn || (this.showMenuBtn = !0, this.$el.show())
                }
            }
        })
    }), define("view/modules/mobile/shell/mobile_shell_view", ["jquery", "underscore", "config", "route/router", "TweenMax", "model/app_model", "view/common/base_view", "view/modules/mobile/shell/header", "view/modules/mobile/shell/menu_btn"], function(t, e, i, n, s, r, a, o, l) {
        "use strict";
        var h = a.extend({
            page: null,
            $menuOpenBtn: null,
            $menuCloseBtn: null,
            initialize: function() {
                this.$header = this.$(".js-header"), this.$menuOpenBtn = this.$(".js-menuBtn"), this.$menuCloseBtn = this.$(".js-nav__cross"), this.createViews(), this.addEvents()
            },
            createViews: function() {
                this.headerView = new o({
                    el: this.$header
                }), this.menuBtnView = new l({
                    el: this.$menuOpenBtn
                })
            },
            addEvents: function() {
                this.listenTo(r, "change:page", this.onPageChange), this.listenTo(r, "change:pageOptions", this.onPageOptions), this.listenTo(r, "change:menuMobileOpen", this.onMenuMobileChange)
            },
            removeEvents: function() {
                this.stopListening(r, "change:page", this.onPageChange), this.stopListening(r, "change:pageOptions", this.onPageOptions), this.stopListening(r, "change:menuMobileOpen", this.onMenuMobileChange)
            },
            onPageChange: function() {
                var t = r.get("page");
                this.page = t, r.set("menuMobileOpen", !1), this.headerView.onPageChange(t), this.menuBtnView.onPageChange(t)
            },
            onPageOptions: function(t, e) {
                this.headerView.onPageOptions(e)
            },
            onMenuMobileChange: function() {
                var t = r.get("menuMobileOpen");
                s.to(this.$header, .3, {
                    autoAlpha: t ? 0 : 1,
                    ease: "Sine.easeInOut"
                })
            },
            onResize: function() {}
        });
        return h
    }), define("view/templates/desktop", ["handlebars"], function(t) {
        return this.desktop = this.desktop || {}, this.desktop.background_holder = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return '<div class="js-background_holder background_holder">\n	\n</div>'
            },
            useData: !0
        }), this.desktop.content_day_fact = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r = "function",
                    a = e.helperMissing,
                    o = this.escapeExpression;
                return '<div class="js-content__fact  content__fact">\n	<h4 class="js-factTitle  content__factTitle">Fact</h4>\n	<p class="js-factCopy  content__factCopy">' + o((s = null != (s = e.title || (null != t ? t.title : t)) ? s : a, typeof s === r ? s.call(t, {
                    name: "title",
                    hash: {},
                    data: n
                }) : s)) + '</p>\n</div>\n<div class="js-content__itemTitleLine content__itemTitleLine"></div>'
            },
            useData: !0
        }), this.desktop.content_item = t.template({
            1: function(t, e, i, n) {
                var s, r = "function",
                    a = e.helperMissing,
                    o = this.escapeExpression;
                return '	<div class="js-content__itemNotification content__itemNotification">+' + o((s = null != (s = e.notificationNumber || (null != t ? t.notificationNumber : t)) ? s : a, typeof s === r ? s.call(t, {
                    name: "notificationNumber",
                    hash: {},
                    data: n
                }) : s)) + "</div>\n"
            },
            3: function(t, e, i, n) {
                return '				<svg>\n					<use xlink:href="#icon-type_image" />\n				</svg>\n'
            },
            5: function(t, e, i, n) {
                return '				<svg>\n					<use xlink:href="#icon-type_video" />\n				</svg>\n'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r, a = "function",
                    o = e.helperMissing,
                    l = this.escapeExpression,
                    h = "";
                return s = e["if"].call(t, null != t ? t.showNotification : t, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n),
                    inverse: this.noop,
                    data: n
                }), null != s && (h += s), h += '\n<!-- <svg class="details-spinner" width="54px" height="54px" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">\n	<g class="details-spinner__path">\n		<circle class="path1" fill="none" stroke-width="2" stroke-linecap="round" cx="27" cy="27" r="25"></circle>\n	</g>\n	<circle class="path" fill="none" stroke-width="1" stroke-linecap="round" cx="27" cy="27" r="25"></circle>\n</svg>\n -->\n\n<div class="js-content__itemScale">\n	<div class="js-content__itemInner content__itemInner">\n\n		<div class="js-outline  content__outline">\n			<svg class="content__outlineSVG" data-type="dashed">\n				<use xlink:href="#icon-circle-stroke" />\n			</svg>\n			<svg class="js-outlineSolid  content__outlineSVG" data-type="solid">\n				<use xlink:href="#icon-circle-stroke" />\n			</svg>\n		</div>\n\n		<div class="js-content__itemBgMask content__itemBgMask">\n			<div class="js-content__itemBg content__itemBg"></div>\n		</div>\n	</div>\n</div>\n\n<div class="js-content__itemTitleLineMask content__itemTitleLineMask">\n	<div class="js-content__itemTitleLine content__itemTitleLine"></div>\n</div>\n\n<p class="js-content__itemTitle content__itemTitle">\n	<span class="js-content__itemTitleInner content__itemTitleInner">\n		<span class="js-content__itemTypeIcon content__itemTypeIcon" >\n\n', s = e["if"].call(t, null != t ? t.isImage : t, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n),
                    inverse: this.noop,
                    data: n
                }), null != s && (h += s), s = e["if"].call(t, null != t ? t.isVideo : t, {
                    name: "if",
                    hash: {},
                    fn: this.program(5, n),
                    inverse: this.noop,
                    data: n
                }), null != s && (h += s), h + '\n		</span>\n		<span class="js-content__itemTitleCopy content__itemTitleCopy" >' + l((r = null != (r = e.title || (null != t ? t.title : t)) ? r : o, typeof r === a ? r.call(t, {
                    name: "title",
                    hash: {},
                    data: n
                }) : r)) + "</span>\n	</span>\n</p>"
            },
            useData: !0
        }), this.desktop.content_year_change = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r, a = "function",
                    o = e.helperMissing,
                    l = '<div class="yearChange">	\n	<div class="js-content__itemScale">\n		<div class="js-content__itemInner content__itemInner">\n\n			<div class="js-outline  content__outline">\n				<svg class="content__outlineSVG" data-type="dashed">\n					<use xlink:href="#icon-circle-stroke" />\n				</svg>\n				<svg class="js-outlineSolid  content__outlineSVG" data-type="solid">\n					<use xlink:href="#icon-circle-stroke" />\n				</svg>\n			</div>\n		</div>\n		<div class="js-content__itemBgMask content__itemBgMask_yearChange">\n			<div class="js-content__itemBg content__itemBg_yearChange">\n				<div class="inner">\n					<div class="center">\n						<div class="year">\n							<span>';
                return r = null != (r = e.year || (null != t ? t.year : t)) ? r : o, s = typeof r === a ? r.call(t, {
                    name: "year",
                    hash: {},
                    data: n
                }) : r, null != s && (l += s), l + '</span>\n							<div class="yearchange__arrowContainer">\n								<svg class="svg yearchange__arrow"><use xlink:href="#icon-arrow-right-thin" /></svg><div class="line"></div>\n							</div>\n							\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>'
            },
            useData: !0
        }), this.desktop.details_arrow_btn = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r = "function",
                    a = e.helperMissing,
                    o = this.escapeExpression;
                return "<div class=\"navArrow__inner-line\"></div>\n<div class=\"js-circle navArrow__inner-circle\"></div>\n<svg class='navArrow__inner-icon'><use width='100%' height='100%' fill='#eddfc8' class='js-icon' xlink:href='#icon-arrow-" + o((s = null != (s = e.direction || (null != t ? t.direction : t)) ? s : a, typeof s === r ? s.call(t, {
                    name: "direction",
                    hash: {},
                    data: n
                }) : s)) + "' /></svg>"
            },
            useData: !0
        }), this.desktop.details_image_item = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return '<div class="js-details-img-wrapper details__imgWrapper">\n	<div class="js-details-spinner details__img-spinner">\n		<svg class="details-spinner" width="54px" height="54px" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">\n			<g class="details-spinner__path">\n				<circle class="path1" fill="none" stroke-width="2" stroke-linecap="round" cx="27" cy="27" r="25"></circle>\n			</g>\n			<circle class="path" fill="none" stroke-width="1" stroke-linecap="round" cx="27" cy="27" r="25"></circle>\n		</svg>\n	</div>\n	<img class="js-details-img details__media-img"></img>\n</div>'
            },
            useData: !0
        }), this.desktop.details_play_btn = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return '<div class="js-play-circle playBtn__inner-circle"></div>\n<div class="js-play-icon playBtn__inner-icon"></div>'
            },
            useData: !0
        }), this.desktop.details_video_item = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return '<div class="js-details-vidWrap details__vid"></div>\n\n<div class="js-details-close-btn details__videoClose">\n    <svg class=\'videoClose__inner-icon\'><use width=\'100%\' height=\'100%\' fill=\'#eddfc8\' class=\'js-icon\' xlink:href=\'#icon-close\' /></svg>\n</div>\n\n<div class="js-details-img-wrapper details__imgWrapper">\n	<div class="js-details-spinner details__img-spinner">\n		<svg class="details-spinner" width="54px" height="54px" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">\n			<g class="details-spinner__path">\n				<circle class="path1" fill="none" stroke-width="2" stroke-linecap="round" cx="27" cy="27" r="25"></circle>\n			</g>\n			<circle class="path" fill="none" stroke-width="1" stroke-linecap="round" cx="27" cy="27" r="25"></circle>\n		</svg>\n	</div>\n	<img class="js-details-img details__media-img"></img>\n</div>\n\n<div class="js-details-play-btn details__playBtn"></div>'
            },
            useData: !0
        }), this.desktop.hcih_legend_item = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r = "function",
                    a = e.helperMissing,
                    o = this.escapeExpression;
                return "<li><span>" + o((s = null != (s = e.title || (null != t ? t.title : t)) ? s : a, typeof s === r ? s.call(t, {
                    name: "title",
                    hash: {},
                    data: n
                }) : s)) + '<div class="underline"></div></span></li>'
            },
            useData: !0
        }), this.desktop.details_cat_legend_nav = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return '<div class="js-legend__dayArrowLeft legend__dayArrowLeft">\n    <svg class="svg legend__dayArrow" >\n        <use xlink:href="#icon-arrow-left-thin" />\n    </svg>\n    <div class="js-legend_dayArrowLine legend__dayArrow__inner-line"></div>\n</div>\n\n<h4 class="legend__dayArrowCopy">Categories</h4>\n\n<div class="js-legend__dayArrowRight legend__dayArrowRight">\n    <svg class="svg legend__dayArrow" >\n        <use xlink:href="#icon-arrow-right-thin" />\n    </svg>\n    <div class="js-legend_dayArrowLine legend__dayArrow__inner-line"></div>\n</div>'
            },
            useData: !0
        }), this.desktop.details_dropdown = t.template({
            1: function(t, e, i, n) {
                var s, r = "function",
                    a = e.helperMissing,
                    o = this.escapeExpression;
                return '			<li class="js-list-item dropdown__item dropdown__label"><span>' + o((s = null != (s = e.title || (null != t ? t.title : t)) ? s : a, typeof s === r ? s.call(t, {
                    name: "title",
                    hash: {},
                    data: n
                }) : s)) + "</span></li>\n"
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r = '<div class="js-dropdown-bck dropdown__background"></div>\n<div class="js-listWrapper dropdown__listWrapper">\n	<div class="js-list-bck list-bck"></div>\n	<ul class="js-list dropdown__list">\n';
                return s = e.each.call(t, null != t ? t.list : t, {
                    name: "each",
                    hash: {},
                    fn: this.program(1, n),
                    inverse: this.noop,
                    data: n
                }), null != s && (r += s), r + '	</ul>\n</div>\n<div class="js-button dropdown__button">\n	<span class="dropdown__label">Change Category</span>\n	<span class="js-dropdown-icon icon"><svg><use xlink:href="#icon-arrow-right-thin" /></svg></span>\n</div>'
            },
            useData: !0
        }), this.desktop.tree_lines = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">\n\n	<g class=\'lines__stroked js-lines js-lines--stroked\' fill="none" stroke="#FFF" opacity="0.6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="6">\n		<path d="M.5 108S154.6-8.2 320.5 1c144.9 8 312.1 118 320 125"/>\n		<path d="M.5 303s222.5-134 320-144c97.9-10 159.1 3 320 86"/>\n		<path d="M.5 481s290.7-125.6 398.9-139c94.3-11.7 126.2 0 241.1 51"/>\n		<path d="M.5 663s297.9-147 476.9-109c77.7 16.5 129.5 44.7 163.1 71.3"/>\n		<path d="M.5 885s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5 1086s313.9-189 479.9-175c63.7 5.4 118.1 28.7 160.1 58.8"/>\n		<path d="M.5 1264.5s297.9-167 476.9-129c77.7 16.5 129.5 40.7 163.1 67.3"/>\n		<path d="M.5 1473.5s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5 1646.5s313.9-165 479.9-151c63.7 5.4 118.1 32.7 160.1 62.8"/>\n		<path d="M.5 1831.2s297.9-147 476.9-109c77.7 16.5 129.5 44.7 163.1 71.3"/>\n		<path d="M.5 2053.2s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5 2231.2s297.9-147 476.9-109c77.7 16.5 129.5 44.7 163.1 71.3"/>\n		<path d="M.5 2453.2s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5,2643.2c0 0 274.9-147 398.9-143s164.2 24 241.1 54"/>\n	</g>\n\n	<g fill="#eddfc8">\n		<circle cx="47.2" cy="641.9" r="5"/>\n		<circle cx="47.2" cy="461.1" r="5"/>\n		<circle cx="47.2" cy="275.9" r="5"/>\n		<circle cx="47.2" cy="77.9"  r="5"/>\n		<circle cx="47.2" cy="860.9" r="5"/>\n		<circle cx="47.2" cy="1059.3" r="5"/>\n		<circle cx="47.2" cy="1240.3" r="5"/>\n		<circle cx="47.2" cy="1449.2" r="5"/>\n		<circle cx="47.2" cy="1622.9" r="5"/>\n		<circle cx="47.2" cy="1809.9" r="5"/>\n		<circle cx="47.2" cy="2029.3" r="5"/>\n		<circle cx="47.2" cy="2209.9" r="5"/>\n		<circle cx="47.2" cy="2429.3" r="5"/>\n		<circle cx="47.2" cy="2619.3" r="5"/>\n	</g>\n\n	<g class=\'lines__filled js-lines js-lines--filled\' fill="none" stroke="#fff" stroke-width="2">\n		<path d="M.5 108S154.6-8.2 320.5 1c144.9 8 312.1 118 320 125"/>\n		<path d="M.5 303s222.5-134 320-144c97.9-10 159.1 3 320 86"/>\n		<path d="M.5 481s290.7-125.6 398.9-139c94.3-11.7 126.2 0 241.1 51"/>\n		<path d="M.5 663s297.9-147 476.9-109c77.7 16.5 129.5 44.7 163.1 71.3"/>\n		<path d="M.5 885s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5 1086s313.9-189 479.9-175c63.7 5.4 118.1 28.7 160.1 58.8"/>\n		<path d="M.5 1264.5s297.9-167 476.9-129c77.7 16.5 129.5 40.7 163.1 67.3"/>\n		<path d="M.5 1473.5s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5 1646.5s313.9-165 479.9-151c63.7 5.4 118.1 32.7 160.1 62.8"/>\n		<path d="M.5 1831.2s297.9-147 476.9-109c77.7 16.5 129.5 44.7 163.1 71.3"/>\n		<path d="M.5 2053.2s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5 2231.2s297.9-147 476.9-109c77.7 16.5 129.5 44.7 163.1 71.3"/>\n		<path d="M.5 2453.2s274.9-147 398.9-153 164.2 24 241.1 54"/>\n		<path d="M.5 2643.2c0 0 274.9-147 398.9-143s164.2 24 241.1 54"/>\n	</g>\n	\n</svg>'
            },
            useData: !0
        }), this.desktop.tree_list_item = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r = "function",
                    a = e.helperMissing,
                    o = this.escapeExpression;
                return '<div class="tree__listYearContent">\n	<span class="tree__listYearTitle">' + o((s = null != (s = e.label || (null != t ? t.label : t)) ? s : a, typeof s === r ? s.call(t, {
                    name: "label",
                    hash: {},
                    data: n
                }) : s)) + '</span>\n	<span class="icon-borderCircle">\n		<svg class="svg" plus><use xlink:href="#icon-plus" /></svg>\n	</span>\n</div>\n'
            },
            useData: !0
        }), this.desktop.tree_month_day = t.template({
            1: function(t, e, i, n) {
                return '<figure class="treeMonth__momentImgWrap js-imgWrap">\n	<div class="js-imgHolder treeMonth__imgHolder  u-prehidden"></div>\n	<div class="sideBulletPoint"></div>\n	<div class="js-expandBtn  btn--expand">\n		<svg class="btn--expand__icon">\n			<use xlink:href="#icon-plus" />\n		</svg>\n	</div>\n</figure>\n'
            },
            3: function(t, e, i, n) {
                return '<div class="treeMonth__momentFactWrap">\n	<span>FACT</span>\n	<div class="sideBulletPoint"></div>\n</div>\n'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r, a = "function",
                    o = e.helperMissing,
                    l = this.escapeExpression,
                    h = "";
                return s = e["if"].call(t, null != t ? t.media : t, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n),
                    inverse: this.program(3, n),
                    data: n
                }), null != s && (h += s), h + '<h3 class="js-title treeMonth__title u-prehidden">' + l((r = null != (r = e.title || (null != t ? t.title : t)) ? r : o, typeof r === a ? r.call(t, {
                    name: "title",
                    hash: {},
                    data: n
                }) : r)) + "</h3>"
            },
            useData: !0
        }), this.desktop.tree_month_month = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r = "function",
                    a = e.helperMissing,
                    o = this.escapeExpression;
                return '<h2 class="treeMonth__listMonthTitle">\n	<span>' + o((s = null != (s = e.title || (null != t ? t.title : t)) ? s : a, typeof s === r ? s.call(t, {
                    name: "title",
                    hash: {},
                    data: n
                }) : s)) + '</span>\n	<div class="sideBulletPoint">\n		<div class="sideBulletPoint__ring"></div>\n	</div>\n</h2>'
            },
            useData: !0
        }), this.desktop.tree_month_year = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return ""
            },
            useData: !0
        }), this.desktop.timeline_archiv_ring = t.template({
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                return '<div class="timeline_archiv_ring js-timeline-archiv-ring">I am arhciv</div>'
            },
            useData: !0
        }), this.desktop.tree_section_legend = t.template({
            1: function(t, e, i, n) {
                return '			<svg>\n				<use xlink:href="#icon-type_image" />\n			</svg>\n'
            },
            3: function(t, e, i, n) {
                return '			<svg>\n				<use xlink:href="#icon-type_video" />\n			</svg>\n'
            },
            compiler: [6, ">= 2.0.0-beta.1"],
            main: function(t, e, i, n) {
                var s, r = '<div class="js-tree_section_legend tree_section_legend">\n	<span class="js-legend_tree_sectionTypeIcon legend_tree_sectionTypeIcon">\n';
                return s = e["if"].call(t, null != t ? t.isImage : t, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, n),
                    inverse: this.noop,
                    data: n
                }), null != s && (r += s), s = e["if"].call(t, null != t ? t.isVideo : t, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, n),
                    inverse: this.noop,
                    data: n
                }), null != s && (r += s), r + "	</span>\n	<h4></h4>\n	<h3></h3>\n</div>"
            },
            useData: !0
        }), this.desktop
    }), define("view/modules/mobile/tree/tree_month_day_view", ["jquery", "underscore", "config", "TweenMax", "route/router", "util/anim_frame", "model/app_model", "view/common/base_view", "view/templates/desktop", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h) {
        "use strict";
        return o.extend({
            tagName: "li",
            className: "treeMonth__listMoment",
            img: null,
            imgLoaded: null,
            $imgWrap: null,
            $imgHolder: null,
            $title: null,
            initialize: function(t) {
                e.bindAll(this, "onImageLoaded", "onTap"), this.imgLoaded = !1,
                    this.render(), this.addEvents(), this.setupView()
            },
            addEvents: function() {
                this.$el.hammer().on("tap", this.onTap)
            },
            removeEvents: function() {
                this.$el.data("hammer").destroy()
            },
            setupView: function() {
                var t = this.model.get("media")[0];
                if (!this.imgLoaded && t) {
                    var e;
                    "image" === t.type ? e = t.images.s.src : "video" === t.type && (e = t.thumbnail.src), this.img = new Image, this.img.src = e, this.img.onload = this.onImageLoaded, this.imgLoaded = !0
                } else t || (this.$el.addClass("treeMonth__listMoment--fact"), n.to(this.$title, .5, {
                    opacity: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut"
                }))
            },
            onImageLoaded: function() {
                this.$imgHolder[0].style.backgroundImage = "url('" + this.img.src + "')", n.to(this.$imgHolder, .5, {
                    opacity: 1,
                    delay: .2,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }), n.to(this.$title, .5, {
                    opacity: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }), this.resizeImgWrap()
            },
            onTap: function(t) {
                t.preventDefault(), t.stopImmediatePropagation();
                var e = "#!/" + this.model.get("fullRoute");
                s.navigate(e, {
                    trigger: !0
                }), h.event("content item", "click", "button")
            },
            render: function() {
                var t = l.tree_month_day,
                    e = this.model.toJSON();
                e.media = this.model.get("media")[0], this.compileAndAppendTemplate(t, e), this.$imgHolder = this.$(".js-imgHolder"), this.$imgWrap = this.$(".js-imgWrap"), this.$title = this.$(".js-title"), this.$el.attr("data-day", this.model.get("id"))
            },
            resizeImgWrap: function() {
                var t = this.$el.width(),
                    e = 9 * t / 16;
                this.$imgWrap.css({
                    width: t,
                    height: e
                })
            },
            destroy: function() {
                this.removeEvents(), o.prototype.destroy.apply(this)
            }
        })
    }), define("view/modules/mobile/tree/tree_feature_view", ["jquery", "underscore", "config", "TweenMax", "route/router", "util/anim_frame", "model/app_model", "view/common/base_view", "view/modules/mobile/tree/tree_month_day_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h) {
        "use strict";
        return o.extend({
            $content: null,
            $prev: null,
            $next: null,
            $current: null,
            $total: null,
            $title: null,
            $month: null,
            $year: null,
            $btn: null,
            featureItem: null,
            featureIndex: -1,
            sign: 1,
            isStarted: !1,
            isisTriggered: !1,
            timer: 3500,
            intervalInstance: null,
            firstDisplay: null,
            initialize: function() {
                e.bindAll(this, "onTick", "onTap", "onPrevTap", "onNextTap", "updateView"), this.featureIndex = 0, this.firstDisplay = !0, this.render(), this.addEvents(), this.show()
            },
            show: function() {
                this.startFeature(), this.updateFeature(), n.set(this.$btn, {
                    x: -30,
                    opacity: 0
                }), n.to(this.$btn, 1.2, {
                    opacity: 1,
                    x: 0,
                    delay: .45,
                    ease: "Expo.easeOut"
                })
            },
            hide: function() {
                o.prototype.hide.apply(this), this.destroy()
            },
            addEvents: function() {
                this.$content.hammer().on("tap", this.onTap), this.$prev.hammer().on("tap", this.onPrevTap), this.$next.hammer().on("tap", this.onNextTap)
            },
            removeEvents: function() {
                this.$content.data("hammer").destroy(), this.$prev.data("hammer").destroy(), this.$next.data("hammer").destroy()
            },
            animateElmtsIn: function() {
                var t = this.isTriggered ? .67 : 1.2,
                    e = [this.$title, this.$month, this.$year];
                this.sign < 0 && e.reverse(), n.killTweensOf(e), n.set(e, {
                    x: 18 * -this.sign,
                    opacity: 0
                }), n.staggerTo(e, t, {
                    opacity: 1,
                    x: 0,
                    ease: "Expo.easeOut"
                }, .1)
            },
            animateElmtsOut: function() {
                var t = this.isTriggered ? .67 : 1.2,
                    e = [this.$title, this.$month, this.$year];
                this.sign < 0 && e.reverse(), n.killTweensOf(e), n.staggerTo(e, t, {
                    opacity: 0,
                    x: 18 * this.sign,
                    ease: "Expo.easeIn"
                }, .1), n.delayedCall(t + .25, this.updateView)
            },
            startFeature: function() {
                this.isStarted || (this.isStarted = !0, this.resetInterval())
            },
            stopFeature: function() {
                this.isStarted && (this.isStarted = !1, this.destroyInterval())
            },
            resetInterval: function() {
                this.destroyInterval(), this.intervalInstance = setInterval(this.onTick, this.timer)
            },
            destroyInterval: function() {
                this.intervalInstance && (clearInterval(this.intervalInstance), this.intervalInstance = null)
            },
            prev: function() {
                this.featureIndex - 1 >= 0 ? this.featureIndex-- : this.featureIndex = a.get("features").length - 1, this.sign = -1, this.updateFeature()
            },
            next: function() {
                this.featureIndex + 1 < a.get("features").length ? this.featureIndex++ : this.featureIndex = 0, this.sign = 1, this.updateFeature()
            },
            onTick: function() {
                this.isTriggered = !1, this.next()
            },
            onTap: function(t) {
                t.preventDefault(), t.stopPropagation(), s.navigate(this.getRoute(), {
                    trigger: !0
                }), h.event("explore button", "click", "button")
            },
            onPrevTap: function(t) {
                t.stopImmediatePropagation(), this.isTriggered = !0, this.prev()
            },
            onNextTap: function(t) {
                t.stopImmediatePropagation(), this.isTriggered = !0, this.next()
            },
            getRoute: function() {
                var t = this.getDateData(this.featureItem.get("date")),
                    e = "!/" + t.year + "/" + t.month + "/" + t.day;
                return e
            },
            getDateData: function(t) {
                return {
                    year: t.substring(0, 4),
                    month: t.substring(4, 6),
                    day: t.substring(6, 8)
                }
            },
            render: function() {
                this.$content = this.$(".js-tree-feature-content"), this.$prev = this.$(".js-prev"), this.$next = this.$(".js-next"), this.$current = this.$(".js-current"), this.$total = this.$(".js-total"), this.$title = this.$(".js-title"), this.$month = this.$(".js-month"), this.$year = this.$(".js-year"), this.$btn = this.$(".js-feature__navigation")
            },
            updateFeature: function() {
                this.resetInterval(), n.killTweensOf(this.updateView), this.featureItem = a.get("features").at(this.featureIndex), this.firstDisplay ? this.updateView() : this.animateElmtsOut(), this.$current.text(this.featureIndex + 1), this.$total.text(a.get("features").length)
            },
            updateView: function() {
                var t = this.getDateData(this.featureItem.get("date")),
                    e = this.featureItem.get("title"),
                    n = i.MONTH_NAME[parseFloat(t.month) - 1];
                this.$year.text(t.year), this.$month.text(n), this.$title.text(e), this.animateElmtsIn(), this.firstDisplay && (this.firstDisplay = !1)
            },
            destroy: function() {
                this.removeEvents(), this.destroyInterval()
            }
        })
    }), define("view/modules/mobile/tree/tree_lines_view", ["jquery", "underscore", "config", "TweenMax", "route/router", "util/anim_frame", "model/app_model", "view/common/base_view", "view/templates/desktop"], function(t, e, i, n, s, r, a, o, l) {
        "use strict";
        return o.extend({
            $svg: null,
            $linesStroked: null,
            $linesFilled: null,
            initialize: function(t) {
                this.setupView()
            },
            addEvents: function() {},
            removeEvents: function() {},
            setupView: function() {
                var t = l.tree_lines;
                this.compileAndAppendTemplate(t, {}), this.$svg = this.$("svg"), this.$linesStroked = this.$(".js-lines--stroked"), this.$linesFilled = this.$(".js-lines--filled"), this.resetTreeLines(), this.animateIn(.5)
            },
            animateIn: function(t) {
                t = t || 0;
                for (var e = this.$linesStroked.find("path").length, i = 0; e > i; i++) {
                    var s = t + .18 * i,
                        r = this.$linesStroked.find("path")[i];
                    n.set(r, {
                        opacity: 0,
                        "stroke-dashoffset": 70
                    }), n.to(r, 2.2, {
                        opacity: 1,
                        "stroke-dashoffset": 0,
                        delay: s,
                        force3D: !0,
                        ease: "Expo.easeOut"
                    })
                }
            },
            drawTreeLine: function(t, e) {
                var i = this.$linesFilled.find("path")[t];
                n.killTweensOf(i), n.to(i, 1, {
                    "stroke-dashoffset": 0,
                    ease: "Expo.easeInOut",
                    onComplete: e || null
                })
            },
            resetTreeLines: function() {
                this.$linesFilled.find("path").each(function() {
                    var t = this,
                        e = t.getTotalLength();
                    t.style.strokeDasharray = e + " " + e, t.style.strokeDashoffset = e
                })
            },
            onResize: function(t, e) {
                this.$el.css({
                    height: e,
                    width: t
                }), this.$svg[0].setAttribute("viewBox", "0 0 640 " + e)
            },
            destroy: function() {
                this.removeEvents(), this.stopListening(), this.off(), this.$el.empty()
            }
        })
    }), define("view/modules/mobile/tree/tree_list_item_view", ["jquery", "underscore", "config", "TweenMax", "route/router", "model/app_model", "view/common/base_view", "view/modules/mobile/tree/tree_month_day_view", "view/templates/desktop"], function(t, e, i, n, s, r, a, o, l) {
        "use strict";
        return a.extend({
            tagName: "li",
            className: "js-year-item  tree__listYearItem",
            isCategory: null,
            index: -1,
            initialize: function(t) {
                e.bindAll(this, "onTap", "onAnimateOutComplete"), this.index = t.index, this.mode = t.mode, this.isCategory = t.isCategory, this.render(), this.addEvents()
            },
            addEvents: function() {
                this.$el.hammer().on("tap", this.onTap)
            },
            removeEvents: function() {
                this.$el.data("hammer").destroy()
            },
            animateIn: function(t) {
                var e = t + .074 * this.index;
                n.killTweensOf(this.el), n.set(this.el, {
                    x: -18,
                    opacity: 0
                }), n.to(this.el, 1.2, {
                    x: 0,
                    opacity: 1,
                    delay: e,
                    ease: "Expo.easeOut"
                })
            },
            animateOut: function(t) {
                var e = t + .074 * this.index;
                n.killTweensOf(this.el), n.to(this.el, .7, {
                    x: 18,
                    opacity: 0,
                    delay: e,
                    ease: "Expo.easeIn",
                    onComplete: this.onAnimateOutComplete
                })
            },
            getHeight: function() {
                return this.$el.height()
            },
            setPosition: function(t, e) {
                this.$el.css({
                    left: t,
                    top: e
                })
            },
            onTap: function() {
                this.trigger("item:tap", {
                    index: this.index
                })
            },
            onAnimateOutComplete: function() {
                this.destroy()
            },
            render: function() {
                var t = l.tree_list_item,
                    e = this.model.get("title");
                this.compileAndAppendTemplate(t, {
                    label: e
                })
            },
            destroy: function() {
                this.removeEvents(), a.prototype.destroy.apply(this)
            }
        })
    }), define("view/pages/mobile/tree_page", ["jquery", "underscore", "backbone", "config", "TweenMax", "route/router", "util/resn/animation", "model/app_model", "view/common/base_view", "view/modules/mobile/tree/tree_feature_view", "view/modules/mobile/tree/tree_lines_view", "view/modules/mobile/tree/tree_list_item_view", "view/templates/desktop", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h, c, u, d, p) {
        "use strict";
        return l.extend({
            $rootNode: null,
            $wrapper: null,
            $feature: null,
            $list: null,
            $lines: null,
            $modeSelectLinks: null,
            itemList: null,
            treeLinesView: null,
            treeFeatureView: null,
            tweenObj: null,
            currentScrollTop: -1,
            mode: null,
            MODES: {
                TIME: "time",
                CATEGORY: "category"
            },
            initialize: function(i) {
                e.bindAll(this, "onAnimateOutUpdate", "onAnimateOutComplete", "onListItemViewTap", "onSelectModeTap", "onScroll"), this.$rootNode = t("#rootNode"), this.itemList = [], this.render()
            },
            addEvents: function() {
                this.$rootNode.on("scroll", this.onScroll), this.$modeSelectLinks.hammer().on("tap", this.onSelectModeTap)
            },
            removeEvents: function() {
                this.$rootNode.off("scroll", this.onScroll), this.$modeSelectLinks.data("hammer").destroy()
            },
            setupView: function() {
                this.mode = null, this.currentScrollTop = 0, this.createFeature(), this.createLines(), this.createList(this.MODES.TIME), this.setDefaultAnimate()
            },
            setDefaultAnimate: function() {
                this.tweenObj = {
                    progressOut: 0
                }, this.setZPosition(0, this.$wrapper), this.setOpacity(1, this.$wrapper)
            },
            show: function() {
                this.$el.show(), this.setupView(), this.addEvents()
            },
            createItemList: function() {
                this.destroyList();
                for (var t = this.getCollection(), e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = new u({
                            model: i,
                            index: e,
                            mode: this.mode
                        });
                    n.animateIn(.7), n.on("item:tap", this.onListItemViewTap), this.itemList.push(n), this.$list.append(n.el)
                }
            },
            createFeature: function() {
                this.treeFeatureView = new h({
                    el: this.$feature
                })
            },
            createLines: function() {
                this.treeLinesView = new c({
                    el: this.$lines
                })
            },
            createList: function(t) {
                t !== this.mode && (this.mode && this.unselectModeLink(), this.mode = t, this.selectModeLink(), this.createItemList(), this.onResize(), this.mode === this.MODES.CATEGORY ? p.page("category_timeline") : p.page("year_month_view"))
            },
            selectModeLink: function() {
                var t = this.$modeSelectLinks.filter("[data-mode=" + this.mode + "]"),
                    e = t.find(".js-underline");
                s.killTweensOf(e), s.set(e, {
                    x: -20,
                    autoAlpha: 0,
                    transformOrigin: "0 50%"
                }), s.to(e, .5, {
                    scaleX: 1,
                    x: 0,
                    autoAlpha: 1,
                    ease: "Expo.easeInOut",
                    force3D: !0
                }), t.addClass("is-selected")
            },
            unselectModeLink: function() {
                var t = this.$modeSelectLinks.filter("[data-mode=" + this.mode + "]"),
                    e = t.find(".js-underline");
                s.killTweensOf(e), s.to(e, .5, {
                    scaleX: 1,
                    x: 20,
                    autoAlpha: 0,
                    ease: "Expo.easeInOut",
                    force3D: !0
                }), t.removeClass("is-selected")
            },
            animateOut: function() {
                this.applyPerspective(), this.setOriginPerspective(), this.unselectModeLink(), s.to(this.tweenObj, 1, {
                    progressOut: 1,
                    onUpdate: this.onAnimateOutUpdate,
                    onComplete: this.onAnimateOutComplete,
                    ease: "Expo.easeInOut"
                })
            },
            applyPerspective: function() {
                s.set(this.$el, {
                    perspective: 500
                })
            },
            resetPerspective: function() {
                s.set(this.$el, {
                    perspective: "none"
                })
            },
            onScroll: function() {
                this.currentScrollTop = this.$rootNode.scrollTop()
            },
            onAnimateOutUpdate: function() {
                var t = this.tweenObj.progressOut,
                    e = 1 - (t - .5) / .5,
                    i = 150 * t;
                this.setZPosition(i, this.$wrapper), this.setOpacity(e, this.$wrapper)
            },
            onAnimateOutComplete: function() {
                this.resetPerspective(), r.navigate(this.targetRoute, {
                    trigger: !0
                })
            },
            onListItemViewTap: function(t) {
                var e, i = t.index,
                    n = this.itemList[i],
                    s = o.howCanIHelp.getInitRoute();
                e = this.mode === this.MODES.CATEGORY ? "hcih" === n.model.get("route") ? "#!/howcanihelp/" + s.category + "/" + s.item : "#!/cat/" + n.model.get("route") : "#!/" + n.model.get("route");
                var r = this,
                    a = function() {
                        r.targetRoute = e, r.animateOut()
                    };
                this.treeLinesView.drawTreeLine(i, a)
            },
            onSelectModeTap: function(e) {
                e.preventDefault(), e.stopPropagation();
                var i = t(e.currentTarget).data("mode");
                this.createList(i)
            },
            onResize: function(e, i) {
                for (var n = t(window).width(), s = (t(window).height(), 10), r = 0; r < this.itemList.length; r++) this.itemList[r].setPosition(0, s), s += this.itemList[r].getHeight();
                this.$list.css({
                    width: n,
                    height: s
                }), this.treeLinesView && this.treeLinesView.onResize(n, s)
            },
            getCollection: function() {
                var t;
                if (this.mode === this.MODES.CATEGORY) t = o.getCategories().models;
                else {
                    t = e.sortBy(o.getYears().models, function(t) {
                        return -1 * o.getYears().indexOf(t)
                    });
                    var n = new i.Model({
                        title: o.getArchive().title,
                        route: "archive/"
                    });
                    t.push(n)
                }
                return t
            },
            destroyList: function(t) {
                for (var e = 0; e < this.itemList.length; e++) this.itemList[e].off("item:tap", this.onListItemViewTap), t ? this.itemList[e].destroy() : this.itemList[e].animateOut(0);
                this.itemList = []
            },
            setOriginPerspective: function(e) {
                var i = this.currentScrollTop + .5 * t(window).height(),
                    n = e || this.$el;
                if (n) {
                    var s = "50% " + i + "px";
                    n.css({
                        "perspective-origin": s,
                        "webkit-perspective-origin": s,
                        "moz-perspective-origin": s,
                        "o-perspective-origin": s
                    })
                }
            },
            setZPosition: function(t, e) {
                if (n.csstransforms3d) {
                    var i = e || this.$el,
                        s = a.getTransformationMatrix(0, 0, t),
                        r = a.getStringTransform3d(s);
                    this.applyCss(i, r)
                }
            },
            render: function() {
                this.$wrapper = this.$(".js-tree-wrapper"), this.$feature = this.$(".js-tree-feature"), this.$list = this.$(".js-tree-list"), this.$lines = this.$(".js-tree-lines"), this.$modeSelectLinks = this.$(".js-mode-select-link")
            },
            destroy: function() {
                this.removeEvents(), this.unselectModeLink(), this.destroyList(!0), this.treeFeatureView.destroy(), this.treeLinesView.destroy(), l.prototype.destroy.apply(this)
            }
        })
    }), define("view/modules/mobile/tree/tree_month_month_view", ["jquery", "underscore", "config", "route/router", "util/anim_frame", "model/app_model", "view/common/base_view", "view/modules/mobile/tree/tree_month_day_view", "view/templates/desktop"], function(t, e, i, n, s, r, a, o, l) {
        "use strict";
        return a.extend({
            tagName: "ul",
            className: "treeMonth__listMonth js-month",
            dayViews: null,
            initialize: function(t) {
                this.render(), this.createDays()
            },
            render: function() {
                var t = l.tree_month_month,
                    e = this.model.toJSON();
                this.compileAndAppendTemplate(t, e), this.$el.attr("data-month", this.model.get("id"))
            },
            createDays: function() {
                this.dayViews = [], e.each(this.model.getDays().models, function(t) {
                    var e = new o({
                        model: t
                    });
                    this.dayViews.push(e), this.$el.append(e.el)
                }, this)
            },
            destroy: function() {
                this.dayViews.length > 0 && (e.each(this.dayViews, function(t) {
                    t.destroy()
                }), this.dayViews = []), a.prototype.destroy.apply(this)
            }
        })
    }), define("view/modules/mobile/tree/tree_month_year_view", ["jquery", "underscore", "config", "route/router", "util/anim_frame", "model/app_model", "view/common/base_view", "view/modules/mobile/tree/tree_month_month_view", "view/templates/desktop"], function(t, e, i, n, s, r, a, o, l) {
        "use strict";
        return a.extend({
            className: "js-year treeMonth__listMonths",
            monthViews: null,
            index: -1,
            yearIndex: -1,
            posY: -1,
            height: -1,
            initialize: function(t) {
                this.index = t.index, this.yearIndex = t.yearIndex, this.render(), this.createMonths()
            },
            render: function() {
                var t = l.tree_month_year,
                    e = this.model.toJSON();
                this.compileAndAppendTemplate(t, e), this.$el.attr("data-year", this.model.get("id"))
            },
            createMonths: function() {
                this.monthViews = [], e.each(this.model.get("months").models, function(t, e) {
                    if (!t.get("empty")) {
                        var i = new o({
                            model: t,
                            parent: this.$el
                        });
                        this.monthViews.push(i), this.$el.append(i.el)
                    }
                }, this)
            },
            getHeight: function() {
                return this.height
            },
            getPositionY: function() {
                return this.posY
            },
            setPositionY: function(t) {
                this.posY = t
            },
            setHeight: function(t) {
                this.height = t
            },
            getIndex: function() {
                return this.index
            },
            getYearIndex: function() {
                return this.yearIndex()
            },
            resize: function() {
                var t = this.$el.position().top,
                    e = this.$el.height();
                this.setPositionY(t), this.setHeight(e)
            },
            destroy: function() {
                this.monthViews.length > 0 && (e.each(this.monthViews, function(t) {
                    t.destroy()
                }), this.monthViews = []), a.prototype.destroy.apply(this)
            }
        })
    }), define("view/pages/mobile/tree_month_page", ["jquery", "underscore", "config", "TweenMax", "route/router", "util/anim_frame", "model/app_model", "view/common/base_view", "view/modules/mobile/tree/tree_month_year_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h) {
        "use strict";
        return o.extend({
            $rootNode: null,
            yearViewList: null,
            $yearList: null,
            $loadPrev: null,
            $loadNext: null,
            currentYear: null,
            previousYear: null,
            currentScrollTop: 0,
            targetScrollTop: 0,
            animateScroll: null,
            isDisplayed: null,
            year: 0,
            month: 0,
            day: 0,
            initialize: function(i) {
                this.$rootNode = t("#rootNode"), e.bindAll(this, "onPrevYear", "onNextYear", "onScroll", "onAnimateScrollUpdate", "onAnimateScrollComplete"), this.tweenObj = {
                    progressScroll: 0,
                    progressIn: 0,
                    progressOut: 0
                }, this.yearViewList = [], this.yearViewPos = [], this.render()
            },
            addEvents: function() {
                this.$loadPrev.hammer().on("tap", this.onPrevYear), this.$loadNext.hammer().on("tap", this.onNextYear), this.$rootNode.on("scroll", this.onScroll)
            },
            removeEvents: function() {
                this.$loadPrev.data("hammer").destroy(), this.$loadNext.data("hammer").destroy(), this.$rootNode.off("scroll", this.onScroll)
            },
            show: function() {
                o.prototype.show.apply(this), this.$el.show(), this.$loadPrev.show(), this.$loadNext.show(), this.setAnimateDefault(), this.addEvents(), h.page("year_detail")
            },
            hide: function() {
                o.prototype.hide.apply(this)
            },
            setAnimateDefault: function() {
                this.isDisplayed = !1, this.$el.css({
                    opacity: 0
                })
            },
            animateIn: function() {
                this.isDisplayed || (n.to(this.el, .8, {
                    opacity: 1,
                    force3D: !0,
                    clearProps: "all",
                    ease: "Expo.easeInOut"
                }), this.isDisplayed = !0)
            },
            createYear: function() {
                var t = a.getYearIndex(this.previousYear),
                    e = a.getYearIndex(this.currentYear),
                    i = new l({
                        model: this.currentYear,
                        index: e
                    });
                e > t && -1 !== t ? this.$yearList.prepend(i.$el) : this.$yearList.append(i.$el), this.yearViewList.push(i), this.previousYear = this.currentYear, this.onResize(), this.scrollToYear(e)
            },
            scrollToYear: function(t) {
                for (var e, i = 0; i < this.yearViewList.length; i++) t === this.yearViewList[i].getIndex() && (e = this.yearViewList[i]);
                this.targetScrollTop = e.getPositionY() - 100, this.animateScroll = !0, this.tweenObj.progressScroll = 0, n.to(this.tweenObj, 1, {
                    progressScroll: 1,
                    onUpdate: this.onAnimateScrollUpdate,
                    onComplete: this.onAnimateScrollComplete,
                    ease: "Expo.easeInOut"
                })
            },
            checkYearLoaded: function() {
                this.currentYear = a.getYear(), this.currentYear.get("loaded") ? this.onYearLoaded() : this.currentYear.on("change:loaded", this.onYearLoaded, this)
            },
            checkBorders: function() {
                for (var t = Math.abs(this.currentScrollTop), e = 0; e < this.yearViewList.length; e++) {
                    var i = this.yearViewList[e],
                        n = i.getPositionY() - 100,
                        s = i.getHeight();
                    t > n && n + s > t && this.navigateToYear(i.getIndex())
                }
            },
            checkLoadButtons: function() {
                try {
                    a.getYear(a.get("year") + 1)
                } catch (t) {
                    this.$loadNext.hide()
                }
                try {
                    a.getYear(a.get("year") - 1), this.$loadPrev.find(".js-label").text("previous year")
                } catch (t) {
                    this.$loadPrev.find(".js-label").text("the archive")
                }
            },
            checkYearDisplayed: function(t) {
                var i = e.some(this.yearViewList, function(e) {
                    return e.model.get("id") === t.get("id")
                });
                return i
            },
            onYearLoaded: function() {
                this.checkYearDisplayed(this.currentYear) || (this.checkLoadButtons(), this.createYear(), this.animateIn())
            },
            onPageOptionsChange: function(t) {
                this.checkYearLoaded()
            },
            onPrevYear: function() {
                var t = a.get("year") - 1;
                try {
                    a.getYear(t), this.navigateToYear(t)
                } catch (e) {
                    this.navigateToArchive()
                }
            },
            onNextYear: function() {
                var t = a.get("year") + 1;
                try {
                    a.getYear(t), this.navigateToYear(t)
                } catch (e) {}
            },
            navigateToYear: function(t) {
                s.navigate("!/" + a.getYear(t).get("route"), {
                    trigger: !0
                })
            },
            navigateToArchive: function() {
                s.navigate("!/archive", {
                    trigger: !0
                })
            },
            onAnimateScrollUpdate: function() {
                var t = this.currentScrollTop + Math.abs(this.currentScrollTop - this.targetScrollTop) * this.tweenObj.progressScroll;
                this.$rootNode.scrollTop(t)
            },
            onAnimateScrollComplete: function() {
                this.animateScroll = !1
            },
            onScroll: function() {
                this.animateScroll || (this.currentScrollTop = this.$rootNode.scrollTop(), this.checkBorders())
            },
            onResize: function() {
                for (var t = 0; t < this.yearViewList.length; t++) this.yearViewList[t].resize()
            },
            render: function() {
                this.$yearList = this.$(".js-year-list"), this.$loadPrev = this.$(".js-prev"), this.$loadNext = this.$(".js-next")
            },
            destroy: function() {
                this.yearViewList.length > 0 && (e.each(this.yearViewList, function(t) {
                    t.destroy()
                }), this.yearViewList = []), this.tweenObj = {
                    progressScroll: 0,
                    progressIn: 0,
                    progressOut: 0
                }, this.currentYear = null, this.previousYear = null, this.currentScrollTop = 0, this.targetScrollTop = 0, this.removeEvents(), o.prototype.destroy.apply(this, arguments)
            }
        })
    }), define("model/tree/month_model", ["jquery", "underscore", "backbone", "model/tree/day_collection"], function(t, e, i, n) {
        "use strict";
        var s = i.Model.extend({
            initialize: function(t) {
                this.set("monthPointsDelta", 0);
                for (var e = 0; e < t.days.length; e++) t.days[e].fullRoute = t.fullRoute + "/" + t.days[e].route, t.days[e].monthIndex = parseInt(t.index, 10), t.days[e].yearIndex = t.yearIndex;
                this.set("days", new n(t.days))
            },
            getDay: function(t) {
                return this.getDays().at(t)
            },
            getDays: function() {
                return this.get("days")
            }
        });
        return s
    }), define("model/tree/month_collection", ["jquery", "underscore", "backbone", "model/tree/month_model"], function(t, e, i, n) {
        "use strict";
        var s = i.Collection.extend({
            url: "#",
            model: n
        });
        return s
    }), define("view/pages/mobile/tree_category_page", ["jquery", "underscore", "config", "TweenMax", "route/router", "util/anim_frame", "model/app_model", "model/tree/month_collection", "view/common/base_view", "view/modules/mobile/tree/tree_month_month_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h, c) {
        "use strict";
        return l.extend({
            $rootNode: null,
            $itemList: null,
            $preloader: null,
            isDisplayed: null,
            itemList: [],
            initialize: function(i) {
                e.bindAll(this, "onYearsLoaded"), this.$rootNode = t("#rootNode"), this.itemList = [], this.render()
            },
            addEvents: function() {
                Backbone.on("years:loaded", this.onYearsLoaded)
            },
            removeEvents: function() {
                Backbone.off("years:loaded", this.onYearsLoaded)
            },
            show: function() {
                l.prototype.show.apply(this), this.$el.show(), this.setAnimateDefault(), this.addEvents(), c.page("category_content")
            },
            hide: function() {
                l.prototype.hide.apply(this)
            },
            setAnimateDefault: function() {
                this.isDisplayed = !1, this.$itemList.css({
                    opacity: 0
                }), this.$preloader.css({
                    opacity: 1,
                    visibility: "visible"
                })
            },
            animateIn: function() {
                this.isDisplayed || (n.set(this.$preloader, {
                    autoAlpha: 0
                }), n.to(this.$itemList, .8, {
                    opacity: 1,
                    force3D: !0,
                    clearProps: "all",
                    ease: "Expo.easeInOut"
                }), this.isDisplayed = !0)
            },
            createItems: function() {
                this.destroyItems();
                var t = new o(this.getFilteredList());
                t.each(function(t, e) {
                    var i = new h({
                        model: t,
                        parent: this.$el
                    });
                    this.itemList.push(i), this.$itemList.append(i.el)
                }, this)
            },
            checkYearsLoaded: function() {
                a.loadFullYearData()
            },
            getFilteredList: function() {
                var t = a.getCategory().get("days").models;
                return t = e.chain(t).groupBy(function(t) {
                    var e;
                    return e = void 0 !== t.get("yearIndex") ? t.get("yearIndex") + " " + t.get("monthIndex") : t.get("fullRoute")
                }).map(function(t, e) {
                    var i;
                    if (void 0 !== t[0].get("yearIndex")) {
                        var n = a.getYear(t[0].get("yearIndex")).get("title"),
                            s = a.getMonth(t[0].get("monthIndex")).get("title");
                        i = s + " " + n
                    } else i = t[0].get("archiveTitle");
                    return {
                        title: i,
                        days: t
                    }
                }).value()
            },
            onYearsLoaded: function() {
                this.animateIn(), this.createItems()
            },
            onPageOptionsChange: function(t) {
                this.checkYearsLoaded()
            },
            onResize: function() {
                for (var t = 0; t < this.itemList.length; t++) this.itemList[t].resize()
            },
            render: function() {
                this.$preloader = this.$(".js-preload"), this.$itemList = this.$(".js-year-list")
            },
            destroyItems: function(t) {
                this.itemList.length > 0 && (e.each(this.itemList, function(t) {
                    t.destroy()
                }), this.itemList = [])
            },
            destroy: function() {
                this.destroyItems(), this.removeEvents(), l.prototype.destroy.apply(this, arguments)
            }
        })
    }), define("view/pages/mobile/tree_archive_page", ["jquery", "underscore", "config", "TweenMax", "route/router", "util/anim_frame", "model/app_model", "model/tree/month_collection", "view/common/base_view", "view/modules/mobile/tree/tree_month_month_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h, c) {
        "use strict";
        return l.extend({
            $rootNode: null,
            $itemList: null,
            isDisplayed: null,
            itemList: [],
            initialize: function(e) {
                this.$rootNode = t("#rootNode"), this.itemList = [], this.render()
            },
            addEvents: function() {
                Backbone.on("years:loaded", this.onYearsLoaded)
            },
            removeEvents: function() {
                Backbone.off("years:loaded", this.onYearsLoaded)
            },
            show: function() {
                l.prototype.show.apply(this), this.$el.show(), this.setAnimateDefault(), this.addEvents(), this.createItems(), this.animateIn(), c.page("archived_view")
            },
            hide: function() {
                l.prototype.hide.apply(this)
            },
            setAnimateDefault: function() {
                this.isDisplayed = !1, this.$el.css({
                    opacity: 0
                })
            },
            animateIn: function() {
                this.isDisplayed || (n.to(this.el, .8, {
                    opacity: 1,
                    force3D: !0,
                    clearProps: "all",
                    ease: "Expo.easeInOut"
                }), this.isDisplayed = !0)
            },
            createItems: function() {
                this.destroyItems();
                var t = new o(this.getList());
                t.each(function(t, e) {
                    var i = new h({
                        model: t,
                        parent: this.$el
                    });
                    this.itemList.push(i), this.$itemList.append(i.el)
                }, this)
            },
            getList: function() {
                var t = a.getArchive().models;
                return t = e.chain(t).map(function(t, e) {
                    return {
                        title: t.get("archiveTitle"),
                        days: t
                    }
                }).value()
            },
            onResize: function() {
                for (var t = 0; t < this.itemList.length; t++) this.itemList[t].resize()
            },
            render: function() {
                this.$itemList = this.$(".js-year-list")
            },
            destroyItems: function(t) {
                this.itemList.length > 0 && (e.each(this.itemList, function(t) {
                    t.destroy()
                }), this.itemList = [])
            },
            destroy: function() {
                this.destroyItems(), this.removeEvents(), l.prototype.destroy.apply(this, arguments)
            }
        })
    }), define("view/pages/mobile/details_page", ["jquery", "underscore", "backbone", "config", "events/app_events", "TweenMax", "route/router", "model/app_model", "view/common/base_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h) {
        "use strict";
        return l.extend({
            $rootNode: null,
            $prevBtn: null,
            $nextBtn: null,
            $preloader: null,
            $media: null,
            $nav: null,
            $detailsInfo: null,
            $buttons: null,
            image: null,
            video: null,
            isFirstOpened: null,
            isArchiveDay: null,
            isCategoryDay: null,
            isFollowProgress: null,
            imageLoading: null,
            initialize: function(i) {
                e.bindAll(this, "onImageLoaded", "onLeftTap", "onRightTap", "onShareBtnClick"), this.$rootNode = t("#rootNode"), this.render()
            },
            show: function() {
                this.$el.show(), this.resetElements(), this.addEvents(), h.page("content_detail")
            },
            hide: function() {
                this.isFirstOpened = !0, this.$el.hide(), this.trigger("hideComplete"), this.destroy()
            },
            addEvents: function() {
                this.$prevBtn.hammer().on("tap", this.onLeftTap), this.$nextBtn.hammer().on("tap", this.onRightTap), this.$shareBtns.on("touchend", this.onShareBtnClick)
            },
            removeEvents: function() {
                this.$prevBtn.data("hammer").destroy(), this.$nextBtn.data("hammer").destroy(), this.$shareBtns.off("touchend", this.onShareBtnClick)
            },
            loadVideo: function() {
                var e = this.model.get("media")[0];
                if (e) {
                    var i = t(e.src),
                        n = i.attr("src") + "?enablejsapi=1&controls=0&rel=0&showinfo=0";
                    i.attr("src", n), i.attr("id", "ytplayer"), this.$media.empty(), this.$media.html(i);
                    new YT.Player("ytplayer", {
                        events: {
                            onStateChange: this.onPlayerStateChange
                        }
                    });
                    this.animateOutPreloader()
                }
            },
            loadImage: function() {
                if (!this.imageLoading) {
                    var t = this.model.get("media")[0];
                    if (t) {
                        var e = t.images.l.src;
                        this.image = new Image, this.image.onload = this.onImageLoaded, this.image.src = e
                    }
                    this.imageLoading = !0
                }
            },
            animateInElements: function() {
                r.killTweensOf([this.$detailsInfo, this.$nav, this.$buttons]), r.to(this.$detailsInfo, .5, {
                    alpha: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }), r.to(this.$nav, .5, {
                    alpha: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                });
                var t = this.getNumDays();
                t > 1 ? r.to(this.$buttons, .5, {
                    autoAlpha: 1,
                    delay: .6,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }) : r.to(this.$buttons, .5, {
                    autoAlpha: 0,
                    delay: .6,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                })
            },
            animateOutPreloader: function() {
                r.killTweensOf([this.$preloader, this.$media]), r.to(this.$preloader, .2, {
                    autoAlpha: 0,
                    delay: .2,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }), r.to(this.$media, .5, {
                    autoAlpha: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                })
            },
            resetElements: function() {
                r.killTweensOf([this.$preloader, this.$media, this.$detailsInfo, this.$nav, this.$buttons]), this.$img && (this.$img.remove(), this.$img = null), this.imageLoading = !1, this.$preloader.css("opacity", 1), this.$media.css("opacity", 0), this.$detailsInfo.css("opacity", 0), this.$nav.css("opacity", 0), this.$buttons.css("opacity", 0)
            },
            checkYearLoaded: function() {
                this.currentYear = o.getYear(), this.currentYear.get("loaded") ? this.onYearLoaded() : this.currentYear.on("change:loaded", this.onYearLoaded, this)
            },
            checkArchiveLoaded: function() {
                this.onArchiveLoaded()
            },
            onFollowProgressClick: function(t) {
                t.preventDefault(), a.navigate("#!/about", {
                    trigger: !0
                })
            },
            onPlayerStateChange: function(t) {
                switch (t.data) {
                    case YT.PlayerState.ENDED:
                        break;
                    case YT.PlayerState.PLAYING:
                        h.event("detail", "start", "video");
                        break;
                    case YT.PlayerState.PAUSED:
                        break;
                    case YT.PlayerState.BUFFERING:
                        break;
                    case YT.PlayerState.CUED:
                }
            },
            onYearLoaded: function() {
                this.model = o.getDay(), this.resetElements(), this.updateChildViews(), this.animateInElements()
            },
            onArchiveLoaded: function() {
                this.model = o.getArchiveDay(), this.resetElements(), this.updateChildViews(), this.animateInElements()
            },
            onPageOptionsChange: function(t) {
                var e = a.getCloseDetailRedirectPage().page;
                this.isCategoryDay = e === o.PAGES_MOBILE.TREE_CATEGORY, this.isArchiveDay = o.isArchiveDay(t[0]), this.isArchiveDay ? this.checkArchiveLoaded() : this.checkYearLoaded()
            },
            onImageLoaded: function() {
                this.$media.empty(), this.$media.append(this.image), this.animateOutPreloader()
            },
            onLeftTap: function(t) {
                t.preventDefault(), t.stopPropagation(), this.goToPreviousDay()
            },
            onRightTap: function(t) {
                t.preventDefault(), t.stopPropagation(), this.goToNextDay()
            },
            onShareBtnClick: function(e) {
                e.preventDefault();
                var n = t(e.currentTarget).data("social");
                i.trigger(s.Share.Detail, {
                    type: n,
                    model: this.model
                })
            },
            onResize: function() {
                var t = this.$el.width(),
                    e = 9 * t / 16;
                this.$(".js-media-wrap").css({
                    width: t,
                    height: e
                })
            },
            goToPreviousDay: function() {
                var t, e = this.model.get("id");
                if (this.isCategoryDay)
                    for (t = o.getPreviousCatDay(e); 0 === t.get("media").length;) t = o.getPreviousCatDay(t.get("id"));
                else if (this.isArchiveDay)
                    for (t = o.getPreviousArchiveDay(); 0 === t.get("media").length;) t = o.getPreviousArchiveDay(t.get("id"));
                else
                    for (t = o.getPreviousDay(); 0 === t.get("media").length;) t = o.getPreviousDay(t.get("id"));
                a.navigate("#!/" + t.get("fullRoute"), {
                    trigger: !0
                })
            },
            goToNextDay: function() {
                var t, e = this.model.get("id");
                if (this.isCategoryDay)
                    for (t = o.getNextCatDay(e); 0 === t.get("media").length;) t = o.getNextCatDay(t.get("id"));
                else if (this.isArchiveDay)
                    for (t = o.getNextArchiveDay(); 0 === t.get("media").length;) t = o.getNextArchiveDay(t.get("id"));
                else
                    for (t = o.getNextDay(); 0 === t.get("media").length;) t = o.getNextDay(t.get("id"));
                a.navigate("#!/" + t.get("fullRoute"), {
                    trigger: !0
                })
            },
            getNumDays: function() {
                var t = 0;
                return t = this.isCategoryDay ? o.getCategory().getMediaDays().length : this.isArchiveDay ? o.getArchive().getMediaDays().length : o.getYear().getAllMediaDays().length
            },
            updateChildViews: function() {
                this.$rootNode.scrollTop(0);
                var t = this.model.get("title"),
                    e = this.model.get("description"),
                    i = this.model.get("link");
                t = t.replace(/&#169;|&#xA9;|&#174;|&#xAE;/gi, function(t) {
                    return '<span class="superscript">' + t + "</span>"
                }), this.$(".js-title").html(t), this.$(".js-description").html(e), this.$(".js-link").attr("href", i), "" === i && this.$(".js-detailsNav-link").remove(), this.$followProgress = this.$(".js-follow-progress"), this.isFollowProgress ? this.$followProgress.on("click", this.onFollowProgressClick) : this.$followProgress.remove();
                var n = this.model.get("media")[0];
                "image" === n.type ? this.loadImage() : "video" === n.type && this.loadVideo()
            },
            render: function() {
                this.$prevBtn = this.$(".js-prev-btn"), this.$nextBtn = this.$(".js-next-btn"), this.$preloader = this.$(".js-preload"), this.$media = this.$(".js-media"), this.$nav = this.$(".js-detailsNav"), this.$shareBtns = this.$(".js-socialBlock__btn"), this.$detailsInfo = this.$(".js-detailsInfo"), this.$buttons = this.$(".js-buttons")
            },
            destroy: function() {
                this.removeEvents(), l.prototype.destroy.apply(this)
            }
        })
    }), define("view/modules/buttons/animated_arrowbtn_view", ["jquery", "underscore", "config", "TweenMax", "backbone", "view/common/base_view", "view/templates/desktop"], function(t, e, i, n, s, r, a) {
        "use strict";
        return r.extend({
            $arrow: null,
            isOpen: !0,
            initialize: function(t) {
                e.bindAll(this, "onEnter", "onLeave", "onComplete"), this.render(), this.setDefault(), this.addEvents()
            },
            addEvents: function() {
                this.$el.on("mouseenter", this.onEnter), this.$el.on("mouseleave", this.onLeave), i.TABLET ? this.$el.hammer().on("tap", this.onClick) : this.$el.on("click", this.onClick)
            },
            removeEvents: function() {
                this.$el.off("mouseenter", this.onEnter),
                    this.$el.off("mouseout", this.onLeave), i.TABLET ? this.$el.data("hammer").destroy() : this.$el.off("click", this.on)
            },
            setDefault: function() {
                var t = this.$el.find(".js-icon"),
                    e = t.find(".svg"),
                    s = t.find(".js-line");
                9 === i.getIEversion() && t.addClass("iefix"), n.set(t, {
                    y: 0,
                    x: 0,
                    borderWidth: 1
                }), n.set(e, {
                    x: 0,
                    alpha: 1
                }), n.set(s, {
                    x: -20,
                    y: 0,
                    opacity: 0
                })
            },
            enter: function() {},
            close: function() {
                this.isOpen = !1, this.removeEvents(), n.to(this.$arrow, .5, {
                    x: 30,
                    opacity: 0,
                    ease: "Expo.easeOut",
                    onComplete: this.onComplete
                })
            },
            open: function() {
                this.isOpen || (this.isOpen = !0, this.addEvents(), n.set(this.$arrow, {
                    x: 0,
                    opacity: 1
                }))
            },
            onEnter: function() {
                var t = this.$el.find(".js-icon"),
                    e = t.find(".svg"),
                    i = t.find(".js-line");
                n.to(this.$el, .2, {
                    color: 16777215
                }), n.to(t, .6, {
                    y: 0,
                    x: 0,
                    borderWidth: 0,
                    force3D: !0,
                    ease: "Expo.easeOut"
                }), n.to(e, .6, {
                    x: 12,
                    force3D: !0,
                    ease: "Expo.easeOut"
                }), n.to(i, .6, {
                    x: 6,
                    y: 1,
                    opacity: 1,
                    force3D: !0,
                    ease: "Expo.easeOut"
                }), this.trigger("button:mouseenter")
            },
            onLeave: function() {
                var t = this.$el.find(".js-icon"),
                    e = t.find(".svg"),
                    i = t.find(".js-line");
                n.to(this.$el, .1, {
                    color: 15589320
                }), n.to(t, .6, {
                    y: 0,
                    x: 0,
                    borderWidth: 1,
                    force3D: !0,
                    ease: "Expo.easeOut"
                }), n.to(e, .6, {
                    x: 0,
                    alpha: 1,
                    force3D: !0,
                    ease: "Expo.easeOut"
                }), n.to(i, .6, {
                    x: -20,
                    y: 0,
                    opacity: 0,
                    force3D: !0,
                    ease: "Expo.easeOut"
                }), this.trigger("button:mouseleave")
            },
            onComplete: function() {
                this.trigger("button:complete")
            },
            onClick: function() {},
            render: function() {
                this.$arrow = this.$el.find(".js-icon")
            },
            hide: function() {},
            destroy: function() {
                this.stopListening(), this.off(), this.$el.empty(), this.removeEvents()
            }
        })
    }), define("view/modules/form/form_view", ["jquery", "underscore", "backbone", "config", "events/app_events", "TweenMax", "view/common/base_view", "view/modules/buttons/animated_arrowbtn_view"], function(t, e, i, n, s, r, a, o) {
        "use strict";
        return a.extend({
            events: {
                "click .js-form__submitBtn": "onSubmit"
            },
            initialize: function(t) {
                e.bindAll(this, "onSuccess", "onError"), this.data = t.data, this.setup()
            },
            setup: function() {
                this.$firstNameInput = this.$("#firstname"), this.$lastNameInput = this.$("#lastname"), this.$emailInput = this.$("#email"), this.$firstNameInput.attr("placeholder", this.data.form.firstName), this.$lastNameInput.attr("placeholder", this.data.form.lastName), this.$emailInput.attr("placeholder", this.data.form.email), this.$submitBtn = this.$(".js-form__submitBtn"), this.$form = this.$("form"), this.$title = this.$(".js-form__title"), this.$subtitle = this.$(".js-form__subtitle"), this.$descTop = this.$(".js-form__descTop"), this.$twitter = this.$(".js-twitter"), this.$facebook = this.$(".js-facebook"), this.$button = this.$(".js-form__submit"), this.$title.text(this.data.title), this.$subtitle.text(this.data.form.title.toUpperCase()), this.$descTop.text(this.data.description), this.$facebook.text(this.data.facebook), this.$twitter.text(this.data.twitter), this.$button.text(this.data.form.button), this.createSubmitBtn()
            },
            createSubmitBtn: function() {
                this.submitBtnView = new o({
                    el: this.$submitBtn
                })
            },
            onSubmit: function(t) {
                this.validate() && (t.preventDefault(), this.onFormUpload(), this.submitBtnView.close())
            },
            onFormUpload: function() {
                var e = {
                    sourceCode: 353,
                    firstName: this.$firstNameInput.val(),
                    lastName: this.$lastNameInput.val(),
                    email: this.$emailInput.val(),
                    zipcode: "00000"
                };
                t.ajax({
                    type: "POST",
                    url: n.FORM_ENDPOINT,
                    data: e,
                    success: this.onSuccess,
                    error: this.onError
                })
            },
            onSuccess: function(t) {
                this.$subtitle.html(this.data.form.success.title.toUpperCase() + "<br><br>" + this.data.form.success.text.toUpperCase()), r.set(this.$form, {
                    opacity: 0
                }), this.submitBtnView.open()
            },
            onError: function(t) {
                this.submitBtnView.open()
            },
            show: function() {
                this.$firstNameInput.val(""), this.$lastNameInput.val(""), this.$emailInput.val("")
            },
            hide: function() {},
            validate: function() {
                var e = [],
                    i = [],
                    n = this.$firstNameInput.val();
                this.validateName(n) ? i.push(this.$firstNameInput) : e.push(this.$firstNameInput);
                var s = this.$lastNameInput.val();
                this.validateName(s) ? i.push(this.$lastNameInput) : e.push(this.$lastNameInput);
                var r = t.trim(this.$emailInput.val());
                this.validateEmail(r) ? i.push(this.$emailInput) : e.push(this.$emailInput);
                var a;
                for (a = 0; a < i.length; a++) i[a].removeClass("error");
                for (a = 0; a < e.length; a++) e[a].addClass("error");
                return 0 === e.length
            },
            validateName: function(t) {
                var e = /^[a-zA-Z0-9 '-]+$/;
                return "" !== t && -1 !== t.search(e)
            },
            validateEmail: function(t) {
                var e = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return e.test(t)
            }
        })
    }), define("view/modules/buttons/close_btn_view", ["jquery", "underscore", "config", "TweenMax", "backbone", "view/common/base_view"], function(t, e, i, n, s, r) {
        "use strict";
        return r.extend({
            $lineClose1: null,
            $lineClose2: null,
            $circleClose: null,
            $lineClose1Bold: null,
            $lineClose2Bold: null,
            initialize: function(t) {
                e.bindAll(this, "onMouseEnter", "onMouseLeave", "addEvents"), this.setup(), this.setDefault()
            },
            setup: function() {
                this.$lineClose1 = this.$(".btn--close__line_left"), this.$lineClose2 = this.$(".btn--close__line_right"), this.$circleClose = this.$(".btn--close__circle"), this.$lineClose1Bold = this.$(".btn--close__line_left_bold"), this.$lineClose2Bold = this.$(".btn--close__line_right_bold")
            },
            addEvents: function() {
                this.$el.on("mouseenter", this.onMouseEnter), this.$el.on("mouseleave", this.onMouseLeave)
            },
            removeEvents: function() {
                this.$el.off("mouseenter", this.onMouseEnter), this.$el.off("mouseleave", this.onMouseLeave)
            },
            setDefault: function() {
                n.set(this.$lineClose1, {
                    x: -25,
                    y: -25,
                    rotation: 45,
                    scaleX: .75,
                    autoAlpha: 0
                }), n.set(this.$lineClose2, {
                    x: -25,
                    y: 25,
                    rotation: -45,
                    scaleX: .75,
                    autoAlpha: 0
                }), n.set(this.$circleClose, {
                    scaleX: .7,
                    scaleY: .7,
                    autoAlpha: 0
                }), n.set(this.$lineClose1Bold, {
                    x: -25,
                    y: -25,
                    rotation: 45,
                    autoAlpha: 0
                }), n.set(this.$lineClose2Bold, {
                    x: -25,
                    y: 25,
                    rotation: -45,
                    autoAlpha: 0
                })
            },
            onMouseEnter: function() {
                n.killTweensOf([this.$lineClose1Bold, this.$lineClose2Bold]), n.set(this.$lineClose1Bold, {
                    x: -25,
                    y: -25,
                    scaleX: 1,
                    autoAlpha: 0
                }), n.set(this.$lineClose2Bold, {
                    x: -25,
                    y: 25,
                    scaleX: 1,
                    autoAlpha: 0
                }), n.to(this.$lineClose1Bold, .6, {
                    x: 0,
                    y: 0,
                    ease: "Expo.easeOut",
                    autoAlpha: 1
                }), n.to(this.$lineClose2Bold, .6, {
                    x: 0,
                    y: 0,
                    ease: "Expo.easeOut",
                    autoAlpha: 1
                }), n.to(this.$circleClose, .6, {
                    scaleX: .7,
                    scaleY: .7,
                    autoAlpha: 0,
                    ease: "Expo.easeOut"
                })
            },
            onMouseLeave: function() {
                n.to(this.$lineClose1Bold, .6, {
                    scaleX: .7,
                    ease: "Expo.easeOut",
                    autoAlpha: 0
                }), n.to(this.$lineClose2Bold, .6, {
                    scaleX: .7,
                    ease: "Expo.easeOut",
                    autoAlpha: 0
                }), n.to(this.$circleClose, .6, {
                    scaleX: 1,
                    scaleY: 1,
                    autoAlpha: 1,
                    ease: "Expo.easeOut"
                })
            },
            show: function(t) {
                this.$el.css({
                    visibility: "visible",
                    display: "block"
                }), n.set(this.$lineClose1, {
                    x: -50,
                    y: -50,
                    autoAlpha: 0
                }), n.set(this.$lineClose2, {
                    x: -50,
                    y: 50,
                    autoAlpha: 0
                }), n.set(this.$circleClose, {
                    scaleX: .75,
                    scaleY: .75,
                    autoAlpha: 0
                }), n.to(this.$lineClose1, .6, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    force3D: !0,
                    delay: t,
                    ease: "Expo.easeOut"
                }), n.to(this.$lineClose2, .6, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    force3D: !0,
                    delay: t,
                    ease: "Expo.easeOut"
                }), n.to(this.$circleClose, .3, {
                    scaleX: 1,
                    scaleY: 1,
                    autoAlpha: 1,
                    delay: t,
                    ease: "Expo.easeOut",
                    onComplete: this.addEvents
                })
            },
            hide: function() {
                this.removeEvents(), n.to(this.$lineClose1Bold, .6, {
                    scaleX: .7,
                    ease: "Expo.easeOut",
                    autoAlpha: 0
                }), n.to(this.$lineClose2Bold, .6, {
                    scaleX: .7,
                    ease: "Expo.easeOut",
                    autoAlpha: 0
                }), n.to(this.$lineClose1, .6, {
                    x: 50,
                    y: 50,
                    autoAlpha: 0,
                    force3D: !0,
                    ease: "Expo.easeIn"
                }), n.to(this.$lineClose2, .6, {
                    x: 50,
                    y: -50,
                    autoAlpha: 0,
                    force3D: !0,
                    ease: "Expo.easeIn"
                }), n.to(this.$circleClose, .6, {
                    scaleX: .7,
                    scaleY: .7,
                    autoAlpha: 0,
                    ease: "Expo.easeIn"
                })
            }
        })
    }), define("view/pages/mobile/about_page", ["jquery", "underscore", "backbone", "config", "route/router", "model/app_model", "view/common/base_view", "view/modules/form/form_view", "view/modules/buttons/close_btn_view", "model/loader_collection", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h, c) {
        "use strict";
        return a.extend({
            $aboutHeroImage: null,
            $aboutContent: null,
            $aboutForm: null,
            formView: null,
            closeBtnView: null,
            initialize: function(t) {
                e.bindAll(this, "onHideComplete"), this.data = r.get("about"), this.setup()
            },
            setup: function() {
                this.$aboutHeroImage = this.$(".js-about__heroImage"), this.$aboutContent = this.$(".js-about__content"), this.$aboutForm = this.$(".js-about__form"), this.$aboutClose = this.$(".js-about__close"), this.$heading = this.$(".js-about__heading"), this.$title = this.$(".js-about__title"), this.$descTitle = this.$(".js-about__subtitle"), this.$aboutText = this.$(".js-about__text"), this.$heading.text(this.data.get("heading")), this.$title.text(this.data.get("title"));
                var t = this.data.get("description");
                this.$descTitle.text(t.title), this.$aboutText.text(unescape(encodeURIComponent(t.text))), this.$aboutHeroImage.attr("src", this.data.get("image")), this.createForm()
            },
            addEvents: function() {
                n.TABLET ? this.$aboutClose.hammer().on("click", this.onCloseClick) : this.$aboutClose.on("click", this.onCloseClick)
            },
            removeEvents: function() {
                n.TABLET ? this.$aboutClose.data("hammer").destroy() : this.$aboutClose.off("click", this.onCloseClick)
            },
            createForm: function() {
                this.formView = new o({
                    el: this.$aboutForm,
                    data: this.data.get("signup")
                })
            },
            onResize: function() {},
            show: function() {
                this.$el.show(), c.page("about"), t("body").addClass("about-page")
            },
            destroy: function() {
                t("body").removeClass("about-page"), a.prototype.destroy.apply(this)
            }
        })
    }), define("view/modules/mobile/details/dropdown_view", ["jquery", "underscore", "config", "route/router", "TweenMax", "model/app_model", "view/common/base_view", "view/templates/desktop"], function(t, e, i, n, s, r, a, o) {
        "use strict";
        return a.extend({
            $btn: null,
            $list: null,
            $listWrapper: null,
            $listBck: null,
            $listItems: null,
            $bck: null,
            $icon: null,
            isOpened: null,
            current: null,
            initialize: function() {
                e.bindAll(this, "onButtonTap", "onItemTap", "onBackgroundTap", "onCloseComplete"), this.isOpened = !1, this.render(), this.setDefault()
            },
            setDefault: function() {
                s.set(this.$listBck, {
                    y: -20,
                    opacity: 0
                }), s.set(this.$listItems, {
                    x: -10,
                    opacity: 0
                }), s.set(this.$icon, {
                    y: -5,
                    opacity: 0
                }), this.$listWrapper.css({
                    visibility: "hidden"
                }), this.$bck.css({
                    opacity: 0,
                    visibility: "hidden"
                })
            },
            addEvents: function() {
                this.$btn.hammer().on("tap", this.onButtonTap), this.$bck.hammer().on("tap", this.onBackgroundTap), this.$listItems.hammer().on("tap", this.onItemTap)
            },
            removeEvents: function() {
                this.$btn.data("hammer").destroy(), this.$bck.data("hammer").destroy(), this.$listItems.data("hammer").destroy()
            },
            open: function() {
                this.isOpened = !0, this.switchIcon(), this.$listWrapper.css({
                    visibility: "visible"
                }), s.killTweensOf([this.$listBck, this.$listItems, this.$bck]), s.to(this.$listBck, .36, {
                    y: 0,
                    opacity: 1,
                    force3D: !0,
                    ease: "Power2.easeInOut"
                }), s.to(this.$bck, .36, {
                    autoAlpha: 1,
                    force3D: !0,
                    ease: "Power2.easeInOut"
                }), s.set(this.$listItems, {
                    x: -9
                }), s.staggerTo(this.$listItems, .68, {
                    x: 0,
                    opacity: 1,
                    force3D: !0,
                    ease: "Expo.easeOut",
                    delay: .29
                }, .07)
            },
            close: function() {
                this.isOpened = !1, this.switchIcon(), s.killTweensOf([this.$listBck, this.$listItems, this.$bck]), s.to(this.$listBck, .36, {
                    y: -24,
                    opacity: 0,
                    force3D: !0,
                    ease: "Power2.easeInOut",
                    delay: .36,
                    onComplete: this.onCloseComplete
                }), s.to(this.$bck, .36, {
                    autoAlpha: 0,
                    force3D: !0,
                    ease: "Power2.easeInOut"
                }), s.staggerTo(this.$listItems, .36, {
                    x: 9,
                    opacity: 0,
                    force3D: !0,
                    ease: "Expo.easeIn"
                }, .07)
            },
            switchIcon: function() {
                var t = function() {
                    this.isOpened ? this.$btn.addClass("is-rotated") : this.$btn.removeClass("is-rotated"), s.to(this.$icon, .31, {
                        y: 0,
                        opacity: 1,
                        ease: "Sine.easeInOut"
                    })
                };
                s.killTweensOf(this.$icon), s.to(this.$icon, .31, {
                    y: this.isOpened ? 4 : -4,
                    opacity: 0,
                    ease: "Sine.easeInOut",
                    onComplete: t.bind(this)
                })
            },
            selectItem: function(t) {
                this.current !== t && (this.$listItems.removeClass("is-selected").eq(t).addClass("is-selected"), this.current = t, this.close())
            },
            onButtonTap: function() {
                this.isOpened ? this.close() : this.open()
            },
            onBackgroundTap: function() {
                this.close()
            },
            onItemTap: function(t) {
                var e = this.$listItems.index(t.currentTarget),
                    i = r.howCanIHelp.get("howCanIHelp").at(e),
                    s = i.get("route"),
                    a = r.howCanIHelp.getFirstItemInCategory(s).get("route");
                n.navigate("!/howcanihelp/" + s + "/" + a, {
                    trigger: !0
                })
            },
            onCloseComplete: function() {
                this.$listWrapper.css({
                    visibility: "hidden"
                })
            },
            onResize: function() {
                this.$listWrapper.height(this.$list.innerHeight())
            },
            render: function() {
                var t = o.details_dropdown;
                this.compileAndAppendTemplate(t, {
                    list: r.howCanIHelp.get("howCanIHelp").toJSON()
                }), this.$btn = this.$(".js-button"), this.$listWrapper = this.$(".js-listWrapper"), this.$list = this.$(".js-list"), this.$listBck = this.$(".js-list-bck"), this.$listItems = this.$(".js-list-item"), this.$bck = this.$(".js-dropdown-bck"), this.$icon = this.$(".js-dropdown-icon")
            },
            destroy: function() {
                this.close(), this.stopListening(), this.off(), this.removeEvents()
            }
        })
    }), define("view/modules/form/suggestion_form_view", ["jquery", "underscore", "backbone", "config", "events/app_events", "TweenMax", "view/common/base_view", "view/modules/buttons/animated_arrowbtn_view"], function(t, e, i, n, s, r, a, o) {
        "use strict";
        return a.extend({
            events: {
                "click .js-form__submitBtn": "onSubmit",
                "click .js-form__socialBtn": "onSocial"
            },
            $window: null,
            $formTop: null,
            initialize: function(t) {
                e.bindAll(this, "onSuccess", "onError"), this.setup()
            },
            setup: function() {
                this.$content = this.$(".js-form__content"), this.$firstNameInput = this.$("#firstname"), this.$lastNameInput = this.$("#lastname"), this.$emailInput = this.$("#email"), this.$textInput = this.$("#text"), this.$submitBtn = this.$(".js-form__submitBtn"), this.$form = this.$("form"), this.$subtitle = this.$(".js-suggestion_form__subtitle"), this.$success = this.$(".js-form__success"), this.$success.detach(), this.$window = t(window), this.$formTop = this.$el.parent().find(".frm_o_contentInner"), this.createSubmitBtn()
            },
            createSubmitBtn: function() {
                this.submitBtnView = new o({
                    el: this.$submitBtn
                })
            },
            onSubmit: function(t) {
                this.validate() && (t.preventDefault(), this.onFormUpload(), this.submitBtnView.close())
            },
            onSocial: function(e) {
                e.preventDefault();
                var n = t(e.currentTarget).data("social");
                i.trigger(s.Share.Suggestion, n)
            },
            onFormUpload: function() {
                var e = {
                    sourceCode: 360,
                    firstName: this.$firstNameInput.val(),
                    lastName: this.$lastNameInput.val(),
                    zipcode: "99999",
                    email: this.$emailInput.val(),
                    comments: this.$textInput.val()
                };
                t.ajax({
                    type: "POST",
                    url: n.SUGGESTION_ENDPOINT,
                    data: e,
                    success: this.onSuccess,
                    error: this.onError
                })
            },
            onSuccess: function(e) {
                n.MOBILE && t("#rootNode").scrollTop(0), this.$content.append(this.$success), r.set(this.$success, {
                    autoAlpha: 0
                }), r.to([this.$subtitle, this.$form], .55, {
                    autoAlpha: 0,
                    force3D: !0,
                    ease: "Power2.easeIn"
                }), r.to(this.$success, .65, {
                    autoAlpha: 1,
                    delay: .5,
                    force3D: !0,
                    ease: "Power2.easeOut"
                }), this.submitBtnView.open()
            },
            onError: function(t) {
                this.submitBtnView.open()
            },
            onResize: function() {},
            show: function() {
                this.$firstNameInput.val(""), this.$lastNameInput.val(""), this.$emailInput.val(""), this.$textInput.val("")
            },
            hide: function() {},
            validate: function() {
                var e = [],
                    i = [],
                    n = this.$firstNameInput.val();
                this.validateName(n) ? i.push(this.$firstNameInput) : e.push(this.$firstNameInput);
                var s = this.$lastNameInput.val();
                this.validateName(s) ? i.push(this.$lastNameInput) : e.push(this.$lastNameInput);
                var r = t.trim(this.$emailInput.val());
                this.validateEmail(r) ? i.push(this.$emailInput) : e.push(this.$emailInput);
                var a = t.trim(this.$textInput.val());
                this.validateText(a) ? i.push(this.$textInput) : e.push(this.$textInput);
                var o;
                for (o = 0; o < i.length; o++) i[o].removeClass("error");
                for (o = 0; o < e.length; o++) e[o].addClass("error");
                return 0 === e.length
            },
            validateName: function(t) {
                var e = /^[a-zA-Z0-9 '-]+$/;
                return "" !== t && -1 !== t.search(e)
            },
            validateText: function(t) {
                return "" !== t
            },
            validateEmail: function(t) {
                var e = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return e.test(t)
            }
        })
    }), define("view/modules/mobile/suggestion/suggestion_view", ["jquery", "underscore", "backbone", "TweenMax", "model/app_model", "view/common/base_view", "view/modules/form/suggestion_form_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o) {
        "use strict";
        return r.extend({
            $form: null,
            $close: null,
            formView: null,
            eventHandler: null,
            initialize: function(t) {
                e.bindAll(this, "onCloseTap", "onCloseComplete"), this.eventHandler = t.eventHandler, this.setup()
            },
            setup: function() {
                this.$form = this.$(".js-suggestion__form"), this.$close = this.$(".js-suggestion__close"), this.createForm(), this.setDefault()
            },
            setDefault: function() {
                this.$el.css({
                    display: "none"
                }), n.set(this.$el, {
                    y: 80,
                    autoAlpha: 0,
                    force3D: !0
                })
            },
            addEvents: function() {
                this.$close.hammer().on("tap", this.onCloseTap)
            },
            removeEvents: function() {
                this.$close.data("hammer").destroy()
            },
            createForm: function() {
                this.formView = new a({
                    el: this.$form
                })
            },
            onCloseTap: function() {
                this.eventHandler.trigger("suggestion:close")
            },
            onCloseComplete: function() {
                this.$el.css({
                    display: "none"
                })
            },
            onResize: function() {},
            close: function() {
                n.to(this.$el, .6, {
                    y: 80,
                    autoAlpha: 0,
                    force3D: !0,
                    ease: "Expo.easeIn",
                    onComplete: this.onCloseComplete
                })
            },
            open: function() {
                this.setDefault(), this.$el.css({
                    display: "block"
                }), n.to(this.$el, .9, {
                    y: 0,
                    autoAlpha: 1,
                    force3D: !0,
                    delay: .2,
                    ease: "Expo.easeOut"
                }), o.page("suggestion")
            },
            destroy: function() {
                this.off(), this.removeEvents()
            }
        })
    }), define("view/pages/mobile/help_page", ["jquery", "underscore", "backbone", "config", "events/app_events", "TweenMax", "route/router", "model/app_model", "view/common/base_view", "view/modules/mobile/details/dropdown_view", "view/modules/mobile/suggestion/suggestion_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h, c, u) {
        "use strict";
        return l.extend({
            $rootNode: null,
            $prevBtn: null,
            $nextBtn: null,
            $preloader: null,
            $dropdown: null,
            $content: null,
            $media: null,
            $nav: null,
            $detailsInfo: null,
            $buttons: null,
            image: null,
            video: null,
            isFirstOpened: !0,
            followProgress: !0,
            imageLoading: null,
            currentCategory: null,
            currentItemId: null,
            eventHandler: null,
            initialize: function(n) {
                e.bindAll(this, "onImageLoaded", "onLeftTap", "onRightTap", "onShareBtnTap", "onSuggestionTap", "onSuggestionClose"), this.$rootNode = t("#rootNode"), this.eventHandler = e.extend({}, i.Events), this.render(), this.createDropdown(), this.createSuggestion()
            },
            createDropdown: function() {
                this.dropdownView = new h({
                    el: this.$dropdown
                })
            },
            createSuggestion: function() {
                this.suggestionView = new c({
                    el: this.$suggestion,
                    eventHandler: this.eventHandler
                })
            },
            show: function() {
                this.$el.show(), this.resetElements(), this.addEvents(), u.page("how_can_i_help")
            },
            hide: function() {
                this.$el.hide(), this.isFirstOpened = !0, this.trigger("hideComplete"), this.destroy()
            },
            addEvents: function() {
                this.$prevBtn.hammer().on("tap", this.onLeftTap), this.$nextBtn.hammer().on("tap", this.onRightTap), this.$suggestionLink.hammer().on("tap", this.onSuggestionTap), this.$shareBtns.hammer().on("tap", this.onShareBtnTap), this.dropdownView.addEvents(), this.suggestionView.addEvents(), this.eventHandler.on("suggestion:close", this.onSuggestionClose)
            },
            removeEvents: function() {
                this.$prevBtn.data("hammer").destroy(), this.$nextBtn.data("hammer").destroy(), this.$suggestionLink.data("hammer").destroy(), this.$shareBtns.data("hammer").destroy(), this.dropdownView.removeEvents(), this.suggestionView.removeEvents(), this.eventHandler.off("suggestion:close", this.onSuggestionClose)
            },
            openSuggestion: function() {
                this.$rootNode.scrollTop(0), this.suggestionView.open(), r.killTweensOf(this.$content), r.to(this.$content, .34, {
                    autoAlpha: 0,
                    delay: .44,
                    force3D: !0,
                    ease: "Sine.easeInOut"
                })
            },
            closeSuggestion: function() {
                this.suggestionView.close(), r.killTweensOf(this.$content), r.to(this.$content, .34, {
                    autoAlpha: 1,
                    delay: .34,
                    force3D: !0,
                    ease: "Sine.easeInOut"
                })
            },
            loadVideo: function() {
                var e = this.model.get("media")[0];
                if (e) {
                    var i = t(e.src),
                        n = i.attr("src") + "?enablejsapi=1&controls=0&rel=0&showinfo=0";
                    i.attr("src", n), i.attr("id", "ytplayer"), this.$media.empty(), this.$media.html(i), this.animateOutPreloader()
                }
            },
            loadImage: function() {
                if (!this.imageLoading) {
                    var t = this.model.get("media")[0];
                    if (t) {
                        var e = t.images.l.src;
                        this.image = new Image, this.image.onload = this.onImageLoaded, this.image.src = e
                    }
                    this.imageLoading = !0
                }
            },
            animateInElements: function() {
                r.killTweensOf([this.$detailsInfo, this.$nav, this.$buttons]), r.to(this.$detailsInfo, .5, {
                    alpha: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }), r.to(this.$nav, .5, {
                    alpha: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                });
                var t = this.getNumDays();
                t > 1 ? r.to(this.$buttons, .5, {
                    autoAlpha: 1,
                    delay: .6,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }) : r.to(this.$buttons, .5, {
                    autoAlpha: 0,
                    delay: .6,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                })
            },
            animateOutPreloader: function() {
                r.killTweensOf([this.$preloader, this.$media]), r.to(this.$preloader, .2, {
                    alpha: 0,
                    delay: .2,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                }), r.to(this.$media, .5, {
                    alpha: 1,
                    delay: .4,
                    force3D: !0,
                    ease: "Sine.easeInOut",
                    clearProps: "transform"
                })
            },
            resetElements: function() {
                r.killTweensOf([this.$preloader, this.$media, this.$detailsInfo, this.$nav, this.$buttons]), this.$img && (this.$img.remove(), this.$img = null), this.imageLoading = !1, this.$preloader.css("opacity", 1), this.$media.css("opacity", 0), this.$detailsInfo.css("opacity", 0), this.$nav.css("opacity", 0), this.$buttons.css("opacity", 0)
            },
            onPageOptionsChange: function(t) {
                this.currentCategory = o.get("pageOptions")[0], this.currentItemId = o.get("pageOptions")[1], this.model = o.howCanIHelp.getItemInCategory(this.currentCategory, this.currentItemId), this.resetElements(), this.updateChildViews(), this.animateInElements()
            },
            onImageLoaded: function() {
                this.$media.empty(), this.$media.append(this.image), this.animateOutPreloader()
            },
            onLeftTap: function(t) {
                t.preventDefault(), t.stopPropagation(), this.goToPreviousDay()
            },
            onRightTap: function(t) {
                t.preventDefault(), t.stopPropagation(), this.goToNextDay()
            },
            onShareBtnTap: function(e) {
                e.preventDefault(), e.stopPropagation();
                var n = t(e.currentTarget).data("social");
                i.trigger(s.Share.Detail, {
                    type: n,
                    model: this.model
                })
            },
            onSuggestionTap: function(t) {
                t.preventDefault(), t.stopImmediatePropagation(), this.openSuggestion()
            },
            onSuggestionClose: function() {
                this.closeSuggestion()
            },
            onFollowProgressTap: function(t) {
                t.preventDefault(), a.navigate("#!/about", {
                    trigger: !0
                })
            },
            onResize: function() {
                var t = this.$el.width(),
                    e = 9 * t / 16;
                this.$(".js-media-wrap").css({
                    "margin-top": 48,
                    width: t,
                    height: e
                }), this.dropdownView && this.dropdownView.onResize()
            },
            goToPreviousDay: function() {
                var t = o.howCanIHelp.getPrevItemInCategory(this.currentCategory, this.currentItemId);
                a.navigate("!/howcanihelp/" + this.currentCategory + "/" + t.get("route"), {
                    trigger: !0
                })
            },
            goToNextDay: function() {
                var t = o.howCanIHelp.getNextItemInCategory(this.currentCategory, this.currentItemId);
                a.navigate("!/howcanihelp/" + this.currentCategory + "/" + t.get("route"), {
                    trigger: !0
                })
            },
            getNumDays: function() {
                var t = o.howCanIHelp.getCategoryIndex(this.currentCategory),
                    e = o.howCanIHelp.getCategoryAtIndex(t),
                    i = e.getMediaDays().length;
                return i
            },
            updateChildViews: function() {
                this.$rootNode.scrollTop(0), this.updateContent(), this.updateDropdown(), this.onResize()
            },
            updateContent: function() {
                var t = this.model.get("title"),
                    e = this.model.get("description"),
                    i = this.model.get("link");
                this.$(".js-title").text(t), this.$(".js-description").html(e), this.$(".js-link").attr("href", i), this.$navLink = this.$(".js-detailsNav-link"), this.$navLink.remove(), this.$followProgress = this.$(".js-follow-progress"), this.followProgress ? this.$followProgress.on("click", this.onFollowProgressTap) : this.$followProgress.remove();
                var n = this.model.get("media")[0];
                "image" === n.type ? this.loadImage() : "video" === n.type && this.loadVideo()
            },
            updateDropdown: function() {
                var t = o.howCanIHelp.getCategoryIndex(o.get("pageOptions")[0]);
                this.dropdownView.selectItem(t)
            },
            render: function() {
                this.$prevBtn = this.$(".js-prev-btn"), this.$nextBtn = this.$(".js-next-btn"), this.$preloader = this.$(".js-preload"), this.$dropdown = this.$(".js-dropdown"), this.$content = this.$(".js-details__content"), this.$suggestion = this.$(".js-details__suggestion"), this.$media = this.$(".js-media"), this.$nav = this.$(".js-detailsNav"), this.$shareBtns = this.$(".js-socialBlock__btn"), this.$suggestionLink = this.$(".js-suggestion-link"), this.$detailsInfo = this.$(".js-detailsInfo"), this.$buttons = this.$(".js-buttons")
            },
            destroy: function() {
                this.dropdownView && this.dropdownView.destroy(), this.closeSuggestion(), this.removeEvents(), l.prototype.destroy.apply(this)
            }
        })
    }), define("view/modules/mobile/menu_view", ["jquery", "underscore", "backbone", "config", "model/app_model", "events/app_events", "TweenMax", "route/router", "view/common/base_view", "controller/tracking_controller"], function(t, e, i, n, s, r, a, o, l, h) {
        "use strict";
        var c = l.extend({
            $container: null,
            $links: null,
            $logoLink: null,
            $subaruLink: null,
            $shareLink: null,
            $linksWrapper: null,
            $treeWrapper: null,
            $treePathGroup: null,
            wWidth: 0,
            wHeight: 0,
            treeWidth: 0,
            treeHeight: 0,
            initialize: function() {
                e.bindAll(this, "onLinkTouch", "onShareTouch", "onLogoTouch", "onAboutModelChange", "animateInLinks"), this.render(), this.addEvents(), this.onResize()
            },
            addEvents: function() {
                s.on("change:menuMobileOpen", this.onMenuMobileChange, this), s.on("change:about", this.onAboutModelChange, this), this.$links.on("click", this.onLinkTouch), this.$shareBtns.on("click", this.onShareTouch), this.$subaruLink.on("click", this.onLogoTouch)
            },
            removeEvents: function() {
                s.off("change:menuMobileOpen", this.onMenuMobileChange, this), s.off("change:about", this.onAboutModelChange, this), this.$links.off("click", this.onLinkTouch), this.$shareBtns.off("click", this.onShareTouch), this.$subaruLink.off("click", this.onLogoTouch)
            },
            show: function() {
                this.$el.show(), this.setAnimateDefault(), this.animateInTree(), h.page("menu")
            },
            hide: function() {
                this.$el.hide(), this.$shareLink.removeClass("is-active")
            },
            setAnimateDefault: function() {
                for (var e = this.$treePathGroup.find("path"), i = 0; i < e.length; i++) a.set(e[i], {
                    opacity: 0
                });
                for (var n = 0; n < this.$links.length; n++) {
                    var s = t(this.$links[n]),
                        r = s.find(".js-bullet"),
                        o = s.find(".js-text");
                    a.set(r, {
                        scale: 0
                    }), a.set(o, {
                        x: -15,
                        opacity: 0
                    })
                }
            },
            animateInTree: function() {
                for (var t = this.$treePathGroup.find("path"), e = (t.length, 0); e < t.length; e++) {
                    var i = t[e],
                        n = .08 * e;
                    a.killTweensOf(i), a.to(i, .4, {
                        opacity: 1,
                        delay: .1 + n,
                        force3D: !0,
                        ease: "Sine.easeOut"
                    })
                }
                a.delayedCall(.7, this.animateInLinks)
            },
            animateInLinks: function() {
                for (var e = 0; e < this.$links.length; e++) {
                    var i = t(this.$links[e]),
                        n = i.find(".js-bullet"),
                        s = i.find(".js-text"),
                        r = .1 * e;
                    a.killTweensOf([n, s]), a.to(n, .5, {
                        scale: 1,
                        delay: r + .2,
                        force3D: !0,
                        ease: "Back.easeOut"
                    }), a.to(s, 1, {
                        opacity: 1,
                        x: 0,
                        delay: r,
                        force3D: !0,
                        ease: "Power4.easeOut"
                    })
                }
            },
            onLinkTouch: function(e) {
                e.preventDefault(), e.stopPropagation();
                var i, n = t(e.currentTarget),
                    r = n.data("order");
                switch (r) {
                    case 1:
                        i = "#!/", h.event("menu", "click", "home");
                        break;
                    case 2:
                        var a = s.getYears().length - 1;
                        i = "#!/" + s.getYear(a).get("route"), h.event("menu", "click", "timeline");
                        break;
                    case 3:
                        var l = s.howCanIHelp.getInitRoute();
                        i = "#!/howcanihelp/" + l.category + "/" + l.item, h.event("menu", "click", "howcanihelp");
                        break;
                    case 4:
                        i = "#!/" + s.PAGES.ABOUT.toLowerCase(), h.event("menu", "click", "about");
                        break;
                    case 5:
                        this.$shareLink.addClass("is-active")
                }
                5 !== r && (s.set("menuMobileOpen", !1), o.navigate(i, {
                    trigger: i
                }))
            },
            onShareTouch: function(e) {
                e.preventDefault();
                var n = t(e.currentTarget).data("social");
                i.trigger(r.Share.Global, n)
            },
            onLogoTouch: function(t) {
                t.preventDefault(), h.event("outbound", "click", "subaru.com")
            },
            onMenuMobileChange: function() {
                var t = s.get("menuMobileOpen");
                t === !0 ? this.show() : this.hide()
            },
            onAboutModelChange: function() {
                var t = s.get("about").get("heading");
                this.$(".js-text-aboutLink").text(t)
            },
            onResize: function(e) {
                this.wWidth = t(window).width(), this.wHeight = t(window).height(), this.resizeElts()
            },
            render: function() {
                this.$container = this.$(".js-mobile-menu__container"), this.$links = this.$(".js-menu__link"), this.$shareLink = this.$(".js-menu__share"), this.$shareBtns = this.$(".js-socialBlock__btn"), this.$logoLink = this.$(".js-menu__logo").children("a"), this.$subaruLink = this.$(".js-menu__subaruLink"), this.$linksWrapper = this.$(".js-menu__links"), this.$treeWrapper = this.$(".js-tree-wrapper"), this.$treePathGroup = this.$(".js-tree-path-group")
            },
            resizeElts: function() {
                var t = [this.$treeWrapper, this.$linksWrapper];
                this.treeWidth = this.wWidth + 95, this.treeHeight = this.treeWidth;
                for (var e = 0; e < t.length; e++) t[e].css({
                    position: "absolute",
                    height: this.treeHeight,
                    width: this.treeWidth,
                    left: .5 * this.wWidth - .5 * this.treeWidth,
                    top: .5 * this.wHeight - .45 * this.treeHeight
                })
            },
            destroy: function() {
                l.prototype.destroy.apply(this), this.removeEvents()
            }
        });
        return c
    }), define("view/modules/mobile/persistent_bg_view", ["jquery", "underscore", "config", "TweenMax", "util/anim_frame", "util/resn/animation", "route/router", "model/app_model", "view/common/base_view"], function(t, e, i, n, s, r, a, o, l) {
        "use strict";
        return l.extend({
            $window: null,
            $bg: null,
            $fade: null,
            tweenObj: {},
            w: null,
            h: null,
            imageW: null,
            imageH: null,
            imageTotalWidth: null,
            initialize: function(n) {
                e.bindAll(this, "onPageChange", "onMenuMobileChange", "onProgressScale"), this.$window = t(window), this.$fade = this.$(".js-bg-fade"), this.$bg = this.$(".js-bg"), this.$bg.css({
                    "background-image": "url(" + i.CDN + "/img/mobile/mountains.jpg)"
                }), this.tweenObj = {
                    prScale: 1.1
                }, this.onResize(), this.addEvents()
            },
            addEvents: function() {
                this.listenTo(o, "change:page", this.onPageChange), this.listenTo(o, "change:menuMobileOpen", this.onMenuMobileChange), s.on("anim_frame", this.onLoop, this)
            },
            removeEvents: function() {
                this.stopListening(o, "change:page", this.onPageChange), this.stopListening(o, "change:menuMobileOpen", this.onMenuMobileChange), s.off("anim_frame", this.onLoop, this)
            },
            onPageChange: function() {
                var t = o.get("page");
                switch (t) {
                    case o.PAGES_MOBILE.TREE_MONTH:
                    case o.PAGES_MOBILE.TREE_CATEGORY:
                    case o.PAGES.ARCHIVE:
                        this.setFadeOpacity(.75), this.setBGScale(1.2, 1.48);
                        break;
                    case o.PAGES.DETAILS:
                    case o.PAGES.HOW_CAN_I_HELP:
                        this.setFadeOpacity(.9), this.setBGScale(1.4, 1.48);
                        break;
                    default:
                        this.setFadeOpacity(.75), this.setBGScale(1, 1.6)
                }
            },
            onMenuMobileChange: function() {
                var t = o.get("menuMobileOpen");
                t ? this.setFadeOpacity(.9) : this.onPageChange()
            },
            setBGScale: function(t, e) {
                n.killTweensOf(this.tweenObj), n.to(this.tweenObj, e, {
                    prScale: t,
                    onUpdate: this.onProgressScale,
                    ease: "Cubic.easeInOut"
                })
            },
            setFadeOpacity: function(t) {
                n.killTweensOf(this.$fade), n.to(this.$fade, .5, {
                    opacity: t,
                    force3D: !0,
                    ease: "Sine.easeInOut"
                })
            },
            onResize: function() {
                this.w = this.$window.width(), this.h = this.$window.height(), this.$bg && this.adjustBg(this.$bg, 640, 1136)
            },
            onProgressScale: function() {
                var t = this.tweenObj.prScale;
                this.$bg && this.affectCss(0, 0, 0, t, this.$bg)
            },
            show: function() {
                this.$el.show()
            },
            hide: function() {
                this.$el.hide()
            },
            affectCss: function(t, e, i, n, s) {
                var a = r.getTransformationMatrix(t, e, i),
                    o = r.getScaleMatrix(n, n, n),
                    l = r.getResultMatrix([a, o]),
                    h = r.getStringTransform3d(l);
                s[0].style.webkitTransform = h, s[0].style.MozTransform = h, s[0].style.msTransform = h, s[0].style.OTransform = h, s[0].style.transform = h
            },
            adjustBg: function(t, e, i) {
                var n = this.h / i;
                if (this.imageW = e * n, this.imageH = this.h, this.imageW < this.w) {
                    var s = this.w / e;
                    this.imageH = i * s, this.imageW = this.w
                }
                this.imageTotalWidth = this.imageW, this.imageW = parseInt(this.imageW, 10), this.imageH = parseInt(this.imageH, 10);
                var r = 0,
                    a = (this.w - this.imageW) / 2;
                t.css({
                    position: "absolute",
                    top: r + "px",
                    left: a + "px",
                    width: this.imageW + "px",
                    height: this.imageH + "px"
                })
            },
            destroy: function() {
                this.removeEvents(), l.prototype.destroy.apply(this)
            }
        })
    }), define("view/common/transitioner/transitioner", ["jquery", "underscore", "config", "backbone", "controller/app_controller", "controller/loader_controller", "model/app_model"], function(t, e, i, n, s, r, a, o) {
        "use strict";
        return n.View.extend({
            activeTransitioner: null,
            elementsMap: null,
            initialize: function(t) {
                if (this.options = t, this.evaluateOptions(t), this.elementsMap = this.setupMapping(this.options.viewMap), this.activeTransitioner = this.options.transition, !this.activeTransitioner || !this.activeTransitioner.hasInterface()) throw new Error(' Transition needs to extend "transition_interface.js"');
                this.activeTransitioner.setMap(this.elementsMap), a.on("change:page", this.onAppModelPage, this), a.on("change:pageOptions", this.onPageOptionsChange, this)
            },
            evaluateOptions: function(t) {
                var i = ["viewMap", "transition"];
                e.each(i, function(t, i) {
                    if (!e.has(this.options, t)) throw new Error(t + " option not set")
                }, this)
            },
            setupMapping: function(t) {
                var i = {};
                return e.each(t, function(t, e) {
                    if (!t.className || !t.nodeSelector) throw new Error("RouteObject missing options: " + e);
                    var n = t.className,
                        s = this.$(t.nodeSelector),
                        r = s.parent();
                    i[e] = {
                        element: s,
                        parent: r,
                        className: n
                    }
                }, this), i
            },
            onResize: function(t) {
                this.activeTransitioner && this.activeTransitioner.onResize(t)
            },
            onAppModelPage: function(t, e) {
                this.activeTransitioner.show(e)
            },
            onPageOptionsChange: function(t, e) {
                (a.get("page") === a.PAGES.DETAILS || a.get("page") === a.PAGES.HOW_CAN_I_HELP || a.get("page") === a.PAGES_MOBILE.TREE_MONTH || a.get("page") === a.PAGES_MOBILE.TREE_CATEGORY) && this.activeTransitioner.setPageOptions(e)
            }
        })
    }), define("view/common/transitioner/types/transition_interface", ["jquery", "underscore"], function(t, e) {
        "use strict";
        var i = function(t) {};
        return e.extend(i.prototype, {
            setMap: function(t) {
                throw new Error('Please override "setMap" function')
            },
            onResize: function(t) {
                throw new Error('Please override "onResize" function')
            },
            show: function(t) {
                throw new Error('Please override "show" function')
            },
            hasInterface: function() {
                return !0
            }
        }), i
    }), define("view/common/transitioner/types/hide_show_transition", ["jquery", "underscore", "config", "backbone", "view/common/transitioner/types/transition_interface"], function(t, e, i, n, s) {
        "use strict";
        var r = n.View.extend({
            savePagesInMemory: !0,
            currentSection: null,
            createdPages: {},
            elementsMap: {},
            initialize: function(t) {
                this.options = t
            },
            setMap: function(t) {
                this.elementsMap = t, this.detachAll()
            },
            detachAll: function() {
                e.each(this.elementsMap, function(t, e, i) {
                    t.element.detach(), t.element.addClass("is-visible")
                }, this)
            },
            onResize: function(t) {
                this.currentSection && this.currentSection.onResize(t)
            },
            show: function(t) {
                var e = t;
                this.currentViewId !== e && (this.newViewId = e, null !== this.currentSection && this.currentSection.hide(), this.onSectionHideComplete())
            },
            setPageOptions: function(t) {
                this.currentSection && this.currentSection.onPageOptionsChange(t)
            },
            onSectionHideComplete: function() {
                var t = this.elementsMap[this.newViewId],
                    e = t.className;
                if (!e) throw new Error("View class not found for: " + this.currentViewId);
                this.currentViewId = this.newViewId, this.newViewId = null;
                var i = this.createdPages[this.currentViewId],
                    n = this.elementsMap[this.currentViewId],
                    s = n.element,
                    r = n.parent;
                i && this.savePagesInMemory ? this.currentSection = i : (this.currentSection = new e({
                    el: s
                }), this.createdPages[this.currentViewId] = this.currentSection), r.append(s), this.currentSection.onResize(), this.currentSection.render(), this.currentSection.show()
            }
        });
        return e.extend(s.prototype, r.prototype), s
    }), define("view/app_mobile_view", ["jquery", "underscore", "view/common/base_view", "config", "route/router", "route/route_object", "model/app_model", "TweenMax", "util/youtube", "view/loader_mobile_view", "view/modules/mobile/shell/mobile_shell_view", "view/pages/mobile/tree_page", "view/pages/mobile/tree_month_page", "view/pages/mobile/tree_category_page", "view/pages/mobile/tree_archive_page", "view/pages/mobile/details_page", "view/pages/mobile/about_page", "view/pages/mobile/help_page", "view/modules/mobile/menu_view", "view/modules/mobile/persistent_bg_view", "view/common/transitioner/transitioner", "view/common/transitioner/types/hide_show_transition"], function(t, e, i, n, s, r, a, o, l, h, c, u, d, p, f, g, m, v, _, y, b, w) {
        "use strict";
        return s.setRoutes([new r(["", "!(/)"], a.PAGES.TREE), new r(["!/:year"], a.PAGES_MOBILE.TREE_MONTH), new r(["!/:year/:month/:day(/)(:mode)"], a.PAGES.DETAILS), new r(["!/cat/:category"], a.PAGES_MOBILE.TREE_CATEGORY), new r(["!/archive(/)(:source)"], a.PAGES.ARCHIVE), new r(["!/howcanihelp/:category/:id"], a.PAGES.HOW_CAN_I_HELP), new r(["!/about"], a.PAGES.ABOUT), new r(["!/help"], a.PAGES.HELP)]), i.extend({
            $rootNode: null,
            $window: null,
            transitioner: null,
            shell: null,
            initialize: function() {
                e.bindAll(this, "onResize"), this.$window = t(window)
            },
            start: function() {
                this.$rootNode = t("#rootNode"), this.setupViews(), this.addEvents()
            },
            setupViews: function() {
                var e = {};
                e[a.PAGES.LOADER] = {
                    className: h,
                    nodeSelector: ".js-mobile-loader"
                }, e[a.PAGES.TREE] = {
                    className: u,
                    nodeSelector: ".js-mobile-tree"
                }, e[a.PAGES_MOBILE.TREE_MONTH] = {
                    className: d,
                    nodeSelector: ".js-mobile-tree-month"
                }, e[a.PAGES_MOBILE.TREE_CATEGORY] = {
                    className: p,
                    nodeSelector: ".js-mobile-tree-category"
                }, e[a.PAGES.ARCHIVE] = {
                    className: f,
                    nodeSelector: ".js-mobile-tree-archive"
                }, e[a.PAGES.DETAILS] = {
                    className: g,
                    nodeSelector: ".js-mobile-details"
                }, e[a.PAGES.ABOUT] = {
                    className: m,
                    nodeSelector: ".js-mobile-about"
                }, e[a.PAGES.HOW_CAN_I_HELP] = {
                    className: v,
                    nodeSelector: ".js-mobile-help"
                }, this.transitioner = new b({
                    el: this.$rootNode,
                    viewMap: e,
                    transition: new w
                }), this.menu = new _({
                    el: t(".js-mobile-menu")
                }), this.shell = new c({
                    el: t(".js-mobile-shell")
                }), this.bg = new y({
                    el: t(".js-persistent-bg")
                })
            },
            addEvents: function() {
                this.$window.on("resize", this.onResize), a.on("change:menuMobileOpen", this.onMenuMobileChange, this), a.on("change:page", this.onPageChange, this)
            },
            onMenuMobileChange: function() {
                var t = a.get("menuMobileOpen");
                o.to(this.$rootNode, .15, {
                    autoAlpha: t ? 0 : 1,
                    ease: "Sine.easeInOut"
                })
            },
            onPageChange: function() {
                var t = this;
                e.defer(function() {
                    t.$rootNode.scrollTop(0)
                })
            },
            onResize: function(t) {
                this.shell && this.shell.onResize(t), this.transitioner && this.transitioner.onResize(t), this.menu && this.menu.onResize(t), this.bg && this.bg.onResize(t)
            },
            render: function() {}
        })
    }), define("model/tree/year_model", ["jquery", "underscore", "backbone", "config", "model/app_model", "model/loader_collection", "model/tree/month_collection", "model/tree/month_model"], function(t, e, i, n, s, r, a, o) {
        "use strict";
        var l = i.Model.extend({
            defaults: {
                loaded: !1,
                id: "",
                route: "",
                title: "",
                months: null,
                days: 0
            },
            initialize: function() {
                var t = this.get("months");
                this.set("months", new a), this.add(t, !0)
            },
            load: function() {
                var t = this.get("route"),
                    e = "testing" === n.ENV || "development" === n.ENV || "frozen_local" === n.ENV || "frozen_staging" === n.ENV ? n.YEAR_JSON + t + ".json" : n.YEAR_JSON + t.slice(-2);
                this.loadId = "year" + t, r.add({
                    id: this.loadId,
                    group: "year",
                    type: "json",
                    src: e
                }), this.listenTo(r, "loaded", this.onLoaded), r.start("year")
            },
            onLoaded: function(t) {
                t.item.id === this.loadId && (this.stopListening(r), this.add(JSON.parse(t.rawResult).months, !1), this.set("loaded", !0), i.trigger("load:complete"), i.trigger("year:loaded"))
            },
            add: function(t, i) {
                for (var n = 12, s = 0, r = 0; n > r; r++) {
                    var a = e.findWhere(t, {
                        index: r.toString()
                    });
                    if (a) {
                        s += a.days.length, a.empty = !1;
                        var h, c = this.get("months").get(a.id);
                        c ? (c.get("days").set(a.days), h = c.get("days").toJSON(), c.set("fullRoute", this.get("route") + "/" + c.get("route")), c.set("yearIndex", this.get("index"))) : (h = a.days, c = a, c.fullRoute = this.get("route") + "/" + c.route, c.yearIndex = this.get("index")), this.get("months").add(c, {
                            merge: !0
                        }), this.setupCategories(h)
                    } else i && (s++, a = {
                        id: this.get("id") + "_" + r,
                        route: ("0" + (r + 1)).slice(-2),
                        index: r.toString(),
                        title: l.MONTHS[r],
                        images: {
                            background: {
                                src: "img/bg.jpg",
                                w: "1280",
                                h: "720"
                            },
                            main: {
                                src: "img/no_data.jpg",
                                w: "400",
                                h: "220"
                            }
                        },
                        empty: !0,
                        days: [{
                            route: "01",
                            fullRoute: "",
                            title: "",
                            tags: []
                        }]
                    }, this.get("months").add(new o(a), {
                        merge: !0
                    }))
                }
                this.set("days", s)
            },
            setupCategories: function(t) {
                for (var e = t.length, i = 0; e > i; i++) {
                    var n = t[i];
                    if (n.tags)
                        for (var r = n.tags.length, a = 0; r > a; a++) s.addToCategory(n.tags[a], n)
                }
            },
            getMonth: function(t) {
                return this.getMonths().at(t)
            },
            getMonths: function() {
                return this.get("months")
            },
            getAllDays: function() {
                var t = [];
                return this.getMonths().each(function(e) {
                    e.getDays().each(function(e) {
                        e.get("date") && t.push(e)
                    })
                }), t
            },
            getAllMediaDays: function() {
                var t = [];
                return this.getMonths().each(function(e) {
                    e.getDays().each(function(e) {
                        e.get("date") && 0 !== e.get("media").length && t.push(e)
                    })
                }), t
            }
        }, {
            MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        });
        return l
    }), define("model/tree/year_collection", ["jquery", "underscore", "backbone", "model/tree/year_model"], function(t, e, i, n) {
        "use strict";
        var s = i.Collection.extend({
            url: "#",
            model: n,
            initialize: function(t) {
                for (var e = 0; e < t.length; e++) t[e].index = e
            }
        });
        return s
    }), define("model/feature/feature_day_model", ["jquery", "underscore", "backbone"], function(t, e, i) {
        "use strict";
        var n = i.Model.extend({});
        return n
    }), define("model/feature/feature_collection", ["jquery", "underscore", "backbone", "model/feature/feature_day_model"], function(t, e, i, n) {
        "use strict";
        var s = i.Collection.extend({
            url: "#",
            model: n
        });
        return s
    }), define("model/howcanihelp/item_model", ["jquery", "underscore", "backbone", "model/howcanihelp/how_can_i_help_list_item_collection"], function(t, e, i, n) {
        "use strict";
        var s = i.Model.extend({});
        return s
    }), define("model/howcanihelp/how_can_i_help_list_item_collection", ["jquery", "underscore", "backbone", "model/howcanihelp/item_model"], function(t, e, i, n) {
        "use strict";
        var s = i.Collection.extend({
            url: "#",
            model: n
        });
        return s
    }), define("model/howcanihelp/how_can_i_help_model", ["jquery", "underscore", "backbone", "model/howcanihelp/how_can_i_help_list_item_collection"], function(t, e, i, n) {
        "use strict";
        var s = i.Model.extend({
            initialize: function() {
                console.log(this.get("list")), this.set("list", new n(this.get("list")))
            },
            getMediaDays: function() {
                var t = this.get("list").filter(function(t) {
                    return 0 !== t.get("media").length
                });
                return t
            }
        });
        return s
    }), define("model/howcanihelp/how_can_i_help_cat_collection", ["jquery", "underscore", "backbone", "model/howcanihelp/how_can_i_help_model"], function(t, e, i, n) {
        "use strict";
        var s = i.Collection.extend({
            url: "#",
            model: n
        });
        return s
    }), define("model/about/about_model", ["jquery", "underscore", "backbone"], function(t, e, i) {
        "use strict";
        var n = i.Model.extend({
            initialize: function() {}
        });
        return n
    }),
    function(t) {
        "function" == typeof define && define.amd ? define("hammer-jquery", ["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
    }(function(t, e) {
        function i(i, n) {
            var s = t(i);
            s.data("hammer") || s.data("hammer", new e(s[0], n))
        }
        t.fn.hammer = function(t) {
            return this.each(function() {
                i(this, t)
            })
        }, e.Manager.prototype.emit = function(e) {
            return function(i, n) {
                e.call(this, i, n), t(this.element).trigger({
                    type: i,
                    gesture: n
                })
            }
        }(e.Manager.prototype.emit)
    }), define("main_mobile", ["jquery", "underscore", "config", "hammerjs", "route/router", "controller/app_controller", "controller/loader_controller", "controller/sound_controller", "view/app_mobile_view", "model/app_model", "model/loader_collection", "model/tree/year_collection", "model/categories/category_collection", "model/feature/feature_collection", "model/howcanihelp/how_can_i_help_cat_collection", "model/about/about_model", "model/tree/archive_collection", "hammer-jquery"], function(t, e, i, n, s, r, a, o, l, h, c, u, d, p, f, g, m) {
        "use strict";
        return {
            appView: null,
            start: function() {
                window.Hammer = n, this.appView = new l({}), this.appView.start(), c.add({
                    id: "treeStructure",
                    type: "json",
                    group: "main",
                    src: i.STRUCTURE_JSON
                }), c.add({
                    id: "archive",
                    type: "json",
                    group: "main",
                    src: i.ARCHIVE_JSON
                }), c.on("loaded", this.onLoadComplete, this), a.start("main"), s.start()
            },
            onLoadComplete: function(t) {
                "treeStructure" === t.item.id ? (this.structureLoaded = !0, h.set("categories", new d(JSON.parse(t.rawResult).categories)), h.set("years", new u(JSON.parse(t.rawResult).years)), h.set("features", new p(JSON.parse(t.rawResult).features)), h.set("about", new g(JSON.parse(t.rawResult).about)), h.howCanIHelp.set("howCanIHelp", new f(JSON.parse(t.rawResult).howcanihelp)), this.loadAbout()) : "archive" === t.item.id ? (this.archiveLoaded = !0, this.archiveData = JSON.parse(t.rawResult)) : "about_hero" === t.item.id && (this.aboutLoaded = !0), this.checkAllLoaded()
            },
            loadAbout: function() {
                var t = h.get("about").get("image");
                c.add({
                    id: "about_hero",
                    group: "about",
                    type: "image",
                    src: t
                }), c.start("about")
            },
            checkAllLoaded: function() {
                this.structureLoaded && this.archiveLoaded && this.aboutLoaded && (c.off("loaded", this.onLoadComplete), h.set("archive", new m(this.archiveData)))
            }
        }
    });