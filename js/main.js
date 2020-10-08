
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
var msg = "Player O is up!";

// locate main element id
var main = document.getElementById('main');

// create heading
var headCon = document.createElement('div');
var header = document.createElement('div');
var heading = document.createElement('h1');
var board = document.createElement('div');

async function init() {


    headCon.setAttribute('class', 'container-fluid');
    //header.setAttribute('class', 'row');
    heading.textContent = "Tic-Tac-Tofu";
    header.appendChild(heading);

    //await sleep(2500);

    main.appendChild(headCon);
    headCon.appendChild(header);

    heading.textContent = "Prepare to play!";
    await sleep(2000);
    heading.textContent = "Tic-Tac-Tofu";

    // create board, set class, append to main
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
            alert('Please click a valid square')
    }
})

async function updateState(pressed) {

    // check to see if square has been played
    if (plr1.includes(pressed) || plr2.includes(pressed)) {
        // retry
        alert('That square has already been played, please choose another!');

    } else {

        //  
        if (turn % 2 == 0) {
            sqr[pressed].setAttribute('src', 'img/x.svg');
            //await sleep(300);
            plr1.push(pressed);
            msg = "Player O is up!";
            heading.textContent = msg;
            if (turn >= 4) {
                checkForWin(plr1, 'X');
            }
        } else {
            sqr[pressed].setAttribute('src', 'img/o.svg');
            //await sleep(300);
            plr2.push(pressed)
            msg = "Player X is up!";
            heading.textContent = msg;
            if (turn >= 4) {
                checkForWin(plr2, 'O');
            }
        }
        turn++;
        if (turn == 9) {
            console.log('no winner')
            congrats('nope', "0");
        } else {

            //await sleep(500);

            //await sleep(2500);
            //heading.textContent = "Tic-Tac-Tofu";
            //console.log(turn, plr1, plr2);
        }

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
    if (winner === '0') {
        await sleep(750);
        heading.textContent = "It's a tie!";
        console.log('no winner 2')
        await sleep(2500);
    } else {
        await sleep(750);
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
        await sleep(2500);
        board.removeChild(line);
    }
    turn = 0;
    for (let x = 1; x < 10; x++) {
        sqr[x].hidden = false;
        sqr[x].setAttribute('src', 'img/square.svg');
    }
    //document.removeEventListener('click', function());
    board.hidden = true;
    heading.textContent = "Prepare to play!";
    await sleep(2000);
    board.hidden = false;
    heading.textContent = "Tic-Tac-Tofu";
    //document.addEventListener('reset', logReset);
    plr1 = [];
    plr2 = [];

    msg = "Player X is up!";

}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))













