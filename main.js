const mediumWhite = '⚪'
const mediumBlack = '⚫'
function buildBoard(x, y) {
    //var board = [['o', 'o', 'o'], ['o', 'o', 'o'], ['o', 'o', 'o']];
    var board = [];
    for (var i = 0; i < x; i++){
        var boardY = [];
        for (var j = 0; j < y; j++) {
            boardY.push('⬜')
        } 
        board.push(boardY)
    }

    console.log(board)
   
    return board;
}

function drawBoard(board){

    board.forEach(function(entry){
        var temp = "";
        entry.forEach(function(childEntry){
            temp=temp+ childEntry;
        })
        console.log(temp)
    });
    
}

const mainBoard = buildBoard(6, 7) 
drawBoard(mainBoard)


