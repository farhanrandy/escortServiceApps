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
		// Redirect to gender.html
		window.location.href = "genderSelection.html";
		document.getElementById("pesanan").innerHTML = `Hey ${vUsername}, kemana Aja? Kita udah kangen banget nih`
	} else {
		alert("Salah ketik ngga sih?");
	}

	inputUsername.value = "";
	inputPassword.value = "";
}

function pilihGender(gender) {
	if (gender === "Cowok") {
		window.location.href = "maleProfile.html";
	} else if (gender === "Cewek") {
		window.location.href = "femaleProfile.html";
	}
}