$(document).ready(function () {
  const titleField = $('#titleField');
  const contentField = $('#contentField');
  const addBlogBtn = $('#addBlogBtn');

  addBlogBtn.on('click', async function (event) {
    event.preventDefault();
    await $.post('/api/blog', {
      title: titleField.val(),
      content: contentField.val(),
    });
    window.location.reload();
  });
});
