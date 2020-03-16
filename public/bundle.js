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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/createMonster.js":
/*!*********************************!*\
  !*** ./client/createMonster.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderMonsters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderMonsters */ \"./client/renderMonsters.js\");\n// const loadMonsters = require(\"./loadMonsters\");\n\n\nconst createMonster = async newMonster => {\n  const response = await window.fetch(\"/api/monsters\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(newMonster) // Serializing newMonster\n  });\n  console.log(\"response:\", response);\n  await Object(_renderMonsters__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMonster);\n\n\n//# sourceURL=webpack:///./client/createMonster.js?");

/***/ }),

/***/ "./client/loadMonsters.js":
/*!********************************!*\
  !*** ./client/loadMonsters.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// const axios = require(\"axios\");\n\nconst loadMonsters = async () => {\n  const response = await window.fetch(\"/api/monsters\");\n  const monsters = await response.json();\n  // console.log(\"response\", response);\n  console.log(\"monsters\", monsters);\n  return monsters;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMonsters);\n\n\n//# sourceURL=webpack:///./client/loadMonsters.js?");

/***/ }),

/***/ "./client/main.js":
/*!************************!*\
  !*** ./client/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMonster */ \"./client/createMonster.js\");\n/* harmony import */ var _renderMonsters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMonsters */ \"./client/renderMonsters.js\");\n\n\n\nconst refreshMonstersBtn = document.getElementById(\"refresh-monsters\");\nconst createMonsterForm = document.getElementById(\"new-monster-form\");\n\nObject(_renderMonsters__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nasync function handleFormSubmit(event) {\n  event.preventDefault();\n  const name = event.target.querySelector('input[name=\"name\"]').value;\n  const priceInCents = event.target.querySelector('input[name=\"price\"]').value;\n  await Object(_createMonster__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ name, priceInCents });\n}\n\nrefreshMonstersBtn.onclick = _renderMonsters__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\ncreateMonsterForm.onsubmit = handleFormSubmit;\n\n\n//# sourceURL=webpack:///./client/main.js?");

/***/ }),

/***/ "./client/renderMonsters.js":
/*!**********************************!*\
  !*** ./client/renderMonsters.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadMonsters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMonsters */ \"./client/loadMonsters.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./client/utils.js\");\n\n\n\nconsole.log(_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].majorGreeting())\n\nconst monsterContainer = document.getElementById(\"monster-container\");\n\nasync function renderMonsters() {\n  const monsters = await Object(_loadMonsters__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  monsterContainer.innerHTML = \"\";\n  monsters.forEach(monster => {\n    const monsterBox = document.createElement(\"DIV\");\n    monsterBox.classList.add(\"monster-box\");\n    monsterBox.innerHTML = `\n    <h2>${monster.name}</h2>\n    <img src=\"https://robohash.org/${monster.name}?set=set2\">\n    <div>${Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"formatDollars\"])(monster.priceInCents)} / hour</div>\n    `;\n    monsterContainer.appendChild(monsterBox);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderMonsters);\n\n\n//# sourceURL=webpack:///./client/renderMonsters.js?");

/***/ }),

/***/ "./client/utils.js":
/*!*************************!*\
  !*** ./client/utils.js ***!
  \*************************/
/*! exports provided: formatDollars, sayHello, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDollars\", function() { return formatDollars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sayHello\", function() { return sayHello; });\nconst formatDollars = cents => {\n  return (cents / 100).toLocaleString(\"en-US\", {\n    style: \"currency\",\n    currency: \"USD\"\n  });\n};\n\nconst sayHello = () => {\n  console.log(\"HELLO!\")\n}\n\nfunction majorGreeting() {\n  console.log(\"HELLO from majorGreeting!\")\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (majorGreeting);\n\n\n//# sourceURL=webpack:///./client/utils.js?");

/***/ })

/******/ });