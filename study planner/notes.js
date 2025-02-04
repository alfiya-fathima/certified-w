// Function to save the note
function saveNote() {
    let noteText = document.getElementById("noteInput").value;
    if (noteText.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    // Get current notes from localStorage, or initialize as an empty array
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Add the new note to the notes array
    notes.push(noteText);

    // Save updated notes array back to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    // Clear the input field after saving
    document.getElementById("noteInput").value = "";
    
    // Refresh the notes list to display the newly added note
    displayNotes();
}

// Function to display all saved notes
function displayNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";  // Clear existing notes

    // Retrieve saved notes from localStorage
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Loop through each note and display it
    notes.forEach((note, index) => {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");

        // Add note content and delete button
        noteDiv.innerHTML = `
            <div class="note-content">${note}</div>
            <button class="delete" onclick="deleteNote(${index})">❌</button>
        `;
        
        // Append the note to the notes list
        notesList.appendChild(noteDiv);
    });
}

// Function to delete a specific note by index
function deleteNote(index) {
    // Retrieve notes from localStorage
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Remove the note at the specified index
    notes.splice(index, 1);

    // Save the updated notes array back to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    // Refresh the notes list to reflect the changes
    displayNotes();
}

// Function to clear all saved notes
function clearAllNotes() {
    // Remove all notes from localStorage
    localStorage.removeItem("notes");

    // Refresh the notes list to remove all notes
    displayNotes();
}

// Display the notes when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayNotes();
});