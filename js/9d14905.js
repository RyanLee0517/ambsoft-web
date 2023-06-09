/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(D).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                re.removeChild(e)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = E.createElement("div").style
      , Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = _e.length;
            while (n--)
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = mt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Bt(Rt, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            f = v.url.replace(qt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials"in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});

!function(l) {
    l.fn.animatedModal = function(a) {
        var n = l(this)
          , o = l.extend({
            modalTarget: n.attr("href").replace("#", ""),
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            zIndexIn: "9999",
            zIndexOut: "-9999",
            color: "#39BEB9",
            opacityIn: "1",
            opacityOut: "0",
            animatedIn: "zoomIn",
            animatedOut: "zoomOut",
            animationDuration: ".6s",
            overflow: "auto",
            beforeOpen: function() {},
            afterOpen: function() {},
            beforeClose: function() {},
            afterClose: function() {}
        }, a)
          , t = l(".close-" + o.modalTarget)
          , i = l(n).attr("href")
          , e = l("body").find("#" + o.modalTarget)
          , d = "#" + e.attr("id");
        e.addClass("animated"),
        e.addClass(o.modalTarget + "-off");
        var r = {
            position: o.position,
            width: o.width,
            height: o.height,
            top: o.top,
            left: o.left,
            "background-color": o.color,
            "overflow-y": o.overflow,
            "z-index": o.zIndexOut,
            opacity: o.opacityOut,
            "-webkit-animation-duration": o.animationDuration,
            "-moz-animation-duration": o.animationDuration,
            "-ms-animation-duration": o.animationDuration,
            "animation-duration": o.animationDuration
        };
        function s() {
            e.css({
                "z-index": o.zIndexOut
            }),
            o.afterClose()
        }
        function m() {
            o.afterOpen()
        }
        e.css(r),
        n.click(function(a) {
            a.preventDefault(),
            l("body, html").css({
                overflow: "hidden"
            }),
            i == d && (e.hasClass(o.modalTarget + "-off") && (e.removeClass(o.animatedOut),
            e.removeClass(o.modalTarget + "-off"),
            e.addClass(o.modalTarget + "-on")),
            e.hasClass(o.modalTarget + "-on") && (o.beforeOpen(),
            e.css({
                opacity: o.opacityIn,
                "z-index": o.zIndexIn
            }),
            e.addClass(o.animatedIn),
            e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", m)))
        }),
        t.click(function(a) {
            a.preventDefault(),
            l("body, html").css({
                overflow: "auto"
            }),
            o.beforeClose(),
            e.hasClass(o.modalTarget + "-on") && (e.removeClass(o.modalTarget + "-on"),
            e.addClass(o.modalTarget + "-off")),
            e.hasClass(o.modalTarget + "-off") && (e.removeClass(o.animatedIn),
            e.addClass(o.animatedOut),
            e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", s))
        })
    }
}(jQuery);
/**
 * Swiper 5.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 20, 2020
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(i, s) {
        void 0 === i && (i = {}),
        void 0 === s && (s = {}),
        Object.keys(s).forEach((function(a) {
            void 0 === i[a] ? i[a] = s[a] : e(s[a]) && e(i[a]) && Object.keys(s[a]).length > 0 && t(i[a], s[a])
        }
        ))
    }
    var i = "undefined" != typeof document ? document : {}
      , s = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    t(i, s);
    var a = "undefined" != typeof window ? window : {};
    t(a, {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        }
    });
    var r = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function n(e, t) {
        var s = []
          , n = 0;
        if (e && !t && e instanceof r)
            return e;
        if (e)
            if ("string" == typeof e) {
                var o, l, d = e.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"),
                    0 === d.indexOf("<tr") && (h = "tbody"),
                    0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"),
                    0 === d.indexOf("<tbody") && (h = "table"),
                    0 === d.indexOf("<option") && (h = "select"),
                    (l = i.createElement(h)).innerHTML = d,
                    n = 0; n < l.childNodes.length; n += 1)
                        s.push(l.childNodes[n])
                } else
                    for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])],
                    n = 0; n < o.length; n += 1)
                        o[n] && s.push(o[n])
            } else if (e.nodeType || e === a || e === i)
                s.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (n = 0; n < e.length; n += 1)
                    s.push(e[n]);
        return new r(s)
    }
    function o(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    n.fn = r.prototype,
    n.Class = r,
    n.Dom7 = r;
    var l = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length)
                    this[s].setAttribute(e, t);
                else
                    for (var a in e)
                        this[s][a] = e[a],
                        this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    n(t).is(a))
                        r.apply(t, i);
                    else
                        for (var s = n(t).parents(), o = 0; o < s.length; o += 1)
                            n(s[o]).is(a) && r.apply(s[o], i)
                }
            }
            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
            }
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            o = e[2],
            a = void 0),
            o || (o = !1);
            for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (a)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
                        u.dom7LiveListeners[v].push({
                            listener: r,
                            proxyListener: l
                        }),
                        u.addEventListener(v, l, o)
                    }
                else
                    for (h = 0; h < p.length; h += 1) {
                        var f = p[h];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                        u.dom7Listeners[f].push({
                            listener: r,
                            proxyListener: d
                        }),
                        u.addEventListener(f, d, o)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            n = e[2],
            a = void 0),
            n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h]
                      , c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
                    c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1)
                for (var o = s[n], l = 0; l < this.length; l += 1) {
                    var d = this[l]
                      , h = void 0;
                    try {
                        h = new a.CustomEvent(o,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (h = i.createEvent("Event")).initEvent(o, !0, !0),
                        h.detail = r
                    }
                    d.dom7EventData = e.filter((function(e, t) {
                        return t > 0
                    }
                    )),
                    d.dispatchEvent(h),
                    d.dom7EventData = [],
                    delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    t = 0; t < i.length; t += 1)
                        s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1)
                    s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , s = i.body
                  , r = e.clientTop || s.clientTop || 0
                  , n = e.clientLeft || s.clientLeft || 0
                  , o = e === a ? a.scrollY : e.scrollTop
                  , l = e === a ? a.scrollX : e.scrollLeft;
                return {
                    top: t.top + o - r,
                    left: t.left + l - n
                }
            }
            return null
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var s in e)
                            this[i].style[s] = e[s];
                    return this
                }
                if (this[0])
                    return a.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1)
                    this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, s, o = this[0];
            if (!o || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (o.matches)
                    return o.matches(e);
                if (o.webkitMatchesSelector)
                    return o.webkitMatchesSelector(e);
                if (o.msMatchesSelector)
                    return o.msMatchesSelector(e);
                for (t = n(e),
                s = 0; s < t.length; s += 1)
                    if (t[s] === o)
                        return !0;
                return !1
            }
            if (e === i)
                return o === i;
            if (e === a)
                return o === a;
            if (e.nodeType || e instanceof r) {
                for (t = e.nodeType ? [e] : e,
                s = 0; s < t.length; s += 1)
                    if (t[s] === o)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, i = this.length;
            return new r(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], s = arguments.length; s--; )
                t[s] = arguments[s];
            for (var a = 0; a < t.length; a += 1) {
                e = t[a];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) {
                        var o = i.createElement("div");
                        for (o.innerHTML = e; o.firstChild; )
                            this[n].appendChild(o.firstChild)
                    } else if (e instanceof r)
                        for (var l = 0; l < e.length; l += 1)
                            this[n].appendChild(e[l]);
                    else
                        this[n].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, s;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = i.createElement("div");
                    for (a.innerHTML = e,
                    s = a.childNodes.length - 1; s >= 0; s -= 1)
                        this[t].insertBefore(a.childNodes[s], this[t].childNodes[0])
                } else if (e instanceof r)
                    for (s = 0; s < e.length; s += 1)
                        this[t].insertBefore(e[s], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([])
        },
        nextAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return new r(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([])
            }
            return new r([])
        },
        prevAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return new r(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return n(o(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].parentNode; s; )
                    e ? n(s).is(e) && t.push(s) : t.push(s),
                    s = s.parentNode;
            return n(o(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
                    t.push(s[a]);
            return new r(t)
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
                    e ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
            return new r(o(t))
        },
        filter: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                e.call(this[i], i, this[i]) && t.push(this[i]);
            return new r(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var i, s, a = this;
            for (i = 0; i < e.length; i += 1) {
                var r = n(e[i]);
                for (s = 0; s < r.length; s += 1)
                    a[a.length] = r[s],
                    a.length += 1
            }
            return a
        },
        styles: function() {
            return this[0] ? a.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(l).forEach((function(e) {
        n.fn[e] = n.fn[e] || l[e]
    }
    ));
    var d = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach((function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            }
            ))
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var i, s, r;
            void 0 === t && (t = "x");
            var n = a.getComputedStyle(e, null);
            return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function(e) {
                return e.replace(",", ".")
            }
            )).join(", ")),
            r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            s || 0
        },
        parseUrlQuery: function(e) {
            var t, i, s, r, n = {}, o = e || a.location.href;
            if ("string" == typeof o && o.length)
                for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                    return "" !== e
                }
                ))).length,
                t = 0; t < r; t += 1)
                    s = i[t].replace(/#\S+/g, "").split("="),
                    n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a)
                    for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                          , h = Object.getOwnPropertyDescriptor(a, l);
                        void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {},
                        d.extend(i[l], a[l])) : i[l] = a[l])
                    }
            }
            return i
        }
    }
      , h = {
        touch: !!("ontouchstart"in a || a.DocumentTouch && i instanceof a.DocumentTouch),
        pointerEvents: !!a.PointerEvent && "maxTouchPoints"in a.navigator && a.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver"in a || "WebkitMutationObserver"in a,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                a.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in a
    }
      , p = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
            t.on(e, t.params.on[e])
        }
        ))
    }
      , c = {
        components: {
            configurable: !0
        }
    };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][a](t)
        }
        )),
        s
    }
    ,
    p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        function a() {
            for (var i = [], r = arguments.length; r--; )
                i[r] = arguments[r];
            s.off(e, a),
            a.f7proxy && delete a.f7proxy,
            t.apply(s, i)
        }
        return a.f7proxy = t,
        s.on(e, a, i)
    }
    ,
    p.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }
            ))
        }
        )),
        i) : i
    }
    ,
    p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners)
            return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        a = r) : (i = e[0].events,
        s = e[0].data,
        a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function(e) {
                    t.push(e)
                }
                )),
                t.forEach((function(e) {
                    e.apply(a, s)
                }
                ))
            }
        }
        )),
        r
    }
    ,
    p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        }
        ))
    }
    ,
    p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i]
              , a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }
            )),
            s.on && t.on && Object.keys(s.on).forEach((function(e) {
                t.on(e, s.on[e])
            }
            )),
            s.create && s.create.bind(t)(a)
        }
        ))
    }
    ,
    c.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e,
        e.proto && Object.keys(e.proto).forEach((function(t) {
            s.prototype[t] = e.proto[t]
        }
        )),
        e.static && Object.keys(e.static).forEach((function(t) {
            s[t] = e.static[t]
        }
        )),
        e.install && e.install.apply(s, t),
        s
    }
    ,
    p.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function(e) {
            return s.installModule(e)
        }
        )),
        s) : s.installModule.apply(s, [e].concat(t))
    }
    ,
    Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
            t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params
              , t = this.$wrapperEl
              , i = this.size
              , s = this.rtlTranslate
              , r = this.wrongRTL
              , n = this.virtual && e.virtual.enabled
              , o = n ? this.virtual.slides.length : this.slides.length
              , l = t.children("." + this.params.slideClass)
              , h = n ? this.virtual.slides.length : l.length
              , p = []
              , c = []
              , u = [];
            function v(t) {
                return !e.cssMode || t !== l.length - 1
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length
              , b = this.snapGrid.length
              , w = e.spaceBetween
              , y = -f
              , x = 0
              , E = 0;
            if (void 0 !== i) {
                var T, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i),
                this.virtualSize = -w,
                s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                e.slidesPerColumn > 1 && (T = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn,
                "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = T / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = l.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0
                          , I = void 0
                          , O = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var D = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn))
                              , A = k - e.slidesPerColumn * e.slidesPerGroup * D
                              , G = 0 === D ? e.slidesPerGroup : Math.min(Math.ceil((h - D * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (O = Math.floor(A / G)) * G + D * e.slidesPerGroup) + O * T / M,
                            $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else
                            "column" === e.slidesPerColumnFill ? (O = k - (I = Math.floor(k / M)) * M,
                            (I > z || I === z && O === M - 1) && (O += 1) >= M && (O = 0,
                            I += 1)) : I = k - (O = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== O && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = a.getComputedStyle($[0], null)
                              , B = $[0].style.transform
                              , N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"),
                            N && ($[0].style.webkitTransform = "none"),
                            e.roundLengths)
                                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width"))
                                  , V = parseFloat(H.getPropertyValue("padding-left"))
                                  , Y = parseFloat(H.getPropertyValue("padding-right"))
                                  , F = parseFloat(H.getPropertyValue("margin-left"))
                                  , W = parseFloat(H.getPropertyValue("margin-right"))
                                  , R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height"))
                                  , j = parseFloat(H.getPropertyValue("padding-top"))
                                  , K = parseFloat(H.getPropertyValue("padding-bottom"))
                                  , U = parseFloat(H.getPropertyValue("margin-top"))
                                  , _ = parseFloat(H.getPropertyValue("margin-bottom"))
                                  , Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B),
                            N && ($[0].style.webkitTransform = N),
                            e.roundLengths && (S = Math.floor(S))
                        } else
                            S = (i - (e.slidesPerView - 1) * w) / e.slidesPerView,
                            e.roundLengths && (S = Math.floor(S)),
                            l[k] && (this.isHorizontal() ? l[k].style.width = S + "px" : l[k].style.height = S + "px");
                        l[k] && (l[k].swiperSlideSize = S),
                        u.push(S),
                        e.centeredSlides ? (y = y + S / 2 + x / 2 + w,
                        0 === x && 0 !== k && (y = y - i / 2 - w),
                        0 === k && (y = y - i / 2 - w),
                        Math.abs(y) < .001 && (y = 0),
                        e.roundLengths && (y = Math.floor(y)),
                        E % e.slidesPerGroup == 0 && p.push(y),
                        c.push(y)) : (e.roundLengths && (y = Math.floor(y)),
                        (E - Math.min(this.params.slidesPerGroupSkip, E)) % this.params.slidesPerGroup == 0 && p.push(y),
                        c.push(y),
                        y = y + S + w),
                        this.virtualSize += S + w,
                        x = S,
                        E += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, i) + m,
                s && r && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }),
                e.setWrapperSize && (this.isHorizontal() ? t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : t.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })),
                e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T,
                this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                this.isHorizontal() ? t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : t.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }),
                e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)),
                        p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)),
                        p[ee] <= this.virtualSize - i && C.push(te)
                    }
                    p = C,
                    Math.floor(this.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.filter(v).css({
                    marginLeft: w + "px"
                }) : l.filter(v).css({
                    marginRight: w + "px"
                }) : l.filter(v).css({
                    marginBottom: w + "px"
                })),
                e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    ));
                    var se = (ie -= e.spaceBetween) - i;
                    p = p.map((function(e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }
                    ))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function(t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    )),
                    (ae -= e.spaceBetween) < i) {
                        var re = (i - ae) / 2;
                        p.forEach((function(e, t) {
                            p[t] = e - re
                        }
                        )),
                        c.forEach((function(e, t) {
                            c[t] = e + re
                        }
                        ))
                    }
                }
                d.extend(this, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                h !== o && this.emit("slidesLengthChange"),
                p.length !== g && (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
                c.length !== b && this.emit("slidesGridLengthChange"),
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                if (this.params.centeredSlides)
                    this.visibleSlides.each((function(e, t) {
                        i.push(t)
                    }
                    ));
                else
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length)
                            break;
                        i.push(this.slides.eq(a)[0])
                    }
            else
                i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params
              , i = this.slides
              , s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e),
                i.removeClass(t.slideVisibleClass),
                this.visibleSlidesIndexes = [],
                this.visibleSlides = [];
                for (var r = 0; r < i.length; r += 1) {
                    var o = i[r]
                      , l = (a + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(a - o.swiperSlideOffset)
                          , h = d + this.slidesSizesGrid[r];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o),
                        this.visibleSlidesIndexes.push(r),
                        i.eq(r).addClass(t.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                this.visibleSlides = n(this.visibleSlides)
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params
              , s = this.maxTranslate() - this.minTranslate()
              , a = this.progress
              , r = this.isBeginning
              , n = this.isEnd
              , o = r
              , l = n;
            0 === s ? (a = 0,
            r = !0,
            n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0,
            n = a >= 1),
            d.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: n
            }),
            (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
            r && !o && this.emit("reachBeginning toEdge"),
            n && !l && this.emit("reachEnd toEdge"),
            (o && !r || l && !n) && this.emit("fromEdge"),
            this.emit("progress", a)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0)
                t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1),
            h !== n) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: h
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                o !== u && this.emit("realIndexChange"),
                (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
            } else
                t !== l && (this.snapIndex = t,
                this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params
              , i = n(e.target).closest("." + t.slideClass)[0]
              , s = !1;
            if (i)
                for (var a = 0; a < this.slides.length; a += 1)
                    this.slides[a] === i && (s = !0);
            if (!i || !s)
                return this.clickedSlide = void 0,
                void (this.clickedIndex = void 0);
            this.clickedSlide = i,
            this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(),
            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , i = this.rtlTranslate
              , s = this.translate
              , a = this.$wrapperEl;
            if (t.virtualTranslate)
                return i ? -s : s;
            if (t.cssMode)
                return s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate
              , s = this.params
              , a = this.$wrapperEl
              , r = this.wrapperEl
              , n = this.progress
              , o = 0
              , l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
            this.previousTranslate = this.translate,
            this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e),
            this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
            var n = this
              , o = n.params
              , l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition)
                return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e,
            n.updateProgress(d),
            o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d,
                r.behavior = "smooth",
                r)) : l[c ? "scrollLeft" : "scrollTop"] = -d,
                !0
            }
            return 0 === t ? (n.setTransition(0),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionEnd"))) : (n.setTransition(t),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionStart")),
            n.animating || (n.animating = !0,
            n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                n.onTranslateToWrapperTransitionEnd = null,
                delete n.onTranslateToWrapperTransitionEnd,
                i && n.emit("transitionEnd"))
            }
            ),
            n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
            n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.params
              , a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                this.emit("transitionStart"),
                e && i !== a) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"),
                    "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.previousIndex
              , a = this.params;
            if (this.animating = !1,
            !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
                this.emit("transitionEnd"),
                e && i !== s) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"),
                    "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var r = this
              , n = e;
            n < 0 && (n = 0);
            var o = r.params
              , l = r.snapGrid
              , d = r.slidesGrid
              , h = r.previousIndex
              , p = r.activeIndex
              , c = r.rtlTranslate
              , u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition)
                return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n)
              , f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
            (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g),
            o.normalizeSlideIndex)
                for (var b = 0; b < d.length; b += 1)
                    -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset",
            c && -g === r.translate || !c && g === r.translate)
                return r.updateActiveIndex(n),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== o.effect && r.setTranslate(g),
                "reset" !== m && (r.transitionStart(i, m),
                r.transitionEnd(i, m)),
                !1;
            if (o.cssMode) {
                var w = r.isHorizontal()
                  , y = -g;
                return c && (y = u.scrollWidth - u.offsetWidth - y),
                0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y,
                a.behavior = "smooth",
                a)) : u[w ? "scrollLeft" : "scrollTop"] = y,
                !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.transitionEnd(i, m)) : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, m))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
            !0
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.snapGrid
              , n = this.slidesGrid
              , o = this.rtlTranslate;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map((function(e) {
                return l(e)
            }
            )), c = (n.map((function(e) {
                return l(e)
            }
            )),
            r[p.indexOf(h)],
            r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function(e) {
                !c && h >= e && (c = e)
            }
            )),
            void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = .5);
            var a = this.activeIndex
              , r = Math.min(this.params.slidesPerGroupSkip, a)
              , n = r + Math.floor((a - r) / this.params.slidesPerGroup)
              , o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0),
            a = Math.min(a, this.slidesGrid.length - 1),
            this.slideTo(a, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, s = t.$wrapperEl, a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
            if (i.loop) {
                if (t.animating)
                    return;
                e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(),
                r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick((function() {
                    t.slideTo(r)
                }
                ))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(),
                r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick((function() {
                    t.slideTo(r)
                }
                ))) : t.slideTo(r)
            } else
                t.slideTo(r)
        }
    };
    var g = {
        loopCreate: function() {
            var e = this
              , t = e.params
              , s = e.$wrapperEl;
            s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
            var a = s.children("." + t.slideClass);
            if (t.loopFillGroupWithBlank) {
                var r = t.slidesPerGroup - a.length % t.slidesPerGroup;
                if (r !== t.slidesPerGroup) {
                    for (var o = 0; o < r; o += 1) {
                        var l = n(i.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                        s.append(l)
                    }
                    a = s.children("." + t.slideClass)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length),
            e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
            e.loopedSlides += t.loopAdditionalSlides,
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var d = []
              , h = [];
            a.each((function(t, i) {
                var s = n(i);
                t < e.loopedSlides && h.push(i),
                t < a.length && t >= a.length - e.loopedSlides && d.push(i),
                s.attr("data-swiper-slide-index", t)
            }
            ));
            for (var p = 0; p < h.length; p += 1)
                s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0,
            this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s)
                e = i.length - 3 * s + t,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
                e = -i.length + t + s,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a,
            this.allowSlideNext = r,
            this.emit("loopFix")
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            h.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var w, y, x, E, T, S, C, M, P, z, k, $, L, I, O, D = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , i = this.params;
            if (i.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && t.append(e[s]);
            else
                t.append(e);
            i.loop && this.loopCreate(),
            i.observer && h.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && i.prepend(e[r]);
                a = s + e.length
            } else
                i.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            this.slideTo(a, 0, !1)
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl
              , s = this.params
              , a = this.activeIndex;
            s.loop && (a -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0)
                this.prependSlide(t);
            else if (e >= r)
                this.appendSlide(t);
            else {
                for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                    var d = this.slides.eq(l);
                    d.remove(),
                    o.unshift(d)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var p = 0; p < t.length; p += 1)
                        t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else
                    i.append(t);
                for (var c = 0; c < o.length; c += 1)
                    i.append(o[c]);
                s.loop && this.loopCreate(),
                s.observer && h.observer || this.update(),
                s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && (s -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    a = e[n],
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < r && (r -= 1);
                r = Math.max(r, 0)
            } else
                a = e,
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1),
                r = Math.max(r, 0);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }, A = (w = a.navigator.platform,
    y = a.navigator.userAgent,
    x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!a.cordova && !a.phonegap),
        phonegap: !(!a.cordova && !a.phonegap),
        electron: !1
    },
    E = a.screen.width,
    T = a.screen.height,
    S = y.match(/(Android);?[\s\/]+([\d.]+)?/),
    C = y.match(/(iPad).*OS\s([\d_]+)/),
    M = y.match(/(iPod)(.*OS\s([\d_]+))?/),
    P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0,
    k = y.indexOf("Edge/") >= 0,
    $ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0,
    L = "Win32" === w,
    I = y.toLowerCase().indexOf("electron") >= 0,
    O = "MacIntel" === w,
    !C && O && h.touch && (1024 === E && 1366 === T || 834 === E && 1194 === T || 834 === E && 1112 === T || 768 === E && 1024 === T) && (C = y.match(/(Version)\/([\d.]+)/),
    O = !1),
    x.ie = z,
    x.edge = k,
    x.firefox = $,
    S && !L && (x.os = "android",
    x.osVersion = S[2],
    x.android = !0,
    x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0),
    (C || P || M) && (x.os = "ios",
    x.ios = !0),
    P && !M && (x.osVersion = P[2].replace(/_/g, "."),
    x.iphone = !0),
    C && (x.osVersion = C[2].replace(/_/g, "."),
    x.ipad = !0),
    M && (x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null,
    x.ipod = !0),
    x.ios && x.osVersion && y.indexOf("Version/") >= 0 && "10" === x.osVersion.split(".")[0] && (x.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]),
    x.webView = !(!(P || C || M) || !y.match(/.*AppleWebKit(?!.*Safari)/i) && !a.navigator.standalone) || a.matchMedia && a.matchMedia("(display-mode: standalone)").matches,
    x.webview = x.webView,
    x.standalone = x.webView,
    x.desktop = !(x.ios || x.android) || I,
    x.desktop && (x.electron = I,
    x.macos = O,
    x.windows = L,
    x.macos && (x.os = "macos"),
    x.windows && (x.os = "windows")),
    x.pixelRatio = a.devicePixelRatio || 1,
    x);
    function G(e) {
        var t = this.touchEventsData
          , s = this.params
          , r = this.touches;
        if (!this.animating || !s.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var l = n(o.target);
            if (("wrapper" !== s.touchEventsTarget || l.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === o.type,
            (t.isTouchEvent || !("which"in o) || 3 !== o.which) && !(!t.isTouchEvent && "button"in o && o.button > 0 || t.isTouched && t.isMoved)))
                if (s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0])
                    this.allowClick = !0;
                else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
                    r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    var h = r.currentX
                      , p = r.currentY
                      , c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
                      , u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                    if (!c || !(h <= u || h >= a.screen.width - u)) {
                        if (d.extend(t, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        r.startX = h,
                        r.startY = p,
                        t.touchStartTime = d.now(),
                        this.allowClick = !0,
                        this.updateSize(),
                        this.swipeDirection = void 0,
                        s.threshold > 0 && (t.allowThresholdMove = !1),
                        "touchstart" !== o.type) {
                            var v = !0;
                            l.is(t.formElements) && (v = !1),
                            i.activeElement && n(i.activeElement).is(t.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
                            var f = v && this.allowTouchMove && s.touchStartPreventDefault;
                            (s.touchStartForcePreventDefault || f) && o.preventDefault()
                        }
                        this.emit("touchStart", o)
                    }
                }
        }
    }
    function H(e) {
        var t = this.touchEventsData
          , s = this.params
          , a = this.touches
          , r = this.rtlTranslate
          , o = e;
        if (o.originalEvent && (o = o.originalEvent),
        t.isTouched) {
            if (!t.isTouchEvent || "touchmove" === o.type) {
                var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0])
                  , h = "touchmove" === o.type ? l.pageX : o.pageX
                  , p = "touchmove" === o.type ? l.pageY : o.pageY;
                if (o.preventedByNestedSwiper)
                    return a.startX = h,
                    void (a.startY = p);
                if (!this.allowTouchMove)
                    return this.allowClick = !1,
                    void (t.isTouched && (d.extend(a, {
                        startX: h,
                        startY: p,
                        currentX: h,
                        currentY: p
                    }),
                    t.touchStartTime = d.now()));
                if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if (p < a.startY && this.translate <= this.maxTranslate() || p > a.startY && this.translate >= this.minTranslate())
                            return t.isTouched = !1,
                            void (t.isMoved = !1)
                    } else if (h < a.startX && this.translate <= this.maxTranslate() || h > a.startX && this.translate >= this.minTranslate())
                        return;
                if (t.isTouchEvent && i.activeElement && o.target === i.activeElement && n(o.target).is(t.formElements))
                    return t.isMoved = !0,
                    void (this.allowClick = !1);
                if (t.allowTouchCallbacks && this.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1)) {
                    a.currentX = h,
                    a.currentY = p;
                    var c = a.currentX - a.startX
                      , u = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === t.isScrolling)
                            this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI,
                            t.isScrolling = this.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
                        if (t.isScrolling && this.emit("touchMoveOpposite", o),
                        void 0 === t.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)),
                        t.isScrolling)
                            t.isTouched = !1;
                        else if (t.startMoving) {
                            this.allowClick = !1,
                            !s.cssMode && o.cancelable && o.preventDefault(),
                            s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                            t.isMoved || (s.loop && this.loopFix(),
                            t.startTranslate = this.getTranslate(),
                            this.setTransition(0),
                            this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                            t.allowMomentumBounce = !1,
                            !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                            this.emit("sliderFirstMove", o)),
                            this.emit("sliderMove", o),
                            t.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            a.diff = f,
                            f *= s.touchRatio,
                            r && (f = -f),
                            this.swipeDirection = f > 0 ? "prev" : "next",
                            t.currentTranslate = f + t.startTranslate;
                            var m = !0
                              , g = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (g = 0),
                            f > 0 && t.currentTranslate > this.minTranslate() ? (m = !1,
                            s.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + f, g))) : f < 0 && t.currentTranslate < this.maxTranslate() && (m = !1,
                            s.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - f, g))),
                            m && (o.preventedByNestedSwiper = !0),
                            !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate),
                            !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate),
                            s.threshold > 0) {
                                if (!(Math.abs(f) > s.threshold || t.allowThresholdMove))
                                    return void (t.currentTranslate = t.startTranslate);
                                if (!t.allowThresholdMove)
                                    return t.allowThresholdMove = !0,
                                    a.startX = a.currentX,
                                    a.startY = a.currentY,
                                    t.currentTranslate = t.startTranslate,
                                    void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(),
                            this.updateSlidesClasses()),
                            s.freeMode && (0 === t.velocities.length && t.velocities.push({
                                position: a[this.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }),
                            t.velocities.push({
                                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                                time: d.now()
                            })),
                            this.updateProgress(t.currentTranslate),
                            this.setTranslate(t.currentTranslate))
                        }
                    }
                }
            }
        } else
            t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
    }
    function B(e) {
        var t = this
          , i = t.touchEventsData
          , s = t.params
          , a = t.touches
          , r = t.rtlTranslate
          , n = t.$wrapperEl
          , o = t.slidesGrid
          , l = t.snapGrid
          , h = e;
        if (h.originalEvent && (h = h.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", h),
        i.allowTouchCallbacks = !1,
        !i.isTouched)
            return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = d.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h),
        t.emit("tap click", h),
        u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)),
        i.lastClickTime = d.now(),
        d.nextTick((function() {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
            return i.isTouched = !1,
            i.isMoved = !1,
            void (i.startMoving = !1);
        if (i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1,
        p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
        !s.cssMode)
            if (s.freeMode) {
                if (p < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                    return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop()
                          , f = i.velocities.pop()
                          , m = v.position - f.position
                          , g = v.time - f.time;
                        t.velocity = m / g,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                        (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio,
                    i.velocities.length = 0;
                    var b = 1e3 * s.freeModeMomentumRatio
                      , w = t.velocity * b
                      , y = t.translate + w;
                    r && (y = -y);
                    var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                        x = t.maxTranslate(),
                        T = !0,
                        i.allowMomentumBounce = !0) : y = t.maxTranslate(),
                        s.loop && s.centeredSlides && (E = !0);
                    else if (y > t.minTranslate())
                        s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                        x = t.minTranslate(),
                        T = !0,
                        i.allowMomentumBounce = !0) : y = t.minTranslate(),
                        s.loop && s.centeredSlides && (E = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < l.length; M += 1)
                            if (l[M] > -y) {
                                C = M;
                                break
                            }
                        y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                    }
                    if (E && t.once("transitionEnd", (function() {
                        t.loopFix()
                    }
                    )),
                    0 !== t.velocity) {
                        if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity),
                        s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate)
                              , z = t.slidesSizesGrid[t.activeIndex];
                            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky)
                        return void t.slideToClosest();
                    s.freeModeMomentumBounce && T ? (t.updateProgress(x),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(s.speed),
                        setTimeout((function() {
                            t.setTranslate(x),
                            n.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            ))
                        }
                        ), 0))
                    }
                    ))) : t.velocity ? (t.updateProgress(y),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    }
                    )))) : t.updateProgress(y),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                } else if (s.freeModeSticky)
                    return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
            } else {
                for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== o[L + I] ? p >= o[L] && p < o[L + I] && (k = L,
                    $ = o[L + I] - o[L]) : p >= o[L] && (k = L,
                    $ = o[o.length - 1] - o[o.length - 2])
                }
                var O = (p - o[k]) / $
                  , D = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (O >= s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)),
                    "prev" === t.swipeDirection && (O > 1 - s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k))
                } else {
                    if (!s.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + D) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + D),
                    "prev" === t.swipeDirection && t.slideTo(k))
                }
            }
    }
    function N() {
        var e = this.params
          , t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext
              , s = this.allowSlidePrev
              , a = this.snapGrid;
            this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            this.updateSlidesClasses(),
            ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
            this.allowSlidePrev = s,
            this.allowSlideNext = i,
            this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    function X(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    function V() {
        var e = this.wrapperEl
          , t = this.rtlTranslate;
        this.previousTranslate = this.translate,
        this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop,
        -0 === this.translate && (this.translate = 0),
        this.updateActiveIndex(),
        this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
        this.emit("setTranslate", this.translate, !1)
    }
    var Y = !1;
    function F() {}
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , R = {
        update: u,
        translate: v,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: b,
        manipulation: D,
        events: {
            attachEvents: function() {
                var e = this.params
                  , t = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl;
                this.onTouchStart = G.bind(this),
                this.onTouchMove = H.bind(this),
                this.onTouchEnd = B.bind(this),
                e.cssMode && (this.onScroll = V.bind(this)),
                this.onClick = X.bind(this);
                var r = !!e.nested;
                if (!h.touch && h.pointerEvents)
                    s.addEventListener(t.start, this.onTouchStart, !1),
                    i.addEventListener(t.move, this.onTouchMove, r),
                    i.addEventListener(t.end, this.onTouchEnd, !1);
                else {
                    if (h.touch) {
                        var n = !("touchstart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(t.start, this.onTouchStart, n),
                        s.addEventListener(t.move, this.onTouchMove, h.passiveListener ? {
                            passive: !1,
                            capture: r
                        } : r),
                        s.addEventListener(t.end, this.onTouchEnd, n),
                        t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, n),
                        Y || (i.addEventListener("touchstart", F),
                        Y = !0)
                    }
                    (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1),
                    i.addEventListener("mousemove", this.onTouchMove, r),
                    i.addEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                e.cssMode && a.addEventListener("scroll", this.onScroll),
                e.updateOnWindowResize ? this.on(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : this.on("observerUpdate", N, !0)
            },
            detachEvents: function() {
                var e = this.params
                  , t = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl
                  , r = !!e.nested;
                if (!h.touch && h.pointerEvents)
                    s.removeEventListener(t.start, this.onTouchStart, !1),
                    i.removeEventListener(t.move, this.onTouchMove, r),
                    i.removeEventListener(t.end, this.onTouchEnd, !1);
                else {
                    if (h.touch) {
                        var n = !("onTouchStart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(t.start, this.onTouchStart, n),
                        s.removeEventListener(t.move, this.onTouchMove, r),
                        s.removeEventListener(t.end, this.onTouchEnd, n),
                        t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, n)
                    }
                    (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1),
                    i.removeEventListener("mousemove", this.onTouchMove, r),
                    i.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                e.cssMode && a.removeEventListener("scroll", this.onScroll),
                this.off(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this.activeIndex
                  , t = this.initialized
                  , i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params
                  , a = this.$el
                  , r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = this.getBreakpoint(r);
                    if (n && this.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        ));
                        var l = o || this.originalParams
                          , h = s.slidesPerColumn > 1
                          , p = l.slidesPerColumn > 1;
                        h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"),
                        "column" === l.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                        var c = l.direction && l.direction !== s.direction
                          , u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
                        c && t && this.changeDirection(),
                        d.extend(this.params, l),
                        d.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }),
                        this.currentBreakpoint = n,
                        u && t && (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - i + this.loopedSlides, 0, !1)),
                        this.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                      , i = Object.keys(e).map((function(e) {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            var t = parseFloat(e.substr(1));
                            return {
                                value: a.innerHeight * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    i.sort((function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }
                    ));
                    for (var s = 0; s < i.length; s += 1) {
                        var r = i[s]
                          , n = r.point;
                        r.value <= a.innerWidth && (t = n)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this.params
                  , t = this.isLocked
                  , i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length,
                this.allowSlideNext = !this.isLocked,
                this.allowSlidePrev = !this.isLocked,
                t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                t && t !== this.isLocked && (this.isEnd = !1,
                this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames
                  , t = this.params
                  , i = this.rtl
                  , s = this.$el
                  , a = [];
                a.push("initialized"),
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                t.autoHeight && a.push("autoheight"),
                i && a.push("rtl"),
                t.slidesPerColumn > 1 && (a.push("multirow"),
                "column" === t.slidesPerColumnFill && a.push("multirow-column")),
                A.android && a.push("android"),
                A.ios && a.push("ios"),
                t.cssMode && a.push("css-mode"),
                a.forEach((function(i) {
                    e.push(t.containerModifierClass + i)
                }
                )),
                s.addClass(e.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, i, s, r, o) {
                var l;
                function d() {
                    o && o()
                }
                n(e).parent("picture")[0] || e.complete && r ? d() : t ? ((l = new a.Image).onload = d,
                l.onerror = d,
                s && (l.sizes = s),
                i && (l.srcset = i),
                t && (l.src = t)) : d()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , q = {}
      , j = function(e) {
        function t() {
            for (var i, s, a, r = [], o = arguments.length; o--; )
                r[o] = arguments[o];
            1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (s = (i = r)[0],
            a = i[1]),
            a || (a = {}),
            a = d.extend({}, a),
            s && !a.el && (a.el = s),
            e.call(this, a),
            Object.keys(R).forEach((function(e) {
                Object.keys(R[e]).forEach((function(i) {
                    t.prototype[i] || (t.prototype[i] = R[e][i])
                }
                ))
            }
            ));
            var l = this;
            void 0 === l.modules && (l.modules = {}),
            Object.keys(l.modules).forEach((function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , s = t.params[i];
                    if ("object" != typeof s || null === s)
                        return;
                    if (!(i in a) || !("enabled"in s))
                        return;
                    !0 === a[i] && (a[i] = {
                        enabled: !0
                    }),
                    "object" != typeof a[i] || "enabled"in a[i] || (a[i].enabled = !0),
                    a[i] || (a[i] = {
                        enabled: !1
                    })
                }
            }
            ));
            var p = d.extend({}, W);
            l.useModulesParams(p),
            l.params = d.extend({}, p, q, a),
            l.originalParams = d.extend({}, l.params),
            l.passedParams = d.extend({}, a),
            l.$ = n;
            var c = n(l.params.el);
            if (s = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each((function(e, i) {
                        var s = d.extend({}, a, {
                            el: i
                        });
                        u.push(new t(s))
                    }
                    )),
                    u
                }
                var v, f, m;
                return s.swiper = l,
                c.data("swiper", l),
                s && s.shadowRoot && s.shadowRoot.querySelector ? (v = n(s.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function(e) {
                    return c.children(e)
                }
                : v = c.children("." + l.params.wrapperClass),
                d.extend(l, {
                    $el: c,
                    el: s,
                    $wrapperEl: v,
                    wrapperEl: v[0],
                    classNames: [],
                    slides: n(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === l.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === l.params.direction
                    },
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === v.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    m = ["mousedown", "mousemove", "mouseup"],
                    h.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]),
                    l.touchEventsTouch = {
                        start: f[0],
                        move: f[1],
                        end: f[2],
                        cancel: f[3]
                    },
                    l.touchEventsDesktop = {
                        start: m[0],
                        move: m[1],
                        end: m[2]
                    },
                    h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: d.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                l.useModules(),
                l.params.init && l.init(),
                l
            }
        }
        e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , s = this.size
              , a = this.activeIndex
              , r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                    t[l] && !n && (r += 1,
                    (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1)
                    t[d] && !n && (r += 1,
                    (o += t[d].swiperSlideSize) > s && (n = !0))
            } else
                for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (r += 1);
            return r
        }
        ,
        t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid
                  , i = e.params;
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (s(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        t.prototype.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
            this.params.direction = e,
            this.slides.each((function(t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }
            )),
            this.emit("changeDirection"),
            t && this.update()),
            this
        }
        ,
        t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"))
        }
        ,
        t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , a = i.$el
              , r = i.$wrapperEl
              , n = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            a.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((function(e) {
                i.off(e)
            }
            )),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            d.deleteProps(i)),
            i.destroyed = !0),
            null
        }
        ,
        t.extendDefaults = function(e) {
            d.extend(q, e)
        }
        ,
        i.extendedDefaults.get = function() {
            return q
        }
        ,
        i.defaults.get = function() {
            return W
        }
        ,
        i.Class.get = function() {
            return e
        }
        ,
        i.$.get = function() {
            return n
        }
        ,
        Object.defineProperties(t, i),
        t
    }(p)
      , K = {
        name: "device",
        proto: {
            device: A
        },
        static: {
            device: A
        }
    }
      , U = {
        name: "support",
        proto: {
            support: h
        },
        static: {
            support: h
        }
    }
      , _ = {
        isEdge: !!a.navigator.userAgent.match(/Edge/g),
        isSafari: function() {
            var e = a.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
    }
      , Z = {
        name: "browser",
        proto: {
            browser: _
        },
        static: {
            browser: _
        }
    }
      , Q = {
        name: "resize",
        create: function() {
            var e = this;
            d.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                a.addEventListener("resize", this.resize.resizeHandler),
                a.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                a.removeEventListener("resize", this.resize.resizeHandler),
                a.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , J = {
        func: a.MutationObserver || a.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this
              , s = new (0,
            J.func)((function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        i.emit("observerUpdate", e[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                } else
                    i.emit("observerUpdate", e[0])
            }
            ));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.observer.observers.push(s)
        },
        init: function() {
            if (h.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach((function(e) {
                e.disconnect()
            }
            )),
            this.observer.observers = []
        }
    }
      , ee = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            d.extend(this, {
                observer: {
                    init: J.init.bind(this),
                    attach: J.attach.bind(this),
                    destroy: J.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , te = {
        update: function(e) {
            var t = this
              , i = t.params
              , s = i.slidesPerView
              , a = i.slidesPerGroup
              , r = i.centeredSlides
              , n = t.params.virtual
              , o = n.addSlidesBefore
              , l = n.addSlidesAfter
              , h = t.virtual
              , p = h.from
              , c = h.to
              , u = h.slides
              , v = h.slidesGrid
              , f = h.renderSlide
              , m = h.offset;
            t.updateActiveIndex();
            var g, b, w, y = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (b = Math.floor(s / 2) + a + o,
            w = Math.floor(s / 2) + a + l) : (b = s + (a - 1) + o,
            w = a + l);
            var x = Math.max((y || 0) - w, 0)
              , E = Math.min((y || 0) + b, u.length - 1)
              , T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
            function S() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (d.extend(t.virtual, {
                from: x,
                to: E,
                offset: T,
                slidesGrid: t.slidesGrid
            }),
            p === x && c === E && !e)
                return t.slidesGrid !== v && T !== m && t.slides.css(g, T + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: x,
                    to: E,
                    slides: function() {
                        for (var e = [], t = x; t <= E; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void S();
            var C = []
              , M = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var P = p; P <= c; P += 1)
                    (P < x || P > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
            for (var z = 0; z < u.length; z += 1)
                z >= x && z <= E && (void 0 === c || e ? M.push(z) : (z > c && M.push(z),
                z < p && C.push(z)));
            M.forEach((function(e) {
                t.$wrapperEl.append(f(u[e], e))
            }
            )),
            C.sort((function(e, t) {
                return t - e
            }
            )).forEach((function(e) {
                t.$wrapperEl.prepend(f(u[e], e))
            }
            )),
            t.$wrapperEl.children(".swiper-slide").css(g, T + "px"),
            S()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var s = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = s),
            s
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this.activeIndex
              , i = t + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                    e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length,
                s = e.length
            } else
                this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache
                  , n = {};
                Object.keys(r).forEach((function(e) {
                    var t = r[e]
                      , i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                    n[parseInt(e, 10) + s] = t
                }
                )),
                this.virtual.cache = n
            }
            this.virtual.update(!0),
            this.slideTo(i, 0)
        },
        removeSlide: function(e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; i >= 0; i -= 1)
                        this.virtual.slides.splice(e[i], 1),
                        this.params.virtual.cache && delete this.virtual.cache[e[i]],
                        e[i] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                this.virtual.update(!0),
                this.slideTo(t, 0)
            }
        },
        removeAllSlides: function() {
            this.virtual.slides = [],
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0)
        }
    }
      , ie = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            d.extend(this, {
                virtual: {
                    update: te.update.bind(this),
                    appendSlide: te.appendSlide.bind(this),
                    prependSlide: te.prependSlide.bind(this),
                    removeSlide: te.removeSlide.bind(this),
                    removeAllSlides: te.removeAllSlides.bind(this),
                    renderSlide: te.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , se = {
        handle: function(e) {
            var t = this.rtlTranslate
              , s = e;
            s.originalEvent && (s = s.originalEvent);
            var r = s.keyCode || s.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r))
                return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r))
                return !1;
            if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var o = a.innerWidth
                      , l = a.innerHeight
                      , d = this.$el.offset();
                    t && (d.left -= this.$el[0].scrollLeft);
                    for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                    }
                    if (!n)
                        return
                }
                this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                (34 !== r && 39 !== r || t) && (33 !== r && 37 !== r || !t) || this.slideNext(),
                (33 !== r && 37 !== r || t) && (34 !== r && 39 !== r || !t) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                34 !== r && 40 !== r || this.slideNext(),
                33 !== r && 38 !== r || this.slidePrev()),
                this.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (n(i).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (n(i).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , ae = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            d.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: se.enable.bind(this),
                    disable: se.disable.bind(this),
                    handle: se.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var re = {
        lastScrollTime: d.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel"in i;
                if (!e) {
                    var t = i.createElement("div");
                    t.setAttribute("onwheel", "return;"),
                    e = "function" == typeof t.onwheel
                }
                return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }() ? "wheel" : "mousewheel"
        },
        normalize: function(e) {
            var t = 0
              , i = 0
              , s = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            s = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            e.shiftKey && !s && (s = a,
            a = 0),
            (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            a *= 40) : (s *= 800,
            a *= 800)),
            s && !t && (t = s < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , i = this
              , s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var a = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarged && (a = n(i.params.mousewheel.eventsTarged)),
            !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , o = i.rtlTranslate ? -1 : 1
              , l = re.normalize(t);
            if (s.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                        return !0;
                    r = l.pixelX * o
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                        return !0;
                    r = l.pixelY
                }
            else
                r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
            if (0 === r)
                return !0;
            if (s.invert && (r = -r),
            i.params.freeMode) {
                var h = {
                    time: d.now(),
                    delta: Math.abs(r),
                    direction: Math.sign(r)
                }
                  , p = i.mousewheel.lastEventBeforeSnap
                  , c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                if (!c) {
                    i.mousewheel.lastEventBeforeSnap = void 0,
                    i.params.loop && i.loopFix();
                    var u = i.getTranslate() + r * s.sensitivity
                      , v = i.isBeginning
                      , f = i.isEnd;
                    if (u >= i.minTranslate() && (u = i.minTranslate()),
                    u <= i.maxTranslate() && (u = i.maxTranslate()),
                    i.setTransition(0),
                    i.setTranslate(u),
                    i.updateProgress(),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses(),
                    (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(),
                    i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout),
                        i.mousewheel.timeout = void 0;
                        var m = i.mousewheel.recentWheelEvents;
                        m.length >= 15 && m.shift();
                        var g = m.length ? m[m.length - 1] : void 0
                          , b = m[0];
                        if (m.push(h),
                        g && (h.delta > g.delta || h.direction !== g.direction))
                            m.splice(0);
                        else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                            var w = r > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.mousewheel.timeout = d.nextTick((function() {
                                i.slideToClosest(i.params.speed, !0, void 0, w)
                            }
                            ), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick((function() {
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (c || i.emit("scroll", t),
                    i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                    u === i.minTranslate() || u === i.maxTranslate())
                        return !0
                }
            } else {
                var y = {
                    time: d.now(),
                    delta: Math.abs(r),
                    direction: Math.sign(r),
                    raw: e
                }
                  , x = i.mousewheel.recentWheelEvents;
                x.length >= 2 && x.shift();
                var E = x.length ? x[x.length - 1] : void 0;
                if (x.push(y),
                E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y),
                i.mousewheel.releaseScroll(y))
                    return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        animateSlider: function(e) {
            return e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(),
            this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(),
            this.emit("scroll", e.raw)),
            this.mousewheel.lastScrollTime = (new a.Date).getTime(),
            !1)
        },
        releaseScroll: function(e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                    return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
                return !0;
            return !1
        },
        enable: function() {
            var e = re.event();
            if (this.params.cssMode)
                return this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)),
            t.on("mouseenter", this.mousewheel.handleMouseEnter),
            t.on("mouseleave", this.mousewheel.handleMouseLeave),
            t.on(e, this.mousewheel.handle),
            this.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            var e = re.event();
            if (this.params.cssMode)
                return this.wrapperEl.addEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)),
            t.off(e, this.mousewheel.handle),
            this.mousewheel.enabled = !1,
            !0
        }
    }
      , ne = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = n(i.nextEl),
            this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
            i.prevEl && (t = n(i.prevEl),
            this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", this.navigation.onNextClick),
            t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
            d.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , oe = {
        update: function() {
            var e = this.rtl
              , t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, a = this.pagination.$el, r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                i > r - 1 && (i -= r),
                i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    o = i - this.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2),
                    h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"),
                    a.length > 1)
                        h.each((function(e, s) {
                            var a = n(s)
                              , r = a.index();
                            r === i && a.addClass(t.bulletActiveClass),
                            t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"),
                            r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                            r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }
                        ));
                    else {
                        var p = h.eq(i)
                          , c = p.index();
                        if (p.addClass(t.bulletActiveClass),
                        t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                                h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop)
                                if (c >= h.length - t.dynamicMainBullets) {
                                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                                        h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                } else
                                    u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                    v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                            else
                                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4)
                          , b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize
                          , w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)),
                a.find("." + t.totalClass).text(t.formatFractionTotal(r))),
                "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / r
                      , E = 1
                      , T = 1;
                    "horizontal" === y ? E = x : T = x,
                    a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)),
                this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]),
                a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                  , i = this.pagination.$el
                  , s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                        e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s),
                    this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = n(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                    t.preventDefault();
                    var i = n(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }
                )),
                d.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , le = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , s = e.dragSize
                  , a = e.trackSize
                  , r = e.$dragEl
                  , n = e.$el
                  , o = this.params.scrollbar
                  , l = s
                  , d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d,
                d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d,
                d = 0) : d + s > a && (l = a - d),
                this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"),
                r[0].style.height = l + "px"),
                o.hide && (clearTimeout(this.scrollbar.timeout),
                n[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout((function() {
                    n[0].style.opacity = 0,
                    n.transition(400)
                }
                ), 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = e.$dragEl
                  , i = e.$el;
                t[0].style.width = "",
                t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px",
                i[0].style.display = r >= 1 ? "none" : "",
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }),
                e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched = !0,
            this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            a.transition(0),
            t.hide && a.css("opacity", 1),
            this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , s = t.$el
              , a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            a.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = d.nextTick((function() {
                a.css("opacity", 0),
                a.transition(400)
            }
            ), 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = e.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.touch ? (r.addEventListener(t.start, this.scrollbar.onDragStart, n),
                r.addEventListener(t.move, this.scrollbar.onDragMove, n),
                r.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
                i.addEventListener(s.move, this.scrollbar.onDragMove, n),
                i.addEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = e.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.touch ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, n),
                r.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                r.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
                i.removeEventListener(s.move, this.scrollbar.onDragMove, n),
                i.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , s = n(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                var a = s.find("." + this.params.scrollbar.dragClass);
                0 === a.length && (a = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                s.append(a)),
                d.extend(e, {
                    $el: s,
                    el: s[0],
                    $dragEl: a,
                    dragEl: a[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , de = {
        setTransform: function(e, t) {
            var i = this.rtl
              , s = n(e)
              , a = i ? -1 : 1
              , r = s.attr("data-swiper-parallax") || "0"
              , o = s.attr("data-swiper-parallax-x")
              , l = s.attr("data-swiper-parallax-y")
              , d = s.attr("data-swiper-parallax-scale")
              , h = s.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0",
            l = l || "0") : this.isHorizontal() ? (o = r,
            l = "0") : (l = r,
            o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
            null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                s[0].style.opacity = p
            }
            if (null == d)
                s.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var e = this
              , t = e.$el
              , i = e.slides
              , s = e.progress
              , a = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                e.parallax.setTransform(i, s)
            }
            )),
            i.each((function(t, i) {
                var r = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (a.length - 1)),
                r = Math.min(Math.max(r, -1), 1),
                n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    e.parallax.setTransform(i, r)
                }
                ))
            }
            ))
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                var s = n(i)
                  , a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (a = 0),
                s.transition(a)
            }
            ))
        }
    }
      , he = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                s.scaleStart = he.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest("." + this.params.slideClass),
            0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)),
            s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass),
            s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0),
            this.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = he.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = h.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !A.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio),
            s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (A.android && e.cancelable && e.preventDefault(),
            s.isTouched = !0,
            s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var r = s.width * t.scale
                  , n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - n / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                    a.prevPositionX = s.touchesCurrent.x,
                    a.prevPositionY = s.touchesCurrent.y,
                    a.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var a = 300
                  , r = 300
                  , n = s.x * a
                  , o = i.currentX + n
                  , l = s.y * r
                  , d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o,
                i.currentY = d;
                var p = i.width * e.scale
                  , c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - c / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom, b = this.params.zoom, w = g.gesture, y = g.image;
            (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex),
            w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)),
            w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass),
            void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x,
            i = y.touchesStart.y),
            g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            e ? (f = w.$slideEl[0].offsetWidth,
            m = w.$slideEl[0].offsetHeight,
            s = w.$slideEl.offset().left + f / 2 - t,
            a = w.$slideEl.offset().top + m / 2 - i,
            o = w.$imageEl[0].offsetWidth,
            l = w.$imageEl[0].offsetHeight,
            d = o * g.scale,
            h = l * g.scale,
            u = -(p = Math.min(f / 2 - d / 2, 0)),
            v = -(c = Math.min(m / 2 - h / 2, 0)),
            (r = s * g.scale) < p && (r = p),
            r > u && (r = u),
            (n = a * g.scale) < c && (n = c),
            n > v && (n = v)) : (r = 0,
            n = 0),
            w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
            w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !h.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !h.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }
      , pe = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , s = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                  , r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])),
                0 !== r.length && r.each((function(e, r) {
                    var o = n(r);
                    o.addClass(s.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , h = o.attr("data-srcset")
                      , p = o.attr("data-sizes")
                      , c = o.parent("picture");
                    i.loadImage(o[0], d || l, h, p, !1, (function() {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (h && (o.attr("srcset", h),
                            o.removeAttr("data-srcset")),
                            p && (o.attr("sizes", p),
                            o.removeAttr("data-sizes")),
                            c.length && c.children("source").each((function(e, t) {
                                var i = n(t);
                                i.attr("data-srcset") && (i.attr("srcset", i.attr("data-srcset")),
                                i.removeAttr("data-srcset"))
                            }
                            )),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(s.loadedClass).removeClass(s.loadingClass),
                            a.find("." + s.preloaderClass).remove(),
                            i.params.loop && t) {
                                var e = a.attr("data-swiper-slide-index");
                                if (a.hasClass(i.params.slideDuplicateClass)) {
                                    var r = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(r.index(), !1)
                                } else {
                                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(u.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", a[0], o[0]),
                            i.params.autoHeight && i.updateAutoHeight()
                        }
                    }
                    )),
                    i.emit("lazyImageLoad", a[0], o[0])
                }
                ))
            }
        },
        load: function() {
            var e = this
              , t = e.$wrapperEl
              , i = e.params
              , s = e.slides
              , a = e.activeIndex
              , r = e.virtual && i.virtual.enabled
              , o = i.lazy
              , l = i.slidesPerView;
            function d(e) {
                if (r) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (s[e])
                    return !0;
                return !1
            }
            function h(e) {
                return r ? n(e).attr("data-swiper-slide-index") : n(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each((function(t, i) {
                    var s = r ? n(i).attr("data-swiper-slide-index") : n(i).index();
                    e.lazy.loadInSlide(s)
                }
                ));
            else if (l > 1)
                for (var p = a; p < a + l; p += 1)
                    d(p) && e.lazy.loadInSlide(p);
            else
                e.lazy.loadInSlide(a);
            if (o.loadPrevNext)
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for (var c = o.loadPrevNextAmount, u = l, v = Math.min(a + u + Math.max(c, u), s.length), f = Math.max(a - Math.max(u, c), 0), m = a + l; m < v; m += 1)
                        d(m) && e.lazy.loadInSlide(m);
                    for (var g = f; g < a; g += 1)
                        d(g) && e.lazy.loadInSlide(g)
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w))
                }
        }
    }
      , ce = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for (s = -1,
                i = e.length; i - s > 1; )
                    e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new ce.LinearSpline(this.slidesGrid,e.slidesGrid) : new ce.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                s = -a.controller.spline.interpolate(-t)),
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                s = (t - a.minTranslate()) * i + e.minTranslate()),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof j && n(r[o]);
            else
                r instanceof j && t !== r && n(r)
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && d.nextTick((function() {
                    t.updateAutoHeight()
                }
                )),
                t.$wrapperEl.transitionEnd((function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }
                )))
            }
            if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                    a[i] !== t && a[i]instanceof j && r(a[i]);
            else
                a instanceof j && t !== a && r(a)
        }
    }
      , ue = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        makeElNotFocusable: function(e) {
            return e.attr("tabIndex", "-1"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = n(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i),
                this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i),
                this.a11y.makeElFocusable(i))),
                t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t),
                this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t),
                this.a11y.makeElFocusable(t)))
            }
        },
        updatePagination: function() {
            var e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, s) {
                var a = n(s);
                e.a11y.makeElFocusable(a),
                e.a11y.addElRole(a, "button"),
                e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))
            }
            ))
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
            t && (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , ve = {
        init: function() {
            if (this.params.history) {
                if (!a.history || !a.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = ve.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || a.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || a.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = ve.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = a.location.pathname.slice(1).split("/").filter((function(e) {
                return "" !== e
            }
            ))
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t)
                  , s = ve.slugify(i.attr("data-history"));
                a.location.pathname.includes(e) || (s = e + "/" + s);
                var r = a.history.state;
                r && r.value === s || (this.params.history.replaceState ? a.history.replaceState({
                    value: s
                }, null, s) : a.history.pushState({
                    value: s
                }, null, s))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                    var r = this.slides.eq(s);
                    if (ve.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                        var n = r.index();
                        this.slideTo(n, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , fe = {
        onHashCange: function() {
            this.emit("hashChange");
            var e = i.location.hash.replace("#", "");
            if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                if (void 0 === t)
                    return;
                this.slideTo(t)
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && a.history && a.history.replaceState)
                    a.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""),
                    this.emit("hashSet");
                else {
                    var e = this.slides.eq(this.activeIndex)
                      , t = e.attr("data-hash") || e.attr("data-history");
                    i.location.hash = t || "",
                    this.emit("hashSet")
                }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var e = i.location.hash.replace("#", "");
                if (e)
                    for (var t = 0, s = this.slides.length; t < s; t += 1) {
                        var r = this.slides.eq(t);
                        if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
                            var o = r.index();
                            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                this.params.hashNavigation.watchState && n(a).on("hashchange", this.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && n(a).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , me = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = d.nextTick((function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }
            ), i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            this.autoplay.paused = !0,
            0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
            this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
            this.autoplay.run())))
        }
    }
      , ge = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s,
                s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.$wrapperEl;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function() {
                    if (!a && t && !t.destroyed) {
                        a = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            s.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , be = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, r = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: a + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'),
            t.append(e)));
            for (var u = 0; u < s.length; u += 1) {
                var v = s.eq(u)
                  , f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                  , g = Math.floor(m / 360);
                o && (m = -m,
                g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                x = l) : (f - 3) % 4 == 0 && (w = -l,
                x = 3 * l + 4 * l * g),
                o && (w = -w),
                h || (y = w,
                w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b,
                o && (c = 90 * -f - 90 * b)),
                v.transform(E),
                d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'),
                    v.append(T)),
                    0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    T.length && (T[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (h)
                    e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90)
                      , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                      , P = d.shadowScale
                      , z = d.shadowScale / M
                      , k = d.shadowOffset;
                    e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (r / 2 + k) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
                }
            var $ = _.isSafari || _.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , we = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var s = e.eq(i)
                  , a = s[0].progress;
                this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                var r = -180 * a
                  , o = 0
                  , l = -s[0].swiperSlideOffset
                  , d = 0;
                if (this.isHorizontal() ? t && (r = -r) : (d = l,
                l = 0,
                o = -r,
                r = 0),
                s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , p = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    s.append(h)),
                    0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    s.append(p)),
                    h.length && (h[0].style.opacity = Math.max(-a, 0)),
                    p.length && (p[0].style.opacity = Math.max(a, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.activeIndex
              , a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            a.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , ye = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? r.rotate : -r.rotate, c = r.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u)
                  , m = a[u]
                  , g = (d - f[0].swiperSlideOffset - m / 2) / m * r.modifier
                  , b = o ? p * g : 0
                  , w = o ? 0 : p * g
                  , y = -c * Math.abs(g)
                  , x = r.stretch;
                "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(r.stretch) / 100 * m);
                var E = o ? 0 : x * g
                  , T = o ? x * g : 0;
                Math.abs(T) < .001 && (T = 0),
                Math.abs(E) < .001 && (E = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(w) < .001 && (w = 0);
                var S = "translate3d(" + T + "px," + E + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(S),
                f[0].style.zIndex = 1 - Math.abs(Math.round(g)),
                r.slideShadows) {
                    var C = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , M = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    f.append(C)),
                    0 === M.length && (M = n('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    f.append(M)),
                    C.length && (C[0].style.opacity = g > 0 ? g : 0),
                    M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , xe = {
        init: function() {
            var e = this.params.thumbs
              , t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper,
            d.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            d.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : d.isObject(e.swiper) && (this.thumbs.swiper = new t(d.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            this.thumbs.swiperCreated = !0),
            this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex
                  , i = e.clickedSlide;
                if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var s;
                    if (s = e.params.loop ? parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
                    this.params.loop) {
                        var a = this.activeIndex;
                        this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft,
                        a = this.activeIndex);
                        var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index()
                          , o = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r
                    }
                    this.slideTo(s)
                }
            }
        },
        update: function(e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView
                  , s = this.params.thumbs.autoScrollOffset
                  , a = s && !t.params.loop;
                if (this.realIndex !== t.realIndex || a) {
                    var r, n, o = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                        t._clientLeft = t.$wrapperEl[0].clientLeft,
                        o = t.activeIndex);
                        var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index()
                          , d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l,
                        n = this.activeIndex > this.previousIndex ? "next" : "prev"
                    } else
                        n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                    a && (r += "next" === n ? s : -1 * s),
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1),
                    t.slideTo(r, e ? 0 : void 0))
                }
                var h = 1
                  , p = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView),
                this.params.thumbs.multipleActiveThumbs || (h = 1),
                h = Math.floor(h),
                t.slides.removeClass(p),
                t.params.loop || t.params.virtual && t.params.virtual.enabled)
                    for (var c = 0; c < h; c += 1)
                        t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p);
                else
                    for (var u = 0; u < h; u += 1)
                        t.slides.eq(this.realIndex + u).addClass(p)
            }
        }
    }
      , Ee = [K, U, Z, Q, ee, ie, ae, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            d.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: re.enable.bind(this),
                    disable: re.disable.bind(this),
                    handle: re.handle.bind(this),
                    handleMouseEnter: re.handleMouseEnter.bind(this),
                    handleMouseLeave: re.handleMouseLeave.bind(this),
                    animateSlider: re.animateSlider.bind(this),
                    releaseScroll: re.releaseScroll.bind(this),
                    lastScrollTime: d.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init: function() {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(),
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.params.cssMode && this.mousewheel.enable(),
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            d.extend(this, {
                navigation: {
                    init: ne.init.bind(this),
                    update: ne.update.bind(this),
                    destroy: ne.destroy.bind(this),
                    onNextClick: ne.onNextClick.bind(this),
                    onPrevClick: ne.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, i = this.navigation, s = i.$nextEl, a = i.$prevEl;
                !this.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)),
                !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this),
                s && s.toggleClass(this.params.navigation.hiddenClass),
                a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            d.extend(this, {
                pagination: {
                    init: oe.init.bind(this),
                    render: oe.render.bind(this),
                    update: oe.update.bind(this),
                    destroy: oe.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            d.extend(this, {
                scrollbar: {
                    init: le.init.bind(this),
                    destroy: le.destroy.bind(this),
                    updateSize: le.updateSize.bind(this),
                    setTranslate: le.setTranslate.bind(this),
                    setTransition: le.setTransition.bind(this),
                    enableDraggable: le.enableDraggable.bind(this),
                    disableDraggable: le.disableDraggable.bind(this),
                    setDragPosition: le.setDragPosition.bind(this),
                    getPointerPosition: le.getPointerPosition.bind(this),
                    onDragStart: le.onDragStart.bind(this),
                    onDragMove: le.onDragMove.bind(this),
                    onDragEnd: le.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            d.extend(this, {
                parallax: {
                    setTransform: de.setTransform.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                t[i] = he[i].bind(e)
            }
            )),
            d.extend(e, {
                zoom: t
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function() {
                    return i
                },
                set: function(t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            },
            slideChange: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            d.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: pe.load.bind(this),
                    loadInSlide: pe.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            },
            slideChange: function() {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            d.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: ce.getInterpolateFunction.bind(this),
                    setTranslate: ce.setTranslate.bind(this),
                    setTransition: ce.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var e = this;
            d.extend(e, {
                a11y: {
                    liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(ue).forEach((function(t) {
                e.a11y[t] = ue[t].bind(e)
            }
            ))
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            d.extend(this, {
                history: {
                    init: ve.init.bind(this),
                    setHistory: ve.setHistory.bind(this),
                    setHistoryPopState: ve.setHistoryPopState.bind(this),
                    scrollToSlide: ve.scrollToSlide.bind(this),
                    destroy: ve.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            },
            slideChange: function() {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            d.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: fe.init.bind(this),
                    destroy: fe.destroy.bind(this),
                    setHash: fe.setHash.bind(this),
                    onHashCange: fe.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            },
            slideChange: function() {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var e = this;
            d.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: me.run.bind(e),
                    start: me.start.bind(e),
                    stop: me.stop.bind(e),
                    pause: me.pause.bind(e),
                    onVisibilityChange: function() {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                        "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                        e.autoplay.paused = !1)
                    },
                    onTransitionEnd: function(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && (this.autoplay.start(),
                document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            touchEnd: function() {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop(),
                document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: ge.setTranslate.bind(this),
                    setTransition: ge.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            d.extend(this, {
                cubeEffect: {
                    setTranslate: be.setTranslate.bind(this),
                    setTransition: be.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            d.extend(this, {
                flipEffect: {
                    setTranslate: we.setTranslate.bind(this),
                    setTransition: we.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            d.extend(this, {
                coverflowEffect: {
                    setTranslate: ye.setTranslate.bind(this),
                    setTransition: ye.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            d.extend(this, {
                thumbs: {
                    swiper: null,
                    init: xe.init.bind(this),
                    update: xe.update.bind(this),
                    onThumbClick: xe.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === j.use && (j.use = j.Class.use,
    j.installModule = j.Class.installModule),
    j.use(Ee),
    j
}
));
//# sourceMappingURL=swiper.min.js.map
!function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(t) {
        var e = getComputedStyle(t)
          , o = e.position;
        if ("fixed" === o)
            return t;
        for (var i = t; i = i.parentNode; ) {
            var n = void 0;
            try {
                n = getComputedStyle(i)
            } catch (r) {}
            if ("undefined" == typeof n || null === n)
                return i;
            var s = n
              , a = s.overflow
              , f = s.overflowX
              , h = s.overflowY;
            if (/(auto|scroll)/.test(a + h + f) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(n.position) >= 0))
                return i
        }
        return document.body
    }
    function r(t) {
        var e = void 0;
        t === document ? (e = document,
        t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement
          , i = {}
          , n = t.getBoundingClientRect();
        for (var r in n)
            i[r] = n[r];
        var s = x(e);
        return i.top -= s.top,
        i.left -= s.left,
        "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right),
        "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom),
        i.top = i.top - o.clientTop,
        i.left = i.left - o.clientLeft,
        i.right = e.body.clientWidth - i.width - i.left,
        i.bottom = e.body.clientHeight - i.height - i.top,
        i
    }
    function s(t) {
        return t.offsetParent || document.documentElement
    }
    function a() {
        var t = document.createElement("div");
        t.style.width = "100%",
        t.style.height = "200px";
        var e = document.createElement("div");
        f(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }),
        e.appendChild(t),
        document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var i = t.offsetWidth;
        o === i && (i = e.clientWidth),
        document.body.removeChild(e);
        var n = o - i;
        return {
            width: n,
            height: n
        }
    }
    function f() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
          , e = [];
        return Array.prototype.push.apply(e, arguments),
        e.slice(1).forEach(function(e) {
            if (e)
                for (var o in e)
                    ({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }),
        t
    }
    function h(t, e) {
        if ("undefined" != typeof t.classList)
            e.split(" ").forEach(function(e) {
                e.trim() && t.classList.remove(e)
            });
        else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)","gi")
              , i = u(t).replace(o, " ");
            p(t, i)
        }
    }
    function l(t, e) {
        if ("undefined" != typeof t.classList)
            e.split(" ").forEach(function(e) {
                e.trim() && t.classList.add(e)
            });
        else {
            h(t, e);
            var o = u(t) + (" " + e);
            p(t, o)
        }
    }
    function d(t, e) {
        if ("undefined" != typeof t.classList)
            return t.classList.contains(e);
        var o = u(t);
        return new RegExp("(^| )" + e + "( |$)","gi").test(o)
    }
    function u(t) {
        return t.className instanceof SVGAnimatedString ? t.className.baseVal : t.className
    }
    function p(t, e) {
        t.setAttribute("class", e)
    }
    function c(t, e, o) {
        o.forEach(function(o) {
            -1 === e.indexOf(o) && d(t, o) && h(t, o)
        }),
        e.forEach(function(e) {
            d(t, e) || l(t, e)
        })
    }
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function g(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }
    function m() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }
    function v() {
        for (var t = {
            top: 0,
            left: 0
        }, e = arguments.length, o = Array(e), i = 0; e > i; i++)
            o[i] = arguments[i];
        return o.forEach(function(e) {
            var o = e.top
              , i = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)),
            "string" == typeof i && (i = parseFloat(i, 10)),
            t.top += o,
            t.left += i
        }),
        t
    }
    function y(t, e) {
        return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width),
        "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height),
        t
    }
    function b(t, e) {
        return "scrollParent" === e ? e = t.scrollParent : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
        e === document && (e = e.documentElement),
        "undefined" != typeof e.nodeType && !function() {
            var t = r(e)
              , o = t
              , i = getComputedStyle(e);
            e = [o.left, o.top, t.width + o.left, t.height + o.top],
            U.forEach(function(t, o) {
                t = t[0].toUpperCase() + t.substr(1),
                "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"])
            })
        }(),
        e
    }
    var w = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, o, i) {
            return o && t(e.prototype, o),
            i && t(e, i),
            e
        }
    }()
      , C = void 0;
    "undefined" == typeof C && (C = {
        modules: []
    });
    var O = function() {
        var t = 0;
        return function() {
            return ++t
        }
    }()
      , E = {}
      , x = function(t) {
        var e = t._tetherZeroElement;
        "undefined" == typeof e && (e = t.createElement("div"),
        e.setAttribute("data-tether-id", O()),
        f(e.style, {
            top: 0,
            left: 0,
            position: "absolute"
        }),
        t.body.appendChild(e),
        t._tetherZeroElement = e);
        var o = e.getAttribute("data-tether-id");
        if ("undefined" == typeof E[o]) {
            E[o] = {};
            var i = e.getBoundingClientRect();
            for (var n in i)
                E[o][n] = i[n];
            T(function() {
                delete E[o]
            })
        }
        return E[o]
    }
      , A = []
      , T = function(t) {
        A.push(t)
    }
      , S = function() {
        for (var t = void 0; t = A.pop(); )
            t()
    }
      , W = function() {
        function t() {
            i(this, t)
        }
        return w(t, [{
            key: "on",
            value: function(t, e, o) {
                var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}),
                "undefined" == typeof this.bindings[t] && (this.bindings[t] = []),
                this.bindings[t].push({
                    handler: e,
                    ctx: o,
                    once: i
                })
            }
        }, {
            key: "once",
            value: function(t, e, o) {
                this.on(t, e, o, !0)
            }
        }, {
            key: "off",
            value: function(t, e) {
                if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[t])
                    if ("undefined" == typeof e)
                        delete this.bindings[t];
                    else
                        for (var o = 0; o < this.bindings[t].length; )
                            this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
            }
        }, {
            key: "trigger",
            value: function(t) {
                if ("undefined" != typeof this.bindings && this.bindings[t]) {
                    for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; o > n; n++)
                        i[n - 1] = arguments[n];
                    for (; e < this.bindings[t].length; ) {
                        var r = this.bindings[t][e]
                          , s = r.handler
                          , a = r.ctx
                          , f = r.once
                          , h = a;
                        "undefined" == typeof h && (h = this),
                        s.apply(h, i),
                        f ? this.bindings[t].splice(e, 1) : ++e
                    }
                }
            }
        }]),
        t
    }();
    C.Utils = {
        getScrollParent: n,
        getBounds: r,
        getOffsetParent: s,
        extend: f,
        addClass: l,
        removeClass: h,
        hasClass: d,
        updateClasses: c,
        defer: T,
        flush: S,
        uniqueId: O,
        Evented: W,
        getScrollBarSize: a
    };
    var M = function() {
        function t(t, e) {
            var o = []
              , i = !0
              , n = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value),
                !e || o.length !== e); i = !0)
                    ;
            } catch (f) {
                n = !0,
                r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n)
                        throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , w = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, o, i) {
            return o && t(e.prototype, o),
            i && t(e, i),
            e
        }
    }();
    if ("undefined" == typeof C)
        throw new Error("You must include the utils.js file before tether.js");
    var P = C.Utils
      , n = P.getScrollParent
      , r = P.getBounds
      , s = P.getOffsetParent
      , f = P.extend
      , l = P.addClass
      , h = P.removeClass
      , c = P.updateClasses
      , T = P.defer
      , S = P.flush
      , a = P.getScrollBarSize
      , k = function() {
        if ("undefined" == typeof document)
            return "";
        for (var t = document.createElement("div"), e = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
            var i = e[o];
            if (void 0 !== t.style[i])
                return i
        }
    }()
      , B = []
      , _ = function() {
        B.forEach(function(t) {
            t.position(!1)
        }),
        S()
    };
    !function() {
        var t = null
          , e = null
          , o = null
          , i = function n() {
            return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250),
            void (o = setTimeout(n, 250))) : void ("undefined" != typeof t && m() - t < 10 || ("undefined" != typeof o && (clearTimeout(o),
            o = null),
            t = m(),
            _(),
            e = m() - t))
        };
        "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function(t) {
            window.addEventListener(t, i)
        })
    }();
    var z = {
        center: "center",
        left: "right",
        right: "left"
    }
      , F = {
        middle: "middle",
        top: "bottom",
        bottom: "top"
    }
      , L = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%"
    }
      , Y = function(t, e) {
        var o = t.left
          , i = t.top;
        return "auto" === o && (o = z[e.left]),
        "auto" === i && (i = F[e.top]),
        {
            left: o,
            top: i
        }
    }
      , H = function(t) {
        var e = t.left
          , o = t.top;
        return "undefined" != typeof L[t.left] && (e = L[t.left]),
        "undefined" != typeof L[t.top] && (o = L[t.top]),
        {
            left: e,
            top: o
        }
    }
      , X = function(t) {
        var e = t.split(" ")
          , o = M(e, 2)
          , i = o[0]
          , n = o[1];
        return {
            top: i,
            left: n
        }
    }
      , j = X
      , N = function() {
        function t(e) {
            var o = this;
            i(this, t),
            this.position = this.position.bind(this),
            B.push(this),
            this.history = [],
            this.setOptions(e, !1),
            C.modules.forEach(function(t) {
                "undefined" != typeof t.initialize && t.initialize.call(o)
            }),
            this.position()
        }
        return w(t, [{
            key: "getClass",
            value: function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
                  , e = this.options.classes;
                return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
            }
        }, {
            key: "setOptions",
            value: function(t) {
                var e = this
                  , o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1]
                  , i = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether"
                };
                this.options = f(i, t);
                var r = this.options
                  , s = r.element
                  , a = r.target
                  , h = r.targetModifier;
                if (this.element = s,
                this.target = a,
                this.targetModifier = h,
                "viewport" === this.target ? (this.target = document.body,
                this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body,
                this.targetModifier = "scroll-handle"),
                ["element", "target"].forEach(function(t) {
                    if ("undefined" == typeof e[t])
                        throw new Error("Tether Error: Both element and target must be defined");
                    "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                }),
                l(this.element, this.getClass("element")),
                this.options.addTargetClasses !== !1 && l(this.target, this.getClass("target")),
                !this.options.attachment)
                    throw new Error("Tether Error: You must provide an attachment");
                this.targetAttachment = j(this.options.targetAttachment),
                this.attachment = j(this.options.attachment),
                this.offset = X(this.options.offset),
                this.targetOffset = X(this.options.targetOffset),
                "undefined" != typeof this.scrollParent && this.disable(),
                "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = n(this.target),
                this.options.enabled !== !1 && this.enable(o)
            }
        }, {
            key: "getTargetBounds",
            value: function() {
                if ("undefined" == typeof this.targetModifier)
                    return r(this.target);
                if ("visible" === this.targetModifier) {
                    if (this.target === document.body)
                        return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                    var t = r(this.target)
                      , e = {
                        height: t.height,
                        width: t.width,
                        top: t.top,
                        left: t.left
                    };
                    return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)),
                    e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))),
                    e.height = Math.min(innerHeight, e.height),
                    e.height -= 2,
                    e.width = Math.min(e.width, t.width - (pageXOffset - t.left)),
                    e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))),
                    e.width = Math.min(innerWidth, e.width),
                    e.width -= 2,
                    e.top < pageYOffset && (e.top = pageYOffset),
                    e.left < pageXOffset && (e.left = pageXOffset),
                    e
                }
                if ("scroll-handle" === this.targetModifier) {
                    var t = void 0
                      , o = this.target;
                    o === document.body ? (o = document.documentElement,
                    t = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth
                    }) : t = r(o);
                    var i = getComputedStyle(o)
                      , n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body
                      , s = 0;
                    n && (s = 15);
                    var a = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - s
                      , e = {
                        width: 15,
                        height: .975 * a * (a / o.scrollHeight),
                        left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                    }
                      , f = 0;
                    408 > a && this.target === document.body && (f = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58),
                    this.target !== document.body && (e.height = Math.max(e.height, 24));
                    var h = this.target.scrollTop / (o.scrollHeight - a);
                    return e.top = h * (a - e.height - f) + t.top + parseFloat(i.borderTopWidth),
                    this.target === document.body && (e.height = Math.max(e.height, 24)),
                    e
                }
            }
        }, {
            key: "clearCache",
            value: function() {
                this._cache = {}
            }
        }, {
            key: "cache",
            value: function(t, e) {
                return "undefined" == typeof this._cache && (this._cache = {}),
                "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)),
                this._cache[t]
            }
        }, {
            key: "enable",
            value: function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                this.options.addTargetClasses !== !1 && l(this.target, this.getClass("enabled")),
                l(this.element, this.getClass("enabled")),
                this.enabled = !0,
                this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position),
                t && this.position()
            }
        }, {
            key: "disable",
            value: function() {
                h(this.target, this.getClass("enabled")),
                h(this.element, this.getClass("enabled")),
                this.enabled = !1,
                "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                this.disable(),
                B.forEach(function(e, o) {
                    return e === t ? void B.splice(o, 1) : void 0
                })
            }
        }, {
            key: "updateAttachClasses",
            value: function(t, e) {
                var o = this;
                t = t || this.attachment,
                e = e || this.targetAttachment;
                var i = ["left", "top", "bottom", "right", "middle", "center"];
                "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length),
                "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                var n = this._addAttachClasses;
                t.top && n.push(this.getClass("element-attached") + "-" + t.top),
                t.left && n.push(this.getClass("element-attached") + "-" + t.left),
                e.top && n.push(this.getClass("target-attached") + "-" + e.top),
                e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                var r = [];
                i.forEach(function(t) {
                    r.push(o.getClass("element-attached") + "-" + t),
                    r.push(o.getClass("target-attached") + "-" + t)
                }),
                T(function() {
                    "undefined" != typeof o._addAttachClasses && (c(o.element, o._addAttachClasses, r),
                    o.options.addTargetClasses !== !1 && c(o.target, o._addAttachClasses, r),
                    delete o._addAttachClasses)
                })
            }
        }, {
            key: "position",
            value: function() {
                var t = this
                  , e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                if (this.enabled) {
                    this.clearCache();
                    var o = Y(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, o);
                    var i = this.cache("element-bounds", function() {
                        return r(t.element)
                    })
                      , n = i.width
                      , f = i.height;
                    if (0 === n && 0 === f && "undefined" != typeof this.lastSize) {
                        var h = this.lastSize;
                        n = h.width,
                        f = h.height
                    } else
                        this.lastSize = {
                            width: n,
                            height: f
                        };
                    var l = this.cache("target-bounds", function() {
                        return t.getTargetBounds()
                    })
                      , d = l
                      , u = y(H(this.attachment), {
                        width: n,
                        height: f
                    })
                      , p = y(H(o), d)
                      , c = y(this.offset, {
                        width: n,
                        height: f
                    })
                      , g = y(this.targetOffset, d);
                    u = v(u, c),
                    p = v(p, g);
                    for (var m = l.left + p.left - u.left, b = l.top + p.top - u.top, w = 0; w < C.modules.length; ++w) {
                        var O = C.modules[w]
                          , E = O.position.call(this, {
                            left: m,
                            top: b,
                            targetAttachment: o,
                            targetPos: l,
                            elementPos: i,
                            offset: u,
                            targetOffset: p,
                            manualOffset: c,
                            manualTargetOffset: g,
                            scrollbarSize: A,
                            attachment: this.attachment
                        });
                        if (E === !1)
                            return !1;
                        "undefined" != typeof E && "object" == typeof E && (b = E.top,
                        m = E.left)
                    }
                    var x = {
                        page: {
                            top: b,
                            left: m
                        },
                        viewport: {
                            top: b - pageYOffset,
                            bottom: pageYOffset - b - f + innerHeight,
                            left: m - pageXOffset,
                            right: pageXOffset - m - n + innerWidth
                        }
                    }
                      , A = void 0;
                    return document.body.scrollWidth > window.innerWidth && (A = this.cache("scrollbar-size", a),
                    x.viewport.bottom -= A.height),
                    document.body.scrollHeight > window.innerHeight && (A = this.cache("scrollbar-size", a),
                    x.viewport.right -= A.width),
                    (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (x.page.bottom = document.body.scrollHeight - b - f,
                    x.page.right = document.body.scrollWidth - m - n),
                    "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function() {
                        var e = t.cache("target-offsetparent", function() {
                            return s(t.target)
                        })
                          , o = t.cache("target-offsetparent-bounds", function() {
                            return r(e)
                        })
                          , i = getComputedStyle(e)
                          , n = o
                          , a = {};
                        if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                            a[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                        }),
                        o.right = document.body.scrollWidth - o.left - n.width + a.right,
                        o.bottom = document.body.scrollHeight - o.top - n.height + a.bottom,
                        x.page.top >= o.top + a.top && x.page.bottom >= o.bottom && x.page.left >= o.left + a.left && x.page.right >= o.right) {
                            var f = e.scrollTop
                              , h = e.scrollLeft;
                            x.offset = {
                                top: x.page.top - o.top + f - a.top,
                                left: x.page.left - o.left + h - a.left
                            }
                        }
                    }(),
                    this.move(x),
                    this.history.unshift(x),
                    this.history.length > 3 && this.history.pop(),
                    e && S(),
                    !0
                }
            }
        }, {
            key: "move",
            value: function(t) {
                var e = this;
                if ("undefined" != typeof this.element.parentNode) {
                    var o = {};
                    for (var i in t) {
                        o[i] = {};
                        for (var n in t[i]) {
                            for (var r = !1, a = 0; a < this.history.length; ++a) {
                                var h = this.history[a];
                                if ("undefined" != typeof h[i] && !g(h[i][n], t[i][n])) {
                                    r = !0;
                                    break
                                }
                            }
                            r || (o[i][n] = !0)
                        }
                    }
                    var l = {
                        top: "",
                        left: "",
                        right: "",
                        bottom: ""
                    }
                      , d = function(t, o) {
                        var i = "undefined" != typeof e.options.optimizations
                          , n = i ? e.options.optimizations.gpu : null;
                        if (n !== !1) {
                            var r = void 0
                              , s = void 0;
                            t.top ? (l.top = 0,
                            r = o.top) : (l.bottom = 0,
                            r = -o.bottom),
                            t.left ? (l.left = 0,
                            s = o.left) : (l.right = 0,
                            s = -o.right),
                            l[k] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)",
                            "msTransform" !== k && (l[k] += " translateZ(0)")
                        } else
                            t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px",
                            t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                    }
                      , u = !1;
                    if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute",
                    d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed",
                    d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function() {
                        l.position = "absolute";
                        var i = e.cache("target-offsetparent", function() {
                            return s(e.target)
                        });
                        s(e.element) !== i && T(function() {
                            e.element.parentNode.removeChild(e.element),
                            i.appendChild(e.element)
                        }),
                        d(o.offset, t.offset),
                        u = !0
                    }() : (l.position = "absolute",
                    d({
                        top: !0,
                        left: !0
                    }, t.page)),
                    !u) {
                        for (var p = !0, c = this.element.parentNode; c && "BODY" !== c.tagName; ) {
                            if ("static" !== getComputedStyle(c).position) {
                                p = !1;
                                break
                            }
                            c = c.parentNode
                        }
                        p || (this.element.parentNode.removeChild(this.element),
                        document.body.appendChild(this.element))
                    }
                    var m = {}
                      , v = !1;
                    for (var n in l) {
                        var y = l[n]
                          , b = this.element.style[n];
                        "" !== b && "" !== y && ["top", "left", "bottom", "right"].indexOf(n) >= 0 && (b = parseFloat(b),
                        y = parseFloat(y)),
                        b !== y && (v = !0,
                        m[n] = y)
                    }
                    v && T(function() {
                        f(e.element.style, m)
                    })
                }
            }
        }]),
        t
    }();
    N.modules = [],
    C.position = _;
    var R = f(N, C)
      , M = function() {
        function t(t, e) {
            var o = []
              , i = !0
              , n = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value),
                !e || o.length !== e); i = !0)
                    ;
            } catch (f) {
                n = !0,
                r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n)
                        throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , P = C.Utils
      , r = P.getBounds
      , f = P.extend
      , c = P.updateClasses
      , T = P.defer
      , U = ["left", "top", "right", "bottom"];
    C.modules.push({
        position: function(t) {
            var e = this
              , o = t.top
              , i = t.left
              , n = t.targetAttachment;
            if (!this.options.constraints)
                return !0;
            var s = this.cache("element-bounds", function() {
                return r(e.element)
            })
              , a = s.height
              , h = s.width;
            if (0 === h && 0 === a && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                h = l.width,
                a = l.height
            }
            var d = this.cache("target-bounds", function() {
                return e.getTargetBounds()
            })
              , u = d.height
              , p = d.width
              , g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(t) {
                var e = t.outOfBoundsClass
                  , o = t.pinnedClass;
                e && g.push(e),
                o && g.push(o)
            }),
            g.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    g.push(t + "-" + e)
                })
            });
            var m = []
              , v = f({}, n)
              , y = f({}, this.attachment);
            return this.options.constraints.forEach(function(t) {
                var r = t.to
                  , s = t.attachment
                  , f = t.pin;
                "undefined" == typeof s && (s = "");
                var l = void 0
                  , d = void 0;
                if (s.indexOf(" ") >= 0) {
                    var c = s.split(" ")
                      , g = M(c, 2);
                    d = g[0],
                    l = g[1]
                } else
                    l = d = s;
                var w = b(e, r);
                ("target" === d || "both" === d) && (o < w[1] && "top" === v.top && (o += u,
                v.top = "bottom"),
                o + a > w[3] && "bottom" === v.top && (o -= u,
                v.top = "top")),
                "together" === d && (o < w[1] && "top" === v.top && ("bottom" === y.top ? (o += u,
                v.top = "bottom",
                o += a,
                y.top = "top") : "top" === y.top && (o += u,
                v.top = "bottom",
                o -= a,
                y.top = "bottom")),
                o + a > w[3] && "bottom" === v.top && ("top" === y.top ? (o -= u,
                v.top = "top",
                o -= a,
                y.top = "bottom") : "bottom" === y.top && (o -= u,
                v.top = "top",
                o += a,
                y.top = "top")),
                "middle" === v.top && (o + a > w[3] && "top" === y.top ? (o -= a,
                y.top = "bottom") : o < w[1] && "bottom" === y.top && (o += a,
                y.top = "top"))),
                ("target" === l || "both" === l) && (i < w[0] && "left" === v.left && (i += p,
                v.left = "right"),
                i + h > w[2] && "right" === v.left && (i -= p,
                v.left = "left")),
                "together" === l && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += p,
                v.left = "right",
                i += h,
                y.left = "left") : "left" === y.left && (i += p,
                v.left = "right",
                i -= h,
                y.left = "right") : i + h > w[2] && "right" === v.left ? "left" === y.left ? (i -= p,
                v.left = "left",
                i -= h,
                y.left = "right") : "right" === y.left && (i -= p,
                v.left = "left",
                i += h,
                y.left = "left") : "center" === v.left && (i + h > w[2] && "left" === y.left ? (i -= h,
                y.left = "right") : i < w[0] && "right" === y.left && (i += h,
                y.left = "left"))),
                ("element" === d || "both" === d) && (o < w[1] && "bottom" === y.top && (o += a,
                y.top = "top"),
                o + a > w[3] && "top" === y.top && (o -= a,
                y.top = "bottom")),
                ("element" === l || "both" === l) && (i < w[0] && "right" === y.left && (i += h,
                y.left = "left"),
                i + h > w[2] && "left" === y.left && (i -= h,
                y.left = "right")),
                "string" == typeof f ? f = f.split(",").map(function(t) {
                    return t.trim()
                }) : f === !0 && (f = ["top", "left", "right", "bottom"]),
                f = f || [];
                var C = []
                  , O = [];
                o < w[1] && (f.indexOf("top") >= 0 ? (o = w[1],
                C.push("top")) : O.push("top")),
                o + a > w[3] && (f.indexOf("bottom") >= 0 ? (o = w[3] - a,
                C.push("bottom")) : O.push("bottom")),
                i < w[0] && (f.indexOf("left") >= 0 ? (i = w[0],
                C.push("left")) : O.push("left")),
                i + h > w[2] && (f.indexOf("right") >= 0 ? (i = w[2] - h,
                C.push("right")) : O.push("right")),
                C.length && !function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"),
                    m.push(t),
                    C.forEach(function(e) {
                        m.push(t + "-" + e)
                    })
                }(),
                O.length && !function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"),
                    m.push(t),
                    O.forEach(function(e) {
                        m.push(t + "-" + e)
                    })
                }(),
                (C.indexOf("left") >= 0 || C.indexOf("right") >= 0) && (y.left = v.left = !1),
                (C.indexOf("top") >= 0 || C.indexOf("bottom") >= 0) && (y.top = v.top = !1),
                (v.top !== n.top || v.left !== n.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && e.updateAttachClasses(y, v)
            }),
            T(function() {
                e.options.addTargetClasses !== !1 && c(e.target, m, g),
                c(e.element, m, g)
            }),
            {
                top: o,
                left: i
            }
        }
    });
    var P = C.Utils
      , r = P.getBounds
      , c = P.updateClasses
      , T = P.defer;
    C.modules.push({
        position: function(t) {
            var e = this
              , o = t.top
              , i = t.left
              , n = this.cache("element-bounds", function() {
                return r(e.element)
            })
              , s = n.height
              , a = n.width
              , f = this.getTargetBounds()
              , h = o + s
              , l = i + a
              , d = [];
            o <= f.bottom && h >= f.top && ["left", "right"].forEach(function(t) {
                var e = f[t];
                (e === i || e === l) && d.push(t)
            }),
            i <= f.right && l >= f.left && ["top", "bottom"].forEach(function(t) {
                var e = f[t];
                (e === o || e === h) && d.push(t)
            });
            var u = []
              , p = []
              , g = ["left", "top", "right", "bottom"];
            return u.push(this.getClass("abutted")),
            g.forEach(function(t) {
                u.push(e.getClass("abutted") + "-" + t)
            }),
            d.length && p.push(this.getClass("abutted")),
            d.forEach(function(t) {
                p.push(e.getClass("abutted") + "-" + t)
            }),
            T(function() {
                e.options.addTargetClasses !== !1 && c(e.target, p, u),
                c(e.element, p, u)
            }),
            !0
        }
    });
    var M = function() {
        function t(t, e) {
            var o = []
              , i = !0
              , n = !1
              , r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value),
                !e || o.length !== e); i = !0)
                    ;
            } catch (f) {
                n = !0,
                r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n)
                        throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return C.modules.push({
        position: function(t) {
            var e = t.top
              , o = t.left;
            if (this.options.shift) {
                var i = this.options.shift;
                "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                    top: e,
                    left: o
                }));
                var n = void 0
                  , r = void 0;
                if ("string" == typeof i) {
                    i = i.split(" "),
                    i[1] = i[1] || i[0];
                    var s = i
                      , a = M(s, 2);
                    n = a[0],
                    r = a[1],
                    n = parseFloat(n, 10),
                    r = parseFloat(r, 10)
                } else
                    n = i.top,
                    r = i.left;
                return e += n,
                o += r,
                {
                    top: e,
                    left: o
                }
            }
        }
    }),
    R
});
/*!
 * Bootstrap v4.0.0-alpha.5 (https://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4)
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery),
+function() {
    function a(a, b) {
        if (!a)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !b || "object" != typeof b && "function" != typeof b ? a : b
    }
    function b(a, b) {
        if ("function" != typeof b && null !== b)
            throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    }
    : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }
      , e = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }()
      , f = function(a) {
        function b(a) {
            return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        function c(a) {
            return (a[0] || a).nodeType
        }
        function d() {
            return {
                bindType: h.end,
                delegateType: h.end,
                handle: function(b) {
                    if (a(b.target).is(this))
                        return b.handleObj.handler.apply(this, arguments)
                }
            }
        }
        function e() {
            if (window.QUnit)
                return !1;
            var a = document.createElement("bootstrap");
            for (var b in j)
                if (void 0 !== a.style[b])
                    return {
                        end: j[b]
                    };
            return !1
        }
        function f(b) {
            var c = this
              , d = !1;
            return a(this).one(k.TRANSITION_END, function() {
                d = !0
            }),
            setTimeout(function() {
                d || k.triggerTransitionEnd(c)
            }, b),
            this
        }
        function g() {
            h = e(),
            a.fn.emulateTransitionEnd = f,
            k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
        }
        var h = !1
          , i = 1e6
          , j = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }
          , k = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(a) {
                do
                    a += ~~(Math.random() * i);
                while (document.getElementById(a));
                return a
            },
            getSelectorFromElement: function(a) {
                var b = a.getAttribute("data-target");
                return b || (b = a.getAttribute("href") || "",
                b = /^#[a-z]/i.test(b) ? b : null),
                b
            },
            reflow: function(a) {
                new Function("bs","return bs")(a.offsetHeight)
            },
            triggerTransitionEnd: function(b) {
                a(b).trigger(h.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(h)
            },
            typeCheckConfig: function(a, d, e) {
                for (var f in e)
                    if (e.hasOwnProperty(f)) {
                        var g = e[f]
                          , h = d[f]
                          , i = void 0;
                        if (i = h && c(h) ? "element" : b(h),
                        !new RegExp(g).test(i))
                            throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                    }
            }
        };
        return g(),
        k
    }(jQuery)
      , g = (function(a) {
        var b = "alert"
          , d = "4.0.0-alpha.5"
          , g = "bs.alert"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 150
          , l = {
            DISMISS: '[data-dismiss="alert"]'
        }
          , m = {
            CLOSE: "close" + h,
            CLOSED: "closed" + h,
            CLICK_DATA_API: "click" + h + i
        }
          , n = {
            ALERT: "alert",
            FADE: "fade",
            IN: "in"
        }
          , o = function() {
            function b(a) {
                c(this, b),
                this._element = a
            }
            return b.prototype.close = function(a) {
                a = a || this._element;
                var b = this._getRootElement(a)
                  , c = this._triggerCloseEvent(b);
                c.isDefaultPrevented() || this._removeElement(b)
            }
            ,
            b.prototype.dispose = function() {
                a.removeData(this._element, g),
                this._element = null
            }
            ,
            b.prototype._getRootElement = function(b) {
                var c = f.getSelectorFromElement(b)
                  , d = !1;
                return c && (d = a(c)[0]),
                d || (d = a(b).closest("." + n.ALERT)[0]),
                d
            }
            ,
            b.prototype._triggerCloseEvent = function(b) {
                var c = a.Event(m.CLOSE);
                return a(b).trigger(c),
                c
            }
            ,
            b.prototype._removeElement = function(b) {
                return a(b).removeClass(n.IN),
                f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
            }
            ,
            b.prototype._destroyElement = function(b) {
                a(b).detach().trigger(m.CLOSED).remove()
            }
            ,
            b._jQueryInterface = function(c) {
                return this.each(function() {
                    var d = a(this)
                      , e = d.data(g);
                    e || (e = new b(this),
                    d.data(g, e)),
                    "close" === c && e[c](this)
                })
            }
            ,
            b._handleDismiss = function(a) {
                return function(b) {
                    b && b.preventDefault(),
                    a.close(this)
                }
            }
            ,
            e(b, null, [{
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)),
        a.fn[b] = o._jQueryInterface,
        a.fn[b].Constructor = o,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            o._jQueryInterface
        }
        ,
        o
    }(jQuery),
    function(a) {
        var b = "button"
          , d = "4.0.0-alpha.5"
          , f = "bs.button"
          , g = "." + f
          , h = ".data-api"
          , i = a.fn[b]
          , j = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }
          , k = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }
          , l = {
            CLICK_DATA_API: "click" + g + h,
            FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
        }
          , m = function() {
            function b(a) {
                c(this, b),
                this._element = a
            }
            return b.prototype.toggle = function() {
                var b = !0
                  , c = a(this._element).closest(k.DATA_TOGGLE)[0];
                if (c) {
                    var d = a(this._element).find(k.INPUT)[0];
                    if (d) {
                        if ("radio" === d.type)
                            if (d.checked && a(this._element).hasClass(j.ACTIVE))
                                b = !1;
                            else {
                                var e = a(c).find(k.ACTIVE)[0];
                                e && a(e).removeClass(j.ACTIVE)
                            }
                        b && (d.checked = !a(this._element).hasClass(j.ACTIVE),
                        a(this._element).trigger("change")),
                        d.focus()
                    }
                } else
                    this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                b && a(this._element).toggleClass(j.ACTIVE)
            }
            ,
            b.prototype.dispose = function() {
                a.removeData(this._element, f),
                this._element = null
            }
            ,
            b._jQueryInterface = function(c) {
                return this.each(function() {
                    var d = a(this).data(f);
                    d || (d = new b(this),
                    a(this).data(f, d)),
                    "toggle" === c && d[c]()
                })
            }
            ,
            e(b, null, [{
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
            b.preventDefault();
            var c = b.target;
            a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)),
            m._jQueryInterface.call(a(c), "toggle")
        }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
            var c = a(b.target).closest(k.BUTTON)[0];
            a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
        }),
        a.fn[b] = m._jQueryInterface,
        a.fn[b].Constructor = m,
        a.fn[b].noConflict = function() {
            return a.fn[b] = i,
            m._jQueryInterface
        }
        ,
        m
    }(jQuery),
    function(a) {
        var b = "carousel"
          , g = "4.0.0-alpha.5"
          , h = "bs.carousel"
          , i = "." + h
          , j = ".data-api"
          , k = a.fn[b]
          , l = 600
          , m = 37
          , n = 39
          , o = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , p = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , q = {
            NEXT: "next",
            PREVIOUS: "prev"
        }
          , r = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            LOAD_DATA_API: "load" + i + j,
            CLICK_DATA_API: "click" + i + j
        }
          , s = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "right",
            LEFT: "left",
            ITEM: "carousel-item"
        }
          , t = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".next, .prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , u = function() {
            function j(b, d) {
                c(this, j),
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this._config = this._getConfig(d),
                this._element = a(b)[0],
                this._indicatorsElement = a(this._element).find(t.INDICATORS)[0],
                this._addEventListeners()
            }
            return j.prototype.next = function() {
                this._isSliding || this._slide(q.NEXT)
            }
            ,
            j.prototype.nextWhenVisible = function() {
                document.hidden || this.next()
            }
            ,
            j.prototype.prev = function() {
                this._isSliding || this._slide(q.PREVIOUS)
            }
            ,
            j.prototype.pause = function(b) {
                b || (this._isPaused = !0),
                a(this._element).find(t.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            j.prototype.cycle = function(b) {
                b || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
            }
            ,
            j.prototype.to = function(b) {
                var c = this;
                this._activeElement = a(this._element).find(t.ACTIVE_ITEM)[0];
                var d = this._getItemIndex(this._activeElement);
                if (!(b > this._items.length - 1 || b < 0)) {
                    if (this._isSliding)
                        return void a(this._element).one(r.SLID, function() {
                            return c.to(b)
                        });
                    if (d === b)
                        return this.pause(),
                        void this.cycle();
                    var e = b > d ? q.NEXT : q.PREVIOUS;
                    this._slide(e, this._items[b])
                }
            }
            ,
            j.prototype.dispose = function() {
                a(this._element).off(i),
                a.removeData(this._element, h),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            j.prototype._getConfig = function(c) {
                return c = a.extend({}, o, c),
                f.typeCheckConfig(b, c, p),
                c
            }
            ,
            j.prototype._addEventListeners = function() {
                this._config.keyboard && a(this._element).on(r.KEYDOWN, a.proxy(this._keydown, this)),
                "hover" !== this._config.pause || "ontouchstart"in document.documentElement || a(this._element).on(r.MOUSEENTER, a.proxy(this.pause, this)).on(r.MOUSELEAVE, a.proxy(this.cycle, this))
            }
            ,
            j.prototype._keydown = function(a) {
                if (a.preventDefault(),
                !/input|textarea/i.test(a.target.tagName))
                    switch (a.which) {
                    case m:
                        this.prev();
                        break;
                    case n:
                        this.next();
                        break;
                    default:
                        return
                    }
            }
            ,
            j.prototype._getItemIndex = function(b) {
                return this._items = a.makeArray(a(b).parent().find(t.ITEM)),
                this._items.indexOf(b)
            }
            ,
            j.prototype._getItemByDirection = function(a, b) {
                var c = a === q.NEXT
                  , d = a === q.PREVIOUS
                  , e = this._getItemIndex(b)
                  , f = this._items.length - 1
                  , g = d && 0 === e || c && e === f;
                if (g && !this._config.wrap)
                    return b;
                var h = a === q.PREVIOUS ? -1 : 1
                  , i = (e + h) % this._items.length;
                return i === -1 ? this._items[this._items.length - 1] : this._items[i]
            }
            ,
            j.prototype._triggerSlideEvent = function(b, c) {
                var d = a.Event(r.SLIDE, {
                    relatedTarget: b,
                    direction: c
                });
                return a(this._element).trigger(d),
                d
            }
            ,
            j.prototype._setActiveIndicatorElement = function(b) {
                if (this._indicatorsElement) {
                    a(this._indicatorsElement).find(t.ACTIVE).removeClass(s.ACTIVE);
                    var c = this._indicatorsElement.children[this._getItemIndex(b)];
                    c && a(c).addClass(s.ACTIVE)
                }
            }
            ,
            j.prototype._slide = function(b, c) {
                var d = this
                  , e = a(this._element).find(t.ACTIVE_ITEM)[0]
                  , g = c || e && this._getItemByDirection(b, e)
                  , h = Boolean(this._interval)
                  , i = b === q.NEXT ? s.LEFT : s.RIGHT;
                if (g && a(g).hasClass(s.ACTIVE))
                    return void (this._isSliding = !1);
                var j = this._triggerSlideEvent(g, i);
                if (!j.isDefaultPrevented() && e && g) {
                    this._isSliding = !0,
                    h && this.pause(),
                    this._setActiveIndicatorElement(g);
                    var k = a.Event(r.SLID, {
                        relatedTarget: g,
                        direction: i
                    });
                    f.supportsTransitionEnd() && a(this._element).hasClass(s.SLIDE) ? (a(g).addClass(b),
                    f.reflow(g),
                    a(e).addClass(i),
                    a(g).addClass(i),
                    a(e).one(f.TRANSITION_END, function() {
                        a(g).removeClass(i).removeClass(b),
                        a(g).addClass(s.ACTIVE),
                        a(e).removeClass(s.ACTIVE).removeClass(b).removeClass(i),
                        d._isSliding = !1,
                        setTimeout(function() {
                            return a(d._element).trigger(k)
                        }, 0)
                    }).emulateTransitionEnd(l)) : (a(e).removeClass(s.ACTIVE),
                    a(g).addClass(s.ACTIVE),
                    this._isSliding = !1,
                    a(this._element).trigger(k)),
                    h && this.cycle()
                }
            }
            ,
            j._jQueryInterface = function(b) {
                return this.each(function() {
                    var c = a(this).data(h)
                      , e = a.extend({}, o, a(this).data());
                    "object" === ("undefined" == typeof b ? "undefined" : d(b)) && a.extend(e, b);
                    var f = "string" == typeof b ? b : e.slide;
                    if (c || (c = new j(this,e),
                    a(this).data(h, c)),
                    "number" == typeof b)
                        c.to(b);
                    else if ("string" == typeof f) {
                        if (void 0 === c[f])
                            throw new Error('No method named "' + f + '"');
                        c[f]()
                    } else
                        e.interval && (c.pause(),
                        c.cycle())
                })
            }
            ,
            j._dataApiClickHandler = function(b) {
                var c = f.getSelectorFromElement(this);
                if (c) {
                    var d = a(c)[0];
                    if (d && a(d).hasClass(s.CAROUSEL)) {
                        var e = a.extend({}, a(d).data(), a(this).data())
                          , g = this.getAttribute("data-slide-to");
                        g && (e.interval = !1),
                        j._jQueryInterface.call(a(d), e),
                        g && a(d).data(h).to(g),
                        b.preventDefault()
                    }
                }
            }
            ,
            e(j, null, [{
                key: "VERSION",
                get: function() {
                    return g
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }]),
            j
        }();
        return a(document).on(r.CLICK_DATA_API, t.DATA_SLIDE, u._dataApiClickHandler),
        a(window).on(r.LOAD_DATA_API, function() {
            a(t.DATA_RIDE).each(function() {
                var b = a(this);
                u._jQueryInterface.call(b, b.data())
            })
        }),
        a.fn[b] = u._jQueryInterface,
        a.fn[b].Constructor = u,
        a.fn[b].noConflict = function() {
            return a.fn[b] = k,
            u._jQueryInterface
        }
        ,
        u
    }(jQuery),
    function(a) {
        var b = "collapse"
          , g = "4.0.0-alpha.5"
          , h = "bs.collapse"
          , i = "." + h
          , j = ".data-api"
          , k = a.fn[b]
          , l = 600
          , m = {
            toggle: !0,
            parent: ""
        }
          , n = {
            toggle: "boolean",
            parent: "string"
        }
          , o = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + j
        }
          , p = {
            IN: "in",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }
          , q = {
            WIDTH: "width",
            HEIGHT: "height"
        }
          , r = {
            ACTIVES: ".card > .in, .card > .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , s = function() {
            function i(b, d) {
                c(this, i),
                this._isTransitioning = !1,
                this._element = b,
                this._config = this._getConfig(d),
                this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))),
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            return i.prototype.toggle = function() {
                a(this._element).hasClass(p.IN) ? this.hide() : this.show()
            }
            ,
            i.prototype.show = function() {
                var b = this;
                if (!this._isTransitioning && !a(this._element).hasClass(p.IN)) {
                    var c = void 0
                      , d = void 0;
                    if (this._parent && (c = a.makeArray(a(r.ACTIVES)),
                    c.length || (c = null)),
                    !(c && (d = a(c).data(h),
                    d && d._isTransitioning))) {
                        var e = a.Event(o.SHOW);
                        if (a(this._element).trigger(e),
                        !e.isDefaultPrevented()) {
                            c && (i._jQueryInterface.call(a(c), "hide"),
                            d || a(c).data(h, null));
                            var g = this._getDimension();
                            a(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING),
                            this._element.style[g] = 0,
                            this._element.setAttribute("aria-expanded", !0),
                            this._triggerArray.length && a(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0),
                            this.setTransitioning(!0);
                            var j = function() {
                                a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN),
                                b._element.style[g] = "",
                                b.setTransitioning(!1),
                                a(b._element).trigger(o.SHOWN)
                            };
                            if (!f.supportsTransitionEnd())
                                return void j();
                            var k = g[0].toUpperCase() + g.slice(1)
                              , m = "scroll" + k;
                            a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(l),
                            this._element.style[g] = this._element[m] + "px"
                        }
                    }
                }
            }
            ,
            i.prototype.hide = function() {
                var b = this;
                if (!this._isTransitioning && a(this._element).hasClass(p.IN)) {
                    var c = a.Event(o.HIDE);
                    if (a(this._element).trigger(c),
                    !c.isDefaultPrevented()) {
                        var d = this._getDimension()
                          , e = d === q.WIDTH ? "offsetWidth" : "offsetHeight";
                        this._element.style[d] = this._element[e] + "px",
                        f.reflow(this._element),
                        a(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN),
                        this._element.setAttribute("aria-expanded", !1),
                        this._triggerArray.length && a(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1),
                        this.setTransitioning(!0);
                        var g = function() {
                            b.setTransitioning(!1),
                            a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(o.HIDDEN)
                        };
                        return this._element.style[d] = "",
                        f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : void g()
                    }
                }
            }
            ,
            i.prototype.setTransitioning = function(a) {
                this._isTransitioning = a
            }
            ,
            i.prototype.dispose = function() {
                a.removeData(this._element, h),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            i.prototype._getConfig = function(c) {
                return c = a.extend({}, m, c),
                c.toggle = Boolean(c.toggle),
                f.typeCheckConfig(b, c, n),
                c
            }
            ,
            i.prototype._getDimension = function() {
                var b = a(this._element).hasClass(q.WIDTH);
                return b ? q.WIDTH : q.HEIGHT
            }
            ,
            i.prototype._getParent = function() {
                var b = this
                  , c = a(this._config.parent)[0]
                  , d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return a(c).find(d).each(function(a, c) {
                    b._addAriaAndCollapsedClass(i._getTargetFromElement(c), [c])
                }),
                c
            }
            ,
            i.prototype._addAriaAndCollapsedClass = function(b, c) {
                if (b) {
                    var d = a(b).hasClass(p.IN);
                    b.setAttribute("aria-expanded", d),
                    c.length && a(c).toggleClass(p.COLLAPSED, !d).attr("aria-expanded", d)
                }
            }
            ,
            i._getTargetFromElement = function(b) {
                var c = f.getSelectorFromElement(b);
                return c ? a(c)[0] : null
            }
            ,
            i._jQueryInterface = function(b) {
                return this.each(function() {
                    var c = a(this)
                      , e = c.data(h)
                      , f = a.extend({}, m, c.data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                    if (!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
                    e || (e = new i(this,f),
                    c.data(h, e)),
                    "string" == typeof b) {
                        if (void 0 === e[b])
                            throw new Error('No method named "' + b + '"');
                        e[b]()
                    }
                })
            }
            ,
            e(i, null, [{
                key: "VERSION",
                get: function() {
                    return g
                }
            }, {
                key: "Default",
                get: function() {
                    return m
                }
            }]),
            i
        }();
        return a(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
            b.preventDefault();
            var c = s._getTargetFromElement(this)
              , d = a(c).data(h)
              , e = d ? "toggle" : a(this).data();
            s._jQueryInterface.call(a(c), e)
        }),
        a.fn[b] = s._jQueryInterface,
        a.fn[b].Constructor = s,
        a.fn[b].noConflict = function() {
            return a.fn[b] = k,
            s._jQueryInterface
        }
        ,
        s
    }(jQuery),
    function(a) {
        var b = "dropdown"
          , d = "4.0.0-alpha.5"
          , g = "bs.dropdown"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 27
          , l = 38
          , m = 40
          , n = 3
          , o = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK: "click" + h,
            CLICK_DATA_API: "click" + h + i,
            KEYDOWN_DATA_API: "keydown" + h + i
        }
          , p = {
            BACKDROP: "dropdown-backdrop",
            DISABLED: "disabled",
            OPEN: "open"
        }
          , q = {
            BACKDROP: ".dropdown-backdrop",
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            ROLE_MENU: '[role="menu"]',
            ROLE_LISTBOX: '[role="listbox"]',
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        }
          , r = function() {
            function b(a) {
                c(this, b),
                this._element = a,
                this._addEventListeners()
            }
            return b.prototype.toggle = function() {
                if (this.disabled || a(this).hasClass(p.DISABLED))
                    return !1;
                var c = b._getParentFromElement(this)
                  , d = a(c).hasClass(p.OPEN);
                if (b._clearMenus(),
                d)
                    return !1;
                if ("ontouchstart"in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                    var e = document.createElement("div");
                    e.className = p.BACKDROP,
                    a(e).insertBefore(this),
                    a(e).on("click", b._clearMenus)
                }
                var f = {
                    relatedTarget: this
                }
                  , g = a.Event(o.SHOW, f);
                return a(c).trigger(g),
                !g.isDefaultPrevented() && (this.focus(),
                this.setAttribute("aria-expanded", "true"),
                a(c).toggleClass(p.OPEN),
                a(c).trigger(a.Event(o.SHOWN, f)),
                !1)
            }
            ,
            b.prototype.dispose = function() {
                a.removeData(this._element, g),
                a(this._element).off(h),
                this._element = null
            }
            ,
            b.prototype._addEventListeners = function() {
                a(this._element).on(o.CLICK, this.toggle)
            }
            ,
            b._jQueryInterface = function(c) {
                return this.each(function() {
                    var d = a(this).data(g);
                    if (d || a(this).data(g, d = new b(this)),
                    "string" == typeof c) {
                        if (void 0 === d[c])
                            throw new Error('No method named "' + c + '"');
                        d[c].call(this)
                    }
                })
            }
            ,
            b._clearMenus = function(c) {
                if (!c || c.which !== n) {
                    var d = a(q.BACKDROP)[0];
                    d && d.parentNode.removeChild(d);
                    for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                        var g = b._getParentFromElement(e[f])
                          , h = {
                            relatedTarget: e[f]
                        };
                        if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                            var i = a.Event(o.HIDE, h);
                            a(g).trigger(i),
                            i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"),
                            a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                        }
                    }
                }
            }
            ,
            b._getParentFromElement = function(b) {
                var c = void 0
                  , d = f.getSelectorFromElement(b);
                return d && (c = a(d)[0]),
                c || b.parentNode
            }
            ,
            b._dataApiKeydownHandler = function(c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(),
                c.stopPropagation(),
                !this.disabled && !a(this).hasClass(p.DISABLED))) {
                    var d = b._getParentFromElement(this)
                      , e = a(d).hasClass(p.OPEN);
                    if (!e && c.which !== k || e && c.which === k) {
                        if (c.which === k) {
                            var f = a(d).find(q.DATA_TOGGLE)[0];
                            a(f).trigger("focus")
                        }
                        return void a(this).trigger("click")
                    }
                    var g = a.makeArray(a(q.VISIBLE_ITEMS));
                    if (g = g.filter(function(a) {
                        return a.offsetWidth || a.offsetHeight
                    }),
                    g.length) {
                        var h = g.indexOf(c.target);
                        c.which === l && h > 0 && h--,
                        c.which === m && h < g.length - 1 && h++,
                        h < 0 && (h = 0),
                        g[h].focus()
                    }
                }
            }
            ,
            e(b, null, [{
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
            a.stopPropagation()
        }),
        a.fn[b] = r._jQueryInterface,
        a.fn[b].Constructor = r,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            r._jQueryInterface
        }
        ,
        r
    }(jQuery),
    function(a) {
        var b = "modal"
          , g = "4.0.0-alpha.5"
          , h = "bs.modal"
          , i = "." + h
          , j = ".data-api"
          , k = a.fn[b]
          , l = 300
          , m = 150
          , n = 27
          , o = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , p = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , q = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            FOCUSIN: "focusin" + i,
            RESIZE: "resize" + i,
            CLICK_DISMISS: "click.dismiss" + i,
            KEYDOWN_DISMISS: "keydown.dismiss" + i,
            MOUSEUP_DISMISS: "mouseup.dismiss" + i,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
            CLICK_DATA_API: "click" + i + j
        }
          , r = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
        }
          , s = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
        }
          , t = function() {
            function j(b, d) {
                c(this, j),
                this._config = this._getConfig(d),
                this._element = b,
                this._dialog = a(b).find(s.DIALOG)[0],
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            return j.prototype.toggle = function(a) {
                return this._isShown ? this.hide() : this.show(a)
            }
            ,
            j.prototype.show = function(b) {
                var c = this
                  , d = a.Event(q.SHOW, {
                    relatedTarget: b
                });
                a(this._element).trigger(d),
                this._isShown || d.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                a(document.body).addClass(r.OPEN),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                a(this._element).on(q.CLICK_DISMISS, s.DATA_DISMISS, a.proxy(this.hide, this)),
                a(this._dialog).on(q.MOUSEDOWN_DISMISS, function() {
                    a(c._element).one(q.MOUSEUP_DISMISS, function(b) {
                        a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(a.proxy(this._showElement, this, b)))
            }
            ,
            j.prototype.hide = function(b) {
                b && b.preventDefault();
                var c = a.Event(q.HIDE);
                a(this._element).trigger(c),
                this._isShown && !c.isDefaultPrevented() && (this._isShown = !1,
                this._setEscapeEvent(),
                this._setResizeEvent(),
                a(document).off(q.FOCUSIN),
                a(this._element).removeClass(r.IN),
                a(this._element).off(q.CLICK_DISMISS),
                a(this._dialog).off(q.MOUSEDOWN_DISMISS),
                f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(l) : this._hideModal())
            }
            ,
            j.prototype.dispose = function() {
                a.removeData(this._element, h),
                a(window).off(i),
                a(document).off(i),
                a(this._element).off(i),
                a(this._backdrop).off(i),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._originalBodyPadding = null,
                this._scrollbarWidth = null
            }
            ,
            j.prototype._getConfig = function(c) {
                return c = a.extend({}, o, c),
                f.typeCheckConfig(b, c, p),
                c
            }
            ,
            j.prototype._showElement = function(b) {
                var c = this
                  , d = f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.scrollTop = 0,
                d && f.reflow(this._element),
                a(this._element).addClass(r.IN),
                this._config.focus && this._enforceFocus();
                var e = a.Event(q.SHOWN, {
                    relatedTarget: b
                })
                  , g = function() {
                    c._config.focus && c._element.focus(),
                    a(c._element).trigger(e)
                };
                d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
            }
            ,
            j.prototype._enforceFocus = function() {
                var b = this;
                a(document).off(q.FOCUSIN).on(q.FOCUSIN, function(c) {
                    document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                })
            }
            ,
            j.prototype._setEscapeEvent = function() {
                var b = this;
                this._isShown && this._config.keyboard ? a(this._element).on(q.KEYDOWN_DISMISS, function(a) {
                    a.which === n && b.hide()
                }) : this._isShown || a(this._element).off(q.KEYDOWN_DISMISS)
            }
            ,
            j.prototype._setResizeEvent = function() {
                this._isShown ? a(window).on(q.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(q.RESIZE)
            }
            ,
            j.prototype._hideModal = function() {
                var b = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", "true"),
                this._showBackdrop(function() {
                    a(document.body).removeClass(r.OPEN),
                    b._resetAdjustments(),
                    b._resetScrollbar(),
                    a(b._element).trigger(q.HIDDEN)
                })
            }
            ,
            j.prototype._removeBackdrop = function() {
                this._backdrop && (a(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            j.prototype._showBackdrop = function(b) {
                var c = this
                  , d = a(this._element).hasClass(r.FADE) ? r.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var e = f.supportsTransitionEnd() && d;
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = r.BACKDROP,
                    d && a(this._backdrop).addClass(d),
                    a(this._backdrop).appendTo(document.body),
                    a(this._element).on(q.CLICK_DISMISS, function(a) {
                        return c._ignoreBackdropClick ? void (c._ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                    }),
                    e && f.reflow(this._backdrop),
                    a(this._backdrop).addClass(r.IN),
                    !b)
                        return;
                    if (!e)
                        return void b();
                    a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(m)
                } else if (!this._isShown && this._backdrop) {
                    a(this._backdrop).removeClass(r.IN);
                    var g = function() {
                        c._removeBackdrop(),
                        b && b()
                    };
                    f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(m) : g()
                } else
                    b && b()
            }
            ,
            j.prototype._handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            j.prototype._adjustDialog = function() {
                var a = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            j.prototype._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            j.prototype._checkScrollbar = function() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            j.prototype._setScrollbar = function() {
                var b = parseInt(a(s.FIXED_CONTENT).css("padding-right") || 0, 10);
                this._originalBodyPadding = document.body.style.paddingRight || "",
                this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
            }
            ,
            j.prototype._resetScrollbar = function() {
                document.body.style.paddingRight = this._originalBodyPadding
            }
            ,
            j.prototype._getScrollbarWidth = function() {
                var a = document.createElement("div");
                a.className = r.SCROLLBAR_MEASURER,
                document.body.appendChild(a);
                var b = a.offsetWidth - a.clientWidth;
                return document.body.removeChild(a),
                b
            }
            ,
            j._jQueryInterface = function(b, c) {
                return this.each(function() {
                    var e = a(this).data(h)
                      , f = a.extend({}, j.Default, a(this).data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                    if (e || (e = new j(this,f),
                    a(this).data(h, e)),
                    "string" == typeof b) {
                        if (void 0 === e[b])
                            throw new Error('No method named "' + b + '"');
                        e[b](c)
                    } else
                        f.show && e.show(c)
                })
            }
            ,
            e(j, null, [{
                key: "VERSION",
                get: function() {
                    return g
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }]),
            j
        }();
        return a(document).on(q.CLICK_DATA_API, s.DATA_TOGGLE, function(b) {
            var c = this
              , d = void 0
              , e = f.getSelectorFromElement(this);
            e && (d = a(e)[0]);
            var g = a(d).data(h) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
            "A" === this.tagName && b.preventDefault();
            var i = a(d).one(q.SHOW, function(b) {
                b.isDefaultPrevented() || i.one(q.HIDDEN, function() {
                    a(c).is(":visible") && c.focus()
                })
            });
            t._jQueryInterface.call(a(d), g, this)
        }),
        a.fn[b] = t._jQueryInterface,
        a.fn[b].Constructor = t,
        a.fn[b].noConflict = function() {
            return a.fn[b] = k,
            t._jQueryInterface
        }
        ,
        t
    }(jQuery),
    function(a) {
        var b = "scrollspy"
          , g = "4.0.0-alpha.5"
          , h = "bs.scrollspy"
          , i = "." + h
          , j = ".data-api"
          , k = a.fn[b]
          , l = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , m = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , n = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + j
        }
          , o = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            NAV_LINK: "nav-link",
            NAV: "nav",
            ACTIVE: "active"
        }
          , p = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            LIST_ITEM: ".list-item",
            LI: "li",
            LI_DROPDOWN: "li.dropdown",
            NAV_LINKS: ".nav-link",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , q = {
            OFFSET: "offset",
            POSITION: "position"
        }
          , r = function() {
            function j(b, d) {
                c(this, j),
                this._element = b,
                this._scrollElement = "BODY" === b.tagName ? window : b,
                this._config = this._getConfig(d),
                this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS),
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                a(this._scrollElement).on(n.SCROLL, a.proxy(this._process, this)),
                this.refresh(),
                this._process()
            }
            return j.prototype.refresh = function() {
                var b = this
                  , c = this._scrollElement !== this._scrollElement.window ? q.POSITION : q.OFFSET
                  , d = "auto" === this._config.method ? c : this._config.method
                  , e = d === q.POSITION ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight();
                var g = a.makeArray(a(this._selector));
                g.map(function(b) {
                    var c = void 0
                      , g = f.getSelectorFromElement(b);
                    return g && (c = a(g)[0]),
                    c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                }).filter(function(a) {
                    return a
                }).sort(function(a, b) {
                    return a[0] - b[0]
                }).forEach(function(a) {
                    b._offsets.push(a[0]),
                    b._targets.push(a[1])
                })
            }
            ,
            j.prototype.dispose = function() {
                a.removeData(this._element, h),
                a(this._scrollElement).off(i),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            j.prototype._getConfig = function(c) {
                if (c = a.extend({}, l, c),
                "string" != typeof c.target) {
                    var d = a(c.target).attr("id");
                    d || (d = f.getUID(b),
                    a(c.target).attr("id", d)),
                    c.target = "#" + d
                }
                return f.typeCheckConfig(b, c, m),
                c
            }
            ,
            j.prototype._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
            }
            ,
            j.prototype._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            j.prototype._process = function() {
                var a = this._getScrollTop() + this._config.offset
                  , b = this._getScrollHeight()
                  , c = this._config.offset + b - this._scrollElement.offsetHeight;
                if (this._scrollHeight !== b && this.refresh(),
                a >= c) {
                    var d = this._targets[this._targets.length - 1];
                    this._activeTarget !== d && this._activate(d)
                }
                if (this._activeTarget && a < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var e = this._offsets.length; e--; ) {
                    var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                    f && this._activate(this._targets[e])
                }
            }
            ,
            j.prototype._activate = function(b) {
                this._activeTarget = b,
                this._clear();
                var c = this._selector.split(",");
                c = c.map(function(a) {
                    return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                });
                var d = a(c.join(","));
                d.hasClass(o.DROPDOWN_ITEM) ? (d.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(o.ACTIVE),
                d.addClass(o.ACTIVE)) : d.parents(p.LI).find(p.NAV_LINKS).addClass(o.ACTIVE),
                a(this._scrollElement).trigger(n.ACTIVATE, {
                    relatedTarget: b
                })
            }
            ,
            j.prototype._clear = function() {
                a(this._selector).filter(p.ACTIVE).removeClass(o.ACTIVE)
            }
            ,
            j._jQueryInterface = function(b) {
                return this.each(function() {
                    var c = a(this).data(h)
                      , e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b || null;
                    if (c || (c = new j(this,e),
                    a(this).data(h, c)),
                    "string" == typeof b) {
                        if (void 0 === c[b])
                            throw new Error('No method named "' + b + '"');
                        c[b]()
                    }
                })
            }
            ,
            e(j, null, [{
                key: "VERSION",
                get: function() {
                    return g
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            j
        }();
        return a(window).on(n.LOAD_DATA_API, function() {
            for (var b = a.makeArray(a(p.DATA_SPY)), c = b.length; c--; ) {
                var d = a(b[c]);
                r._jQueryInterface.call(d, d.data())
            }
        }),
        a.fn[b] = r._jQueryInterface,
        a.fn[b].Constructor = r,
        a.fn[b].noConflict = function() {
            return a.fn[b] = k,
            r._jQueryInterface
        }
        ,
        r
    }(jQuery),
    function(a) {
        var b = "tab"
          , d = "4.0.0-alpha.5"
          , g = "bs.tab"
          , h = "." + g
          , i = ".data-api"
          , j = a.fn[b]
          , k = 150
          , l = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK_DATA_API: "click" + h + i
        }
          , m = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            FADE: "fade",
            IN: "in"
        }
          , n = {
            A: "a",
            LI: "li",
            DROPDOWN: ".dropdown",
            UL: "ul:not(.dropdown-menu)",
            FADE_CHILD: "> .nav-item .fade, > .fade",
            ACTIVE: ".active",
            ACTIVE_CHILD: "> .nav-item > .active, > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }
          , o = function() {
            function b(a) {
                c(this, b),
                this._element = a
            }
            return b.prototype.show = function() {
                var b = this;
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                    var c = void 0
                      , d = void 0
                      , e = a(this._element).closest(n.UL)[0]
                      , g = f.getSelectorFromElement(this._element);
                    e && (d = a.makeArray(a(e).find(n.ACTIVE)),
                    d = d[d.length - 1]);
                    var h = a.Event(l.HIDE, {
                        relatedTarget: this._element
                    })
                      , i = a.Event(l.SHOW, {
                        relatedTarget: d
                    });
                    if (d && a(d).trigger(h),
                    a(this._element).trigger(i),
                    !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
                        g && (c = a(g)[0]),
                        this._activate(this._element, e);
                        var j = function() {
                            var c = a.Event(l.HIDDEN, {
                                relatedTarget: b._element
                            })
                              , e = a.Event(l.SHOWN, {
                                relatedTarget: d
                            });
                            a(d).trigger(c),
                            a(b._element).trigger(e)
                        };
                        c ? this._activate(c, c.parentNode, j) : j()
                    }
                }
            }
            ,
            b.prototype.dispose = function() {
                a.removeClass(this._element, g),
                this._element = null
            }
            ,
            b.prototype._activate = function(b, c, d) {
                var e = a(c).find(n.ACTIVE_CHILD)[0]
                  , g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0]))
                  , h = a.proxy(this._transitionComplete, this, b, e, g, d);
                e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(),
                e && a(e).removeClass(m.IN)
            }
            ,
            b.prototype._transitionComplete = function(b, c, d, e) {
                if (c) {
                    a(c).removeClass(m.ACTIVE);
                    var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                    g && a(g).removeClass(m.ACTIVE),
                    c.setAttribute("aria-expanded", !1)
                }
                if (a(b).addClass(m.ACTIVE),
                b.setAttribute("aria-expanded", !0),
                d ? (f.reflow(b),
                a(b).addClass(m.IN)) : a(b).removeClass(m.FADE),
                b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                    var h = a(b).closest(n.DROPDOWN)[0];
                    h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),
                    b.setAttribute("aria-expanded", !0)
                }
                e && e()
            }
            ,
            b._jQueryInterface = function(c) {
                return this.each(function() {
                    var d = a(this)
                      , e = d.data(g);
                    if (e || (e = e = new b(this),
                    d.data(g, e)),
                    "string" == typeof c) {
                        if (void 0 === e[c])
                            throw new Error('No method named "' + c + '"');
                        e[c]()
                    }
                })
            }
            ,
            e(b, null, [{
                key: "VERSION",
                get: function() {
                    return d
                }
            }]),
            b
        }();
        return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
            b.preventDefault(),
            o._jQueryInterface.call(a(this), "show")
        }),
        a.fn[b] = o._jQueryInterface,
        a.fn[b].Constructor = o,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            o._jQueryInterface
        }
        ,
        o
    }(jQuery),
    function(a) {
        if (void 0 === window.Tether)
            throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
        var b = "tooltip"
          , g = "4.0.0-alpha.5"
          , h = "bs.tooltip"
          , i = "." + h
          , j = a.fn[b]
          , k = 150
          , l = "bs-tether"
          , m = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: []
        }
          , n = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array"
        }
          , o = {
            TOP: "bottom center",
            RIGHT: "middle left",
            BOTTOM: "top center",
            LEFT: "middle right"
        }
          , p = {
            IN: "in",
            OUT: "out"
        }
          , q = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
        }
          , r = {
            FADE: "fade",
            IN: "in"
        }
          , s = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner"
        }
          , t = {
            element: !1,
            enabled: !1
        }
          , u = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        }
          , v = function() {
            function j(a, b) {
                c(this, j),
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._tether = null,
                this.element = a,
                this.config = this._getConfig(b),
                this.tip = null,
                this._setListeners()
            }
            return j.prototype.enable = function() {
                this._isEnabled = !0
            }
            ,
            j.prototype.disable = function() {
                this._isEnabled = !1
            }
            ,
            j.prototype.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            j.prototype.toggle = function(b) {
                if (b) {
                    var c = this.constructor.DATA_KEY
                      , d = a(b.currentTarget).data(c);
                    d || (d = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                    a(b.currentTarget).data(c, d)),
                    d._activeTrigger.click = !d._activeTrigger.click,
                    d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                } else {
                    if (a(this.getTipElement()).hasClass(r.IN))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
            }
            ,
            j.prototype.dispose = function() {
                clearTimeout(this._timeout),
                this.cleanupTether(),
                a.removeData(this.element, this.constructor.DATA_KEY),
                a(this.element).off(this.constructor.EVENT_KEY),
                this.tip && a(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                this._tether = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            j.prototype.show = function() {
                var b = this
                  , c = a.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    a(this.element).trigger(c);
                    var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                    if (c.isDefaultPrevented() || !d)
                        return;
                    var e = this.getTipElement()
                      , g = f.getUID(this.constructor.NAME);
                    e.setAttribute("id", g),
                    this.element.setAttribute("aria-describedby", g),
                    this.setContent(),
                    this.config.animation && a(e).addClass(r.FADE);
                    var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement
                      , i = this._getAttachment(h);
                    a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body),
                    a(this.element).trigger(this.constructor.Event.INSERTED),
                    this._tether = new Tether({
                        attachment: i,
                        element: e,
                        target: this.element,
                        classes: t,
                        classPrefix: l,
                        offset: this.config.offset,
                        constraints: this.config.constraints,
                        addTargetClasses: !1
                    }),
                    f.reflow(e),
                    this._tether.position(),
                    a(e).addClass(r.IN);
                    var k = function() {
                        var c = b._hoverState;
                        b._hoverState = null,
                        a(b.element).trigger(b.constructor.Event.SHOWN),
                        c === p.OUT && b._leave(null, b)
                    };
                    if (f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE))
                        return void a(this.tip).one(f.TRANSITION_END, k).emulateTransitionEnd(j._TRANSITION_DURATION);
                    k()
                }
            }
            ,
            j.prototype.hide = function(b) {
                var c = this
                  , d = this.getTipElement()
                  , e = a.Event(this.constructor.Event.HIDE)
                  , g = function() {
                    c._hoverState !== p.IN && d.parentNode && d.parentNode.removeChild(d),
                    c.element.removeAttribute("aria-describedby"),
                    a(c.element).trigger(c.constructor.Event.HIDDEN),
                    c.cleanupTether(),
                    b && b()
                };
                a(this.element).trigger(e),
                e.isDefaultPrevented() || (a(d).removeClass(r.IN),
                f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g(),
                this._hoverState = "")
            }
            ,
            j.prototype.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            j.prototype.getTipElement = function() {
                return this.tip = this.tip || a(this.config.template)[0]
            }
            ,
            j.prototype.setContent = function() {
                var b = a(this.getTipElement());
                this.setElementContent(b.find(s.TOOLTIP_INNER), this.getTitle()),
                b.removeClass(r.FADE).removeClass(r.IN),
                this.cleanupTether()
            }
            ,
            j.prototype.setElementContent = function(b, c) {
                var e = this.config.html;
                "object" === ("undefined" == typeof c ? "undefined" : d(c)) && (c.nodeType || c.jquery) ? e ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[e ? "html" : "text"](c)
            }
            ,
            j.prototype.getTitle = function() {
                var a = this.element.getAttribute("data-original-title");
                return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                a
            }
            ,
            j.prototype.cleanupTether = function() {
                this._tether && this._tether.destroy()
            }
            ,
            j.prototype._getAttachment = function(a) {
                return o[a.toUpperCase()]
            }
            ,
            j.prototype._setListeners = function() {
                var b = this
                  , c = this.config.trigger.split(" ");
                c.forEach(function(c) {
                    if ("click" === c)
                        a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                    else if (c !== u.MANUAL) {
                        var d = c === u.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN
                          , e = c === u.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                        a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                    }
                }),
                this.config.selector ? this.config = a.extend({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            j.prototype._fixTitle = function() {
                var a = d(this.element.getAttribute("data-original-title"));
                (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            j.prototype._enter = function(b, c) {
                var d = this.constructor.DATA_KEY;
                return c = c || a(b.currentTarget).data(d),
                c || (c = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                a(b.currentTarget).data(d, c)),
                b && (c._activeTrigger["focusin" === b.type ? u.FOCUS : u.HOVER] = !0),
                a(c.getTipElement()).hasClass(r.IN) || c._hoverState === p.IN ? void (c._hoverState = p.IN) : (clearTimeout(c._timeout),
                c._hoverState = p.IN,
                c.config.delay && c.config.delay.show ? void (c._timeout = setTimeout(function() {
                    c._hoverState === p.IN && c.show()
                }, c.config.delay.show)) : void c.show())
            }
            ,
            j.prototype._leave = function(b, c) {
                var d = this.constructor.DATA_KEY;
                if (c = c || a(b.currentTarget).data(d),
                c || (c = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                a(b.currentTarget).data(d, c)),
                b && (c._activeTrigger["focusout" === b.type ? u.FOCUS : u.HOVER] = !1),
                !c._isWithActiveTrigger())
                    return clearTimeout(c._timeout),
                    c._hoverState = p.OUT,
                    c.config.delay && c.config.delay.hide ? void (c._timeout = setTimeout(function() {
                        c._hoverState === p.OUT && c.hide()
                    }, c.config.delay.hide)) : void c.hide()
            }
            ,
            j.prototype._isWithActiveTrigger = function() {
                for (var a in this._activeTrigger)
                    if (this._activeTrigger[a])
                        return !0;
                return !1
            }
            ,
            j.prototype._getConfig = function(c) {
                return c = a.extend({}, this.constructor.Default, a(this.element).data(), c),
                c.delay && "number" == typeof c.delay && (c.delay = {
                    show: c.delay,
                    hide: c.delay
                }),
                f.typeCheckConfig(b, c, this.constructor.DefaultType),
                c
            }
            ,
            j.prototype._getDelegateConfig = function() {
                var a = {};
                if (this.config)
                    for (var b in this.config)
                        this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                return a
            }
            ,
            j._jQueryInterface = function(b) {
                return this.each(function() {
                    var c = a(this).data(h)
                      , e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) ? b : null;
                    if ((c || !/dispose|hide/.test(b)) && (c || (c = new j(this,e),
                    a(this).data(h, c)),
                    "string" == typeof b)) {
                        if (void 0 === c[b])
                            throw new Error('No method named "' + b + '"');
                        c[b]()
                    }
                })
            }
            ,
            e(j, null, [{
                key: "VERSION",
                get: function() {
                    return g
                }
            }, {
                key: "Default",
                get: function() {
                    return m
                }
            }, {
                key: "NAME",
                get: function() {
                    return b
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return h
                }
            }, {
                key: "Event",
                get: function() {
                    return q
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return n
                }
            }]),
            j
        }();
        return a.fn[b] = v._jQueryInterface,
        a.fn[b].Constructor = v,
        a.fn[b].noConflict = function() {
            return a.fn[b] = j,
            v._jQueryInterface
        }
        ,
        v
    }(jQuery));
    (function(f) {
        var h = "popover"
          , i = "4.0.0-alpha.5"
          , j = "bs.popover"
          , k = "." + j
          , l = f.fn[h]
          , m = f.extend({}, g.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        })
          , n = f.extend({}, g.DefaultType, {
            content: "(string|element|function)"
        })
          , o = {
            FADE: "fade",
            IN: "in"
        }
          , p = {
            TITLE: ".popover-title",
            CONTENT: ".popover-content"
        }
          , q = {
            HIDE: "hide" + k,
            HIDDEN: "hidden" + k,
            SHOW: "show" + k,
            SHOWN: "shown" + k,
            INSERTED: "inserted" + k,
            CLICK: "click" + k,
            FOCUSIN: "focusin" + k,
            FOCUSOUT: "focusout" + k,
            MOUSEENTER: "mouseenter" + k,
            MOUSELEAVE: "mouseleave" + k
        }
          , r = function(g) {
            function l() {
                return c(this, l),
                a(this, g.apply(this, arguments))
            }
            return b(l, g),
            l.prototype.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            l.prototype.getTipElement = function() {
                return this.tip = this.tip || f(this.config.template)[0]
            }
            ,
            l.prototype.setContent = function() {
                var a = f(this.getTipElement());
                this.setElementContent(a.find(p.TITLE), this.getTitle()),
                this.setElementContent(a.find(p.CONTENT), this._getContent()),
                a.removeClass(o.FADE).removeClass(o.IN),
                this.cleanupTether()
            }
            ,
            l.prototype._getContent = function() {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
            }
            ,
            l._jQueryInterface = function(a) {
                return this.each(function() {
                    var b = f(this).data(j)
                      , c = "object" === ("undefined" == typeof a ? "undefined" : d(a)) ? a : null;
                    if ((b || !/destroy|hide/.test(a)) && (b || (b = new l(this,c),
                    f(this).data(j, b)),
                    "string" == typeof a)) {
                        if (void 0 === b[a])
                            throw new Error('No method named "' + a + '"');
                        b[a]()
                    }
                })
            }
            ,
            e(l, null, [{
                key: "VERSION",
                get: function() {
                    return i
                }
            }, {
                key: "Default",
                get: function() {
                    return m
                }
            }, {
                key: "NAME",
                get: function() {
                    return h
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return j
                }
            }, {
                key: "Event",
                get: function() {
                    return q
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return k
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return n
                }
            }]),
            l
        }(g);
        return f.fn[h] = r._jQueryInterface,
        f.fn[h].Constructor = r,
        f.fn[h].noConflict = function() {
            return f.fn[h] = l,
            r._jQueryInterface
        }
        ,
        r
    }
    )(jQuery)
}();
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function() {
    "use strict";
    function t(o) {
        if (!o)
            throw new Error("No options passed to Waypoint constructor");
        if (!o.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e,
        this.options = t.Adapter.extend({}, t.defaults, o),
        this.element = this.options.element,
        this.adapter = new t.Adapter(this.element),
        this.callback = o.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = t.Context.findOrCreateByElement(this.options.context),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        i[this.key] = this,
        e += 1
    }
    var e = 0
      , i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }
    ,
    t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }
    ,
    t.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete i[this.key]
    }
    ,
    t.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    t.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    t.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    t.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    t.invokeAll = function(t) {
        var e = [];
        for (var o in i)
            e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++)
            e[n][t]()
    }
    ,
    t.destroyAll = function() {
        t.invokeAll("destroy")
    }
    ,
    t.disableAll = function() {
        t.invokeAll("disable")
    }
    ,
    t.enableAll = function() {
        t.invokeAll("enable")
    }
    ,
    t.refreshAll = function() {
        t.Context.refreshAll()
    }
    ,
    t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    t.adapters = [],
    t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = t
}(),
function() {
    "use strict";
    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    function e(t) {
        this.element = t,
        this.Adapter = n.Adapter,
        this.adapter = new this.Adapter(t),
        this.key = "waypoint-context-" + i,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        t.waypointContextKey = this.key,
        o[t.waypointContextKey] = this,
        i += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0
      , o = {}
      , n = window.Waypoint
      , r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t,
        this.refresh()
    }
    ,
    e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"),
        delete o[this.key])
    }
    ,
    e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(),
            e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0,
            n.requestAnimationFrame(t))
        })
    }
    ,
    e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(),
            e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0,
            n.requestAnimationFrame(t))
        })
    }
    ,
    e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }
    ,
    e.prototype.handleScroll = function() {
        var t = {}
          , e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i]
              , n = o.newScroll > o.oldScroll
              , r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s]
                  , l = o.oldScroll < a.triggerPoint
                  , h = o.newScroll >= a.triggerPoint
                  , p = l && h
                  , u = !l && !h;
                (p || u) && (a.queueTrigger(r),
                t[a.group.id] = a.group)
            }
        }
        for (var c in t)
            t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }
    ,
    e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key],
        this.checkEmpty()
    }
    ,
    e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e])
                t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++)
            t[o].destroy()
    }
    ,
    e.prototype.refresh = function() {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
        this.handleScroll(),
        t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0, g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]),
                "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f),
                d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))),
                l = s.contextScroll - s.contextOffset,
                d.triggerPoint = y + l - f,
                h = w < s.oldScroll,
                p = d.triggerPoint >= s.oldScroll,
                u = h && p,
                c = !h && !p,
                !g && u ? (d.queueTrigger(s.backward),
                o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward),
                o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward),
                o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o)
                o[t].flushTriggers()
        }),
        this
    }
    ,
    e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }
    ,
    e.refreshAll = function() {
        for (var t in o)
            o[t].refresh()
    }
    ,
    e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }
    ,
    window.onload = function() {
        r && r(),
        e.refreshAll()
    }
    ,
    n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }
    ,
    n.Context = e
}(),
function() {
    "use strict";
    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    function i(t) {
        this.name = t.name,
        this.axis = t.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        o[this.axis][this.name] = this
    }
    var o = {
        vertical: {},
        horizontal: {}
    }
      , n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }
    ,
    i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i]
              , n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints)
          , o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }
    ,
    i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }
    ,
    i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }
    ,
    i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }
    ,
    i.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }
    ,
    n.Group = i
}(),
function() {
    "use strict";
    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery
      , i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }),
    e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }),
    i.adapters.push({
        name: "jquery",
        Adapter: t
    }),
    i.Adapter = t
}(),
function() {
    "use strict";
    function t(t) {
        return function() {
            var i = []
              , o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]),
            o.handler = arguments[0]),
            this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]),
                i.push(new e(n))
            }),
            i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {}, u = !!window.jQuery, v = a(window), w = function(a, c) {
        b.ev.on(o + a + p, c)
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, y = function(c, d) {
        b.ev.triggerHandler(o + c, d),
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        g = c),
        b.currTemplate.closeBtn
    }, A = function() {
        a.magnificPopup.instance || (b = new t,
        b.init(),
        a.magnificPopup.instance = b)
    }, B = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
            b.isAndroid = /android/gi.test(c),
            b.isIOS = /iphone|ipad|ipod/gi.test(c),
            b.supportsTransition = B(),
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = a(document),
            b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                    g.parsed && (g = g.el[0]),
                    g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
            f = "",
            c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1),
            b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }),
            b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = x("container", b.wrap)),
            b.contentContainer = x("content"),
            b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                b["init" + j].call(b)
            }
            y("BeforeOpen"),
            b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }),
            f += " mfp-close-btn-in") : b.wrap.append(z())),
            b.st.alignTop && (f += " mfp-align-top"),
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }),
            (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }),
            b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }),
            v.on("resize" + p, function() {
                b.updateSize()
            }),
            b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && b.wrap.addClass(f);
            var k = b.wH = v.height()
              , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
            r && b._addClassToMFP(r),
            b.updateItemHTML(),
            y("BuildControls"),
            a("html").css(n),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP(q),
                b._setFocus()) : b.bgOverlay.addClass(q),
                d.on("focusin" + p, b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(k),
            y(m),
            c
        },
        close: function() {
            b.isOpen && (y(i),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
            b.ev.off(p),
            b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            b.bgOverlay.attr("class", "mfp-bg"),
            b.container.attr("class", "mfp-container"),
            !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
            b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
            b.currItem = null,
            b.content = null,
            b.currTemplate = null,
            b.prevHeight = 0,
            y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                  , d = window.innerHeight * c;
                b.wrap.css("height", d),
                b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
            y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
            b.content && b.content.detach(),
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
            c.preloaded = !0,
            y(n, c),
            e = c.type,
            b.container.prepend(b.contentContainer),
            y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a,
            a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
            y(k),
            b.container.addClass("mfp-" + c + "-holder"),
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
            e = {
                data: e,
                src: e.src
            }),
            e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
            e.index = c,
            e.parsed = !0,
            b.items[c] = e,
            y("ElementParse", e),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this,
                b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
            c.items ? (c.isObj = !0,
            a.off(e).on(e, d)) : (c.isObj = !1,
            c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
            a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation()),
                e.el = a(c.mfpEl),
                e.delegate && (e.items = d.find(e.delegate)),
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                a = e.status,
                d = e.text,
                b.preloader.html(d),
                b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                b.container.addClass("mfp-s-" + a),
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                  , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a),
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            y(l, [b, c, d]),
            a.each(c, function(c, d) {
                if (void 0 === d || d === !1)
                    return !0;
                if (e = c.split("_"),
                e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else
                    b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                b.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d,
                f.delegate && (e = e.find(f.delegate)),
                e = e.eq(g)),
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(),
        E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(),
                c.src) {
                    var e = b.st.inline
                      , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                        D = x(C),
                        C = "mfp-" + C),
                        E = f.after(D).detach().removeClass(C)),
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a(document.body).removeClass(H)
    }, K = function() {
        J(),
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                H = b.st.ajax.cursor,
                w(h + "." + I, K),
                w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                        b.appendContent(a(g.data), I),
                        c.finished = !0,
                        J(),
                        b._setFocus(),
                        setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16),
                        b.updateStatus("ready"),
                        y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                        c.finished = c.loadError = !0,
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image
                  , d = ".image";
                b.types.push("image"),
                w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }),
                w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor),
                    v.off("resize" + p)
                }),
                w("Resize" + d, b.resizeImage),
                b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                y("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , e = function(f) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                        c++,
                        void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0
                  , f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    y("ImageLoadComplete")) : (e++,
                    200 > e ? setTimeout(f, 100) : g()))
                }
                  , g = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , h = b.st.image
                  , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                    c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                    j.src = c.src,
                    i.is("img") && (c.img = c.img.clone()),
                    j = c.img[0],
                    j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
        N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , d = "all " + c.duration / 1e3 + "s " + c.easing
                          , e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                        b.css(e),
                        b
                    }, k = function() {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void k();
                            f = j(a),
                            f.css(b._getOffset()),
                            b.wrap.append(f),
                            e = setTimeout(function() {
                                f.css(b._getOffset(!0)),
                                e = setTimeout(function() {
                                    k(),
                                    setTimeout(function() {
                                        f.remove(),
                                        a = f = null,
                                        y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }),
                    w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.st.removalDelay = g,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)),
                            b.wrap.append(f),
                            b.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }),
                    w(h + d, function() {
                        b._allowZoom() && (k(),
                        f && f.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                  , f = parseInt(d.css("padding-top"), 10)
                  , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                h.top = e.top),
                h
            }
        }
    });
    var P = "iframe"
      , Q = "//about:blank"
      , R = function(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }),
                w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src
                  , f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                    e = this.src.replace("%id%", e),
                    !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                b._parseMarkup(d, g, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var S = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery
                  , e = ".mfp-gallery";
                return b.direction = !0,
                c && c.enabled ? (f += " mfp-gallery",
                w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }),
                w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }),
                w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup
                          , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                          , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }),
                        f.click(function() {
                            b.next()
                        }),
                        b.container.append(e.add(f))
                    }
                }),
                w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(),
                        b._preloadTimeout = null
                    }, 16)
                }),
                void w(h + e, function() {
                    d.off(e),
                    b.wrap.off("click" + e),
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0,
                b.index = S(b.index + 1),
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                b.index = S(b.index - 1),
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                b.index = a,
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                    y("LazyLoad", d),
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0,
                        d.loadError = !0,
                        y("LazyLoadError", d)
                    }).attr("src", d.src)),
                    d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                      , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                    c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }),
                    w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }),
    A()
});
// Initialize top menu
(function(document, window) {

    if (document.getElementsByClassName('top-menu-container').length) {
        if (document.getElementsByClassName('banner')[0]) {
            var waypointElement = document.getElementsByClassName('banner')[0];
        }

        // Sometime we don't have baner on site and we need to correct container
        if (!waypointElement) {
            waypointElement = document.getElementsByClassName('no-banner-container')[0];
        }

        // Waypoint for half menu
        var topmenu_half_waypoint = new Waypoint({
            element: waypointElement,
            handler: function(direction) {
                var container = document.getElementsByClassName('top-menu-container')[0];
                if (direction == "down" && !container.classList.contains('half')) {
                    container.classList.remove('top');
                    container.classList.add('stuck');
                } else {
                    container.classList.remove('stuck');
                    container.classList.add('top');
                }
            },
            offset: function() {
                return -document.getElementsByClassName('top-menu-container')[0].offsetHeight / 2
            }
        });

        // Waypoint for hide menu
        var topmenu_hide_waypoint = new Waypoint({
            element: waypointElement,
            handler: function(direction) {
                var container = document.getElementsByClassName('top-menu-container')[0];
                if (direction == "down" && !this.element.classList.contains('half')) {
                    container.classList.add('hide');
                } else {
                    container.classList.remove('hide');
                }
            },
            offset: function() {
                return -this.element.offsetHeight
            }
        });

        // Show and hide top menu by window scroll
        var lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop
              , bannerContainer = waypointElement
              , topMenuContainer = document.getElementsByClassName('top-menu-container')[0];

            if (scrollTop > bannerContainer.offsetHeight) {
                if (scrollTop > lastScrollTop) {
                    topMenuContainer.classList.add('hide');
                } else {
                    topMenuContainer.classList.remove('hide');
                }
            }
            lastScrollTop = scrollTop;
        }, false);
    }
}
)(document, window);
/*
 * Copyright (C) eZ Systems AS. All rights reserved.
 * For full copyright and license information view LICENSE file distributed with this source code.
 */

(function(global, doc) {
    var eZ = global.eZ = global.eZ || {};

    /**
     * Contains logic needed to display privacy banner.
     *
     * @class
     * @param {Object} config
     */
    eZ.PrivacyCookieBanner = function(config) {
        this.cookieName = config.cookieName || 'EzPrivacyCookieStatus';
        this.bannerElement = document.getElementById(config.bannerId || 'privacy-cookie-banner');
        this.acceptElement = document.getElementById(config.acceptId || 'privacy-cookie-banner__privacy-accept');
        this.closeElement = document.getElementById(config.closeId || 'privacy-cookie-banner__privacy-close');
        this.days = config.days || 365;
    }
    ;

    /**
     * Hide privacy banner.
     */
    eZ.PrivacyCookieBanner.prototype.hideBanner = function() {
        this.bannerElement.className = this.bannerElement.className.replace(/\b privacy-cookie-banner--slide-up\b/, '');
        this.bannerElement.className = this.bannerElement.className + ' privacy-cookie-banner--slide-down';
    }
    ;

    /**
     * Show privacy banner.
     */
    eZ.PrivacyCookieBanner.prototype.showBanner = function() {
        this.bannerElement.className = this.bannerElement.className.replace(/\b privacy-cookie-banner--slide-down\b/, '');
        this.bannerElement.className = this.bannerElement.className + ' privacy-cookie-banner--slide-up';
    }
    ;

    /**
     * Get cookie value by name.
     *
     * @param {string} name
     * @returns {string}
     */
    eZ.PrivacyCookieBanner.prototype.getCookie = function(name) {
        var cookieName = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1);
            if (c.indexOf(cookieName) === 0)
                return c.substring(cookieName.length, c.length);
        }
        return '';
    }
    ;

    /**
     * Set cookie value.
     *
     * @param {string} name
     * @param {string} value
     * @param {int} days
     */
    eZ.PrivacyCookieBanner.prototype.setCookie = function(name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires;
    }
    ;

    /**
     * Accept privacy policy (set cookie status) and hide banner.
     */
    eZ.PrivacyCookieBanner.prototype.accept = function() {
        this.setCookie(this.cookieName, '1', this.days);
        this.hideBanner();
    }
    ;

    /**
     * Display privacy banner depending on cookie status.
     */
    eZ.PrivacyCookieBanner.prototype.show = function() {
        if (this.getCookie(this.cookieName) !== '1') {
            this.acceptElement.addEventListener('click', function() {
                this.accept();
            }
            .bind(this), false);
            this.closeElement.addEventListener('click', function() {
                this.hideBanner();
            }
            .bind(this), false);
            this.showBanner();
        }
    }
    ;

}
)(window, document);
