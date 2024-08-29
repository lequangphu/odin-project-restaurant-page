/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odin-restaurant-content.js */ \"./src/odin-restaurant-content.js\");\n\n\nconst contentContainer = document.getElementById('content');\n\nfunction loadContent(contentCreator) {\n  contentContainer.innerHTML = '';\n  contentContainer.appendChild(contentCreator());\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const homeButton = document.querySelector('button:nth-child(1)');\n  const menuButton = document.querySelector('button:nth-child(2)');\n  const aboutButton = document.querySelector('button:nth-child(3)');\n\n  homeButton.addEventListener('click', () => loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createHomeContent));\n  menuButton.addEventListener('click', () => loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createMenuContent));\n  aboutButton.addEventListener('click', () => loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createAboutContent));\n\n  // Load home content by default\n  loadContent(_odin_restaurant_content_js__WEBPACK_IMPORTED_MODULE_0__.createHomeContent);\n});\n\n//# sourceURL=webpack://odin-project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/odin-restaurant-content.js":
/*!****************************************!*\
  !*** ./src/odin-restaurant-content.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutContent: () => (/* binding */ createAboutContent),\n/* harmony export */   createHomeContent: () => (/* binding */ createHomeContent),\n/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent)\n/* harmony export */ });\n// Home tab content\nconst createHomeContent = () => {\n  const homeDiv = document.createElement('div');\n  homeDiv.classList.add('home-content');\n\n  const title = document.createElement('h1');\n  title.textContent = 'Welcome to Odin Restaurant';\n  homeDiv.appendChild(title);\n\n  const description = document.createElement('p');\n  description.textContent = 'Experience the finest Nordic cuisine in a cozy atmosphere.';\n  homeDiv.appendChild(description);\n\n  return homeDiv;\n};\n\n// Menu tab content\nconst createMenuContent = () => {\n  const menuDiv = document.createElement('div');\n  menuDiv.classList.add('menu-content');\n\n  const title = document.createElement('h2');\n  title.textContent = 'Our Menu';\n  menuDiv.appendChild(title);\n\n  const menuItems = [\n    { name: 'Viking Feast Platter', price: '$25' },\n    { name: 'Odin\\'s Salmon', price: '$22' },\n    { name: 'Thor\\'s Thunder Burger', price: '$18' },\n  ];\n\n  const menuList = document.createElement('ul');\n  menuItems.forEach(item => {\n    const listItem = document.createElement('li');\n    listItem.textContent = `${item.name} - ${item.price}`;\n    menuList.appendChild(listItem);\n  });\n\n  menuDiv.appendChild(menuList);\n  return menuDiv;\n};\n\n// About tab content\nconst createAboutContent = () => {\n  const aboutDiv = document.createElement('div');\n  aboutDiv.classList.add('about-content');\n\n  const title = document.createElement('h2');\n  title.textContent = 'About Odin Restaurant';\n  aboutDiv.appendChild(title);\n\n  const story = document.createElement('p');\n  story.textContent = 'Odin Restaurant was founded in 2023 with a passion for bringing authentic Nordic flavors to your table. Our chefs use traditional techniques and locally-sourced ingredients to create unforgettable dining experiences.';\n  aboutDiv.appendChild(story);\n\n  return aboutDiv;\n};\n\n// Export the modules\n\n\n//# sourceURL=webpack://odin-project-restaurant-page/./src/odin-restaurant-content.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;