(() => {
    var g = (f, l) => () => (l || f((l = {
        exports: {}
    }).exports, l), l.exports);
    var w = g((E, m) => {
        (function() {
            var f = this;
            (function() {
                (function() {
                    this.Turbolinks = {
                        supported: function() {
                            return window.history.pushState != null && window.requestAnimationFrame != null && window.addEventListener != null
                        }(),
                        visit: function(a, e) {
                            return l.controller.visit(a, e)
                        },
                        clearCache: function() {
                            return l.controller.clearCache()
                        },
                        setProgressBarDelay: function(a) {
                            return l.controller.setProgressBarDelay(a)
                        }
                    }
                }).call(this)
            }).call(f);
            var l = f.Turbolinks;
            (function() {
                (function() {
                    var a,
                        e,
                        t,
                        n = [].slice;
                    l.copyObject = function(o) {
                        var r,
                            i,
                            s;
                        i = {};
                        for (r in o)
                            s = o[r],
                            i[r] = s;
                        return i
                    },
                    l.closest = function(o, r) {
                        return a.call(o, r)
                    },
                    a = function() {
                        var o,
                            r;
                        return o = document.documentElement, (r = o.closest) != null ? r : function(i) {
                            var s;
                            for (s = this; s;) {
                                if (s.nodeType === Node.ELEMENT_NODE && e.call(s, i))
                                    return s;
                                s = s.parentNode
                            }
                        }
                    }(),
                    l.defer = function(o) {
                        return setTimeout(o, 1)
                    },
                    l.throttle = function(o) {
                        var r;
                        return r = null, function() {
                            var i;
                            return i = 1 <= arguments.length ? n.call(arguments, 0) : [], r != null ? r : r = requestAnimationFrame(function(s) {
                                return function() {
                                    return r = null, o.apply(s, i)
                                }
                            }(this))
                        }
                    },
                    l.dispatch = function(o, r) {
                        var i,
                            s,
                            u,
                            c,
                            h,
                            p;
                        return h = r != null ? r : {}, p = h.target, i = h.cancelable, s = h.data, u = document.createEvent("Events"), u.initEvent(o, !0, i === !0), u.data = s != null ? s : {}, u.cancelable && !t && (c = u.preventDefault, u.preventDefault = function() {
                            return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            }), c.call(this)
                        }), (p != null ? p : document).dispatchEvent(u), u
                    },
                    t = function() {
                        var o;
                        return o = document.createEvent("Events"), o.initEvent("test", !0, !0), o.preventDefault(), o.defaultPrevented
                    }(),
                    l.match = function(o, r) {
                        return e.call(o, r)
                    },
                    e = function() {
                        var o,
                            r,
                            i,
                            s;
                        return o = document.documentElement, (r = (i = (s = o.matchesSelector) != null ? s : o.webkitMatchesSelector) != null ? i : o.msMatchesSelector) != null ? r : o.mozMatchesSelector
                    }(),
                    l.uuid = function() {
                        var o,
                            r,
                            i;
                        for (i = "", o = r = 1; 36 >= r; o = ++r)
                            i += o === 9 || o === 14 || o === 19 || o === 24 ? "-" : o === 15 ? "4" : o === 20 ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                        return i
                    }
                }).call(this),
                function() {
                    l.Location = function() {
                        function a(r) {
                            var i,
                                s;
                            r == null && (r = ""),
                            s = document.createElement("a"),
                            s.href = r.toString(),
                            this.absoluteURL = s.href,
                            i = s.hash.length,
                            2 > i ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -i), this.anchor = s.hash.slice(1))
                        }
                        var e,
                            t,
                            n,
                            o;
                        return a.wrap = function(r) {
                            return r instanceof this ? r : new this(r)
                        }, a.prototype.getOrigin = function() {
                            return this.absoluteURL.split("/", 3).join("/")
                        }, a.prototype.getPath = function() {
                            var r,
                                i;
                            return (r = (i = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) != null ? i[1] : void 0) != null ? r : "/"
                        }, a.prototype.getPathComponents = function() {
                            return this.getPath().split("/").slice(1)
                        }, a.prototype.getLastPathComponent = function() {
                            return this.getPathComponents().slice(-1)[0]
                        }, a.prototype.getExtension = function() {
                            var r,
                                i;
                            return (r = (i = this.getLastPathComponent().match(/\.[^.]*$/)) != null ? i[0] : void 0) != null ? r : ""
                        }, a.prototype.isHTML = function() {
                            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                        }, a.prototype.isPrefixedBy = function(r) {
                            var i;
                            return i = t(r), this.isEqualTo(r) || o(this.absoluteURL, i)
                        }, a.prototype.isEqualTo = function(r) {
                            return this.absoluteURL === (r != null ? r.absoluteURL : void 0)
                        }, a.prototype.toCacheKey = function() {
                            return this.requestURL
                        }, a.prototype.toJSON = function() {
                            return this.absoluteURL
                        }, a.prototype.toString = function() {
                            return this.absoluteURL
                        }, a.prototype.valueOf = function() {
                            return this.absoluteURL
                        }, t = function(r) {
                            return e(r.getOrigin() + r.getPath())
                        }, e = function(r) {
                            return n(r, "/") ? r : r + "/"
                        }, o = function(r, i) {
                            return r.slice(0, i.length) === i
                        }, n = function(r, i) {
                            return r.slice(-i.length) === i
                        }, a
                    }()
                }.call(this),
                function() {
                    var a = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    l.HttpRequest = function() {
                        function e(t, n, o) {
                            this.delegate = t,
                            this.requestCanceled = a(this.requestCanceled, this),
                            this.requestTimedOut = a(this.requestTimedOut, this),
                            this.requestFailed = a(this.requestFailed, this),
                            this.requestLoaded = a(this.requestLoaded, this),
                            this.requestProgressed = a(this.requestProgressed, this),
                            this.url = l.Location.wrap(n).requestURL,
                            this.referrer = l.Location.wrap(o).absoluteURL,
                            this.createXHR()
                        }
                        return e.NETWORK_FAILURE = 0, e.TIMEOUT_FAILURE = -1, e.timeout = 60, e.prototype.send = function() {
                            var t;
                            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, typeof (t = this.delegate).requestStarted == "function" ? t.requestStarted() : void 0) : void 0
                        }, e.prototype.cancel = function() {
                            return this.xhr && this.sent ? this.xhr.abort() : void 0
                        }, e.prototype.requestProgressed = function(t) {
                            return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
                        }, e.prototype.requestLoaded = function() {
                            return this.endRequest(function(t) {
                                return function() {
                                    var n;
                                    return 200 <= (n = t.xhr.status) && 300 > n ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
                                }
                            }(this))
                        }, e.prototype.requestFailed = function() {
                            return this.endRequest(function(t) {
                                return function() {
                                    return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                                }
                            }(this))
                        }, e.prototype.requestTimedOut = function() {
                            return this.endRequest(function(t) {
                                return function() {
                                    return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                                }
                            }(this))
                        }, e.prototype.requestCanceled = function() {
                            return this.endRequest()
                        }, e.prototype.notifyApplicationBeforeRequestStart = function() {
                            return l.dispatch("turbolinks:request-start", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, e.prototype.notifyApplicationAfterRequestEnd = function() {
                            return l.dispatch("turbolinks:request-end", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, e.prototype.createXHR = function() {
                            return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                        }, e.prototype.endRequest = function(t) {
                            return this.xhr ? (this.notifyApplicationAfterRequestEnd(), t != null && t.call(this), this.destroy()) : void 0
                        }, e.prototype.setProgress = function(t) {
                            var n;
                            return this.progress = t, typeof (n = this.delegate).requestProgressed == "function" ? n.requestProgressed(this.progress) : void 0
                        }, e.prototype.destroy = function() {
                            var t;
                            return this.setProgress(1), typeof (t = this.delegate).requestFinished == "function" && t.requestFinished(), this.delegate = null, this.xhr = null
                        }, e
                    }()
                }.call(this),
                function() {
                    var a = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    l.ProgressBar = function() {
                        function e() {
                            this.trickle = a(this.trickle, this),
                            this.stylesheetElement = this.createStylesheetElement(),
                            this.progressElement = this.createProgressElement()
                        }
                        var t;
                        return t = 300, e.defaultCSS = `.turbolinks-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 9999;
  transition: width `







                        + t + "ms ease-out, opacity " + t / 2 + "ms " + t / 2 + `ms ease-in;
  transform: translate3d(0, 0, 0);
}`

                        , e.prototype.show = function() {
                            return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                        }, e.prototype.hide = function() {
                            return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function(n) {
                                return function() {
                                    return n.uninstallProgressElement(), n.stopTrickling(), n.visible = !1, n.hiding = !1
                                }
                            }(this))) : void 0
                        }, e.prototype.setValue = function(n) {
                            return this.value = n, this.refresh()
                        }, e.prototype.installStylesheetElement = function() {
                            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                        }, e.prototype.installProgressElement = function() {
                            return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                        }, e.prototype.fadeProgressElement = function(n) {
                            return this.progressElement.style.opacity = 0, setTimeout(n, 1.5 * t)
                        }, e.prototype.uninstallProgressElement = function() {
                            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                        }, e.prototype.startTrickling = function() {
                            return this.trickleInterval != null ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, t)
                        }, e.prototype.stopTrickling = function() {
                            return clearInterval(this.trickleInterval), this.trickleInterval = null
                        }, e.prototype.trickle = function() {
                            return this.setValue(this.value + Math.random() / 100)
                        }, e.prototype.refresh = function() {
                            return requestAnimationFrame(function(n) {
                                return function() {
                                    return n.progressElement.style.width = 10 + 90 * n.value + "%"
                                }
                            }(this))
                        }, e.prototype.createStylesheetElement = function() {
                            var n;
                            return n = document.createElement("style"), n.type = "text/css", n.textContent = this.constructor.defaultCSS, n
                        }, e.prototype.createProgressElement = function() {
                            var n;
                            return n = document.createElement("div"), n.className = "turbolinks-progress-bar", n
                        }, e
                    }()
                }.call(this),
                function() {
                    var a = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    l.BrowserAdapter = function() {
                        function e(r) {
                            this.controller = r,
                            this.showProgressBar = a(this.showProgressBar, this),
                            this.progressBar = new l.ProgressBar
                        }
                        var t,
                            n,
                            o;
                        return o = l.HttpRequest, t = o.NETWORK_FAILURE, n = o.TIMEOUT_FAILURE, e.prototype.visitProposedToLocationWithAction = function(r, i) {
                            return this.controller.startVisitToLocationWithAction(r, i)
                        }, e.prototype.visitStarted = function(r) {
                            return r.issueRequest(), r.changeHistory(), r.loadCachedSnapshot()
                        }, e.prototype.visitRequestStarted = function(r) {
                            return this.progressBar.setValue(0), r.hasCachedSnapshot() || r.action !== "restore" ? this.showProgressBarAfterDelay() : this.showProgressBar()
                        }, e.prototype.visitRequestProgressed = function(r) {
                            return this.progressBar.setValue(r.progress)
                        }, e.prototype.visitRequestCompleted = function(r) {
                            return r.loadResponse()
                        }, e.prototype.visitRequestFailedWithStatusCode = function(r, i) {
                            switch (i) {
                            case t:
                            case n:
                                return this.reload();
                            default:
                                return r.loadResponse()
                            }
                        }, e.prototype.visitRequestFinished = function(r) {
                            return this.hideProgressBar()
                        }, e.prototype.visitCompleted = function(r) {
                            return r.followRedirect()
                        }, e.prototype.pageInvalidated = function() {
                            return this.reload()
                        }, e.prototype.showProgressBarAfterDelay = function() {
                            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
                        }, e.prototype.showProgressBar = function() {
                            return this.progressBar.show()
                        }, e.prototype.hideProgressBar = function() {
                            return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                        }, e.prototype.reload = function() {
                            return window.location.reload()
                        }, e
                    }()
                }.call(this),
                function() {
                    var a = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    l.History = function() {
                        function e(t) {
                            this.delegate = t,
                            this.onPageLoad = a(this.onPageLoad, this),
                            this.onPopState = a(this.onPopState, this)
                        }
                        return e.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
                        }, e.prototype.stop = function() {
                            return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
                        }, e.prototype.push = function(t, n) {
                            return t = l.Location.wrap(t), this.update("push", t, n)
                        }, e.prototype.replace = function(t, n) {
                            return t = l.Location.wrap(t), this.update("replace", t, n)
                        }, e.prototype.onPopState = function(t) {
                            var n,
                                o,
                                r,
                                i;
                            return this.shouldHandlePopState() && (i = (o = t.state) != null ? o.turbolinks : void 0) ? (n = l.Location.wrap(window.location), r = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, r)) : void 0
                        }, e.prototype.onPageLoad = function(t) {
                            return l.defer(function(n) {
                                return function() {
                                    return n.pageLoaded = !0
                                }
                            }(this))
                        }, e.prototype.shouldHandlePopState = function() {
                            return this.pageIsLoaded()
                        }, e.prototype.pageIsLoaded = function() {
                            return this.pageLoaded || document.readyState === "complete"
                        }, e.prototype.update = function(t, n, o) {
                            var r;
                            return r = {
                                turbolinks: {
                                    restorationIdentifier: o
                                }
                            }, history[t + "State"](r, null, n)
                        }, e
                    }()
                }.call(this),
                function() {
                    l.HeadDetails = function() {
                        function a(i) {
                            var s,
                                u,
                                c,
                                h,
                                p,
                                d;
                            for (this.elements = {}, c = 0, p = i.length; p > c; c++)
                                d = i[c],
                                d.nodeType === Node.ELEMENT_NODE && (h = d.outerHTML, u = (s = this.elements)[h] != null ? s[h] : s[h] = {
                                    type: r(d),
                                    tracked: o(d),
                                    elements: []
                                }, u.elements.push(d))
                        }
                        var e,
                            t,
                            n,
                            o,
                            r;
                        return a.fromHeadElement = function(i) {
                            var s;
                            return new this((s = i != null ? i.childNodes : void 0) != null ? s : [])
                        }, a.prototype.hasElementWithKey = function(i) {
                            return i in this.elements
                        }, a.prototype.getTrackedElementSignature = function() {
                            var i,
                                s;
                            return function() {
                                var u,
                                    c;
                                u = this.elements,
                                c = [];
                                for (i in u)
                                    s = u[i].tracked,
                                    s && c.push(i);
                                return c
                            }.call(this).join("")
                        }, a.prototype.getScriptElementsNotInDetails = function(i) {
                            return this.getElementsMatchingTypeNotInDetails("script", i)
                        }, a.prototype.getStylesheetElementsNotInDetails = function(i) {
                            return this.getElementsMatchingTypeNotInDetails("stylesheet", i)
                        }, a.prototype.getElementsMatchingTypeNotInDetails = function(i, s) {
                            var u,
                                c,
                                h,
                                p,
                                d,
                                y;
                            h = this.elements,
                            d = [];
                            for (c in h)
                                p = h[c],
                                y = p.type,
                                u = p.elements,
                                y !== i || s.hasElementWithKey(c) || d.push(u[0]);
                            return d
                        }, a.prototype.getProvisionalElements = function() {
                            var i,
                                s,
                                u,
                                c,
                                h,
                                p,
                                d;
                            u = [],
                            c = this.elements;
                            for (s in c)
                                h = c[s],
                                d = h.type,
                                p = h.tracked,
                                i = h.elements,
                                d != null || p ? i.length > 1 && u.push.apply(u, i.slice(1)) : u.push.apply(u, i);
                            return u
                        }, a.prototype.getMetaValue = function(i) {
                            var s;
                            return (s = this.findMetaElementByName(i)) != null ? s.getAttribute("content") : void 0
                        }, a.prototype.findMetaElementByName = function(i) {
                            var s,
                                u,
                                c,
                                h;
                            s = void 0,
                            h = this.elements;
                            for (c in h)
                                u = h[c].elements,
                                e(u[0], i) && (s = u[0]);
                            return s
                        }, r = function(i) {
                            return t(i) ? "script" : n(i) ? "stylesheet" : void 0
                        }, o = function(i) {
                            return i.getAttribute("data-turbolinks-track") === "reload"
                        }, t = function(i) {
                            var s;
                            return s = i.tagName.toLowerCase(), s === "script"
                        }, n = function(i) {
                            var s;
                            return s = i.tagName.toLowerCase(), s === "style" || s === "link" && i.getAttribute("rel") === "stylesheet"
                        }, e = function(i, s) {
                            var u;
                            return u = i.tagName.toLowerCase(), u === "meta" && i.getAttribute("name") === s
                        }, a
                    }()
                }.call(this),
                function() {
                    l.Snapshot = function() {
                        function a(e, t) {
                            this.headDetails = e,
                            this.bodyElement = t
                        }
                        return a.wrap = function(e) {
                            return e instanceof this ? e : typeof e == "string" ? this.fromHTMLString(e) : this.fromHTMLElement(e)
                        }, a.fromHTMLString = function(e) {
                            var t;
                            return t = document.createElement("html"), t.innerHTML = e, this.fromHTMLElement(t)
                        }, a.fromHTMLElement = function(e) {
                            var t,
                                n,
                                o,
                                r;
                            return o = e.querySelector("head"), t = (r = e.querySelector("body")) != null ? r : document.createElement("body"), n = l.HeadDetails.fromHeadElement(o), new this(n, t)
                        }, a.prototype.clone = function() {
                            return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0))
                        }, a.prototype.getRootLocation = function() {
                            var e,
                                t;
                            return t = (e = this.getSetting("root")) != null ? e : "/", new l.Location(t)
                        }, a.prototype.getCacheControlValue = function() {
                            return this.getSetting("cache-control")
                        }, a.prototype.getElementForAnchor = function(e) {
                            try {
                                return this.bodyElement.querySelector("[id='" + e + "'], a[name='" + e + "']")
                            } catch (t) {}
                        }, a.prototype.getPermanentElements = function() {
                            return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
                        }, a.prototype.getPermanentElementById = function(e) {
                            return this.bodyElement.querySelector("#" + e + "[data-turbolinks-permanent]")
                        }, a.prototype.getPermanentElementsPresentInSnapshot = function(e) {
                            var t,
                                n,
                                o,
                                r,
                                i;
                            for (r = this.getPermanentElements(), i = [], n = 0, o = r.length; o > n; n++)
                                t = r[n],
                                e.getPermanentElementById(t.id) && i.push(t);
                            return i
                        }, a.prototype.findFirstAutofocusableElement = function() {
                            return this.bodyElement.querySelector("[autofocus]")
                        }, a.prototype.hasAnchor = function(e) {
                            return this.getElementForAnchor(e) != null
                        }, a.prototype.isPreviewable = function() {
                            return this.getCacheControlValue() !== "no-preview"
                        }, a.prototype.isCacheable = function() {
                            return this.getCacheControlValue() !== "no-cache"
                        }, a.prototype.isVisitable = function() {
                            return this.getSetting("visit-control") !== "reload"
                        }, a.prototype.getSetting = function(e) {
                            return this.headDetails.getMetaValue("turbolinks-" + e)
                        }, a
                    }()
                }.call(this),
                function() {
                    var a = [].slice;
                    l.Renderer = function() {
                        function e() {}
                        var t;
                        return e.render = function() {
                            var n,
                                o,
                                r,
                                i;
                            return r = arguments[0], o = arguments[1], n = 3 <= arguments.length ? a.call(arguments, 2) : [], i = function(s, u, c) {
                                c.prototype = s.prototype;
                                var h = new c,
                                    p = s.apply(h, u);
                                return Object(p) === p ? p : h
                            }(this, n, function() {}), i.delegate = r, i.render(o), i
                        }, e.prototype.renderView = function(n) {
                            return this.delegate.viewWillRender(this.newBody), n(), this.delegate.viewRendered(this.newBody)
                        }, e.prototype.invalidateView = function() {
                            return this.delegate.viewInvalidated()
                        }, e.prototype.createScriptElement = function(n) {
                            var o;
                            return n.getAttribute("data-turbolinks-eval") === "false" ? n : (o = document.createElement("script"), o.textContent = n.textContent, o.async = !1, t(o, n), o)
                        }, t = function(n, o) {
                            var r,
                                i,
                                s,
                                u,
                                c,
                                h,
                                p;
                            for (u = o.attributes, h = [], r = 0, i = u.length; i > r; r++)
                                c = u[r],
                                s = c.name,
                                p = c.value,
                                h.push(n.setAttribute(s, p));
                            return h
                        }, e
                    }()
                }.call(this),
                function() {
                    var a,
                        e,
                        t = function(o, r) {
                            function i() {
                                this.constructor = o
                            }
                            for (var s in r)
                                n.call(r, s) && (o[s] = r[s]);
                            return i.prototype = r.prototype, o.prototype = new i, o.__super__ = r.prototype, o
                        },
                        n = {}.hasOwnProperty;
                    l.SnapshotRenderer = function(o) {
                        function r(i, s, u) {
                            this.currentSnapshot = i,
                            this.newSnapshot = s,
                            this.isPreview = u,
                            this.currentHeadDetails = this.currentSnapshot.headDetails,
                            this.newHeadDetails = this.newSnapshot.headDetails,
                            this.currentBody = this.currentSnapshot.bodyElement,
                            this.newBody = this.newSnapshot.bodyElement
                        }
                        return t(r, o), r.prototype.render = function(i) {
                            return this.shouldRender() ? (this.mergeHead(), this.renderView(function(s) {
                                return function() {
                                    return s.replaceBody(), s.isPreview || s.focusFirstAutofocusableElement(), i()
                                }
                            }(this))) : this.invalidateView()
                        }, r.prototype.mergeHead = function() {
                            return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                        }, r.prototype.replaceBody = function() {
                            var i;
                            return i = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(i)
                        }, r.prototype.shouldRender = function() {
                            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
                        }, r.prototype.trackedElementsAreIdentical = function() {
                            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                        }, r.prototype.copyNewHeadStylesheetElements = function() {
                            var i,
                                s,
                                u,
                                c,
                                h;
                            for (c = this.getNewHeadStylesheetElements(), h = [], s = 0, u = c.length; u > s; s++)
                                i = c[s],
                                h.push(document.head.appendChild(i));
                            return h
                        }, r.prototype.copyNewHeadScriptElements = function() {
                            var i,
                                s,
                                u,
                                c,
                                h;
                            for (c = this.getNewHeadScriptElements(), h = [], s = 0, u = c.length; u > s; s++)
                                i = c[s],
                                h.push(document.head.appendChild(this.createScriptElement(i)));
                            return h
                        }, r.prototype.removeCurrentHeadProvisionalElements = function() {
                            var i,
                                s,
                                u,
                                c,
                                h;
                            for (c = this.getCurrentHeadProvisionalElements(), h = [], s = 0, u = c.length; u > s; s++)
                                i = c[s],
                                h.push(document.head.removeChild(i));
                            return h
                        }, r.prototype.copyNewHeadProvisionalElements = function() {
                            var i,
                                s,
                                u,
                                c,
                                h;
                            for (c = this.getNewHeadProvisionalElements(), h = [], s = 0, u = c.length; u > s; s++)
                                i = c[s],
                                h.push(document.head.appendChild(i));
                            return h
                        }, r.prototype.relocateCurrentBodyPermanentElements = function() {
                            var i,
                                s,
                                u,
                                c,
                                h,
                                p,
                                d;
                            for (p = this.getCurrentBodyPermanentElements(), d = [], i = 0, s = p.length; s > i; i++)
                                c = p[i],
                                h = a(c),
                                u = this.newSnapshot.getPermanentElementById(c.id),
                                e(c, h.element),
                                e(u, c),
                                d.push(h);
                            return d
                        }, r.prototype.replacePlaceholderElementsWithClonedPermanentElements = function(i) {
                            var s,
                                u,
                                c,
                                h,
                                p,
                                d,
                                y;
                            for (y = [], c = 0, h = i.length; h > c; c++)
                                d = i[c],
                                u = d.element,
                                p = d.permanentElement,
                                s = p.cloneNode(!0),
                                y.push(e(u, s));
                            return y
                        }, r.prototype.activateNewBodyScriptElements = function() {
                            var i,
                                s,
                                u,
                                c,
                                h,
                                p;
                            for (h = this.getNewBodyScriptElements(), p = [], s = 0, c = h.length; c > s; s++)
                                u = h[s],
                                i = this.createScriptElement(u),
                                p.push(e(u, i));
                            return p
                        }, r.prototype.assignNewBody = function() {
                            return document.body = this.newBody
                        }, r.prototype.focusFirstAutofocusableElement = function() {
                            var i;
                            return (i = this.newSnapshot.findFirstAutofocusableElement()) != null ? i.focus() : void 0
                        }, r.prototype.getNewHeadStylesheetElements = function() {
                            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                        }, r.prototype.getNewHeadScriptElements = function() {
                            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                        }, r.prototype.getCurrentHeadProvisionalElements = function() {
                            return this.currentHeadDetails.getProvisionalElements()
                        }, r.prototype.getNewHeadProvisionalElements = function() {
                            return this.newHeadDetails.getProvisionalElements()
                        }, r.prototype.getCurrentBodyPermanentElements = function() {
                            return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
                        }, r.prototype.getNewBodyScriptElements = function() {
                            return this.newBody.querySelectorAll("script")
                        }, r
                    }(l.Renderer),
                    a = function(o) {
                        var r;
                        return r = document.createElement("meta"), r.setAttribute("name", "turbolinks-permanent-placeholder"), r.setAttribute("content", o.id), {
                            element: r,
                            permanentElement: o
                        }
                    },
                    e = function(o, r) {
                        var i;
                        return (i = o.parentNode) ? i.replaceChild(r, o) : void 0
                    }
                }.call(this),
                function() {
                    var a = function(t, n) {
                            function o() {
                                this.constructor = t
                            }
                            for (var r in n)
                                e.call(n, r) && (t[r] = n[r]);
                            return o.prototype = n.prototype, t.prototype = new o, t.__super__ = n.prototype, t
                        },
                        e = {}.hasOwnProperty;
                    l.ErrorRenderer = function(t) {
                        function n(o) {
                            var r;
                            r = document.createElement("html"),
                            r.innerHTML = o,
                            this.newHead = r.querySelector("head"),
                            this.newBody = r.querySelector("body")
                        }
                        return a(n, t), n.prototype.render = function(o) {
                            return this.renderView(function(r) {
                                return function() {
                                    return r.replaceHeadAndBody(), r.activateBodyScriptElements(), o()
                                }
                            }(this))
                        }, n.prototype.replaceHeadAndBody = function() {
                            var o,
                                r;
                            return r = document.head, o = document.body, r.parentNode.replaceChild(this.newHead, r), o.parentNode.replaceChild(this.newBody, o)
                        }, n.prototype.activateBodyScriptElements = function() {
                            var o,
                                r,
                                i,
                                s,
                                u,
                                c;
                            for (s = this.getScriptElements(), c = [], r = 0, i = s.length; i > r; r++)
                                u = s[r],
                                o = this.createScriptElement(u),
                                c.push(u.parentNode.replaceChild(o, u));
                            return c
                        }, n.prototype.getScriptElements = function() {
                            return document.documentElement.querySelectorAll("script")
                        }, n
                    }(l.Renderer)
                }.call(this),
                function() {
                    l.View = function() {
                        function a(e) {
                            this.delegate = e,
                            this.htmlElement = document.documentElement
                        }
                        return a.prototype.getRootLocation = function() {
                            return this.getSnapshot().getRootLocation()
                        }, a.prototype.getElementForAnchor = function(e) {
                            return this.getSnapshot().getElementForAnchor(e)
                        }, a.prototype.getSnapshot = function() {
                            return l.Snapshot.fromHTMLElement(this.htmlElement)
                        }, a.prototype.render = function(e, t) {
                            var n,
                                o,
                                r;
                            return r = e.snapshot, n = e.error, o = e.isPreview, this.markAsPreview(o), r != null ? this.renderSnapshot(r, o, t) : this.renderError(n, t)
                        }, a.prototype.markAsPreview = function(e) {
                            return e ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
                        }, a.prototype.renderSnapshot = function(e, t, n) {
                            return l.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), l.Snapshot.wrap(e), t)
                        }, a.prototype.renderError = function(e, t) {
                            return l.ErrorRenderer.render(this.delegate, t, e)
                        }, a
                    }()
                }.call(this),
                function() {
                    var a = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    l.ScrollManager = function() {
                        function e(t) {
                            this.delegate = t,
                            this.onScroll = a(this.onScroll, this),
                            this.onScroll = l.throttle(this.onScroll)
                        }
                        return e.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                        }, e.prototype.stop = function() {
                            return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                        }, e.prototype.scrollToElement = function(t) {
                            return t.scrollIntoView()
                        }, e.prototype.scrollToPosition = function(t) {
                            var n,
                                o;
                            return n = t.x, o = t.y, window.scrollTo(n, o)
                        }, e.prototype.onScroll = function(t) {
                            return this.updatePosition({
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            })
                        }, e.prototype.updatePosition = function(t) {
                            var n;
                            return this.position = t, (n = this.delegate) != null ? n.scrollPositionChanged(this.position) : void 0
                        }, e
                    }()
                }.call(this),
                function() {
                    l.SnapshotCache = function() {
                        function a(t) {
                            this.size = t,
                            this.keys = [],
                            this.snapshots = {}
                        }
                        var e;
                        return a.prototype.has = function(t) {
                            var n;
                            return n = e(t), n in this.snapshots
                        }, a.prototype.get = function(t) {
                            var n;
                            if (this.has(t))
                                return n = this.read(t), this.touch(t), n
                        }, a.prototype.put = function(t, n) {
                            return this.write(t, n), this.touch(t), n
                        }, a.prototype.read = function(t) {
                            var n;
                            return n = e(t), this.snapshots[n]
                        }, a.prototype.write = function(t, n) {
                            var o;
                            return o = e(t), this.snapshots[o] = n
                        }, a.prototype.touch = function(t) {
                            var n,
                                o;
                            return o = e(t), n = this.keys.indexOf(o), n > -1 && this.keys.splice(n, 1), this.keys.unshift(o), this.trim()
                        }, a.prototype.trim = function() {
                            var t,
                                n,
                                o,
                                r,
                                i;
                            for (r = this.keys.splice(this.size), i = [], t = 0, o = r.length; o > t; t++)
                                n = r[t],
                                i.push(delete this.snapshots[n]);
                            return i
                        }, e = function(t) {
                            return l.Location.wrap(t).toCacheKey()
                        }, a
                    }()
                }.call(this),
                function() {
                    var a = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    l.Visit = function() {
                        function e(n, o, r) {
                            this.controller = n,
                            this.action = r,
                            this.performScroll = a(this.performScroll, this),
                            this.identifier = l.uuid(),
                            this.location = l.Location.wrap(o),
                            this.adapter = this.controller.adapter,
                            this.state = "initialized",
                            this.timingMetrics = {}
                        }
                        var t;
                        return e.prototype.start = function() {
                            return this.state === "initialized" ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                        }, e.prototype.cancel = function() {
                            var n;
                            return this.state === "started" ? ((n = this.request) != null && n.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                        }, e.prototype.complete = function() {
                            var n;
                            return this.state === "started" ? (this.recordTimingMetric("visitEnd"), this.state = "completed", typeof (n = this.adapter).visitCompleted == "function" && n.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                        }, e.prototype.fail = function() {
                            var n;
                            return this.state === "started" ? (this.state = "failed", typeof (n = this.adapter).visitFailed == "function" ? n.visitFailed(this) : void 0) : void 0
                        }, e.prototype.changeHistory = function() {
                            var n,
                                o;
                            return this.historyChanged ? void 0 : (n = this.location.isEqualTo(this.referrer) ? "replace" : this.action, o = t(n), this.controller[o](this.location, this.restorationIdentifier), this.historyChanged = !0)
                        }, e.prototype.issueRequest = function() {
                            return this.shouldIssueRequest() && this.request == null ? (this.progress = 0, this.request = new l.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                        }, e.prototype.getCachedSnapshot = function() {
                            var n;
                            return !(n = this.controller.getCachedSnapshotForLocation(this.location)) || this.location.anchor != null && !n.hasAnchor(this.location.anchor) || this.action !== "restore" && !n.isPreviewable() ? void 0 : n
                        }, e.prototype.hasCachedSnapshot = function() {
                            return this.getCachedSnapshot() != null
                        }, e.prototype.loadCachedSnapshot = function() {
                            var n,
                                o;
                            return (o = this.getCachedSnapshot()) ? (n = this.shouldIssueRequest(), this.render(function() {
                                var r;
                                return this.cacheSnapshot(), this.controller.render({
                                    snapshot: o,
                                    isPreview: n
                                }, this.performScroll), typeof (r = this.adapter).visitRendered == "function" && r.visitRendered(this), n ? void 0 : this.complete()
                            })) : void 0
                        }, e.prototype.loadResponse = function() {
                            return this.response != null ? this.render(function() {
                                var n,
                                    o;
                                return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                                    error: this.response
                                }, this.performScroll), typeof (n = this.adapter).visitRendered == "function" && n.visitRendered(this), this.fail()) : (this.controller.render({
                                    snapshot: this.response
                                }, this.performScroll), typeof (o = this.adapter).visitRendered == "function" && o.visitRendered(this), this.complete())
                            }) : void 0
                        }, e.prototype.followRedirect = function() {
                            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                        }, e.prototype.requestStarted = function() {
                            var n;
                            return this.recordTimingMetric("requestStart"), typeof (n = this.adapter).visitRequestStarted == "function" ? n.visitRequestStarted(this) : void 0
                        }, e.prototype.requestProgressed = function(n) {
                            var o;
                            return this.progress = n, typeof (o = this.adapter).visitRequestProgressed == "function" ? o.visitRequestProgressed(this) : void 0
                        }, e.prototype.requestCompletedWithResponse = function(n, o) {
                            return this.response = n, o != null && (this.redirectedToLocation = l.Location.wrap(o)), this.adapter.visitRequestCompleted(this)
                        }, e.prototype.requestFailedWithStatusCode = function(n, o) {
                            return this.response = o, this.adapter.visitRequestFailedWithStatusCode(this, n)
                        }, e.prototype.requestFinished = function() {
                            var n;
                            return this.recordTimingMetric("requestEnd"), typeof (n = this.adapter).visitRequestFinished == "function" ? n.visitRequestFinished(this) : void 0
                        }, e.prototype.performScroll = function() {
                            return this.scrolled ? void 0 : (this.action === "restore" ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                        }, e.prototype.scrollToRestoredPosition = function() {
                            var n,
                                o;
                            return n = (o = this.restorationData) != null ? o.scrollPosition : void 0, n != null ? (this.controller.scrollToPosition(n), !0) : void 0
                        }, e.prototype.scrollToAnchor = function() {
                            return this.location.anchor != null ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                        }, e.prototype.scrollToTop = function() {
                            return this.controller.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, e.prototype.recordTimingMetric = function(n) {
                            var o;
                            return (o = this.timingMetrics)[n] != null ? o[n] : o[n] = new Date().getTime()
                        }, e.prototype.getTimingMetrics = function() {
                            return l.copyObject(this.timingMetrics)
                        }, t = function(n) {
                            switch (n) {
                            case "replace":
                                return "replaceHistoryWithLocationAndRestorationIdentifier";
                            case "advance":
                            case "restore":
                                return "pushHistoryWithLocationAndRestorationIdentifier"
                            }
                        }, e.prototype.shouldIssueRequest = function() {
                            return this.action === "restore" ? !this.hasCachedSnapshot() : !0
                        }, e.prototype.cacheSnapshot = function() {
                            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                        }, e.prototype.render = function(n) {
                            return this.cancelRender(), this.frame = requestAnimationFrame(function(o) {
                                return function() {
                                    return o.frame = null, n.call(o)
                                }
                            }(this))
                        }, e.prototype.cancelRender = function() {
                            return this.frame ? cancelAnimationFrame(this.frame) : void 0
                        }, e
                    }()
                }.call(this),
                function() {
                    var a = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    l.Controller = function() {
                        function e() {
                            this.clickBubbled = a(this.clickBubbled, this),
                            this.clickCaptured = a(this.clickCaptured, this),
                            this.pageLoaded = a(this.pageLoaded, this),
                            this.history = new l.History(this),
                            this.view = new l.View(this),
                            this.scrollManager = new l.ScrollManager(this),
                            this.restorationData = {},
                            this.clearCache(),
                            this.setProgressBarDelay(500)
                        }
                        return e.prototype.start = function() {
                            return l.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                        }, e.prototype.disable = function() {
                            return this.enabled = !1
                        }, e.prototype.stop = function() {
                            return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                        }, e.prototype.clearCache = function() {
                            return this.cache = new l.SnapshotCache(10)
                        }, e.prototype.visit = function(t, n) {
                            var o,
                                r;
                            return n == null && (n = {}), t = l.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (o = (r = n.action) != null ? r : "advance", this.adapter.visitProposedToLocationWithAction(t, o)) : window.location = t : void 0
                        }, e.prototype.startVisitToLocationWithAction = function(t, n, o) {
                            var r;
                            return l.supported ? (r = this.getRestorationDataForIdentifier(o), this.startVisit(t, n, {
                                restorationData: r
                            })) : window.location = t
                        }, e.prototype.setProgressBarDelay = function(t) {
                            return this.progressBarDelay = t
                        }, e.prototype.startHistory = function() {
                            return this.location = l.Location.wrap(window.location), this.restorationIdentifier = l.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                        }, e.prototype.stopHistory = function() {
                            return this.history.stop()
                        }, e.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(t, n) {
                            return this.restorationIdentifier = n, this.location = l.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier)
                        }, e.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(t, n) {
                            return this.restorationIdentifier = n, this.location = l.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier)
                        }, e.prototype.historyPoppedToLocationWithRestorationIdentifier = function(t, n) {
                            var o;
                            return this.restorationIdentifier = n, this.enabled ? (o = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
                                restorationIdentifier: this.restorationIdentifier,
                                restorationData: o,
                                historyChanged: !0
                            }), this.location = l.Location.wrap(t)) : this.adapter.pageInvalidated()
                        }, e.prototype.getCachedSnapshotForLocation = function(t) {
                            var n;
                            return (n = this.cache.get(t)) != null ? n.clone() : void 0
                        }, e.prototype.shouldCacheSnapshot = function() {
                            return this.view.getSnapshot().isCacheable()
                        }, e.prototype.cacheSnapshot = function() {
                            var t,
                                n;
                            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), n = this.view.getSnapshot(), t = this.lastRenderedLocation, l.defer(function(o) {
                                return function() {
                                    return o.cache.put(t, n.clone())
                                }
                            }(this))) : void 0
                        }, e.prototype.scrollToAnchor = function(t) {
                            var n;
                            return (n = this.view.getElementForAnchor(t)) ? this.scrollToElement(n) : this.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, e.prototype.scrollToElement = function(t) {
                            return this.scrollManager.scrollToElement(t)
                        }, e.prototype.scrollToPosition = function(t) {
                            return this.scrollManager.scrollToPosition(t)
                        }, e.prototype.scrollPositionChanged = function(t) {
                            var n;
                            return n = this.getCurrentRestorationData(), n.scrollPosition = t
                        }, e.prototype.render = function(t, n) {
                            return this.view.render(t, n)
                        }, e.prototype.viewInvalidated = function() {
                            return this.adapter.pageInvalidated()
                        }, e.prototype.viewWillRender = function(t) {
                            return this.notifyApplicationBeforeRender(t)
                        }, e.prototype.viewRendered = function() {
                            return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                        }, e.prototype.pageLoaded = function() {
                            return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                        }, e.prototype.clickCaptured = function() {
                            return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                        }, e.prototype.clickBubbled = function(t) {
                            var n,
                                o,
                                r;
                            return this.enabled && this.clickEventIsSignificant(t) && (o = this.getVisitableLinkForNode(t.target)) && (r = this.getVisitableLocationForLink(o)) && this.applicationAllowsFollowingLinkToLocation(o, r) ? (t.preventDefault(), n = this.getActionForLink(o), this.visit(r, {
                                action: n
                            })) : void 0
                        }, e.prototype.applicationAllowsFollowingLinkToLocation = function(t, n) {
                            var o;
                            return o = this.notifyApplicationAfterClickingLinkToLocation(t, n), !o.defaultPrevented
                        }, e.prototype.applicationAllowsVisitingLocation = function(t) {
                            var n;
                            return n = this.notifyApplicationBeforeVisitingLocation(t), !n.defaultPrevented
                        }, e.prototype.notifyApplicationAfterClickingLinkToLocation = function(t, n) {
                            return l.dispatch("turbolinks:click", {
                                target: t,
                                data: {
                                    url: n.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, e.prototype.notifyApplicationBeforeVisitingLocation = function(t) {
                            return l.dispatch("turbolinks:before-visit", {
                                data: {
                                    url: t.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, e.prototype.notifyApplicationAfterVisitingLocation = function(t) {
                            return l.dispatch("turbolinks:visit", {
                                data: {
                                    url: t.absoluteURL
                                }
                            })
                        }, e.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                            return l.dispatch("turbolinks:before-cache")
                        }, e.prototype.notifyApplicationBeforeRender = function(t) {
                            return l.dispatch("turbolinks:before-render", {
                                data: {
                                    newBody: t
                                }
                            })
                        }, e.prototype.notifyApplicationAfterRender = function() {
                            return l.dispatch("turbolinks:render")
                        }, e.prototype.notifyApplicationAfterPageLoad = function(t) {
                            return t == null && (t = {}), l.dispatch("turbolinks:load", {
                                data: {
                                    url: this.location.absoluteURL,
                                    timing: t
                                }
                            })
                        }, e.prototype.startVisit = function(t, n, o) {
                            var r;
                            return (r = this.currentVisit) != null && r.cancel(), this.currentVisit = this.createVisit(t, n, o), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
                        }, e.prototype.createVisit = function(t, n, o) {
                            var r,
                                i,
                                s,
                                u,
                                c;
                            return i = o != null ? o : {}, u = i.restorationIdentifier, s = i.restorationData, r = i.historyChanged, c = new l.Visit(this, t, n), c.restorationIdentifier = u != null ? u : l.uuid(), c.restorationData = l.copyObject(s), c.historyChanged = r, c.referrer = this.location, c
                        }, e.prototype.visitCompleted = function(t) {
                            return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
                        }, e.prototype.clickEventIsSignificant = function(t) {
                            return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
                        }, e.prototype.getVisitableLinkForNode = function(t) {
                            return this.nodeIsVisitable(t) ? l.closest(t, "a[href]:not([target]):not([download])") : void 0
                        }, e.prototype.getVisitableLocationForLink = function(t) {
                            var n;
                            return n = new l.Location(t.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                        }, e.prototype.getActionForLink = function(t) {
                            var n;
                            return (n = t.getAttribute("data-turbolinks-action")) != null ? n : "advance"
                        }, e.prototype.nodeIsVisitable = function(t) {
                            var n;
                            return (n = l.closest(t, "[data-turbolinks]")) ? n.getAttribute("data-turbolinks") !== "false" : !0
                        }, e.prototype.locationIsVisitable = function(t) {
                            return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                        }, e.prototype.getCurrentRestorationData = function() {
                            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                        }, e.prototype.getRestorationDataForIdentifier = function(t) {
                            var n;
                            return (n = this.restorationData)[t] != null ? n[t] : n[t] = {}
                        }, e
                    }()
                }.call(this),
                function() {
                    (function() {
                        var a,
                            e;
                        if ((a = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) {
                            for (; a = a.parentNode;)
                                if (a === document.body)
                                    return console.warn(`You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!

Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

For more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements

\u2014\u2014
Suppress this warning by adding a \`data-turbolinks-suppress-warning\` attribute to: %s`






                                    , e.outerHTML)
                        }
                    })()
                }.call(this),
                function() {
                    var a,
                        e,
                        t;
                    l.start = function() {
                        return e() ? (l.controller == null && (l.controller = a()), l.controller.start()) : void 0
                    },
                    e = function() {
                        return window.Turbolinks == null && (window.Turbolinks = l), t()
                    },
                    a = function() {
                        var n;
                        return n = new l.Controller, n.adapter = new l.BrowserAdapter(n), n
                    },
                    t = function() {
                        return window.Turbolinks === l
                    },
                    t() && l.start()
                }.call(this)
            }).call(this),
            typeof m == "object" && m.exports ? m.exports = l : typeof define == "function" && define.amd && define(l)
        }).call(E)
    });
    var S = g((v, b) => {
        var R = () => {
            let f = {
                speedOpen: 50,
                speedClose: 350,
                activeClass: "is-active",
                visibleClass: "is-visible",
                selectorTarget: "[data-drawer-target]",
                selectorTrigger: "[data-drawer-trigger]",
                selectorClose: "[data-drawer-close]"
            };
            Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = i => {
                let s = v,
                    u = v;
                if (!document.documentElement.contains(s))
                    return null;
                do {
                    if (u.matches(i))
                        return u;
                    u = u.parentElement
                } while (u !== null);
                return null
            });
            let l = i => {
                    let s = i.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),
                        u = s[0],
                        c = s[s.length - 1],
                        h = 9;
                    i.addEventListener("keydown", p => {
                        (p.key === "Tab" || p.keyCode === h) && (p.shiftKey ? document.activeElement === u && (c.focus(), p.preventDefault()) : document.activeElement === c && (u.focus(), p.preventDefault()))
                    })
                },
                a = i => {
                    i.getAttribute("aria-expanded") === "true" ? i.setAttribute("aria-expanded", !1) : i.setAttribute("aria-expanded", !0)
                },
                e = () => {
                    document.documentElement.style.overflow = ""
                },
                t = i => {
                    let s = document.getElementById(i.getAttribute("aria-controls"));
                    s.classList.add(f.activeClass),
                    document.documentElement.style.overflow = "hidden",
                    a(i),
                    setTimeout(() => {
                        s.classList.add(f.visibleClass),
                        l(s)
                    }, f.speedOpen)
                },
                n = i => {
                    let s = i.closest(f.selectorTarget),
                        u = document.querySelector('[aria-controls="' + s.id + '"');
                    s.classList.remove(f.visibleClass),
                    e(),
                    a(u),
                    setTimeout(function() {
                        s.classList.remove(f.activeClass)
                    }, f.speedClose)
                },
                o = i => {
                    let s = i.target,
                        u = s.closest(f.selectorTrigger),
                        c = s.closest(f.selectorClose);
                    u && t(u),
                    c && n(c),
                    (u || c) && i.preventDefault()
                },
                r = i => {
                    if (i.key === "Escape" || i.keyCode === 27) {
                        let s = document.querySelectorAll(f.selectorTarget);
                        for (let u = 0; u < s.length; ++u)
                            s[u].classList.contains(f.activeClass) && n(s[u])
                    }
                };
            document.addEventListener("click", o, !1),
            document.addEventListener("keydown", r, !1),
            document.addEventListener("turbolinks:click", e, !1)
        };
        b.exports = R
    });
    var P = g((B, L) => {
        var T = () => {
            let f = {
                    toggleButton: "[data-theme-switch]"
                },
                l = () => {
                    let e = document.documentElement.dataset,
                        t = e.theme === "dark" ? "light" : "dark";
                    e.theme = t,
                    localStorage.setItem("theme", t)
                },
                a = e => {
                    e.target.closest(f.toggleButton) && l()
                };
            document.addEventListener("click", a)
        };
        L.exports = T
    });
    var C = w(),
        k = S(),
        A = P();
    C.start();
    k();
    var {enableThemeSwitch: q} = document.documentElement.dataset;
    q && A();
    window.netlifyIdentity && window.netlifyIdentity.on("init", f => {
        f || window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/"
        })
    });
})();
