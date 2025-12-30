function login(){
  // Debugging
  console.log("Attempting login...");
  console.log("User input:", username.value);

  if(username.value === "student" && password.value === "123"){
    console.log("Login success");
    localStorage.setItem("login","true");
    window.location = "dashboard.html";
  } else {
    console.log("Login failed");
    error.innerText = "Invalid username or password";
  }
}

function checkLogin(){
  if(localStorage.getItem("login")!=="true"){
    window.location="index.html";
  }
}

function logout(){
  var confirmLogout = confirm("Are you sure you want to logout?");
  if(confirmLogout){
      localStorage.removeItem("login");
      window.location="index.html";
  }
}