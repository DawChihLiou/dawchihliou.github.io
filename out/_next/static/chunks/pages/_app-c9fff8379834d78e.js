;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1530: function (a, b) {
      var c, d
      !(function (e) {
        var f,
          g,
          h = '0.5.4',
          i = 'hasOwnProperty',
          j = /[\.\/]/,
          k = /\s*,\s*/,
          l = { n: {} },
          m = function () {
            for (var a = 0, b = this.length; a < b; a++)
              if (void 0 !== this[a]) return this[a]
          },
          n = function () {
            for (var a = this.length; --a; )
              if (void 0 !== this[a]) return this[a]
          },
          o = Object.prototype.toString,
          p = String,
          q =
            Array.isArray ||
            function (a) {
              return a instanceof Array || '[object Array]' == o.call(a)
            },
          r = function (a, b) {
            var c,
              d = g,
              e = Array.prototype.slice.call(arguments, 2),
              h = r.listeners(a),
              i = 0,
              j = [],
              k = {},
              l = [],
              o = f
            ;(l.firstDefined = m), (l.lastDefined = n), (f = a), (g = 0)
            for (var p = 0, q = h.length; p < q; p++)
              'zIndex' in h[p] &&
                (j.push(h[p].zIndex),
                h[p].zIndex < 0 && (k[h[p].zIndex] = h[p]))
            for (
              j.sort(function (a, b) {
                return a - b
              });
              j[i] < 0;

            )
              if (((c = k[j[i++]]), l.push(c.apply(b, e)), g)) return (g = d), l
            for (p = 0; p < q; p++)
              if ('zIndex' in (c = h[p]))
                if (c.zIndex == j[i]) {
                  if ((l.push(c.apply(b, e)), g)) break
                  do if ((i++, (c = k[j[i]]) && l.push(c.apply(b, e)), g)) break
                  while (c)
                } else k[c.zIndex] = c
              else if ((l.push(c.apply(b, e)), g)) break
            return (g = d), (f = o), l
          }
        ;(r._events = l),
          (r.listeners = function (a) {
            var b,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              k = q(a) ? a : a.split(j),
              m = l,
              n = [m],
              o = []
            for (e = 0, f = k.length; e < f; e++) {
              for (g = 0, i = [], h = n.length; g < h; g++)
                for (c = [(m = n[g].n)[k[e]], m['*']], d = 2; d--; )
                  (b = c[d]) && (i.push(b), (o = o.concat(b.f || [])))
              n = i
            }
            return o
          }),
          (r.separator = function (a) {
            a
              ? ((a =
                  '[' + (a = p(a).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']'),
                (j = new RegExp(a)))
              : (j = /[\.\/]/)
          }),
          (r.on = function (a, b) {
            if ('function' != typeof b) return function () {}
            for (
              var c = q(a) ? (q(a[0]) ? a : [a]) : p(a).split(k),
                d = 0,
                e = c.length;
              d < e;
              d++
            )
              !(function (a) {
                for (
                  var c,
                    d = q(a) ? a : p(a).split(j),
                    e = l,
                    f = 0,
                    g = d.length;
                  f < g;
                  f++
                )
                  e =
                    ((e = e.n).hasOwnProperty(d[f]) && e[d[f]]) ||
                    (e[d[f]] = { n: {} })
                for (f = 0, e.f = e.f || [], g = e.f.length; f < g; f++)
                  if (e.f[f] == b) {
                    c = !0
                    break
                  }
                c || e.f.push(b)
              })(c[d])
            return function (a) {
              ;+a == +a && (b.zIndex = +a)
            }
          }),
          (r.f = function (a) {
            var b = [].slice.call(arguments, 1)
            return function () {
              r.apply(
                null,
                [a, null].concat(b).concat([].slice.call(arguments, 0))
              )
            }
          }),
          (r.stop = function () {
            g = 1
          }),
          (r.nt = function (a) {
            var b = q(f) ? f.join('.') : f
            return a
              ? new RegExp('(?:\\.|\\/|^)' + a + '(?:\\.|\\/|$)').test(b)
              : b
          }),
          (r.nts = function () {
            return q(f) ? f : f.split(j)
          }),
          (r.off = r.unbind = function (a, b) {
            if (!a) {
              r._events = l = { n: {} }
              return
            }
            var c = q(a) ? (q(a[0]) ? a : [a]) : p(a).split(k)
            if (c.length > 1) {
              for (var d = 0, e = c.length; d < e; d++) r.off(c[d], b)
              return
            }
            c = q(a) ? a : p(a).split(j)
            var f,
              g,
              h,
              d,
              e,
              m,
              n,
              o = [l],
              s = []
            for (d = 0, e = c.length; d < e; d++)
              for (m = 0; m < o.length; m += h.length - 2) {
                if (((h = [m, 1]), (f = o[m].n), '*' != c[d]))
                  f[c[d]] && (h.push(f[c[d]]), s.unshift({ n: f, name: c[d] }))
                else
                  for (g in f)
                    f[i](g) && (h.push(f[g]), s.unshift({ n: f, name: g }))
                o.splice.apply(o, h)
              }
            for (d = 0, e = o.length; d < e; d++)
              for (f = o[d]; f.n; ) {
                if (b) {
                  if (f.f) {
                    for (m = 0, n = f.f.length; m < n; m++)
                      if (f.f[m] == b) {
                        f.f.splice(m, 1)
                        break
                      }
                    f.f.length || delete f.f
                  }
                  for (g in f.n)
                    if (f.n[i](g) && f.n[g].f) {
                      var t = f.n[g].f
                      for (m = 0, n = t.length; m < n; m++)
                        if (t[m] == b) {
                          t.splice(m, 1)
                          break
                        }
                      t.length || delete f.n[g].f
                    }
                } else
                  for (g in (delete f.f, f.n))
                    f.n[i](g) && f.n[g].f && delete f.n[g].f
                f = f.n
              }
            prune: for (d = 0, e = s.length; d < e; d++) {
              for (g in (f = s[d]).n[f.name].f) continue prune
              for (g in f.n[f.name].n) continue prune
              delete f.n[f.name]
            }
          }),
          (r.once = function (a, b) {
            var c = function () {
              return r.off(a, c), b.apply(this, arguments)
            }
            return r.on(a, c)
          }),
          (r.version = h),
          (r.toString = function () {
            return 'You are running Eve ' + h
          }),
          (e.eve = r),
          a.exports
            ? (a.exports = r)
            : ((c = []),
              void 0 !==
                (d = function () {
                  return r
                }.apply(b, c)) && (a.exports = d))
      })('undefined' != typeof window ? window : this)
    },
    6363: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return c(3026)
        },
      ])
    },
    8418: function (a, b, c) {
      'use strict'
      function d(a, b) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a
          })(a) ||
          (function (a, b) {
            var c = [],
              d = !0,
              e = !1,
              f = void 0
            try {
              for (
                var g, h = a[Symbol.iterator]();
                !(d = (g = h.next()).done) &&
                (c.push(g.value), !b || c.length !== b);
                d = !0
              );
            } catch (i) {
              ;(e = !0), (f = i)
            } finally {
              try {
                d || null == h.return || h.return()
              } finally {
                if (e) throw f
              }
            }
            return c
          })(a, b) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      b.default = void 0
      var e,
        f = (e = c(7294)) && e.__esModule ? e : { default: e },
        g = c(6273),
        h = c(387),
        i = c(7190),
        j = {}
      function k(a, b, c, d) {
        if (a && g.isLocalURL(b)) {
          a.prefetch(b, c, d).catch(function (a) {})
          var e = d && void 0 !== d.locale ? d.locale : a && a.locale
          j[b + '%' + c + (e ? '%' + e : '')] = !0
        }
      }
      b.default = function (a) {
        var b,
          c = !1 !== a.prefetch,
          e = h.useRouter(),
          l = f.default.useMemo(
            function () {
              var b = d(g.resolveHref(e, a.href, !0), 2),
                c = b[0],
                f = b[1]
              return { href: c, as: a.as ? g.resolveHref(e, a.as) : f || c }
            },
            [e, a.href, a.as]
          ),
          m = l.href,
          n = l.as,
          o = a.children,
          p = a.replace,
          q = a.shallow,
          r = a.scroll,
          s = a.locale
        'string' == typeof o && (o = f.default.createElement('a', null, o))
        var t =
            (b = f.default.Children.only(o)) && 'object' == typeof b && b.ref,
          u = d(i.useIntersection({ rootMargin: '200px' }), 2),
          v = u[0],
          w = u[1],
          x = f.default.useCallback(
            function (a) {
              v(a),
                t &&
                  ('function' == typeof t
                    ? t(a)
                    : 'object' == typeof t && (t.current = a))
            },
            [t, v]
          )
        f.default.useEffect(
          function () {
            var a = w && c && g.isLocalURL(m),
              b = void 0 !== s ? s : e && e.locale,
              d = j[m + '%' + n + (b ? '%' + b : '')]
            a && !d && k(e, m, n, { locale: b })
          },
          [n, m, w, s, c, e]
        )
        var y = {
          ref: x,
          onClick: function (a) {
            var c, d, f, h, i, j, k, l, o, t
            b.props &&
              'function' == typeof b.props.onClick &&
              b.props.onClick(a),
              a.defaultPrevented ||
                ((c = a),
                (d = e),
                (f = m),
                (h = n),
                (i = p),
                (j = q),
                (k = r),
                (l = s),
                ('A' === c.currentTarget.nodeName &&
                  (((t = (o = c).currentTarget.target) && '_self' !== t) ||
                    o.metaKey ||
                    o.ctrlKey ||
                    o.shiftKey ||
                    o.altKey ||
                    (o.nativeEvent && 2 === o.nativeEvent.which) ||
                    !g.isLocalURL(f))) ||
                  (c.preventDefault(),
                  null == k && h.indexOf('#') >= 0 && (k = !1),
                  d[i ? 'replace' : 'push'](f, h, {
                    shallow: j,
                    locale: l,
                    scroll: k,
                  })))
          },
        }
        if (
          ((y.onMouseEnter = function (a) {
            b.props &&
              'function' == typeof b.props.onMouseEnter &&
              b.props.onMouseEnter(a),
              g.isLocalURL(m) && k(e, m, n, { priority: !0 })
          }),
          a.passHref || ('a' === b.type && !('href' in b.props)))
        ) {
          var z = void 0 !== s ? s : e && e.locale,
            A =
              e &&
              e.isLocaleDomain &&
              g.getDomainLocale(n, z, e && e.locales, e && e.domainLocales)
          y.href = A || g.addBasePath(g.addLocale(n, z, e && e.defaultLocale))
        }
        return f.default.cloneElement(b, y)
      }
    },
    7190: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 }),
        (b.useIntersection = function (a) {
          var b,
            c = a.rootMargin,
            h = a.disabled || !f,
            i = d.useRef(),
            j =
              (function (a) {
                if (Array.isArray(a)) return a
              })((b = d.useState(!1))) ||
              (function (a, b) {
                var c = [],
                  d = !0,
                  e = !1,
                  f = void 0
                try {
                  for (
                    var g, h = a[Symbol.iterator]();
                    !(d = (g = h.next()).done) &&
                    (c.push(g.value), !b || c.length !== b);
                    d = !0
                  );
                } catch (i) {
                  ;(e = !0), (f = i)
                } finally {
                  try {
                    d || null == h.return || h.return()
                  } finally {
                    if (e) throw f
                  }
                }
                return c
              })(b, 2) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance'
                )
              })(),
            k = j[0],
            l = j[1],
            m = d.useCallback(
              function (a) {
                i.current && (i.current(), (i.current = void 0)),
                  !h &&
                    !k &&
                    a &&
                    a.tagName &&
                    (i.current = g(
                      a,
                      function (a) {
                        return a && l(a)
                      },
                      { rootMargin: c }
                    ))
              },
              [h, c, k]
            )
          return (
            d.useEffect(
              function () {
                if (!f && !k) {
                  var a = e.requestIdleCallback(function () {
                    return l(!0)
                  })
                  return function () {
                    return e.cancelIdleCallback(a)
                  }
                }
              },
              [k]
            ),
            [m, k]
          )
        })
      var d = c(7294),
        e = c(9311),
        f = 'undefined' != typeof IntersectionObserver
      function g(a, b, c) {
        var d = i(c),
          e = d.id,
          f = d.observer,
          g = d.elements
        return (
          g.set(a, b),
          f.observe(a),
          function () {
            g.delete(a),
              f.unobserve(a),
              0 === g.size && (f.disconnect(), h.delete(e))
          }
        )
      }
      var h = new Map()
      function i(a) {
        var b = a.rootMargin || '',
          c = h.get(b)
        if (c) return c
        var d = new Map(),
          e = new IntersectionObserver(function (a) {
            a.forEach(function (a) {
              var b = d.get(a.target),
                c = a.isIntersecting || a.intersectionRatio > 0
              b && c && b(c)
            })
          }, a)
        return h.set(b, (c = { id: b, observer: e, elements: d })), c
      }
    },
    3026: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          default: function () {
            return X
          },
        })
      var d = c(5893),
        e = c(7294)
      c(5112), c(3263), c(906), c(5815), c(7545)
      var f = c(9008),
        g = c(1664),
        h = c(9693),
        i = c.n(h),
        j = c(5699),
        k = c(6893)
      function l() {
        return (0, d.jsxs)('footer', {
          className: i().footer,
          children: [
            (0, d.jsxs)('div', {
              className: i().wrap,
              children: [
                (0, d.jsxs)('div', {
                  className: i().resources,
                  children: [
                    (0, d.jsxs)('p', {
                      children: [
                        (0, d.jsx)('span', {
                          role: 'img',
                          'aria-label': 'build with love',
                          className: i().emoji,
                          children: '💚',
                        }),
                        'This site is built with',
                      ],
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: 'https://nextjs.org/',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'Next.js',
                      }),
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: 'https://github.com/css-modules/css-modules',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'CSS Modules',
                      }),
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: 'https://react-icons.github.io/react-icons/',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'React Icons',
                      }),
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: 'https://mdxjs.com/',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'MDX',
                      }),
                    }),
                  ],
                }),
                (0, d.jsxs)('div', {
                  className: i().contact,
                  children: [
                    (0, d.jsxs)('p', {
                      children: [
                        (0, d.jsx)('span', {
                          role: 'img',
                          'aria-label': 'build with love',
                          className: i().emoji,
                          children: '🦄',
                        }),
                        'Where to find me',
                      ],
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: j.Z.linkedin,
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'Linkedin',
                      }),
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: j.Z.github,
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'GitHub',
                      }),
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: j.Z.medium,
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'Medium',
                      }),
                    }),
                    (0, d.jsx)('p', {
                      children: (0, d.jsx)('a', {
                        href: j.Z.twitter,
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'Twitter',
                      }),
                    }),
                  ],
                }),
                (0, d.jsxs)('div', {
                  className: i().sitemap,
                  children: [
                    (0, d.jsxs)('p', {
                      children: [
                        (0, d.jsx)('span', {
                          role: 'img',
                          'aria-label': 'build with love',
                          className: i().emoji,
                          children: '🗺',
                        }),
                        'Sitemap',
                      ],
                    }),
                    (0, d.jsx)(g.default, { href: '/', children: 'Home' }),
                    (0, d.jsx)(g.default, { href: '/now', children: 'Now' }),
                    (0, d.jsx)(g.default, {
                      href: '/articles',
                      children: 'Articles',
                    }),
                    (0, d.jsx)(g.default, {
                      href: '/rss.xml',
                      children: (0, d.jsxs)('a', {
                        href: '/#',
                        children: [
                          'RSS Feed to The Articles ',
                          (0, d.jsx)(k.xaD, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, d.jsxs)('div', {
              className: i().copyright,
              children: [
                '\xa9 ',
                new Date().getFullYear(),
                ' ',
                (0, d.jsx)('a', {
                  href: j.Z.github,
                  target: '_blank',
                  rel: 'noreferrer',
                  children: 'Daw-Chih Liou',
                }),
              ],
            }),
          ],
        })
      }
      var m = c(3190),
        n = c(3577),
        o = c.n(n),
        p = c(5155)
      function q(a, b) {
        if (null == a) return {}
        var c,
          d,
          e = {},
          f = Object.keys(a)
        for (d = 0; d < f.length; d++)
          (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c])
        return e
      }
      function r() {
        return (r =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          }).apply(this, arguments)
      }
      function s(a, b) {
        return (s =
          Object.setPrototypeOf ||
          function (a, b) {
            return (a.__proto__ = b), a
          })(a, b)
      }
      function t(a, b) {
        ;(a.prototype = Object.create(b.prototype)),
          (a.prototype.constructor = a),
          s(a, b)
      }
      c(5697)
      var u = e.createContext(null)
      function v(a, b) {
        var c = Object.create(null)
        return (
          a &&
            e.Children.map(a, function (a) {
              return a
            }).forEach(function (a) {
              var d
              c[a.key] = ((d = a), b && (0, e.isValidElement)(d) ? b(d) : d)
            }),
          c
        )
      }
      function w(a, b, c) {
        return null != c[b] ? c[b] : a.props[b]
      }
      var x =
          Object.values ||
          function (a) {
            return Object.keys(a).map(function (b) {
              return a[b]
            })
          },
        y = (function (a) {
          function b(b, c) {
            var d,
              e = (d = a.call(this, b, c) || this).handleExited.bind(
                (function (a) {
                  if (void 0 === a)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    )
                  return a
                })(d)
              )
            return (
              (d.state = {
                contextValue: { isMounting: !0 },
                handleExited: e,
                firstRender: !0,
              }),
              d
            )
          }
          t(b, a)
          var c = b.prototype
          return (
            (c.componentDidMount = function () {
              ;(this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } })
            }),
            (c.componentWillUnmount = function () {
              this.mounted = !1
            }),
            (b.getDerivedStateFromProps = function (a, b) {
              var c,
                d,
                f,
                g,
                h,
                i,
                j,
                k = b.children,
                l = b.handleExited,
                m = b.firstRender
              return {
                children: m
                  ? ((c = a),
                    (d = l),
                    v(c.children, function (a) {
                      return (0,
                      e.cloneElement)(a, { onExited: d.bind(null, a), in: !0, appear: w(a, 'appear', c), enter: w(a, 'enter', c), exit: w(a, 'exit', c) })
                    }))
                  : ((f = a),
                    (g = k),
                    (h = l),
                    (j = (function (a, b) {
                      function c(c) {
                        return c in b ? b[c] : a[c]
                      }
                      ;(a = a || {}), (b = b || {})
                      var d,
                        e = Object.create(null),
                        f = []
                      for (var g in a)
                        g in b ? f.length && ((e[g] = f), (f = [])) : f.push(g)
                      var h = {}
                      for (var i in b) {
                        if (e[i])
                          for (d = 0; d < e[i].length; d++) {
                            var j = e[i][d]
                            h[e[i][d]] = c(j)
                          }
                        h[i] = c(i)
                      }
                      for (d = 0; d < f.length; d++) h[f[d]] = c(f[d])
                      return h
                    })(g, (i = v(f.children)))),
                    Object.keys(j).forEach(function (a) {
                      var b = j[a]
                      if ((0, e.isValidElement)(b)) {
                        var c = a in g,
                          d = a in i,
                          k = g[a],
                          l = (0, e.isValidElement)(k) && !k.props.in
                        d && (!c || l)
                          ? (j[a] = (0, e.cloneElement)(b, {
                              onExited: h.bind(null, b),
                              in: !0,
                              exit: w(b, 'exit', f),
                              enter: w(b, 'enter', f),
                            }))
                          : d || !c || l
                          ? d &&
                            c &&
                            (0, e.isValidElement)(k) &&
                            (j[a] = (0, e.cloneElement)(b, {
                              onExited: h.bind(null, b),
                              in: k.props.in,
                              exit: w(b, 'exit', f),
                              enter: w(b, 'enter', f),
                            }))
                          : (j[a] = (0, e.cloneElement)(b, { in: !1 }))
                      }
                    }),
                    j),
                firstRender: !1,
              }
            }),
            (c.handleExited = function (a, b) {
              var c = v(this.props.children)
              a.key in c ||
                (a.props.onExited && a.props.onExited(b),
                this.mounted &&
                  this.setState(function (b) {
                    var c = r({}, b.children)
                    return delete c[a.key], { children: c }
                  }))
            }),
            (c.render = function () {
              var a = this.props,
                b = a.component,
                c = a.childFactory,
                d = q(a, ['component', 'childFactory']),
                f = this.state.contextValue,
                g = x(this.state.children).map(c)
              return (delete d.appear,
              delete d.enter,
              delete d.exit,
              null === b)
                ? e.createElement(u.Provider, { value: f }, g)
                : e.createElement(
                    u.Provider,
                    { value: f },
                    e.createElement(b, d, g)
                  )
            }),
            b
          )
        })(e.Component)
      ;(y.propTypes = {}),
        (y.defaultProps = {
          component: 'div',
          childFactory: function (a) {
            return a
          },
        })
      var z = y
      function A(a, b) {
        return a
          .replace(new RegExp('(^|\\s)' + b + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '')
      }
      var B = c(3935),
        C = { disabled: !1 },
        D = 'unmounted',
        E = 'exited',
        F = 'entering',
        G = 'entered',
        H = 'exiting',
        I = (function (a) {
          function b(b, c) {
            d = a.call(this, b, c) || this
            var d,
              e,
              f = c,
              g = f && !f.isMounting ? b.enter : b.appear
            return (
              (d.appearStatus = null),
              b.in
                ? g
                  ? ((e = E), (d.appearStatus = F))
                  : (e = G)
                : (e = b.unmountOnExit || b.mountOnEnter ? D : E),
              (d.state = { status: e }),
              (d.nextCallback = null),
              d
            )
          }
          t(b, a),
            (b.getDerivedStateFromProps = function (a, b) {
              return a.in && b.status === D ? { status: E } : null
            })
          var c = b.prototype
          return (
            (c.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus)
            }),
            (c.componentDidUpdate = function (a) {
              var b = null
              if (a !== this.props) {
                var c = this.state.status
                this.props.in
                  ? c !== F && c !== G && (b = F)
                  : (c === F || c === G) && (b = H)
              }
              this.updateStatus(!1, b)
            }),
            (c.componentWillUnmount = function () {
              this.cancelNextCallback()
            }),
            (c.getTimeouts = function () {
              var a,
                b,
                c,
                d = this.props.timeout
              return (
                (a = b = c = d),
                null != d &&
                  'number' != typeof d &&
                  ((a = d.exit),
                  (b = d.enter),
                  (c = void 0 !== d.appear ? d.appear : b)),
                { exit: a, enter: b, appear: c }
              )
            }),
            (c.updateStatus = function (a, b) {
              void 0 === a && (a = !1),
                null !== b
                  ? (this.cancelNextCallback(),
                    b === F ? this.performEnter(a) : this.performExit())
                  : this.props.unmountOnExit &&
                    this.state.status === E &&
                    this.setState({ status: D })
            }),
            (c.performEnter = function (a) {
              var b = this,
                c = this.props.enter,
                d = this.context ? this.context.isMounting : a,
                e = this.props.nodeRef ? [d] : [B.findDOMNode(this), d],
                f = e[0],
                g = e[1],
                h = this.getTimeouts(),
                i = d ? h.appear : h.enter
              if ((!a && !c) || C.disabled) {
                this.safeSetState({ status: G }, function () {
                  b.props.onEntered(f)
                })
                return
              }
              this.props.onEnter(f, g),
                this.safeSetState({ status: F }, function () {
                  b.props.onEntering(f, g),
                    b.onTransitionEnd(i, function () {
                      b.safeSetState({ status: G }, function () {
                        b.props.onEntered(f, g)
                      })
                    })
                })
            }),
            (c.performExit = function () {
              var a = this,
                b = this.props.exit,
                c = this.getTimeouts(),
                d = this.props.nodeRef ? void 0 : B.findDOMNode(this)
              if (!b || C.disabled) {
                this.safeSetState({ status: E }, function () {
                  a.props.onExited(d)
                })
                return
              }
              this.props.onExit(d),
                this.safeSetState({ status: H }, function () {
                  a.props.onExiting(d),
                    a.onTransitionEnd(c.exit, function () {
                      a.safeSetState({ status: E }, function () {
                        a.props.onExited(d)
                      })
                    })
                })
            }),
            (c.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null))
            }),
            (c.safeSetState = function (a, b) {
              ;(b = this.setNextCallback(b)), this.setState(a, b)
            }),
            (c.setNextCallback = function (a) {
              var b = this,
                c = !0
              return (
                (this.nextCallback = function (d) {
                  c && ((c = !1), (b.nextCallback = null), a(d))
                }),
                (this.nextCallback.cancel = function () {
                  c = !1
                }),
                this.nextCallback
              )
            }),
            (c.onTransitionEnd = function (a, b) {
              this.setNextCallback(b)
              var c = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : B.findDOMNode(this),
                d = null == a && !this.props.addEndListener
              if (!c || d) {
                setTimeout(this.nextCallback, 0)
                return
              }
              if (this.props.addEndListener) {
                var e = this.props.nodeRef
                    ? [this.nextCallback]
                    : [c, this.nextCallback],
                  f = e[0],
                  g = e[1]
                this.props.addEndListener(f, g)
              }
              null != a && setTimeout(this.nextCallback, a)
            }),
            (c.render = function () {
              var a = this.state.status
              if (a === D) return null
              var b = this.props,
                c = b.children,
                d = b.in,
                f = b.mountOnEnter,
                g = b.unmountOnExit,
                h = b.appear,
                i = b.enter,
                j = b.exit,
                k = b.timeout,
                l = b.addEndListener,
                m = b.onEnter,
                n = b.onEntering,
                o = b.onEntered,
                p = b.onExit,
                r = b.onExiting,
                s = b.onExited,
                t = b.nodeRef,
                v = q(b, [
                  'children',
                  'in',
                  'mountOnEnter',
                  'unmountOnExit',
                  'appear',
                  'enter',
                  'exit',
                  'timeout',
                  'addEndListener',
                  'onEnter',
                  'onEntering',
                  'onEntered',
                  'onExit',
                  'onExiting',
                  'onExited',
                  'nodeRef',
                ])
              return e.createElement(
                u.Provider,
                { value: null },
                'function' == typeof c
                  ? c(a, v)
                  : e.cloneElement(e.Children.only(c), v)
              )
            }),
            b
          )
        })(e.Component)
      function J() {}
      ;(I.contextType = u),
        (I.propTypes = {}),
        (I.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: J,
          onEntering: J,
          onEntered: J,
          onExit: J,
          onExiting: J,
          onExited: J,
        }),
        (I.UNMOUNTED = D),
        (I.EXITED = E),
        (I.ENTERING = F),
        (I.ENTERED = G),
        (I.EXITING = H)
      var K = I,
        L = function (a, b) {
          return (
            a &&
            b &&
            b.split(' ').forEach(function (b) {
              var c, d
              return (
                (c = a),
                (d = b),
                void (c.classList
                  ? c.classList.remove(d)
                  : 'string' == typeof c.className
                  ? (c.className = A(c.className, d))
                  : c.setAttribute(
                      'class',
                      A((c.className && c.className.baseVal) || '', d)
                    ))
              )
            })
          )
        },
        M = (function (a) {
          function b() {
            for (
              var b, c = arguments.length, d = new Array(c), e = 0;
              e < c;
              e++
            )
              d[e] = arguments[e]
            return (
              ((b =
                a.call.apply(a, [this].concat(d)) || this).appliedClasses = {
                appear: {},
                enter: {},
                exit: {},
              }),
              (b.onEnter = function (a, c) {
                var d = b.resolveArguments(a, c),
                  e = d[0],
                  f = d[1]
                b.removeClasses(e, 'exit'),
                  b.addClass(e, f ? 'appear' : 'enter', 'base'),
                  b.props.onEnter && b.props.onEnter(a, c)
              }),
              (b.onEntering = function (a, c) {
                var d = b.resolveArguments(a, c),
                  e = d[0],
                  f = d[1]
                b.addClass(e, f ? 'appear' : 'enter', 'active'),
                  b.props.onEntering && b.props.onEntering(a, c)
              }),
              (b.onEntered = function (a, c) {
                var d = b.resolveArguments(a, c),
                  e = d[0],
                  f = d[1] ? 'appear' : 'enter'
                b.removeClasses(e, f),
                  b.addClass(e, f, 'done'),
                  b.props.onEntered && b.props.onEntered(a, c)
              }),
              (b.onExit = function (a) {
                var c = b.resolveArguments(a)[0]
                b.removeClasses(c, 'appear'),
                  b.removeClasses(c, 'enter'),
                  b.addClass(c, 'exit', 'base'),
                  b.props.onExit && b.props.onExit(a)
              }),
              (b.onExiting = function (a) {
                var c = b.resolveArguments(a)[0]
                b.addClass(c, 'exit', 'active'),
                  b.props.onExiting && b.props.onExiting(a)
              }),
              (b.onExited = function (a) {
                var c = b.resolveArguments(a)[0]
                b.removeClasses(c, 'exit'),
                  b.addClass(c, 'exit', 'done'),
                  b.props.onExited && b.props.onExited(a)
              }),
              (b.resolveArguments = function (a, c) {
                return b.props.nodeRef ? [b.props.nodeRef.current, a] : [a, c]
              }),
              (b.getClassNames = function (a) {
                var c = b.props.classNames,
                  d = 'string' == typeof c,
                  e = d ? (d && c ? c + '-' : '') + a : c[a],
                  f = d ? e + '-active' : c[a + 'Active'],
                  g = d ? e + '-done' : c[a + 'Done']
                return {
                  baseClassName: e,
                  activeClassName: f,
                  doneClassName: g,
                }
              }),
              b
            )
          }
          t(b, a)
          var c = b.prototype
          return (
            (c.addClass = function (a, b, c) {
              var d,
                e,
                f = this.getClassNames(b)[c + 'ClassName'],
                g = this.getClassNames('enter').doneClassName
              'appear' === b && 'done' === c && g && (f += ' ' + g),
                'active' === c && a && a.scrollTop,
                f &&
                  ((this.appliedClasses[b][c] = f),
                  (d = a),
                  (e = f),
                  d &&
                    e &&
                    e.split(' ').forEach(function (a) {
                      var b, c, e, f
                      return (
                        (b = d),
                        (c = a),
                        void (b.classList
                          ? b.classList.add(c)
                          : ((e = b),
                            (f = c),
                            (e.classList
                              ? !!f && e.classList.contains(f)
                              : -1 !==
                                (
                                  ' ' +
                                  (e.className.baseVal || e.className) +
                                  ' '
                                ).indexOf(' ' + f + ' ')) ||
                              ('string' == typeof b.className
                                ? (b.className = b.className + ' ' + c)
                                : b.setAttribute(
                                    'class',
                                    ((b.className && b.className.baseVal) ||
                                      '') +
                                      ' ' +
                                      c
                                  ))))
                      )
                    }))
            }),
            (c.removeClasses = function (a, b) {
              var c = this.appliedClasses[b],
                d = c.base,
                e = c.active,
                f = c.done
              ;(this.appliedClasses[b] = {}),
                d && L(a, d),
                e && L(a, e),
                f && L(a, f)
            }),
            (c.render = function () {
              var a = this.props,
                b = a.classNames,
                c = q(a, ['classNames'])
              return e.createElement(
                K,
                r({}, c, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              )
            }),
            b
          )
        })(e.Component)
      ;(M.defaultProps = { classNames: '' }), (M.propTypes = {})
      var N = M,
        O = c(8830),
        P = c.n(O),
        Q = (0, e.createContext)(null),
        R = function (a) {
          var b = a.children
          ;(0, e.useEffect)(function () {
            var a = window.matchMedia('(prefers-color-scheme: dark)'),
              b = function () {
                var b = document.querySelector('body'),
                  c = window.localStorage.getItem('__color-scheme__'),
                  d = a.matches
                null === c &&
                  (d ? b.classList.add('dark') : b.classList.remove('dark'))
              }
            return (
              void 0 === a.addEventListener
                ? a.addListener(b)
                : a.addEventListener('change', b),
              function () {
                void 0 === a.removeEventListener
                  ? a.removeListener(b)
                  : a.removeEventListener('change', b)
              }
            )
          }, [])
          var c = (0, e.useState)(null),
            f = c[0],
            g = c[1]
          return (
            (0, e.useEffect)(
              function () {
                if (null === f) {
                  var a = window.localStorage.getItem('__color-scheme__')
                  null === a ? g('auto') : g(a)
                } else
                  'auto' === f
                    ? window.localStorage.removeItem('__color-scheme__')
                    : window.localStorage.setItem('__color-scheme__', f)
                var b = document.querySelector('body')
                'auto' === f
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? b.classList.add('dark')
                    : b.classList.remove('dark')
                  : 'light' === f
                  ? b.classList.remove('dark')
                  : b.classList.add('dark')
              },
              [f]
            ),
            (0, d.jsx)(Q.Provider, {
              value: {
                scheme: f,
                setScheme: function (a) {
                  return function () {
                    g(a)
                  }
                },
              },
              children: b,
            })
          )
        },
        S = function (a) {
          var b = a.showLabel,
            c = (0, e.useContext)(Q),
            f = c.scheme,
            g = c.setScheme,
            h = function () {
              g('light' === f ? 'dark' : 'dark' === f ? 'auto' : 'light')()
            }
          return (0, d.jsxs)('div', {
            className: P().container,
            onClick: h,
            onKeyPress: function (a) {
              'Enter' === a.key && h()
            },
            tabIndex: 0,
            children: [
              (0, d.jsx)('div', {
                className: P().wrap,
                children: (0, d.jsxs)(z, {
                  component: null,
                  children: [
                    'auto' === f &&
                      (0, d.jsx)(N, {
                        timeout: 250,
                        classNames: {
                          enter: P()['button-enter'],
                          enterActive: P()['button-enter-active'],
                          exit: P()['button-exit'],
                          exitActive: P()['button-exit-active'],
                        },
                        children: (0, d.jsx)(k.gU9, { className: P().button }),
                      }),
                    'light' === f &&
                      (0, d.jsx)(N, {
                        timeout: 250,
                        classNames: {
                          enter: P()['button-enter'],
                          enterActive: P()['button-enter-active'],
                          exit: P()['button-exit'],
                          exitActive: P()['button-exit-active'],
                        },
                        children: (0, d.jsx)(k.kXG, { className: P().button }),
                      }),
                    'dark' === f &&
                      (0, d.jsx)(N, {
                        timeout: 250,
                        classNames: {
                          enter: P()['button-enter'],
                          enterActive: P()['button-enter-active'],
                          exit: P()['button-exit'],
                          exitActive: P()['button-exit-active'],
                        },
                        children: (0, d.jsx)(k.wOW, { className: P().button }),
                      }),
                  ],
                }),
              }),
              b &&
                'light' === f &&
                (0, d.jsx)('span', { children: 'Light scheme' }),
              b &&
                'dark' === f &&
                (0, d.jsx)('span', { children: 'Dark scheme' }),
              b &&
                'auto' === f &&
                (0, d.jsx)('span', { children: 'Sync with OS scheme' }),
            ],
          })
        }
      function T() {
        var a = (0, e.useState)(!1),
          b = a[0],
          c = a[1],
          f = function () {
            return c(!1)
          }
        return (0, d.jsx)('header', {
          className: o().header,
          children: (0, d.jsxs)(m.push, {
            pageWrapId: 'page-wrap',
            outerContainerId: 'outer-container',
            customBurgerIcon: (0, d.jsx)(k.cur, {}),
            customCrossIcon: (0, d.jsx)(k.q5L, {}),
            disableAutoFocus: !0,
            isOpen: b,
            onStateChange: function (a) {
              return c(a.isOpen)
            },
            children: [
              (0, d.jsx)(g.default, {
                href: '/',
                children: (0, d.jsx)('button', {
                  className: o().link,
                  onClick: f,
                  tabIndex: b ? 0 : -1,
                  children: 'Home',
                }),
              }),
              (0, d.jsx)(g.default, {
                href: '/now',
                children: (0, d.jsx)('button', {
                  className: o().link,
                  onClick: f,
                  tabIndex: b ? 0 : -1,
                  children: 'Now',
                }),
              }),
              (0, d.jsx)(g.default, {
                href: '/articles',
                children: (0, d.jsx)('button', {
                  className: o().link,
                  onClick: f,
                  tabIndex: b ? 0 : -1,
                  children: 'Articles',
                }),
              }),
              (0, d.jsx)('span', { className: o().pusher }),
              (0, d.jsx)('span', { className: o().divider }),
              (0, d.jsxs)('div', {
                className: o().profile,
                children: [
                  (0, d.jsx)('a', {
                    href: j.Z.linkedin,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Linkedin profile",
                    className: o().iconLink,
                    children: (0, d.jsx)(p.juy, {}),
                  }),
                  (0, d.jsx)('a', {
                    href: j.Z.github,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's GitHub profile",
                    className: o().iconLink,
                    children: (0, d.jsx)(p.lfl, {}),
                  }),
                  (0, d.jsx)('a', {
                    href: j.Z.medium,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Medium profile",
                    className: o().iconLink,
                    children: (0, d.jsx)(p.lUN, {}),
                  }),
                  (0, d.jsx)('a', {
                    href: j.Z.twitter,
                    target: '_blank',
                    rel: 'noreferrer',
                    'aria-label': "Link to Daw-Chih's Twitter",
                    className: o().iconLink,
                    children: (0, d.jsx)(p.Xai, {}),
                  }),
                ],
              }),
              (0, d.jsx)(S, { showLabel: !0 }),
            ],
          }),
        })
      }
      var U = c(2795),
        V = c.n(U)
      function W(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        )
      }
      var X = function (a) {
        var b = a.Component,
          c = a.pageProps
        return (0, d.jsxs)(R, {
          children: [
            (0, d.jsxs)(f.default, {
              children: [
                (0, d.jsx)('link', {
                  rel: 'apple-touch-icon',
                  sizes: '180x180',
                  href: '/apple-touch-icon.png',
                }),
                (0, d.jsx)('link', {
                  rel: 'icon',
                  type: 'image/svg',
                  sizes: '32x32',
                  href: '/favicon.svg',
                }),
                (0, d.jsx)('link', {
                  rel: 'icon',
                  type: 'image/svg',
                  sizes: '16x16',
                  href: '/favicon.svg',
                }),
                (0, d.jsx)('link', {
                  rel: 'mask-icon',
                  href: '/favicon.svg',
                  color: '#ffffff',
                }),
                (0, d.jsx)('link', {
                  rel: 'manifest',
                  href: '/site.webmanifest',
                }),
                (0, d.jsx)('title', { children: 'Daw-Chih liou' }),
                (0, d.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                }),
                (0, d.jsx)('meta', { charSet: 'utf-8' }),
                (0, d.jsx)('meta', {
                  name: 'msapplication-TileColor',
                  content: '#007cf0',
                }),
                (0, d.jsx)('meta', { name: 'theme-color', content: '#ffff' }),
                (0, d.jsx)('meta', {
                  name: 'description',
                  content: "Daw-Chih Liou's portfolio. ".concat(
                    j.Z.description
                  ),
                }),
              ],
            }),
            (0, d.jsxs)('div', {
              id: 'outer-container',
              children: [
                (0, d.jsx)(T, {}),
                (0, d.jsx)(function () {
                  return (0,
                  d.jsxs)('div', { className: V().menubar, children: [(0, d.jsx)(S, {}), (0, d.jsx)('a', { href: j.Z.github, target: '_blank', rel: 'noreferrer', children: (0, d.jsx)(p.lfl, { size: '1.5em' }) })] })
                }, {}),
                (0, d.jsxs)('div', {
                  id: 'page-wrap',
                  children: [
                    (0, d.jsx)(
                      b,
                      (function (a) {
                        for (var b = 1; b < arguments.length; b++) {
                          var c = null != arguments[b] ? arguments[b] : {},
                            d = Object.keys(c)
                          'function' == typeof Object.getOwnPropertySymbols &&
                            (d = d.concat(
                              Object.getOwnPropertySymbols(c).filter(function (
                                a
                              ) {
                                return Object.getOwnPropertyDescriptor(c, a)
                                  .enumerable
                              })
                            )),
                            d.forEach(function (b) {
                              W(a, b, c[b])
                            })
                        }
                        return a
                      })({}, c)
                    ),
                    (0, d.jsx)(l, {}),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    5699: function (a, b) {
      'use strict'
      b.Z = {
        linkedin: 'https://www.linkedin.com/in/dawchihliou/',
        medium: 'https://medium.com/@dawchihliou',
        twitter: 'https://twitter.com/dawchihliou',
        github: 'https://github.com/DawChihLiou',
        home: 'https://dawchihliou.github.io/',
        heroImage: 'https://dawchihliou.github.io/optimized/social-media.png',
        description:
          'Daw-Chih is a software engineer, UX advocate, and mentor who is dedicated to Web engineering. His background in Human Centered Computing has led him to work with startups and public companies across North America, Asia, and Europe. He is passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.',
      }
    },
    8830: function (a) {
      a.exports = {
        container: 'DarkmodeSwitch_container__uFGHQ',
        wrap: 'DarkmodeSwitch_wrap__e71_4',
        button: 'DarkmodeSwitch_button__oWDQb',
        'button-enter': 'DarkmodeSwitch_button-enter__JCJl0',
        'button-enter-active': 'DarkmodeSwitch_button-enter-active__qEvTW',
        'button-exit': 'DarkmodeSwitch_button-exit__O9uZb',
        'button-exit-active': 'DarkmodeSwitch_button-exit-active__3ir0u',
      }
    },
    9693: function (a) {
      a.exports = {
        footer: 'Footer_footer__1IwEk',
        wrap: 'Footer_wrap__FVCTX',
        contact: 'Footer_contact__9GJn6',
        resources: 'Footer_resources__fG_vu',
        sitemap: 'Footer_sitemap__92ono',
        emoji: 'Footer_emoji__u15jg',
        copyright: 'Footer_copyright__vZZRL',
      }
    },
    2795: function (a) {
      a.exports = { menubar: 'Menubar_menubar__gvU4b' }
    },
    3577: function (a) {
      a.exports = {
        link: 'Nav_link__ZgDoZ',
        iconLink: 'Nav_iconLink__z5y5Q',
        pusher: 'Nav_pusher__93Gc6',
        profile: 'Nav_profile__Kf2nU',
        divider: 'Nav_divider__QD8Pt',
      }
    },
    5112: function () {},
    906: function () {},
    3263: function () {},
    7545: function () {},
    5815: function () {},
    9008: function (a, b, c) {
      a.exports = c(5443)
    },
    1664: function (a, b, c) {
      a.exports = c(8418)
    },
    2703: function (a, b, c) {
      'use strict'
      var d = c(414)
      function e() {}
      function f() {}
      ;(f.resetWarningCache = e),
        (a.exports = function () {
          function a(a, b, c, e, f, g) {
            if (g !== d) {
              var h = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((h.name = 'Invariant Violation'), h)
            }
          }
          function b() {
            return a
          }
          a.isRequired = a
          var c = {
            array: a,
            bool: a,
            func: a,
            number: a,
            object: a,
            string: a,
            symbol: a,
            any: a,
            arrayOf: b,
            element: a,
            elementType: a,
            instanceOf: b,
            node: a,
            objectOf: b,
            oneOf: b,
            oneOfType: b,
            shape: b,
            exact: b,
            checkPropTypes: f,
            resetWarningCache: e,
          }
          return (c.PropTypes = c), c
        })
    },
    5697: function (a, b, c) {
      a.exports = c(2703)()
    },
    414: function (a) {
      'use strict'
      a.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    9050: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          },
        e = (function () {
          function a(a, b) {
            for (var c = 0; c < b.length; c++) {
              var d = b[c]
              ;(d.enumerable = d.enumerable || !1),
                (d.configurable = !0),
                'value' in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
          }
          return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
          }
        })(),
        f = function (a, b, c) {
          var d = !0
          _function: for (; d; ) {
            var e = a,
              f = b,
              g = c
            ;(d = !1), null === e && (e = Function.prototype)
            var h = Object.getOwnPropertyDescriptor(e, f)
            if (void 0 === h) {
              var i = Object.getPrototypeOf(e)
              if (null === i) return
              ;(a = i), (b = f), (c = g), (d = !0), (h = i = void 0)
              continue _function
            }
            if ('value' in h) return h.value
            var j = h.get
            if (void 0 === j) return
            return j.call(g)
          }
        }
      function g(a) {
        return a && a.__esModule ? a : { default: a }
      }
      var h = c(7294),
        i = g(h),
        j = g(c(5697)),
        k = (function (a) {
          function b(a) {
            !(function (a, b) {
              if (!(a instanceof b))
                throw new TypeError('Cannot call a class as a function')
            })(this, b),
              f(Object.getPrototypeOf(b.prototype), 'constructor', this).call(
                this,
                a
              ),
              (this.state = { hover: !1 })
          }
          return (
            !(function (a, b) {
              if ('function' != typeof b && null !== b)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof b
                )
              ;(a.prototype = Object.create(b && b.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                b &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(a, b)
                    : (a.__proto__ = b))
            })(b, a),
            e(b, [
              {
                key: 'getLineStyle',
                value: function (a) {
                  return d(
                    {
                      position: 'absolute',
                      height: '20%',
                      left: 0,
                      right: 0,
                      top: 20 * (2 * a) + '%',
                      opacity: this.state.hover ? 0.6 : 1,
                    },
                    this.state.hover && this.props.styles.bmBurgerBarsHover
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var a = this,
                    b = void 0
                  if (this.props.customIcon) {
                    var c = {
                      className: (
                        'bm-icon ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: d(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmIcon
                      ),
                    }
                    b = i.default.cloneElement(this.props.customIcon, c)
                  } else
                    b = i.default.createElement(
                      'span',
                      null,
                      [0, 1, 2].map(function (b) {
                        return i.default.createElement('span', {
                          key: b,
                          className: (
                            'bm-burger-bars ' +
                            a.props.barClassName +
                            ' ' +
                            (a.state.hover ? 'bm-burger-bars-hover' : '')
                          ).trim(),
                          style: d(
                            {},
                            a.getLineStyle(b),
                            a.props.styles.bmBurgerBars
                          ),
                        })
                      })
                    )
                  return i.default.createElement(
                    'div',
                    {
                      className: (
                        'bm-burger-button ' + this.props.className
                      ).trim(),
                      style: d(
                        { zIndex: 1000 },
                        this.props.styles.bmBurgerButton
                      ),
                    },
                    b,
                    i.default.createElement(
                      'button',
                      {
                        onClick: this.props.onClick,
                        onMouseOver: function () {
                          a.setState({ hover: !0 }),
                            a.props.onIconHoverChange &&
                              a.props.onIconHoverChange({ isMouseIn: !0 })
                        },
                        onMouseOut: function () {
                          a.setState({ hover: !1 }),
                            a.props.onIconHoverChange &&
                              a.props.onIconHoverChange({ isMouseIn: !1 })
                        },
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer',
                        },
                      },
                      'Open Menu'
                    )
                  )
                },
              },
            ]),
            b
          )
        })(h.Component)
      ;(b.default = k),
        (k.propTypes = {
          barClassName: j.default.string,
          customIcon: j.default.element,
          styles: j.default.object,
        }),
        (k.defaultProps = { barClassName: '', className: '', styles: {} }),
        (a.exports = b.default)
    },
    3190: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 }),
        (b.default = {
          slide: c(6432),
          stack: c(7277),
          elastic: c(2996),
          bubble: c(3414),
          push: c(3976),
          pushRotate: c(8796),
          scaleDown: c(9070),
          scaleRotate: c(6001),
          fallDown: c(5576),
          reveal: c(6523),
        }),
        (a.exports = b.default)
    },
    7544: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          },
        e = (function () {
          function a(a, b) {
            for (var c = 0; c < b.length; c++) {
              var d = b[c]
              ;(d.enumerable = d.enumerable || !1),
                (d.configurable = !0),
                'value' in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
          }
          return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
          }
        })(),
        f = function (a, b, c) {
          var d = !0
          _function: for (; d; ) {
            var e = a,
              f = b,
              g = c
            ;(d = !1), null === e && (e = Function.prototype)
            var h = Object.getOwnPropertyDescriptor(e, f)
            if (void 0 === h) {
              var i = Object.getPrototypeOf(e)
              if (null === i) return
              ;(a = i), (b = f), (c = g), (d = !0), (h = i = void 0)
              continue _function
            }
            if ('value' in h) return h.value
            var j = h.get
            if (void 0 === j) return
            return j.call(g)
          }
        }
      function g(a) {
        return a && a.__esModule ? a : { default: a }
      }
      var h = c(7294),
        i = g(h),
        j = g(c(5697)),
        k = (function (a) {
          function b() {
            !(function (a, b) {
              if (!(a instanceof b))
                throw new TypeError('Cannot call a class as a function')
            })(this, b),
              f(Object.getPrototypeOf(b.prototype), 'constructor', this).apply(
                this,
                arguments
              )
          }
          return (
            !(function (a, b) {
              if ('function' != typeof b && null !== b)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof b
                )
              ;(a.prototype = Object.create(b && b.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                b &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(a, b)
                    : (a.__proto__ = b))
            })(b, a),
            e(b, [
              {
                key: 'getCrossStyle',
                value: function (a) {
                  return {
                    position: 'absolute',
                    width: 3,
                    height: 14,
                    transform:
                      'before' === a ? 'rotate(45deg)' : 'rotate(-45deg)',
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var a,
                    b = this
                  if (this.props.customIcon) {
                    var c = {
                      className: (
                        'bm-cross ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: d(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmCross
                      ),
                    }
                    a = i.default.cloneElement(this.props.customIcon, c)
                  } else
                    a = i.default.createElement(
                      'span',
                      {
                        style: {
                          position: 'absolute',
                          top: '6px',
                          right: '14px',
                        },
                      },
                      ['before', 'after'].map(function (a, c) {
                        return i.default.createElement('span', {
                          key: c,
                          className: (
                            'bm-cross ' + b.props.crossClassName
                          ).trim(),
                          style: d(
                            {},
                            b.getCrossStyle(a),
                            b.props.styles.bmCross
                          ),
                        })
                      })
                    )
                  return i.default.createElement(
                    'div',
                    {
                      className: (
                        'bm-cross-button ' + this.props.className
                      ).trim(),
                      style: d(
                        {},
                        {
                          position: 'absolute',
                          width: 24,
                          height: 24,
                          right: 8,
                          top: 8,
                        },
                        this.props.styles.bmCrossButton
                      ),
                    },
                    a,
                    i.default.createElement(
                      'button',
                      {
                        onClick: this.props.onClick,
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer',
                        },
                        tabIndex: this.props.tabIndex,
                      },
                      'Close Menu'
                    )
                  )
                },
              },
            ]),
            b
          )
        })(h.Component)
      ;(b.default = k),
        (k.propTypes = {
          crossClassName: j.default.string,
          customIcon: j.default.element,
          styles: j.default.object,
          tabIndex: j.default.number,
        }),
        (k.defaultProps = {
          crossClassName: '',
          className: '',
          styles: {},
          tabIndex: 0,
        }),
        (a.exports = b.default)
    },
    8057: function (a, b) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 }),
        (b.default = {
          overlay: function (a) {
            return {
              position: 'fixed',
              zIndex: 1000,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.3)',
              opacity: a ? 1 : 0,
              MozTransform: a ? '' : 'translate3d(100%, 0, 0)',
              MsTransform: a ? '' : 'translate3d(100%, 0, 0)',
              OTransform: a ? '' : 'translate3d(100%, 0, 0)',
              WebkitTransform: a ? '' : 'translate3d(100%, 0, 0)',
              transform: a ? '' : 'translate3d(100%, 0, 0)',
              transition: a
                ? 'opacity 0.3s'
                : 'opacity 0.3s, transform 0s 0.3s',
            }
          },
          menuWrap: function (a, b, c) {
            return {
              position: 'fixed',
              right: c ? 0 : 'inherit',
              zIndex: 1100,
              width: b,
              height: '100%',
              MozTransform: a
                ? ''
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: a
                ? ''
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: a
                ? ''
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: a
                ? ''
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: a
                ? ''
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.5s',
            }
          },
          menu: function () {
            return { height: '100%', boxSizing: 'border-box', overflow: 'auto' }
          },
          itemList: function () {
            return { height: '100%' }
          },
          item: function () {
            return { display: 'block' }
          },
        }),
        (a.exports = b.default)
    },
    4126: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b]
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
          },
        e = (function () {
          function a(a, b) {
            for (var c = 0; c < b.length; c++) {
              var d = b[c]
              ;(d.enumerable = d.enumerable || !1),
                (d.configurable = !0),
                'value' in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
          }
          return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
          }
        })(),
        f = function (a, b, c) {
          var d = !0
          _function: for (; d; ) {
            var e = a,
              f = b,
              g = c
            ;(d = !1), null === e && (e = Function.prototype)
            var h = Object.getOwnPropertyDescriptor(e, f)
            if (void 0 === h) {
              var i = Object.getPrototypeOf(e)
              if (null === i) return
              ;(a = i), (b = f), (c = g), (d = !0), (h = i = void 0)
              continue _function
            }
            if ('value' in h) return h.value
            var j = h.get
            if (void 0 === j) return
            return j.call(g)
          }
        }
      function g(a) {
        return a && a.__esModule ? a : { default: a }
      }
      var h = c(7294),
        i = g(h),
        j = g(c(3935)),
        k = g(c(5697)),
        l = g(c(8057)),
        m = g(c(9050)),
        n = g(c(7544))
      ;(b.default = function (a) {
        var b = (function (b) {
          function c(b) {
            if (
              ((function (a, b) {
                if (!(a instanceof b))
                  throw new TypeError('Cannot call a class as a function')
              })(this, c),
              f(Object.getPrototypeOf(c.prototype), 'constructor', this).call(
                this,
                b
              ),
              (this.state = { isOpen: !1 }),
              !a)
            )
              throw new Error('No styles supplied')
          }
          return (
            (function (a, b) {
              if ('function' != typeof b && null !== b)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof b
                )
              ;(a.prototype = Object.create(b && b.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                b &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(a, b)
                    : (a.__proto__ = b))
            })(c, b),
            e(c, [
              {
                key: 'toggleMenu',
                value: function () {
                  var a = this,
                    b =
                      arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    c = b.isOpen,
                    d = b.noStateChange,
                    e = { isOpen: void 0 !== c ? c : !this.state.isOpen }
                  this.applyWrapperStyles(),
                    this.setState(e, function () {
                      if (
                        (d || a.props.onStateChange(e),
                        !a.props.disableAutoFocus)
                      )
                        if (e.isOpen) {
                          var b = document.querySelector('.bm-item')
                          b && b.focus()
                        } else
                          document.activeElement
                            ? document.activeElement.blur()
                            : document.body.blur()
                      a.timeoutId && clearTimeout(a.timeoutId),
                        (a.timeoutId = setTimeout(function () {
                          ;(a.timeoutId = null),
                            e.isOpen || a.applyWrapperStyles(!1)
                        }, 500))
                    })
                },
              },
              {
                key: 'open',
                value: function () {
                  'function' == typeof this.props.onOpen
                    ? this.props.onOpen()
                    : this.toggleMenu()
                },
              },
              {
                key: 'close',
                value: function () {
                  'function' == typeof this.props.onClose
                    ? this.props.onClose()
                    : this.toggleMenu()
                },
              },
              {
                key: 'overlayClick',
                value: function () {
                  !0 === this.props.disableOverlayClick ||
                    ('function' == typeof this.props.disableOverlayClick &&
                      this.props.disableOverlayClick()) ||
                    this.close()
                },
              },
              {
                key: 'applyWrapperStyles',
                value: function () {
                  var b =
                      arguments.length <= 0 ||
                      void 0 === arguments[0] ||
                      arguments[0],
                    c = function (a, c) {
                      return a.classList[b ? 'add' : 'remove'](c)
                    }
                  this.props.htmlClassName &&
                    c(document.querySelector('html'), this.props.htmlClassName),
                    this.props.bodyClassName &&
                      c(
                        document.querySelector('body'),
                        this.props.bodyClassName
                      ),
                    a.pageWrap &&
                      this.props.pageWrapId &&
                      this.handleExternalWrapper(
                        this.props.pageWrapId,
                        a.pageWrap,
                        b
                      ),
                    a.outerContainer &&
                      this.props.outerContainerId &&
                      this.handleExternalWrapper(
                        this.props.outerContainerId,
                        a.outerContainer,
                        b
                      )
                },
              },
              {
                key: 'handleExternalWrapper',
                value: function (a, b, c) {
                  var d = document.getElementById(a)
                  if (!d) {
                    console.error("Element with ID '" + a + "' not found")
                    return
                  }
                  var e = this.getStyle(b)
                  for (var f in e)
                    e.hasOwnProperty(f) && (d.style[f] = c ? e[f] : '')
                  var g = function (a) {
                    return (a.style['overflow-x'] = c ? 'hidden' : '')
                  }
                  this.props.htmlClassName || g(document.querySelector('html')),
                    this.props.bodyClassName ||
                      g(document.querySelector('body'))
                },
              },
              {
                key: 'getStyles',
                value: function (b, c, e) {
                  var f =
                      'bm' + b.replace(b.charAt(0), b.charAt(0).toUpperCase()),
                    g = l.default[b] ? this.getStyle(l.default[b]) : {}
                  return (
                    a[b] && (g = d({}, g, this.getStyle(a[b], c + 1))),
                    this.props.styles[f] &&
                      (g = d({}, g, this.props.styles[f])),
                    e && (g = d({}, g, e)),
                    this.props.noTransition && delete g.transition,
                    g
                  )
                },
              },
              {
                key: 'getStyle',
                value: function (a, b) {
                  var c = this.props.width
                  return a(
                    this.state.isOpen,
                    'string' != typeof c ? c + 'px' : c,
                    this.props.right,
                    b
                  )
                },
              },
              {
                key: 'listenForClose',
                value: function (a) {
                  ;(a = a || window.event),
                    !this.props.disableCloseOnEsc &&
                      this.state.isOpen &&
                      ('Escape' === a.key || 27 === a.keyCode) &&
                      this.close()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.customOnKeyDown
                    ? (window.onkeydown = this.props.customOnKeyDown)
                    : (window.onkeydown = this.listenForClose.bind(this)),
                    this.props.isOpen &&
                      this.toggleMenu({ isOpen: !0, noStateChange: !0 })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(window.onkeydown = null),
                    this.applyWrapperStyles(!1),
                    this.timeoutId && clearTimeout(this.timeoutId)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (b) {
                  var c, d
                  if (
                    void 0 !== this.props.isOpen &&
                    this.props.isOpen !== this.state.isOpen &&
                    this.props.isOpen !== b.isOpen
                  ) {
                    this.toggleMenu()
                    return
                  }
                  a.svg &&
                    ((c = j.default.findDOMNode(this, 'bm-morph-shape')),
                    (d = a.svg.lib(c).select('path')),
                    this.state.isOpen
                      ? a.svg.animate(d)
                      : setTimeout(function () {
                          d.attr('d', a.svg.pathInitial)
                        }, 300))
                },
              },
              {
                key: 'render',
                value: function () {
                  var b = this
                  return i.default.createElement(
                    'div',
                    null,
                    !this.props.noOverlay &&
                      i.default.createElement('div', {
                        className: (
                          'bm-overlay ' + this.props.overlayClassName
                        ).trim(),
                        onClick: function () {
                          return b.overlayClick()
                        },
                        style: this.getStyles('overlay'),
                      }),
                    i.default.createElement(
                      'div',
                      {
                        id: this.props.id,
                        className: (
                          'bm-menu-wrap ' + this.props.className
                        ).trim(),
                        style: this.getStyles('menuWrap'),
                      },
                      a.svg &&
                        i.default.createElement(
                          'div',
                          {
                            className: (
                              'bm-morph-shape ' + this.props.morphShapeClassName
                            ).trim(),
                            style: this.getStyles('morphShape'),
                          },
                          i.default.createElement(
                            'svg',
                            {
                              width: '100%',
                              height: '100%',
                              viewBox: '0 0 100 800',
                              preserveAspectRatio: 'none',
                            },
                            i.default.createElement('path', {
                              d: a.svg.pathInitial,
                            })
                          )
                        ),
                      i.default.createElement(
                        'div',
                        {
                          className: (
                            'bm-menu ' + this.props.menuClassName
                          ).trim(),
                          style: this.getStyles('menu'),
                        },
                        i.default.createElement(
                          'nav',
                          {
                            className: (
                              'bm-item-list ' + this.props.itemListClassName
                            ).trim(),
                            style: this.getStyles('itemList'),
                          },
                          i.default.Children.map(this.props.children, function (
                            a,
                            c
                          ) {
                            if (a) {
                              var d = {
                                key: c,
                                className: [
                                  'bm-item',
                                  b.props.itemClassName,
                                  a.props.className,
                                ]
                                  .filter(function (a) {
                                    return !!a
                                  })
                                  .join(' '),
                                style: b.getStyles('item', c, a.props.style),
                                tabIndex: b.state.isOpen ? 0 : -1,
                              }
                              return i.default.cloneElement(a, d)
                            }
                          })
                        )
                      ),
                      !1 !== this.props.customCrossIcon &&
                        i.default.createElement(
                          'div',
                          { style: this.getStyles('closeButton') },
                          i.default.createElement(n.default, {
                            onClick: function () {
                              return b.close()
                            },
                            styles: this.props.styles,
                            customIcon: this.props.customCrossIcon,
                            className: this.props.crossButtonClassName,
                            crossClassName: this.props.crossClassName,
                            tabIndex: this.state.isOpen ? 0 : -1,
                          })
                        )
                    ),
                    !1 !== this.props.customBurgerIcon &&
                      i.default.createElement(
                        'div',
                        { style: this.getStyles('burgerIcon') },
                        i.default.createElement(m.default, {
                          onClick: function () {
                            return b.open()
                          },
                          styles: this.props.styles,
                          customIcon: this.props.customBurgerIcon,
                          className: this.props.burgerButtonClassName,
                          barClassName: this.props.burgerBarClassName,
                          onIconStateChange: this.props.onIconStateChange,
                        })
                      )
                  )
                },
              },
            ]),
            c
          )
        })(h.Component)
        return (
          (b.propTypes = {
            bodyClassName: k.default.string,
            burgerBarClassName: k.default.string,
            burgerButtonClassName: k.default.string,
            className: k.default.string,
            crossButtonClassName: k.default.string,
            crossClassName: k.default.string,
            customBurgerIcon: k.default.oneOfType([
              k.default.element,
              k.default.oneOf([!1]),
            ]),
            customCrossIcon: k.default.oneOfType([
              k.default.element,
              k.default.oneOf([!1]),
            ]),
            customOnKeyDown: k.default.func,
            disableAutoFocus: k.default.bool,
            disableCloseOnEsc: k.default.bool,
            disableOverlayClick: k.default.oneOfType([
              k.default.bool,
              k.default.func,
            ]),
            htmlClassName: k.default.string,
            id: k.default.string,
            isOpen: k.default.bool,
            itemClassName: k.default.string,
            itemListClassName: k.default.string,
            menuClassName: k.default.string,
            morphShapeClassName: k.default.string,
            noOverlay: k.default.bool,
            noTransition: k.default.bool,
            onClose: k.default.func,
            onIconHoverChange: k.default.func,
            onOpen: k.default.func,
            onStateChange: k.default.func,
            outerContainerId:
              a && a.outerContainer
                ? k.default.string.isRequired
                : k.default.string,
            overlayClassName: k.default.string,
            pageWrapId:
              a && a.pageWrap ? k.default.string.isRequired : k.default.string,
            right: k.default.bool,
            styles: k.default.object,
            width: k.default.oneOfType([k.default.number, k.default.string]),
          }),
          (b.defaultProps = {
            bodyClassName: '',
            burgerBarClassName: '',
            burgerButtonClassName: '',
            className: '',
            crossButtonClassName: '',
            crossClassName: '',
            disableAutoFocus: !1,
            disableCloseOnEsc: !1,
            htmlClassName: '',
            id: '',
            itemClassName: '',
            itemListClassName: '',
            menuClassName: '',
            morphShapeClassName: '',
            noOverlay: !1,
            noTransition: !1,
            onStateChange: function () {},
            outerContainerId: '',
            overlayClassName: '',
            pageWrapId: '',
            styles: {},
            width: 300,
            onIconHoverChange: function () {},
          }),
          b
        )
      }),
        (a.exports = b.default)
    },
    3414: function (a, b, c) {
      'use strict'
      function d(a) {
        return a && a.__esModule ? a : { default: a }
      }
      Object.defineProperty(b, '__esModule', { value: !0 })
      var e = d(c(4503)),
        f = c(4126),
        g = d(f),
        h = c(8227),
        i = {
          svg: {
            lib: e.default,
            pathInitial:
              'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
            pathOpen:
              'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
            animate: function (a) {
              var b = 0,
                c = this.pathOpen.split(';'),
                d = c.length,
                e = window.mina
              !(function f() {
                !(b > d - 1) &&
                  (a.animate(
                    { path: c[b] },
                    0 === b ? 400 : 500,
                    0 === b ? e.easein : e.elastic,
                    function () {
                      f()
                    }
                  ),
                  b++)
              })()
            },
          },
          morphShape: function (a, b, c) {
            return {
              position: 'absolute',
              width: '100%',
              height: '100%',
              right: c ? 'inherit' : 0,
              left: c ? 0 : 'inherit',
              MozTransform: c ? 'rotateY(180deg)' : 'rotateY(0deg)',
              MsTransform: c ? 'rotateY(180deg)' : 'rotateY(0deg)',
              OTransform: c ? 'rotateY(180deg)' : 'rotateY(0deg)',
              WebkitTransform: c ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transform: c ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }
          },
          menuWrap: function (a, b, c) {
            return {
              MozTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: a ? 'transform 0.4s 0s' : 'transform 0.4s',
            }
          },
          menu: function (a, b, c) {
            var d = (0, h.pxToNum)(b) - 140
            return {
              position: 'fixed',
              MozTransform: a
                ? ''
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              MsTransform: a
                ? ''
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              OTransform: a
                ? ''
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              WebkitTransform: a
                ? ''
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              transform: a
                ? ''
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              transition: a
                ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: a ? 1 : 0,
            }
          },
          item: function (a, b, c, d) {
            var e = (0, h.pxToNum)(b) - 140
            return {
              MozTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)',
              MsTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)',
              OTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)',
              WebkitTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)',
              transform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + e + ', 0, 0)'
                : 'translate3d(-' + e + ', 0, 0)',
              transition: a
                ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: a ? 1 : 0,
            }
          },
          closeButton: function (a, b, c) {
            var d = (0, h.pxToNum)(b) - 140
            return {
              MozTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              MsTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              OTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              WebkitTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              transform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + d + ', 0, 0)'
                : 'translate3d(-' + d + ', 0, 0)',
              transition: a
                ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: a ? 1 : 0,
            }
          },
        }
      ;(b.default = (0, g.default)(i)), (a.exports = b.default)
    },
    2996: function (a, b, c) {
      'use strict'
      function d(a) {
        return a && a.__esModule ? a : { default: a }
      }
      Object.defineProperty(b, '__esModule', { value: !0 })
      var e = d(c(4503)),
        f = c(4126),
        g = d(f),
        h = c(8227),
        i = {
          svg: {
            lib: e.default,
            pathInitial:
              'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
            pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
            animate: function (a) {
              a.animate({ path: this.pathOpen }, 400, window.mina.easeinout)
            },
          },
          morphShape: function (a, b, c) {
            return {
              position: 'absolute',
              width: 120,
              height: '100%',
              right: c ? 'inherit' : 0,
              left: c ? 0 : 'inherit',
              MozTransform: c ? 'rotateY(180deg)' : '',
              MsTransform: c ? 'rotateY(180deg)' : '',
              OTransform: c ? 'rotateY(180deg)' : '',
              WebkitTransform: c ? 'rotateY(180deg)' : '',
              transform: c ? 'rotateY(180deg)' : '',
            }
          },
          menuWrap: function (a, b, c) {
            return {
              MozTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: a
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.3s',
            }
          },
          menu: function (a, b, c) {
            return {
              position: 'fixed',
              right: c ? 0 : 'inherit',
              width: (0, h.pxToNum)(b) - 120,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              overflow: 'visible',
            }
          },
          itemList: function (a, b, c) {
            if (c)
              return {
                position: 'relative',
                left: '-110px',
                width: '170%',
                overflow: 'auto',
              }
          },
          pageWrap: function (a, b, c) {
            return {
              MozTransform: a
                ? ''
                : c
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              MsTransform: a
                ? ''
                : c
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              OTransform: a
                ? ''
                : c
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              WebkitTransform: a
                ? ''
                : c
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transform: a
                ? ''
                : c
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transition: a ? 'all 0.3s' : 'all 0.3s 0.1s',
            }
          },
          outerContainer: function (a) {
            return { overflow: a ? '' : 'hidden' }
          },
        }
      ;(b.default = (0, g.default)(i)), (a.exports = b.default)
    },
    5576: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({
        menuWrap: function (a) {
          return {
            MozTransform: a ? '' : 'translate3d(0, -100%, 0)',
            MsTransform: a ? '' : 'translate3d(0, -100%, 0)',
            OTransform: a ? '' : 'translate3d(0, -100%, 0)',
            WebkitTransform: a ? '' : 'translate3d(0, -100%, 0)',
            transform: a ? '' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s ease-in-out',
          }
        },
        pageWrap: function (a, b, c) {
          return {
            MozTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            MsTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            OTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            WebkitTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            transform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (a) {
          return {
            perspective: '1500px',
            perspectiveOrigin: '0% 50%',
            overflow: a ? '' : 'hidden',
          }
        },
      })),
        (a.exports = b.default)
    },
    3976: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({
        pageWrap: function (a, b, c) {
          return {
            MozTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            MsTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            OTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            WebkitTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            transform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (a) {
          return { overflow: a ? '' : 'hidden' }
        },
      })),
        (a.exports = b.default)
    },
    8796: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({
        pageWrap: function (a, b, c) {
          return {
            MozTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + b + ', 0, 0) rotateY(-15deg)',
            MsTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + b + ', 0, 0) rotateY(-15deg)',
            OTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + b + ', 0, 0) rotateY(-15deg)',
            WebkitTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + b + ', 0, 0) rotateY(-15deg)',
            transform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + b + ', 0, 0) rotateY(-15deg)',
            transformOrigin: c ? '100% 50%' : '0% 50%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (a) {
          return { perspective: '1500px', overflow: a ? '' : 'hidden' }
        },
      })),
        (a.exports = b.default)
    },
    6523: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({
        menuWrap: function (a, b, c) {
          return {
            visibility: a ? 'visible' : 'hidden',
            MozTransform: 'translate3d(0, 0, 0)',
            MsTransform: 'translate3d(0, 0, 0)',
            OTransform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            zIndex: 1000,
          }
        },
        overlay: function (a, b, c) {
          return {
            zIndex: 1400,
            MozTransform: a
              ? c
                ? 'translate3d(-' + b + ', 0, 0)'
                : 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: a
              ? c
                ? 'translate3d(-' + b + ', 0, 0)'
                : 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: a
              ? c
                ? 'translate3d(-' + b + ', 0, 0)'
                : 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: a
              ? c
                ? 'translate3d(-' + b + ', 0, 0)'
                : 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: a
              ? c
                ? 'translate3d(-' + b + ', 0, 0)'
                : 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.5s',
            visibility: a ? 'visible' : 'hidden',
          }
        },
        pageWrap: function (a, b, c) {
          return {
            MozTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            MsTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            OTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            WebkitTransform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            transform: a
              ? ''
              : c
              ? 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(' + b + ', 0, 0)',
            transition: 'all 0.5s',
            zIndex: 1200,
            position: 'relative',
          }
        },
        burgerIcon: function (a, b, c) {
          return {
            MozTransform: a
              ? c
                ? 'translate3d(' + b + ', 0, 0)'
                : 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: a
              ? c
                ? 'translate3d(' + b + ', 0, 0)'
                : 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: a
              ? c
                ? 'translate3d(' + b + ', 0, 0)'
                : 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: a
              ? c
                ? 'translate3d(' + b + ', 0, 0)'
                : 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: a
              ? c
                ? 'translate3d(' + b + ', 0, 0)'
                : 'translate3d(-' + b + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.1s',
            position: 'relative',
            zIndex: 1300,
          }
        },
        outerContainer: function (a) {
          return { overflow: a ? '' : 'hidden' }
        },
      })),
        (a.exports = b.default)
    },
    9070: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({
        pageWrap: function (a, b) {
          return {
            MozTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            MsTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            OTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            WebkitTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            transform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            transformOrigin: '100%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function () {
          return { perspective: '1500px' }
        },
      })),
        (a.exports = b.default)
    },
    6001: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({
        pageWrap: function (a, b, c) {
          return {
            MozTransform: a
              ? ''
              : c
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            MsTransform: a
              ? ''
              : c
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            OTransform: a
              ? ''
              : c
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            WebkitTransform: a
              ? ''
              : c
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transform: a
              ? ''
              : c
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
            overflow: a ? '' : 'hidden',
          }
        },
        outerContainer: function (a) {
          return { perspective: '1500px', overflow: a ? '' : 'hidden' }
        },
      })),
        (a.exports = b.default)
    },
    6432: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({})), (a.exports = b.default)
    },
    7277: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var d,
        e = (d = c(4126)) && d.__esModule ? d : { default: d }
      ;(b.default = (0, e.default)({
        menuWrap: function (a, b, c) {
          return {
            MozTransform: a
              ? ''
              : c
              ? 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(-' + b + ', 0, 0)',
            MsTransform: a
              ? ''
              : c
              ? 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(-' + b + ', 0, 0)',
            OTransform: a
              ? ''
              : c
              ? 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(-' + b + ', 0, 0)',
            WebkitTransform: a
              ? ''
              : c
              ? 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(-' + b + ', 0, 0)',
            transform: a
              ? ''
              : c
              ? 'translate3d(' + b + ', 0, 0)'
              : 'translate3d(-' + b + ', 0, 0)',
            transition: a
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
        item: function (a, b, c, d) {
          return {
            MozTransform: a ? '' : 'translate3d(0, ' + 500 * d + 'px, 0)',
            MsTransform: a ? '' : 'translate3d(0, ' + 500 * d + 'px, 0)',
            OTransform: a ? '' : 'translate3d(0, ' + 500 * d + 'px, 0)',
            WebkitTransform: a ? '' : 'translate3d(0, ' + 500 * d + 'px, 0)',
            transform: a ? '' : 'translate3d(0, ' + 500 * d + 'px, 0)',
            transition: a
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
      })),
        (a.exports = b.default)
    },
    4503: function (a, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 }),
        (b.default = function () {
          var a = void 0
          try {
            a = c(1223)
          } finally {
            return a
          }
        }),
        (a.exports = b.default)
    },
    8227: function (a, b) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 }),
        (b.pxToNum = function (a) {
          return parseInt(a.slice(0, -2), 10)
        })
    },
    6893: function (a, b, c) {
      'use strict'
      c.d(b, {
        Siq: function () {
          return e
        },
        HR2: function () {
          return f
        },
        cur: function () {
          return g
        },
        wOW: function () {
          return h
        },
        xaD: function () {
          return i
        },
        jMy: function () {
          return j
        },
        kXG: function () {
          return k
        },
        gU9: function () {
          return l
        },
        q5L: function () {
          return m
        },
      })
      var d = c(8357)
      function e(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '5', r: '3' } },
            { tag: 'line', attr: { x1: '12', y1: '22', x2: '12', y2: '8' } },
            { tag: 'path', attr: { d: 'M5 12H2a10 10 0 0 0 20 0h-3' } },
          ],
        })(a)
      }
      function f(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '8', r: '7' } },
            {
              tag: 'polyline',
              attr: { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' },
            },
          ],
        })(a)
      }
      function g(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'line', attr: { x1: '3', y1: '12', x2: '21', y2: '12' } },
            { tag: 'line', attr: { x1: '3', y1: '6', x2: '21', y2: '6' } },
            { tag: 'line', attr: { x1: '3', y1: '18', x2: '21', y2: '18' } },
          ],
        })(a)
      }
      function h(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' },
            },
          ],
        })(a)
      }
      function i(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'path', attr: { d: 'M4 11a9 9 0 0 1 9 9' } },
            { tag: 'path', attr: { d: 'M4 4a16 16 0 0 1 16 16' } },
            { tag: 'circle', attr: { cx: '5', cy: '19', r: '1' } },
          ],
        })(a)
      }
      function j(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '12', r: '10' } },
            { tag: 'path', attr: { d: 'M8 14s1.5 2 4 2 4-2 4-2' } },
            { tag: 'line', attr: { x1: '9', y1: '9', x2: '9.01', y2: '9' } },
            { tag: 'line', attr: { x1: '15', y1: '9', x2: '15.01', y2: '9' } },
          ],
        })(a)
      }
      function k(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '12', r: '5' } },
            { tag: 'line', attr: { x1: '12', y1: '1', x2: '12', y2: '3' } },
            { tag: 'line', attr: { x1: '12', y1: '21', x2: '12', y2: '23' } },
            {
              tag: 'line',
              attr: { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' },
            },
            {
              tag: 'line',
              attr: { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' },
            },
            { tag: 'line', attr: { x1: '1', y1: '12', x2: '3', y2: '12' } },
            { tag: 'line', attr: { x1: '21', y1: '12', x2: '23', y2: '12' } },
            {
              tag: 'line',
              attr: { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' },
            },
            {
              tag: 'line',
              attr: { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' },
            },
          ],
        })(a)
      }
      function l(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'rect',
              attr: {
                x: '1',
                y: '5',
                width: '22',
                height: '14',
                rx: '7',
                ry: '7',
              },
            },
            { tag: 'circle', attr: { cx: '8', cy: '12', r: '3' } },
          ],
        })(a)
      }
      function m(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'line', attr: { x1: '18', y1: '6', x2: '6', y2: '18' } },
            { tag: 'line', attr: { x1: '6', y1: '6', x2: '18', y2: '18' } },
          ],
        })(a)
      }
    },
    5155: function (a, b, c) {
      'use strict'
      c.d(b, {
        lfl: function () {
          return e
        },
        juy: function () {
          return f
        },
        lUN: function () {
          return g
        },
        Xai: function () {
          return h
        },
      })
      var d = c(8357)
      function e(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d:
                  'M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1',
              },
            },
          ],
        })(a)
      }
      function f(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d:
                  'M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z',
              },
            },
          ],
        })(a)
      }
      function g(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d:
                  'M2.84593838,5.88685595 C2.87575654,5.59224254 2.76340763,5.30104995 2.54341737,5.10276397 L0.302521008,2.4032473 L0.302521008,2 L7.2605042,2 L12.6386555,13.7949836 L17.3669469,2 L24,2 L24,2.4032473 L22.0840336,4.2402628 C21.9188563,4.36617057 21.8369199,4.57310892 21.8711485,4.77792587 L21.8711485,18.2755093 C21.8369199,18.4803262 21.9188563,18.6872645 22.0840336,18.8131723 L23.9551821,20.6501878 L23.9551821,21.0534351 L14.5434174,21.0534351 L14.5434174,20.6501878 L16.4817928,18.7683671 C16.6722689,18.5779447 16.6722689,18.5219382 16.6722689,18.2307041 L16.6722689,7.32062416 L11.2829132,21.0086299 L10.5546219,21.0086299 L4.28011204,7.32062416 L4.28011204,16.4945003 C4.22779746,16.8801958 4.35589372,17.2685069 4.62745097,17.5474239 L7.14845938,20.6053826 L7.14845938,21.0086299 L0,21.0086299 L0,20.6053826 L2.5210084,17.5474239 C2.79058848,17.2680445 2.91121535,16.8771576 2.84593838,16.4945003 L2.84593838,5.88685595 Z',
              },
            },
          ],
        })(a)
      }
      function h(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d:
                  'M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086',
              },
            },
          ],
        })(a)
      }
    },
    8357: function (a, b, c) {
      'use strict'
      c.d(b, {
        w_: function () {
          return j
        },
      })
      var d = c(7294),
        e = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        f = d.createContext && d.createContext(e),
        g = function () {
          return (g =
            Object.assign ||
            function (a) {
              for (var b, c = 1, d = arguments.length; c < d; c++)
                for (var e in (b = arguments[c]))
                  Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
              return a
            }).apply(this, arguments)
        },
        h = function (a, b) {
          var c = {}
          for (var d in a)
            Object.prototype.hasOwnProperty.call(a, d) &&
              0 > b.indexOf(d) &&
              (c[d] = a[d])
          if (null != a && 'function' == typeof Object.getOwnPropertySymbols)
            for (
              var e = 0, d = Object.getOwnPropertySymbols(a);
              e < d.length;
              e++
            )
              0 > b.indexOf(d[e]) && (c[d[e]] = a[d[e]])
          return c
        }
      function i(a) {
        return (
          a &&
          a.map(function (a, b) {
            return d.createElement(a.tag, g({ key: b }, a.attr), i(a.child))
          })
        )
      }
      function j(a) {
        return function (b) {
          return d.createElement(k, g({ attr: g({}, a.attr) }, b), i(a.child))
        }
      }
      function k(a) {
        var b = function (b) {
          var c,
            e = a.size || b.size || '1em'
          b.className && (c = b.className),
            a.className && (c = (c ? c + ' ' : '') + a.className)
          var f = a.attr,
            i = a.title,
            j = h(a, ['attr', 'title'])
          return d.createElement(
            'svg',
            g(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: '0',
              },
              b.attr,
              f,
              j,
              {
                className: c,
                style: g({ color: a.color || b.color }, b.style, a.style),
                height: e,
                width: e,
                xmlns: 'http://www.w3.org/2000/svg',
              }
            ),
            i && d.createElement('title', null, i),
            a.children
          )
        }
        return void 0 !== f
          ? d.createElement(f.Consumer, null, function (a) {
              return b(a)
            })
          : b(e)
      }
    },
    1223: function (a, b, c) {
      window.eve = c(1530)
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v =
          ((d = 'undefined' == typeof eve ? function () {} : eve),
          (f = {}),
          (g =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (a) {
              return setTimeout(a, 16, new Date().getTime()), !0
            }),
          (h =
            Array.isArray ||
            function (a) {
              return (
                a instanceof Array ||
                '[object Array]' == Object.prototype.toString.call(a)
              )
            }),
          (i = 0),
          (j = 'M' + (+new Date()).toString(36)),
          (k = function (a, b, c, d) {
            if (h(a)) {
              res = []
              for (var e = 0, f = a.length; e < f; e++)
                res[e] = k(a[e], b, c[e], d)
              return res
            }
            var g = (c - a) / (d - b)
            return function (c) {
              return a + g * (c - b)
            }
          }),
          (l =
            Date.now ||
            function () {
              return +new Date()
            }),
          (m = function (a) {
            var b = this
            if (null == a) return b.s
            var c = b.s - a
            ;(b.b += b.dur * c), (b.B += b.dur * c), (b.s = a)
          }),
          (n = function (a) {
            var b = this
            if (null == a) return b.spd
            b.spd = a
          }),
          (o = function (a) {
            var b = this
            if (null == a) return b.dur
            ;(b.s = (b.s * a) / b.dur), (b.dur = a)
          }),
          (p = function () {
            delete f[this.id], this.update(), d('mina.stop.' + this.id, this)
          }),
          (q = function () {
            var a = this
            a.pdif || (delete f[a.id], a.update(), (a.pdif = a.get() - a.b))
          }),
          (r = function () {
            var a = this
            a.pdif &&
              ((a.b = a.get() - a.pdif), delete a.pdif, (f[a.id] = a), t())
          }),
          (s = function () {
            var a
            if (h(this.start)) {
              a = []
              for (var b = 0, c = this.start.length; b < c; b++)
                a[b] =
                  +this.start[b] +
                  (this.end[b] - this.start[b]) * this.easing(this.s)
            } else
              a = +this.start + (this.end - this.start) * this.easing(this.s)
            this.set(a)
          }),
          (t = function (a) {
            if (!a) {
              e || (e = g(t))
              return
            }
            var b = 0
            for (var c in f)
              if (f.hasOwnProperty(c)) {
                var h,
                  i = f[c],
                  j = i.get()
                b++,
                  (i.s = (j - i.b) / (i.dur / i.spd)),
                  i.s >= 1 &&
                    (delete f[c],
                    (i.s = 1),
                    b--,
                    (h = i),
                    setTimeout(function () {
                      d('mina.finish.' + h.id, h)
                    })),
                  i.update()
              }
            e = !!b && g(t)
          }),
          ((u = function (a, b, c, d, e, g, h) {
            var k = {
              id: j + (i++).toString(36),
              start: a,
              end: b,
              b: c,
              s: 0,
              dur: d - c,
              spd: 1,
              get: e,
              set: g,
              easing: h || u.linear,
              status: m,
              speed: n,
              duration: o,
              stop: p,
              pause: q,
              resume: r,
              update: s,
            }
            f[k.id] = k
            var l,
              v = 0
            for (l in f) if (f.hasOwnProperty(l) && (v++, 2 == v)) break
            return 1 == v && t(), k
          }).time = l),
          (u.getById = function (a) {
            return f[a] || null
          }),
          (u.linear = function (a) {
            return a
          }),
          (u.easeout = function (a) {
            return Math.pow(a, 1.7)
          }),
          (u.easein = function (a) {
            return Math.pow(a, 0.48)
          }),
          (u.easeinout = function (a) {
            if (1 == a) return 1
            if (0 == a) return 0
            var b = 0.48 - a / 1.04,
              c = Math.sqrt(0.1734 + b * b),
              d = c - b,
              e = -c - b,
              f =
                Math.pow(Math.abs(d), 1 / 3) * (d < 0 ? -1 : 1) +
                Math.pow(Math.abs(e), 1 / 3) * (e < 0 ? -1 : 1) +
                0.5
            return (1 - f) * 3 * f * f + f * f * f
          }),
          (u.backin = function (a) {
            return 1 == a ? 1 : a * a * (2.70158 * a - 1.70158)
          }),
          (u.backout = function (a) {
            return 0 == a ? 0 : (a -= 1) * a * (2.70158 * a + 1.70158) + 1
          }),
          (u.elastic = function (a) {
            return !!a == a
              ? a
              : Math.pow(2, -10 * a) *
                  Math.sin(((a - 0.075) * (2 * Math.PI)) / 0.3) +
                  1
          }),
          (u.bounce = function (a) {
            return a < 0.36363636363636365
              ? 7.5625 * a * a
              : a < 0.7272727272727273
              ? 7.5625 * (a -= 0.5454545454545454) * a + 0.75
              : a < 0.9090909090909091
              ? 7.5625 * (a -= 0.8181818181818182) * a + 0.9375
              : 7.5625 * (a -= 0.9545454545454546) * a + 0.984375
          }),
          (window.mina = u),
          u),
        w = (function (a) {
          function b(a, c) {
            if (a) {
              if (a.nodeType) return W(a)
              if (G(a, 'array') && b.set) return b.set.apply(b, a)
              if (a instanceof S) return a
              if (null == c)
                try {
                  return (a = f.doc.querySelector(String(a))), W(a)
                } catch (d) {
                  return null
                }
            }
            return (
              (a = null == a ? '100%' : a),
              (c = null == c ? '100%' : c),
              new V(a, c)
            )
          }
          ;(b.version = '0.5.1'),
            (b.toString = function () {
              return 'Snap v' + this.version
            }),
            (b._ = {})
          var c,
            d,
            e,
            f = { win: a.window, doc: a.window.document }
          b._.glob = f
          var g = 'hasOwnProperty',
            h = String,
            i = parseFloat,
            j = parseInt,
            k = Math,
            l = k.max,
            m = k.min,
            n = k.abs,
            o = k.pow,
            p = k.PI,
            q = k.round,
            r = Object.prototype.toString,
            s = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            t = (b._.separator = /[,\s]+/),
            u = /[\s]*,[\s]*/,
            v = { hs: 1, rg: 1 },
            w = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            x = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            y = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
            z = 0,
            A = 'S' + (+new Date()).toString(36),
            B = function (a) {
              return (a && a.type ? a.type : '') + A + (z++).toString(36)
            },
            C = 'http://www.w3.org/1999/xlink',
            D = 'http://www.w3.org/2000/svg',
            E = {}
          function F(a, b) {
            if (b) {
              if (
                ('#text' == a &&
                  (a = f.doc.createTextNode(b.text || b['#text'] || '')),
                '#comment' == a &&
                  (a = f.doc.createComment(b.text || b['#text'] || '')),
                'string' == typeof a && (a = F(a)),
                'string' == typeof b)
              )
                return 1 == a.nodeType
                  ? 'xlink:' == b.substring(0, 6)
                    ? a.getAttributeNS(C, b.substring(6))
                    : 'xml:' == b.substring(0, 4)
                    ? a.getAttributeNS(D, b.substring(4))
                    : a.getAttribute(b)
                  : 'text' == b
                  ? a.nodeValue
                  : null
              if (1 == a.nodeType) {
                for (var c in b)
                  if (b[g](c)) {
                    var d = h(b[c])
                    d
                      ? 'xlink:' == c.substring(0, 6)
                        ? a.setAttributeNS(C, c.substring(6), d)
                        : 'xml:' == c.substring(0, 4)
                        ? a.setAttributeNS(D, c.substring(4), d)
                        : a.setAttribute(c, d)
                      : a.removeAttribute(c)
                  }
              } else 'text' in b && (a.nodeValue = b.text)
            } else a = f.doc.createElementNS(D, a)
            return a
          }
          function G(a, b) {
            return 'finite' == (b = h.prototype.toLowerCase.call(b))
              ? isFinite(a)
              : !!(
                  'array' == b &&
                  (a instanceof Array || (Array.isArray && Array.isArray(a)))
                ) ||
                  ('null' == b && null === a) ||
                  (b == typeof a && null !== a) ||
                  ('object' == b && a === Object(a)) ||
                  r.call(a).slice(8, -1).toLowerCase() == b
          }
          function H(a) {
            if ('function' == typeof a || Object(a) !== a) return a
            var b = new a.constructor()
            for (var c in a) a[g](c) && (b[c] = H(a[c]))
            return b
          }
          function I(a, b, c) {
            function d() {
              var e = Array.prototype.slice.call(arguments, 0),
                f = e.join('␀'),
                h = (d.cache = d.cache || {}),
                i = (d.count = d.count || [])
              return h[g](f)
                ? ((function (a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                      if (a[c] === b) return a.push(a.splice(c, 1)[0])
                  })(i, f),
                  c ? c(h[f]) : h[f])
                : (i.length >= 1000 && delete h[i.shift()],
                  i.push(f),
                  (h[f] = a.apply(b, e)),
                  c ? c(h[f]) : h[f])
            }
            return d
          }
          function J(a, b, c, d, e, f) {
            if (null != e) return J(a, b, e, f) - J(c, d, e, f)
            var g = a - c,
              h = b - d
            return g || h ? (180 + (180 * k.atan2(-h, -g)) / p + 360) % 360 : 0
          }
          function K(a) {
            return ((a % 360) * p) / 180
          }
          ;(b.url = function (a) {
            return "url('#" + a + "')"
          }),
            (b._.$ = F),
            (b._.id = B),
            (c = /\{([^\}]+)\}/g),
            (d = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
            (e = function (a, b, c) {
              var e = c
              return (
                b.replace(d, function (a, b, c, d, f) {
                  ;(b = b || d),
                    e &&
                      (b in e && (e = e[b]),
                      'function' == typeof e && f && (e = e()))
                }),
                (e = (null == e || e == c ? a : e) + '')
              )
            }),
            (b.format = function (a, b) {
              return h(a).replace(c, function (a, c) {
                return e(a, c, b)
              })
            }),
            (b._.clone = H),
            (b._.cacher = I),
            (b.rad = K),
            (b.deg = function (a) {
              return ((180 * a) / p) % 360
            }),
            (b.sin = function (a) {
              return k.sin(b.rad(a))
            }),
            (b.tan = function (a) {
              return k.tan(b.rad(a))
            }),
            (b.cos = function (a) {
              return k.cos(b.rad(a))
            }),
            (b.asin = function (a) {
              return b.deg(k.asin(a))
            }),
            (b.acos = function (a) {
              return b.deg(k.acos(a))
            }),
            (b.atan = function (a) {
              return b.deg(k.atan(a))
            }),
            (b.atan2 = function (a) {
              return b.deg(k.atan2(a))
            }),
            (b.angle = J),
            (b.len = function (a, c, d, e) {
              return Math.sqrt(b.len2(a, c, d, e))
            }),
            (b.len2 = function (a, b, c, d) {
              return (a - c) * (a - c) + (b - d) * (b - d)
            }),
            (b.closestPoint = function (a, b, c) {
              function d(a) {
                var d = a.x - b,
                  e = a.y - c
                return d * d + e * e
              }
              for (
                var e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n,
                  o = a.node,
                  p = o.getTotalLength(),
                  q = (p / o.pathSegList.numberOfItems) * 0.125,
                  r = 1 / 0,
                  s = 0;
                s <= p;
                s += q
              )
                (n = d((m = o.getPointAtLength(s)))) < r &&
                  ((k = m), (l = s), (r = n))
              for (q *= 0.5; q > 0.5; )
                (g = l - q) >= 0 && (i = d((e = o.getPointAtLength(g)))) < r
                  ? ((k = e), (l = g), (r = i))
                  : (h = l + q) <= p && (j = d((f = o.getPointAtLength(h)))) < r
                  ? ((k = f), (l = h), (r = j))
                  : (q *= 0.5)
              return (k = { x: k.x, y: k.y, length: l, distance: Math.sqrt(r) })
            }),
            (b.is = G),
            (b.snapTo = function (a, b, c) {
              if (((c = G(c, 'finite') ? c : 10), G(a, 'array'))) {
                for (var d = a.length; d--; ) if (n(a[d] - b) <= c) return a[d]
              } else {
                var e = b % (a = +a)
                if (e < c) return b - e
                if (e > a - c) return b - e + a
              }
              return b
            }),
            (b.getRGB = I(function (a) {
              if (!a || (a = h(a)).indexOf('-') + 1)
                return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: 'none',
                  error: 1,
                  toString: M,
                }
              if ('none' == a)
                return { r: -1, g: -1, b: -1, hex: 'none', toString: M }
              if (
                (v[g](a.toLowerCase().substring(0, 2)) ||
                  '#' == a.charAt() ||
                  (a = L(a)),
                !a)
              )
                return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: 'none',
                  error: 1,
                  toString: M,
                }
              var c,
                d,
                e,
                f,
                n,
                o,
                p = a.match(s)
              return p
                ? (p[2] &&
                    ((e = j(p[2].substring(5), 16)),
                    (d = j(p[2].substring(3, 5), 16)),
                    (c = j(p[2].substring(1, 3), 16))),
                  p[3] &&
                    ((e = j((n = p[3].charAt(3)) + n, 16)),
                    (d = j((n = p[3].charAt(2)) + n, 16)),
                    (c = j((n = p[3].charAt(1)) + n, 16))),
                  p[4] &&
                    ((c = i((o = p[4].split(u))[0])),
                    '%' == o[0].slice(-1) && (c *= 2.55),
                    (d = i(o[1])),
                    '%' == o[1].slice(-1) && (d *= 2.55),
                    (e = i(o[2])),
                    '%' == o[2].slice(-1) && (e *= 2.55),
                    'rgba' == p[1].toLowerCase().slice(0, 4) && (f = i(o[3])),
                    o[3] && '%' == o[3].slice(-1) && (f /= 100)),
                  p[5])
                  ? ((c = i((o = p[5].split(u))[0])),
                    '%' == o[0].slice(-1) && (c /= 100),
                    (d = i(o[1])),
                    '%' == o[1].slice(-1) && (d /= 100),
                    (e = i(o[2])),
                    '%' == o[2].slice(-1) && (e /= 100),
                    ('deg' == o[0].slice(-3) || '\xb0' == o[0].slice(-1)) &&
                      (c /= 360),
                    'hsba' == p[1].toLowerCase().slice(0, 4) && (f = i(o[3])),
                    o[3] && '%' == o[3].slice(-1) && (f /= 100),
                    b.hsb2rgb(c, d, e, f))
                  : p[6]
                  ? ((c = i((o = p[6].split(u))[0])),
                    '%' == o[0].slice(-1) && (c /= 100),
                    (d = i(o[1])),
                    '%' == o[1].slice(-1) && (d /= 100),
                    (e = i(o[2])),
                    '%' == o[2].slice(-1) && (e /= 100),
                    ('deg' == o[0].slice(-3) || '\xb0' == o[0].slice(-1)) &&
                      (c /= 360),
                    'hsla' == p[1].toLowerCase().slice(0, 4) && (f = i(o[3])),
                    o[3] && '%' == o[3].slice(-1) && (f /= 100),
                    b.hsl2rgb(c, d, e, f))
                  : ((c = m(k.round(c), 255)),
                    (d = m(k.round(d), 255)),
                    (e = m(k.round(e), 255)),
                    (f = m(l(f, 0), 1)),
                    (p = { r: c, g: d, b: e, toString: M }),
                    (p.hex =
                      '#' +
                      (16777216 | e | (d << 8) | (c << 16))
                        .toString(16)
                        .slice(1)),
                    (p.opacity = G(f, 'finite') ? f : 1),
                    p)
                : { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: M }
            }, b)),
            (b.hsb = I(function (a, c, d) {
              return b.hsb2rgb(a, c, d).hex
            })),
            (b.hsl = I(function (a, c, d) {
              return b.hsl2rgb(a, c, d).hex
            })),
            (b.rgb = I(function (a, b, c, d) {
              if (G(d, 'finite')) {
                var e = k.round
                return 'rgba(' + [e(a), e(b), e(c), +d.toFixed(2)] + ')'
              }
              return (
                '#' +
                (16777216 | c | (b << 8) | (a << 16)).toString(16).slice(1)
              )
            }))
          var L = function (a) {
              var b =
                  f.doc.getElementsByTagName('head')[0] ||
                  f.doc.getElementsByTagName('svg')[0],
                c = 'rgb(255, 0, 0)'
              return (L = I(function (a) {
                if ('red' == a.toLowerCase()) return c
                ;(b.style.color = c), (b.style.color = a)
                var d = f.doc.defaultView
                  .getComputedStyle(b, '')
                  .getPropertyValue('color')
                return d == c ? null : d
              }))(a)
            },
            M = function () {
              return 1 == this.opacity || null == this.opacity
                ? this.hex
                : 'rgba(' + [this.r, this.g, this.b, this.opacity] + ')'
            },
            N = function (a, c, d) {
              if (
                (null == c &&
                  G(a, 'object') &&
                  'r' in a &&
                  'g' in a &&
                  'b' in a &&
                  ((d = a.b), (c = a.g), (a = a.r)),
                null == c && G(a, string))
              ) {
                var e = b.getRGB(a)
                ;(a = e.r), (c = e.g), (d = e.b)
              }
              return (
                (a > 1 || c > 1 || d > 1) &&
                  ((a /= 255), (c /= 255), (d /= 255)),
                [a, c, d]
              )
            },
            O = function (a, c, d, e) {
              var f = {
                r: (a = k.round(255 * a)),
                g: (c = k.round(255 * c)),
                b: (d = k.round(255 * d)),
                opacity: G(e, 'finite') ? e : 1,
                hex: b.rgb(a, c, d),
                toString: M,
              }
              return G(e, 'finite') && (f.opacity = e), f
            }
          ;(b.color = function (a) {
            var c
            return (
              G(a, 'object') && 'h' in a && 's' in a && 'b' in a
                ? ((c = b.hsb2rgb(a)),
                  (a.r = c.r),
                  (a.g = c.g),
                  (a.b = c.b),
                  (a.opacity = 1),
                  (a.hex = c.hex))
                : G(a, 'object') && 'h' in a && 's' in a && 'l' in a
                ? ((c = b.hsl2rgb(a)),
                  (a.r = c.r),
                  (a.g = c.g),
                  (a.b = c.b),
                  (a.opacity = 1),
                  (a.hex = c.hex))
                : (G(a, 'string') && (a = b.getRGB(a)),
                  G(a, 'object') &&
                  'r' in a &&
                  'g' in a &&
                  'b' in a &&
                  !('error' in a)
                    ? ((c = b.rgb2hsl(a)),
                      (a.h = c.h),
                      (a.s = c.s),
                      (a.l = c.l),
                      (c = b.rgb2hsb(a)),
                      (a.v = c.b))
                    : (((a = {
                        hex: 'none',
                      }).r = a.g = a.b = a.h = a.s = a.v = a.l = -1),
                      (a.error = 1))),
              (a.toString = M),
              a
            )
          }),
            (b.hsb2rgb = function (a, b, c, d) {
              var e, f, g, h, i
              return (
                G(a, 'object') &&
                  'h' in a &&
                  's' in a &&
                  'b' in a &&
                  ((c = a.b), (b = a.s), (d = a.o), (a = a.h)),
                (a = ((a *= 360) % 360) / 60),
                (h = (i = c * b) * (1 - n((a % 2) - 1))),
                (e = f = g = c - i),
                (a = ~~a),
                (e += [i, h, 0, 0, h, i][a]),
                (f += [h, i, i, h, 0, 0][a]),
                (g += [0, 0, h, i, i, h][a]),
                O(e, f, g, d)
              )
            }),
            (b.hsl2rgb = function (a, b, c, d) {
              var e, f, g, h, i
              return (
                G(a, 'object') &&
                  'h' in a &&
                  's' in a &&
                  'l' in a &&
                  ((c = a.l), (b = a.s), (a = a.h)),
                (a > 1 || b > 1 || c > 1) &&
                  ((a /= 360), (b /= 100), (c /= 100)),
                (a = ((a *= 360) % 360) / 60),
                (h =
                  (i = 2 * b * (c < 0.5 ? c : 1 - c)) * (1 - n((a % 2) - 1))),
                (e = f = g = c - i / 2),
                (a = ~~a),
                (e += [i, h, 0, 0, h, i][a]),
                (f += [h, i, i, h, 0, 0][a]),
                (g += [0, 0, h, i, i, h][a]),
                O(e, f, g, d)
              )
            }),
            (b.rgb2hsb = function (a, b, c) {
              var d, e, f, g
              return (
                (a = (c = N(a, b, c))[0]),
                (b = c[1]),
                (c = c[2]),
                (f = l(a, b, c)),
                (g = f - m(a, b, c)),
                (d =
                  0 == g
                    ? null
                    : f == a
                    ? (b - c) / g
                    : f == b
                    ? (c - a) / g + 2
                    : (a - b) / g + 4),
                (d = (((d + 360) % 6) * 60) / 360),
                (e = 0 == g ? 0 : g / f),
                {
                  h: d,
                  s: e,
                  b: f,
                  toString: function () {
                    return 'hsb(' + [this.h, this.s, this.b] + ')'
                  },
                }
              )
            }),
            (b.rgb2hsl = function (a, b, c) {
              var d, e, f, g, h, i
              return (
                (a = (c = N(a, b, c))[0]),
                (b = c[1]),
                (c = c[2]),
                (g = l(a, b, c)),
                (h = m(a, b, c)),
                (i = g - h),
                (d =
                  0 == i
                    ? null
                    : g == a
                    ? (b - c) / i
                    : g == b
                    ? (c - a) / i + 2
                    : (a - b) / i + 4),
                (d = (((d + 360) % 6) * 60) / 360),
                (f = (g + h) / 2),
                (e = 0 == i ? 0 : f < 0.5 ? i / (2 * f) : i / (2 - 2 * f)),
                {
                  h: d,
                  s: e,
                  l: f,
                  toString: function () {
                    return 'hsl(' + [this.h, this.s, this.l] + ')'
                  },
                }
              )
            }),
            (b.parsePathString = function (a) {
              if (!a) return null
              var c = b.path(a)
              if (c.arr) return b.path.clone(c.arr)
              var d = {
                  a: 7,
                  c: 6,
                  o: 2,
                  h: 1,
                  l: 2,
                  m: 2,
                  r: 4,
                  q: 4,
                  s: 4,
                  t: 2,
                  v: 1,
                  u: 3,
                  z: 0,
                },
                e = []
              return (
                G(a, 'array') && G(a[0], 'array') && (e = b.path.clone(a)),
                e.length ||
                  h(a).replace(w, function (a, b, c) {
                    var f = [],
                      g = b.toLowerCase()
                    if (
                      (c.replace(y, function (a, b) {
                        b && f.push(+b)
                      }),
                      'm' == g &&
                        f.length > 2 &&
                        (e.push([b].concat(f.splice(0, 2))),
                        (g = 'l'),
                        (b = 'm' == b ? 'l' : 'L')),
                      'o' == g && 1 == f.length && e.push([b, f[0]]),
                      'r' == g)
                    )
                      e.push([b].concat(f))
                    else
                      for (
                        ;
                        f.length >= d[g] &&
                        (e.push([b].concat(f.splice(0, d[g]))), d[g]);

                      );
                  }),
                (e.toString = b.path.toString),
                (c.arr = b.path.clone(e)),
                e
              )
            })
          var P = (b.parseTransformString = function (a) {
            if (!a) return null
            var c = []
            return (
              G(a, 'array') && G(a[0], 'array') && (c = b.path.clone(a)),
              c.length ||
                h(a).replace(x, function (a, b, d) {
                  var e = []
                  b.toLowerCase(),
                    d.replace(y, function (a, b) {
                      b && e.push(+b)
                    }),
                    c.push([b].concat(e))
                }),
              (c.toString = b.path.toString),
              c
            )
          })
          function Q(a) {
            return (
              (a.node.ownerSVGElement && W(a.node.ownerSVGElement)) ||
              b.select('svg')
            )
          }
          function R(a) {
            G(a, 'array') || (a = Array.prototype.slice.call(arguments, 0))
            for (var b = 0, c = 0, d = this.node; this[b]; ) delete this[b++]
            for (b = 0; b < a.length; b++)
              'set' == a[b].type
                ? a[b].forEach(function (a) {
                    d.appendChild(a.node)
                  })
                : d.appendChild(a[b].node)
            var e = d.childNodes
            for (b = 0; b < e.length; b++) this[c++] = W(e[b])
            return this
          }
          function S(a) {
            if (a.snap in E) return E[a.snap]
            try {
              c = a.ownerSVGElement
            } catch (b) {}
            ;(this.node = a),
              c && (this.paper = new V(c)),
              (this.type = a.tagName || a.nodeName)
            var c,
              d = (this.id = B(this))
            if (
              ((this.anims = {}),
              (this._ = { transform: [] }),
              (a.snap = d),
              (E[d] = this),
              'g' == this.type && (this.add = R),
              this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 })
            )
              for (var e in V.prototype)
                V.prototype[g](e) && (this[e] = V.prototype[e])
          }
          function T(a) {
            this.node = a
          }
          function U(a, b) {
            var c = F(a)
            return b.appendChild(c), W(c)
          }
          function V(a, b) {
            var c,
              d,
              e,
              h = V.prototype
            if (a && a.tagName && 'svg' == a.tagName.toLowerCase()) {
              if (a.snap in E) return E[a.snap]
              var i = a.ownerDocument
              for (var j in ((c = new S(a)),
              (d = a.getElementsByTagName('desc')[0]),
              (e = a.getElementsByTagName('defs')[0]),
              d ||
                ((d = F('desc')).appendChild(
                  i.createTextNode('Created with Snap')
                ),
                c.node.appendChild(d)),
              e || ((e = F('defs')), c.node.appendChild(e)),
              (c.defs = e),
              h))
                h[g](j) && (c[j] = h[j])
              c.paper = c.root = c
            } else
              F((c = U('svg', f.doc.body)).node, {
                height: b,
                version: 1.1,
                width: a,
                xmlns: D,
              })
            return c
          }
          function W(a) {
            return a
              ? a instanceof S || a instanceof T
                ? a
                : a.tagName && 'svg' == a.tagName.toLowerCase()
                ? new V(a)
                : a.tagName &&
                  'object' == a.tagName.toLowerCase() &&
                  'image/svg+xml' == a.type
                ? new V(a.contentDocument.getElementsByTagName('svg')[0])
                : new S(a)
              : a
          }
          function X(a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
              var e = { type: a[c].type, attr: a[c].attr() },
                f = a[c].children()
              b.push(e), f.length && X(f, (e.childNodes = []))
            }
          }
          ;(b._.svgTransform2string = function (a) {
            var b = []
            return (
              (a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
                return (
                  (d = d.split(/\s*,\s*|\s+/)),
                  'rotate' == c && 1 == d.length && d.push(0, 0),
                  'scale' == c &&
                    (d.length > 2
                      ? (d = d.slice(0, 2))
                      : 2 == d.length && d.push(0, 0),
                    1 == d.length && d.push(d[0], 0, 0)),
                  'skewX' == c
                    ? b.push(['m', 1, 0, k.tan(K(d[0])), 1, 0, 0])
                    : 'skewY' == c
                    ? b.push(['m', 1, k.tan(K(d[0])), 0, 1, 0, 0])
                    : b.push([c.charAt(0)].concat(d)),
                  a
                )
              })),
              b
            )
          }),
            (b._.rgTransform = /^[a-z][\s]*-?\.?\d/i),
            (b._.transform2matrix = function (a, c) {
              var d = P(a),
                e = new b.Matrix()
              if (d)
                for (var f = 0, g = d.length; f < g; f++) {
                  var i,
                    j,
                    k,
                    l,
                    m,
                    n = d[f],
                    o = n.length,
                    p = h(n[0]).toLowerCase(),
                    q = n[0] != p,
                    r = q ? e.invert() : 0
                  't' == p && 2 == o
                    ? e.translate(n[1], 0)
                    : 't' == p && 3 == o
                    ? q
                      ? ((i = r.x(0, 0)),
                        (j = r.y(0, 0)),
                        (k = r.x(n[1], n[2])),
                        (l = r.y(n[1], n[2])),
                        e.translate(k - i, l - j))
                      : e.translate(n[1], n[2])
                    : 'r' == p
                    ? 2 == o
                      ? ((m = m || c),
                        e.rotate(n[1], m.x + m.width / 2, m.y + m.height / 2))
                      : 4 == o &&
                        (q
                          ? ((k = r.x(n[2], n[3])),
                            (l = r.y(n[2], n[3])),
                            e.rotate(n[1], k, l))
                          : e.rotate(n[1], n[2], n[3]))
                    : 's' == p
                    ? 2 == o || 3 == o
                      ? ((m = m || c),
                        e.scale(
                          n[1],
                          n[o - 1],
                          m.x + m.width / 2,
                          m.y + m.height / 2
                        ))
                      : 4 == o
                      ? q
                        ? ((k = r.x(n[2], n[3])),
                          (l = r.y(n[2], n[3])),
                          e.scale(n[1], n[1], k, l))
                        : e.scale(n[1], n[1], n[2], n[3])
                      : 5 == o &&
                        (q
                          ? ((k = r.x(n[3], n[4])),
                            (l = r.y(n[3], n[4])),
                            e.scale(n[1], n[2], k, l))
                          : e.scale(n[1], n[2], n[3], n[4]))
                    : 'm' == p &&
                      7 == o &&
                      e.add(n[1], n[2], n[3], n[4], n[5], n[6])
                }
              return e
            }),
            (b._unit2px = function (a, b, c) {
              var d = Q(a).node,
                e = {},
                f = d.querySelector('.svg---mgr')
              function g(a) {
                if (null == a) return ''
                if (a == +a) return a
                F(f, { width: a })
                try {
                  return f.getBBox().width
                } catch (b) {
                  return 0
                }
              }
              function h(a) {
                if (null == a) return ''
                if (a == +a) return a
                F(f, { height: a })
                try {
                  return f.getBBox().height
                } catch (b) {
                  return 0
                }
              }
              function i(d, f) {
                null == b
                  ? (e[d] = f(a.attr(d) || 0))
                  : d == b && (e = f(null == c ? a.attr(d) || 0 : c))
              }
              switch (
                (f ||
                  ((f = F('rect')),
                  F(f, {
                    x: -90e8,
                    y: -90e8,
                    width: 10,
                    height: 10,
                    class: 'svg---mgr',
                    fill: 'none',
                  }),
                  d.appendChild(f)),
                a.type)
              ) {
                case 'rect':
                  i('rx', g), i('ry', h)
                case 'image':
                  i('width', g), i('height', h)
                case 'text':
                  i('x', g), i('y', h)
                  break
                case 'circle':
                  i('cx', g), i('cy', h), i('r', g)
                  break
                case 'ellipse':
                  i('cx', g), i('cy', h), i('rx', g), i('ry', h)
                  break
                case 'line':
                  i('x1', g), i('x2', g), i('y1', h), i('y2', h)
                  break
                case 'marker':
                  i('refX', g),
                    i('markerWidth', g),
                    i('refY', h),
                    i('markerHeight', h)
                  break
                case 'radialGradient':
                  i('fx', g), i('fy', h)
                  break
                case 'tspan':
                  i('dx', g), i('dy', h)
                  break
                default:
                  i(b, g)
              }
              return d.removeChild(f), e
            }),
            f.doc.contains || f.doc.compareDocumentPosition,
            (b._.getSomeDefs = function (a) {
              var c =
                  (a.node.ownerSVGElement && W(a.node.ownerSVGElement)) ||
                  (a.node.parentNode && W(a.node.parentNode)) ||
                  b.select('svg') ||
                  b(0, 0),
                d = c.select('defs'),
                e = null != d && d.node
              return e || (e = U('defs', c.node).node), e
            }),
            (b._.getSomeSVG = Q),
            (b.select = function (a) {
              return (
                (a = h(a).replace(/([^\\]):/g, '$1\\:')),
                W(f.doc.querySelector(a))
              )
            }),
            (b.selectAll = function (a) {
              for (
                var c = f.doc.querySelectorAll(a),
                  d = (b.set || Array)(),
                  e = 0;
                e < c.length;
                e++
              )
                d.push(W(c[e]))
              return d
            }),
            setInterval(function () {
              for (var a in E)
                if (E[g](a)) {
                  var b = E[a],
                    c = b.node
                  ;(('svg' != b.type && !c.ownerSVGElement) ||
                    ('svg' == b.type &&
                      (!c.parentNode ||
                        ('ownerSVGElement' in c.parentNode &&
                          !c.ownerSVGElement)))) &&
                    delete E[a]
                }
            }, 10e3),
            (S.prototype.attr = function (a, b) {
              var c = this.node
              if (!a) {
                if (1 != c.nodeType) return { text: c.nodeValue }
                for (
                  var d = c.attributes, e = {}, f = 0, h = d.length;
                  f < h;
                  f++
                )
                  e[d[f].nodeName] = d[f].nodeValue
                return e
              }
              if (G(a, 'string')) {
                if (!(arguments.length > 1))
                  return eve('snap.util.getattr.' + a, this).firstDefined()
                var i = {}
                ;(i[a] = b), (a = i)
              }
              for (var j in a) a[g](j) && eve('snap.util.attr.' + j, this, a[j])
              return this
            }),
            (b.parse = function (a) {
              var b = f.doc.createDocumentFragment(),
                c = !0,
                d = f.doc.createElement('div')
              if (
                ((a = h(a)).match(/^\s*<\s*svg(?:\s|>)/) ||
                  ((a = '<svg>' + a + '</svg>'), (c = !1)),
                (d.innerHTML = a),
                (a = d.getElementsByTagName('svg')[0]))
              )
                if (c) b = a
                else for (; a.firstChild; ) b.appendChild(a.firstChild)
              return new T(b)
            }),
            (b.fragment = function () {
              for (
                var a = Array.prototype.slice.call(arguments, 0),
                  c = f.doc.createDocumentFragment(),
                  d = 0,
                  e = a.length;
                d < e;
                d++
              ) {
                var g = a[d]
                g.node && g.node.nodeType && c.appendChild(g.node),
                  g.nodeType && c.appendChild(g),
                  'string' == typeof g && c.appendChild(b.parse(g).node)
              }
              return new T(c)
            }),
            (b._.make = U),
            (b._.wrap = W),
            (V.prototype.el = function (a, b) {
              var c = U(a, this.node)
              return b && c.attr(b), c
            }),
            (S.prototype.children = function () {
              for (
                var a = [], c = this.node.childNodes, d = 0, e = c.length;
                d < e;
                d++
              )
                a[d] = b(c[d])
              return a
            }),
            (S.prototype.toJSON = function () {
              var a = []
              return X([this], a), a[0]
            }),
            eve.on('snap.util.getattr', function () {
              var a = eve.nt(),
                b = (a = a.substring(a.lastIndexOf('.') + 1)).replace(
                  /[A-Z]/g,
                  function (a) {
                    return '-' + a.toLowerCase()
                  }
                )
              return Y[g](b)
                ? this.node.ownerDocument.defaultView
                    .getComputedStyle(this.node, null)
                    .getPropertyValue(b)
                : F(this.node, a)
            })
          var Y = {
            'alignment-baseline': 0,
            'baseline-shift': 0,
            clip: 0,
            'clip-path': 0,
            'clip-rule': 0,
            color: 0,
            'color-interpolation': 0,
            'color-interpolation-filters': 0,
            'color-profile': 0,
            'color-rendering': 0,
            cursor: 0,
            direction: 0,
            display: 0,
            'dominant-baseline': 0,
            'enable-background': 0,
            fill: 0,
            'fill-opacity': 0,
            'fill-rule': 0,
            filter: 0,
            'flood-color': 0,
            'flood-opacity': 0,
            font: 0,
            'font-family': 0,
            'font-size': 0,
            'font-size-adjust': 0,
            'font-stretch': 0,
            'font-style': 0,
            'font-variant': 0,
            'font-weight': 0,
            'glyph-orientation-horizontal': 0,
            'glyph-orientation-vertical': 0,
            'image-rendering': 0,
            kerning: 0,
            'letter-spacing': 0,
            'lighting-color': 0,
            marker: 0,
            'marker-end': 0,
            'marker-mid': 0,
            'marker-start': 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            'pointer-events': 0,
            'shape-rendering': 0,
            'stop-color': 0,
            'stop-opacity': 0,
            stroke: 0,
            'stroke-dasharray': 0,
            'stroke-dashoffset': 0,
            'stroke-linecap': 0,
            'stroke-linejoin': 0,
            'stroke-miterlimit': 0,
            'stroke-opacity': 0,
            'stroke-width': 0,
            'text-anchor': 0,
            'text-decoration': 0,
            'text-rendering': 0,
            'unicode-bidi': 0,
            visibility: 0,
            'word-spacing': 0,
            'writing-mode': 0,
          }
          eve.on('snap.util.attr', function (a) {
            var b = eve.nt(),
              c = {}
            c[(b = b.substring(b.lastIndexOf('.') + 1))] = a
            var d = b.replace(/-(\w)/gi, function (a, b) {
                return b.toUpperCase()
              }),
              e = b.replace(/[A-Z]/g, function (a) {
                return '-' + a.toLowerCase()
              })
            Y[g](e)
              ? (this.node.style[d] = null == a ? '' : a)
              : F(this.node, c)
          }),
            (b.ajax = function (a, b, c, d) {
              var e = new XMLHttpRequest(),
                f = B()
              if (e) {
                if (G(b, 'function')) (d = c), (c = b), (b = null)
                else if (G(b, 'object')) {
                  var g = []
                  for (var h in b)
                    b.hasOwnProperty(h) &&
                      g.push(
                        encodeURIComponent(h) + '=' + encodeURIComponent(b[h])
                      )
                  b = g.join('&')
                }
                return (
                  e.open(b ? 'POST' : 'GET', a, !0),
                  b &&
                    (e.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                    e.setRequestHeader(
                      'Content-type',
                      'application/x-www-form-urlencoded'
                    )),
                  c &&
                    (eve.once('snap.ajax.' + f + '.0', c),
                    eve.once('snap.ajax.' + f + '.200', c),
                    eve.once('snap.ajax.' + f + '.304', c)),
                  (e.onreadystatechange = function () {
                    4 == e.readyState &&
                      eve('snap.ajax.' + f + '.' + e.status, d, e)
                  }),
                  4 == e.readyState || e.send(b),
                  e
                )
              }
            }),
            (b.load = function (a, c, d) {
              b.ajax(a, function (a) {
                var e = b.parse(a.responseText)
                d ? c.call(d, e) : c(e)
              })
            })
          var Z = function (a) {
            var b = a.getBoundingClientRect(),
              c = a.ownerDocument,
              d = c.body,
              e = c.documentElement,
              f = e.clientTop || d.clientTop || 0,
              g = e.clientLeft || d.clientLeft || 0,
              h = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
              i =
                b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g
            return { y: h, x: i }
          }
          return (
            (b.getElementByPoint = function (a, b) {
              this.canvas
              var c = f.doc.elementFromPoint(a, b)
              if (f.win.opera && 'svg' == c.tagName) {
                var d = Z(c),
                  e = c.createSVGRect()
                ;(e.x = a - d.x), (e.y = b - d.y), (e.width = e.height = 1)
                var g = c.getIntersectionList(e, null)
                g.length && (c = g[g.length - 1])
              }
              return c ? W(c) : null
            }),
            (b.plugin = function (a) {
              a(b, S, V, f, T)
            }),
            (f.win.Snap = b),
            b
          )
        })(window || this)
      w.plugin(function (a, b, c, d, e) {
        var f = b.prototype,
          g = a.is,
          h = String,
          i = a._unit2px,
          j = a._.$,
          k = a._.make,
          l = a._.getSomeDefs,
          m = a._.wrap
        function n(b, c) {
          if (null == c) {
            var d = !0
            if (
              !(c =
                'linearGradient' == b.type || 'radialGradient' == b.type
                  ? b.node.getAttribute('gradientTransform')
                  : 'pattern' == b.type
                  ? b.node.getAttribute('patternTransform')
                  : b.node.getAttribute('transform'))
            )
              return new a.Matrix()
            c = a._.svgTransform2string(c)
          } else g((c = a._.rgTransform.test(c) ? h(c).replace(/\.{3}|\u2026/g, b._.transform || '') : a._.svgTransform2string(c)), 'array') && (c = a.path ? a.path.toString.call(c) : h(c)), (b._.transform = c)
          var e = a._.transform2matrix(c, b.getBBox(1))
          if (d) return e
          b.matrix = e
        }
        ;(f.getBBox = function (b) {
          if ('tspan' == this.type)
            return a._.box(this.node.getClientRects().item(0))
          if (!a.Matrix || !a.path) return this.node.getBBox()
          var c = this,
            d = new a.Matrix()
          if (c.removed) return a._.box()
          for (; 'use' == c.type; )
            if (
              (b ||
                (d = d.add(
                  c
                    .transform()
                    .localMatrix.translate(c.attr('x') || 0, c.attr('y') || 0)
                )),
              c.original)
            )
              c = c.original
            else {
              var e = c.attr('xlink:href')
              c = c.original = c.node.ownerDocument.getElementById(
                e.substring(e.indexOf('#') + 1)
              )
            }
          var f = c._,
            g = a.path.get[c.type] || a.path.get.deflt
          try {
            if (b)
              return (
                (f.bboxwt = g
                  ? a.path.getBBox((c.realPath = g(c)))
                  : a._.box(c.node.getBBox())),
                a._.box(f.bboxwt)
              )
            return (
              (c.realPath = g(c)),
              (c.matrix = c.transform().localMatrix),
              (f.bbox = a.path.getBBox(
                a.path.map(c.realPath, d.add(c.matrix))
              )),
              a._.box(f.bbox)
            )
          } catch (h) {
            return a._.box()
          }
        }),
          (f.transform = function (b) {
            var c = this._
            if (null == b) {
              for (
                var d,
                  e = this,
                  f = new a.Matrix(this.node.getCTM()),
                  g = n(this),
                  i = [g],
                  k = new a.Matrix(),
                  l = g.toTransformString(),
                  m = h(g) == h(this.matrix) ? h(c.transform) : l;
                'svg' != e.type && (e = e.parent());

              )
                i.push(n(e))
              for (d = i.length; d--; ) k.add(i[d])
              return {
                string: m,
                globalMatrix: f,
                totalMatrix: k,
                localMatrix: g,
                diffMatrix: f.clone().add(g.invert()),
                global: f.toTransformString(),
                total: k.toTransformString(),
                local: l,
                toString: function () {
                  return this.string
                },
              }
            }
            return (
              b instanceof a.Matrix
                ? ((this.matrix = b),
                  (this._.transform = b.toTransformString()))
                : n(this, b),
              this.node &&
                ('linearGradient' == this.type || 'radialGradient' == this.type
                  ? j(this.node, { gradientTransform: this.matrix })
                  : 'pattern' == this.type
                  ? j(this.node, { patternTransform: this.matrix })
                  : j(this.node, { transform: this.matrix })),
              this
            )
          }),
          (f.parent = function () {
            return m(this.node.parentNode)
          }),
          (f.append = f.add = function (a) {
            if (a) {
              if ('set' == a.type) {
                var b = this
                return (
                  a.forEach(function (a) {
                    b.add(a)
                  }),
                  this
                )
              }
              ;(a = m(a)), this.node.appendChild(a.node), (a.paper = this.paper)
            }
            return this
          }),
          (f.appendTo = function (a) {
            return a && (a = m(a)).append(this), this
          }),
          (f.prepend = function (a) {
            if (a) {
              if ('set' == a.type) {
                var b,
                  c = this
                return (
                  a.forEach(function (a) {
                    b ? b.after(a) : c.prepend(a), (b = a)
                  }),
                  this
                )
              }
              var d = (a = m(a)).parent()
              this.node.insertBefore(a.node, this.node.firstChild),
                this.add && this.add(),
                (a.paper = this.paper),
                this.parent() && this.parent().add(),
                d && d.add()
            }
            return this
          }),
          (f.prependTo = function (a) {
            return (a = m(a)).prepend(this), this
          }),
          (f.before = function (a) {
            if ('set' == a.type) {
              var b = this
              return (
                a.forEach(function (a) {
                  var c = a.parent()
                  b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                }),
                this.parent().add(),
                this
              )
            }
            var c = (a = m(a)).parent()
            return (
              this.node.parentNode.insertBefore(a.node, this.node),
              this.parent() && this.parent().add(),
              c && c.add(),
              (a.paper = this.paper),
              this
            )
          }),
          (f.after = function (a) {
            var b = (a = m(a)).parent()
            return (
              this.node.nextSibling
                ? this.node.parentNode.insertBefore(
                    a.node,
                    this.node.nextSibling
                  )
                : this.node.parentNode.appendChild(a.node),
              this.parent() && this.parent().add(),
              b && b.add(),
              (a.paper = this.paper),
              this
            )
          }),
          (f.insertBefore = function (a) {
            a = m(a)
            var b = this.parent()
            return (
              a.node.parentNode.insertBefore(this.node, a.node),
              (this.paper = a.paper),
              b && b.add(),
              a.parent() && a.parent().add(),
              this
            )
          }),
          (f.insertAfter = function (a) {
            a = m(a)
            var b = this.parent()
            return (
              a.node.parentNode.insertBefore(this.node, a.node.nextSibling),
              (this.paper = a.paper),
              b && b.add(),
              a.parent() && a.parent().add(),
              this
            )
          }),
          (f.remove = function () {
            var a = this.parent()
            return (
              this.node.parentNode &&
                this.node.parentNode.removeChild(this.node),
              delete this.paper,
              (this.removed = !0),
              a && a.add(),
              this
            )
          }),
          (f.select = function (a) {
            return m(this.node.querySelector(a))
          }),
          (f.selectAll = function (b) {
            for (
              var c = this.node.querySelectorAll(b),
                d = (a.set || Array)(),
                e = 0;
              e < c.length;
              e++
            )
              d.push(m(c[e]))
            return d
          }),
          (f.asPX = function (a, b) {
            return null == b && (b = this.attr(a)), +i(this, a, b)
          }),
          (f.use = function () {
            var a,
              b = this.node.id
            return (
              b || ((b = this.id), j(this.node, { id: b })),
              j(
                (a =
                  'linearGradient' == this.type ||
                  'radialGradient' == this.type ||
                  'pattern' == this.type
                    ? k(this.type, this.node.parentNode)
                    : k('use', this.node.parentNode)).node,
                { 'xlink:href': '#' + b }
              ),
              (a.original = this),
              a
            )
          }),
          (f.clone = function () {
            var b = m(this.node.cloneNode(!0))
            return (
              j(b.node, 'id') && j(b.node, { id: b.id }),
              (function (b) {
                var c,
                  d = b.selectAll('*'),
                  e = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                  f = [],
                  g = {}
                function h(b, c) {
                  var d = j(b.node, c)
                  !!(d = (d = d && d.match(e)) && d[2]) &&
                    '#' == d.charAt() &&
                    (d = d.substring(1)) &&
                    (g[d] = (g[d] || []).concat(function (d) {
                      var e = {}
                      ;(e[c] = a.url(d)), j(b.node, e)
                    }))
                }
                function i(a) {
                  var b = j(a.node, 'xlink:href')
                  !!b &&
                    '#' == b.charAt() &&
                    (b = b.substring(1)) &&
                    (g[b] = (g[b] || []).concat(function (b) {
                      a.attr('xlink:href', '#' + b)
                    }))
                }
                for (var k = 0, l = d.length; k < l; k++) {
                  h((c = d[k]), 'fill'),
                    h(c, 'stroke'),
                    h(c, 'filter'),
                    h(c, 'mask'),
                    h(c, 'clip-path'),
                    i(c)
                  var m = j(c.node, 'id')
                  m && (j(c.node, { id: c.id }), f.push({ old: m, id: c.id }))
                }
                for (k = 0, l = f.length; k < l; k++) {
                  var n = g[f[k].old]
                  if (n) for (var o = 0, p = n.length; o < p; o++) n[o](f[k].id)
                }
              })(b),
              b.insertAfter(this),
              b
            )
          }),
          (f.toDefs = function () {
            return l(this).appendChild(this.node), this
          }),
          (f.pattern = f.toPattern = function (a, b, c, d) {
            var e = k('pattern', l(this))
            return (
              null == a && (a = this.getBBox()),
              g(a, 'object') &&
                'x' in a &&
                ((b = a.y), (c = a.width), (d = a.height), (a = a.x)),
              j(e.node, {
                x: a,
                y: b,
                width: c,
                height: d,
                patternUnits: 'userSpaceOnUse',
                id: e.id,
                viewBox: [a, b, c, d].join(' '),
              }),
              e.node.appendChild(this.node),
              e
            )
          }),
          (f.marker = function (a, b, c, d, e, f) {
            var h = k('marker', l(this))
            return (
              null == a && (a = this.getBBox()),
              g(a, 'object') &&
                'x' in a &&
                ((b = a.y),
                (c = a.width),
                (d = a.height),
                (e = a.refX || a.cx),
                (f = a.refY || a.cy),
                (a = a.x)),
              j(h.node, {
                viewBox: [a, b, c, d].join(' '),
                markerWidth: c,
                markerHeight: d,
                orient: 'auto',
                refX: e || 0,
                refY: f || 0,
                id: h.id,
              }),
              h.node.appendChild(this.node),
              h
            )
          })
        var o = {}
        function p(a) {
          return function () {
            var b = a ? '<' + this.type : '',
              c = this.node.attributes,
              d = this.node.childNodes
            if (a)
              for (var e = 0, f = c.length; e < f; e++)
                b +=
                  ' ' + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"'
            if (d.length) {
              for (a && (b += '>'), e = 0, f = d.length; e < f; e++)
                3 == d[e].nodeType
                  ? (b += d[e].nodeValue)
                  : 1 == d[e].nodeType && (b += m(d[e]).toString())
              a && (b += '</' + this.type + '>')
            } else a && (b += '/>')
            return b
          }
        }
        ;(f.data = function (b, c) {
          var d = (o[this.id] = o[this.id] || {})
          if (0 == arguments.length)
            return eve('snap.data.get.' + this.id, this, d, null), d
          if (1 == arguments.length) {
            if (a.is(b, 'object')) {
              for (var e in b) b.hasOwnProperty(e) && this.data(e, b[e])
              return this
            }
            return eve('snap.data.get.' + this.id, this, d[b], b), d[b]
          }
          return (d[b] = c), eve('snap.data.set.' + this.id, this, c, b), this
        }),
          (f.removeData = function (a) {
            return (
              null == a
                ? (o[this.id] = {})
                : o[this.id] && delete o[this.id][a],
              this
            )
          }),
          (f.outerSVG = f.toString = p(1)),
          (f.innerSVG = p()),
          (f.toDataURL = function () {
            if (window && window.btoa) {
              var b = this.getBBox()
              return (
                'data:image/svg+xml;base64,' +
                btoa(
                  unescape(
                    encodeURIComponent(
                      a.format(
                        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
                        {
                          x: +b.x.toFixed(3),
                          y: +b.y.toFixed(3),
                          width: +b.width.toFixed(3),
                          height: +b.height.toFixed(3),
                          contents: this.outerSVG(),
                        }
                      )
                    )
                  )
                )
              )
            }
          }),
          (e.prototype.select = f.select),
          (e.prototype.selectAll = f.selectAll)
      }),
        w.plugin(function (a, b, c, d, e) {
          var f = Object.prototype.toString,
            g = String,
            h = Math
          function i(a, b, c, d, e, g) {
            if (null == b && '[object SVGMatrix]' == f.call(a)) {
              ;(this.a = a.a),
                (this.b = a.b),
                (this.c = a.c),
                (this.d = a.d),
                (this.e = a.e),
                (this.f = a.f)
              return
            }
            null != a
              ? ((this.a = +a),
                (this.b = +b),
                (this.c = +c),
                (this.d = +d),
                (this.e = +e),
                (this.f = +g))
              : ((this.a = 1),
                (this.b = 0),
                (this.c = 0),
                (this.d = 1),
                (this.e = 0),
                (this.f = 0))
          }
          ;(function (b) {
            function c(a) {
              return a[0] * a[0] + a[1] * a[1]
            }
            function d(a) {
              var b = h.sqrt(c(a))
              a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }
            ;(b.add = function (a, b, c, d, e, f) {
              if (a && a instanceof i)
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f)
              var g = a * this.a + b * this.c,
                h = a * this.b + b * this.d
              return (
                (this.e += e * this.a + f * this.c),
                (this.f += e * this.b + f * this.d),
                (this.c = c * this.a + d * this.c),
                (this.d = c * this.b + d * this.d),
                (this.a = g),
                (this.b = h),
                this
              )
            }),
              (i.prototype.multLeft = function (a, b, c, d, e, f) {
                if (a && a instanceof i)
                  return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f)
                var g = a * this.a + c * this.b,
                  h = a * this.c + c * this.d,
                  j = a * this.e + c * this.f + e
                return (
                  (this.b = b * this.a + d * this.b),
                  (this.d = b * this.c + d * this.d),
                  (this.f = b * this.e + d * this.f + f),
                  (this.a = g),
                  (this.c = h),
                  (this.e = j),
                  this
                )
              }),
              (b.invert = function () {
                var a = this.a * this.d - this.b * this.c
                return new i(
                  this.d / a,
                  -this.b / a,
                  -this.c / a,
                  this.a / a,
                  (this.c * this.f - this.d * this.e) / a,
                  (this.b * this.e - this.a * this.f) / a
                )
              }),
              (b.clone = function () {
                return new i(this.a, this.b, this.c, this.d, this.e, this.f)
              }),
              (b.translate = function (a, b) {
                return (
                  (this.e += a * this.a + b * this.c),
                  (this.f += a * this.b + b * this.d),
                  this
                )
              }),
              (b.scale = function (a, b, c, d) {
                return (
                  null == b && (b = a),
                  (c || d) && this.translate(c, d),
                  (this.a *= a),
                  (this.b *= a),
                  (this.c *= b),
                  (this.d *= b),
                  (c || d) && this.translate(-c, -d),
                  this
                )
              }),
              (b.rotate = function (b, c, d) {
                ;(b = a.rad(b)), (c = c || 0), (d = d || 0)
                var e = +h.cos(b).toFixed(9),
                  f = +h.sin(b).toFixed(9)
                return this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
              }),
              (b.skewX = function (a) {
                return this.skew(a, 0)
              }),
              (b.skewY = function (a) {
                return this.skew(0, a)
              }),
              (b.skew = function (b, c) {
                ;(b = b || 0), (c = c || 0), (b = a.rad(b)), (c = a.rad(c))
                var d = h.tan(b).toFixed(9),
                  e = h.tan(c).toFixed(9)
                return this.add(1, e, d, 1, 0, 0)
              }),
              (b.x = function (a, b) {
                return a * this.a + b * this.c + this.e
              }),
              (b.y = function (a, b) {
                return a * this.b + b * this.d + this.f
              }),
              (b.get = function (a) {
                return +this[g.fromCharCode(97 + a)].toFixed(4)
              }),
              (b.toString = function () {
                return (
                  'matrix(' +
                  [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5),
                  ].join() +
                  ')'
                )
              }),
              (b.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
              }),
              (b.determinant = function () {
                return this.a * this.d - this.b * this.c
              }),
              (b.split = function () {
                var b = {}
                ;(b.dx = this.e), (b.dy = this.f)
                var e = [
                  [this.a, this.b],
                  [this.c, this.d],
                ]
                ;(b.scalex = h.sqrt(c(e[0]))),
                  d(e[0]),
                  (b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                  (e[1] = [
                    e[1][0] - e[0][0] * b.shear,
                    e[1][1] - e[0][1] * b.shear,
                  ]),
                  (b.scaley = h.sqrt(c(e[1]))),
                  d(e[1]),
                  (b.shear /= b.scaley),
                  0 > this.determinant() && (b.scalex = -b.scalex)
                var f = e[0][1],
                  g = e[1][1]
                return (
                  g < 0
                    ? ((b.rotate = a.deg(h.acos(g))),
                      f < 0 && (b.rotate = 360 - b.rotate))
                    : (b.rotate = a.deg(h.asin(f))),
                  (b.isSimple =
                    !+b.shear.toFixed(9) &&
                    (b.scalex.toFixed(9) == b.scaley.toFixed(9) || !b.rotate)),
                  (b.isSuperSimple =
                    !+b.shear.toFixed(9) &&
                    b.scalex.toFixed(9) == b.scaley.toFixed(9) &&
                    !b.rotate),
                  (b.noRotation = !+b.shear.toFixed(9) && !b.rotate),
                  b
                )
              }),
              (b.toTransformString = function (a) {
                var b = a || this.split()
                return +b.shear.toFixed(9)
                  ? 'm' +
                      [
                        this.get(0),
                        this.get(1),
                        this.get(2),
                        this.get(3),
                        this.get(4),
                        this.get(5),
                      ]
                  : ((b.scalex = +b.scalex.toFixed(4)),
                    (b.scaley = +b.scaley.toFixed(4)),
                    (b.rotate = +b.rotate.toFixed(4)),
                    (b.dx || b.dy
                      ? 't' + [+b.dx.toFixed(4), +b.dy.toFixed(4)]
                      : '') +
                      (b.rotate ? 'r' + [+b.rotate.toFixed(4), 0, 0] : '') +
                      (1 != b.scalex || 1 != b.scaley
                        ? 's' + [b.scalex, b.scaley, 0, 0]
                        : ''))
              })
          })(i.prototype),
            (a.Matrix = i),
            (a.matrix = function (a, b, c, d, e, f) {
              return new i(a, b, c, d, e, f)
            })
        }),
        w.plugin(function (a, b, c, d, e) {
          var f = a._.make,
            g = a._.wrap,
            h = a.is,
            i = a._.getSomeDefs,
            j = /^url\((['"]?)([^)]+)\1\)$/,
            k = a._.$,
            l = a.url,
            m = String,
            n = a._.separator
          function o(c) {
            return function (d) {
              if (
                (eve.stop(),
                d instanceof e &&
                  1 == d.node.childNodes.length &&
                  ('radialGradient' == d.node.firstChild.tagName ||
                    'linearGradient' == d.node.firstChild.tagName ||
                    'pattern' == d.node.firstChild.tagName) &&
                  ((d = d.node.firstChild), i(this).appendChild(d), (d = g(d))),
                d instanceof b)
              )
                if (
                  'radialGradient' == d.type ||
                  'linearGradient' == d.type ||
                  'pattern' == d.type
                ) {
                  d.node.id || k(d.node, { id: d.id })
                  var f = l(d.node.id)
                } else f = d.attr(c)
              else if ((f = a.color(d)).error) {
                var h = a(i(this).ownerSVGElement).gradient(d)
                h
                  ? (h.node.id || k(h.node, { id: h.id }), (f = l(h.node.id)))
                  : (f = d)
              } else f = m(f)
              var j = {}
              ;(j[c] = f), k(this.node, j), (this.node.style[c] = '')
            }
          }
          ;(a.deurl = function (a) {
            var b = String(a).match(j)
            return b ? b[2] : a
          }),
            eve.on('snap.util.attr.mask', function (a) {
              if (a instanceof b || a instanceof e) {
                if (
                  (eve.stop(),
                  a instanceof e &&
                    1 == a.node.childNodes.length &&
                    ((a = a.node.firstChild),
                    i(this).appendChild(a),
                    (a = g(a))),
                  'mask' == a.type)
                )
                  var c = a
                else (c = f('mask', i(this))).node.appendChild(a.node)
                c.node.id || k(c.node, { id: c.id }),
                  k(this.node, { mask: l(c.id) })
              }
            }),
            (function (a) {
              eve.on('snap.util.attr.clip', a),
                eve.on('snap.util.attr.clip-path', a),
                eve.on('snap.util.attr.clipPath', a)
            })(function (a) {
              if (a instanceof b || a instanceof e) {
                eve.stop()
                for (var c, d = a.node; d; ) {
                  if ('clipPath' === d.nodeName) {
                    c = new b(d)
                    break
                  }
                  if ('svg' === d.nodeName) {
                    c = void 0
                    break
                  }
                  d = d.parentNode
                }
                !c &&
                  ((c = f('clipPath', i(this))).node.appendChild(a.node),
                  c.node.id || k(c.node, { id: c.id })),
                  k(this.node, { 'clip-path': l(c.node.id || c.id) })
              }
            }),
            eve.on('snap.util.attr.fill', o('fill')),
            eve.on('snap.util.attr.stroke', o('stroke'))
          var p = /^([lr])(?:\(([^)]*)\))?(.*)$/i
          function q(a) {
            eve.stop(), a == +a && (a += 'px'), (this.node.style.fontSize = a)
          }
          function r(a) {
            for (
              var b = [], c = a.childNodes, d = 0, e = c.length;
              d < e;
              d++
            ) {
              var f = c[d]
              3 == f.nodeType && b.push(f.nodeValue),
                'tspan' == f.tagName &&
                  (1 == f.childNodes.length && 3 == f.firstChild.nodeType
                    ? b.push(f.firstChild.nodeValue)
                    : b.push(r(f)))
            }
            return b
          }
          function s() {
            return eve.stop(), this.node.style.fontSize
          }
          eve.on('snap.util.grad.parse', function (a) {
            var b = (a = m(a)).match(p)
            if (!b) return null
            var c = b[1],
              d = b[2],
              e = b[3]
            1 ==
              (d = d.split(/\s*,\s*/).map(function (a) {
                return +a == a ? +a : a
              })).length &&
              0 == d[0] &&
              (d = []),
              (e = (e = e.split('-')).map(function (a) {
                var b = { color: (a = a.split(':'))[0] }
                return a[1] && (b.offset = parseFloat(a[1])), b
              }))
            var f = e.length,
              g = 0,
              h = 0
            function i(a, b) {
              for (var c = (b - g) / (a - h), d = h; d < a; d++)
                e[d].offset = +(+g + c * (d - h)).toFixed(2)
              ;(h = a), (g = b)
            }
            f--
            for (var j = 0; j < f; j++) 'offset' in e[j] && i(j, e[j].offset)
            return (
              (e[f].offset = e[f].offset || 100),
              i(f, e[f].offset),
              { type: c, params: d, stops: e }
            )
          }),
            eve.on('snap.util.attr.d', function (b) {
              eve.stop(),
                h(b, 'array') &&
                  h(b[0], 'array') &&
                  (b = a.path.toString.call(b)),
                (b = m(b)).match(/[ruo]/i) && (b = a.path.toAbsolute(b)),
                k(this.node, { d: b })
            })(-1),
            eve.on('snap.util.attr.#text', function (a) {
              eve.stop(), (a = m(a))
              for (var b = d.doc.createTextNode(a); this.node.firstChild; )
                this.node.removeChild(this.node.firstChild)
              this.node.appendChild(b)
            })(-1),
            eve.on('snap.util.attr.path', function (a) {
              eve.stop(), this.attr({ d: a })
            })(-1),
            eve.on('snap.util.attr.class', function (a) {
              eve.stop(), (this.node.className.baseVal = a)
            })(-1),
            eve.on('snap.util.attr.viewBox', function (a) {
              var b
              ;(b =
                h(a, 'object') && 'x' in a
                  ? [a.x, a.y, a.width, a.height].join(' ')
                  : h(a, 'array')
                  ? a.join(' ')
                  : a),
                k(this.node, { viewBox: b }),
                eve.stop()
            })(-1),
            eve.on('snap.util.attr.transform', function (a) {
              this.transform(a), eve.stop()
            })(-1),
            eve.on('snap.util.attr.r', function (a) {
              'rect' == this.type &&
                (eve.stop(), k(this.node, { rx: a, ry: a }))
            })(-1),
            eve.on('snap.util.attr.textpath', function (a) {
              if ((eve.stop(), 'text' == this.type)) {
                var c, d, e
                if (!a && this.textPath) {
                  for (d = this.textPath; d.node.firstChild; )
                    this.node.appendChild(d.node.firstChild)
                  d.remove(), delete this.textPath
                  return
                }
                if (h(a, 'string')) {
                  var f = i(this),
                    j = g(f.parentNode).path(a)
                  f.appendChild(j.node), (c = j.id), j.attr({ id: c })
                } else
                  (a = g(a)) instanceof b &&
                    ((c = a.attr('id')) || ((c = a.id), a.attr({ id: c })))
                if (c)
                  if (((d = this.textPath), (e = this.node), d))
                    d.attr({ 'xlink:href': '#' + c })
                  else {
                    for (
                      d = k('textPath', { 'xlink:href': '#' + c });
                      e.firstChild;

                    )
                      d.appendChild(e.firstChild)
                    e.appendChild(d), (this.textPath = g(d))
                  }
              }
            })(-1),
            eve.on('snap.util.attr.text', function (a) {
              if ('text' == this.type) {
                for (
                  var b = this.node,
                    c = function (a) {
                      var b = k('tspan')
                      if (h(a, 'array'))
                        for (var e = 0; e < a.length; e++)
                          b.appendChild(c(a[e]))
                      else b.appendChild(d.doc.createTextNode(a))
                      return b.normalize && b.normalize(), b
                    };
                  b.firstChild;

                )
                  b.removeChild(b.firstChild)
                for (var e = c(a); e.firstChild; ) b.appendChild(e.firstChild)
              }
              eve.stop()
            })(-1),
            eve.on('snap.util.attr.fontSize', q)(-1),
            eve.on('snap.util.attr.font-size', q)(-1),
            eve.on('snap.util.getattr.transform', function () {
              return eve.stop(), this.transform()
            })(-1),
            eve.on('snap.util.getattr.textpath', function () {
              return eve.stop(), this.textPath
            })(-1),
            (function () {
              function b(b) {
                return function () {
                  eve.stop()
                  var c = d.doc.defaultView
                    .getComputedStyle(this.node, null)
                    .getPropertyValue('marker-' + b)
                  return 'none' == c
                    ? c
                    : a(d.doc.getElementById(c.match(j)[1]))
                }
              }
              function c(a) {
                return function (b) {
                  eve.stop()
                  var c = 'marker' + a.charAt(0).toUpperCase() + a.substring(1)
                  if ('' == b || !b) {
                    this.node.style[c] = 'none'
                    return
                  }
                  if ('marker' == b.type) {
                    var d = b.node.id
                    d || k(b.node, { id: b.id }), (this.node.style[c] = l(d))
                    return
                  }
                }
              }
              eve.on('snap.util.getattr.marker-end', b('end'))(-1),
                eve.on('snap.util.getattr.markerEnd', b('end'))(-1),
                eve.on('snap.util.getattr.marker-start', b('start'))(-1),
                eve.on('snap.util.getattr.markerStart', b('start'))(-1),
                eve.on('snap.util.getattr.marker-mid', b('mid'))(-1),
                eve.on('snap.util.getattr.markerMid', b('mid'))(-1),
                eve.on('snap.util.attr.marker-end', c('end'))(-1),
                eve.on('snap.util.attr.markerEnd', c('end'))(-1),
                eve.on('snap.util.attr.marker-start', c('start'))(-1),
                eve.on('snap.util.attr.markerStart', c('start'))(-1),
                eve.on('snap.util.attr.marker-mid', c('mid'))(-1),
                eve.on('snap.util.attr.markerMid', c('mid'))(-1)
            })(),
            eve.on('snap.util.getattr.r', function () {
              if (
                'rect' == this.type &&
                k(this.node, 'rx') == k(this.node, 'ry')
              )
                return eve.stop(), k(this.node, 'rx')
            })(-1),
            eve.on('snap.util.getattr.text', function () {
              if ('text' == this.type || 'tspan' == this.type) {
                eve.stop()
                var a = r(this.node)
                return 1 == a.length ? a[0] : a
              }
            })(-1),
            eve.on('snap.util.getattr.#text', function () {
              return this.node.textContent
            })(-1),
            eve.on('snap.util.getattr.fill', function (b) {
              if (!b) {
                eve.stop()
                var c = eve('snap.util.getattr.fill', this, !0).firstDefined()
                return a(a.deurl(c)) || c
              }
            })(-1),
            eve.on('snap.util.getattr.stroke', function (b) {
              if (!b) {
                eve.stop()
                var c = eve('snap.util.getattr.stroke', this, !0).firstDefined()
                return a(a.deurl(c)) || c
              }
            })(-1),
            eve.on('snap.util.getattr.viewBox', function () {
              eve.stop()
              var b = k(this.node, 'viewBox')
              return b
                ? ((b = b.split(n)), a._.box(+b[0], +b[1], +b[2], +b[3]))
                : void 0
            })(-1),
            eve.on('snap.util.getattr.points', function () {
              var a = k(this.node, 'points')
              return (eve.stop(), a) ? a.split(n) : void 0
            })(-1),
            eve.on('snap.util.getattr.path', function () {
              var a = k(this.node, 'd')
              return eve.stop(), a
            })(-1),
            eve.on('snap.util.getattr.class', function () {
              return this.node.className.baseVal
            })(-1),
            eve.on('snap.util.getattr.fontSize', s)(-1),
            eve.on('snap.util.getattr.font-size', s)(-1)
        }),
        w.plugin(function (a, b, c, d, e) {
          var f = /\S+/g,
            g = String,
            h = b.prototype
          ;(h.addClass = function (a) {
            var b,
              c,
              d,
              e = g(a || '').match(f) || [],
              h = this.node,
              i = h.className.baseVal,
              j = i.match(f) || []
            if (e.length) {
              for (; (c = e[b++]); ) ~j.indexOf(c) || j.push(c)
              i != (d = j.join(' ')) && (h.className.baseVal = d)
            }
            return this
          }),
            (h.removeClass = function (a) {
              var b,
                c,
                d,
                e,
                h = g(a || '').match(f) || [],
                i = this.node,
                j = i.className.baseVal,
                k = j.match(f) || []
              if (k.length) {
                for (; (d = h[b++]); ) ~(c = k.indexOf(d)) && k.splice(c, 1)
                j != (e = k.join(' ')) && (i.className.baseVal = e)
              }
              return this
            }),
            (h.hasClass = function (a) {
              return !!~(this.node.className.baseVal.match(f) || []).indexOf(a)
            }),
            (h.toggleClass = function (a, b) {
              if (null != b) return b ? this.addClass(a) : this.removeClass(a)
              for (
                var c,
                  d,
                  e,
                  g,
                  h = (a || '').match(f) || [],
                  i = this.node,
                  j = i.className.baseVal,
                  k = j.match(f) || [];
                (e = h[c++]);

              )
                ~(d = k.indexOf(e)) ? k.splice(d, 1) : k.push(e)
              return j != (g = k.join(' ')) && (i.className.baseVal = g), this
            })
        }),
        w.plugin(function (a, b, c, d, e) {
          var f = {
              '+': function (a, b) {
                return a + b
              },
              '-': function (a, b) {
                return a - b
              },
              '/': function (a, b) {
                return a / b
              },
              '*': function (a, b) {
                return a * b
              },
            },
            g = String,
            h = /[a-z]+$/i,
            i = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/
          function j(a) {
            return a
          }
          eve.on('snap.util.attr', function (a) {
            var b = g(a).match(i)
            if (b) {
              var c = eve.nt(),
                d = c.substring(c.lastIndexOf('.') + 1),
                e = this.attr(d),
                j = {}
              eve.stop()
              var k = b[3] || '',
                l = e.match(h),
                m = f[b[1]]
              if (
                (l && l == k
                  ? (a = m(parseFloat(e), +b[2]))
                  : ((e = this.asPX(d)),
                    (a = m(this.asPX(d), this.asPX(d, b[2] + k)))),
                isNaN(e) || isNaN(a))
              )
                return
              ;(j[d] = a), this.attr(j)
            }
          })(-10),
            eve.on('snap.util.equal', function (a, b) {
              var c = g(this.attr(a) || ''),
                d = g(b).match(i)
              if (d) {
                eve.stop()
                var e,
                  k = d[3] || '',
                  l = c.match(h),
                  m = f[d[1]]
                return l && l == k
                  ? {
                      from: parseFloat(c),
                      to: m(parseFloat(c), +d[2]),
                      f:
                        ((e = l),
                        function (a) {
                          return +a.toFixed(3) + e
                        }),
                    }
                  : {
                      from: (c = this.asPX(a)),
                      to: m(c, this.asPX(a, d[2] + k)),
                      f: j,
                    }
              }
            })(-10)
        }),
        w.plugin(function (a, b, c, d, e) {
          var f = c.prototype,
            g = a.is
          ;(f.rect = function (a, b, c, d, e, f) {
            var h
            return (
              null == f && (f = e),
              g(a, 'object') && '[object Object]' == a
                ? (h = a)
                : null != a &&
                  ((h = { x: a, y: b, width: c, height: d }),
                  null != e && ((h.rx = e), (h.ry = f))),
              this.el('rect', h)
            )
          }),
            (f.circle = function (a, b, c) {
              var d
              return (
                g(a, 'object') && '[object Object]' == a
                  ? (d = a)
                  : null != a && (d = { cx: a, cy: b, r: c }),
                this.el('circle', d)
              )
            })
          var h = (function () {
            function a() {
              this.parentNode.removeChild(this)
            }
            return function (b, c) {
              var e = d.doc.createElement('img'),
                f = d.doc.body
              ;(e.style.cssText = 'position:absolute;left:-9999em;top:-9999em'),
                (e.onload = function () {
                  c.call(e), (e.onload = e.onerror = null), f.removeChild(e)
                }),
                (e.onerror = a),
                f.appendChild(e),
                (e.src = b)
            }
          })()
          ;(f.image = function (b, c, d, e, f) {
            var i = this.el('image')
            if (g(b, 'object') && 'src' in b) i.attr(b)
            else if (null != b) {
              var j = { 'xlink:href': b, preserveAspectRatio: 'none' }
              null != c && null != d && ((j.x = c), (j.y = d)),
                null != e && null != f
                  ? ((j.width = e), (j.height = f))
                  : h(b, function () {
                      a._.$(i.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight,
                      })
                    }),
                a._.$(i.node, j)
            }
            return i
          }),
            (f.ellipse = function (a, b, c, d) {
              var e
              return (
                g(a, 'object') && '[object Object]' == a
                  ? (e = a)
                  : null != a && (e = { cx: a, cy: b, rx: c, ry: d }),
                this.el('ellipse', e)
              )
            }),
            (f.path = function (a) {
              var b
              return (
                g(a, 'object') && !g(a, 'array')
                  ? (b = a)
                  : a && (b = { d: a }),
                this.el('path', b)
              )
            }),
            (f.group = f.g = function (a) {
              var b = this.el('g')
              return (
                1 == arguments.length && a && !a.type
                  ? b.attr(a)
                  : arguments.length &&
                    b.add(Array.prototype.slice.call(arguments, 0)),
                b
              )
            }),
            (f.svg = function (a, b, c, d, e, f, h, i) {
              var j = {}
              return (
                g(a, 'object') && null == b
                  ? (j = a)
                  : (null != a && (j.x = a),
                    null != b && (j.y = b),
                    null != c && (j.width = c),
                    null != d && (j.height = d),
                    null != e &&
                      null != f &&
                      null != h &&
                      null != i &&
                      (j.viewBox = [e, f, h, i])),
                this.el('svg', j)
              )
            }),
            (f.mask = function (a) {
              var b = this.el('mask')
              return (
                1 == arguments.length && a && !a.type
                  ? b.attr(a)
                  : arguments.length &&
                    b.add(Array.prototype.slice.call(arguments, 0)),
                b
              )
            }),
            (f.ptrn = function (a, b, c, d, e, f, h, i) {
              if (g(a, 'object')) var j = a
              else
                (j = { patternUnits: 'userSpaceOnUse' }),
                  a && (j.x = a),
                  b && (j.y = b),
                  null != c && (j.width = c),
                  null != d && (j.height = d),
                  null != e && null != f && null != h && null != i
                    ? (j.viewBox = [e, f, h, i])
                    : (j.viewBox = [a || 0, b || 0, c || 0, d || 0])
              return this.el('pattern', j)
            }),
            (f.use = function (c) {
              return null != c
                ? (c instanceof b &&
                    (c.attr('id') || c.attr({ id: a._.id(c) }),
                    (c = c.attr('id'))),
                  '#' == String(c).charAt() && (c = c.substring(1)),
                  this.el('use', { 'xlink:href': '#' + c }))
                : b.prototype.use.call(this)
            }),
            (f.symbol = function (a, b, c, d) {
              var e = {}
              return (
                null != a &&
                  null != b &&
                  null != c &&
                  null != d &&
                  (e.viewBox = [a, b, c, d]),
                this.el('symbol', e)
              )
            }),
            (f.text = function (a, b, c) {
              var d = {}
              return (
                g(a, 'object')
                  ? (d = a)
                  : null != a && (d = { x: a, y: b, text: c || '' }),
                this.el('text', d)
              )
            }),
            (f.line = function (a, b, c, d) {
              var e = {}
              return (
                g(a, 'object')
                  ? (e = a)
                  : null != a && (e = { x1: a, x2: c, y1: b, y2: d }),
                this.el('line', e)
              )
            }),
            (f.polyline = function (a) {
              arguments.length > 1 &&
                (a = Array.prototype.slice.call(arguments, 0))
              var b = {}
              return (
                g(a, 'object') && !g(a, 'array')
                  ? (b = a)
                  : null != a && (b = { points: a }),
                this.el('polyline', b)
              )
            }),
            (f.polygon = function (a) {
              arguments.length > 1 &&
                (a = Array.prototype.slice.call(arguments, 0))
              var b = {}
              return (
                g(a, 'object') && !g(a, 'array')
                  ? (b = a)
                  : null != a && (b = { points: a }),
                this.el('polygon', b)
              )
            }),
            (function () {
              var b = a._.$
              function c() {
                return this.selectAll('stop')
              }
              function d(c, d) {
                var e = b('stop'),
                  f = { offset: +d + '%' }
                ;(c = a.color(c)),
                  (f['stop-color'] = c.hex),
                  c.opacity < 1 && (f['stop-opacity'] = c.opacity),
                  b(e, f)
                for (var g, h = this.stops(), i = 0; i < h.length; i++)
                  if (parseFloat(h[i].attr('offset')) > d) {
                    this.node.insertBefore(e, h[i].node), (g = !0)
                    break
                  }
                return g || this.node.appendChild(e), this
              }
              function e() {
                if ('linearGradient' == this.type) {
                  var c = b(this.node, 'x1') || 0,
                    d = b(this.node, 'x2') || 1,
                    e = b(this.node, 'y1') || 0,
                    f = b(this.node, 'y2') || 0
                  return a._.box(c, e, math.abs(d - c), math.abs(f - e))
                }
                var g = this.node.cx || 0.5,
                  h = this.node.cy || 0.5,
                  i = this.node.r || 0
                return a._.box(g - i, h - i, 2 * i, 2 * i)
              }
              function g(b) {
                var c = b,
                  d = this.stops()
                if (
                  ('string' == typeof b &&
                    (c = eve(
                      'snap.util.grad.parse',
                      null,
                      'l(0,0,0,1)' + b
                    ).firstDefined().stops),
                  a.is(c, 'array'))
                ) {
                  for (var e = 0; e < d.length; e++)
                    if (c[e]) {
                      var f = a.color(c[e].color),
                        g = { offset: c[e].offset + '%' }
                      ;(g['stop-color'] = f.hex),
                        f.opacity < 1 && (g['stop-opacity'] = f.opacity),
                        d[e].attr(g)
                    } else d[e].remove()
                  for (e = d.length; e < c.length; e++)
                    this.addStop(c[e].color, c[e].offset)
                  return this
                }
              }
              function h(f, h, i, j, k) {
                var l = a._.make('linearGradient', f)
                return (
                  (l.stops = c),
                  (l.addStop = d),
                  (l.getBBox = e),
                  (l.setStops = g),
                  null != h && b(l.node, { x1: h, y1: i, x2: j, y2: k }),
                  l
                )
              }
              function i(f, g, h, i, j, k) {
                var l = a._.make('radialGradient', f)
                return (
                  (l.stops = c),
                  (l.addStop = d),
                  (l.getBBox = e),
                  null != g && b(l.node, { cx: g, cy: h, r: i }),
                  null != j && null != k && b(l.node, { fx: j, fy: k }),
                  l
                )
              }
              ;(f.gradient = function (a) {
                return (function (a, c) {
                  var d,
                    e = eve('snap.util.grad.parse', null, c).firstDefined()
                  if (!e) return null
                  e.params.unshift(a),
                    (d =
                      'l' == e.type.toLowerCase()
                        ? h.apply(0, e.params)
                        : i.apply(0, e.params)),
                    e.type != e.type.toLowerCase() &&
                      b(d.node, { gradientUnits: 'userSpaceOnUse' })
                  for (var f = e.stops, g = f.length, j = 0; j < g; j++) {
                    var k = f[j]
                    d.addStop(k.color, k.offset)
                  }
                  return d
                })(this.defs, a)
              }),
                (f.gradientLinear = function (a, b, c, d) {
                  return h(this.defs, a, b, c, d)
                }),
                (f.gradientRadial = function (a, b, c, d, e) {
                  return i(this.defs, a, b, c, d, e)
                }),
                (f.toString = function () {
                  var b = this.node.ownerDocument,
                    c = b.createDocumentFragment(),
                    d = b.createElement('div'),
                    e = this.node.cloneNode(!0)
                  return (
                    c.appendChild(d),
                    d.appendChild(e),
                    a._.$(e, { xmlns: 'http://www.w3.org/2000/svg' }),
                    d.innerHTML,
                    c.removeChild(c.firstChild),
                    d.innerHTML
                  )
                }),
                (f.toDataURL = function () {
                  if (window && window.btoa)
                    return (
                      'data:image/svg+xml;base64,' +
                      btoa(unescape(encodeURIComponent(this)))
                    )
                }),
                (f.clear = function () {
                  for (var a, b = this.node.firstChild; b; )
                    (a = b.nextSibling),
                      'defs' != b.tagName
                        ? b.parentNode.removeChild(b)
                        : f.clear.call({ node: b }),
                      (b = a)
                })
            })()
        }),
        w.plugin(function (a, b, c, d) {
          var e = b.prototype,
            f = a.is,
            g = a._.clone,
            h = /,?([a-z]),?/gi,
            i = parseFloat,
            j = Math,
            k = j.PI,
            l = j.min,
            m = j.max,
            n = j.pow,
            o = j.abs
          function p(a) {
            var b = (p.ps = p.ps || {})
            return (
              b[a] ? (b[a].sleep = 100) : (b[a] = { sleep: 100 }),
              setTimeout(function () {
                for (var c in b)
                  b.hasOwnProperty(c) &&
                    c != a &&
                    (b[c].sleep--, b[c].sleep || delete b[c])
              }),
              b[a]
            )
          }
          function q(a, b, c, d) {
            return (
              null == a && (a = b = c = d = 0),
              null == b &&
                ((b = a.y), (c = a.width), (d = a.height), (a = a.x)),
              {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: j.min(c, d) / 2,
                r2: j.max(c, d) / 2,
                r0: j.sqrt(c * c + d * d) / 2,
                path: J(a, b, c, d),
                vb: [a, b, c, d].join(' '),
              }
            )
          }
          function r() {
            return this.join(',').replace(h, '$1')
          }
          function s(a) {
            var b = g(a)
            return (b.toString = r), b
          }
          function t(a, b, c, d, e, f, g, h, i) {
            return null == i
              ? D(a, b, c, d, e, f, g, h)
              : y(a, b, c, d, e, f, g, h, E(a, b, c, d, e, f, g, h, i))
          }
          function u(c, d) {
            function e(a) {
              return +(+a).toFixed(3)
            }
            return a._.cacher(
              function (a, f, g) {
                a instanceof b && (a = a.attr('d')), (a = R(a))
                for (
                  var h, i, j, k, l, m = '', n = {}, o = 0, p = 0, q = a.length;
                  p < q;
                  p++
                ) {
                  if ('M' == (j = a[p])[0]) (h = +j[1]), (i = +j[2])
                  else {
                    if (
                      o + (k = t(h, i, j[1], j[2], j[3], j[4], j[5], j[6])) >
                      f
                    ) {
                      if (d && !n.start) {
                        if (
                          ((m += [
                            'C' +
                              e(
                                (l = t(
                                  h,
                                  i,
                                  j[1],
                                  j[2],
                                  j[3],
                                  j[4],
                                  j[5],
                                  j[6],
                                  f - o
                                )).start.x
                              ),
                            e(l.start.y),
                            e(l.m.x),
                            e(l.m.y),
                            e(l.x),
                            e(l.y),
                          ]),
                          g)
                        )
                          return m
                        ;(n.start = m),
                          (m = [
                            'M' + e(l.x),
                            e(l.y) + 'C' + e(l.n.x),
                            e(l.n.y),
                            e(l.end.x),
                            e(l.end.y),
                            e(j[5]),
                            e(j[6]),
                          ].join()),
                          (o += k),
                          (h = +j[5]),
                          (i = +j[6])
                        continue
                      }
                      if (!c && !d)
                        return (l = t(
                          h,
                          i,
                          j[1],
                          j[2],
                          j[3],
                          j[4],
                          j[5],
                          j[6],
                          f - o
                        ))
                    }
                    ;(o += k), (h = +j[5]), (i = +j[6])
                  }
                  m += j.shift() + j
                }
                return (
                  (n.end = m),
                  (l = c
                    ? o
                    : d
                    ? n
                    : y(h, i, j[0], j[1], j[2], j[3], j[4], j[5], 1))
                )
              },
              null,
              a._.clone
            )
          }
          var v = u(1),
            w = u(),
            x = u(0, 1)
          function y(a, b, c, d, e, f, g, h, i) {
            var l = 1 - i,
              m = n(l, 3),
              o = n(l, 2),
              p = i * i,
              q = p * i,
              r = a + 2 * i * (c - a) + p * (e - 2 * c + a),
              s = b + 2 * i * (d - b) + p * (f - 2 * d + b),
              t = c + 2 * i * (e - c) + p * (g - 2 * e + c),
              u = d + 2 * i * (f - d) + p * (h - 2 * f + d),
              v = 90 - (180 * j.atan2(r - t, s - u)) / k
            return {
              x: m * a + 3 * o * i * c + 3 * l * i * i * e + q * g,
              y: m * b + 3 * o * i * d + 3 * l * i * i * f + q * h,
              m: { x: r, y: s },
              n: { x: t, y: u },
              start: { x: l * a + i * c, y: l * b + i * d },
              end: { x: l * e + i * g, y: l * f + i * h },
              alpha: v,
            }
          }
          function z(b, c, d, e, f, g, h, i) {
            a.is(b, 'array') || (b = [b, c, d, e, f, g, h, i])
            var j = Q.apply(null, b)
            return q(j.min.x, j.min.y, j.max.x - j.min.x, j.max.y - j.min.y)
          }
          function A(a, b, c) {
            return (
              b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
            )
          }
          function B(a, b) {
            return (
              (a = q(a)),
              (b = q(b)),
              A(b, a.x, a.y) ||
                A(b, a.x2, a.y) ||
                A(b, a.x, a.y2) ||
                A(b, a.x2, a.y2) ||
                A(a, b.x, b.y) ||
                A(a, b.x2, b.y) ||
                A(a, b.x, b.y2) ||
                A(a, b.x2, b.y2) ||
                (((a.x < b.x2 && a.x > b.x) || (b.x < a.x2 && b.x > a.x)) &&
                  ((a.y < b.y2 && a.y > b.y) || (b.y < a.y2 && b.y > a.y)))
            )
          }
          function C(a, b, c, d, e) {
            return (
              a *
                (a * (-3 * b + 9 * c - 9 * d + 3 * e) +
                  6 * b -
                  12 * c +
                  6 * d) -
              3 * b +
              3 * c
            )
          }
          function D(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1)
            for (
              var k = (i = i > 1 ? 1 : i < 0 ? 0 : i) / 2,
                l = [
                  -0.1252,
                  0.1252,
                  -0.3678,
                  0.3678,
                  -0.5873,
                  0.5873,
                  -0.7699,
                  0.7699,
                  -0.9041,
                  0.9041,
                  -0.9816,
                  0.9816,
                ],
                m = [
                  0.2491,
                  0.2491,
                  0.2335,
                  0.2335,
                  0.2032,
                  0.2032,
                  0.1601,
                  0.1601,
                  0.1069,
                  0.1069,
                  0.0472,
                  0.0472,
                ],
                n = 0,
                o = 0;
              o < 12;
              o++
            ) {
              var p = k * l[o] + k,
                q = C(p, a, c, e, g),
                r = C(p, b, d, f, h),
                s = q * q + r * r
              n += m[o] * j.sqrt(s)
            }
            return k * n
          }
          function E(a, b, c, d, e, f, g, h, i) {
            if (!(i < 0 || D(a, b, c, d, e, f, g, h) < i)) {
              var j,
                k = 0.5,
                l = 1 - k
              for (j = D(a, b, c, d, e, f, g, h, l); o(j - i) > 0.01; )
                j = D(
                  a,
                  b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  (l += (j < i ? 1 : -1) * (k /= 2))
                )
              return l
            }
          }
          function F(a, b, c, d, e, f, g, h) {
            if (
              !(
                m(a, c) < l(e, g) ||
                l(a, c) > m(e, g) ||
                m(b, d) < l(f, h) ||
                l(b, d) > m(f, h)
              )
            ) {
              var i = (a - c) * (f - h) - (b - d) * (e - g)
              if (i) {
                var j =
                    ((a * d - b * c) * (e - g) - (a - c) * (e * h - f * g)) / i,
                  k =
                    ((a * d - b * c) * (f - h) - (b - d) * (e * h - f * g)) / i,
                  n = +j.toFixed(2),
                  o = +k.toFixed(2)
                if (
                  !(
                    n < +l(a, c).toFixed(2) ||
                    n > +m(a, c).toFixed(2) ||
                    n < +l(e, g).toFixed(2) ||
                    n > +m(e, g).toFixed(2) ||
                    o < +l(b, d).toFixed(2) ||
                    o > +m(b, d).toFixed(2) ||
                    o < +l(f, h).toFixed(2) ||
                    o > +m(f, h).toFixed(2)
                  )
                )
                  return { x: j, y: k }
              }
            }
          }
          function G(a, b, c) {
            var d = z(a),
              e = z(b)
            if (!B(d, e)) return c ? 0 : []
            for (
              var f = D.apply(0, a),
                g = D.apply(0, b),
                h = ~~(f / 8),
                i = ~~(g / 8),
                j = [],
                k = [],
                l = {},
                m = c ? 0 : [],
                n = 0;
              n < h + 1;
              n++
            ) {
              var p = y.apply(0, a.concat(n / h))
              j.push({ x: p.x, y: p.y, t: n / h })
            }
            for (n = 0; n < i + 1; n++)
              (p = y.apply(0, b.concat(n / i))),
                k.push({ x: p.x, y: p.y, t: n / i })
            for (n = 0; n < h; n++)
              for (var q = 0; q < i; q++) {
                var r = j[n],
                  s = j[n + 1],
                  t = k[q],
                  u = k[q + 1],
                  v = 0.001 > o(s.x - r.x) ? 'y' : 'x',
                  w = 0.001 > o(u.x - t.x) ? 'y' : 'x',
                  x = F(r.x, r.y, s.x, s.y, t.x, t.y, u.x, u.y)
                if (x) {
                  if (l[x.x.toFixed(4)] == x.y.toFixed(4)) continue
                  l[x.x.toFixed(4)] = x.y.toFixed(4)
                  var A = r.t + o((x[v] - r[v]) / (s[v] - r[v])) * (s.t - r.t),
                    C = t.t + o((x[w] - t[w]) / (u[w] - t[w])) * (u.t - t.t)
                  A >= 0 &&
                    A <= 1 &&
                    C >= 0 &&
                    C <= 1 &&
                    (c ? m++ : m.push({ x: x.x, y: x.y, t1: A, t2: C }))
                }
              }
            return m
          }
          function H(a, b, c) {
            ;(a = R(a)), (b = R(b))
            for (
              var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n = c ? 0 : [],
                o = 0,
                p = a.length;
              o < p;
              o++
            ) {
              var q = a[o]
              if ('M' == q[0]) (d = h = q[1]), (e = i = q[2])
              else {
                'C' == q[0]
                  ? ((d = (l = [d, e].concat(q.slice(1)))[6]), (e = l[7]))
                  : ((l = [d, e, d, e, h, i, h, i]), (d = h), (e = i))
                for (var r = 0, s = b.length; r < s; r++) {
                  var t = b[r]
                  if ('M' == t[0]) (f = j = t[1]), (g = k = t[2])
                  else {
                    'C' == t[0]
                      ? ((f = (m = [f, g].concat(t.slice(1)))[6]), (g = m[7]))
                      : ((m = [f, g, f, g, j, k, j, k]), (f = j), (g = k))
                    var u = G(l, m, c)
                    if (c) n += u
                    else {
                      for (var v = 0, w = u.length; v < w; v++)
                        (u[v].segment1 = o),
                          (u[v].segment2 = r),
                          (u[v].bez1 = l),
                          (u[v].bez2 = m)
                      n = n.concat(u)
                    }
                  }
                }
              }
            }
            return n
          }
          function I(a) {
            var b = p(a)
            if (b.bbox) return g(b.bbox)
            if (!a) return q()
            a = R(a)
            for (
              var c, d = 0, e = 0, f = [], h = [], i = 0, j = a.length;
              i < j;
              i++
            )
              if ('M' == (c = a[i])[0])
                (d = c[1]), (e = c[2]), f.push(d), h.push(e)
              else {
                var k = Q(d, e, c[1], c[2], c[3], c[4], c[5], c[6])
                ;(f = f.concat(k.min.x, k.max.x)),
                  (h = h.concat(k.min.y, k.max.y)),
                  (d = c[5]),
                  (e = c[6])
              }
            var n = l.apply(0, f),
              o = l.apply(0, h),
              r = m.apply(0, f),
              s = m.apply(0, h),
              t = q(n, o, r - n, s - o)
            return (b.bbox = g(t)), t
          }
          function J(a, b, c, d, e) {
            if (e)
              return [
                ['M', +a + +e, b],
                ['l', c - 2 * e, 0],
                ['a', e, e, 0, 0, 1, e, e],
                ['l', 0, d - 2 * e],
                ['a', e, e, 0, 0, 1, -e, e],
                ['l', 2 * e - c, 0],
                ['a', e, e, 0, 0, 1, -e, -e],
                ['l', 0, 2 * e - d],
                ['a', e, e, 0, 0, 1, e, -e],
                ['z'],
              ]
            var f = [['M', a, b], ['l', c, 0], ['l', 0, d], ['l', -c, 0], ['z']]
            return (f.toString = r), f
          }
          function K(a, b, c, d, e) {
            if (
              (null == e && null == d && (d = c),
              (a = +a),
              (b = +b),
              (c = +c),
              (d = +d),
              null != e)
            )
              var f = Math.PI / 180,
                g = a + c * Math.cos(-d * f),
                h = a + c * Math.cos(-e * f),
                i = b + c * Math.sin(-d * f),
                j = b + c * Math.sin(-e * f),
                k = [
                  ['M', g, i],
                  ['A', c, c, 0, +(e - d > 180), 0, h, j],
                ]
            else
              k = [
                ['M', a, b],
                ['m', 0, -d],
                ['a', c, d, 0, 1, 1, 0, 2 * d],
                ['a', c, d, 0, 1, 1, 0, -2 * d],
                ['z'],
              ]
            return (k.toString = r), k
          }
          var L = a._unit2px
          function M(b) {
            var c = p(b)
            if (c.abs) return s(c.abs)
            if (
              ((f(b, 'array') && f(b && b[0], 'array')) ||
                (b = a.parsePathString(b)),
              !b || !b.length)
            )
              return [['M', 0, 0]]
            var d,
              e = [],
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0
            'M' == b[0][0] &&
              ((g = +b[0][1]),
              (h = +b[0][2]),
              (i = g),
              (j = h),
              k++,
              (e[0] = ['M', g, h]))
            for (
              var l,
                m,
                n =
                  3 == b.length &&
                  'M' == b[0][0] &&
                  'R' == b[1][0].toUpperCase() &&
                  'Z' == b[2][0].toUpperCase(),
                o = k,
                q = b.length;
              o < q;
              o++
            ) {
              if ((e.push((l = [])), (d = (m = b[o])[0]) != d.toUpperCase()))
                switch (((l[0] = d.toUpperCase()), l[0])) {
                  case 'A':
                    ;(l[1] = m[1]),
                      (l[2] = m[2]),
                      (l[3] = m[3]),
                      (l[4] = m[4]),
                      (l[5] = m[5]),
                      (l[6] = +m[6] + g),
                      (l[7] = +m[7] + h)
                    break
                  case 'V':
                    l[1] = +m[1] + h
                    break
                  case 'H':
                    l[1] = +m[1] + g
                    break
                  case 'R':
                    for (
                      var t = [g, h].concat(m.slice(1)), u = 2, v = t.length;
                      u < v;
                      u++
                    )
                      (t[u] = +t[u] + g), (t[++u] = +t[u] + h)
                    e.pop(), (e = e.concat(S(t, n)))
                    break
                  case 'O':
                    e.pop(),
                      (t = K(g, h, m[1], m[2])).push(t[0]),
                      (e = e.concat(t))
                    break
                  case 'U':
                    e.pop(),
                      (e = e.concat(K(g, h, m[1], m[2], m[3]))),
                      (l = ['U'].concat(e[e.length - 1].slice(-2)))
                    break
                  case 'M':
                    ;(i = +m[1] + g), (j = +m[2] + h)
                  default:
                    for (u = 1, v = m.length; u < v; u++)
                      l[u] = +m[u] + (u % 2 ? g : h)
                }
              else if ('R' == d)
                (t = [g, h].concat(m.slice(1))),
                  e.pop(),
                  (e = e.concat(S(t, n))),
                  (l = ['R'].concat(m.slice(-2)))
              else if ('O' == d)
                e.pop(), (t = K(g, h, m[1], m[2])).push(t[0]), (e = e.concat(t))
              else if ('U' == d)
                e.pop(),
                  (e = e.concat(K(g, h, m[1], m[2], m[3]))),
                  (l = ['U'].concat(e[e.length - 1].slice(-2)))
              else for (var w = 0, x = m.length; w < x; w++) l[w] = m[w]
              if ('O' != (d = d.toUpperCase()))
                switch (l[0]) {
                  case 'Z':
                    ;(g = +i), (h = +j)
                    break
                  case 'H':
                    g = l[1]
                    break
                  case 'V':
                    h = l[1]
                    break
                  case 'M':
                    ;(i = l[l.length - 2]), (j = l[l.length - 1])
                  default:
                    ;(g = l[l.length - 2]), (h = l[l.length - 1])
                }
            }
            return (e.toString = r), (c.abs = s(e)), e
          }
          function N(a, b, c, d) {
            return [a, b, c, d, c, d]
          }
          function O(a, b, c, d, e, f) {
            var g = 1 / 3,
              h = 2 / 3
            return [
              g * a + h * c,
              g * b + h * d,
              g * e + h * c,
              g * f + h * d,
              e,
              f,
            ]
          }
          function P(b, c, d, e, f, g, h, i, l, m) {
            var n,
              p = (120 * k) / 180,
              q = (k / 180) * (+f || 0),
              r = [],
              s = a._.cacher(function (a, b, c) {
                var d = a * j.cos(c) - b * j.sin(c),
                  e = a * j.sin(c) + b * j.cos(c)
                return { x: d, y: e }
              })
            if (!d || !e) return [b, c, i, l, i, l]
            if (m) (B = m[0]), (C = m[1]), (z = m[2]), (A = m[3])
            else {
              ;(b = (n = s(b, c, -q)).x),
                (c = n.y),
                (n = s(i, l, -q)),
                (i = n.x),
                (l = n.y),
                j.cos((k / 180) * f),
                j.sin((k / 180) * f)
              var t = (b - i) / 2,
                u = (c - l) / 2,
                v = (t * t) / (d * d) + (u * u) / (e * e)
              v > 1 && ((d *= v = j.sqrt(v)), (e *= v))
              var w = d * d,
                x = e * e,
                y =
                  (g == h ? -1 : 1) *
                  j.sqrt(
                    o((w * x - w * u * u - x * t * t) / (w * u * u + x * t * t))
                  ),
                z = (y * d * u) / e + (b + i) / 2,
                A = (-(y * e) * t) / d + (c + l) / 2,
                B = j.asin(((c - A) / e).toFixed(9)),
                C = j.asin(((l - A) / e).toFixed(9))
              ;(B = b < z ? k - B : B),
                (C = i < z ? k - C : C),
                B < 0 && (B = 2 * k + B),
                C < 0 && (C = 2 * k + C),
                h && B > C && (B -= 2 * k),
                !h && C > B && (C -= 2 * k)
            }
            var D = C - B
            if (o(D) > p) {
              var E = C,
                F = i,
                G = l
              ;(C = B + p * (h && C > B ? 1 : -1)),
                (i = z + d * j.cos(C)),
                (l = A + e * j.sin(C)),
                (r = P(i, l, d, e, f, 0, h, F, G, [C, E, z, A]))
            }
            D = C - B
            var H = j.cos(B),
              I = j.sin(B),
              J = j.cos(C),
              K = j.sin(C),
              L = j.tan(D / 4),
              M = (4 / 3) * d * L,
              N = (4 / 3) * e * L,
              O = [b, c],
              Q = [b + M * I, c - N * H],
              R = [i + M * K, l - N * J],
              S = [i, l]
            if (((Q[0] = 2 * O[0] - Q[0]), (Q[1] = 2 * O[1] - Q[1]), m))
              return [Q, R, S].concat(r)
            r = [Q, R, S].concat(r).join().split(',')
            for (var T = [], U = 0, V = r.length; U < V; U++)
              T[U] = U % 2 ? s(r[U - 1], r[U], q).y : s(r[U], r[U + 1], q).x
            return T
          }
          function Q(a, b, c, d, e, f, g, h) {
            for (
              var i, k, n, p, q, r, s, t, u = [], v = [[], []], w = 0;
              w < 2;
              ++w
            ) {
              if (
                (0 == w
                  ? ((k = 6 * a - 12 * c + 6 * e),
                    (i = -3 * a + 9 * c - 9 * e + 3 * g),
                    (n = 3 * c - 3 * a))
                  : ((k = 6 * b - 12 * d + 6 * f),
                    (i = -3 * b + 9 * d - 9 * f + 3 * h),
                    (n = 3 * d - 3 * b)),
                0.000000000001 > o(i))
              ) {
                if (0.000000000001 > o(k)) continue
                0 < (p = -n / k) && p < 1 && u.push(p)
                continue
              }
              ;(s = k * k - 4 * n * i),
                (t = j.sqrt(s)),
                !(s < 0) &&
                  (0 < (q = (-k + t) / (2 * i)) && q < 1 && u.push(q),
                  0 < (r = (-k - t) / (2 * i)) && r < 1 && u.push(r))
            }
            for (var x, y = u.length, z = y; y--; )
              (x = 1 - (p = u[y])),
                (v[0][y] =
                  x * x * x * a +
                  3 * x * x * p * c +
                  3 * x * p * p * e +
                  p * p * p * g),
                (v[1][y] =
                  x * x * x * b +
                  3 * x * x * p * d +
                  3 * x * p * p * f +
                  p * p * p * h)
            return (
              (v[0][z] = a),
              (v[1][z] = b),
              (v[0][z + 1] = g),
              (v[1][z + 1] = h),
              (v[0].length = v[1].length = z + 2),
              {
                min: { x: l.apply(0, v[0]), y: l.apply(0, v[1]) },
                max: { x: m.apply(0, v[0]), y: m.apply(0, v[1]) },
              }
            )
          }
          function R(a, b) {
            var c = !b && p(a)
            if (!b && c.curve) return s(c.curve)
            for (
              var d = M(a),
                e = b && M(b),
                f = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                g = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                h = function (a, b, c) {
                  var d, e
                  if (!a) return ['C', b.x, b.y, b.x, b.y, b.x, b.y]
                  switch (
                    ((a[0] in { T: 1, Q: 1 }) || (b.qx = b.qy = null), a[0])
                  ) {
                    case 'M':
                      ;(b.X = a[1]), (b.Y = a[2])
                      break
                    case 'A':
                      a = ['C'].concat(
                        P.apply(0, [b.x, b.y].concat(a.slice(1)))
                      )
                      break
                    case 'S':
                      'C' == c || 'S' == c
                        ? ((d = 2 * b.x - b.bx), (e = 2 * b.y - b.by))
                        : ((d = b.x), (e = b.y)),
                        (a = ['C', d, e].concat(a.slice(1)))
                      break
                    case 'T':
                      'Q' == c || 'T' == c
                        ? ((b.qx = 2 * b.x - b.qx), (b.qy = 2 * b.y - b.qy))
                        : ((b.qx = b.x), (b.qy = b.y)),
                        (a = ['C'].concat(O(b.x, b.y, b.qx, b.qy, a[1], a[2])))
                      break
                    case 'Q':
                      ;(b.qx = a[1]),
                        (b.qy = a[2]),
                        (a = ['C'].concat(O(b.x, b.y, a[1], a[2], a[3], a[4])))
                      break
                    case 'L':
                      a = ['C'].concat(N(b.x, b.y, a[1], a[2]))
                      break
                    case 'H':
                      a = ['C'].concat(N(b.x, b.y, a[1], b.y))
                      break
                    case 'V':
                      a = ['C'].concat(N(b.x, b.y, b.x, a[1]))
                      break
                    case 'Z':
                      a = ['C'].concat(N(b.x, b.y, b.X, b.Y))
                      break
                  }
                  return a
                },
                j = function (a, b) {
                  if (a[b].length > 7) {
                    a[b].shift()
                    for (var c = a[b]; c.length; )
                      (l[b] = 'A'),
                        e && (n[b] = 'A'),
                        a.splice(b++, 0, ['C'].concat(c.splice(0, 6)))
                    a.splice(b, 1), (t = m(d.length, (e && e.length) || 0))
                  }
                },
                k = function (a, b, c, f, g) {
                  a &&
                    b &&
                    'M' == a[g][0] &&
                    'M' != b[g][0] &&
                    (b.splice(g, 0, ['M', f.x, f.y]),
                    (c.bx = 0),
                    (c.by = 0),
                    (c.x = a[g][1]),
                    (c.y = a[g][2]),
                    (t = m(d.length, (e && e.length) || 0)))
                },
                l = [],
                n = [],
                o = '',
                q = '',
                r = 0,
                t = m(d.length, (e && e.length) || 0);
              r < t;
              r++
            ) {
              d[r] && (o = d[r][0]),
                'C' != o && ((l[r] = o), r && (q = l[r - 1])),
                (d[r] = h(d[r], f, q)),
                'A' != l[r] && 'C' == o && (l[r] = 'C'),
                j(d, r),
                e &&
                  (e[r] && (o = e[r][0]),
                  'C' != o && ((n[r] = o), r && (q = n[r - 1])),
                  (e[r] = h(e[r], g, q)),
                  'A' != n[r] && 'C' == o && (n[r] = 'C'),
                  j(e, r)),
                k(d, e, f, g, r),
                k(e, d, g, f, r)
              var u = d[r],
                v = e && e[r],
                w = u.length,
                x = e && v.length
              ;(f.x = u[w - 2]),
                (f.y = u[w - 1]),
                (f.bx = i(u[w - 4]) || f.x),
                (f.by = i(u[w - 3]) || f.y),
                (g.bx = e && (i(v[x - 4]) || g.x)),
                (g.by = e && (i(v[x - 3]) || g.y)),
                (g.x = e && v[x - 2]),
                (g.y = e && v[x - 1])
            }
            return e || (c.curve = s(d)), e ? [d, e] : d
          }
          function S(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
              var f = [
                { x: +a[d - 2], y: +a[d - 1] },
                { x: +a[d], y: +a[d + 1] },
                { x: +a[d + 2], y: +a[d + 3] },
                { x: +a[d + 4], y: +a[d + 5] },
              ]
              b
                ? d
                  ? e - 4 == d
                    ? (f[3] = { x: +a[0], y: +a[1] })
                    : e - 2 == d &&
                      ((f[2] = { x: +a[0], y: +a[1] }),
                      (f[3] = { x: +a[2], y: +a[3] }))
                  : (f[0] = { x: +a[e - 2], y: +a[e - 1] })
                : e - 4 == d
                ? (f[3] = f[2])
                : d || (f[0] = { x: +a[d], y: +a[d + 1] }),
                c.push([
                  'C',
                  (-f[0].x + 6 * f[1].x + f[2].x) / 6,
                  (-f[0].y + 6 * f[1].y + f[2].y) / 6,
                  (f[1].x + 6 * f[2].x - f[3].x) / 6,
                  (f[1].y + 6 * f[2].y - f[3].y) / 6,
                  f[2].x,
                  f[2].y,
                ])
            }
            return c
          }
          ;(a.path = p),
            (a.path.getTotalLength = v),
            (a.path.getPointAtLength = w),
            (a.path.getSubpath = function (a, b, c) {
              if (this.getTotalLength(a) - c < 0.000001) return x(a, b).end
              var d = x(a, c, 1)
              return b ? x(d, b).end : d
            }),
            (e.getTotalLength = function () {
              if (this.node.getTotalLength) return this.node.getTotalLength()
            }),
            (e.getPointAtLength = function (a) {
              return w(this.attr('d'), a)
            }),
            (e.getSubpath = function (b, c) {
              return a.path.getSubpath(this.attr('d'), b, c)
            }),
            (a._.box = q),
            (a.path.findDotsAtSegment = y),
            (a.path.bezierBBox = z),
            (a.path.isPointInsideBBox = A),
            (a.closest = function (b, c, d, e) {
              for (
                var f = 100,
                  g = q(b - f / 2, c - f / 2, f, f),
                  h = [],
                  i = d[0].hasOwnProperty('x')
                    ? function (a) {
                        return { x: d[a].x, y: d[a].y }
                      }
                    : function (a) {
                        return { x: d[a], y: e[a] }
                      },
                  j = 0;
                f <= 10e5 && !j;

              ) {
                for (var k = 0, l = d.length; k < l; k++) {
                  var m = i(k)
                  if (A(g, m.x, m.y)) {
                    j++, h.push(m)
                    break
                  }
                }
                j || (g = q(b - (f *= 2) / 2, c - f / 2, f, f))
              }
              if (10e5 != f) {
                var n,
                  o = 1 / 0
                for (k = 0, l = h.length; k < l; k++) {
                  var p = a.len(b, c, h[k].x, h[k].y)
                  o > p && ((o = p), (h[k].len = p), (n = h[k]))
                }
                return n
              }
            }),
            (a.path.isBBoxIntersect = B),
            (a.path.intersection = function (a, b) {
              return H(a, b)
            }),
            (a.path.intersectionNumber = function (a, b) {
              return H(a, b, 1)
            }),
            (a.path.isPointInside = function (a, b, c) {
              var d = I(a)
              return (
                A(d, b, c) &&
                H(
                  a,
                  [
                    ['M', b, c],
                    ['H', d.x2 + 10],
                  ],
                  1
                ) %
                  2 ==
                  1
              )
            }),
            (a.path.getBBox = I),
            (a.path.get = {
              path: function (a) {
                return a.attr('path')
              },
              circle: function (a) {
                var b = L(a)
                return K(b.cx, b.cy, b.r)
              },
              ellipse: function (a) {
                var b = L(a)
                return K(b.cx || 0, b.cy || 0, b.rx, b.ry)
              },
              rect: function (a) {
                var b = L(a)
                return J(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
              },
              image: function (a) {
                var b = L(a)
                return J(b.x || 0, b.y || 0, b.width, b.height)
              },
              line: function (a) {
                return (
                  'M' +
                  [
                    a.attr('x1') || 0,
                    a.attr('y1') || 0,
                    a.attr('x2'),
                    a.attr('y2'),
                  ]
                )
              },
              polyline: function (a) {
                return 'M' + a.attr('points')
              },
              polygon: function (a) {
                return 'M' + a.attr('points') + 'z'
              },
              deflt: function (a) {
                var b = a.node.getBBox()
                return J(b.x, b.y, b.width, b.height)
              },
            }),
            (a.path.toRelative = function (b) {
              var c = p(b),
                d = String.prototype.toLowerCase
              if (c.rel) return s(c.rel)
              ;(a.is(b, 'array') && a.is(b && b[0], 'array')) ||
                (b = a.parsePathString(b))
              var e = [],
                f = 0,
                g = 0,
                h = 0,
                i = 0,
                j = 0
              'M' == b[0][0] &&
                ((f = b[0][1]),
                (g = b[0][2]),
                (h = f),
                (i = g),
                j++,
                e.push(['M', f, g]))
              for (var k = j, l = b.length; k < l; k++) {
                var m = (e[k] = []),
                  n = b[k]
                if (n[0] != d.call(n[0]))
                  switch (((m[0] = d.call(n[0])), m[0])) {
                    case 'a':
                      ;(m[1] = n[1]),
                        (m[2] = n[2]),
                        (m[3] = n[3]),
                        (m[4] = n[4]),
                        (m[5] = n[5]),
                        (m[6] = +(n[6] - f).toFixed(3)),
                        (m[7] = +(n[7] - g).toFixed(3))
                      break
                    case 'v':
                      m[1] = +(n[1] - g).toFixed(3)
                      break
                    case 'm':
                      ;(h = n[1]), (i = n[2])
                    default:
                      for (var o = 1, q = n.length; o < q; o++)
                        m[o] = +(n[o] - (o % 2 ? f : g)).toFixed(3)
                  }
                else {
                  ;(m = e[k] = []),
                    'm' == n[0] && ((h = n[1] + f), (i = n[2] + g))
                  for (var t = 0, u = n.length; t < u; t++) e[k][t] = n[t]
                }
                var v = e[k].length
                switch (e[k][0]) {
                  case 'z':
                    ;(f = h), (g = i)
                    break
                  case 'h':
                    f += +e[k][v - 1]
                    break
                  case 'v':
                    g += +e[k][v - 1]
                    break
                  default:
                    ;(f += +e[k][v - 2]), (g += +e[k][v - 1])
                }
              }
              return (e.toString = r), (c.rel = s(e)), e
            }),
            (a.path.toAbsolute = M),
            (a.path.toCubic = R),
            (a.path.map = function (a, b) {
              var c, d, e, f, g, h, i
              if (!b) return a
              for (e = 0, g = (a = R(a)).length; e < g; e++)
                for (f = 1, h = (i = a[e]).length; f < h; f += 2)
                  (c = b.x(i[f], i[f + 1])),
                    (d = b.y(i[f], i[f + 1])),
                    (i[f] = c),
                    (i[f + 1] = d)
              return a
            }),
            (a.path.toString = r),
            (a.path.clone = s)
        }),
        w.plugin(function (a, b, c, d) {
          var e = Math.max,
            f = Math.min,
            g = function (a) {
              if (
                ((this.items = []),
                (this.bindings = {}),
                (this.length = 0),
                (this.type = 'set'),
                a)
              )
                for (var b = 0, c = a.length; b < c; b++)
                  a[b] &&
                    ((this[this.items.length] = this.items[this.items.length] =
                      a[b]),
                    this.length++)
            },
            h = g.prototype
          ;(h.push = function () {
            for (var a, b, c = 0, d = arguments.length; c < d; c++)
              (a = arguments[c]),
                a &&
                  ((this[(b = this.items.length)] = this.items[b] = a),
                  this.length++)
            return this
          }),
            (h.pop = function () {
              return this.length && delete this[this.length--], this.items.pop()
            }),
            (h.forEach = function (a, b) {
              for (var c = 0, d = this.items.length; c < d; c++)
                if (!1 === a.call(b, this.items[c], c)) return this
              return this
            }),
            (h.animate = function (b, c, d, e) {
              'function' != typeof d || d.length || ((e = d), (d = v.linear)),
                b instanceof a._.Animation &&
                  ((e = b.callback), (d = b.easing), (c = d.dur), (b = b.attr))
              var f = arguments
              if (a.is(b, 'array') && a.is(f[f.length - 1], 'array')) var g = !0
              var h,
                i = function () {
                  h ? (this.b = h) : (h = this.b)
                },
                j = 0,
                k = this,
                l =
                  e &&
                  function () {
                    ++j == k.length && e.call(this)
                  }
              return this.forEach(function (a, e) {
                eve.once('snap.animcreated.' + a.id, i),
                  g ? f[e] && a.animate.apply(a, f[e]) : a.animate(b, c, d, l)
              })
            }),
            (h.remove = function () {
              for (; this.length; ) this.pop().remove()
              return this
            }),
            (h.bind = function (a, b, c) {
              var d = {}
              if ('function' == typeof b) this.bindings[a] = b
              else {
                var e = c || a
                this.bindings[a] = function (a) {
                  ;(d[e] = a), b.attr(d)
                }
              }
              return this
            }),
            (h.attr = function (a) {
              var b = {}
              for (var c in a)
                this.bindings[c] ? this.bindings[c](a[c]) : (b[c] = a[c])
              for (var d = 0, e = this.items.length; d < e; d++)
                this.items[d].attr(b)
              return this
            }),
            (h.clear = function () {
              for (; this.length; ) this.pop()
            }),
            (h.splice = function (a, b, c) {
              ;(a = a < 0 ? e(this.length + a, 0) : a),
                (b = e(0, f(this.length - a, b)))
              var d,
                h = [],
                i = [],
                j = []
              for (d = 2; d < arguments.length; d++) j.push(arguments[d])
              for (d = 0; d < b; d++) i.push(this[a + d])
              for (; d < this.length - a; d++) h.push(this[a + d])
              var k = j.length
              for (d = 0; d < k + h.length; d++)
                this.items[a + d] = this[a + d] = d < k ? j[d] : h[d - k]
              for (d = this.items.length = this.length -= b - k; this[d]; )
                delete this[d++]
              return new g(i)
            }),
            (h.exclude = function (a) {
              for (var b = 0, c = this.length; b < c; b++)
                if (this[b] == a) return this.splice(b, 1), !0
              return !1
            }),
            (h.insertAfter = function (a) {
              for (var b = this.items.length; b--; )
                this.items[b].insertAfter(a)
              return this
            }),
            (h.getBBox = function () {
              for (
                var a = [], b = [], c = [], d = [], g = this.items.length;
                g--;

              )
                if (!this.items[g].removed) {
                  var h = this.items[g].getBBox()
                  a.push(h.x),
                    b.push(h.y),
                    c.push(h.x + h.width),
                    d.push(h.y + h.height)
                }
              return (
                (a = f.apply(0, a)),
                (b = f.apply(0, b)),
                (c = e.apply(0, c)),
                (d = e.apply(0, d)),
                {
                  x: a,
                  y: b,
                  x2: c,
                  y2: d,
                  width: c - a,
                  height: d - b,
                  cx: a + (c - a) / 2,
                  cy: b + (d - b) / 2,
                }
              )
            }),
            (h.clone = function (a) {
              a = new g()
              for (var b = 0, c = this.items.length; b < c; b++)
                a.push(this.items[b].clone())
              return a
            }),
            (h.toString = function () {
              return 'Snap‘s set'
            }),
            (h.type = 'set'),
            (a.Set = g),
            (a.set = function () {
              var a = new g()
              return (
                arguments.length &&
                  a.push.apply(a, Array.prototype.slice.call(arguments, 0)),
                a
              )
            })
        }),
        w.plugin(function (a, b, c, d) {
          var e = {},
            f = /[%a-z]+$/i,
            g = String
          function h(a) {
            var b = a[0]
            switch (b.toLowerCase()) {
              case 't':
                return [b, 0, 0]
              case 'm':
                return [b, 1, 0, 0, 1, 0, 0]
              case 'r':
                if (4 == a.length) return [b, 0, a[2], a[3]]
                return [b, 0]
              case 's':
                if (5 == a.length) return [b, 1, 1, a[3], a[4]]
                if (3 == a.length) return [b, 1, 1]
                return [b, 1]
            }
          }
          function i(a) {
            return a
          }
          function j(a) {
            return a.join(' ')
          }
          function k(b) {
            return a.rgb(b[0], b[1], b[2], b[3])
          }
          function l(a) {
            var b,
              c,
              d,
              e,
              f,
              g,
              h = 0,
              i = []
            for (b = 0, c = a.length; b < c; b++) {
              for (
                d = 1, f = '[', g = ['"' + a[b][0] + '"'], e = a[b].length;
                d < e;
                d++
              )
                g[d] = 'val[' + h++ + ']'
              ;(f += g + ']'), (i[b] = f)
            }
            return Function(
              'val',
              'return Snap.path.toString.call([' + i + '])'
            )
          }
          function m(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++)
              for (var e = 1, f = a[c].length; e < f; e++) b.push(a[c][e])
            return b
          }
          function n(a) {
            return isFinite(a)
          }
          ;(e.stroke = e.fill = 'colour'),
            (b.prototype.equal = function (a, b) {
              return eve('snap.util.equal', this, a, b).firstDefined()
            }),
            eve.on('snap.util.equal', function (b, c) {
              var d,
                o,
                p,
                q = g(this.attr(b) || ''),
                r = this
              if ('colour' == e[b])
                return (
                  (o = a.color(q)),
                  (p = a.color(c)),
                  {
                    from: [o.r, o.g, o.b, o.opacity],
                    to: [p.r, p.g, p.b, p.opacity],
                    f: k,
                  }
                )
              if ('viewBox' == b)
                return {
                  from: (o = this.attr(b).vb.split(' ').map(Number)),
                  to: (p = c.split(' ').map(Number)),
                  f: j,
                }
              if (
                'transform' == b ||
                'gradientTransform' == b ||
                'patternTransform' == b
              )
                return (
                  'string' == typeof c &&
                    (c = g(c).replace(/\.{3}|\u2026/g, q)),
                  (function (b, c, d) {
                    ;(b = b || new a.Matrix()),
                      (c = c || new a.Matrix()),
                      (b = a.parseTransformString(b.toTransformString()) || []),
                      (c = a.parseTransformString(c.toTransformString()) || [])
                    for (
                      var e,
                        f,
                        g,
                        i,
                        j = Math.max(b.length, c.length),
                        k = [],
                        n = [],
                        o = 0;
                      o < j;
                      o++
                    ) {
                      if (
                        ((g = b[o] || h(c[o])),
                        (i = c[o] || h(g)),
                        g[0] != i[0] ||
                          ('r' == g[0].toLowerCase() &&
                            (g[2] != i[2] || g[3] != i[3])) ||
                          ('s' == g[0].toLowerCase() &&
                            (g[3] != i[3] || g[4] != i[4])))
                      ) {
                        ;(b = a._.transform2matrix(b, d())),
                          (c = a._.transform2matrix(c, d())),
                          (k = [['m', b.a, b.b, b.c, b.d, b.e, b.f]]),
                          (n = [['m', c.a, c.b, c.c, c.d, c.e, c.f]])
                        break
                      }
                      for (
                        e = 0,
                          k[o] = [],
                          n[o] = [],
                          f = Math.max(g.length, i.length);
                        e < f;
                        e++
                      )
                        e in g && (k[o][e] = g[e]), e in i && (n[o][e] = i[e])
                    }
                    return { from: m(k), to: m(n), f: l(k) }
                  })(
                    (q = this.matrix),
                    (c = a._.rgTransform.test(c)
                      ? a._.transform2matrix(c, this.getBBox())
                      : a._.transform2matrix(
                          a._.svgTransform2string(c),
                          this.getBBox()
                        )),
                    function () {
                      return r.getBBox(1)
                    }
                  )
                )
              if ('d' == b || 'path' == b)
                return {
                  from: m((o = a.path.toCubic(q, c))[0]),
                  to: m(o[1]),
                  f: l(o[0]),
                }
              if ('points' == b)
                return (
                  (o = g(q).split(a._.separator)),
                  (p = g(c).split(a._.separator)),
                  {
                    from: o,
                    to: p,
                    f: function (a) {
                      return a
                    },
                  }
                )
              if (n(q) && n(c))
                return { from: parseFloat(q), to: parseFloat(c), f: i }
              var s,
                t,
                u = q.match(f),
                v = g(c).match(f)
              return u &&
                ((s = u),
                (t = v),
                a.is(s, 'array') &&
                  a.is(t, 'array') &&
                  s.toString() == t.toString())
                ? {
                    from: parseFloat(q),
                    to: parseFloat(c),
                    f:
                      ((d = u),
                      function (a) {
                        return +a.toFixed(3) + d
                      }),
                  }
                : { from: this.asPX(b), to: this.asPX(b, c), f: i }
            })
        }),
        w.plugin(function (a, b, c, d) {
          for (
            var e,
              f = b.prototype,
              g = ('createTouch' in d.doc),
              h = [
                'click',
                'dblclick',
                'mousedown',
                'mousemove',
                'mouseout',
                'mouseover',
                'mouseup',
                'touchstart',
                'touchmove',
                'touchend',
                'touchcancel',
              ],
              i = {
                mousedown: 'touchstart',
                mousemove: 'touchmove',
                mouseup: 'touchend',
              },
              j = function (a, b) {
                var c = 'y' == a ? 'scrollTop' : 'scrollLeft',
                  e = b && b.node ? b.node.ownerDocument : d.doc
                return e[(c in e.documentElement) ? 'documentElement' : 'body'][
                  c
                ]
              },
              k = function (a, b, c, d) {
                var e = g && i[b] ? i[b] : b,
                  f = function (e) {
                    var f = j('y', d),
                      h = j('x', d)
                    if (g && i.hasOwnProperty(b)) {
                      for (
                        var k = 0,
                          l = e.targetTouches && e.targetTouches.length;
                        k < l;
                        k++
                      )
                        if (
                          e.targetTouches[k].target == a ||
                          a.contains(e.targetTouches[k].target)
                        ) {
                          var m = e
                          ;((e = e.targetTouches[k]).originalEvent = m),
                            (e.preventDefault = function () {
                              return this.originalEvent.preventDefault()
                            }),
                            (e.stopPropagation = function () {
                              return this.originalEvent.stopPropagation()
                            })
                          break
                        }
                    }
                    var n = e.clientX + h,
                      o = e.clientY + f
                    return c.call(d, e, n, o)
                  }
                return (
                  b !== e && a.addEventListener(b, f, !1),
                  a.addEventListener(e, f, !1),
                  function () {
                    return (
                      b !== e && a.removeEventListener(b, f, !1),
                      a.removeEventListener(e, f, !1),
                      !0
                    )
                  }
                )
              },
              l = [],
              m = function (a) {
                for (
                  var b,
                    c = a.clientX,
                    d = a.clientY,
                    e = j('y'),
                    f = j('x'),
                    h = l.length;
                  h--;

                ) {
                  if (((b = l[h]), g)) {
                    for (var i, k = a.touches && a.touches.length; k--; )
                      if (
                        (i = a.touches[k]).identifier == b.el._drag.id ||
                        b.el.node.contains(i.target)
                      ) {
                        ;(c = i.clientX),
                          (d = i.clientY),
                          (a.originalEvent
                            ? a.originalEvent
                            : a
                          ).preventDefault()
                        break
                      }
                  } else a.preventDefault()
                  var m = b.el.node
                  m.nextSibling,
                    m.parentNode,
                    m.style.display,
                    (c += f),
                    (d += e),
                    eve(
                      'snap.drag.move.' + b.el.id,
                      b.move_scope || b.el,
                      c - b.el._drag.x,
                      d - b.el._drag.y,
                      c,
                      d,
                      a
                    )
                }
              },
              n = function (b) {
                a.unmousemove(m).unmouseup(n)
                for (var c, d = l.length; d--; )
                  ((c = l[d]).el._drag = {}),
                    eve(
                      'snap.drag.end.' + c.el.id,
                      c.end_scope || c.start_scope || c.move_scope || c.el,
                      b
                    ),
                    eve.off('snap.drag.*.' + c.el.id)
                l = []
              },
              o = h.length;
            o--;

          )
            (a[(e = h[o])] = f[e] = function (b, c) {
              if (a.is(b, 'function'))
                (this.events = this.events || []),
                  this.events.push({
                    name: e,
                    f: b,
                    unbind: k(this.node || document, e, b, c || this),
                  })
              else
                for (var d = 0, f = this.events.length; d < f; d++)
                  if (this.events[d].name == e)
                    try {
                      this.events[d].f.call(this)
                    } catch (g) {}
              return this
            }),
              (a['un' + e] = f['un' + e] = function (a) {
                for (var b = this.events || [], c = b.length; c--; )
                  if (b[c].name == e && (b[c].f == a || !a))
                    return (
                      b[c].unbind(),
                      b.splice(c, 1),
                      b.length || delete this.events,
                      this
                    )
                return this
              })
          ;(f.hover = function (a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
          }),
            (f.unhover = function (a, b) {
              return this.unmouseover(a).unmouseout(b)
            })
          var p = []
          ;(f.drag = function (b, c, d, e, f, g) {
            var h,
              i = this
            if (!arguments.length)
              return i.drag(
                function (a, b) {
                  this.attr({ transform: h + (h ? 'T' : 't') + [a, b] })
                },
                function () {
                  h = this.transform().local
                }
              )
            function j(h, j, k) {
              ;(h.originalEvent || h).preventDefault(),
                (i._drag.x = j),
                (i._drag.y = k),
                (i._drag.id = h.identifier),
                l.length || a.mousemove(m).mouseup(n),
                l.push({ el: i, move_scope: e, start_scope: f, end_scope: g }),
                c && eve.on('snap.drag.start.' + i.id, c),
                b && eve.on('snap.drag.move.' + i.id, b),
                d && eve.on('snap.drag.end.' + i.id, d),
                eve('snap.drag.start.' + i.id, f || e || i, j, k, h)
            }
            function k(a, b, c) {
              eve('snap.draginit.' + i.id, i, a, b, c)
            }
            return (
              eve.on('snap.draginit.' + i.id, j),
              (i._drag = {}),
              p.push({ el: i, start: j, init: k }),
              i.mousedown(k),
              i
            )
          }),
            (f.undrag = function () {
              for (var b = p.length; b--; )
                p[b].el == this &&
                  (this.unmousedown(p[b].init),
                  p.splice(b, 1),
                  eve.unbind('snap.drag.*.' + this.id),
                  eve.unbind('snap.draginit.' + this.id))
              return p.length || a.unmousemove(m).unmouseup(n), this
            })
        }),
        w.plugin(function (a, b, c, d) {
          b.prototype
          var e = c.prototype,
            f = /^\s*url\((.+)\)/,
            g = String,
            h = a._.$
          ;(a.filter = {}),
            (e.filter = function (c) {
              var d = this
              'svg' != d.type && (d = d.paper)
              var e = a.parse(g(c)),
                f = a._.id(),
                i = d.node.offsetWidth,
                j = d.node.offsetHeight,
                k = h('filter')
              return (
                h(k, { id: f, filterUnits: 'userSpaceOnUse' }),
                k.appendChild(e.node),
                d.defs.appendChild(k),
                new b(k)
              )
            }),
            eve.on('snap.util.getattr.filter', function () {
              eve.stop()
              var b = h(this.node, 'filter')
              if (b) {
                var c = g(b).match(f)
                return c && a.select(c[1])
              }
            }),
            eve.on('snap.util.attr.filter', function (c) {
              if (c instanceof b && 'filter' == c.type) {
                eve.stop()
                var d = c.node.id
                d || (h(c.node, { id: c.id }), (d = c.id)),
                  h(this.node, { filter: a.url(d) })
              }
              ;(c && 'none' != c) ||
                (eve.stop(), this.node.removeAttribute('filter'))
            }),
            (a.filter.blur = function (b, c) {
              return (
                null == b && (b = 2),
                a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                  def: null == c ? b : [b, c],
                })
              )
            }),
            (a.filter.blur.toString = function () {
              return this()
            }),
            (a.filter.shadow = function (b, c, d, e, f) {
              return (
                null == f &&
                  (null == e
                    ? ((f = d), (d = 4), (e = '#000'))
                    : ((f = e), (e = d), (d = 4))),
                null == d && (d = 4),
                null == f && (f = 1),
                null == b && ((b = 0), (c = 2)),
                null == c && (c = b),
                (e = a.color(e)),
                a.format(
                  '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
                  { color: e, dx: b, dy: c, blur: d, opacity: f }
                )
              )
            }),
            (a.filter.shadow.toString = function () {
              return this()
            }),
            (a.filter.grayscale = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
                  {
                    a: 0.2126 + 0.7874 * (1 - b),
                    b: 0.7152 - 0.7152 * (1 - b),
                    c: 0.0722 - 0.0722 * (1 - b),
                    d: 0.2126 - 0.2126 * (1 - b),
                    e: 0.7152 + 0.2848 * (1 - b),
                    f: 0.0722 - 0.0722 * (1 - b),
                    g: 0.2126 - 0.2126 * (1 - b),
                    h: 0.0722 + 0.9278 * (1 - b),
                  }
                )
              )
            }),
            (a.filter.grayscale.toString = function () {
              return this()
            }),
            (a.filter.sepia = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
                  {
                    a: 0.393 + 0.607 * (1 - b),
                    b: 0.769 - 0.769 * (1 - b),
                    c: 0.189 - 0.189 * (1 - b),
                    d: 0.349 - 0.349 * (1 - b),
                    e: 0.686 + 0.314 * (1 - b),
                    f: 0.168 - 0.168 * (1 - b),
                    g: 0.272 - 0.272 * (1 - b),
                    h: 0.534 - 0.534 * (1 - b),
                    i: 0.131 + 0.869 * (1 - b),
                  }
                )
              )
            }),
            (a.filter.sepia.toString = function () {
              return this()
            }),
            (a.filter.saturate = function (b) {
              return (
                null == b && (b = 1),
                a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                  amount: 1 - b,
                })
              )
            }),
            (a.filter.saturate.toString = function () {
              return this()
            }),
            (a.filter.hueRotate = function (b) {
              return (
                (b = b || 0),
                a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                  angle: b,
                })
              )
            }),
            (a.filter.hueRotate.toString = function () {
              return this()
            }),
            (a.filter.invert = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
                  { amount: b, amount2: 1 - b }
                )
              )
            }),
            (a.filter.invert.toString = function () {
              return this()
            }),
            (a.filter.brightness = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
                  { amount: b }
                )
              )
            }),
            (a.filter.brightness.toString = function () {
              return this()
            }),
            (a.filter.contrast = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
                  { amount: b, amount2: 0.5 - b / 2 }
                )
              )
            }),
            (a.filter.contrast.toString = function () {
              return this()
            })
        }),
        w.plugin(function (a, b, c, d, e) {
          var f = a._.box,
            g = a.is,
            h = /^[^a-z]*([tbmlrc])/i
          ;(b.prototype.getAlign = function (a, b) {
            null == b && g(a, 'string') && ((b = a), (a = null))
            var c = (a = a || this.paper).getBBox ? a.getBBox() : f(a),
              d = this.getBBox(),
              e = {}
            switch ((b = (b = b && b.match(h)) ? b[1].toLowerCase() : 'c')) {
              case 't':
                ;(e.dx = 0), (e.dy = c.y - d.y)
                break
              case 'b':
                ;(e.dx = 0), (e.dy = c.y2 - d.y2)
                break
              case 'm':
                ;(e.dx = 0), (e.dy = c.cy - d.cy)
                break
              case 'l':
                ;(e.dx = c.x - d.x), (e.dy = 0)
                break
              case 'r':
                ;(e.dx = c.x2 - d.x2), (e.dy = 0)
                break
              default:
                ;(e.dx = c.cx - d.cx), (e.dy = 0)
                break
            }
            return (
              (e.toString = function () {
                return 'T' + this.dx + ',' + this.dy
              }),
              e
            )
          }),
            (b.prototype.align = function (a, b) {
              return this.transform('...' + this.getAlign(a, b))
            })
        }),
        w.plugin(function (a, b, c, d, e) {
          var f = b.prototype,
            g = a.is,
            h = String,
            i = 'hasOwnProperty'
          function j(a, b, c) {
            return function (d) {
              var e = d.slice(a, b)
              return 1 == e.length && (e = e[0]), c ? c(e) : e
            }
          }
          var k = function (a, b, c, d) {
            'function' != typeof c || c.length || ((d = c), (c = v.linear)),
              (this.attr = a),
              (this.dur = b),
              c && (this.easing = c),
              d && (this.callback = d)
          }
          ;(a._.Animation = k),
            (a.animation = function (a, b, c, d) {
              return new k(a, b, c, d)
            }),
            (f.inAnim = function () {
              var a,
                b = []
              for (var c in this.anims)
                this.anims[i](c) &&
                  ((a = this.anims[c]),
                  b.push({
                    anim: new k(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (b) {
                      return a.status(b)
                    },
                    stop: function () {
                      a.stop()
                    },
                  }))
              return b
            }),
            (a.animate = function (a, b, c, d, e, f) {
              'function' != typeof e || e.length || ((f = e), (e = v.linear))
              var g = v.time(),
                h = v(a, b, g, g + d, v.time, c, e)
              return f && eve.once('mina.finish.' + h.id, f), h
            }),
            (f.stop = function () {
              for (var a = this.inAnim(), b = 0, c = a.length; b < c; b++)
                a[b].stop()
              return this
            }),
            (f.animate = function (a, b, c, d) {
              'function' != typeof c || c.length || ((d = c), (c = v.linear)),
                a instanceof k &&
                  ((d = a.callback), (c = a.easing), (b = a.dur), (a = a.attr))
              var e,
                f,
                l,
                m,
                n = [],
                o = [],
                p = {},
                q = this
              for (var r in a)
                if (a[i](r)) {
                  q.equal
                    ? ((e = (m = q.equal(r, h(a[r]))).from),
                      (f = m.to),
                      (l = m.f))
                    : ((e = +q.attr(r)), (f = +a[r]))
                  var s = g(e, 'array') ? e.length : 1
                  ;(p[r] = j(n.length, n.length + s, l)),
                    (n = n.concat(e)),
                    (o = o.concat(f))
                }
              var t = v.time(),
                u = v(
                  n,
                  o,
                  t,
                  t + b,
                  v.time,
                  function (a) {
                    var b = {}
                    for (var c in p) p[i](c) && (b[c] = p[c](a))
                    q.attr(b)
                  },
                  c
                )
              return (
                (q.anims[u.id] = u),
                (u._attrs = a),
                (u._callback = d),
                eve('snap.animcreated.' + q.id, u),
                eve.once('mina.finish.' + u.id, function () {
                  eve.off('mina.*.' + u.id),
                    delete q.anims[u.id],
                    d && d.call(q)
                }),
                eve.once('mina.stop.' + u.id, function () {
                  eve.off('mina.*.' + u.id), delete q.anims[u.id]
                }),
                q
              )
            })
        }),
        w.plugin(function (a, b, c, d) {
          function e(a) {
            a = a.split(/(?=#)/)
            var b = new String(a[5])
            return (
              (b[50] = a[0]),
              (b[100] = a[1]),
              (b[200] = a[2]),
              (b[300] = a[3]),
              (b[400] = a[4]),
              (b[500] = a[5]),
              (b[600] = a[6]),
              (b[700] = a[7]),
              (b[800] = a[8]),
              (b[900] = a[9]),
              a[10] &&
                ((b.A100 = a[10]),
                (b.A200 = a[11]),
                (b.A400 = a[12]),
                (b.A700 = a[13])),
              b
            )
          }
          ;(a.mui = {}),
            (a.flat = {}),
            (a.mui.red = e(
              '#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000'
            )),
            (a.mui.pink = e(
              '#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162'
            )),
            (a.mui.purple = e(
              '#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF'
            )),
            (a.mui.deeppurple = e(
              '#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA'
            )),
            (a.mui.indigo = e(
              '#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE'
            )),
            (a.mui.blue = e(
              '#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF'
            )),
            (a.mui.lightblue = e(
              '#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA'
            )),
            (a.mui.cyan = e(
              '#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4'
            )),
            (a.mui.teal = e(
              '#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5'
            )),
            (a.mui.green = e(
              '#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853'
            )),
            (a.mui.lightgreen = e(
              '#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17'
            )),
            (a.mui.lime = e(
              '#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00'
            )),
            (a.mui.yellow = e(
              '#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600'
            )),
            (a.mui.amber = e(
              '#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00'
            )),
            (a.mui.orange = e(
              '#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00'
            )),
            (a.mui.deeporange = e(
              '#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00'
            )),
            (a.mui.brown = e(
              '#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723'
            )),
            (a.mui.grey = e(
              '#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121'
            )),
            (a.mui.bluegrey = e(
              '#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238'
            )),
            (a.flat.turquoise = '#1abc9c'),
            (a.flat.greensea = '#16a085'),
            (a.flat.sunflower = '#f1c40f'),
            (a.flat.orange = '#f39c12'),
            (a.flat.emerland = '#2ecc71'),
            (a.flat.nephritis = '#27ae60'),
            (a.flat.carrot = '#e67e22'),
            (a.flat.pumpkin = '#d35400'),
            (a.flat.peterriver = '#3498db'),
            (a.flat.belizehole = '#2980b9'),
            (a.flat.alizarin = '#e74c3c'),
            (a.flat.pomegranate = '#c0392b'),
            (a.flat.amethyst = '#9b59b6'),
            (a.flat.wisteria = '#8e44ad'),
            (a.flat.clouds = '#ecf0f1'),
            (a.flat.silver = '#bdc3c7'),
            (a.flat.wetasphalt = '#34495e'),
            (a.flat.midnightblue = '#2c3e50'),
            (a.flat.concrete = '#95a5a6'),
            (a.flat.asbestos = '#7f8c8d'),
            (a.importMUIColors = function () {
              for (var b in a.mui)
                a.mui.hasOwnProperty(b) && (window[b] = a.mui[b])
            })
        }),
        (a.exports = w)
    },
  },
  function (a) {
    var b = function (b) {
      return a((a.s = b))
    }
    a.O(0, [774, 179], function () {
      return b(6363), b(387)
    }),
      (_N_E = a.O())
  },
])
