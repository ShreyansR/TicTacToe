function myFunction(){

  var box1 = 'a';
  var box2 = 'b';
  var box3 = 'c';
  var box4 = 'd';
  var box5 = 'e';
  var box6 = 'f';
  var box7 = 'g';
  var box8 = 'h';
  var box9 = 'i';

  do{

    for (var playerTurn = 1; playerTurn < 3; playerTurn++){

      var playerMarker;

      if(playerTurn == 1){
        playerMarker = "X";
      }
      else{
        playerMarker = "O";
      }

      var isValid;

      do{

        var init = prompt("Enter Your Move: ");
        var currentMove = init.toString();
        isValid = true;

        if(currentMove == 'A' && box1 == 'a'){
      		box1 = playerMarker;
          document.getElementById('0').innerHTML = playerMarker;
    		}
    		else if(currentMove == 'B' && box2 == 'b'){
      		box2 = playerMarker;
          document.getElementById('1').innerHTML = playerMarker;
    		}

		    else if(currentMove == 'C' && box3 == 'c'){
		      box3 = playerMarker;
          document.getElementById('2').innerHTML = playerMarker;
		    }
		    else if(currentMove == 'D' && box4 == 'd'){
		      box4 = playerMarker;
          document.getElementById('3').innerHTML = playerMarker;
		    }
		    else if(currentMove == 'E' && box5 == 'e'){
		      box5 = playerMarker;
          document.getElementById('4').innerHTML = playerMarker;
		    }
		    else if(currentMove == 'F' && box6 == 'f'){
		      box6 = playerMarker;
          document.getElementById('5').innerHTML = playerMarker;
		    }

		    else if(currentMove == 'G' && box7 == 'g'){
		      box7 = playerMarker;
          document.getElementById('6').innerHTML = playerMarker;
		    }
		    else if(currentMove == 'H' && box8 == 'h'){
		      box8 = playerMarker;
          document.getElementById('7').innerHTML = playerMarker;
		    }
				else if(currentMove == 'I' && box9 == 'i'){
					box9 = playerMarker;
          document.getElementById('8').innerHTML = playerMarker;
				}
				else {
					alert("Invalid Move");
					isValid = false;
				}
      }while(!isValid);

      var y = 0;
      if (((box1 == 'X') && (box2 == 'X') && (box3 == 'X'))
			 || ((box4 == 'X') && (box5 == 'X') && (box6 == 'X'))
		   || ((box7 == 'X') && (box8 == 'X') && (box9 == 'X'))
		   || ((box1 == 'X') && (box4 == 'X') && (box7 == 'X'))
 			 || ((box2 == 'X') && (box5 == 'X') && (box8 == 'X'))
 		   || ((box3 == 'X') && (box6 == 'X') && (box9 == 'X'))
			 || ((box1 == 'X') && (box5 == 'X') && (box9 == 'X'))
			 || ((box3 == 'X') && (box5 == 'X') && (box7 == 'X'))){
				alert("Player 1 Wins");
				reDraw();
				return false;
			}

			else if (((box1 == 'O') && (box2 == 'O') && (box3 == 'O'))
			 || ((box4 == 'O') && (box5 == 'O') && (box6 == 'O'))
			 || ((box7 == 'O') && (box8 == 'O') && (box9 == 'O'))
			 || ((box1 == 'O') && (box4 == 'O') && (box7 == 'O'))
			 || ((box2 == 'O') && (box5 == 'O') && (box8 == 'O'))
			 || ((box3 == 'O') && (box6 == 'O') && (box9 == 'O'))
			 || ((box1 == 'O') && (box5 == 'O') && (box9 == 'O'))
			 || ((box3 == 'O') && (box5 == 'O') && (box7 == 'O'))){
        alert("Player 2 Wins");
 				reDraw();
				return false;
			}

      else if ((document.getElementById('0').innerHTML != "A") &&
      (document.getElementById('1').innerHTML != "B") &&
      (document.getElementById('2').innerHTML != "C") &&
      (document.getElementById('3').innerHTML != "D") &&
      (document.getElementById('4').innerHTML != "E") &&
      (document.getElementById('5').innerHTML != "F") &&
      (document.getElementById('6').innerHTML != "G") &&
      (document.getElementById('7').innerHTML != "H") &&
      (document.getElementById('8').innerHTML != "I") &&
      (y == 0)){
        alert("DRAW!!");
        reDraw();
        return false;
      }
		}


} while(true);

}

function reDraw(){
  document.getElementById('0').innerHTML = "A";
  document.getElementById('1').innerHTML = "B";
  document.getElementById('2').innerHTML = "C";
  document.getElementById('3').innerHTML = "D";
  document.getElementById('4').innerHTML = "E";
  document.getElementById('5').innerHTML = "F";
  document.getElementById('6').innerHTML = "G";
  document.getElementById('7').innerHTML = "H";
  document.getElementById('8').innerHTML = "I";
}
