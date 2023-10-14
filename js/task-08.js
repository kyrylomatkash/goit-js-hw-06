const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value.trim();
  });

  if (!data.email || !data.password) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  console.log('Дані форми:', data);

  loginForm.reset();
});

