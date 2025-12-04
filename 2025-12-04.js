function countPermutations(str) {
  // 階乗計算の補助関数
  function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  // 文字カウント
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // 分子（n!）を計算
  const numerator = factorial(str.length);
  
  // 分母（各文字の階乗の積）を計算
  let denominator = 1;
  for (let char in charCount) {
    denominator *= factorial(charCount[char]);
  }
  
  return numerator / denominator;
}