function colorize() {
    let elementsToColorize = Array.from(document.querySelectorAll("tr:nth-child(even)"));

    elementsToColorize.forEach(element => element.style.backgroundColor = 'Teal');
}