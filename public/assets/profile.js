async function getProfile() {
  // get posts from sequelize MySQL database via fetch call to API
  const response = await fetch('/api/user/profile');

  if (!response.ok) {
    console.log('Error fetching blog post data from api')
  }

  const profileData = await response.json();
  console.log(profileData);

  $('#profile-email').html(`
  <h4>My Email: </h4>
    <h3>
      <strong><a href='mailto:${profileData.email}'>${profileData.email}</a></strong>
    </h3>
  `);
  $('#profile-about').html(`<h3>About Me: </h3><p>${profileData.about}</p>`);
}

getProfile();