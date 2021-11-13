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
// 6.最小堆的定义是堆顶元素最小，对于任何节点来说，其子节点的值都比它大（最大堆相反）

class MinHeap {
  constructor() {
    this.heap = []
  }

  /**
   * 交换位置
   * @param i
   * @param j
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  /**
   * 获取父节点的索引
   * @param i
   * @returns {number}
   */
  getParentIndex(i) {
    return (i - 1) >> 1
  }

  /**
   * 上移函数，和其父节点比较大小
   * @param index
   */
  moveUp(index) {
    // 递归的终止条件（到堆顶最小元素即终止）
    if (index === 0) return
    // 获取父节点
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.moveUp(parentIndex)
    }
  }

  /**
   * 插入新值
   * @param val
   */
  insert(val) {
    // 1.先插入数组的末尾
    this.heap.push(val)
    // 2.和其父节点比较大小，如果比父节点小，则和父节点交换位置
    this.moveUp(this.heap.length - 1)
  }

  /**
   * 获取左子节点
   * @param i
   * @returns {number}
   */
  getLeftChildIndex(i) {
    return 2 * i + 1
  }

  /**
   * 获取右子节点
   * @param i
   * @returns {number}
   */
  getRightChildIndex(i) {
    return 2 * i + 2
  }
  /**
   * 下移函数，和其左右子节点比较大小
   * @param i
   */
  moveDown(i) {
    if (i === this.heap.length - 1) return
    const leftNodeIndex = this.getLeftChildIndex(i)
    const rightNodeIndex = this.getRightChildIndex(i)
    if (this.heap[leftNodeIndex] < this.heap[i]) {
      this.swap(leftNodeIndex, i)
      this.moveDown(leftNodeIndex)
    }
    if (this.heap[rightNodeIndex] < this.heap[i]) {
      this.swap(rightNodeIndex, i)
      this.moveDown(rightNodeIndex)
    }
  }
  /**
   * 删除堆顶元素（删除最小元素）
   */
  delHeapHeader() {
    // 把最后一个元素赋值给堆顶位置，这样可以在不破坏堆结构的情况下删除堆顶元素
    this.heap[0] = this.heap.pop()
    this.moveDown(0)
  }

  /**
   * 获取堆顶元素（最小元素）
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

const h = new MinHeap()
h.insert(3)
h.insert(6)
h.insert(5)
h.insert(1)
h.insert(2)
console.log(h)
h.delHeapHeader()
console.log(h)
