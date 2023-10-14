const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
  const enteredName = event.target.value;
  nameOutput.textContent = enteredName || 'Anonymous';
});
