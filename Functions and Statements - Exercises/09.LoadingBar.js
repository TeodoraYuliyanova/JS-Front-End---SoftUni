function loadingBar(percentage) {
    let bar = [];

    for (let index = 10; index <= 100; index += 10) {
        if (index <= percentage) {
            bar.push("%");
        } else {
            bar.push(".");
        }

    }

       console.log(percentage === 100 ? "100% Complete!" : `${percentage}% [${bar.join("")}]\nStill loading...`);
}

loadingBar(50);