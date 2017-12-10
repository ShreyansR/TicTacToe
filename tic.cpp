#include <cstdlib>
#include <ctime>
#include <iostream>
using namespace std;

char box1('a');
char box2('b');
char box3('c');
char box4('d');
char box5('e');
char box6('f');
char box7('g');
char box8('h');
char box9('i');

int randomNum(){
  srand((unsigned)time(0));
  int random_int;
  random_int = (rand()%10)+1;
  return random_int;
}

void drawBoard(){
	cout << "  " << box1 << "   |   " << box2 << "   |   "  << box3 << "   |   "  << endl;
	cout << "______+_______+_______+" << endl;
	cout << "  " << box4 << "   |   " << box5 << "   |   "  << box6 << "   |   "  << endl;
	cout << "______+_______+_______+" << endl;
	cout << "  " << box7 << "   |   " << box8 << "   |   "  << box9 << "   |   "  << endl;
	cout << "______+_______+_______+" << endl;
}

int main()
{
  do {

	for(int playerTurn = 1; playerTurn < 3; playerTurn++){
    drawBoard();
		char playerMarker;

		if(playerTurn == 1){
			playerMarker = 'X';
		}
		else {
			playerMarker = 'O';
		}

		bool isValid;
		 do{

    		char currentMove;
    		cout << "Please enter a box number" << endl;
    		cin >> currentMove;
				isValid = true;

    		if(currentMove == '1' && box1 == 'a'){
      		box1 = playerMarker;
    		}
    		else if(currentMove == '2' && box2 == 'b'){
      		box2 = playerMarker;
    		}

		    else if(currentMove == '3' && box3 == 'c'){
		      box3 = playerMarker;
		    }
		    else if(currentMove == '4' && box4 == 'd'){
		      box4 = playerMarker;
		    }
		    else if(currentMove == '5' && box5 == 'e'){
		      box5 = playerMarker;
		    }
		    else if(currentMove == '6' && box6 == 'f'){
		      box6 = playerMarker;
		    }

		    else if(currentMove == '7' && box7 == 'g'){
		      box7 = playerMarker;
		    }
		    else if(currentMove == '8' && box8 == 'h'){
		      box8 = playerMarker;
		    }
				else if(currentMove == '9' && box9 == 'i'){
					box9 = playerMarker;
				}
				else {
					cout << "Invalid Position! Try Again" << endl;
					isValid = false;
				}
			}while(!isValid);

			if (((box1 == 'X') && (box2 == 'X') && (box3 == 'X'))
			 || ((box4 == 'X') && (box5 == 'X') && (box6 == 'X'))
		   || ((box7 == 'X') && (box8 == 'X') && (box9 == 'X'))
		   || ((box1 == 'X') && (box4 == 'X') && (box7 == 'X'))
 			 || ((box2 == 'X') && (box5 == 'X') && (box8 == 'X'))
 		   || ((box3 == 'X') && (box6 == 'X') && (box9 == 'X'))
			 || ((box1 == 'X') && (box5 == 'X') && (box9 == 'X'))
			 || ((box3 == 'X') && (box5 == 'X') && (box7 == 'X'))){
				cout << "Player 1 Wins!" << endl;
				drawBoard();
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
				cout << "Player 2 Wins!" << endl;
				drawBoard();
				return false;
			}
		}



} while(true);
cout << randomNum() << endl;
}
