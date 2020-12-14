webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('auto'),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n  }, [scheme]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n    var darkmodeHandler = function darkmodeHandler() {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n      var body = document.querySelector('body');\n\n      if (media.matches) {\n        body.classList.add('dark');\n        setScheme(true);\n      } else {\n        body.classList.remove('dark');\n        setScheme(false);\n      }\n    };\n\n    if (media.addEventListener === undefined) {\n      media.addListener(darkmodeHandler);\n    } else {\n      media.addEventListener('change', darkmodeHandler);\n    }\n\n    return function () {\n      if (media.removeEventListener === undefined) {\n        media.removeListener(darkmodeHandler);\n      } else {\n        media.removeEventListener('change', darkmodeHandler);\n      }\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scheme === 'auto' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), scheme === 'light' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }), scheme === 'dark' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, \"raj7XZExVc+EOL9BfmcX242n9zU=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsIm1lZGlhIiwibWF0Y2hNZWRpYSIsImRhcmttb2RlSGFuZGxlciIsInNjaGVtZUluU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1bmRlZmluZWQiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQWMsTUFBZCxDQURDO0FBQUEsTUFDOUJDLE1BRDhCO0FBQUEsTUFDdEJDLFNBRHNCOztBQUdyQyxNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQ2hDLFVBQUNDLFVBQUQ7QUFBQSxXQUE2QixZQUFNO0FBQ2pDSCxlQUFTLENBQUNHLFVBQUQsQ0FBVDtBQUNELEtBRkQ7QUFBQSxHQURnQyxFQUloQyxFQUpnQyxDQUFsQztBQU9BQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNyQk0sWUFBTSxDQUFDQyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixrQkFBL0I7QUFDRCxLQUZELE1BRU87QUFDTEYsWUFBTSxDQUFDQyxZQUFQLENBQW9CRSxPQUFwQixDQUE0QixrQkFBNUIsRUFBZ0RULE1BQWhEO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0EsTUFBRCxDQU5NLENBQVQ7QUFRQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUssS0FBSyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsOEJBQWxCLENBQWQ7O0FBRUEsUUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFVBQU1DLGVBQWUsR0FBR1AsTUFBTSxDQUFDQyxZQUFQLENBQW9CTyxPQUFwQixDQUE0QixrQkFBNUIsQ0FBeEI7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLFVBQUlQLEtBQUssQ0FBQ1EsT0FBVixFQUFtQjtBQUNqQkgsWUFBSSxDQUFDSSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQW5CLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0xjLFlBQUksQ0FBQ0ksU0FBTCxDQUFlRSxNQUFmLENBQXNCLE1BQXRCO0FBQ0FwQixpQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FYRDs7QUFhQSxRQUFJUyxLQUFLLENBQUNZLGdCQUFOLEtBQTJCQyxTQUEvQixFQUEwQztBQUN4Q2IsV0FBSyxDQUFDYyxXQUFOLENBQWtCWixlQUFsQjtBQUNELEtBRkQsTUFFTztBQUNMRixXQUFLLENBQUNZLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDVixlQUFqQztBQUNEOztBQUVELFdBQU8sWUFBTTtBQUNYLFVBQUlGLEtBQUssQ0FBQ2UsbUJBQU4sS0FBOEJGLFNBQWxDLEVBQTZDO0FBQzNDYixhQUFLLENBQUNnQixjQUFOLENBQXFCZCxlQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMRixhQUFLLENBQUNlLG1CQUFOLENBQTBCLFFBQTFCLEVBQW9DYixlQUFwQztBQUNEO0FBQ0YsS0FORDtBQU9ELEdBN0JRLEVBNkJOLEVBN0JNLENBQVQ7QUErQkEsU0FDRSxtRUFDR1osTUFBTSxLQUFLLE1BQVgsSUFDQyxNQUFDLDJEQUFEO0FBQWMsUUFBSSxFQUFDLE9BQW5CO0FBQTJCLFdBQU8sRUFBRUUsY0FBYyxDQUFDLE9BQUQsQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUdGLE1BQU0sS0FBSyxPQUFYLElBQ0MsTUFBQyxvREFBRDtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFdBQU8sRUFBRUUsY0FBYyxDQUFDLE1BQUQsQ0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBT0dGLE1BQU0sS0FBSyxNQUFYLElBQ0MsTUFBQyxxREFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFdBQU8sRUFBRUUsY0FBYyxDQUFDLE1BQUQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBREY7QUFhRCxDQTlERDs7R0FBTUosYzs7S0FBQUEsYztBQWdFU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhcmttb2RlU3dpdGNoL0Rhcmttb2RlU3dpdGNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biwgRmlUb2dnbGVMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5cbnR5cGUgQ29sb3JTY2hlbWUgPSAnYXV0bycgfCAnbGlnaHQnIHwgJ2RhcmsnXG5cbmNvbnN0IERhcmttb2RlU3dpdGNoOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NjaGVtZSwgc2V0U2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPignYXV0bycpXG5cbiAgY29uc3Qgc2V0Q29sb3JTY2hlbWUgPSB1c2VDYWxsYmFjayhcbiAgICAocHJlZmVyZW5jZTogQ29sb3JTY2hlbWUpID0+ICgpID0+IHtcbiAgICAgIHNldFNjaGVtZShwcmVmZXJlbmNlKVxuICAgIH0sXG4gICAgW11cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ19fY29sb3Itc2NoZW1lX18nKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19fY29sb3Itc2NoZW1lX18nLCBzY2hlbWUpXG4gICAgfVxuICB9LCBbc2NoZW1lXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuXG4gICAgY29uc3QgZGFya21vZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1lSW5TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICAgICAgaWYgKG1lZGlhLm1hdGNoZXMpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgc2V0U2NoZW1lKHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgICBzZXRTY2hlbWUoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVkaWEuYWRkTGlzdGVuZXIoZGFya21vZGVIYW5kbGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXJrbW9kZUhhbmRsZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVkaWEucmVtb3ZlTGlzdGVuZXIoZGFya21vZGVIYW5kbGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGFya21vZGVIYW5kbGVyKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3NjaGVtZSA9PT0gJ2F1dG8nICYmIChcbiAgICAgICAgPEZpVG9nZ2xlTGVmdCBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtzZXRDb2xvclNjaGVtZSgnbGlnaHQnKX0gLz5cbiAgICAgICl9XG4gICAgICB7c2NoZW1lID09PSAnbGlnaHQnICYmIChcbiAgICAgICAgPEZpU3VuIHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdkYXJrJyl9IC8+XG4gICAgICApfVxuICAgICAge3NjaGVtZSA9PT0gJ2RhcmsnICYmIChcbiAgICAgICAgPEZpTW9vbiBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtzZXRDb2xvclNjaGVtZSgnYXV0bycpfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZVN3aXRjaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },
})
