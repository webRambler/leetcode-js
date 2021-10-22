function insertSort(list) {
  const len = list.length
  for (let outer = 1; outer < len; outer++) {
    const TEMP = list[outer]
    let inner = outer
    while (inner > 0 && list[inner - 1] > TEMP) {
      list[inner] = list[inner - 1]
      inner--
    }
    list[inner] = TEMP
  }
  return list
}

function shellSort(list) {
  const len = list.length
  let gap = len / 2 | 0
  while (gap >= 1) {
    for (let outer = gap; outer < len; outer++) {
      let inner = outer
      const TEMP = list[outer]
      while (inner - gap >= 0 && list[inner - gap] > TEMP) {
        list[inner] = list[inner - gap]
        inner -= gap
      }
      list[inner] = TEMP
    }
    gap = gap / 2 | 0
  }
  return list
}

const list1 = generateArr(100)
const list2 = generateArr(100)

console.time('insert')
insertSort(list1)
console.timeEnd('insert')

console.time('shell')
shellSort(list2)
console.timeEnd('shell')

console.log(list1)
console.log(list2)