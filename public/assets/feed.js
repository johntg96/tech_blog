// feed.js
// Front-end JS for fetching blog posts from API
const feedPosts = $('#feed-posts');

async function updateFeed() {
  // get posts from sequelize MySQL database via fetch call to API
  const response = await fetch('/api/blogData/blogPosts');

  if (!response.ok) {
    console.log('Error fetching blog post data from api')
  }

  const blogPosts = await response.json();
  console.log(blogPosts);

  for (blogPost of blogPosts) {
    feedPosts.append(`
      <h3 class='blogPost-title' class='mt-5'>${blogPost.title}</h3>
      <p class='blogPost-text'>${blogPost.body}</p>
      <p class='blogPost-author'>Author: <em>${blogPost.user_email}</em></p>
      <p class='blogPost-date'>${blogPost.create_date}</p>
    `);
  }
}

updateFeed();