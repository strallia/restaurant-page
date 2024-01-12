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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const div = document.querySelector('div#content');\n\n  class Person {\n    constructor(name, title, descrip) {\n      this.name = name;\n      this.title = title;\n      this.descrip = descrip;\n    }\n  };\n\n  const chef = new Person(\n    'Alex Moris', \n    'Head Chef', \n    'Head chef specializing in italian dishes which he learned during his apprenticeship in Rome.'\n  );\n\n  const manager = new Person(\n    'Emmy Landorf', \n    'Manager', \n    '10 years of experience managing food service business. Ready to deliver the best customer service.'\n  );\n\n  const employees = [chef, manager];\n\n  employees.forEach((person) => {\n    const h1 = document.createElement('h1');\n    h1.textContent = person.name;\n    div.appendChild(h1);\n\n    const title = document.createElement('h3');\n    title.textContent = person.title;\n    div.appendChild(title);\n\n    const descrip = document.createElement('p');\n    descrip.textContent = person.descrip;\n    div.appendChild(descrip);\n  });\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.png */ \"./src/icon.png\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const div = document.querySelector('div#content');\n  const img = document.createElement('img');\n  const h1 = document.createElement('h1');\n  const para = document.createElement('p');\n  \n  img.src = _icon_png__WEBPACK_IMPORTED_MODULE_0__;\n  h1.textContent = 'Home';\n  para.textContent = 'some random text';\n\n  div.appendChild(img);\n  div.appendChild(h1);\n  div.appendChild(para);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pasta_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasta.png */ \"./src/pasta.png\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const div = document.querySelector('div#content');\n\n  // Title\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Menu';\n  div.appendChild(h1);\n\n  // Main Course\n  const h3 = document.createElement('h3');\n  h3.textContent = 'Main Course';\n  div.appendChild(h3);\n\n  // Food Item\n  const itemDiv = document.createElement('div');\n  const itemName = document.createElement('h5');\n  const itemDescrip = document.createElement('p');\n  const itemImg = document.createElement('img');\n  itemName.textContent ='Tomato Pasta';\n  itemDescrip.textContent = 'Aldente pasta with a bright tangy tomato sauce with italian flavors';\n  itemImg.src = _pasta_png__WEBPACK_IMPORTED_MODULE_0__;\n  itemDiv.appendChild(itemName);\n  itemDiv.appendChild(itemDescrip);\n  itemDiv.appendChild(itemImg);\n  div.appendChild(itemDiv);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/icon.png":
/*!**********************!*\
  !*** ./src/icon.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ac9095b202211c1ca48.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/icon.png?");

/***/ }),

/***/ "./src/pasta.png":
/*!***********************!*\
  !*** ./src/pasta.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d44e341858984f2be007.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pasta.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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