webpackHotUpdate_N_E('pages/index', {
  /***/ './components/Contact/Contact.tsx':
    /*!****************************************!*\
  !*** ./components/Contact/Contact.tsx ***!
  \****************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.module.css */ "./components/Contact/Contact.module.css");\n/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_socials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/socials */ "./utils/socials.ts");\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/Contact/Contact.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Contact() {\n  return __jsx("div", {\n    className: _Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrap,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx("h1", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, "Contact me"), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, "Feel free to reach out to me through the on Twitter", \' \', __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_3__["default"].twitter,\n    target: "_blank",\n    rel: "noreferrer",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, "@dawchihliou"), "."), __jsx("div", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_3__["default"].twitter,\n    target: "_blank",\n    rel: "noreferrer",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrTwitter"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  })), __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_3__["default"].medium,\n    target: "_blank",\n    rel: "noreferrer",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrMedium"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = Contact;\n\nvar _c;\n\n$RefreshReg$(_c, "Contact");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3QudHN4PzhhYTAiXSwibmFtZXMiOlsiQ29udGFjdCIsInN0eWxlcyIsIndyYXAiLCJzb2NpYWxzIiwidHdpdHRlciIsIm1lZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxTQUNFO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBQ3NELEdBRHRELEVBRUU7QUFBRyxRQUFJLEVBQUVDLHNEQUFPLENBQUNDLE9BQWpCO0FBQTBCLFVBQU0sRUFBQyxRQUFqQztBQUEwQyxPQUFHLEVBQUMsWUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixNQUZGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFRCxzREFBTyxDQUFDQyxPQUFqQjtBQUEwQixVQUFNLEVBQUMsUUFBakM7QUFBMEMsT0FBRyxFQUFDLFlBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxRQUFJLEVBQUVELHNEQUFPLENBQUNFLE1BQWpCO0FBQXlCLFVBQU0sRUFBQyxRQUFoQztBQUF5QyxPQUFHLEVBQUMsWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FURixDQURGO0FBb0JEO0tBckJ1QkwsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdyTWVkaXVtLCBHclR3aXR0ZXIgfSBmcm9tICdyZWFjdC1pY29ucy9ncidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi8uLi91dGlscy9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICA8aDE+Q29udGFjdCBtZTwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgRmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byBtZSB0aHJvdWdoIHRoZSBvbiBUd2l0dGVyeycgJ31cbiAgICAgICAgPGEgaHJlZj17c29jaWFscy50d2l0dGVyfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgQGRhd2NoaWhsaW91XG4gICAgICAgIDwvYT5cbiAgICAgICAgLlxuICAgICAgPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj17c29jaWFscy50d2l0dGVyfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEdyVHdpdHRlciAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9e3NvY2lhbHMubWVkaXVtfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEdyTWVkaXVtIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Contact/Contact.tsx\n'
      )

      /***/
    },
})
