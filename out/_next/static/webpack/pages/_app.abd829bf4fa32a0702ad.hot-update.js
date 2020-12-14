webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkmodeSwitch.module.css */ \"./components/DarkmodeSwitch/DarkmodeSwitch.module.css\");\n/* harmony import */ var _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  /**\n   * Control local storage and body's class name based on \"scheme\" state.\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n\n      if (schemeInStorage === null) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n    } else if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n\n    var body = document.querySelector('body');\n\n    if (scheme === 'auto') {\n      var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (media.matches) {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    } else if (scheme === 'light') {\n      body.classList.remove('dark');\n    } else {\n      body.classList.add('dark');\n    }\n  }, [scheme]);\n  /**\n   * Register event hander. Update body's class name based on media query\n   * only when local storage is empty (user select \"darkmode: auto\").\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n    var handler = function handler() {\n      var body = document.querySelector('body');\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\n      if (schemeInStorage === null) {\n        if (prefersDarkmode) {\n          body.classList.add('dark');\n        } else {\n          body.classList.remove('dark');\n        }\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(handler);\n    } else {\n      media.addEventListener('change', handler);\n    }\n\n    return function () {\n      if (media.removeEventListener === undefined) {\n        media.removeListener(handler);\n      } else {\n        media.removeEventListener('change', handler);\n      }\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    \"in\": scheme === 'auto',\n    unmountOnExit: true,\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter-active'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit-active']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    \"in\": scheme === 'light',\n    unmountOnExit: true,\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter-active'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit-active']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    \"in\": scheme === 'dark',\n    unmountOnExit: true,\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter-active'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit-active']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    className: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DarkmodeSwitch, \"Q3rGyhtArXXugLbZNwEKPZDkZis=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJzY2hlbWVJblN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZXIiLCJwcmVmZXJzRGFya21vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwidW5kZWZpbmVkIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJzdHlsZXMiLCJ3cmFwIiwiZW50ZXIiLCJlbnRlckFjdGl2ZSIsImV4aXQiLCJleGl0QWN0aXZlIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQWMsSUFBZCxDQURDO0FBQUEsTUFDOUJDLE1BRDhCO0FBQUEsTUFDdEJDLFNBRHNCOztBQUdyQyxNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQ2hDLFVBQUNDLFVBQUQ7QUFBQSxXQUE2QixZQUFNO0FBQ2pDSCxlQUFTLENBQUNHLFVBQUQsQ0FBVDtBQUNELEtBRkQ7QUFBQSxHQURnQyxFQUloQyxFQUpnQyxDQUFsQztBQU9BOzs7O0FBR0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLE1BQU0sS0FBSyxJQUFm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SWxDLE1BQU0sS0FBSyxNQURqQjtBQUVFLGlCQUFhLE1BRmY7QUFHRSxXQUFPLEVBQUUsR0FIWDtBQUlFLGNBQVUsRUFBRTtBQUNWOEIsV0FBSyxFQUFFRixpRUFBTSxDQUFDLGNBQUQsQ0FESDtBQUVWRyxpQkFBVyxFQUFFSCxpRUFBTSxDQUFDLHFCQUFELENBRlQ7QUFHVkksVUFBSSxFQUFFSixpRUFBTSxDQUFDLGFBQUQsQ0FIRjtBQUlWSyxnQkFBVSxFQUFFTCxpRUFBTSxDQUFDLG9CQUFEO0FBSlIsS0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxxREFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsV0FBTyxFQUFFMUIsY0FBYyxDQUFDLE1BQUQsQ0FGekI7QUFHRSxhQUFTLEVBQUUwQixpRUFBTSxDQUFDTSxNQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FuQ0YsQ0FERjtBQXVERCxDQTNJRDs7R0FBTXBDLGM7O0tBQUFBLGM7QUE2SVNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpTW9vbiwgRmlTdW4sIEZpVG9nZ2xlTGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGFya21vZGVTd2l0Y2gubW9kdWxlLmNzcydcblxudHlwZSBDb2xvclNjaGVtZSA9ICdhdXRvJyB8ICdsaWdodCcgfCAnZGFyaycgfCBudWxsXG5cbmNvbnN0IERhcmttb2RlU3dpdGNoOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NjaGVtZSwgc2V0U2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPihudWxsKVxuXG4gIGNvbnN0IHNldENvbG9yU2NoZW1lID0gdXNlQ2FsbGJhY2soXG4gICAgKHByZWZlcmVuY2U6IENvbG9yU2NoZW1lKSA9PiAoKSA9PiB7XG4gICAgICBzZXRTY2hlbWUocHJlZmVyZW5jZSlcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICAvKipcbiAgICogQ29udHJvbCBsb2NhbCBzdG9yYWdlIGFuZCBib2R5J3MgY2xhc3MgbmFtZSBiYXNlZCBvbiBcInNjaGVtZVwiIHN0YXRlLlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2NoZW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzY2hlbWVJblN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICdfX2NvbG9yLXNjaGVtZV9fJ1xuICAgICAgKSBhcyBDb2xvclNjaGVtZVxuXG4gICAgICBpZiAoc2NoZW1lSW5TdG9yYWdlID09PSBudWxsKSB7XG4gICAgICAgIHNldFNjaGVtZSgnYXV0bycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTY2hlbWUoc2NoZW1lSW5TdG9yYWdlKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NoZW1lID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX19jb2xvci1zY2hlbWVfXycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX19jb2xvci1zY2hlbWVfXycsIHNjaGVtZSlcbiAgICB9XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgICBpZiAoc2NoZW1lID09PSAnYXV0bycpIHtcbiAgICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuXG4gICAgICBpZiAobWVkaWEubWF0Y2hlcykge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNjaGVtZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICB9XG4gIH0sIFtzY2hlbWVdKVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBldmVudCBoYW5kZXIuIFVwZGF0ZSBib2R5J3MgY2xhc3MgbmFtZSBiYXNlZCBvbiBtZWRpYSBxdWVyeVxuICAgKiBvbmx5IHdoZW4gbG9jYWwgc3RvcmFnZSBpcyBlbXB0eSAodXNlciBzZWxlY3QgXCJkYXJrbW9kZTogYXV0b1wiKS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgICAgY29uc3Qgc2NoZW1lSW5TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICAgIGNvbnN0IHByZWZlcnNEYXJrbW9kZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcbiAgICAgICAgLm1hdGNoZXNcblxuICAgICAgaWYgKHNjaGVtZUluU3RvcmFnZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJlZmVyc0Rhcmttb2RlKSB7XG4gICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVkaWEuYWRkTGlzdGVuZXIoaGFuZGxlcilcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcilcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWRpYS5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcilcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgIGluPXtzY2hlbWUgPT09ICdhdXRvJ31cbiAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICB0aW1lb3V0PXsyNTB9XG4gICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICBlbnRlcjogc3R5bGVzWydidXR0b24tZW50ZXInXSxcbiAgICAgICAgICBlbnRlckFjdGl2ZTogc3R5bGVzWydidXR0b24tZW50ZXItYWN0aXZlJ10sXG4gICAgICAgICAgZXhpdDogc3R5bGVzWydidXR0b24tZXhpdCddLFxuICAgICAgICAgIGV4aXRBY3RpdmU6IHN0eWxlc1snYnV0dG9uLWV4aXQtYWN0aXZlJ10sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGaVRvZ2dsZUxlZnRcbiAgICAgICAgICBzaXplPVwiMS41ZW1cIlxuICAgICAgICAgIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdsaWdodCcpfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgIGluPXtzY2hlbWUgPT09ICdsaWdodCd9XG4gICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgdGltZW91dD17MjUwfVxuICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgZW50ZXI6IHN0eWxlc1snYnV0dG9uLWVudGVyJ10sXG4gICAgICAgICAgZW50ZXJBY3RpdmU6IHN0eWxlc1snYnV0dG9uLWVudGVyLWFjdGl2ZSddLFxuICAgICAgICAgIGV4aXQ6IHN0eWxlc1snYnV0dG9uLWV4aXQnXSxcbiAgICAgICAgICBleGl0QWN0aXZlOiBzdHlsZXNbJ2J1dHRvbi1leGl0LWFjdGl2ZSddLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmlTdW5cbiAgICAgICAgICBzaXplPVwiMS41ZW1cIlxuICAgICAgICAgIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdkYXJrJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAvPlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgaW49e3NjaGVtZSA9PT0gJ2RhcmsnfVxuICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgIGVudGVyOiBzdHlsZXNbJ2J1dHRvbi1lbnRlciddLFxuICAgICAgICAgIGVudGVyQWN0aXZlOiBzdHlsZXNbJ2J1dHRvbi1lbnRlci1hY3RpdmUnXSxcbiAgICAgICAgICBleGl0OiBzdHlsZXNbJ2J1dHRvbi1leGl0J10sXG4gICAgICAgICAgZXhpdEFjdGl2ZTogc3R5bGVzWydidXR0b24tZXhpdC1hY3RpdmUnXSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZpTW9vblxuICAgICAgICAgIHNpemU9XCIxLjVlbVwiXG4gICAgICAgICAgb25DbGljaz17c2V0Q29sb3JTY2hlbWUoJ2F1dG8nKX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgIC8+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFya21vZGVTd2l0Y2hcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },
})
