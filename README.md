# init board
    -set initial board state
        square[1 - 9] = 0 = blank, 1 = x, 2 = 0
    -set eventlisteners
    -set initial turn
        turn = 1

# when square is clicked:
    check which square is clicked
    test if square is state 0
        if so 
            change square to state 1 or 2, depending on turn % 2, 
            render x or 0 on the square
        if not goto retry()
    after turn 5 check win condition, 
        if so goto gameover()
        if not goto next turn+= 1

# 

