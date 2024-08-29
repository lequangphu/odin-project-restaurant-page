/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odin-restaurant-content.js */ \"./src/odin-restaurant-content.js\");\n\n\nconst contentContainer = document.getElementById('content');\n\nfunction loadContent(contentCreator) {\n  contentContainer.innerHTML = '';\n  contentContainer.appendChild(contentCreator());\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const homeButton = document.querySelector('button:nth-child(1)');\n  const menuButton = document.querySelector('button:nth-child(2)');\n  const aboutButton = document.querySelector('button:nth-child(3)');\n\n  homeButton.addEventListener('click', () => loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createHomeContent));\n  menuButton.addEventListener('click', () => loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createMenuContent));\n  aboutButton.addEventListener('click', () => loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createAboutContent));\n\n  // Load home content by default\n  loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createHomeContent);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0c7O0FBRXhHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF5RCwwRUFBaUI7QUFDMUUseURBQXlELDBFQUFpQjtBQUMxRSwwREFBMEQsMkVBQWtCOztBQUU1RTtBQUNBLGNBQWMsMEVBQWlCO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQsIGNyZWF0ZU1lbnVDb250ZW50LCBjcmVhdGVBYm91dENvbnRlbnQgfSBmcm9tICcuL29kaW4tcmVzdGF1cmFudC1jb250ZW50LmpzJztcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGxvYWRDb250ZW50KGNvbnRlbnRDcmVhdG9yKSB7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENyZWF0b3IoKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uOm50aC1jaGlsZCgzKScpO1xuXG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkQ29udGVudChjcmVhdGVIb21lQ29udGVudCkpO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZENvbnRlbnQoY3JlYXRlTWVudUNvbnRlbnQpKTtcbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkQ29udGVudChjcmVhdGVBYm91dENvbnRlbnQpKTtcblxuICAvLyBMb2FkIGhvbWUgY29udGVudCBieSBkZWZhdWx0XG4gIGxvYWRDb250ZW50KGNyZWF0ZUhvbWVDb250ZW50KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/odin-restaurant-content.js":
/*!****************************************!*\
  !*** ./src/odin-restaurant-content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutContent: () => (/* binding */ createAboutContent),\n/* harmony export */   createHomeContent: () => (/* binding */ createHomeContent),\n/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent)\n/* harmony export */ });\n// Home tab content\nconst createHomeContent = () => {\n  const homeDiv = document.createElement('div');\n  homeDiv.classList.add('home-content');\n\n  const title = document.createElement('h1');\n  title.textContent = 'Welcome to Odin Restaurant';\n  homeDiv.appendChild(title);\n\n  const description = document.createElement('p');\n  description.textContent = 'Experience the finest Nordic cuisine in a cozy atmosphere.';\n  homeDiv.appendChild(description);\n\n  return homeDiv;\n};\n\n// Menu tab content\nconst createMenuContent = () => {\n  const menuDiv = document.createElement('div');\n  menuDiv.classList.add('menu-content');\n\n  const title = document.createElement('h2');\n  title.textContent = 'Our Menu';\n  menuDiv.appendChild(title);\n\n  const menuItems = [\n    { name: 'Viking Feast Platter', price: '$25' },\n    { name: 'Odin\\'s Salmon', price: '$22' },\n    { name: 'Thor\\'s Thunder Burger', price: '$18' },\n  ];\n\n  const menuList = document.createElement('ul');\n  menuItems.forEach(item => {\n    const listItem = document.createElement('li');\n    listItem.textContent = `${item.name} - ${item.price}`;\n    menuList.appendChild(listItem);\n  });\n\n  menuDiv.appendChild(menuList);\n  return menuDiv;\n};\n\n// About tab content\nconst createAboutContent = () => {\n  const aboutDiv = document.createElement('div');\n  aboutDiv.classList.add('about-content');\n\n  const title = document.createElement('h2');\n  title.textContent = 'About Odin Restaurant';\n  aboutDiv.appendChild(title);\n\n  const story = document.createElement('p');\n  story.textContent = 'Odin Restaurant was founded in 2023 with a passion for bringing authentic Nordic flavors to your table. Our chefs use traditional techniques and locally-sourced ingredients to create unforgettable dining experiences.';\n  aboutDiv.appendChild(story);\n\n  return aboutDiv;\n};\n\n// Export the modules\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb2Rpbi1yZXN0YXVyYW50LWNvbnRlbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sNENBQTRDO0FBQ2xELE1BQU0sc0NBQXNDO0FBQzVDLE1BQU0sOENBQThDO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixXQUFXLElBQUksV0FBVztBQUN4RDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb2Rpbi1yZXN0YXVyYW50LWNvbnRlbnQuanM/MWE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIb21lIHRhYiBjb250ZW50XG5jb25zdCBjcmVhdGVIb21lQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGVudCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBPZGluIFJlc3RhdXJhbnQnO1xuICBob21lRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRXhwZXJpZW5jZSB0aGUgZmluZXN0IE5vcmRpYyBjdWlzaW5lIGluIGEgY296eSBhdG1vc3BoZXJlLic7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBob21lRGl2O1xufTtcblxuLy8gTWVudSB0YWIgY29udGVudFxuY29uc3QgY3JlYXRlTWVudUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRlbnQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcbiAgbWVudURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHsgbmFtZTogJ1Zpa2luZyBGZWFzdCBQbGF0dGVyJywgcHJpY2U6ICckMjUnIH0sXG4gICAgeyBuYW1lOiAnT2RpblxcJ3MgU2FsbW9uJywgcHJpY2U6ICckMjInIH0sXG4gICAgeyBuYW1lOiAnVGhvclxcJ3MgVGh1bmRlciBCdXJnZXInLCBwcmljZTogJyQxOCcgfSxcbiAgXTtcblxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX0gLSAke2l0ZW0ucHJpY2V9YDtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xuXG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuICByZXR1cm4gbWVudURpdjtcbn07XG5cbi8vIEFib3V0IHRhYiBjb250ZW50XG5jb25zdCBjcmVhdGVBYm91dENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRlbnQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IE9kaW4gUmVzdGF1cmFudCc7XG4gIGFib3V0RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBzdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3RvcnkudGV4dENvbnRlbnQgPSAnT2RpbiBSZXN0YXVyYW50IHdhcyBmb3VuZGVkIGluIDIwMjMgd2l0aCBhIHBhc3Npb24gZm9yIGJyaW5naW5nIGF1dGhlbnRpYyBOb3JkaWMgZmxhdm9ycyB0byB5b3VyIHRhYmxlLiBPdXIgY2hlZnMgdXNlIHRyYWRpdGlvbmFsIHRlY2huaXF1ZXMgYW5kIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cyB0byBjcmVhdGUgdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZXMuJztcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoc3RvcnkpO1xuXG4gIHJldHVybiBhYm91dERpdjtcbn07XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlc1xuZXhwb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQsIGNyZWF0ZU1lbnVDb250ZW50LCBjcmVhdGVBYm91dENvbnRlbnQgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/odin-restaurant-content.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;