"use strict";

/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const BOARD = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  //  set "board" to empty HEIGHT x WIDTH matrix array
  for (let row = 0; row < HEIGHT; row++) {
    BOARD.push(Array(WIDTH).fill(null));
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  var htmlBoard = document.getElementById('board');



  htmlBoard.append(makeTopRow());

  // dynamically creates the main part of html board
  // uses HEIGHT to create table rows
  // uses WIDTH to create table cells for each row

  for (var y = 0; y < HEIGHT; y++) { //for each row
    // Create a table row element and assign to a "row" variable
    let row = document.createElement("tr");

    for (var x = 0; x < WIDTH; x++) { //for each column
      // Create a table cell element and assign to a "cell" variable
      let cell = document.createElement("td");

      // add an id, c-y-x, to the above table cell element
      cell.id = `c-${y}-${x}`;
      // you'll use this later, so make sure you use c-y-x

      // append the table cell to the table row
      row.append(cell);

    }
    //  append the row to the html board
    htmlBoard.append(row);

  }
}

/**Creates top row of html board based on gloabl WIDTH */
function makeTopRow() {
  // create the top row of the playing board in html
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");

  // Loops through WIDTH and creates clickable cells for the top row
  for (let i = 0; i < WIDTH; i++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", `top-${i}`);
    headCell.addEventListener("click", handleClick);
    top.append(headCell);
  }

  return top;

}

/** findSpotForCol: given column x, return bottom empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 5
  return 5;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // make a div and insert into correct table cell
  console.log(`place in table was called!`);
  const piece = document.createElement("div");
  piece.classList.add("piece", `p${currPlayer}`);

  const currentCell = document.querySelector(`#c-${y}-${x}`);
  console.log(`current cell ${currentCell}`);
  currentCell.append(piece);
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  //top-
  const x = +evt.target.id.slice(4);
  console.log(evt.target.id[length - 1]);

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // switch players
  // TODO: switch currPlayer 1 <-> 2
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {

  /** _win:
   * takes input array of 4 cell coordinates [ [y, x], [y, x], [y, x], [y, x] ]
   * returns true if all are legal coordinates for a cell & all cells match
   * currPlayer
   */
  function _win(cells) {

    // TODO: Check four cells to see if they're all legal & all color of current
    // player

  }

  // using HEIGHT and WIDTH, generate "check list" of coordinates
  // for 4 cells (starting here) for each of the different
  // ways to win: horizontal, vertical, diagonalDR, diagonalDL
  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      // TODO: assign values to the below variables for each of the ways to win
      // horizontal has been assigned for you
      // each should be an array of 4 cell coordinates:
      // [ [y, x], [y, x], [y, x], [y, x] ]

      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert;
      let diagDL;
      let diagDR;

      // find winner (only checking each win-possibility as needed)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
