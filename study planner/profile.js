// profile.js
const profileImage = document.getElementById('profileImage');
const uploadImage = document.getElementById('uploadImage');
const changeImageBtn = document.getElementById('changeImageBtn');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const editNameBtn = document.getElementById('editNameBtn');
const editEmailBtn = document.getElementById('editEmailBtn');

// Change Profile Picture
changeImageBtn.addEventListener('click', () => {
  uploadImage.click();
});

uploadImage.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Edit User Name
editNameBtn.addEventListener('click', () => {
  if (userName.readOnly) {
    userName.readOnly = false;
    userName.focus();
  } else {
    userName.readOnly = true;
    alert('Name updated successfully!');
  }
});

// Edit User Email
editEmailBtn.addEventListener('click', () => {
  if (userEmail.readOnly) {
    userEmail.readOnly = false;
    userEmail.focus();
  } else {
    userEmail.readOnly = true;
    alert('Email updated successfully!');
  }
});