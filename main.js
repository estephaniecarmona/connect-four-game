const prompt = require("prompt-sync")({ sigint: true });

var playerOne = ['1', '⚪']; //⚪
var playerTwo = ['2', '⚫'];   

var playerTurn = playerOne;

function saveMove(move, board) {
    board[move] = playerTurn;
}

function changeTurn(playerTurn) {
    if (playerTurn[0] === '1') {
        return playerTwo;
    }
    return playerOne;
}



function buildBoard(x, y) {
    
    var board = [];
    for (var i = 0; i < x; i++) {
        var boardY = [];
        for (var j = 0; j < y; j++) {
            boardY.push('⬜')
        }
        board.push(boardY)
    }
    return board;
}

function drawBoard(board) {

    board.forEach(function (entry) {
        var temp = "";
        entry.forEach(function (childEntry) {
            temp = temp + childEntry;
        })
        console.log(temp)
    });

}

//function takingXYcoords(board) {
//    var rows = board.length;
//    var columns = board[0].length;
  //  for (let x = 0; x < rows; y++){
    //    for (let y = 0; y < columns; x++) {
      //      if (mainBoard[x][y] === cell) {
        //        return ({x, y});
          //  }
        //}
    //}
    //return null;
//}


function convertMoveToCoords(move, board) {
    return {x: 0, y: 0};

}

function saveMoveIntoBoard(move, board) {
    return {x: 0, y: 0};
}

const mainBoard = buildBoard(6, 7)
console.log(mainBoard)



while (true) {

    drawBoard(mainBoard)
    const move = prompt(`player ${playerTurn[0]} turn:`);
    console.log(`move ${move}`);
    var coords = convertMoveToCoords(move, mainBoard);
    playerTurn = changeTurn(playerTurn);

}

