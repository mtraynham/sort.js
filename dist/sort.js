(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
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
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _default = __webpack_require__(1);
	
	exports.quicksort = _interopRequire(_default);
	
	var _default2 = __webpack_require__(2);
	
	exports.quicksortFunctional = _interopRequire(_default2);
	
	var _default3 = __webpack_require__(3);
	
	exports.quicksortInplace = _interopRequire(_default3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _defaultLessThan = __webpack_require__(4);
	
	var concat = Array.prototype.concat;
	
	/**
	 * Returns a new array
	 */
	var quicksort = (function (_quicksort) {
	    function quicksort(_x) {
	        return _quicksort.apply(this, arguments);
	    }
	
	    quicksort.toString = function () {
	        return _quicksort.toString();
	    };
	
	    return quicksort;
	})(function (array) {
	    var lessThan = arguments[1] === undefined ? _defaultLessThan.defaultLessThan : arguments[1];
	
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
	});
	
	exports['default'] = quicksort;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _defaultComparator = __webpack_require__(4);
	
	var concat = Array.prototype.concat;
	
	/**
	 * A functional programming implementation of quicksort.
	 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
	 */
	var quicksortFunctional = (function (_quicksortFunctional) {
	    function quicksortFunctional(_x) {
	        return _quicksortFunctional.apply(this, arguments);
	    }
	
	    quicksortFunctional.toString = function () {
	        return _quicksortFunctional.toString();
	    };
	
	    return quicksortFunctional;
	})(function (array) {
	    var comparator = arguments[1] === undefined ? _defaultComparator.defaultComparator : arguments[1];
	
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
	});
	
	exports['default'] = quicksortFunctional;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _arraySwapPartial = __webpack_require__(5);
	
	var _defaultLessThan = __webpack_require__(4);
	
	/**
	 * An in-place quicksort
	 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
	 */
	var quicksortInplace = function quicksortInplace(array) {
	    var lessThan = arguments[1] === undefined ? _defaultLessThan.defaultLessThan : arguments[1];
	
	    var arraySwap = _arraySwapPartial.arraySwapPartial(array);
	    var quicksort = (function (_quicksort) {
	        function quicksort(_x, _x2) {
	            return _quicksort.apply(this, arguments);
	        }
	
	        quicksort.toString = function () {
	            return _quicksort.toString();
	        };
	
	        return quicksort;
	    })(function (left, right) {
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
	    });
	    quicksort(0, array.length - 1);
	};
	
	exports['default'] = quicksortInplace;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var comparatorToLessThan = function comparatorToLessThan(comparator) {
	    return function (a, b) {
	        return comparator(a, b) < 0;
	    };
	};
	
	exports.comparatorToLessThan = comparatorToLessThan;
	var lessThanToComparator = function lessThanToComparator(lessThan) {
	    return function (a, b) {
	        return lessThan(a, b) ? -1 : !lessThan(b, a) ? 0 : 1;
	    };
	};
	
	exports.lessThanToComparator = lessThanToComparator;
	var defaultComparator = function defaultComparator(a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	};
	
	exports.defaultComparator = defaultComparator;
	var defaultLessThan = function defaultLessThan(a, b) {
	    return a < b;
	};
	exports.defaultLessThan = defaultLessThan;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var arraySwap = function arraySwap(array, i, j) {
	    var tmp = array[j];
	    array[j] = array[i];
	    array[i] = tmp;
	};
	
	exports.arraySwap = arraySwap;
	var arraySwapPartial = function arraySwapPartial(array) {
	    return function (i, j) {
	        var tmp = array[j];
	        array[j] = array[i];
	        array[i] = tmp;
	    };
	};
	exports.arraySwapPartial = arraySwapPartial;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sort.js.map