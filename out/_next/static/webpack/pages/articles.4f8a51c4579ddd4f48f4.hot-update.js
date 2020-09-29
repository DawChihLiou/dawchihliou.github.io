webpackHotUpdate_N_E('pages/articles', {
  /***/ './pages/articles/index.tsx':
    /*!**********************************!*\
  !*** ./pages/articles/index.tsx ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Articles; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/articles */ "./data/articles.ts");\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Articles.module.css */ "./styles/Articles.module.css");\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/pages/articles/index.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Articles() {\n  var _this = this;\n\n  return __jsx("div", {\n    className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx("title", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, "Articles"), __jsx("link", {\n    rel: "icon",\n    href: "/favicon.ico",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  })), __jsx("main", {\n    className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx("div", {\n    className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.banner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, "If you enjoy the articles, please do", \' \', __jsx("a", {\n    href: "/api/rss",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, "subscribe to the RSS feed ", __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiRss"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 41\n    }\n  })))), _data_articles__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (article) {\n    return __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid,\n      key: article.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }, __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }\n    }, __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }\n    }, article.date)), __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }, __jsx("p", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.category,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }\n    }, article.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: article.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    }, article.title), __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }, article.description), __jsx("div", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, __jsx("img", {\n      src: article.avatar,\n      alt: article.author,\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }\n    }), __jsx("a", {\n      href: article.social,\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.author,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }, __jsx("span", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 19\n      }\n    }, article.author)))));\n  })));\n}\n_c = Articles;\n\nvar _c;\n\n$RefreshReg$(_c, "Articles");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvaW5kZXgudHN4PzQxNTEiXSwibmFtZXMiOlsiQXJ0aWNsZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiYmFubmVyIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiZ3JpZCIsInVybCIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwidGl0bGUiLCJhdmF0YXIiLCJhdXRob3IiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNqQyxTQUNFO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBTSxhQUFTLEVBQUVELGtFQUFNLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsa0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ3VDLEdBRHZDLEVBRUU7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUM0QixNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFENUIsQ0FGRixDQURGLENBREYsRUFVR0Msc0RBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSxXQUNaO0FBQUssZUFBUyxFQUFFTixrRUFBTSxDQUFDTyxJQUF2QjtBQUE2QixTQUFHLEVBQUVELE9BQU8sQ0FBQ0UsR0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFUixrRUFBTSxDQUFDUyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSCxPQUFPLENBQUNHLElBQVosQ0FERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUVULGtFQUFNLENBQUNVLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRVYsa0VBQU0sQ0FBQ1csUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0wsT0FBTyxDQUFDSyxRQUF4QyxDQURGLEVBRUUsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUwsT0FBTyxDQUFDRSxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCRixPQUFPLENBQUNNLEtBQWxDLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlOLE9BQU8sQ0FBQ0ksV0FBWixDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFFSixPQUFPLENBQUNPLE1BRGY7QUFFRSxTQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsTUFGZjtBQUdFLGVBQVMsRUFBRWQsa0VBQU0sQ0FBQ2EsTUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBRyxVQUFJLEVBQUVQLE9BQU8sQ0FBQ1MsTUFBakI7QUFBeUIsZUFBUyxFQUFFZixrRUFBTSxDQUFDYyxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPUixPQUFPLENBQUNRLE1BQWYsQ0FERixDQU5GLENBSkYsQ0FKRixDQURZO0FBQUEsR0FBYixDQVZILENBTkYsQ0FERjtBQTBDRDtLQTNDdUJmLFEiLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXJ0aWNsZXMgZnJvbSAnLi4vLi4vZGF0YS9hcnRpY2xlcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGaVJzcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFydGljbGVzPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgeW91IGVuam95IHRoZSBhcnRpY2xlcywgcGxlYXNlIGRveycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYXBpL3Jzc1wiPlxuICAgICAgICAgICAgICBzdWJzY3JpYmUgdG8gdGhlIFJTUyBmZWVkIDxGaVJzcyAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0ga2V5PXthcnRpY2xlLnVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kYXRlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT57YXJ0aWNsZS5jYXRlZ29yeX08L3A+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2FydGljbGUudXJsfT57YXJ0aWNsZS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgIDxwPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgYWx0PXthcnRpY2xlLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGljbGUuc29jaWFsfSBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2FydGljbGUuYXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/index.tsx\n'
      )

      /***/
    },
})
