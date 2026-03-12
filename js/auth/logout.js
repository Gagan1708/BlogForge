function logout(){

auth.signOut()
.then(()=>{

alert("Logged out");

window.location="login.html";

})
.catch(err=>{

console.log(err);

});

}