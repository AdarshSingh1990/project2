const form = document.getElementById('signupForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function (e) {
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (name === '' || email === '' || password === '') {
    e.preventDefault();
    errorMsg.textContent = 'Please fill out all fields.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    e.preventDefault();
    errorMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  errorMsg.textContent = ''; // clear error if all good
});
