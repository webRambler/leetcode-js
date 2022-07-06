var duplicateZeros = function(arr) {
  const n = arr.length
  if (n < 2) return
  let i = 0, right = 1
  while (i < n - 1) {
    if (arr[i] === 0) {
      arr[i + 1] = 0
    }
  }
  console.log(arr, 99966)
};

duplicateZeros([1,0,2,3,0,4,5,0])