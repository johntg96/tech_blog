async function getProfile() {
  // get posts from sequelize MySQL database via fetch call to API
  const response = await fetch('/api/user/profile');

  if (!response.ok) {
    console.log('Error fetching blog post data from api')
  }

  const profileData = await response.json();
  console.log(profileData);

  $('#profile-email').html(`My Email: <strong><a href='mailto:${profileData.email}'>${profileData.email}</a></strong>`);
  $('#profile-about').html(`About Me: ${profileData.about}`);
}

getProfile();