webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/Nav/Nav.tsx':
    /*!********************************!*\
  !*** ./components/Nav/Nav.tsx ***!
  \********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav.module.css */ "./components/Nav/Nav.module.css");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/Nav/Nav.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var handleOpen = function handleOpen(event) {\n    setIsOpen(false);\n  };\n\n  var handleClose = function handleClose(event) {\n    setIsOpen(false);\n  };\n\n  return __jsx("header", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["push"], {\n    pageWrapId: \'page-wrap\',\n    outerContainerId: \'outer-container\',\n    customBurgerIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMenu"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 27\n      }\n    }),\n    customCrossIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiX"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 26\n      }\n    }),\n    isOpen: isOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/",\n    onClick: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, "Home"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/now",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, "Now"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/publications",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, "Publications")));\n}\n\n_s(Nav, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, "Nav");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2LnRzeD81ODZjIl0sIm5hbWVzIjpbIk5hdiIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlT3BlbiIsImV2ZW50IiwiaGFuZGxlQ2xvc2UiLCJzdHlsZXMiLCJoZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUNyQkMsTUFEcUI7QUFBQSxNQUNiQyxTQURhOztBQUU1QixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQWtEO0FBQ25FRixhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxLQUFELEVBQWtEO0FBQ3BFRixhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQVEsYUFBUyxFQUFFSSxzREFBTSxDQUFDQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLGNBQVUsRUFBRSxXQURkO0FBRUUsb0JBQWdCLEVBQUUsaUJBRnBCO0FBR0Usb0JBQWdCLEVBQUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSHBCO0FBSUUsbUJBQWUsRUFBRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKbkI7QUFLRSxVQUFNLEVBQUVOLE1BTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFdBQU8sRUFBRUksV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLEVBVUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FWRixFQVdFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGLENBREYsQ0FERjtBQWlCRDs7R0F6QnVCTixHOztLQUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYvTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcHVzaCBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGaU1lbnUsIEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdi5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgIHNldElzT3BlbihmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgIHNldElzT3BlbihmYWxzZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxNZW51XG4gICAgICAgIHBhZ2VXcmFwSWQ9eydwYWdlLXdyYXAnfVxuICAgICAgICBvdXRlckNvbnRhaW5lcklkPXsnb3V0ZXItY29udGFpbmVyJ31cbiAgICAgICAgY3VzdG9tQnVyZ2VySWNvbj17PEZpTWVudSAvPn1cbiAgICAgICAgY3VzdG9tQ3Jvc3NJY29uPXs8RmlYIC8+fVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbm93XCI+Tm93PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3B1YmxpY2F0aW9uc1wiPlB1YmxpY2F0aW9uczwvTGluaz5cbiAgICAgIDwvTWVudT5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/Nav.tsx\n'
      )

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/nonIterableRest.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js': false,
})
