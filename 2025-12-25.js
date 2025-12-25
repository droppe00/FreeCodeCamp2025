function generateSnowflake(crystals) {

  // 1. 改行で分割して各行を取得
  const lines = crystals.split('\n');

  // 2. 各行を処理
  const resultLines = lines.map(line => {
    // 3. 行を逆順にする(鏡像化すると言うらしい？)
    const mirrored = line.split('').reverse().join('');

    // 4. 元の行と鏡像を結合
    return line + mirrored;
  })

  // 5. 改行で結合して返す
  return resultLines.join('\n');
}

// function generateSnowflake(pattern) {
//   return pattern.split('\n')
//                 .map(line => line + line.split('').reverse().join(''))
//                 .join('\n');
// }