// init

var winCond = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

var plr1 = [];
var plr2 = [];
var row = [];
var sqr = [];
var turn = 0;

// locate main element id
var main = document.getElementById('main');

// create heading
var headCon = document.createElement('div');
var header = document.createElement('div');
var heading = document.createElement('h1');

headCon.setAttribute('class', 'container-fluid');
//header.setAttribute('class', 'row');
heading.textContent = "Tic-Tac-Tofu";

main.appendChild(headCon);
headCon.appendChild(header);
header.appendChild(heading);

// create board, set class, append to main
var board = document.createElement('div');
board.setAttribute('class', 'container');
main.appendChild(board);

// create and  append 3 rows with 3 col and append img square
for (let x = 0; x < 3; x++) {
    row[x] = document.createElement('div');
    row[x].setAttribute('class', 'row');
    board.appendChild(row[x]);
    if (x == 0) {
        for (let y = 1; y < 4; y++) {
            sqr[y] = document.createElement('img');
            sqr[y].setAttribute('class', 'img-fluid');
            sqr[y].setAttribute('id', 'sqr' + y);
            sqr[y].setAttribute('src', 'img/square.svg')
            row[x].appendChild(sqr[y]);
        }
    } else if (x == 1) {
        for (let y = 4; y < 7; y++) {
            sqr[y] = document.createElement('img');
            sqr[y].setAttribute('class', 'img-fluid');
            sqr[y].setAttribute('id', 'sqr' + y);
            sqr[y].setAttribute('src', 'img/square.svg')
            row[x].appendChild(sqr[y]);
        }
    } else if (x == 2) {
        for (let y = 7; y < 10; y++) {
            sqr[y] = document.createElement('img');
            sqr[y].setAttribute('class', 'img-fluid');
            sqr[y].setAttribute('id', 'sqr' + y);
            sqr[y].setAttribute('src', 'img/square.svg')
            row[x].appendChild(sqr[y]);
        }
    }
}

//  add event listener and click handler
document.addEventListener('click', function (e) {
    switch (true) {
        case (e.target == sqr[1]):
            updateState(1);
            break;
        case (e.target == sqr[2]):
            updateState(2);
            break;
        case (e.target == sqr[3]):
            updateState(3);
            break;
        case (e.target == sqr[4]):
            updateState(4);
            break;
        case (e.target == sqr[5]):
            updateState(5);
            break;
        case (e.target == sqr[6]):
            updateState(6);
            break;
        case (e.target == sqr[7]):
            updateState(7);
            break;
        case (e.target == sqr[8]):
            updateState(8);
            break;
        case (e.target == sqr[9]):
            updateState(9);
            break;
        default:
            alert('none');
    }
})

function updateState(pressed) {
    // check to see if square has been played
    if (plr1.includes(pressed) || plr2.includes(pressed)) {
        // retry
        alert('That square has already been played, please choose another!');
    } else {
        //  
        if (turn % 2 == 0) {
            sqr[pressed].setAttribute('src', 'img/x.svg');
            plr1.push(pressed);
            if (turn >= 4) {
                checkForWin(plr1, 1);
            }

        } else {
            sqr[pressed].setAttribute('src', 'img/o.svg');
            plr2.push(pressed);
            if (turn >= 4) {
                checkForWin(plr2, 2);
            }
        }

        turn++;


        console.log(turn, plr1, plr2);

    }
}

function checkForWin(plr, winner) {
    //alert('Checking for win');
    for (let index = 0; index < 8; index++) {
        let inRow = 0;
        for (let i = 0; i < 3; i++) {
            if (plr.includes(winCond[index][i])) {
                inRow += 1;
                if (inRow == 3) {
                    
                    congrats(index, winner);
                }

            }
        }
    }
}

async function congrats(cond, winner) {
    await sleep(1000);
    let vicMsg = 'Player ' + winner + ' wins!';
    heading.textContent = vicMsg;
    let lineThru = "img/win" + cond + ".svg";
    line = document.createElement('img');
    for (let x = 1; x < 10; x++) {
        sqr[x].hidden = true;
    }
    //line.setAttribute('class', 'img-fluid');
    line.setAttribute('src', lineThru)
    board.insertBefore(line, board.childNodes[0]);


}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))






// create






