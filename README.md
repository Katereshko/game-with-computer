# game-with-computer

My individual coding project

## File structure
script.js - the main logic file
index.html - main html file - to play the game, open this file on browser window
style.css - main styling file
favicon.ico - icon to be displayed on browser tab
'eyes' folder - SVG files which create animation effect

## About the game
Created by Ekaterina Tereshko as an individual project during the coding program, it has the following features:

### Game over when:
- user wins by guessing the randomly picked number from 1 to 20 (game one) or from 1 to 100 (game two) - user decides to start another game (of 2) without finishing the previous one

### User side
- pick one of the two games by typing a number in the input field
- use alerts that will give you hints
- continue guessing and using hints until you guess the number picked by computer

### Logic side

The constants represent the following items: 
input1 - an input field where the user should enter the suggested number for the first game, 
buttonGame1 - the button that the user should click in order to start the game or enter the next suggested number,
answer1 - a random number from 1 to 20 generated using Math.random

input2, buttonGame2, answer2 - similar constants for the second game accordingly, given that the numbers range in second game is from 1 to 100.

When the user clicks the buttonGame1, the inputNew1 function is called. The function allows to receive the constant userNumber1, the number currently entered by the user in the input field. Before checking if the number is guessed, the functions also checks if the number  meets the range requirement (is not less than 1 and not higher than 20 for the first game or 100 for the second game). In case the requirement is not met, the alert 

When user chooses one of 3 main functions (play, feed, sleep), check for the impact of the action on the pet (checkImpactDeath()) > generate random numbers via (get.RandomValues()), check how adding them to the current values affects the pet (does it die or not). Death in this game is defined as at least one of the pet values reaching 0.

If checkImpactDeath() returns true:
a) adjust values of the respective pet keys, give feedback on what action was performed and invoke checkForDanger() function to see if pet is in need of certain elements (food, happiness or water), and communicate that to the user, invoke checkForExcess()
b) checkForExcess() checks if some value is disproportionately high. If value reaches certain threshold (currently the deductionPoint is set to 20) and is higher than the sum of the other two values, call deductPoints() to deduct this sum from the highest value, and communicate that to the user

If checkImpactDeath() returns false:
a) invoke preventDeath() to show feedback message, and to prevent from stalemate (when two of the values are dangerously low) invoke pet.boost() function;
b) if preventDeath() was invoked 3 times in a row (= user tried to perform an action that would kill the pet):
c) check if the second lowest value is lower than life threshold. If it is lower, double the lowest parameter in value and show message to the user
d) if it's not lower than life threshold nicely suggest user to try another action

**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
