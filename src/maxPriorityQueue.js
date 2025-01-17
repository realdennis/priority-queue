/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const { MaxHeap, CustomHeap } = require('@datastructures-js/heap');
const { PriorityQueue } = require('./priorityQueue');

/**
 * @class MaxPriorityQueue
 * @extends PriorityQueue
 */
class MaxPriorityQueue extends PriorityQueue {
  constructor(options) {
    super(options);
    if (this._compare) {
      this._heap = new CustomHeap(this._compare);
    } else {
      this._heap = new MaxHeap();
    }
  }
}

exports.MaxPriorityQueue = MaxPriorityQueue;
