/*!
 *  sort.js - v0.0.1 - Thu Apr 07 2016 20:26:04 GMT-0400 (EDT)
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
	
	var _sortingNetworkDualPivotQuicksort = __webpack_require__(9);
	
	Object.defineProperty(exports, 'sortingNetworkDualPivotQuicksort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_sortingNetworkDualPivotQuicksort).default;
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function bubbleSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	    var length = array.length,
	        i = void 0,
	        swapped = void 0;
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
	 * @return {undefined}
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
	 * @return {Function}
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
	exports.naturalComparator = naturalComparator;
	exports.numericComparator = numericComparator;
	/**
	 * Converts a comparator function to a lessThan function
	 * @param {Function} comparator
	 * @return {Function}
	 */
	function comparatorToLessThan(comparator) {
	  return function (a, b) {
	    return comparator(a, b) < 0;
	  };
	}
	
	/**
	 * Converts a less than function to a comparator function
	 * @param {Function} lessThan
	 * @return {Function}
	 */
	function lessThanToComparator(lessThan) {
	  return function (a, b) {
	    return lessThan(a, b) ? -1 : lessThan(b, a) ? 1 : 0;
	  };
	}
	
	/**
	 * Reverses the inputs of a bi-function
	 * @param {Function} fn
	 * @return {Function}
	 */
	function reverse(fn) {
	  return function (a, b) {
	    return fn(b, a);
	  };
	}
	
	/**
	 * A standard natural comparator that returns a number:
	 * less that 0 denoting less than,
	 * equal to 0 denoting equals, and
	 * greater than 0 denoting greater than
	 * @param {*} a
	 * @param {*} b
	 * @return {Number}
	 */
	function naturalComparator(a, b) {
	  return a < b ? -1 : a > b ? 1 : 0;
	}
	
	/**
	 * A numeric comparator that returns the subtraction
	 * of one number from another.
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Number}
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function bubbleSortOptimized(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	    var n = array.length,
	        i = void 0,
	        newN = void 0;
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function heapSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	
	    /**
	     * Heapify the array
	     * @param {Number} index
	     * @param {Number} heapSize
	     * @return {undefined}
	     */
	    function heapify(index, heapSize) {
	        var left = 2 * index + 1,
	            right = left + 1;
	        var largest = index;
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
	    var length = array.length;
	    var i = Math.floor(length / 2);
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function insertionSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        length = array.length;
	    var i = void 0,
	        j = void 0;
	    for (i = 0; i < length; i++) {
	        var value = array[i];
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function mergeSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator);
	    /**
	     * Merge
	     * @param {Array<*>} left
	     * @param {Array<*>} right
	     * @return {Array<*>}
	     */
	    function merge(left, right) {
	        var result = [];
	        while (left.length > 0 && right.length > 0) {
	            result.push(lessThan(left[0], right[0]) ? left.shift() : right.shift());
	        }
	        return result.concat(left.length ? left : right);
	    }
	
	    /**
	     * Merge
	     * @param {Array<*>} mergeArray
	     * @return {Array<*>}
	     */
	    function _mergeSort(mergeArray) {
	        if (mergeArray.length <= 1) {
	            return mergeArray;
	        }
	        var mid = Math.floor(mergeArray.length / 2);
	        return merge(_mergeSort(mergeArray.slice(0, mid)), _mergeSort(mergeArray.slice(mid)));
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function mergeSortInplace(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	
	    /**
	     * Merge
	     * @param {Number} min
	     * @param {Number} max
	     * @param {Number} mid
	     * @return {undefined}
	     */
	    function merge(min, max, mid) {
	        var i = void 0,
	            j = void 0;
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
	
	    /**
	     * Merge Sort
	     * @param {Number} min
	     * @param {Number} max
	     * @return {undefined}
	     */
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
	exports.default = sortingNetworkDualPivotQuicksort;
	
	var _comparator = __webpack_require__(3);
	
	/**
	 * Sorting Network Dual Pivot Quicksort (with an Insertion Sort for arrays
	 * less than 32 items long)
	 * Ported from:
	 * @link https://android.googlesource.com/platform/libcore/+/android-6.0.1_r16/luni/src/main/java/java/util/DualPivotQuicksort.java
	 * @param {Array<*>} array
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function sortingNetworkDualPivotQuicksort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var INSERTION_SORT_THRESHOLD = 32;
	    /**
	     * Simple insertion sort
	     * @param {Number} left
	     * @param {Number} right
	     * @return {undefined}
	     */
	    function insertionSort(left, right) {
	        for (var i = left + 1; i <= right; i++) {
	            var el = array[i];
	            var j = i;
	            while (j > left && comparator(array[j - 1], el) > 0) {
	                array[j] = array[j - 1];
	                j--;
	            }
	            array[j] = el;
	        }
	    }
	
	    /**
	     * Dual pivot quicksort with sorting network
	     * @param {Number} left
	     * @param {Number} right
	     * @return {undefined}
	     */
	    function quicksort(left, right) {
	        if (right - left < INSERTION_SORT_THRESHOLD) {
	            insertionSort(left, right);
	            return;
	        }
	
	        var sixth = (right - left + 1) / 6 | 0,
	            index1 = left + sixth,
	            index5 = right - sixth,
	            index3 = left + right >>> 1,
	            index2 = index3 - sixth,
	            index4 = index3 + sixth;
	
	        var el1 = array[index1],
	            el2 = array[index2],
	            el3 = array[index3],
	            el4 = array[index4],
	            el5 = array[index5];
	
	        var t = void 0;
	
	        if (comparator(el1, el2) > 0) {
	            t = el1;
	            el1 = el2;
	            el2 = t;
	        }
	        if (comparator(el4, el5) > 0) {
	            t = el4;
	            el4 = el5;
	            el5 = t;
	        }
	        if (comparator(el1, el3) > 0) {
	            t = el1;
	            el1 = el3;
	            el3 = t;
	        }
	        if (comparator(el2, el3) > 0) {
	            t = el2;
	            el2 = el3;
	            el3 = t;
	        }
	        if (comparator(el1, el4) > 0) {
	            t = el1;
	            el1 = el4;
	            el4 = t;
	        }
	        if (comparator(el3, el4) > 0) {
	            t = el3;
	            el3 = el4;
	            el4 = t;
	        }
	        if (comparator(el2, el5) > 0) {
	            t = el2;
	            el2 = el5;
	            el5 = t;
	        }
	        if (comparator(el2, el3) > 0) {
	            t = el2;
	            el2 = el3;
	            el3 = t;
	        }
	        if (comparator(el4, el5) > 0) {
	            t = el4;
	            el4 = el5;
	            el5 = t;
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
	
	        var pivotsDiffer = comparator(pivot1, pivot2) !== 0;
	        if (pivotsDiffer) {
	            outer1: for (var k = less; k <= great; k++) {
	                var ak = array[k];
	                if (comparator(ak, pivot1) < 0) {
	                    if (k !== less) {
	                        array[k] = array[less];
	                        array[less] = ak;
	                    }
	                    less++;
	                } else if (comparator(ak, pivot2) > 0) {
	                    while (comparator(array[great], pivot2) > 0) {
	                        if (great-- === k) {
	                            break outer1;
	                        }
	                    }
	                    if (comparator(array[great], pivot1) < 0) {
	                        array[k] = array[less];
	                        array[less++] = array[great];
	                        array[great--] = ak;
	                    } else {
	                        array[k] = array[great];
	                        array[great--] = ak;
	                    }
	                }
	            }
	        } else {
	            for (var k = less; k <= great; ++k) {
	                var ak = array[k],
	                    comp = comparator(ak, pivot1);
	                if (comp < 0) {
	                    if (k !== less) {
	                        array[k] = array[less];
	                        array[less] = ak;
	                    }
	                    less++;
	                } else if (comp > 0) {
	                    while (comparator(array[great], pivot1) > 0) {
	                        great--;
	                    }
	                    if (comparator(array[great], pivot1) < 0) {
	                        array[k] = array[less];
	                        array[less++] = array[great];
	                        array[great--] = ak;
	                    } else {
	                        array[k] = array[great];
	                        array[great--] = ak;
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
	
	        if (!pivotsDiffer) {
	            return;
	        }
	
	        if (less < index1 && great > index5) {
	            while (comparator(array[less], pivot1) === 0) {
	                less++;
	            }
	            while (comparator(array[great], pivot2) === 0) {
	                great--;
	            }
	
	            outer2: for (var k = less; k <= great; k++) {
	                var ak = array[k];
	                if (comparator(ak, pivot2) === 0) {
	                    while (comparator(array[great], pivot2) === 0) {
	                        if (great-- === k) {
	                            break outer2;
	                        }
	                    }
	                    if (comparator(array[great], pivot1) === 0) {
	                        array[k] = array[less];
	                        array[less] = pivot1;
	                    } else {
	                        array[k] = array[great];
	                    }
	                    array[great--] = pivot2;
	                } else if (comparator(ak, pivot1) === 0) {
	                    array[k] = array[less];
	                    array[less++] = pivot1;
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function dualPivotQuicksort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	    /**
	     * Dual Pivot Quicksort
	     * @param {Number} left
	     * @param {Number} right
	     * @return {undefined}
	     */
	    function quicksort(left, right) {
	        if (left < right) {
	            if (lessThan(array[right], array[left])) {
	                arraySwap(left, right);
	            }
	            var pivot1 = array[left],
	                pivot2 = array[right];
	            var l = left + 1,
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function quicksort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator);
	    /**
	     * Simple standard quicksort
	     * @param {Array<*>} quicksortArray
	     * @return {Array<*>}
	     */
	    function _quicksort(quicksortArray) {
	        if (quicksortArray.length <= 1) {
	            return quicksortArray;
	        }
	        var left = [],
	            right = [],
	            length = quicksortArray.length,
	            pivot = quicksortArray[0];
	        var index = 0;
	
	        while (++index < length) {
	            var value = quicksortArray[index];
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function quicksortFunctional(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    /**
	     * Simple functional quicksort
	     * @param {Array<*>} array
	     * @return {Array<*>}
	     */
	    function quicksort(quicksortArray) {
	        if (quicksortArray.length <= 1) {
	            return quicksortArray;
	        }
	        var pivot = quicksortArray[Math.floor(quicksortArray.length / 2)];
	        return concat.call(quicksort(quicksortArray.filter(function (x) {
	            return comparator(x, pivot) < 0;
	        })), quicksortArray.filter(function (x) {
	            return comparator(x, pivot) === 0;
	        }), quicksort(quicksortArray.filter(function (x) {
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function quicksortInplace(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array);
	    /**
	     * Simple in place quicksort
	     * @param {Number} left
	     * @param {Number} right
	     * @return {undefined}
	     */
	    function quicksort(left, right) {
	        if (left < right) {
	            var pivot = array[left + right >> 1];
	            var i = left,
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
	 * @param {Function} [comparator=naturalComparator]
	 * @return {Array<*>}
	 */
	function selectionSort(array) {
	    var comparator = arguments.length <= 1 || arguments[1] === undefined ? _comparator.naturalComparator : arguments[1];
	
	    var lessThan = (0, _comparator.comparatorToLessThan)(comparator),
	        arraySwap = (0, _arraySwap.arraySwapPartial)(array),
	        length = array.length;
	    var min = void 0,
	        i = void 0,
	        j = void 0;
	
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