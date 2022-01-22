
function buildBoard(x, y) {
    //var board = [['o', 'o', 'o'], ['o', 'o', 'o'], ['o', 'o', 'o']];
    var board = [];
    for (var i = 0; i < x; i++){
        board.push('o')  
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

const mainBoard = buildBoard(3, 3) 
drawBoard(mainBoard)


