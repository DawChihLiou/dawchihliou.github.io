webpackHotUpdate_N_E('pages/_app', {
  /***/ './components/DarkmodeSwitch/DarkmodeSwitch.tsx':
    /*!******************************************************!*\
  !*** ./components/DarkmodeSwitch/DarkmodeSwitch.tsx ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");\nvar _this = undefined,\n    _jsxFileName = "/Users/dawchihliou/Sites/dawchihliou.github.io/components/DarkmodeSwitch/DarkmodeSwitch.tsx",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DarkmodeSwitch = function DarkmodeSwitch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(\'auto\'),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var darkmodeHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (preference) {\n    return function () {\n      setScheme(preference);\n    };\n  }, []); // useEffect(() => {\n  //   const media = window.matchMedia(\'(prefers-color-scheme: dark)\')\n  //   if (media.addEventListener === undefined) {\n  //     media.addListener(darkmodeHandler)\n  //   } else {\n  //     media.addEventListener(\'change\', darkmodeHandler)\n  //   }\n  //   return () => {\n  //     if (media.removeEventListener === undefined) {\n  //       media.removeListener(darkmodeHandler)\n  //     } else {\n  //       media.removeEventListener(\'change\', darkmodeHandler)\n  //     }\n  //   }\n  // }, [darkmodeHandler])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    var target = document.querySelector(\'body\');\n    var media = window.matchMedia(\'(prefers-color-scheme: dark)\');\n\n    if (media.matches) {\n      target.classList.add(\'dark\');\n      setScheme(true);\n    } else {\n      target.classList.remove(\'dark\');\n      setScheme(false);\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scheme && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiMoon"], {\n    size: "1.5em",\n    onClick: darkmodeHandler(\'dark\'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 18\n    }\n  }), !scheme && __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiSun"], {\n    size: "1.5em",\n    onClick: darkmodeHandler(\'light\'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiToggleLeft"], {\n    size: "1.5em",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(DarkmodeSwitch, "eFQ0Y8pG+HYoC00nmsjWNoVB+bY=");\n\n_c = DarkmodeSwitch;\n/* harmony default export */ __webpack_exports__["default"] = (DarkmodeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, "DarkmodeSwitch");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXJrbW9kZVN3aXRjaC9EYXJrbW9kZVN3aXRjaC50c3g/NzE1ZCJdLCJuYW1lcyI6WyJEYXJrbW9kZVN3aXRjaCIsInVzZVN0YXRlIiwic2NoZW1lIiwic2V0U2NoZW1lIiwiZGFya21vZGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJwcmVmZXJlbmNlIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQWMsTUFBZCxDQURDO0FBQUEsTUFDOUJDLE1BRDhCO0FBQUEsTUFDdEJDLFNBRHNCOztBQUdyQyxNQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQ2pDLFVBQUNDLFVBQUQ7QUFBQSxXQUE2QixZQUFNO0FBQ2pDSCxlQUFTLENBQUNHLFVBQUQsQ0FBVDtBQUNELEtBRkQ7QUFBQSxHQURpQyxFQUlqQyxFQUppQyxDQUFuQyxDQUhxQyxDQVVyQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWY7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQiw4QkFBbEIsQ0FBZDs7QUFFQSxRQUFJRixLQUFLLENBQUNHLE9BQVYsRUFBbUI7QUFDakJOLFlBQU0sQ0FBQ08sU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDQWIsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMSyxZQUFNLENBQUNPLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLE1BQXhCO0FBQ0FkLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDtBQUNGLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxTQUNFLG1FQUNHRCxNQUFNLElBQUksTUFBQyxxREFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFdBQU8sRUFBRUUsZUFBZSxDQUFDLE1BQUQsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURiLEVBRUcsQ0FBQ0YsTUFBRCxJQUFXLE1BQUMsb0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixXQUFPLEVBQUVFLGVBQWUsQ0FBQyxPQUFELENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGZCxFQUdFLE1BQUMsMkRBQUQ7QUFBYyxRQUFJLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRCxDQWhERDs7R0FBTUosYzs7S0FBQUEsYztBQWtEU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhcmttb2RlU3dpdGNoL0Rhcmttb2RlU3dpdGNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biwgRmlUb2dnbGVMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5cbnR5cGUgQ29sb3JTY2hlbWUgPSAnYXV0bycgfCAnbGlnaHQnIHwgJ2RhcmsnXG5jb25zdCBEYXJrbW9kZVN3aXRjaDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY2hlbWUsIHNldFNjaGVtZV0gPSB1c2VTdGF0ZTxDb2xvclNjaGVtZT4oJ2F1dG8nKVxuXG4gIGNvbnN0IGRhcmttb2RlSGFuZGxlciA9IHVzZUNhbGxiYWNrKFxuICAgIChwcmVmZXJlbmNlOiBDb2xvclNjaGVtZSkgPT4gKCkgPT4ge1xuICAgICAgc2V0U2NoZW1lKHByZWZlcmVuY2UpXG4gICAgfSxcbiAgICBbXVxuICApXG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcblxuICAvLyAgIGlmIChtZWRpYS5hZGRFdmVudExpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgIG1lZGlhLmFkZExpc3RlbmVyKGRhcmttb2RlSGFuZGxlcilcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGFya21vZGVIYW5kbGVyKVxuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICBpZiAobWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgICAgIG1lZGlhLnJlbW92ZUxpc3RlbmVyKGRhcmttb2RlSGFuZGxlcilcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhcmttb2RlSGFuZGxlcilcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sIFtkYXJrbW9kZUhhbmRsZXJdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgICBpZiAobWVkaWEubWF0Y2hlcykge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgc2V0U2NoZW1lKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgIHNldFNjaGVtZShmYWxzZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzY2hlbWUgJiYgPEZpTW9vbiBzaXplPVwiMS41ZW1cIiBvbkNsaWNrPXtkYXJrbW9kZUhhbmRsZXIoJ2RhcmsnKX0gLz59XG4gICAgICB7IXNjaGVtZSAmJiA8RmlTdW4gc2l6ZT1cIjEuNWVtXCIgb25DbGljaz17ZGFya21vZGVIYW5kbGVyKCdsaWdodCcpfSAvPn1cbiAgICAgIDxGaVRvZ2dsZUxlZnQgc2l6ZT1cIjEuNWVtXCIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZVN3aXRjaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DarkmodeSwitch/DarkmodeSwitch.tsx\n'
      )

      /***/
    },
})
