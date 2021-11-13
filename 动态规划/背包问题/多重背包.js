// 所谓多重背包问题就是所有的物品可以取有限次

// 有几样物品容量分别为 A = [2,3,5,7],对应的物品件数为 N = [3, 2, 5, 4], 对应的价值分别为 V = [1,5,2,4]，背包的体积为10，请问你能拿的所有物品的最大价值是多少

// 解法：动态规划
// dp[i][j]代表当前容量为 j 时,装下前 i 种物品中某些物品的最大价值(一个物品可能取多次)
// 状态转移方程:
//           dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - k * A[i]] + k * V[i], dp[i][j])

/**
 * 多重背包可装的物品的最大价值
 * @param A 物品对应的容积 []
 * @param N 物品对应的数量 []
 * @param V 物品对应的价值 []
 * @param bagV 背包的容积 number
 */
function MutipleBagMaxV(A, N, V, bagV) {
  const n = A.length
  const dp = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(bagV + 1).fill(0)
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= bagV; j++) {
      const num = N[i - 1]
      const n1 = bagV / A[i - 1] || 0
      let kMax = Math.min(num, n1)
      for (let k = 1; k <= kMax; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j], j - k * A[i - 1] >= 0 ? dp[i - 1][j - k * A[i - 1]] + k * V[i - 1] : 0)
      }
    }
  }
  console.log(dp, 9119)
  return dp[n][bagV]
}

console.log(MutipleBagMaxV([2, 3, 5, 7], [3, 2, 5, 4], [1, 5, 2, 4], 10));
