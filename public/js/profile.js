$(document).ready(function () {
  const titleField = $('#blog-title');
  const contentField = $('#blog-content');
  const addBlogBtn = $('#addBlogBtn');
  const deleteBlogBtn = $('.deleteBlogBtn');

  addBlogBtn.on('click', async function (event) {
    event.preventDefault();
    await $.post('/api/blog', {
      title: titleField.val().trim(),
      content: contentField.val().trim(),
    });
    window.location.href = '/profile';
  });

  deleteBlogBtn.on('click', async function (event) {

    const id = event.target.getAttribute('data-id');
    await $.ajax({
      url: `/api/blog/${id}`,
      type: 'DELETE',
      success: function(response) {
        //...
        window.location.reload();
      }
   });
  });
});
