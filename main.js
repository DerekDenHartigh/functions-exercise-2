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

function turnAround(direction){
    if (direction === "forward") {
        return direction = "backward";
        // return direction;
    }
    else {
        return direction = "forward";
        // return direction;
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
printLocation(position) //check: -3, getting 7, meaning the turn around is not working...
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
    
})();