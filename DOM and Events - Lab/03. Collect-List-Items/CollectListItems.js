function extractText() {
    const elements = Array.from(document.querySelectorAll("ul#items li"));

    const result = document.querySelector('#result');

    elements.forEach(element => result.value += element.textContent + "\n");

}