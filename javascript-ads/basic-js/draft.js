var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
    if (strokes==1) {

        return "Hole-in-one!";
    }  

    else if ((par-2) >= strokes) {
        return "Eagle";
    }

    else if ((par-1) == strokes) {
        return "Birdie";
    }

    else if (par == strokes) {
        return "Par";
    }
    
    else if ((par+1) == strokes) {
        return "Bogey";
    }

    else if ((par+2) == strokes) {
        return "Double Bogey";
    }

    else if ((par+3)<= strokes) {
        return "Go home!";
    }

    return "Change Me";
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));
