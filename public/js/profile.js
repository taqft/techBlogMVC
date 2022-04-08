$(document).ready(function () {
  const titleField = $('#blog-title');
  const contentField = $('#blog-content');
  const addBlogBtn = $('#addBlogBtn');
  const deleteBlogBtn = $('.deleteBlogBtn');

  addBlogBtn.on('click', async function (event) {
    event.preventDefault();
    await $.post('/api/blog', {
      title: titleField.val(),
      content: contentField.val(),
    });
    window.location.reload();
  });

  deleteBlogBtn.on('click', async function (event) {

    console.log('Delete');
    await $.delete('/api/blog/:id', {
    });
    window.location.reload();
  });
});
