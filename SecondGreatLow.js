function SecondGreatLow(arg) {
    
    var lowest, highest, secondLowest, secondHighest;
    console.log(arg);
    var elt = arg.pop();
    while (elt !== undefined) {
        console.log(elt);
        if (lowest === undefined || elt < lowest) {
            lowest = elt;
            if (secondHighest === undefined) {
                secondHighest = elt;
            }
        }
        if (highest === undefined || elt > highest) {
            highest = elt;
            if (secondLowest === undefined) {
                secondLowest = elt;
            }
        }
        if (elt > highest) {
            highest = elt;
        } else if (elt < highest && elt > secondHighest) {
            secondHighest = elt;
        } else if (elt < secondLowest && elt > lowest) {
            secondLowest = elt
        } else if (elt < lowest) {
            lowest = elt
        }
        elt = arg.pop();
    }
    return secondHighest + " " + secondLowest;
}



var out = SecondGreatLow([78, 90, 100, 1,1,1,1,1, 2]);
console.log(out);
