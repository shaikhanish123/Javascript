const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddFun() {
    if (inputBox.value === '') {
        alert("Please enter text");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        // Create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Add functionality to delete the list item
        deleteButton.onclick = function () {
            listContainer.removeChild(li);
        };

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the list container
        listContainer.appendChild(li);

        // Clear the input box after adding the item
        inputBox.value = '';
    }
}
