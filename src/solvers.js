/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board ({n: n});

  for (var i = 0; i < board.get('n'); i++) {
    board.togglePiece(i, i);
  }
  // console.log(solution);
  var solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// input to a recursive function call: the current state of the board, rooks still to place
// if conflicts or if you places on top of another piece
//  return
// if rooksToPlace = 0
//  solutionCount += 1
// call the recursive function for placing the rook in each square
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board ({n: n});

  var numPieces = function(board) {
    var numPieces = 0;
    var rows = board.rows();
    for (var i = 0; i < n; i++) {
      for (var i = 0; i < n; i++) {
        numPieces += rows[i][i];
      }
    }
    return numPieces;
  };

  var findSolutions = function (board, rooksToPlace) {
    if (board.hasAnyRooksConflicts() || (numPieces(board) < (n - rooksToPlace))) {
      return;
    }
    if (rooksToPlace === 0) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      for (var i = 0; i < n; i++) {
        var newBoard = new Board(board.rows());
        newBoard.togglePiece(i, i);
        console.log(newBoard.rows());       
        findSolutions(newBoard, rooksToPlace - 1);
      }
    }
  };

  findSolutions(board, n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};