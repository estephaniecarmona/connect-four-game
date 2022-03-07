const connectfour = require('./connectfour');

test('if theres a circle on the board @ 1, 0 and the player move is 1 then give back 1', () => {
   var board = [
        [ '0,0', ' 0,1', ' 0,2' ],
        [ ' 1,0', ' 1,1', ' 1,2' ],
        [ '⚪', ' 2,1', ' 2,2' ],
        [ '⚪', ' 3,1', ' 3,2' ]
      ] 
    
    var move = '1'

  expect(connectfour.placeTheNumberAbove(move, board)).toBe(1);

});
test('the board is empty the player move is the first spot then give back xcoordinate of the first spot', () => {
   var board = [
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ]
      ] 
    
    var move = '1'

  expect(connectfour.placeTheNumberAbove(move, board)).toBe(3);

});
test('the board is empty the player move is the first spot then give back xcoordinate of the first spot for big boards', () => {
   var board = [
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ]
      ] 
    
    var move = '1'

  expect(connectfour.placeTheNumberAbove(move, board)).toBe(5);

});