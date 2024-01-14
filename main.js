/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/salsa.ttf */ "./src/fonts/salsa.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/assistant.ttf */ "./src/fonts/assistant.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Salsa';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}
@font-face {
  font-family: 'Assistant';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Assistant', sans-serif;
}
body {
  font-size: 16px;
  min-width: 300px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(300px, 1fr);
}
img {
  width: 200px;
}
h1,
h2,
h3 {
  font-family: 'Salsa';
  letter-spacing: 0.1em;
}

/* HEADER */
header {
  background-color: rgb(250, 190, 105);
  padding: 10px 20px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  gap: 10px;

  > * {
    flex: 1;
  }
}
nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
nav > button {
  border-radius: 30px;
  border-width: 3px;
  border-style: solid;
  font-size: 1rem;
  background-color: rgb(143, 207, 97);
  width: 80px;
  padding: 8px 10px;
  height: min-content;
  font-weight: bold;
}
button[data-status='closed'] {
  box-shadow: 0 5px rgb(95, 123, 75);
  translate: 0 -3px;
  border-color: rgb(95, 123, 75);
}
button[data-status='open'] {
  border-color: rgb(109, 160, 72);
}

/* HOME PAGE */
.welcome {
  background-color: rgb(251, 245, 238);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-items: stretch;
  justify-content: center;
  gap: 20px;

  > div:first-of-type {
    flex: 1;
    display: flex;
    justify-content: center;
    max-width: 300px;
  }
  > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    gap: 20px;
    text-align: center;
  }
}
.bubble-section {
  padding: 20px;
  display: flex;
  justify-content: center;
  
  > div {
    border: 3px solid orange;
    border-radius: 20px;
    padding: 20px;
    background-color: rgb(251, 245, 238);
    width: 800px;
    
    display: grid;
    justify-content: center;
    gap: 30px;
    grid-template-columns: auto max-content;
    align-items: center;

    > h2 {
      text-align: right;
    }
  }
}
.photos-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 20px;
}

/* MENU PAGE*/
.menu-div,
.items-div {
  display: flex;
  flex-wrap: wrap;
  justify-items: stretch;
  gap: 20px;

  > div {
    flex: 1;
  }
}
.menu-div {
  padding: 20px;
}
.menu-div img {
  width: 125px;
}
.border-div {
  border: 3px solid orange;
  border-radius: 20px;
  padding: 20px;
  background-color: rgb(251, 245, 238);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.dish-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}

/* CONTACT PAGE*/
.contact-div {
  padding: 20px;
  text-align: center;

  display: flex;
  gap: 20px;
  justify-content: stretch;
  flex-wrap: wrap;

  > div {
    flex: 1
  }
}

/* FOOTER */
footer {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 5px;

  > p {
    flex: 1;
    color:rgb(165, 125, 82);
  }

  a {
    color: inherit;
  }

  a:visited {
    color: inherit;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,+DAAgD;AAClD;AACA;EACE,wBAAwB;EACxB,+DAAoD;AACtD;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,yCAAyC;AAC3C;AACA;EACE,YAAY;AACd;AACA;;;EAGE,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA,WAAW;AACX;EACE,oCAAoC;EACpC,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,SAAS;;EAET;IACE,OAAO;EACT;AACF;AACA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,mCAAmC;EACnC,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;;AAEA,cAAc;AACd;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;;EAET;IACE,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;IACT,kBAAkB;EACpB;AACF;AACA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;;EAEvB;IACE,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,oCAAoC;IACpC,YAAY;;IAEZ,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,uCAAuC;IACvC,mBAAmB;;IAEnB;MACE,iBAAiB;IACnB;EACF;AACF;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,oBAAoB;AACtB;;AAEA,aAAa;AACb;;EAEE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,SAAS;;EAET;IACE,OAAO;EACT;AACF;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,mBAAmB;EACnB,aAAa;EACb,oCAAoC;;EAEpC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;;EAET;IACE,aAAa;IACb,sBAAsB;IACtB,QAAQ;EACV;AACF;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,kBAAkB;;EAElB,aAAa;EACb,SAAS;EACT,wBAAwB;EACxB,eAAe;;EAEf;IACE;EACF;AACF;;AAEA,WAAW;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;;EAEnB;IACE,OAAO;IACP,uBAAuB;EACzB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":["@font-face {\n  font-family: 'Salsa';\n  src: url('./fonts/salsa.ttf') format('truetype');\n}\n@font-face {\n  font-family: 'Assistant';\n  src: url('./fonts/assistant.ttf') format('truetype');\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Assistant', sans-serif;\n}\nbody {\n  font-size: 16px;\n  min-width: 300px;\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: minmax(300px, 1fr);\n}\nimg {\n  width: 200px;\n}\nh1,\nh2,\nh3 {\n  font-family: 'Salsa';\n  letter-spacing: 0.1em;\n}\n\n/* HEADER */\nheader {\n  background-color: rgb(250, 190, 105);\n  padding: 10px 20px;\n  display: flex;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  > * {\n    flex: 1;\n  }\n}\nnav {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n}\nnav > button {\n  border-radius: 30px;\n  border-width: 3px;\n  border-style: solid;\n  font-size: 1rem;\n  background-color: rgb(143, 207, 97);\n  width: 80px;\n  padding: 8px 10px;\n  height: min-content;\n  font-weight: bold;\n}\nbutton[data-status='closed'] {\n  box-shadow: 0 5px rgb(95, 123, 75);\n  translate: 0 -3px;\n  border-color: rgb(95, 123, 75);\n}\nbutton[data-status='open'] {\n  border-color: rgb(109, 160, 72);\n}\n\n/* HOME PAGE */\n.welcome {\n  background-color: rgb(251, 245, 238);\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-items: stretch;\n  justify-content: center;\n  gap: 20px;\n\n  > div:first-of-type {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    max-width: 300px;\n  }\n  > div:last-of-type {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 500px;\n    gap: 20px;\n    text-align: center;\n  }\n}\n.bubble-section {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  \n  > div {\n    border: 3px solid orange;\n    border-radius: 20px;\n    padding: 20px;\n    background-color: rgb(251, 245, 238);\n    width: 800px;\n    \n    display: grid;\n    justify-content: center;\n    gap: 30px;\n    grid-template-columns: auto max-content;\n    align-items: center;\n\n    > h2 {\n      text-align: right;\n    }\n  }\n}\n.photos-div {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n/* MENU PAGE*/\n.menu-div,\n.items-div {\n  display: flex;\n  flex-wrap: wrap;\n  justify-items: stretch;\n  gap: 20px;\n\n  > div {\n    flex: 1;\n  }\n}\n.menu-div {\n  padding: 20px;\n}\n.menu-div img {\n  width: 125px;\n}\n.border-div {\n  border: 3px solid orange;\n  border-radius: 20px;\n  padding: 20px;\n  background-color: rgb(251, 245, 238);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.dish-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  gap: 10px;\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n}\n\n/* CONTACT PAGE*/\n.contact-div {\n  padding: 20px;\n  text-align: center;\n\n  display: flex;\n  gap: 20px;\n  justify-content: stretch;\n  flex-wrap: wrap;\n\n  > div {\n    flex: 1\n  }\n}\n\n/* FOOTER */\nfooter {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 5px;\n\n  > p {\n    flex: 1;\n    color:rgb(165, 125, 82);\n  }\n\n  a {\n    color: inherit;\n  }\n\n  a:visited {\n    color: inherit;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baker_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baker.png */ "./src/contact/baker.png");
/* harmony import */ var _chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chef.png */ "./src/contact/chef.png");
/* harmony import */ var _waiter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waiter.png */ "./src/contact/waiter.png");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container) {
  class Person {
    constructor(name, title, img) {
      this.name = name;
      this.title = title;
      this.img = img;
    }
  };
  const chef = new Person(
    'Paws Culinaire', 
    'Head Chef', 
    _chef_png__WEBPACK_IMPORTED_MODULE_1__
  );
  const baker = new Person(
    'Whisker Kneads', 
    'Head Baker', 
    _baker_png__WEBPACK_IMPORTED_MODULE_0__
  );
  const waiter = new Person(
    'Meowster Tailington', 
    'Waiter', 
    _waiter_png__WEBPACK_IMPORTED_MODULE_2__
  );
  const employees = [chef, baker, waiter];

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');

  employees.forEach((person) => {
    const borderDiv = document.createElement('div');
    borderDiv.classList.add('border-div');

    const h1 = document.createElement('h1');
    h1.textContent = person.name;

    const h3 = document.createElement('h3');
    h3.textContent = person.title;

    const img = document.createElement('img');
    img.src = person.img;

    const arr = [h1, h3, img];
    arr.forEach((item) => {
      borderDiv.appendChild(item);
    });

    contactDiv.appendChild(borderDiv);
  })

  container.appendChild(contactDiv);
}

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.png */ "./src/home/icon.png");
/* harmony import */ var _hearts_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hearts.png */ "./src/home/hearts.png");
/* harmony import */ var _friends_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends.png */ "./src/home/friends.png");
/* harmony import */ var _sleepy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sleepy.png */ "./src/home/sleepy.png");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container) {
  // welcome section
  const welcomeDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');
  const textDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const welcomePara = document.createElement('p');

  welcomeDiv.classList.add('welcome');
  img.src = _icon_png__WEBPACK_IMPORTED_MODULE_0__;
  h1.textContent = 'Welcome to Kitty Cafe!';
  welcomePara.textContent= "The ultimate destination for cat lovers and food enthusiasts. Our Kitty Cafe offers a purr-fect haven for relaxation and feline companionship.";

  imgDiv.appendChild(img);
  [h1, welcomePara].forEach((element) => textDiv.appendChild(element));
  [imgDiv, textDiv].forEach((element) => welcomeDiv.appendChild(element));


  // details section
  const bubbleDiv = document.createElement('div');
  const borderDiv = document.createElement('div');
  bubbleDiv.classList.add('bubble-section');

  const details = [
    {
      title: 'Open Hours',
      text: [
        "Mon - Fri: 10am - 6pm",
        "Sat- Sun: 10am - 8pm"
      ]
    },
    {
      title: 'Location',
      text: [
        "111 Sunshine Lane",
        "Neverland, CA"
      ]
    }
  ];
  details.forEach((section) => {
    const h2 = document.createElement('h2');
    h2.textContent = section.title;

    const listDiv = document.createElement('div');
    const textArr = section.text;
    textArr.forEach((string) => {
      const para = document.createElement('p');
      para.textContent = string;
      listDiv.appendChild(para);
    });

    [h2, listDiv].forEach((element) => borderDiv.appendChild(element));
  });
  bubbleDiv.appendChild(borderDiv);


  // photos section
  const photosDiv = document.createElement('div');
  photosDiv.classList.add('photos-div');

  const photos = [_hearts_png__WEBPACK_IMPORTED_MODULE_1__, _friends_png__WEBPACK_IMPORTED_MODULE_2__, _sleepy_png__WEBPACK_IMPORTED_MODULE_3__];
  photos.forEach((photo) => {
    const img = document.createElement('img');
    img.src = photo;
    photosDiv.appendChild(img);
  });


  container.appendChild(welcomeDiv);
  container.appendChild(bubbleDiv);
  container.appendChild(photosDiv);
};

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ramen_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramen.png */ "./src/menu/ramen.png");
/* harmony import */ var _sandwich_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sandwich.png */ "./src/menu/sandwich.png");
/* harmony import */ var _cake_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cake.png */ "./src/menu/cake.png");
/* harmony import */ var _ice_creams_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ice-creams.png */ "./src/menu/ice-creams.png");
/* harmony import */ var _hot_chocolate_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hot-chocolate.png */ "./src/menu/hot-chocolate.png");
/* harmony import */ var _milkshake_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./milkshake.png */ "./src/menu/milkshake.png");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container) {
  const details = [
    {
      title: 'Mains',
      items: [
        {
          name: 'Ramen',
          img: _ramen_png__WEBPACK_IMPORTED_MODULE_0__,
          descrip: 'Hand-pulled noodles, premium meats, and fresh veggies in a flavorful broth'
        },
        {
          name: 'Sandwich',
          img: _sandwich_png__WEBPACK_IMPORTED_MODULE_1__,
          descrip: 'Artisanal bread filled with high-quality meats, veggies, and gourmet spreads'
        }
      ], 
    },
    {
      title: 'Desserts',
      items: [
        {
          name: 'Cake',
          img: _cake_png__WEBPACK_IMPORTED_MODULE_2__,
          descrip: 'Vanilla cake filled with boston cream topped with a chocolate glaze'
        },
        {
          name: 'Ice Cream',
          img: _ice_creams_png__WEBPACK_IMPORTED_MODULE_3__,
          descrip: ' Locally-sourced ingredients to create our classic vanilla, strawberry, and chocolate flavors'
        }
      ], 
    },
    {
      title: 'Drinks',
      items: [
        {
          name: 'Hot Chocolate',
          img: _hot_chocolate_png__WEBPACK_IMPORTED_MODULE_4__,
          descrip: 'Rich cocoa with a swirl of whipped cream topped with marshmellows'
        },
        {
          name: 'Milkshake',
          img: _milkshake_png__WEBPACK_IMPORTED_MODULE_5__,
          descrip: 'Farm-fresh milk mixed with ice cream and a velvety blend of fresh strawberries'
        }
      ], 
    }
  ];

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  details.forEach((category) => {
    const borderDiv = document.createElement('div');
    borderDiv.classList.add('border-div');

    const h1 = document.createElement('h1');
    h1.textContent = category.title;
    borderDiv.appendChild(h1);

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items-div');
    category.items.forEach((dish) => {
      itemsDiv.appendChild(generateDish(dish));
      borderDiv.appendChild(itemsDiv);
    });

    menuDiv.appendChild(borderDiv);
  })

  function generateDish(dish) {
    const dishDiv = document.createElement('div');
    dishDiv.classList.add('dish-div');

    const img = document.createElement('img');
    img.src = dish.img;
    
    const textDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = dish.name;
    textDiv.appendChild(h3);

    const para = document.createElement('p');
    para.textContent = dish.descrip;
    textDiv.appendChild(para);

    dishDiv.appendChild(img);
    dishDiv.appendChild(textDiv);

    return dishDiv;
  }

  container.appendChild(menuDiv);
}

/***/ }),

/***/ "./src/contact/baker.png":
/*!*******************************!*\
  !*** ./src/contact/baker.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9ddf0fd8989ce58f8fb.png";

/***/ }),

/***/ "./src/contact/chef.png":
/*!******************************!*\
  !*** ./src/contact/chef.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79935e12092dd2f91e6c.png";

/***/ }),

/***/ "./src/contact/waiter.png":
/*!********************************!*\
  !*** ./src/contact/waiter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97fee24922a7842b39f1.png";

/***/ }),

/***/ "./src/fonts/assistant.ttf":
/*!*********************************!*\
  !*** ./src/fonts/assistant.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "288b26caf092de6f133d.ttf";

/***/ }),

/***/ "./src/fonts/salsa.ttf":
/*!*****************************!*\
  !*** ./src/fonts/salsa.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44270902e42bdce4c660.ttf";

/***/ }),

/***/ "./src/home/friends.png":
/*!******************************!*\
  !*** ./src/home/friends.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02010f6253d349b44f4a.png";

/***/ }),

/***/ "./src/home/hearts.png":
/*!*****************************!*\
  !*** ./src/home/hearts.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a72a28ee21005b48914.png";

/***/ }),

/***/ "./src/home/icon.png":
/*!***************************!*\
  !*** ./src/home/icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff8863f52a978e36235f.png";

/***/ }),

/***/ "./src/home/sleepy.png":
/*!*****************************!*\
  !*** ./src/home/sleepy.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af78667710350d195956.png";

/***/ }),

/***/ "./src/menu/cake.png":
/*!***************************!*\
  !*** ./src/menu/cake.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21c7bb22904c66f4b87e.png";

/***/ }),

/***/ "./src/menu/hot-chocolate.png":
/*!************************************!*\
  !*** ./src/menu/hot-chocolate.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb101cc23b8c41f85c8a.png";

/***/ }),

/***/ "./src/menu/ice-creams.png":
/*!*********************************!*\
  !*** ./src/menu/ice-creams.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53e35ddc640408bc5a8b.png";

/***/ }),

/***/ "./src/menu/milkshake.png":
/*!********************************!*\
  !*** ./src/menu/milkshake.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "385ee65046299d5476d5.png";

/***/ }),

/***/ "./src/menu/ramen.png":
/*!****************************!*\
  !*** ./src/menu/ramen.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e735aedfb5400c6ab3d3.png";

/***/ }),

/***/ "./src/menu/sandwich.png":
/*!*******************************!*\
  !*** ./src/menu/sandwich.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da05be778c4bf0666c8a.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.js */ "./src/home/home.js");
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.js */ "./src/menu/menu.js");
/* harmony import */ var _contact_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.js */ "./src/contact/contact.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





const container = document.querySelector('div#content');

const tabs = document.querySelectorAll('nav > button');
tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    renderOpenTab(event.target)
    renderContent(event.target);
  });
})

function renderOpenTab(selectedTab) {
  tabs.forEach((tab) => {
    tab.setAttribute('data-status', 'closed');
  });
  selectedTab.setAttribute('data-status', 'open');
}

function renderContent(selectedTab) {
  container.textContent = '';
  const tabValue = selectedTab.getAttribute('data-value');
  switch(tabValue) {
    case 'home':
      (0,_home_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])(container);
      break;
    case 'menu':
      (0,_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container);
      break;
    case 'contact':
      (0,_contact_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])(container);
  }; 
}

const homeTab = document.querySelector('button[data-value="home"]');
renderOpenTab(homeTab);
renderContent(homeTab);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFP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Ozs7Ozs7OztVQ3BHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDQTtBQUNTO0FBQzNCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU0seURBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU0sK0RBQWE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3NhbHNhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvYXNzaXN0YW50LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbHNhJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50JztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnQnLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDFmcik7XG59XG5pbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5oMSxcbmgyLFxuaDMge1xuICBmb250LWZhbWlseTogJ1NhbHNhJztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4vKiBIRUFERVIgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDE5MCwgMTA1KTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuXG4gID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxufVxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm5hdiA+IGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDIwNywgOTcpO1xuICB3aWR0aDogODBweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYnV0dG9uW2RhdGEtc3RhdHVzPSdjbG9zZWQnXSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IHJnYig5NSwgMTIzLCA3NSk7XG4gIHRyYW5zbGF0ZTogMCAtM3B4O1xuICBib3JkZXItY29sb3I6IHJnYig5NSwgMTIzLCA3NSk7XG59XG5idXR0b25bZGF0YS1zdGF0dXM9J29wZW4nXSB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDEwOSwgMTYwLCA3Mik7XG59XG5cbi8qIEhPTUUgUEFHRSAqL1xuLndlbGNvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNDUsIDIzOCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcblxuICA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5idWJibGUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgPiBkaXYge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQ1LCAyMzgpO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMzBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgID4gaDIge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICB9XG59XG4ucGhvdG9zLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi8qIE1FTlUgUEFHRSovXG4ubWVudS1kaXYsXG4uaXRlbXMtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDIwcHg7XG5cbiAgPiBkaXYge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5tZW51LWRpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWVudS1kaXYgaW1nIHtcbiAgd2lkdGg6IDEyNXB4O1xufVxuLmJvcmRlci1kaXYge1xuICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI0NSwgMjM4KTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG4uZGlzaC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDEwcHg7XG5cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgfVxufVxuXG4vKiBDT05UQUNUIFBBR0UqL1xuLmNvbnRhY3QtZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgPiBkaXYge1xuICAgIGZsZXg6IDFcbiAgfVxufVxuXG4vKiBGT09URVIgKi9cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gID4gcCB7XG4gICAgZmxleDogMTtcbiAgICBjb2xvcjpyZ2IoMTY1LCAxMjUsIDgyKTtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsK0RBQW9EO0FBQ3REO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7O0VBR0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7O0VBRVQ7SUFDRSxPQUFPO0VBQ1Q7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTOztFQUVUO0lBQ0UsT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1Qjs7RUFFdkI7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTs7SUFFWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCx1Q0FBdUM7SUFDdkMsbUJBQW1COztJQUVuQjtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUEsYUFBYTtBQUNiOztFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQ7SUFDRSxPQUFPO0VBQ1Q7QUFDRjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9DQUFvQzs7RUFFcEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7O0VBRVQ7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7RUFDVjtBQUNGOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGVBQWU7O0VBRWY7SUFDRTtFQUNGO0FBQ0Y7O0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7O0VBRW5CO0lBQ0UsT0FBTztJQUNQLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NhbHNhJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL3NhbHNhLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0Fzc2lzdGFudCc7XFxuICBzcmM6IHVybCgnLi9mb250cy9hc3Npc3RhbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnQnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMWZyKTtcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6ICdTYWxzYSc7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxOTAsIDEwNSk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgPiAqIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG59XFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm5hdiA+IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjA3LCA5Nyk7XFxuICB3aWR0aDogODBweDtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5idXR0b25bZGF0YS1zdGF0dXM9J2Nsb3NlZCddIHtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IHJnYig5NSwgMTIzLCA3NSk7XFxuICB0cmFuc2xhdGU6IDAgLTNweDtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDk1LCAxMjMsIDc1KTtcXG59XFxuYnV0dG9uW2RhdGEtc3RhdHVzPSdvcGVuJ10ge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTA5LCAxNjAsIDcyKTtcXG59XFxuXFxuLyogSE9NRSBQQUdFICovXFxuLndlbGNvbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQ1LCAyMzgpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICB9XFxuICA+IGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbi5idWJibGUtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgXFxuICA+IGRpdiB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQ1LCAyMzgpO1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgID4gaDIge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuICB9XFxufVxcbi5waG90b3MtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBNRU5VIFBBR0UqL1xcbi5tZW51LWRpdixcXG4uaXRlbXMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgPiBkaXYge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbn1cXG4ubWVudS1kaXYge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLm1lbnUtZGl2IGltZyB7XFxuICB3aWR0aDogMTI1cHg7XFxufVxcbi5ib3JkZXItZGl2IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQ1LCAyMzgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZGlzaC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuXFxuICA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgfVxcbn1cXG5cXG4vKiBDT05UQUNUIFBBR0UqL1xcbi5jb250YWN0LWRpdiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gID4gZGl2IHtcXG4gICAgZmxleDogMVxcbiAgfVxcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG5cXG4gID4gcCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGNvbG9yOnJnYigxNjUsIDEyNSwgODIpO1xcbiAgfVxcblxcbiAgYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQmFrZXIgZnJvbSAnLi9iYWtlci5wbmcnO1xuaW1wb3J0IENoZWYgZnJvbSAnLi9jaGVmLnBuZyc7XG5pbXBvcnQgV2FpdGVyIGZyb20gJy4vd2FpdGVyLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgY2xhc3MgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aXRsZSwgaW1nKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVmID0gbmV3IFBlcnNvbihcbiAgICAnUGF3cyBDdWxpbmFpcmUnLCBcbiAgICAnSGVhZCBDaGVmJywgXG4gICAgQ2hlZlxuICApO1xuICBjb25zdCBiYWtlciA9IG5ldyBQZXJzb24oXG4gICAgJ1doaXNrZXIgS25lYWRzJywgXG4gICAgJ0hlYWQgQmFrZXInLCBcbiAgICBCYWtlclxuICApO1xuICBjb25zdCB3YWl0ZXIgPSBuZXcgUGVyc29uKFxuICAgICdNZW93c3RlciBUYWlsaW5ndG9uJywgXG4gICAgJ1dhaXRlcicsIFxuICAgIFdhaXRlclxuICApO1xuICBjb25zdCBlbXBsb3llZXMgPSBbY2hlZiwgYmFrZXIsIHdhaXRlcl07XG5cbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGl2Jyk7XG5cbiAgZW1wbG95ZWVzLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgIGNvbnN0IGJvcmRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvcmRlckRpdi5jbGFzc0xpc3QuYWRkKCdib3JkZXItZGl2Jyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBwZXJzb24ubmFtZTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHBlcnNvbi50aXRsZTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBwZXJzb24uaW1nO1xuXG4gICAgY29uc3QgYXJyID0gW2gxLCBoMywgaW1nXTtcbiAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgYm9yZGVyRGl2LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChib3JkZXJEaXYpO1xuICB9KVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcbn0iLCJpbXBvcnQgSWNvbiBmcm9tICcuL2ljb24ucG5nJztcbmltcG9ydCBIZWFydHMgZnJvbSAnLi9oZWFydHMucG5nJztcbmltcG9ydCBGcmllbmRzIGZyb20gJy4vZnJpZW5kcy5wbmcnO1xuaW1wb3J0IFNsZWVweSBmcm9tICcuL3NsZWVweS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIC8vIHdlbGNvbWUgc2VjdGlvblxuICBjb25zdCB3ZWxjb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHdlbGNvbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHdlbGNvbWVEaXYuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICBpbWcuc3JjID0gSWNvbjtcbiAgaDEudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBLaXR0eSBDYWZlISc7XG4gIHdlbGNvbWVQYXJhLnRleHRDb250ZW50PSBcIlRoZSB1bHRpbWF0ZSBkZXN0aW5hdGlvbiBmb3IgY2F0IGxvdmVycyBhbmQgZm9vZCBlbnRodXNpYXN0cy4gT3VyIEtpdHR5IENhZmUgb2ZmZXJzIGEgcHVyci1mZWN0IGhhdmVuIGZvciByZWxheGF0aW9uIGFuZCBmZWxpbmUgY29tcGFuaW9uc2hpcC5cIjtcblxuICBpbWdEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgW2gxLCB3ZWxjb21lUGFyYV0uZm9yRWFjaCgoZWxlbWVudCkgPT4gdGV4dERpdi5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG4gIFtpbWdEaXYsIHRleHREaXZdLmZvckVhY2goKGVsZW1lbnQpID0+IHdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG5cbiAgLy8gZGV0YWlscyBzZWN0aW9uXG4gIGNvbnN0IGJ1YmJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBib3JkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnViYmxlRGl2LmNsYXNzTGlzdC5hZGQoJ2J1YmJsZS1zZWN0aW9uJyk7XG5cbiAgY29uc3QgZGV0YWlscyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ09wZW4gSG91cnMnLFxuICAgICAgdGV4dDogW1xuICAgICAgICBcIk1vbiAtIEZyaTogMTBhbSAtIDZwbVwiLFxuICAgICAgICBcIlNhdC0gU3VuOiAxMGFtIC0gOHBtXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTG9jYXRpb24nLFxuICAgICAgdGV4dDogW1xuICAgICAgICBcIjExMSBTdW5zaGluZSBMYW5lXCIsXG4gICAgICAgIFwiTmV2ZXJsYW5kLCBDQVwiXG4gICAgICBdXG4gICAgfVxuICBdO1xuICBkZXRhaWxzLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSBzZWN0aW9uLnRpdGxlO1xuXG4gICAgY29uc3QgbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHRBcnIgPSBzZWN0aW9uLnRleHQ7XG4gICAgdGV4dEFyci5mb3JFYWNoKChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhLnRleHRDb250ZW50ID0gc3RyaW5nO1xuICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICB9KTtcblxuICAgIFtoMiwgbGlzdERpdl0uZm9yRWFjaCgoZWxlbWVudCkgPT4gYm9yZGVyRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbiAgfSk7XG4gIGJ1YmJsZURpdi5hcHBlbmRDaGlsZChib3JkZXJEaXYpO1xuXG5cbiAgLy8gcGhvdG9zIHNlY3Rpb25cbiAgY29uc3QgcGhvdG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBob3Rvc0Rpdi5jbGFzc0xpc3QuYWRkKCdwaG90b3MtZGl2Jyk7XG5cbiAgY29uc3QgcGhvdG9zID0gW0hlYXJ0cywgRnJpZW5kcywgU2xlZXB5XTtcbiAgcGhvdG9zLmZvckVhY2goKHBob3RvKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHBob3RvO1xuICAgIHBob3Rvc0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuICB9KTtcblxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1YmJsZURpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG90b3NEaXYpO1xufTsiLCJpbXBvcnQgUmFtZW4gZnJvbSAnLi9yYW1lbi5wbmcnO1xuaW1wb3J0IFNhbmR3aWNoIGZyb20gJy4vc2FuZHdpY2gucG5nJztcbmltcG9ydCBDYWtlIGZyb20gJy4vY2FrZS5wbmcnO1xuaW1wb3J0IEljZUNyZWFtcyBmcm9tICcuL2ljZS1jcmVhbXMucG5nJztcbmltcG9ydCBIb3RDaG9jb2xhdGUgZnJvbSAnLi9ob3QtY2hvY29sYXRlLnBuZyc7XG5pbXBvcnQgTWlsa3NoYWtlIGZyb20gJy4vbWlsa3NoYWtlLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgY29uc3QgZGV0YWlscyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ01haW5zJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnUmFtZW4nLFxuICAgICAgICAgIGltZzogUmFtZW4sXG4gICAgICAgICAgZGVzY3JpcDogJ0hhbmQtcHVsbGVkIG5vb2RsZXMsIHByZW1pdW0gbWVhdHMsIGFuZCBmcmVzaCB2ZWdnaWVzIGluIGEgZmxhdm9yZnVsIGJyb3RoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1NhbmR3aWNoJyxcbiAgICAgICAgICBpbWc6IFNhbmR3aWNoLFxuICAgICAgICAgIGRlc2NyaXA6ICdBcnRpc2FuYWwgYnJlYWQgZmlsbGVkIHdpdGggaGlnaC1xdWFsaXR5IG1lYXRzLCB2ZWdnaWVzLCBhbmQgZ291cm1ldCBzcHJlYWRzJ1xuICAgICAgICB9XG4gICAgICBdLCBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRGVzc2VydHMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdDYWtlJyxcbiAgICAgICAgICBpbWc6IENha2UsXG4gICAgICAgICAgZGVzY3JpcDogJ1ZhbmlsbGEgY2FrZSBmaWxsZWQgd2l0aCBib3N0b24gY3JlYW0gdG9wcGVkIHdpdGggYSBjaG9jb2xhdGUgZ2xhemUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnSWNlIENyZWFtJyxcbiAgICAgICAgICBpbWc6IEljZUNyZWFtcyxcbiAgICAgICAgICBkZXNjcmlwOiAnIExvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cyB0byBjcmVhdGUgb3VyIGNsYXNzaWMgdmFuaWxsYSwgc3RyYXdiZXJyeSwgYW5kIGNob2NvbGF0ZSBmbGF2b3JzJ1xuICAgICAgICB9XG4gICAgICBdLCBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRHJpbmtzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnSG90IENob2NvbGF0ZScsXG4gICAgICAgICAgaW1nOiBIb3RDaG9jb2xhdGUsXG4gICAgICAgICAgZGVzY3JpcDogJ1JpY2ggY29jb2Egd2l0aCBhIHN3aXJsIG9mIHdoaXBwZWQgY3JlYW0gdG9wcGVkIHdpdGggbWFyc2htZWxsb3dzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ01pbGtzaGFrZScsXG4gICAgICAgICAgaW1nOiBNaWxrc2hha2UsXG4gICAgICAgICAgZGVzY3JpcDogJ0Zhcm0tZnJlc2ggbWlsayBtaXhlZCB3aXRoIGljZSBjcmVhbSBhbmQgYSB2ZWx2ZXR5IGJsZW5kIG9mIGZyZXNoIHN0cmF3YmVycmllcydcbiAgICAgICAgfVxuICAgICAgXSwgXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWRpdicpO1xuXG4gIGRldGFpbHMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBib3JkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3JkZXJEaXYuY2xhc3NMaXN0LmFkZCgnYm9yZGVyLWRpdicpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gY2F0ZWdvcnkudGl0bGU7XG4gICAgYm9yZGVyRGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IGl0ZW1zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbXNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbXMtZGl2Jyk7XG4gICAgY2F0ZWdvcnkuaXRlbXMuZm9yRWFjaCgoZGlzaCkgPT4ge1xuICAgICAgaXRlbXNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEaXNoKGRpc2gpKTtcbiAgICAgIGJvcmRlckRpdi5hcHBlbmRDaGlsZChpdGVtc0Rpdik7XG4gICAgfSk7XG5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGJvcmRlckRpdik7XG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVEaXNoKGRpc2gpIHtcbiAgICBjb25zdCBkaXNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzaERpdi5jbGFzc0xpc3QuYWRkKCdkaXNoLWRpdicpO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IGRpc2guaW1nO1xuICAgIFxuICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBkaXNoLm5hbWU7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBkaXNoLmRlc2NyaXA7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChwYXJhKTtcblxuICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBkaXNoRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgcmV0dXJuIGRpc2hEaXY7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVySG9tZSBmcm9tICcuL2hvbWUvaG9tZS5qcyc7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tICcuL21lbnUvbWVudS5qcyc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG5cbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgPiBidXR0b24nKTtcbnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIHJlbmRlck9wZW5UYWIoZXZlbnQudGFyZ2V0KVxuICAgIHJlbmRlckNvbnRlbnQoZXZlbnQudGFyZ2V0KTtcbiAgfSk7XG59KVxuXG5mdW5jdGlvbiByZW5kZXJPcGVuVGFiKHNlbGVjdGVkVGFiKSB7XG4gIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnLCAnY2xvc2VkJyk7XG4gIH0pO1xuICBzZWxlY3RlZFRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgJ29wZW4nKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29udGVudChzZWxlY3RlZFRhYikge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgdGFiVmFsdWUgPSBzZWxlY3RlZFRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcbiAgc3dpdGNoKHRhYlZhbHVlKSB7XG4gICAgY2FzZSAnaG9tZSc6XG4gICAgICByZW5kZXJIb21lKGNvbnRhaW5lcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtZW51JzpcbiAgICAgIHJlbmRlck1lbnUoY29udGFpbmVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgcmVuZGVyQ29udGFjdChjb250YWluZXIpO1xuICB9OyBcbn1cblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLXZhbHVlPVwiaG9tZVwiXScpO1xucmVuZGVyT3BlblRhYihob21lVGFiKTtcbnJlbmRlckNvbnRlbnQoaG9tZVRhYik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9