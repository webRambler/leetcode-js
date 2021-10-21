// 随机产生长度为num的数字数组
function generateArr (num) {
  const arr = []
  for (let i = 0; i < num; i++) {
    const randomNum = (Math.random() * num + .5) | 0
    arr.push(randomNum)
  }
  return arr
}

// 数组两元素互换位置
function swapArrMembers(list, index1, index2) {
  const TEMP = list[index1]
  list[index1] = list[index2]
  list[index2] = TEMP
}
