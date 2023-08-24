const user = []

function handleSignUp(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect user information from the sign-up form
  const emailInput = document.querySelector('input[name="email-name"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const verifyPasswordInput = document.querySelector('input[name="verify-password"]');

  const email = emailInput.value;
  const password = passwordInput.value;
  const verifyPassword = verifyPasswordInput.value;

  // Check if passwords match
  if (password !== verifyPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  console.log('User sign-up request:', email);

  const user = { email, password };
  ////////////user sign-up post request
  fetch('/api/user/register', {
    method: 'POST',

    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    }
  }
  )
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      location.href = '/login';
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred during sign-up.');
    });
}

document.getElementById('signUp').addEventListener('click', handleSignUp)

function handleLogin(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="email-name"]');
  const passwordInput = document.querySelector('input[name="password"]');

  const email = emailInput.value;
  const password = passwordInput.value;

  const user = { email, password };

  // Send login data to the server
  fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      location.href = '/profile';
    })
    .catch(error => {
      console.error(error);
      alert('Login failed. Please try again.');
    });
}

document.getElementById('login').addEventListener('click', handleLogin);