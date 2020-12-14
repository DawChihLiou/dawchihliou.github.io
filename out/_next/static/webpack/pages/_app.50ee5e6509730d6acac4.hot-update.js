webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkmodeSwitch.module.css */ \"./components/DarkmodeSwitch/DarkmodeSwitch.module.css\");\n/* harmony import */ var _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  /**\n   * Control local storage and body's class name based on \"scheme\" state.\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n\n      if (schemeInStorage === null) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n    } else if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n\n    var body = document.querySelector('body');\n\n    if (scheme === 'auto') {\n      var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (media.matches) {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    } else if (scheme === 'light') {\n      body.classList.remove('dark');\n    } else {\n      body.classList.add('dark');\n    }\n  }, [scheme]);\n  /**\n   * Register event hander. Update body's class name based on media query\n   * only when local storage is empty (user select \"darkmode: auto\").\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n    var handler = function handler() {\n      var body = document.querySelector('body');\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\n      if (schemeInStorage === null) {\n        if (prefersDarkmode) {\n          body.classList.add('dark');\n        } else {\n          body.classList.remove('dark');\n        }\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(handler);\n    } else {\n      media.addEventListener('change', handler);\n    }\n\n    return function () {\n      if (media.removeEventListener === undefined) {\n        media.removeListener(handler);\n      } else {\n        media.removeEventListener('change', handler);\n      }\n    };\n  }, []);\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"TransitionGroup\"], {\n    component: null,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    \"in\": scheme === 'auto',\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter-active'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit-active']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    \"in\": scheme === 'light',\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter-active'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit-active']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    \"in\": scheme === 'dark',\n    timeout: 250,\n    classNames: {\n      enter: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter'],\n      enterActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-enter-active'],\n      exit: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit'],\n      exitActive: _DarkmodeSwitch_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['button-exit-active']\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DarkmodeSwitch, \"Q3rGyhtArXXugLbZNwEKPZDkZis=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJzY2hlbWVJblN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZXIiLCJwcmVmZXJzRGFya21vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwidW5kZWZpbmVkIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJlbnRlciIsInN0eWxlcyIsImVudGVyQWN0aXZlIiwiZXhpdCIsImV4aXRBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBYyxJQUFkLENBREM7QUFBQSxNQUM5QkMsTUFEOEI7QUFBQSxNQUN0QkMsU0FEc0I7O0FBR3JDLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FDaEMsVUFBQ0MsVUFBRDtBQUFBLFdBQTZCLFlBQU07QUFDakNILGVBQVMsQ0FBQ0csVUFBRCxDQUFUO0FBQ0QsS0FGRDtBQUFBLEdBRGdDLEVBSWhDLEVBSmdDLENBQWxDO0FBT0E7Ozs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsVUFB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QUMscUJBQUQsQ0FGVDtBQUdWRSxVQUFJLEVBQUVGLGlFQUFNLENBQUMsYUFBRCxDQUhGO0FBSVZHLGdCQUFVLEVBQUVILGlFQUFNLENBQUMsb0JBQUQ7QUFKUixLQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLHFEQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsV0FBTyxFQUFFM0IsY0FBYyxDQUFDLE1BQUQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBekJGLENBREY7QUF3Q0QsQ0E1SEQ7O0dBQU1KLGM7O0tBQUFBLGM7QUE4SFNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpTW9vbiwgRmlTdW4sIEZpVG9nZ2xlTGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXJrbW9kZVN3aXRjaC5tb2R1bGUuY3NzJ1xuXG50eXBlIENvbG9yU2NoZW1lID0gJ2F1dG8nIHwgJ2xpZ2h0JyB8ICdkYXJrJyB8IG51bGxcblxuY29uc3QgRGFya21vZGVTd2l0Y2g6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2NoZW1lLCBzZXRTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KG51bGwpXG5cbiAgY29uc3Qgc2V0Q29sb3JTY2hlbWUgPSB1c2VDYWxsYmFjayhcbiAgICAocHJlZmVyZW5jZTogQ29sb3JTY2hlbWUpID0+ICgpID0+IHtcbiAgICAgIHNldFNjaGVtZShwcmVmZXJlbmNlKVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGxvY2FsIHN0b3JhZ2UgYW5kIGJvZHkncyBjbGFzcyBuYW1lIGJhc2VkIG9uIFwic2NoZW1lXCIgc3RhdGUuXG4gICAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY2hlbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNjaGVtZUluU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgJ19fY29sb3Itc2NoZW1lX18nXG4gICAgICApIGFzIENvbG9yU2NoZW1lXG5cbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgc2V0U2NoZW1lKCdhdXRvJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjaGVtZShzY2hlbWVJblN0b3JhZ2UpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJywgc2NoZW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICAgIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgICAgIGlmIChtZWRpYS5tYXRjaGVzKSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NoZW1lID09PSAnbGlnaHQnKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgIH0gZWxzZSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgIH1cbiAgfSwgW3NjaGVtZV0pXG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRlci4gVXBkYXRlIGJvZHkncyBjbGFzcyBuYW1lIGJhc2VkIG9uIG1lZGlhIHF1ZXJ5XG4gICAqIG9ubHkgd2hlbiBsb2NhbCBzdG9yYWdlIGlzIGVtcHR5ICh1c2VyIHNlbGVjdCBcImRhcmttb2RlOiBhdXRvXCIpLlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgICBjb25zdCBzY2hlbWVJblN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fY29sb3Itc2NoZW1lX18nKVxuICAgICAgY29uc3QgcHJlZmVyc0Rhcmttb2RlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuICAgICAgICAubWF0Y2hlc1xuXG4gICAgICBpZiAoc2NoZW1lSW5TdG9yYWdlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmVmZXJzRGFya21vZGUpIHtcbiAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWVkaWEuYWRkRXZlbnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtZWRpYS5hZGRMaXN0ZW5lcihoYW5kbGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAobWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lZGlhLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBpbj17c2NoZW1lID09PSAnYXV0byd9XG4gICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgIGVudGVyOiBzdHlsZXNbJ2J1dHRvbi1lbnRlciddLFxuICAgICAgICAgIGVudGVyQWN0aXZlOiBzdHlsZXNbJ2J1dHRvbi1lbnRlci1hY3RpdmUnXSxcbiAgICAgICAgICBleGl0OiBzdHlsZXNbJ2J1dHRvbi1leGl0J10sXG4gICAgICAgICAgZXhpdEFjdGl2ZTogc3R5bGVzWydidXR0b24tZXhpdC1hY3RpdmUnXSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZpVG9nZ2xlTGVmdCBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtzZXRDb2xvclNjaGVtZSgnbGlnaHQnKX0gLz5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgIGluPXtzY2hlbWUgPT09ICdsaWdodCd9XG4gICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgIGVudGVyOiBzdHlsZXNbJ2J1dHRvbi1lbnRlciddLFxuICAgICAgICAgIGVudGVyQWN0aXZlOiBzdHlsZXNbJ2J1dHRvbi1lbnRlci1hY3RpdmUnXSxcbiAgICAgICAgICBleGl0OiBzdHlsZXNbJ2J1dHRvbi1leGl0J10sXG4gICAgICAgICAgZXhpdEFjdGl2ZTogc3R5bGVzWydidXR0b24tZXhpdC1hY3RpdmUnXSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZpU3VuIHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdkYXJrJyl9IC8+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBpbj17c2NoZW1lID09PSAnZGFyayd9XG4gICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgIGVudGVyOiBzdHlsZXNbJ2J1dHRvbi1lbnRlciddLFxuICAgICAgICAgIGVudGVyQWN0aXZlOiBzdHlsZXNbJ2J1dHRvbi1lbnRlci1hY3RpdmUnXSxcbiAgICAgICAgICBleGl0OiBzdHlsZXNbJ2J1dHRvbi1leGl0J10sXG4gICAgICAgICAgZXhpdEFjdGl2ZTogc3R5bGVzWydidXR0b24tZXhpdC1hY3RpdmUnXSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZpTW9vbiBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtzZXRDb2xvclNjaGVtZSgnYXV0bycpfSAvPlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlU3dpdGNoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },
})
