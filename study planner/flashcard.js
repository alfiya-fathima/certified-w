// Get DOM elements
const questionInput = document.getElementById('questionInput');
const answerInput = document.getElementById('answerInput');
const addFlashcardBtn = document.getElementById('addFlashcardBtn');
const flashcardsContainer = document.getElementById('flashcardsContainer');

// Function to add a new flashcard
function addFlashcard() {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (question === '' || answer === '') {
    alert('Please enter both a question and an answer!');
    return;
  }

  // Create flashcard element
  const flashcard = document.createElement('div');
  flashcard.classList.add('flashcard');

  // Front of the flashcard (question)
  const flashcardFront = document.createElement('div');
  flashcardFront.classList.add('flashcard-front');
  flashcardFront.textContent = question;

  // Back of the flashcard (answer)
  const flashcardBack = document.createElement('div');
  flashcardBack.classList.add('flashcard-back');
  flashcardBack.textContent = answer;

  // Add flip functionality
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
  });

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent flipping when deleting
    flashcardsContainer.removeChild(flashcard);
  });

  // Append elements to the flashcard
  flashcard.appendChild(flashcardFront);
  flashcard.appendChild(flashcardBack);
  flashcard.appendChild(deleteBtn);

  // Add flashcard to the container
  flashcardsContainer.appendChild(flashcard);

  // Clear input fields
  questionInput.value = '';
  answerInput.value = '';
}

// Event listener for add flashcard button
addFlashcardBtn.addEventListener('click', addFlashcard);

// Add flashcard on pressing Enter key
answerInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addFlashcard();
  }
});