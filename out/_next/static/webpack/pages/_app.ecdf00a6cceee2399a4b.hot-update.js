webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\nvar _this = undefined,\n    _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),\n      prefersDark = _useState[0],\n      setPrefersDark = _useState[1];\n\n  var darkmodeHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {\n    setPrefersDark(!prefersDark);\n  }, [prefersDark]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    var media = window.matchMedia(\'(prefers-color-scheme: dark)\');\n\n    if (media.addEventListener === undefined) {\n      media.addListener(darkmodeHandler);\n    } else {\n      media.addEventListener(\'change\', darkmodeHandler);\n    }\n\n    return function () {\n      media.removeListener(darkmodeHandler);\n    };\n  }, [darkmodeHandler]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    var target = document.querySelector(\'body\');\n    var media = window.matchMedia(\'(prefers-color-scheme: dark)\');\n\n    if (media.matches) {\n      target.classList.add(\'dark\');\n      setPrefersDark(true);\n    } else {\n      target.classList.remove(\'dark\');\n      setPrefersDark(false);\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, prefersDark && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiMoon"], {\n    size: "1.5em",\n    onClick: darkmodeHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 23\n    }\n  }), !prefersDark && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiSun"], {\n    size: "1.5em",\n    onClick: darkmodeHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 24\n    }\n  }), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiToggleLeft"], {\n    size: "1.5em",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, "G5OsKPxieGAL2U/co/Vq+MpXhW8=");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__["default"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, "DarkmodeSwitch");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwicHJlZmVyc0RhcmsiLCJzZXRQcmVmZXJzRGFyayIsImRhcmttb2RlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwibWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVuZGVmaW5lZCIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYXRjaGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUM5QkMsV0FEOEI7QUFBQSxNQUNqQkMsY0FEaUI7O0FBR3JDLE1BQU1DLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3hDRixrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNELEdBRmtDLEVBRWhDLENBQUNBLFdBQUQsQ0FGZ0MsQ0FBbkM7QUFJQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsOEJBQWxCLENBQWQ7O0FBQ0EsUUFBSUYsS0FBSyxDQUFDRyxnQkFBTixLQUEyQkMsU0FBL0IsRUFBMEM7QUFDeENKLFdBQUssQ0FBQ0ssV0FBTixDQUFrQlIsZUFBbEI7QUFDRCxLQUZELE1BRU87QUFDTEcsV0FBSyxDQUFDRyxnQkFBTixDQUF1QixRQUF2QixFQUFpQ04sZUFBakM7QUFDRDs7QUFFRCxXQUFPLFlBQU07QUFDWEcsV0FBSyxDQUFDTSxjQUFOLENBQXFCVCxlQUFyQjtBQUNELEtBRkQ7QUFHRCxHQVhRLEVBV04sQ0FBQ0EsZUFBRCxDQVhNLENBQVQ7QUFhQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZjtBQUNBLFFBQU1ULEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLDhCQUFsQixDQUFkOztBQUVBLFFBQUlGLEtBQUssQ0FBQ1UsT0FBVixFQUFtQjtBQUNqQkgsWUFBTSxDQUFDSSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixNQUFyQjtBQUNBaEIsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxLQUhELE1BR087QUFDTFcsWUFBTSxDQUFDSSxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixNQUF4QjtBQUNBakIsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRDtBQUNGLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxTQUNFLG1FQUNHRCxXQUFXLElBQUksTUFBQyxxREFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFdBQU8sRUFBRUUsZUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURsQixFQUVHLENBQUNGLFdBQUQsSUFBZ0IsTUFBQyxvREFBRDtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFdBQU8sRUFBRUUsZUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZuQixFQUdFLE1BQUMsMkRBQUQ7QUFBYyxRQUFJLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRCxDQXhDRDs7R0FBTUosYzs7S0FBQUEsYztBQTBDU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhcmttb2RlU3dpdGNoL0Rhcmttb2RlU3dpdGNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biwgRmlUb2dnbGVMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGFya21vZGVTd2l0Y2gubW9kdWxlLmNzcydcblxuY29uc3QgRGFya21vZGVTd2l0Y2g6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcHJlZmVyc0RhcmssIHNldFByZWZlcnNEYXJrXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGRhcmttb2RlSGFuZGxlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRQcmVmZXJzRGFyayghcHJlZmVyc0RhcmspXG4gIH0sIFtwcmVmZXJzRGFya10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcbiAgICBpZiAobWVkaWEuYWRkRXZlbnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtZWRpYS5hZGRMaXN0ZW5lcihkYXJrbW9kZUhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhcmttb2RlSGFuZGxlcilcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbWVkaWEucmVtb3ZlTGlzdGVuZXIoZGFya21vZGVIYW5kbGVyKVxuICAgIH1cbiAgfSwgW2Rhcmttb2RlSGFuZGxlcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAgIGlmIChtZWRpYS5tYXRjaGVzKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICBzZXRQcmVmZXJzRGFyayh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICBzZXRQcmVmZXJzRGFyayhmYWxzZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcmVmZXJzRGFyayAmJiA8RmlNb29uIHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e2Rhcmttb2RlSGFuZGxlcn0gLz59XG4gICAgICB7IXByZWZlcnNEYXJrICYmIDxGaVN1biBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtkYXJrbW9kZUhhbmRsZXJ9IC8+fVxuICAgICAgPEZpVG9nZ2xlTGVmdCBzaXplPVwiMS41ZW1cIiAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlU3dpdGNoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n'
      )

      /***/
    },
})
