function createBoard(dimensions) {
  const [rows, cols] = dimensions;
  const board = [];
  
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      // 行と列のインデックスの合計が偶数ならX、奇数ならO
      if ((i + j) % 2 === 0) {
        row.push("X");
      } else {
        row.push("O");
      }
    }
    board.push(row);
  }
  
  return board;
}

// 動作の説明

// 行0 (i=0):
//   col0: 0+0=0 (偶数) → X
//   col1: 0+1=1 (奇数) → O
//   col2: 0+2=2 (偶数) → X
//   → ["X", "O", "X"]

// 行1 (i=1):
//   col0: 1+0=1 (奇数) → O
//   col1: 1+1=2 (偶数) → X
//   col2: 1+2=3 (奇数) → O
//   → ["O", "X", "O"]

// 行2 (i=2):
//   col0: 2+0=2 (偶数) → X
//   col1: 2+1=3 (奇数) → O
//   col2: 2+2=4 (偶数) → X
//   → ["X", "O", "X"]