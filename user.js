// document.querySelector(".btn-outline-warning").addEventListener("click", function () {
//   document.getElementById("editName").value = document.getElementById("profile-name").textContent;
//   document.getElementById("editAbout").value = document.getElementById("profile-about").textContent;
//   document.getElementById("editBirthday").value = document.getElementById("profile-birthday").textContent;
//   document.getElementById("editCity").value = document.getElementById("profile-city").textContent;
//   document.getElementById("editAge").value = document.getElementById("profile-age").textContent;
//   document.getElementById("editHobby").value = document.getElementById("profile-hobby").textContent;
  
//   document.getElementById("editProfilePopup").style.display = "flex";
// });

// function applyChanges() {
//   document.getElementById("profile-name").textContent = document.getElementById("editName").value;
//   document.getElementById("profile-about").textContent = document.getElementById("editAbout").value;
//   document.getElementById("profile-birthday").textContent = document.getElementById("editBirthday").value;
//   document.getElementById("profile-city").textContent = document.getElementById("editCity").value;
//   document.getElementById("profile-age").textContent = document.getElementById("editAge").value;
//   document.getElementById("profile-hobby").textContent = document.getElementById("editHobby").value;

//   closeEditPopup();
// }

// function closeEditPopup() {
//   document.getElementById("editProfilePopup").style.display = "none";
// }

// Show popup and fill input values - Option 2
document.querySelector(".btn-outline-warning").addEventListener("click", function () {
  document.getElementById("editName").value = document.getElementById("profile-name").textContent;
  document.getElementById("editAbout").value = document.getElementById("profile-about").textContent;
  document.getElementById("editBirthday").value = document.getElementById("profile-birthday").textContent;
  document.getElementById("editCity").value = document.getElementById("profile-city").textContent;
  document.getElementById("editAge").value = document.getElementById("profile-age").textContent;
  document.getElementById("editHobby").value = document.getElementById("profile-hobby").textContent;

  document.getElementById("editProfilePopup").style.display = "flex";
  document.getElementById("saveHobbyBtn").style.display = "none"; // Reset save button visibility
});

// Apply all form changes
function applyChanges() {
  document.getElementById("profile-name").textContent = document.getElementById("editName").value;
  document.getElementById("profile-about").textContent = document.getElementById("editAbout").value;
  document.getElementById("profile-birthday").textContent = document.getElementById("editBirthday").value;
  document.getElementById("profile-city").textContent = document.getElementById("editCity").value;
  document.getElementById("profile-age").textContent = document.getElementById("editAge").value;
  document.getElementById("profile-hobby").textContent = document.getElementById("editHobby").value;

  closeEditPopup();
}

// Close popup
function closeEditPopup() {
  document.getElementById("editProfilePopup").style.display = "none";
}

// Clear hobby field
function clearHobby() {
  document.getElementById("editHobby").value = "";
  enableSave();
}

// Enable save button (called on update/delete)
function enableSave() {
  document.getElementById("saveHobbyBtn").style.display = "inline-block";
}

// Save hobby only
function saveHobbyChange() {
  const hobbyValue = document.getElementById("editHobby").value;
  document.getElementById("profile-hobby").textContent = hobbyValue;
  document.getElementById("saveHobbyBtn").style.display = "none";
  alert("Hobby updated!");
}

// Optional: auto-show save button when hobby input changes
document.getElementById("editHobby").addEventListener("input", function () {
  document.getElementById("saveHobbyBtn").style.display = "inline-block";
});