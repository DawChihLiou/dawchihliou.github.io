webpackHotUpdate_N_E('pages/_app', {
  /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/menu.css':
    /*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/menu.css ***!
  \****************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      eval(
        '// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, "/* Position and sizing of burger button */\\n.bm-burger-button {\\n  position: fixed;\\n  width: 2rem;\\n  height: 2rem;\\n  left: 1rem;\\n  top: 1rem;\\n  color: var(--text-primary-color);\\n}\\n\\n/* Color/shape of burger icon bars */\\n.bm-burger-bars {\\n  background: var(--text-primary-color);\\n}\\n\\n/* Color/shape of burger icon bars on hover*/\\n.bm-burger-bars-hover {\\n  background: var(--action-hover-color);\\n}\\n\\n/* Position and sizing of clickable cross button */\\n.bm-cross-button {\\n  height: 2rem !important;\\n  width: 2rem !important;\\n  right: 1rem !important;\\n  top: 1rem !important;\\n}\\n\\n/* Color/shape of close button cross */\\n.bm-cross {\\n  background: var(--background-paper-color);\\n  color: var(--text-primary-color);\\n  right: 2rem;\\n  top: 2rem;\\n}\\n\\n/*\\nSidebar wrapper styles\\nNote: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases\\n*/\\n.bm-menu-wrap {\\n  position: fixed;\\n  height: 100%;\\n}\\n\\n/* General sidebar styles */\\n.bm-menu {\\n  background: var(--background-paper-color);\\n  padding: 4em 1.5em 0;\\n  font-size: 1.15em;\\n}\\n\\n/* Morph shape necessary with bubble or elastic */\\n.bm-morph-shape {\\n  fill: var(--background-paper-color);\\n}\\n\\n/* Wrapper for item list */\\n.bm-item-list {\\n  color: var(--text-primary-color);\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.bm-item-list a {\\n  text-decoration: none;\\n}\\n\\n/* Individual item */\\n.bm-item {\\n  display: inline-block;\\n}\\n.bm-item:first-of-type {\\n  flex-grow: 1;\\n}\\n\\n/* Styling of overlay */\\n.bm-overlay {\\n  background: rgba(0, 0, 0, 0.5);\\n}\\n", "",{"version":3,"sources":["/Users/dawchihliou/Sites/dawchihliou.github.io/styles/menu.css"],"names":[],"mappings":"AAAA,yCAAyC;AACzC;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,UAAU;EACV,SAAS;EACT,gCAAgC;AAClC;;AAEA,oCAAoC;AACpC;EACE,qCAAqC;AACvC;;AAEA,4CAA4C;AAC5C;EACE,qCAAqC;AACvC;;AAEA,kDAAkD;AAClD;EACE,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA,sCAAsC;AACtC;EACE,yCAAyC;EACzC,gCAAgC;EAChC,WAAW;EACX,SAAS;AACX;;AAEA;;;CAGC;AACD;EACE,eAAe;EACf,YAAY;AACd;;AAEA,2BAA2B;AAC3B;EACE,yCAAyC;EACzC,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA,iDAAiD;AACjD;EACE,mCAAmC;AACrC;;AAEA,0BAA0B;AAC1B;EACE,gCAAgC;EAChC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,oBAAoB;AACpB;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;AACd;;AAEA,uBAAuB;AACvB;EACE,8BAA8B;AAChC","file":"menu.css","sourcesContent":["/* Position and sizing of burger button */\\n.bm-burger-button {\\n  position: fixed;\\n  width: 2rem;\\n  height: 2rem;\\n  left: 1rem;\\n  top: 1rem;\\n  color: var(--text-primary-color);\\n}\\n\\n/* Color/shape of burger icon bars */\\n.bm-burger-bars {\\n  background: var(--text-primary-color);\\n}\\n\\n/* Color/shape of burger icon bars on hover*/\\n.bm-burger-bars-hover {\\n  background: var(--action-hover-color);\\n}\\n\\n/* Position and sizing of clickable cross button */\\n.bm-cross-button {\\n  height: 2rem !important;\\n  width: 2rem !important;\\n  right: 1rem !important;\\n  top: 1rem !important;\\n}\\n\\n/* Color/shape of close button cross */\\n.bm-cross {\\n  background: var(--background-paper-color);\\n  color: var(--text-primary-color);\\n  right: 2rem;\\n  top: 2rem;\\n}\\n\\n/*\\nSidebar wrapper styles\\nNote: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases\\n*/\\n.bm-menu-wrap {\\n  position: fixed;\\n  height: 100%;\\n}\\n\\n/* General sidebar styles */\\n.bm-menu {\\n  background: var(--background-paper-color);\\n  padding: 4em 1.5em 0;\\n  font-size: 1.15em;\\n}\\n\\n/* Morph shape necessary with bubble or elastic */\\n.bm-morph-shape {\\n  fill: var(--background-paper-color);\\n}\\n\\n/* Wrapper for item list */\\n.bm-item-list {\\n  color: var(--text-primary-color);\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.bm-item-list a {\\n  text-decoration: none;\\n}\\n\\n/* Individual item */\\n.bm-item {\\n  display: inline-block;\\n}\\n.bm-item:first-of-type {\\n  flex-grow: 1;\\n}\\n\\n/* Styling of overlay */\\n.bm-overlay {\\n  background: rgba(0, 0, 0, 0.5);\\n}\\n"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21lbnUuY3NzPzE5ZmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxrRUFBa0Usb0JBQW9CLGdCQUFnQixpQkFBaUIsZUFBZSxjQUFjLHFDQUFxQyxHQUFHLDREQUE0RCwwQ0FBMEMsR0FBRywwRUFBMEUsMENBQTBDLEdBQUcsMkVBQTJFLDRCQUE0QiwyQkFBMkIsMkJBQTJCLHlCQUF5QixHQUFHLHdEQUF3RCw4Q0FBOEMscUNBQXFDLGdCQUFnQixjQUFjLEdBQUcsMEtBQTBLLG9CQUFvQixpQkFBaUIsR0FBRyw0Q0FBNEMsOENBQThDLHlCQUF5QixzQkFBc0IsR0FBRyx5RUFBeUUsd0NBQXdDLEdBQUcsZ0RBQWdELHFDQUFxQyxrQkFBa0IsMkJBQTJCLEdBQUcscUJBQXFCLDBCQUEwQixHQUFHLHFDQUFxQywwQkFBMEIsR0FBRywwQkFBMEIsaUJBQWlCLEdBQUcsMkNBQTJDLG1DQUFtQyxHQUFHLFNBQVMsNEhBQTRILE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSwyR0FBMkcsb0JBQW9CLGdCQUFnQixpQkFBaUIsZUFBZSxjQUFjLHFDQUFxQyxHQUFHLDREQUE0RCwwQ0FBMEMsR0FBRywwRUFBMEUsMENBQTBDLEdBQUcsMkVBQTJFLDRCQUE0QiwyQkFBMkIsMkJBQTJCLHlCQUF5QixHQUFHLHdEQUF3RCw4Q0FBOEMscUNBQXFDLGdCQUFnQixjQUFjLEdBQUcsMEtBQTBLLG9CQUFvQixpQkFBaUIsR0FBRyw0Q0FBNEMsOENBQThDLHlCQUF5QixzQkFBc0IsR0FBRyx5RUFBeUUsd0NBQXdDLEdBQUcsZ0RBQWdELHFDQUFxQyxrQkFBa0IsMkJBQTJCLEdBQUcscUJBQXFCLDBCQUEwQixHQUFHLHFDQUFxQywwQkFBMEIsR0FBRywwQkFBMEIsaUJBQWlCLEdBQUcsMkNBQTJDLG1DQUFtQyxHQUFHLEtBQUs7QUFDajhIO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL3N0eWxlcy9tZW51LmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xcbi5ibS1idXJnZXItYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbGVmdDogMXJlbTtcXG4gIHRvcDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4vKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXFxuLmJtLWJ1cmdlci1iYXJzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgb24gaG92ZXIqL1xcbi5ibS1idXJnZXItYmFycy1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3Rpb24taG92ZXItY29sb3IpO1xcbn1cXG5cXG4vKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGNsaWNrYWJsZSBjcm9zcyBidXR0b24gKi9cXG4uYm0tY3Jvc3MtYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDJyZW0gIWltcG9ydGFudDtcXG4gIHJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB0b3A6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXFxuLmJtLWNyb3NzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcGFwZXItY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICByaWdodDogMnJlbTtcXG4gIHRvcDogMnJlbTtcXG59XFxuXFxuLypcXG5TaWRlYmFyIHdyYXBwZXIgc3R5bGVzXFxuTm90ZTogQmV3YXJlIG9mIG1vZGlmeWluZyB0aGlzIGVsZW1lbnQgYXMgaXQgY2FuIGJyZWFrIHRoZSBhbmltYXRpb25zIC0geW91IHNob3VsZCBub3QgbmVlZCB0byB0b3VjaCBpdCBpbiBtb3N0IGNhc2VzXFxuKi9cXG4uYm0tbWVudS13cmFwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xcbi5ibS1tZW51IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcGFwZXItY29sb3IpO1xcbiAgcGFkZGluZzogNGVtIDEuNWVtIDA7XFxuICBmb250LXNpemU6IDEuMTVlbTtcXG59XFxuXFxuLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cXG4uYm0tbW9ycGgtc2hhcGUge1xcbiAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1wYXBlci1jb2xvcik7XFxufVxcblxcbi8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xcbi5ibS1pdGVtLWxpc3Qge1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJtLWl0ZW0tbGlzdCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSW5kaXZpZHVhbCBpdGVtICovXFxuLmJtLWl0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYm0taXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLyogU3R5bGluZyBvZiBvdmVybGF5ICovXFxuLmJtLW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZGF3Y2hpaGxpb3UvU2l0ZXMvZGF3Y2hpaGxpb3UuZ2l0aHViLmlvL3N0eWxlcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5Q0FBeUM7QUFDekM7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSx5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7OztDQUdDO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHlDQUF5QztFQUN6QyxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBLGlEQUFpRDtBQUNqRDtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSw4QkFBOEI7QUFDaENcIixcImZpbGVcIjpcIm1lbnUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFBvc2l0aW9uIGFuZCBzaXppbmcgb2YgYnVyZ2VyIGJ1dHRvbiAqL1xcbi5ibS1idXJnZXItYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbGVmdDogMXJlbTtcXG4gIHRvcDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4vKiBDb2xvci9zaGFwZSBvZiBidXJnZXIgaWNvbiBiYXJzICovXFxuLmJtLWJ1cmdlci1iYXJzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi8qIENvbG9yL3NoYXBlIG9mIGJ1cmdlciBpY29uIGJhcnMgb24gaG92ZXIqL1xcbi5ibS1idXJnZXItYmFycy1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3Rpb24taG92ZXItY29sb3IpO1xcbn1cXG5cXG4vKiBQb3NpdGlvbiBhbmQgc2l6aW5nIG9mIGNsaWNrYWJsZSBjcm9zcyBidXR0b24gKi9cXG4uYm0tY3Jvc3MtYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDJyZW0gIWltcG9ydGFudDtcXG4gIHJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB0b3A6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLyogQ29sb3Ivc2hhcGUgb2YgY2xvc2UgYnV0dG9uIGNyb3NzICovXFxuLmJtLWNyb3NzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcGFwZXItY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICByaWdodDogMnJlbTtcXG4gIHRvcDogMnJlbTtcXG59XFxuXFxuLypcXG5TaWRlYmFyIHdyYXBwZXIgc3R5bGVzXFxuTm90ZTogQmV3YXJlIG9mIG1vZGlmeWluZyB0aGlzIGVsZW1lbnQgYXMgaXQgY2FuIGJyZWFrIHRoZSBhbmltYXRpb25zIC0geW91IHNob3VsZCBub3QgbmVlZCB0byB0b3VjaCBpdCBpbiBtb3N0IGNhc2VzXFxuKi9cXG4uYm0tbWVudS13cmFwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogR2VuZXJhbCBzaWRlYmFyIHN0eWxlcyAqL1xcbi5ibS1tZW51IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcGFwZXItY29sb3IpO1xcbiAgcGFkZGluZzogNGVtIDEuNWVtIDA7XFxuICBmb250LXNpemU6IDEuMTVlbTtcXG59XFxuXFxuLyogTW9ycGggc2hhcGUgbmVjZXNzYXJ5IHdpdGggYnViYmxlIG9yIGVsYXN0aWMgKi9cXG4uYm0tbW9ycGgtc2hhcGUge1xcbiAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1wYXBlci1jb2xvcik7XFxufVxcblxcbi8qIFdyYXBwZXIgZm9yIGl0ZW0gbGlzdCAqL1xcbi5ibS1pdGVtLWxpc3Qge1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJtLWl0ZW0tbGlzdCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSW5kaXZpZHVhbCBpdGVtICovXFxuLmJtLWl0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYm0taXRlbTpmaXJzdC1vZi10eXBlIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLyogU3R5bGluZyBvZiBvdmVybGF5ICovXFxuLmJtLW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/menu.css\n'
      )

      /***/
    },
})
