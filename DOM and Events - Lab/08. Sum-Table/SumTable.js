function sumTable() {

    let costs = Array.from(document.querySelectorAll("td:nth-child(2):not(#sum)"));

    const sum = costs.reduce((acc, curr) => {
        return acc + Number(curr.textContent);

    }, 0);


    document.querySelector("#sum").textContent = sum;

}