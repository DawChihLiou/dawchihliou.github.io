webpackHotUpdate_N_E('pages/index', {
  /***/ './components/Publication/Publication.tsx':
    /*!************************************************!*\
  !*** ./components/Publication/Publication.tsx ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Publication; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Publication_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publication.module.css */ "./components/Publication/Publication.module.css");\n/* harmony import */ var _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Publication_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/articles */ "./data/articles.ts");\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/Publication/Publication.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar publication = _data_articles__WEBPACK_IMPORTED_MODULE_2__["default"].filter(function (a) {\n  return a.url !== \'/articles/helloworld\';\n});\nfunction Publication() {\n  var _this = this;\n\n  return __jsx("section", {\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrap,\n    title: "my open source and none-profit projects",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx("article", {\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx("h1", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, "I love writing"), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, "I enjoy writing about software development. Especially the things that can unblock our daily work and gives people inspirations to strive for engineering excellence.")), __jsx("article", {\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.list,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, publication.map(function (article) {\n    return __jsx("article", {\n      key: article.title,\n      className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }, __jsx("a", {\n      href: article.url,\n      target: "_blank",\n      rel: "noreferrer",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx("div", {\n      className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemDescription,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }, __jsx("h2", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }\n    }, article.title), article.external && __jsx("a", {\n      href: article.publisherUrl,\n      target: "_blank",\n      rel: "noreferrer",\n      className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.caption,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 19\n      }\n    }, \'Published on \', __jsx("span", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }\n    }, article.publisher)), __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }, article.description))));\n  })), __jsx("a", {\n    href: "/articles",\n    className: _Publication_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, "See more articles"));\n}\n_c = Publication;\n\nvar _c;\n\n$RefreshReg$(_c, "Publication");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QdWJsaWNhdGlvbi9QdWJsaWNhdGlvbi50c3g/NWIwOCJdLCJuYW1lcyI6WyJwdWJsaWNhdGlvbiIsImFydGljbGVzIiwiZmlsdGVyIiwiYSIsInVybCIsIlB1YmxpY2F0aW9uIiwic3R5bGVzIiwid3JhcCIsImRlc2NyaXB0aW9uIiwibGlzdCIsIm1hcCIsImFydGljbGUiLCJ0aXRsZSIsIml0ZW0iLCJpdGVtRGVzY3JpcHRpb24iLCJleHRlcm5hbCIsInB1Ymxpc2hlclVybCIsImNhcHRpb24iLCJwdWJsaXNoZXIiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLHNEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsR0FBRixLQUFVLHNCQUFqQjtBQUFBLENBQWhCLENBQXBCO0FBRWUsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUNwQyxTQUNFO0FBQ0UsYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxJQURwQjtBQUVFLFNBQUssRUFBQyx5Q0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBUyxhQUFTLEVBQUVELDhEQUFNLENBQUNFLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2S0FGRixDQUpGLEVBWUU7QUFBUyxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsV0FBVyxDQUFDVSxHQUFaLENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxXQUNmO0FBQVMsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEtBQXRCO0FBQTZCLGVBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFFRixPQUFPLENBQUNQLEdBQWpCO0FBQXNCLFlBQU0sRUFBQyxRQUE3QjtBQUFzQyxTQUFHLEVBQUMsWUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFRSw4REFBTSxDQUFDUSxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSCxPQUFPLENBQUNDLEtBQWIsQ0FERixFQUVHRCxPQUFPLENBQUNJLFFBQVIsSUFDQztBQUNFLFVBQUksRUFBRUosT0FBTyxDQUFDSyxZQURoQjtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBR0UsU0FBRyxFQUFDLFlBSE47QUFJRSxlQUFTLEVBQUVWLDhEQUFNLENBQUNXLE9BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRyxlQU5ILEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPTixPQUFPLENBQUNPLFNBQWYsQ0FQRixDQUhKLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJUCxPQUFPLENBQUNILFdBQVosQ0FkRixDQURGLENBREYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FaRixFQW9DRTtBQUFHLFFBQUksRUFBQyxXQUFSO0FBQW9CLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ2EsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQ0YsQ0FERjtBQTBDRDtLQTNDdUJkLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL1B1YmxpY2F0aW9uL1B1YmxpY2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QdWJsaWNhdGlvbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4uLy4uL2RhdGEvYXJ0aWNsZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHB1YmxpY2F0aW9uID0gYXJ0aWNsZXMuZmlsdGVyKChhKSA9PiBhLnVybCAhPT0gJy9hcnRpY2xlcy9oZWxsb3dvcmxkJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVibGljYXRpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndyYXB9XG4gICAgICB0aXRsZT1cIm15IG9wZW4gc291cmNlIGFuZCBub25lLXByb2ZpdCBwcm9qZWN0c1wiXG4gICAgPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICA8aDE+SSBsb3ZlIHdyaXRpbmc8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJIGVuam95IHdyaXRpbmcgYWJvdXQgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEVzcGVjaWFsbHkgdGhlIHRoaW5ncyB0aGF0XG4gICAgICAgICAgY2FuIHVuYmxvY2sgb3VyIGRhaWx5IHdvcmsgYW5kIGdpdmVzIHBlb3BsZSBpbnNwaXJhdGlvbnMgdG8gc3RyaXZlIGZvclxuICAgICAgICAgIGVuZ2luZWVyaW5nIGV4Y2VsbGVuY2UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICB7cHVibGljYXRpb24ubWFwKChhcnRpY2xlKSA9PiAoXG4gICAgICAgICAgPGFydGljbGUga2V5PXthcnRpY2xlLnRpdGxlfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2FydGljbGUudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbURlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICA8aDI+e2FydGljbGUudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5leHRlcm5hbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXthcnRpY2xlLnB1Ymxpc2hlclVybH1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcHRpb259XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsnUHVibGlzaGVkIG9uICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcnRpY2xlLnB1Ymxpc2hlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICApKX1cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhIGhyZWY9XCIvYXJ0aWNsZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgU2VlIG1vcmUgYXJ0aWNsZXNcbiAgICAgIDwvYT5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Publication/Publication.tsx\n'
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

  /***/ './node_modules/next/dist/client/request-idle-callback.js': false,

  /***/ './node_modules/next/dist/client/route-loader.js': false,

  /***/ './node_modules/next/dist/client/router.js': false,

  /***/ './node_modules/next/dist/client/use-intersection.js': false,

  /***/ './node_modules/next/dist/client/with-router.js': false,

  /***/ './node_modules/next/dist/compiled/path-to-regexp/index.js': false,

  /***/ './node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js': false,

  /***/ './node_modules/next/dist/next-server/lib/mitt.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router-context.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/router.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/format-url.js': false,

  /***/ './node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js': false,

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
