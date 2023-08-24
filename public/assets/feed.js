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
      <h3 id='blogPost-title' class='mt-5'>${blogPost.title}</h3>
      <p id='blogPost-text'>${blogPost.body}</p>
    `);
  }
}

updateFeed();