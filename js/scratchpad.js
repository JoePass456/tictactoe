// init screen

// locate main element id
var main = document.getElementById('main');
//  create heading element 
var heading = document.createElement('h1');
heading.textContent = "Tic Tac Awesome";
// create container for rows and columns
var container = document.createElement('div');
container.style.backgroundColor = 'white';
container.setAttribute('class', 'container-fluid');
//var row = document.createElement()
//var box = document.create



main.appendChild(heading);
main.appendChild(container);

var square = []

for (let x = 1; x < 10; x++) {
    square[x] = document.createElement('img');
    //square[x].setAttribute('class', '');
    square[x].setAttribute('src', 'img/x.svg')
    //square[x].textContent = 'X';
    container.appendChild(square[x]);
}






// assign event listeners

document.addEventListener('click', function(e) {
    if(e.target.getElementById=='sqr1') {
        alert('img clicked');
    } else {
        alert('kinda worked');
    }
})

//  

