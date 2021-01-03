webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/Nav/Nav.tsx':
    /*!********************************!*\
  !*** ./components/Nav/Nav.tsx ***!
  \********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.module.css */ "./components/Nav/Nav.module.css");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/socials */ "./utils/socials.ts");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");\n/* harmony import */ var _DarkmodeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DarkmodeSwitch */ "./components/DarkmodeSwitch/index.tsx");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/Nav/Nav.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),\n      isMenuOpen = _useState[0],\n      openMenu = _useState[1];\n\n  var closeMenu = function closeMenu() {\n    return openMenu(false);\n  };\n\n  var onMenuStateChange = function onMenuStateChange(_ref) {\n    var isOpen = _ref.isOpen;\n    return openMenu(isOpen);\n  };\n\n  return __jsx("header", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["push"], {\n    pageWrapId: \'page-wrap\',\n    outerContainerId: \'outer-container\',\n    customBurgerIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiMenu"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 27\n      }\n    }),\n    customCrossIcon: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiX"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 26\n      }\n    }),\n    isOpen: isMenuOpen,\n    onStateChange: onMenuStateChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: "/",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx("button", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.link,\n    onClick: closeMenu,\n    tabIndex: isMenuOpen ? 0 : -1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: "/now",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx("button", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.link,\n    onClick: closeMenu,\n    tabIndex: isMenuOpen ? 0 : -1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, "Now")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: "/articles",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx("button", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.link,\n    onClick: closeMenu,\n    tabIndex: isMenuOpen ? 0 : -1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, "Articles")), __jsx("span", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pusher,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx("span", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx("div", {\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profile,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].linkedin,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s Linkedin profile",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrLinkedin"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  })), __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].github,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s GitHub profile",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrGithub"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  })), __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].medium,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s Medium profile",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrMedium"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  })), __jsx("a", {\n    href: _utils_socials__WEBPACK_IMPORTED_MODULE_4__["default"].twitter,\n    target: "_blank",\n    rel: "noreferrer",\n    "aria-label": "Link to Daw-Chih\'s Twitter",\n    className: _Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__["GrTwitter"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }))), __jsx(_DarkmodeSwitch__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    showLabel: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Nav, "hnROw5OdeKyzQVSKW5QWWkgmA0A=");\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, "Nav");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2LnRzeD81ODZjIl0sIm5hbWVzIjpbIk5hdiIsInVzZVN0YXRlIiwiaXNNZW51T3BlbiIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwib25NZW51U3RhdGVDaGFuZ2UiLCJpc09wZW4iLCJzdHlsZXMiLCJoZWFkZXIiLCJsaW5rIiwicHVzaGVyIiwiZGl2aWRlciIsInByb2ZpbGUiLCJzb2NpYWxzIiwibGlua2VkaW4iLCJpY29uTGluayIsImdpdGh1YiIsIm1lZGl1bSIsInR3aXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUNyQkMsVUFEcUI7QUFBQSxNQUNUQyxRQURTOztBQUU1QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1ELFFBQVEsQ0FBQyxLQUFELENBQWQ7QUFBQSxHQUFsQjs7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsUUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsV0FBZ0JILFFBQVEsQ0FBQ0csTUFBRCxDQUF4QjtBQUFBLEdBQTFCOztBQUVBLFNBQ0U7QUFBUSxhQUFTLEVBQUVDLHNEQUFNLENBQUNDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsY0FBVSxFQUFFLFdBRGQ7QUFFRSxvQkFBZ0IsRUFBRSxpQkFGcEI7QUFHRSxvQkFBZ0IsRUFBRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIcEI7QUFJRSxtQkFBZSxFQUFFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxN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LFFBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQTVCRixDQXJDRixFQTJFRSxNQUFDLHVEQUFEO0FBQWdCLGFBQVMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNFRixDQURGLENBREY7QUFpRkQ7O0dBdEZ1QmYsRzs7S0FBQUEsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2L05hdi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHB1c2ggYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51J1xuaW1wb3J0IHsgRmlNZW51LCBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXYubW9kdWxlLmNzcydcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uLy4uL3V0aWxzL3NvY2lhbHMnXG5pbXBvcnQgeyBHckxpbmtlZGluLCBHckdpdGh1YiwgR3JNZWRpdW0sIEdyVHdpdHRlciB9IGZyb20gJ3JlYWN0LWljb25zL2dyJ1xuaW1wb3J0IERhcmttb2RlU3dpdGNoIGZyb20gJy4uL0Rhcmttb2RlU3dpdGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBvcGVuTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4gb3Blbk1lbnUoZmFsc2UpXG4gIGNvbnN0IG9uTWVudVN0YXRlQ2hhbmdlID0gKHsgaXNPcGVuIH0pID0+IG9wZW5NZW51KGlzT3BlbilcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxNZW51XG4gICAgICAgIHBhZ2VXcmFwSWQ9eydwYWdlLXdyYXAnfVxuICAgICAgICBvdXRlckNvbnRhaW5lcklkPXsnb3V0ZXItY29udGFpbmVyJ31cbiAgICAgICAgY3VzdG9tQnVyZ2VySWNvbj17PEZpTWVudSAvPn1cbiAgICAgICAgY3VzdG9tQ3Jvc3NJY29uPXs8RmlYIC8+fVxuICAgICAgICBpc09wZW49e2lzTWVudU9wZW59XG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e29uTWVudVN0YXRlQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1lbnV9XG4gICAgICAgICAgICB0YWJJbmRleD17aXNNZW51T3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ub3dcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rfVxuICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNZW51fVxuICAgICAgICAgICAgdGFiSW5kZXg9e2lzTWVudU9wZW4gPyAwIDogLTF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTm93XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRpY2xlc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1lbnV9XG4gICAgICAgICAgICB0YWJJbmRleD17aXNNZW51T3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBcnRpY2xlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnB1c2hlcn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17c29jaWFscy5saW5rZWRpbn1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMaW5rIHRvIERhdy1DaGloJ3MgTGlua2VkaW4gcHJvZmlsZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29uTGlua31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JMaW5rZWRpbiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17c29jaWFscy5naXRodWJ9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGluayB0byBEYXctQ2hpaCdzIEdpdEh1YiBwcm9maWxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb25MaW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHckdpdGh1YiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17c29jaWFscy5tZWRpdW19XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGluayB0byBEYXctQ2hpaCdzIE1lZGl1bSBwcm9maWxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb25MaW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHck1lZGl1bSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17c29jaWFscy50d2l0dGVyfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpbmsgdG8gRGF3LUNoaWgncyBUd2l0dGVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb25MaW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHclR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGFya21vZGVTd2l0Y2ggc2hvd0xhYmVsIC8+XG4gICAgICA8L01lbnU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav/Nav.tsx\n'
      )

      /***/
    },
})
