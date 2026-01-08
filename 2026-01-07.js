function parseUnorderedList(markdown) {

  // 1. 改行で分割して配列に
  const lines = markdown.split('\n');

  // 2. 各ラインを処理(ハイフンとスペースのチェックも同時に)
  const listItems = lines.map(line => {
    // // 行が”- テキスト” の形式下確認
    // if (line.startsWith('- ') && line.length > 2) {
    //   // "- " を取り除いてテキスト部分を取得
    //   const text = line.substring(2);
    //   return `<li>${text}</li>`;
    // }
    // // 形式が正しくない場合はそのまま(またはエラー処理)
    // return `<li>${line}</li>`;

    // 上の方法だとスペースが2個来たときダメ。
    // 正規表現で「- のあとに1つ以上のスペース、その後テキスト」を抽出
    const match = line.match(/^-\s+(.+)$/)

    if (match) {
      // テキスト部分を取得(先頭の余分なスペースはtrim()で削除)
      const text = match[1].trim();
      return `<li>${text}</li>`
    }
    return `<li>${line}</li>`; // フォールバック
  })

  // 3. <ul>と</ul>で囲む
  return `<ul>${listItems.join('')}</ul>`;
}

// 2. の簡単バージョン
// const listItems = lines.map(line => {
//     // 1. "- "を探す
//     const dashIndex = line.indexOf('- ');
    
//     if (dashIndex === 0) { // 先頭にある場合
//       // "- " の後の部分を取得してtrim
//       const text = line.substring(2).trim();
//       return `<li>${text}</li>`;
//     }
    
//     // 形式が違う場合はそのまま（テストでは起こらない）
//     return `<li>${line}</li>`;
//   });