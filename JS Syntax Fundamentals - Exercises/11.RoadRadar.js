function roadRadar(currentSpeed, area) {
    let speedLimit = 0;
    let status = "";

    if (area === "motorway") {
        speedLimit = 130;
    } else if (area === "interstate") {
        speedLimit = 90;
    } else if (area === "city") {
        speedLimit = 50;
    } else if (area === "residential") {
        speedLimit = 20;
    }

    if (currentSpeed <= speedLimit) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
        return;
    }

    let difference = currentSpeed - speedLimit;

    if (difference <= 20) {
        status = "speeding";
    } else if (difference > 20 && difference <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');