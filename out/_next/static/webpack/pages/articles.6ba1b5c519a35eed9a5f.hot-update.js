webpackHotUpdate_N_E('pages/articles', {
  /***/ './pages/articles/index.tsx':
    /*!**********************************!*\
  !*** ./pages/articles/index.tsx ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Articles; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/articles */ "./data/articles.ts");\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Articles.module.css */ "./styles/Articles.module.css");\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/pages/articles/index.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Articles() {\n  var _this = this;\n\n  return __jsx("div", {\n    className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx("title", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, "Articles"), __jsx("link", {\n    rel: "icon",\n    href: "/favicon.ico",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  })), __jsx("main", {\n    className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, _data_articles__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (article) {\n    return __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid,\n      key: article.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    }, article.date)), __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }\n    }, __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, article.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: article.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 15\n      }\n    }, article.title), __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 15\n      }\n    }, article.description), __jsx("div", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, __jsx("img", {\n      src: article.avatar,\n      alt: article.author,\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }), __jsx("a", {\n      href: article.social,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }\n    }, __jsx("span", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 19\n      }\n    }, article.author)))));\n  })));\n}\n_c = Articles;\n\nvar _c;\n\n$RefreshReg$(_c, "Articles");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvaW5kZXgudHN4PzQxNTEiXSwibmFtZXMiOlsiQXJ0aWNsZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiZ3JpZCIsInVybCIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwidGl0bGUiLCJhdmF0YXIiLCJhdXRob3IiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNqQyxTQUNFO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBTSxhQUFTLEVBQUVELGtFQUFNLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msc0RBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSxXQUNaO0FBQUssZUFBUyxFQUFFTCxrRUFBTSxDQUFDTSxJQUF2QjtBQUE2QixTQUFHLEVBQUVELE9BQU8sQ0FBQ0UsR0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFUCxrRUFBTSxDQUFDUSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSCxPQUFPLENBQUNHLElBQVosQ0FERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUVSLGtFQUFNLENBQUNTLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlKLE9BQU8sQ0FBQ0ssUUFBWixDQURGLEVBRUUsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUwsT0FBTyxDQUFDRSxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCRixPQUFPLENBQUNNLEtBQWxDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlOLE9BQU8sQ0FBQ0ksV0FBWixDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFFSixPQUFPLENBQUNPLE1BRGY7QUFFRSxTQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsTUFGZjtBQUdFLGVBQVMsRUFBRWIsa0VBQU0sQ0FBQ1ksTUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBRyxVQUFJLEVBQUVQLE9BQU8sQ0FBQ1MsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT1QsT0FBTyxDQUFDUSxNQUFmLENBREYsQ0FORixDQUpGLENBSkYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQU5GLENBREY7QUFpQ0Q7S0FsQ3VCZCxRIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4uLy4uL2RhdGEvYXJ0aWNsZXMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFydGljbGVzPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0ga2V5PXthcnRpY2xlLnVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kYXRlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgIDxwPnthcnRpY2xlLmNhdGVnb3J5fTwvcD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YXJ0aWNsZS51cmx9PnthcnRpY2xlLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2FydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aWNsZS5zb2NpYWx9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2FydGljbGUuYXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/index.tsx\n'
      )

      /***/
    },
})