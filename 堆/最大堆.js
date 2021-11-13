// 1.堆常用于解决第K个最大或最小元素一类的问题
// 2.js中常用数组来模拟堆
// 3.以广度优先遍历的形式来定义下标，如下：
//           1
//         /   \
//        2     3
//       / \   / \
//      4   5  6  7
// [1, 2, 3, 4, 5, 6, 7]
// 4.任意索引为index的节点，其左子节点的位置为2 * index + 1，其右子节点的位置为2 * index + 2；
// 5.任意索引为index的节点，其父节点的位置为（index - 1）/ 2 || 0
// 6.最大堆的定义是堆顶元素最大，对于任何节点来说，其子节点的值都比它小（最小堆相反）

class MaxHeap {
  constructor() {
    this.heap = []
  }

  /**
   * 交换位置
   * @param i
   * @param j
   */
  swap(i, j) {
    const TEMP = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = TEMP
  }

  /**
   * 上移，递归的和其父节点比较大小
   * @param i
   */
  moveUp(i) {
    if (i === 0) return
    const parentNodeIndex = this.getParentIndex(i)
    if (this.heap[parentNodeIndex] < this.heap[i]) {
      this.swap(parentNodeIndex, i)
      this.moveUp(parentNodeIndex)
    }
  }

  /**
   * 获取父节点的索引值
   * @param i
   * @returns {number}
   */
  getParentIndex(i) {
    return (i - 1) >> 1
  }

  /**
   * 插入新数值
   * @param val
   */
  insert(val) {
    this.heap.push(val)
    this.moveUp(this.heap.length - 1)
  }

  /**
   * 获取左边子节点的索引
   * @param i
   * @returns {number}
   */
  getLeftChildIndex(i) {
    return 2 * i + 1
  }

  /**
   * 获取右边子节点的索引
   * @param i
   * @returns {number}
   */
  getRightChildIndex(i) {
    return 2 * i + 2
  }

  /**
   * 下移函数（和其左右子节点比较大小）
   * @param i
   */
  moveDown(i) {
    if (i === this.heap.length - 1) return
    const leftChildIndex = this.getLeftChildIndex(i)
    const rightChildIndex = this.getRightChildIndex(i)
    if (this.heap[leftChildIndex] > this.heap[i]) {
      this.swap(leftChildIndex, i)
      this.moveDown(leftChildIndex)
    }
    if (this.heap[rightChildIndex] > this.heap[i]) {
      this.swap(rightChildIndex, i)
      this.moveDown(rightChildIndex)
    }
  }

  /**
   * 删除堆顶元素
   */
  delHeapHeader() {
    this.heap[0] = this.heap.pop()
    this.moveDown(0)
  }

  /**
   * 获取堆顶元素
   * @returns {*}
   */
  peek() {
    return this.heap[0]
  }

  /**
   * 获取堆的长度大小
   * @returns {number}
   */
  size() {
    return this.heap.length
  }
}

const h = new MaxHeap()
h.insert(3)
h.insert(8)
h.insert(5)
h.insert(2)
h.insert(1)
console.log(h)
h.delHeapHeader()
console.log(h)
