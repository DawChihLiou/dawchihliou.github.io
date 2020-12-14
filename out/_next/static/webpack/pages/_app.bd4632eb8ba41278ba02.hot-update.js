webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n\n      if (schemeInStorage === null) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n    }\n\n    if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n  }, [scheme]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n    var darkmodeHandler = function darkmodeHandler() {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var body = document.querySelector('body');\n\n      if (schemeInStorage === 'dark') {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(darkmodeHandler);\n    } else {\n      media.addEventListener('change', darkmodeHandler);\n    }\n\n    return function () {\n      if (media.removeEventListener === undefined) {\n        media.removeListener(darkmodeHandler);\n      } else {\n        media.removeEventListener('change', darkmodeHandler);\n      }\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scheme === 'auto' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), scheme === 'light' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }), scheme === 'dark' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, \"Q3rGyhtArXXugLbZNwEKPZDkZis=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJzY2hlbWVJblN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJtZWRpYSIsIm1hdGNoTWVkaWEiLCJkYXJrbW9kZUhhbmRsZXIiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVuZGVmaW5lZCIsImFkZExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLElBQU1BLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBYyxJQUFkLENBREM7QUFBQSxNQUM5QkMsTUFEOEI7QUFBQSxNQUN0QkMsU0FEc0I7O0FBR3JDLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FDaEMsVUFBQ0MsVUFBRDtBQUFBLFdBQTZCLFlBQU07QUFDakNILGVBQVMsQ0FBQ0csVUFBRCxDQUFUO0FBQ0QsS0FGRDtBQUFBLEdBRGdDLEVBSWhDLEVBSmdDLENBQWxDO0FBT0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CLFVBQU1NLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUN0QixrQkFEc0IsQ0FBeEI7O0FBSUEsVUFBSUgsZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCTCxpQkFBUyxDQUFDLE1BQUQsQ0FBVDtBQUNELE9BRkQsTUFFTztBQUNMQSxpQkFBUyxDQUFDSyxlQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFFBQUlOLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCTyxZQUFNLENBQUNDLFlBQVAsQ0FBb0JFLFVBQXBCLENBQStCLGtCQUEvQjtBQUNELEtBRkQsTUFFTztBQUNMSCxZQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLGtCQUE1QixFQUFnRFgsTUFBaEQ7QUFDRDtBQUNGLEdBbEJRLEVBa0JOLENBQUNBLE1BQUQsQ0FsQk0sQ0FBVDtBQW9CQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU8sS0FBSyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsOEJBQWxCLENBQWQ7O0FBRUEsUUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFVBQU1SLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixrQkFBNUIsQ0FBeEI7QUFDQSxVQUFNTSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLFVBQUlYLGVBQWUsS0FBSyxNQUF4QixFQUFnQztBQUM5QlMsWUFBSSxDQUFDRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDRCxPQUZELE1BRU87QUFDTEosWUFBSSxDQUFDRyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsTUFBdEI7QUFDRDtBQUNGLEtBVEQ7O0FBV0EsUUFBSVIsS0FBSyxDQUFDUyxnQkFBTixLQUEyQkMsU0FBL0IsRUFBMEM7QUFDeENWLFdBQUssQ0FBQ1csV0FBTixDQUFrQlQsZUFBbEI7QUFDRCxLQUZELE1BRU87QUFDTEYsV0FBSyxDQUFDUyxnQkFBTixDQUF1QixRQUF2QixFQUFpQ1AsZUFBakM7QUFDRDs7QUFFRCxXQUFPLFlBQU07QUFDWCxVQUFJRixLQUFLLENBQUNZLG1CQUFOLEtBQThCRixTQUFsQyxFQUE2QztBQUMzQ1YsYUFBSyxDQUFDYSxjQUFOLENBQXFCWCxlQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMRixhQUFLLENBQUNZLG1CQUFOLENBQTBCLFFBQTFCLEVBQW9DVixlQUFwQztBQUNEO0FBQ0YsS0FORDtBQU9ELEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE2QkEsU0FDRSxtRUFDR2QsTUFBTSxLQUFLLE1BQVgsSUFDQyxNQUFDLDJEQUFEO0FBQWMsUUFBSSxFQUFDLE9BQW5CO0FBQTJCLFdBQU8sRUFBRUUsY0FBYyxDQUFDLE9BQUQsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUdGLE1BQU0sS0FBSyxPQUFYLElBQ0MsTUFBQyxvREFBRDtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFdBQU8sRUFBRUUsY0FBYyxDQUFDLE1BQUQsQ0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBT0dGLE1BQU0sS0FBSyxNQUFYLElBQ0MsTUFBQyxxREFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFdBQU8sRUFBRUUsY0FBYyxDQUFDLE1BQUQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBREY7QUFhRCxDQXhFRDs7R0FBTUosYzs7S0FBQUEsYztBQTBFU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhcmttb2RlU3dpdGNoL0Rhcmttb2RlU3dpdGNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biwgRmlUb2dnbGVMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5cbnR5cGUgQ29sb3JTY2hlbWUgPSAnYXV0bycgfCAnbGlnaHQnIHwgJ2RhcmsnIHwgbnVsbFxuXG5jb25zdCBEYXJrbW9kZVN3aXRjaDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY2hlbWUsIHNldFNjaGVtZV0gPSB1c2VTdGF0ZTxDb2xvclNjaGVtZT4obnVsbClcblxuICBjb25zdCBzZXRDb2xvclNjaGVtZSA9IHVzZUNhbGxiYWNrKFxuICAgIChwcmVmZXJlbmNlOiBDb2xvclNjaGVtZSkgPT4gKCkgPT4ge1xuICAgICAgc2V0U2NoZW1lKHByZWZlcmVuY2UpXG4gICAgfSxcbiAgICBbXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2NoZW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzY2hlbWVJblN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICdfX2NvbG9yLXNjaGVtZV9fJ1xuICAgICAgKSBhcyBDb2xvclNjaGVtZVxuXG4gICAgICBpZiAoc2NoZW1lSW5TdG9yYWdlID09PSBudWxsKSB7XG4gICAgICAgIHNldFNjaGVtZSgnYXV0bycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTY2hlbWUoc2NoZW1lSW5TdG9yYWdlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJywgc2NoZW1lKVxuICAgIH1cbiAgfSwgW3NjaGVtZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAgIGNvbnN0IGRhcmttb2RlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtZUluU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX19jb2xvci1zY2hlbWVfXycpXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09ICdkYXJrJykge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWVkaWEuYWRkRXZlbnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtZWRpYS5hZGRMaXN0ZW5lcihkYXJrbW9kZUhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhcmttb2RlSGFuZGxlcilcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWRpYS5yZW1vdmVMaXN0ZW5lcihkYXJrbW9kZUhhbmRsZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXJrbW9kZUhhbmRsZXIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2NoZW1lID09PSAnYXV0bycgJiYgKFxuICAgICAgICA8RmlUb2dnbGVMZWZ0IHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdsaWdodCcpfSAvPlxuICAgICAgKX1cbiAgICAgIHtzY2hlbWUgPT09ICdsaWdodCcgJiYgKFxuICAgICAgICA8RmlTdW4gc2l6ZT1cIjEuNWVtXCIgb25DbGljaz17c2V0Q29sb3JTY2hlbWUoJ2RhcmsnKX0gLz5cbiAgICAgICl9XG4gICAgICB7c2NoZW1lID09PSAnZGFyaycgJiYgKFxuICAgICAgICA8RmlNb29uIHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdhdXRvJyl9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlU3dpdGNoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },
})
