// Select the form
const signupForm = document.querySelector('form'); // adjust if multiple forms exist

signupForm.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  // Get input values
  const firstName = document.querySelector('#fname').value.trim();
  const lastName = document.querySelector('#lname').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const confirmPassword = document.querySelector('#cpassword').value.trim();
  const termsChecked = document.querySelector('#terms').checked;

  // Basic validation
  if (!termsChecked) {
    alert('Please agree to the Terms and Conditions.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Create a user object
  const user = {
    firstName,
    lastName,
    email,
    password, // for real apps, never store plain passwords
  };

  // Get existing users from localStorage or initialize empty array
  const users = JSON.parse(localStorage.getItem('wildhouseUsers')) || [];

  // Check if email already exists
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    alert('User with this email already exists.');
    return;
  }

  // Add new user and save to localStorage
  users.push(user);
  localStorage.setItem('wildhouseUsers', JSON.stringify(users));

  alert('Account created successfully!');
  // Redirect to login page
  window.location.href = 'login.html';
});
