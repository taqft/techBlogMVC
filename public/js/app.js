$(document).ready(function () {
  const emailField = $('#emailField');
  const passwordField = $('#passwordField');
  const signinForm = $('#signinForm');
  const logoutBtn = $('#logoutBtn');

  signinForm.on('submit', async (event) => {
    event.preventDefault();

    console.log('Hello');

    await $.post('/api/users/login', {
      email: emailField.val().trim(),
      password: passwordField.val().trim(),
    });

    window.location.href = '/profile';
  });

  logoutBtn.on('click', async function () {
    await $.post('/api/users/logout');
    window.location.href = "/";
  });
});
