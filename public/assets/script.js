const user = []

function handleRegister(event) {

  // Collect user information from the sign-up form
  const email = $('#emailField').val();
  const password = $('#passwordField').val();
  const verifyPassword = $('#passwordFieldVerify').val();
  const about = $('#register-about-me').val();

  // Check if passwords match
  if (password !== verifyPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  console.log('User sign-up request:', email, password);

  const user = { email, password, about };
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

function handleLogin(event) {

  const email = $('#emailField').val();
  const password = $('#passwordField').val();

  const user = { email, password };

  console.log(user);

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

function logoutUser() {
  // Make fetch POST to hit DELETE route to destroy user session, thus logging out user.
  fetch('/api/user', {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    alert('logged out!');
    location.href = '/';
  })
  .catch(error => {
    console.error(error);
    alert("logging out user failed");
  })
}

$('#registerBtn').on('click', function() {
  console.log($(this).text());

  if ($(this).text() === 'Register') {
    handleRegister();
  } else if ($(this).text() === 'New Registration') {
    window.location.href= '/register';
  } else if ($(this).text() === "") {
    alert('An error occurred attempting to login, please try again.');  }
})

$('#loginBtn').on('click', function() {
  console.log($(this).text());

  if ($(this).text() === 'Login') {
    handleLogin();
  } else if ($(this).text() === 'Back to Login') {
    window.location.href= '/login';
  } else {
    alert('An error occurred attempting to login, please try again.');
  }
})