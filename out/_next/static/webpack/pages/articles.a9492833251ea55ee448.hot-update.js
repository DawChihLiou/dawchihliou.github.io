webpackHotUpdate_N_E('pages/articles', {
  /***/ './pages/articles/index.tsx':
    /*!**********************************!*\
  !*** ./pages/articles/index.tsx ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Articles; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/articles */ "./data/articles.ts");\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Articles.module.css */ "./styles/Articles.module.css");\n/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/pages/articles/index.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Articles() {\n  var _this = this;\n\n  return __jsx("div", {\n    className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx("title", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, "Articles"), __jsx("link", {\n    rel: "icon",\n    href: "/favicon.ico",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  })), __jsx("main", {\n    className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx("div", {\n    className: "banner",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, "If you enjoy the article, please do", \' \', __jsx("a", {\n    href: "/api/rss",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, "subscribe to the RSS feed ", __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiRss"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 41\n    }\n  })))), _data_articles__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (article) {\n    return __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid,\n      key: article.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }, __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }\n    }, __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }\n    }, article.date)), __jsx("div", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }, __jsx("p", {\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.category,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }\n    }, article.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: article.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    }, article.title), __jsx("p", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }, article.description), __jsx("div", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, __jsx("img", {\n      src: article.avatar,\n      alt: article.author,\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }\n    }), __jsx("a", {\n      href: article.social,\n      className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.author,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }, __jsx("span", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 19\n      }\n    }, article.author)))));\n  })));\n}\n_c = Articles;\n\nvar _c;\n\n$RefreshReg$(_c, "Articles");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvaW5kZXgudHN4PzQxNTEiXSwibmFtZXMiOlsiQXJ0aWNsZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiZ3JpZCIsInVybCIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwidGl0bGUiLCJhdmF0YXIiLCJhdXRob3IiLCJzb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNqQyxTQUNFO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBTSxhQUFTLEVBQUVELGtFQUFNLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUNzQyxHQUR0QyxFQUVFO0FBQUcsUUFBSSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FDNEIsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDVCLENBRkYsQ0FERixDQURGLEVBVUdDLHNEQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsV0FDWjtBQUFLLGVBQVMsRUFBRUwsa0VBQU0sQ0FBQ00sSUFBdkI7QUFBNkIsU0FBRyxFQUFFRCxPQUFPLENBQUNFLEdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRVAsa0VBQU0sQ0FBQ1EsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUgsT0FBTyxDQUFDRyxJQUFaLENBREYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFFUixrRUFBTSxDQUFDUyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUVULGtFQUFNLENBQUNVLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NMLE9BQU8sQ0FBQ0ssUUFBeEMsQ0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVMLE9BQU8sQ0FBQ0UsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQkYsT0FBTyxDQUFDTSxLQUFsQyxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJTixPQUFPLENBQUNJLFdBQVosQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBRUosT0FBTyxDQUFDTyxNQURmO0FBRUUsU0FBRyxFQUFFUCxPQUFPLENBQUNRLE1BRmY7QUFHRSxlQUFTLEVBQUViLGtFQUFNLENBQUNZLE1BSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUcsVUFBSSxFQUFFUCxPQUFPLENBQUNTLE1BQWpCO0FBQXlCLGVBQVMsRUFBRWQsa0VBQU0sQ0FBQ2EsTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT1IsT0FBTyxDQUFDUSxNQUFmLENBREYsQ0FORixDQUpGLENBSkYsQ0FEWTtBQUFBLEdBQWIsQ0FWSCxDQU5GLENBREY7QUEwQ0Q7S0EzQ3VCZCxRIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4uLy4uL2RhdGEvYXJ0aWNsZXMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRmlSc3MgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BcnRpY2xlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJZiB5b3UgZW5qb3kgdGhlIGFydGljbGUsIHBsZWFzZSBkb3snICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiL2FwaS9yc3NcIj5cbiAgICAgICAgICAgICAgc3Vic2NyaWJlIHRvIHRoZSBSU1MgZmVlZCA8RmlSc3MgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9IGtleT17YXJ0aWNsZS51cmx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+e2FydGljbGUuY2F0ZWdvcnl9PC9wPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXthcnRpY2xlLnVybH0+e2FydGljbGUudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpY2xlLnNvY2lhbH0gY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnthcnRpY2xlLmF1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles/index.tsx\n'
      )

      /***/
    },
})
