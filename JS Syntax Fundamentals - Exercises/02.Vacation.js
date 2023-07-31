function vacation(groupOf, typeGroup, DayOfWeek) {

    let sum = 0;

    if (typeGroup === "Students") {
        if (DayOfWeek === "Friday") {
            sum = 8.45 * groupOf;
        } else if (DayOfWeek === "Saturday") {
            sum = 9.80 * groupOf;
        } else if (DayOfWeek === "Sunday") {
            sum = 10.46 * groupOf;
        }

        if (groupOf >= 30) {
            sum -= sum * 0.15;
        }

    } else if (typeGroup === "Business") {
        if (groupOf >= 100) {
            groupOf -= 10;
        }

        if (DayOfWeek === "Friday") {
            sum = 10.90 * groupOf;
        } else if (DayOfWeek === "Saturday") {
            sum = 15.60 * groupOf;
        } else if (DayOfWeek === "Sunday") {
            sum = 16 * groupOf;
        }

    } else if (typeGroup === "Regular") {
        if (DayOfWeek === "Friday") {
            sum = 15 * groupOf;
        } else if (DayOfWeek === "Saturday") {
            sum = 20 * groupOf;
        } else if (DayOfWeek === "Sunday") {
            sum = 22.50 * groupOf;
        }

        if (groupOf >= 10 && groupOf <= 20) {
            sum -= sum * 0.05;
        }
    }

    console.log('Total price: ' + sum.toFixed(2));
}

vacation(40,"Regular","Saturday");