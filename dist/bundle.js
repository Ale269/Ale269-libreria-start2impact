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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Archivo\\\", sans-serif;\\n}\\n\\n.block {\\n  overflow: hidden;\\n}\\n\\nbody {\\n  background-color: #FAFAFA;\\n}\\nbody .background-image {\\n  width: 600px;\\n}\\nbody .remove-image {\\n  display: none;\\n}\\nbody .navigation {\\n  background-color: #FAFAFA;\\n  box-shadow: 0px 5px 8px #B6B6B6;\\n}\\nbody .container-for-description-element {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nbody .selector-container {\\n  margin: 0 auto;\\n  max-width: 1000px;\\n  display: flex;\\n  border-radius: 20px;\\n  height: 120px;\\n  margin-bottom: 70px;\\n}\\nbody .selector-container .logo {\\n  width: 20%;\\n  display: flex;\\n  justify-content: left;\\n  align-items: center;\\n}\\nbody .selector-container .logo img {\\n  width: 80px;\\n  display: block;\\n  cursor: pointer;\\n}\\nbody .selector-container form {\\n  display: flex;\\n  width: 60%;\\n  justify-content: center;\\n  align-items: center;\\n}\\nbody .selector-container form .form-container {\\n  display: block;\\n  max-width: 600px;\\n  margin: 0 auto;\\n}\\nbody .selector-container form .form-container input {\\n  background-color: #fcfcfc;\\n  outline: none;\\n  padding: 15px;\\n  font-size: 1rem;\\n  border: 2px solid #232323;\\n  border-radius: 5px;\\n  font-family: \\\"Archivo\\\", sans-serif;\\n  max-width: 300px;\\n  margin-right: 20px;\\n  transition: ease-in-out 0.2s;\\n}\\nbody .selector-container form .form-container input:hover {\\n  border: 2px solid #EA610E;\\n}\\nbody .selector-container form .form-container button {\\n  padding: 15px;\\n  font-family: \\\"Archivo\\\", sans-serif;\\n  font-weight: 700;\\n  border: none;\\n  color: #FAFAFA;\\n  width: 80px;\\n  border-radius: 5px;\\n  background-color: #232323;\\n  transition: ease-in-out 0.2s;\\n}\\nbody .selector-container form .form-container button:hover {\\n  background-color: #EA610E;\\n  color: #232323;\\n}\\nbody .selector-container form .form-container button:active {\\n  background-color: #F79C65;\\n}\\nbody .selector-container .spacing {\\n  width: 20%;\\n}\\nbody .container {\\n  margin: 0 auto;\\n  max-width: 1000px;\\n}\\nbody .cover {\\n  position: fixed;\\n  height: 100vh;\\n  width: 100%;\\n  top: 0;\\n  left: 0;\\n  z-index: 1;\\n  background-color: #FAFAFA;\\n  opacity: 0.8;\\n}\\nbody .Open-library-link {\\n  color: #EA610E;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\nbody .Open-library-link:hover {\\n  border-bottom: 1px solid #EA610E;\\n}\\nbody .book-description-container {\\n  width: 400px;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 99;\\n  background-color: #232323;\\n  padding: 20px;\\n  border-radius: 10px;\\n}\\nbody .book-description-container h3 {\\n  color: #EA610E;\\n  font-size: 1.2rem;\\n  margin-bottom: 10px;\\n}\\nbody .book-description-container p {\\n  color: #FAFAFA;\\n  font-size: 1rem;\\n}\\nbody .library-container {\\n  display: grid;\\n  gap: 30px;\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n  margin-bottom: 100px;\\n}\\nbody .library-container .alert {\\n  margin: 30px 0 30px 0;\\n  text-align: center;\\n  color: #EA610E;\\n  font-size: 1.6rem;\\n}\\nbody .library-container .suggestion {\\n  text-align: center;\\n  color: #232323;\\n  font-size: 1rem;\\n}\\nbody .library-container .book-container {\\n  background-color: #232323;\\n  padding: 30px;\\n  border-radius: 10px;\\n  height: 280px;\\n  cursor: pointer;\\n}\\nbody .library-container .book-container h3 {\\n  color: #FAFAFA;\\n  line-height: 1.6rem;\\n  font-size: 1.4rem;\\n  font-weight: 700;\\n  margin-bottom: 10px;\\n}\\nbody .library-container .book-container h5 {\\n  color: #EA610E;\\n  font-size: 0.8rem;\\n  font-weight: 300;\\n  margin-bottom: 3px;\\n}\\nbody .library-container .book-container:hover {\\n  background-color: #EA610E;\\n  transition: ease-in-out 0.2s;\\n}\\nbody .library-container .book-container:hover h3 {\\n  color: #232323;\\n  transition: ease-in 0.2s;\\n}\\nbody .library-container .book-container:hover h5 {\\n  color: #fcfcfc;\\n  transition: ease-in 0.2s;\\n}\\n\\n@media screen and (max-width: 1100px) {\\n  body .book-description-container {\\n    width: 350px;\\n  }\\n  body .remove-image {\\n    display: none;\\n  }\\n  body .navigation {\\n    padding: 0 30px 0 30px;\\n  }\\n  body .container {\\n    padding: 0 30px 0 30px;\\n  }\\n}\\n@media screen and (max-width: 710px) {\\n  body .background-image {\\n    display: block;\\n    width: 100%;\\n  }\\n  body .remove-image {\\n    display: none;\\n  }\\n  body .selector-container .logo {\\n    width: 20%;\\n  }\\n  body .selector-container .logo img {\\n    width: 60px;\\n    display: block;\\n    cursor: pointer;\\n  }\\n  body .selector-container form {\\n    width: 80%;\\n    justify-content: end;\\n    -webkit-justify-content: flex-end;\\n  }\\n  body .selector-container form .form-container {\\n    margin: 0;\\n  }\\n  body .selector-container form .form-container input {\\n    max-width: 150px;\\n    padding: 10px 5px;\\n    margin-right: 10px;\\n  }\\n  body .selector-container form .form-container button {\\n    width: 50px;\\n  }\\n  body .selector-container .spacing {\\n    width: 0%;\\n  }\\n}\\n@media screen and (max-width: 350px) {\\n  body .library-container {\\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n  }\\n  body .remove-image {\\n    display: none;\\n  }\\n  body .book-description-container {\\n    width: 230px;\\n  }\\n  body .selector-container .logo {\\n    width: 30%;\\n  }\\n  body .selector-container .logo img {\\n    width: 60px;\\n    display: block;\\n    cursor: pointer;\\n  }\\n  body .selector-container form {\\n    width: 70%;\\n    justify-content: end;\\n  }\\n  body .selector-container form .form-container {\\n    margin: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n  }\\n  body .selector-container form .form-container input {\\n    max-width: 120px;\\n    padding: 10px 5px;\\n    font-size: 0.8rem;\\n    margin-right: 0px;\\n    margin-bottom: 10px;\\n  }\\n  body .selector-container form .form-container button {\\n    width: 50px;\\n  }\\n  body .selector-container .spacing {\\n    width: 0%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./src/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/javascript/api.js":
/*!*******************************!*\
  !*** ./src/javascript/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetBook)\n/* harmony export */ });\nclass GetBook {\r\n    static getList = async function(url) {\r\n        return fetch(url)\r\n        .then(response => {\r\n            if (!response.ok) {\r\n                return Promise.reject()\r\n            }else {\r\n                return response.json()\r\n            }\r\n            })\r\n        .then(data => {\r\n            return data.works;\r\n        }).catch(() => {\r\n            return \"error\";\r\n        })\r\n    };\r\n\r\n    static getDescription = async function(url) {\r\n        return fetch(url)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if(typeof data.description == \"object\" || data.description == undefined){\r\n                return \"Description is not available for this book\";\r\n            }\r\n            return data.description;\r\n        })\r\n    }\r\n};\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./src/javascript/api.js?");

/***/ }),

/***/ "./src/javascript/displayer.js":
/*!*************************************!*\
  !*** ./src/javascript/displayer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisplayResult)\n/* harmony export */ });\n/* harmony import */ var _domElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElement.js */ \"./src/javascript/domElement.js\");\n\r\n\r\nclass DisplayResult {\r\n\r\n    static displayBooks = function (arrayResult) {\r\n\r\n        DisplayResult.clearPage();\r\n\r\n        if(arrayResult === \"error\" || arrayResult.length === 0){\r\n\r\n            let div = document.createElement(\"div\");\r\n            _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].libraryContainer.append(div);\r\n\r\n            let alert = document.createElement(\"h3\");\r\n            alert.classList.add(\"alert\");\r\n            alert.textContent = \"No book matches\";\r\n\r\n            let suggestion = document.createElement(\"h5\");\r\n            suggestion.classList.add(\"suggestion\");\r\n            suggestion.textContent = \"Please try looking for another category\";       \r\n\r\n            div.append(alert);\r\n            alert.after(suggestion);\r\n\r\n            return;\r\n        }\r\n\r\n        for(let i=0; i<arrayResult.length; i++){\r\n\r\n            let div = document.createElement(\"div\");\r\n            div.classList.add(\"book-container\");\r\n            div.setAttribute(\"data-book\", arrayResult[i].key);\r\n            _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].libraryContainer.append(div);\r\n\r\n            let title = document.createElement(\"h3\");\r\n            title.textContent = arrayResult[i].title;\r\n            div.append(title);\r\n\r\n            let numberOfAuthor = arrayResult[i].authors.length;\r\n            if(numberOfAuthor>8){numberOfAuthor=8};\r\n\r\n            for(let j=0; j<numberOfAuthor; j++){\r\n                let author = document.createElement(\"h5\");\r\n                author.textContent = arrayResult[i].authors[j].name;\r\n                title.after(author);\r\n                \r\n                if(j == 7){\r\n                    let endPoint = document.createElement(\"h5\");\r\n                    endPoint.textContent = \"...\";\r\n                    div.append(endPoint);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    };\r\n\r\n    static displayDescription = function (bookDescription) {\r\n        let cover = document.createElement(\"div\");\r\n        cover.classList.add(\"cover\");\r\n\r\n        let descriptionContainer = document.createElement(\"div\");\r\n        descriptionContainer.classList.add(\"book-description-container\");\r\n\r\n        let descriptionTitle = document.createElement(\"h3\");\r\n        descriptionTitle.textContent = \"Description\";\r\n        let description = document.createElement(\"p\");\r\n\r\n        if(bookDescription.length <= 1300){\r\n            description.textContent = bookDescription;\r\n        }else{\r\n            const newDescritpion = bookDescription.substring(0, 1300);\r\n            description.innerHTML = newDescritpion + \"...\" + '<a target=\"_blank\" class=\"Open-library-link\" href=\"https://openlibrary.org/\">(read more on Open Library).</a>'\r\n        }\r\n    \r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.prepend(cover);\r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].body.classList.add(\"block\");\r\n        cover.before(descriptionContainer);\r\n        descriptionContainer.append(descriptionTitle);\r\n        descriptionTitle.after(description);\r\n    };\r\n\r\n    static resetDescription = function(event) {\r\n        if(event.target.classList.contains(\"cover\")){\r\n            _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.innerHTML = '<img class=\"background-image remove-image\" src=\"./img/background-image.svg\">';\r\n            _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].body.classList.remove(\"block\"); \r\n        }else{return};\r\n        \r\n    }\r\n\r\n\r\n    static loading = function() {\r\n        let loading = document.createElement(\"h5\");\r\n        loading.textContent = \"Loading...\"; \r\n        loading.classList.add(\"suggestion\");\r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].libraryContainer.append(loading);\r\n    }\r\n\r\n    static clearPage = function () {\r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].libraryContainer.innerHTML = \"\";\r\n    }\r\n\r\n    static removeImage = function() {\r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].image.classList.add(\"remove-image\");\r\n    }\r\n\r\n    static addImage = function() {\r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getImage();\r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].image.setAttribute(\"class\", \"background-image\");\r\n    }\r\n};\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./src/javascript/displayer.js?");

/***/ }),

/***/ "./src/javascript/domElement.js":
/*!**************************************!*\
  !*** ./src/javascript/domElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet domElement = {\r\n    body: document.querySelector(\"body\"),\r\n    libraryContainer: document.querySelector(\".library-container\"),\r\n    inputField: document.getElementById(\"libro\"),\r\n    searchBtn: document.querySelector(\"button\"),\r\n    form: document.querySelector(\"form\"),\r\n    logo: document.querySelector(\".logo\"),\r\n    container: document.querySelector(\".container-for-description-element\"),\r\n    image: document.querySelector(\".background-image\"),\r\n    getImage(){domElement.image = document.querySelector(\".background-image\")},\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElement);\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./src/javascript/domElement.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElement.js */ \"./src/javascript/domElement.js\");\n/* harmony import */ var _displayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayer.js */ \"./src/javascript/displayer.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/javascript/api.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet DomControll = (() => {\r\n\r\n    _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].libraryContainer.addEventListener(\"click\", callApi);\r\n    _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchBtn.addEventListener(\"click\", searchCategory);\r\n    document.onkeydown = function (e) {\r\n        if(_domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputField.value == \"\"){return};\r\n        if(e.key === \"Enter\"){\r\n            searchCategory();\r\n        }\r\n    }\r\n    _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.addEventListener(\"submit\", (e) => {e.preventDefault()});\r\n    _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logo.addEventListener(\"click\", () => {\r\n        _displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearPage();\r\n        _displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addImage();\r\n    });\r\n    document.addEventListener(\"click\", (event) => {_displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetDescription(event)});\r\n\r\n    function searchCategory() {\r\n        _displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeImage();\r\n        _displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearPage();\r\n        _displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loading();\r\n\r\n        let field = _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputField.value;\r\n        field = field.toLowerCase();\r\n        field = field.replace(/\\s/g, '');\r\n        _api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getList(`https://openlibrary.org/subjects/${field}.json`).then((data) => {_displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayBooks(data);});  \r\n        _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputField.value = null;\r\n    }\r\n\r\n    function callApi(event) {\r\n        if(event.target.classList.contains(\"book-container\")){\r\n            let key = event.target.dataset.book;\r\n            _api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getDescription(`https://openlibrary.org${key}.json`).then((result) => {_displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayDescription(result)});\r\n            \r\n        }\r\n        else if(event.target == undefined || event.target.classList.contains(\"library-container\") || event.target.classList.contains(\"alert\") || event.target.classList.contains(\"suggestion\")){\r\n            return;\r\n        }else{\r\n            let key = event.target.parentNode.dataset.book;\r\n            _api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getDescription(`https://openlibrary.org${key}.json`).then((result) => {_displayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayDescription(result)});\r\n        }\r\n    }\r\n\r\n    return {\r\n        domElement: _domElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    }\r\n})();\n\n//# sourceURL=webpack://ale269-libreria-start2impact/./src/javascript/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;