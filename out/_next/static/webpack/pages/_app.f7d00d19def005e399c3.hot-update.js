webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/SchemeProvider/SchemeProvider.tsx':
    /*!******************************************************!*\
  !*** ./components/SchemeProvider/SchemeProvider.tsx ***!
  \******************************************************/
    /*! exports provided: SchemeContext, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SchemeContext\", function() { return SchemeContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/SchemeProvider/SchemeProvider.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar SchemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\n\nvar SchemeProvider = function SchemeProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  /**\n   * Register event hander. Update body's class name based on media query\n   * only when local storage is empty (user select \"darkmode: auto\").\n   */\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n    var handler = function handler() {\n      var body = document.querySelector('body');\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var prefersDarkmode = media.matches;\n\n      if (schemeInStorage === null) {\n        if (prefersDarkmode) {\n          body.classList.add('dark');\n        } else {\n          body.classList.remove('dark');\n        }\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(handler);\n    } else {\n      media.addEventListener('change', handler);\n    }\n\n    return function () {\n      if (media.removeEventListener === undefined) {\n        media.removeListener(handler);\n      } else {\n        media.removeEventListener('change', handler);\n      }\n    };\n  }, []);\n  /**\n   * Control local storage and body's class name based on \"scheme\" state.\n   */\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = function setColorScheme(preference) {\n    return function () {\n      setScheme(preference);\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n\n      if (schemeInStorage === null) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n    } else if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n\n    var body = document.querySelector('body');\n\n    if (scheme === 'auto') {\n      var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (media.matches) {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    } else if (scheme === 'light') {\n      body.classList.remove('dark');\n    } else {\n      body.classList.add('dark');\n    }\n  }, [scheme]);\n  return __jsx(SchemeContext.Provider, {\n    value: {\n      scheme: scheme,\n      setColorScheme: setColorScheme\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(SchemeProvider, \"zCbysQQQBbh4H+CtgNR2kYxRolc=\");\n\n_c = SchemeProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SchemeProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"SchemeProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2hlbWVQcm92aWRlci9TY2hlbWVQcm92aWRlci50c3g/NmUwNiJdLCJuYW1lcyI6WyJTY2hlbWVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlNjaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJtZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJoYW5kbGVyIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjaGVtZUluU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmVmZXJzRGFya21vZGUiLCJtYXRjaGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVuZGVmaW5lZCIsImFkZExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwidXNlU3RhdGUiLCJzY2hlbWUiLCJzZXRTY2hlbWUiLCJzZXRDb2xvclNjaGVtZSIsInByZWZlcmVuY2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFTTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFvQixJQUFwQixDQUFuQzs7QUFFUCxJQUFNQyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDakQ7QUFDRjtBQUNBO0FBQ0E7QUFDRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsOEJBQWxCLENBQWQ7O0FBRUEsUUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsVUFBTUMsZUFBZSxHQUFHTixNQUFNLENBQUNPLFlBQVAsQ0FB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b0JBQWMsRUFBZEE7QUFBVixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d6QixRQURILENBREY7QUFLRCxDQXBGRDs7R0FBTUQsYzs7S0FBQUEsYztBQXNGU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NjaGVtZVByb3ZpZGVyL1NjaGVtZVByb3ZpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgQ29sb3JTY2hlbWUgPSAnYXV0bycgfCAnbGlnaHQnIHwgJ2RhcmsnIHwgbnVsbFxuXG50eXBlIFNjaGVtZUNvbnRleHRUeXBlID0ge1xuICBzY2hlbWU6IENvbG9yU2NoZW1lXG4gIHNldENvbG9yU2NoZW1lOiAocHJlZmVyZW5jZTogQ29sb3JTY2hlbWUpID0+ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFNjaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNjaGVtZUNvbnRleHRUeXBlPihudWxsKVxuXG5jb25zdCBTY2hlbWVQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIC8qKlxuICAgKiBSZWdpc3RlciBldmVudCBoYW5kZXIuIFVwZGF0ZSBib2R5J3MgY2xhc3MgbmFtZSBiYXNlZCBvbiBtZWRpYSBxdWVyeVxuICAgKiBvbmx5IHdoZW4gbG9jYWwgc3RvcmFnZSBpcyBlbXB0eSAodXNlciBzZWxlY3QgXCJkYXJrbW9kZTogYXV0b1wiKS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgICAgY29uc3Qgc2NoZW1lSW5TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICAgIGNvbnN0IHByZWZlcnNEYXJrbW9kZSA9IG1lZGlhLm1hdGNoZXNcblxuICAgICAgaWYgKHNjaGVtZUluU3RvcmFnZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJlZmVyc0Rhcmttb2RlKSB7XG4gICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVkaWEuYWRkTGlzdGVuZXIoaGFuZGxlcilcbiAgICB9IGVsc2Uge1xuICAgICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcilcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWRpYS5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcilcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGxvY2FsIHN0b3JhZ2UgYW5kIGJvZHkncyBjbGFzcyBuYW1lIGJhc2VkIG9uIFwic2NoZW1lXCIgc3RhdGUuXG4gICAqL1xuICBjb25zdCBbc2NoZW1lLCBzZXRTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KG51bGwpXG4gIGNvbnN0IHNldENvbG9yU2NoZW1lID0gKHByZWZlcmVuY2U6IENvbG9yU2NoZW1lKSA9PiAoKSA9PiB7XG4gICAgc2V0U2NoZW1lKHByZWZlcmVuY2UpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY2hlbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNjaGVtZUluU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgJ19fY29sb3Itc2NoZW1lX18nXG4gICAgICApIGFzIENvbG9yU2NoZW1lXG5cbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgc2V0U2NoZW1lKCdhdXRvJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjaGVtZShzY2hlbWVJblN0b3JhZ2UpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJywgc2NoZW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICAgIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgICAgIGlmIChtZWRpYS5tYXRjaGVzKSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NoZW1lID09PSAnbGlnaHQnKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgIH0gZWxzZSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgIH1cbiAgfSwgW3NjaGVtZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8U2NoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzY2hlbWUsIHNldENvbG9yU2NoZW1lIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2NoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWVQcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SchemeProvider/SchemeProvider.tsx\n"
      )

      /***/
    },
})
