(function () {
  "use strict";
  var e = {
      500: function (e, t, n) {
        var a = n(963),
          r = n(252);
        function o(e, t, n, a, o, s) {
          const i = (0, r.up)("HeaderVue"),
            c = (0, r.up)("HeaderNavigation"),
            u = (0, r.up)("NewsList"),
            l = (0, r.up)("FooterVue");
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [(0, r.Wm)(i), (0, r.Wm)(c), (0, r.Wm)(u), (0, r.Wm)(l)],
              64
            )
          );
        }
        var s = n(577);
        const i = { class: "news-grid container" },
          c = ["src"],
          u = { class: "news-content" },
          l = { class: "news-date" },
          d = { class: "news-day" },
          g = { class: "news-month-year" },
          v = { class: "news-title" },
          f = { class: "news-preview" },
          w = { class: "news-type" },
          p = { class: "news-type__text" };
        function h(e, t, n, a, o, h) {
          return (
            (0, r.wg)(),
            (0, r.iD)(
              r.HY,
              null,
              [
                (0, r._)("div", i, [
                  ((0, r.wg)(!0),
                  (0, r.iD)(
                    r.HY,
                    null,
                    (0, r.Ko)(
                      o.newsList,
                      (e) => (
                        (0, r.wg)(),
                        (0, r.iD)("div", { key: e.code, class: "news-card" }, [
                          (0, r._)(
                            "div",
                            {
                              class: (0, s.C_)({
                                "news-image-placeholder": !e.image,
                              }),
                            },
                            [
                              e.image
                                ? ((0, r.wg)(),
                                  (0, r.iD)(
                                    "img",
                                    {
                                      key: 0,
                                      src: e.image,
                                      alt: "News Image",
                                      class: "news-image",
                                    },
                                    null,
                                    8,
                                    c
                                  ))
                                : (0, r.kq)("", !0),
                            ],
                            2
                          ),
                          (0, r._)("div", u, [
                            (0, r._)("div", l, [
                              (0, r._)(
                                "p",
                                d,
                                (0, s.zw)(h.formatDay(e.date)),
                                1
                              ),
                              (0, r._)(
                                "p",
                                g,
                                (0, s.zw)(h.formatYearAndMonth(e.date)),
                                1
                              ),
                            ]),
                            (0, r._)("h2", v, (0, s.zw)(e.name), 1),
                            (0, r._)("p", f, (0, s.zw)(e.previewText), 1),
                            (0, r._)("div", w, [
                              (0, r._)("p", p, (0, s.zw)(e.type.value), 1),
                            ]),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
                h.showLoadMoreButton
                  ? ((0, r.wg)(),
                    (0, r.iD)(
                      "button",
                      {
                        key: 0,
                        onClick:
                          t[0] ||
                          (t[0] = (...e) =>
                            h.loadMoreNews && h.loadMoreNews(...e)),
                        class: "load-more__button",
                      },
                      " Загрузить ещё "
                    ))
                  : (0, r.kq)("", !0),
              ],
              64
            )
          );
        }
        var _ = {
            data() {
              return { newsList: [], currentPage: 1, totalPageCount: 1 };
            },
            created() {
              this.fetchNews();
            },
            methods: {
              async fetchNews() {
                try {
                  const e = await fetch(
                      `http://flems.github.io/test/api/news/${this.currentPage}/`
                    ),
                    t = await e.json();
                  (this.newsList = this.newsList.concat(t.items)),
                    (this.totalPageCount = t.nav.total);
                } catch (e) {
                  console.error("Error fetching news:", e);
                }
              },
              loadMoreNews() {
                this.currentPage < this.totalPageCount &&
                  (this.currentPage++, this.fetchNews());
              },
              formatDay(e) {
                const t = new Date(1e3 * e);
                return t.toLocaleDateString("en-US", { day: "numeric" });
              },
              formatYearAndMonth(e) {
                const t = new Date(1e3 * e);
                return t.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                });
              },
            },
            computed: {
              showLoadMoreButton() {
                return this.currentPage < this.totalPageCount;
              },
            },
          },
          m = n(744);
        const y = (0, m.Z)(_, [
          ["render", h],
          ["__scopeId", "data-v-9e185a02"],
        ]);
        var b = y,
          D = n.p + "img/logo.8474c3b6.svg";
        const N = (e) => (
            (0, r.dD)("data-v-015a5d63"), (e = e()), (0, r.Cn)(), e
          ),
          k = { class: "header" },
          C = N(() =>
            (0, r._)(
              "div",
              { class: "container" },
              [
                (0, r._)("a", { href: "/", class: "logo" }, [
                  (0, r._)("img", { class: "logo__img", alt: "logo", src: D }),
                ]),
              ],
              -1
            )
          ),
          O = [C];
        function P(e, t, n, a, o, s) {
          return (0, r.wg)(), (0, r.iD)("header", k, O);
        }
        var L = { name: "HeaderVue" };
        const j = (0, m.Z)(L, [
          ["render", P],
          ["__scopeId", "data-v-015a5d63"],
        ]);
        var H = j;
        const x = (e) => (
            (0, r.dD)("data-v-1c3478e2"), (e = e()), (0, r.Cn)(), e
          ),
          z = { class: "footer" },
          M = x(() =>
            (0, r._)(
              "div",
              { class: "container" },
              [
                (0, r._)("a", { href: "/", class: "logo" }, [
                  (0, r._)("img", { class: "logo__img", alt: "logo", src: D }),
                ]),
                (0, r._)("p", { class: "footer__copyright" }, "© alpha, 2023"),
              ],
              -1
            )
          ),
          I = [M];
        function V(e, t, n, a, o, s) {
          return (0, r.wg)(), (0, r.iD)("footer", z, I);
        }
        var Y = { name: "FooterVue" };
        const Z = (0, m.Z)(Y, [
          ["render", V],
          ["__scopeId", "data-v-1c3478e2"],
        ]);
        var F = Z,
          S = n.p + "img/banner.37fdcd18.png";
        const W = (e) => (
            (0, r.dD)("data-v-66e4e769"), (e = e()), (0, r.Cn)(), e
          ),
          A = { class: "navigation-cover" },
          B = W(() =>
            (0, r._)(
              "img",
              { class: "navigation-banner", src: S, alt: "Banner Image" },
              null,
              -1
            )
          ),
          T = W(() =>
            (0, r._)(
              "div",
              { class: "navigation" },
              [
                (0, r._)("div", { class: "container" }, [
                  (0, r._)("p", { class: "navigation__text" }, "Новости"),
                ]),
              ],
              -1
            )
          ),
          q = [B, T];
        function E(e, t, n, a, o, s) {
          return (0, r.wg)(), (0, r.iD)("div", A, q);
        }
        var U = { name: "HeaderNavigation" };
        const K = (0, m.Z)(U, [
          ["render", E],
          ["__scopeId", "data-v-66e4e769"],
        ]);
        var $ = K,
          G = {
            name: "App",
            components: {
              NewsList: b,
              HeaderVue: H,
              HeaderNavigation: $,
              FooterVue: F,
            },
          };
        const J = (0, m.Z)(G, [["render", o]]);
        var Q = J;
        (0, a.ri)(Q).mount("#app");
      },
    },
    t = {};
  function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var o = (t[a] = { exports: {} });
    return e[a](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, a, r, o) {
        if (!a) {
          var s = 1 / 0;
          for (l = 0; l < e.length; l++) {
            (a = e[l][0]), (r = e[l][1]), (o = e[l][2]);
            for (var i = !0, c = 0; c < a.length; c++)
              (!1 & o || s >= o) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](a[c]);
              })
                ? a.splice(c--, 1)
                : ((i = !1), o < s && (s = o));
            if (i) {
              e.splice(l--, 1);
              var u = r();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        o = o || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
        e[l] = [a, r, o];
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var a in t)
          n.o(t, a) &&
            !n.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      n.p = "";
    })(),
    (function () {
      var e = { 143: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, a) {
          var r,
            o,
            s = a[0],
            i = a[1],
            c = a[2],
            u = 0;
          if (
            s.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in i) n.o(i, r) && (n.m[r] = i[r]);
            if (c) var l = c(n);
          }
          for (t && t(a); u < s.length; u++)
            (o = s[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(l);
        },
        a = (self["webpackChunkproject_zebra"] =
          self["webpackChunkproject_zebra"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = n.O(void 0, [998], function () {
    return n(500);
  });
  a = n.O(a);
})();
//# sourceMappingURL=app.eb42984d.js.map
