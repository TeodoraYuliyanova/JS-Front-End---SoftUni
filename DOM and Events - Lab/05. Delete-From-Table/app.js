function deleteByEmail() {
    let emailToBeDeleted = Array.from(document.getElementsByName("email"))[0].value;

    let existingEmails = Array.from(document.querySelectorAll("#customers td:nth-child(2)"));

    let userEmailBox = existingEmails.find((email) => email.textContent === emailToBeDeleted);

    const result = document.querySelector("#result");

    if (userEmailBox) {
        userEmailBox.parentElement.remove();
        result.textContent = "Deleted.";

    } else {
        result.textContent = "Not found.";
    }

}
