webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var setColorScheme = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (scheme === null) {\n      var schemeInStorage = window.localStorage.getItem('__color-scheme__');\n\n      if (schemeInStorage === null) {\n        setScheme('auto');\n      } else {\n        setScheme(schemeInStorage);\n      }\n    } else if (scheme === 'auto') {\n      window.localStorage.removeItem('__color-scheme__');\n    } else {\n      window.localStorage.setItem('__color-scheme__', scheme);\n    }\n\n    var body = document.querySelector('body');\n\n    if (scheme === 'auto') {\n      var media = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (media.matches) {\n        body.classList.add('dark');\n      } else {\n        body.classList.remove('dark');\n      }\n    } else if (scheme === 'light') {\n      body.classList.remove('dark');\n    }\n  }, [scheme]); // useEffect(() => {\n  //   const media = window.matchMedia('(prefers-color-scheme: dark)')\n  //   const darkmodeHandler = () => {\n  //     const schemeInStorage = window.localStorage.getItem('__color-scheme__')\n  //     const body = document.querySelector('body')\n  //     if (schemeInStorage === 'dark') {\n  //       body.classList.add('dark')\n  //     } else {\n  //       body.classList.remove('dark')\n  //     }\n  //   }\n  //   if (media.addEventListener === undefined) {\n  //     media.addListener(darkmodeHandler)\n  //   } else {\n  //     media.addEventListener('change', darkmodeHandler)\n  //   }\n  //   return () => {\n  //     if (media.removeEventListener === undefined) {\n  //       media.removeListener(darkmodeHandler)\n  //     } else {\n  //       media.removeEventListener('change', darkmodeHandler)\n  //     }\n  //   }\n  // }, [])\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scheme === 'auto' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiToggleLeft\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('light'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), scheme === 'light' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiSun\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('dark'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }), scheme === 'dark' && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiMoon\"], {\n    size: \"1.5em\",\n    onClick: setColorScheme('auto'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, \"/lphjF0idHuxG8Lzifv76M3wiBM=\");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkmodeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwic2V0Q29sb3JTY2hlbWUiLCJ1c2VDYWxsYmFjayIsInByZWZlcmVuY2UiLCJ1c2VFZmZlY3QiLCJzY2hlbWVJblN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQWMsSUFBZCxDQURDO0FBQUEsTUFDOUJDLE1BRDhCO0FBQUEsTUFDdEJDLFNBRHNCOztBQUdyQyxNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQ2hDLFVBQUNDLFVBQUQ7QUFBQSxXQUE2QixZQUFNO0FBQ2pDSCxlQUFTLENBQUNHLFVBQUQsQ0FBVDtBQUNELEtBRkQ7QUFBQSxHQURnQyxFQUloQyxFQUpnQyxDQUFsQztBQU9BQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixVQUFNTSxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FDdEIsa0JBRHNCLENBQXhCOztBQUlBLFVBQUlILGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QkwsaUJBQVMsQ0FBQyxNQUFELENBQVQ7QUFDRCxPQUZELE1BRU87QUFDTEEsaUJBQVMsQ0FBQ0ssZUFBRCxDQUFUO0FBQ0Q7QUFDRixLQVZELE1BVU8sSUFBSU4sTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDNUJPLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQkUsVUFBcEIsQ0FBK0Isa0JBQS9CO0FBQ0QsS0FGTSxNQUVBO0FBQ0xILFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQkcsT0FBcEIsQ0FBNEIsa0JBQTVCLEVBQWdEWCxNQUFoRDtBQUNEOztBQUVELFFBQU1ZLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUEsUUFBSWQsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckIsVUFBTWUsS0FBSyxHQUFHUixNQUFNLENBQUNTLFVBQVAsQ0FBa0IsOEJBQWxCLENBQWQ7O0FBRUEsVUFBSUQsS0FBSyxDQUFDRSxPQUFWLEVBQW1CO0FBQ2pCTCxZQUFJLENBQUNNLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixNQUFuQjtBQUNELE9BRkQsTUFFTztBQUNMUCxZQUFJLENBQUNNLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixNQUF0QjtBQUNEO0FBQ0YsS0FSRCxNQVFPLElBQUlwQixNQUFNLEtBQUssT0FBZixFQUF3QjtBQUM3QlksVUFBSSxDQUFDTSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsTUFBdEI7QUFDRDtBQUNGLEdBOUJRLEVBOEJOLENBQUNwQixNQUFELENBOUJNLENBQVQsQ0FWcUMsQ0EwQ3JDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFLG1FQUNHQSxNQUFNLEtBQUssTUFBWCxJQUNDLE1BQUMsMkRBQUQ7QUFBYyxRQUFJLEVBQUMsT0FBbkI7QUFBMkIsV0FBTyxFQUFFRSxjQUFjLENBQUMsT0FBRCxDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFJR0YsTUFBTSxLQUFLLE9BQVgsSUFDQyxNQUFDLG9EQUFEO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsV0FBTyxFQUFFRSxjQUFjLENBQUMsTUFBRCxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFPR0YsTUFBTSxLQUFLLE1BQVgsSUFDQyxNQUFDLHFEQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsV0FBTyxFQUFFRSxjQUFjLENBQUMsTUFBRCxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FERjtBQWFELENBcEZEOztHQUFNSixjOztLQUFBQSxjO0FBc0ZTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGFya21vZGVTd2l0Y2gvRGFya21vZGVTd2l0Y2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaU1vb24sIEZpU3VuLCBGaVRvZ2dsZUxlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcblxudHlwZSBDb2xvclNjaGVtZSA9ICdhdXRvJyB8ICdsaWdodCcgfCAnZGFyaycgfCBudWxsXG5cbmNvbnN0IERhcmttb2RlU3dpdGNoOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NjaGVtZSwgc2V0U2NoZW1lXSA9IHVzZVN0YXRlPENvbG9yU2NoZW1lPihudWxsKVxuXG4gIGNvbnN0IHNldENvbG9yU2NoZW1lID0gdXNlQ2FsbGJhY2soXG4gICAgKHByZWZlcmVuY2U6IENvbG9yU2NoZW1lKSA9PiAoKSA9PiB7XG4gICAgICBzZXRTY2hlbWUocHJlZmVyZW5jZSlcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY2hlbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNjaGVtZUluU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgJ19fY29sb3Itc2NoZW1lX18nXG4gICAgICApIGFzIENvbG9yU2NoZW1lXG5cbiAgICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgc2V0U2NoZW1lKCdhdXRvJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjaGVtZShzY2hlbWVJblN0b3JhZ2UpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJylcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX2NvbG9yLXNjaGVtZV9fJywgc2NoZW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICAgIGlmIChzY2hlbWUgPT09ICdhdXRvJykge1xuICAgICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgICAgIGlmIChtZWRpYS5tYXRjaGVzKSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NoZW1lID09PSAnbGlnaHQnKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgIH1cbiAgfSwgW3NjaGVtZV0pXG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAvLyAgIGNvbnN0IGRhcmttb2RlSGFuZGxlciA9ICgpID0+IHtcbiAgLy8gICAgIGNvbnN0IHNjaGVtZUluU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX19jb2xvci1zY2hlbWVfXycpXG4gIC8vICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgLy8gICAgIGlmIChzY2hlbWVJblN0b3JhZ2UgPT09ICdkYXJrJykge1xuICAvLyAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICBpZiAobWVkaWEuYWRkRXZlbnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgICBtZWRpYS5hZGRMaXN0ZW5lcihkYXJrbW9kZUhhbmRsZXIpXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhcmttb2RlSGFuZGxlcilcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgaWYgKG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgICBtZWRpYS5yZW1vdmVMaXN0ZW5lcihkYXJrbW9kZUhhbmRsZXIpXG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXJrbW9kZUhhbmRsZXIpXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2NoZW1lID09PSAnYXV0bycgJiYgKFxuICAgICAgICA8RmlUb2dnbGVMZWZ0IHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdsaWdodCcpfSAvPlxuICAgICAgKX1cbiAgICAgIHtzY2hlbWUgPT09ICdsaWdodCcgJiYgKFxuICAgICAgICA8RmlTdW4gc2l6ZT1cIjEuNWVtXCIgb25DbGljaz17c2V0Q29sb3JTY2hlbWUoJ2RhcmsnKX0gLz5cbiAgICAgICl9XG4gICAgICB7c2NoZW1lID09PSAnZGFyaycgJiYgKFxuICAgICAgICA8RmlNb29uIHNpemU9XCIxLjVlbVwiIG9uQ2xpY2s9e3NldENvbG9yU2NoZW1lKCdhdXRvJyl9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlU3dpdGNoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n"
      )

      /***/
    },
})
