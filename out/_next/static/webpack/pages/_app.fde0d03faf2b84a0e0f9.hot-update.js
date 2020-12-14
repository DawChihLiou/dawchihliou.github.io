webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n\n      if (schemeInStorage === null) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n    } else if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n\n    var body = document.querySelector('body');\n\n    if (scheme === 'auto') {\n      var _media = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (_media.matches) {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    } else if (scheme === 'light') {\n      body.classList.remove('dark');\n    } else {\n      body.classList.add('dark');\n    }\n  }, [scheme]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var handler = function handler() {\n      var body = document.querySelector('body');\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (schemeInStorage === null) {\n        if (media.matches) {\n          body.classList.add('dark');\n        } else {\n          body.classList.remove('dark');\n        }\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(handler);\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scheme === 'auto' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), scheme === 'light' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }), scheme === 'dark' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, \"Q3rGyhtArXXugLbZNwEKPZDkZis=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJzY2hlbWVJblN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidW5kZWZpbmVkIiwiYWRkTGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsSUFBTUEsY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsR0FBTTtBQUFBOztBQUFBLGtCQUNUQyxzREFBUSxDQUFjLElBQWQsQ0FEQztBQUFBLE1BQzlCQyxNQUQ4QjtBQUFBLE1BQ3RCQyxTQURzQjs7QUFHckMsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUNoQyxVQUFDQyxVQUFEO0FBQUEsV0FBNkIsWUFBTTtBQUNqQ0gsZUFBUyxDQUFDRyxVQUFELENBQVQ7QUFDRCxLQUZEO0FBQUEsR0FEZ0MsRUFJaEMsRUFKZ0MsQ0FBbEM7QUFPQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsVUFBTU0sZUFBZSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQ3RCLGtCQURzQixDQUF4Qjs7QUFJQSxVQUFJSCxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJMLGlCQUFTLENBQUMsTUFBRCxDQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGlCQUFTLENBQUNLLGVBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FWRCxNQVVPLElBQUlOLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQzVCTyxZQUFNLENBQUNDLFlBQVAsQ0FBb0JFLFVBQXBCLENBQStCLGtCQUEvQjtBQUNELEtBRk0sTUFFQTtBQUNMSCxZQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLGtCQUE1QixFQUFnRFgsTUFBaEQ7QUFDRDs7QUFFRCxRQUFNWSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLFFBQUlkLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCLFVBQU1lLE1BQUssR0FBR1IsTUFBTSxDQUFDUyxVQUFQLENBQWtCLDhCQUFsQixDQUFkOztBQUVBLFVBQUlELE1BQUssQ0FBQ0UsT0FBVixFQUFtQjtBQUNqQkwsWUFBSSxDQUFDTSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDRCxPQUZELE1BRU87QUFDTFAsWUFBSSxDQUFDTSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsTUFBdEI7QUFDRDtBQUNGLEtBUkQsTUFRTyxJQUFJcEIsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDN0JZLFVBQUksQ0FBQ00sU0FBTCxDQUFlRSxNQUFmLENBQXNCLE1BQXRCO0FBQ0QsS0FGTSxNQUVBO0FBQ0xSLFVBQUksQ0FBQ00sU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0Q7QUFDRixHQWhDUSxFQWdDTixDQUFDbkIsTUFBRCxDQWhDTSxDQUFUO0FBa0NBSyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNZ0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixVQUFNVCxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsVUFBTVIsZUFBZSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGtCQUE1QixDQUF4QjtBQUNBLFVBQU1NLEtBQUssR0FBR1IsTUFBTSxDQUFDUyxVQUFQLENBQWtCLDhCQUFsQixDQUFkOztBQUVBLFVBQUlWLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QixZQUFJUyxLQUFLLENBQUNFLE9BQVYsRUFBbUI7QUFDakJMLGNBQUksQ0FBQ00sU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0QsU0FGRCxNQUVPO0FBQ0xQLGNBQUksQ0FBQ00sU0FBTCxDQUFlRSxNQUFmLENBQXNCLE1BQXRCO0FBQ0Q7QUFDRjtBQUNGLEtBWkQ7O0FBYUEsUUFBSUwsS0FBSyxDQUFDTyxnQkFBTixLQUEyQkMsU0FBL0IsRUFBMEM7QUFDeENSLFdBQUssQ0FBQ1MsV0FBTixDQUFrQkgsT0FBbEI7QUFDRDtBQUNGLEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEsU0FDRSxtRUFDR3JCLE1BQU0sS0FBSyxNQUFYLElBQ0MsTUFBQywyREFBRDtBQUFjLFFBQUksRUFBQyxPQUFuQjtBQUEyQixXQUFPLEVBQUVFLGNBQWMsQ0FBQyxPQUFELENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUlHRixNQUFNLEtBQUssT0FBWCxJQUNDLE1BQUMsb0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixXQUFPLEVBQUVFLGNBQWMsQ0FBQyxNQUFELENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU9HRixNQUFNLEtBQUssTUFBWCxJQUNDLE1BQUMscURBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixXQUFPLEVBQUVFLGNBQWMsQ0FBQyxNQUFELENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURGO0FBYUQsQ0E1RUQ7O0dBQU1KLGM7O0tBQUFBLGM7QUE4RVNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpTW9vbiwgRmlTdW4sIEZpVG9nZ2xlTGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG50eXBlIENvbG9yU2NoZW1lID0gJ2F1dG8nIHwgJ2xpZ2h0JyB8ICdkYXJrJyB8IG51bGxcblxuY29uc3QgRGFya21vZGVTd2l0Y2g6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2NoZW1lLCBzZXRTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KG51bGwpXG5cbiAgY29uc3Qgc2V0Q29sb3JTY2hlbWUgPSB1c2VDYWxsYmFjayhcbiAgICAocHJlZmVyZW5jZTogQ29sb3JTY2hlbWUpID0+ICgpID0+IHtcbiAgICAgIHNldFNjaGVtZShwcmVmZXJlbmNlKVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjaGVtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2NoZW1lSW5TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAnX19jb2xvci1zY2hlbWVfXydcbiAgICAgICkgYXMgQ29sb3JTY2hlbWVcblxuICAgICAgaWYgKHNjaGVtZUluU3RvcmFnZSA9PT0gbnVsbCkge1xuICAgICAgICBzZXRTY2hlbWUoJ2F1dG8nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2NoZW1lKHNjaGVtZUluU3RvcmFnZSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNjaGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ19fY29sb3Itc2NoZW1lX18nKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19fY29sb3Itc2NoZW1lX18nLCBzY2hlbWUpXG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG4gICAgaWYgKHNjaGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAgICAgaWYgKG1lZGlhLm1hdGNoZXMpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgfVxuICB9LCBbc2NoZW1lXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgICBjb25zdCBzY2hlbWVJblN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fY29sb3Itc2NoZW1lX18nKVxuICAgICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKG1lZGlhLm1hdGNoZXMpIHtcbiAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVkaWEuYWRkTGlzdGVuZXIoaGFuZGxlcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzY2hlbWUgPT09ICdhdXRvJyAmJiAoXG4gICAgICAgIDxGaVRvZ2dsZUxlZnQgc2l6ZT1cIjEuNWVtXCIgb25DbGljaz17c2V0Q29sb3JTY2hlbWUoJ2xpZ2h0Jyl9IC8+XG4gICAgICApfVxuICAgICAge3NjaGVtZSA9PT0gJ2xpZ2h0JyAmJiAoXG4gICAgICAgIDxGaVN1biBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtzZXRDb2xvclNjaGVtZSgnZGFyaycpfSAvPlxuICAgICAgKX1cbiAgICAgIHtzY2hlbWUgPT09ICdkYXJrJyAmJiAoXG4gICAgICAgIDxGaU1vb24gc2l6ZT1cIjEuNWVtXCIgb25DbGljaz17c2V0Q29sb3JTY2hlbWUoJ2F1dG8nKX0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFya21vZGVTd2l0Y2hcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },
})
