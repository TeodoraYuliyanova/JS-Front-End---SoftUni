function manageMeeting(array) {
    const scedule = array.reduce((acc,curr) => {
        const [weekday,personName] = curr.split(" ");

        if (acc.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            acc[weekday] = personName;
            console.log(`Scheduled for ${weekday}`);
        }

        return acc;

    }, {});

    Object.entries(scedule).forEach((pair) => {
        console.log(`${pair[0]} -> ${pair[1]}`);
    })
}

manageMeeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);