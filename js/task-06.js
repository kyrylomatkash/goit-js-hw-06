const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.dataset.length);
  const enteredLength = validationInput.value.length;

  if (enteredLength === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
