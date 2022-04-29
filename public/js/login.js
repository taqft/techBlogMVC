    $(document).ready(function () {
      const logoutBtn = $('#logoutBtn');
          logoutBtn.on('click', async function () {
            console.log(logoutBtn);
            await $.post('/api/users/logout');
            window.location.href = '/';
          });
        });
        