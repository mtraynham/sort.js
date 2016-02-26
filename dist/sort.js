/*!
 *  sort.js - v0.0.1 - Fri Feb 26 2016 01:27:09 GMT-0500 (EST)
 *  https://github.com/mtraynham/sort.js.git
 *  Copyright 2015-2016 Matt Traynham <skitch920@gmail.com>
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
	
	var _bubbleSort = __webpack_require__(1);
	
	Object.defineProperty(exports, 'bubbleSort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bubbleSort).default;
	  }
	});
	
	var _bubbleSortOptimized = __webpack_require__(4);
	
	Object.defineProperty(exports, 'bubbleSortOptimized', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bubbleSortOptimized).default;
	  }
	});
	
	var _heapSort = __webpack_require__(5);
	
	Object.defineProperty(exports, 'heapSort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_heapSort).default;
	  }
	});
	
	var _insertionSort = __webpack_require__(6);
	
	Object.defineProperty(exports, 'insertionSort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_insertionSort).default;
	  }
	});
	
	var _mergeSort = __webpack_require__(7);
	
	Object.defineProperty(exports, 'mergeSort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_mergeSort).default;
	  }
	});
	
	var _mergeSortInplace = __webpack_require__(8);
	
	Object.defineProperty(exports, 'mergeSortInplace', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_mergeSortInplace).default;
	  }
	});
	
	var _dartDualPivotQuicksort = __webpack_require__(9);
	
	Object.defineProperty(exports, 'dartDualPivotQuicksort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dartDualPivotQuicksort).default;
	  }
	});
	
	var _dualPivotQuicksort = __webpack_require__(10);
	
	Object.defineProperty(exports, 'dualPivotQuicksort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dualPivotQuicksort).default;
	  }
	});
	
	var _quicksort = __webpack_require__(11);
	
	Object.defineProperty(exports, 'quicksort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quicksort).default;
	  }
	});
	
	var _quicksortFunctional = __webpack_require__(12);
	
	Object.defineProperty(exports, 'quicksortFunctional', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quicksortFunctional).default;
	  }
	});
	
	var _quicksortInplace = __webpack_require__(13);
	
	Object.defineProperty(exports, 'quicksortInplace', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quicksortInplace).default;
	  }
	});
	
	var _selectionSort = __webpack_require__(14);
	
	Object.defineProperty(exports, 'selectionSort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selectionSort).default;
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
	exports.default = bubbleSort;
	
	var _arraySwap = __webpack_require__(2);
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Standard Bubble Sort
	 * Sometimes referred to as sinking sort, is a simple sorting algorithm that
	 * repeatedly steps through the list to be sorted, compares each pair of adjacent
	 * items and swaps them if they are in the wrong order. The pass through the list
	 * is repeated until no swaps are needed, which indicates that the list is sorted.
	 *
	 * Bubble sort has worst-case and average complexity both О(n^2), where n is the
	 * number of items being sorted.
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function bubbleSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array),
	        length = array.length,
	        i = undefined,
	        swapped = undefined;
	    // Repeat (do-while) until no item is swapped, indicating a sorted array.
	    do {
	        swapped = false;
	        // Step 1 to length initially, but length will be decremented til we
	        // reach the lower end of the array as items will "sink" to
	        // their positions and larger items will "bubble" to the top.
	        for (i = 1; i < length; i++) {
	            // If an item is less than it's lower position, move it down.
	            if (lessThan(array[i], array[i - 1])) {
	                arraySwap(i, i - 1);
	                // Indicate that we'll need another iteration as a swap occurred.
	                // Swap is a nice shortcut in the chance that no item needed to be moved,
	                // thus the array is sorted.
	                swapped = true;
	            }
	        }
	        // Decrementing our length will ignore items that have bubbled to the top.
	        length--;
	    } while (swapped);
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.arraySwap = arraySwap;
	exports.arraySwapPartial = arraySwapPartial;
	/**
	 * Given an array, swap the values at position i & j
	 * @param {Array<*>} array
	 * @param {Number} i
	 * @param {Number} j
	 */
	function arraySwap(array, i, j) {
	    var tmp = array[j];
	    array[j] = array[i];
	    array[i] = tmp;
	}
	
	/**
	 * Given an array, return a function that can swap the
	 * values at i & j
	 * @param {Array<*>} array
	 * @returns {Function}
	 */
	function arraySwapPartial(array) {
	    return function (i, j) {
	        var tmp = array[j];
	        array[j] = array[i];
	        array[i] = tmp;
	    };
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.comparatorToLessThan = comparatorToLessThan;
	exports.lessThanToComparator = lessThanToComparator;
	exports.reverse = reverse;
	exports.lexicographicComparator = lexicographicComparator;
	exports.numericComparator = numericComparator;
	/**
	 * Converts a comparator function to a lessThan function
	 * @param {Function} comparator
	 * @returns {Function}
	 */
	function comparatorToLessThan(comparator) {
	  return function (a, b) {
	    return comparator(a, b) < 0;
	  };
	}
	
	/**
	 * Converts a less than function to a comparator function
	 * @param {Function} lessThan
	 * @returns {Function}
	 */
	function lessThanToComparator(lessThan) {
	  return function (a, b) {
	    return lessThan(a, b) ? -1 : !lessThan(b, a) ? 0 : 1;
	  };
	}
	
	/**
	 * Reverses the inputs of a bi-function
	 * @param {Function} fn
	 * @returns {Function}
	 */
	function reverse(fn) {
	  return function (a, b) {
	    return fn(b, a);
	  };
	}
	
	/**
	 * A standard lexicographic comparator that returns a number:
	 * less that 0 denoting less than,
	 * equal to 0 denoting equals, and
	 * greater than 0 denoting greater than
	 * @param {*} a
	 * @param {*} b
	 * @returns {Number}
	 */
	function lexicographicComparator(a, b) {
	  return a < b ? -1 : a > b ? 1 : 0;
	}
	
	/**
	 * A numeric comparator that returns the subtraction
	 * of one number from another.
	 * @param {Number} a
	 * @param {Number} b
	 * @returns {Number}
	 */
	function numericComparator(a, b) {
	  return a - b;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = bubbleSortOptimized;
	
	var _arraySwap = __webpack_require__(2);
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Optimized Bubble Sort
	 * The bubble sort algorithm can be easily optimized by observing that the
	 * n-th pass finds the n-th largest element and puts it into its final place.
	 * So, the inner loop can avoid looking at the last n-1 items when running
	 * for the n-th time
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function bubbleSortOptimized(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array),
	        n = array.length,
	        i = undefined,
	        newN = undefined;
	    do {
	        // Instead of the swapped boolean flag, we can track the last n item that bubbled to the top.
	        // Checking if n > 0 will suggest that some portion of the array was swapped
	        // but also denote that it can be ignored in the next iteration of comparisons.
	        newN = 0;
	        for (i = 1; i < n; i++) {
	            if (lessThan(array[i], array[i - 1])) {
	                arraySwap(i, i - 1);
	                newN = i;
	            }
	        }
	        n = newN;
	    } while (n !== 0);
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = heapSort;
	
	var _arraySwap = __webpack_require__(2);
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Standard Heap Sort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function heapSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	
	    /**
	     * Heapify the array
	     * @param {Number} index
	     * @param {Number} heapSize
	     */
	    function heapify(index, heapSize) {
	        var largest = index,
	            left = 2 * index + 1,
	            right = left + 1;
	        if (left < heapSize && lessThan(array[largest], array[left])) {
	            largest = left;
	        }
	        if (right < heapSize && lessThan(array[largest], array[right])) {
	            largest = right;
	        }
	        if (largest !== index) {
	            arraySwap(index, largest);
	            heapify(largest, heapSize);
	        }
	    }
	    var length = array.length,
	        i = Math.floor(length / 2);
	    while (i--) {
	        heapify(i, length);
	    }
	    i = length;
	    while (i--) {
	        arraySwap(0, i);
	        heapify(0, i);
	    }
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = insertionSort;
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Standard Insertion Sort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function insertionSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        length = array.length,
	        value = undefined,
	        i = undefined,
	        j = undefined;
	    for (i = 0; i < length; i++) {
	        value = array[i];
	        for (j = i - 1; j > -1 && lessThan(value, array[j]); j--) {
	            array[j + 1] = array[j];
	        }
	        array[j + 1] = value;
	    }
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mergeSort;
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Standard Merge Sort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function mergeSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator);
	    function merge(left, right) {
	        var result = [];
	        while (left.length > 0 && right.length > 0) {
	            result.push(lessThan(left[0], right[0]) ? left.shift() : right.shift());
	        }
	        return result.concat(left.length ? left : right);
	    }
	
	    function _mergeSort(array) {
	        if (array.length <= 1) {
	            return array;
	        }
	        var mid = Math.floor(array.length / 2);
	        return merge(_mergeSort(array.slice(0, mid)), _mergeSort(array.slice(mid)));
	    }
	
	    return _mergeSort(array);
	}
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mergeSortInplace;
	
	var _arraySwap = __webpack_require__(2);
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Standard Merge Sort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function mergeSortInplace(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	
	    function merge(min, max, mid) {
	        var i = undefined,
	            j = undefined;
	        for (i = min; i < mid; i++) {
	            if (lessThan(array[mid], array[i])) {
	                arraySwap(i, mid);
	                for (j = mid; j < max; j++) {
	                    if (lessThan(array[j + 1], array[j])) {
	                        arraySwap(j, j + 1);
	                    }
	                }
	            }
	        }
	    }
	
	    function _mergeSort(min, max) {
	        var range = max - min;
	        if (range === 0) {
	            return;
	        } else if (range === 1) {
	            if (lessThan(array[max], array[min])) {
	                arraySwap(min, max);
	            }
	        } else {
	            var mid = Math.floor((min + max) / 2);
	            _mergeSort(min, mid);
	            _mergeSort(++mid, max);
	            merge(min, max, mid);
	        }
	    }
	    _mergeSort(0, array.length - 1);
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = dartDualPivotQuicksort;
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Simple Dual Pivot quicksort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function dartDualPivotQuicksort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    function quicksort(left, right) {
	        if (right - left < 0) {
	            return;
	        }
	
	        var sixth = (right - left + 1) / 6 | 0,
	            index1 = left + sixth,
	            index5 = right - sixth,
	            index3 = left + right >> 1,
	            index2 = index3 - sixth,
	            index4 = index3 + sixth;
	
	        var el1 = array[index1],
	            el2 = array[index2],
	            el3 = array[index3],
	            el4 = array[index4],
	            el5 = array[index5];
	
	        if (comparator(el1, el2) > 0) {
	            var _ref = [el2, el1];
	            el1 = _ref[0];
	            el2 = _ref[1];
	        }
	        if (comparator(el4, el5) > 0) {
	            var _ref2 = [el4, el5];
	            el4 = _ref2[0];
	            el5 = _ref2[1];
	        }
	        if (comparator(el1, el3) > 0) {
	            var _ref3 = [el3, el1];
	            el1 = _ref3[0];
	            el3 = _ref3[1];
	        }
	        if (comparator(el2, el3) > 0) {
	            var _ref4 = [el3, el2];
	            el2 = _ref4[0];
	            el3 = _ref4[1];
	        }
	        if (comparator(el1, el4) > 0) {
	            var _ref5 = [el4, el1];
	            el1 = _ref5[0];
	            el4 = _ref5[1];
	        }
	        if (comparator(el3, el4) > 0) {
	            var _ref6 = [el4, el3];
	            el3 = _ref6[0];
	            el4 = _ref6[1];
	        }
	        if (comparator(el2, el5) > 0) {
	            var _ref7 = [el5, el2];
	            el2 = _ref7[0];
	            el5 = _ref7[1];
	        }
	        if (comparator(el2, el3) > 0) {
	            var _ref8 = [el3, el2];
	            el2 = _ref8[0];
	            el3 = _ref8[1];
	        }
	        if (comparator(el4, el5) > 0) {
	            var _ref9 = [el5, el4];
	            el4 = _ref9[0];
	            el5 = _ref9[1];
	        }
	
	        var pivot1 = el2,
	            pivot2 = el4;
	
	        array[index1] = el1;
	        array[index3] = el3;
	        array[index5] = el5;
	
	        array[index2] = array[left];
	        array[index4] = array[right];
	
	        var less = left + 1,
	            great = right - 1;
	
	        var pivotsEqual = comparator(pivot1, pivot2) === 0;
	        if (pivotsEqual) {
	            var pivot = pivot1;
	            for (var k = less; k <= great; ++k) {
	                var ak = array[k],
	                    comp = comparator(ak, pivot);
	                if (comp < 0) {
	                    if (k !== less) {
	                        array[k] = array[less];
	                        array[less] = ak;
	                    }
	                    less++;
	                } else if (comp > 0) {
	                    while (true) {
	                        comp = comparator(array[great], pivot);
	                        if (comp > 0) {
	                            great--;
	                        } else if (comp < 0) {
	                            array[k] = array[less];
	                            array[less++] = array[great];
	                            array[great--] = ak;
	                            break;
	                        } else {
	                            array[k] = array[great];
	                            array[great--] = ak;
	                            break;
	                        }
	                    }
	                }
	            }
	        } else {
	            for (var k = less; k <= great; k++) {
	                var ak = array[k],
	                    compPivot1 = comparator(ak, pivot1);
	                if (compPivot1 < 0) {
	                    if (k !== less) {
	                        array[k] = array[less];
	                        array[less] = ak;
	                    }
	                    less++;
	                } else {
	                    var compPivot2 = comparator(ak, pivot2);
	                    if (compPivot2 > 0) {
	                        while (true) {
	                            var comp = comparator(array[great], pivot2);
	                            if (comp > 0) {
	                                great--;
	                                if (great < k) {
	                                    break;
	                                }
	                            } else {
	                                comp = comparator(array[great], pivot1);
	                                if (comp < 0) {
	                                    array[k] = array[less];
	                                    array[less++] = array[great];
	                                    array[great--] = ak;
	                                } else {
	                                    array[k] = array[great];
	                                    array[great--] = ak;
	                                }
	                                break;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	
	        array[left] = array[less - 1];
	        array[less - 1] = pivot1;
	        array[right] = array[great + 1];
	        array[great + 1] = pivot2;
	
	        quicksort(left, less - 2);
	        quicksort(great + 2, right);
	
	        if (pivotsEqual) {
	            return;
	        }
	
	        if (less < index1 && great > index5) {
	            while (comparator(array[less], pivot1) === 0) {
	                less++;
	            }
	            while (comparator(array[great], pivot2) === 0) {
	                great--;
	            }
	
	            for (var k = less; k <= great; k++) {
	                var ak = array[k],
	                    compPivot1 = comparator(ak, pivot1);
	                if (compPivot1 === 0) {
	                    if (k !== less) {
	                        array[k] = array[less];
	                        array[less] = ak;
	                    }
	                    less++;
	                } else {
	                    var compPivot2 = comparator(ak, pivot2);
	                    if (compPivot2 === 0) {
	                        while (true) {
	                            var comp = comparator(array[great], pivot2);
	                            if (comp === 0) {
	                                great--;
	                                if (great < k) {
	                                    break;
	                                }
	                            } else {
	                                comp = comparator(array[great], pivot1);
	                                if (comp < 0) {
	                                    array[k] = array[less];
	                                    array[less++] = array[great];
	                                    array[great--] = ak;
	                                } else {
	                                    array[k] = array[great];
	                                    array[great--] = ak;
	                                }
	                                break;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        quicksort(less, great);
	    }
	    quicksort(0, array.length - 1);
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = dualPivotQuicksort;
	
	var _arraySwap = __webpack_require__(2);
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Standard quicksort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function dualPivotQuicksort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	    function quicksort(left, right) {
	        if (left < right) {
	            if (lessThan(array[right], array[left])) {
	                arraySwap(left, right);
	            }
	            var pivot1 = array[left],
	                pivot2 = array[right],
	                l = left + 1,
	                g = right - 1,
	                k = l;
	            for (k; k <= g; k++) {
	                if (lessThan(array[k], pivot1)) {
	                    arraySwap(k, l++);
	                } else if (!lessThan(array[k], pivot2)) {
	                    while (lessThan(pivot2, array[g]) && k < g) {
	                        --g;
	                    }
	                    arraySwap(k, g--);
	                    if (lessThan(array[k], pivot1)) {
	                        arraySwap(k, l++);
	                    }
	                }
	            }
	            arraySwap(left, --l);
	            arraySwap(right, ++g);
	            quicksort(left, l - 1);
	            quicksort(l + 1, g - 1);
	            quicksort(g + 1, right);
	        }
	    }
	    quicksort(0, array.length - 1);
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = quicksort;
	
	var _comparator = __webpack_require__(3);
	
	var concat = Array.prototype.concat;
	
	/**
	 * Standard quicksort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function quicksort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator);
	    function _quicksort(array) {
	        if (array.length <= 1) {
	            return array;
	        }
	        var left = [],
	            right = [],
	            index = 0,
	            length = array.length,
	            pivot = array[0],
	            value = undefined;
	
	        while (++index < length) {
	            value = array[index];
	            if (lessThan(value, pivot)) {
	                left.push(value);
	            } else {
	                right.push(value);
	            }
	        }
	        return concat.call(_quicksort(left), pivot, _quicksort(right));
	    }
	    return _quicksort(array);
	}
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = quicksortFunctional;
	
	var _comparator = __webpack_require__(3);
	
	var concat = Array.prototype.concat;
	
	/**
	 * A functional programming implementation of quicksort.
	 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function quicksortFunctional(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    function quicksort(array) {
	        if (array.length <= 1) {
	            return array;
	        }
	        var pivot = array[Math.floor(array.length / 2)];
	        return concat.call(quicksort(array.filter(function (x) {
	            return comparator(x, pivot) < 0;
	        })), array.filter(function (x) {
	            return comparator(x, pivot) === 0;
	        }), quicksort(array.filter(function (x) {
	            return comparator(x, pivot) > 0;
	        })));
	    }
	    return quicksort(array);
	}
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = quicksortInplace;
	
	var _arraySwap = __webpack_require__(2);
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * An in-place quicksort
	 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function quicksortInplace(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	    function quicksort(left, right) {
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
	    }
	    quicksort(0, array.length - 1);
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = selectionSort;
	
	var _arraySwap = __webpack_require__(2);
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Standard Selection Sort
	 * @param {Array<*>} array
	 * @param {Function} [comparator=lexicographicComparator]
	 * @returns {Array<*>}
	 */
	function selectionSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.lexicographicComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array),
	        length = array.length,
	        min = undefined,
	        i = undefined,
	        j = undefined;
	
	    for (i = 0; i < length; i++) {
	        min = i;
	        for (j = i + 1; j < length; j++) {
	            if (lessThan(array[j], array[min])) {
	                min = j;
	            }
	        }
	        if (i !== min) {
	            arraySwap(i, min);
	        }
	    }
	    return array;
	}
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sort.js.map