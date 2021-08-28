class Max {
  /**
   * Finds the maximum sum of the elements of a subarray in a given array
   * using the Kadane's algorithm.
   * For example, for the sequence of values -2, 1, -3, 4, -1, 2, 1, -5, 4
   * the contiguous subarray with the largest sum is 4, -1, 2, 1, with sum 6.
   * <br><br>
   * Time complexity: O(N).
   *
   * @example
   * var max = require('path-to-algorithms/src/searching/'+
   * 'maximum-subarray').maxSubarray;
   * console.log(max([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
   *
   * @public
   * @module searching/maximum-subarray
   * @param {Array} array Input array.
   * @return {Number} Maximum sum of the elements of a subarray.
   */
  maxSubarray(array: Array<number>): number {
    var currentMax = 0;
    var max = 0;

    for (let val of array) {
      currentMax = Math.max(0, currentMax + val); //to handle -ve numbers as well
      max = Math.max(max, currentMax);
    }
    return max;
  }
}
