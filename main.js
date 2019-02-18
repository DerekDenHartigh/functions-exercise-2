"use strict";
/*
FUNCTIONS EXERCISE 2
Skills: Hoisting / Scope / Closures / IIFE’s
1 Dimensional:
A character can move forward and backward along a tightrope. They start at position 0, facing
the positive direction and can move in the positive and the negative directions. They can also
change direction. Use variables to keep track of their position and direction. Then define the
following functions:
● moveForward: takes a distance parameter. Move the character forward (based on the
direction they are facing) the specified distance.
● moveBackward: takes a distance parameter. Move the character backward (based on
the direction they are facing) the specified distance.
● turnAround: reverse the direction the character is facing.
● printLocation: logs the current position to the console.
Call the functions in the following order and check the results:
1. moveForward 5
2. moveBackward 3
3. printLocation … should print 2
4. turnAround
5. moveForward 10
6. moveBackward 5
7. printLocation … should print -3
Wrap the whole program in an IIFE.
(function () {
    statements
})();
*/
/*
Lisa's Notes:
Lisa Lemons [6:46 PM]
Ok so for Functions Exercise 2, you're so close!
So because you're passing distance as a parameter, and not assigning the results of `turnAround()` back to the `distance` defined on Line 6, _that_ `distance` never actually changes. (edited) 
As a result, every time you check it, it's _always_ `"forward"`
So if you remove `direction` as a parameter from `turnAround()` and just *remove* your `return` statements, you'll find that it works as expected (edited) 
(Edits are because I was looking at my code and I have different variable names)

Let me know if that doesn't make sense
(You do still want to keep the assignments in `turnAround()` you just don't need to `return` them. It will still work if you do, but there's no reason to, so I just wouldn't) 
*/
(function () {
    let position = 0; // # of steps, 0 beings starting point, -# = steps back (left of 0), +# = steps forward (right of 0)
    let direction = "forward"; // forward or backward, assuming default is forward

function moveForward(distance){
    if (direction==="forward") {
        position += distance;
    }
    else if (direction==="backward") {
        position -= distance;
    }
    return position;
}

function moveBackward(distance){
    if (direction === "forward") {
        position -= distance;
    }
    else if (direction === "backward"){
        position += distance;
    }
    return position;
}

function turnAround(){
    if (direction === "forward") {
        direction = "backward";
    }
    else {
        direction = "forward";
    }
    // else if (direction === "backward") {
    //     direction = "forward";
    //     return direction;
    // }
}

function printLocation(position){
    console.log(position);
}

moveForward(5)
moveBackward(3)
printLocation(position) //check: 2, good
turnAround()
moveForward(10)
moveBackward(5)
printLocation(position) //check: -3, good! huzzah
})();


/*
Extended Challenge 2 Dimensional:
A character can move around a map in two dimensions. They start at position 0 North, 0 East,
facing north and can move in any of the four cardinal directions. They can also change
direction. Use variables to keep track of their position and direction. Then define the following
functions:
● moveForward: takes a distance parameter. Move the character forward (based on the
direction they are facing) the specified distance.
● moveBackward: takes a distance parameter. Move the character backward (based on
the direction they are facing) the specified distance.
● turnLeft: change the direction by 90 degrees to the left.
● turnRight: change the direction by 90 degrees to the right.
● printLocation: logs the current position (N and E) to the console.
Call the functions in the following order and check the results:
1. moveForward 5
2. turnRight
3. moveForward 2
4. printLocation … should print 5 N, 2 E
5. turnLeft
6. turnLeft
7. moveForward 7
8. turnRight
9. moveBackward 3
10. printLocation … should print 2 N, -5 E
Wrap the whole program in an IIFE.
*/

(function () {
        let direction = "North"; // forward or backward, assuming default is forward
        let distanceN = 0;
        let distanceE = 0;
    
    function moveForward(distance){
        switch(direction){
            case "North": {distanceN+=distance}; return distanceN;
            case "East": {distanceE+=distance}; return distanceE;
            case "South": {distanceN-=distance}; return distanceN;
            case "West": {distanceE-=distance}; return distanceE;
        }
    }
    
    function moveBackward(distance){
        switch(direction){
            case "North": {distanceN-=distance}; return distanceN;
            case "East": {distanceE-=distance}; return distanceE;
            case "South": {distanceN+=distance}; return distanceN;
            case "West": {distanceE+=distance}; return distanceE;
        }
    }
    
    function turnAround(){ //  I know this isn't ever used, but I wanted to make it available
        switch(direction){
            case "North": direction = "South"; return direction;
            case "East": direction = "West"; return direction;
            case "South": direction = "North"; return direction;
            case "West": direction = "East"; return direction;
        }
    }
    function turnLeft(){
        switch(direction){
            case "North": direction = "West"; return direction;
            case "East": direction = "North"; return direction;
            case "South": direction = "East"; return direction;
            case "West": direction = "South"; return direction;
        }
    }
    function turnRight(){
        switch(direction){
            case "North": direction = "East"; return direction;
            case "East": direction = "South"; return direction;
            case "South": direction = "West"; return direction;
            case "West": direction = "North"; return direction;
        }
    }
    function printLocation(){
        console.log(`${distanceN} N, ${distanceE} E`);
    }
    function printDirection(){
        console.log(`You are facing ${direction}`);
    }


moveForward(5)
turnRight()
moveForward(2)
printLocation() // check 5 N, 2 E
turnLeft()
turnLeft()
moveForward(7)
turnRight()
moveBackward(3) // check 2 N, -5 E
printLocation()
turnAround() // the rest is just for fun
moveForward(10) 
printLocation() 
printDirection() 
turnAround()
printDirection()
})();