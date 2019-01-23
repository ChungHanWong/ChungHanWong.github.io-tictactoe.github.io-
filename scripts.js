const theBigBox = document.getElementById('theBigBox')
const box = document.getElementsByClassName('box')
let timesPlayer1Wins = document.getElementById('num1')
let timesPlayer2Wins = document.getElementById('num2')
let statusTie = document.getElementById('numTie')
const player1Symbol = "O"
const player2Symbol = "X"
let player1Turn = 0
let player2Turn = 0
let player1Wins = false
let player2Wins = false	
const playAgain = document.getElementById('playAgain')
const box0 = document.getElementById("0")
const box1 = document.getElementById("1")
const box2 = document.getElementById("2")
const box3 = document.getElementById("3")
const box4 = document.getElementById("4")
const box5 = document.getElementById("5")
const box6 = document.getElementById("6")
const box7 = document.getElementById("7")
const box8 = document.getElementById("8")

timesPlayer1Wins.innerHTML = 0
timesPlayer2Wins.innerHTML = 0
statusTie.innerHTML = 0 

theBigBox.onclick = function (event){
	if(player1Turn==player2Turn){
		const target = event.target
		if (target.innerHTML != '') {
			alert('Eh press somewhere else');
		}
		else {
			player1Turn++
			target.innerHTML = player1Symbol
		}
		player1Wins = winnerPlayer1()
		tie()	
		}
	else if (player2Turn<player1Turn){		
		const target=event.target
		if (target.innerHTML != '') {
			alert('Eh press somewhere else');
		}
		else {
			player2Turn++
			target.innerHTML = player2Symbol
		}
		player2Wins = winnerPlayer2()
		tie()
	}	
}

function tie () {
	if (player1Wins == undefined && player2Wins == undefined && box0.innerHTML != ""  && box1.innerHTML != ""  && box2.innerHTML != ""  && box3.innerHTML != ""  && box4.innerHTML != ""  && box5.innerHTML != ""  && box6.innerHTML != ""  && box7.innerHTML != ""  && box8.innerHTML != ""){
		window.alert("It Is a Tie")
		statusTie.innerHTML++ ;
		afterWin()
	}
}


function winnerPlayer1(){
	if (box0.innerHTML == "O" && box1.innerHTML =="O" && box2.innerHTML == "O") {
		timesPlayer1Wins.innerHTML++ ;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;	
	}
	else if (box0.innerHTML == "O" && box3.innerHTML =="O" && box6.innerHTML == "O"){
		timesPlayer1Wins.innerHTML++;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;
	}
	else if (box0.innerHTML == "O" && box4.innerHTML =="O" && box8.innerHTML == "O"){
		timesPlayer1Wins.innerHTML++;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;
	}
	else if (box1.innerHTML == "O" && box4.innerHTML =="O" && box7.innerHTML == "O"){
		timesPlayer1Wins.innerHTML++;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;
	}	
	else if (box2.innerHTML == "O" && box5.innerHTML =="O" && box8.innerHTML == "O"){
		timesPlayer1Wins.innerHTML++;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;
	}
	else if (box2.innerHTML == "O" && box4.innerHTML =="O" && box6.innerHTML == "O"){
		timesPlayer1Wins.innerHTML++;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;
	}
	else if (box3.innerHTML == "O" && box4.innerHTML =="O" && box5.innerHTML == "O"){
		timesPlayer1Wins.innerHTML++;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;
	}
	else if (box6.innerHTML == "O" && box7.innerHTML =="O" && box8.innerHTML == "O"){
		timesPlayer1Wins.innerHTML++;
		window.alert(" Player 1 has won! Press Play Again.")
		afterWin()
		return true;
	}
	
}

function winnerPlayer2(){
	if (box0.innerHTML == "X" && box1.innerHTML =="X" && box2.innerHTML == "X") {
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}
	else if (box0.innerHTML == "X" && box3.innerHTML =="X" && box6.innerHTML == "X"){
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}
	else if (box0.innerHTML == "X" && box4.innerHTML =="X" && box8.innerHTML == "X"){
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}
	else if (box1.innerHTML == "X" && box4.innerHTML =="X" && box7.innerHTML == "X"){
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}
	else if (box2.innerHTML == "X" && box5.innerHTML =="X" && box8.innerHTML == "X"){
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}
	else if (box2.innerHTML == "X" && box4.innerHTML =="X" && box6.innerHTML == "X"){
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}
	else if (box3.innerHTML == "X" && box4.innerHTML =="X" && box5.innerHTML == "X"){
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}
	else if (box6.innerHTML == "X" && box7.innerHTML =="X" && box8.innerHTML == "X"){
		timesPlayer2Wins.innerHTML++;
		window.alert(" Player 2 has won! Press Play Again.")
		afterWin()
		return true
	}

}

function afterWin(){
	box0.innerHTML = ""
	box1.innerHTML = ""
	box2.innerHTML = ""
	box3.innerHTML = ""
	box4.innerHTML = ""
	box5.innerHTML = ""
	box6.innerHTML = ""
	box7.innerHTML = ""
	box8.innerHTML = ""
}


playAgain.onclick = function() {
	box0.innerHTML = ""
	box1.innerHTML = ""
	box2.innerHTML = ""
	box3.innerHTML = ""
	box4.innerHTML = ""
	box5.innerHTML = ""
	box6.innerHTML = ""
	box7.innerHTML = ""
	box8.innerHTML = ""
}





