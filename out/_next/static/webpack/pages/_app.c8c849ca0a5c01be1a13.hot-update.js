webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.module.css': false,

  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  /**\n   * Control local storage and body's class name based on \"scheme\" state.\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n\n      if (schemeInStorage === null) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n    } else if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n\n    var body = document.querySelector('body');\n\n    if (scheme === 'auto') {\n      var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (media.matches) {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    } else if (scheme === 'light') {\n      body.classList.remove('dark');\n    } else {\n      body.classList.add('dark');\n    }\n  }, [scheme]);\n  /**\n   * Register event hander. Update body's class name based on media query\n   * only when local storage is empty (user select \"darkmode: auto\").\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n    var handler = function handler() {\n      var body = document.querySelector('body');\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\n      if (schemeInStorage === null) {\n        if (prefersDarkmode) {\n          body.classList.add('dark');\n        } else {\n          body.classList.remove('dark');\n        }\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(handler);\n    } else {\n      media.addEventListener('change', handler);\n    }\n\n    return function () {\n      if (media.removeEventListener === undefined) {\n        media.removeListener(handler);\n      } else {\n        media.removeEventListener('change', handler);\n      }\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scheme === 'auto' && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    \"in\": scheme === 'auto',\n    timeout: 200,\n    classNames: {\n      enter: 'my-enter',\n      enterActive: 'my-active-enter',\n      exit: 'my-exit',\n      exitActive: 'my-active-exit'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  })), scheme === 'light' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }), scheme === 'dark' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, \"Q3rGyhtArXXugLbZNwEKPZDkZis=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJzY2hlbWVJblN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZXIiLCJwcmVmZXJzRGFya21vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwidW5kZWZpbmVkIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJlbnRlciIsImVudGVyQWN0aXZlIiwiZXhpdCIsImV4aXRBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsR0FBTTtBQUFBOztBQUFBLGtCQUNUQyxzREFBUSxDQUFjLElBQWQsQ0FEQztBQUFBLE1BQzlCQyxNQUQ4QjtBQUFBLE1BQ3RCQyxTQURzQjs7QUFHckMsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUNoQyxVQUFDQyxVQUFEO0FBQUEsV0FBNkIsWUFBTTtBQUNqQ0gsZUFBUyxDQUFDRyxVQUFELENBQVQ7QUFDRCxLQUZEO0FBQUEsR0FEZ0MsRUFJaEMsRUFKZ0MsQ0FBbEM7QUFPQTs7OztBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixVQUFNTSxlQUFlLEdBQUdDLE1B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REc7QUFFVkMsaUJBQVcsRUFBRSxpQkFGSDtBQUdWQyxVQUFJLEVBQUUsU0FISTtBQUlWQyxnQkFBVSxFQUFFO0FBSkYsS0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQywyREFBRDtBQUFjLFFBQUksRUFBQyxPQUFuQjtBQUEyQixXQUFPLEVBQUU3QixjQUFjLENBQUMsT0FBRCxDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FGSixFQWVHRixNQUFNLEtBQUssT0FBWCxJQUNDLE1BQUMsb0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixXQUFPLEVBQUVFLGNBQWMsQ0FBQyxNQUFELENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkosRUFrQkdGLE1BQU0sS0FBSyxNQUFYLElBQ0MsTUFBQyxxREFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFdBQU8sRUFBRUUsY0FBYyxDQUFDLE1BQUQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQURGO0FBd0JELENBNUdEOztHQUFNSixjOztLQUFBQSxjO0FBOEdTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGFya21vZGVTd2l0Y2gvRGFya21vZGVTd2l0Y2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaU1vb24sIEZpU3VuLCBGaVRvZ2dsZUxlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Rhcmttb2RlU3dpdGNoLm1vZHVsZS5jc3MnXG5cbnR5cGUgQ29sb3JTY2hlbWUgPSAnYXV0bycgfCAnbGlnaHQnIHwgJ2RhcmsnIHwgbnVsbFxuXG5jb25zdCBEYXJrbW9kZVN3aXRjaDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY2hlbWUsIHNldFNjaGVtZV0gPSB1c2VTdGF0ZTxDb2xvclNjaGVtZT4obnVsbClcblxuICBjb25zdCBzZXRDb2xvclNjaGVtZSA9IHVzZUNhbGxiYWNrKFxuICAgIChwcmVmZXJlbmNlOiBDb2xvclNjaGVtZSkgPT4gKCkgPT4ge1xuICAgICAgc2V0U2NoZW1lKHByZWZlcmVuY2UpXG4gICAgfSxcbiAgICBbXVxuICApXG5cbiAgLyoqXG4gICAqIENvbnRyb2wgbG9jYWwgc3RvcmFnZSBhbmQgYm9keSdzIGNsYXNzIG5hbWUgYmFzZWQgb24gXCJzY2hlbWVcIiBzdGF0ZS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjaGVtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2NoZW1lSW5TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAnX19jb2xvci1zY2hlbWVfXydcbiAgICAgICkgYXMgQ29sb3JTY2hlbWVcblxuICAgICAgaWYgKHNjaGVtZUluU3RvcmFnZSA9PT0gbnVsbCkge1xuICAgICAgICBzZXRTY2hlbWUoJ2F1dG8nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2NoZW1lKHNjaGVtZUluU3RvcmFnZSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNjaGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ19fY29sb3Itc2NoZW1lX18nKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19fY29sb3Itc2NoZW1lX18nLCBzY2hlbWUpXG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG4gICAgaWYgKHNjaGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAgICAgaWYgKG1lZGlhLm1hdGNoZXMpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgfVxuICB9LCBbc2NoZW1lXSlcblxuICAvKipcbiAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGVyLiBVcGRhdGUgYm9keSdzIGNsYXNzIG5hbWUgYmFzZWQgb24gbWVkaWEgcXVlcnlcbiAgICogb25seSB3aGVuIGxvY2FsIHN0b3JhZ2UgaXMgZW1wdHkgKHVzZXIgc2VsZWN0IFwiZGFya21vZGU6IGF1dG9cIikuXG4gICAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgIGNvbnN0IHNjaGVtZUluU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX19jb2xvci1zY2hlbWVfXycpXG4gICAgICBjb25zdCBwcmVmZXJzRGFya21vZGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG4gICAgICAgIC5tYXRjaGVzXG5cbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZWZlcnNEYXJrbW9kZSkge1xuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZWRpYS5hZGRFdmVudExpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lZGlhLmFkZExpc3RlbmVyKGhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVkaWEucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2NoZW1lID09PSAnYXV0bycgJiYgKFxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGluPXtzY2hlbWUgPT09ICdhdXRvJ31cbiAgICAgICAgICB0aW1lb3V0PXsyMDB9XG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgICAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAgICAgICAgICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAgICAgICAgICBleGl0OiAnbXktZXhpdCcsXG4gICAgICAgICAgICBleGl0QWN0aXZlOiAnbXktYWN0aXZlLWV4aXQnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RmlUb2dnbGVMZWZ0IHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdsaWdodCcpfSAvPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICApfVxuICAgICAge3NjaGVtZSA9PT0gJ2xpZ2h0JyAmJiAoXG4gICAgICAgIDxGaVN1biBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtzZXRDb2xvclNjaGVtZSgnZGFyaycpfSAvPlxuICAgICAgKX1cbiAgICAgIHtzY2hlbWUgPT09ICdkYXJrJyAmJiAoXG4gICAgICAgIDxGaU1vb24gc2l6ZT1cIjEuNWVtXCIgb25DbGljaz17c2V0Q29sb3JTY2hlbWUoJ2F1dG8nKX0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFya21vZGVTd2l0Y2hcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/DarkmodeSwitch/DarkmodeSwitch.module.css': false,
})
