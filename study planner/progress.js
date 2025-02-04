// Get DOM elements
const subjectInput = document.getElementById('subject');
const hoursInput = document.getElementById('hours');
const logProgressBtn = document.getElementById('logProgressBtn');
const progressTable = document.getElementById('progressTable').getElementsByTagName('tbody')[0];
const totalHoursDisplay = document.getElementById('totalHours');

let totalHours = 0;

// Function to log progress
function logProgress() {
  const subject = subjectInput.value.trim();
  const hours = parseFloat(hoursInput.value);

  if (subject === '' || isNaN(hours) || hours <= 0) {
    alert('Please enter valid subject and hours!');
    return;
  }

  // Add row to the table
  const newRow = progressTable.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = subject;
  cell2.textContent = hours;
  cell3.innerHTML = '<button class="delete-btn" onclick="deleteProgress(this)">Delete</button>';

  // Update total hours
  totalHours += hours;
  totalHoursDisplay.textContent = totalHours.toFixed(2);

  // Clear input fields
  subjectInput.value = '';
  hoursInput.value = '';
}

// Function to delete progress
function deleteProgress(button) {
  const row = button.parentElement.parentElement;
  const hours = parseFloat(row.cells[1].textContent);

  // Subtract hours from total
  totalHours -= hours;
  totalHoursDisplay.textContent = totalHours.toFixed(2);

  // Remove row
  row.remove();
}

// Event listener for log progress button
logProgressBtn.addEventListener('click', logProgress);

// Add progress on pressing Enter key
hoursInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    logProgress();
  }
});