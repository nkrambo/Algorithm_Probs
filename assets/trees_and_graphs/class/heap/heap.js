
/**
* Binary Heaps
* Min-Heaps and Max-Heaps
*
* Definition: A binary heap is a complete binary tree (that is, totally filled other
* than the rightmost elements on the last level).
*
* A min-heap is where each node is smaller than it's children, with the
* root always being the smallest.
*
* A max-heap is where each node is larger than it's children, with the root always
* being the largest. Other than that, there are no other special rules for inserting,
* like we have with a BST, for example.
*
* Heaps are commonly used in priority queues.
*
* Often it is more time and space efficient to implement a binary heap
* using a dynamic array instead of objects.
*/

class Heap {

  /**
   * Minimum heap constructor.
   *
   * @public
   * @constructor
   * @param {Function} fn Function used for comparison between nodes.
   */

  constructor(fn) {
    this._heap = [];
    if (typeof fn === 'function') {
      this._compare = fn;
    } else {
      this._compare = (a, b) => a - b;
    }
  }

  /**
   * Returns current value which is on the top of the heap.
   * Complexity: O(1).
   *
   * @public
   * @return {Number|Object} Current top value.
   */

  top() {
    return this._heap[0];
  }

  /**
   * Adds new element to the heap.
   * Complexity: O(log N).
   *
   * Notes: We always insert an element in the bottom right (last position), to maintain the complete
   * tree property and 'bubble up' it up to the correct position, swapping nodes as needed.
   *
   * @public
   * @param {Number|Object} value Value which will be inserted.
   * @return {Number} Index of the inserted value.
   */

   add(value) {
     this._heap.push(value);
     this.changeKey(this._heap.length - 1, value);
   }

 /**
  * Changes the key.
  * Complexity: O(log N).
  *
  * @public
  * @param {Number} index Index of the value which should be changed.
  * @param {Number|Object} value New value according to the index.
  * @return {Number} New position of the element.
  */

  changeKey(index, value) {
    const elem = this._heap[index];
    let parent = Math.floor(index / 2);
    let temp;

    if (elem !== undefined) {
      while (parent >= 0 && this._compare(elem, this._heap[parent]) > 0) {
        temp = this._heap[parent];
        this._heap[parent] = elem;
        this._heap[index] = temp;
        index = parent;
        parent = Math.floor(parent / 2);
      }
    }
    return parent;
  };

  /**
   * Exchange indexes with start index given as argument
   * to turn the tree into a valid heap, using recusrion. On a single call
   * this method maintains only a single "branch" of the heap.
   *
   * Notes: This operation is also known as 'sinking'. The idea being, when the
   * extract() method is called, we replace the root with the last element and 'sink'
   * it down the tree into it's correct position. This maintains the 'heap' property.
   *
   * Time complexity: O(log N).
   *
   * @private
   * @param {Number} index The parent.
   */

  _heapify(index) {
    let extr = index;
    let temp;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < this._heap.length &&
        this._compare(this._heap[left], this._heap[index]) > 0) {
      extr = left;
    }

    if (right < this._heap.length &&
        this._compare(this._heap[right], this._heap[index]) > 0) {
      extr = right;
    }

    if (index !== extr) {
      temp = this._heap[index];
      this._heap[index] = this._heap[extr];
      this._heap[extr] = temp;
      this._heapify(extr);
    }
  };

  /**
   * Removes and returns the current extremum value
   * which is on the top of the heap.
   * Complexity: O(log N).
   *
   * @public
   * @returns {Number|Object} The extremum value.
   */

  extract() {
    if (this.isEmpty()) {
      throw 'The heap is already empty!';
    }
    const root = this._heap.shift();
    this._heapify(0);
    return root;
  };

  /**
   * Returs collection
   *
   * @public
   * @returns {Array} Array of all the values in the heap
   */

  getCollection() {
    return this._heap;
  }

  /**
   * Checks or heap is empty.
   *
   * @public
   * @returns {Boolean} Returns true if heap is empty.
   */

  isEmpty() {
    return this._heap.length === 0;
  }
}

export default Heap;