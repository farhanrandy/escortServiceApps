document.querySelector(".btn-outline-warning").addEventListener("click", function () {
  document.getElementById("editName").value = document.getElementById("profile-name").textContent;
  document.getElementById("editAbout").value = document.getElementById("profile-about").textContent;
  document.getElementById("editBirthday").value = document.getElementById("profile-birthday").textContent;
  document.getElementById("editCity").value = document.getElementById("profile-city").textContent;
  document.getElementById("editAge").value = document.getElementById("profile-age").textContent;
  document.getElementById("editHobby").value = document.getElementById("profile-hobby").textContent;
  
  document.getElementById("editProfilePopup").style.display = "flex";
});

function applyChanges() {
  document.getElementById("profile-name").textContent = document.getElementById("editName").value;
  document.getElementById("profile-about").textContent = document.getElementById("editAbout").value;
  document.getElementById("profile-birthday").textContent = document.getElementById("editBirthday").value;
  document.getElementById("profile-city").textContent = document.getElementById("editCity").value;
  document.getElementById("profile-age").textContent = document.getElementById("editAge").value;
  document.getElementById("profile-hobby").textContent = document.getElementById("editHobby").value;

  closeEditPopup();
}

function closeEditPopup() {
  document.getElementById("editProfilePopup").style.display = "none";
}
