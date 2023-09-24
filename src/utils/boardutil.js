export function createBoard() {
  const numRows = 4;
  const numCols = 4;
  const board = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
}

export function newBoard() {
  let board = createBoard();
  const loc1 = randLocation();
  const loc2 = randLocation();
  while ((loc1.x == loc2.x) & (loc1.y == loc2.y)) {
    loc2 = randLocation();
  }
  loc1.val = randVal();
  loc2.val = randVal();
  board[loc1.x][loc1.y] = loc1.val;
  board[loc2.x][loc2.y] = loc2.val;
  return board;
}

export function randLocation() {
  const x = Math.floor(Math.random() * 4);
  const y = Math.floor(Math.random() * 4);
  return { x, y };
}

export function randVal() {
  const rand = Math.random();
  if (rand < 0.8) {
    return 2;
  } else {
    return 4;
  }
}
