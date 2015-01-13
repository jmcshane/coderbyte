function CountingMinutes(arg) {
    var times = arg.split("-");
    var minutesIntoDay = times.map(getMinutesIntoDay);
    if (isFirstEarlier(minutesIntoDay)) {
        return minutesIntoDay[1] - minutesIntoDay[0];
    }
    else {
        return minsFromEnd(minutesIntoDay[0]) + minutesIntoDay[1];
    }
    
}


function minsFromEnd(time) {
    return 1440 - time;
}

function getMinutesIntoDay(time) {
    var array = time.split("");
    var hourMinSplit = time.split(":");
    console.log("Hour minute split", hourMinSplit);
    var hours = parseInt(hourMinSplit[0]);
    var mins = parseInt(hourMinSplit[1].slice(0, 2));
    console.log("AM?PM", hourMinSplit[1].substring(2));
    var pm = (hourMinSplit[1].substring(2) === "pm");
    if (hours === 12) {
        hours = 0;
    }
    if (pm) {
        hours += 12;
    }
    console.log(hours, mins);
    return (hours * 60) + mins;
}

function isFirstEarlier(arr) {
    return arr[0] < arr[1];
}

var out = CountingMinutes("1:00pm-1:45pm");
console.log("Should be 45");
console.log(out);
out = CountingMinutes("11:15am-1:00pm");
console.log("Should be 105");
console.log(out);
out = CountingMinutes("12:00am-12:00pm");
console.log("Should be 720");
console.log(out);
out = CountingMinutes("12:01am-12:00am");
console.log("Should be 1439");
console.log(out);

