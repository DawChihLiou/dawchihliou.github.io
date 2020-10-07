webpackHotUpdate_N_E('pages/index', {
  /***/ './components/Publication/Publication.tsx':
    /*!************************************************!*\
  !*** ./components/Publication/Publication.tsx ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Publication; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Publication_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publication.module.css */ "./components/Publication/Publication.module.css");\n/* harmony import */ var _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Publication_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/articles */ "./data/articles.ts");\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/Publication/Publication.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Publication() {\n  var _this = this;\n\n  return __jsx("section", {\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrap,\n    title: "my open source and none-profit projects",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx("article", {\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx("h1", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, "I love writing"), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, "I enjoy writing about software development. Especially the things that can unblock our daily work and gives people inspirations to strive for engineering excellence.")), __jsx("article", {\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.list,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, _data_articles__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (article) {\n    return __jsx("article", {\n      key: article.title,\n      className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, __jsx("div", {\n      className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemDescription,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    }, __jsx("h2", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 15\n      }\n    }, __jsx("a", {\n      href: article.url,\n      target: "_blank",\n      rel: "noreferrer",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }, article.title)), __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }\n    }, article.description)));\n  })), __jsx("a", {\n    href: "/articles",\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, "See more articles"));\n}\n_c = Publication;\n\nvar _c;\n\n$RefreshReg$(_c, "Publication");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QdWJsaWNhdGlvbi9QdWJsaWNhdGlvbi50c3g/NWIwOCJdLCJuYW1lcyI6WyJQdWJsaWNhdGlvbiIsInN0eWxlcyIsIndyYXAiLCJkZXNjcmlwdGlvbiIsImxpc3QiLCJhcnRpY2xlcyIsIm1hcCIsImFydGljbGUiLCJ0aXRsZSIsIml0ZW0iLCJpdGVtRGVzY3JpcHRpb24iLCJ1cmwiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQ3BDLFNBQ0U7QUFDRSxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLElBRHBCO0FBRUUsU0FBSyxFQUFDLHlDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFTLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZLQUZGLENBSkYsRUFZRTtBQUFTLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ0csSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxzREFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLFdBQ1o7QUFBUyxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsS0FBdEI7QUFBNkIsZUFBUyxFQUFFUCw4REFBTSxDQUFDUSxJQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVSLDhEQUFNLENBQUNTLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUVILE9BQU8sQ0FBQ0ksR0FBakI7QUFBc0IsWUFBTSxFQUFDLFFBQTdCO0FBQXNDLFNBQUcsRUFBQyxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dKLE9BQU8sQ0FBQ0MsS0FEWCxDQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlELE9BQU8sQ0FBQ0osV0FBWixDQU5GLENBREYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQVpGLEVBMEJFO0FBQUcsUUFBSSxFQUFDLFdBQVI7QUFBb0IsYUFBUyxFQUFFRiw4REFBTSxDQUFDVyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTFCRixDQURGO0FBZ0NEO0tBakN1QlosVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHVibGljYXRpb24vUHVibGljYXRpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1B1YmxpY2F0aW9uLm1vZHVsZS5jc3MnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi8uLi91dGlscy9zb2NpYWxzJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4uLy4uL2RhdGEvYXJ0aWNsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1YmxpY2F0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy53cmFwfVxuICAgICAgdGl0bGU9XCJteSBvcGVuIHNvdXJjZSBhbmQgbm9uZS1wcm9maXQgcHJvamVjdHNcIlxuICAgID5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgPGgxPkkgbG92ZSB3cml0aW5nPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSSBlbmpveSB3cml0aW5nIGFib3V0IHNvZnR3YXJlIGRldmVsb3BtZW50LiBFc3BlY2lhbGx5IHRoZSB0aGluZ3MgdGhhdFxuICAgICAgICAgIGNhbiB1bmJsb2NrIG91ciBkYWlseSB3b3JrIGFuZCBnaXZlcyBwZW9wbGUgaW5zcGlyYXRpb25zIHRvIHN0cml2ZSBmb3JcbiAgICAgICAgICBlbmdpbmVlcmluZyBleGNlbGxlbmNlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxuICAgICAgICAgIDxhcnRpY2xlIGtleT17YXJ0aWNsZS50aXRsZX0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1EZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpY2xlLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGEgaHJlZj1cIi9hcnRpY2xlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICBTZWUgbW9yZSBhcnRpY2xlc1xuICAgICAgPC9hPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Publication/Publication.tsx\n'
      )

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/arrayWithHoles.js': false,

  /***/ './node_modules/@babel/runtime/helpers/asyncToGenerator.js': false,

  /***/ './node_modules/@babel/runtime/helpers/construct.js': false,

  /***/ './node_modules/@babel/runtime/helpers/interopRequireDefault.js': false,

  /***/ './node_modules/@babel/runtime/helpers/interopRequireWildcard.js': false,

  /***/ './node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js': false,

  /***/ './node_modules/@babel/runtime/helpers/iterableToArrayLimit.js': false,

  /***/ './node_modules/@babel/runtime/helpers/nonIterableRest.js': false,

  /***/ './node_modules/@babel/runtime/helpers/slicedToArray.js': false,

  /***/ './node_modules/@babel/runtime/regenerator/index.js': false,

  /***/ './node_modules/next/dist/client/link.js': false,

  /***/ './node_modules/next/dist/client/normalize-trailing-slash.js': false,

  /***/ './node_modules/next/dist/client/router.js': false,

  /***/ './node_modules/next/dist/client/with-router.js': false,

  /***/ './node_modules/next/dist/compiled/path-to-regexp/index.js': false,

  /***/ './node_modules/next/dist/next-server/lib/mitt.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router-context.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/router.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/format-url.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/path-match.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/querystring.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/route-matcher.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/route-regex.js': false,

  /***/ './node_modules/next/dist/next-server/lib/utils.js': false,

  /***/ './node_modules/next/dist/next-server/server/denormalize-page-path.js': false,

  /***/ './node_modules/next/link.js': false,

  /***/ './node_modules/regenerator-runtime/runtime.js': false,
})
