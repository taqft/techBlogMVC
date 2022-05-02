$(document).ready(function () {
  const emailField = $('#emailField');
  const usernameField = $('#usernameField');
  const passwordField = $('#passwordField');
  const signupBtn = $('#signupBtn');

  signupBtn.on('click', async function (e) {
    e.preventDefault();
    await $.post('/api/users/signup', {
      email: emailField.val().trim(),
      username: usernameField.val().trim(),
      password: passwordField.val().trim(),
    });
    window.location.href = '/profile';
  });
});
