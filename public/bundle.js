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

/***/ "./client/loadMonsters.js":
/*!********************************!*\
  !*** ./client/loadMonsters.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const loadMonsters = async () => {\n  const response = await window.fetch(\"/api/monsters\");\n  const monsters = await response.json();\n  console.log(\"monsters\", monsters);\n  return monsters;\n};\n\nmodule.exports = loadMonsters;\n\n\n//# sourceURL=webpack:///./client/loadMonsters.js?");

/***/ }),

/***/ "./client/main.js":
/*!************************!*\
  !*** ./client/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const loadMonsters = __webpack_require__(/*! ./loadMonsters */ \"./client/loadMonsters.js\");\nconst { formatDollars } = __webpack_require__(/*! ./utils */ \"./client/utils.js\");\n\nconst monsterContainer = document.getElementById(\"monster-container\");\nconst refreshMonstersBtn = document.getElementById(\"refresh-monsters\");\n\nasync function renderMonsters() {\n  const monsters = await loadMonsters();\n\n  monsterContainer.innerHTML = \"\";\n  monsters.forEach(monster => {\n    const monsterBox = document.createElement(\"DIV\");\n    monsterBox.classList.add(\"monster-box\");\n    if (monster.inCart) {\n      monsterBox.classList.add(\"in-cart\");\n    }\n    monsterBox.innerHTML = `\n    <h2>${monster.name}</h2>\n    <img src=\"https://robohash.org/${monster.name}?set=set2\">\n    <div>${formatDollars(monster.priceInCents)} / hour</div>\n    `;\n    monsterContainer.appendChild(monsterBox);\n  });\n}\n\nrefreshMonstersBtn.onclick = renderMonsters;\n\nrenderMonsters();\n\n\n//# sourceURL=webpack:///./client/main.js?");

/***/ }),

/***/ "./client/utils.js":
/*!*************************!*\
  !*** ./client/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const formatDollars = cents => {\n  return (cents / 100).toLocaleString(\"en-US\", {\n    style: \"currency\",\n    currency: \"USD\"\n  });\n};\n\nmodule.exports = {\n  formatDollars\n}\n\n\n//# sourceURL=webpack:///./client/utils.js?");

/***/ })

/******/ });