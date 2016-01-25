/*!
 *  sort.js - v0.0.1 - Mon Jan 25 2016 17:13:36 GMT-0500 (EST)
 *  https://github.com/mtraynham/sort.js.git
 *  Copyright 2014-2016 Matt Traynham <skitch920@gmail.com>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Sort"] = factory();
	else
		root["Sort"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _quicksort = __webpack_require__(1);
	
	Object.defineProperty(exports, 'quicksort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quicksort).default;
	  }
	});
	
	var _quicksortFunctional = __webpack_require__(3);
	
	Object.defineProperty(exports, 'quicksortFunctional', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quicksortFunctional).default;
	  }
	});
	
	var _quicksortInplace = __webpack_require__(4);
	
	Object.defineProperty(exports, 'quicksortInplace', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quicksortInplace).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _comparator = __webpack_require__(2);
	
	var concat = Array.prototype.concat;
	
	/**
	 * Returns a new array
	 */
	var quicksort = function quicksort(array) {
	    var lessThan = arguments.length <= 1 || arguments[1] === undefined ? _comparator.defaultLessThan : arguments[1];
	
	    if (array.length <= 1) {
	        return array;
	    }
	    var left = [],
	        right = [],
	        pivot = array[0],
	        i = 1,
	        length = array.length,
	        value = undefined;
	
	    for (i; i < length; i++) {
	        value = array[i];
	        if (lessThan(value, pivot)) {
	            left.push(value);
	        } else {
	            right.push(value);
	        }
	    }
	    return concat.call(quicksort(left), pivot, quicksort(right));
	};
	
	exports.default = quicksort;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var comparatorToLessThan = exports.comparatorToLessThan = function comparatorToLessThan(comparator) {
	    return function (a, b) {
	        return comparator(a, b) < 0;
	    };
	};
	
	var lessThanToComparator = exports.lessThanToComparator = function lessThanToComparator(lessThan) {
	    return function (a, b) {
	        return lessThan(a, b) ? -1 : !lessThan(b, a) ? 0 : 1;
	    };
	};
	
	var defaultComparator = exports.defaultComparator = function defaultComparator(a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	};
	
	var defaultLessThan = exports.defaultLessThan = function defaultLessThan(a, b) {
	    return a < b;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _comparator = __webpack_require__(2);
	
	var concat = Array.prototype.concat;
	
	/**
	 * A functional programming implementation of quicksort.
	 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
	 */
	var quicksortFunctional = function quicksortFunctional(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.defaultComparator : arguments[1];
	
	    if (array.length <= 1) {
	        return array;
	    }
	    var pivot = array[Math.round(array.length / 2)];
	    return concat.call(quicksortFunctional(array.filter(function (x) {
	        return comparator(x, pivot) < 0;
	    })), array.filter(function (x) {
	        return comparator(x, pivot) === 0;
	    }), quicksortFunctional(array.filter(function (x) {
	        return comparator(x, pivot) > 0;
	    })));
	};
	
	exports.default = quicksortFunctional;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _arraySwap = __webpack_require__(5);
	
	var _comparator = __webpack_require__(2);
	
	/**
	 * An in-place quicksort
	 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
	 */
	var quicksortInplace = function quicksortInplace(array) {
	    var lessThan = arguments.length <= 1 || arguments[1] === undefined ? _comparator.defaultLessThan : arguments[1];
	
	    var arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	    var quicksort = function quicksort(left, right) {
	        if (left < right) {
	            var pivot = array[left + right >> 1],
	                i = left,
	                j = right;
	            do {
	                while (lessThan(array[i], pivot)) {
	                    i++;
	                }
	                while (lessThan(pivot, array[j])) {
	                    j--;
	                }
	                if (i <= j) {
	                    arraySwap(i++, j--);
	                }
	            } while (i <= j);
	            quicksort(left, j);
	            quicksort(i, right);
	        }
	    };
	    quicksort(0, array.length - 1);
	};
	
	exports.default = quicksortInplace;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var arraySwap = exports.arraySwap = function arraySwap(array, i, j) {
	    var tmp = array[j];
	    array[j] = array[i];
	    array[i] = tmp;
	};
	
	var arraySwapPartial = exports.arraySwapPartial = function arraySwapPartial(array) {
	    return function (i, j) {
	        var tmp = array[j];
	        array[j] = array[i];
	        array[i] = tmp;
	    };
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sort.js.map