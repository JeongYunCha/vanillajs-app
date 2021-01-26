/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  padding: 0;\n  margin: 0;\n  background-color: rgb(100, 100, 100);\n}\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\na {\n  color: black;\n  text-decoration: none;\n}\nheader {\n  padding: 5px;\n  color: white;\n  font-size: 0.8em;\n}\nheader .btn {\n  width: 50px;\n  justify-content: center;\n  border: 1px solid #000;\n  background-color: white;\n  color: #000;\n}\n\n#app {\n  width: 100vw;\n  height: 100vh;\n  margin: auto;\n}\n\n.flex-container,\n.flex-item {\n  display: flex;\n}\n.flex-item {\n  flex-grow: 0;\n}\n.flex-item select {\n  margin: 0 5px;\n  padding: 2px;\n  width: 50px;\n}\n.flex-item.grow {\n  flex-grow: 1;\n  align-items: center;\n  justify-content: center;\n}\n\nmain > .flex-container {\n  margin: 5px 0;\n}\nmain > .flex-container.alarm,\n.list-wrapper li {\n  padding: 5px 10px;\n  background-color: white;\n}\n.list-wrapper li {\n  border-bottom: 1px solid rgb(100, 100, 100);\n}\n.list-wrapper li span {\n  justify-content: left !important;\n}\n\n.home li {\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  border-radius: 10px;\n  margin: 15px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n#memo {\n  width: 100%;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  border: 2px solid white;\n}\n#memo:focus {\n  outline: none;\n  border: 2px solid rgba(81, 203, 238, 1);\n}\n.list-wrapper li.memo-list {\n  display: -webkit-box;\n  white-space: normal;\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n}\n.list-wrapper li.memo-list.accordion {\n  max-height: 2em;\n  -webkit-line-clamp: 2;\n}\n", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,oCAAoC;AACtC;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;AACA;EACE,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;AACA;;EAEE,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uCAAuC;AACzC;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,uBAAuB;EACvB,4BAA4B;AAC9B;AACA;EACE,eAAe;EACf,qBAAqB;AACvB","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  background-color: rgb(100, 100, 100);\n}\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\na {\n  color: black;\n  text-decoration: none;\n}\nheader {\n  padding: 5px;\n  color: white;\n  font-size: 0.8em;\n}\nheader .btn {\n  width: 50px;\n  justify-content: center;\n  border: 1px solid #000;\n  background-color: white;\n  color: #000;\n}\n\n#app {\n  width: 100vw;\n  height: 100vh;\n  margin: auto;\n}\n\n.flex-container,\n.flex-item {\n  display: flex;\n}\n.flex-item {\n  flex-grow: 0;\n}\n.flex-item select {\n  margin: 0 5px;\n  padding: 2px;\n  width: 50px;\n}\n.flex-item.grow {\n  flex-grow: 1;\n  align-items: center;\n  justify-content: center;\n}\n\nmain > .flex-container {\n  margin: 5px 0;\n}\nmain > .flex-container.alarm,\n.list-wrapper li {\n  padding: 5px 10px;\n  background-color: white;\n}\n.list-wrapper li {\n  border-bottom: 1px solid rgb(100, 100, 100);\n}\n.list-wrapper li span {\n  justify-content: left !important;\n}\n\n.home li {\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  border-radius: 10px;\n  margin: 15px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n#memo {\n  width: 100%;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  border: 2px solid white;\n}\n#memo:focus {\n  outline: none;\n  border: 2px solid rgba(81, 203, 238, 1);\n}\n.list-wrapper li.memo-list {\n  display: -webkit-box;\n  white-space: normal;\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n}\n.list-wrapper li.memo-list.accordion {\n  max-height: 2em;\n  -webkit-line-clamp: 2;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.createApp = void 0;
var AlarmPage_1 = __importDefault(__webpack_require__(/*! ./pages/AlarmPage */ "./src/pages/AlarmPage.ts"));
var HomePage_1 = __importDefault(__webpack_require__(/*! ./pages/HomePage */ "./src/pages/HomePage.ts"));
var MemoPage_1 = __importDefault(__webpack_require__(/*! ./pages/MemoPage */ "./src/pages/MemoPage.ts"));
var Page_1 = __webpack_require__(/*! ./pages/Page */ "./src/pages/Page.ts");
var PhotoPage_1 = __importDefault(__webpack_require__(/*! ./pages/PhotoPage */ "./src/pages/PhotoPage.ts"));
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
function createApp(cstr, $app) {
    return new cstr($app);
}
exports.createApp = createApp;
var App = /** @class */ (function () {
    function App($app) {
        var _this = this;
        this.render = function () { return __awaiter(_this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                // 페이지 초기화
                this.rootEl.innerHTML = "";
                path = location.hash.replace("#", "");
                switch (path) {
                    case "alarm":
                        Page_1.createPage(AlarmPage_1.default, this.rootEl);
                        break;
                    case "memo":
                        Page_1.createPage(MemoPage_1.default, this.rootEl);
                        break;
                    case "photo":
                        Page_1.createPage(PhotoPage_1.default, this.rootEl);
                        break;
                    default:
                        Page_1.createPage(HomePage_1.default, this.rootEl);
                }
                return [2 /*return*/];
            });
        }); };
        this.rootEl = $app;
        this.alarms = new Map(JSON.parse(localStorage.getItem("alarms")) || []);
        setInterval(function () {
            // Header: 날짜와 시간이 표시
            document.querySelector("#clock").innerHTML = util_1.getDateTime();
            // Alarm: 시간이 되면 alert 창으로 알람시간을 띄어주고 확인 클릭시 삭제
            var current = new Date().toTimeString().slice(0, 6) + "00";
            var message = _this.alarms.get(current) + " \n \uC54C\uB78C\uC744 \uC885\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?";
            if (_this.alarms.has(current)) {
                if (confirm(message)) {
                    _this.alarms.delete(current);
                    localStorage.setItem("alarms", JSON.stringify(__spread(_this.alarms)));
                    _this.render();
                }
            }
        }, 1000);
        // hashchange 이벤트로 uri의 hash가 변경하면 발생 감지하여 페이지 라우팅
        window.addEventListener("hashchange", this.render);
        // DOMContentLoaded은 HTML과 script가 로드된 시점에 발생하는 이벤트로 load 이벤트보다 먼저 발생
        window.addEventListener("DOMContentLoaded", this.render);
        this.render();
    }
    return App;
}());
exports.App = App;


/***/ }),

/***/ "./src/components/Component.ts":
/*!*************************************!*\
  !*** ./src/components/Component.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = exports.Component = void 0;
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setState = function (nextState) {
        this.state = nextState;
        this.render();
    };
    return Component;
}());
exports.Component = Component;
function createComponent(cstr, args) {
    return new cstr(__assign({}, args));
}
exports.createComponent = createComponent;


/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(_a) {
        var $target = _a.$target, goBack = _a.goBack, addNew = _a.addNew;
        var _this = _super.call(this) || this;
        _this.state = {};
        _this.goBack = goBack;
        _this.addNew = addNew;
        _this.children = document.createElement("ul");
        _this.children.classList.add("flex-container");
        $target.appendChild(_this.children);
        $target.addEventListener("click", function (e) {
            e.stopPropagation();
            if (e.target["innerHTML"] === "NEW")
                _this.addNew();
            if (e.target["innerHTML"] === "BACK")
                _this.goBack();
        });
        _this.render();
        return _this;
    }
    Header.prototype.render = function () {
        this.children.innerHTML = "\n      " + (this.goBack
            ? "<li class='flex-item btn'><a href='/'>BACK</a></li>"
            : "<li class='flex-item btn hidden'></li>") + "\n      <li id=\"clock\" class='flex-item grow'>" + util_1.getDateTime() + "</li>\n      " + (this.addNew
            ? "<li class='flex-item btn'>NEW</li>"
            : "<li class='flex-item btn hidden'></li>") + "\n    ";
    };
    return Header;
}(Component_1.Component));
exports.default = Header;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __webpack_require__(/*! ./App */ "./src/App.ts");
__webpack_require__(/*! ./App.css */ "./src/App.css");
App_1.createApp(App_1.App, document.querySelector("#app"));


/***/ }),

/***/ "./src/pages/AlarmPage.ts":
/*!********************************!*\
  !*** ./src/pages/AlarmPage.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(/*! ../components/Component */ "./src/components/Component.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
var AlarmPage = /** @class */ (function (_super) {
    __extends(AlarmPage, _super);
    function AlarmPage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "alarms";
        _this.registerEl = document.createElement("div");
        _this.resultListEl = document.createElement("ul");
        _this.registerEl.classList.add("hidden", "flex-container", "alarm");
        _this.resultListEl.classList.add("list-wrapper");
        _this.mainEl.appendChild(_this.registerEl);
        _this.mainEl.appendChild(_this.resultListEl);
        _this.state = {
            alarms: JSON.parse(localStorage.getItem(_this.LOCAL_STORAGE)) || [],
        };
        _this.mainEl.addEventListener("click", function (e) {
            e.stopPropagation();
            if (e.target["innerText"] === "저장") {
                var type = document.getElementById("timeType");
                var time = document.getElementById("time");
                var minute = document.getElementById("minute");
                _this.setState({
                    alarms: __spread(_this.state.alarms, [
                        _this.parserAlarm(type.options[type.selectedIndex].value, time.options[time.selectedIndex].value, minute.options[minute.selectedIndex].value),
                    ]),
                }, function () {
                    return localStorage.setItem(_this.LOCAL_STORAGE, JSON.stringify(_this.state.alarms));
                });
                _this.registerEl.classList.add("hidden");
            }
            if (e.target["innerText"] === "삭제") {
                _this.setState({
                    alarms: _this.state.alarms.filter(function (item, idx) { return idx !== Number(e.target["id"]); }),
                }, function () {
                    return localStorage.setItem(_this.LOCAL_STORAGE, JSON.stringify(_this.state.alarms));
                });
            }
        });
        Component_1.createComponent(Header_1.default, {
            $target: _this.headerEl,
            goBack: function () { },
            addNew: function () {
                _this.registerEl.classList.remove("hidden");
            },
        });
        _this.render();
        return _this;
    }
    AlarmPage.prototype.render = function () {
        this.registerEl.innerHTML = "\n      <span class='flex-item grow'>\n        <select id=\"timeType\">\n          <option value=\"\uC624\uC804\">\uC624\uC804</option>\n          <option value=\"\uC624\uD6C4\">\uC624\uD6C4</option>\n        </select>\n        <select id=\"time\">\n          <option value=\"01\">01</option>\n          <option value=\"02\">02</option>\n          <option value=\"03\">03</option>\n          <option value=\"04\">04</option>\n          <option value=\"05\">05</option>\n          <option value=\"06\">06</option>\n          <option value=\"07\">07</option>\n          <option value=\"08\">08</option>\n          <option value=\"09\">09</option>\n          <option value=\"10\">10</option>\n          <option value=\"11\">11</option>\n          <option value=\"12\">12</option>\n        </select> \uC2DC\n        <select id=\"minute\">\n          <option value=\"00\">00</option>\n          <option value=\"10\">10</option>\n          <option value=\"20\">20</option>\n          <option value=\"30\">30</option>\n          <option value=\"40\">40</option>\n          <option value=\"50\">50</option>\n        </select> \uBD84\n      </span>\n      <button class='flex-item'>\uC800\uC7A5</button>\n    ";
        this.resultListEl.innerHTML = this.state.alarms
            .map(function (item, idx) {
            return "<li class='flex-container'>\n                  <span class='flex-item grow'>" + item[1] + "</span>\n                  <button id=" + idx + " class='flex-item'>\uC0AD\uC81C</button>\n                </li>";
        })
            .join("");
    };
    AlarmPage.prototype.parserAlarm = function (type, time, minute) {
        return [
            (type === "오전" ? time : Number(time) + 12) + ":" + minute + ":00",
            type + " " + time + "\uC2DC " + minute + "\uBD84",
        ];
    };
    return AlarmPage;
}(Page_1.Page));
exports.default = AlarmPage;


/***/ }),

/***/ "./src/pages/HomePage.ts":
/*!*******************************!*\
  !*** ./src/pages/HomePage.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(/*! ../components/Component */ "./src/components/Component.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "home";
        _this.appList = {
            alarm: "알람",
            memo: "메모",
            photo: "사진",
        };
        _this.state = {
            home: localStorage.getItem(_this.LOCAL_STORAGE) || [
                "alarm",
                "memo",
                "photo",
            ],
        };
        Component_1.createComponent(Header_1.default, {
            $target: _this.headerEl,
        });
        _this.render();
        return _this;
    }
    HomePage.prototype.render = function () {
        var _this = this;
        var children = this.state.home
            .map(function (item) {
            return "<li class='flex-item'><a href=\"#" + item + "\">" + _this.appList[item] + "</a></li>";
        })
            .join("");
        this.mainEl.innerHTML = "<ul class=\"flex-container home\">" + children + "</ul>";
    };
    return HomePage;
}(Page_1.Page));
exports.default = HomePage;


/***/ }),

/***/ "./src/pages/MemoPage.ts":
/*!*******************************!*\
  !*** ./src/pages/MemoPage.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(/*! ../components/Component */ "./src/components/Component.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
var MemoPage = /** @class */ (function (_super) {
    __extends(MemoPage, _super);
    function MemoPage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "memos";
        _this.registerEl = document.createElement("div");
        _this.resultListEl = document.createElement("ul");
        _this.registerEl.classList.add("hidden", "flex-container");
        _this.resultListEl.classList.add("list-wrapper");
        _this.mainEl.appendChild(_this.registerEl);
        _this.mainEl.appendChild(_this.resultListEl);
        _this.state = {
            memos: JSON.parse(localStorage.getItem(_this.LOCAL_STORAGE)) || [],
        };
        _this.registerEl.addEventListener("keyup", function (e) {
            if (e.key === "Enter") {
                var inputEl = document.getElementById("memo");
                _this.setState({ memos: __spread(_this.state.memos, [inputEl.value]) }, function () {
                    return localStorage.setItem(_this.LOCAL_STORAGE, JSON.stringify(_this.state.memos));
                });
                _this.registerEl.classList.add("hidden");
            }
        });
        _this.resultListEl.addEventListener("click", function (e) {
            e.stopPropagation();
            document.getElementById(e.target["id"]).classList.toggle("accordion");
        });
        Component_1.createComponent(Header_1.default, {
            $target: _this.headerEl,
            goBack: function () { },
            addNew: function () {
                _this.registerEl.classList.remove("hidden");
                document.getElementById("memo").focus();
            },
        });
        _this.render();
        return _this;
    }
    MemoPage.prototype.render = function () {
        this.registerEl.innerHTML = "\n      <input id=\"memo\" placeholder=\"\uBA54\uBAA8\uB97C \uC785\uB825\uD558\uC138\uC694\"/>\n    ";
        this.resultListEl.innerHTML = this.state.memos
            .map(function (item, idx) {
            return "<li id=\"" + idx + "\" class=\"memo-list accordion\">" + item + "</li>";
        })
            .join("");
    };
    return MemoPage;
}(Page_1.Page));
exports.default = MemoPage;


/***/ }),

/***/ "./src/pages/Page.ts":
/*!***************************!*\
  !*** ./src/pages/Page.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createPage = exports.Page = void 0;
var Page = /** @class */ (function () {
    function Page($app) {
        this.headerEl = document.createElement("header");
        this.mainEl = document.createElement("main");
        $app.appendChild(this.headerEl);
        $app.appendChild(this.mainEl);
    }
    Page.prototype.setState = function (nextState, callback) {
        this.state = nextState;
        this.render();
        if (callback)
            callback();
    };
    return Page;
}());
exports.Page = Page;
function createPage(cstr, $app) {
    return new cstr($app);
}
exports.createPage = createPage;


/***/ }),

/***/ "./src/pages/PhotoPage.ts":
/*!********************************!*\
  !*** ./src/pages/PhotoPage.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(/*! ../components/Component */ "./src/components/Component.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
// import img from "./assets/image.jpg";
// console.log(img);
var PhotoPage = /** @class */ (function (_super) {
    __extends(PhotoPage, _super);
    function PhotoPage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "photos";
        _this.imageListEl = document.createElement("ul");
        _this.imageViewEl = document.createElement("div");
        _this.state = {
            photos: [
                "01.jpg",
                "02.gif",
                "03.jpg",
                "04.gif",
                "05.webp",
                "06.gif",
                "07.gif",
                "08.jpg",
            ],
        };
        Component_1.createComponent(Header_1.default, {
            $target: _this.headerEl,
            goBack: function () { },
        });
        _this.render();
        return _this;
    }
    PhotoPage.prototype.render = function () {
        var children = this.state.photos
            .map(function (item) {
            return "<img src=\"../../assets/" + item + "\" alt=\"Girl in a jacket\" width=\"500\" height=\"600\">";
        })
            .join("");
        this.mainEl.innerHTML = "\n      <header></header>\n      <img src=\"{require('/src/assets/image.jpg')}\" />\n      <ul class=\"list-wrapper\">" + children + "</ul>\n    ";
    };
    return PhotoPage;
}(Page_1.Page));
exports.default = PhotoPage;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateTime = void 0;
function getDateTime() {
    var dateTime = new Date();
    var time = dateTime.toTimeString().split(" ")[0].split(":");
    return dateTime.getFullYear() + "\uB144 " + (dateTime.getMonth() + 1) + "\uC6D4 " + dateTime.getDate() + "\uC77C " + time[0] + "\uC2DC " + time[1] + "\uBD84 " + time[2] + "\uCD08";
}
exports.getDateTime = getDateTime;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3M/ZDljZCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGFybVBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NZW1vUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGhvdG9QYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LElBQUksSUFBSSxFQUFFLENBQUM7SUFDNUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFOUQsT0FBVSxRQUFRLENBQUMsV0FBVyxFQUFFLGdCQUM5QixRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxnQkFDcEIsUUFBUSxDQUFDLE9BQU8sRUFBRSxlQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFHLENBQUM7QUFDakUsQ0FBQztBQVBELGtDQU9DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcbmhlYWRlciAuYnRuIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuI2FwcCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIsXFxuLmZsZXgtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZmxleC1pdGVtIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxuLmZsZXgtaXRlbSBzZWxlY3Qge1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4uZmxleC1pdGVtLmdyb3cge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluID4gLmZsZXgtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcbm1haW4gPiAuZmxleC1jb250YWluZXIuYWxhcm0sXFxuLmxpc3Qtd3JhcHBlciBsaSB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubGlzdC13cmFwcGVyIGxpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcbi5saXN0LXdyYXBwZXIgbGkgc3BhbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvbWUgbGkge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDE1cHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jbWVtbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jbWVtbzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xcbn1cXG4ubGlzdC13cmFwcGVyIGxpLm1lbW8tbGlzdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG4ubGlzdC13cmFwcGVyIGxpLm1lbW8tbGlzdC5hY2NvcmRpb24ge1xcbiAgbWF4LWhlaWdodDogMmVtO1xcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbmEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuaGVhZGVyIC5idG4ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4jYXBwIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lcixcXG4uZmxleC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mbGV4LWl0ZW0ge1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4uZmxleC1pdGVtIHNlbGVjdCB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi5mbGV4LWl0ZW0uZ3JvdyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4gPiAuZmxleC1jb250YWluZXIge1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxubWFpbiA+IC5mbGV4LWNvbnRhaW5lci5hbGFybSxcXG4ubGlzdC13cmFwcGVyIGxpIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5saXN0LXdyYXBwZXIgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxuLmxpc3Qtd3JhcHBlciBsaSBzcGFuIHtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG9tZSBsaSB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNtZW1vIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiNtZW1vOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XFxufVxcbi5saXN0LXdyYXBwZXIgbGkubWVtby1saXN0IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxufVxcbi5saXN0LXdyYXBwZXIgbGkubWVtby1saXN0LmFjY29yZGlvbiB7XFxuICBtYXgtaGVpZ2h0OiAyZW07XFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgQWxhcm1QYWdlIGZyb20gXCIuL3BhZ2VzL0FsYXJtUGFnZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVQYWdlXCI7XG5pbXBvcnQgTWVtb1BhZ2UgZnJvbSBcIi4vcGFnZXMvTWVtb1BhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9QYWdlXCI7XG5pbXBvcnQgUGhvdG9QYWdlIGZyb20gXCIuL3BhZ2VzL1Bob3RvUGFnZVwiO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWUgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmludGVyZmFjZSBBcHBDb25zdHJ1Y3RvciB7XG4gIG5ldyAoJGFwcDogSFRNTERpdkVsZW1lbnQpOiBBcHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoY3N0cjogQXBwQ29uc3RydWN0b3IsICRhcHA6IEhUTUxEaXZFbGVtZW50KSB7XG4gIHJldHVybiBuZXcgY3N0cigkYXBwKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByb3RlY3RlZCByb290RWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcm90ZWN0ZWQgYWxhcm1zOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCRhcHA6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5yb290RWwgPSAkYXBwO1xuICAgIHRoaXMuYWxhcm1zID0gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxhcm1zXCIpKSB8fCBbXSk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBIZWFkZXI6IOuCoOynnOyZgCDsi5zqsITsnbQg7ZGc7IucXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpLmlubmVySFRNTCA9IGdldERhdGVUaW1lKCk7XG4gICAgICAvLyBBbGFybTog7Iuc6rCE7J20IOuQmOuptCBhbGVydCDssL3snLzroZwg7JWM656M7Iuc6rCE7J2EIOudhOyWtOyjvOqzoCDtmZXsnbgg7YG066at7IucIOyCreygnFxuICAgICAgY29uc3QgY3VycmVudCA9IGAke25ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkuc2xpY2UoMCwgNil9MDBgO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGAke3RoaXMuYWxhcm1zLmdldChjdXJyZW50KX0gXFxuIOyVjOuejOydhCDsooXro4ztlZjsi5zqsqDsirXri4jquYw/YDtcbiAgICAgIGlmICh0aGlzLmFsYXJtcy5oYXMoY3VycmVudCkpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICB0aGlzLmFsYXJtcy5kZWxldGUoY3VycmVudCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGFybXNcIiwgSlNPTi5zdHJpbmdpZnkoWy4uLnRoaXMuYWxhcm1zXSkpO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICAvLyBoYXNoY2hhbmdlIOydtOuypO2KuOuhnCB1cmnsnZggaGFzaOqwgCDrs4Dqsr3tlZjrqbQg67Cc7IOdIOqwkOyngO2VmOyXrCDtjpjsnbTsp4Ag65287Jqw7YyFXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHRoaXMucmVuZGVyKTtcbiAgICAvLyBET01Db250ZW50TG9hZGVk7J2AIEhUTUzqs7wgc2NyaXB06rCAIOuhnOuTnOuQnCDsi5zsoJDsl5Ag67Cc7IOd7ZWY64qUIOydtOuypO2KuOuhnCBsb2FkIOydtOuypO2KuOuztOuLpCDrqLzsoIAg67Cc7IOdXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMucmVuZGVyKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8g7Y6Y7J207KeAIOy0iOq4sO2ZlFxuICAgIHRoaXMucm9vdEVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy8g7Y6Y7J207KeAIOudvOyasO2MhVxuICAgIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIHN3aXRjaCAocGF0aCkge1xuICAgICAgY2FzZSBcImFsYXJtXCI6XG4gICAgICAgIGNyZWF0ZVBhZ2UoQWxhcm1QYWdlLCB0aGlzLnJvb3RFbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lbW9cIjpcbiAgICAgICAgY3JlYXRlUGFnZShNZW1vUGFnZSwgdGhpcy5yb290RWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwaG90b1wiOlxuICAgICAgICBjcmVhdGVQYWdlKFBob3RvUGFnZSwgdGhpcy5yb290RWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNyZWF0ZVBhZ2UoSG9tZVBhZ2UsIHRoaXMucm9vdEVsKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbnRlcmZhY2UgQ29tcG9uZW50Q29uc3RydWN0b3Ige1xuICBuZXcgKGFyZ3M/OiBhbnkpOiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgY2hpbGRyZW46IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgc3RhdGU6IGFueTtcblxuICBhYnN0cmFjdCByZW5kZXIoKTogdm9pZDtcblxuICBzZXRTdGF0ZShuZXh0U3RhdGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KGNzdHI6IENvbXBvbmVudENvbnN0cnVjdG9yLCBhcmdzOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBjc3RyKHsgLi4uYXJncyB9KTtcbn1cbiIsImltcG9ydCB7IGdldERhdGVUaW1lIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5pbnRlcmZhY2UgSUFyZ3Mge1xuICAkdGFyZ2V0OiBIVE1MRWxlbWVudDtcbiAgZ29CYWNrPzogRnVuY3Rpb247XG4gIGFkZE5ldz86IEZ1bmN0aW9uO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBnb0JhY2s6IEZ1bmN0aW9uO1xuICBwcml2YXRlIGFkZE5ldzogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoeyAkdGFyZ2V0LCBnb0JhY2ssIGFkZE5ldyB9OiBJQXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuZ29CYWNrID0gZ29CYWNrO1xuICAgIHRoaXMuYWRkTmV3ID0gYWRkTmV3O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGhpcy5jaGlsZHJlbi5jbGFzc0xpc3QuYWRkKFwiZmxleC1jb250YWluZXJcIik7XG4gICAgJHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuKTtcbiAgICAkdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChlLnRhcmdldFtcImlubmVySFRNTFwiXSA9PT0gXCJORVdcIikgdGhpcy5hZGROZXcoKTtcbiAgICAgIGlmIChlLnRhcmdldFtcImlubmVySFRNTFwiXSA9PT0gXCJCQUNLXCIpIHRoaXMuZ29CYWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2hpbGRyZW4uaW5uZXJIVE1MID0gYFxuICAgICAgJHtcbiAgICAgICAgdGhpcy5nb0JhY2tcbiAgICAgICAgICA/IGA8bGkgY2xhc3M9J2ZsZXgtaXRlbSBidG4nPjxhIGhyZWY9Jy8nPkJBQ0s8L2E+PC9saT5gXG4gICAgICAgICAgOiBgPGxpIGNsYXNzPSdmbGV4LWl0ZW0gYnRuIGhpZGRlbic+PC9saT5gXG4gICAgICB9XG4gICAgICA8bGkgaWQ9XCJjbG9ja1wiIGNsYXNzPSdmbGV4LWl0ZW0gZ3Jvdyc+JHtnZXREYXRlVGltZSgpfTwvbGk+XG4gICAgICAke1xuICAgICAgICB0aGlzLmFkZE5ld1xuICAgICAgICAgID8gYDxsaSBjbGFzcz0nZmxleC1pdGVtIGJ0bic+TkVXPC9saT5gXG4gICAgICAgICAgOiBgPGxpIGNsYXNzPSdmbGV4LWl0ZW0gYnRuIGhpZGRlbic+PC9saT5gXG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBwLCBjcmVhdGVBcHAgfSBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBcIi4vQXBwLmNzc1wiO1xuXG5jcmVhdGVBcHAoQXBwLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wb25lbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGFybVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBMT0NBTF9TVE9SQUdFID0gXCJhbGFybXNcIjtcbiAgcHJvdGVjdGVkIHJlZ2lzdGVyRWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcm90ZWN0ZWQgcmVzdWx0TGlzdEVsOiBIVE1MVUxpc3RFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCRhcHA6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgc3VwZXIoJGFwcCk7XG4gICAgdGhpcy5yZWdpc3RlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnJlc3VsdExpc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0aGlzLnJlZ2lzdGVyRWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiLCBcImZsZXgtY29udGFpbmVyXCIsIFwiYWxhcm1cIik7XG4gICAgdGhpcy5yZXN1bHRMaXN0RWwuY2xhc3NMaXN0LmFkZChcImxpc3Qtd3JhcHBlclwiKTtcbiAgICB0aGlzLm1haW5FbC5hcHBlbmRDaGlsZCh0aGlzLnJlZ2lzdGVyRWwpO1xuICAgIHRoaXMubWFpbkVsLmFwcGVuZENoaWxkKHRoaXMucmVzdWx0TGlzdEVsKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbGFybXM6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5MT0NBTF9TVE9SQUdFKSkgfHwgW10sXG4gICAgfTtcblxuICAgIHRoaXMubWFpbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKGUudGFyZ2V0W1wiaW5uZXJUZXh0XCJdID09PSBcIuyggOyepVwiKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVUeXBlXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICBjb25zdCBtaW51dGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnV0ZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhbGFybXM6IFtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5hbGFybXMsXG4gICAgICAgICAgICAgIHRoaXMucGFyc2VyQWxhcm0oXG4gICAgICAgICAgICAgICAgdHlwZS5vcHRpb25zW3R5cGUuc2VsZWN0ZWRJbmRleF0udmFsdWUsXG4gICAgICAgICAgICAgICAgdGltZS5vcHRpb25zW3RpbWUuc2VsZWN0ZWRJbmRleF0udmFsdWUsXG4gICAgICAgICAgICAgICAgbWludXRlLm9wdGlvbnNbbWludXRlLnNlbGVjdGVkSW5kZXhdLnZhbHVlXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICB0aGlzLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuYWxhcm1zKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0W1wiaW5uZXJUZXh0XCJdID09PSBcIuyCreygnFwiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgYWxhcm1zOiB0aGlzLnN0YXRlLmFsYXJtcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChpdGVtOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IE51bWJlcihlLnRhcmdldFtcImlkXCJdKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgdGhpcy5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmFsYXJtcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNyZWF0ZUNvbXBvbmVudChIZWFkZXIsIHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuaGVhZGVyRWwsXG4gICAgICBnb0JhY2s6ICgpID0+IHt9LFxuICAgICAgYWRkTmV3OiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlckVsLmlubmVySFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPSdmbGV4LWl0ZW0gZ3Jvdyc+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJ0aW1lVHlwZVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLsmKTsoIRcIj7smKTsoIQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7Jik7ZuEXCI+7Jik7ZuEPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8c2VsZWN0IGlkPVwidGltZVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwMVwiPjAxPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAyXCI+MDI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDNcIj4wMzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwNFwiPjA0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA1XCI+MDU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDZcIj4wNjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwN1wiPjA3PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA4XCI+MDg8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDlcIj4wOTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD4g7IucXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJtaW51dGVcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDBcIj4wMDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MFwiPjQwPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+IOu2hFxuICAgICAgPC9zcGFuPlxuICAgICAgPGJ1dHRvbiBjbGFzcz0nZmxleC1pdGVtJz7soIDsnqU8L2J1dHRvbj5cbiAgICBgO1xuICAgIHRoaXMucmVzdWx0TGlzdEVsLmlubmVySFRNTCA9IHRoaXMuc3RhdGUuYWxhcm1zXG4gICAgICAubWFwKChpdGVtOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBgPGxpIGNsYXNzPSdmbGV4LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmxleC1pdGVtIGdyb3cnPiR7aXRlbVsxXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSR7aWR4fSBjbGFzcz0nZmxleC1pdGVtJz7sgq3soJw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICBwYXJzZXJBbGFybSh0eXBlOiBzdHJpbmcsIHRpbWU6IHN0cmluZywgbWludXRlOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBbXG4gICAgICBgJHt0eXBlID09PSBcIuyYpOyghFwiID8gdGltZSA6IE51bWJlcih0aW1lKSArIDEyfToke21pbnV0ZX06MDBgLFxuICAgICAgYCR7dHlwZX0gJHt0aW1lfeyLnCAke21pbnV0ZX3rtoRgLFxuICAgIF07XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUGFnZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgTE9DQUxfU1RPUkFHRSA9IFwiaG9tZVwiO1xuICBwcml2YXRlIHJlYWRvbmx5IGFwcExpc3QgPSB7XG4gICAgYWxhcm06IFwi7JWM656MXCIsXG4gICAgbWVtbzogXCLrqZTrqqhcIixcbiAgICBwaG90bzogXCLsgqzsp4RcIixcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigkYXBwOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHN1cGVyKCRhcHApO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob21lOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkxPQ0FMX1NUT1JBR0UpIHx8IFtcbiAgICAgICAgXCJhbGFybVwiLFxuICAgICAgICBcIm1lbW9cIixcbiAgICAgICAgXCJwaG90b1wiLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY3JlYXRlQ29tcG9uZW50KEhlYWRlciwge1xuICAgICAgJHRhcmdldDogdGhpcy5oZWFkZXJFbCxcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmhvbWVcbiAgICAgIC5tYXAoKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gYDxsaSBjbGFzcz0nZmxleC1pdGVtJz48YSBocmVmPVwiIyR7aXRlbX1cIj4ke3RoaXMuYXBwTGlzdFtpdGVtXX08L2E+PC9saT5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuXG4gICAgdGhpcy5tYWluRWwuaW5uZXJIVE1MID0gYDx1bCBjbGFzcz1cImZsZXgtY29udGFpbmVyIGhvbWVcIj4ke2NoaWxkcmVufTwvdWw+YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcG9uZW50XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb1BhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBMT0NBTF9TVE9SQUdFID0gXCJtZW1vc1wiO1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXJFbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByb3RlY3RlZCByZXN1bHRMaXN0RWw6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoJGFwcDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBzdXBlcigkYXBwKTtcbiAgICB0aGlzLnJlZ2lzdGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucmVzdWx0TGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRoaXMucmVnaXN0ZXJFbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIsIFwiZmxleC1jb250YWluZXJcIik7XG4gICAgdGhpcy5yZXN1bHRMaXN0RWwuY2xhc3NMaXN0LmFkZChcImxpc3Qtd3JhcHBlclwiKTtcbiAgICB0aGlzLm1haW5FbC5hcHBlbmRDaGlsZCh0aGlzLnJlZ2lzdGVyRWwpO1xuICAgIHRoaXMubWFpbkVsLmFwcGVuZENoaWxkKHRoaXMucmVzdWx0TGlzdEVsKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW1vczogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkxPQ0FMX1NUT1JBR0UpKSB8fCBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5yZWdpc3RlckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgY29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb1wiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbW9zOiBbLi4udGhpcy5zdGF0ZS5tZW1vcywgaW5wdXRFbC52YWx1ZV0gfSwgKCkgPT5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWVtb3MpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVzdWx0TGlzdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0W1wiaWRcIl0pLmNsYXNzTGlzdC50b2dnbGUoXCJhY2NvcmRpb25cIik7XG4gICAgfSk7XG5cbiAgICBjcmVhdGVDb21wb25lbnQoSGVhZGVyLCB7XG4gICAgICAkdGFyZ2V0OiB0aGlzLmhlYWRlckVsLFxuICAgICAgZ29CYWNrOiAoKSA9PiB7fSxcbiAgICAgIGFkZE5ldzogKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vXCIpLmZvY3VzKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyRWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGlucHV0IGlkPVwibWVtb1wiIHBsYWNlaG9sZGVyPVwi66mU66qo66W8IOyeheugpe2VmOyEuOyalFwiLz5cbiAgICBgO1xuICAgIHRoaXMucmVzdWx0TGlzdEVsLmlubmVySFRNTCA9IHRoaXMuc3RhdGUubWVtb3NcbiAgICAgIC5tYXAoKGl0ZW06IHN0cmluZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGkgaWQ9XCIke2lkeH1cIiBjbGFzcz1cIm1lbW8tbGlzdCBhY2NvcmRpb25cIj4ke2l0ZW19PC9saT5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgUGFnZUNvbnN0cnVjdG9yIHtcbiAgbmV3ICgkYXBwOiBIVE1MRGl2RWxlbWVudCk6IFBhZ2U7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlIHtcbiAgcHJvdGVjdGVkIGhlYWRlckVsOiBIVE1MSGVhZEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBtYWluRWw6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgc3RhdGU6IGFueTtcblxuICBjb25zdHJ1Y3RvcigkYXBwOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuaGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIHRoaXMubWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgJGFwcC5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlckVsKTtcbiAgICAkYXBwLmFwcGVuZENoaWxkKHRoaXMubWFpbkVsKTtcbiAgfVxuXG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xuXG4gIHNldFN0YXRlKG5leHRTdGF0ZTogYW55LCBjYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZShjc3RyOiBQYWdlQ29uc3RydWN0b3IsICRhcHA6IEhUTUxEaXZFbGVtZW50KSB7XG4gIHJldHVybiBuZXcgY3N0cigkYXBwKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG4vLyBpbXBvcnQgaW1nIGZyb20gXCIuL2Fzc2V0cy9pbWFnZS5qcGdcIjtcbi8vIGNvbnNvbGUubG9nKGltZyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaG90b1BhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBMT0NBTF9TVE9SQUdFID0gXCJwaG90b3NcIjtcbiAgcHJvdGVjdGVkIGltYWdlTGlzdEVsOiBIVE1MVUxpc3RFbGVtZW50O1xuICBwcm90ZWN0ZWQgaW1hZ2VWaWV3RWw6IEhUTUxEaXZFbGVtZW50O1xuICBjb25zdHJ1Y3RvcigkYXBwOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHN1cGVyKCRhcHApO1xuICAgIHRoaXMuaW1hZ2VMaXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGhpcy5pbWFnZVZpZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBob3RvczogW1xuICAgICAgICBcIjAxLmpwZ1wiLFxuICAgICAgICBcIjAyLmdpZlwiLFxuICAgICAgICBcIjAzLmpwZ1wiLFxuICAgICAgICBcIjA0LmdpZlwiLFxuICAgICAgICBcIjA1LndlYnBcIixcbiAgICAgICAgXCIwNi5naWZcIixcbiAgICAgICAgXCIwNy5naWZcIixcbiAgICAgICAgXCIwOC5qcGdcIixcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNyZWF0ZUNvbXBvbmVudChIZWFkZXIsIHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuaGVhZGVyRWwsXG4gICAgICBnb0JhY2s6ICgpID0+IHt9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuc3RhdGUucGhvdG9zXG4gICAgICAubWFwKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy8ke2l0ZW19XCIgYWx0PVwiR2lybCBpbiBhIGphY2tldFwiIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNjAwXCI+YDtcbiAgICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcblxuICAgIHRoaXMubWFpbkVsLmlubmVySFRNTCA9IGBcbiAgICAgIDxoZWFkZXI+PC9oZWFkZXI+XG4gICAgICA8aW1nIHNyYz1cIntyZXF1aXJlKCcvc3JjL2Fzc2V0cy9pbWFnZS5qcGcnKX1cIiAvPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC13cmFwcGVyXCI+JHtjaGlsZHJlbn08L3VsPlxuICAgIGA7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREYXRlVGltZSgpOiBzdHJpbmcge1xuICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRpbWUgPSBkYXRlVGltZS50b1RpbWVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCI6XCIpO1xuXG4gIHJldHVybiBgJHtkYXRlVGltZS5nZXRGdWxsWWVhcigpfeuFhCAke1xuICAgIGRhdGVUaW1lLmdldE1vbnRoKCkgKyAxXG4gIH3sm5QgJHtkYXRlVGltZS5nZXREYXRlKCl97J28ICR7dGltZVswXX3si5wgJHt0aW1lWzFdfeu2hCAke3RpbWVbMl197LSIYDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=