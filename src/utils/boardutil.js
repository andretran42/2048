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
  var loc2 = randLocation();
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

export function placeNewTile(board) {
  var loc = randLocation();
  while (board[loc.x][loc.y] != 0) {
    loc = randLocation();
  }
  const rand = randVal();
  board[loc.x][loc.y] = rand;
  return board;
}

export function updateBoard(board, dir) {
  if (legalMove(board, dir)) {
    board = moveOp(board, dir);
    board = mergeOp(board, dir);
    board = moveOp(board, dir);
    board = placeNewTile(board);
    const clone = board.map((row) => row);
    return clone;
  } else {
    return board;
  }
}

export function legalMove(board, dir) {
  if (dir == "down") {
    for (let c = 0; c <= 3; c++) {
      for (let r = 0; r <= 2; r++) {
        if (
          (board[r][c] != 0) &
          (board[r + 1][c] == 0 || board[r + 1][c] == board[r][c])
        ) {
          return true;
        }
      }
    }
  } else if (dir == "up") {
    for (let c = 0; c <= 3; c++) {
      for (let r = 1; r <= 3; r++) {
        if (
          (board[r][c] != 0) &
          (board[r - 1][c] == 0 || board[r - 1][c] == board[r][c])
        ) {
          return true;
        }
      }
    }
  } else if (dir == "left") {
    for (let c = 1; c <= 3; c++) {
      for (let r = 0; r <= 3; r++) {
        if (
          (board[r][c] != 0) &
          (board[r][c - 1] == 0 || board[r][c - 1] == board[r][c])
        ) {
          return true;
        }
      }
    }
  } else if (dir == "right") {
    for (let c = 0; c <= 2; c++) {
      for (let r = 0; r <= 3; r++) {
        if (
          (board[r][c] != 0) &
          (board[r][c + 1] == 0 || board[r][c + 1] == board[r][c])
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

export function moveOp(board, dir) {
  for (let i = 0; i <= 3; i++) {
    if (dir == "down") {
      var x = 3;
      var x_2 = 2;
      var sign_x = -1;
      var y = i;
      var y_2 = i;
      var sign_y = 0;
    } else if (dir == "up") {
      var x = 0;
      var x_2 = 1;
      var sign_x = 1;
      var y = i;
      var y_2 = i;
      var sign_y = 0;
    } else if (dir == "left") {
      var x = i;
      var x_2 = i;
      var sign_x = 0;
      var y = 0;
      var y_2 = 1;
      var sign_y = 1;
    } else if (dir == "right") {
      var x = i;
      var x_2 = i;
      var sign_x = 0;
      var y = 3;
      var y_2 = 2;
      var sign_y = -1;
    }
    while ((x_2 >= 0) & (x_2 <= 3) & (y_2 >= 0) & (y_2 <= 3)) {
      if ((board[x][y] == 0) & (board[x_2][y_2] != 0)) {
        board[x][y] = board[x_2][y_2];
        board[x_2][y_2] = 0;
        x += sign_x;
        x_2 += sign_x;
        y += sign_y;
        y_2 += sign_y;
      } else if ((board[x][y] == 0) & (board[x_2][y_2] == 0)) {
        x_2 += sign_x;
        y_2 += sign_y;
      } else if ((board[x][y] != 0) & (board[x_2][y_2] == 0)) {
        x += sign_x;
        x_2 += sign_x;
        y += sign_y;
        y_2 += sign_y;
      } else {
        x += sign_x;
        x_2 += sign_x;
        y += sign_y;
        y_2 += sign_y;
      }
    }
  }
  return board;
}

export function mergeOp(board, dir) {
  for (let i = 0; i <= 3; i++) {
    if (dir == "down") {
      var x = 3;
      var x_2 = 2;
      var sign_x = -1;
      var y = i;
      var y_2 = i;
      var sign_y = 0;
    } else if (dir == "up") {
      var x = 0;
      var x_2 = 1;
      var sign_x = 1;
      var y = i;
      var y_2 = i;
      var sign_y = 0;
    } else if (dir == "left") {
      var x = i;
      var x_2 = i;
      var sign_x = 0;
      var y = 0;
      var y_2 = 1;
      var sign_y = 1;
    } else if (dir == "right") {
      var x = i;
      var x_2 = i;
      var sign_x = 0;
      var y = 3;
      var y_2 = 2;
      var sign_y = -1;
    }
    while ((x_2 >= 0) & (x_2 <= 3) & (y_2 >= 0) & (y_2 <= 3)) {
      if (board[x][y] != board[x_2][y_2]) {
        x += sign_x;
        x_2 += sign_x;
        y += sign_y;
        y_2 += sign_y;
      } else {
        board[x][y] = board[x][y] * 2;
        board[x_2][y_2] = 0;
        x += sign_x;
        x_2 += sign_x;
        y += sign_y;
        y_2 += sign_y;
      }
    }
  }
  return board;
}

export function mapBoard(board) {
  var tiles_li = [];
  for (let r = 0; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      var y = 100 * r;
      var x = 100 * c;
      var val = board[r][c];
      tiles_li.push({ x: x, y: y, val: val });
    }
  }
  return tiles_li;
}
