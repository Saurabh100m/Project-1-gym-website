console.log('tic tac toe');
let music = new Audio("beep.mp3");
let win = new Audio("winning.wav");
let turn = "X";

let box1 = document.getElementById("b1");
let box2 = document.getElementById("b2");
let box3 = document.getElementById("b3");
let box4 = document.getElementById("b4");
let box5 = document.getElementById("b5");
let box6 = document.getElementById("b6");
let box7 = document.getElementById("b7");
let box8 = document.getElementById("b8");
let box9 = document.getElementById("b9");

let won = document.getElementById("won");

let reset = document.getElementById("btn");






//function for turn change

function changeTurn() {

    if (turn == "X") {
        music.play();
        return "O";

    } else {
        music.play();
        return "X";

    }
}

//function to check win

function winner() {
    if (box1.innerText == box2.innerText && box2.innerText == box3.innerText && box3.innerText != "") {
        won.innerText = "WINNER IS   " + box1.innerText;
        win.play();
        setTimeout(refresh, 2000);

    } else
    if (box4.innerText == box5.innerText && box5.innerText == box6.innerText && box6.innerText != "") {
        won.innerText = "WINNER IS   " + box4.innerText;
        win.play();
        setTimeout(refresh, 2000);
    } else
    if (box7.innerText == box8.innerText && box8.innerText == box9.innerText && box9.innerText != "") {
        won.innerText = "WINNER IS   " + box7.innerText;
        win.play();
        setTimeout(refresh, 2000);
    } else
    if (box1.innerText == box4.innerText && box4.innerText == box7.innerText && box7.innerText != "") {
        won.innerText = "WINNER IS   " + box1.innerText;
        win.play();
        setTimeout(refresh, 2000);
    } else
    if (box2.innerText == box5.innerText && box5.innerText == box8.innerText && box8.innerText != "") {
        won.innerText = "WINNER IS   " + box2.innerText;
        win.play();
        setTimeout(refresh, 2000);
    } else
    if (box3.innerText == box6.innerText && box6.innerText == box9.innerText && box9.innerText != "") {
        won.innerText = "WINNER IS   " + box3.innerText;
        win.play();
        setTimeout(refresh, 2000);
    } else
    if (box1.innerText == box5.innerText && box5.innerText == box9.innerText && box9.innerText != "") {
        won.innerText = "WINNER IS   " + box1.innerText;
        win.play();
        setTimeout(refresh, 2000);
    } else
    if (box3.innerText == box5.innerText && box5.innerText == box7.innerText && box7.innerText != "") {
        won.innerText = "WINNER IS   " + box3.innerText;
        win.play();
        setTimeout(refresh, 2000);
    }


}

//function to reset game 

reset.addEventListener('click', () => {
    location.reload();
})

function refresh() {
    location.reload();

}
//game logic

//b1
box1.addEventListener('click', () => {
    if (box1.innerText == "") {
        box1.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }

})

//b2
box2.addEventListener('click', () => {
    if (box2.innerText == "") {
        box2.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})

//b3
box3.addEventListener('click', () => {
    if (box3.innerText == "") {
        box3.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})

//b4
box4.addEventListener('click', () => {
    if (box4.innerText == "") {
        box4.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})

//b5
box5.addEventListener('click', () => {
    if (box5.innerText == "") {
        box5.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})

//b6
box6.addEventListener('click', () => {
    if (box6.innerText == "") {
        box6.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})

//b7
box7.addEventListener('click', () => {
    if (box7.innerText == "") {
        box7.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})

//b8
box8.addEventListener('click', () => {
    if (box8.innerText == "") {
        box8.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})

//b9
box9.addEventListener('click', () => {
    if (box9.innerText == "") {
        box9.innerText = turn;
        turn = changeTurn();
        document.getElementById("turnOf").innerText = turn;
        winner();
    }
})