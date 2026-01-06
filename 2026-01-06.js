function vowelCase(str) {

  // 結果用の変数を作っておく
  let result = "";

  for (let char of str) {
    // 母音かどうかチェック(大文字小文字を区別しない)
    if (/[aeiou]/i.test(char)) {
      // 母音なら大文字に
      result += char.toUpperCase();
    } else if (/[a-z]/i.test(char)) {
      // アルファベットで母音なら小文字に。([a-z]って書いてあるけど、上のIf文で弾かれたあとだから大丈夫！)
      result += char.toLowerCase();
    } else {
      // アルファベット以外ならそのまま
      result += char;
    }
  }

  return result;
}

// より効率的な方法
// 母音のセットを作成（高速なチェック用）
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
//   let result = "";
  
//   for (let char of str) {
//     if (vowels.has(char)) {
//       // 母音なら大文字に
//       result += char.toUpperCase();
//     } else if (/[a-zA-Z]/.test(char)) {
//       // アルファベットで母音でないなら小文字に
//       result += char.toLowerCase();
//     } else {
//       // アルファベット以外はそのまま
//       result += char;
//     }
//   }