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
    for (var i = 0; i < y; i++) {
        var boardY = [];
        for (var j = 0; j < x; j++) {
            // boardY.push('⬜')
            boardY.push(` ${i},${j}`)
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
    var boardLength = board[board.length - 1];
    var boardString = board[0][board[0].length -1];

    var xValue = board.length - 1;
    var yValue = Number(move) - 1;
    var x = placeTheNumberAbove(move, board, xValue, yValue)
    
    return {x: x, y: yValue};

}

function placeTheNumberAbove(move, board, x, y) {
    for ()
    if ('⚪' === board[x][y]){
       return x - 1
    }
    return x
}


function saveMoveIntoBoard(playerTurn, coords, board) {
    board[coords.x][coords.y] = playerTurn[1];

    console.log(board)
}

const mainBoard = buildBoard(3, 4)
console.log(mainBoard)



while (true) {

    drawBoard(mainBoard);
    const move = prompt(`player ${playerTurn[0]} turn:`);
    console.log(`move ${move}`);
    var coords = convertMoveToCoords(move, mainBoard);
    saveMoveIntoBoard(playerTurn, coords, mainBoard);
    playerTurn = changeTurn(playerTurn);

}

