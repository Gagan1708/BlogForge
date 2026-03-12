function login(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)
.then(()=>{

alert("Login success");
window.location="index.html";

})
.catch(err=>alert(err.message));

}