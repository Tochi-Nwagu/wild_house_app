const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Get stored users
  const users = JSON.parse(localStorage.getItem('wildhouseUsers')) || [];

  // Check if credentials match
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert(`Welcome back, ${user.firstName}!`);
    // You can save logged in user info
    localStorage.setItem('wildhouseCurrentUser', JSON.stringify(user));
    // Redirect to home page
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password.');
  }
});
