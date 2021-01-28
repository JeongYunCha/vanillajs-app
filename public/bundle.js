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
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n\n  /* background: url(\"./assets/01.jpg\") no-repeat; */\n}\n#app {\n  /* max-width: 1200px; */\n  height: 100vh;\n  margin: auto;\n  overflow: hidden;\n  background-color: rgb(100, 100, 100);\n}\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\na {\n  color: black;\n  text-decoration: none;\n}\nheader {\n  padding: 5px;\n  color: white;\n  font-size: 0.8em;\n}\nheader .btn {\n  width: 50px;\n  justify-content: center;\n  border: 1px solid #000;\n  background-color: white;\n  color: #000;\n}\n\n.flex-container,\n.flex-item {\n  display: flex;\n}\n.flex-item {\n  flex-grow: 0;\n}\n.flex-item select {\n  margin: 0 5px;\n  padding: 2px;\n  width: 50px;\n}\n.flex-item.grow {\n  flex-grow: 1;\n  align-items: center;\n  justify-content: center;\n}\n\nmain > .flex-container {\n  margin: 5px 0;\n}\nmain > .flex-container.alarm,\n.list-wrapper li {\n  padding: 5px 10px;\n  background-color: white;\n}\n.list-wrapper li {\n  border-bottom: 1px solid rgb(100, 100, 100);\n}\n.list-wrapper li span {\n  justify-content: left !important;\n}\n\n.home li {\n  width: 50px;\n  height: 50px;\n  margin: 15px;\n  border-radius: 10px;\n  border: 1px solid white;\n}\n.home li a {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  line-height: 3.2em;\n  text-align: center;\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 8px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n#memo-input {\n  width: 100%;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  border: 2px solid white;\n}\n#memo-input:focus {\n  outline: none;\n  border: 2px solid rgba(81, 203, 238, 1);\n}\n.list-wrapper li.memo-list {\n  display: -webkit-box;\n  white-space: normal;\n  word-break: break-all;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n}\n.list-wrapper li.memo-list.accordion {\n  max-height: 2em;\n  -webkit-line-clamp: 2;\n}\n\n.photo-list {\n  white-space: nowrap;\n  overflow-x: auto;\n  text-align: center;\n  padding: 15px 0;\n}\n\n.thumbnail-wrapper {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: inline-block;\n  overflow: hidden;\n  margin: 0 10px;\n  box-sizing: border-box;\n}\n.thumbnail-wrapper.selected {\n  border: 2px solid rgb(255, 153, 0);\n}\n\n.thumbnail-img {\n  height: 50px;\n}\n\n.photo-view {\n  background-color: black;\n  width: 100vw;\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\nimg.portrait {\n  width: 100%;\n}\n\nimg.landscape {\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;;EAEE,UAAU;EACV,SAAS;EACT,aAAa;EACb,YAAY;;EAEZ,kDAAkD;AACpD;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;AACtC;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;AACA;EACE,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;;EAEE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;AACA;;EAEE,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uCAAuC;AACzC;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,uBAAuB;EACvB,4BAA4B;AAC9B;AACA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;EACd,sBAAsB;AACxB;AACA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd","sourcesContent":["html,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n\n  /* background: url(\"./assets/01.jpg\") no-repeat; */\n}\n#app {\n  /* max-width: 1200px; */\n  height: 100vh;\n  margin: auto;\n  overflow: hidden;\n  background-color: rgb(100, 100, 100);\n}\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\na {\n  color: black;\n  text-decoration: none;\n}\nheader {\n  padding: 5px;\n  color: white;\n  font-size: 0.8em;\n}\nheader .btn {\n  width: 50px;\n  justify-content: center;\n  border: 1px solid #000;\n  background-color: white;\n  color: #000;\n}\n\n.flex-container,\n.flex-item {\n  display: flex;\n}\n.flex-item {\n  flex-grow: 0;\n}\n.flex-item select {\n  margin: 0 5px;\n  padding: 2px;\n  width: 50px;\n}\n.flex-item.grow {\n  flex-grow: 1;\n  align-items: center;\n  justify-content: center;\n}\n\nmain > .flex-container {\n  margin: 5px 0;\n}\nmain > .flex-container.alarm,\n.list-wrapper li {\n  padding: 5px 10px;\n  background-color: white;\n}\n.list-wrapper li {\n  border-bottom: 1px solid rgb(100, 100, 100);\n}\n.list-wrapper li span {\n  justify-content: left !important;\n}\n\n.home li {\n  width: 50px;\n  height: 50px;\n  margin: 15px;\n  border-radius: 10px;\n  border: 1px solid white;\n}\n.home li a {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  line-height: 3.2em;\n  text-align: center;\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 8px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n#memo-input {\n  width: 100%;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  border: 2px solid white;\n}\n#memo-input:focus {\n  outline: none;\n  border: 2px solid rgba(81, 203, 238, 1);\n}\n.list-wrapper li.memo-list {\n  display: -webkit-box;\n  white-space: normal;\n  word-break: break-all;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n}\n.list-wrapper li.memo-list.accordion {\n  max-height: 2em;\n  -webkit-line-clamp: 2;\n}\n\n.photo-list {\n  white-space: nowrap;\n  overflow-x: auto;\n  text-align: center;\n  padding: 15px 0;\n}\n\n.thumbnail-wrapper {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: inline-block;\n  overflow: hidden;\n  margin: 0 10px;\n  box-sizing: border-box;\n}\n.thumbnail-wrapper.selected {\n  border: 2px solid rgb(255, 153, 0);\n}\n\n.thumbnail-img {\n  height: 50px;\n}\n\n.photo-view {\n  background-color: black;\n  width: 100vw;\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\nimg.portrait {\n  width: 100%;\n}\n\nimg.landscape {\n  height: 100%;\n}\n"],"sourceRoot":""}]);
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
        window.addEventListener("resize", this.render);
        this.render();
    }
    return App;
}());
exports.App = App;


/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./src/assets sync ^\.\/.*$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./01.jpg": "./src/assets/01.jpg",
	"./02.jpeg": "./src/assets/02.jpeg",
	"./03.jpg": "./src/assets/03.jpg",
	"./04.jpeg": "./src/assets/04.jpeg",
	"./05.jpg": "./src/assets/05.jpg",
	"./06.jpg": "./src/assets/06.jpg",
	"./07.jpg": "./src/assets/07.jpg",
	"./08.jpg": "./src/assets/08.jpg",
	"./09.jpg": "./src/assets/09.jpg",
	"./10.jpg": "./src/assets/10.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/01.jpg":
/*!***************************!*\
  !*** ./src/assets/01.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/01.jpg");

/***/ }),

/***/ "./src/assets/02.jpeg":
/*!****************************!*\
  !*** ./src/assets/02.jpeg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/02.jpeg");

/***/ }),

/***/ "./src/assets/03.jpg":
/*!***************************!*\
  !*** ./src/assets/03.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/03.jpg");

/***/ }),

/***/ "./src/assets/04.jpeg":
/*!****************************!*\
  !*** ./src/assets/04.jpeg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/04.jpeg");

/***/ }),

/***/ "./src/assets/05.jpg":
/*!***************************!*\
  !*** ./src/assets/05.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/05.jpg");

/***/ }),

/***/ "./src/assets/06.jpg":
/*!***************************!*\
  !*** ./src/assets/06.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/06.jpg");

/***/ }),

/***/ "./src/assets/07.jpg":
/*!***************************!*\
  !*** ./src/assets/07.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/07.jpg");

/***/ }),

/***/ "./src/assets/08.jpg":
/*!***************************!*\
  !*** ./src/assets/08.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/08.jpg");

/***/ }),

/***/ "./src/assets/09.jpg":
/*!***************************!*\
  !*** ./src/assets/09.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/09.jpg");

/***/ }),

/***/ "./src/assets/10.jpg":
/*!***************************!*\
  !*** ./src/assets/10.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/10.jpg");

/***/ }),

/***/ "./src/components/AccordionList.ts":
/*!*****************************************!*\
  !*** ./src/components/AccordionList.ts ***!
  \*****************************************/
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
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var AccordionList = /** @class */ (function (_super) {
    __extends(AccordionList, _super);
    function AccordionList(_a) {
        var $target = _a.$target, initialState = _a.initialState, onClick = _a.onClick;
        var _this = _super.call(this) || this;
        _this.state = __assign({}, initialState);
        _this.children = $target;
        _this.onClick = onClick;
        _this.children.addEventListener("click", function (e) {
            e.stopPropagation();
            _this.onClick(e.target["id"]);
        });
        _this.render();
        return _this;
    }
    AccordionList.prototype.render = function () {
        this.children.innerHTML = this.state.memos
            .map(function (item, idx) {
            return "<li id=\"" + idx + "\" class=\"memo-list accordion\">" + item + "</li>";
        })
            .join("");
    };
    return AccordionList;
}(Component_1.Component));
exports.default = AccordionList;


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

/***/ "./src/components/DraggableLIst.ts":
/*!*****************************************!*\
  !*** ./src/components/DraggableLIst.ts ***!
  \*****************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var DraggableList = /** @class */ (function (_super) {
    __extends(DraggableList, _super);
    function DraggableList(_a) {
        var $target = _a.$target, initialState = _a.initialState, onChange = _a.onChange;
        var _this = _super.call(this) || this;
        _this.onTouchStart = function (e) {
            e.preventDefault();
            _this.children.addEventListener("touchmove", _this.onTouchMove, false);
            _this.children.addEventListener("touchend", _this.onTouchEnd, false);
            _this.targetX = e.target["offsetLeft"];
            _this.targetY = e.target["offsetTop"];
            _this.isMoved = false;
            _this.isSwaped = false;
        };
        _this.onTouchMove = function (e) {
            e.preventDefault();
            var target = document.getElementById(e.target["id"]);
            target.style.left = e.targetTouches[0].pageX + "px";
            target.style.top = e.targetTouches[0].pageY + "px";
            target.style.opacity = "0.5";
            _this.isMoved = true;
        };
        _this.onTouchEnd = function (e) {
            e.preventDefault();
            _this.children.removeEventListener("touchmove", _this.onTouchMove, false);
            _this.children.removeEventListener("touchend", _this.onTouchEnd, false);
            var target = document.getElementById(e.target["id"]);
            var targetRect = target.getBoundingClientRect();
            var appList = document.querySelectorAll(".home li a");
            document
                .querySelectorAll(".home li")
                .forEach(function (el, idx) {
                var rect = el.getBoundingClientRect();
                if (rect.x < targetRect.x &&
                    rect.x + rect.width > targetRect.x &&
                    rect.y < targetRect.y &&
                    rect.y + rect.height > targetRect.y) {
                    _this.isSwaped = true;
                    appList["" + idx].style.left = _this.state.targetX + "px";
                    appList["" + idx].style.top = _this.state.targetY + "px";
                    target.style.left = rect.x + "px";
                    target.style.top = rect.y + "px";
                    target.style.opacity = "1";
                    var newState = __spread(_this.state.home);
                    var originalIdx = e["path"][1].getAttribute("key");
                    newState[idx] = __spread(_this.state.home)[originalIdx];
                    newState[originalIdx] = __spread(_this.state.home)[idx];
                    _this.onChange(newState);
                }
            });
            if (!_this.isSwaped) {
                target.style.left = _this.targetX + "px";
                target.style.top = _this.targetY + "px";
                target.style.opacity = "1";
            }
            if (!_this.isMoved) {
                var theTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                var theEvent = document.createEvent("MouseEvents");
                theEvent.initEvent("click", true, true);
                theTarget.dispatchEvent(theEvent);
            }
        };
        _this.state = __assign({}, initialState);
        _this.children = $target;
        _this.onChange = onChange;
        _this.children.addEventListener("touchstart", _this.onTouchStart, false);
        _this.render();
        return _this;
    }
    DraggableList.prototype.render = function () {
        this.children.innerHTML = this.state.home
            .map(function (item, idx) {
            return "<li key=" + idx + " class=\"flex-item\" draggable=false>\n                    <a id=\"" + item[0] + "\" href=\"#" + item[0] + "\" >" + item[1] + "</a>\n                </li>";
        })
            .join("");
    };
    return DraggableList;
}(Component_1.Component));
exports.default = DraggableList;


/***/ }),

/***/ "./src/components/EditableList.ts":
/*!****************************************!*\
  !*** ./src/components/EditableList.ts ***!
  \****************************************/
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
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var EditableList = /** @class */ (function (_super) {
    __extends(EditableList, _super);
    function EditableList(_a) {
        var $target = _a.$target, initialState = _a.initialState, onDelete = _a.onDelete;
        var _this = _super.call(this) || this;
        _this.state = __assign({}, initialState);
        _this.children = $target;
        _this.onDelete = onDelete;
        _this.children.addEventListener("click", function (e) {
            e.stopPropagation();
            if (e.target["innerText"] === "삭제") {
                _this.onDelete(e.target["id"]);
            }
        });
        _this.render();
        return _this;
    }
    EditableList.prototype.render = function () {
        this.children.innerHTML = this.state.alarms
            .map(function (item, idx) {
            return "<li class='flex-container'>\n                  <span class='flex-item grow'>" + item[1] + "</span>\n                  <button id=" + idx + " class='flex-item'>\uC0AD\uC81C</button>\n                </li>";
        })
            .join("");
    };
    return EditableList;
}(Component_1.Component));
exports.default = EditableList;


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

/***/ "./src/components/ImageList.ts":
/*!*************************************!*\
  !*** ./src/components/ImageList.ts ***!
  \*************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var ImageList = /** @class */ (function (_super) {
    __extends(ImageList, _super);
    function ImageList(_a) {
        var _b;
        var $target = _a.$target, initialState = _a.initialState, onClick = _a.onClick;
        var _this = _super.call(this) || this;
        _this.render = function () {
            var selected = _this.children.querySelector(".thumbnail-wrapper.selected");
            if (selected) {
                selected.classList.remove("selected");
            }
            var imgElList = _this.children.querySelectorAll(".thumbnail-wrapper");
            imgElList[_this.state.selected].classList.add("selected");
        };
        _this.state = __assign({}, initialState);
        _this.onClick = onClick;
        _this.children = $target;
        (_b = _this.children).append.apply(_b, __spread(_this.state.photos.map(function (photo, idx) {
            var item = document.createElement("li");
            item.setAttribute("key", String(idx));
            item.setAttribute("class", "thumbnail-wrapper");
            item.innerHTML = "                  \n        <img class=\"thumbnail-img\" id=\"img-" + idx + "\" alt=\"" + photo + "\" src=" + __webpack_require__("./src/assets sync recursive ^\\.\\/.*$")("./" + photo).default + "/>\n        ";
            return item;
        })));
        _this.children.addEventListener("click", function (e) {
            e.stopPropagation();
            if (e.target["className"] === "thumbnail-img") {
                _this.onClick(Number(e.target["id"].split("-")[1]));
            }
        });
        _this.render();
        return _this;
    }
    return ImageList;
}(Component_1.Component));
exports.default = ImageList;


/***/ }),

/***/ "./src/components/ImageView.ts":
/*!*************************************!*\
  !*** ./src/components/ImageView.ts ***!
  \*************************************/
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
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var ImageView = /** @class */ (function (_super) {
    __extends(ImageView, _super);
    function ImageView(_a) {
        var $target = _a.$target, initialState = _a.initialState;
        var _this = _super.call(this) || this;
        _this.render = function () {
            var selected = _this.state.photos[_this.state.selected];
            _this.imageEl.classList.remove("landscape", "portrait");
            _this.imageEl.src = __webpack_require__("./src/assets sync recursive ^\\.\\/.*$")("./" + selected).default;
            _this.imageEl.alt = selected;
            _this.imageEl.onload = function () {
                if (_this.children.offsetHeight <
                    (_this.children.offsetHeight / _this.children.offsetWidth) *
                        _this.imageEl.clientWidth) {
                    _this.imageEl.classList.add("portrait");
                }
                else {
                    _this.imageEl.classList.add("landscape");
                }
            };
        };
        _this.imageEl = new Image();
        _this.children = $target;
        _this.children.appendChild(_this.imageEl);
        _this.state = __assign({}, initialState);
        _this.render();
        return _this;
    }
    return ImageView;
}(Component_1.Component));
exports.default = ImageView;


/***/ }),

/***/ "./src/components/InputBox.ts":
/*!************************************!*\
  !*** ./src/components/InputBox.ts ***!
  \************************************/
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
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var InputBox = /** @class */ (function (_super) {
    __extends(InputBox, _super);
    function InputBox(_a) {
        var $target = _a.$target, onEnterKeyUp = _a.onEnterKeyUp;
        var _this = _super.call(this) || this;
        _this.children = $target;
        _this.children.innerHTML = "\n      <input id=\"memo-input\" placeholder=\"\uBA54\uBAA8\uB97C \uC785\uB825\uD558\uC138\uC694\"/>\n    ";
        _this.onEnterKeyUp = onEnterKeyUp;
        _this.children.addEventListener("keyup", function (e) {
            e.stopPropagation();
            if (e.key === "Enter") {
                _this.onEnterKeyUp(e.target["value"]);
            }
        });
        return _this;
    }
    InputBox.prototype.render = function () { };
    return InputBox;
}(Component_1.Component));
exports.default = InputBox;


/***/ }),

/***/ "./src/components/InputTimeBox.ts":
/*!****************************************!*\
  !*** ./src/components/InputTimeBox.ts ***!
  \****************************************/
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
var Component_1 = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var InputTimeBox = /** @class */ (function (_super) {
    __extends(InputTimeBox, _super);
    function InputTimeBox(_a) {
        var $target = _a.$target, onSubmit = _a.onSubmit;
        var _this = _super.call(this) || this;
        _this.onSubmit = onSubmit;
        _this.children = document.createElement("span");
        _this.children.classList.add("flex-item", "grow");
        _this.buttonEl = document.createElement("button");
        _this.buttonEl.classList.add("flex-item");
        _this.buttonEl.innerText = "저장";
        _this.selectTypeEl = document.createElement("select");
        _this.selectTimeEl = document.createElement("select");
        _this.selectMinuteEl = document.createElement("select");
        _this.selectTypeEl.id = "timeType";
        _this.selectTimeEl.id = "time";
        _this.selectMinuteEl.id = "minute";
        _this.children.append(_this.selectTypeEl, _this.selectTimeEl, "시", _this.selectMinuteEl, "분");
        $target.append(_this.children, _this.buttonEl);
        _this.buttonEl.addEventListener("click", function (e) {
            e.stopPropagation();
            _this.onSubmit(_this.selectTypeEl.options[_this.selectTypeEl.selectedIndex].value, _this.selectTimeEl.options[_this.selectTimeEl.selectedIndex].value, _this.selectMinuteEl.options[_this.selectMinuteEl.selectedIndex].value);
        });
        _this.render();
        return _this;
    }
    InputTimeBox.prototype.render = function () {
        this.selectTypeEl.innerHTML = "\n        <option value=\"\uC624\uC804\">\uC624\uC804</option>\n        <option value=\"\uC624\uD6C4\">\uC624\uD6C4</option>";
        this.selectTimeEl.innerHTML = "\n        <option value=\"01\">01</option>\n        <option value=\"02\">02</option>\n        <option value=\"03\">03</option>\n        <option value=\"04\">04</option>\n        <option value=\"05\">05</option>\n        <option value=\"06\">06</option>\n        <option value=\"07\">07</option>\n        <option value=\"08\">08</option>\n        <option value=\"09\">09</option>\n        <option value=\"10\">10</option>\n        <option value=\"11\">11</option>\n        <option value=\"12\">12</option>";
        this.selectMinuteEl.innerHTML = "\n        <option value=\"00\">00</option>\n        <option value=\"10\">10</option>\n        <option value=\"20\">20</option>\n        <option value=\"30\">30</option>\n        <option value=\"40\">40</option>\n        <option value=\"50\">50</option>";
    };
    return InputTimeBox;
}(Component_1.Component));
exports.default = InputTimeBox;


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
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
__webpack_require__(/*! ./App.css */ "./src/App.css");
App_1.createApp(App_1.App, document.querySelector("#app"));
// 앱 최초 실행시 로컬스토리지에 샘플 데이터 넣기
if (!localStorage.getItem("home")) {
    localStorage.setItem("home", JSON.stringify([
        ["alarm", "알람"],
        ["memo", "메모"],
        ["photo", "앨범"],
    ]));
    var current = new Date().toLocaleString().split(" ");
    localStorage.setItem("alarms", JSON.stringify([
        util_1.parserAlarm(current[3], current[4].split(":")[0], Math.ceil(Number(current[4].split(":")[1])) > 50
            ? String(Math.floor(Number(current[4].split(":")[1]) * 0.1) * 10)
            : String(Math.ceil(Number(current[4].split(":")[1]) * 0.1) * 10)),
    ]));
    var text = "샘플 메모입니다. 샘플 메모입니다. 샘플 메모입니다. 샘플 메모입니다. 샘플 메모입니다.";
    localStorage.setItem("memos", JSON.stringify([text, "" + text + text + text + text + text]));
    localStorage.setItem("photos", JSON.stringify([
        "01.jpg",
        "02.jpeg",
        "03.jpg",
        "04.jpeg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
    ]));
}


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
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var InputTimeBox_1 = __importDefault(__webpack_require__(/*! ../components/InputTimeBox */ "./src/components/InputTimeBox.ts"));
var EditableList_1 = __importDefault(__webpack_require__(/*! ../components/EditableList */ "./src/components/EditableList.ts"));
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var AlarmPage = /** @class */ (function (_super) {
    __extends(AlarmPage, _super);
    function AlarmPage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "alarms";
        _this.inputTimeBox = document.createElement("div");
        _this.alarmListEl = document.createElement("ul");
        _this.inputTimeBox.classList.add("hidden", "flex-container", "alarm");
        _this.alarmListEl.classList.add("list-wrapper");
        _this.mainEl.appendChild(_this.inputTimeBox);
        _this.mainEl.appendChild(_this.alarmListEl);
        _this.state = {
            alarms: JSON.parse(localStorage.getItem(_this.LOCAL_STORAGE)),
        };
        _this.component = {
            header: Component_1.createComponent(Header_1.default, {
                $target: _this.headerEl,
                goBack: function () { },
                addNew: function () {
                    _this.inputTimeBox.classList.remove("hidden");
                },
            }),
            inputTimeBox: Component_1.createComponent(InputTimeBox_1.default, {
                $target: _this.inputTimeBox,
                onSubmit: function (type, time, minute) {
                    _this.setState({
                        alarms: __spread(_this.state.alarms, [util_1.parserAlarm(type, time, minute)]),
                    }, function () {
                        return localStorage.setItem(_this.LOCAL_STORAGE, JSON.stringify(_this.state.alarms));
                    });
                    _this.inputTimeBox.classList.add("hidden");
                },
            }),
            alarmList: Component_1.createComponent(EditableList_1.default, {
                $target: _this.alarmListEl,
                initialState: _this.state,
                onDelete: function (id) {
                    _this.setState({
                        alarms: _this.state.alarms.filter(function (item, idx) { return idx !== Number(id); }),
                    }, function () {
                        return localStorage.setItem(_this.LOCAL_STORAGE, JSON.stringify(_this.state.alarms));
                    });
                },
            }),
        };
        return _this;
    }
    AlarmPage.prototype.render = function () {
        this.component.alarmList.setState(this.state);
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
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var DraggableLIst_1 = __importDefault(__webpack_require__(/*! ../components/DraggableLIst */ "./src/components/DraggableLIst.ts"));
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "home";
        _this.state = {
            home: JSON.parse(localStorage.getItem(_this.LOCAL_STORAGE)),
        };
        _this.appListEl = document.createElement("ul");
        _this.appListEl.classList.add("flex-container", "home");
        _this.mainEl.appendChild(_this.appListEl);
        _this.component = {
            header: Component_1.createComponent(Header_1.default, {
                $target: _this.headerEl,
            }),
            appList: Component_1.createComponent(DraggableLIst_1.default, {
                $target: _this.appListEl,
                initialState: _this.state,
                onChange: function (apps) {
                    _this.setState({ home: apps }, function () {
                        return localStorage.setItem(_this.LOCAL_STORAGE, JSON.stringify(_this.state.home));
                    });
                },
            }),
        };
        return _this;
    }
    HomePage.prototype.render = function () {
        this.component.appList.setState(this.state);
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
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var InputBox_1 = __importDefault(__webpack_require__(/*! ../components/InputBox */ "./src/components/InputBox.ts"));
var AccordionList_1 = __importDefault(__webpack_require__(/*! ../components/AccordionList */ "./src/components/AccordionList.ts"));
var MemoPage = /** @class */ (function (_super) {
    __extends(MemoPage, _super);
    function MemoPage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "memos";
        _this.inputBoxEl = document.createElement("div");
        _this.memoListEl = document.createElement("ul");
        _this.inputBoxEl.classList.add("hidden", "flex-container");
        _this.memoListEl.classList.add("list-wrapper");
        _this.mainEl.appendChild(_this.inputBoxEl);
        _this.mainEl.appendChild(_this.memoListEl);
        _this.state = {
            memos: JSON.parse(localStorage.getItem(_this.LOCAL_STORAGE)),
        };
        _this.component = {
            header: Component_1.createComponent(Header_1.default, {
                $target: _this.headerEl,
                goBack: function () { },
                addNew: function () {
                    _this.inputBoxEl.classList.remove("hidden");
                    document.getElementById("memo-input").focus();
                },
            }),
            inputBox: Component_1.createComponent(InputBox_1.default, {
                $target: _this.inputBoxEl,
                onEnterKeyUp: function (value) {
                    _this.setState({ memos: __spread(_this.state.memos, [value]) }, function () {
                        return localStorage.setItem(_this.LOCAL_STORAGE, JSON.stringify(_this.state.memos));
                    });
                    _this.inputBoxEl.classList.add("hidden");
                },
            }),
            memoList: Component_1.createComponent(AccordionList_1.default, {
                $target: _this.memoListEl,
                initialState: _this.state,
                onClick: function (id) {
                    document.getElementById(id).classList.toggle("accordion");
                },
            }),
        };
        return _this;
    }
    MemoPage.prototype.render = function () {
        this.component.memoList.setState(this.state);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(/*! ../components/Component */ "./src/components/Component.ts");
var Page_1 = __webpack_require__(/*! ./Page */ "./src/pages/Page.ts");
var Header_1 = __importDefault(__webpack_require__(/*! ../components/Header */ "./src/components/Header.ts"));
var ImageList_1 = __importDefault(__webpack_require__(/*! ../components/ImageList */ "./src/components/ImageList.ts"));
var ImageView_1 = __importDefault(__webpack_require__(/*! ../components/ImageView */ "./src/components/ImageView.ts"));
var PhotoPage = /** @class */ (function (_super) {
    __extends(PhotoPage, _super);
    function PhotoPage($app) {
        var _this = _super.call(this, $app) || this;
        _this.LOCAL_STORAGE = "photos";
        _this.photoListEl = document.createElement("ul");
        _this.photoViewEl = document.createElement("div");
        _this.mainEl.appendChild(_this.photoListEl);
        _this.mainEl.appendChild(_this.photoViewEl);
        _this.photoListEl.classList.add("photo-list");
        _this.photoViewEl.classList.add("photo-view");
        _this.photoViewEl.style.height = window.innerHeight - 110 + "px";
        _this.state = {
            photos: JSON.parse(localStorage.getItem(_this.LOCAL_STORAGE)),
            selected: 0,
        };
        _this.component = {
            header: Component_1.createComponent(Header_1.default, {
                $target: _this.headerEl,
                goBack: function () { },
            }),
            imageList: Component_1.createComponent(ImageList_1.default, {
                $target: _this.photoListEl,
                initialState: _this.state,
                onClick: function (id) {
                    _this.setState(__assign(__assign({}, _this.state), { selected: id }), function () {
                        _this.render();
                    });
                },
            }),
            imageView: Component_1.createComponent(ImageView_1.default, {
                $target: _this.photoViewEl,
                initialState: _this.state,
            }),
        };
        return _this;
    }
    PhotoPage.prototype.render = function () {
        this.component.imageList.setState(this.state);
        this.component.imageView.setState(this.state);
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
exports.parserAlarm = exports.getDateTime = void 0;
function getDateTime() {
    var dateTime = new Date();
    var time = dateTime.toTimeString().split(" ")[0].split(":");
    return dateTime.getFullYear() + "\uB144 " + (dateTime.getMonth() + 1) + "\uC6D4 " + dateTime.getDate() + "\uC77C " + time[0] + "\uC2DC " + time[1] + "\uBD84 " + time[2] + "\uCD08";
}
exports.getDateTime = getDateTime;
function parserAlarm(type, time, minute) {
    return [
        (type === "오전" ? time : Number(time) + 12) + ":" + minute + ":00",
        type + " " + time + "\uC2DC " + minute + "\uBD84",
    ];
}
exports.parserAlarm = parserAlarm;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3M/ZDljZCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvMDEuanBnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvMDIuanBlZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzLzAzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzLzA0LmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8wNS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8wNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8wNy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8wOC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8wOS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8xMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlTElzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0YWJsZUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ltYWdlTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbWFnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRCb3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRUaW1lQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWxhcm1QYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTWVtb1BhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1BhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Bob3RvUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMs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RUFBRSxnQkFDOUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsZ0JBQ3BCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsZUFBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBRyxDQUFDO0FBQ2pFLENBQUM7QUFQRCxrQ0FPQztBQUVELFNBQWdCLFdBQVcsQ0FDekIsSUFBWSxFQUNaLElBQVksRUFDWixNQUFjO0lBRWQsT0FBTztRQUNMLENBQUcsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFJLE1BQU0sUUFBSztRQUN2RCxJQUFJLFNBQUksSUFBSSxlQUFLLE1BQU0sV0FBRztLQUM5QixDQUFDO0FBQ0osQ0FBQztBQVRELGtDQVNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzLzAxLmpwZ1xcXCIpIG5vLXJlcGVhdDsgKi9cXG59XFxuI2FwcCB7XFxuICAvKiBtYXgtd2lkdGg6IDEyMDBweDsgKi9cXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5oZWFkZXIgLmJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lcixcXG4uZmxleC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mbGV4LWl0ZW0ge1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4uZmxleC1pdGVtIHNlbGVjdCB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi5mbGV4LWl0ZW0uZ3JvdyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4gPiAuZmxleC1jb250YWluZXIge1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxubWFpbiA+IC5mbGV4LWNvbnRhaW5lci5hbGFybSxcXG4ubGlzdC13cmFwcGVyIGxpIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5saXN0LXdyYXBwZXIgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxuLmxpc3Qtd3JhcHBlciBsaSBzcGFuIHtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG9tZSBsaSB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmhvbWUgbGkgYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jbWVtby1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jbWVtby1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xcbn1cXG4ubGlzdC13cmFwcGVyIGxpLm1lbW8tbGlzdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG4ubGlzdC13cmFwcGVyIGxpLm1lbW8tbGlzdC5hY2NvcmRpb24ge1xcbiAgbWF4LWhlaWdodDogMmVtO1xcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xcbn1cXG5cXG4ucGhvdG8tbGlzdCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLnRodW1ibmFpbC13cmFwcGVyIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi50aHVtYm5haWwtd3JhcHBlci5zZWxlY3RlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxNTMsIDApO1xcbn1cXG5cXG4udGh1bWJuYWlsLWltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5waG90by12aWV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmltZy5wb3J0cmFpdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW1nLmxhbmRzY2FwZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7O0VBRVosa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzLzAxLmpwZ1xcXCIpIG5vLXJlcGVhdDsgKi9cXG59XFxuI2FwcCB7XFxuICAvKiBtYXgtd2lkdGg6IDEyMDBweDsgKi9cXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5oZWFkZXIgLmJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lcixcXG4uZmxleC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mbGV4LWl0ZW0ge1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4uZmxleC1pdGVtIHNlbGVjdCB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi5mbGV4LWl0ZW0uZ3JvdyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4gPiAuZmxleC1jb250YWluZXIge1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxubWFpbiA+IC5mbGV4LWNvbnRhaW5lci5hbGFybSxcXG4ubGlzdC13cmFwcGVyIGxpIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5saXN0LXdyYXBwZXIgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxuLmxpc3Qtd3JhcHBlciBsaSBzcGFuIHtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG9tZSBsaSB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmhvbWUgbGkgYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jbWVtby1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jbWVtby1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xcbn1cXG4ubGlzdC13cmFwcGVyIGxpLm1lbW8tbGlzdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG4ubGlzdC13cmFwcGVyIGxpLm1lbW8tbGlzdC5hY2NvcmRpb24ge1xcbiAgbWF4LWhlaWdodDogMmVtO1xcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xcbn1cXG5cXG4ucGhvdG8tbGlzdCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLnRodW1ibmFpbC13cmFwcGVyIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi50aHVtYm5haWwtd3JhcHBlci5zZWxlY3RlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxNTMsIDApO1xcbn1cXG5cXG4udGh1bWJuYWlsLWltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5waG90by12aWV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmltZy5wb3J0cmFpdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW1nLmxhbmRzY2FwZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgQWxhcm1QYWdlIGZyb20gXCIuL3BhZ2VzL0FsYXJtUGFnZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVQYWdlXCI7XG5pbXBvcnQgTWVtb1BhZ2UgZnJvbSBcIi4vcGFnZXMvTWVtb1BhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9QYWdlXCI7XG5pbXBvcnQgUGhvdG9QYWdlIGZyb20gXCIuL3BhZ2VzL1Bob3RvUGFnZVwiO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWUgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmludGVyZmFjZSBBcHBDb25zdHJ1Y3RvciB7XG4gIG5ldyAoJGFwcDogSFRNTERpdkVsZW1lbnQpOiBBcHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoY3N0cjogQXBwQ29uc3RydWN0b3IsICRhcHA6IEhUTUxEaXZFbGVtZW50KSB7XG4gIHJldHVybiBuZXcgY3N0cigkYXBwKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByb3RlY3RlZCByb290RWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcm90ZWN0ZWQgYWxhcm1zOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCRhcHA6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5yb290RWwgPSAkYXBwO1xuICAgIHRoaXMuYWxhcm1zID0gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxhcm1zXCIpKSB8fCBbXSk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBIZWFkZXI6IOuCoOynnOyZgCDsi5zqsITsnbQg7ZGc7IucXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpLmlubmVySFRNTCA9IGdldERhdGVUaW1lKCk7XG4gICAgICAvLyBBbGFybTog7Iuc6rCE7J20IOuQmOuptCBhbGVydCDssL3snLzroZwg7JWM656M7Iuc6rCE7J2EIOudhOyWtOyjvOqzoCDtmZXsnbgg7YG066at7IucIOyCreygnFxuICAgICAgY29uc3QgY3VycmVudCA9IGAke25ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkuc2xpY2UoMCwgNil9MDBgO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGAke3RoaXMuYWxhcm1zLmdldChjdXJyZW50KX0gXFxuIOyVjOuejOydhCDsooXro4ztlZjsi5zqsqDsirXri4jquYw/YDtcbiAgICAgIGlmICh0aGlzLmFsYXJtcy5oYXMoY3VycmVudCkpIHtcbiAgICAgICAgaWYgKGNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICB0aGlzLmFsYXJtcy5kZWxldGUoY3VycmVudCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGFybXNcIiwgSlNPTi5zdHJpbmdpZnkoWy4uLnRoaXMuYWxhcm1zXSkpO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICAvLyBoYXNoY2hhbmdlIOydtOuypO2KuOuhnCB1cmnsnZggaGFzaOqwgCDrs4Dqsr3tlZjrqbQg67Cc7IOdIOqwkOyngO2VmOyXrCDtjpjsnbTsp4Ag65287Jqw7YyFXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHRoaXMucmVuZGVyKTtcbiAgICAvLyBET01Db250ZW50TG9hZGVk7J2AIEhUTUzqs7wgc2NyaXB06rCAIOuhnOuTnOuQnCDsi5zsoJDsl5Ag67Cc7IOd7ZWY64qUIOydtOuypO2KuOuhnCBsb2FkIOydtOuypO2KuOuztOuLpCDrqLzsoIAg67Cc7IOdXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMucmVuZGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlbmRlcik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlciA9IGFzeW5jICgpID0+IHtcbiAgICAvLyDtjpjsnbTsp4Ag7LSI6riw7ZmUXG4gICAgdGhpcy5yb290RWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyDtjpjsnbTsp4Ag65287Jqw7YyFXG4gICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICBjYXNlIFwiYWxhcm1cIjpcbiAgICAgICAgY3JlYXRlUGFnZShBbGFybVBhZ2UsIHRoaXMucm9vdEVsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVtb1wiOlxuICAgICAgICBjcmVhdGVQYWdlKE1lbW9QYWdlLCB0aGlzLnJvb3RFbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBob3RvXCI6XG4gICAgICAgIGNyZWF0ZVBhZ2UoUGhvdG9QYWdlLCB0aGlzLnJvb3RFbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY3JlYXRlUGFnZShIb21lUGFnZSwgdGhpcy5yb290RWwpO1xuICAgIH1cbiAgfTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi8wMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvMDEuanBnXCIsXG5cdFwiLi8wMi5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzLzAyLmpwZWdcIixcblx0XCIuLzAzLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy8wMy5qcGdcIixcblx0XCIuLzA0LmpwZWdcIjogXCIuL3NyYy9hc3NldHMvMDQuanBlZ1wiLFxuXHRcIi4vMDUuanBnXCI6IFwiLi9zcmMvYXNzZXRzLzA1LmpwZ1wiLFxuXHRcIi4vMDYuanBnXCI6IFwiLi9zcmMvYXNzZXRzLzA2LmpwZ1wiLFxuXHRcIi4vMDcuanBnXCI6IFwiLi9zcmMvYXNzZXRzLzA3LmpwZ1wiLFxuXHRcIi4vMDguanBnXCI6IFwiLi9zcmMvYXNzZXRzLzA4LmpwZ1wiLFxuXHRcIi4vMDkuanBnXCI6IFwiLi9zcmMvYXNzZXRzLzA5LmpwZ1wiLFxuXHRcIi4vMTAuanBnXCI6IFwiLi9zcmMvYXNzZXRzLzEwLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzLzAxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvMDIuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvMDMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy8wNC5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy8wNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzLzA2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvMDcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy8wOC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzLzA5LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvMTAuanBnXCI7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmludGVyZmFjZSBJQXJncyB7XG4gICR0YXJnZXQ6IEhUTUxFbGVtZW50O1xuICBpbml0aWFsU3RhdGU6IGFueTtcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBvbkNsaWNrOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcih7ICR0YXJnZXQsIGluaXRpYWxTdGF0ZSwgb25DbGljayB9OiBJQXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4uaW5pdGlhbFN0YXRlIH07XG4gICAgdGhpcy5jaGlsZHJlbiA9ICR0YXJnZXQ7XG4gICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcblxuICAgIHRoaXMuY2hpbGRyZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vbkNsaWNrKGUudGFyZ2V0W1wiaWRcIl0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNoaWxkcmVuLmlubmVySFRNTCA9IHRoaXMuc3RhdGUubWVtb3NcbiAgICAgIC5tYXAoKGl0ZW06IHN0cmluZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGkgaWQ9XCIke2lkeH1cIiBjbGFzcz1cIm1lbW8tbGlzdCBhY2NvcmRpb25cIj4ke2l0ZW19PC9saT5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgQ29tcG9uZW50Q29uc3RydWN0b3Ige1xuICBuZXcgKGFyZ3M/OiBhbnkpOiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgY2hpbGRyZW46IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgc3RhdGU6IGFueTtcblxuICBhYnN0cmFjdCByZW5kZXIoKTogdm9pZDtcblxuICBzZXRTdGF0ZShuZXh0U3RhdGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KGNzdHI6IENvbXBvbmVudENvbnN0cnVjdG9yLCBhcmdzOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBjc3RyKHsgLi4uYXJncyB9KTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5pbnRlcmZhY2UgSUFyZ3Mge1xuICAkdGFyZ2V0OiBIVE1MRWxlbWVudDtcbiAgaW5pdGlhbFN0YXRlOiBhbnk7XG4gIG9uQ2hhbmdlPzogRnVuY3Rpb247XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJvdGVjdGVkIHRhcmdldFg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHRhcmdldFk6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGlzTW92ZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBpc1N3YXBlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcih7ICR0YXJnZXQsIGluaXRpYWxTdGF0ZSwgb25DaGFuZ2UgfTogSUFyZ3MpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSB9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSAkdGFyZ2V0O1xuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICB0aGlzLmNoaWxkcmVuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2hpbGRyZW4uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5ob21lXG4gICAgICAubWFwKChpdGVtOiBzdHJpbmdbXSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGkga2V5PSR7aWR4fSBjbGFzcz1cImZsZXgtaXRlbVwiIGRyYWdnYWJsZT1mYWxzZT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCIke2l0ZW1bMF19XCIgaHJlZj1cIiMke2l0ZW1bMF19XCIgPiR7aXRlbVsxXX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgb25Ub3VjaFN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jaGlsZHJlbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICB0aGlzLmNoaWxkcmVuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICB0aGlzLnRhcmdldFggPSBlLnRhcmdldFtcIm9mZnNldExlZnRcIl07XG4gICAgdGhpcy50YXJnZXRZID0gZS50YXJnZXRbXCJvZmZzZXRUb3BcIl07XG4gICAgdGhpcy5pc01vdmVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1N3YXBlZCA9IGZhbHNlO1xuICB9O1xuXG4gIG9uVG91Y2hNb3ZlID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS50YXJnZXRbXCJpZFwiXSk7XG4gICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBgJHtlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVh9cHhgO1xuICAgIHRhcmdldC5zdHlsZS50b3AgPSBgJHtlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVl9cHhgO1xuICAgIHRhcmdldC5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgICB0aGlzLmlzTW92ZWQgPSB0cnVlO1xuICB9O1xuXG4gIG9uVG91Y2hFbmQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMuY2hpbGRyZW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS50YXJnZXRbXCJpZFwiXSk7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBhcHBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lIGxpIGFcIik7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZSBsaVwiKVxuICAgICAgLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcmVjdC54IDwgdGFyZ2V0UmVjdC54ICYmXG4gICAgICAgICAgcmVjdC54ICsgcmVjdC53aWR0aCA+IHRhcmdldFJlY3QueCAmJlxuICAgICAgICAgIHJlY3QueSA8IHRhcmdldFJlY3QueSAmJlxuICAgICAgICAgIHJlY3QueSArIHJlY3QuaGVpZ2h0ID4gdGFyZ2V0UmVjdC55XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuaXNTd2FwZWQgPSB0cnVlO1xuICAgICAgICAgIGFwcExpc3RbYCR7aWR4fWBdLnN0eWxlLmxlZnQgPSBgJHt0aGlzLnN0YXRlLnRhcmdldFh9cHhgO1xuICAgICAgICAgIGFwcExpc3RbYCR7aWR4fWBdLnN0eWxlLnRvcCA9IGAke3RoaXMuc3RhdGUudGFyZ2V0WX1weGA7XG4gICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBgJHtyZWN0Lnh9cHhgO1xuICAgICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBgJHtyZWN0Lnl9cHhgO1xuICAgICAgICAgIHRhcmdldC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cbiAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi50aGlzLnN0YXRlLmhvbWVdO1xuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsSWR4ID0gZVtcInBhdGhcIl1bMV0uZ2V0QXR0cmlidXRlKFwia2V5XCIpO1xuICAgICAgICAgIG5ld1N0YXRlW2lkeF0gPSBbLi4udGhpcy5zdGF0ZS5ob21lXVtvcmlnaW5hbElkeF07XG4gICAgICAgICAgbmV3U3RhdGVbb3JpZ2luYWxJZHhdID0gWy4uLnRoaXMuc3RhdGUuaG9tZV1baWR4XTtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuaXNTd2FwZWQpIHtcbiAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy50YXJnZXRYfXB4YDtcbiAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBgJHt0aGlzLnRhcmdldFl9cHhgO1xuICAgICAgdGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNNb3ZlZCkge1xuICAgICAgY29uc3QgdGhlVGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChcbiAgICAgICAgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICk7XG4gICAgICBjb25zdCB0aGVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7XG4gICAgICB0aGVFdmVudC5pbml0RXZlbnQoXCJjbGlja1wiLCB0cnVlLCB0cnVlKTtcbiAgICAgIHRoZVRhcmdldC5kaXNwYXRjaEV2ZW50KHRoZUV2ZW50KTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuaW50ZXJmYWNlIElBcmdzIHtcbiAgJHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gIGluaXRpYWxTdGF0ZTogYW55O1xuICBvbkRlbGV0ZT86IEZ1bmN0aW9uO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIG9uRGVsZXRlOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcih7ICR0YXJnZXQsIGluaXRpYWxTdGF0ZSwgb25EZWxldGUgfTogSUFyZ3MpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSB9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSAkdGFyZ2V0O1xuICAgIHRoaXMub25EZWxldGUgPSBvbkRlbGV0ZTtcblxuICAgIHRoaXMuY2hpbGRyZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGUudGFyZ2V0W1wiaW5uZXJUZXh0XCJdID09PSBcIuyCreygnFwiKSB7XG4gICAgICAgIHRoaXMub25EZWxldGUoZS50YXJnZXRbXCJpZFwiXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2hpbGRyZW4uaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5hbGFybXNcbiAgICAgIC5tYXAoKGl0ZW06IHN0cmluZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9J2ZsZXgtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmbGV4LWl0ZW0gZ3Jvdyc+JHtpdGVtWzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9JHtpZHh9IGNsYXNzPSdmbGV4LWl0ZW0nPuyCreygnDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgIH0pXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0RGF0ZVRpbWUgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmludGVyZmFjZSBJQXJncyB7XG4gICR0YXJnZXQ6IEhUTUxFbGVtZW50O1xuICBnb0JhY2s/OiBGdW5jdGlvbjtcbiAgYWRkTmV3PzogRnVuY3Rpb247XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBwcml2YXRlIGdvQmFjazogRnVuY3Rpb247XG4gIHByaXZhdGUgYWRkTmV3OiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcih7ICR0YXJnZXQsIGdvQmFjaywgYWRkTmV3IH06IElBcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5nb0JhY2sgPSBnb0JhY2s7XG4gICAgdGhpcy5hZGROZXcgPSBhZGROZXc7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0aGlzLmNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNvbnRhaW5lclwiKTtcbiAgICAkdGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW4pO1xuICAgICR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGUudGFyZ2V0W1wiaW5uZXJIVE1MXCJdID09PSBcIk5FV1wiKSB0aGlzLmFkZE5ldygpO1xuICAgICAgaWYgKGUudGFyZ2V0W1wiaW5uZXJIVE1MXCJdID09PSBcIkJBQ0tcIikgdGhpcy5nb0JhY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jaGlsZHJlbi5pbm5lckhUTUwgPSBgXG4gICAgICAke1xuICAgICAgICB0aGlzLmdvQmFja1xuICAgICAgICAgID8gYDxsaSBjbGFzcz0nZmxleC1pdGVtIGJ0bic+PGEgaHJlZj0nLyc+QkFDSzwvYT48L2xpPmBcbiAgICAgICAgICA6IGA8bGkgY2xhc3M9J2ZsZXgtaXRlbSBidG4gaGlkZGVuJz48L2xpPmBcbiAgICAgIH1cbiAgICAgIDxsaSBpZD1cImNsb2NrXCIgY2xhc3M9J2ZsZXgtaXRlbSBncm93Jz4ke2dldERhdGVUaW1lKCl9PC9saT5cbiAgICAgICR7XG4gICAgICAgIHRoaXMuYWRkTmV3XG4gICAgICAgICAgPyBgPGxpIGNsYXNzPSdmbGV4LWl0ZW0gYnRuJz5ORVc8L2xpPmBcbiAgICAgICAgICA6IGA8bGkgY2xhc3M9J2ZsZXgtaXRlbSBidG4gaGlkZGVuJz48L2xpPmBcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuaW50ZXJmYWNlIElBcmdzIHtcbiAgJHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gIGluaXRpYWxTdGF0ZTogYW55O1xuICBvbkNsaWNrPzogRnVuY3Rpb247XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBwcml2YXRlIG9uQ2xpY2s6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHsgJHRhcmdldCwgaW5pdGlhbFN0YXRlLCBvbkNsaWNrIH06IElBcmdzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSB9O1xuICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XG4gICAgdGhpcy5jaGlsZHJlbiA9ICR0YXJnZXQ7XG4gICAgdGhpcy5jaGlsZHJlbi5hcHBlbmQoXG4gICAgICAuLi50aGlzLnN0YXRlLnBob3Rvcy5tYXAoKHBob3RvOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwia2V5XCIsIFN0cmluZyhpZHgpKTtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRodW1ibmFpbC13cmFwcGVyXCIpO1xuICAgICAgICBpdGVtLmlubmVySFRNTCA9IGAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPGltZyBjbGFzcz1cInRodW1ibmFpbC1pbWdcIiBpZD1cImltZy0ke2lkeH1cIiBhbHQ9XCIke3Bob3RvfVwiIHNyYz0ke1xuICAgICAgICAgIHJlcXVpcmUoYC4uL2Fzc2V0cy8ke3Bob3RvfWApLmRlZmF1bHRcbiAgICAgICAgfS8+XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoZS50YXJnZXRbXCJjbGFzc05hbWVcIl0gPT09IFwidGh1bWJuYWlsLWltZ1wiKSB7XG4gICAgICAgIHRoaXMub25DbGljayhOdW1iZXIoZS50YXJnZXRbXCJpZFwiXS5zcGxpdChcIi1cIilbMV0pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmNoaWxkcmVuLnF1ZXJ5U2VsZWN0b3IoXCIudGh1bWJuYWlsLXdyYXBwZXIuc2VsZWN0ZWRcIik7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBzZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICAgIGNvbnN0IGltZ0VsTGlzdCA9IHRoaXMuY2hpbGRyZW4ucXVlcnlTZWxlY3RvckFsbChcIi50aHVtYm5haWwtd3JhcHBlclwiKTtcbiAgICBpbWdFbExpc3RbdGhpcy5zdGF0ZS5zZWxlY3RlZF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XG5cbmludGVyZmFjZSBJQXJncyB7XG4gICR0YXJnZXQ6IEhUTUxFbGVtZW50O1xuICBpbml0aWFsU3RhdGU6IGFueTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBpbWFnZUVsOiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHsgJHRhcmdldCwgaW5pdGlhbFN0YXRlIH06IElBcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmltYWdlRWwgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gJHRhcmdldDtcbiAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VFbCk7XG5cbiAgICB0aGlzLnN0YXRlID0geyAuLi5pbml0aWFsU3RhdGUgfTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnBob3Rvc1t0aGlzLnN0YXRlLnNlbGVjdGVkXTtcbiAgICB0aGlzLmltYWdlRWwuY2xhc3NMaXN0LnJlbW92ZShcImxhbmRzY2FwZVwiLCBcInBvcnRyYWl0XCIpO1xuICAgIHRoaXMuaW1hZ2VFbC5zcmMgPSByZXF1aXJlKGAuLi9hc3NldHMvJHtzZWxlY3RlZH1gKS5kZWZhdWx0O1xuICAgIHRoaXMuaW1hZ2VFbC5hbHQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLmltYWdlRWwub25sb2FkID0gKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmNoaWxkcmVuLm9mZnNldEhlaWdodCA8XG4gICAgICAgICh0aGlzLmNoaWxkcmVuLm9mZnNldEhlaWdodCAvIHRoaXMuY2hpbGRyZW4ub2Zmc2V0V2lkdGgpICpcbiAgICAgICAgICB0aGlzLmltYWdlRWwuY2xpZW50V2lkdGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLmltYWdlRWwuY2xhc3NMaXN0LmFkZChcInBvcnRyYWl0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbWFnZUVsLmNsYXNzTGlzdC5hZGQoXCJsYW5kc2NhcGVcIik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5pbnRlcmZhY2UgSUFyZ3Mge1xuICAkdGFyZ2V0OiBIVE1MRWxlbWVudDtcbiAgb25FbnRlcktleVVwPzogRnVuY3Rpb247XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBvbkVudGVyS2V5VXA6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHsgJHRhcmdldCwgb25FbnRlcktleVVwIH06IElBcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gJHRhcmdldDtcbiAgICB0aGlzLmNoaWxkcmVuLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbnB1dCBpZD1cIm1lbW8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIuuplOuqqOulvCDsnoXroKXtlZjshLjsmpRcIi8+XG4gICAgYDtcblxuICAgIHRoaXMub25FbnRlcktleVVwID0gb25FbnRlcktleVVwO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aGlzLm9uRW50ZXJLZXlVcChlLnRhcmdldFtcInZhbHVlXCJdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuaW50ZXJmYWNlIElBcmdzIHtcbiAgJHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gIG9uU3VibWl0PzogRnVuY3Rpb247XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbWVCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgc2VsZWN0VHlwZUVsOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgcHJvdGVjdGVkIHNlbGVjdFRpbWVFbDogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBzZWxlY3RNaW51dGVFbDogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBidXR0b25FbDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByb3RlY3RlZCBvblN1Ym1pdDogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoeyAkdGFyZ2V0LCBvblN1Ym1pdCB9OiBJQXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IG9uU3VibWl0O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0aGlzLmNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoXCJmbGV4LWl0ZW1cIiwgXCJncm93XCIpO1xuICAgIHRoaXMuYnV0dG9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuYnV0dG9uRWwuY2xhc3NMaXN0LmFkZChcImZsZXgtaXRlbVwiKTtcbiAgICB0aGlzLmJ1dHRvbkVsLmlubmVyVGV4dCA9IFwi7KCA7J6lXCI7XG5cbiAgICB0aGlzLnNlbGVjdFR5cGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgdGhpcy5zZWxlY3RUaW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHRoaXMuc2VsZWN0TWludXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHRoaXMuc2VsZWN0VHlwZUVsLmlkID0gXCJ0aW1lVHlwZVwiO1xuICAgIHRoaXMuc2VsZWN0VGltZUVsLmlkID0gXCJ0aW1lXCI7XG4gICAgdGhpcy5zZWxlY3RNaW51dGVFbC5pZCA9IFwibWludXRlXCI7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmFwcGVuZChcbiAgICAgIHRoaXMuc2VsZWN0VHlwZUVsLFxuICAgICAgdGhpcy5zZWxlY3RUaW1lRWwsXG4gICAgICBcIuyLnFwiLFxuICAgICAgdGhpcy5zZWxlY3RNaW51dGVFbCxcbiAgICAgIFwi67aEXCJcbiAgICApO1xuICAgICR0YXJnZXQuYXBwZW5kKHRoaXMuY2hpbGRyZW4sIHRoaXMuYnV0dG9uRWwpO1xuXG4gICAgdGhpcy5idXR0b25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uU3VibWl0KFxuICAgICAgICB0aGlzLnNlbGVjdFR5cGVFbC5vcHRpb25zW3RoaXMuc2VsZWN0VHlwZUVsLnNlbGVjdGVkSW5kZXhdLnZhbHVlLFxuICAgICAgICB0aGlzLnNlbGVjdFRpbWVFbC5vcHRpb25zW3RoaXMuc2VsZWN0VGltZUVsLnNlbGVjdGVkSW5kZXhdLnZhbHVlLFxuICAgICAgICB0aGlzLnNlbGVjdE1pbnV0ZUVsLm9wdGlvbnNbdGhpcy5zZWxlY3RNaW51dGVFbC5zZWxlY3RlZEluZGV4XS52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RUeXBlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7Jik7KCEXCI+7Jik7KCEPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCLsmKTtm4RcIj7smKTtm4Q8L29wdGlvbj5gO1xuICAgIHRoaXMuc2VsZWN0VGltZUVsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAxXCI+MDE8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAyXCI+MDI8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjAzXCI+MDM8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA0XCI+MDQ8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA1XCI+MDU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA2XCI+MDY8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA3XCI+MDc8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA4XCI+MDg8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjA5XCI+MDk8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj5gO1xuICAgIHRoaXMuc2VsZWN0TWludXRlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMDBcIj4wMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDBcIj40MDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPmA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwcCwgY3JlYXRlQXBwIH0gZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgeyBwYXJzZXJBbGFybSB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBcIi4vQXBwLmNzc1wiO1xuXG5jcmVhdGVBcHAoQXBwLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKSk7XG5cbi8vIOyVsSDstZzstIgg7Iuk7ZaJ7IucIOuhnOy7rOyKpO2GoOumrOyngOyXkCDsg5jtlIwg642w7J207YSwIOuEo+q4sFxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvbWVcIikpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgXCJob21lXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgW1wiYWxhcm1cIiwgXCLslYzrnoxcIl0sXG4gICAgICBbXCJtZW1vXCIsIFwi66mU66qoXCJdLFxuICAgICAgW1wicGhvdG9cIiwgXCLslajrspRcIl0sXG4gICAgXSlcbiAgKTtcblxuICBjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiIFwiKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgXCJhbGFybXNcIixcbiAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICBwYXJzZXJBbGFybShcbiAgICAgICAgY3VycmVudFszXSxcbiAgICAgICAgY3VycmVudFs0XS5zcGxpdChcIjpcIilbMF0sXG4gICAgICAgIE1hdGguY2VpbChOdW1iZXIoY3VycmVudFs0XS5zcGxpdChcIjpcIilbMV0pKSA+IDUwXG4gICAgICAgICAgPyBTdHJpbmcoTWF0aC5mbG9vcihOdW1iZXIoY3VycmVudFs0XS5zcGxpdChcIjpcIilbMV0pICogMC4xKSAqIDEwKVxuICAgICAgICAgIDogU3RyaW5nKE1hdGguY2VpbChOdW1iZXIoY3VycmVudFs0XS5zcGxpdChcIjpcIilbMV0pICogMC4xKSAqIDEwKVxuICAgICAgKSxcbiAgICBdKVxuICApO1xuXG4gIGNvbnN0IHRleHQgPVxuICAgIFwi7IOY7ZSMIOuplOuqqOyeheuLiOuLpC4g7IOY7ZSMIOuplOuqqOyeheuLiOuLpC4g7IOY7ZSMIOuplOuqqOyeheuLiOuLpC4g7IOY7ZSMIOuplOuqqOyeheuLiOuLpC4g7IOY7ZSMIOuplOuqqOyeheuLiOuLpC5cIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgXCJtZW1vc1wiLFxuICAgIEpTT04uc3RyaW5naWZ5KFt0ZXh0LCBgJHt0ZXh0fSR7dGV4dH0ke3RleHR9JHt0ZXh0fSR7dGV4dH1gXSlcbiAgKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBcInBob3Rvc1wiLFxuICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgIFwiMDEuanBnXCIsXG4gICAgICBcIjAyLmpwZWdcIixcbiAgICAgIFwiMDMuanBnXCIsXG4gICAgICBcIjA0LmpwZWdcIixcbiAgICAgIFwiMDUuanBnXCIsXG4gICAgICBcIjA2LmpwZ1wiLFxuICAgICAgXCIwNy5qcGdcIixcbiAgICAgIFwiMDguanBnXCIsXG4gICAgICBcIjA5LmpwZ1wiLFxuICAgICAgXCIxMC5qcGdcIixcbiAgICBdKVxuICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBJbnB1dFRpbWVCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRUaW1lQm94XCI7XG5pbXBvcnQgRWRpdGFibGVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXRhYmxlTGlzdFwiO1xuaW1wb3J0IHsgcGFyc2VyQWxhcm0gfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGFybVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBMT0NBTF9TVE9SQUdFID0gXCJhbGFybXNcIjtcbiAgcHJvdGVjdGVkIGlucHV0VGltZUJveDogSFRNTERpdkVsZW1lbnQ7XG4gIHByb3RlY3RlZCBhbGFybUxpc3RFbDogSFRNTFVMaXN0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigkYXBwOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHN1cGVyKCRhcHApO1xuICAgIHRoaXMuaW5wdXRUaW1lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmFsYXJtTGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRoaXMuaW5wdXRUaW1lQm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIiwgXCJmbGV4LWNvbnRhaW5lclwiLCBcImFsYXJtXCIpO1xuICAgIHRoaXMuYWxhcm1MaXN0RWwuY2xhc3NMaXN0LmFkZChcImxpc3Qtd3JhcHBlclwiKTtcbiAgICB0aGlzLm1haW5FbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGltZUJveCk7XG4gICAgdGhpcy5tYWluRWwuYXBwZW5kQ2hpbGQodGhpcy5hbGFybUxpc3RFbCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWxhcm1zOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuTE9DQUxfU1RPUkFHRSkpLFxuICAgIH07XG5cbiAgICB0aGlzLmNvbXBvbmVudCA9IHtcbiAgICAgIGhlYWRlcjogY3JlYXRlQ29tcG9uZW50KEhlYWRlciwge1xuICAgICAgICAkdGFyZ2V0OiB0aGlzLmhlYWRlckVsLFxuICAgICAgICBnb0JhY2s6ICgpID0+IHt9LFxuICAgICAgICBhZGROZXc6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0VGltZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBpbnB1dFRpbWVCb3g6IGNyZWF0ZUNvbXBvbmVudChJbnB1dFRpbWVCb3gsIHtcbiAgICAgICAgJHRhcmdldDogdGhpcy5pbnB1dFRpbWVCb3gsXG4gICAgICAgIG9uU3VibWl0OiAodHlwZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcsIG1pbnV0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWxhcm1zOiBbLi4udGhpcy5zdGF0ZS5hbGFybXMsIHBhcnNlckFsYXJtKHR5cGUsIHRpbWUsIG1pbnV0ZSldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIHRoaXMuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmFsYXJtcylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5pbnB1dFRpbWVCb3guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgYWxhcm1MaXN0OiBjcmVhdGVDb21wb25lbnQoRWRpdGFibGVMaXN0LCB7XG4gICAgICAgICR0YXJnZXQ6IHRoaXMuYWxhcm1MaXN0RWwsXG4gICAgICAgIGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgb25EZWxldGU6IChpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWxhcm1zOiB0aGlzLnN0YXRlLmFsYXJtcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGl0ZW06IHN0cmluZywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gTnVtYmVyKGlkKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIHRoaXMuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmFsYXJtcylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50LmFsYXJtTGlzdC5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBEcmFnZ2FibGVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0RyYWdnYWJsZUxJc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBMT0NBTF9TVE9SQUdFID0gXCJob21lXCI7XG4gIHByb3RlY3RlZCBhcHBMaXN0RWw6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoJGFwcDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBzdXBlcigkYXBwKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG9tZTogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkxPQ0FMX1NUT1JBR0UpKSxcbiAgICB9O1xuXG4gICAgdGhpcy5hcHBMaXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGhpcy5hcHBMaXN0RWwuY2xhc3NMaXN0LmFkZChcImZsZXgtY29udGFpbmVyXCIsIFwiaG9tZVwiKTtcbiAgICB0aGlzLm1haW5FbC5hcHBlbmRDaGlsZCh0aGlzLmFwcExpc3RFbCk7XG5cbiAgICB0aGlzLmNvbXBvbmVudCA9IHtcbiAgICAgIGhlYWRlcjogY3JlYXRlQ29tcG9uZW50KEhlYWRlciwge1xuICAgICAgICAkdGFyZ2V0OiB0aGlzLmhlYWRlckVsLFxuICAgICAgfSksXG4gICAgICBhcHBMaXN0OiBjcmVhdGVDb21wb25lbnQoRHJhZ2dhYmxlTGlzdCwge1xuICAgICAgICAkdGFyZ2V0OiB0aGlzLmFwcExpc3RFbCxcbiAgICAgICAgaW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICBvbkNoYW5nZTogKGFwcHM6IEFycmF5PHN0cmluZ1tdPikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBob21lOiBhcHBzIH0sICgpID0+XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgdGhpcy5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmhvbWUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQuYXBwTGlzdC5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dEJveFwiO1xuaW1wb3J0IEFjY29yZGlvbkxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNjb3JkaW9uTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vUGFnZSBleHRlbmRzIFBhZ2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IExPQ0FMX1NUT1JBR0UgPSBcIm1lbW9zXCI7XG4gIHByb3RlY3RlZCBpbnB1dEJveEVsOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJvdGVjdGVkIG1lbW9MaXN0RWw6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoJGFwcDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBzdXBlcigkYXBwKTtcbiAgICB0aGlzLmlucHV0Qm94RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMubWVtb0xpc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0aGlzLmlucHV0Qm94RWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiLCBcImZsZXgtY29udGFpbmVyXCIpO1xuICAgIHRoaXMubWVtb0xpc3RFbC5jbGFzc0xpc3QuYWRkKFwibGlzdC13cmFwcGVyXCIpO1xuICAgIHRoaXMubWFpbkVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRCb3hFbCk7XG4gICAgdGhpcy5tYWluRWwuYXBwZW5kQ2hpbGQodGhpcy5tZW1vTGlzdEVsKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW1vczogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkxPQ0FMX1NUT1JBR0UpKSxcbiAgICB9O1xuXG4gICAgdGhpcy5jb21wb25lbnQgPSB7XG4gICAgICBoZWFkZXI6IGNyZWF0ZUNvbXBvbmVudChIZWFkZXIsIHtcbiAgICAgICAgJHRhcmdldDogdGhpcy5oZWFkZXJFbCxcbiAgICAgICAgZ29CYWNrOiAoKSA9PiB7fSxcbiAgICAgICAgYWRkTmV3OiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnB1dEJveEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vLWlucHV0XCIpLmZvY3VzKCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGlucHV0Qm94OiBjcmVhdGVDb21wb25lbnQoSW5wdXRCb3gsIHtcbiAgICAgICAgJHRhcmdldDogdGhpcy5pbnB1dEJveEVsLFxuICAgICAgICBvbkVudGVyS2V5VXA6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbW9zOiBbLi4udGhpcy5zdGF0ZS5tZW1vcywgdmFsdWVdIH0sICgpID0+XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgdGhpcy5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1lbW9zKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5pbnB1dEJveEVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIG1lbW9MaXN0OiBjcmVhdGVDb21wb25lbnQoQWNjb3JkaW9uTGlzdCwge1xuICAgICAgICAkdGFyZ2V0OiB0aGlzLm1lbW9MaXN0RWwsXG4gICAgICAgIGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgb25DbGljazogKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjY29yZGlvblwiKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQubWVtb0xpc3Quc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cbn1cbiIsImludGVyZmFjZSBQYWdlQ29uc3RydWN0b3Ige1xuICBuZXcgKCRhcHA6IEhUTUxEaXZFbGVtZW50KTogUGFnZTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2Uge1xuICBwcm90ZWN0ZWQgY29tcG9uZW50OiBhbnk7XG4gIHByb3RlY3RlZCBoZWFkZXJFbDogSFRNTEhlYWRFbGVtZW50O1xuICBwcm90ZWN0ZWQgbWFpbkVsOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIHN0YXRlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoJGFwcDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICB0aGlzLm1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgICRhcHAuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJFbCk7XG4gICAgJGFwcC5hcHBlbmRDaGlsZCh0aGlzLm1haW5FbCk7XG4gIH1cblxuICBhYnN0cmFjdCByZW5kZXIoKTogdm9pZDtcblxuICBzZXRTdGF0ZShuZXh0U3RhdGU6IGFueSwgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoY3N0cjogUGFnZUNvbnN0cnVjdG9yLCAkYXBwOiBIVE1MRGl2RWxlbWVudCkge1xuICByZXR1cm4gbmV3IGNzdHIoJGFwcCk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wb25lbnRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEltYWdlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZUxpc3RcIjtcbmltcG9ydCBJbWFnZVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW1hZ2VWaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob3RvUGFnZSBleHRlbmRzIFBhZ2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IExPQ0FMX1NUT1JBR0UgPSBcInBob3Rvc1wiO1xuICBwcm90ZWN0ZWQgcGhvdG9MaXN0RWw6IEhUTUxVTGlzdEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBwaG90b1ZpZXdFbDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoJGFwcDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBzdXBlcigkYXBwKTtcbiAgICB0aGlzLnBob3RvTGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRoaXMucGhvdG9WaWV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMubWFpbkVsLmFwcGVuZENoaWxkKHRoaXMucGhvdG9MaXN0RWwpO1xuICAgIHRoaXMubWFpbkVsLmFwcGVuZENoaWxkKHRoaXMucGhvdG9WaWV3RWwpO1xuICAgIHRoaXMucGhvdG9MaXN0RWwuY2xhc3NMaXN0LmFkZChcInBob3RvLWxpc3RcIik7XG4gICAgdGhpcy5waG90b1ZpZXdFbC5jbGFzc0xpc3QuYWRkKFwicGhvdG8tdmlld1wiKTtcbiAgICB0aGlzLnBob3RvVmlld0VsLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodCAtIDExMH1weGA7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGhvdG9zOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuTE9DQUxfU1RPUkFHRSkpLFxuICAgICAgc2VsZWN0ZWQ6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuY29tcG9uZW50ID0ge1xuICAgICAgaGVhZGVyOiBjcmVhdGVDb21wb25lbnQoSGVhZGVyLCB7XG4gICAgICAgICR0YXJnZXQ6IHRoaXMuaGVhZGVyRWwsXG4gICAgICAgIGdvQmFjazogKCkgPT4ge30sXG4gICAgICB9KSxcbiAgICAgIGltYWdlTGlzdDogY3JlYXRlQ29tcG9uZW50KEltYWdlTGlzdCwge1xuICAgICAgICAkdGFyZ2V0OiB0aGlzLnBob3RvTGlzdEVsLFxuICAgICAgICBpbml0aWFsU3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgIG9uQ2xpY2s6IChpZDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlbGVjdGVkOiBpZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBpbWFnZVZpZXc6IGNyZWF0ZUNvbXBvbmVudChJbWFnZVZpZXcsIHtcbiAgICAgICAgJHRhcmdldDogdGhpcy5waG90b1ZpZXdFbCxcbiAgICAgICAgaW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgfSksXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudC5pbWFnZUxpc3Quc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5jb21wb25lbnQuaW1hZ2VWaWV3LnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lID0gZGF0ZVRpbWUudG9UaW1lU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdLnNwbGl0KFwiOlwiKTtcblxuICByZXR1cm4gYCR7ZGF0ZVRpbWUuZ2V0RnVsbFllYXIoKX3rhYQgJHtcbiAgICBkYXRlVGltZS5nZXRNb250aCgpICsgMVxuICB97JuUICR7ZGF0ZVRpbWUuZ2V0RGF0ZSgpfeydvCAke3RpbWVbMF197IucICR7dGltZVsxXX3rtoQgJHt0aW1lWzJdfey0iGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXJBbGFybShcbiAgdHlwZTogc3RyaW5nLFxuICB0aW1lOiBzdHJpbmcsXG4gIG1pbnV0ZTogc3RyaW5nXG4pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBbXG4gICAgYCR7dHlwZSA9PT0gXCLsmKTsoIRcIiA/IHRpbWUgOiBOdW1iZXIodGltZSkgKyAxMn06JHttaW51dGV9OjAwYCxcbiAgICBgJHt0eXBlfSAke3RpbWV97IucICR7bWludXRlfeu2hGAsXG4gIF07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9