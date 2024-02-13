# dice-game
Dice game using JS

*Step 1* - Create an External Javascript File
Create a new Javascript file called index.js and link to it from the index.html file.

*Step 2* - Add Dice Images
In the Dicee project, there is a folder called images, add the images of dice6.png as the source to both of the `<img>` elements.

*Step 3* - Create a Random Number
Inside index.js, Generated two random dice rolls by picking random images from an array, assigning them to two img elements, compares the random numbers, and updates the h1 with a win/loss message based on which is higher.

*Step 4* - Change the `<img>` to a Random Dice
Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left `<img>` element.

*Step 5* - Change the Title to Display a Winner
Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).