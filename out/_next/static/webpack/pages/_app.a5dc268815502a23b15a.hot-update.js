webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/Nav/Nav.tsx':
    /*!********************************!*\
  !*** ./components/Nav/Nav.tsx ***!
  \********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.module.css */ "./components/Nav/Nav.module.css");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/socials */ "./utils/socials.ts");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");\n/* harmony import */ var _DarkmodeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DarkmodeSwitch */ "./components/DarkmodeSwitch/index.tsx");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/Nav/Nav.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),\n      isMenuOpen = _useState[0],\n      openMenu = _useState[1];\n\n  var closeMenu = function closeMenu() {\n    return openMenu(false);\n  };\n\n  var onMenuStateChange = function onMenuStateChange(_ref) {\n    var isOpen = _ref.isOpen;\n    return openMenu(isOpen);\n  };\n\n  return __jsx("header", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["push"], {\n    pageWrapId: \'page-wrap\',\n    outerContainerId: \'outer-container\',\n    customBurgerIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiMenu"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 27\n      }\n    }),\n    customCrossIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiX"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 26\n      }\n    }),\n    disableAutoFocus: true,\n    isOpen: isMenuOpen,\n    onStateChange: onMenuStateChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx("section", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx("div", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.links,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: "/",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx("span", {\n    onClick: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: "/now",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx("span", {\n    onClick: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, "Now")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: "/articles",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx("span", {\n    onClick: closeMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  }, "Articles")))), __jsx("section", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx("span", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx("div", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profile,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].linkedin,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s Linkedin profile",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrLinkedin"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  })), __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].github,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s GitHub profile",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrGithub"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  })), __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].medium,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s Medium profile",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrMedium"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  })), __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].twitter,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s Twitter",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrTwitter"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }))), __jsx(_DarkmodeSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    showLabel: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Nav, "hnROw5OdeKyzQVSKW5QWWkgmA0A=");\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, "Nav");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2LnRzeD81ODZjIl0sIm5hbWVzIjpbIk5hdiIsInVzZVN0YXRlIiwiaXNNZW51T3BlbiIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwib25NZW51U3RhdGVDaGFuZ2UiLCJpc09wZW4iLCJzdHlsZXMiLCJoZWFkZXIiLCJsaW5rcyIsImRpdmlkZXIiLCJwcm9maWxlIiwic29jaWFscyIsImxpbmtlZGluIiwiaWNvbkxpbmsiLCJnaXRodWIiLCJtZWRpdW0iLCJ0d2l0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsS0FBRCxDQURYO0FBQUEsTUFDckJDLFVBRHFCO0FBQUEsTUFDVEMsUUFEUzs7QUFFNUIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNRCxRQUFRLENBQUMsS0FBRCxDQUFkO0FBQUEsR0FBbEI7O0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFFBQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFdBQWdCSCxRQUFRLENBQUNHLE1BQUQsQ0FBeEI7QUFBQSxHQUExQjs7QUFFQSxTQUNFO0FBQVEsYUFBUyxFQUFFQyxzREFBTSxDQUFDQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLGNBQVUsRUFBRSxXQURkO0FBRUUsb0JBQWdCLEVBQUUsaUJBRnBCO0FBR0Usb0JBQWdCLEVBQUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSHBCO0FBSUUsbUJBQWUsRUFBRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKbkI7QUFL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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLENBdEJGLENBREYsQ0FERjtBQXNFRDs7R0EzRXVCZCxHOztLQUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYvTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcHVzaCBhcyBNZW51IH0gZnJvbSAncmVhY3QtYnVyZ2VyLW1lbnUnXG5pbXBvcnQgeyBGaU1lbnUsIEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdi5tb2R1bGUuY3NzJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vLi4vdXRpbHMvc29jaWFscydcbmltcG9ydCB7IEdyTGlua2VkaW4sIEdyR2l0aHViLCBHck1lZGl1bSwgR3JUd2l0dGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvZ3InXG5pbXBvcnQgRGFya21vZGVTd2l0Y2ggZnJvbSAnLi4vRGFya21vZGVTd2l0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcbiAgY29uc3QgW2lzTWVudU9wZW4sIG9wZW5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiBvcGVuTWVudShmYWxzZSlcbiAgY29uc3Qgb25NZW51U3RhdGVDaGFuZ2UgPSAoeyBpc09wZW4gfSkgPT4gb3Blbk1lbnUoaXNPcGVuKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgPE1lbnVcbiAgICAgICAgcGFnZVdyYXBJZD17J3BhZ2Utd3JhcCd9XG4gICAgICAgIG91dGVyQ29udGFpbmVySWQ9eydvdXRlci1jb250YWluZXInfVxuICAgICAgICBjdXN0b21CdXJnZXJJY29uPXs8RmlNZW51IC8+fVxuICAgICAgICBjdXN0b21Dcm9zc0ljb249ezxGaVggLz59XG4gICAgICAgIGRpc2FibGVBdXRvRm9jdXNcbiAgICAgICAgaXNPcGVuPXtpc01lbnVPcGVufVxuICAgICAgICBvblN0YXRlQ2hhbmdlPXtvbk1lbnVTdGF0ZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtjbG9zZU1lbnV9PkhvbWU8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL25vd1wiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtjbG9zZU1lbnV9Pk5vdzwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Y2xvc2VNZW51fT5BcnRpY2xlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVyfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtzb2NpYWxzLmxpbmtlZGlufVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpbmsgdG8gRGF3LUNoaWgncyBMaW5rZWRpbiBwcm9maWxlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkxpbmt9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHckxpbmtlZGluIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtzb2NpYWxzLmdpdGh1Yn1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMaW5rIHRvIERhdy1DaGloJ3MgR2l0SHViIHByb2ZpbGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29uTGlua31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyR2l0aHViIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtzb2NpYWxzLm1lZGl1bX1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMaW5rIHRvIERhdy1DaGloJ3MgTWVkaXVtIHByb2ZpbGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29uTGlua31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyTWVkaXVtIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtzb2NpYWxzLnR3aXR0ZXJ9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGluayB0byBEYXctQ2hpaCdzIFR3aXR0ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29uTGlua31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyVHdpdHRlciAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPERhcmttb2RlU3dpdGNoIHNob3dMYWJlbCAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L01lbnU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav/Nav.tsx\n'
      )

      /***/
    },
})
