// DECLARE three variables to hold the location of each cell of the ship. Let’s call them
// location1, location2 and location3.
// DECLARE a variable to hold the user’s current guess. Let’s call it guess.
// DECLARE a variable to hold the number of hits. We’ll call it hits and set it to 0.
// DECLARE a variable to hold the number of guesses. We’ll call it guesses and set it to 0.
// DECLARE a variable to keep track of whether the ship is sunk or not. Let’s call it isSunk
// and set it to false.


// LOOP: while the ship is not sunk
//     GET the user's guess
//     COMPARE the user's input to the valid values
//         IF the user's guess in invalid
//         TELL the user to enter a valid number
// ELSE
// ADD one to guesses
// IF the user's guess matches a location
// ADD one to the number of hits
// IF number of hits is 3
// SET isSunk to true
// TELL user "You Sank My Battleship!"
//             END IF
//         END IF
//     END ELSE
// END LOOP
// Tell user stats


var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Can't you read? Only 0-6 are acceptable.");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You Sank My Battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses*100) + "%";
alert(stats);
