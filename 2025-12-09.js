function mostFrequent(arr) {
  // 1. Dictionary的なもの（オブジェクト）を作成
  const count = {};
  let maxCount = 0;
  let mostFrequentElement = arr[0]; // 初期値として最初の要素を設定
  
  // 2. For文で配列をループ
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    // 3. 要素が初めて出現したら1、既にあれば+1
    if (count[element] === undefined) {
      count[element] = 1;
    } else {
      count[element]++;
    }
    
    // 4. 最大出現回数を更新
    if (count[element] > maxCount) {
      maxCount = count[element];
      mostFrequentElement = element;
    }
  }
  
  return mostFrequentElement;
}