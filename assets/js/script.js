// Original Login
/*
// Login 
// let isLogin = false
// let divLogin = document.getElementById("login")
// let divHome = "how to get home or index.html"
// //logout 
// function handleLogout() {
// 	isLogin = false
// 	checkIsLogin()
// }

// // function on button submit (login) is clicked
// function handleLogin() {
// 	let inputUsername = document.getElementById("username")
// 	let inputPassword = document.getElementById("password")

// 	//check value from input: username and password: koksasi / k0k545i
// 	let vUsername = inputUsername.value
// 	let vPassword = inputPassword.value

// 	if (vUsername === "koksasi" && vPassword === "k0k545i") {
// 		isLogin = true
// 		document.getElementById("?").innerHTML > how to fecth gender.html file  

// 		//invoke checkIsLogin()
// 		checkIsLogin()

// 	} else {
// 		alert("Salah ketik ngga sih?")
// 	}
// 	inputUsername.value = ""
// 	inputPassword.value = ""
// }
*/

function handleLogin(event) {
  event.preventDefault(); // Prevent the login form from submitting/reloading

  let inputUsername = document.getElementById("username");
  let inputPassword = document.getElementById("password");

  let vUsername = inputUsername.value.trim();
  let vPassword = inputPassword.value;

  if (vUsername === "koksasi" && vPassword === "k0k545i") {
    // Expecting to save into localStorage
    localStorage.setItem("username", vUsername);
    // Redirect to gender.html
    window.location.href = "genderSelection.html";
    document.getElementById(
      "pesanan"
    ).innerHTML = `Hey ${vUsername}, kemana Aja? Kita udah kangen banget nih`;
  } else {
    alert("Salah ketik ngga sih?");
  }

  inputUsername.value = "";
  inputPassword.value = "";
}

function pilihGender(gender) {
  if (gender === "Cowok") {
    window.location.href = "femaleProfile.html";
  } else if (gender === "Cewek") {
    window.location.href = "maleProfile.html";
  }
}

// Remder alertmessage from "Selanjutnya" button
function closePopup() {
  window.location.href = "alertmessage.html";
}

// window.addEventListener("load", function () {
//   let modal = document.getElementById("popupModal");
//   let closeBtn = document.querySelector(".modal .close");

//   modal.style.display = "flex";

//   closeBtn.onclick = function () {
//     modal.style.display = "none";
//   };

//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   };
// });
window.addEventListener("load", function () {
  let modal = document.getElementById("popupModal");
  let closeBtn = document.querySelector(".modal .close");

  // Get the saved username from login function
  let vUsername = localStorage.getItem("username") || "Sobat";

  // Replace the message dynamically
  let popupMessage = document.getElementById("popupMessage");
  if (popupMessage) {
    popupMessage.innerHTML = `
      <strong>Selamat! ${vUsername}</strong>, pasanganmu sudah ngga sabar mau ketemuan,
      <strong>Bisa COD atau transfer yaa</strong>...<br><br>
      Ini no WhatsApp nya <strong>0812-3456-7890</strong>.<br><br>
      Enjoy love!!!<br><br>
  
  		<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://media.tenor.com/FTXxXiZwigkAAAAM/laughing-chimp-monkey.gif" alt="Laughing Monkey QR" width="150">
    `;
  }

  modal.style.display = "flex";

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

function handleLogout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}


// Footer current year
window.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});