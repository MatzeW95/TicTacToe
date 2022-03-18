var field = document.getElementsByClassName("field");
var pStatus = document.getElementById("pStatus");
var buttonReset = document.getElementById("buttonReset");

buttonReset.addEventListener("click", function(){
    reset();
    buttonReset.style.visibility = "hidden";
});

field[0].addEventListener("click", function(){
    getInput(0);
});
field[1].addEventListener("click", function(){
    getInput(1);
});
field[2].addEventListener("click", function(){
    getInput(2);
});
field[3].addEventListener("click", function(){
    getInput(3);
});
field[4].addEventListener("click", function(){
    getInput(4);
});
field[5].addEventListener("click", function(){
    getInput(5);
});
field[6].addEventListener("click", function(){
    getInput(6);
});
field[7].addEventListener("click", function(){
    getInput(7);
});
field[8].addEventListener("click", function(){
    getInput(8);
});

var fieldStatus = new Array(9);
var turnX = true;
var win = false;

function reset() {
    win = false;
    fieldStatus = [];

    for(var x = 0; x < field.length; x++) {
        field[x].innerHTML = "";
    }

    turnX = true;
    pStatus.innerHTML = "Turn: X";
}

function getInput(fieldNumber) {
    
    if (fieldStatus[fieldNumber] == null && win == false) {
        setInput(fieldNumber);

        if(checkWin("X") == true) {
            pStatus.innerHTML = "Winner: X";
            buttonReset.style.visibility = "visible";
        }
        else if(checkWin("O") == true) {
            pStatus.innerHTML = "Winner: O";
            buttonReset.style.visibility = "visible";
        }
        else {
            changeTurn();
        }
    }
}

function setInput(fieldNumber) {

    if (turnX == true) {
        fieldStatus[fieldNumber] = "X";
        field[fieldNumber].innerHTML = "X"
    }
    else {
        fieldStatus[fieldNumber] = "O";
        field[fieldNumber].innerHTML = "O" 
    }
}

function changeTurn() {

    if (turnX == true) {
        turnX = false;
        pStatus.innerHTML = "Turn: O";
    }
    else {
        turnX = true;
        pStatus.innerHTML = "Turn: X";
    }
}

function checkWin(player) {
    
    //Horizontal check
    if(fieldStatus[0] == player && fieldStatus[1] == player && fieldStatus[2] == player) {
        win = true;
    }
    if(fieldStatus[3] == player && fieldStatus[4] == player && fieldStatus[5] == player) {
        win = true;
    }
    if(fieldStatus[6] == player && fieldStatus[7] == player && fieldStatus[8] == player) {
        win = true;
    }

    //Vertical check
    if(fieldStatus[0] == player && fieldStatus[3] == player && fieldStatus[6] == player) {
        win = true;
    }
    if(fieldStatus[1] == player && fieldStatus[4] == player && fieldStatus[7] == player) {
        win = true;
    }
    if(fieldStatus[2] == player && fieldStatus[5] == player && fieldStatus[8] == player) {
        win = true;
    } 

    //Diagonal check
    if(fieldStatus[0] == player && fieldStatus[4] == player && fieldStatus[8] == player) {
        win = true;
    }
    if(fieldStatus[2] == player && fieldStatus[4] == player && fieldStatus[6] == player) {
        win = true;
    }

    return win;
}