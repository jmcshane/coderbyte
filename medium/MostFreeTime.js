function MostFreeTime(arg) {
    var max = 0;
    var times =arg
        .map(getTimeNums);
    
    times = sortTimes(times);
    
    var firstEnd = times[0][1];
    
    for (var i = 1; i < times.length; i++) {
        console.log(firstEnd, nextStart);
        var nextStart = times[i][0];
        var diff = nextStart - firstEnd;
        if (diff > max) {
            max = diff;
        }
        firstEnd = times[i][1];
    }
    
    return convertNumToTime(max);
    
}

function getTimeNums(arg) {
    var out = arg.split("-").map(convertTimeToNum);
    console.log("Time nums", out);
    return out;
}

function convertTimeToNum(val) {
    console.log("Converting to num", val);
    var hourMinSplit = val.split(":");
    console.log("Hour minute split", hourMinSplit);
    var hours = parseInt(hourMinSplit[0]);
    var mins = parseInt(hourMinSplit[1].slice(0, 2));
    var pm = (hourMinSplit[1].substring(2).localeCompare("PM") === 0) ? 1 :0;
    console.log("PM?", pm);
    if (hours === 12) {
        hours = 0;
    }
    if (pm) {
        hours += 12;
    }
    console.log(hours, mins);
    return (hours * 60) + mins;
    
}

function convertNumToTime(arg) {
    var hours = Math.floor(arg / 60);
    var mins = arg % 60;
    
    var hoursStr = (hours < 10) ? "0" + hours : hours + "";
    var minsStr = (mins < 10) ? "0" + mins : mins + "";
    console.log(hoursStr, minsStr);
    return hoursStr + ":" + minsStr;
}

function sortTimes(times) {
    console.log("Unsorted",times);
    times.sort(function(a,b) {
        return a[0] - b[0];
    });
    console.log("Sorted times", times);
    return times;
}

var out = MostFreeTime(["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"]);
console.log("Should be 00:30");
console.log(out);
out = MostFreeTime(["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"]);
console.log("Should be 00:04");
console.log(out);

var test = convertTimeToNum("01:00AM");
console.log("Should be 60");
console.log(test);