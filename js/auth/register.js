function register(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){
alert("Passwords do not match");
return;
}

if(password.length < 6){
alert("Password must be at least 6 characters");
return;
}

auth.createUserWithEmailAndPassword(email, password)

.then(()=>{

alert("Account created successfully");

window.location = "login.html";

})

.catch(err => alert(err.message));

}