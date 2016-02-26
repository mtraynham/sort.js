class Sort {
    private function dualPivotQuickSort() {
        // Compute indices of five evenly spaced elements
        int sixth = (right - left + 1) / 6;
        int e1 = left + sixth;
        int e5 = right - sixth;
        int e3 = (left + right) >>> 1; // The midpoint
        int e4 = e3 + sixth;
        int e2 = e3 - sixth;
        // Sort these elements using a 5-element sorting network
        double ae1 = a[e1], ae2 = a[e2], ae3 = a[e3], ae4 = a[e4], ae5 = a[e5];
        if (ae1 > ae2) {
            double t = ae1;
            ae1 = ae2;
            ae2 = t;
        }
        if (ae4 > ae5) {
            double t = ae4;
            ae4 = ae5;
            ae5 = t;
        }
        if (ae1 > ae3) {
            double t = ae1;
            ae1 = ae3;
            ae3 = t;
        }
        if (ae2 > ae3) {
            double t = ae2;
            ae2 = ae3;
            ae3 = t;
        }
        if (ae1 > ae4) {
            double t = ae1;
            ae1 = ae4;
            ae4 = t;
        }
        if (ae3 > ae4) {
            double t = ae3;
            ae3 = ae4;
            ae4 = t;
        }
        if (ae2 > ae5) {
            double t = ae2;
            ae2 = ae5;
            ae5 = t;
        }
        if (ae2 > ae3) {
            double t = ae2;
            ae2 = ae3;
            ae3 = t;
        }
        if (ae4 > ae5) {
            double t = ae4;
            ae4 = ae5;
            ae5 = t;
        }
        a[e1] = ae1;
        a[e3] = ae3;
        a[e5] = ae5;
        /*
         * Use the second and fourth of the five sorted elements as pivots.
         * These values are inexpensive approximations of the first and
         * second terciles of the array. Note that pivot1 <= pivot2.
         *
         * The pivots are stored in local variables, and the first and
         * the last of the elements to be sorted are moved to the locations
         * formerly occupied by the pivots. When partitioning is complete,
         * the pivots are swapped back into their final positions, and
         * excluded from subsequent sorting.
         */
        double pivot1 = ae2;
        a[e2] = a[left];
        double pivot2 = ae4;
        a[e4] = a[right];
        // Pointers
        int less = left + 1; // The index of first element of center part
        int great = right - 1; // The index before first element of right part
        boolean pivotsDiffer = (pivot1 != pivot2);
        if (pivotsDiffer) {
            /*
             * Partitioning:
             *
             *   left part         center part                    right part
             * +------------------------------------------------------------+
             * | < pivot1  |  pivot1 <= && <= pivot2  |    ?    |  > pivot2 |
             * +------------------------------------------------------------+
             *              ^                          ^       ^
             *              |                          |       |
             *             less                        k     great
             *
             * Invariants:
             *
             *              all in (left, less)   < pivot1
             *    pivot1 <= all in [less, k)     <= pivot2
             *              all in (great, right) > pivot2
             *
             * Pointer k is the first index of ?-part
             */
            outer:
            for (int k = less; k <= great; k++) {
                double ak = a[k];
                if (ak < pivot1) { // Move a[k] to left part
                    if (k != less) {
                        a[k] = a[less];
                        a[less] = ak;
                    }
                    less++;
                } else if (ak > pivot2) { // Move a[k] to right part
                    while (a[great] > pivot2) {
                        if (great-- == k) {
                            break outer;
                        }
                    }
                    if (a[great] < pivot1) {
                        a[k] = a[less];
                        a[less++] = a[great];
                        a[great--] = ak;
                    } else { // pivot1 <= a[great] <= pivot2
                        a[k] = a[great];
                        a[great--] = ak;
                    }
                }
            }
        } else { // Pivots are equal
            /*
             * Partition degenerates to the traditional 3-way,
             * or "Dutch National Flag", partition:
             *
             *   left part   center part            right part
             * +----------------------------------------------+
             * |  < pivot  |  == pivot  |    ?    |  > pivot  |
             * +----------------------------------------------+
             *              ^            ^       ^
             *              |            |       |
             *             less          k     great
             *
             * Invariants:
             *
             *   all in (left, less)   < pivot
             *   all in [less, k)     == pivot
             *   all in (great, right) > pivot
             *
             * Pointer k is the first index of ?-part
             */
            for (int k = less; k <= great; k++) {
                double ak = a[k];
                if (ak == pivot1) {
                    continue;
                }
                if (ak < pivot1) { // Move a[k] to left part
                    if (k != less) {
                        a[k] = a[less];
                        a[less] = ak;
                    }
                    less++;
                } else { // (a[k] > pivot1) -  Move a[k] to right part
                    /*
                     * We know that pivot1 == a[e3] == pivot2. Thus, we know
                     * that great will still be >= k when the following loop
                     * terminates, even though we don't test for it explicitly.
                     * In other words, a[e3] acts as a sentinel for great.
                     */
                    while (a[great] > pivot1) {
                        great--;
                    }
                    if (a[great] < pivot1) {
                        a[k] = a[less];
                        a[less++] = a[great];
                        a[great--] = ak;
                    } else { // a[great] == pivot1
                        a[k] = pivot1;
                        a[great--] = ak;
                    }
                }
            }
        }
        // Swap pivots into their final positions
        a[left] = a[less - 1];
        a[less - 1] = pivot1;
        a[right] = a[great + 1];
        a[great + 1] = pivot2;
        // Sort left and right parts recursively, excluding known pivot values
        doSort(a, left, less - 2);
        doSort(a, great + 2, right);
        /*
         * If pivot1 == pivot2, all elements from center
         * part are equal and, therefore, already sorted
         */
        if (!pivotsDiffer) {
            return;
        }
        /*
         * If center part is too large (comprises > 2/3 of the array),
         * swap internal pivot values to ends
         */
        if (less < e1 && great > e5) {
            while (a[less] == pivot1) {
                less++;
            }
            while (a[great] == pivot2) {
                great--;
            }
            /*
             * Partitioning:
             *
             *   left part       center part                   right part
             * +----------------------------------------------------------+
             * | == pivot1 |  pivot1 < && < pivot2  |    ?    | == pivot2 |
             * +----------------------------------------------------------+
             *              ^                        ^       ^
             *              |                        |       |
             *             less                      k     great
             *
             * Invariants:
             *
             *              all in (*, less)  == pivot1
             *     pivot1 < all in [less, k)   < pivot2
             *              all in (great, *) == pivot2
             *
             * Pointer k is the first index of ?-part
             */
            outer:
            for (int k = less; k <= great; k++) {
                double ak = a[k];
                if (ak == pivot2) { // Move a[k] to right part
                    while (a[great] == pivot2) {
                        if (great-- == k) {
                            break outer;
                        }
                    }
                    if (a[great] == pivot1) {
                        a[k] = a[less];
                        a[less++] = pivot1;
                    } else { // pivot1 < a[great] < pivot2
                        a[k] = a[great];
                    }
                    a[great--] = pivot2;
                } else if (ak == pivot1) { // Move a[k] to left part
                    a[k] = a[less];
                    a[less++] = pivot1;
                }
            }
        }
        // Sort center part recursively, excluding known pivot values
        doSort(a, less, great);
    }
}
}