(function() {
    if (location.host === 'localhost') {
        var e = document.getElementById('curtain');
        e.style.overflow = "auto";
    }
})();
$.ajaxSetup({
    type: 'POST',
    url: '/php/master1.php'
});
var M = Math,
    T = TweenMax,
    D = document,
    C = createjs,
    tween = {},
    cache = {},
    save = {},
    ez = {},
    P = {};
ez.sin = Sine.easeIn;
ez.sinout = Sine.easeInOut;
ez.sout = Sine.easeOut;
ez.lin = Linear.easeIn;
ez.Qout = Quad.easeOut;
ez.Qin = Quad.easeIn;
ez.Qinout = Quad.easeInOut;
ez.qout = Quart.easeOut;
ez.qin = Quart.easeIn;
ez.cout = Circ.easeOut;
ez.cin = Circ.easeIn;
ez.cinout = Circ.easeInOut;
ez.xout = Expo.easeOut;
ez.xin = Expo.easeIn;
ez.binout = Bounce.easeInOut;
ez.bout = Bounce.easeOut;
ez.Bout = Back.easeOut;
ez.Bin = Back.easeIn,
    T.defaultOverwrite = "all";
T.defaultEase = ez.Qout;
T.globalTimeScale(1);
var battleStart = 0,
    battleEnd = 0,
    cacheClassDrag = '',
    cacheClassDrop = '',
    cacheDragSlot = '',
    cacheDragID = 0,
    cacheDropSlot = '',
    cacheDropID = 0,
    battleDuration = 0,
    battleDps = 0,
    petTarget = '',
	chatRow = 0,
    talentResetNotify = false,
	buttonLock = false;

function mobileDevice() {
    return /Silk|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function checkXbox() {
    return /Xbox/i.test(navigator.userAgent);
}

function checkPlaystation() {
    var foo = false;
    if (navigator.userAgent.toLowerCase().indexOf("playstation") >= 0) {
        foo = true;
    }
    return foo;
}

function checkNintendo() {
    return /Nintendo/i.test(navigator.userAgent);
}
var isXbox = checkXbox(),
    isPlaystation = checkPlaystation(),
    isNintendo = checkNintendo(),
    isMobile = mobileDevice(),
    isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
    isFirefox = typeof InstallTrigger !== 'undefined',
    isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
    isChrome = !!window.chrome && !isOpera,
    isMSIE = /*@cc_on!@*/ false,
    isMSIE11 = !!navigator.userAgent.match(/Trident\/7\./);

function resizeWindow() {
    /*	
    html{
    	background:#060606;
    	overflow:hidden;	
    }
    #gameView{
    	position:absolute;
    	left:50%;
    	top:50%;
    	width:100%;
    	height:100%;
    	background:#222;
    }
    #ui{
    	position:absolute;
    	background:#553;
    	bottom:0;
    	width:100%;
    	height:8%;
    }
    #ui2{
    	position:absolute;
    	background:#553;
    	color:#fff;
    	top:0;
    	left:0;
    	width:100%;
    	height:15%;
    }
    ======
    var gameView = document.getElementById('gameView');
    // game ratio
    var widthToHeight = 1280/720;
    // current window size
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    if(newWidthToHeight > widthToHeight){
    	// too tall
    	newWidth = newHeight * widthToHeight;
    	gameView.style.height = newHeight + 'px';
    	gameView.style.width = newWidth + 'px';
    }else{
    	// too wide
    	newHeight = newWidth / widthToHeight;
    	gameView.style.width = newWidth + 'px';
    	gameView.style.height = newHeight + 'px';
    }
    // wrap
    gameView.style.marginTop = (-newHeight / 2) + 'px';
    gameView.style.marginLeft = (-newWidth / 2) + 'px';
    gameView.style.fontSize = (newWidth / 400) + 'em';
    // canvas
    var game = document.getElementById('game');
    game.style.width = newWidth + 'px';
    game.style.height = newHeight + 'px';	
    */
}

$(window).on('load resize orientationchange', function() {
    resizeWindow();
});

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = function(e) {
            var i = e.nodeType,
                r = "";
            if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) r += t(e)
            } else if (3 === i || 4 === i) return e.nodeValue;
            return r
        },
        e = function(t, e) {
            for (var i = e.length, r = ""; --t > -1;) r += e[0 | Math.random() * i];
            return r
        },
        i = function(t) {
            this.chars = t.split(""), this.sets = [], this.length = 50;
            var i;
            for (i = 0; 20 > i; i++) this.sets[i] = e(80, this.chars);
            this.grow = function(t) {
                for (i = 0; 20 > i; i++) this.sets[i] += e(t - this.length, this.chars);
                this.length = t
            }
        },
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        s = r.toLowerCase(),
        n = {
            upperCase: new i(r),
            lowerCase: new i(s),
            upperAndLowerCase: new i(r + s)
        },
        a = _gsScope._gsDefine.plugin({
            propName: "scrambleText",
            version: "0.2.2",
            API: 2,
            overwriteProps: ["scrambleText", "text"],
            init: function(e, r, s) {
                if (this._prop = "innerHTML" in e ? "innerHTML" : "textContent" in e ? "textContent" : 0, !this._prop) return !1;
                this._target = e, "object" != typeof r && (r = {
                    text: r
                });
                var a, o, l, h;
                return this._delimiter = a = r.delimiter || "", this._original = t(e).replace(/\s+/g, " ").split("&nbsp;").join("").split(a), this._text = (r.text || r.value || "").replace(/\s+/g, " ").split(a), this._hasClass = !1, "string" == typeof r.newClass && (this._newClass = r.newClass, this._hasClass = !0), "string" == typeof r.oldClass && (this._oldClass = r.oldClass, this._hasClass = !0), o = this._text.length - this._original.length, this._length = this._original.join(a).length, this._lengthDif = this._text.join(a).length - this._length, this._fillChar = r.fillChar || r.chars && -1 !== r.chars.indexOf(" ") ? "&nbsp;" : "", this._charSet = h = n[r.chars || "upperCase"] || new i(r.chars), this._speed = .016 / (r.speed || 1), this._prevScrambleTime = 0, this._setIndex = 0 | 20 * Math.random(), l = this._length + Math.max(this._lengthDif, 0), l > h.length && h.grow(l), this._chars = h.sets[this._setIndex], this._revealDelay = r.revealDelay || 0, this._tweenLength = r.tweenLength !== !1, this._tween = s, !0
            },
            set: function(t) {
                var e, i, r, s, n, a, o = this._text.length,
                    l = this._delimiter,
                    h = this._tween._time,
                    u = h - this._prevScrambleTime;
                this._revealDelay && (this._tween.vars.runBackwards && (h = this._tween._duration - h), t = 0 === h ? 0 : this._revealDelay > h ? 1e-6 : h === this._tween._duration ? 1 : this._tween._ease.getRatio((h - this._revealDelay) / (this._tween._duration - this._revealDelay))), 0 > t ? t = 0 : t > 1 && (t = 1), e = 0 | t * o + .5, i = this._text.slice(0, e).join(l), r = this._original.slice(e).join(l), t && ((u > this._speed || -this._speed > u) && (this._setIndex = (this._setIndex + (0 | 19 * Math.random())) % 20, this._chars = this._charSet.sets[this._setIndex], this._prevScrambleTime += u), r = this._chars.substr(i.length, 0 | this._length + (this._tweenLength ? 1 - (t = 1 - t) * t * t * t : 1) * this._lengthDif - i.length + .5)), this._hasClass ? (s = this._newClass && 0 !== e, n = this._oldClass && e !== o, a = (s ? "<span class='" + this._newClass + "'>" : "") + i + (s ? "</span>" : "") + (n ? "<span class='" + this._oldClass + "'>" : "") + l + r + (n ? "</span>" : "")) : a = i + l + r, this._target[this._prop] = "&nbsp;" === this._fillChar && -1 !== a.indexOf("  ") ? a.split("  ").join("&nbsp;&nbsp;") : a
            }
        }),
        o = a.prototype;
    o._newClass = o._oldClass = "";
    for (o in n) n[o.toLowerCase()] = n[o], n[o.toUpperCase()] = n[o]
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, s = t.split("."),
                r = e;
            for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
            return r
        },
        s = i("com.greensock.utils"),
        r = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        n = document,
        a = n.defaultView ? n.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        h = function(t, e, i, s) {
            var r;
            return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0
        },
        l = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        _ = function(t) {
            var e, i, s, r = [],
                n = t.length;
            for (e = 0; n > e; e++)
                if (i = t[e], l(i))
                    for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
                else r.push(i);
            return r
        },
        u = ")eefec303079ad17405c",
        c = /(?:<br>|<br\/>|<br \/>)/gi,
        p = n.all && !n.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
        m = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        },
        d = s.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
            this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        g = function(t, e, i) {
            var s = t.nodeType;
            if (1 === s || 9 === s || 11 === s)
                for (t = t.firstChild; t; t = t.nextSibling) g(t, e, i);
            else(3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        v = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        y = function(t, e, i, s, o) {
            c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
            var l, _, p, f, d, y, T, w, x, b, P, S, C, k, R = r(t),
                A = e.type || e.split || "chars,words,lines",
                O = -1 !== A.indexOf("lines") ? [] : null,
                D = -1 !== A.indexOf("words"),
                M = -1 !== A.indexOf("chars"),
                L = "absolute" === e.position || e.absolute === !0,
                z = L ? "&#173; " : " ",
                I = -999,
                E = a(t),
                N = h(t, "paddingLeft", E),
                F = h(t, "borderBottomWidth", E) + h(t, "borderTopWidth", E),
                X = h(t, "borderLeftWidth", E) + h(t, "borderRightWidth", E),
                U = h(t, "paddingTop", E) + h(t, "paddingBottom", E),
                B = h(t, "paddingLeft", E) + h(t, "paddingRight", E),
                j = h(t, "textAlign", E, !0),
                Y = t.clientHeight,
                q = t.clientWidth,
                V = "</div>",
                G = m(e.wordsClass),
                Q = m(e.charsClass),
                W = -1 !== (e.linesClass || "").indexOf("++"),
                Z = e.linesClass,
                H = -1 !== R.indexOf("<"),
                $ = !0,
                K = [],
                J = [],
                te = [];
            for (W && (Z = Z.split("++").join("")), H && (R = R.split("<").join("{{LT}}")), l = R.length, f = G(), d = 0; l > d; d++)
                if (T = R.charAt(d), ")" === T && R.substr(d, 20) === u) f += ($ ? V : "") + "<BR/>", $ = !1, d !== l - 20 && R.substr(d + 20, 20) !== u && (f += " " + G(), $ = !0), d += 19;
                else if (" " === T && " " !== R.charAt(d - 1) && d !== l - 1 && R.substr(d - 20, 20) !== u) {
                for (f += $ ? V : "", $ = !1;
                    " " === R.charAt(d + 1);) f += z, d++;
                (")" !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (f += z + G(), $ = !0)
            } else f += M && " " !== T ? Q() + T + "</div>" : T;
            for (t.innerHTML = f + ($ ? V : ""), H && g(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), l = y.length, w = [], d = 0; l > d; d++) w[d] = y[d];
            if (O || L)
                for (d = 0; l > d; d++) x = w[d], p = x.parentNode === t, (p || L || M && !D) && (b = x.offsetTop, O && p && b !== I && "BR" !== x.nodeName && (_ = [], O.push(_), I = b), L && (x._x = x.offsetLeft, x._y = b, x._w = x.offsetWidth, x._h = x.offsetHeight), O && (D !== p && M || (_.push(x), x._x -= N), p && d && (w[d - 1]._wordEnd = !0), "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && O.push([])));
            for (d = 0; l > d; d++) x = w[d], p = x.parentNode === t, "BR" !== x.nodeName ? (L && (S = x.style, D || p || (x._x += x.parentNode._x, x._y += x.parentNode._y), S.left = x._x + "px", S.top = x._y + "px", S.position = "absolute", S.display = "block", S.width = x._w + 1 + "px", S.height = x._h + "px"), D ? p && "" !== x.innerHTML ? J.push(x) : M && K.push(x) : p ? (t.removeChild(x), w.splice(d--, 1), l--) : !p && M && (b = !O && !L && x.nextSibling, t.appendChild(x), b || t.appendChild(n.createTextNode(" ")), K.push(x))) : O || L ? (t.removeChild(x), w.splice(d--, 1), l--) : D || t.appendChild(x);
            if (O) {
                for (L && (P = n.createElement("div"), t.appendChild(P), C = P.offsetWidth + "px", b = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (k = !L || !D && !M, d = 0; O.length > d; d++) {
                    for (_ = O[d], P = n.createElement("div"), P.style.cssText = "display:block;text-align:" + j + ";position:" + (L ? "absolute;" : "relative;"), Z && (P.className = Z + (W ? d + 1 : "")), te.push(P), l = _.length, y = 0; l > y; y++) "BR" !== _[y].nodeName && (x = _[y], P.appendChild(x), k && (x._wordEnd || D) && P.appendChild(n.createTextNode(" ")), L && (0 === y && (P.style.top = x._y + "px", P.style.left = N + b + "px"), x.style.top = "0px", b && (x.style.left = x._x - b + "px")));
                    0 === l && (P.innerHTML = "&nbsp;"), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), L && (P.style.width = C, P.style.height = x._h + "px"), t.appendChild(P)
                }
                t.style.cssText = S
            }
            L && (Y > t.clientHeight && (t.style.height = Y - U + "px", Y > t.clientHeight && (t.style.height = Y + F + "px")), q > t.clientWidth && (t.style.width = q - B + "px", q > t.clientWidth && (t.style.width = q + X + "px"))), v(i, K), v(s, J), v(o, te)
        },
        T = d.prototype;
    T.split = function(t) {
        this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, T.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, d.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (d.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, d.version = "0.3.3"
})(_gsScope),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText");
(function($) {
    $.widget("ui.swappable", $.ui.sortable, {

        _mouseStart: function(event, overrideHandle, noActivation) {

            var o = this.options,
                self = this;
            o.helper = "original",

                this.currentContainer = this;

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            //Cache the helper size
            this._cacheHelperProportions();

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Get the next scrolling parent
            this.scrollParent = this.helper.scrollParent();

            //The element's absolute position on the page minus margins
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            // Only after we got the offset, we can change the helper's position to absolute
            // TODO: Still need to figure out a way to make relative sorting possible
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");

            $.extend(this.offset, {
                click: { //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
            });

            //Generate the original position
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if 'cursorAt' is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Cache the former DOM position
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };

            //If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
            if (this.helper[0] != this.currentItem[0]) {
                this.currentItem.hide();
            }

            //Create the placeholder
            this._createPlaceholder();

            //Set a containment if given in the options
            if (o.containment)
                this._setContainment();

            if (o.cursor) { // cursor option
                if ($('body').css("cursor")) this._storedCursor = $('body').css("cursor");
                $('body').css("cursor", o.cursor);
            }

            if (o.opacity) { // opacity option
                if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
                this.helper.css("opacity", o.opacity);
            }

            if (o.zIndex) { // zIndex option
                if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
                this.helper.css("zIndex", o.zIndex);
            }

            //Prepare scrolling
            if (this.scrollParent[0] != document && this.scrollParent[0].tagName != 'HTML')
                this.overflowOffset = this.scrollParent.offset();

            //Call callbacks
            this._trigger("start", event, this._uiHash());

            //Recache the helper size
            if (!this._preserveHelperProportions)
                this._cacheHelperProportions();


            //Post 'activate' events to possible containers
            if (!noActivation) {
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("activate", event, self._uiHash(this));
                }
            }

            //Prepare possible droppables
            if ($.ui.ddmanager)
                $.ui.ddmanager.current = this;

            if ($.ui.ddmanager && !o.dropBehaviour)
                $.ui.ddmanager.prepareOffsets(this, event);

            this.dragging = true;

            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
            return true;

        },
        _mouseStop: function(event, noPropagation) {

            if (!event) return;

            var o = this.options;
            var target = event.target;

            var itemPassive = $(target).closest(o.items);
            var itemActive = this.currentItem.closest(o.items);
            var itemPlaceholder = $(itemActive).next();

            $(itemPassive).after(itemActive);
            $(itemPlaceholder).after(itemPassive);

            //If we are using droppables, inform the manager about the drop
            if ($.ui.ddmanager && !this.options.dropBehaviour)
                $.ui.ddmanager.drop(this, event);

            if (this.options.revert) {
                var self = this;
                var cur = self.placeholder.offset();

                self.reverting = true;

                $(this.helper).animate({
                    left: cur.left - this.offset.parent.left - self.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: cur.top - this.offset.parent.top - self.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function() {
                    self._clear(event);
                });
            } else {
                this._clear(event, noPropagation);
            }

            return false;

        },

        _clear: function(event, noPropagation) {

            this.reverting = false;
            // We delay all events that have to be triggered to after the point where the placeholder has been removed and
            // everything else normalized again
            var delayedTriggers = [],
                self = this;

            this._noFinalSort = null;

            if (this.helper[0] == this.currentItem[0]) {

                for (var i in this._storedCSS) {
                    if (this._storedCSS[i] == 'auto' || this._storedCSS[i] == 'static') this._storedCSS[i] = '';
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }

            if (this.fromOutside && !noPropagation) delayedTriggers.push(function(event) {
                this._trigger("receive", event, this._uiHash(this.fromOutside));
            });
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !noPropagation) delayedTriggers.push(function(event) {
                this._trigger("update", event, this._uiHash());
            }); //Trigger update callback if the DOM position has changed
            if (!$.contains(this.element[0], this.currentItem[0])) { //Node was moved out of the current element
                if (!noPropagation) delayedTriggers.push(function(event) {
                    this._trigger("remove", event, this._uiHash());
                });
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    if ($.contains(this.containers[i].element[0], this.currentItem[0]) && !noPropagation) {
                        delayedTriggers.push((function(c) {
                            return function(event) {
                                c._trigger("receive", event, this._uiHash(this));
                            };
                        }).call(this, this.containers[i]));
                        delayedTriggers.push((function(c) {
                            return function(event) {
                                c._trigger("update", event, this._uiHash(this));
                            };
                        }).call(this, this.containers[i]));
                    }
                };
            };

            //Post events to containers
            for (var i = this.containers.length - 1; i >= 0; i--) {
                if (!noPropagation) delayedTriggers.push((function(c) {
                    return function(event) {
                        c._trigger("deactivate", event, this._uiHash(this));
                    };
                }).call(this, this.containers[i]));
                if (this.containers[i].containerCache.over) {
                    delayedTriggers.push((function(c) {
                        return function(event) {
                            c._trigger("out", event, this._uiHash(this));
                        };
                    }).call(this, this.containers[i]));
                    this.containers[i].containerCache.over = 0;
                }
            }

            //Do what was originally in plugins
            if (this._storedCursor) $('body').css("cursor", this._storedCursor); //Reset cursor
            if (this._storedOpacity) this.helper.css("opacity", this._storedOpacity); //Reset opacity
            if (this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == 'auto' ? '' : this._storedZIndex); //Reset z-index

            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!noPropagation) {
                    this._trigger("beforeStop", event, this._uiHash());
                    for (var i = 0; i < delayedTriggers.length; i++) {
                        delayedTriggers[i].call(this, event);
                    }; //Trigger all delayed events
                    this._trigger("stop", event, this._uiHash());
                }
                return false;
            }

            if (!noPropagation) this._trigger("beforeStop", event, this._uiHash());

            //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

            if (this.helper[0] != this.currentItem[0]) this.helper.remove();
            this.helper = null;

            if (!noPropagation) {
                for (var i = 0; i < delayedTriggers.length; i++) {
                    delayedTriggers[i].call(this, event);
                }; //Trigger all delayed events
                this._trigger("stop", event, this._uiHash());
            }

            this.fromOutside = false;
            return true;

        }

    });

    $.extend($.ui.swappable, {
        version: "0.9.5"
    });

})(jQuery);


var srv = {
        glb: false,
        my: false,
        item: false,
        eq: false,
        q: false,
        difficulty: 1
    }
    //key release data
var lsKey = 40,
    dev = false,
    itemSprite = "i.imgur.com/gxfvcyu.png";
if (location.hostname === 'localhost') {
    dev = true;
}
var CLR = {
    martyr: false
}
var soundLocation = 'sound1/',
    musicLocation = 'music1/',
    timers = {},
    portalStatus = false,
    loreTimer = TDC(),
    loreMsg = [],
    timescale = {
        rate: 1
    },
    GTS = TM(),
	chatReply = '',
	chatVerticalDrag = false,
    addMonsterTimer = TDC(),
    paused = false,
    campStatus = false,
    floorB = 80,
    floorT = 648,
    activeBankTab = 0,
    minimumWeaponSpeed = 1000,
    inputFocus = false,
    viewingAct = 1,
    noSpaceClass = "Warrior",
    groundY = 650,
    mpType = 'MP',
    hoverID = '',
    hoverType = '',
    hoverClass = '',
    tlSpellbar = TM(),
    ambushChance = 0,
    hotkeyTimer = TDC(),
	alacrityTimeout = TDC(),
    combatButtonDragMode = false,
    weaponBonus = 0,
    maxBankSlots = 0,
    bowBonus = 0,
    asset = [],
    mobs = [],
    empowerTrueshot = 0,
    shieldBlockChance = 0,
    bloodlustStatus = false,
    miracleStatus = false,
    miracleTimer = 0,
    flayTarget = 0,
    assassinateStatus = false,
    resetTalentPrompt = false,
    warAmpDamage = false,
    audioChannel = 1,
    activeTalent = "talent1",
    frenzyRate = 500,
    highestElement = "poison",
    battleDamageTotal = 0,
    battleDamageTaken = 0,
    totalHits = 0,
    battlePhysicalTotal = 0,
    battlePoisonTotal = 0,
    battleMagicTotal = 0,
    battleLightningTotal = 0,
    battleColdTotal = 0,
    battleFireTotal = 0,
    battlePetDamage = 0,
    battleDSDamage = 0,
    battleHealTotal = 0,
    battleManaTotal = 0,
    ladderStatus = false,
    cityStatus = false,
    battleExperienceTotal = 0,
    chillStatus = false,
    silenceStatus = false,
    upgradeMode = false,
    trainSkillCost = 0,
    itemUpgradeMode = false,
    upgradePrompt = false,
    upgradePhysical = true,
    merchantMode = false,
    itemSwapCount = 0,
    buyMode = false,
	graveLordSlam = 0,
    selectedZone = "",
    selectedSubzone = "",
    charactersFound = 0,
    firstEmptyCharacterSlot = 0,
    talentNotifyStatus = false,
    mouseTTX = 0,
    mouseTTY = 0,
    goldTransferMode = "",
    imagesLoaded = 0,
    NPCname = "",
    cloud = "",
    indoorStatus = true,
    scriptsLoaded = false,
    statTab = "Main",
    questJournalBlock = 1,
    ttTimer = TDC(),
    classSpriteLoaded = false,
    delayAdd = [],
    titleScreenMusicPlaying = false;
for (var i = 0; i <= 4; i++) {
    delayAdd[i] = TDC();
}

function diff() {
    return g.difficulty - 1;
}
P.Q = [];

function initQ() {
    if (location.protocol === "http:") {
        for (var i = 0; i <= 2; i++) {
            P.Q[i] = {
                ButcherblockMountains: 0,
                CastleMistmoore: 0,
                Crushbone: 0,
                DagnorsCauldron: 0,
                EstateofUnrest: 0,
                GreaterFaydark: 0,
                KedgeKeep: 0,
                LesserFaydark: 0,
                SteamfontMountains: 0,
                Befallen: 0,
                Beholders: 0,
                Blackburrow: 0,
                CazicThule: 0,
                ClanRunnyeye: 0,
                EastCommonlands: 0,
                EastKarana: 0,
                EverfrostPeaks: 0,
                HighpassHold: 0,
                InnothuleSwamp: 0,
                KithicorForest: 0,
                LakeRathetear: 0,
                LavastormMountains: 0,
                LowerGuk: 0,
                MistyThicket: 0,
                NagafensLair: 0,
                Najena: 0,
                NektulosForest: 0,
                NorthKarana: 0,
                NorthRo: 0,
                OasisofMarr: 0,
                OceanofTears: 0,
                PermafrostKeep: 0,
                QeynosHills: 0,
                RatheMountains: 0,
                SouthKarana: 0,
                SouthRo: 0,
                SoluseksEye: 0,
                SplitpawLair: 0,
                TheFeerrott: 0,
                UpperGuk: 0,
                WestCommonlands: 0,
                WestKarana: 0,
                ErudsCrossing: 0,
                ToxxuliaForest: 0,
                PlaneofFear: 0,
                PlaneofHate: 0,
                repeatCm3: false,
                repeatCt3: false,
                repeatKk3: false,
                repeatNl3: false,
                repeatSl3: false,
                repeatSe3: false,
                repeatLg3: false,
                repeatKk4: false,
                repeatNl4: false,
                repeatPk4: false,
                repeatCB: false,
                repeatER: false,
                CM1: 0,
                CM2: 0,
                CM3: 0,
                CM4: 0,
                CM5: 0,
                CM6: 0,
                CB1: 0,
                CB2: 0,
                CB3: 0,
                CB4: 0,
                CB5: 0,
                ER1: 0,
                ER2: 0,
                ER3: 0,
                ER4: 0,
                ER5: 0,
                GF1: 0,
                KK1: 0,
                KK2: 0,
                KK3: 0,
                KK4: 0,
                KK5: 0,
                LF1: 0,
                LF2: 0,
                BF1: 0,
                BF2: 0,
                BF3: 0,
                BF4: 0,
                BB1: 0,
                BB2: 0,
                BB3: 0,
                BB4: 0,
                CT1: 0,
                CT2: 0,
                CT3: 0,
                CT4: 0,
                CT5: 0,
                LG1: 0,
                LG2: 0,
                LG3: 0,
                LG4: 0,
                LG5: 0,
                LG6: 0,
                NL1: 0,
                NL2: 0,
                NL3: 0,
                NL4: 0,
                NL5: 0,
                NL6: 0,
                NL7: 0,
                NL8: 0,
                NL9: 0,
                NL10: 0,
                NL11: 0,
                NL12: 0,
                NJ1: 0,
                NJ2: 0,
                NJ3: 0,
                NJ4: 0,
                NJ5: 0,
                NR1: 0,
                NR2: 0,
                PF1: 0,
                PF2: 0,
                PF3: 0,
                PF4: 0,
                PF5: 0,
                PF6: 0,
                PF7: 0,
                PF8: 0,
                PF9: 0,
                PF10: 0,
                PF11: 0,
                PF12: 0,
                PF13: 0,
                PF14: 0,
                PF15: 0,
                PF16: 0,
                PF17: 0,
                PF18: 0,
                PF19: 0,
                PF20: 0,
                PF21: 0,
                PF22: 0,
                PH1: 0,
                PH2: 0,
                PH3: 0,
                PH4: 0,
                PH5: 0,
                PH6: 0,
                PH7: 0,
                PH8: 0,
                PH9: 0,
                PH10: 0,
                PH11: 0,
                PH12: 0,
                PH13: 0,
                PK1: 0,
                PK2: 0,
                PK3: 0,
                PK4: 0,
                PK5: 0,
                PK6: 0,
                PK7: 0,
                PK8: 0,
                PK9: 0,
                UG1: 0,
                UG2: 0,
                UG3: 0,
                UG4: 0
            };
        }
    }
}
initQ();
// old quest status

function resetRepeatableQuests() {
    var df = diff();
    if (P.Q[df].repeatCm3) {
        P.Q[df].repeatCm3 = false;
        for (var i = 1; i <= 6; i++) {
            P.Q[df]['CM' + i] = 0;
        }
    }
    if (P.Q[df].repeatCt3) {
        P.Q[df].repeatCt3 = false;
        P.Q[df].CazicThule = 4;
        for (var i = 1; i <= 3; i++) {
            P.Q[df]['CT' + i] = 0;
        }
    }
    if (P.Q[df].repeatKk3) {
        P.Q[df].repeatKk3 = false;
        for (var i = 1; i <= 5; i++) {
            P.Q[df]['KK' + i] = 0;
        }
    }
    if (P.Q[df].repeatKk4) {
        P.Q[df].repeatKk4 = false;
        for (var i = 6; i <= 8; i++) {
            P.Q[df]['KK' + i] = 0;
        }
    }
    if (P.Q[df].repeatNl3) {
        P.Q[df].repeatNl3 = false;
        for (var i = 1; i <= 2; i++) {
            P.Q[df]['NL' + i] = 0;
        }
    }
    if (P.Q[df].repeatSl3) {
        P.Q[df].repeatSl3 = false;
        for (var i = 1; i <= 6; i++) {
            P.Q[df]['SL' + i] = 0;
        }
    }
    if (P.Q[df].repeatLg3) {
        P.Q[df].repeatLg3 = false;
        for (var i = 1; i <= 5; i++) {
            P.Q[df]['LG' + i] = 0;
        }
    }
    if (P.Q[df].repeatNl4 || P.Q[df].NL12 >= 2) {
        P.Q[df].repeatNl4 = false;
        for (var i = 7; i <= 12; i++) {
            P.Q[df]['NL' + i] = 0;
        }
    }
    if (P.Q[df].repeatPk4) {
        P.Q[df].repeatPk4 = false;
        for (var i = 1; i <= 9; i++) {
            P.Q[df]['PK' + i] = 0;
        }
    }
    if (P.Q[df]['PF22'] >= 1) {
        for (var i = 1; i <= 22; i++) {
            P.Q[df]['PF' + i] = 0;
        }
    }
    if (P.Q[df]['PH13'] >= 1) {
        for (var i = 1; i <= 13; i++) {
            P.Q[df]['PH' + i] = 0;
        }
    }
    // quest number too high - acts as repeat variable
    if (P.Q[df].NagafensLair > 5) {
        P.Q[df].NagafensLair = 5;
    }
    if (P.Q[df].PermafrostKeep > 5) {
        P.Q[df].PermafrostKeep = 5;
    }
    if (P.Q[df].KedgeKeep > 5) {
        P.Q[df].KedgeKeep = 5;
    }
    if (P.Q[df].PlaneofFear > 2) {
        P.Q[df].PlaneofFear = 2;
    }
    if (P.Q[df].PlaneofHate > 2) {
        P.Q[df].PlaneofHate = 2;
    }
    if (P.Q[df].Crushbone > 4 || P.Q[df].repeatCB || P.Q[df].CB5 >= 2) {
        P.Q[df].repeatCB = false;
        P.Q[df].Crushbone = 4;
        for (var i = 1; i <= 5; i++) {
            P.Q[df]['CB' + i] = 0;
        }
    }
    if (P.Q[df].EstateofUnrest > 4 || P.Q[df].repeatER) {
        P.Q[df].repeatER = false;
        P.Q[df].EstateofUnrest = 4;
        for (var i = 1; i <= 5; i++) {
            P.Q[df]['ER' + i] = 0;
        }
    }
    if (location.protocol === 'https:') {
        save.quests();
    }
}

function resetBosses() {
    var df = g.difficulty - 1;
    if (P.Q[df].CB4 < 2) {
        P.Q[df].CB4 = 0;
    }
    if (P.Q[df].CB5 < 2) {
        P.Q[df].CB5 = 0;
    }
    if (P.Q[df].Najena === 3) {
        if (P.Q[df].NJ4 < 2) {
            P.Q[df].NJ4 = 0;
        }
        if (P.Q[df].NJ5 < 2) {
            P.Q[df].NJ5 = 0;
        }
    }
    if (P.Q[df].CazicThule === 2) {
        if (P.Q[df].CT4 < 2) {
            P.Q[df].CT4 = 0;
        }
        if (P.Q[df].CT5 < 2) {
            P.Q[df].CT5 = 0;
        }
    }
    if (P.Q[df].CastleMistmoore >= 3) {
        if (P.Q[df].CM5 < 2) {
            P.Q[df].CM5 = 0;
        }
        if (P.Q[df].CM6 < 2) {
            P.Q[df].CM6 = 0;
        }
    }
    if (P.Q[df].LowerGuk < 2) {
        if (P.Q[df].LG4 < 2) {
            P.Q[df].LG4 = 0;
        }
        if (P.Q[df].LG5 < 2) {
            P.Q[df].LG5 = 0;
        }
    }
    if (P.Q[df].LowerGuk === 2) {
        if (P.Q[df].LG5 < 2) {
            P.Q[df].LG5 = 0;
        }
        if (P.Q[df].LG6 < 2) {
            P.Q[df].LG6 = 0;
        }
    }
    if (P.Q[df].LowerGuk >= 3) {
        if (P.Q[df].LG4 < 2) {
            P.Q[df].LG4 = 0;
        }
        if (P.Q[df].LG5 < 2) {
            P.Q[df].LG5 = 0;
        }
    }
    if (P.Q[df].NagafensLair === 1) {
        if (P.Q[df].NL5 < 2) {
            P.Q[df].NL5 = 0;
        }
        if (P.Q[df].NL6 < 2) {
            P.Q[df].NL6 = 0;
        }
    }
    if (P.Q[df].NagafensLair === 2) {
        if (P.Q[df].NL4 < 2) {
            P.Q[df].NL4 = 0;
        }
        if (P.Q[df].NL5 < 2) {
            P.Q[df].NL5 = 0;
        }
    }
    if (P.Q[df].NagafensLair >= 4) {
        if (P.Q[df].NL9 < 2) {
            P.Q[df].NL9 = 0;
        }
        if (P.Q[df].NL10 < 2) {
            P.Q[df].NL10 = 0;
        }
        if (P.Q[df].NL11 < 2) {
            P.Q[df].NL11 = 0;
        }
    }
    if (P.Q[df].PermafrostKeep === 3) {
        if (P.Q[df].PK4 < 2) {
            P.Q[df].PK4 = 0;
        }
        if (P.Q[df].PK5 < 2) {
            P.Q[df].PK5 = 0;
        }
    }
    if (P.Q[df].PermafrostKeep >= 4) {
        if (P.Q[df].PK7 < 2) {
            P.Q[df].PK7 = 0;
        }
        if (P.Q[df].PK8 < 2) {
            P.Q[df].PK8 = 0;
        }
    }
    if (P.Q[df].KedgeKeep >= 3) {
        if (P.Q[df].KK4 < 2) {
            P.Q[df].KK4 = 0;
        }
        if (P.Q[df].KK5 < 2) {
            P.Q[df].KK5 = 0;
        }
    }
}

// init mob object

function initMY() {
    my = {
        name: "",
        lastName: "",
        gender: "",
        job: "",
        race: "",
        level: null,
        exp: 0,
        hp: 0,
        maxHp: 0,
        mp: 0,
        maxMp: 0,
        str: 0,
        sta: 0,
        agi: 0,
        dex: 0,
        wis: 0,
        intel: 0,
        cha: 0,
        oneHandSlash: 0,
        offense: 0,
        defense: 0,
        dualWield: 0,
        doubleAttack: 0,
        dodge: 0,
        parry: 0,
        riposte: 0,
        alteration: 0,
        evocation: 0,
        conjuration: 0,
        abjuration: 0,
        channeling: 0,
        twoHandSlash: 0,
        oneHandBlunt: 0,
        piercing: 0,
        twoHandBlunt: 0,
        handToHand: 0,
        svpoison: 0,
        svmagic: 0,
        svlightning: 0,
        svcold: 0,
        svfire: 0,
        gold: 0,
        zone: "",
        playtime: 0,
        deaths: 0,
        mobsSlain: 0,
        championsSlain: 0,
        escapes: 0,
        totalGold: 0,
        uniquesFound: 0,
        setFound: 0,
        raresFound: 0,
        magicFound: 0,
        upgrades: 0,
        raresSlain: 0,
        randomEvents: 0,
        scriptedEvents: 0,
        quests: 0,
        comboPermafrost: 0,
        comboKedgeKeep: 0,
        comboSolB: 0,
        comboMistmoore: 0,
        comboLowerGuk: 0,
        comboCazicThule: 0,
        comboPlaneofFear: 0,
        comboPlaneofHate: 0,
        comboOverall: 0,
        ID: false,
        subzone: 1,
        zoneN: "",
        zoneH: "",
        subzoneN: 1,
        subzoneH: 1,
        title: "",
        difficulty: 1,
        talent1: 0,
        talent2: 0,
        talent3: 0,
        talent4: 0,
        talent5: 0,
        talent6: 0,
        talent7: 0,
        talent8: 0,
        talent9: 0,
        talent10: 0,
        talent11: 0,
        talent12: 0,
        hardcoreMode: false,
        patch: 0,
        story: "Intro"
    };
}
initMY();

function initLMY() {
    Lmy = {
        autoAttackOption: "On",
        normalFilter: "None",
        magicFilter: "None",
        rareFilter: "None",
        uniqueFilter: "None",
        setFilter: "None",
        C0: "",
        C1: "",
        C2: "",
        C3: "",
        C4: "",
        C5: "",
        C6: "",
        C7: "",
        C8: "",
        C9: "",
        C10: "",
        C11: "",
        C12: "",
        C13: "",
        C14: "",
        C15: '',
        C16: '',
        C17: '',
        C18: '',
        C19: '',
        C20: '',
        window3X: 0,
        window3Y: 603,
        chatIdX: 0,
        chatIdY: 0,
        window1X: 20,
        window1Y: 20,
        questJournalX: 20,
        questJournalY: 20,
        battleReportX: 490,
        battleReportY: 0,
        myhpbardivX: 5,
        myhpbardivY: 5,
		spellbardivX: 593,
		spellbardivY: 580,
        mobBarX: 394,
        mobBarY: 0,
        pethpbardivX: 5,
        pethpbardivY: 120
    };
}
initLMY();
var GLB = {
    musicStatus: 70,
    soundStatus: 100,
    tooltipMode: "Long",
    videoSetting: "High",
    hideMenu: "Off",
    chatMyHit: "Off",
    fastDestroy: "On",
    lastCharacter: 1,
    showCombatLog: "On",
    debugMode: "Off",
    gold: 0,
    ks: 0
};

if (isMobile === true) {
    GLB.tooltipMode = "Off";
    GLB.musicStatus = 0;
    GLB.soundStatus = 0;
    GLB.showCombatLog = "Off";
}

function initNG() {
    NG = {
        mymp: D.getElementById('mymp'),
        myhp: D.getElementById('myhp'),
        myexpbarvalue: D.getElementById('myexpbarvalue'),
        errorMsg: D.getElementById('errorMsg'),
        chatId: D.getElementById("chatId"),
        combatId: D.getElementById("combatId"),
        myexpbarId: D.getElementById("myexpbarId"),
        gameView: D.getElementById("gameView"),
        window2: D.getElementById("window2"),
        mob0: D.getElementById("mob0"),
        mob1: D.getElementById("mob1"),
        mob2: D.getElementById("mob2"),
        mob3: D.getElementById("mob3"),
        mob4: D.getElementById("mob4"),
        mob5: D.getElementById("mob5"),
        eWin: D.getElementById('eWin'),
        eWin2: D.getElementById('eWin2'),
        eWin3: D.getElementById('eWin3'),
        cWin: D.getElementById('cWin'),
        cWin2: D.getElementById('cWin2'),
        cWin3: D.getElementById('cWin3'),
        window2: D.getElementById('window2'),
        window1: D.getElementById("window1"),
        spellblind: D.getElementById('spellblind'),
        statContent: D.getElementById("statContent"),
        mobTraits: D.getElementById("mobTraits"),
        eWin2: D.getElementById("eWin2"),
        ttBank: D.getElementById("ttBank"),
        ttBankName: D.getElementById("ttBankName"),
		chat1: D.getElementById('chat1'),
		chat2: D.getElementById('chat2'),
        ttBankMsg: D.getElementById("ttBankMsg"),
        ttItem: D.getElementById("ttItem"),
        ttItemName: D.getElementById("ttItemName"),
        ttItemMsg: D.getElementById("ttItemMsg"),
        mobIcons0: D.getElementById("mobIcons0"),
        mobIcons1: D.getElementById("mobIcons1"),
        mobIcons2: D.getElementById("mobIcons2"),
        mobIcons3: D.getElementById("mobIcons3"),
        mobIcons4: D.getElementById("mobIcons4"),
        tooltip: D.getElementById("tooltip"),
        tooltipname: D.getElementById("tooltipname"),
        tooltipmsg: D.getElementById("tooltipmsg"),
        chatId: D.getElementById("chatId"),
        combatId: D.getElementById("combatId"),
        combatLog: D.getElementById("combatLog"),
        chatLog: D.getElementById("chatLog"),
        myexpbarId: D.getElementById("myexpbarId"),
        spellbardiv: D.getElementById('spellbardiv'),
        petImage: D.getElementById('petImage'),
        mobBar: D.getElementById("mobBar"),
        mobName: D.getElementById("mobName"),
        mobLevel: D.getElementById("mobLevel"),
        mobPlate: D.getElementById("mobPlate"),
        myhpbardiv: D.getElementById('myhpbardiv'),
        chaosflux: byIdCheck("chaosflux"),
        gaspingembrace: byIdCheck("gaspingembrace"),
        cajolingwhispers: byIdCheck("cajolingwhispers"),
        colorshift: byIdCheck("colorshift"),
        mesmerize: byIdCheck("mesmerize"),
        discordantbarrier: byIdCheck("discordantbarrier"),
        shiftlessdeeds: byIdCheck("shiftlessdeeds"),
        enchantweapon: byIdCheck("enchantweapon"),
        adorninggrace: byIdCheck("adorninggrace"),
        alacrity: byIdCheck("alacrity"),
        gravityflux: byIdCheck("gravityflux"),
        mysticrune: byIdCheck("mysticrune"),
        tashania: byIdCheck("tashania"),
        clarity: byIdCheck("clarity"),
        enthrall: byIdCheck("enthrall"),
        chargedbolts: byIdCheck("chargedbolts"),
        frostnova: byIdCheck("frostnova"),
        magicmissiles: byIdCheck("magicmissiles"),
        fireball: byIdCheck("fireball"),
        deepfreeze: byIdCheck("deepfreeze"),
        chainlightning: byIdCheck("chainlightning"),
        glacialspike: byIdCheck("glacialspike"),
        iceblock: byIdCheck("iceblock"),
        icecomet: byIdCheck("icecomet"),
        counterspell: byIdCheck("counterspell"),
        harnessEther: byIdCheck("harnessEther"),
        meteor: byIdCheck("meteor"),
        mirrorimages: byIdCheck("mirrorimages"),
        icebolt: byIdCheck("icebolt"),
        viziersshielding: byIdCheck("viziersshielding"),
        firestorm: byIdCheck("firestorm"),
        frozenorb: byIdCheck("frozenorb"),
        burnout: byIdCheck("burnout"),
        manashield: byIdCheck("manashield"),
        psionicstorm: byIdCheck("psionicstorm"),
        reclaimelements: byIdCheck("reclaimelements"),
        elementalfury: byIdCheck("elementalfury"),
        armageddon: byIdCheck("armageddon"),
        stasisfield: byIdCheck("stasisfield"),
        alteredstate: byIdCheck("alteredstate"),
        lavabolt: byIdCheck("lavabolt"),
        earthelemental: byIdCheck("earthelemental"),
        airelemental: byIdCheck("airelemental"),
        fireelemental: byIdCheck("fireelemental"),
        frostelemental: byIdCheck("frostelemental"),
        shieldoflava: byIdCheck("shieldoflava"),
        phantomplate: byIdCheck("phantomplate"),
        elementalarmor: byIdCheck("elementalarmor"),
        cascadingdarkness: byIdCheck("cascadingdarkness"),
        invokefear: byIdCheck("invokefear"),
        drainsoul: byIdCheck("drainsoul"),
        feigndeath: byIdCheck("feigndeath"),
        augmentdeath: byIdCheck("augmentdeath"),
        igniteblood: byIdCheck("igniteblood"),
        corpseexplosion: byIdCheck("corpseexplosion"),
        bondofdeath: byIdCheck("bondofdeath"),
        diamondskin: byIdCheck("diamondskin"),
        asystole: byIdCheck("asystole"),
        detonatesoul: byIdCheck("detonatesoul"),
        howlingterror: byIdCheck("howlingterror"),
        bonespirit: byIdCheck("bonespirit"),
        archshielding: byIdCheck("archshielding"),
        feigndeath: byIdCheck("feigndeath"),
        invokedeath: byIdCheck("invokedeath"),
        scourge: byIdCheck("scourge"),
        shmhealing: byIdCheck("shmhealing"),
        togorsinsects: byIdCheck("togorsinsects"),
        cannibalize: byIdCheck("cannibalize"),
        enstill: byIdCheck("enstill"),
        poisonnova: byIdCheck("poisonnova"),
        affliction: byIdCheck("affliction"),
        reclaimblood: byIdCheck("reclaimblood"),
        glacialimpact: byIdCheck("glacialimpact"),
        devouringplague: byIdCheck("devouringplague"),
        froststrike: byIdCheck("froststrike"),
        calloftheancients: byIdCheck("calloftheancients"),
        guardianspirit: byIdCheck("guardianspirit"),
        shmsow: byIdCheck("shmsow"),
        talismanofaltuna: byIdCheck("talismanofaltuna"),
        smite: byIdCheck("smite"),
        soundofforce: byIdCheck("soundofforce"),
        superiorhealing: byIdCheck("superiorhealing"),
        bindingearth: byIdCheck("bindingearth"),
        expelcorruption: byIdCheck("expelcorruption"),
        searingrevelation: byIdCheck("searingrevelation"),
        martyrsblessing: byIdCheck("martyrsblessing"),
        guardianangel: byIdCheck("guardianangel"),
        holywrath: byIdCheck("holywrath"),
        markofjudgement: byIdCheck("markofjudgement"),
        benediction: byIdCheck("benediction"),
        resolution: byIdCheck("resolution"),
        armoroffaith: byIdCheck("armoroffaith"),
        divinesanctuary: byIdCheck("divinesanctuary"),
        symbolofnaltron: byIdCheck("symbolofnaltron"),
        dronesofdoom: byIdCheck("dronesofdoom"),
        druhealing: byIdCheck("druhealing"),
        engulfingroots: byIdCheck("engulfingroots"),
        driftingdeath: byIdCheck("driftingdeath"),
        lightningblast: byIdCheck("lightningblast"),
        earthquake: byIdCheck("earthquake"),
        hurricane: byIdCheck("hurricane"),
        sylvangrasp: byIdCheck("sylvangrasp"),
        volcano: byIdCheck("volcano"),
        tornado: byIdCheck("tornado"),
        starfire: byIdCheck("starfire"),
        skinlikenature: byIdCheck("skinlikenature"),
        shieldofspikes: byIdCheck("shieldofspikes"),
        chloroplast: byIdCheck("chloroplast"),
        drusow: byIdCheck("drusow"),
        chordsofdissonance: byIdCheck("chordsofdissonance"),
        chantofbattle: byIdCheck("chantofbattle"),
        accelerando: byIdCheck("accelerando"),
        hymnofrestoration: byIdCheck("hymnofrestoration"),
        songofthesirens: byIdCheck("songofthesirens"),
        elementalrhythms: byIdCheck("elementalrhythms"),
        lucidlullaby: byIdCheck("lucidlullaby"),
        consonantchain: byIdCheck("consonantchain"),
        dissension: byIdCheck("dissension"),
        chorusofclarity: byIdCheck("chorusofclarity"),
        anthemdearms: byIdCheck("anthemdearms"),
        euphonichymn: byIdCheck("euphonichymn"),
        shieldofsongs: byIdCheck("shieldofsongs"),
        desperatedirge: byIdCheck("desperatedirge"),
        boastfulbellow: byIdCheck("boastfulbellow"),
        rangerkickId: byIdCheck("rangerkickId"),
        rapidshotId: byIdCheck("rapidshotId"),
        countershotId: byIdCheck("countershotId"),
        trueshotarrowId: byIdCheck("trueshotarrowId"),
        volleyshotId: byIdCheck("volleyshotId"),
        lighthealingId: byIdCheck("lighthealingId"),
        faerieflameId: byIdCheck("faerieflameId"),
        igniteId: byIdCheck("igniteId"),
        snareId: byIdCheck("snareId"),
        wardersrift: byIdCheck("wardersrift"),
        weaponshieldId: byIdCheck("weaponshieldId"),
        shieldofbramblesId: byIdCheck("shieldofbramblesId"),
        thistlecoatId: byIdCheck("thistlecoatId"),
        feetlikecatId: byIdCheck("feetlikecatId"),
        rangersowId: byIdCheck("rangersowId"),
        rangertrackId: byIdCheck("rangertrackId"),
        shdslamId: byIdCheck("shdslamId"),
        crescentcleaveId: byIdCheck("crescentcleaveId"),
        deathstrikeId: byIdCheck("deathstrikeId"),
        gaspingfrenzyId: byIdCheck("gaspingfrenzyId"),
        harmtouchId: byIdCheck("harmtouchId"),
        resistcoldId: byIdCheck("resistcoldId"),
        addmonsterId: byIdCheck("addmonsterId"),
        shdlifetapId: byIdCheck("shdlifetapId"),
        doomingdarknessId: byIdCheck("doomingdarknessId"),
        heatbloodId: byIdCheck("heatbloodId"),
        strengthendeadId: byIdCheck("strengthendeadId"),
        shdfearId: byIdCheck("shdfearId"),
        siphonstrengthId: byIdCheck("siphonstrengthId"),
        shdfeigndeathId: byIdCheck("shdfeigndeathId"),
        shadowvortexId: byIdCheck("shadowvortexId"),
        shdfeigndeathId: byIdCheck("shdfeigndeathId"),
        vampiricembraceId: byIdCheck("vampiricembraceId"),
        summondeadId: byIdCheck("summondeadId"),
        palslamId: byIdCheck("palslamId"),
        rebukeId: byIdCheck("rebukeId"),
        purgeId: byIdCheck("purgeId"),
        vengeanceId: byIdCheck("vengeanceId"),
        layhandsId: byIdCheck("layhandsId"),
        greaterhealingId: byIdCheck("greaterhealingId"),
        holymightId: byIdCheck("holymightId"),
        palrootId: byIdCheck("palrootId"),
        ardentjudgment: byIdCheck("ardentjudgment"),
        yaulpId: byIdCheck("yaulpId"),
        cleanseId: byIdCheck("cleanseId"),
        flashoflightId: byIdCheck("flashoflightId"),
        valorId: byIdCheck("valorId"),
        spiritarmorId: byIdCheck("spiritarmorId"),
        divineprovidenceId: byIdCheck("divineprovidenceId"),
        symbolofryltanId: byIdCheck("symbolofryltanId"),
        tigerstrikeId: byIdCheck("tigerstrikeId"),
        eaglestrikeId: byIdCheck("eaglestrikeId"),
        cheetahstrikeId: byIdCheck("cheetahstrikeId"),
        cobrastrikeId: byIdCheck("cobrastrikeId"),
        dragonstrikeId: byIdCheck("dragonstrikeId"),
        cranekickId: byIdCheck("cranekickId"),
        windmillkickId: byIdCheck("windmillkickId"),
        ancestralflurryId: byIdCheck("ancestralflurryId"),
        flyingkickId: byIdCheck("flyingkickId"),
        chakrablastId: byIdCheck("chakrablastId"),
        feigndeathId: byIdCheck("feigndeathId"),
        mendId: byIdCheck("mendId"),
        stonefistsId: byIdCheck("stonefistsId"),
        intimidationId: byIdCheck("intimidationId"),
        innerpeaceId: byIdCheck("innerpeaceId"),
        shadowstrikeId: byIdCheck("shadowstrikeId"),
        sonicstrikeId: byIdCheck("sonicstrikeId"),
        hyperstrikeId: byIdCheck("hyperstrikeId"),
        widowstrikeId: byIdCheck("widowstrikeId"),
        miragestrikeId: byIdCheck("miragestrikeId"),
        lacerateId: byIdCheck("lacerateId"),
        backstabId: byIdCheck("backstabId"),
        staggershotId: byIdCheck("staggershotId"),
        lobotomizeId: byIdCheck("lobotomizeId"),
        prowlinggashId: byIdCheck("prowlinggashId"),
        evadeId: byIdCheck("evadeId"),
        coldbloodId: byIdCheck("coldbloodId"),
        flashpowderId: byIdCheck("flashpowderId"),
        illusivemistId: byIdCheck("illusivemistId"),
        ancientwillId: byIdCheck("ancientwillId"),
        warriorkickId: byIdCheck("warriorkickId"),
        slamId: byIdCheck("slamId"),
        avengingstrikeId: byIdCheck("avengingstrikeId"),
        hemorrhageId: byIdCheck("hemorrhageId"),
        shockwaveId: byIdCheck("shockwaveId"),
        pummelId: byIdCheck("pummelId"),
        subjugateId: byIdCheck("subjugateId"),
        decisiveblowId: byIdCheck("decisiveblowId"),
        absorbspellId: byIdCheck("absorbspellId"),
        frenziedrampageId: byIdCheck("frenziedrampageId"),
        enrageId: byIdCheck("enrageId"),
        furiousscornId: byIdCheck("furiousscornId"),
        triageId: byIdCheck("triageId"),
        bulwarkId: byIdCheck("bulwarkId"),
        intrepidmightId: byIdCheck("intrepidmightId"),
        secondwindId: byIdCheck("secondwindId"),
        divineaegisId: byIdCheck("divineaegisId"),
        ancestralrampageId: byIdCheck("ancestralrampageId"),
        tunaresglowId: byIdCheck("tunaresglowId"),
        karanasinfusionId: byIdCheck("karanasinfusionId"),
        sanguinetormentId: byIdCheck("sanguinetormentId"),
        granitevisageId: byIdCheck("granitevisageId"),
        shortcircuitId: byIdCheck("shortcircuitId"),
        runId: byIdCheck("runId"),
        toggleattackId: byIdCheck("toggleattackId"),
        addmonsterId: byIdCheck("addmonsterId")
    }
    $NG = {
        window3: $("#window3"),
        gameView: $("#gameView"),
        toggleattackId: $('#toggleattackId'),
        chaosflux: $("#chaosflux"),
        gaspingembrace: $("#gaspingembrace"),
        cajolingwhispers: $("#cajolingwhispers"),
        colorshift: $("#colorshift"),
        mesmerize: $("#mesmerize"),
        discordantbarrier: $("#discordantbarrier"),
        shiftlessdeeds: $("#shiftlessdeeds"),
        enchantweapon: $("#enchantweapon"),
        adorninggrace: $("#adorninggrace"),
        alacrity: $("#alacrity"),
        gravityflux: $("#gravityflux"),
        mysticrune: $("#mysticrune"),
        tashania: $("#tashania"),
        clarity: $("#clarity"),
        enthrall: $("#enthrall"),
        chargedbolts: $("#chargedbolts"),
        frostnova: $("#frostnova"),
        magicmissiles: $("#magicmissiles"),
        fireball: $("#fireball"),
        deepfreeze: $("#deepfreeze"),
        chainlightning: $("#chainlightning"),
        glacialspike: $("#glacialspike"),
        iceblock: $("#iceblock"),
        icecomet: $("#icecomet"),
        counterspell: $("#counterspell"),
        harnessEther: $("#harnessEther"),
        meteor: $("#meteor"),
        mirrorimages: $("#mirrorimages"),
        icebolt: $("#icebolt"),
        viziersshielding: $("#viziersshielding"),
        firestorm: $("#firestorm"),
        frozenorb: $("#frozenorb"),
        burnout: $("#burnout"),
        manashield: $("#manashield"),
        psionicstorm: $("#psionicstorm"),
        reclaimelements: $("#reclaimelements"),
        elementalfury: $("#elementalfury"),
        armageddon: $("#armageddon"),
        stasisfield: $("#stasisfield"),
        alteredstate: $("#alteredstate"),
        lavabolt: $("#lavabolt"),
        earthelemental: $("#earthelemental"),
        airelemental: $("#airelemental"),
        fireelemental: $("#fireelemental"),
        frostelemental: $("#frostelemental"),
        shieldoflava: $("#shieldoflava"),
        phantomplate: $("#phantomplate"),
        elementalarmor: $("#elementalarmor"),
        cascadingdarkness: $("#cascadingdarkness"),
        invokefear: $("#invokefear"),
        drainsoul: $("#drainsoul"),
        feigndeath: $("#feigndeath"),
        augmentdeath: $("#augmentdeath"),
        igniteblood: $("#igniteblood"),
        corpseexplosion: $("#corpseexplosion"),
        bondofdeath: $("#bondofdeath"),
        diamondskin: $("#diamondskin"),
        asystole: $("#asystole"),
        detonatesoul: $("#detonatesoul"),
        howlingterror: $("#howlingterror"),
        bonespirit: $("#bonespirit"),
        archshielding: $("#archshielding"),
        feigndeath: $("#feigndeath"),
        invokedeath: $("#invokedeath"),
        scourge: $("#scourge"),
        shmhealing: $("#shmhealing"),
        togorsinsects: $("#togorsinsects"),
        cannibalize: $("#cannibalize"),
        enstill: $("#enstill"),
        poisonnova: $("#poisonnova"),
        affliction: $("#affliction"),
        reclaimblood: $("#reclaimblood"),
        glacialimpact: $("#glacialimpact"),
        devouringplague: $("#devouringplague"),
        froststrike: $("#froststrike"),
        calloftheancients: $("#calloftheancients"),
        guardianspirit: $("#guardianspirit"),
        shmsow: $("#shmsow"),
        talismanofaltuna: $("#talismanofaltuna"),
        smite: $("#smite"),
        soundofforce: $("#soundofforce"),
        superiorhealing: $("#superiorhealing"),
        bindingearth: $("#bindingearth"),
        expelcorruption: $("#expelcorruption"),
        searingrevelation: $("#searingrevelation"),
        martyrsblessing: $("#martyrsblessing"),
        guardianangel: $("#guardianangel"),
        holywrath: $("#holywrath"),
        markofjudgement: $("#markofjudgement"),
        benediction: $("#benediction"),
        resolution: $("#resolution"),
        armoroffaith: $("#armoroffaith"),
        divinesanctuary: $("#divinesanctuary"),
        symbolofnaltron: $("#symbolofnaltron"),
        dronesofdoom: $("#dronesofdoom"),
        druhealing: $("#druhealing"),
        engulfingroots: $("#engulfingroots"),
        driftingdeath: $("#driftingdeath"),
        lightningblast: $("#lightningblast"),
        earthquake: $("#earthquake"),
        hurricane: $("#hurricane"),
        sylvangrasp: $("#sylvangrasp"),
        volcano: $("#volcano"),
        tornado: $("#tornado"),
        starfire: $("#starfire"),
        skinlikenature: $("#skinlikenature"),
        shieldofspikes: $("#shieldofspikes"),
        chloroplast: $("#chloroplast"),
        drusow: $("#drusow"),
        chordsofdissonance: $("#chordsofdissonance"),
        chantofbattle: $("#chantofbattle"),
        accelerando: $("#accelerando"),
        hymnofrestoration: $("#hymnofrestoration"),
        songofthesirens: $("#songofthesirens"),
        elementalrhythms: $("#elementalrhythms"),
        lucidlullaby: $("#lucidlullaby"),
        consonantchain: $("#consonantchain"),
        dissension: $("#dissension"),
        chorusofclarity: $("#chorusofclarity"),
        anthemdearms: $("#anthemdearms"),
        euphonichymn: $("#euphonichymn"),
        shieldofsongs: $("#shieldofsongs"),
        desperatedirge: $("#desperatedirge"),
        boastfulbellow: $("#boastfulbellow"),
        rangerkickId: $("#rangerkickId"),
        rapidshotId: $("#rapidshotId"),
        countershotId: $("#countershotId"),
        trueshotarrowId: $("#trueshotarrowId"),
        volleyshotId: $("#volleyshotId"),
        lighthealingId: $("#lighthealingId"),
        faerieflameId: $("#faerieflameId"),
        igniteId: $("#igniteId"),
        snareId: $("#snareId"),
        wardersrift: $("#wardersrift"),
        weaponshieldId: $("#weaponshieldId"),
        shieldofbramblesId: $("#shieldofbramblesId"),
        thistlecoatId: $("#thistlecoatId"),
        feetlikecatId: $("#feetlikecatId"),
        rangersowId: $("#rangersowId"),
        rangertrackId: $("#rangertrackId"),
        shdslamId: $("#shdslamId"),
        crescentcleaveId: $("#crescentcleaveId"),
        deathstrikeId: $("#deathstrikeId"),
        gaspingfrenzyId: $("#gaspingfrenzyId"),
        harmtouchId: $("#harmtouchId"),
        resistcoldId: $("#resistcoldId"),
        addmonsterId: $("#addmonsterId"),
        shdlifetapId: $("#shdlifetapId"),
        doomingdarknessId: $("#doomingdarknessId"),
        heatbloodId: $("#heatbloodId"),
        strengthendeadId: $("#strengthendeadId"),
        shdfearId: $("#shdfearId"),
        siphonstrengthId: $("#siphonstrengthId"),
        shdfeigndeathId: $("#shdfeigndeathId"),
        shadowvortexId: $("#shadowvortexId"),
        shdfeigndeathId: $("#shdfeigndeathId"),
        vampiricembraceId: $("#vampiricembraceId"),
        summondeadId: $("#summondeadId"),
        palslamId: $("#palslamId"),
        rebukeId: $("#rebukeId"),
        purgeId: $("#purgeId"),
        vengeanceId: $("#vengeanceId"),
        layhandsId: $("#layhandsId"),
        greaterhealingId: $("#greaterhealingId"),
        holymightId: $("#holymightId"),
        palrootId: $("#palrootId"),
        ardentjudgment: $("#ardentjudgment"),
        yaulpId: $("#yaulpId"),
        cleanseId: $("#cleanseId"),
        flashoflightId: $("#flashoflightId"),
        valorId: $("#valorId"),
        spiritarmorId: $("#spiritarmorId"),
        divineprovidenceId: $("#divineprovidenceId"),
        symbolofryltanId: $("#symbolofryltanId"),
        tigerstrikeId: $("#tigerstrikeId"),
        eaglestrikeId: $("#eaglestrikeId"),
        cheetahstrikeId: $("#cheetahstrikeId"),
        cobrastrikeId: $("#cobrastrikeId"),
        dragonstrikeId: $("#dragonstrikeId"),
        cranekickId: $("#cranekickId"),
        windmillkickId: $("#windmillkickId"),
        ancestralflurryId: $("#ancestralflurryId"),
        flyingkickId: $("#flyingkickId"),
        chakrablastId: $("#chakrablastId"),
        feigndeathId: $("#feigndeathId"),
        mendId: $("#mendId"),
        stonefistsId: $("#stonefistsId"),
        intimidationId: $("#intimidationId"),
        innerpeaceId: $("#innerpeaceId"),
        shadowstrikeId: $("#shadowstrikeId"),
        sonicstrikeId: $("#sonicstrikeId"),
        hyperstrikeId: $("#hyperstrikeId"),
        widowstrikeId: $("#widowstrikeId"),
        miragestrikeId: $("#miragestrikeId"),
        lacerateId: $("#lacerateId"),
        backstabId: $("#backstabId"),
        staggershotId: $("#staggershotId"),
        lobotomizeId: $("#lobotomizeId"),
        prowlinggashId: $("#prowlinggashId"),
        evadeId: $("#evadeId"),
        coldbloodId: $("#coldbloodId"),
        flashpowderId: $("#flashpowderId"),
        illusivemistId: $("#illusivemistId"),
        ancientwillId: $("#ancientwillId"),
        warriorkickId: $("#warriorkickId"),
        slamId: $("#slamId"),
        avengingstrikeId: $("#avengingstrikeId"),
        hemorrhageId: $("#hemorrhageId"),
        shockwaveId: $("#shockwaveId"),
        pummelId: $("#pummelId"),
        subjugateId: $("#subjugateId"),
        decisiveblowId: $("#decisiveblowId"),
        absorbspellId: $("#absorbspellId"),
        frenziedrampageId: $("#frenziedrampageId"),
        enrageId: $("#enrageId"),
        furiousscornId: $("#furiousscornId"),
        triageId: $("#triageId"),
        bulwarkId: $("#bulwarkId"),
        intrepidmightId: $("#intrepidmightId"),
        zoneSelectButton: $(".zoneSelectButton"),
        cityBG: $(".cityBG"),
        city: $(".city"),
        trainingButton: $(".trainingButton"),
        enterWorld2: $("#worldMap, #options, #myhpbarbg, #mympbarbg, #mympbarId"),
        enterWorld1: $("#mympbarbg, #mympbarId, #myhpbardiv, #myhpbarbg, #pethbarId, #window2dawn, #window2zoneday, #window2scrollsky"),
        allChButtons: $("#enterworld, #characterslot1, #characterslot2, #characterslot3, #characterslot4, #characterslot5, #characterslot6, #characterslot7, #characterslot8, #characterslot9, #characterslot10, #characterslot11, #characterslot12, #characterslot13, #characterslot14, #characterslot15, #characterslot16"),
        NCbuttons: $(".NCbuttons"),
        spellblind: $("#spellblind"),
        characterslot1: $("#characterslot1"),
        characterslot2: $("#characterslot2"),
        characterslot3: $("#characterslot3"),
        characterslot4: $("#characterslot4"),
        characterslot5: $("#characterslot5"),
        characterslot6: $("#characterslot6"),
        characterslot7: $("#characterslot7"),
        characterslot8: $("#characterslot8"),
        characterslot9: $("#characterslot9"),
        characterslot10: $("#characterslot10"),
        characterslot11: $("#characterslot11"),
        characterslot12: $("#characterslot12"),
        characterslot13: $("#characterslot13"),
        characterslot14: $("#characterslot14"),
        characterslot15: $("#characterslot15"),
        characterslot16: $("#characterslot16"),
        myButtons: $(".buttons, .NCbuttons"),
        window2: $("#window2"),
        ttItem: $("#ttItem"),
        mobName: $("#mobName"),
        equipmentBG: $(".equipmentBG"),
        bankBG: $(".bankBG"),
        inventoryBG: $(".inventoryBG"),
        inventory: $(".inventory"),
        bank: $(".bank"),
        spacers: $(".spacers"),
        buttonreset: $("#window3a .NCbuttons, #window3a .nonglobal"),
        racelist: $(".racelist"),
        joblist: $(".joblist"),
        eWin: $("#eWin"),
        eWin2: $("#eWin2"),
        eWin3: $("#eWin3"),
        chatId: $("#chatId"),
        combatId: $("#combatId"),
        mob5: $("#mob5"),
        myexpbarId: $("#myexpbarId"),
        window2: $("#window2"),
        petImage: $("#petImage"),
        mobBar: $("#mobBar"),
        parryblock: $("#parryblock"),
        mptypeId: $("#mptypeId"),
        strId: $("#strId"),
        staId: $("#staId"),
        agiId: $("#agiId"),
        dexId: $("#dexId"),
        wisId: $("#wisId"),
        intId: $("#intId"),
        chaId: $("#chaId"),
        svpoisonId: $("#svpoisonId"),
        svmagicId: $("#svmagicId"),
        svlightningId: $("#svlightningId"),
        svcoldId: $("#svcoldId"),
        svfireId: $("#svfireId")
    }
}
initNG();
if(!dev){
	window.onerror = function(msg, url, line){
		if(GLB.debugMode==="On"){
			Chat("ERROR: "+msg, 2);
			Chat("URL: "+url, 2);
			Chat("LINE: "+line, 2);
		}
		return true;
	}
}
function Chat(entry, fg) {
    if (GLB.showCombatLog === "Off") {
        return;
    }
    while (NG.combatLog.childNodes.length > 100) {
        NG.combatLog.removeChild(NG.combatLog.firstChild);
    }
    var color = "";
    if (fg !== undefined) {
		if (fg === 0) {
            color = "white";
        } else if (fg === 1) {
            color = "red";
        } else if (fg === 2) {
            color = "yellow";
        } else if (fg === 3) {
            color = "blue1";
        } else if (fg === 4) {
            color = "blue2";
        } else if (fg === 5) {
            color = "darkgreen";
        } else if (fg === 6) {
            color = "green3";
        }  else if (fg === 7) {
            color = "purple";
        } else if (fg === 8){
			color = "yellow2";
		} else {
            color = "grey";
        }
    }
    var z = D.createElement('div');
    if (color!==undefined) {
        z.className = color;
    }
    z.innerHTML = entry;
    NG.combatLog.appendChild(z);
	if(chatVerticalDrag===false){
		NG.combatLog.scrollTop = NG.combatLog.scrollHeight;
	}
}
function Chat2(entry, fg) {
    if (GLB.showCombatLog === "Off") {
        return;
    }
    while (NG.chatLog.childNodes.length > 10) {
        NG.chatLog.removeChild(NG.chatLog.firstChild);
    }
    var color = "";
    if (fg !== undefined) {
		if (fg === 0) {
            color = "white";
        } else if (fg === 1) {
            color = "red";
        } else if (fg === 2) {
            color = "yellow";
        } else if (fg === 3) {
            color = "blue1";
        } else if (fg === 4) {
            color = "blue2";
        } else if (fg === 5) {
            color = "darkgreen";
        } else if (fg === 6) {
            color = "green3";
        }  else if (fg === 7) {
            color = "purple";
        } else if (fg === 8){
			color = "yellow2";
		} else {
            color = "grey";
        }
    }
    var z = D.createElement('div');
    if (color!==undefined) {
        z.className = color;
    }
    z.innerHTML = entry;
    NG.chatLog.appendChild(z);
	if(chatVerticalDrag===false){
		NG.chatLog.scrollTop = NG.chatLog.scrollHeight;
	}
}

g.key = [
    'hp',
    'mp',
    'str',
    'sta',
    'agi',
    'dex',
    'intel',
    'wis',
    'cha',
    'allStats',
    'hpRegen',
    'mpRegen',
    'armor',
    'enhancedArmor',
    'attack',
    'oneHandSlash',
    'twoHandSlash',
    'oneHandBlunt',
    'twoHandBlunt',
    'piercing',
    'handtohand',
    'offense',
    'dualWield',
    'doubleAttack',
    'defense',
    'dodge',
    'parry',
    'riposte',
    'alteration',
    'evocation',
    'conjuration',
    'abjuration',
    'channeling',
    'allSkills',
    'critChance',
    'critDamage',
    'phyMit',
    'magMit',
    'resistPoison',
    'resistMagic',
    'resistLightning',
    'resistCold',
    'resistFire',
    'allResist',
    'goldFind',
    'expFind',
    'thorns',
    'absorbPoison',
    'absorbMagic',
    'absorbLightning',
    'absorbCold',
    'absorbFire',
    'name',
    'rarity',
    'itemSlot',
    'type',
    'damage',
    'delay',
    'physicalDamage',
    'poisonDamage',
    'magicDamage',
    'lightningDamage',
    'coldDamage',
    'fireDamage',
    'enhancePhysical',
    'enhancePoison',
    'enhanceMagic',
    'enhanceLightning',
    'enhanceCold',
    'enhanceFire',
    'enhanceAll',
    'hpKill',
    'mpKill',
    'lightRadius',
    'runSpeed',
    'xPos',
    'yPos',
    'haste',
    'globalHaste',
    'castingHaste',
    'proc',
    'req',
    'flavorText',
    'upgrade',
    'weight',
    'enhancedDamage',
    'ias',
    'stun',
    'fear',
    'cold',
    'silence',
    'leech',
    'wraith',
    'quality'
];
g.val = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    '',
    0,
    '',
    '',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    '',
    0,
    '',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]
P.eq = [];

function initEq() {
    for (var i = 0; i <= 14; i++) {
        P.eq[i] = {};
        for (var x = 0, len = g.key.length; x < len; x++) {
            P.eq[i][g.key[x]] = g.val[x];
        }
    }
}
initEq();
P.item = [];

function initItem() {
    for (var i = 0; i <= 43; i++) {
        P.item[i] = {};
        for (var x = 0, len = g.key.length; x < len; x++) {
            P.item[i][g.key[x]] = g.val[x];
        }
    }
}
initItem();
P.bank = [];

function initBank() {
    for (var i = 0; i < 1080; i++) {
        P.bank[i] = {};
        for (var x = 0, len = g.key.length; x < len; x++) {
            P.bank[i][g.key[x]] = g.val[x];
        }
    }
}
initBank();
//initialize
var dragged = [];

function initDragged() {
    for (var i = 0; i < 2; i++) {
        dragged[i] = {};
        for (var x = 0, len = g.key.length; x < len; x++) {
            dragged[i][g.key[x]] = g.val[x];
        }
    }
}
initDragged();
var dragStatus = false,
    classDrag = "",
    classDrop = "";

// player variables
function initializeEQ(foo) {
    if (location.protocol === "http:") {
        if (foo !== 1) {
            initMY();
        }
        for (var i = 0; i <= 14; i++) {
            P.eq[i] = {};
            for (var x = 0, len = g.key.length; x < len; x++) {
                P.eq[i][g.key[x]] = g.val[x];
            }
        };
        if (foo !== 1) {
            setEquipValues();
        }
    }
}

function initializeInventory() {
    if (location.protocol === "http:") {
        for (var i = 0; i <= 43; i++) {
            P.item[i] = {};
            for (var x = 0, len = g.key.length; x < len; x++) {
                P.item[i][g.key[x]] = g.val[x];
            }
        };
    }
}

function initializeBank() {
    if (location.protocol === "http:") {
        for (var i = 0; i <= 125; i++) {
            P.bank[i] = {};
            for (var x = 0, len = g.key.length; x < len; x++) {
                P.bank[i][g.key[x]] = g.val[x];
            }
        };
    }
}
var MOB = [],
    MOBNAME = [],
    MOBSHADOW = [],
    tintTimer = [],
    blurTimer = [],
    canvas = [],
    stage = [],
    bmp = [],
    bmpTint = [],
    pulsate = [],
    myHpBar,
    myHpText,
    myMpBar,
    myMpText,
    myPetBar,
    myPetText,
    mySpellBar,
    myhpbarId,
    mympbarId;

function initMOB() {
    for (var i = 0; i <= 5; i++) {
        MOB[i] = D.getElementById('mob' + i);
    }
    for (var i = 0; i <= 5; i++) {
        MOBNAME[i] = D.getElementById('mobName' + i);
    }
    for (var i = 0; i <= 5; i++) {
        MOBSHADOW[i] = D.getElementById('mobShadow' + i);
    }
    canvas = [];
    stage = [];
    bmp = [];
    bmpTint = [];
    pulsate = [];
    for (var i = 0; i <= 4; i++) {
        canvas[i] = D.getElementById('mobPic' + i);
        stage[i] = new C.Stage(canvas[i]);
        stage[i].snapToPixelEnabled = true;
        TweenLite.ticker.addEventListener("tick", stage[i].update, stage[i]);
        bmp[i] = new C.Bitmap("/images1/blank.png");
        tintTimer[i] = {};
        tintTimer[i].poison = TDC();
        tintTimer[i].magic = TDC();
        tintTimer[i].lightning = TDC();
        tintTimer[i].fire = TDC();
        tintTimer[i].cold = TDC();
        blurTimer[i] = TDC();
        bmpTint[i] = {};
        bmpTint[i].poison = new C.Bitmap("/images1/blank.png");
        bmpTint[i].magic = new C.Bitmap("/images1/blank.png");
        bmpTint[i].lightning = new C.Bitmap("/images1/blank.png");
        bmpTint[i].fire = new C.Bitmap("/images1/blank.png");
        bmpTint[i].cold = new C.Bitmap("/images1/blank.png");
        pulsate[i] = TDC();
    }
    // cWin canvas
    var a = ['cWin', 'cWin2', 'cWin3', 'cWin4'];
    for (var i = 5; i <= 8; i++) {
        canvas[i] = D.getElementById(a.shift());
        stage[i] = new C.Stage(canvas[i]);
        TweenLite.ticker.addEventListener("tick", stage[i].update, stage[i]);
    }
    spellCurtainStage = new C.Stage(D.getElementById('spellcurtain'));
    TweenLite.ticker.addEventListener("tick", spellCurtainStage.update, spellCurtainStage);
    // monster stage
    monsterhpbarId = new C.Stage(D.getElementById('monsterhpbarId'));
    monsterhpbarId.snapToPixelEnabled = true;
    TweenLite.ticker.addEventListener("tick", monsterhpbarId.update, monsterhpbarId);
    // monster bar 2
    var b = new C.Graphics();
    b.beginFill("#ee0").drawRect(0, 0, 300, 24);
    monsterHpBar2 = new C.Shape(b);
    monsterHpBar2.alpha = .5;
    monsterhpbarId.addChild(monsterHpBar2);
    // monster bar 1
    var b = new C.Graphics();
    b.lf(["#800", "#c00", "#c00", "#800"], [0, .3, .7, 1], 0, 0, 0, 24)
        .drawRect(0, 0, 300, 24);
    monsterHpBar1 = new C.Shape(b);
    monsterhpbarId.addChild(monsterHpBar1);
    // monster text
    monsterText = new C.Text("", "13px Arial", "#fff");
    monsterText.set({
        x: 150,
        y: 13,
        textAlign: 'center',
        textBaseline: 'middle'
    });
    monsterText.shadow = new C.Shadow("#000", 1, 1, 0);
    monsterhpbarId.addChild(monsterText);
    // my hp bar 
    myhpbarId = new C.Stage(D.getElementById('myhpbarId'));
    monsterhpbarId.snapToPixelEnabled = true;
    TweenLite.ticker.addEventListener("tick", myhpbarId.update, myhpbarId);
    var b = new C.Graphics();
    b.lf(["#800", "#c00", "#c00", "#800"], [0, .3, .7, 1], 0, 0, 0, 14)
        .drawRect(0, 0, 192, 14);
    myHpBar = new C.Shape(b);
    myhpbarId.addChild(myHpBar);
    // my hp text
    myHpText = new C.Text("", "12px Arial", "#fff");
    myHpText.set({
        x: 96,
        y: 8,
        textAlign: 'center',
        textBaseline: 'middle'
    });
    myHpText.shadow = new C.Shadow("#000", 1, 1, 0);
    myhpbarId.addChild(myHpText);
    // pet bar
    pethpbarId = new C.Stage(D.getElementById('pethpbarId'));
    monsterhpbarId.snapToPixelEnabled = true;
    TweenLite.ticker.addEventListener("tick", pethpbarId.update, pethpbarId);
    var b = new C.Graphics();
    b.lf(["#800", "#c00", "#c00", "#800"], [0, .3, .7, 1], 0, 0, 0, 14)
        .drawRect(0, 0, 192, 14);
    myPetBar = new C.Shape(b);
    pethpbarId.addChild(myPetBar);
    // pet text outline
    myPetText = new C.Text("", "12px Arial", "#fff");
    myPetText.set({
        x: 96,
        y: 8,
        textAlign: 'center',
        textBaseline: 'middle'
    });
    myPetText.shadow = new C.Shadow("#000", 1, 1, 0);
    pethpbarId.addChild(myPetText);
    // casting bar
    mySpellBar = new C.Stage(D.getElementById('spellbarId'));
    monsterhpbarId.snapToPixelEnabled = true;
    TweenLite.ticker.addEventListener("tick", mySpellBar.update, mySpellBar);
    var b = new C.Graphics();
    b.lf(["#808", "#c0c", "#c0c", "#808"], [0, .3, .7, 1], 0, 0, 0, 14)
        .drawRect(0, 0, 125, 14);
    var s = new C.Shape(b);
    mySpellBar.addChild(s);
}
initMOB();



function resetBattleReport() {
    battleStart = new Date();
    chainCounter = 0;
    comboRating = 0;
    battleDamageTotal = 0;
    battleDamageTaken = 0;
    totalHits = 0;
    battlePhysicalTotal = 0;
    battlePoisonTotal = 0;
    battleMagicTotal = 0;
    battleLightningTotal = 0;
    battleColdTotal = 0;
    battleFireTotal = 0;
    battlePetDamage = 0;
    battleDSDamage = 0;
    battleHealTotal = 0;
    battleManaTotal = 0;
}
resetBattleReport();
g.leechRatio = .25;
g.wraithRatio = .15;


function hide(e) {
    if (typeof e === "string") {
        D.getElementById(e).style.visibility = 'hidden';
    } else {
        var len = e.length;
        for (var i = 0; i < len; i++) {
            D.getElementById(e[i]).style.visibility = 'hidden';
        }
    }
}

function show(e) {
    if (typeof e === "string") {
        D.getElementById(e).style.visibility = 'visible';
    } else {
        var len = e.length;
        for (var i = 0; i < len; i++) {
            D.getElementById(e[i]).style.visibility = 'visible';
        }
    }
}

function none(e) {
    if (typeof e === "string") {
        D.getElementById(e).style.display = 'none';
    } else {
        var len = e.length;
        for (var i = 0; i < len; i++) {
            D.getElementById(e[i]).style.display = 'none';
        }
    }
}

function block(e) {
    if (typeof e === "string") {
        D.getElementById(e).style.display = 'block';
    } else {
        var len = e.length;
        for (var i = 0; i < len; i++) {
            D.getElementById(e[i]).style.display = 'block';
        }
    }
}

function byIdCheck(e) {
    if (document.getElementById(e) != null) {
        return D.getElementById(e);
    } else {
        return false;
    }
}

var eagleStrikeStatus = false,
    cheetahStrikeStatus = false,
    yawnActive = 1,
    rootStatus = 1,
    fearStatus = 1,
    bashStatus = 1,
    humanRacial = TDC(),
    eruditeRacial = TDC(),
    barbarianRacial = TDC(),
    woodElfRacial = TDC(),
    darkElfRacial = TDC(),
    halfElfRacial = TDC(),
    dwarfRacial = TDC(),
    gnomeRacial = TDC(),
    hideStatus = 1,
    divineAegisStatus = true,
    ancestralRampageStatus = false,
    tunaresGlowStatus = false,
    sanguineTormentStatus = false,
    divineAegisStatus = false,
    secondWindStatus = false,
    karanasInfusionStatus = false,
    shortCircuitStatus = false,
    graniteVisageStatus = false,
    avengingTimer = TDC(),
    avengingStrikeIconTimer = TDC(),
    pummelStatus = 1,
    clearPummel = TDC(),
    clearSubjugate = TDC(),
    decisiveBlowStatus = 1,
    absorbSpellStatus = 1,
    triageTickCount = 0,
    triageInterval = TDC(),
    frenziedRampageStatus = 1,
    frenziedRampageHasteStatus = false,
    frenziedRampageTimeout = TDC(),
    bulwarkTimeout = TDC(),
    bulwarkStatus = 0,
    frenziedRampageDuration = TDC(),
    // MONK Flags
    ancestralFlurryTimeout = TDC(),
    cheetahStrikeTimeout = TDC(),
    invincibleStatus = false,
    //ROGUE flags
    hyperStrikeValue = 0,
    hyperStrikeCount = 0,
    illusiveMistStatus = 1,
    hyperStrikeTimeout = TDC(),
    mirageStrikeStatus = 0,
    ancientWillTimer = TDC(),
    ancientWillStatus = false,
    evadeStatus = false,
    //RANGER FLAGS
    rangerTrackStatus = false,
    rapidShotDelay = TDC(),
    trueshotCD = TDC(),
    sowStatus = false,
    counterShotStatus = false,
    shieldOfBramblesStatus = false,
    weaponShieldStatus = false,
    thistlecoatStatus = false,
    shieldOfBramblesTimeout = TDC(),
    thistlecoatTimeout = TDC(),
    feetLikeCatTimeout = TDC(),
    feetLikeCatStatus = false,
    feetLikeCatBonus = 0,
    spiritOfTheWolfTimeout = TDC(),
    volleyShotCount = 0,
    volleyShotTotalHits = 0,
    //paladin flags
    yaulpStatus = false,
    yaulpTimeout = TDC(),
    paladinBlind1 = 0,
    paladinBlind2 = 0,
    paladinBlind3 = 0,
    paladinBlind4 = 0,
    valorStatus = false,
    valorArmorBoost = 0,
    valorHpBoost = 0,
    valorTimeout = TDC(),
    spiritArmorStatus = true,
    spiritArmorArmorBoost = 0,
    spiritArmorTimeout = TDC(),
    divineProvidenceStatus = false,
    divineProvidencePoisonBoost = 0,
    divineProvidenceMagicBoost = 0,
    symbolOfRyltanStatus = false,
    symbolOfRyltanBoost = 0,
    symbolOfRyltanTimeout = TDC(),
    //SK Flags
    deathStrikeStatus = false,

    siphonStrengthTimeout = TDC(),
    siphonStrengthBonus = 0,
    siphonStrengthStatus = false,

    shadowVortexTimeout = TDC(),
    shadowVortexBonus = 0,
    shadowVortexStatus = false,
    vampiricEmbraceStatus = false,
    vampiricEmbraceTimeout = TDC(),

    resistColdStatus = false,
    resistColdBoost = 0,
    resistColdTimeout = TDC(),

    //bard flags
    boastfulBellowTickTimeout = TDC(),
    bardSingStatus = false,
    thisBardSongStart = 0,
    thisBardSongStart = 0,
    currentBardSongRefresh = 0,
    chantOfBattleStatus = false,
    chantOfBattleArmor = 0,
    chantOfBattleStr = 0,
    chantOfBattleDex = 0,
    chantOfBattleTick = 0,
    chantOfBattleTicking = TDC(),
    chantOfBattleTimeout = TDC(),
    chordsOfDissonanceStatus = false,
    chordsOfDissonanceTicking = TDC(),
    chordsOfDissonanceTimeout = TDC(),
    accelerandoStatus = false,
    accelerandoTicking = TDC(),
    accelerandoTimeout = TDC(),
    hymnOfRestorationStatus = false,
    hymnOfRestorationTicking = TDC(),
    hymnOfRestorationTimeout = TDC(),
    anthemDeArmsStatus = false,
    anthemDeArmsTicking = TDC(),
    anthemDeArmsTimeout = TDC(),
    anthemDeArmsStr = 0,
    anthemDeArmsHaste = 0,
    boastfulBellowTimeout = TDC(),
    elementalRhythmsStatus = false,
    elementalRhythmsTicking = TDC(),
    elementalRhythmsTimeout = TDC(),
    elementalRhythmsMagic = 0,
    elementalRhythmsLightning = 0,
    elementalRhythmsCold = 0,
    elementalRhythmsFire = 0,
    lucidLullabyTimeout = TDC(),
    consonantChainTimeout = TDC(),
    dissensionTimeout = TDC(),
    chorusOfClarityStatus = false,
    chorusOfClarityTicking = TDC(),
    chorusOfClarityTimeout = TDC(),
    euphonicHymnTimeout = TDC(),
    shieldOfSongsTimeout = TDC(),
    desperateDirgeTimeout = TDC(),
    desperateDirgeTicking = TDC(),
    desperateDirgeStatus = false,
    songOfTheSirensTimeout = TDC(),
    songOfTheSirensTicking = TDC(),
    charmSlot = 0,
    //cleric flags
    resolutionStatus = false,
    resolutionArmorBoost = 0,
    resolutionHpBoost = 0,
    resolutionTimeout = TDC(),
    armorOfFaithStatus = false,
    armorOfFaithArmorBoost = 0,
    armorOfFaithTimeout = TDC(),
    divineSanctuaryStatus = false,
    divineSanctuaryPoisonBoost = 0,
    divineSanctuaryMagicBoost = 0,
    divineSanctuaryLightningBoost = 0,
    divineSanctuaryColdBoost = 0,
    divineSanctuaryFireBoost = 0,
    divineSanctuaryTimeout = TDC(),
    symbolOfNaltronStatus = false,
    symbolOfNaltronBoost = 0,
    symbolOfNaltronTimeout = TDC(),
    shieldHp = 0,
    guardianAngelStatus = true,
    markOfJudgementStatus = false,
    markOfJudgementTiming = TDC(),
    //druids
    skinLikeNatureStatus = false,
    skinLikeNatureArmorBoost = 0,
    skinLikeNatureHpBoost = 0,
    skinLikeNatureTimeout = TDC(),
    shieldOfSpikesStatus = false,
    chloroplastStatus = false,
    chloroplastTickCount = 0,
    chloroplastInterval = TDC(),
    //shaman
    callOfTheAncientsStatus = false,
    callOfTheAncientsStr = 0,
    callOfTheAncientsSta = 0,
    callOfTheAncientsAgi = 0,
    callOfTheAncientsDex = 0,
    callOfTheAncientsWis = 0,
    callOfTheAncientsTimeout = TDC(),
    reclaimBloodStatus = false,
    reclaimBloodTickCount = 0,
    reclaimBloodInterval = TDC(),
    talismanOfAltunaStatus = false,
    talismanOfAltunaBoost = 0,
    talismanOfAltunaTimeout = TDC(),
    //necro
    archShieldingStatus = false,
    archShieldingHpBoost = 0,
    archShieldingArmorBoost = 0,
    archShieldingPoisonBoost = 0,
    archShieldingMagicBoost = 0,
    archShieldingTimeout = TDC(),
    corpseExplosionStatus = false,
    corpseExplosionTimeout = TDC(),
    detonateSoulTimeout = TDC(),
    detonateSoulStatus = false,
    //enchanter
    alacrityStatus = false,
    discordantBarrierStatus = false,
    discordantBarrierHpBoost = 0,
    discordantBarrierArmorBoost = 0,
    discordantBarrierMagicBoost = 0,
    discordantBarrierTimeout = TDC(),
    enchantWeaponStatus = false,
    enchantWeaponTimeout = TDC(),
    adorningGraceCha = 0,
    adorningGraceIntel = 0,
    adorningGraceWis = 0,
    adorningGraceStatus = false,
    adorningGraceTimeout = TDC(),
    clarityTimeout = TDC(),
    clarityStatus = false,
    I = {},
    //magician
    shieldOfLavaStatus = false,
    phantomPlateStatus = false,
    phantomPlateHpBoost = 0,
    phantomPlateArmorBoost = 0,
    phantomPlateTimeout = TDC(),
    elementalArmorStatus = false,
    elementalArmorColdBoost = 0,
    elementalArmorFireBoost = 0,
    manaShieldStatus = false,
    manaShieldTimeout = TDC(),
    alteredStateStatus = false,
    //wizard
    viziersShieldingStatus = false,
    viziersShieldingHpBoost = 0,
    viziersShieldingArmorBoost = 0,
    viziersShieldingPoisonBoost = 0,
    viziersShieldingMagicBoost = 0,
    viziersShieldingLightningBoost = 0,
    viziersShieldingColdBoost = 0,
    viziersShieldingFireBoost = 0,
    viziersShieldingTimeout = TDC(),
    mirrorImageStatus = 0,
    harnessEtherStatus = false,
    //buff icon timers
    frenziedRampageIconTimer = TDC(),
    hpbuffIconTimer = TDC(),
    armorOfFaithIconTimer = TDC(),
    divineSanctuaryIconTimer = TDC(),
    symbolOfNaltronIconTimer = TDC(),
    skinLikeNatureIconTimer = TDC(),
    shieldOfSpikesIconTimer = TDC(),
    spiritOfTheWolfIconTimer = TDC(),
    chloroplastIconTimer = TDC(),
    callOfTheAncientsIconTimer = TDC(),
    talismanOfAltunaIconTimer = TDC(),
    hasteIconTimer = TDC(),
    damageShieldIconTimer = TDC(),
    resistIconTimer = TDC(),
    enchantWeaponIconTimer = TDC(),
    adorningGraceIconTimer = TDC(),
    clarityIconTimer = TDC(),
    mirrorImagesIconTimer = TDC(),
    prowlingGashIconTimer = TDC(),
    yaulpIconTimer = TDC(),
    symbolOfRyltanIconTimer = TDC(),
    spiritArmorIconTimer = TDC(),
    siphonStrengthSelfIconTimer = TDC(),
    shadowVortexSelfIconTimer = TDC(),
    vampiricEmbraceIconTimer = TDC(),
    feetLikeCatIconTimer = TDC(),
    thistlecoatIconTimer = TDC(),
    accelerandoIconTimer = TDC(),
    mobFearTimer = TDC(),
    mobGlobeOfDarknessTimer = TDC(),
    mobRootTimer = TDC(),
    mobConfuseTimer = TDC(),
    mobMindNumbTimer = TDC(),
    mobWeakenTimer = TDC(),
    mobYawnTimer = TDC(),
    mobChilledTimer = TDC(),
    mobSilenceTimer = TDC(),
    //mob icons
    chilledTimer = TDC(),
    silenceStatus = false,
    mobBashTimer = TDC(),
    //pet flags
    petPosition = 1,
    petName = "",
    petImage = "",
	petLastCast = '',
    petLevel = (my.level - ~~(M.random() * (3))),
    petMaxHp = 0,
    petHp = 0,
    petStr = 0,
    petDef = 0,
    petPoison = 0,
    petMagic = 0,
    petLightning = 0,
    petFire = 0,
    petCold = 0,
    petSpeed = 0,
    petSkill1 = "",
    petSkill2 = "",
    petSkill3 = "",
    petSkill4 = "",
    petCastingFrequency = 10,
    petAttack = TDC(),
    petDoubleAttackCD = false,
    petBashStatus = false,
    petFearStatus = false,
    petBlindStatus = false,
    petRootStatus = false,
    petParalyzeStatus = false;
mob[0].petDot = false;
mob[1].petDot = false;
mob[2].petDot = false;
mob[3].petDot = false;
var petWidth = 0,
    petHeight = 0,

    stunCooldown2 = TDC(),
    monsterFearCooldown2 = TDC(),
    monsterBlindCooldown2 = TDC(),
    monsterRootCooldown2 = TDC(),
    petSpeedBuff = 1,
    //monster flags
    Mstr = 0,
    Mlvl = 0,
    Mname = "",
    TGT = 1,
    mindNumbIntelDebuff = 0,
    mindNumbWisDebuff = 0,
    weakenStrDebuff = 0,
    weakenDexDebuff = 0,
    Mdef = 1,
    Mpoison = 1,
    Mmagic = 1,
    Mlightning = 1,
    Mfire = 1,
    Mcold = 1,
    Mgold = 1,
    monsterTC = 1,
    Mint = 0,
    Mfreq = 10,
    Mrare = 1,
    Mwidth = 100,
    Mthorns = 1,
    Mlava = 1,
    Mresolution = 0,
    Mskeleton = 1,
    Melemental = 1,
    Mwolf = 1,
    Mrune = 0,
    MharmTouch = 1,
    stunCooldown = TDC(),
    monsterFearCooldown = TDC(),
    monsterBlindCooldown = TDC(),
    monsterRootCooldown = TDC(),
    monsterYawnCooldown = TDC(),
    monsterMindDrainCooldown = TDC(),
    monsterConfuseCooldown = TDC(),
    monsterConfuseCooldownComplete = TDC(),
    monsterMindNumbCooldown = TDC(),
    monsterWeakenCooldown = TDC(),
    monsterYawnCooldown = TDC(),
    mindNumbActive = 1,
    weakenActive = 1,
    mindDrainActive = 1,
    blizzardStatus = 1,
    confuseStatus = false,
    //reference dates
    referenceDate = new Date(),
    referenceDate3 = new Date(),
    //battle flags
    spellCastTime = 1,
    timeLeft = 0,
    spellType = "evocation",
    currentSpell = "",
    spellMpCost = 0,
    spellDamage = 0,
    castingGlobal = 1,
    castingSpell = 1,
    lockoutTimer1 = TDC(),
    cooldownTimer1 = TDC(),
    lockoutTimer2 = TDC(),
    cooldownTimer2 = TDC(),
    //character data flags
    characterslot = 0,
    //gui flags
    charSheetToggle = 1,
    skillToggle = 1,
    inventoryToggle = 1,
    createHeroToggle = 1,
    myhpbarToggle = 1,
    travelStatus = 1,
    chainCounter = 0,
    comboRating = 0,
    inventoryToggle = 1;

// this is cumulative so 276 exp needed for level 2 (376 total)
g.levelMax = [100, 276, 441, 624, 825, 1044, 1281, 1536, 1809, //10
    2650, 3014, 3396, 3796, 4214, 5400, 5904, 6426, 6966, 7524,
    9100, 9744, 10406, 11086, 11784, 13750, 14534, 15336, 16156, 16994,
    19650, 20584, 21536, 22506, 23494, 26600, 27684, 28786, 29906, 31044,
    34600, 35834, 37086, 38356, 39644, 44100, 45494, 46906, 48336, 49784,
    54750, 56304, 57876, 59466, 61074, 67100, 68824, 70566, 72326, 74104,
    81300, 83204, 85126, 87066, 89024, 97500, 99594, 101706, 103836, 105984,
    115850, 118144, 120456, 122786, 125134, 135750, 138244, 140756, 143286, 145834,
    166800, 169614, 172446, 175296, 178164, 206550, 209754, 212976, 216216, 219474,
    267750, 271544, 275356, 279186,
    283034, //94 - 283034
    676400, //95 - 676400 - 7045176
    3775584, //96 - 3775584 - 7721576
    23652286, //97 - 23652286 - 11497160
    68686338 // max value = 103835784
];

function setCurrentLevel(myExp) {
    if (!myExp) {
        myExp = my.exp;
    }
    var x = g.levelMax;
    var myLevel = 1;
    var sum = 0;
    for (var i = 0, len = x.length; i < len; i++) {
        sum += x[i];
        if (sum > myExp) {
            continue;
        } else {
            myLevel++;
            if (myLevel >= 99) {
                continue;
            }
        }
    }
    return myLevel;
}

function nextLevel(level) {
    if (level === 0) {
        return 0;
    }
    if (!level) {
        level = my.level;
    }
    var x = g.levelMax;
    var foo = 0;
    var next = level + 1;
    for (var i = 1; i <= 98; i++) {
        if (next > i) {
            foo += x[(i - 1)];
        }
    }
    return foo;
}

function totalLevelExp() {
    var foo = 0;
    var x = g.levelMax;
    for (var i = 1; i <= 98; i++) {
        if (my.level > i) {
            foo += x[(i - 1)];
        }
    }
    return foo;
}

function daysPlayed() {
    var days = 0;
    var timeLeft = my.playtime;
    if (timeLeft >= 86400000) {
        days = Math.floor(timeLeft / 86400000);
        timeLeft = (timeLeft % 86400000);
    }
    return days
}

function hoursPlayed() {
    var hours = 0;
    var timeLeft = my.playtime;
    if (timeLeft >= 86400000) {
        var days = Math.floor(timeLeft / 86400000);
        timeLeft = (timeLeft % 86400000);
    }
    if (timeLeft >= 3600000) {
        hours = Math.floor(timeLeft / 3600000);
        timeLeft = (timeLeft % 3600000);
    }
    return hours;
}

function minutesPlayed() {
    var minutes = 0;
    var timeLeft = my.playtime;
    if (timeLeft >= 86400000) {
        var days = Math.floor(timeLeft / 86400000);
        timeLeft = (timeLeft % 86400000);
    }
    if (timeLeft >= 3600000) {
        var hours = Math.floor(timeLeft / 3600000);
        timeLeft = (timeLeft % 3600000);
    }
    if (timeLeft >= 60000) {
        minutes = Math.floor(timeLeft / 60000);
        timeLeft = (timeLeft % 60000);
    }
    return minutes;
}


g.drawMonsterHp = function(Slot, instant) {
    if (Slot === TGT) {
        var ratio = (mob[Slot].hp / mob[Slot].maxHp);
        if (instant === true) {
            T.killTweensOf(monsterHpBar1);
            T.killTweensOf(monsterHpBar2);
            T.set([monsterHpBar1, monsterHpBar2], {
                scaleX: ratio
            });
        } else {
            T.to(monsterHpBar1, .25, {
                scaleX: ratio,
                ease: ez.cout
            });
            T.to(monsterHpBar2, .5, {
                scaleX: ratio,
                ease: ez.xin
            });
        }
        var foo = mob[Slot].hp + ' / ' + mob[Slot].maxHp + ' - ' + M.ceil(ratio * 100) + '%';
        monsterText.text = foo;
        if (my.job === "Warrior") {
            checkDecisiveBlow();
        }
    }
}

g.drawMyHp = function() {
    var max = g.maxHpFunct();
    if (my.hp > max) {
        my.hp = max;
    }
    var ratio = (my.hp / max);
    var element = D.getElementById('myhp');
    if (typeof(element) != 'undefined' && element != null) {
        element.textContent = my.hp;
    }
    T.to(myHpBar, .25, {
        scaleX: ratio
    });
    var zog = my.hp + ' / ' + max + ' ' + M.ceil(ratio * 100) + '%';
    myHpText.text = zog;
    if (my.job === "Shaman") {
        if (btn.d.cannibalize === false) {
            if (my.hp < M.round(my.maxHp * .18)) {
                BGP('cannibalize', "-700% -300%");
            } else {
                BGP('cannibalize', "-700% 0");
            }
        }
    }
    if (g.petAlive === true) {
        if (petHp > petMaxHp) {
            petHp = petMaxHp;
        }
        var ratio = (petHp / petMaxHp);
        T.to(myPetBar, .25, {
            scaleX: ratio
        });
        var foo = petHp + ' / ' + petMaxHp + ' ' + M.ceil(ratio * 100) + '%';
        myPetText.text = foo;
    } else if (mob[charmSlot].charmStatus === true) {
        if (mob[charmSlot].hp > mob[charmSlot].maxHp) {
            mob[charmSlot].hp = mob[charmSlot].maxHp;
        }
        var ratio = (mob[charmSlot].hp / mob[charmSlot].maxHp);
        T.to(myPetBar, .25, {
            scaleX: ratio
        });
        var foo = mob[charmSlot].hp + ' / ' + mob[charmSlot].maxHp + ' ' + M.ceil(ratio * 100) + '%';
        myPetText.text = foo;
    }
}
g.drawMyMp = function(gain) { // also triggers button status updates
    if (gain) {
        my.mp = my.mp + gain;
    }
    my.maxMp = g.maxMpFunct();
    if (my.mp < 0) {
        my.mp = 0;
    }
    if ((my.job === "Monk" || my.job === "Rogue" || my.job === "Warrior") && (my.mp >= 100)) {
        my.mp = 100;
    }
    if (my.mp > my.maxMp) {
        my.mp = my.maxMp;
    }
    var ratio = (my.mp / my.maxMp);
    if (my.level <= 8) {
        if (my.job === "Ranger") {
            ratio = 0;
            my.mp = 0;
        }
        if (my.job === "Paladin") {
            ratio = 0;
            my.mp = 0;
        }
        if (my.job === "Shadow Knight") {
            ratio = 0;
            my.mp = 0;
        }
    }
    T.to(myMpBar, .25, {
        scaleX: ratio
    });
    if (my.maxMp > 0) {
        if ("MP" === mpType) {
            var foo = my.mp + ' / ' + my.maxMp + ' ' + M.ceil(ratio * 100) + '%';
            myMpText.text = foo;
        } else {
            var foo = my.mp + ' / ' + my.maxMp;
            myMpText.text = foo;
        }
        var element = D.getElementById('mymp');
        if (typeof(element) !== 'undefined' && element !== null) {
            element.textContent = my.mp;
        }
    }
    g[JOB.CheckSkills]();
}

function mobsFound() {
    var mobHere = false;
    for (var i = 0; i <= 4; i++) {
        if (mob[i].attackStatus === 0) {
            mobHere = true;
        }
    }
    return mobHere;
}

function getRegen() {
    //ambush odds
    if (ambushCooldown === false && mySubzone() !== 4 && imagesLoaded === 0 && scriptsLoaded === true && classSpriteLoaded === true) {
        if (my.level > 19 && cityStatus === false) {
            if (mobsFound() === true) {
                if (btn.d.addmonsterId === false) {
                    var bar = (ambushChance);
                    var zil = M.random() * bar;
                    if (zil < 1 && countMobs() < 3 && mob[2].rare !== 3) {
                        var d = 90000;
                        var count = 1;
                        if (my.difficulty === 2) {
                            d = 70000;
                            if (M.random() > .66) {
                                count = 2;
                            }
                        } else if (my.difficulty === 3) {
                            d = 50000;
                            if (M.random() > .33) {
                                count = 2;
                            }
                        }
                        ambushStatus = 0;
                        meditateStatus = false;
                        ambushCooldown = true;
                        T.delayedCall(d / 1000, function() {
                            ambushCooldown = false;
                        });
                        if (count === 1) {
                            QMsg("Ambush!");
                            delayedMonsterTimer(count);
                        } else if (count === 2) {
                            QMsg("Double Ambush!");
                            delayedMonsterTimer(count);
                        }
                    }
                }
            }
        }
    }
    // poison negates regen
    var foundOne = mobsFound();
    var regenTick = (my.level / 24);
    if (foundOne === false) {
        regenTick += (g.maxHpFunct() / 3.3);
    }
    regenTick += g.hpRegenEquip;
    if (mob[0].envenomTicks > 0 ||
        mob[1].envenomTicks > 0 ||
        mob[2].envenomTicks > 0 ||
        mob[3].envenomTicks > 0 ||
        mob[4].envenomTicks > 0) {
        regenTick = ~~(regenTick / 2);
    }
    g.popupHeal(M.ceil(regenTick));
    //pet regen
    if (g.petAlive === true) {
        if (foundOne === false) {
            petHp += M.ceil(petMaxHp / 3.3);
        }
        petHp += ~~(petLevel / 3);
        if (petHp > petMaxHp) {
            petHp = petMaxHp;
        }
    }
    //mob regen
    for (var i = 0; i <= 4; i++) {
        if (mob[i].name !== "") {
            if (mob[i].afflictionTickCount === 0 && mob[i].widowStrikeTickCount === 0 && mob[i].scourgeTickCount === 0) {
                mob[i].hp += ~~(mob[i].level / 5);
            }
        }
        if (my.job === "Enchanter") {
            if (my.talent8 >= 20 && mob[charmSlot].charmStatus === true) {
                mob[charmSlot].hp += ~~(mob[charmSlot].maxHp / 20);
            }
        }
        if (mob[i].hp > mob[i].maxHp) {
            mob[i].hp = mob[i].maxHp;
        }
    }
    g.drawMyHp();
    if (shieldOfLavaStatus === true) {
        if (my.talent2 >= 20) {
            animateNova();
            var goy = false;
            for (var i = 0; i <= 4; i++) {
                if (mob[i].name) {
                    goy = true;
                    var dam = minMax(abjurationTotal() / 2.6, .8);
                    animateDot(i, "red", 50, 12, 50, 20, 'easeInOutQuad');
                    g.myMagicDamage('fire', dam, i, checkCrit(), "Magma Burst");
                }
            }
            if (goy) {
                playAudio('explode2');
            }
        }
    }
}

function getMpRegen() {
    var foo = startTime;
    startTime = new Date();
    my.playtime += (startTime - foo);
    for (var i = 0; i <= 4; i++) {
        mob[i].mp += 1;
        if (mob[i].mp > 20) {
            mob[i].mp = 20;
        }
    }
    var z = my.job;
    if (z === "Monk" || z === "Rogue") {
        return;
    }
    var foundOne = mobsFound();
    if (z === "Warrior") {
        if (foundOne === false) {
            my.mp -= 2;
            if (my.mp < 0) {
                my.mp = 0;
            }
            g.drawMyMp();
        }
        return;
    }
    my.maxMp = g.maxMpFunct();
    var x = (my.level / 16);
    if (foundOne === false) {
        x = x + (g.maxMpFunct() / 3.3);
    }
    if (z === "Bard") {
        if (chorusOfClarityStatus === true) {
            x = x + ((alterationTotal() / 35) * (1 + (talent7() * 5.3) / 100));
        }
    }
    if (z === "Enchanter") {
        if (clarityStatus === true) {
            x = x + (alterationTotal() / 25);
        }
    }
    x = x + g.mpRegenEquip;
    x = x + (min70(wisTotal()) / 22);
    if (my.race === "High Elf") {
        x += my.maxMp * .01;
    }
    if (z === "Necromancer") {
        if (my.talent10 >= 20) {
            x = x * 1.6;
        }
    }
    var enh = 0;
    if (z === "Magician") {
        if (my.talent9 >= 20) {
            enh = 65;
        }
    }
    x = x * (1 + (enh / 100));
    g.popupMana(M.ceil(x));
}

function getTpRegen() {
    if (my.job === "Monk") {
        if (secondWindStatus) {
            my.mp += 6;
        } else {
            my.mp += 3;
        }
    }
    if (my.mp > 100) {
        my.mp = 100;
    }
    g.drawMyMp();
}

function getFuryRegen(damage) {
    var y = M.ceil(M.round(damage / 6)) + 5;
    my.mp += y;
    if (secondWindStatus === true) {
        my.mp += y;
    }
    if (my.mp > my.maxMp) {
        my.mp = my.maxMp;
    }
    g.drawMyMp();
}

function updatePunchDamage() {
    // adjust monk punch damage
    var x = handToHandTotal();
    if (my.job === "Monk") {
        if (P.eq[12].type === "punched") {
            P.eq[12].damage = 2 + ~~(x * .1);
            P.eq[12].delay = 3000 - ~~(x * 2);
        }
        if (P.eq[13].type === "punched") {
            P.eq[13].damage = 2 + ~~(x * .1);
            P.eq[13].delay = 3000 - ~~(x * 2);
        }
    } else {
        if (P.eq[12].type === "punched") {
            P.eq[12].damage = 1 + ~~(x * (.03));
            P.eq[12].delay = 3000;
        }
        if (P.eq[13].type === "punched") {
            P.eq[13].damage = 1 + ~~(x * (.03));
            P.eq[13].delay = 3000;
        }
    }
}

function levelUpStats() {
    //job mods
    if (enteredWorld === true) {
        my.hp = g.maxHpFunct();
        g.drawMyHp();
        if (my.job === "Warrior" || my.job === "Monk" || my.job === "Rogue") {
            CStat();
        } else {
            my.mp = g.maxMpFunct();
            g.drawMyMp();
        }
    }
}

spellCanceled = false;

function clearMyWindows() {
    if (upgradeMode === true) {
        return false;
    }
    var cleared = false;
    if (travelStatus === 0) {
        var e = D.getElementById("travelId");
        e.className = "buttonsManage";
        e.style.backgroundPosition = "-80px 0";
        $("#worldMap").css("top", -900);
        travelStatus = 1;
        cleared = true;
    }
    if ($("#bank").css("display") === "block") {
        $("#bank").css("display", "none");
        cleared = true;
    }
    if (parseInt($("#options").css("top"), 10) >= 0) {
        var e = D.getElementById("optionsId");
        e.className = "buttonsManage";
        e.style.backgroundPosition = "-120px 0";
        $("#options").css("top", -900);
        cleared = true;
    }
    if (questJournalBlock === 0) {
        questToggle();
        cleared = true;
    }
    if (charSheetToggle == 0) {
        var e = D.getElementById("charsheetId");
        e.className = "buttonsManage";
        e.style.backgroundPosition = "0 0";
        $("#window1").css("display", "none");
        charSheetToggle = 1;
        cleared = true;
    }
    if (inventoryToggle == 0) {
        var e = D.getElementById("inventoryId");
        e.className = "buttonsManage";
        e.style.backgroundPosition = "-40px 0";
        $("#inventoryWindow").css("display", "none");
        inventoryToggle = 1;
        cleared = true;
    }
    if (cityStatus === true) {
        cityMenuClick(false);
    }
    hideBattleReport();
    $NG.ttItem.css("display", "none");
    D.getElementById('goldInputWrap').style.display = "none";
    return cleared;
}

function hideBattleReport() {
    T.killDelayedCallsTo('#battleReport');
    T.to('#battleReport', .5, {
        scale: 0,
        opacity: 0,
        ease: ez.sout,
        onComplete: function() {
            D.getElementById('battleReportContent').innerHTML = "";
            T.set('#battleReport', {
                visibility: 'hidden'
            });
        }
    });
}

function cancelMySpell(bypass) {
    if (upgradeMode === true) {
        return;
    }
    if (!bypass) {
        clearMyWindows();
    }
    //cancel spell
    if (bardSingStatus === true) {
        bardSinging();
    }
    if (currentSpell === "Arcane Missiles" || currentSpell === "Ice Block") {
        return;
    }
    if (castingSpell === 0) {
        Chat("You cancel your spell.");
    }
    if (loreMsg.length > 0) {
        loreMsg.shift();
        lore();
    }
    castingSpell = 1;
    tlSpellbar.kill();
    NG.spellbardiv.style.display = "none";
    cancelDragging();
}

function cancelDragging() {
    flashingBorderTimer.kill();
    if (dragID) {
        D.getElementById(dragID).parentNode.style.border = "2px solid #111";
    }
    dragStatus = false;
    classDrag = '';
    dragID = "";
}

$(document).ready(function() {
    $("button").on('click', function() {
        return false;
    });
});

function saveButtonPositions() {
    var foo = $("#window3a li").filter(":visible");
    for (var i = 0; i <= 23; i++) {
        Lmy['C' + i] = foo.eq(i).attr("id");
    }
}

function sortButtons() {
    var foo = $("#window3a");
    for (var i = 0; i <= 23; i++) {
        if (Lmy['C' + i] !== '') {
            var x = Lmy['C' + i];
            if (x === "addmonsterId" ||
                x === "toggleattackId" ||
                x === "runId" ||
                x === "halflinghideId" ||
                x === "secondwindId" ||
                x === "divineaegisId" ||
                x === "ancestralrampageId" ||
                x === "tunaresglowId" ||
                x === "karanasinfusionId" ||
                x === "sanguinetormentId" ||
                x === "granitevisageId" ||
                x === "shortcircuitId") {
                Lmy['C' + i] = '';
            } else {
                var x = $("#" + Lmy['C' + i]).clone(true, true);
                $("#" + Lmy['C' + i]).remove();
                x.appendTo(foo);
            }
        }
    }
    var foo = patchVersion;
    var a = foo.split('-');
    if (parseInt(a[0], 10) === 0 && parseInt(a[1], 10) <= 6) { // reset for a patch
        var a = [];
        var e1 = $("#window3a");

        function GO(foo) {
            a.push(foo);
        }
        GO('addmonsterId');
        GO('toggleattackId');
        //GO('meditateId');
        GO('runId');
        if (my.job === 'Warrior') {
            GO('avengingstrikeId');
            GO('slamId');
            GO('warriorkickId');
            GO('hemorrhageId');
            GO('shockwaveId');
            GO('pummelId');
            GO('subjugateId');
            GO('decisiveblowId');
            GO('absorbspellId');
            GO('frenziedrampageId');
            GO('enrageId');
            GO('furiousscornId');
            GO('triageId');
            GO('bulwarkId');
            GO('intrepidmightId');
        } else if (my.job === "Monk") {
            GO('tigerstrikeId');
            GO('eaglestrikeId');
            GO('cheetahstrikeId');
            GO('cobrastrikeId');
            GO('dragonstrikeId');
            GO('cranekickId');
            GO('windmillkickId');
            GO('ancestralflurryId');
            GO('flyingkickId');
            GO('chakrablastId');
            GO('feigndeathId');
            GO('mendId');
            GO('stonefistsId');
            GO('intimidationId');
            GO('innerpeaceId');
        } else if (my.job === "Rogue") {
            GO('roguehideId');
            GO('shadowstrikeId');
            GO('sonicstrikeId');
            GO('hyperstrikeId');
            GO('widowstrikeId');
            GO('miragestrikeId');
            GO('lacerateId');
            GO('backstabId');
            GO('staggershotId');
            GO('lobotomizeId');
            GO('prowlinggashId');
            GO('evadeId');
            GO('coldbloodId');
            GO('flashpowderId');
            GO('illusivemistId');
            GO('ancientwillId');
        } else if (my.job === "Paladin") {
            GO('layhandsId');
            GO('purgeId');
            GO('palslamId');
            GO('rebukeId');
            GO('vengeanceId');
            GO('greaterhealingId');
            GO('holymightId');
            GO('valorId');
            GO('palrootId');
            GO('ardentjudgment');
            GO('spiritarmorId');
            GO('yaulpId');
            GO('cleanseId');
            GO('divineprovidenceId');
            GO('flashoflightId');
            GO('symbolofryltanId');
        } else if (my.job === "Ranger") {
            GO('rangertrackId');
            GO('rapidshotId');
            GO('rangerkickId');
            GO('countershotId');
            GO('trueshotarrowId');
            GO('volleyshotId');
            GO('lighthealingId');
            GO('faerieflameId');
            GO('igniteId');
            GO('thistlecoatId');
            GO('snareId');
            GO('feetlikecatId');
            GO('shieldofbramblesId');
            GO('wardersrift');
            GO('rangersowId');
            GO('weaponshieldId');
        } else if (my.job === "Shadow Knight") {
            GO('harmtouchId');
            GO('crescentcleaveId');
            GO('shdslamId');
            GO('deathstrikeId');
            GO('gaspingfrenzyId');
            GO('summondeadId');
            GO('shdlifetapId');
            GO('doomingdarknessId');
            GO('heatbloodId');
            GO('vampiricembraceId');
            GO('strengthendeadId');
            GO('resistcoldId');
            GO('shdfearId');
            GO('siphonstrengthId');
            GO('shdfeigndeathId');
            GO('shadowvortexId');
        } else if (my.job === "Bard") {
            GO('rangertrackId');
            GO('chordsofdissonance');
            GO('chantofbattle');
            GO('accelerando');
            GO('hymnofrestoration');
            GO('songofthesirens');
            GO('boastfulbellow');
            GO('elementalrhythms');
            GO('lucidlullaby');
            GO('consonantchain');
            GO('dissension');
            GO('chorusofclarity');
            GO('anthemdearms');
            GO('euphonichymn');
            GO('shieldofsongs');
            GO('desperatedirge');
        } else if (my.job === "Druid") {
            GO('rangertrackId');
            GO('starfire');
            GO('dronesofdoom');
            GO('druhealing');
            GO('skinlikenature');
            GO('tornado');
            GO('engulfingroots');
            GO('shieldofspikes');
            GO('driftingdeath');
            GO('drusow');
            GO('lightningblast');
            GO('earthquake');
            GO('chloroplast');
            GO('hurricane');
            GO('sylvangrasp');
            GO('volcano');
        } else if (my.job === "Cleric") {
            GO('smite');
            GO('soundofforce');
            GO('superiorhealing');
            GO('resolution');
            GO('bindingearth');
            GO('expelcorruption');
            GO('searingrevelation');
            GO('martyrsblessing');
            GO('armoroffaith');
            GO('guardianangel');
            GO('divinesanctuary');
            GO('holywrath');
            GO('markofjudgement');
            GO('symbolofnaltron');
            GO('benediction');
        } else if (my.job === "Shaman") {
            GO('froststrike');
            GO('scourge');
            GO('shmhealing');
            GO('calloftheancients');
            GO('guardianspirit');
            GO('togorsinsects');
            GO('cannibalize');
            GO('enstill');
            GO('poisonnova');
            GO('shmsow');
            GO('affliction');
            GO('reclaimblood');
            GO('glacialimpact');
            GO('talismanofaltuna');
            GO('devouringplague');
        } else if (my.job === "Necromancer") {
            GO('bonespirit');
            GO('cascadingdarkness');
            GO('invokefear');
            GO('drainsoul');
            GO('archshielding');
            GO('feigndeath');
            GO('augmentdeath');
            GO('igniteblood');
            GO('corpseexplosion');
            GO('bondofdeath');
            GO('diamondskin');
            GO('asystole');
            GO('detonatesoul');
            GO('howlingterror');
            GO('invokedeath');
        } else if (my.job === "Enchanter") {
            GO('chaosflux');
            GO('gaspingembrace');
            GO('cajolingwhispers');
            GO('colorshift');
            GO('mesmerize');
            GO('discordantbarrier');
            GO('shiftlessdeeds');
            GO('enchantweapon');
            GO('adorninggrace');
            GO('alacrity');
            GO('gravityflux');
            GO('mysticrune');
            GO('tashania');
            GO('clarity');
            GO('enthrall');
        } else if (my.job === "Magician") {
            GO('lavabolt');
            GO('earthelemental');
            GO('airelemental');
            GO('fireelemental');
            GO('frostelemental');
            GO('shieldoflava');
            GO('firestorm');
            GO('phantomplate');
            GO('frozenorb');
            GO('burnout');
            GO('manashield');
            GO('elementalarmor');
            GO('psionicstorm');
            GO('reclaimelements');
            GO('elementalfury');
            GO('armageddon');
            GO('stasisfield');
            GO('alteredstate');
        } else if (my.job === "Wizard") {
            GO('icebolt');
            GO('chargedbolts');
            GO('frostnova');
            GO('magicmissiles');
            GO('viziersshielding');
            GO('fireball');
            GO('deepfreeze');
            GO('chainlightning');
            GO('glacialspike');
            GO('iceblock');
            GO('icecomet');
            GO('counterspell');
            GO('harnessEther');
            GO('meteor');
            GO('mirrorimages');
        }
        if (my.race === "Human") {
            GO('secondwindId');
        } else if (my.race === "Erudite") {
            GO('divineaegisId');
        } else if (my.race === "Barbarian") {
            GO('ancestralrampageId');
        } else if (my.race === "Wood Elf") {
            GO('tunaresglowId');
        } else if (my.race === "Half Elf") {
            GO('karanasinfusionId');
        } else if (my.race === "Dark Elf") {
            GO('sanguinetormentId');
        } else if (my.race === "Dwarf") {
            GO('granitevisageId');
        } else if (my.race === "Gnome") {
            GO('shortcircuitId');
        } else if (my.race === "Halfling") {
            GO('halflinghideId');
        }
        if (my.job === "Shaman" || my.job === "Necromancer" || my.job === "Shadow Knight" || my.job === "Magician") {
            GO('togglepetattackId');
        }
        a.reverse();
        for (var i = 0, len = a.length; i < len; i++) {
            var x = $("#" + a[i]).clone(true, true);
            $("#" + a[i]).remove();
            x.prependTo(e1);
        }
    }
    moveLockedSkills();
}

function moveLockedSkills() {
    // move locked skills before the first spacer so it appears to replace it when you level
    var e1 = $(".buttons:hidden, .NCbuttons:hidden");
    var e2 = e1.clone();
    e1.remove();
    var e3 = $(".spacers:visible").first();
    e2.insertBefore(e3);
}

function showButtons() {
    $(".NCbuttons, .nonglobal").css("display", "none");
    // reset all skills and spacers
    $(".allskill, .spacers").css("display", "inline-block");
    $("#addmonsterId, #runId, #toggleattackId").css('display', 'block');

    function doit(foo, num) {
        $("#" + foo).css({
            display: 'block',
            float: 'left'
        });
        if (num > 0) {
            if ($("#window3a").filter(":visible").children().length > 24) {
                $("#Comspace" + num).css('display', 'none');
            }
        }
    }
    if (my.job === "Warrior") {
        $(".warskill").css('display', 'none');
        doit("avengingstrikeId", 0);
        if (my.level >= 2) {
            doit("slamId", 1);
        }
        if (my.level >= 3) {
            doit("warriorkickId", 2);
        }
        if (my.level >= 5) {
            doit("enrageId", 3);
        }
        if (my.level >= 7) {
            doit("pummelId", 4);
        }
        if (my.level >= 9) {
            doit("subjugateId", 5);
        }
        if (my.level >= 11) {
            doit("furiousscornId", 6);
        }
        if (my.level >= 13) {
            doit("triageId", 7);
        }
        if (my.level >= 15) {
            doit("decisiveblowId", 8);
        }
        if (my.level >= 17) {
            doit("hemorrhageId", 9);
        }
        if (my.level >= 20) {
            doit("absorbspellId", 10);
        }
        if (my.level >= 24) {
            doit("intrepidmightId", 11);
        }
        if (my.level >= 28) {
            doit("bulwarkId", 12);
        }
        if (my.level >= 32) {
            doit("frenziedrampageId", 13);
        }
        if (my.level >= 38) {
            doit("shockwaveId", 14);
        }
    }
    if (my.job === "Monk") {
        $(".mnkskill").css('display', 'none');
        doit("tigerstrikeId", 0);
        if (my.level >= 2) {
            doit("cranekickId", 1);
        }
        if (my.level >= 3) {
            doit("eaglestrikeId", 2);
        }
        if (my.level >= 5) {
            doit("feigndeathId", 3);
        }
        if (my.level >= 7) {
            doit("windmillkickId", 4);
        }
        if (my.level >= 9) {
            doit("stonefistsId", 5);
        }
        if (my.level >= 11) {
            doit("mendId", 6);
        }
        if (my.level >= 13) {
            doit("intimidationId", 7);
        }
        if (my.level >= 15) {
            doit("innerpeaceId", 8);
        }
        if (my.level >= 17) {
            doit("cheetahstrikeId", 9);
        }
        if (my.level >= 20) {
            doit("cobrastrikeId", 10);
        }
        if (my.level >= 24) {
            doit("chakrablastId", 11);
        }
        if (my.level >= 28) {
            doit("flyingkickId", 12);
        }
        if (my.level >= 32) {
            doit("ancestralflurryId", 13);
        }
        if (my.level >= 38) {
            doit("dragonstrikeId", 14);
        }
    }
    if (my.job === "Rogue") {
        $(".rogskill").css('display', 'none');
        doit("shadowstrikeId", 0);
        doit("roguehideId", 1);
        if (my.level >= 2) {
            doit("lacerateId", 2);
        }
        if (my.level >= 3) {
            doit("evadeId", 3);
        }
        if (my.level >= 5) {
            doit("sonicstrikeId", 4);
        }
        if (my.level >= 7) {
            doit("backstabId", 5);
        }
        if (my.level >= 9) {
            doit("coldbloodId", 6);
        }
        if (my.level >= 11) {
            doit("flashpowderId", 7);
        }
        if (my.level >= 13) {
            doit("hyperstrikeId", 8);
        }
        if (my.level >= 15) {
            doit("illusivemistId", 9);
        }
        if (my.level >= 17) {
            doit("staggershotId", 10);
        }
        if (my.level >= 20) {
            doit("widowstrikeId", 11);
        }
        if (my.level >= 24) {
            doit("lobotomizeId", 12);
        }
        if (my.level >= 28) {
            doit("ancientwillId", 13);
        }
        if (my.level >= 32) {
            doit("miragestrikeId", 14);
        }
        if (my.level >= 38) {
            doit("prowlinggashId", 15);
        }
    }
    if (my.job === "Paladin") {
        $(".palskill").css('display', 'none');
        doit("purgeId", 0);
        doit("layhandsId", 1);
        if (my.level >= 2) {
            doit("palslamId", 2);
        }
        if (my.level >= 3) {
            doit("rebukeId", 3);
        }
        if (my.level >= 6) {
            doit("vengeanceId", 4);
        }
        if (my.level >= 9) {
            doit("greaterhealingId", 5);
        }
        if (my.level >= 11) {
            doit("holymightId", 6);
        }
        if (my.level >= 13) {
            doit("valorId", 7);
        }
        if (my.level >= 15) {
            doit("ardentjudgment", 8);
        }
        if (my.level >= 17) {
            doit("spiritarmorId", 9);
        }
        if (my.level >= 19) {
            doit("palrootId", 10);
        }
        if (my.level >= 21) {
            doit("yaulpId", 11);
        }
        if (my.level >= 24) {
            doit("cleanseId", 12);
        }
        if (my.level >= 28) {
            doit("divineprovidenceId", 13);
        }
        if (my.level >= 32) {
            doit("flashoflightId", 14);
        }
        if (my.level >= 38) {
            doit("symbolofryltanId", 15);
        }
    }
    if (my.job === "Ranger") {
        $(".rngskill").css('display', 'none');
        doit("rapidshotId", 0);
        doit("rangertrackId", 1);
        if (my.level >= 2) {
            doit("rangerkickId", 2);
        }
        if (my.level >= 3) {
            doit("countershotId", 3);
        }
        if (my.level >= 6) {
            doit("trueshotarrowId", 4);
        }
        if (my.level >= 9) {
            doit("lighthealingId", 5);
        }
        if (my.level >= 11) {
            doit("faerieflameId", 6);
        }
        if (my.level >= 13) {
            doit("igniteId", 7);
        }
        if (my.level >= 15) {
            doit("thistlecoatId", 8);
        }
        if (my.level >= 17) {
            doit("snareId", 9);
        }
        if (my.level >= 19) {
            doit("feetlikecatId", 10);
        }
        if (my.level >= 21) {
            doit("shieldofbramblesId", 11);
        }
        if (my.level >= 24) {
            doit("wardersrift", 12);
        }
        if (my.level >= 28) {
            doit("rangersowId", 13);
        }
        if (my.level >= 32) {
            doit("volleyshotId", 14);
        }
        if (my.level >= 38) {
            doit("weaponshieldId", 15);
        }
    }
    if (my.job === "Shadow Knight") {
        $(".shdskill").css('display', 'none');
        doit("crescentcleaveId", 0);
        doit("harmtouchId", 1);
        if (my.level >= 2) {
            doit("shdslamId", 2);
        }
        if (my.level >= 3) {
            doit("deathstrikeId", 3);
        }
        if (my.level >= 6) {
            doit("gaspingfrenzyId", 4);
        }
        if (my.level >= 9) {
            doit("summondeadId", 5);
            doit('togglepetattackId', 6);
        }
        if (my.level >= 11) {
            doit("shdlifetapId", 7);
        }
        if (my.level >= 13) {
            doit("doomingdarknessId", 8);
        }
        if (my.level >= 15) {
            doit("shdfearId", 9);
        }
        if (my.level >= 17) {
            doit("siphonstrengthId", 10);
        }
        if (my.level >= 19) {
            doit("heatbloodId", 11);
        }
        if (my.level >= 21) {
            doit("vampiricembraceId", 12);
        }
        if (my.level >= 24) {
            doit("strengthendeadId", 13);
        }
        if (my.level >= 28) {
            doit("resistcoldId", 14);
        }
        if (my.level >= 32) {
            doit("shdfeigndeathId", 15);
        }
        if (my.level >= 38) {
            doit("shadowvortexId", 16);
        }
    }
    if (my.job === "Bard") {
        $(".brdskill").css('display', 'none');
        doit("chordsofdissonance", 0);
        doit("rangertrackId", 1);
        if (my.level >= 2) {
            doit("chantofbattle", 2);
        }
        if (my.level >= 3) {
            doit("accelerando", 3);
        }
        if (my.level >= 5) {
            doit("hymnofrestoration", 4);
        }
        if (my.level >= 7) {
            doit("songofthesirens", 5);
        }
        if (my.level >= 9) {
            doit("boastfulbellow", 6);
        }
        if (my.level >= 11) {
            doit("elementalrhythms", 7);
        }
        if (my.level >= 13) {
            doit("lucidlullaby", 8);
        }
        if (my.level >= 15) {
            doit("consonantchain", 9);
        }
        if (my.level >= 17) {
            doit("dissension", 10);
        }
        if (my.level >= 20) {
            doit("chorusofclarity", 11);
        }
        if (my.level >= 24) {
            doit("anthemdearms", 12);
        }
        if (my.level >= 28) {
            doit("euphonichymn", 13);
        }
        if (my.level >= 32) {
            doit("shieldofsongs", 14);
        }
        if (my.level >= 38) {
            doit("desperatedirge", 15);
        }
    }
    if (my.job === "Cleric") {
        $(".clrskill").css('display', 'none');
        doit("smite", 0);
        if (my.level >= 2) {
            doit("soundofforce", 1);
        }
        if (my.level >= 3) {
            doit("superiorhealing", 2);
        }
        if (my.level >= 5) {
            doit("resolution", 3);
        }
        if (my.level >= 7) {
            doit("bindingearth", 4);
        }
        if (my.level >= 9) {
            doit("expelcorruption", 5);
        }
        if (my.level >= 11) {
            doit("searingrevelation", 6);
        }
        if (my.level >= 13) {
            doit("martyrsblessing", 7);
        }
        if (my.level >= 15) {
            doit("armoroffaith", 8);
        }
        if (my.level >= 17) {
            doit("guardianangel", 9);
        }
        if (my.level >= 20) {
            doit("divinesanctuary", 10);
        }
        if (my.level >= 24) {
            doit("holywrath", 11);
        }
        if (my.level >= 28) {
            doit("markofjudgement", 12);
        }
        if (my.level >= 32) {
            doit("symbolofnaltron", 13);
        }
        if (my.level >= 38) {
            doit("benediction", 14);
        }
    }
    if (my.job === "Druid") {
        $(".druskill").css('display', 'none');
        doit("starfire", 0);
        doit("rangertrackId", 1);
        if (my.level >= 2) {
            doit("dronesofdoom", 2);
        }
        if (my.level >= 3) {
            doit("druhealing", 3);
        }
        if (my.level >= 5) {
            doit("skinlikenature", 4);
        }
        if (my.level >= 7) {
            doit("tornado", 5);
        }
        if (my.level >= 9) {
            doit("engulfingroots", 6);
        }
        if (my.level >= 11) {
            doit("shieldofspikes", 7);
        }
        if (my.level >= 13) {
            doit("driftingdeath", 8);
        }
        if (my.level >= 15) {
            doit("drusow", 9);
        }
        if (my.level >= 17) {
            doit("lightningblast", 10);
        }
        if (my.level >= 20) {
            doit("earthquake", 11);
        }
        if (my.level >= 24) {
            doit("chloroplast", 12);
        }
        if (my.level >= 28) {
            doit("hurricane", 13);
        }
        if (my.level >= 32) {
            doit("sylvangrasp", 14);
        }
        if (my.level >= 38) {
            doit("volcano", 15);
        }
    }
    if (my.job === "Shaman") {
        $(".shmskill").css('display', 'none');
        doit("froststrike", 0);
        if (my.level >= 2) {
            doit("scourge", 1);
        }
        if (my.level >= 3) {
            doit("shmhealing", 2);
        }
        if (my.level >= 5) {
            doit("calloftheancients", 3);
        }
        if (my.level >= 7) {
            doit("guardianspirit", 4);
            doit('togglepetattackId', 5);
        }
        if (my.level >= 9) {
            doit("togorsinsects", 6);
        }
        if (my.level >= 11) {
            doit("cannibalize", 7);
        }
        if (my.level >= 13) {
            doit("poisonnova", 8);
        }
        if (my.level >= 15) {
            doit("shmsow", 9);
        }
        if (my.level >= 17) {
            doit("enstill", 10);
        }
        if (my.level >= 20) {
            doit("affliction", 11);
        }
        if (my.level >= 24) {
            doit("reclaimblood", 12);
        }
        if (my.level >= 28) {
            doit("glacialimpact", 13);
        }
        if (my.level >= 32) {
            doit("talismanofaltuna", 14);
        }
        if (my.level >= 38) {
            doit("devouringplague", 15);
        }
    }
    if (my.job === "Necromancer") {
        $(".necskill").css('display', 'none');
        doit("bonespirit", 0);
        if (my.level >= 2) {
            doit("invokedeath", 1);
            doit('togglepetattackId', 2);
        }
        if (my.level >= 3) {
            doit("cascadingdarkness", 3);
        }
        if (my.level >= 5) {
            doit("invokefear", 4);
        }
        if (my.level >= 7) {
            doit("drainsoul", 5);
        }
        if (my.level >= 9) {
            doit("archshielding", 6);
        }
        if (my.level >= 11) {
            doit("feigndeath", 7);
        }
        if (my.level >= 13) {
            doit("augmentdeath", 8);
        }
        if (my.level >= 15) {
            doit("igniteblood", 9);
        }
        if (my.level >= 17) {
            doit("corpseexplosion", 10);
        }
        if (my.level >= 20) {
            doit("bondofdeath", 11);
        }
        if (my.level >= 24) {
            doit("diamondskin", 12);
        }
        if (my.level >= 28) {
            doit("asystole", 13);
        }
        if (my.level >= 32) {
            doit("detonatesoul", 14);
        }
        if (my.level >= 38) {
            doit("howlingterror", 15);
        }
    }
    if (my.job === "Enchanter") {
        $(".encskill").css('display', 'none');
        doit("chaosflux", 0);
        if (my.level >= 2) {
            doit("gaspingembrace", 1);
        }
        if (my.level >= 3) {
            doit("cajolingwhispers", 2);
        }
        if (my.level >= 5) {
            doit("colorshift", 3);
        }
        if (my.level >= 7) {
            doit("mesmerize", 4);
        }
        if (my.level >= 9) {
            doit("discordantbarrier", 5);
        }
        if (my.level >= 11) {
            doit("shiftlessdeeds", 6);
        }
        if (my.level >= 13) {
            doit("enchantweapon", 7);
        }
        if (my.level >= 15) {
            doit("adorninggrace", 8);
        }
        if (my.level >= 17) {
            doit("alacrity", 9);
        }
        if (my.level >= 20) {
            doit("gravityflux", 10);
        }
        if (my.level >= 24) {
            doit("mysticrune", 11);
        }
        if (my.level >= 28) {
            doit("tashania", 12);
        }
        if (my.level >= 32) {
            doit("clarity", 13);
        }
        if (my.level >= 38) {
            doit("enthrall", 14);
        }
    }
    if (my.job === "Magician") {
        $(".magskill").css('display', 'none');
        doit("lavabolt", 0);
        if (my.level >= 2) {
            doit('togglepetattackId', 1);
            doit("earthelemental", 2);
            doit("airelemental", 3);
            doit("fireelemental", 4);
            doit("frostelemental", 5);
        }
        if (my.level >= 3) {
            doit("shieldoflava", 6);
        }
        if (my.level >= 5) {
            doit("firestorm", 7);
        }
        if (my.level >= 7) {
            doit("phantomplate", 8);
        }
        if (my.level >= 9) {
            doit("frozenorb", 9);
        }
        if (my.level >= 11) {
            doit("burnout", 10);
        }
        if (my.level >= 13) {
            doit("manashield", 11);
        }
        if (my.level >= 15) {
            doit("elementalarmor", 12);
        }
        if (my.level >= 17) {
            doit("psionicstorm", 13);
        }
        if (my.level >= 20) {
            doit("reclaimelements", 14);
        }
        if (my.level >= 24) {
            doit("elementalfury", 15);
        }
        if (my.level >= 28) {
            doit("armageddon", 16);
        }
        if (my.level >= 32) {
            doit("stasisfield", 17);
        }
        if (my.level >= 38) {
            doit("alteredstate", 18);
        }
    }
    if (my.job === "Wizard") {
        $(".wizskill").css('display', 'none');
        doit("icebolt", 0);
        if (my.level >= 2) {
            doit("chargedbolts", 1);
        }
        if (my.level >= 3) {
            doit("frostnova", 2);
        }
        if (my.level >= 5) {
            doit("magicmissiles", 3);
        }
        if (my.level >= 7) {
            doit("viziersshielding", 4);
        }
        if (my.level >= 9) {
            doit("fireball", 5);
        }
        if (my.level >= 11) {
            doit("deepfreeze", 6);
        }
        if (my.level >= 13) {
            doit("chainlightning", 7);
        }
        if (my.level >= 15) {
            doit("glacialspike", 8);
        }
        if (my.level >= 17) {
            doit("iceblock", 9);
        }
        if (my.level >= 20) {
            doit("icecomet", 10);
        }
        if (my.level >= 24) {
            doit("counterspell", 11);
        }
        if (my.level >= 28) {
            doit("harnessEther", 12);
        }
        if (my.level >= 32) {
            doit("meteor", 13);
        }
        if (my.level >= 38) {
            doit("mirrorimages", 14);
        }
    }
    // show racial buttons - Comspace19
    if (my.race === "Human") {
        doit("secondwindId", 19);
    }
    if (my.race === "Erudite") {
        doit("divineaegisId", 19);
    }
    if (my.race === "Barbarian") {
        doit("ancestralrampageId", 19);
    }
    if (my.race === "Wood Elf") {
        doit("tunaresglowId", 19);
    }
    if (my.race === "Half Elf") {
        doit("karanasinfusionId", 19);
    }
    if (my.race === "Dark Elf") {
        doit("sanguinetormentId", 19);
    }
    if (my.race === "Dwarf") {
        doit("granitevisageId", 19);
    }
    if (my.race === "Gnome") {
        doit("shortcircuitId", 19);
    }
    if (my.race === "Halfling" && my.job !== "Rogue") {
        doit("halflinghideId", 19);
    }
    resizeButtonBackgrounds();
}

$(document).ready(function() {
    $("img").on('dragstart', function(event) {
        event.preventDefault();
    });
});
$(function() {
    $("#deathScreen").on('click', '#battleReportOK', function() {
        resurrectMe();
        hideMobTooltip();
    });
    $("#intro").on('click', '#resetGame', function() {
        serverLogout();
    });
});

function hideMobIcons() {
    for (var i = 0; i <= 4; i++) {
        NG['mobIcons' + i].style.display = 'none';
    }
}

function clearMobIcons() {
    hideMobIcons();
    for (var i = 0; i <= 4; i++) {
        $("#mobIcons" + i).empty();
    }
}

// sound functions
function browserTest() {
    var foo = false;
    if (isOpera || isFirefox || isChrome) {
        foo = true;
    } // only support audio for chrome, firefox, and opera
    return foo;
}

function browserTest2() {
    var foo = false;
    if (isMSIE || isMSIE11 || isSafari) {
        foo = true;
    }
    return foo;

}

function cLog(foo) {
    if (isFirefox || isChrome) {
		if (GLB.debugMode === "On") {
			if (g.view === "Game") {
				Chat(foo, 2);
			}
			console.log(foo);
		} else {
			console.log(foo);
		}
    }
}

var browserOgg = browserTest(),
    browserMp3 = browserTest2(),
    audioExt = 'ogg';
if (browserMp3 === true) {
    audioExt = 'mp3';
}

function fadeMusic() {
    if (!!D.createElement('audio').canPlayType) { // modern browser?
        if ((browserOgg || browserMp3) && GLB.musicStatus > 0) { // FF,Chrome,Opera
            var baz = D.getElementById("bgmusic");
            var count = 50;
            var kek = (((count / 100) * (GLB.musicStatus / 100)) * 1);
            baz.volume = kek;

            function doit() {
                if (count <= 0) {
                    return;
                }
                count -= 5;
                baz.volume = (((count / 100) * (GLB.musicStatus / 100)) * 1);
                T.delayedCall(.4, doit);
            }
            doit();
        }
    }
}

function initMusic() {
    musicAssets = [];
    musicStrings = [];
    musicAssetsNumber = 0;
    for (var i = 0; i <= 9; i++) {
        musicAssets[i] = '';
        musicStrings[i] = '';
    }
}

function musicNum() {
    if (musicAssetsNumber > 9) {
        musicAssetsNumber = 0;
    }
    return musicAssetsNumber++;
}

function loadMusic(sound) {
    var found = false;
    for (var i = 0, len = musicAssets.length; i < len; i++) {
        if (musicStrings[i].indexOf(sound) !== -1) {
            found = true; // found it - don't load it
            continue;
        }
    }
    if (found === false) { // didn't find it - load using next audio slot
        var x = musicNum();
        musicStrings[x] = sound;
        musicAssets[x] = D.createElement('audio');
        musicAssets[x].src = musicLocation + sound + "." + audioExt;
    }
}
initMusic();
$("#bgmusic").on('ended', function() {
    var x = D.getElementById('bgmusic');
    x.currentTime = 0;
    x.play();
});
$("#bgamb1").on('ended', function() {
    var x = D.getElementById('bgamb1');
    x.currentTime = 0;
    x.play();
});
$("#bgamb2").on('ended', function() {
    var x = D.getElementById('bgamb2');
    x.currentTime = 0;
    x.play();
});

function playMusic(foo) {
    if (isMobile === false) {
        if (audioEnabled === true) {
            if ((browserOgg === true || browserMp3 === true)) {
                loadMusic(foo);
                var x = D.getElementById("bgmusic");
                x.setAttribute('type', 'audio/' + audioExt);
                x.src = musicLocation + foo + "." + audioExt;
                var kek = ((.5 * (GLB.musicStatus / 100)) * 1);
                x.volume = kek;
                x.play();
            }
        }
    }
}

function playAmbient(foo) {
    if (isMobile === false) {
        if (foo === "blankAudio") {
            return;
        }
        if (audioEnabled === true) {
            if ((browserOgg === true || browserMp3 === true)) {
                var x = D.getElementById("bgamb1");
                x.setAttribute('type', 'audio/' + audioExt);
                x.src = musicLocation + foo + "." + audioExt;
                var kek = ((.2 * (GLB.musicStatus / 100)) * 1);
                x.volume = kek;
                x.play();
                setTimeout(function() {
                    var x = D.getElementById("bgamb2");
                    x.setAttribute('type', 'audio/' + audioExt);
                    x.src = musicLocation + foo + "." + audioExt;
                    var kek = ((.2 * (GLB.musicStatus / 100)) * 1);
                    x.volume = kek;
                    x.play();
                }, 4000);
            }
        }
    }
}
var audioEnabled = !!D.createElement('audio').canPlayType;

function playAudio(foo, multi, fade, volAdj) {
    if (isMobile === false) {
        if (foo === "blankAudio") {
            return;
        }
        if (audioEnabled === true) { // modern browser?
            if ((browserOgg === true || browserMp3 === true)) { // FF,Chrome,Opera
                var baz = new Audio(soundLocation + foo + "." + audioExt);
                baz.setAttribute('type', 'audio/' + audioExt);
                baz.src = soundLocation + foo + "." + audioExt;
                if (!volAdj) {
                    volAdj = 1;
                }
                var kek = (M.round(((.5 * (GLB.soundStatus / 100)) * volAdj) * 100) / 100);
                baz.volume = kek;
                baz.play();
                // fade this effect after fade duration?
                if (fade > 0) {
                    if (GLB.soundStatus > 0) {
                        function doit(count) {
                            var zag = (kek * 100) * (1 - (count * .2));
                            if (zag < 0) {
                                zag = 0;
                            }
                            baz.volume = zag / 100;
                            count++;
                            if (zag > 0) {
                                T.delayedCall(.1, doit, [count]);
                            }
                        }
                        T.delayedCall(fade / 1000, doit, [0]);
                    }
                }
            }
        }
    }
}

function playCityMusic() {
    var x = myZone();
    if (x === "Edenburg" && g.view === "Game") {
        playMusic("Blackmoor Tides");
    } else if (x === "Aspen Grove") {
        playMusic("Ireland's Coast (Travelog Edition - Live)");
    } else if (x === "Artremia") {
        playMusic("Salt Marsh Birds");
    } else if (x === "Fenwoven") {
        playMusic("Snowland Loop");
    }
}

pageDoneLoading = false;

function cityMenuClick(sound) {
    cancelDragging();
    upgradeMode = false;
    if (sound !== false) {
        playAudio('button_2');
    }
    var cityToggleStatus = true;
    dragStatus = false;
    dragID = "";
    flashingCityBorder.kill();
    $NG.trainingButton.css("border", "1px solid #111");
    trainSkill = "";
    $("#trainingOptions").css("left", -700);
    $("#trainOK").css("left", -700);
    itemUpgradeMode = false;
    upgradePrompt = false;
    upgradePhysical = true;
    $("#upgradeConfirm").css("left", -700);
    $("#upgradeOK").text("Ok");
    $("#upgradeCANCEL").text("Cancel");
    $("#merchantContainer").css("left", -700);
    $("#questWrap").css("left", -900);
    merchantMode = false;
    buyMode = false;
}
$(function() {
    $("#pethpbardiv, #spellbardiv").draggable({
        containment: "#gameView",
        scroll: false,
        stop: function() {
            var foo = $(this).attr("id");
            updateWindowPosition(foo);
        }
    });
    $("#myhpbardiv").draggable({
        containment: "#gameView",
        scroll: false,
        cancel: '#buffWindow',
        stop: function() {
            var foo = $(this).attr('id');
            updateWindowPosition(foo);
        }
    });
    $("#mobBar").draggable({
        containment: "#gameView",
        scroll: false,
        cancel: '.mobIcons',
        stop: function() {
            var foo = $(this).attr('id');
            updateWindowPosition(foo);
        }
    });
    $("#window1,#inventoryWindow,#questJournal").draggable({
        containment: "#gameView",
        scroll: false,
        handle: "#statHeader,#invHeader,#questHeader",
        start: function() {
            g.draggingWindows = true;
        },
        stop: function() {
            var foo = $(this).attr("id");
            updateWindowPosition(foo);
            T.delayedCall(.05, function() {
                g.draggingWindows = false;
            });
        }
    });
});

function updateWindowPosition(foo) {
    if (foo === "window1") {
        Lmy.window1X = parseInt($("#window1").css("left"));
        Lmy.window1Y = parseInt($("#window1").css("top"));
    }
    if (foo === "inventoryWindow") {
        Lmy.inventoryWindowX = parseInt($("#inventoryWindow").css("left"));
        Lmy.inventoryWindowY = parseInt($("#inventoryWindow").css("top"));
    }
    if (foo === "questJournal") {
        Lmy.questJournalX = parseInt($("#questJournal").css("left"));
        Lmy.questJournalY = parseInt($("#questJournal").css("top"));
    }
    if (foo === "mobBar") {
        Lmy.mobBarX = parseInt($("#mobBar").css("left"));
        Lmy.mobBarY = parseInt($("#mobBar").css("top"));
    }
    if (foo === "myhpbardiv") {
        Lmy.myhpbardivX = parseInt($("#myhpbardiv").css("left"));
        Lmy.myhpbardivY = parseInt($("#myhpbardiv").css("top"));
    }
    if (foo === "pethpbardiv") {
        Lmy.pethpbardivX = parseInt($("#pethpbardiv").css("left"));
        Lmy.pethpbardivY = parseInt($("#pethpbardiv").css("top"));
    }
	if(foo === "spellbardiv"){
        Lmy.spellbardivX = parseInt($("#spellbardiv").css("left"));
        Lmy.spellbardivY = parseInt($("#spellbardiv").css("top"));
	}
}

function setWindowPosition() {
    if (Lmy.window3Y < 0) {
        Lmy.window3Y = 603;
    }
    $("#window1").css({
        top: Lmy.window1Y,
        left: Lmy.window1X
    });
    $("#inventoryWindow").css({
        top: Lmy.inventoryWindowY,
        left: Lmy.inventoryWindowX
    });
    $("#questJournal").css({
        top: Lmy.questJournalY,
        left: Lmy.questJournalX
    });
    $("#mobBar").css({
        top: Lmy.mobBarY,
        left: Lmy.mobBarX
    });
    $("#myhpbardiv").css({
        top: Lmy.myhpbardivY,
        left: Lmy.myhpbardivX
    });
    $("#pethpbardiv").css({
        top: Lmy.pethpbardivY,
        left: Lmy.pethpbardivX
    });
	$("#spellbardiv").css({
        top: Lmy.spellbardivY,
        left: Lmy.spellbardivX
	});
}
//manageCharacters.js
function refreshRaceButtons() {
    $NG.racelist.removeClass("classDisabled ccActive ccDisabled").addClass("ccDisabled");
    var x = "humanId";
    if (my.race == "Human") {
        my.str = 75;
        my.sta = 75;
        my.dex = 75;
        my.agi = 75;
        my.intel = 75;
        my.wis = 75;
        my.cha = 75;
    }
    if (my.race == "Erudite") {
        my.str = 60;
        my.sta = 70;
        my.dex = 70;
        my.agi = 70;
        my.intel = 107;
        my.wis = 83;
        my.cha = 70;
        x = "eruditeId";
    }
    if (my.race == "Barbarian") {
        my.str = 103;
        my.sta = 95;
        my.dex = 70;
        my.agi = 82;
        my.intel = 60;
        my.wis = 92;
        my.cha = 55;
        x = "barbarianId";
    }
    if (my.race == "High Elf") {
        my.str = 55;
        my.sta = 65;
        my.dex = 70;
        my.agi = 85;
        my.intel = 92;
        my.wis = 95;
        my.cha = 80;
        x = "highelfId";
    }
    if (my.race == "Wood Elf") {
        my.str = 65;
        my.sta = 65;
        my.dex = 80;
        my.agi = 95;
        my.intel = 75;
        my.wis = 80;
        my.cha = 75;
        x = "woodelfId";
    }
    if (my.race == "Dark Elf") {
        my.str = 60;
        my.sta = 65;
        my.dex = 75;
        my.agi = 90;
        my.intel = 99;
        my.wis = 83;
        my.cha = 60;
        x = "darkelfId";
    }
    if (my.race == "Half Elf") {
        my.str = 70;
        my.sta = 70;
        my.dex = 85;
        my.agi = 90;
        my.intel = 75;
        my.wis = 60;
        my.cha = 75;
        x = "halfelfId";
    }
    if (my.race == "Dwarf") {
        my.str = 90;
        my.sta = 90;
        my.dex = 90;
        my.agi = 70;
        my.intel = 60;
        my.wis = 83;
        my.cha = 45;
        x = "dwarfId";
    }
    if (my.race == "Gnome") {
        my.str = 60;
        my.sta = 70;
        my.dex = 85;
        my.agi = 85;
        my.intel = 98;
        my.wis = 67;
        my.cha = 60;
        x = "gnomeId";
    }
    if (my.race == "Halfling") {
        my.str = 70;
        my.sta = 75;
        my.dex = 90;
        my.agi = 95;
        my.intel = 67;
        my.wis = 80;
        my.cha = 50;
        x = "halflingId";
    }
    if (my.race == "Troll") {
        my.str = 108;
        my.sta = 109;
        my.dex = 75;
        my.agi = 83;
        my.intel = 52;
        my.wis = 60;
        my.cha = 40;
        x = "trollId";
    }
    if (my.race == "Ogre") {
        my.str = 130;
        my.sta = 123;
        my.dex = 70;
        my.agi = 70;
        my.intel = 60;
        my.wis = 67;
        my.cha = 37;
        x = 'ogreId';
    }
    D.getElementById(x).className = 'raceClassButtonsOff racelist strongShadow ccActive';
    refreshClassButtons();
}

function refreshClassButtons() {
    $NG.joblist.removeClass("classDisabled ccActive ccDisabled").addClass("ccDisabled");
    var r = my.race;
    if (r == "Erudite") {
        $("#warriorId, #monkId, #rogueId, #rangerId, #bardId, #druidId, #shamanId").addClass("classDisabled");
    }
    if (r == "Barbarian") {
        $("#monkId, #paladinId, #rangerId, #skId, #bardId, #clericId, #druidId, #necromancerId, #enchanterId, #magicianId, #wizardId").addClass("classDisabled");
    }
    if (r == "High Elf") {
        $("#warriorId, #monkId, #rogueId, #rangerId, #skId, #bardId, #druidId, #shamanId, #necromancerId").addClass("classDisabled");
    }
    if (r == "Wood Elf") {
        $("#monkId, #paladinId, #skId, #clericId, #shamanId, #necromancerId, #enchanterId, #magicianId, #wizardId").addClass("classDisabled");
    }
    if (r == "Dark Elf") {
        $("#monkId, #paladinId, #shamanId, #bardId, #druidId").addClass("classDisabled");
    }
    if (r == "Half Elf") {
        $("#clericId, #shamanId, #necromancerId, #enchanterId, #magicianId, #wizardId").addClass("classDisabled");
    }
    if (r == "Dwarf") {
        $("#monkId, #rangerId, #skId, #bardId, #druidId, #shamanId, #necromancerId, #enchanterId, #magicianId, #wizardId").addClass("classDisabled");
    }
    if (r == "Gnome") {
        $("#rangerId, #bardId, #druidId, #shamanId").addClass("classDisabled");
    }
    if (r == "Halfling") {
        $("#skId, #bardId, #shamanId, #necromancerId, #enchanterId, #magicianId, #wizardId").addClass("classDisabled");
    }
    if (r == "Troll") {
        $("#monkId, #rogueId, #paladinId, #rangerId, #bardId, #clericId, #druidId, #necromancerId, #enchanterId, #magicianId, #wizardId").addClass("classDisabled");
    }
    if (r == "Ogre") {
        $("#monkId, #rogueId, #paladinId, #rangerId, #bardId, #clericId, #druidId, #necromancerId, #enchanterId, #magicianId, #wizardId").addClass("classDisabled");
    }
    //determine if class is playable
    var j = my.job;
    if (j === "Warrior" && $("#warriorId").hasClass("classDisabled")) {
        paladinInfo();
        return;
    }
    if (j === "Monk" && $("#monkId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Rogue" && $("#rogueId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Paladin" && $("#paladinId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Ranger" && $("#rangerId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Shadow Knight" && $("#skId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Bard" && $("#bardId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Cleric" && $("#clericId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Druid" && $("#druidId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Shaman" && $("#shamanId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Necromancer" && $("#necromancerId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Enchanter" && $("#enchanterId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Magician" && $("#magicianId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    if (j === "Wizard" && $("#wizardId").hasClass("classDisabled")) {
        warriorInfo();
        return;
    }
    //refresh class list
    if (j === "Warrior") {
        warriorInfo();
    }
    if (j === "Monk") {
        monkInfo();
    }
    if (j === "Rogue") {
        rogueInfo();
    }
    if (j === "Paladin") {
        paladinInfo();
    }
    if (j === "Ranger") {
        rangerInfo();
    }
    if (j === "Shadow Knight") {
        skInfo();
    }
    if (j === "Bard") {
        bardInfo();
    }
    if (j === "Cleric") {
        clericInfo();
    }
    if (j === "Druid") {
        druidInfo();
    }
    if (j === "Shaman") {
        shamanInfo();
    }
    if (j === "Necromancer") {
        necromancerInfo();
    }
    if (j === "Enchanter") {
        enchanterInfo();
    }
    if (j === "Magician") {
        magicianInfo();
    }
    if (j === "Wizard") {
        wizardInfo();
    }
}

// race class info update panel
function humanInfo() {
    my.race = "Human";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Humans live in the city of Edenburg. Humans are a balanced, innovative race highly regarded for their ability to adapt to any situation. As a result they can play every existing class.<br><br>" +
        "Racial skill: Second Wind provides an adrenaline boost, restoring your health and mana. Second Wind also  enhances all of your damage and reduces all damage received.");
}

function eruditeInfo() {
    my.race = "Erudite";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Erudites live in the city of Wexxen and are a racial offshoot of humans known for their acumen and their intellect. Despite their common ancestry with humans, generations of geographic isolation and cultural dedication to the magic have left them weaker than their human counterparts. With the largest intelligence bonus of any race, they are gifted spellcasters, but they manage to make formidable paladins and shadow knights as well.<br><br>" +
        "Racial skill: Surround yourself with a chromatic aegis that makes you highly resistant to all magic.");
}

function barbarianInfo() {
    my.race = "Barbarian";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Barbarians share common ancestry to humans and live in the city of Fenwoven. They evolved as a stronger, hardier race due to the harsh conditions of the frigid north, but lost some of their innovative qualities due to a strong tribal mindset. TheRenowned for their ferocity in battle, they receive a generous boost to strength, stamina, and wisdom. Barbarians are known to be excellent shaman and warriors, though they make surprisingly adept rogues as well.<br><br>" +
        "Racial skill: Summon the strength of your ancestors to bolster your might, increasing all damage.");
}

function highelfInfo() {
    my.race = "High Elf";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("High elves live in the city of Prentia. They are descendants of a royal elven bloodline who once ruled the Empire before the Age of Shattering. High Elves are an intrinsically spiritual race that have deep cultural commitment to their God, Altheim, the God of Light. Their commitment to the arcane arts has softened their bodies over the generations, but they have excellent intelligence and wisdom. Despite their light frames, they are known to make great Paladins due to their excellent healing skills.<br><br>" +
        "Racial skill: Enhanced passive mana regeneration.");
}

function woodelfInfo() {
    my.race = "Wood Elf";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Wood elves dwell in the city of Artremia. Their culture is deeply aligned with Rinara, the Goddess of nature. They spiritually hold that what is natural is considered the most holy. In turn, Rinara's providence blesses wood elves with excellent agility and dexterity. Among the elven races, their wisdom is second only to the high elves.<br><br>" +
        "Racial skill: Wood Elves use a skill called Camouflage to blend into their surroundings. Camouflage makes them untargetable for six seconds and their next attack benefits from enhanced damage.");
}

function darkelfInfo() {
    my.race = "Dark Elf";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Dark elves are known for their savagery compared to their elven relatives. They have long been left to their own devices deep in the subterranean city of Vedria. There they are rumored to practice summon demons and perform ritual sacrifice and worship Wenerva, the Goddess of Destruction. Their unforgiving culture have made them hostile, but deadly with both magic and steel.<br><br>" +
        "Racial skill: Absorb health from your target based on your damage.");
}

function halfelfInfo() {
    my.race = "Half Elf";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Half elves hail from the city of Kaedorn. They carry are a mixture of human and elven blood in their veins. Due to their multi-racial background, they have a blend of abilities and traits from both races. Since the Age of Shattering, they have managed to establish a city for themselves in an attempt to carve out their own unique identity and culture.<br><br>" +
        "Racial skill: Hybrid vigor snaps you free from stun and fear effects and rapidly restores health.");
}

function dwarfInfo() {
    my.race = "Dwarf";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Dwarves are a hardy race from the depths of Dunhoven, a subterranean city. Worship of Grynnhoven, the God of the Underworld, is powerfully woven into daily Dwarven life as each gem mined is seen as a divine blessing. Dwarf healers are renowned as some of the finest in all of Vandamor due to their natural wisdom. They are also stout warriors and thieves thanks to their rare gifts of strength, agility, and dexterity<br><br>" +
        "Racial skill: Your skin turns to granite, greatly reducing all damage taken.");
}

function gnomeInfo() {
    my.race = "Gnome";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Gnomes are a race of brilliant scholars, engineers, and tinkerers from Brindomir. Their passion for knowledge makes them excellent spellcasters, yet some are known to wield the steel on occasion. Their ingenuity always seems to yield a solution from nowhere in the thick of battle.<br><br>" +
        "Racial skill: All gnomes can trap their target in a Warp Field, sealing them from the field of combat. While trapped in a warp field, they are unable to fight or be fought. Gnomes are also immune to silence effects.");
}

function halflingInfo() {
    my.race = "Halfling";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Halflings are a race of pranksters, acrobats, and bandits from Aspen Grove. They are known to be among the most gifted scouts in all of Vandamor. They have a quirky ability to disappear at a moment's notice. They are also touted for their natural healing skills.<br><br>" +
        "Racial skill: Halflings have reduced run skill cooldown, gain experience faster, find more treasure, and have the ability to hide. While you are hidden, you may ambush targets for enhanced damage.");
}

function trollInfo() {
    my.race = "Troll";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Trolls are a race from the city of Slagnon. With very few exceptions, Trolls worship Megnemon, the God of Sacrifice, who believe that their God requires blood sacrifice in order to enjoy continued strength and prosperity as a race. They are a cannibalistic, warmongering race with astonishing resilience in battle. They are feared throughout Vandamor due to their super strength, stamina, and regeneration.<br><br>" +
        "Racial skill: Increased passive health regeneration.");
}

function ogreInfo() {
    my.race = "Ogre";
    refreshRaceButtons();
    D.getElementById("creationInfo").innerHTML = ("Ogres are a race from the city of Gorgek in. Firm belief in might makes right makes widespread worship of Trogmaar, the God of War, very common among the Ogres. Despite their bumbling intellects, they are superb warriors and Shadow Knights. Their strength and stamina are second to none, but they lack almost everything else.<br><br>" +
        "Racial skill: Ogres cannot be stunned.");
}
//character class info update panel
function warriorInfo(mute) {
    if ($("#warriorId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Warriors are defensive melee specialists. They have stun skills, attack debuffs, and defensive abilities that make them difficult to kill. They receive the highest natural hit point bonus among all classes. Warriors use fury as a resource to power their skills. You gain fury every time you take damage.<br><br>" +
        "Class orientation:<br>" +
        "Defensive Melee, Plate Armor<br><br>" +
        "Skill List:<br>" +
        "Kick, Slam, Avenging Blow, Enrage, Pummel, Subjugate, Furious Scorn, Triage, Decisive Blow, Hemorrhage, Absorb Spell, Intrepid Might, Bulwark, Frenzied Rampage, Shockwave");
    my.job = "Warrior";
    Cstr = 5;
    Csta = 15;
    Cwis = 0;
    Cint = 0;
    Cdex = 0;
    Cagi = 5;
    Ccha = 0;
    ccUpdates("warriorId", mute);
}

function monkInfo() {
    if ($("#monkId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Monks are offensive melee specialists. Monks combine attacks that generate spirit with attacks that expend spirit for deadly combinations. Their finishing moves, when executed properly, deliver overwhelming damage. Unlike most classes, monks can always rely on their bare fists in combat. Monks use spirit as a resource to power their skills. You gain spirit every time you use a skill that generates spirit.<br><br>" +
        "Class orientation:<br>" +
        "Offensive Melee, Healing, Leather Armor<br><br>" +
        "Skill List:<br>" +
        "Tiger Strike, Crane Kick, Eagle Strike, Feign Death, Windmill Kick, Stone Fist Reversal, Intimidation, Inner Peace, Cheetah Strike, Cobra Strike, Chakra Blast, Flying Kick, Ancestral Flurry, Dragon Strike");
    my.job = "Monk";
    Cstr = 10;
    Csta = 10;
    Cwis = 0;
    Cint = 0;
    Cdex = 5;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("monkId");
}

function rogueInfo() {
    if ($("#rogueId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Rogues are offensive melee specialists. In addition to their excellent melee damage, they also have good crowd control skills that stun, blind, and silence. Rogues rely on building technique points to deliver powerful combo finishers. You gain technique points every time you use a skill that generates technique points.<br><br>" +
        "Class orientation:<br>" +
        "Offensive Melee, Control, Chain Armor<br><br>" +
        "Skill List:<br>" +
        "Shadow Strike, Lacerate, Evade, Sonic Strike, Backstab, Cold Blood, Flash Powder, Hyper Strike, Illusive Mist, Stagger Shot, Widow Strike, Lobotomize, Ancient Will, Mirage Strike, Prowling Gash");
    my.job = "Rogue";
    Cstr = 0;
    Csta = 0;
    Cwis = 0;
    Cint = 0;
    Cdex = 15;
    Cagi = 10;
    Ccha = 0;
    ccUpdates("rogueId");
}

function paladinInfo() {
    if ($("#paladinId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Paladins are defensive hybrids with a combination of melee and spells. Their stuns, healing, and ability to lay hands makes them difficult to kill. Several of their skills make them proficient at fighting undead mobs. Many of their skills are shared with warriors and clerics. Paladins unlock spells at level 9.<br><br>" +
        "Class orientation:<br>" +
        "Defensive Hybrid Melee, Plate Armor<br><br>" +
        "Skill List:<br>" +
        "Lay Hands, Slam, Rebuke, Purge, Vengeance, Greater Healing, Holy Might, Valor, Ardent Judgment, Spirit Armor, Root, Yaulp, Fervent Prayer, Divine Providence, Flash of Light, Symbol of Marshan");
    my.job = "Paladin";
    Cstr = 5;
    Csta = 10;
    Cwis = 10;
    Cint = 0;
    Cdex = 0;
    Cagi = 5;
    Ccha = 0;
    ccUpdates("paladinId");
}

function rangerInfo() {
    if ($("#rangerId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Rangers are offensive hybrids with a combination of melee and spells. Rangers rely on bows to do most of their damage, though they use swords and spells as well. Among all classes, rangers have the best tracking, which helps find rare monsters. Their spells provide added utility including some damage, healing, and some crowd control. Many of their skills are shared with warriors and druids. Rangers unlock spells at level 9.<br><br>" +
        "Class orientation:<br>" +
        "Offensive Hybrid Melee, Chain Armor<br><br>" +
        "Skill List:<br>" +
        "Track, Kick, Rapid Shot, Counter Shot, Trueshot Arrow, Light Healing, Faerie Flame, Ignite, Thistlecoat, Snare, Shield of Brambles, Warder's Rift, Spirit of the Wolf, Volley Shot, Weapon Shield");
    my.job = "Ranger";
    Cstr = 5;
    Csta = 5;
    Cwis = 10;
    Cint = 0;
    Cdex = 10;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("rangerId");
}

function skInfo() {
    if ($("#skId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Shadow knights are balanced hybrids with pets that use a combination of melee and spells. Shadow Knights summon a skeleton pet to fight by their side. They have a skill called harm touch to instantly inflict large amounts of damage. They wield several powerful spells to aid them in battle, such as fear and life drain. Many of their skills are shared with warriors and necromancers. Shadow Knights unlock spells at level 9.<br><br>" +
        "Class orientation:<br>" +
        "Balanced Hybrid Melee, Pet, Plate Armor<br><br>" +
        "Skill List:<br>" +
        "Harm Touch, Crescent Strike, Death Strike, Gasping Frenzy, Summon Dead, Life Tap, Dooming Darkness, Fear, Siphon Strength, Heat Blood, Vampiric Embrace, Strengthen Dead, Resist Cold, Feign Death, Shadow Vortex");
    my.job = "Shadow Knight";
    Cstr = 5;
    Csta = 10;
    Cwis = 0;
    Cint = 10;
    Cdex = 0;
    Cagi = 5;
    Ccha = 0;
    ccUpdates("skId");
}

function bardInfo() {
    if ($("#bardId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Bards are utility hybrids that use the power of their songs to defeat their foes. Bard songs offer a lot of variety and can be used to achieve victory in a wide variety of circumstances. Their songs can lull monsters to sleep, inflict magical damage, slow your targets, and even charm a monster to fight for you. Bards also have a weak version of the tracking skill, which helps find rare monsters.<br><br>" +
        "Class orientation:<br>" +
        "Utility Hybrid, Pet, Plate Armor<br><br>" +
        "Skill List:<br>" +
        "Track, Chords of Dissonance, Chant of Battle, Accelerando, Hymn of Restoration, Song of the Sirens, Boastful Bellow, Elemental Rhythms, Lucid Lullaby, Consonant Chain, Dissension, Chorus of Clarity, Anthem De Arms, Euphonic Hymn, Shield of Songs, and Desperate Dirge");
    my.job = "Bard";
    Cstr = 0;
    Csta = 5;
    Cwis = 5;
    Cint = 5;
    Cdex = 5;
    Cagi = 0;
    Ccha = 10;
    ccUpdates("bardId");
}

function clericInfo() {
    if ($("#clericId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Clerics are defensive healers that have the best healing potential in the game. Clerics focus on stuns, buffs, healing, and magical damage to succeed in battle. They also have crowd control and utility spells to survive tough situations. They have several spells that punish undead and summoned minions.<br><br>" +
        "Class orientation:<br>" +
        "Defensive Healer, Plate Armor<br><br>" +
        "Skill List:<br>" +
        "Smite, Sound of Force, Superior Healing, Resolution, Binding Earth, Expel Corruption, Searing Revelation, Martyr's Blessing, Armor of Faith, Guardian Angel, Divine Sanctuary, Holy Wrath, Mark of Judgment, Symbol of Yentus, Benediction");
    my.job = "Cleric";
    Cstr = 0;
    Csta = 5;
    Cwis = 15;
    Cint = 5;
    Cdex = 0;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("clericId");
}

function druidInfo() {
    if ($("#druidId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Druids are offensive healers that command the forces of nature to achieve victory. Though they have strong healing skills, they are known for their ability to summon earthquakes, tornados, hurricanes, volcanos, and other natural phenomenon to assist them in battle. They also have strong root spells that twist vines around your opponents' feet, leaving them unable to physically attack. Druids also have the tracking skill which helps find rare monsters.<br><br>" +
        "Class orientation:<br>" +
        "Offensive Healer, Area Effect, Leather Armor<br><br>" +
        "Skill List:<br>" +
        "Track, Starfire, Drones of Doom, Greater Healing, Skin Like Nature, Tornado, Engulfing Roots, Shield of Spikes, Drifting Death, Spirit of the Wolf, Lightning Blast, Earthquake, Chloroplast, Hurricane, Sylvan Creep, Volcano");
    my.job = "Druid";
    Cstr = 0;
    Csta = 5;
    Cwis = 15;
    Cint = 5;
    Cdex = 0;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("druidId");
}

function shamanInfo() {
    if ($("#shamanId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Shamans are utility healers that focus on ancient voodoo magic, regeneration, poison, and disease. Among the healers they have the most vicious damage over time spells. They can summon a guardian spirit to fight by their side, though they are among the weakest pets in the game. Shamans bring a lot of utility to the table as well, with slows, freezes, and the ability to cannibalize for on-demand mana recovery.<br><br>" +
        "Class orientation:<br>" +
        "Utility Healer, Pet, Chain Armor<br><br>" +
        "Skill List:<br>" +
        "Frost Strike, Scourge, Greater Healing, Call of the Ancients, Guardian Spirit, Togor's Insects, Cannibalize, Poison Nova, Spirit of the Wolf, Enstill, Affliction, Reclaim Blood, Glacial Impact, Talisman of Trogmaar, Devouring Plague");
    my.job = "Shaman";
    Cstr = 0;
    Csta = 5;
    Cwis = 15;
    Cint = 5;
    Cdex = 0;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("shamanId");
}

function necromancerInfo() {
    if ($("#necromancerId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Necromancer are dark spellcasters that focus on re-animating the dead and commanding them in battle. They also specialize in damage-over-time spells, which are the best among all classes. They have the best fear spells in the game and the ability to explode monsters, whether they are alive or dead.<br><br>" +
        "Class orientation:<br>" +
        "Damage-over-Time Spellcaster, Pet, Cloth Armor<br><br>" +
        "Skill List:<br>" +
        "Bone Spirit, Invoke Death, Cascading Darkness, Invoke Fear, Drain Soul, Arch Shielding, Feign Death, Augment Death, Ignite Blood, Corpse Explosion, Bond of Death, Diamond Skin, Asystole, Detonate Soul, Howling Terror");
    my.job = "Necromancer";
    Cstr = 0;
    Csta = 0;
    Cwis = 5;
    Cint = 15;
    Cdex = 5;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("necromancerId");
}

function enchanterInfo() {
    if ($("#enchanterId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Enchanters are utility spellcasters that focus on charming monsters to fight for them in battle. They tilt the tables in battle by using mesmerize spells to control additional monsters and powerful stuns to keep them on the defensive. Slows and haste buffs help stack the odds in your favor. They can even enchant their weapon with magic to do additional damage. <br><br>" +
        "Class orientation:<br>" +
        "Utility Spellcaster, Pet, Cloth Armor<br><br>" +
        "Skill List:<br>" +
        "Chaos Flux, Gasping Embrace, Cajoling Whispers, Color Shift, Mesmerize, Discordant Barrier, Shiftless Deeds, Enchant Weapon, Adorning Grace, Alacrity, Gravity Flux, Mystic Rune, Tashania, Clarity, Enthrall");
    my.job = "Enchanter";
    Cstr = 0;
    Csta = 0;
    Cwis = 5;
    Cint = 5;
    Cdex = 5;
    Cagi = 0;
    Ccha = 10;
    ccUpdates("enchanterId");
}

function magicianInfo() {
    if ($("#magicianId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Magicians are offensive spellcasters that focus on pet mastery. They have the ability to summon four different elemental types: earth, air, fire, and frost. Each elemental has its own strengths and abilities. In addition, Magicians have an array of powerful spells at their disposal including firestorm, frozen orb, psionic storm, and a stasis field for crowd control.<br><br>" +
        "Class orientation:<br>" +
        "Offensive Spellcaster, Pet, Cloth Armor<br><br>" +
        "Skill List:<br>" +
        "Lava Bolt, Earth Elemental, Air Elemental, Fire Elemental, Frost Elemental, Shield of Lava, Firestorm, Phantom Plate, Frozen Orb, Burnout, Mana Shield, Elemental Armor, Psionic Storm, Reclaim Elements, Elemental Fury, Armageddon, Stasis Field, Altered State");
    my.job = "Magician";
    Cstr = 0;
    Csta = 0;
    Cwis = 5;
    Cint = 15;
    Cdex = 5;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("magicianId");
}

function wizardInfo() {
    if ($("#wizardId").hasClass("classDisabled") === true) {
        return;
    }
    D.getElementById("creationInfo").innerHTML = ("Wizards are offensive spellcasters that focus on directing powerful spells on single or multiple targets. Wizards have an arsenal of powerful spells including ice comet, Arcane Missiles, meteor, and chain lightning. They also have a few utility spells to help them keep their targets at bay including frost nova, mirror images, and deep freeze. Their direct spellpower is second to none, but they are the most fragile class.<br><br>" +
        "Class orientation:<br>" +
        "Offensive Spellcaster, Pure Damage, Cloth Armor<br><br>" +
        "Skill List:<br>" +
        "Ice Bolt, Charged Bolts, Frost Nova, Arcane Missiles, Vizier's Shielding, Fireball, Deep Freeze, Chain Lightning, Glacial Spike, Ice Block, Ice Comet, Counterspell, Harness Ether, Meteor, Mirror Images");
    my.job = "Wizard";
    Cstr = 0;
    Csta = 0;
    Cwis = 5;
    Cint = 15;
    Cdex = 5;
    Cagi = 0;
    Ccha = 0;
    ccUpdates("wizardId");
}

function ccUpdates(foo, mute) {
    statGenerate(mute);
    $NG.joblist.removeClass("ccActive").addClass("ccDisabled");
    D.getElementById(foo).className = 'raceClassButtonsOff joblist strongShadow ccActive';
}
// my.gender info update panel
function maleInfo(mute) {
    D.getElementById("creationInfo").innerHTML = ("Males receive a bonus to strength and stamina.");
    my.gender = "Male";
    Gstr = 5;
    Gsta = 5;
    Gwis = 0;
    D.getElementById('maleId').className = 'genderButtonsOff strongShadow ccActive';
    D.getElementById('femaleId').className = 'genderButtonsOff strongShadow ccDisabled';
    statGenerate(mute);
}

function femaleInfo() {
    D.getElementById("creationInfo").innerHTML = ("Females receive a bonus to wisdom and passive health regeneration.");
    my.gender = "Female";
    Gstr = 0;
    Gsta = 0;
    Gwis = 5;
    D.getElementById('femaleId').className = 'genderButtonsOff strongShadow ccActive';
    D.getElementById('maleId').className = 'genderButtonsOff strongShadow ccDisabled';
    statGenerate();
}
//refreshes character creation stat box
function statGenerate() {
    //generate base value
    D.getElementById("ccSTR").innerHTML = (my.str + "").fontcolor("#eeeecc");
    D.getElementById("ccSTA").innerHTML = (my.sta + "").fontcolor("#eeeecc");
    D.getElementById("ccAGI").innerHTML = (my.agi + "").fontcolor("#eeeecc");
    D.getElementById("ccDEX").innerHTML = (my.dex + "").fontcolor("#eeeecc");
    D.getElementById("ccWIS").innerHTML = (my.wis + "").fontcolor("#eeeecc");
    D.getElementById("ccINT").innerHTML = (my.intel + "").fontcolor("#eeeecc");
    D.getElementById("ccCHA").innerHTML = (my.cha + "").fontcolor("#eeeecc");
    //generate bonus
    D.getElementById("ccStr").innerHTML = strBonus();
    D.getElementById("ccSta").innerHTML = staBonus();
    D.getElementById("ccAgi").innerHTML = agiBonus();
    D.getElementById("ccDex").innerHTML = dexBonus();
    D.getElementById("ccWis").innerHTML = wisBonus();
    D.getElementById("ccInt").innerHTML = intBonus();
    D.getElementById("ccCha").innerHTML = chaBonus();
}

//calculate stat bonuses for race and my.gender - display to statBox via statGenerate()
function strBonus() {
    if ((parseInt(Gstr + Cstr)) <= 0) {
        var strBonusString = "";
    }
    if ((parseInt(Gstr + Cstr)) > 0) {
        var strBonusString = " +" + parseInt(Gstr + Cstr);
    }
    return strBonusString;
}

function staBonus() {
    if ((parseInt(Gsta + Csta)) <= 0) {
        var staBonusString = "";
    }
    if ((parseInt(Gsta + Csta)) > 0) {
        var staBonusString = " +" + parseInt(Gsta + Csta);
    }
    return staBonusString;
}

function agiBonus() {
    if (Cagi <= 0) {
        var agiBonusString = "";
    }
    if (Cagi > 0) {
        var agiBonusString = " +" + Cagi;
    }
    return agiBonusString;
}

function dexBonus() {
    if (Cdex <= 0) {
        var dexBonusString = "";
    }
    if (Cdex > 0) {
        var dexBonusString = " +" + Cdex;
    }
    return dexBonusString;
}

function wisBonus() {
    if ((parseInt(Gwis + Cwis)) <= 0) {
        var wisBonusString = "";
    }
    if ((parseInt(Gwis + Cwis)) > 0) {
        var wisBonusString = " +" + parseInt(Gwis + Cwis);
    }
    return wisBonusString;
}

function intBonus() {
    if (Cint <= 0) {
        var intBonusString = "";
    }
    if (Cint > 0) {
        var intBonusString = " +" + Cint;
    }
    return intBonusString;
}

function chaBonus() {
    if (Ccha <= 0) {
        var chaBonusString = "";
    }
    if (Ccha > 0) {
        var chaBonusString = " +" + Ccha;
    }
    return chaBonusString;
}
$("#lastName").on('keydown', function(e) {
	var key = e.keyCode;
	if((key>=65 && key<=90) || 
	key===8 ||
	key===46 ||
	(key>=35 && key<=37) ||
	key===39){
		var nameInput = $("#lastName");
		my.lastName = nameInput.val();
	}else{
		return false;
	}
});
$("#gameView").on('click', '#lastNameOK', function() {
    if ($("#lastName").val().length < 2) {
        return;
    }
	var name = $("#lastName").val().replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/g, '');
    my.lastName = name.charAt(0).toUpperCase() + name.slice(1);
    $("#lastNameWrap").css("display", "none");
    Chat("You shall now be known as " + my.name + " " + my.lastName + "!", 2);
    $("#myName").html(my.name + ' ' + my.lastName);
});
$("#gameView").on('click', '#lastNameCancel', function() {
    $("#lastNameWrap").css("display", "none");
    nameFocus = false;
});
$("#charnameinput").on('keydown', function(e) {
	var key = e.keyCode;
	if((key>=65 && key<=90) || 
	key===8 ||
	key===46 ||
	(key>=35 && key<=37) ||
	key===39){
		var nameInput = $("#charnameinput");
		my.name = nameInput.val();
	}else{
		return false;
	}
});

function creategenderValue(genderinput) {
    my.gender = genderinput.value;
}

function pulsateMob(Slot, color, d) {
    var anger = {
        val: 4
    };
    pulsate[Slot] = T.to(anger, .5, {
        val: 20,
        onUpdate: function() {
            glow(bmp[Slot], color, M.random() * 520)
        },
        repeat: -1,
        yoyo: true
    });
    T.delayedCall(d, function() {
        pulsate[Slot].kill();
        bmp[Slot].shadow = null;
    });
}
function glow(e, color, amount) {
    e.shadow = new C.Shadow(color, 5, 5, amount);
    var bounds = e.getBounds();
    e.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
}

function initBmpTint(Slot, mType, d) {
    var i = "#0f0";
    if (mType === "magic") {
        i = "#f0f"
    } else if (mType === "lightning") {
        i = "#fff"
    } else if (mType === "fire") {
        i = "#f80"
    } else if (mType === "cold") {
        i = "#0ff"
    }
    bmpTint[Slot][mType].name = mob[Slot].image;
    T.set(bmpTint[Slot][mType], {
        easel: {
            tint: i,
            tintAmount: .5
        }
    });
    tint(Slot, mType, d);
}

function tint(Slot, mType, d) {
    if (mType === 'physical' || !mType) {
        return;
    }
    if (isFirefox === true || isChrome === true || isOpera === true) {
        if (GLB.videoSetting === "High") {
            if (bmpTint[Slot][mType].name !== mob[Slot].image) {
                initBmpTint(Slot, mType, d)
            } else {
                tintTimer[Slot][mType].kill();
                bmpTint[Slot][mType].alpha = 1;
                tintTimer[Slot][mType] = T.delayedCall(d, function() {
                    bmpTint[Slot][mType].alpha = 0;
                });
            }
        }
    }
}

function loadingScreen() {
    T.set('#curtainfade', {
        display: 'block',
        opacity: 1
    });
	// cloudfront: '//d3t6yj0r8qins4.cloudfront.net/ng_logo_532x428.png'
	$("#bglogo").attr('src', '/images1/ng_logo_532x428.png');
	T.from('#bglogo', 1, {
		opacity: 0,
		ease: ez.lin
	});
    var x = M.ceil(M.random() * 79);
    if (myZone() === "Salubrin Forest" && my.difficulty === 1 && my.exp === 0) {
        x = 10;
    }
    var y = "Many flying creatures enjoy increased lightning resistance and immunity to root spells.";
    if (x === 2) {
        y = "Trolls enjoy a bonus to passive hit point regeneration, but they start with low fire resistance.";
    }
    if (x === 3) {
        y = "When you equip items with magic find, you are more likely to find rare treasures.";
    }
    if (x === 4) {
        y = "Many undead creatures are weak against fire attacks.";
    }
    if (x === 5) {
        y = "Giants are dangerous foes with a lot of hit points. They are tougher than their level indicates.";
    }
    if (x === 6) {
        y = "All halflings can hide, which prevents them from being ambushed while choosing a battle.";
    }
    if (x === 7) {
        y = "Monks are the only class that start with the ability to dual wield.";
    }
    if (x === 8) {
        y = "Beware that some foes are more deadly than their level may indicate.";
    }
    if (x === 9) {
        y = "Any class can wear any type of equipment, but there are penalties for wearing armor too heavy for your class. Run chance, casting speed, and global cooldown speed are all affected.";
    }
    if (x === 10) {
        y = "Killing multiple monsters without leaving combat yields bonus experience and increased magic find.";
    }
    if (x === 11) {
        y = "In addition to their natural super strength and stamina, ogres are also immune to stuns.";
    }
    if (x === 12) {
        y = "Dexterity affects your critical hit chance, your critical hit damage, and the weapon effect chance.";
    }
    if (x === 13) {
        y = "Stamina affects how many hit points you have. Some classes benefit more than others.";
    }
    if (x === 14) {
        y = "Agility reduces the amount of physical damage inflicted every time you are hit.";
    }
    if (x === 15) {
        y = "Males enjoy a minor boost to strength and stamina, while females have enhanced wisdom and passive health regeneration.";
    }
    if (x === 16) {
        y = "Some skills, like Shadow Knight's Gasping Frenzy, do more damage when your hit points are lower. The results may surprise you.";
    }
    if (x === 17) {
        y = "Few classes make any use of charisma in battle. Though many bards and enchanters manage to put their charm to good use.";
    }
    if (x === 18) {
        y = "You can unlock a total of 110 talent points by completing quests and leveling up. This allows for a wide variety of talent distribution strategies.";
    }
    if (x === 19) {
        y = "Some creatures will blind you in combat. When you are blind you cannot change targets and you will miss some attacks.";
    }
    if (x === 20) {
        y = "Some deadly foes know how to cast fear, a powerful spell that fills your mind with terror.";
    }
    if (x === 21) {
        y = "Many monsters cast deadly elemental magic that inflicts serious damage. Try to find armor with good resistances to aid you in such battles.";
    }
    if (x === 22) {
        y = "Conflagration will reduce your armor in addition to the damage it inflicts.";
    }
    if (x === 23) {
        y = "All passive health regeneration is reduced while you suffer from envenom.";
    }
    if (x === 24) {
        y = "Engulfing Darkness reduces your chance of successfully running from battle.";
    }
    if (x === 25) {
        y = "You receive a passive bonus to parry and riposte while dual wielding.";
    }
    if (x === 26) {
        y = "Unlike most magic spells, Static Field does damage based on your current health value.";
    }
    if (x === 27) {
        y = "Root is a deadly spell that temporarily disables running from battle.";
    }
    if (x === 28) {
        y = "If you're looking to spend your gold, improve your best equipment to +10 quality for powerful bonuses.";
    }
    if (x === 29) {
        y = "Wisdom affects healing magic power, magic regeneration, and magic damage reduction.";
    }
    if (x === 30) {
        y = "Strength affects the power of your melee attacks and skills.";
    }
    if (x === 31) {
        y = "Higher intelligence helps you learn your skills faster.";
    }
    if (x === 32) {
        y = "Your character data is automatically saved at key intervals. Camping is a surefire way to save your progress.";
    }
    if (x === 33) {
        y = "Bards play most of their songs without much strain, but some songs drain their mana due to their difficulty.";
    }
    if (x === 34) {
        y = "You can enable combat spam in the options. This allows you to see all skill damage messages in the combat log.";
    }
    if (x === 35) {
        y = "You must invest twenty points into a talent to receive its bonuses. Points from bonuses do not count.";
    }
    if (x === 36) {
        y = "Some classes have additional ways to escape from battle. Monk's Feign Death and Rogue's Evade are just two examples.";
    }
    if (x === 37) {
        y = "Some foes attack faster than others. Even though two foes may appear the same, one may be more dangerous in battle.";
    }
    if (x === 38) {
        y = "Paladins, Rangers, and Shadow Knights cannot use spells until level 9.";
    }
    if (x === 39) {
        y = "You cannot riposte, parry, or dodge special attacks like kick, backstab, bash, or shadow kick.";
    }
    if (x === 40) {
        y = "If you are casting when your target dies, most spells will automatically cancel. However, spells that do not require a primary target will continue casting.";
    }
    if (x === 41) {
        y = "Higher channeling makes it easier to complete spells while taking hits.";
    }
    if (x === 42) {
        y = "High level foes are more likely to disrupt your channeled spells.";
    }
    if (x === 43) {
        y = "Many kick abilities have a chance to disrupt channeled spells.";
    }
    if (x === 44) {
        y = "Some skills may be used when you are stunned and even feared.";
    }
    if (x === 45) {
        y = "When your pet is rooted, they are less likely to take hits for you.";
    }
    if (x === 46) {
        y = "At the merchant you can hold the CTRL key and left-click an item in your inventory to sell items more quickly.";
    }
    if (x === 47) {
        y = "Summoned pets are magical creatures that enjoy immunity to many spells.";
    }
    if (x === 48) {
        y = "If you root your target your pet will take all of the hits for you.";
    }
    if (x === 49) {
        y = "Monks generate spirit every time they land a critical hit.";
    }
    if (x === 50) {
        y = "Every button on your combat window can be dragged to a new location on your toolbar by holding left-click.";
    }
    if (x === 51) {
        y = "Higher conjuration will give your pets more hit points.";
    }
    if (x === 52) {
        y = "Intelligence increases magical damage for all classes except for Bards. Their songs are enhanced by charisma.";
    }
    if (x === 53) {
        y = "You don't have to use the mouse all the time. Try using the number keys instead! Check the options for hotkey details.";
    }
    if (x === 54) {
        y = "Some attacks hit multiple targets, like Ranger's Volley Shot or Monk's Dragon Strike. Sometimes monster positioning can affect your damage output.";
    }
    if (x === 55) {
        y = "Some bard songs have a longer duration than others. Accelerando extends the length of all songs started while it is active.";
    }
    if (x === 56) {
        y = "Bard songs take a few moments to begin. Don't change to another song until you see it begin!";
    }
    if (x === 57) {
        y = "Some bard songs drain your mana. Be careful about using these songs too often or you may become exhausted.";
    }
    if (x === 58) {
        y = "Enchanters and bards have the ability to charm a target to fight for them in battle. This skill can be dangerous, but also very rewarding.";
    }
    if (x === 59) {
        y = "Charisma extends the duration of many key bard and enchanter skills.";
    }
    if (x === 60) {
        y = "Clerics can cast a spell called Benediction, which is the most powerful stun in the game. It stuns all targets except your current target.";
    }
    if (x === 61) {
        y = "The chance to run from battle increases every time you fail.";
    }
    if (x === 62) {
        y = "Some mobs can cast Iron Maiden, a powerful short-duration damage shield. Thankfully, DoT spells are not affected.";
    }
    if (x === 63) {
        y = "It's a good idea to use a defensive skill when a foe uses enrage, frenzy, or amplify magic.";
    }
    if (x === 64) {
        y = "Some mobs will use defensive abilities like barrier and sanctuary. You may want to save your big cooldowns until it wears off.";
    }
    if (x === 65) {
        y = "Collect set items to unlock powerful bonuses.";
    }
    if (x === 66) {
        y = "Cleric's Mark of Judgement is a unique ability. While it is active, healing spells will damage all mobs. Certain other spells will benefit as well.";
    }
    if (x === 67) {
        y = "Frozen enemies take 25% more damage. Try to use your highest damage skills while your opponents are frozen.";
    }
    if (x === 68) {
        y = "The Wizard and the Magician can use a special type of freeze called an encasement. When you hit an encased mob the formation will shatter for a 50% damage bonus, though the freeze effect will end.";
    }
    if (x === 69) {
        y = "All flying mobs are immune to spells that immobilize them in place. Wizard's Frost Nova and all types of Root spells will have no effect.";
    }
    if (x === 70) {
        y = "Rangers, Paladins, Clerics, Druids, and Shaman are wisdom-based casters. This means that their mana pool is increased by their wisdom.";
    }
    if (x === 71) {
        y = "Bards, Necromancers, Enchanters, Magicians and Wizards are intelligence-based casters. This means that their mana pool is increased by their intelligence.";
    }
    if (x === 72) {
        y = "Fighting more mobs at once increases your magic find. The more mobs the better!";
    }
    if (x === 73) {
        y = "Hell and Nightmare difficulties drop your elemental and status resistances.";
    }
    if (x === 74) {
        y = "Monks automatically receive a 50% armor bonus for all armor they equip.";
    }
    if (x === 75) {
        y = "Rogues' backstab attack is unique due to its dependence on high agility for high damage.";
    }
    if (x === 76) {
        y = "Any class is free to equip any type of armor, but your run speed, skill speed, and casting speed all suffer as a result.";
    }
    if (x === 77) {
        y = "You can use the bank to swap items between characters. Rare treasures never have to go to waste.";
    }
    if (x === 78) {
        y = "To cancel a non-channeled spell, hit the space bar or simply click the cast bar. You can also use space bar to close all open windows!";
    }
    if (x === 79) {
        y = "Agility helps dodge, parry, and riposte work more often.";
    }
    if (location.protocol === 'http:') {
        y = "You're playing the trial version. Sign up for an account for more character slots, leaderboards, more content, and reliable data storage!";
    }
    var k = D.getElementById('loadingmessage');
    k.innerHTML = y;
    Chat(y);
    var tl = new TimelineLite,
        txt = new SplitText("#loadingmessage", {
            type: "words,chars"
        }),
        chars = txt.chars; //an array of all the divs that wrap each character
    var r1 = M.random();
    if (r1 > .75) {
        tl.staggerFrom(chars, .25, {
            rotationX: 90,
            ease: ez.lin
        }, .033);
    } else if (r1 > .5) {
        tl.staggerFrom(chars, .25, {
            rotationY: 90,
            ease: ez.lin
        }, .033);
    } else if (r1 > .25) {
        tl.staggerFrom(chars, .25, {
            scale: 0,
            ease: ez.lin
        }, .033);
    } else {
        tl.staggerFrom(chars, .25, {
            y: 40,
            opacity: 0,
            ease: ez.Qout
        }, .033);
    }
    T.to(k, 8, {
        startAt: {
            opacity: .25,
            visibility: "hidden",
            scale: .8
        },
        scale: 1,
        visibility: "visible",
        force3D: "auto"
    });
    T.to(k, 1, {
        opacity: 1,
    });
    T.to(k, 0, {
        color: "#fff",
    });

    function checkFade() {
        if ($("#curtainfade").css('display') === 'none') {
            T.to(k, 1, {
                opacity: 0
            });
        } else {
            T.delayedCall(1, checkFade);
        }
    }
    T.delayedCall(4, checkFade);
}

function showChar() {
    if (location.protocol === "http:") {
        if (firstEmptyCharacterSlot === 0) {
            Error("You cannot create anymore characters!");
            return;
        }
    } else {
        if ($(".characterActive:visible, .characterDisabled:visible").length >= 16) {
            Error("You cannot create anymore characters!");
            return;
        }
    }
    characterslot = firstEmptyCharacterSlot;
    maleInfo(true);
    humanInfo(true);
    warriorInfo();
    Cstr = 5;
    Csta = 15;
    Cwis = 0;
    Cint = 0;
    Cdex = 0;
    Cagi = 5;
    Ccha = 0;
    statGenerate(true);
    D.getElementById("createWindowId").style.display = 'block';
    setNormalMode();
    T.to('#characterSelectScreen', 0, {
        opacity: 0,
        onComplete: function() {
            (this.target).css('display', 'none');
            $("#ccBg").css('display', 'block');
            T.to('#ccBg', .5, {
                startAt: {
                    opacity: 0
                },
                opacity: 1,
                ease: ez.lin,
                onComplete: function() {
                    var x = $("#charnameinput")
                    x.focus();
                    my.name = x.val();
                    resetCharButtons();
                    g.view = "Create";
                }
            });
        }
    });
}

function resetCharButtons() {
    for (var i = 1; i <= 15; i++) {
        D.getElementById('characterslot' + i).className = "characterDisabled ";
    }
}

function hideChar() {
    playAudio('button_2');
    $("#ccBg").css({
        display: 'none',
        opacity: 0
    });
    $("#characterSelectScreen").css({
        display: 'block',
        opacity: 0
    });
    if (location.protocol === "http:") {
        loadAllCharacters();
        T.to("#characterSelectScreen", .5, {
            opacity: 1,
            ease: ez.lin,
            onComplete: function() {
                g.view = "Main";
            }
        });
    } else {
        loadCharacterSlot(firstEmptyCharacterSlot);
        loadServerCharacters();
    }
}

function createChar() {
    playAudio('button_2');
    if (location.protocol === 'http:') {
        if (!dev) {
            if (charactersFound >= 1) {
                QMsg("You can only have one character in local play.");
                QMsg("Try server mode to create more characters.");
                return;
            }
        }
    }
    resetCharButtons();
    my.difficulty = 1;
    my.lastName = "";
    my.level = 1;
    my.exp = 0;
    my.oneHandSlash = 0;
    my.twoHandSlash = 0;
    my.oneHandBlunt = 0;
    my.twoHandBlunt = 0;
    my.piercing = 0;
    my.handtohand = 1;
    my.defense = 1;
    my.offense = 1;
    my.dualWield = 0;
    my.doubleAttack = 0;
    my.dodge = 0;
    my.riposte = 0;
    my.parry = 0;
    my.alteration = 0;
    my.evocation = 0;
    my.conjuration = 0;
    my.abjuration = 0;
    my.channeling = 0;
    my.svpoison = 10;
    my.svmagic = 10;
    my.svlightning = 10;
    my.svcold = 10;
    my.svfire = 10;
    my.str += Cstr + Gstr;
    my.sta += Csta + Gsta;
    my.wis += Cwis + Gwis;
    my.intel += Cint;
    my.dex += Cdex;
    my.agi += Cagi;
    my.playtime = 0;
    my.deaths = 0;
    my.mobsSlain = 0;
    my.escapes = 0;
    my.totalGold = 0;
    my.uniquesFound = 0;
    my.raresFound = 0;
    my.magicFound = 0;
    my.upgrades = 0;
    my.raresSlain = 0;
    my.championsSlain = 0;
    my.epicQuests = 0;
    my.quests = 0;
    my.comboOverall = 0;
    my.comboPermafrost = 0;
    my.comboKedgeKeep = 0;
    my.comboSolB = 0;
    my.comboMistmoore = 0;
    my.comboLowerGuk = 0;
    my.comboCazicThule = 0;
    my.comboPlaneofFear = 0;
    my.comboPlaneofHate = 0;
    for (var i = 1; i <= 12; i++) {
        my['talent' + i] = 0;
    }
    //init equip/inventory
    initializeEQ(1);
    initializeInventory();
    //starting equipment
    if (location.protocol === "http:") {
        for (var i = 0; i <= 14; i++) {
            P.eq[i].req = 0;
            P.eq[i].flavorText = "";
        }
        if (my.job !== "Monk") {
            P.eq[12].damage = 3;
            P.eq[12].delay = 3600;
            P.eq[12].type = "slashed";
            P.eq[12].rarity = 0;
            P.eq[12].itemSlot = "weapons";
            P.eq[12].xPos = -576;
            P.eq[12].yPos = 0;
            P.eq[12].name = "Rusty Blade";
        }
        P.eq[13].damage = 1;
        P.eq[13].delay = 3000;
        P.eq[13].type = "punched";
        P.eq[13].armor = 0;
        P.eq[14].damage = 1;
        P.eq[14].delay = 30000;
        my.gold = 0;
        P.eq[6].rarity = 0;
        P.eq[6].type = "cloth";
        P.eq[6].itemSlot = "chest";
        P.eq[6].xPos = -256;
        P.eq[6].yPos = -256;
        P.eq[6].name = "Training Tunic";
        P.eq[6].armor = 1;
        if (my.job === "Warrior" || my.job === "Paladin" || my.job === "Shadow Knight") {
            P.eq[13].rarity = 0;
            P.eq[13].type = "shield";
            P.eq[13].itemSlot = "shield";
            P.eq[13].xPos = -768;
            P.eq[13].yPos = 0;
            P.eq[13].name = "Wooden Shield";
            P.eq[13].armor = 1;
        }
        if (my.job === "Necromancer" || my.job === "Enchanter" || my.job === "Magician" || my.job === "Wizard" || my.job === "Rogue") {
            P.eq[12].damage = 2;
            P.eq[12].delay = 2600;
            P.eq[12].type = "pierced";
            P.eq[12].rarity = 0;
            P.eq[12].itemSlot = "weapons";
            P.eq[12].xPos = -704;
            P.eq[12].yPos = 0;
            P.eq[12].name = "Rusty Dagger";
            if (my.job !== "Rogue") {
                P.eq[6].rarity = 0;
                P.eq[6].itemSlot = "chest";
                P.eq[6].xPos = -256;
                P.eq[6].yPos = -64;
                P.eq[6].name = "Apprentice Robe";
                P.eq[6].armor = 1;
            }
        }
        if (my.job === "Cleric" || my.job === "Druid" || my.job === "Shaman") {
            P.eq[12].type = "crushed";
            P.eq[12].damage = 4;
            P.eq[12].delay = 4400;
            P.eq[12].rarity = 0;
            P.eq[12].itemSlot = "weapons";
            P.eq[12].xPos = -640;
            P.eq[12].yPos = 0;
            P.eq[12].name = "Rusty Mace";
        }
        if (my.job === "Ranger") {
            P.eq[14].damage = 4;
            P.eq[14].delay = 4500;
            P.eq[14].type = "range";
            P.eq[14].rarity = 0;
            P.eq[14].itemSlot = "range";
            P.eq[14].xPos = -704;
            P.eq[14].yPos = -512;
            P.eq[14].name = "Cracked Bow";
        }
        if (my.job === "Monk") {
            P.eq[12].type = "punched";
            P.eq[13].type = "punched";
            P.eq[12].damage = 3 + (my.level * (7 / 50));
            P.eq[13].damage = 3 + (my.level * (7 / 50));
            P.eq[12].delay = 3000;
            P.eq[13].delay = 3000;
        }
    }
    // initialize my weapon skills
    if (my.job === "Warrior" || my.job === "Ranger" || my.job === "Paladin" || my.job === "Shadow Knight") {
        my.oneHandSlash = 1;
        my.twoHandSlash = 1;
        my.oneHandBlunt = 1;
        my.twoHandBlunt = 1;
    }
    if (my.job === "Rogue" || my.job === "Warrior" || my.job === "Ranger") {
        my.oneHandSlash = 1;
        my.piercing = 1;
        my.oneHandBlunt = 1;
    }
    if (my.job === "Bard") {
        my.oneHandSlash = 1;
        my.piercing = 1;
        my.oneHandBlunt = 1;
    }
    if (my.job === "Cleric" || my.job === "Shaman" || my.job === "Monk") {
        my.oneHandBlunt = 1;
        my.twoHandBlunt = 1;
    }
    if (my.job === "Monk") {
        my.dualWield = 1;
    }
    if (my.job === "Necromancer" || my.job === "Enchanter" || my.job === "Magician" || my.job === "Wizard") {
        my.piercing = 1;
        my.twoHandBlunt = 1;
        my.oneHandBlunt = 1;
    }
    if (my.job === "Druid") {
        my.oneHandBlunt = 1;
        my.twoHandBlunt = 1;
        my.oneHandSlash = 1;
    }
    // initialize racial casting values
    if (my.job === "Bard" || my.job === "Ranger" || my.job === "Necromancer" || my.job === "Enchanter" || my.job === "Magician" || my.job === "Druid" || my.job === "Shadow Knight" || my.job === "Shaman" || my.job === "Wizard" || my.job === "Paladin" || my.job === "Cleric") {
        my.alteration = 1;
        my.evocation = 1;
        my.conjuration = 1;
        my.abjuration = 1;
        my.channeling = 1;
    }
    // set racial resist bonuses set initial zone
    my.zone = "Edenburg";
    if (my.race === "Human") {
        my.svpoison = my.svpoison + 5;
        my.svlightning = my.svlightning + 5;
    }
    if (my.race === "Barbarian") {
        my.svcold = my.svcold + 10;
    }
    if (my.race === "Dwarf") {
        my.svpoison = my.svpoison + 5;
        my.svmagic = my.svmagic + 5;
    }
    if (my.race === "Erudite") {
        my.svfire = my.svfire + 5;
        my.svmagic = my.svmagic + 5;
        my.svlightning = my.svlightning - 5;
    }
    if (my.race === "Halfling") {
        my.svpoison = my.svpoison + 5;
        my.svlightning = my.svlightning - 5;
    }
    if (my.race === "Gnome") {
        my.svlightning = my.svlightning + 10;
    }
    if (my.race === "Troll") {
        my.svfire = my.svfire - 10;
    }
    if (my.race === "Ogre") {
        my.svmagic = my.svmagic - 5;
    }
    if (my.race === "High Elf" || my.race === "Wood Elf" || my.race === "Dark Elf" || my.race === "Half Elf") {
        my.svfire = my.svfire + 5;
        my.svcold = my.svcold + 5;
    }
    var x = my.zone;
    my.zoneN = x;
    my.zoneH = x;
    my.subzone = 0;
    my.subzoneN = 0;
    my.subzoneH = 0;
    levelUpStats();
    // max mp 100 if non-caster
    if (my.job === "Warrior" || my.job === "Monk" || my.job === "Rogue") {
        my.maxMp = 100;
        my.mp = 0;
    }
    //buttons
    for (var i = 0; i <= 23; i++) {
        Lmy['C' + i] = "";
    }
    my.ID = 0;
    if ($("#normalId").hasClass('ccActive') === true) {
        my.hardcoreMode = "false";
    } else {
        my.hardcoreMode = "true";
    }
    getUniqueID(); //char creation

}

function getUniqueID() {
    function do1() {
        if (location.protocol === "https:") {
            loadServerCharacters();
        }
        T.to('#ccBg', .5, {
            opacity: 0,
            onComplete: function() {
                (this.target).css('display', 'none');
                $("#characterSelectScreen").css({
                    display: 'block',
                    opacity: 0
                });
                T.to("#characterSelectScreen", .5, {
                    opacity: 1,
                    onComplete: function() {
                        if (location.protocol === "http:") {
                            loadAllCharacters();
                        }
                    }
                });
            }
        });
    }
    QMsg("Creating Character...");
    D.getElementById('ccBg').style.display = 'none';
    if (location.protocol === "http:") {
        $.ajax({
            url: "php/characterID.php",
            data: {
                charID: my.ID
            }
        }).done(function(data) {
            my.ID = data; //assigned from characterID.php
            initQ();
            saveGame();
            do1();
        }).fail(function() {
            Error('Unable to communicate with the server.<br>Please try again later.');
        });
    } else {
        $.ajax({
            data: {
                run: "createCharacter",
                my: my
            }
        }).done(function(data) {
            if (data !== '') { //error
                D.getElementById('ccBg').style.display = 'block';
				QMsg(data);
            } else {
                do1();
            }
        }).fail(function() {
            Error('Unable to communicate with the server.<br>Please try again later.');
        });
    }
}
$('#window3').on('mouseenter', '#window3a > li', function() {
    if (combatButtonDragMode === true) {
        $(this).css({
            boxShadow: "-25px 0 rgba(112, 192, 255, .25) inset, 25px 0 rgba(112, 192, 255, .25) inset, 0 -25px rgba(112, 192, 255, .25) inset, 0 25px rgba(112, 192, 255, .25) inset"
        });
    }
}).on('mouseleave', '#window3a > li', function() {
    if (combatButtonDragMode === true) {
        $(this).css({
            boxShadow: "1px 0 #000 inset, 0 1px 0 #000 inset, 0 -1px #000 inset, -1px 0 #000 inset"
        });
    }
});

function initSortables() {
    $("#window3a").swappable({
        items: '.buttons, .NCbuttons, .spacers',
        cursorAt: {
            top: -5
        },
        distance: 12,
        placeholder: "placeHolder",
        helper: "clone",
        opacity: 1,
        start: function() {
            playAudio('button_2');
            combatButtonDragMode = true;
        },
        stop: function() {
            saveButtonPositions();
            combatButtonDragMode = false;
            $("#window3a li").css({
                boxShadow: "1px 0 #000 inset, 0 1px 0 #000 inset, 0 -1px #000 inset, -1px 0 #000 inset"
            });
            moveLockedSkills();
        }
    });
    $("#window3a").disableSelection();
};



function updateCombatPanel() {
    var Str = "";
    if (my.job === "Warrior") {
        Str = '<li class="buttons nonglobal" id="avengingstrikeId"></li>' +
            '<li class="buttons warskill" id="slamId"></li>' +
            '<li class="buttons warskill" id="warriorkickId"></li>' +
            '<li class="buttons warskill" id="hemorrhageId"></li>' +
            '<li class="buttons warskill" id="shockwaveId"></li>' +
            '<li class="buttons nonglobal" id="pummelId"></li>' +
            '<li class="buttons nonglobal" id="subjugateId"></li>' +
            '<li class="buttons nonglobal" id="decisiveblowId"></li>' +
            '<li class="buttons warskill" id="absorbspellId"></li>' +
            '<li class="buttons nonglobal" id="frenziedrampageId"></li>' +
            '<li class="buttons nonglobal" id="enrageId"></li>' +
            '<li class="buttons warskill" id="furiousscornId"></li>' +
            '<li class="buttons warskill" id="triageId"></li>' +
            '<li class="buttons warskill" id="bulwarkId"></li>' +
            '<li class="buttons nonglobal" id="intrepidmightId"></li>';
    }
    if (my.job === "Monk") {
        Str = '<li class="buttons mnkskill" id="tigerstrikeId"></li>' +
            '<li class="buttons mnkskill" id="eaglestrikeId"></li>' +
            '<li class="buttons mnkskill" id="cheetahstrikeId"></li>' +
            '<li class="buttons mnkskill" id="cobrastrikeId"></li>' +
            '<li class="buttons mnkskill" id="dragonstrikeId"></li>' +
            '<li class="buttons mnkskill" id="cranekickId"></li>' +
            '<li class="buttons mnkskill" id="windmillkickId"></li>' +
            '<li class="buttons mnkskill" id="ancestralflurryId"></li>' +
            '<li class="buttons mnkskill" id="flyingkickId"></li>' +
            '<li class="buttons mnkskill" id="chakrablastId"></li>' +
            '<li class="buttons nonglobal" id="feigndeathId"></li>' +
            '<li class="buttons nonglobal" id="mendId"></li>' +
            '<li class="buttons nonglobal" id="stonefistsId"></li>' +
            '<li class="buttons nonglobal" id="intimidationId"></li>' +
            '<li class="buttons nonglobal" id="innerpeaceId"></li>';
    }
    if (my.job === "Rogue") {
        Str = '<li class="buttons rogskill" id="shadowstrikeId"></li>' +
            '<li class="buttons rogskill" id="sonicstrikeId"></li>' +
            '<li class="buttons rogskill" id="hyperstrikeId"></li>' +
            '<li class="buttons rogskill" id="widowstrikeId"></li>' +
            '<li class="buttons rogskill" id="miragestrikeId"></li>' +
            '<li class="buttons rogskill" id="lacerateId"></li>' +
            '<li class="buttons rogskill" id="backstabId"></li>' +
            '<li class="NCbuttons" id="roguehideId"></li>' +
            '<li class="buttons rogskill" id="staggershotId"></li>' +
            '<li class="buttons rogskill" id="lobotomizeId"></li>' +
            '<li class="buttons rogskill" id="prowlinggashId"></li>' +
            '<li class="buttons nonglobal" id="evadeId"></li>' +
            '<li class="buttons nonglobal" id="coldbloodId"></li>' +
            '<li class="buttons nonglobal" id="flashpowderId"></li>' +
            '<li class="buttons nonglobal" id="illusivemistId"></li>' +
            '<li class="buttons nonglobal" id="ancientwillId"></li>';
    }
    if (my.job === "Paladin") {
        Str = '<li class="buttons palskill" id="purgeId"></li>' +
            '<li class="buttons palskill" id="palslamId"></li>' +
            '<li class="buttons palskill" id="rebukeId"></li>' +
            '<li class="buttons palskill" id="vengeanceId"></li>' +
            '<li class="buttons nonglobal" id="layhandsId"></li>' +
            '<li class="buttons palskill" id="greaterhealingId"></li>' +
            '<li class="buttons palskill" id="holymightId"></li>' +
            '<li class="buttons palskill" id="palrootId"></li>' +
            '<li class="NCbuttons" id="valorId"></li>' +
            '<li class="NCbuttons" id="spiritarmorId"></li>' +
            '<li class="NCbuttons" id="divineprovidenceId"></li>' +
            '<li class="NCbuttons" id="symbolofryltanId"></li>' +
            '<li class="buttons palskill" id="ardentjudgment"></li>' +
            '<li class="buttons palskill" id="yaulpId"></li>' +
            '<li class="buttons palskill" id="cleanseId"></li>' +
            '<li class="buttons palskill" id="flashoflightId"></li>';
    }
    if (my.job === "Ranger") {
        Str = '<li class="buttons rngskill" id="rapidshotId"></li>' +
            '<li class="buttons rngskill" id="rangerkickId"></li>' +
            '<li class="buttons nonglobal" id="countershotId"></li>' +
            '<li class="buttons rngskill" id="trueshotarrowId"></li>' +
            '<li class="buttons rngskill" id="volleyshotId"></li>' +
            '<li class="buttons rngskill" id="lighthealingId"></li>' +
            '<li class="buttons rngskill" id="faerieflameId"></li>' +
            '<li class="NCbuttons" id="rangertrackId"></li>' +
            '<li class="NCbuttons" id="thistlecoatId"></li>' +
            '<li class="NCbuttons" id="feetlikecatId"></li>' +
            '<li class="NCbuttons" id="shieldofbramblesId"></li>' +
            '<li class="NCbuttons" id="rangersowId"></li>' +
            '<li class="buttons rngskill" id="igniteId"></li>' +
            '<li class="buttons rngskill" id="snareId"></li>' +
            '<li class="buttons rngskill" id="wardersrift"></li>' +
            '<li class="buttons nonglobal" id="weaponshieldId"></li>';
    }
    if (my.job === "Shadow Knight") {
        Str = '<li class="buttons shdskill" id="crescentcleaveId"></li>' +
            '<li class="buttons shdskill" id="shdslamId"></li>' +
            '<li class="buttons shdskill" id="deathstrikeId"></li>' +
            '<li class="buttons shdskill" id="gaspingfrenzyId"></li>' +
            '<li class="buttons nonglobal" id="harmtouchId"></li>' +
            '<li class="buttons shdskill" id="shdlifetapId"></li>' +
            '<li class="buttons shdskill" id="doomingdarknessId"></li>' +
            '<li class="buttons shdskill" id="heatbloodId"></li>' +
            '<li class="NCbuttons" id="summondeadId"></li>' +
            '<li class="NCbuttons" id="vampiricembraceId"></li>' +
            '<li class="NCbuttons" id="resistcoldId"></li>' +
            '<li class="buttons nonglobal" id="togglepetattackId"></li>' +
            '<li class="buttons nonglobal" id="strengthendeadId"></li>' +
            '<li class="buttons shdskill" id="shdfearId"></li>' +
            '<li class="buttons shdskill" id="siphonstrengthId"></li>' +
            '<li class="buttons shdskill" id="shdfeigndeathId"></li>' +
            '<li class="buttons shdskill" id="shadowvortexId"></li>';
    }
    if (my.job === "Bard") {
        Str = '<li class="buttons brdskill" id="chordsofdissonance"></li>' +
            '<li class="buttons brdskill" id="chantofbattle"></li>' +
            '<li class="buttons brdskill" id="accelerando"></li>' +
            '<li class="buttons brdskill" id="hymnofrestoration"></li>' +
            '<li class="buttons brdskill" id="songofthesirens"></li>' +
            '<li class="buttons brdskill" id="boastfulbellow"></li>' +
            '<li class="buttons brdskill" id="elementalrhythms"></li>' +
            '<li class="buttons brdskill" id="lucidlullaby"></li>' +
            '<li class="buttons brdskill" id="consonantchain"></li>' +
            '<li class="buttons brdskill" id="dissension"></li>' +
            '<li class="NCbuttons" id="rangertrackId"></li>' +
            '<li class="buttons brdskill" id="chorusofclarity"></li>' +
            '<li class="buttons brdskill" id="anthemdearms"></li>' +
            '<li class="buttons brdskill" id="euphonichymn"></li>' +
            '<li class="buttons brdskill" id="shieldofsongs"></li>' +
            '<li class="buttons brdskill" id="desperatedirge"></li>';
    }
    if (my.job === "Cleric") {
        Str = '<li class="buttons clrskill" id="smite"></li>' +
            '<li class="buttons clrskill" id="soundofforce"></li>' +
            '<li class="buttons clrskill" id="superiorhealing"></li>' +
            '<li class="buttons clrskill" id="bindingearth"></li>' +
            '<li class="buttons clrskill" id="expelcorruption"></li>' +
            '<li class="buttons clrskill" id="searingrevelation"></li>' +
            '<li class="buttons clrskill" id="martyrsblessing"></li>' +
            '<li class="NCbuttons" id="resolution"></li>' +
            '<li class="NCbuttons" id="armoroffaith"></li>' +
            '<li class="NCbuttons" id="divinesanctuary"></li>' +
            '<li class="NCbuttons" id="symbolofnaltron"></li>' +
            '<li class="buttons nonglobal" id="guardianangel"></li>' +
            '<li class="buttons clrskill" id="holywrath"></li>' +
            '<li class="buttons clrskill" id="markofjudgement"></li>' +
            '<li class="buttons clrskill" id="benediction"></li>';
    }
    if (my.job === "Druid") {
        Str = '<li class="buttons druskill" id="starfire"></li>' +
            '<li class="buttons druskill" id="dronesofdoom"></li>' +
            '<li class="buttons druskill" id="druhealing"></li>' +
            '<li class="buttons druskill" id="tornado"></li>' +
            '<li class="buttons druskill" id="engulfingroots"></li>' +
            '<li class="buttons druskill" id="driftingdeath"></li>' +
            '<li class="buttons druskill" id="lightningblast"></li>' +
            '<li class="NCbuttons" id="rangertrackId"></li>' +
            '<li class="NCbuttons" id="skinlikenature"></li>' +
            '<li class="NCbuttons" id="shieldofspikes"></li>' +
            '<li class="NCbuttons" id="drusow"></li>' +
            '<li class="NCbuttons" id="chloroplast"></li>' +
            '<li class="buttons druskill" id="earthquake"></li>' +
            '<li class="buttons druskill" id="hurricane"></li>' +
            '<li class="buttons druskill" id="sylvangrasp"></li>' +
            '<li class="buttons druskill" id="volcano"></li>';
    }
    if (my.job === "Shaman") {
        Str = '<li class="buttons shmskill" id="froststrike"></li>' +
            '<li class="buttons shmskill" id="scourge"></li>' +
            '<li class="buttons shmskill" id="shmhealing"></li>' +
            '<li class="buttons shmskill" id="togorsinsects"></li>' +
            '<li class="buttons nonglobal" id="togglepetattackId"></li>' +
            '<li class="buttons shmskill" id="cannibalize"></li>' +
            '<li class="buttons shmskill" id="enstill"></li>' +
            '<li class="buttons shmskill" id="poisonnova"></li>' +
            '<li class="NCbuttons" id="calloftheancients"></li>' +
            '<li class="NCbuttons" id="guardianspirit"></li>' +
            '<li class="NCbuttons" id="shmsow"></li>' +
            '<li class="NCbuttons" id="talismanofaltuna"></li>' +
            '<li class="buttons shmskill" id="affliction"></li>' +
            '<li class="buttons shmskill" id="reclaimblood"></li>' +
            '<li class="buttons shmskill" id="glacialimpact"></li>' +
            '<li class="buttons shmskill" id="devouringplague"></li>';
    }
    if (my.job === "Necromancer") {
        Str = '<li class="buttons necskill" id="bonespirit"></li>' +
            '<li class="buttons necskill" id="cascadingdarkness"></li>' +
            '<li class="buttons necskill" id="invokefear"></li>' +
            '<li class="buttons necskill" id="drainsoul"></li>' +
            '<li class="buttons necskill" id="feigndeath"></li>' +
            '<li class="buttons nonglobal" id="togglepetattackId"></li>' +
            '<li class="NCbuttons" id="invokedeath"></li>' +
            '<li class="NCbuttons" id="archshielding"></li>' +
            '<li class="buttons necskill" id="augmentdeath"></li>' +
            '<li class="buttons necskill" id="igniteblood"></li>' +
            '<li class="buttons necskill" id="corpseexplosion"></li>' +
            '<li class="buttons necskill" id="bondofdeath"></li>' +
            '<li class="buttons necskill" id="diamondskin"></li>' +
            '<li class="buttons necskill" id="asystole"></li>' +
            '<li class="buttons necskill" id="detonatesoul"></li>' +
            '<li class="buttons necskill" id="howlingterror"></li>';
    }
    if (my.job === "Enchanter") {
        Str = '<li class="buttons encskill" id="chaosflux"></li>' +
            '<li class="buttons encskill" id="gaspingembrace"></li>' +
            '<li class="buttons encskill" id="cajolingwhispers"></li>' +
            '<li class="buttons encskill" id="colorshift"></li>' +
            '<li class="buttons encskill" id="mesmerize"></li>' +
            '<li class="buttons encskill" id="shiftlessdeeds"></li>' +
            '<li class="buttons encskill" id="alacrity"></li>' +
            '<li class="buttons encskill" id="gravityflux"></li>' +
            '<li class="buttons encskill" id="mysticrune"></li>' +
            '<li class="buttons encskill" id="tashania"></li>' +
            '<li class="NCbuttons" id="discordantbarrier"></li>' +
            '<li class="NCbuttons" id="enchantweapon"></li>' +
            '<li class="NCbuttons" id="adorninggrace"></li>' +
            '<li class="NCbuttons" id="clarity"></li>' +
            '<li class="buttons encskill" id="enthrall"></li>';
    }
    if (my.job === "Magician") {
        Str = '<li class="buttons magskill" id="lavabolt"></li>' +
            '<li class="buttons magskill" id="firestorm"></li>' +
            '<li class="buttons magskill" id="frozenorb"></li>' +
            '<li class="buttons magskill" id="burnout"></li>' +
            '<li class="NCbuttons" id="earthelemental"></li>' +
            '<li class="NCbuttons" id="airelemental"></li>' +
            '<li class="NCbuttons" id="fireelemental"></li>' +
            '<li class="NCbuttons" id="frostelemental"></li>' +
            '<li class="NCbuttons" id="shieldoflava"></li>' +
            '<li class="NCbuttons" id="phantomplate"></li>' +
            '<li class="NCbuttons" id="elementalarmor"></li>' +
            '<li class="buttons magskill" id="manashield"></li>' +
            '<li class="buttons magskill" id="psionicstorm"></li>' +
            '<li class="buttons nonglobal" id="togglepetattackId"></li>' +
            '<li class="buttons magskill" id="reclaimelements"></li>' +
            '<li class="buttons magskill" id="elementalfury"></li>' +
            '<li class="buttons magskill" id="armageddon"></li>' +
            '<li class="buttons magskill" id="stasisfield"></li>' +
            '<li class="buttons magskill" id="alteredstate"></li>';
    }
    if (my.job === "Wizard") {
        Str = '<li class="buttons wizskill" id="icebolt"></li>' +
            '<li class="buttons wizskill" id="chargedbolts"></li>' +
            '<li class="buttons wizskill" id="frostnova"></li>' +
            '<li class="NCbuttons" id="viziersshielding"></li>' +
            '<li class="buttons wizskill" id="magicmissiles"></li>' +
            '<li class="buttons wizskill" id="fireball"></li>' +
            '<li class="buttons wizskill" id="deepfreeze"></li>' +
            '<li class="buttons wizskill" id="chainlightning"></li>' +
            '<li class="buttons wizskill" id="glacialspike"></li>' +
            '<li class="buttons wizskill" id="iceblock"></li>' +
            '<li class="buttons wizskill" id="icecomet"></li>' +
            '<li class="buttons nonglobal" id="counterspell"></li>' +
            '<li class="buttons nonglobal" id="harnessEther"></li>' +
            '<li class="buttons wizskill" id="meteor"></li>' +
            '<li class="buttons wizskill" id="mirrorimages"></li>';
    }
    Str += '<li class="spacers" id="Comspace1"></li>' +
        '<li class="spacers" id="Comspace2"></li>' +
        '<li class="spacers" id="Comspace3"></li>' +
        '<li class="spacers" id="Comspace4"></li>' +
        '<li class="spacers" id="Comspace5"></li>' +
        '<li class="spacers" id="Comspace6"></li>' +
        '<li class="spacers" id="Comspace7"></li>' +
        '<li class="spacers" id="Comspace8"></li>' +
        '<li class="spacers" id="Comspace9"></li>' +
        '<li class="spacers" id="Comspace10"></li>' +
        '<li class="spacers" id="Comspace11"></li>' +
        '<li class="spacers" id="Comspace12"></li>' +
        '<li class="spacers" id="Comspace13"></li>' +
        '<li class="spacers" id="Comspace14"></li>' +
        '<li class="spacers" id="Comspace15"></li>' +
        '<li class="spacers" id="Comspace16"></li>' +
        '<li class="spacers" id="Comspace17"></li>' +
        '<li class="spacers" id="Comspace18"></li>' +
        '<li class="spacers" id="Comspace19"></li>' +
        '<li class="spacers" id="Comspace20"></li>';
    $('#window3a').append(Str);
    initSortables();
    // window6
    var str2 = '';
    if (my.race === "Halfling") {
        if (my.job !== "Rogue") {
            str2 += '<li class="NCbuttons racebuttons" id="halflinghideId"></li>';
        }
    } else if (my.race === "Human") {
        str2 += '<li class="buttons nonglobal racebuttons" id="secondwindId"></li>';
    } else if (my.race === "Erudite") {
        str2 += '<li class="buttons nonglobal racebuttons" id="divineaegisId"></li>';
    } else if (my.race === "Barbarian") {
        str2 += '<li class="buttons nonglobal racebuttons" id="ancestralrampageId"></li>';
    } else if (my.race === "Wood Elf") {
        str2 += '<li class="buttons nonglobal racebuttons" id="tunaresglowId"></li>';
    } else if (my.race === "Half Elf") {
        str2 += '<li class="buttons nonglobal racebuttons" id="karanasinfusionId"></li>';
    } else if (my.race === "Dark Elf") {
        str2 += '<li class="buttons nonglobal racebuttons" id="sanguinetormentId"></li>';
    } else if (my.race === "Dwarf") {
        str2 += '<li class="buttons nonglobal racebuttons" id="granitevisageId"></li>';
    } else if (my.race === "Gnome") {
        str2 += '<li class="buttons nonglobal racebuttons" id="shortcircuitId"></li>';
    }
    if (str2 !== '') {
        $("#window6a").append(str2);
    }
}

function checkTitle() {
    var x = '';
    var z = 'PlaneofFear';
    if (P.Q[2][z] > 1) {
        if (my.job === "Warrior") {
            x = "Warlord";
        }
        if (my.job === "Rogue") {
            x = "Assassin";
        }
        if (my.job === "Monk") {
            x = "Grandmaster";
        }
        if (my.job === "Bard") {
            x = "Virtuoso";
        }
        if (my.job === "Ranger") {
            x = "Warder";
        }
        if (my.job === "Paladin") {
            x = "Crusader";
        }
        if (my.job === "Shadow Knight") {
            x = "Grave Lord";
        }
        if (my.job === "Druid") {
            x = "Hierophant";
        }
        if (my.job === "Cleric") {
            x = "High Priest";
        }
        if (my.job === "Shaman") {
            x = "Oracle";
        }
        if (my.job === "Necromancer") {
            x = "Warlock";
        }
        if (my.job === "Enchanter") {
            x = "Phantasmist";
        }
        if (my.job === "Magician") {
            x = "Arch Mage";
        }
        if (my.job === "Wizard") {
            x = "Sorcerer";
        }
    } else if (P.Q[1][z] > 1) {
        if (my.job === "Warrior") {
            x = "Myrmidon";
        }
        if (my.job === "Rogue") {
            x = "Blackguard";
        }
        if (my.job === "Monk") {
            x = "Master";
        }
        if (my.job === "Bard") {
            x = "Troubadour";
        }
        if (my.job === "Ranger") {
            x = "Outrider";
        }
        if (my.job === "Paladin") {
            x = "Knight";
        }
        if (my.job === "Shadow Knight") {
            x = "Revenant";
        }
        if (my.job === "Druid") {
            x = "Preserver";
        }
        if (my.job === "Cleric") {
            x = "Templar";
        }
        if (my.job === "Shaman") {
            x = "Luminary";
        }
        if (my.job === "Necromancer") {
            x = "Defiler";
        }
        if (my.job === "Enchanter") {
            x = "Beguiler";
        }
        if (my.job === "Magician") {
            x = "Conjurer";
        }
        if (my.job === "Wizard") {
            x = "Evoker";
        }
    } else if (P.Q[0][z] > 1) {
        if (my.job === "Warrior") {
            x = "Champion";
        }
        if (my.job === "Rogue") {
            x = "Rake";
        }
        if (my.job === "Monk") {
            x = "Disciple";
        }
        if (my.job === "Bard") {
            x = "Minstrel";
        }
        if (my.job === "Ranger") {
            x = "Pathfinder";
        }
        if (my.job === "Paladin") {
            x = "Cavalier";
        }
        if (my.job === "Shadow Knight") {
            x = "Reaver";
        }
        if (my.job === "Druid") {
            x = "Wanderer";
        }
        if (my.job === "Cleric") {
            x = "Vicar";
        }
        if (my.job === "Shaman") {
            x = "Mystic";
        }
        if (my.job === "Necromancer") {
            x = "Heretic";
        }
        if (my.job === "Enchanter") {
            x = "Illusionist";
        }
        if (my.job === "Magician") {
            x = "Elementalist";
        }
        if (my.job === "Wizard") {
            x = "Channeler";
        }
    }
    return x;
}

function setMinimumWeaponSpeed() {
    var x = 1000;
    var e = P.eq[12];
    if (e.type === "slashed" ||
        e.type === "pierced" ||
        e.type === "crushed" ||
        e.type === "punched") {
        x = 500;
    }
    minimumWeaponSpeed = x;
}

function setHighestElement() {
    var a = {
        'poison': g.poisonDamageEquip,
        'magic': magicDamageEquipTotal(),
        'lightning': g.lightningDamageEquip,
        'cold': g.coldDamageEquip,
        'fire': g.fireDamageEquip
    };
    var high = 'poison';
    var val = a.poison;
    for (var prop in a) {
        if (a[prop] > val) {
            high = prop;
            val = a[prop];
        };
    }
    return high;
}

function increaseBank() {
    for (var i = 900; i < 1080; i++) {
        P.bank[i] = {};
        for (var x = 0, len = g.key.length; x < len; x++) {
            P.bank[i][g.key[x]] = g.val[x];
        }
    }
}

function normalizedDamage(minDamage, skillName, multiplier) {
    //1h calc
    if (P.eq[12].type === "slashed" || P.eq[12].type === "crushed" || P.eq[12].type === "punched" || P.eq[12].type === "pierced") {
        weaponBonus = ~~((P.eq[12].damage / (totalHaste1())) * 12400);
        // 8/24 = // 33% (8/2400)*9100
        // 13/20 = // 66%
        // 20/20 = // 100% (24/2400)*9100 = 91
    } else { //2h calc
        weaponBonus = ~~((P.eq[12].damage / (totalHaste1())) * 6066); // (63/4200)*6066 = 91
    }
    if (P.eq[14].damage <= 1) {
        bowBonus = 0;
    } else {
        bowBonus = ~~((P.eq[14].damage / P.eq[14].delay) * 6066);
    }
}

function updateIcebolt() {
    $("#icebolt").css('backgroundPosition', '-300% 0');
    if (my.talent1 >= 20) {
        mType = 'lightning';
        $("#icebolt").css('backgroundPosition', '-400% 0');
    }
    if (my.talent10 >= 20) {
        mType = 'fire';
        $("#icebolt").css('backgroundPosition', '-700% 0');
    }
}

function setRacialSkillId() {
    racialSkillId = '';
    if (my.race === "Human") {
        racialSkillId = 'secondwindId';
    }
    if (my.race === "Erudite") {
        racialSkillId = 'divineaegisId';
    }
    if (my.race === "Barbarian") {
        racialSkillId = 'ancestralrampageId';
    }
    if (my.race === "Wood Elf") {
        racialSkillId = 'tunaresglowId';
    }
    if (my.race === "Half Elf") {
        racialSkillId = 'karanasinfusionId';
    }
    if (my.race === "Dark Elf") {
        racialSkillId = 'sanguinetormentId';
    }
    if (my.race === "Dwarf") {
        racialSkillId = 'granitevisageId';
    }
    if (my.race === "Gnome") {
        racialSkillId = 'shortcircuitId';
    }
    if (my.race === "Halfling") {
        racialSkillId = 'halflinghideId';
    }
}

function loadProcImage() {
    asset[112] = D.createElement('img');
    asset[113] = D.createElement('img');
    asset[212] = D.createElement('audio');
    asset[213] = D.createElement('audio');
    for (var i = 12; i <= 13; i++) {
        var x = asset[100 + i];
        x.src = "/images1/blank.png";
        var N = P.eq[i].name;
        if (N === "Ebony Blade" || N === "Spriggan's Blade") {
            x.src = "/images1/rootImage.png";
        } else if (N === "Baezil's Vortex" ||
            N === "Rathmonan's Vortex") {
            x.src = "/images1/lightningNova.png";
        } else if (N === "Flamebellow") {
            x.src = "/images1/fireNova.png";
        } else if (N === "Scimitar of the Mistwalker" ||
            N === "Scimitar of the Grovecaller" ||
            N === "Jysin's Blade of the Darkwind") {
            asset[114] = D.createElement('img');
            asset[114].src = "/images1/a white wolf.png";
        } else if (N === "Plankton Laced Greatsword") {
            x.src = "/images1/frostNova.png";
            asset[200 + i].src = soundLocation + "novaice." + audioExt;
        } else if (N === "Megnemon's Glacial Crook") {
            x.src = "/images1/glacialSpike.png";
            asset[200 + i].src = soundLocation + "icespike1." + audioExt;
        }
    }
}


function showIntro() {
    var canlogo = can('neverworks', 8, 640, 384, 400, 161, true);
    canlogo.x = 640;
    canlogo.y = 384;
    canlogo.alpha = 0;
    canlogo.image.onload = function() {
        var e = canlogo.getBounds();
        canlogo.cache(e.x, e.y, e.width, e.height);
        // presented by
        t1 = new C.Text("presented by", "15px Arial", "#fff");
        t1.set({
            x: 640,
            y: 150,
            textAlign: "center",
            alpha: 0
        });
        stage[8].addChild(t1);
        T.to(t1, 1, {
            alpha: 1
        });
        T.set(canlogo, {
            easel: {
                saturation: 0
            },
            rotation: 345,
            scaleX: 1,
            scaleY: 1
        });
        T.to(canlogo, 2, {
            delay: 1,
            rotation: 363,
            onComplete: function() {
                T.to(canlogo, .25, {
                    delay: 1,
                    rotation: 360
                });
            }
        });
        T.to(canlogo, 1, {
            delay: 1,
            alpha: 1,
            onComplete: function() {
                var e = canlogo.getBounds()
                canlogo.cache(e.x, e.y, e.width, e.height);
                T.to(canlogo, 1.5, {
                    easel: {
                        saturation: 1
                    },
                    delay: .5,
                    ease: ez.lin,
                    onComplete: function() {
                        T.to(canlogo, .5, {
                            delay: 1.5,
                            alpha: 0,
                            onComplete: function() {
                                cRem(8, canlogo);
                                intro2();
                            }
                        });
                        T.to(t1, .5, {
                            delay: 1.5,
                            alpha: 0,
                            onComplete: function() {
                                cRem(8, t1);
                            }
                        });
                    }
                });
            }
        });

        function intro2() {
            D.getElementById('introText2').style.display = 'none';
            canWorldMap = new C.Bitmap("//i.imgur.com/d1iYz2W.jpg");
            canWorldMap.image.onload = function() {
                canWorldMap.setTransform(640, 384, 1, 1, 0, 0, 0, 640, 384);
                canWorldMap.alpha = 0;
                stage[8].addChild(canWorldMap);
                T.to(canWorldMap, 60, {
                    scaleX: 2,
                    scaleY: 2,
                    x: 1120,
                    y: 200,
                    ease: ez.lin,
                    repeat: -1,
                    yoyo: true
                });
                T.to(canWorldMap, 2, {
                    alpha: 1,
                    ease: ez.sout
                });
                lore(
                    "The world of Vandamor. It has been more than 500 years since the Imperial Shattering, a period of global war throughout the world.<br><br>" +
                    "The outcome of the Great War led to a long-standing period of relative peace, cooperation, and prosperity among all of the nations.<br><br>" +
                    "However, in recent times, unusual levels of antagonism have concerned each nation's leaders. Some believe the chaos has been precipitated by the Gods themselves.<br><br>" +
                    "In ancient times the Gods were known to meddle in the national affairs of Vandamor. They stood to gain by acquiring more followers. The more worshippers a deity has, the more powerful their influence becomes.<br><br>" +
                    "Due to the period of relative calm, the people of Vandamor have been inculcated with complacency. A great hero is needed, in this chaotic time, to persevere, and re-establish peace in the world.<br><br>" +
                    "You have enlisted in the Edenburg Training Detachment to help quell the recent incursions. Edenburg is the capital of the human nation and a key port city in the old Imperial system.<br><br>" +
                    "Your adventure begins with Edenburg's perimeter under siege by orcs."
                );
                D.getElementById('introClick').style.display = 'block';
            }

            function showText(title, name) {
                if (g.view === "Intro") {
                    T.to('#credits', .5, {
                        opacity: 0,
                        onComplete: function() {
                            $('#creditTitle').text(title);
                            $('#creditName').text(name);
                            T.to('#credits', .5, {
                                delay: .5,
                                opacity: 1
                            });
                        }
                    });
                }
                if (g.view !== "Intro" || title === '') {
                    $("#credits").remove();
                }
            }
            var a = [
                "Producer", "Joe Leonard",
                "Lead Artist", "Jocelyn Sarvida",
                "Composer", "Matthew Pablo",
                "UI Artist", "Tan Kwok Yeow",
                "UI Artist", "J.W. Bjerk",
                "Programmer", "Joe Leonard",
                "Artist", "Fedor Sosnin",
                "Writer", "Joe Leonard",
                "Testing", "Stephen Mullers",
                "Consulting", "Chris Chegwidden",
                "", ""
            ];
            var t1 = 0;
            while (a.length > 0) {
                T.delayedCall(t1, showText, [a.shift(), a.shift()]);
                t1 += 6;
            }
        }
    }
}

var ng,
    JOB;

function enterWorld() {
    if (my.name == "" || my.name == null) {
        QMsg("You should create a character first.");
        return;
    }
    if ($("#enterworld").hasClass("disabled") === true) {
        return;
    }
    g.view = "Game";
    startTime = new Date();
    if (my.hardcoreMode === "true") {
        if (localStorage.getItem("HCbank4") === null) {
            initializeBank();
        } else {
            var zig = localStorage.getItem("HCbank4");
            P.bank = JSON.parse(zig);
            if (P.bank.length < 1080) {
                increaseBank();
            }
        }
    } else {
        if (localStorage.getItem("bank4") === null) {
            initializeBank();
        } else {
            var zig = localStorage.getItem("bank4");
            P.bank = JSON.parse(zig);
            if (P.bank.length < 1080) {
                increaseBank();
            }
        }
    }
    if (my.job === "Bard") {
        D.getElementById('spellbarlabel').innerHTML = "SINGING";
    }
    // quick variables
    noSpaceClass = my.job.replace(/ /g, '');
    ng = {};
    ng.zone = myZone();
    ng.subZone = mySubzone();
    JOB = {};
    JOB.hpTier = hpTier();
    JOB.mpTier = mpTier();
    JOB.mpClass = mpClass();
    JOB.jobType = jobType();
    JOB.DoneCD = noSpaceClass + "DoneCD";
    JOB.Cooldowns = noSpaceClass + "Cooldowns";
    JOB.SkillMap = noSpaceClass + "SkillMap";
    JOB.PhyEnh = noSpaceClass + "PhyEnh";
    JOB.MagEnh = noSpaceClass + "MagEnh";
    JOB.DotEnh = noSpaceClass + "DotEnh";
    JOB.CheckSkills = "check" + noSpaceClass + "Skills";
    // other stuff
    checkUndefined();
    loadClassSounds();
    loadProcImage();
    D.getElementById("tooltipname").style.display = 'block';
    NG.mobTraits.innerHTML = "";
    updateCombatPanel();
    my.title = checkTitle();
    if (location.protocol === 'http:') {
        g.difficulty = my.difficulty;
    } else {
        g.difficulty = srv.difficulty;
    }
    indoorStatus = checkDungeon(myZone());
    $NG.enterWorld2.css("display", "block");
    D.getElementById("myhpbardiv").style.visibility = "visible";
    $("#enterworld").addClass("disabled");
    $NG.enterWorld1.css({
        display: 'block',
        opacity: 1
    });
    D.getElementById("worldMap").style.top = "-900px";
    travelStatus = 1;
    g.oldExp = my.exp;
    drawExpBar(0);
    classSpriteLoaded = false;
    var classSprite = new Image();
    classSprite.src = "/images1/sprite" + my.job + "3.png";
    classSprite.onload = function() {
            classSpriteLoaded = true;
        }
        // initNG here
    initNG2();
    loadZone();
    var e1 = $('<div id="myName" class="strongShadow">').html(my.name + ' ' + my.lastName);
    $("#myhpbardiv").append(e1);
    // mana bar appearance
    var c1 = "#0066cc";
    var c2 = "#003388";
    if (my.job === "Monk" || my.job === "Rogue") {
        c1 = "#cc0";
        c2 = "#880";
    } else if (my.job === "Warrior") {
        c1 = "#cc6600";
        c2 = "#883300";
    }
    // mp bar
    mympbarId = new C.Stage(D.getElementById('mympbarId'));
    TweenLite.ticker.addEventListener("tick", mympbarId.update, mympbarId);
    var b = new C.Graphics();
    b.lf([c2, c1, c1, c2], [0, .3, .7, 1], 0, 0, 0, 14)
        .drawRect(0, 0, 192, 14);
    myMpBar = new C.Shape(b);
    mympbarId.addChild(myMpBar);
    // my mp text
    var adj = 0;
    if (isFirefox === true) {
        adj = 1;
    }
    myMpText = new C.Text("", "12px Arial", "#fff");
    myMpText.set({
        x: 96,
        y: 8,
        textAlign: "center",
        textBaseline: 'middle'
    });
    myMpText.shadow = new C.Shadow("#000", 1, 1, 0);
    mympbarId.addChild(myMpText);
    //adjust buttons:
    $NG.buttonreset.css("display", "none");
    setEquipValues();
    //gameplay stuffs
    highestElement = setHighestElement();
    setMinimumWeaponSpeed();
    setRacialSkillId();
    normalizedDamage();
    updatePunchDamage();
    dualWieldBonus = setDualWieldBonus();
    shieldBlockChance = setShieldBlockChance();
    if (my.job === "Wizard") {
        updateIcebolt();
    }
    my.patch = patchVersion;
    if (GLB.hideMenu === "On") {
        D.getElementById('window5Id').style.opacity = 0;
    }
    if (location.protocol === 'http:') {
        resetRepeatableQuests();
        maxBankSlots = 1080;
    } else {
		keepSessionAlive();
	}
    if (my.job === "Rogue" || my.job === "Monk") {
        mpType = "TP";
    } else if (my.job === "Warrior") {
        mpType = "Fury";
    }
    setCurrentAct();
    initNG();
    setClassStyles();
    GLB.lastCharacter = characterslot;
    if (my.level === 1 && my.exp === 0) {
        my.maxHp = g.maxHpFunct();
        my.hp = my.maxHp;
    }
    if (GLB.tooltipMode !== "Long") {
        $("#tooltipmsg").css("display", "none");
    }
    $("#createWindowId, #characterSelectScreen, #currencyIndicator").remove();
    var rect = new C.Graphics();
    rect.beginFill('#f00').drawRect(0, 0, 1280, 768).endFill();
    spellCurtain = new C.Shape(rect);
    spellCurtainStage.addChild(spellCurtain);
    spellCurtain.alpha = 0;
    var df = P.Q[diff()].GreaterFaydark === 0;
    if (df && myZone() === "Edenburg") {
        g.view = "Intro";
        D.getElementById('gameView').style.display = 'none';
        playMusic('Blackmoor Colossus');
        showIntro();
    }
    flashTalentNotify();
    if (location.protocol === 'http:') {
        loadWeaponSlashes();
        loadSkillImages();
    }
    g.leechRatio = .24;
    g.wraithRatio = .16;
    if (g.difficulty === 2) {
        g.leechRatio = .12;
        g.wraithRatio = .08;
    } else if (g.difficulty === 3) {
        g.leechRatio = .04;
        g.wraithRatio = .025;
    }
	$("#tooltipname, #ttItemName, .buttonsManage, .buttonsManageOff").css('display','block');
	$(".shadows").attr('src','//i.imgur.com/7bn79bN.png');
	loadMiscImages();
	if(!dev){
		window.onbeforeunload = function(){ 
			return "Are you sure you want to leave the game? Use /camp to save your game!"; 
		}
	}
}

function flashTalentNotify() {
    if (talentsRemaining() > 0) {
        T.to('#talentNotify', .5, {
            startAt: {
                opacity: 1
            },
            opacity: .5,
            ease: ez.lin,
            repeat: -1,
            yoyo: true
        });
        talentNotifyStatus = true;
    }
}

function setCurrentAct() {
    var x = myZone();
    if (x === "Aspen Grove" ||
        x === "Braxxen's Bastille" ||
        x === "Kordata Marshlands" ||
        x === "Arcturin's Crypt") {
        viewingAct = 2;
    } else if (x === "Artremia" ||
        x === "Fahlnir Citadel" ||
        x === "Kordata Ruins" ||
        x === "Temple of Prenssor") {
        viewingAct = 3;
    } else if (x === "Fenwoven" ||
        x === "Viston's Redoubt" ||
        x === "Galeblast Fortress" ||
        x === "Ashenflow Peak" ||
        x === "Dire Sanctum" ||
        x === "Nimgaul") {
        viewingAct = 4;
    }
}
$(function() {
    $("#window5Id").on('mouseenter', function() {
        T.to(D.getElementById('window5Id'), .2, {
            opacity: 1
        });
    }).on('mouseleave', function() {
        if (GLB.hideMenu === "On") {
            T.to(D.getElementById('window5Id'), .2, {
                opacity: 0
            });
        }
    });
});

function classColor() {
    if (location.protocol === "http:") {
        if (my.job !== "Shadow Knight") {
            return my.job;
        } else {
            return "ShadowKnight";
        }
    } else {
        if ($("#myjob" + characterslot).text() !== "Shadow Knight") {
            return $("#myjob" + characterslot).text();
        } else {
            return "ShadowKnight";
        }
    }
}

function parseItem(d, len, a) {
    for (var i = 0; i < len; i++) {
        P[d][i].abjuration = a.shift() * 1;
        P[d][i].absorbCold = a.shift() * 1;
        P[d][i].absorbFire = a.shift() * 1;
        P[d][i].absorbLightning = a.shift() * 1;
        P[d][i].absorbMagic = a.shift() * 1;
        P[d][i].absorbPoison = a.shift() * 1;
        P[d][i].agi = a.shift() * 1;
        P[d][i].allResist = a.shift() * 1;
        P[d][i].allSkills = a.shift() * 1;
        P[d][i].allStats = a.shift() * 1;
        P[d][i].alteration = a.shift() * 1;
        P[d][i].armor = a.shift() * 1;
        P[d][i].attack = a.shift() * 1;
        P[d][i].castingHaste = a.shift() * 1;
        P[d][i].cha = a.shift() * 1;
        P[d][i].channeling = a.shift() * 1;
        P[d][i].cold = a.shift() * 1;
        P[d][i].coldDamage = a.shift() * 1;
        P[d][i].conjuration = a.shift() * 1;
        P[d][i].critChance = a.shift() * 1;
        P[d][i].critDamage = a.shift() * 1;
        P[d][i].damage = a.shift() * 1;
        P[d][i].defense = a.shift() * 1;
        P[d][i].delay = a.shift() * 1;
        P[d][i].dex = a.shift() * 1;
        P[d][i].dodge = a.shift() * 1;
        P[d][i].doubleAttack = a.shift() * 1;
        P[d][i].dualWield = a.shift() * 1;
        P[d][i].enhanceAll = a.shift() * 1;
        P[d][i].enhanceCold = a.shift() * 1;
        P[d][i].enhanceFire = a.shift() * 1;
        P[d][i].enhanceLightning = a.shift() * 1;
        P[d][i].enhanceMagic = a.shift() * 1;
        P[d][i].enhancePhysical = a.shift() * 1;
        P[d][i].enhancePoison = a.shift() * 1;
        P[d][i].enhancedArmor = a.shift() * 1;
        P[d][i].enhancedDamage = a.shift() * 1;
        P[d][i].evocation = a.shift() * 1;
        P[d][i].expFind = a.shift() * 1;
        P[d][i].fear = a.shift() * 1;
        P[d][i].fireDamage = a.shift() * 1;
        P[d][i].flavorText = a.shift();
        P[d][i].globalHaste = a.shift() * 1;
        P[d][i].goldFind = a.shift() * 1;
        P[d][i].handtohand = a.shift() * 1;
        P[d][i].haste = a.shift() * 1;
        P[d][i].hp = a.shift() * 1;
        P[d][i].hpKill = a.shift() * 1;
        P[d][i].hpRegen = a.shift() * 1;
        P[d][i].ias = a.shift() * 1;
        P[d][i].intel = a.shift() * 1;
        P[d][i].itemSlot = a.shift();
        P[d][i].leech = a.shift() * 1;
        P[d][i].lightRadius = a.shift() * 1;
        P[d][i].lightningDamage = a.shift() * 1;
        P[d][i].magMit = a.shift() * 1;
        P[d][i].magicDamage = a.shift() * 1;
        P[d][i].mp = a.shift() * 1;
        P[d][i].mpKill = a.shift() * 1;
        P[d][i].mpRegen = a.shift() * 1;
        P[d][i].name = a.shift();
        P[d][i].offense = a.shift() * 1;
        P[d][i].oneHandBlunt = a.shift() * 1;
        P[d][i].oneHandSlash = a.shift() * 1;
        P[d][i].parry = a.shift() * 1;
        P[d][i].phyMit = a.shift() * 1;
        P[d][i].physicalDamage = a.shift() * 1;
        P[d][i].piercing = a.shift() * 1;
        P[d][i].poisonDamage = a.shift() * 1;
        P[d][i].proc = a.shift();
        P[d][i].quality = a.shift() * 1;
        P[d][i].rarity = a.shift() * 1;
        P[d][i].req = a.shift() * 1;
        P[d][i].resistCold = a.shift() * 1;
        P[d][i].resistFire = a.shift() * 1;
        P[d][i].resistLightning = a.shift() * 1;
        P[d][i].resistMagic = a.shift() * 1;
        P[d][i].resistPoison = a.shift() * 1;
        P[d][i].riposte = a.shift() * 1;
        P[d][i].runSpeed = a.shift() * 1;
        P[d][i].silence = a.shift() * 1;
        P[d][i].sta = a.shift() * 1;
        P[d][i].str = a.shift() * 1;
        P[d][i].stun = a.shift() * 1;
        P[d][i].thorns = a.shift() * 1;
        P[d][i].twoHandBlunt = a.shift() * 1;
        P[d][i].twoHandSlash = a.shift() * 1;
        P[d][i].type = a.shift();
        P[d][i].upgrade = a.shift() * 1;
        P[d][i].weight = a.shift() * 1;
        P[d][i].wis = a.shift() * 1;
        P[d][i].wraith = a.shift() * 1;
        P[d][i].xPos = a.shift() * 1;
        P[d][i].yPos = a.shift() * 1;
    }
}
$(".chatLogs").on('mousedown',function(){
	chatVerticalDrag = true;
}).on('mouseup',function(){
	chatVerticalDrag = false;
});
function reloadPage(d){
	if(d===undefined){
		d = 5000;
	}
	setTimeout(function() {
		window.onbeforeunload = null;
		location.reload();
	}, d);
}
$(function() {
    $("#characterSelectScreen").on('click', '#enterworld', function() {
        if (location.protocol === "http:") {
            if (my.hardcoreMode === "true") {
                if (my.deaths > 0) {
                    QMsg(my.name + " has been slain.");
                } else {
                    enterWorld();
                }
            } else {
                enterWorld();
            }
        } else { // server loads character then enters world
            var name = $("#characterslot" + characterslot).children().first().text();
			if(!name){
				return;
			}
            $('#characterSelectScreen').remove();
            QMsg("Loading data: "+name+"");
            $.ajax({
                url: 'php/loadData1.php',
                data: {
                    run: "loadItem",
                    name: name
                }
            }).done(function(data) {
                if (data == 'false') {
                    QMsg("Your previous character has not timed out yet.", 0, 0, 15000);
                    QMsg("Use Camp when you're done playing your character.", 0, 0, 15000);
                } else if (data==''){
					return;
				} else {
                    var a = data.split("|");
                    a.pop();
                    var loops = a.length / 94;
                    parseItem('item', loops, a);
                    srv.item = true;
                    // load character data
                    $.ajax({
                        url: 'php/loadData1.php',
                        data: {
                            run: "loadMy",
                            name: name,
                            ng: 'false'
                        }
                    }).done(function(data) {
						if(data == "Your session has expired."){
							Error(data);
                            reloadPage();
							return;
						}
                        if (data == 'down') {
                            Error("The server is down for maintenance. Please try again later.");
                            reloadPage();
                            return;
                        }
                        if (data == "DEAD") {
                            Error("This character was slain and cannot be revived.");
                            Error("Rest in peace, " + name + ".");
                            reloadPage();
                            return;
                        }
                        if (data == "Account has been suspended.") {
                            Error(data);
                            reloadPage();
                            return;
                        }
                        if (data == "Account has been banned.") {
                            Error(data);
                            reloadPage();
                            return;
                        }
                        var a = data.split("|");
                        a.pop();
                        my.name = a.shift();
                        my.abjuration = a.shift() * 1;
                        my.agi = a.shift() * 1;
                        my.alteration = a.shift() * 1;
                        my.cha = a.shift() * 1;
                        my.championsSlain = a.shift() * 1;
                        my.channeling = a.shift() * 1;
                        my.conjuration = a.shift() * 1;
                        my.deaths = a.shift() * 1;
                        my.defense = a.shift() * 1;
                        my.dex = a.shift() * 1;
                        my.difficulty = a.shift() * 1;
                        my.dodge = a.shift() * 1;
                        my.doubleAttack = a.shift() * 1;
                        my.dualWield = a.shift() * 1;
                        my.epicQuests = a.shift() * 1;
                        my.escapes = a.shift() * 1;
                        my.evocation = a.shift() * 1;
                        my.exp = a.shift() * 1;
                        my.gender = a.shift();
                        my.gold = a.shift() * 1;
                        my.handtohand = a.shift() * 1;
                        my.hardcoreMode = a.shift();
                        my.hp = a.shift() * 1;
                        my.intel = a.shift() * 1;
                        my.job = a.shift();
                        my.lastName = a.shift();
                        my.level = a.shift() * 1;
                        my.magicFound = a.shift() * 1;
                        my.maxHp = a.shift() * 1;
                        my.maxMp = a.shift() * 1;
                        my.mobsSlain = a.shift() * 1;
                        my.mp = a.shift() * 1;
                        my.offense = a.shift() * 1;
                        my.oneHandBlunt = a.shift() * 1;
                        my.oneHandSlash = a.shift() * 1;
                        my.parry = a.shift() * 1;
                        my.patch = a.shift();
                        my.piercing = a.shift() * 1;
                        my.playtime = a.shift() * 1;
                        my.quests = a.shift() * 1;
                        my.race = a.shift();
                        my.raresFound = a.shift() * 1;
                        my.riposte = a.shift() * 1;
                        my.setFound = a.shift() * 1;
                        my.sta = a.shift() * 1;
                        my.story = a.shift();
                        my.str = a.shift() * 1;
                        my.subzone = a.shift() * 1;
                        my.subzoneN = a.shift() * 1;
                        my.subzoneH = a.shift() * 1;
                        my.svcold = a.shift() * 1;
                        my.svfire = a.shift() * 1;
                        my.svlightning = a.shift() * 1;
                        my.svmagic = a.shift() * 1;
                        my.svpoison = a.shift() * 1;
                        my.talent1 = a.shift() * 1;
                        my.talent2 = a.shift() * 1;
                        my.talent3 = a.shift() * 1;
                        my.talent4 = a.shift() * 1;
                        my.talent5 = a.shift() * 1;
                        my.talent6 = a.shift() * 1;
                        my.talent7 = a.shift() * 1;
                        my.talent8 = a.shift() * 1;
                        my.talent9 = a.shift() * 1;
                        my.talent10 = a.shift() * 1;
                        my.talent11 = a.shift() * 1;
                        my.talent12 = a.shift() * 1;
                        my.title = a.shift();
                        my.totalGold = a.shift() * 1;
                        my.twoHandBlunt = a.shift() * 1;
                        my.twoHandSlash = a.shift() * 1;
                        my.uniquesFound = a.shift() * 1;
                        my.upgrades = a.shift() * 1;
                        my.wis = a.shift() * 1;
                        my.zone = a.shift();
                        my.zoneH = a.shift();
                        my.zoneN = a.shift();
                        my.comboOverall = a.shift() * 1;
                        my.comboMistmoore = a.shift() * 1;
                        my.comboLowerGuk = a.shift() * 1;
                        my.comboCazicThule = a.shift() * 1;
                        my.comboKedgeKeep = a.shift() * 1;
                        my.comboPermafrost = a.shift() * 1;
                        my.comboSolB = a.shift() * 1;
                        my.comboPlaneofHate = a.shift() * 1;
                        my.comboPlaneofFear = a.shift() * 1;
                        my.raresSlain = a.shift() * 1;
                        my.views = a.shift() * 1;
                        my.difficulty = srv.difficulty;
                        save.my('local');
                        srv.my = true;
                        checkEnterWorld();
                        loadSkillImages();
                    }).fail(function() {
                        QMsg("Server Error! Failed to load character values.");
                    });
                    // load equipment
                    $.ajax({
                        url: 'php/loadData1.php',
                        data: {
                            run: "loadEq",
                            name: name
                        }
                    }).done(function(data) {
                        var a = data.split("|");
                        a.pop();
                        var loops = a.length / 94;
                        parseItem('eq', loops, a);
                        srv.eq = true;
                        checkEnterWorld();
                        loadWeaponSlashes();
                    }).fail(function() {
                        QMsg("Server Error! Failed to load equipment values.");
                    });
                    $.ajax({
                        url: 'php/loadData1.php',
                        data: {
                            run: "loadQ",
                            diff: (my.difficulty - 1),
                            name: name
                        }
                    }).done(function(data) {
                        var a = data.split("|");
                        a.pop();
                        P.Q = [];
						if(a.length < 420){
							QMsg("Server Error! Failed to load quest values.");
							reloadPage();
							return;
						}
                        for (var i = 0; i <= 2; i++) {
                            P.Q[i] = {};
                            P.Q[i].BB1 = a.shift() * 1;
                            P.Q[i].BB2 = a.shift() * 1;
                            P.Q[i].BB3 = a.shift() * 1;
                            P.Q[i].BB4 = a.shift() * 1;
                            P.Q[i].Befallen = a.shift() * 1;
                            P.Q[i].BF1 = a.shift() * 1;
                            P.Q[i].BF2 = a.shift() * 1;
                            P.Q[i].BF3 = a.shift() * 1;
                            P.Q[i].BF4 = a.shift() * 1;
                            P.Q[i].Blackburrow = a.shift() * 1;
                            P.Q[i].CastleMistmoore = a.shift() * 1;
                            P.Q[i].CazicThule = a.shift() * 1;
                            P.Q[i].CB1 = a.shift() * 1;
                            P.Q[i].CB2 = a.shift() * 1;
                            P.Q[i].CB3 = a.shift() * 1;
                            P.Q[i].CB4 = a.shift() * 1;
                            P.Q[i].CB5 = a.shift() * 1;
                            P.Q[i].CM1 = a.shift() * 1;
                            P.Q[i].CM2 = a.shift() * 1;
                            P.Q[i].CM3 = a.shift() * 1;
                            P.Q[i].CM4 = a.shift() * 1;
                            P.Q[i].CM5 = a.shift() * 1;
                            P.Q[i].CM6 = a.shift() * 1;
                            P.Q[i].Crushbone = a.shift() * 1;
                            P.Q[i].CT1 = a.shift() * 1;
                            P.Q[i].CT2 = a.shift() * 1;
                            P.Q[i].CT3 = a.shift() * 1;
                            P.Q[i].CT4 = a.shift() * 1;
                            P.Q[i].CT5 = a.shift() * 1;
                            P.Q[i].ER1 = a.shift() * 1;
                            P.Q[i].ER2 = a.shift() * 1;
                            P.Q[i].ER3 = a.shift() * 1;
                            P.Q[i].ER4 = a.shift() * 1;
                            P.Q[i].ER5 = a.shift() * 1;
                            P.Q[i].EstateofUnrest = a.shift() * 1;
                            P.Q[i].GF1 = a.shift() * 1;
                            P.Q[i].GreaterFaydark = a.shift() * 1;
                            P.Q[i].KedgeKeep = a.shift() * 1;
                            P.Q[i].KK1 = a.shift() * 1;
                            P.Q[i].KK2 = a.shift() * 1;
                            P.Q[i].KK3 = a.shift() * 1;
                            P.Q[i].KK4 = a.shift() * 1;
                            P.Q[i].KK5 = a.shift() * 1;
                            P.Q[i].KK6 = a.shift() * 1;
                            P.Q[i].KK7 = a.shift() * 1;
                            P.Q[i].KK8 = a.shift() * 1;
                            P.Q[i].LesserFaydark = a.shift() * 1;
                            P.Q[i].LF1 = a.shift() * 1;
                            P.Q[i].LF2 = a.shift() * 1;
                            P.Q[i].LG1 = a.shift() * 1;
                            P.Q[i].LG2 = a.shift() * 1;
                            P.Q[i].LG3 = a.shift() * 1;
                            P.Q[i].LG4 = a.shift() * 1;
                            P.Q[i].LG5 = a.shift() * 1;
                            P.Q[i].LG6 = a.shift() * 1;
                            P.Q[i].LowerGuk = a.shift() * 1;
                            P.Q[i].NagafensLair = a.shift() * 1;
                            P.Q[i].Najena = a.shift() * 1;
                            P.Q[i].NJ1 = a.shift() * 1;
                            P.Q[i].NJ2 = a.shift() * 1;
                            P.Q[i].NJ3 = a.shift() * 1;
                            P.Q[i].NJ4 = a.shift() * 1;
                            P.Q[i].NJ5 = a.shift() * 1;
                            P.Q[i].NL1 = a.shift() * 1;
                            P.Q[i].NL2 = a.shift() * 1;
                            P.Q[i].NL3 = a.shift() * 1;
                            P.Q[i].NL4 = a.shift() * 1;
                            P.Q[i].NL5 = a.shift() * 1;
                            P.Q[i].NL6 = a.shift() * 1;
                            P.Q[i].NL7 = a.shift() * 1;
                            P.Q[i].NL8 = a.shift() * 1;
                            P.Q[i].NL9 = a.shift() * 1;
                            P.Q[i].NL10 = a.shift() * 1;
                            P.Q[i].NL11 = a.shift() * 1;
                            P.Q[i].NL12 = a.shift() * 1;
                            P.Q[i].NorthRo = a.shift() * 1;
                            P.Q[i].NR1 = a.shift() * 1;
                            P.Q[i].NR2 = a.shift() * 1;
                            P.Q[i].PermafrostKeep = a.shift() * 1;
                            P.Q[i].PF1 = a.shift() * 1;
                            P.Q[i].PF2 = a.shift() * 1;
                            P.Q[i].PF3 = a.shift() * 1;
                            P.Q[i].PF4 = a.shift() * 1;
                            P.Q[i].PF5 = a.shift() * 1;
                            P.Q[i].PF6 = a.shift() * 1;
                            P.Q[i].PF7 = a.shift() * 1;
                            P.Q[i].PF8 = a.shift() * 1;
                            P.Q[i].PF9 = a.shift() * 1;
                            P.Q[i].PF10 = a.shift() * 1;
                            P.Q[i].PF11 = a.shift() * 1;
                            P.Q[i].PF12 = a.shift() * 1;
                            P.Q[i].PF13 = a.shift() * 1;
                            P.Q[i].PF14 = a.shift() * 1;
                            P.Q[i].PF15 = a.shift() * 1;
                            P.Q[i].PF16 = a.shift() * 1;
                            P.Q[i].PF17 = a.shift() * 1;
                            P.Q[i].PF18 = a.shift() * 1;
                            P.Q[i].PF19 = a.shift() * 1;
                            P.Q[i].PF20 = a.shift() * 1;
                            P.Q[i].PF21 = a.shift() * 1;
                            P.Q[i].PF22 = a.shift() * 1;
                            P.Q[i].PH1 = a.shift() * 1;
                            P.Q[i].PH2 = a.shift() * 1;
                            P.Q[i].PH3 = a.shift() * 1;
                            P.Q[i].PH4 = a.shift() * 1;
                            P.Q[i].PH5 = a.shift() * 1;
                            P.Q[i].PH6 = a.shift() * 1;
                            P.Q[i].PH7 = a.shift() * 1;
                            P.Q[i].PH8 = a.shift() * 1;
                            P.Q[i].PH9 = a.shift() * 1;
                            P.Q[i].PH10 = a.shift() * 1;
                            P.Q[i].PH11 = a.shift() * 1;
                            P.Q[i].PH12 = a.shift() * 1;
                            P.Q[i].PH13 = a.shift() * 1;
                            P.Q[i].PK1 = a.shift() * 1;
                            P.Q[i].PK2 = a.shift() * 1;
                            P.Q[i].PK3 = a.shift() * 1;
                            P.Q[i].PK4 = a.shift() * 1;
                            P.Q[i].PK5 = a.shift() * 1;
                            P.Q[i].PK6 = a.shift() * 1;
                            P.Q[i].PK7 = a.shift() * 1;
                            P.Q[i].PK8 = a.shift() * 1;
                            P.Q[i].PK9 = a.shift() * 1;
                            P.Q[i].PlaneofFear = a.shift() * 1;
                            P.Q[i].PlaneofHate = a.shift() * 1;

                            function convert(foo) {
                                if (foo) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                            P.Q[i].repeatCB = convert(a.shift() * 1);
                            P.Q[i].repeatCm3 = convert(a.shift() * 1);
                            P.Q[i].repeatCt3 = convert(a.shift() * 1);
                            P.Q[i].repeatER = convert(a.shift() * 1);
                            P.Q[i].repeatKk3 = convert(a.shift() * 1);
                            P.Q[i].repeatKk4 = convert(a.shift() * 1);
                            P.Q[i].repeatLg3 = convert(a.shift() * 1);
                            P.Q[i].repeatNl3 = convert(a.shift() * 1);
                            P.Q[i].repeatNl4 = convert(a.shift() * 1);
                            P.Q[i].repeatPk4 = convert(a.shift() * 1);
                            P.Q[i].UG1 = a.shift() * 1;
                            P.Q[i].UG2 = a.shift() * 1;
                            P.Q[i].UG3 = a.shift() * 1;
                            P.Q[i].UG4 = a.shift() * 1;
                            P.Q[i].UpperGuk = a.shift() * 1;
                        }
                        //ok!
                        g.difficulty = srv.difficulty;
                        srv.q = true;
                        resetRepeatableQuests();
                        checkEnterWorld();
                    }).fail(function() {
                        QMsg("Server Error! Failed to load quest values.");
						reloadPage();
                    });
                }
            }).fail(function() {
                QMsg("Server Error! Failed to load item values.");
            });

            function checkEnterWorld() {
                if (srv.my === true &&
                    srv.item === true &&
                    srv.eq === true &&
                    srv.q === true) {
                    enterWorld();
                }
            }
        }
    }).on('click', '#createcharacter', function() {
        showChar();
    }).on('mousedown', '#characterslot1', function() {
        loadCharacterSlot(1);
    }).on('mousedown', '#characterslot2', function() {
        loadCharacterSlot(2);
    }).on('mousedown', '#characterslot3', function() {
        loadCharacterSlot(3);
    }).on('mousedown', '#characterslot4', function() {
        loadCharacterSlot(4);
    }).on('mousedown', '#characterslot5', function() {
        loadCharacterSlot(5);
    }).on('mousedown', '#characterslot6', function() {
        loadCharacterSlot(6);
    }).on('mousedown', '#characterslot7', function() {
        loadCharacterSlot(7);
    }).on('mousedown', '#characterslot8', function() {
        loadCharacterSlot(8);
    }).on('mousedown', '#characterslot9', function() {
        loadCharacterSlot(9);
    }).on('mousedown', '#characterslot10', function() {
        loadCharacterSlot(10);
    }).on('mousedown', '#characterslot11', function() {
        loadCharacterSlot(11);
    }).on('mousedown', '#characterslot12', function() {
        loadCharacterSlot(12);
    }).on('mousedown', '#characterslot13', function() {
        loadCharacterSlot(13);
    }).on('mousedown', '#characterslot14', function() {
        loadCharacterSlot(14);
    }).on('mousedown', '#characterslot15', function() {
        loadCharacterSlot(15);
    }).on('mousedown', '#characterslot16', function() {
        loadCharacterSlot(16);
    }).on('click', '#deletecharacter', function() {
        delChar();
    }).on('click', '#deleteConfirm', function() {
        deleteCharSlot();
    }).on('click', '#deleteCancel', function() {
        cancelCharDelete();
    }).on('click', '#deletecharfade', function() {
        cancelCharDelete();
    });
    $("#createWindowId").on('click', '#createbuttonId', function() {
        if (location.protocol === "http:") {
            createChar();
        } else {
			var name = $("#charnameinput").val().replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/g, '');
			my.name = name.charAt(0).toUpperCase() + name.slice(1);
			if (my.name==='') {
				$("#charnameinput").focus();
				$('#creationInfo').html("Enter your character's name!");
				return;
			}
			if (my.name.length < 2) {
				$("#charnameinput").focus();
				$('#creationInfo').html("Your name must be at least two characters long!");
				return;
			}
            if (buttonLock === false) {
                g.lockScreen();
                QMsg("Contacting server...");
                $.ajax({
                    data: {
                        run: "addCharacterSlot"
                    }
                }).done(function(data) {
                    if (data == 'maxed') {
                        QMsg("You cannot have more than 16 character slots per account.");
                    } else if (data == 'buyCrystals') {
                        QMsg("Please purchase Never Crystals to unlock additional character slots.");
                    } else if (data == 'pay150') {
                        playAudio("buyitem");
                        QMsg("Character slot purchased for 150 Never Crystals.");
                        var oldCrystals = $("#crystalCount").text() * 1;
                        $("#crystalCount").text(oldCrystals - 150);
                        createChar();
                    } else if (data == 'create') {
                        createChar();
                    }
                    g.unlockScreen();
                }).fail(function() {
                    failToCommunicate();
                });
            }
        }
    }).on('click', '#cancelbuttonId', function() {
        hideChar();
    }).on('click', '#humanId', function() {
        humanInfo();
    }).on('click', '#eruditeId', function() {
        eruditeInfo();
    }).on('click', '#barbarianId', function() {
        barbarianInfo();
    }).on('click', '#highelfId', function() {
        highelfInfo();
    }).on('click', '#woodelfId', function() {
        woodelfInfo();
    }).on('click', '#darkelfId', function() {
        darkelfInfo();
    }).on('click', '#halfelfId', function() {
        halfelfInfo();
    }).on('click', '#dwarfId', function() {
        dwarfInfo();
    }).on('click', '#gnomeId', function() {
        gnomeInfo();
    }).on('click', '#halflingId', function() {
        halflingInfo();
    }).on('click', '#trollId', function() {
        trollInfo();
    }).on('click', '#ogreId', function() {
        ogreInfo();
    }).on('click', '#warriorId', function() {
        warriorInfo();
    }).on('click', '#monkId', function() {
        monkInfo();
    }).on('click', '#rogueId', function() {
        rogueInfo();
    }).on('click', '#paladinId', function() {
        paladinInfo();
    }).on('click', '#rangerId', function() {
        rangerInfo();
    }).on('click', '#skId', function() {
        skInfo();
    }).on('click', '#bardId', function() {
        bardInfo();
    }).on('click', '#clericId', function() {
        clericInfo();
    }).on('click', '#druidId', function() {
        druidInfo();
    }).on('click', '#shamanId', function() {
        shamanInfo();
    }).on('click', '#necromancerId', function() {
        necromancerInfo();
    }).on('click', '#enchanterId', function() {
        enchanterInfo();
    }).on('click', '#magicianId', function() {
        magicianInfo();
    }).on('click', '#wizardId', function() {
        wizardInfo();
    }).on('click', '#maleId', function() {
        maleInfo();
    }).on('click', '#femaleId', function() {
        femaleInfo();
    }).on('click', '#normalId', function() {
        setNormalMode();
    }).on('click', '#hardcoreId', function() {
        $("#normalId").removeClass("ccActive ccDisabled").addClass("ccDisabled");
        $("#hardcoreId").removeClass("ccActive ccDisabled").addClass("ccActive");
        my.hardcoreMode = true;
        Error("WARNING: Hardcore death is permanent!");
    });
    $("#cityWrap").on('click', '#bankId', function() {
        bankToggle();
    }).on('click', '#talentsId', function() {
        $("#upgradeOK").text("Ok");
        $("#upgradeCANCEL").text("Cancel");
        cityMenuClick();
        upgradeMode = false;
        resetTalentPrompt = true;
        upgradePrompt = false;
        upgradePhysical = true;
        $("#upgradeConfirm").css("left", 350);
        cost = M.ceil(M.pow(my.level, 1.6));
        $("#upgradePrompt").html("Reset all talents?");
        var s1 = "<div class='cityCostAmount goldIcon'>" + cost + "</div>";
        /*
        if(location.protocol==='https:'){
        	s1+="<div class='cityCostAmount crystalIcon'>25</div>";
        }
        */
        $("#upgradeConfirm2").html(s1);
    });
    $("#charsheetId").on('click', function() {
        charToggle();
    });
    $("#inventoryId").on('click', function() {
        inventory();
    });
    $("#travelId").on('click', function() {
        travelToggle();
    });
    $("#optionsId").on('click', function() {
        optionsToggle();
    });
    $("#questId").on('click', function() {
        questToggle();
    });
    $("#campId").on('click', function() {
        camp();
    });
});

function setNormalMode() {
    $("#hardcoreId").removeClass("ccActive ccDisabled").addClass("ccDisabled");
    $("#normalId").removeClass("ccActive ccDisabled").addClass("ccActive");
    my.hardcoreMode = false;
}

function checkZoneExists() {
    var x = myZone();
    if (x === "Plane of Hate" ||
        x === "Plane of Strife" ||
        x === "Howling Thicket" ||
        x === "Glenmont Grove" ||
        x === "Dagnor's Cauldron" ||
        x === "Beholder's Maze" ||
        x === "East Karana" ||
        x === "Highpass Hold" ||
        x === "Lake Rathetear" ||
        x === "Lavastorm Mountains" ||
        x === "North Karana" ||
        x === "Ocean of Tears" ||
        x === "Oasis of Marr" ||
        x === "Rathe Mountains" ||
        x === "South Karana" ||
        x === "West Karana" ||
        x === "Erud's Crossing" ||
        x === "Kithicor Forest" ||
        x === "South Ro" ||
        x === "Clan Runnyeye" ||
        x === "Solusek's Eye" ||
        x === "Splitpaw Lair" ||
        x === "Butcherblock Mountains" ||
        x === "Everfrost Peaks" ||
        x === "Steamfont Mountains" ||
        x === "Qeynos Hills" ||
        x === "Misty Thicket" ||
        x === "East Commonlands" ||
        x === "Nektulos Forest" ||
        x === "Innothule Swamp" ||
        x === "The Feerrott" ||
        x === "Toxxulia Forest" ||
        x === "Erudin" ||
        x === "Oggok" ||
        x === "Grobb" ||
        x === "Kelethin" ||
        x === "Kaladim" ||
        x === "Ak'Anon" ||
        x === "Neriak" ||
        x === "Qeynos" ||
        x === "Felwithe" ||
        x === "Halas" ||
        x === "Surefall Glade" ||
        x === "Castle Mistmoore" ||
        x === "Crushbone" ||
        x === "Estate of Unrest" ||
        x === "Greater Faydark" ||
        x === "Kedge Keep" ||
        x === "Lesser Faydark" ||
        x === "Befallen" ||
        x === "Blackburrow" ||
        x === "Cazic-Thule" ||
        x === "Upper Guk" ||
        x === "Lower Guk" ||
        x === "Nagafen's Lair" ||
        x === "Najena" ||
        x === "North Ro" ||
        x === "Kordata Tunnels" ||
        x === "Kordata Frontier" ||
        x === "Ripongen Stronghold" ||
        x === "Ripongen Redoubt" ||
        x === "Viston Redoubt" ||
        x === "Permafrost Keep" ||
        x === "Plane of Fear" ||
        x === "Kordata Stronghold" ||
        x === "Plane of Corruption" ||
        x === "Plane of Chaos"
    ) {
        if (my.difficulty === 1) {
            my.zone = "Edenburg";
            my.subzone = 0;
        } else if (my.difficulty === 2) {
            my.zoneN = "Edenburg";
            my.subzoneN = 0;
        } else {
            my.zoneH = "Edenburg";
            my.subzoneH = 0;
        }
    }
}

function loadCharacterSlot(Slot) {
    if ($("#characterslot" + Slot).hasClass("disabled") === true) {
        return;
    }
    characterslot = Slot;
    if (localStorage.getItem("Lmy" + (lsKey + characterslot)) === null) {
        initLMY();
    } else {
        var kek = localStorage.getItem("Lmy" + (lsKey + characterslot));
        Lmy = JSON.parse(kek);
    }
    if (location.protocol === "http:") {
        if (localStorage.getItem("my" + (lsKey + Slot)) === null) {
            // initializeEQ();
        } else {
            var foo = localStorage.getItem("my" + (lsKey + Slot));
            my = JSON.parse(foo);
            if (location.protocol === 'http:') {
                var qux = localStorage.getItem("eq" + (lsKey + Slot));
                P.eq = JSON.parse(qux);
            }
        }
        if (localStorage.getItem("inv" + (lsKey + Slot + 10)) === null) {
            initializeInventory();
        } else {
            var bar = localStorage.getItem("inv" + (lsKey + Slot + 10));
            P.item = JSON.parse(bar);
        }
        if (localStorage.getItem("Q" + (lsKey + Slot)) === null) {
            initQ();
        } else {
            var bar = localStorage.getItem("Q" + (lsKey + Slot));
            P.Q = JSON.parse(bar);
        }
    }
    for (var i = 1; i <= 16; i++) {
        D.getElementById('characterslot' + i).className = "characterDisabled";
    }
    if (location.protocol === "http:") {
        D.getElementById("characterSelectScreen").style.display = 'block';
    }
    $('#characterslot' + Slot).removeClass().addClass("characterActive " + classColor());
    setZoneDifficultyIndicators(true);
}

function setZoneDifficultyIndicators(reset) {
    if (mySubzone() === 0) {
        checkZoneExists();
        D.getElementById("zoneIndicator").textContent = myZone(); // Remove
    }
    if (reset) {
        my.difficulty = 1;
        srv.difficulty = 1;
    }
    updateZoneIndicator();
    $("#normalLabel, #nightmareLabel, #hellLabel").css({
        color: "#888",
        display: 'none'
    });

    function setDiffColor(x) {
        if (x === 1) {
            $('#normalLabel').css('color', '#fff');
        } else if (x === 2) {
            $('#nightmareLabel').css('color', '#fff');
        } else {
            $('#hellLabel').css('color', '#fff');
        }
    }
    if (location.protocol === "http:") {
        if (dev) {
            if (P.Q[1].PlaneofFear > 1) {
                $("#normalLabel, #nightmareLabel,#hellLabel").css({
                    display: 'inline-block'
                });
            } else if (P.Q[0].PlaneofFear > 1) {
                $("#normalLabel, #nightmareLabel").css({
                    display: 'inline-block'
                });
            }
        }
        setDiffColor(my.difficulty);
    } else {
        var hardcoreMode = $("#characterslot" + characterslot).data('hardcoreMode');
        if ($("#characterslot" + characterslot).data('hell') >= 2) {
            $("#normalLabel, #nightmareLabel, #hellLabel").css('display', 'inline-block');
        } else if ($("#characterslot" + characterslot).data('nightmare') >= 2) {
            $("#normalLabel, #nightmareLabel").css('display', 'inline-block');
        }
        setDiffColor(srv.difficulty);
    }
    if (hardcoreMode === "true") {
        D.getElementById("enterworld").className = "strongShadow NGhardcore";
    } else {
        D.getElementById("enterworld").className = "strongShadow NGgradient";
    }
}

function updateZoneIndicator() {
    if (location.protocol === "http:") {
        checkZoneExists();
        var x = mySubzone();
        if (x === 0) {
            D.getElementById("zoneIndicator").innerHTML = myZone();
        } else {
            D.getElementById("zoneIndicator").innerHTML = myZone() + " " + x;
        }
    } else {
        var x = mySubzone();
        if (x === 0) {
            $("#zoneIndicator").html(myZone());
        } else {
            $("#zoneIndicator").html(myZone() + " " + x);
        }
    }
}
$(document).ready(function() {
    $("#normalLabel").on('click', function() {
        my.difficulty = 1;
        if (location.protocol === 'https:') {
            srv.difficulty = 1;
        }
        setZoneDifficultyIndicators();
    });
    $("#nightmareLabel").on('click', function() {
        my.difficulty = 2;
        if (location.protocol === 'https:') {
            srv.difficulty = 2;
        }
        setZoneDifficultyIndicators();
    });
    $("#hellLabel").on('click', function() {
        my.difficulty = 3;
        if (location.protocol === 'https:') {
            srv.difficulty = 3;
        }
        setZoneDifficultyIndicators();
    });
});

function setClassStyles() {
    $NG.addmonsterId.css("background-image", "url('/images1/sprite" + my.job + "3.png')")
        .css({
            backgroundPosition: "0 0"
        });
    $("#toggleattackId").css("background-image", "url('/images1/sprite" + my.job + "3.png')")
        .css({
            backgroundPosition: "-100% 0"
        });
    $("#addmonsterId").css("background-image", "url('/images1/sprite" + my.job + "3.png')")
        .css({
            backgroundPosition: "0 -200%"
        });
    $("#runId").css("background-image", "url('/images1/sprite" + my.job + "3.png')")
        .css({
            backgroundPosition: "-100% -200%"
        });
    initTalentStyles();
    $NG.equipmentBG.css("background", "url('//" + itemSprite + "')")
        .css({
            backgroundPosition: "0 0"
        });
}

function initTalentStyles() {
    var id = [
        'warriorkickId',
        'slamId',
        'avengingstrikeId',
        'hemorrhageId',
        'shockwaveId',
        'pummelId',
        'subjugateId',
        'decisiveblowId',
        'absorbspellId',
        'frenziedrampageId',
        'enrageId',
        'furiousscornId',
        'triageId',
        'bulwarkId',
        'intrepidmightId'
    ];
    var skillx = [];
    for (var i = 3; i <= 17; i++) {
        skillx.push(i + '00');
    }
    var talx = [
        '192',
        '512',
        '1024',
        '448',
        '256',
        '384',
        '704',
        '1088',
        '320',
        '832',
        '576',
        '640'
    ];
    if (my.job === "Monk") {
        id = [
            'tigerstrikeId',
            'eaglestrikeId',
            'cheetahstrikeId',
            'cobrastrikeId',
            'dragonstrikeId',
            'cranekickId',
            'windmillkickId',
            'ancestralflurryId',
            'flyingkickId',
            'chakrablastId',
            'feigndeathId',
            'mendId',
            'stonefistsId',
            'intimidationId',
            'innerpeaceId'
        ];
        talx = [
            '256',
            '960',
            '1088',
            '768',
            '576',
            '320',
            '704',
            '448',
            '192',
            '512',
            '640',
            '1024'
        ];
    }
    if (my.job === "Rogue") {
        id = [
            'shadowstrikeId',
            'sonicstrikeId',
            'hyperstrikeId',
            'widowstrikeId',
            'miragestrikeId',
            'lacerateId',
            'backstabId',
            'staggershotId',
            'lobotomizeId',
            'prowlinggashId',
            'evadeId',
            'coldbloodId',
            'flashpowderId',
            'illusivemistId',
            'ancientwillId',
            'roguehideId'
        ];
        skillx.push('200');
        talx = [
            '512',
            '832',
            '256',
            '448',
            '192',
            '576',
            '896',
            '640',
            '320',
            '1024',
            '384',
            '768'
        ];
    }
    if (my.job === "Paladin") {
        id = [
            'palslamId',
            'rebukeId',
            'purgeId',
            'vengeanceId',
            'layhandsId',
            'greaterhealingId',
            'holymightId',
            'palrootId',
            'ardentjudgment',
            'yaulpId',
            'cleanseId',
            'flashoflightId',
            'valorId',
            'spiritarmorId',
            'divineprovidenceId',
            'symbolofryltanId'
        ];
        skillx.push('200');
        talx = [
            '192',
            '448',
            '512',
            '960',
            '256',
            '384',
            '704',
            '1088',
            '320',
            '576',
            '768',
            '896'
        ];
    }
    if (my.job === "Shadow Knight") {
        id = [
            'shdslamId',
            'crescentcleaveId',
            'deathstrikeId',
            'gaspingfrenzyId',
            'harmtouchId',
            'shdlifetapId',
            'doomingdarknessId',
            'heatbloodId',
            'strengthendeadId',
            'shdfearId',
            'siphonstrengthId',
            'shdfeigndeathId',
            'shadowvortexId',
            'summondeadId',
            'vampiricembraceId',
            'resistcoldId'
        ];
        skillx.push('200');
        talx = [
            '256',
            '320',
            '128',
            '960',
            '192',
            '512',
            '448',
            '576',
            '384',
            '1024',
            '768',
            '640'
        ];
    }
    if (my.job === "Ranger") {
        id = [
            'rangerkickId',
            'rapidshotId',
            'countershotId',
            'trueshotarrowId',
            'volleyshotId',
            'lighthealingId',
            'faerieflameId',
            'igniteId',
            'snareId',
            'wardersrift',
            'weaponshieldId',
            'thistlecoatId',
            'feetlikecatId',
            'shieldofbramblesId',
            'rangersowId',
            'rangertrackId'
        ];
        skillx.push('200');
        talx = [
            '192',
            '896',
            '704',
            '768',
            '320',
            '384',
            '576',
            '640',
            '256',
            '960',
            '1088',
            '448'
        ];
    }
    if (my.job === "Bard") {
        id = [
            'chordsofdissonance',
            'chantofbattle',
            'accelerando',
            'hymnofrestoration',
            'songofthesirens',
            'boastfulbellow',
            'elementalrhythms',
            'lucidlullaby',
            'consonantchain',
            'dissension',
            'chorusofclarity',
            'anthemdearms',
            'euphonichymn',
            'shieldofsongs',
            'desperatedirge'
        ];
        talx = [
            '256',
            '384',
            '896',
            '960',
            '192',
            '576',
            '832',
            '1088',
            '448',
            '512',
            '704',
            '1024'
        ];
    }
    if (my.job === "Druid") {
        id = [
            'starfire',
            'dronesofdoom',
            'druhealing',
            'tornado',
            'engulfingroots',
            'driftingdeath',
            'lightningblast',
            'earthquake',
            'hurricane',
            'sylvangrasp',
            'volcano',
            'skinlikenature',
            'shieldofspikes',
            'drusow',
            'chloroplast'
        ];
        talx = [
            '256',
            '320',
            '448',
            '896',
            '384',
            '640',
            '704',
            '768',
            '192',
            '512',
            '576',
            '832'
        ];
    }
    if (my.job === "Cleric") {
        id = [
            'smite',
            'soundofforce',
            'superiorhealing',
            'bindingearth',
            'expelcorruption',
            'searingrevelation',
            'martyrsblessing',
            'guardianangel',
            'holywrath',
            'markofjudgement',
            'benediction',
            'resolution',
            'armoroffaith',
            'divinesanctuary',
            'symbolofnaltron'
        ];
        talx = [
            '192',
            '896',
            '384',
            '704',
            '256',
            '576',
            '960',
            '640',
            '448',
            '512',
            '768',
            '832'
        ];
    }
    if (my.job === "Shaman") {
        id = [
            'froststrike',
            'scourge',
            'shmhealing',
            'togorsinsects',
            'cannibalize',
            'enstill',
            'poisonnova',
            'affliction',
            'reclaimblood',
            'glacialimpact',
            'devouringplague',
            'calloftheancients',
            'guardianspirit',
            'shmsow',
            'talismanofaltuna'
        ];
        talx = [
            '192',
            '384',
            '512',
            '768',
            '256',
            '576',
            '640',
            '832',
            '896',
            '960',
            '1024',
            '704'
        ];
    }
    if (my.job === "Necromancer") {
        id = [
            'bonespirit',
            'cascadingdarkness',
            'invokefear',
            'drainsoul',
            'feigndeath',
            'augmentdeath',
            'igniteblood',
            'corpseexplosion',
            'bondofdeath',
            'diamondskin',
            'asystole',
            'detonatesoul',
            'howlingterror',
            'invokedeath',
            'archshielding'
        ];
        talx = [
            '384',
            '576',
            '704',
            '960',
            '1024',
            '512',
            '640',
            '896',
            '192',
            '256',
            '320',
            '832'
        ];
    }
    if (my.job === "Enchanter") {
        id = [
            'chaosflux',
            'gaspingembrace',
            'cajolingwhispers',
            'colorshift',
            'mesmerize',
            'shiftlessdeeds',
            'alacrity',
            'gravityflux',
            'mysticrune',
            'tashania',
            'enthrall',
            'discordantbarrier',
            'enchantweapon',
            'adorninggrace',
            'clarity'
        ];
        talx = [
            '192',
            '384',
            '896',
            '704',
            '320',
            '512',
            '960',
            '576',
            '256',
            '448',
            '640',
            '768'
        ];
    }
    if (my.job === "Magician") {
        id = [
            'lavabolt',
            'firestorm',
            'frozenorb',
            'burnout',
            'manashield',
            'psionicstorm',
            'reclaimelements',
            'elementalfury',
            'armageddon',
            'stasisfield',
            'alteredstate',
            'shieldoflava',
            'phantomplate',
            'elementalarmor',
            'earthelemental',
            'airelemental',
            'fireelemental',
            'frostelemental'
        ];
        skillx.push('1700');
        skillx.push('1700');
        skillx.push('1700');
        talx = [
            '192',
            '896',
            '256',
            '704',
            '1088',
            '384',
            '576',
            '640',
            '960',
            '320',
            '1024',
            '512'
        ];
    }
    if (my.job === "Wizard") {
        id = [
            'icebolt',
            'chargedbolts',
            'frostnova',
            'magicmissiles',
            'fireball',
            'deepfreeze',
            'chainlightning',
            'glacialspike',
            'iceblock',
            'icecomet',
            'counterspell',
            'harnessEther',
            'meteor',
            'mirrorimages',
            'viziersshielding'
        ];
        talx = [
            '256',
            '384',
            '576',
            '1024',
            '192',
            '512',
            '640',
            '768',
            '1088',
            '448',
            '896',
            '960'
        ];
    }
    var s = "<style type='text/css'>";
    for (var i = 0; i < id.length; i++) {
        var skilly = 0;
        var thisId = id[i];
        if (thisId === 'countershotId') {
            skilly = -300;
        }
        if (i === 15) {
            skilly = -100;
        }
        if (i === 16) {
            skilly = -200;
        }
        if (i === 17) {
            skilly = -300;
        }
        s += "#" + id[i] + "{ background: url('/images1/sprite" + my.job + "3.png') -" + skillx[i] + "% " + skilly + "%; }";
    }
    // exceptions
    if (my.job === "Bard" || my.job === "Druid") {
        s += "#rangertrackId{ background: url('/images1/spriteTrack2.png') 0 0; }";
    }
    if (my.job === "Rogue" && my.race === "Halfling") {
        s += "#halflinghideId{ background: url('/images1/spriteHalfling2.png') 0 0; }";
    }
    for (var i = 1; i <= 12; i++) {
        var taly = -192;
        if ((i - 1) % 4 === 0) {
            taly = 0;
        }
        if (my.job === "Magician") {
            if (i === 5) {
                taly = -128;
            }
        }
        s += "#talent" + i + "{ background: url('/images1/sprite" + my.job + "3.png') -" + talx[i - 1] + "px " + taly + "px; }";
    }
    s += "</style>";
    $("head").append(s);
}

function checkUndefined() {
    if (my.hp <= 0) { // why is this here?
        if (my.job === "Warrior" || my.job === "Monk" || my.job === "Rogue") {
            my.mp = 0;
        }
    }
    if (my.mapX == 0) {
        delete my.mapX;
        delete my.mapY;
    }
    if (my.job === "Shaman" && my.piercing === 0) {
        my.piercing = 1;
    }
    //local settings
    if (Lmy.autoAttackOption === undefined) {
        Lmy.autoAttackOption = my.autoAttackOption;
    }
    if (Lmy.normalFilter === undefined) {
        Lmy.normalFilter = "None";
    }
    if (Lmy.magicFilter === undefined) {
        Lmy.magicFilter = "None";
    }
    if (Lmy.rareFilter === undefined) {
        Lmy.rareFilter = "None";
    }
    if (Lmy.uniqueFilter === undefined) {
        Lmy.uniqueFilter = "None";
    }
    if (Lmy.setFilter === undefined) {
        Lmy.setFilter = "None";
    }
    if (my.comboOverall === undefined) {
        my.comboOverall = 0;
    }
    if (my.zoneN === undefined) {
        my.zoneN = "Aspen Grove";
    }
    if (my.zoneH === undefined) {
        my.zoneH = my.zoneN;
    }
    if (my.subzoneN === undefined) {
        my.subzoneN = 0;
    }
    if (my.subzoneH === undefined) {
        my.subzoneH = 0;
    }
    if (my.subzone === '') {
        my.subzone = 0;
    }
    if (my.subzoneN === '') {
        my.subzoneN = 0;
    }
    if (my.subzoneH === '') {
        my.subzoneH = 0;
    }
    if (my.quests === undefined) {
        my.quests = 0;
    }
    if (Lmy.C0 === undefined) {
        Lmy.C0 = my.C0;
    }
    if (Lmy.C1 === undefined) {
        Lmy.C1 = my.C1;
    }
    if (Lmy.C2 === undefined) {
        Lmy.C2 = my.C2;
    }
    if (Lmy.C3 === undefined) {
        Lmy.C3 = my.C3;
    }
    if (Lmy.C4 === undefined) {
        Lmy.C4 = my.C4;
    }
    if (Lmy.C5 === undefined) {
        Lmy.C5 = my.C5;
    }
    if (Lmy.C6 === undefined) {
        Lmy.C6 = my.C6;
    }
    if (Lmy.C7 === undefined) {
        Lmy.C7 = my.C7;
    }
    if (Lmy.C8 === undefined) {
        Lmy.C8 = my.C8;
    }
    if (Lmy.C9 === undefined) {
        Lmy.C9 = my.C9;
    }
    if (Lmy.C10 === undefined) {
        Lmy.C10 = my.C10;
    }
    if (Lmy.C11 === undefined) {
        Lmy.C11 = my.C11;
    }
    if (Lmy.C12 === undefined) {
        Lmy.C12 = my.C12;
    }
    if (Lmy.C13 === undefined) {
        Lmy.C13 = my.C13;
    }
    if (Lmy.C14 === undefined) {
        Lmy.C14 = my.C14;
    }
    if (Lmy.C15 === undefined) {
        Lmy.C15 = my.C15;
    }
    if (Lmy.C16 === undefined) {
        Lmy.C16 = my.C16;
    }
    if (Lmy.C17 === undefined) {
        Lmy.C17 = my.C17;
    }
    if (Lmy.C18 === undefined) {
        Lmy.C18 = my.C18;
    }
    if (Lmy.C19 === undefined) {
        Lmy.C19 = my.C19;
    }
    if (Lmy.C20 === undefined) {
        Lmy.C20 = my.C20;
    }
    if (Lmy.C21 === undefined) {
        Lmy.C21 = my.C21;
    }
    if (Lmy.C22 === undefined) {
        Lmy.C22 = my.C22;
    }
    if (Lmy.C23 === undefined) {
        Lmy.C23 = my.C23;
    }
    if (Lmy.window3X === undefined) {
        Lmy.window3X = my.window3X;
    }
    if (Lmy.window3Y === undefined) {
        Lmy.window3Y = my.window3Y;
    }
    if (Lmy.window6X === undefined) {
        Lmy.window6X = my.window6X;
    }
    if (Lmy.window6Y === undefined) {
        Lmy.window6Y = my.window6Y;
    }
    if (Lmy.window1X === undefined) {
        Lmy.window1X = 20;
    }
    if (Lmy.window1Y === undefined) {
        Lmy.window1Y = 20;
    }
    if (Lmy.questJournalX === undefined) {
        Lmy.questJournalX = 20;
    }
    if (Lmy.questJournalY === undefined) {
        Lmy.questJournalY = 20;
    }
    if (Lmy.inventoryWindowX === undefined) {
        Lmy.inventoryWindowX = 640;
    }
    if (Lmy.inventoryWindowY === undefined) {
        Lmy.inventoryWindowY = 20;
    }
    if (Lmy.bankX === undefined) {
        Lmy.bankX = 20;
    }
    if (Lmy.bankY === undefined) {
        Lmy.bankY = 20;
    }
    //global local settings
    if (GLB.soundStatus === undefined) {
        GLB.soundStatus = my.soundStatus;
    }
    if (GLB.musicStatus === undefined) {
        GLB.musicStatus = my.musicStatus;
    }
    if (GLB.tooltipMode === undefined) {
        GLB.tooltipMode = my.monsterAvoidance;
    }
    if (GLB.videoSetting === undefined) {
        GLB.videoSetting = "High";
    }
    if (GLB.hideMenu === undefined) {
        GLB.hideMenu = "Off";
    }
    if (GLB.chatMyHit === undefined) {
        GLB.chatMyHit = "Off";
    }
    if (GLB.showCombatLog === undefined) {
        GLB.showCombatLog = "On";
    }
    if (GLB.debugMode === undefined) {
        GLB.debugMode = "Off";
    }
    if (GLB.fastDestroy === undefined) {
        GLB.fastDestroy = "On";
    }
    if (GLB.gold === undefined) {
        GLB.gold = 0;
    }
    if (GLB.lastCharacter === undefined) {
        GLB.lastCharacter = 1;
    }
    //remove old settings
    if (my.mob0 !== undefined) {
        delete my.mob0;
        delete my.mob1;
        delete my.mob2;
        delete my.mob3;
        delete my.mob4;
        delete my.server;
    }
    if (my.monsterAvoidance !== undefined) {
        delete my.monsterAvoidance;
    }
    if (my.weatherStatus !== undefined) {
        delete my.weatherStatus;
    }
    if (my.soundStatus !== undefined) {
        delete my.soundStatus;
    }
    if (my.musicStatus !== undefined) {
        delete my.musicStatus;
    }
    if (my.autoAttackOption !== undefined) {
        delete my.autoAttackOption;
    }
    if (my.randomEvents !== undefined) {
        delete my.randomEvents;
    }
    if (my.scriptedEvents !== undefined) {
        delete my.scriptedEvents;
    }
    if (my.NC0 !== undefined) {
        delete my.NC0;
    }
    if (my.NC1 !== undefined) {
        delete my.NC1;
    }
    if (my.NC2 !== undefined) {
        delete my.NC2;
    }
    if (my.NC3 !== undefined) {
        delete my.NC3;
    }
    if (my.NC4 !== undefined) {
        delete my.NC4;
    }
    if (my.NC5 !== undefined) {
        delete my.NC5;
    }
    if (my.NC6 !== undefined) {
        delete my.NC6;
    }
    if (my.NC7 !== undefined) {
        delete my.NC7;
    }
    if (my.NC8 !== undefined) {
        delete my.NC8;
    }
    if (my.NC9 !== undefined) {
        delete my.NC9;
    }
    if (my.C0 !== undefined) {
        delete my.C0;
    }
    if (my.C1 !== undefined) {
        delete my.C1;
    }
    if (my.C2 !== undefined) {
        delete my.C2;
    }
    if (my.C3 !== undefined) {
        delete my.C3;
    }
    if (my.C4 !== undefined) {
        delete my.C4;
    }
    if (my.C5 !== undefined) {
        delete my.C5;
    }
    if (my.C6 !== undefined) {
        delete my.C6;
    }
    if (my.C7 !== undefined) {
        delete my.C7;
    }
    if (my.C8 !== undefined) {
        delete my.C8;
    }
    if (my.C9 !== undefined) {
        delete my.C9;
    }
    if (my.C10 !== undefined) {
        delete my.C10;
    }
    if (my.C11 !== undefined) {
        delete my.C11;
    }
    if (my.C12 !== undefined) {
        delete my.C12;
    }
    if (my.C13 !== undefined) {
        delete my.C13;
    }
    if (my.C14 !== undefined) {
        delete my.C14;
    }
    if (my.C15 !== undefined) {
        delete my.C15;
        delete my.C16;
        delete my.C17;
        delete my.C18;
        delete my.C19;
        delete my.C20;
        delete my.C21;
        delete my.C22;
        delete my.C23;
    }
    if (my.Misc0 !== undefined) {
        delete my.Misc0;
    }
    if (my.Misc1 !== undefined) {
        delete my.Misc1;
    }
    if (my.Misc2 !== undefined) {
        delete my.Misc2;
    }
    if (my.Misc3 !== undefined) {
        delete my.Misc3;
    }
    if (my.Misc4 !== undefined) {
        delete my.Misc4;
    }
    if (my.window3X !== undefined) {
        delete my.window3X;
    }
    if (my.window3Y !== undefined) {
        delete my.window3Y;
    }
    if (my.window6X !== undefined) {
        delete my.window6X;
    }
    if (my.window6Y !== undefined) {
        delete my.window6Y;
    }
    if (P.Q[0].ButcherblockMountains !== undefined) {
        for (var i = 0; i <= 2; i++) {
            delete P.Q[i].ButcherblockMountains;
            delete P.Q[i].DagnorsCauldron;
            delete P.Q[i].SteamfontMountains;
            delete P.Q[i].Beholders;
            delete P.Q[i].ClanRunnyeye;
            delete P.Q[i].EastCommonlands;
            delete P.Q[i].EastKarana;
            delete P.Q[i].EverfrostPeaks;
            delete P.Q[i].HighpassHold;
            delete P.Q[i].InnothuleSwamp;
            delete P.Q[i].KithicorForest;
            delete P.Q[i].LakeRathetear;
            delete P.Q[i].LavastormMountains;
            delete P.Q[i].MistyThicket;
            delete P.Q[i].NektulosForest;
            delete P.Q[i].NorthKarana;
            delete P.Q[i].OasisofMarr;
            delete P.Q[i].OceanofTears;
            delete P.Q[i].QeynosHills;
            delete P.Q[i].RatheMountains;
            delete P.Q[i].SouthKarana;
            delete P.Q[i].SouthRo;
            delete P.Q[i].SoluseksEye;
            delete P.Q[i].SplitpawLair;
            delete P.Q[i].TheFeerrott;
            delete P.Q[i].WestCommonlands;
            delete P.Q[i].WestKarana;
            delete P.Q[i].ErudsCrossing;
            delete P.Q[i].ToxxuliaForest;
            delete P.Q[i].repeatSl3;
            delete P.Q[i].repeatSe3;
            delete P.Q[i].BBM1;
            delete P.Q[i].DC1;
            delete P.Q[i].DC2;
            delete P.Q[i].SM1;
            delete P.Q[i].BM1;
            delete P.Q[i].BM2;
            delete P.Q[i].CR1;
            delete P.Q[i].CR2;
            delete P.Q[i].CR3;
            delete P.Q[i].CR4;
            delete P.Q[i].CR5;
            delete P.Q[i].EC1;
            delete P.Q[i].EK1;
            delete P.Q[i].EK2;
            delete P.Q[i].EK3;
            delete P.Q[i].EK4;
            delete P.Q[i].EP1;
            delete P.Q[i].HH1;
            delete P.Q[i].HH2;
            delete P.Q[i].HH3;
            delete P.Q[i].HH4;
            delete P.Q[i].IS1;
            delete P.Q[i].KF1;
            delete P.Q[i].KF2;
            delete P.Q[i].LR1;
            delete P.Q[i].LR2;
            delete P.Q[i].LR3;
            delete P.Q[i].LM1;
            delete P.Q[i].LM2;
            delete P.Q[i].LM3;
            delete P.Q[i].LM4;
            delete P.Q[i].MT1;
            delete P.Q[i].NF1;
            delete P.Q[i].NK1;
            delete P.Q[i].NK2;
            delete P.Q[i].NK3;
            delete P.Q[i].NK4;
            delete P.Q[i].OM1;
            delete P.Q[i].OM2;
            delete P.Q[i].OM3;
            delete P.Q[i].OM4;
            delete P.Q[i].OT1;
            delete P.Q[i].OT2;
            delete P.Q[i].OT3;
            delete P.Q[i].OT4;
            delete P.Q[i].QH1;
            delete P.Q[i].RM1;
            delete P.Q[i].RM2;
            delete P.Q[i].RM3;
            delete P.Q[i].RM4;
            delete P.Q[i].SK1;
            delete P.Q[i].SK2;
            delete P.Q[i].SK3;
            delete P.Q[i].SK4;
            delete P.Q[i].SK5;
            delete P.Q[i].SR1;
            delete P.Q[i].SR2;
            delete P.Q[i].SR3;
            delete P.Q[i].SE1;
            delete P.Q[i].SE2;
            delete P.Q[i].SE3;
            delete P.Q[i].SE4;
            delete P.Q[i].SE5;
            delete P.Q[i].SL1;
            delete P.Q[i].SL2;
            delete P.Q[i].SL3;
            delete P.Q[i].SL4;
            delete P.Q[i].SL5;
            delete P.Q[i].SL6;
            delete P.Q[i].TF1;
            delete P.Q[i].WC1;
            delete P.Q[i].WC2;
            delete P.Q[i].WC3;
            delete P.Q[i].WK1;
            delete P.Q[i].WK2;
            delete P.Q[i].WK3;
            delete P.Q[i].ECX1;
            delete P.Q[i].ECX2;
            delete P.Q[i].ECX3;
            delete P.Q[i].TXF1;
        }
    }
    if (GLB.autoHide !== undefined) {
        delete GLB.autoHide;
    }
    //server settings
    if (!my.hardcoreMode) {
        my.hardcoreMode = false;
    }
    if (my.hardcoreMode === true) {
        my.hardcoreMode = "true";
    }
    if (my.hardcoreMode === false) {
        my.hardcoreMode = "false";
    }
    if (my.setFound === undefined) {
        my.setFound = 0;
    }
    if (my.story === undefined) {
        my.story = "Intro";
    }
    if (my.patch === undefined) {
        my.patch = patchVersion;
    }
    if (my.talent1 === undefined) {
        my.talent1 = 0;
    }
    if (my.talent2 === undefined) {
        my.talent2 = 0;
    }
    if (my.talent3 === undefined) {
        my.talent3 = 0;
    }
    if (my.talent4 === undefined) {
        my.talent4 = 0;
    }
    if (my.talent5 === undefined) {
        my.talent5 = 0;
    }
    if (my.talent6 === undefined) {
        my.talent6 = 0;
    }
    if (my.talent7 === undefined) {
        my.talent7 = 0;
    }
    if (my.talent8 === undefined) {
        my.talent8 = 0;
    }
    if (my.talent9 === undefined) {
        my.talent9 = 0;
    }
    if (my.talent10 === undefined) {
        my.talent10 = 0;
    }
    if (my.talent11 === undefined) {
        my.talent11 = 0;
    }
    if (my.talent12 === undefined) {
        my.talent12 = 0;
    }
    if (my.lastName === undefined) {
        my.lastName = "";
    }
    if (my.comboPlaneofFear === undefined) {
        my.comboPlaneofFear = 0;
    }
    if (my.comboPlaneofHate === undefined) {
        my.comboPlaneofHate = 0;
    }
    if (P.Q[0].repeatCB === undefined) {
        for (var i = 0; i <= 2; i++) {
            P.Q[i].repeatCB = false;
            P.Q[i].repeatER = false;
        }
    }
    if (P.Q[0].PlaneofFear === undefined) {
        for (var i = 0; i <= 2; i++) {
            P.Q[i].PlaneofFear = 0;
            P.Q[i].PlaneofHate = 0;
        }
    }
    if (P.Q[0].repeatCm3 === undefined) {
        for (var i = 0; i <= 2; i++) {
            P.Q[i].repeatCm3 = false;
            P.Q[i].repeatCt3 = false;
            P.Q[i].repeatKk3 = false;
            P.Q[i].repeatNl3 = false;
            P.Q[i].repeatLg3 = false;
            P.Q[i].repeatKk4 = false;
            P.Q[i].repeatNl4 = false;
            P.Q[i].KK6 = 0;
            P.Q[i].KK7 = 0;
            P.Q[i].KK8 = 0;
            P.Q[i].NL7 = 0;
            P.Q[i].NL8 = 0;
            P.Q[i].NL9 = 0;
            P.Q[i].NL10 = 0;
            P.Q[i].NL11 = 0;
            P.Q[i].NL12 = 0;
        }
    }
    if (P.Q[0].KK6 === undefined) {
        for (var i = 0; i <= 2; i++) {
            P.Q[i].KK6 = 0;
            P.Q[i].KK7 = 0;
            P.Q[i].KK8 = 0;
        }
    }
    if (P.Q[0].CM1 === undefined) {
        for (var i = 0; i <= 2; i++) {
            P.Q[i].CM1 = 0;
            P.Q[i].CM2 = 0;
            P.Q[i].CM3 = 0;
            P.Q[i].CM4 = 0;
            P.Q[i].CM5 = 0;
            P.Q[i].CM6 = 0;
            P.Q[i].CB1 = 0;
            P.Q[i].CB2 = 0;
            P.Q[i].CB3 = 0;
            P.Q[i].CB4 = 0;
            P.Q[i].CB5 = 0;
            P.Q[i].ER1 = 0;
            P.Q[i].ER2 = 0;
            P.Q[i].ER3 = 0;
            P.Q[i].ER4 = 0;
            P.Q[i].ER5 = 0;
            P.Q[i].GF1 = 0;
            P.Q[i].KK1 = 0;
            P.Q[i].KK2 = 0;
            P.Q[i].KK3 = 0;
            P.Q[i].KK4 = 0;
            P.Q[i].KK5 = 0;
            P.Q[i].LF1 = 0;
            P.Q[i].LF2 = 0;
            P.Q[i].BF1 = 0;
            P.Q[i].BF2 = 0;
            P.Q[i].BF3 = 0;
            P.Q[i].BF4 = 0;
            P.Q[i].BB1 = 0;
            P.Q[i].BB2 = 0;
            P.Q[i].BB3 = 0;
            P.Q[i].BB4 = 0;
            P.Q[i].CT1 = 0;
            P.Q[i].CT2 = 0;
            P.Q[i].CT3 = 0;
            P.Q[i].CT4 = 0;
            P.Q[i].CT5 = 0;
            P.Q[i].LG1 = 0;
            P.Q[i].LG2 = 0;
            P.Q[i].LG3 = 0;
            P.Q[i].LG4 = 0;
            P.Q[i].LG5 = 0;
            P.Q[i].LG6 = 0;
            P.Q[i].NL1 = 0;
            P.Q[i].NL2 = 0;
            P.Q[i].NL3 = 0;
            P.Q[i].NL4 = 0;
            P.Q[i].NL5 = 0;
            P.Q[i].NL6 = 0;
            P.Q[i].NJ1 = 0;
            P.Q[i].NJ2 = 0;
            P.Q[i].NJ3 = 0;
            P.Q[i].NJ4 = 0;
            P.Q[i].NJ5 = 0;
            P.Q[i].NR1 = 0;
            P.Q[i].NR2 = 0;
            P.Q[i].PF1 = 0;
            P.Q[i].PF2 = 0;
            P.Q[i].PF3 = 0;
            P.Q[i].PF4 = 0;
            P.Q[i].PF5 = 0;
            P.Q[i].PF6 = 0;
            P.Q[i].PF7 = 0;
            P.Q[i].PF8 = 0;
            P.Q[i].PF9 = 0;
            P.Q[i].PF10 = 0;
            P.Q[i].PF11 = 0;
            P.Q[i].PF12 = 0;
            P.Q[i].PF13 = 0;
            P.Q[i].PF14 = 0;
            P.Q[i].PF15 = 0;
            P.Q[i].PF16 = 0;
            P.Q[i].PF17 = 0;
            P.Q[i].PF18 = 0;
            P.Q[i].PF19 = 0;
            P.Q[i].PF20 = 0;
            P.Q[i].PF21 = 0;
            P.Q[i].PF22 = 0;
            P.Q[i].PH1 = 0;
            P.Q[i].PH2 = 0;
            P.Q[i].PH3 = 0;
            P.Q[i].PH4 = 0;
            P.Q[i].PH5 = 0;
            P.Q[i].PH6 = 0;
            P.Q[i].PH7 = 0;
            P.Q[i].PH8 = 0;
            P.Q[i].PH9 = 0;
            P.Q[i].PH10 = 0;
            P.Q[i].PH11 = 0;
            P.Q[i].PH12 = 0;
            P.Q[i].PH13 = 0;
            P.Q[i].PK1 = 0;
            P.Q[i].PK2 = 0;
            P.Q[i].PK3 = 0;
            P.Q[i].PK4 = 0;
            P.Q[i].PK5 = 0;
            P.Q[i].PK6 = 0;
            P.Q[i].PK7 = 0;
            P.Q[i].PK8 = 0;
            P.Q[i].PK9 = 0;
            P.Q[i].UG1 = 0;
            P.Q[i].UG2 = 0;
            P.Q[i].UG3 = 0;
            P.Q[i].UG4 = 0;
        }
    }
    if (P.Q[0].repeatPk4 === undefined) {
        for (var i = 0; i <= 2; i++) {
            P.Q[i].repeatPk4 = true;
        }
    }
    if (my.title === undefined) {
        my.title = "";
    }
    if (my.difficulty === undefined) {
        my.difficulty = 1;
    }
    if (my.ID === undefined) {
        my.ID = 0;
    }
    for (var i = 0; i <= 125; i++) {
        if (P.bank[i].cold === undefined) {
            P.bank[i].cold = 0;
        }
        if (P.bank[i].silence === undefined) {
            P.bank[i].silence = 0;
        }
        if (P.bank[i].leech === undefined) {
            P.bank[i].leech = 0;
        }
        if (P.bank[i].wraith === undefined) {
            P.bank[i].wraith = 0;
        }
        if (P.bank[i].req === undefined) {
            P.bank[i].req = 0;
        }
        if (P.bank[i].enhanceAll === undefined || isNaN(P.bank[i].enhanceAll)) {
            P.bank[i].enhanceAll = 0;
        }
        if (P.bank[i].quality === undefined) {
            P.bank[i].quality = 0;
        }
        if (P.bank[i].lightRadius < 0) {
            P.bank[i].lightRadius = 0;
        }
    }
    for (var i = 0; i <= 23; i++) {
        if (P.item[i].cold === undefined) {
            P.item[i].cold = 0;
        }
        if (P.item[i].silence === undefined) {
            P.item[i].silence = 0;
        }
        if (P.item[i].leech === undefined) {
            P.item[i].leech = 0;
        }
        if (P.item[i].wraith === undefined) {
            P.item[i].wraith = 0;
        }
        if (P.item[i].req === undefined) {
            P.item[i].req = 0;
        }
        if (P.item[i].enhanceAll === undefined || isNaN(P.item[i].enhanceAll)) {
            P.item[i].enhanceAll = 0;
        }
        if (P.item[i].quality === undefined) {
            P.item[i].quality = 0;
        }
        if (P.item[i].lightRadius < 0) {
            P.item[i].lightRadius = 0;
        }
    }
    for (var i = 0; i <= 14; i++) {
        if (P.eq[i].cold === undefined) {
            P.eq[i].cold = 0;
        }
        if (P.eq[i].silence === undefined) {
            P.eq[i].silence = 0;
        }
        if (P.eq[i].leech === undefined) {
            P.eq[i].leech = 0;
        }
        if (P.eq[i].wraith === undefined) {
            P.eq[i].wraith = 0;
        }
        if (P.eq[i].req === undefined) {
            P.eq[i].req = 0;
        }
        if (P.eq[i].enhanceAll === undefined || isNaN(P.eq[i].enhanceAll)) {
            P.eq[i].enhanceAll = 0;
        }
        if (P.eq[i].quality === undefined) {
            P.eq[i].quality = 0;
        }
        if (P.eq[i].lightRadius < 0) {
            P.eq[i].lightRadius = 0;
        }
    }
    if (my.championsSlain === undefined) {
        my.championsSlain = 0;
    }
    if (my.subzone === undefined) {
        my.subzone = 1;
    }
    if (my.season !== undefined) {
        delete my.season;
    }
    var a = (my.patch + "").split("-");
    var m2 = a[0] * 1;
    var m = a[1] * 1;
    var t = a[2] * 1;
    if (m2 <= 0) {
        if (m <= 8) {
            if (t <= 67) {
                resetTalents();
                talentResetNotify = true;
            }
        }
    }
}

function itemSwapStart() {
    itemSwapCount++;
}

function itemSwapDone() {
    itemSwapCount--;
    if (itemSwapCount <= 0) {
        itemSwapCount = 0;
        finishItemSwap();
    }
}
save.itemSwap = function(itemDragType, dragSlot, itemDropType, dropSlot) {
    itemSwapStart();
    var item1 = P[itemDragType][dragSlot];
    var item2 = P[itemDropType][dropSlot];
    $.ajax({
        url: 'php/itemSwap2.php',
        data: {
            item1: item1,
            item2: item2,
            itemDragType: itemDragType,
            dragSlot: dragSlot,
            itemDropType: itemDropType,
            dropSlot: dropSlot,
            name: my.name
        }
    }).done(function(data) {
        itemSwapDone();
    }).fail(function(data) {
        failToCommunicate();
    });
}
save.item = function(Slot) {
    if (location.protocol === "http:") {
        var item2 = jQuery.extend(true, [], P.item); //deep copy
        while (item2.length > 24) { // dont save town data
            item2.pop();
        }
        localStorage.setItem('inv' + (lsKey + characterslot + 10), JSON.stringify(item2));
    } else {
        itemSwapStart();
        $.ajax({
            url: 'php/game1.php',
            data: {
                run: "updateItem",
                item: P.item[Slot],
                Slot: Slot,
                slotType: 'item',
                name: my.name
            }
        }).done(function(data) {
            itemSwapDone();
        }).fail(function(data) {
            failToCommunicate();
        });
    }
}
save.eq = function(Slot) {
    if (location.protocol === "http:") {
        localStorage.setItem('eq' + (lsKey + characterslot), JSON.stringify(P.eq));
    } else {
        itemSwapStart();
        $.ajax({
            url: 'php/game1.php',
            data: {
                run: "updateItem",
                item: P.eq[Slot],
                Slot: Slot,
                slotType: 'eq',
                name: my.name
            }
        }).done(function(data) {
            itemSwapDone();
        }).fail(function(data) {
            failToCommunicate();
        });
    }
}
save.bank = function(Slot) {
    if (location.protocol === "http:") {
        if (enteredWorldOnce === true) {
            if (my.hardcoreMode === "true") {
                localStorage.setItem('HCbank4', JSON.stringify(P.bank));
            } else {
                localStorage.setItem('bank4', JSON.stringify(P.bank));
            }
        }
    } else {
        itemSwapStart();
        var t1 = new Date();
        $.ajax({
            url: 'php/game1.php',
            data: {
                run: "updateItem",
                item: P.bank[Slot],
                Slot: Slot,
                slotType: 'bank',
                name: my.name
            }
        }).done(function(data) {
            itemSwapDone();
        }).fail(function(data) {
            failToCommunicate();
        });
    }
}
save.GLB = function() {
    if (location.protocol === "http:") {
        localStorage.setItem('GLB', JSON.stringify(GLB));
    } else {
        $.ajax({
            url: 'php/game1.php',
            data: {
                run: "updateGLB",
                GLB: GLB
            }
        }).fail(function(data) {
            failToCommunicate();
        });
    }
}
function serverLogout(){
	$.ajax({
		url: 'php/game1.php',
		data: {
			run: "camp"
		}
	}).done(function(data) {
		window.onbeforeunload = null;
		location.reload();
	});
}
save.my = function(loc) {
    if (location.protocol === "http:" || loc === "local") {
        localStorage.setItem('my' + (lsKey + characterslot), JSON.stringify(my));
    } else {
		if(!g.hardcoreDeathStatus){
			$.ajax({
				url: 'php/game1.php',
				data: {
					run: "updateMy",
					my: my
				}
			}).done(function(data) {
				if (campStatus === true) {
					QMsg("Logging out...");
					serverLogout();
				}
			}).fail(function(data) {
				failToCommunicate();
			});
		}
    }
}
save.Lmy = function() {
    localStorage.setItem('Lmy' + (lsKey + characterslot), JSON.stringify(Lmy));
}
save.quests = function() {
    if (location.protocol === "https:") {
        function convert(foo) {
            if (foo === true) {
                return 1;
            } else {
                return 0;
            }
        }
        var qq = jQuery.extend(true, {}, P.Q[diff()]); //deep copy
        qq.repeatCB = convert(qq.repeatCB);
        qq.repeatCm3 = convert(qq.repeatCm3);
        qq.repeatCt3 = convert(qq.repeatCt3);
        qq.repeatER = convert(qq.repeatER);
        qq.repeatKk3 = convert(qq.repeatKk3);
        qq.repeatKk4 = convert(qq.repeatKk4);
        qq.repeatLg3 = convert(qq.repeatLg3);
        qq.repeatNl3 = convert(qq.repeatNl3);
        qq.repeatNl4 = convert(qq.repeatNl4);
        qq.repeatPk4 = convert(qq.repeatPk4);
        $.ajax({
            url: 'php/game1.php',
            data: {
                run: "updateQuests",
                diff: diff(),
                Q: qq,
                name: my.name
            }
        }).fail(function(data) {
            failToCommunicate();
        });
    } else {
        localStorage.setItem('Q' + (lsKey + characterslot), JSON.stringify(P.Q));
    }
}

function saveGame() {
    save.Lmy();
    save.my();
    if (location.protocol === "http:") {
        save.GLB();
        save.quests();
        save.bank();
        save.item();
        save.eq();
    }
}

function delChar() {
    playAudio('button_2');
    if (location.protocol === "http:") {
        if (my.name == "" || my.name == null || foundCharacter === false) {
            return;
        }
    } else {
        if ($("#characterslot" + characterslot).children().first().text() === "") {
            return;
        }
    }
    $("#deletecharfade")
        .css({
            opacity: 0,
            display: 'block'
        })
        .animate({
            opacity: .66
        }, 311, "easeOutQuad");
    $("#deletecharconfirm,#deleteConfirm,#deleteCancel")
        .css({
            opacity: 0,
            display: 'block'
        })
        .animate({
            opacity: 1
        }, 311, "easeOutQuad");
    if (location.protocol === "http:") {
        $("#deleteconfirmmsg").html("Delete " + my.name + "?<br>Are You Sure?");
    } else {
        $("#deleteconfirmmsg").html("Delete " + $("#characterslot" + characterslot).children().first().text() + "?<br>Are You Sure?");
    }
    $("#deleteConfirm").removeClass("disabled");
}

function deleteCharSlot() {
    if ($("#deleteConfirm").hasClass("disabled") === true) {
        return;
    }

    function deleteMyChar() {
        $("#deletecharfade").stop(true, true).animate({
            opacity: 0
        }, 99, function() {
            $(this).css('display', 'none');
        });
        $("#deletecharconfirm,#deleteConfirm,#deleteCancel").animate({
            opacity: 0
        }, 99, function() {
            $(this).css('display', 'none');
        });

        function do1() {
            localStorage.removeItem("my" + (lsKey + characterslot));
            localStorage.removeItem("Lmy" + (lsKey + characterslot));
            localStorage.removeItem("inv" + (lsKey + characterslot + 10));
            localStorage.removeItem("eq" + (lsKey + characterslot));
            localStorage.removeItem("Q" + (lsKey + characterslot));
            T.delayedCall(.125, loadAllCharacters);
        }
        if (location.protocol === "http:") {
            do1();
        } else {
            $.ajax({
                data: {
                    run: "deleteCharacter",
                    name: $("#characterslot" + characterslot).children().first().text()
                }
            }).done(function(data) {
                D.getElementById('characterslot' + characterslot).style.display = 'none';
                for (var i = 1; i <= 16; i++) {
                    if (D.getElementById('characterslot' + i).style.display === "inline-block") {
                        loadCharacterSlot(i);
                        continue;
                    }
                }
                charactersFound -= 1;
                setCharacterSelectPanel();
                loadServerCharacters();
            }).fail(function() {
                QMsg("Failed to contact the server.");
            });
        }
    }
    playAudio('button_2');
    $("#deleteConfirm").addClass("disabled");
    $("#deleteconfirmmsg").html("Deleting " + my.name + ". Please Wait.");
    T.delayedCall(.1, deleteMyChar);
}

function cancelCharDelete() {
    T.to('#deletecharfade', .25, {
        opacity: 0,
        onComplete: function() {
            D.getElementById('deletecharfade').style.display = 'none';
        }
    });
    $("#deletecharconfirm,#deleteConfirm,#deleteCancel").animate({
        opacity: 0
    }, 250, function() {
        $(this).css('display', 'none');
    });
    $("#enterworld, #characterslot1, #characterslot2, #characterslot3, #characterslot4, #characterslot5, #characterslot6, #characterslot7, #characterslot8, #characterslot9, #characterslot10, #characterslot11,#characterslot12,#characterslot13,#characterslot14,#characterslot15,#characterslot16").removeClass("disabled");
}

function checkDungeon(foo) {
    var bar = false;
    if (foo === "Greenthorn Cavern" ||
        foo === "Riven Grotto" ||
        foo === "Braxxen's Bastille" ||
        foo === "Arcturin's Crypt" ||
        foo === "Galeblast Fortress" ||
        foo === "Ashenflow Peak" ||
        foo === "Dire Sanctum" ||
        foo === "Nimgaul" ||
        foo === "Dire Sanctum") {
        bar = true;
    }
    return bar;
}

function checkCity(foo) {
    var bar = false;
    if (foo === "Aspen Grove") {
        bar = true;
    }
    return bar;
}

function loadWeaponSlashes() {
    if (P.eq[12].type === "slashed") {
        asset[109] = D.createElement('img');
        asset[109].src = "/images1/slashed.png";
    } else if (P.eq[12].type === "crushed") {
        asset[107] = D.createElement('img');
        asset[107].src = "/images1/crushed.png";
    } else if (P.eq[12].type === "pierced") {
        asset[105] = D.createElement('img');
        asset[105].src = "/images1/pierced.png";
    } else if (P.eq[12].type === "punched") {
        asset[103] = D.createElement('img');
        asset[103].src = "/images1/punched.png";
    } else if (P.eq[12].type === "smashed" || "staff" === P.eq[12].type) {
        asset[101] = D.createElement('img');
        asset[101].src = "/images1/smashed.png";
    } else if (P.eq[12].type === "cleaved") {
        asset[100] = D.createElement('img');
        asset[100].src = "/images1/cleaved.png";
    }
    if (P.eq[13].type === "crushed") {
        asset[106] = D.createElement('img');
        asset[106].src = "/images1/crushedL.png";
    } else if (P.eq[13].type === "pierced") {
        asset[104] = D.createElement('img');
        asset[104].src = "/images1/piercedL.png";
    } else if (P.eq[13].type === "punched") {
        asset[102] = D.createElement('img');
        asset[102].src = "/images1/punched.png";
    } else if (P.eq[13].type === "slashed") {
        asset[108] = D.createElement('img');
        asset[108].src = "/images1/slashedL.png";
    }
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
        $('<img/>')[0].src = this;
    });
}

function loadMiscImages() {
    asset[115] = D.createElement("img");
    asset[115].src = '//i.imgur.com/hqFEnqI.png';
    asset[116] = D.createElement('img');
    asset[116].src = "//" + itemSprite;
    asset[117] = D.createElement('img');
    asset[117].src = "/images1/NGbutton.png";
    asset[118] = D.createElement('img');
    asset[118].src = "/images1/classPlate.png";
    asset[119] = D.createElement('img');
    asset[119].src = "/images1/rock380-430.jpg";
    asset[120] = D.createElement('img');
    asset[120].src = "/images1/win5.png";
    asset[121] = D.createElement('img');
    asset[121].src = "/images1/ng_logo_532x428.png";
    asset[122] = D.createElement('img');
    asset[122].src = "/images1/entername.png";
    asset[122] = D.createElement('img');
    asset[122].src = "/images1/ccFrame.png";
    asset[123] = D.createElement('img');
    asset[123].src = "/images1/statFrame.png";
    asset[124] = D.createElement('img');
    asset[124].src = '/images1/blank.png';
    asset[125] = D.createElement('img');
    asset[125].src = '//i.imgur.com/d1iYz2W.jpg';
    asset[126] = D.createElement('img');
    asset[126].src = "/images1/raceButtons.png";
    asset[127] = D.createElement('img');
    asset[127].src = "/images1/myhpbardiv.png";
    asset[128] = D.createElement('img');
    asset[128].src = "/images1/bossPlate.png";
    asset[129] = D.createElement('img');
    asset[129].src = "/images1/championPlate.png";
    asset[130] = D.createElement('img');
    asset[130].src = "/images1/rarePlate.png";
    asset[131] = D.createElement('img');
    asset[131].src = "/images1/normalPlate.png";
    asset[132] = D.createElement('img');
    asset[132].src = "/images1/statButton.png";
    asset[133] = D.createElement('img');
    asset[133].src = "/images1/greyButton.png";
    asset[134] = D.createElement('img');
    asset[134].src = "/images1/equipment.png";
    asset[135] = D.createElement('img');
    asset[135].src = "/images1/stats.png";
    asset[136] = D.createElement('img');
    asset[136].src = "/images1/tile.png";
    asset[137] = D.createElement('img');
    asset[137].src = "/images1/wideHead.png";
    asset[139] = D.createElement('img');
    asset[139].src = "/images1/itemtt.png";
    asset[140] = D.createElement('img');
    asset[140].src = "/images1/portal.png";
    asset[141] = D.createElement('img');
    asset[141].src = "/images1/portraits.png";
    asset[142] = D.createElement('img');
    asset[142].src = '/images1/greenparticle200.png';
    asset[143] = D.createElement('img');
    asset[143].src = '/images1/magentaparticle200.png';
    asset[144] = D.createElement('img');
    asset[144].src = '/images1/yellowparticle200.png';
    asset[145] = D.createElement('img');
    asset[145].src = '/images1/glacialSpike.png';
    asset[146] = D.createElement('img');
    asset[146].src = '/images1/fireball.png';
    asset[147] = D.createElement('img');
    asset[147].src = '/images1/bossPlate.png';
    asset[148] = D.createElement('img');
    asset[148].src = '//i.imgur.com/7bn79bN.png';
    asset[201] = D.createElement('audio');
    asset[201].src = soundLocation + "button_2." + audioExt;
    var foo = [];
    var bar = [
        'blue',
        'purple',
        'orange',
        'red',
        'magenta',
        'green',
        'white',
        'teal',
        'yellow'
    ];
    for (var i = 0; i < bar.length; i++) {
        foo.push(bar[i] + "particle50");
    }
    for (var i = 150, len = foo.length + 150; i < len; i++) {
        asset[i] = D.createElement('img');
        asset[i].src = "/images1/" + foo[i - 150] + ".png";
    }
}

function loadSkillImages() {
    var foo = [];
    if (my.job === "Warrior") {
        foo = ['kick', 'slam', 'punchedRed', 'hemorrhage', 'bloodDrop', 'shockwave', 'subjugate', 'decisiveBlow', 'tremor', 'absorbSpell', 'bulwark', 'buffRings', 'intrepidMight', 'kick', 'yellowLight3', 'burst', 'blueNova'];
    }
    if (my.job === "Monk") {
        foo = ['fearImage2', 'tigerStrike', 'eagleStrike', 'whiteLight3', 'cheetahStrike', 'cobraStrike', 'dragonStrike', 'burst', 'burstRed', 'craneKick', 'windmillKick', 'tremor', 'ancestralFlurry', 'ancestralFlurry2', 'lineNova', 'burstGreen', 'chakraBlast', 'smoke', 'whiteRays', 'yellowLight3', 'flyingKick', 'frostNova', 'lightningBlast'];
    }
    if (my.job === "Rogue") {
        foo = ['blindImage', 'shadowStrike', 'widowStrike', 'poisonDrop', 'burst', 'burstRed', 'lacerate', 'bloodDrop', 'lineNovaWhite', 'tremorFG', 'tremorBG', 'prowlingGash', 'coldBlood', 'ancientWill', 'tremor', 'mirageStrike', 'poisonSpray'];
    }
    if (my.job === "Shadow Knight") {
        foo = ['fearImage2', 'slam', 'crescentCleave', 'deathStrike', 'harmTouch', 'bloodDrop', 'purpleLight3', 'orangeLight3', 'tealLight3', 'magentaLight3', 'lineNovaRed', 'lifeTap', 'greenLight3', 'darkTremor', 'redLight3'];
    }
    if (my.job === "Paladin") {
        foo = ['rootImage', 'slam', 'rebuke', 'retribution', 'purge', 'vengeance', 'lineNovaPink', 'vengeanceL', 'blueLight3', 'magentaLight3', 'greenLight3', 'whiteLight3', 'tremor', 'yellowLight3', 'tealLight3', 'lineNovaMagenta', 'ardentJudgment', 'buffRings', 'lightningBlast', 'benediction', 'benedictionFloor'];
    }
    if (my.job === "Ranger") {
        foo = ['orbIcon', 'kick', 'redLight3', 'blueLight3', 'greenLight3', 'yellowLight3', 'tealLight3', 'rngFire', 'rngSmoke', 'rngFireOut', 'counterShot', 'arrow', 'lineNova', 'ignite', 'snare', 'whiteLight3', 'buffRings', 'lightningBlast', 'petExplosion'];
    }
    if (my.job === "Bard") {
        foo = ['sleepImage', 'drainFG', 'blueLight3', 'greenLight3', 'tealLight3', 'redLight3', 'orangeLight3', 'yellowLight3', 'whiteLight3', 'drainBG', 'purpleLight3', 'heart', 'lineNovaMagenta', 'rngSmoke', 'chainFG', 'chainBG', 'benediction', 'benedictionFloor', 'tremorFG', 'tremorBG', 'burst'];
    }
    if (my.job === "Druid") {
        foo = ['rootImage', 'redLight3', 'purpleLight3', 'blueLight3', 'greenLight3', 'whiteLight3', 'orangeLight3', 'yellowLight3', 'tealLight3', 'ignite', 'lightningBlast', 'fissure', 'boulder', 'tornado', 'snare'];
    }
    if (my.job === "Cleric") {
        foo = ['rootImage', 'orangeLight3', 'yellowLight3', 'blueLight3', 'tealLight3', 'martyrsBlessing', 'greenLight3', 'magentaLight3', 'lineNovaMagenta', 'expelCorruption', 'lineNova', 'holyMight', 'buffRings', 'guardianAngel', 'benediction', 'benedictionFloor', 'tremor', 'lightningNova', 'retribution'];
    }
    if (my.job === "Shaman") {
        foo = ['rootImage', 'sleepImage', 'freezeRoot', 'tealLight3', 'redLight3', 'greenLight3', 'blueLight3', 'purpleLight3', 'frostStrike', 'poisonNova', 'whiteLight3'];
    }
    if (my.job === "Necromancer") {
        foo = ['fearImage2', 'greenLight3', 'yellowLight3', 'redLight3', 'purpleLight3', 'magentaLight3', 'boneSpirit', 'lifeTap', 'buffRings', 'diamondSkin', 'asystole', 'detonation', 'corpseExplosion', 'howlingTerror', 'lineNovaRed', 'orangeLight3'];
    }
    if (my.job === "Enchanter") {
        foo = ['blueLight3', 'magentaLight3', 'orangeLight3', 'whiteLight3', 'purpleLight3', 'tealLight3', 'heart', 'mysticRune', 'windmillKick', 'colorShift'];
    }
    if (my.job === "Magician") {
        foo = ['iceIcon', 'blindImage', 'snare', 'redLight3', 'yellowLight3', 'greenLight3', 'whiteLight3', 'tealLight3', 'orangeLight3', 'lavaBolt', 'frozenOrb', 'fireparticle50', 'manaShield', 'purpleRings', 'psionic1', 'psionic2', 'psionic3', 'psionic4', 'petExplosion', 'alteredState2', 'tremor', 'freezeRoot', 'yellowOrb'];
    }
    if (my.job === "Wizard") {
        foo = ['iceIcon', 'freezeRoot', 'frostNova', 'iceBolt', 'tealLight3', 'blueLight3', 'redLight3', 'whiteLight3', 'yellowLight3', 'orangeLight3', 'chargedBolts', 'chargedBolts2', 'magicMissile', 'fireball', 'glacialSpike', 'iceComet', 'meteor', 'fissure', 'chainLightning', 'chainFG', 'chainBG', 'fireBolt', 'staticBolt', 'tremor'];
    }
    foo.push("bloodSpray");
    for (var i = 0, len = foo.length; i < len; i++) {
        asset[i] = new Image();
        asset[i].src = "/images1/" + foo[i] + ".png";
    }
}

function loadClassSounds() {
    var foo;
    var caster = false;
    if (charactersFound > 0 && my.job !== "") {
        if (my.job === "Warrior") {
            foo = ['slice', 'tremor', 'flshhit6', 'flshhit5', 'flshhit3', 'energyshield', 'shoutFemale', 'warCry', 'warriorShout', 'spellCastHeal2', 'spellDoneBuff', 'flshhit4'];
        } else if (my.job === "Monk") {
            foo = ['flshhit3', 'flshhit4', 'flshhit5', 'flshhit6', 'flshhit7', 'death_mb', 'death_fl', 'novaice', 'spellCastHeal3', 'quickness', 'lightning2', 'handofgod', 'spellCastEvoke2', 'sanctuary', 'drakesat', 'holylight'];
        } else if (my.job === "Rogue") {
            foo = ['fade', 'bash', 'flshhit3', 'chillblood', 'spellDoneBoom', 'cloak', 'quickness', 'stab', 'handofgod', 'cobra', 'summon', 'slice', 'fall_hit'];
        } else if (my.job === "Shadow Knight") {
            foo = ['slice', 'skeleton_die', 'skeleton_att', 'skeleton_hit'];
            caster = true;
        } else if (my.job === "Paladin") {
            foo = ['holybolt', 'lightning2', 'zeal', 'handofgod', 'fanaticism', 'cleansing', 'spellCastHeal3'];
            caster = true;
        } else if (my.job === "Ranger") {
            foo = ['arrow3', 'arrowhit', 'bowdraw', 'novaelec', 'explode1', 'explode2', 'explode3', 'lightning2'];
            caster = true;
        } else if (my.job === "Bard") {
            foo = ['might', 'dissonance', 'quickness', 'prayer', 'fanaticism', 'holybolt', 'sanctuary', 'spellDoneBuff', 'confuse', 'spellDoneHeal', 'clarity', 'decrepify', 'shieldofsongs', 'dirge', 'spellDoneBuff', 'handofgod', 'flshhit4'];
        } else if (my.job === "Druid") {
            foo = ['windcast', 'lightning1', 'lightning2', 'lightning3', 'earthquakeloop1', 'earthquakeloop2', 'blue3', 'explode1', 'explode2', 'explode3'];
            caster = true;
        } else if (my.job === "Cleric") {
            foo = ['spellCastHeal3', 'redemption', 'handofgod', 'dirge', 'bolthammercast', 'handofgodbolt'];
            caster = true;
        } else if (my.job === "Shaman") {
            foo = ['poisonnova', 'wolf_att2', 'wolf_die2', 'wolf_hit2'];
            caster = true;
        } else if (my.job === "Necromancer") {
            foo = ['skeleton_die', 'skeleton_att', 'skeleton_hit', 'bonespirit', 'corpseexplode4', 'confuse', 'corpseexplodecast'];
            caster = true;
        } else if (my.job === "Enchanter") {
            foo = ['fall_hit', 'novaice'];
            caster = true;
        } else if (my.job === "Magician") {
            foo = ['elem_die3', 'elem_att3', 'elem_hit3', 'infernoloop', 'icespike1', 'icespike2', 'icespike3', 'energyshield', 'zap1', 'zap2', 'zap3', 'blue3', 'poisonnova', 'lightning1', 'lightning2', 'lightning3', 'explode1', 'explode2', 'explode3', 'novaelec', 'fade'];
            caster = true;
        } else if (my.job === "Wizard") {
            foo = ['zap1', 'zap2', 'zap3', 'explode1', 'explode2', 'explode3', 'chargedbolt', 'novaice', 'icebolt1', 'icebolt2', 'icebolt3', 'lightning1', 'lightning2', 'lightning3', 'icespike1', 'shivers', 'meteorlaunch', 'handofgod', 'teleport', 'summon'];
            caster = true;
        }
        foo.push('levelup2',
            'button_2',
            'equipRing',
            'equipAccessory',
            'equipWeapon',
            'equipShield',
            'equipPlate',
            'equipChain',
            'equipLeather',
            'endquest',
            'shldblk'
        );
        if (my.race === "Wood Elf") {
            foo.push('fade');
        }
        if (caster === true) {
            foo.push('spellDoneSlam', 'spellDoneBuff', 'spellDoneBoom', 'spellDoneFlames', 'spellDoneHeal', 'spellDoneHarm', 'spellCastEvoke1', 'spellCastEvoke2', 'spellCastDot', 'spellCastAbjure');
        }
        foo.push('flshhit1', 'flshhit2', 'kick', 'blockBlunt', 'blockSword');
        for (var i = 0, len = foo.length; i < len; i++) {
            asset[i + 250] = D.createElement('audio');
            asset[i + 250].src = soundLocation + foo[i] + "." + audioExt;
        }
    }
}

function reportAssets() {
    for (var i = 0; i <= 300; i++) {
        if (asset[i] !== undefined) {
            cLog(i + ': ' + asset[i].src);
        }
    }
}
$("#bank").on('click', '.bankTabActive, .bankTabDisabled', function() {
    var e = document.getElementsByClassName('bankTab');
    for (var i = 0, len = e.length; i < len; i++) {
        e[i].className = "bankTab bankTabDisabled";
    }
    this.className = "bankTab bankTabActive";
    activeBankTab = $(this).index();
    renderBank(maxBankSlots);
    playAudio('button_2');
});

function renderBank(max) {
    var start = (activeBankTab * 90);
    var end = start + 90;
    if (end > max) {
        end = max;
    }
    var a = [
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
        'X',
        'XI',
        'XII'
    ];
    var maxTab = M.ceil(max / 90);
    var z = '';
    for (var i = 0; i < 12; i++) {
        var tabClass = 'bankTab bankTabDisabled';
        if (i >= maxTab) {
            tabClass = 'bankTab bankTabLocked';
        }
        if (i === activeBankTab) {
            tabClass = 'bankTab bankTabActive';
        }
        z += "<div class='" + tabClass + "'>" + a[i] + "</div>"
    }
    D.getElementById('bankTabWrap').innerHTML = z;
    var z = '';
    for (var i = start; i < end; i++) {
        z += "<li class='bankBG' id='bank" + i + "BG'>BANK";
        if (P.bank[i].name) {
            z += "<img id='bank" + i + "' src='//" + itemSprite + "' class='bank' style='left:" + P.bank[i].xPos + "px;top:" + P.bank[i].yPos + "px'>";
        } else {
            z += "<img id='bank" + i + "' src='/images1/blank.png' class='bank'>";
        }
        "</li>";
    }
    D.getElementById('bankContainer').innerHTML = z;
}

function changeZoneMusic() {
    var m1 = 'dungeonA';
    var x = myZone();
    if (x === "Salubrin Forest") {
        m1 = "forestA";
    }
    if (x === "Tendolin Meadows" || x === "Kordata Marshlands" || x === "Lanfeld Outpost") {
        m1 = "forestB";
    }
    if (x === "Viston's Redoubt" || x === "Galeblast Fortress" || x === "Kordata Ruins" || x === "Fahlnir Citadel") {
        m1 = "desertB";
    }
    if (!cityStatus) {
        playAmbient(m1);
    } else {
        playCityMusic();
        // WHY?!
        setTimeout(function() {
            playCityMusic();
        }, 100);
    }
}

function travelZone(zone, sz) {
    Mname = "";
    $NG.mobBar.css("visibility", "hidden");
    NG.mobName.textContent = "";
    NG.mobLevel.textContent = '';
    NG.mobTraits.innerHTML = "";
    if (g.difficulty === 1) {
        my.zone = zone;
        my.subzone = sz;
    } else if (g.difficulty === 2) {
        my.zoneN = zone;
        my.subzoneN = sz;
    } else if (g.difficulty === 3) {
        my.zoneH = zone;
        my.subzoneH = sz;
    }
    indoorStatus = checkDungeon(zone);
    if (travelStatus === 0) {
        var e = D.getElementById("travelId");
        e.className = "buttonsManage";
        e.style.backgroundPosition = "-80px 0";
        travelStatus = 1;
    }
    for (var i = 0; i <= 4; i++) {
        MOB[i].style.display = 'none';
        MOB[i].style.opacity = 0;
        stage[i].removeAllChildren();
        canvas[i].style.top = '0px';
        canvas[i].style.left = '0px';
        MOBNAME[i].style.color = '#00FA9A';
        MOBNAME[i].innerHTML = '';
    }
    $("#window2dawn, #window2zoneday")
        .css({
            display: 'block',
            opacity: 0
        }).animate({
            opacity: 1
        }, 0, "easeOutQuad");
    travelToggle();
    D.getElementById('questJournal').style.display = "none";
    questJournalBlock = 1;
    loadZone();
}

function myZone() {
    if (location.protocol === "http:" || g.view === "Game" || g.view === "Intro") {
        if (my.difficulty === 1) {
            return my.zone;
        } else if (my.difficulty === 2) {
            return my.zoneN;
        } else {
            return my.zoneH;
        }
    } else {
		var x;
        if (srv.difficulty === 1) {
			x = $("#characterslot" + characterslot).data('zone');
        } else if (srv.difficulty === 2) {
			x = $("#characterslot" + characterslot).data('zoneN');
        } else {
			x = $("#characterslot" + characterslot).data('zoneH');
        }
		if(x===undefined){
			return '';
		}else{
			return x;
		}
    }
}

function mySubzone() {
    if (location.protocol === "http:" ||
        g.view === "Game") {
        if (my.difficulty === 1) {
            return my.subzone;
        } else if (my.difficulty === 2) {
            return my.subzoneN;
        } else {
            return my.subzoneH;
        }
    } else {
		var x;
        if (srv.difficulty === 1) {
            x = $("#characterslot" + characterslot).data('subzone');
        } else if (srv.difficulty === 2) {
            x = $("#characterslot" + characterslot).data('subzoneN');
        } else {
            x = $("#characterslot" + characterslot).data('subzoneH');
        }
		if(x===undefined){
			return '';
		}else{
			return x;
		}
    }
}

function stopMusic() {
    D.getElementById("bgmusic").pause();
}

function stopAmbient() {
    D.getElementById('bgamb1').pause();
    D.getElementById('bgamb2').pause();
}

function loadZone() {
    if (g.view !== "Intro") {
        stopMusic();
    }
    for (var i = 0; i <= 4; i++) {
        mob[i].name = '';
    }
    stopAmbient();
    loreMsg = [];
    $("#townPortal").remove();
    portalStatus = false;
    $("#lore").css('display', 'none');
    hide(['window3', 'chatId', 'combatId', 'window5Id', 'window6']);
    D.getElementById('errorMsg').innerHTML = "";
    T.set("#questNotify,#mapNotify", {
        opacity: 0
    });
    cityMenuClick();
    cancelMySpell();
    enteredWorld = false;
    $("#characterSelectScreen").css('display', 'none');
    Chat(("Loading... please wait."));
    attackStatus = 1;
    for (var i = 0; i <= 4; i++) {
        mob[i].attackStatus = 1;
    }
    //start here
    var zig = [];
    var foo = "blank.png";
    cityStatus = false;
    //town shit
    var _z = myZone();
    if (_z === "Fahlnir Citadel") {
        foo = 'fahlnir1.jpg';
        if (mySubzone() === 2) {
            foo = 'fahlnir2.jpg';
        }
        if (mySubzone() === 3) {
            foo = 'fahlnir3.jpg';
        }
        zig = [
            'a dark elf female',
            'a dark elf female plate',
            'a gargoyle',
            'a dark elf male',
            'an imp',
            'a shadowed man',
            'a dark elf male plate',
            'a dark elf matron'
        ];
    }
    if (_z === "Lanfeld Outpost") {
        foo = "lanfeld1.jpg";
        if (mySubzone() === 2) {
            foo = "lanfeld2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "lanfeld3.jpg";
        }
        zig = [
            'an orc',
            'grimden'
        ];
    }
    if (_z === "Arcturin's Crypt") {
        foo = "arcturin1.jpg";
        if (mySubzone() === 2) {
            foo = "arcturin2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "arcturin3.jpg";
        }
        zig = [
            'a faerie',
            'a werewolf',
            'a male zombie',
            'a terror',
            'a ghoul',
            'a beetle',
            'a mummy',
            'a skeleton',
            'a dark skeleton',
            'a female zombie',
            'a fungus',
            'garanel rucksif'
        ];
    }
    if (_z === "Salubrin Forest") {
        foo = "salubrin.jpg";
        zig = [
            'a wolf',
            'an orc',
            'a faerie',
            'a wisp',
            'a skeleton'
        ];
    }
    if (_z === "Viston's Redoubt") {
        foo = "viston1.jpg";
        if (mySubzone() === 2) {
            foo = "viston2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "viston3.jpg";
        }
        if (mySubzone() === 4) {
            foo = "viston4.jpg";
        }
        zig = [
            'a gargoyle',
            'a dhampyre',
            'an imp',
            'a bat',
            'a vampire female',
            'a werewolf',
            'phinigel autropos',
            'a purple dragon'
        ];
    }
    if (_z === "Tendolin Meadows") {
        foo = "tendolin.jpg";
        zig = [
            'a faerie',
            'a brown spider',
            'a wolf',
            'a mummy',
            'a faerie',
            'a shadowed man',
            'a skeleton',
            'a heart spider',
            'an orc'
        ];
    }
    if (_z === "Riven Grotto") {
        foo = "riven1.jpg";
        if (mySubzone() === 2) {
            foo = "riven2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "riven3.jpg";
        }
        zig = [
            'a rat',
            'a dark elf female plate',
            'a human male',
            'a human female',
            'a wisp',
            'a male zombie',
            'a mummy',
            'a dark elf male',
            'a skeleton',
            'a dark skeleton',
            'a ghoul',
            'a female zombie'
        ];
    }
    if (_z === "Greenthorn Cavern") {
        foo = "greenthorn1.jpg";
        if (mySubzone() === 2) {
            foo = "greenthorn2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "greenthorn3.jpg";
        }
        zig = [
            'a gnoll'
        ];
    }
    if (_z === "Temple of Prenssor") {
        foo = "prenssor1.jpg";
        if (mySubzone() === 2) {
            foo = "prenssor2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "prenssor3.jpg";
        }
        zig = [
            'a clay golem',
            'a gorilla',
            'a lizardman',
            'a steel golem',
            'a stone golem',
            'avatar of fear'
        ];
    }
    if (_z === "Kordata Ruins") {
        foo = "ruins1.jpg";
        if (mySubzone() === 2) {
            foo = "ruins3.jpg";
        }
        if (mySubzone() === 3) {
            foo = "ruins2.jpg";
        }
        zig = [
            'a gargoyle',
            'an anuran',
            'a heart spider',
            'a faerie',
            'an evil eye round'
        ];
    }
    if (_z === "Ashenflow Peak") {
        foo = "ashenflow1.jpg";
        if (mySubzone() === 2) {
            foo = "ashenflow2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "ashenflow3.jpg";
        }
        if (mySubzone() === 4) {
            foo = "ashenflow4.jpg";
        }
        zig = [
            'a kobold',
            'an imp',
            'a jungle spider',
            'a bat',
            'a beetle',
            'a fire elemental',
            'a brown spider',
            'a heart spider',
            'a red goblin',
            'a fire giant',
            'a red dragon'
        ];
    }
    if (_z === "Braxxen's Bastille") {
        foo = "braxxen1.jpg";
        if (mySubzone() === 2) {
            foo = "braxxen2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "braxxen3.jpg";
        }
        zig = [
            'an anuran',
            'a heart spider',
            'a red goblin',
            'a skeleton',
            'a human male',
            'a human female',
            'a terror',
            'a dark elf male',
            'braxxen',
            'a dark elf female'
        ];
    }
    if (_z === "Galeblast Fortress") {
        foo = "galeblast1.jpg";
        if (mySubzone() === 2) {
            foo = "galeblast2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "galeblast3.jpg";
        }
        if (mySubzone() === 4) {
            foo = "galeblast4.jpg";
        }
        zig = [
            'a white wolf',
            'a blue goblin',
            'an ice giant',
            'a white spider',
            'a blue dragon'
        ];
    }
    if (_z === "Kordata Marshlands") {
        foo = "marshland1.jpg";
        if (mySubzone() === 2) {
            foo = "marshland2.jpg";
        }
        if (mySubzone() === 3) {
            foo = "marshland3.jpg";
        }
        zig = [
            'a fungus',
            'a dark skeleton',
            'a heart spider'
        ];
    }
    if (_z === "Nimgaul") {
        foo = "nimgaul.jpg";
        zig = [
            'a male zombie',
            'a female zombie',
            'a ghoul',
            'an evil eye round',
            'a faerie',
            'an anuran',
            'a white spider',
            'an imp',
            'a terror',
            'a gorilla',
            'a mummy',
            'a wisp',
            'a fungus',
            'a vampire female',
            'a clay golem',
            'a stone golem',
            'a steel golem',
            'dracoliche',
            'cazic'
        ];
    }
    if (_z === "Dire Sanctum") {
        foo = "sanctum.jpg";
        zig = [
            'a stone golem',
            'a female zombie',
            'a vampire female',
            'a dhampyre',
            'a gargoyle',
            'a dark elf male',
            'a mummy',
            'a ghoul',
            'a terror',
            'a rat',
            'a skeleton',
            'dracoliche',
            'maestro',
            'innoruuk'
        ];
    }
    if (_z === "Edenburg") {
        var zog = "a human female.png";
        cityStatus = true;
        foo = "edenburg.jpg";
        zog = "edenburg.png";
        zig = [
            'edenburg'
        ];
        NPCname = "Miranda Crossheart";
    }
    if (_z === "Aspen Grove") {
        var zog = "a halfling male.png";
        cityStatus = true;
        foo = "aspenGrove.jpg";
        zog = "aspenGrove.png";
        zig = [
            'aspenGrove'
        ];
        NPCname = "Rendo Surefoot";
    }
    if (_z === "Artremia") {
        var zog = "a wood elf female.png";
        cityStatus = true;
        foo = "artremia.jpg";
        zog = "artremia.png";
        zig = [
            'artremia'
        ];
        NPCname = "Valeska Windcrest";
    }
    if (_z === "Fenwoven") {
        var zog = "a barbarian male.png";
        cityStatus = true;
        foo = "fenwoven.jpg";
        zog = "fenwoven.png";
        zig = [
            'fenwoven'
        ];
        NPCname = "Arwen Reinhardt";
    }
    if (cityStatus === true) {
        writeCityHtml();
        D.getElementById('cityNPCdiv').style.display = 'none';
        var z = "";
        for (var i = 24; i <= 43; i++) {
            z += "<li class='cityBG' id='city" + (i - 24) + "BG'>" +
                "<img src='/images1/blank.png' id='inv" + i + "' class='city'>" +
                "</li>";
        }
        D.getElementById('itemsForSale').innerHTML = z;
        initNG();
        initNG2();
        var e6 = $("#cityNPCdiv");
        var e7 = $("#cityNPC");
        D.getElementById('bankGoldAmount').textContent = GLB.gold;
        townUpdate();

        function doit(count) {
            if (e7.width() < 100) {
                if (count < 300) {
                    T.delayedCall(.1, doit, [++count]);
                }
            } else {
                e6.width(e7.width())
                    .height(e7.height());
            }
        }
        doit(0);
        $NG2.bankBG.css("background", "url('//" + itemSprite + "')")
            .css({
                backgroundPosition: "0 0"
            });
        stopMusic();
    }

    function townUpdate() {
        D.getElementById('cityNPCdiv').style.display = 'block';
        D.getElementById('cityNPCname').textContent = NPCname;
        $("#cityWindow").css("left", 10);
        $("#trainOK,#trainingOptions").css("left", -700);
        $("#cityNPC").attr("src", '/images1/blank.png');
        $("#cityNPC").attr("src", '/images1/' + zog);
        D.getElementById('cityNPCdiv').style.bottom = "-100px";
        T.set("#cityNPC", {
            rotationY: 0
        });
    }
    var len = zig.length;
    mobs = [];
    for (var i = 0; i < len; i++) {
        mobs[i] = D.createElement('img');
        mobs[i].src = '/images1/' + zig[i] + '.png';
    }
    imagesLoaded = 0;
    $("#window2zoneday").attr("src", '/backgrounds/' + foo + '?v1');
    if (cityStatus === true) {
        $NG2.city.attr("src", "//" + itemSprite);
        $NG2.cityBG.css("background", "url('//" + itemSprite + "')").css({
            backgroundPosition: "0 0"
        });
        D.getElementById('cityGold').innerHTML = "<div id='goldIcon' class='goldIcon'></div> " + my.gold;
        $('#inventoryGoldAmount').text(my.gold);
        $("#cityTitle").html(myZone());
    } else {
        $("#bankContainer,#cityWrap").empty();
    }
    enterZoneSuccess(new Date());
    loadingScreen();
}

function writeCityHtml() {
    var z = "";
    z += '<div id="cityWindow" class="strongShadow">' +
        '<div id="cityTitle">SHOP</div>' +
        '<div id="shopList">' +
        '<div id="merchant" class="cityButtons">Merchant</div>' +
        '<div id="upgrade" class="cityButtons">Upgrade Item</div>' +
        '<div id="training" class="cityButtons">Training</div>' +
        '<div id="bankId" class="cityButtons">Bank</div>' +
        '<div id="talentsId" class="cityButtons">Reset Talents</div>' +
        '<div id="exitCity" class="cityButtons">Exit</div>' +
        '</div>' +
        '<div id="cityGold" class="strongShadow">' +
        '<div id="goldIcon" class="goldIcon">0</div>' +
        '</div>';
    if (location.protocol === 'https:') {
        z += '<div id="cityCrystal" class="strongShadow">' +
            '<div id="cityCrystalIcon" class="crystalIcon"></div>' +
            '<span id="cityCrystalAmount">0</span>' +
            '</div>';
    }
    z += '</div>' +
        '<div id="cityNPCdiv">' +
        '<img id="cityNPCshadow" src="//i.imgur.com/7bn79bN.png">' +
        '<div id="cityNPCname" class="strongShadow"></div>' +
        '<img id="cityNPC" src="/images1/blank.png">' +
        '</div>' +
        '<div id="trainingOptions" class="strongShadow">' +
        '<div id="training1">' +
        '<div class="trainSkill2 trainingButton">One-Hand Slashing</div>' +
        '<div class="trainSkill2 trainingButton">Two-Hand Slashing</div>' +
        '<div class="trainSkill2 trainingButton">One-Hand Blunt</div>' +
        '<div class="trainSkill2 trainingButton">Two-Hand Blunt</div>' +
        '<div class="trainSkill trainingButton">Piercing</div>' +
        '<div class="trainSkill2 trainingButton">Hand to Hand</div>' +
        '<div class="trainSkill trainingButton">Offense</div>' +
        '<div class="trainSkill trainingButton">Dual Wield</div>' +
        '<div class="trainSkill2 trainingButton">Double Attack</div>' +
        '</div>' +
        '<div id="training2">' +
        '<div class="trainSkill trainingButton">Defense</div>' +
        '<div class="trainSkill trainingButton">Dodge</div>' +
        '<div class="trainSkill trainingButton">Parry</div>' +
        '<div class="trainSkill trainingButton">Riposte</div>' +
        '<div class="trainSkill trainingButton">Alteration</div>' +
        '<div class="trainSkill trainingButton">Evocation</div>' +
        '<div class="trainSkill trainingButton">Conjuration</div>' +
        '<div class="trainSkill trainingButton">Abjuration</div>' +
        '<div class="trainSkill trainingButton">Channeling</div>' +
        '</div>' +
        '</div>' +
        '<div id="trainOK" class="strongShadow">TRAIN</div>' +
        '<div id="upgradeConfirm" class="strongShadow">' +
        '<div id="upgradePrompt">Upgrade An Item</div>' +
        '<div id="upgradeConfirm2">' +
        'Attempt to upgrade?' +
        '</div>' +
        '<div id="upgradeOK">Ok</div>' +
        '<div id="upgradeCANCEL">CCancel</div>' +
        '</div>' +
        '<div id="blackOverlay"></div>' +
        '<div id="upgradeWrap">' +
        '<div id="upgradeBar"></div>' +
        '</div>' +
        '<div id="merchantContainer">' +
        '<ul id="itemsForSale"></ul>' +
        '<div id="buyOK" class="strongShadow">BUY</div>' +
        '<div id="sellOK" class="strongShadow">SELL</div>' +
        '</div>';
    D.getElementById('cityWrap').innerHTML = z;
    initNG();
}
$(function() {
    $("#window2zoneday").on('load', function() {
        imagesLoaded++;
    });
});

function drawExpBar(d) {
    if (d === undefined) {
        d = 2;
    }
    var endExp = nextLevel();
    var startExp = nextLevel(my.level - 1);
    var x = ~~(((my.exp - startExp) / (endExp - startExp)) * 498);
    if (isMobile === false && GLB.videoSetting === "High") {
        NG.myexpbarvalue.innerHTML = '<span id="myexpbarvalue1">' + g.oldExp + '</span> / ' + endExp + ' XP';
        var e = D.getElementById('myexpbarvalue1');
        var score = {};
        score.exp = g.oldExp;
        T.to(NG.myexpbarId, d, {
            width: x,
            force3D: 'auto'
        });
        T.to(score, d, {
            exp: my.exp,
            onUpdate: function() {
                e.textContent = ~~score.exp;
            }
        });
    } else {
        NG.myexpbarId.style.width = x + 'px';
        NG.myexpbarvalue.innerHTML = '<span id="myexpbarvalue1">' + my.exp + '</span> / ' + endExp + ' XP';
    }
}

function checkTestData() {
    if (dev) { // motd
        // Mskill[1]="envenom";Mskill[2]="poison cloud";Mskill[3]="poison cloud";Mskill[4]="poison cloud";Mfreq=2;
        // Mskill[1]="poison cloud";Mskill[2]="smite";Mskill[3]="ice shard";Mskill[4]="fireball";Mfreq=1;
        // Mskill[1]="fireball";Mskill[2]="static field"; Mskill[3]="static field";Mskill[4]="static field";Mfreq=1;
        // Mskill[1]="fireball";Mskill[2]="energy bolt";Mskill[3]="fireball";Mskill[4]="fireball";Mfreq=1;
        // Mskill[1]="ice shard";Mskill[2]="ice shard";Mskill[3]="ice shard";Mskill[4]="ice shard";Mfreq=1;
        // Mskill[1]="heal";Mskill[2]="heal";Mskill[3]="heal";Mskill[4]="root";Mfreq=2;
        // Mskill[1]="blind";Mskill[2]="blind";Mskill[3]="blind";Mskill[4]="root";Mfreq=2;
        // Mskill[1]="kick";Mskill[2]="kick";Mskill[3]="kick";Mskill[4]="kick";Mfreq=2;
        // Mskill[1]="yawn";Mskill[2]="yawn";Mskill[3]="yawn";Mskill[4]="kick";Mfreq=2;
        // Mskill[1]="bash";Mskill[2]="bash";Mskill[3]="bash";Mskill[4]="bash";Mfreq=1;
        // Mskill[1]="fear";Mskill[2]="fear"; Mskill[3]="fear";Mskill[4]="fear";Mfreq=1;
        // Mskill[1]="root";Mskill[2]="root"; Mskill[3]="root";Mskill[4]="root";Mfreq=1;
        // Mskill[1]="backstab";Mskill[2]="backstab";Mskill[3]="backstab";Mskill[4]="backstab";Mfreq=2;
        // Mskill[1]="shadow kick";Mskill[2]="shadow kick";Mskill[3]="shadow kick";Mskill[4]="shadow kick";Mfreq=1;
        // MironMaiden=true;
        // Msilence=true;
        // Mskeleton=0;
        // Mwolf=0;
        // Melemental=0;
        // Mxp=800000000;
        // Mflurry=true;
        // Menrage=true;
		// Mrare = 2;
		// mobMartyr = true;
    }
}

function QMsg(foo, quest, map, duration) {
    if (foo.indexOf("Quest Completed") !== -1) {
        if (myZone() === "Salubrin Forest") {
            if (P.Q[diff()].GreaterFaydark === 3) {
                g.showPortal = true;
            }
        } else {
            if (myZone() !== "Nimgaul") {
                g.showPortal = true;
            }
        }
    }
    if (duration === undefined) {
        duration = 3500;
    }
    duration /= 1000;
    var H1 = D.createElement('span');
    H1.className = "QMsg";
    H1.innerHTML = foo + "<br>";
    NG.errorMsg.appendChild(H1);
    T.delayedCall(duration, function() {
        Remove(H1);
    });
    if (quest > 0) {
        var x = $("#questNotify");
    }
    if (map > 0) {
        var x = $("#mapNotify");
    }
    if (quest || map) {
        T.to(x, .5, {
            startAt: {
                opacity: 1
            },
            opacity: .5,
            ease: ez.lin,
            repeat: -1,
            yoyo: true
        });
        if (GLB.hideMenu === "On") {
            T.to(D.getElementById('window5Id'), 0, {
                startAt: {
                    opacity: 1
                },
                delay: 8,
                opacity: 0
            });
        }
    }
}

function loadAllCharacters() {
    g.view = "Main";
    charactersFound = 0;
    firstEmptyCharacterSlot = 0;

    function doit() {
        if (pageDoneLoading === true || $("#enterworld").hasClass("disabled") === true) {
            return;
        }
        pageDoneLoading = true;
    }
    T.delayedCall(1.5, doit);
    if (localStorage.getItem('GLB') !== null) {
        var zig = localStorage.getItem("GLB");
        GLB = JSON.parse(zig);
    }
    $("#deleteConfirm").removeClass("disabled");
    foundCharacter = false;
    var goToSlot = 0;
    $NG.allChButtons.removeClass("disabled");
    resetCharButtons();
    var loadLastCharacter = false;
	loadServerCharacters();
	block(['currencyIndicator', 'leftPaneBG']);
}

function testAjax() {
    $.ajax({
        data: {
            run: "testAjax"
        }
    }).done(function(data) {
        cLog(data);
		x = JSON.parse(data);
    });
}

function loadServerCharacters() {
    QMsg('Loading account data');
    D.getElementById('zoneIndicator').textContent = '';
    $.ajax({
        data: {
            run: "loadAllCharacters"
        }
    }).done(function(data) {
        var a = data.split("|");
        a.pop();
        var email = a.shift().toLowerCase();
        foundCharacter = false;
        var Slot = 1;
        charactersFound = 0;
        for (var i = 1; i <= 16; i++) {
            D.getElementById('characterslot' + i).style.display = 'none';
        }
        while (a.length > 0) {
            var foo = D.getElementById('characterslot' + Slot);
            var name = a.shift();
            var level = a.shift() * 1;
            var race = a.shift();
            var job = a.shift();
            var difficulty = a.shift() * 1;
            var zone = a.shift();
            var zoneN = a.shift();
            var zoneH = a.shift();
            var subzone = a.shift() * 1;
            var subzoneN = a.shift() * 1;
            var subzoneH = a.shift() * 1;
            var hardcoreMode = a.shift();
			var timestamp = a.shift()*1;
            var s1 = '<div class="yellow glowYellow nomouse">' + name + '</div>' +
                '<div class="nomouse">' + level + ' ' + race + ' <span id="myjob' + Slot + '">' + job + '</div>';
			if(timestamp===0){ // no expire
				s1 += '<div class="nomouse yellow"></div>';
			}else if(timestamp>0){ // time left to expire
				var word = "Days";
				if(timestamp===1){
					word = "Day";
				}
				if(timestamp < 10){
					s1 += '<div class="nomouse yellow">Expires in '+timestamp+' '+word+'</div>';
				}
			}
            foo.innerHTML = s1
            $("#characterslot" + Slot).data({
                difficulty: difficulty,
                zone: zone,
                zoneN: zoneN,
                zoneH: zoneH,
                subzone: subzone,
                subzoneN: subzoneN,
                subzoneH: subzoneH,
                hardcoreMode: hardcoreMode
            });
            foo.style.display = 'inline-block';
            charactersFound++;
            firstEmptyCharacterSlot = 16 - charactersFound;
            Slot++;
            foundCharacter = true;
        }
        block(['leftPaneBG']);
        D.getElementById('createWindowId').style.display = 'block';
        D.getElementById('currencyIndicator').style.display = 'block';
        D.getElementById('characterSelectScreen').style.display = 'block';
        D.getElementById('characterSelectScreen').style.opacity = 1;
        T.to("#characterSelectScreen", .5, {
            opacity: 1,
            ease: ez.lin,
            onComplete: function() {
                g.view = "Main";
            }
        });
        if (charactersFound === 0) {
            D.getElementById('enterWorldWrap').style.display = 'none';
        } else {
            D.getElementById('enterWorldWrap').style.display = 'block';
        }
        setCharacterSelectPanel();
        $.ajax({
            url: 'php/loadData1.php',
            data: {
                run: "loadGlb"
            }
        }).done(function(data) {
            var a = data.split("|");
            a.pop();
            GLB.chatMyHit = a.shift();
            GLB.hideMenu = a.shift();
            GLB.musicStatus = a.shift() * 1;
            GLB.soundStatus = a.shift() * 1;
            GLB.tooltipMode = a.shift();
            GLB.videoSetting = a.shift();
            GLB.showCombatLog = a.shift();
            GLB.debugMode = a.shift();
            GLB.gold = a.shift() * 1;
            GLB.hcgold = a.shift() * 1;
            var bankSlots = a.shift() * 1;
            var hcBankSlots = a.shift() * 1;
            var characterSlots = a.shift() * 1;
            var crystals = a.shift() * 1;
            GLB.ks = a.shift() * 1;
            GLB.account = a.shift();
			GLB.confirmed = a.shift()*1;
            $('#globalGoldCount').text(GLB.gold + " / " + GLB.hcgold);
            $('#crystalCount').text(crystals);
            $('#bankSlots').text(bankSlots +" / "+ hcBankSlots);
            $('#characterSlots').text(characterSlots);
            $('#logout').html("[ " + GLB.account.split("")[0].toUpperCase() + GLB.account.slice(1) + "&nbsp;Logout&nbsp;]");
            D.getElementById('bgmusic').volume = (M.round(((.5 * (GLB.musicStatus / 100)) * 1) * 100) / 100);
            if (g.view === "Main" || g.view === "Create") {
                playMusic("Soliloquy (2013)");
            }
            srv.glb = true;
			if (!GLB.confirmed){
				var z = $("#sendEmailConfirmation");
				TweenMax.to(z, 1, {
					color: "#ff0000",
					repeat: -1,
					yoyo: true
				});
				z.css('display', 'block')
					.on('click', function(){
						var x = $(this);
						T.set(x, {color: "#00ff00"});
						x.off('click')
							.text("Confirmation Email Sent!");
							TweenMax.to(x, 1, {
								alpha: 0,
								delay: 2,
								onComplete: function(){
									x.remove();
								}
							});
						$.ajax({
							url: 'php/master1.php',
							data: {
								run: "sendEmailConfirmation"
							}
						}).fail(function(data) {
							failToCommunicate();
						});
					});
			}
        }).fail(function() {
            QMsg("Server Error! Failed to load global values.");
        });
        $("#normalLabel, #nightmareLabel, #hellLabel").css('display', 'none');

    }).fail(function() {
        QMsg("Failed to contact server.");
    });
    $.ajax({
        data: {
            run: 'checkDifficulty'
        }
    }).done(function(data) {
        var a = data.split("|");
        a.pop();
        for (var i = 1, len = a.length / 2; i <= len; i++) {
            var nightmare = a.shift() * 1;
            var hell = a.shift() * 1;
            $("#characterslot" + i).data({
                nightmare: nightmare,
                hell: hell
            });
        }
        setZoneDifficultyIndicators();
    });
}

function resizeButtonBackgrounds() {
    $("#window3a li").css({
        backgroundSize: '900px 200px'
    });
    $(".spacers, .placeHolder").css({
        backgroundSize: '50px 50px'
    });
    if (my.race === "Human") {
        $("#secondwindId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Erudite") {
        $("#divineaegisId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Barbarian") {
        $("#ancestralrampageId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Wood Elf") {
        $("#tunaresglowId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Half Elf") {
        $("#karanasinfusionId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Dark Elf") {
        $("#sanguinetormentId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Dwarf") {
        $("#granitevisageId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Gnome") {
        $("#shortcircuitId").css({
            backgroundSize: '50px 100px'
        });
    } else if (my.race === "Halfling") {
        $("#halflinghideId").css({
            backgroundSize: '50px 100px'
        });
    }
    if (my.job === "Druid" || my.job === "Bard") {
        $("#rangertrackId").css({
            backgroundSize: '50px 100px'
        });
    }
    $("#togglepetattackId").css({
        backgroundSize: '50px 100px'
    });
}

function enterZoneSuccess(referenceLoad) {
    if (my.job === "Rogue") {
        $NG.shadowstrikeId.css("background-image", "url('/images1/spriteRogue3.png')")
            .css({
                backgroundPosition: "-300% 0"
            });
    } //temporary problem?
    if (my.job === "Paladin") {
        $NG.palslamId.css("background-image", "url('/images1/spritePaladin3.png')")
            .css({
                backgroundPosition: "-300% 0"
            });
    }
    var timeDifference = new Date() - referenceLoad;
    //load time here
    if (!dev) {
        if (timeDifference <= 3000 ||
            imagesLoaded < 1 ||
            scriptsLoaded === false ||
            classSpriteLoaded === false) {
            if (timeDifference >= 20000) {
                T.delayedCall(1, Chat, ["Warning: Failed to load images in less than 20 seconds. Loading zone anyway.", 1]);
                enterZoneSuccess2();
            } else {
                T.delayedCall(.5, enterZoneSuccess, [referenceLoad]);
            }
        } else {
            enterZoneSuccess2();
        }
    } else {
        var loadTime = 1;
        T.delayedCall(loadTime, enterZoneSuccess2);
    }
}

function enterZoneSuccess2(instant) {
    if (g.view === "Intro") {
        T.delayedCall(.033, enterZoneSuccess2, [true]);
        return;
    }
    if (location.protocol === "https:") {
        drawExpBar();
        if (cityStatus) {
            setCrystals();
        }
    }
    g.view = "Game";
    show(['window3', 'chatId', 'combatId', 'window5Id', 'window6']);
    imagesLoaded = 0;
    if (mySubzone() === 0) {
        Chat(("You have entered " + myZone() + "."));
    } else {
        Chat(("You have entered " + myZone() + " " + mySubzone() + "."));
    }
    if (cityStatus === true) {
        $("#QindicatorWrap").css('display', 'none');
    } else {
        $("#QindicatorWrap").css('display', 'block');
    }
    $(".dot").remove();
    D.getElementById('introText2').style.display = 'block';
    if (cityStatus === true || GLB.ks >= 6) {
        D.getElementById('inventoryGoldOk').style.display = 'block';
        refreshMerchantItems();
    } else {
        D.getElementById('inventoryGoldOk').style.display = 'none';
    }
    QupdateJournal(undefined, mySubzone(), true);
    D.getElementById("zoneSelectWrap").innerHTML = "";
    CStat();
    for (var i = 0; i <= 4; i++) {
        MOB[i].style.display = 'none';
        MOB[i].style.opacity = 0;
        stage[i].removeAllChildren();
        canvas[i].style.top = '0px';
        canvas[i].style.left = '0px';
        MOBNAME[i].style.color = '#00FA9A';
        MOBNAME[i].innerHTML = '';
    }
    setWindowPosition();
    var foo = myZone();
    indoorStatus = checkDungeon(foo);
    //fade out
    T.set(".buttonsManage, .buttonsManageOff", {
        opacity: 1,
        display: 'block'
    });
    $("#window3a").css("display", "block");
    var d2 = 1;
    if (instant) {
        // finish intro
        d2 = 0;
        stage[8].removeAllChildren();
        playMusic("Blackmoor Tides");
    }
    T.to('#curtainfade', d2, {
        opacity: 0,
        ease: ez.lin,
        onComplete: function() {
            T.set('#curtainfade', {
                display: 'none'
            });
        }
    });
    showButtons();
    sortButtons();
    save.my();
    updateAllEquipment();
    initNG();
    initSortables();

    // one-time actions upon login
    if (enteredWorldOnce === false) {
        checkSessionActive();
		// chatInit();
		Chat2("Hit Enter to begin chatting",3);
		Chat2("Type /help for chat commands",3);
		Chat2("You have joined [1. General Chat]",3);
        myHpTick = T.to('', 4, {
            repeat: -1,
            onRepeat: function() {
                getRegen();
            }
        });
        myMpTick = T.to('', 3, {
            repeat: -1,
            onRepeat: function() {
                getMpRegen();
            }
        });
    }
    enteredWorldOnce = true;
    enteredWorld = true;
    g.drawMyMp();
    g.drawMyHp();
    resetBosses();
    // adjust buttons
    resizeButtonBackgrounds();
    if (my.job === "Shadow Knight" ||
        my.job === "Shaman" ||
        my.job === "Necromancer" ||
        my.job === "Magician") {
        $("#togglepetattackId").css({
            backgroundSize: '50px 100px'
        });
    }
    ambushChance = zoneAmbushOdds();
    battleStart = new Date();
    changeZoneMusic();
    if (GLB.showCombatLog === "Off") {
        $("#chatId, #combatId").css('display', 'none');
    }
    if (isMobile === true) {
        $("#chatId, #combatId").css('display', 'none');
        GLB.showCombatLog = "Off";
        $("#window3").css('left', 390);
        $("#mobBar").css({
            top: 0,
            left: 394
        });
        $("#pethpbardiv").css({
            top: 120,
            left: 5
        });
    }
    $("#battleReport").css({
        left: 'auto',
        right: 490,
        top: 0
    });
    if (talentResetNotify && my.level > 1) {
        T.delayedCall(2, function() {
            QMsg("Warning: The latest server update forced a talent reset.");
            T.delayedCall(2, function() {
                QMsg("Please redistribute your talents.");
            });
        });
    }
}

function tutorialFlash(e) {
    if (!e) {
        return;
    }
    T.fromTo(e, .25, {
        boxShadow: "0px 200px rgba(255,0,0,.5) inset"
    }, {
        boxShadow: "0px 200px rgba(128,0,0,.5) inset",
        repeat: 38,
        yoyo: true,
        ease: ez.lin,
        onComplete: function() {
            T.to(e, .25, {
                boxShadow: "0px 200px rgba(128,0,0,0) inset"
            });
        }
    });
}

function showTutorial() {
    var d1 = 10;
    T.delayedCall(1, function() {
        function flashText(e1) {
            T.fromTo(e1, .5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: ez.lin,
                onComplete: function() {
                    T.delayedCall(d1 - 1, function() {
                        T.to(e1, .5, {
                            opacity: 0
                        });
                    });
                }
            });
        }
        var e = DIV(60, 420, "auto", "auto");
        e.className = "strongShadow tutorial";
        e.textContent = "Pull Next Monster";
        NG.eWin.appendChild(e);
        tutorialFlash('#addmonsterId');
        flashText(e);
        T.delayedCall(d1, function() {
            $(".tutorial").remove();
            var e = DIV(60, 470, "auto", "auto");
            e.className = "strongShadow tutorial";
            e.textContent = "Toggle Auto Attack";
            NG.eWin.appendChild(e);
            tutorialFlash("#toggleattackId");
            flashText(e);
            T.delayedCall(d1, function() {
                $(".tutorial").remove();
                var e = DIV(60, 520, "auto", "auto");
                e.className = "strongShadow tutorial";
                e.textContent = "Attempt To Run";
                NG.eWin.appendChild(e);
                tutorialFlash("#runId");
                flashText(e);
                T.delayedCall(d1, function() {
                    $(".tutorial").remove();
                    var e = DIV(0, -50, 500, "auto");
                    e.className = "strongShadow tutorial";
                    e.style.textAlign = "center";
                    e.style.position = "absolute";
                    e.textContent = "Class Skill Buttons";
                    document.getElementById('window3').appendChild(e);
                    tutorialFlash("#window3");
                    flashText(e);
                    T.delayedCall(d1, function() {
                        $(".tutorial").remove();
                    });
                });
            });
        });
    });
}
$(function() {
    initNG();
    loadAllCharacters(); // load webpage init webpage
    T.delayedCall(1.5, function() {
        if ($("#createWindowId").length === 1) {
            if (location.protocol === "http:") {
                if (g.view === "Main" || g.view === "Create") {
                    D.getElementById('currencyIndicator').style.display = 'block';
                }
            }
        }
    });
    if (location.protocol === "http:") {
        if (GLB.gold === undefined) {
            $('#globalGoldCount').text(0);
        } else {
            $('#globalGoldCount').text(GLB.gold);
        }
        block(['leftPaneBG']);
    } else {
        setTimeout(function() {
            focusLogin();
        }, 1500);
		rememberEmail();
		titleScreenMusicPlaying = true;
	}
	function do1(){
		$.ajax({
			url: "php/keepAlive.php"
		}).always(function(){
			setTimeout(function(){
				do1();
			}, 300000);
		});
	}
	setTimeout(function(){
		do1();
	}, 60000);
});

function focusLogin() {
    var x = '#loginPassword';
    if (localStorage.getItem("email") === null) {
        x = "#loginEmail";
    }
    $(x).focus();
}

function rememberEmail() {
    if (localStorage.getItem("email") !== null) {
        var email = localStorage.getItem("email");
        $("#loginEmail").val(email);
        $("#rememberEmail").prop('checked', true);
    }
}
(function() {
    initNG2();
})();

function initNG2() {
    $NG2 = {
        bankBG: $(".bankBG"),
        bank: $(".bank"),
        inventoryBG: $(".inventoryBG"),
        inventory: $(".inventory"),
        city: $(".city"),
        cityBG: $(".cityBG"),
        allEquipment: $(".equipment,.inventory,.bank,.city"),
        equipmentBG: $(".equipmentBG")
    };
}

function updateAllEquipment() {
    updateEquipment();
    updateInventory();
    updateBank();
}

function updateEquipment() {
    var a = [
        'helmet',
        'neck',
        'ring1',
        'ring2',
        'shoulders',
        'back',
        'chest',
        'bracers',
        'gloves',
        'belt',
        'legs',
        'boots',
        'weapon1',
        'weapon2',
        'range'
    ];
    for (var i = 0; i <= 14; i++) {
        var e1 = document.getElementById(a[i]);
        if (e1 != null) {
            var o = P.eq[i];
            if (o.name) {
                e1.src = "//" + itemSprite;
                e1.style.left = o.xPos + 'px';
                e1.style.top = o.yPos + 'px';
            } else {
                e1.src = "/images1/blank.png";
            }
        }
    }
}

function updateInventory() {
    for (var i = 0, len = P.item.length; i < len; i++) {
        var e1 = document.getElementById("inv" + i);
        if (e1 !== null) {
            var o = P.item[i];
            if (o.name) {
                e1.src = "//" + itemSprite;
                e1.style.left = o.xPos + 'px';
                e1.style.top = o.yPos + 'px';
            } else {
                e1.src = "/images1/blank.png";
            }
        }
    }
}

function updateBank() {
    for (var i = 0; i < 1080; i++) {
        var e1 = document.getElementById("bank" + i);
        if (e1 !== null) {
            var o = P.bank[i];
            if (o.name) {
                e1.src = "//" + itemSprite;
                e1.style.left = o.xPos + 'px';
                e1.style.top = o.yPos + 'px';
            } else {
                e1.src = "/images1/blank.png";
            }
        }
    }
}
$(function() {
    $("#gameView").on('mousedown', '.equipment, .inventory, .bank, .city', function() {
        function setDragItem() {
            for (var x in dragged[0]) {
                dragged[0][x] = P.item[dragSlot][x];
            }
        }
        if (itemSwapCount > 0) {
            return;
        }
        if (GLB.ks >= 7) {
            D.getElementById('destroyItem').textContent = "Sell";
        } else {
            D.getElementById('destroyItem').textContent = "Destroy";
        }
        that = $(this);
        var X = P.item[dragSlot];
        var myParent = this.parentNode;
        if (this.id === dragID) { // same slot cancel
            if (this.className === "equipment") {
                cancelDragging();
                return;
            } else if (this.className === "bank") {
                var NI = findFirstInvSlot();
                if (NI === false) {
                    Error("There is no room in your inventory for that item.");
                    cancelDragging();
                    return;
                } else {
                    dropID = "inv" + NI;
                    dropSlot = $("#" + dropID).parent().index();
                    var qux = $("#" + dragID);
                    classDrop = "inventory";
                    flashingBorderTimer.kill();
                    D.getElementById(dragID).parentNode.style.border = "2px solid #111";
                    var swap = dropOk();
                    if (swap === true) {
                        swapItems();
                        refreshTooltip(qux);
                    } else {
                        if (swap === false) {
                            Error("You cannot put that item there.");
                        } else if (swap === "level") {
                            Error("Your level is not high enough to equip this item.");
                        }
                    }
                    playAudio('equipAccessory');
                    dragStatus = false;
                    dragID = "";
                    return;
                }
            }
        } else if (this.className === "city") {
            // clicking on merchant items
            dragSlot = ((that.parent().index()) + 24);
            var X = P.item[dragSlot];
            merchantMode = true;
            if (!X.name) {
                Error("This item was previously sold. Please choose another item.");
                cancelDragging();
                return;
            } else {
                cancelDragging();
                dragID = that.attr("id");
                dragStatus = true;
                D.getElementById(dragID).parentNode.style.border = "2px solid #111";
                setDragFlash(myParent);
                buyMode = true;
                playAudio('button_2');
                var kek = itemSellValue(dragSlot);
                cost = kek;
                var baz = logItemName(P.item[dragSlot].name, P.item[dragSlot].rarity);
                Chat(NPCname + ' says, "Buy ' + baz + ' for ' + kek + ' gold?"');
                setDragItem();
                return;
            }
        }
        if (that.hasClass("equipment") === true) {
            merchantMode = false;
        }
        buyMode = false;
        if (upgradeMode) {
            playAudio('button_2');
            if (that.hasClass("bank") || that.hasClass("equipment")) {
                Error("You must select an item in your inventory!");
                cityMenuClick();
                return;
            }
            dragID = that.attr("id");
            dragSlot = that.parent().index();
            var X = P.item[dragSlot];
            classDrag = "inventory";
            if (that.attr("src") === "/images1/blank.png") { //clicked an empty slot
                dragID = "";
                dragStatus = false;
                Error("There seems to be nothing there.");
                cityMenuClick();
            } else { // Update prompt to confirm
                if (X.upgrade >= 10) {
                    Error("That item cannot be upgraded anymore.");
                    cityMenuClick();
                    return;
                }

                if (X.type === "cloth" || X.type === "leather" || X.type === "chain" || X.type === "plate" || X.type === "slashed" || X.type === "crushed" || X.type === "pierced" || X.type === "cleaved" || X.type === "smashed" || X.type === "shield" || X.type === "offhand" || X.type === "staff") {
                    var that = $(this).parent();
                    var foo = dragID.length;
                    if (foo > 0) { // flash border - item exists
                        cost = (X.upgrade + 1) * 25;
                        if (my.gold < cost) {
                            Error("You don't have enough gold.");
                            cityMenuClick();
                            return;
                        }
                        upgradeMsgUpdate();
                    }
                } else {
                    Error("That type of item cannot be upgraded.");
                    cityMenuClick();
                    return;
                }
            }
            return;
        }
        //dropping
        if (dragID.length > 0 && dragStatus === true) {
            if (dragID !== "" && dragID === that.attr("id")) { // same id
                // send to inventory from bank - double click
                if (that.hasClass("bank")) {
                    merchantMode = false;
                    var NI = findFirstInvSlot();
                    if (NI === false) {
                        Error("There is no room in your inventory for that item.");
                        cancelDragging();
                        return;
                    }
                    dropID = "inv" + NI;
                    dropSlot = $("#" + dropID).parent().index();
                    var qux = $("#" + dragID);
                    classDrop = "inventory";
                    flashingBorderTimer.kill();
                    D.getElementById(dragID).parentNode.style.border = "2px solid #111";
                    var swap = dropOk();
                    if (swap === true) {
                        swapItems();
                        refreshTooltip(qux);
                    } else {
                        if (swap === false) {
                            Error("You cannot put that item there.");
                        } else if (swap === "level") {
                            Error("Your level is not high enough to equip this item.");
                        }
                    }
                    equipSound();
                    dragStatus = false;
                    dragID = "";
                    return;
                }
                // send to equipment from inventory - double click
                if (that.hasClass("inventory")) {
                    if (X.itemSlot === "helmet") {
                        dropID = "helmet";
                        dropSlot = $("#helmet").parent().index();
                    }
                    if (X.itemSlot === "neck") {
                        dropID = "neck";
                        dropSlot = $("#neck").parent().index();
                    }
                    if (X.itemSlot === "ring") {
                        dropID = "ring1";
                        dropSlot = $("#ring1").parent().index();
                    }
                    if (X.itemSlot === "shoulders") {
                        dropID = "shoulders";
                        dropSlot = $("#shoulders").parent().index();
                    }
                    if (X.itemSlot === "back") {
                        dropID = "back";
                        dropSlot = $("#back").parent().index();
                    }
                    if (X.itemSlot === "chest") {
                        dropID = "chest";
                        dropSlot = $("#chest").parent().index();
                    }
                    if (X.itemSlot === "bracers") {
                        dropID = "bracers";
                        dropSlot = $("#bracers").parent().index();
                    }
                    if (X.itemSlot === "gloves") {
                        dropID = "gloves";
                        dropSlot = $("#gloves").parent().index();
                    }
                    if (X.itemSlot === "belt") {
                        dropID = "belt";
                        dropSlot = $("#belt").parent().index();
                    }
                    if (X.itemSlot === "legs") {
                        dropID = "legs";
                        dropSlot = $("#legs").parent().index();
                    }
                    if (X.itemSlot === "boots") {
                        dropID = "boots";
                        dropSlot = $("#boots").parent().index();
                    }
                    if (X.itemSlot === "weapons") {
                        dropID = "weapon1";
                        dropSlot = $("#weapon1").parent().index();
                    }
                    if (X.type === "shield" || X.type === "offhand") {
                        dropID = "weapon2";
                        dropSlot = $("#weapon2").parent().index();
                    }
                    if (X.itemSlot === "range") {
                        dropID = "range";
                        dropSlot = $("#range").parent().index();
                    }
                    var qux = $("#" + dragID);
                    classDrop = "equipment";
                    cacheDropSlot = dropSlot;
                    flashingBorderTimer.kill();
                    D.getElementById(dragID).parentNode.style.border = "2px solid #111";
                    var swap = dropOk();
                    if (swap === true) {
                        swapItems();
                        refreshTooltip(qux);
                    } else {
                        if (swap === false) {
                            Error("You cannot put that item there.");
                        } else if (swap === "level") {
                            Error("Your level is not high enough to equip this item.");
                        }
                    }
                    equipSound();
                    dragStatus = false;
                    dragID = "";
                    return;
                } else {
                    return;
                }
            }
            // regular drop behavior
            dropID = that.attr("id");
            dropSlot = that.parent().index();
            cacheDropSlot = dropSlot;
            if (that.hasClass("inventory") === true) {
                if (buyMode === true) {
                    return;
                }
                classDrop = "inventory";
            }
            if (that.hasClass("equipment") === true) {
                merchantMode = false;
                classDrop = "equipment";
            }
            if (that.hasClass("bank") === true) {
                merchantMode = false;
                classDrop = "bank";
                dropSlot = dropSlot + (activeBankTab * 90);
            }
            flashingBorderTimer.kill();
            if (D.getElementById(dragID) != null) {
                D.getElementById(dragID).parentNode.style.border = "2px solid #111";
            }
            var swap = dropOk();
            if (swap === true) {
                swapItems();
            } else {
                if (swap === false) {
                    Error("You cannot put that item there.");
                } else if (swap === "level") {
                    Error("Your level is not high enough to equip this item.");
                }
            }
            equipSound();
            dragStatus = false;
            dragID = "";
            return;
        } else {
            // normal dragging 
            flashingBorderTimer.kill();
            if (dragID) {
                D.getElementById(dragID).parentNode.style.border = "2px solid #111";
            }
            dragID = that.attr("id");
            dragSlot = that.parent().index();
            if (that.hasClass("inventory") === true) {
                classDrag = "inventory";
            }
            if (that.hasClass("equipment") === true) {
                merchantMode = false;
                classDrag = "equipment";
            }
            if (that.hasClass("bank") === true) {
                merchantMode = false;
                classDrag = "bank";
                dragSlot = dragSlot + (activeBankTab * 90);
            }
            if (that.attr("src") === "/images1/blank.png") { //clicked an empty slot
                dragID = "";
                dragStatus = false;
            } else { // transfer data to dragged object
                playAudio('equipAccessory');
                var that = $(this).parent();
                if (dragID.length > 0) { // save drag values
                    dragStatus = true;
                    flashingBorderTimer.kill();
                    setDragFlash(myParent);
                    if (merchantMode === true) {
                        dragStatus = true; // when false this broke selling items
                        buyMode = false;
                        var kek = itemSellValue(dragSlot);
                        var baz = logItemName(X.name, X.rarity);
                        Chat(NPCname + ' says, "Sell ' + baz + ' for ' + kek + ' gold?"');
                    }
                }
                if (classDrag === "inventory") {
                    setDragItem();
                }
                if (classDrag === "equipment") {
                    for (var x in dragged[0]) {
                        dragged[0][x] = P.eq[dragSlot][x]
                    }
                }
                if (classDrag === "bank") {
                    for (var x in dragged[0]) {
                        dragged[0][x] = P.bank[dragSlot][x]
                    }
                }
            }
        }
    });
});
$('#gameView').on('mouseup', '.inventory', function(e) {
    if (classDrag === "inventory" && dragStatus === true && merchantMode === true && e.ctrlKey) {
        sellItem();
    }
});

function setCharacterSelectPanel() {
    $("#createcharacter").remove();
    var h = '<div id="createcharacter" class="strongShadow NGgradient">Create Character</div>';
    $('#showCrystalWrap').after(h);
    $("#deletecharacter").remove();
    if (charactersFound > 0) {
        var h = '<div id="deletecharacter" class="strongShadow NGgradient">Delete Character</div>';
        $('#characterSlotPanel').before(h);
    }
    block('leftPaneBG');
    D.getElementById('logout').style.display = 'block';
    if (charactersFound > 0) {
        loadCharacterSlot(1);
    }
}


function logout() {
    g.lockScreen();
    $('#logout').html("Logging Out");
    QMsg("Logging out...");
    $.ajax({
        data: {
            run: "logout"
        }
    }).done(function(data) {
		localStorage.removeItem('token');
        QMsg("Logout successful");
        for (var i = 1; i < 16; i++) {
            $('#characterslot' + i).css('display', "none");
        }
        $("#createcharacter, #deletecharacter").remove();
        $('#enterWorldWrap').css('display', "none");
        $('#logout').html('');
        $("#loginPassword").val('');
        location.reload();
    }).fail(function() {
        QMsg("Logout failed.");
        $('#logout').html("[ " + GLB.account.split("")[0].toUpperCase() + GLB.account.slice(1) + "&nbsp;Logout&nbsp;]");
    });
}
$("#gameView").on('click', '#logout', function() {
    logout();
});
$("#addBankSlots").on('click', function() {
    if (buttonLock === false) {
        g.lockScreen(true);
        QMsg("Contacting server...");
        $.ajax({
            url: 'php/town1.php',
            data: {
                run: "addBankSlots"
            }
        }).done(function(data) {
			cLog(data);
            var a = data.split("|");
            if (a[0] == 'maxed') {
                QMsg("You cannot have more than 1080 bank slots per account.");
            } else if (a[0] == 'buyCrystals') {
                QMsg("Please purchase Never Crystals from the title screen to purchase bank slots.");
            } else if (a[0] == 'pay40') {
                playAudio("buyitem");
                QMsg("You added 10 bank slots for 40 Never Crystals.");
                QMsg("Bank Slots Available: " + a[2]);
                QMsg("Crystals Remaining: " + a[3]);
                cancelMySpell();
                bankToggle();
                setCrystals();
            }
            g.unlockScreen();
        }).fail(function() {
            failToCommunicate();
        });
    }
});
g.lockScreen = function(bypass) {
    buttonLock = true;
    if (!bypass) {
        T.set('#lockOverlay', {
            boxShadow: '0 720px rgba(0,0,0,.7) inset',
            display: 'block'
        });
    } else {
        T.set('#lockOverlay', {
            display: 'block'
        });
    }
}
g.unlockScreen = function(d) {
    buttonLock = false;
    if (!d) {
        d = 0;
    }
    T.to('#lockOverlay', d, {
        boxShadow: '0 720px rgba(0,0,0,0) inset',
        onComplete: function() {
            T.set('#lockOverlay', {
                display: 'none'
            });
        }
    });
}
$(".fire").on('click', function() {
    var id = this.id;
    g[id](id);
});
$("#gameView").on('dragstart', 'img', function(e) {
    e.preventDefault();
});

function checkSessionActive() {
    if (location.protocol === 'https:') {
        $.ajax({
            data: {
                run: "checkSessionActive"
            }
        }).done(function(data) {
            if (!data) {
                // is your session still active? If not boot! 
                // perform upon login and window focus
                if (g.view !== "Main") {
                    Error("Your session has timed out.");
                    setTimeout(function() {
                        serverLogout();
                    }, 5000);
                }
            }
        });
    }
}

function keepSessionAlive() {
    $.ajax({
        url: "php/ping.php",
        data: {
            my: my,
			zone: myZone()
        }
    }).done(function(data) {
        var count = data * 1;

        function do1(foo) {
            if (g.view !== "Main") {
                if (foo === 2222) {
                    Error("The server is going down for maintenance.");
                } else {
                    Error("You have been disconnected from the server. Logging out.");
                }
                setTimeout(function() {
					window.onbeforeunload = null;
                    logout();
                }, 5000);
            }
        }
        if (isNaN(data)) {
            // no db
            do1();
        } else if (count === 1111) {
            // lost session
            do1();
        } else if (count === 2222) {
            // server table says down
            do1(2222);
        } else {
            if (count >= 3) {
                Error("Multiple logins detected. Logging out.");
                setTimeout(function() {
                    logout();
                }, 5000);
            }
        }
        setTimeout(function() {
            keepSessionAlive();
        }, 20000);
    }).fail(function() {
        failToCommunicate();
    });
}
(function() {
    var e = new Image();
    e.src = '/backgrounds/home.jpg';
})();