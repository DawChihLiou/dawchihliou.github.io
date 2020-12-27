webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");\n/* harmony import */ var _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkmodeSwitch.module.css */ "./components/DarkmodeSwitch/DarkmodeSwitch.module.css");\n/* harmony import */ var _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SchemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SchemeProvider */ "./components/SchemeProvider/index.tsx");\nvar _this = undefined,\n    _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch(_ref) {\n  _s();\n\n  var showLabel = _ref.showLabel;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SchemeProvider__WEBPACK_IMPORTED_MODULE_4__["SchemeContext"]),\n      scheme = _useContext.scheme,\n      setScheme = _useContext.setScheme;\n\n  var _switch = function _switch(preference) {};\n\n  return __jsx("div", {\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    onClick: setScheme(\'light\'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx("div", {\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {\n    component: null,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, scheme === \'auto\' && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-enter\'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-enter-active\'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-exit\'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-exit-active\']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiToggleLeft"], {\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  })), scheme === \'light\' && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-enter\'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-enter-active\'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-exit\'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-exit-active\']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiSun"], {\n    onClick: setScheme(\'dark\'),\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  })), scheme === \'dark\' && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-enter\'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-enter-active\'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-exit\'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a[\'button-exit-active\']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiMoon"], {\n    onClick: setScheme(\'auto\'),\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  })))), showLabel && scheme === \'light\' && __jsx("span", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 43\n    }\n  }, "Light scheme"), showLabel && scheme === \'dark\' && __jsx("span", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 42\n    }\n  }, "Dark scheme"), showLabel && scheme === \'auto\' && __jsx("span", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 42\n    }\n  }, "Sync with OS scheme"));\n};\n\n_s(DarkmodeSwitch, "0HvPcHIgSjwrGV9Q9iZbuyoPycE=");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__["default"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, "DarkmodeSwitch");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInNob3dMYWJlbCIsInVzZUNvbnRleHQiLCJTY2hlbWVDb250ZXh0Iiwic2NoZW1lIiwic2V0U2NoZW1lIiwic3dpdGNoIiwicHJlZmVyZW5jZSIsInN0eWxlcyIsImNvbnRhaW5lciIsIndyYXAiLCJlbnRlciIsImVudGVyQWN0aXZlIiwiZXhpdCIsImV4aXRBY3RpdmUiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxvQkFDekNDLHdEQUFVLENBQUNDLDZEQUFELENBRCtCO0FBQUEsTUFDL0RDLE1BRCtELGVBQy9EQSxNQUQrRDtBQUFBLE1BQ3ZEQyxTQUR1RCxlQUN2REEsU0FEdUQ7O0FBRXZFLE1BQU1DLE9BQU0sR0FBRyxTQUFUQSxPQUFTLENBQUNDLFVBQUQsRUFBNEIsQ0FFMUMsQ0FGRDs7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxTQUF2QjtBQUFrQyxXQUFPLEVBQUVKLFNBQVMsQ0FBQyxPQUFELENBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUcsaUVBQU0sQ0FBQ0UsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBaUIsYUFBUyxFQUFFLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sTUFBTSxLQUFLLE1BQVgsSUFDQyxNQUFDLG9FQUFEO0FBQ0UsV0FBTyxFQUFFLEdBRFg7QUFFRSxjQUFVLEVBQUU7QUFDVk8sV0FBSyxFQUFFSCxpRUFBTSxDQUFDLGNBQUQsQ0FESDtBQUVWSSxpQkFBVyxFQUFFSixpRUFBTSxDQUFDLHFCQUFELENBRlQ7QUFHVkssVUFBSSxFQUFFTCxpRUFBTSxDQUFDLGFBQUQsQ0FIRjtBQUlWTSxnQkFBVSxFQUFFTixpRUFBTSxDQUFDLG9CQUFEO0FBSlIsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQywyREFBRDtBQUFjLGFBQVMsRUFBRUEsaUVBQU0sQ0FBQ08sTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBRkosRUFjR1gsTUFBTSxLQUFLLE9BQVgsSUFDQyxNQUFDLG9FQUFEO0FBQ0UsV0FBTyxFQUFFLEdBRFg7QUFFRSxjQUFVLEVBQUU7QUFDVk8sV0FBSyxFQUFFSCxpRUFBTSxDQUFDLGNBQUQsQ0FESDtBQUVWSSxpQkFBVyxFQUFFSixpRUFBTSxDQUFDLHFCQUFELENBRlQ7QUFHVkssVUFBSSxFQUFFTCxpRUFBTSxDQUFDLGFBQUQsQ0FIRjtBQUlWTSxnQkFBVSxFQUFFTixpRUFBTSxDQUFDLG9CQUFEO0FBSlIsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxvREFBRDtBQUFPLFdBQU8sRUFBRUgsU0FBUyxDQUFDLE1BQUQsQ0FBekI7QUFBbUMsYUFBUyxFQUFFRyxpRUFBTSxDQUFDTyxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FmSixFQTJCR1gsTUFBTSxLQUFLLE1BQVgsSUFDQyxNQUFDLG9FQUFEO0FBQ0UsV0FBTyxFQUFFLEdBRFg7QUFFRSxjQUFVLEVBQUU7QUFDVk8sV0FBSyxFQUFFSCxpRUFBTSxDQUFDLGNBQUQsQ0FESDtBQUVWSSxpQkFBVyxFQUFFSixpRUFBTSxDQUFDLHFCQUFELENBRlQ7QUFHVkssVUFBSSxFQUFFTCxpRUFBTSxDQUFDLGFBQUQsQ0FIRjtBQUlWTSxnQkFBVSxFQUFFTixpRUFBTSxDQUFDLG9CQUFEO0FBSlIsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxxREFBRDtBQUFRLFdBQU8sRUFBRUgsU0FBUyxDQUFDLE1BQUQsQ0FBMUI7QUFBb0MsYUFBUyxFQUFFRyxpRUFBTSxDQUFDTyxNQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0E1QkosQ0FERixDQURGLEVBNENHZCxTQUFTLElBQUlHLE1BQU0sS0FBSyxPQUF4QixJQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTVDdEMsRUE2Q0dILFNBQVMsSUFBSUcsTUFBTSxLQUFLLE1BQXhCLElBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0NyQyxFQThDR0gsU0FBUyxJQUFJRyxNQUFNLEtBQUssTUFBeEIsSUFBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkE5Q3JDLENBREY7QUFrREQsQ0F4REQ7O0dBQU1KLGM7O0tBQUFBLGM7QUEwRFNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biwgRmlUb2dnbGVMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Rhcmttb2RlU3dpdGNoLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBTY2hlbWVDb250ZXh0LCBDb2xvclNjaGVtZSB9IGZyb20gJy4uL1NjaGVtZVByb3ZpZGVyJ1xuXG50eXBlIERhcmttb2RlU3dpdGNoUHJvcHMgPSB7XG4gIHNob3dMYWJlbD86IGJvb2xlYW5cbn1cblxuY29uc3QgRGFya21vZGVTd2l0Y2g6IFJlYWN0LkZDPERhcmttb2RlU3dpdGNoUHJvcHM+ID0gKHsgc2hvd0xhYmVsIH0pID0+IHtcbiAgY29uc3QgeyBzY2hlbWUsIHNldFNjaGVtZSB9ID0gdXNlQ29udGV4dChTY2hlbWVDb250ZXh0KVxuICBjb25zdCBzd2l0Y2ggPSAocHJlZmVyZW5jZTpDb2xvclNjaGVtZSkgPT4ge1xuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gb25DbGljaz17c2V0U2NoZW1lKCdsaWdodCcpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgIDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PXtudWxsfT5cbiAgICAgICAgICB7c2NoZW1lID09PSAnYXV0bycgJiYgKFxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgICAgdGltZW91dD17MjUwfVxuICAgICAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICAgICAgZW50ZXI6IHN0eWxlc1snYnV0dG9uLWVudGVyJ10sXG4gICAgICAgICAgICAgICAgZW50ZXJBY3RpdmU6IHN0eWxlc1snYnV0dG9uLWVudGVyLWFjdGl2ZSddLFxuICAgICAgICAgICAgICAgIGV4aXQ6IHN0eWxlc1snYnV0dG9uLWV4aXQnXSxcbiAgICAgICAgICAgICAgICBleGl0QWN0aXZlOiBzdHlsZXNbJ2J1dHRvbi1leGl0LWFjdGl2ZSddLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmlUb2dnbGVMZWZ0IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzY2hlbWUgPT09ICdsaWdodCcgJiYgKFxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgICAgdGltZW91dD17MjUwfVxuICAgICAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICAgICAgZW50ZXI6IHN0eWxlc1snYnV0dG9uLWVudGVyJ10sXG4gICAgICAgICAgICAgICAgZW50ZXJBY3RpdmU6IHN0eWxlc1snYnV0dG9uLWVudGVyLWFjdGl2ZSddLFxuICAgICAgICAgICAgICAgIGV4aXQ6IHN0eWxlc1snYnV0dG9uLWV4aXQnXSxcbiAgICAgICAgICAgICAgICBleGl0QWN0aXZlOiBzdHlsZXNbJ2J1dHRvbi1leGl0LWFjdGl2ZSddLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmlTdW4gb25DbGljaz17c2V0U2NoZW1lKCdkYXJrJyl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzY2hlbWUgPT09ICdkYXJrJyAmJiAoXG4gICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICB0aW1lb3V0PXsyNTB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgICAgICBlbnRlcjogc3R5bGVzWydidXR0b24tZW50ZXInXSxcbiAgICAgICAgICAgICAgICBlbnRlckFjdGl2ZTogc3R5bGVzWydidXR0b24tZW50ZXItYWN0aXZlJ10sXG4gICAgICAgICAgICAgICAgZXhpdDogc3R5bGVzWydidXR0b24tZXhpdCddLFxuICAgICAgICAgICAgICAgIGV4aXRBY3RpdmU6IHN0eWxlc1snYnV0dG9uLWV4aXQtYWN0aXZlJ10sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGaU1vb24gb25DbGljaz17c2V0U2NoZW1lKCdhdXRvJyl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dMYWJlbCAmJiBzY2hlbWUgPT09ICdsaWdodCcgJiYgPHNwYW4+TGlnaHQgc2NoZW1lPC9zcGFuPn1cbiAgICAgIHtzaG93TGFiZWwgJiYgc2NoZW1lID09PSAnZGFyaycgJiYgPHNwYW4+RGFyayBzY2hlbWU8L3NwYW4+fVxuICAgICAge3Nob3dMYWJlbCAmJiBzY2hlbWUgPT09ICdhdXRvJyAmJiA8c3Bhbj5TeW5jIHdpdGggT1Mgc2NoZW1lPC9zcGFuPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZVN3aXRjaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n'
      )

      /***/
    },
})
