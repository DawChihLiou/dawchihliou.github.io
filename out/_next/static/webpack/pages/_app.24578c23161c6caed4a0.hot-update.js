webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      console.log('scheme in storage', schemeInStorage);\n\n      if (schemeInStorage === undefined) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n\n      return;\n    }\n\n    if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n  }, [scheme]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n    var darkmodeHandler = function darkmodeHandler() {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var body = document.querySelector('body');\n\n      if (schemeInStorage === 'dark') {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(darkmodeHandler);\n    } else {\n      media.addEventListener('change', darkmodeHandler);\n    }\n\n    return function () {\n      if (media.removeEventListener === undefined) {\n        media.removeListener(darkmodeHandler);\n      } else {\n        media.removeEventListener('change', darkmodeHandler);\n      }\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scheme === 'auto' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }), scheme === 'light' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), scheme === 'dark' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, \"Q3rGyhtArXXugLbZNwEKPZDkZis=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJzY2hlbWVJblN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwiZGFya21vZGVIYW5kbGVyIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQWMsSUFBZCxDQURDO0FBQUEsTUFDOUJDLE1BRDhCO0FBQUEsTUFDdEJDLFNBRHNCOztBQUdyQyxNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQ2hDLFVBQUNDLFVBQUQ7QUFBQSxXQUE2QixZQUFNO0FBQ2pDSCxlQUFTLENBQUNHLFVBQUQsQ0FBVDtBQUNELEtBRkQ7QUFBQSxHQURnQyxFQUloQyxFQUpnQyxDQUFsQztBQU9BQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixVQUFNTSxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FDdEIsa0JBRHNCLENBQXhCO0FBR0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDTCxlQUFqQzs7QUFDQSxVQUFJQSxlQUFlLEtBQUtNLFNBQXhCLEVBQW1DO0FBQ2pDWCxpQkFBUyxDQUFDLE1BQUQsQ0FBVDtBQUNELE9BRkQsTUFFTztBQUNMQSxpQkFBUyxDQUFDSyxlQUFELENBQVQ7QUFDRDs7QUFDRDtBQUNEOztBQUVELFFBQUlOLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCTyxZQUFNLENBQUNDLFlBQVAsQ0FBb0JLLFVBQXBCLENBQStCLGtCQUEvQjtBQUNELEtBRkQsTUFFTztBQUNMTixZQUFNLENBQUNDLFlBQVAsQ0FBb0JNLE9BQXBCLENBQTRCLGtCQUE1QixFQUFnRGQsTUFBaEQ7QUFDRDtBQUNGLEdBbkJRLEVBbUJOLENBQUNBLE1BQUQsQ0FuQk0sQ0FBVDtBQXFCQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVUsS0FBSyxHQUFHUixNQUFNLENBQUNTLFVBQVAsQ0FBa0IsOEJBQWxCLENBQWQ7O0FBRUEsUUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFVBQU1YLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixrQkFBNUIsQ0FBeEI7QUFDQSxVQUFNUyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLFVBQUlkLGVBQWUsS0FBSyxNQUF4QixFQUFnQztBQUM5QlksWUFBSSxDQUFDRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDRCxPQUZELE1BRU87QUFDTEosWUFBSSxDQUFDRyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsTUFBdEI7QUFDRDtBQUNGLEtBVEQ7O0FBV0EsUUFBSVIsS0FBSyxDQUFDUyxnQkFBTixLQUEyQlosU0FBL0IsRUFBMEM7QUFDeENHLFdBQUssQ0FBQ1UsV0FBTixDQUFrQlIsZUFBbEI7QUFDRCxLQUZELE1BRU87QUFDTEYsV0FBSyxDQUFDUyxnQkFBTixDQUF1QixRQUF2QixFQUFpQ1AsZUFBakM7QUFDRDs7QUFFRCxXQUFPLFlBQU07QUFDWCxVQUFJRixLQUFLLENBQUNXLG1CQUFOLEtBQThCZCxTQUFsQyxFQUE2QztBQUMzQ0csYUFBSyxDQUFDWSxjQUFOLENBQXFCVixlQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMRixhQUFLLENBQUNXLG1CQUFOLENBQTBCLFFBQTFCLEVBQW9DVCxlQUFwQztBQUNEO0FBQ0YsS0FORDtBQU9ELEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE2QkEsU0FDRSxtRUFDR2pCLE1BQU0sS0FBSyxNQUFYLElBQ0MsTUFBQywyREFBRDtBQUFjLFFBQUksRUFBQyxPQUFuQjtBQUEyQixXQUFPLEVBQUVFLGNBQWMsQ0FBQyxPQUFELENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUlHRixNQUFNLEtBQUssT0FBWCxJQUNDLE1BQUMsb0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixXQUFPLEVBQUVFLGNBQWMsQ0FBQyxNQUFELENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU9HRixNQUFNLEtBQUssTUFBWCxJQUNDLE1BQUMscURBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixXQUFPLEVBQUVFLGNBQWMsQ0FBQyxNQUFELENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURGO0FBYUQsQ0F6RUQ7O0dBQU1KLGM7O0tBQUFBLGM7QUEyRVNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpTW9vbiwgRmlTdW4sIEZpVG9nZ2xlTGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG50eXBlIENvbG9yU2NoZW1lID0gJ2F1dG8nIHwgJ2xpZ2h0JyB8ICdkYXJrJyB8IG51bGxcblxuY29uc3QgRGFya21vZGVTd2l0Y2g6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2NoZW1lLCBzZXRTY2hlbWVdID0gdXNlU3RhdGU8Q29sb3JTY2hlbWU+KG51bGwpXG5cbiAgY29uc3Qgc2V0Q29sb3JTY2hlbWUgPSB1c2VDYWxsYmFjayhcbiAgICAocHJlZmVyZW5jZTogQ29sb3JTY2hlbWUpID0+ICgpID0+IHtcbiAgICAgIHNldFNjaGVtZShwcmVmZXJlbmNlKVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjaGVtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2NoZW1lSW5TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAnX19jb2xvci1zY2hlbWVfXydcbiAgICAgICkgYXMgQ29sb3JTY2hlbWVcbiAgICAgIGNvbnNvbGUubG9nKCdzY2hlbWUgaW4gc3RvcmFnZScsIHNjaGVtZUluU3RvcmFnZSlcbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZXRTY2hlbWUoJ2F1dG8nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2NoZW1lKHNjaGVtZUluU3RvcmFnZSlcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJywgc2NoZW1lKVxuICAgIH1cbiAgfSwgW3NjaGVtZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAgIGNvbnN0IGRhcmttb2RlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtZUluU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX19jb2xvci1zY2hlbWVfXycpXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09ICdkYXJrJykge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWVkaWEuYWRkRXZlbnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtZWRpYS5hZGRMaXN0ZW5lcihkYXJrbW9kZUhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhcmttb2RlSGFuZGxlcilcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWRpYS5yZW1vdmVMaXN0ZW5lcihkYXJrbW9kZUhhbmRsZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXJrbW9kZUhhbmRsZXIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2NoZW1lID09PSAnYXV0bycgJiYgKFxuICAgICAgICA8RmlUb2dnbGVMZWZ0IHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdsaWdodCcpfSAvPlxuICAgICAgKX1cbiAgICAgIHtzY2hlbWUgPT09ICdsaWdodCcgJiYgKFxuICAgICAgICA8RmlTdW4gc2l6ZT1cIjEuNWVtXCIgb25DbGljaz17c2V0Q29sb3JTY2hlbWUoJ2RhcmsnKX0gLz5cbiAgICAgICl9XG4gICAgICB7c2NoZW1lID09PSAnZGFyaycgJiYgKFxuICAgICAgICA8RmlNb29uIHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdhdXRvJyl9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlU3dpdGNoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },
})
