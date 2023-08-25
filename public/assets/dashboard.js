async function fetchOldBlogPosts() {
  const request = await fetch('/api/blogData/userBlogPosts');

  if (!request.ok) {
    console.log('Error doing fetch POST request for blog post data to api')
  }

  const response = await request.json();
  console.log(response.data);

  for (const blogPost of response.data) {
    $('#old-posts').append(`
      <div class='blogPost'>
        <h3 class='blogPost-title' class='mt-5'>${blogPost.title}</h3>
        <p class='blogPost-text'>${blogPost.body}</p>
        <p class='blogPost-author'>Author: <em>${blogPost.user_email}</em></p>
        <p class='blogPost-date'>${blogPost.create_date}</p>
      </div>
    `);
  }

}

async function submitNewBlogPost(title, body) {
  
  const newBlogPost = { title, body };

  const submission = await fetch('/api/blogData/blogPosts', {
    method: 'POST',

    body: JSON.stringify(newBlogPost),
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if (!submission.ok) {
    console.log('Error doing fetch POST request for blog post data to api')
  }

  const response = await submission.json();

  console.log(response);
  alert('New blog post submitted successfully!');

  window.location.href= '/homepage';
}

$('#new-post-btn').on('click', function() {
  $('.new-post-form').toggle();
});

$('#submit-post-btn').on('click', function() {
  const blogPostTitle = $('#blogPostTitle').val();
  const blogPostBody = $('#blogPostBody').val();

  if (blogPostTitle === "" || blogPostBody === "") {
    alert('Title/Body Content cannot be empty');
    return;
  }

  submitNewBlogPost(blogPostTitle, blogPostBody);
});

fetchOldBlogPosts();