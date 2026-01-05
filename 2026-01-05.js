function tireStatus(pressuresPSI, rangeBar) {

  // 定数の定義
  const PSI_PER_BAR = 14.5038;

  // バーからPSIに変換
  const minPsi = PSI_PER_BAR * rangeBar[0];
  const maxPsi = PSI_PER_BAR * rangeBar[1];

  // 結果を格納する配列
  const statuses = [];

  // 各タイヤの圧力をチェック
  for (let psi of pressuresPSI) {
    if (psi < minPsi) {
      statuses.push("Low");
    } else if (psi > maxPsi) {
      statuses.push("High");
    } else {
      statuses.push("Good");
    }
  }

  return statuses;
}

// より簡潔な書き方
// function tireStatus(pressuresPSI, rangeBar) {
//   const PSI_PER_BAR = 14.5038;
//   const [minBar, maxBar] = rangeBar;
//   const minPsi = minBar * PSI_PER_BAR;
//   const maxPsi = maxBar * PSI_PER_BAR;
  
//   return pressuresPSI.map(psi => {
//     if (psi < minPsi) return "Low";
//     if (psi > maxPsi) return "High";
//     return "Good";
//   });
// }