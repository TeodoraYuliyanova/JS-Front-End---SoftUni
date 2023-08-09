function addItem() {
    let elementToAdd = document.getElementById("newItemText").value;

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(elementToAdd));

    document.getElementById("items").appendChild(li);
}