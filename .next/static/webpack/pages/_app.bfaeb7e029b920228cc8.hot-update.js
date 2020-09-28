webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/Nav/Nav.tsx':
    /*!********************************!*\
  !*** ./components/Nav/Nav.tsx ***!
  \********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav.module.css */ "./components/Nav/Nav.module.css");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/Nav/Nav.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Nav() {\n  return __jsx("header", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["push"], {\n    pageWrapId: \'page-wrap\',\n    outerContainerId: \'outer-container\',\n    customBurgerIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMenu"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 27\n      }\n    }),\n    customCrossIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiX"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 26\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/",\n    className: "menu-item",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, "Home"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/now",\n    className: "menu-item",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, "Now"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/publications",\n    className: "menu-item",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, "Publications")));\n}\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, "Nav");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2LnRzeD81ODZjIl0sIm5hbWVzIjpbIk5hdiIsInN0eWxlcyIsImhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFDNUIsU0FDRTtBQUFRLGFBQVMsRUFBRUMsc0RBQU0sQ0FBQ0MsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxjQUFVLEVBQUUsV0FEZDtBQUVFLG9CQUFnQixFQUFFLGlCQUZwQjtBQUdFLG9CQUFnQixFQUFFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhwQjtBQUlFLG1CQUFlLEVBQUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBU0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQWtCLGFBQVMsRUFBQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVEYsRUFZRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsYUFBUyxFQUFDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkYsQ0FERixDQURGO0FBb0JEO0tBckJ1QkYsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2L05hdi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHB1c2ggYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRmlNZW51LCBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXYubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxNZW51XG4gICAgICAgIHBhZ2VXcmFwSWQ9eydwYWdlLXdyYXAnfVxuICAgICAgICBvdXRlckNvbnRhaW5lcklkPXsnb3V0ZXItY29udGFpbmVyJ31cbiAgICAgICAgY3VzdG9tQnVyZ2VySWNvbj17PEZpTWVudSAvPn1cbiAgICAgICAgY3VzdG9tQ3Jvc3NJY29uPXs8RmlYIC8+fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL25vd1wiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgIE5vd1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHVibGljYXRpb25zXCIgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgUHVibGljYXRpb25zXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTWVudT5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/Nav.tsx\n'
      )

      /***/
    },
})
