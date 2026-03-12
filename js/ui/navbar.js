document.addEventListener("DOMContentLoaded", () => {

const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header>

<h2>BlogForge</h2>

<div class="menu-toggle" id="menuToggle">
☰
</div>

<nav id="navLinks">

<a href="index.html">Home</a>

<a href="create-blog.html" id="createLink">Create Blog</a>

<a href="profile.html" id="profileLink">Profile</a>

<button id="loginBtn">Login</button>

<button id="logoutBtn">Logout</button>

</nav>

</header>
`;

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const createLink = document.getElementById("createLink");
const profileLink = document.getElementById("profileLink");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");



/* MOBILE MENU TOGGLE */

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("show");

});



/* AUTH STATE */

firebase.auth().onAuthStateChanged((user)=>{

if(user){

loginBtn.style.display="none";
logoutBtn.style.display="inline-block";
createLink.style.display="inline-block";
profileLink.style.display="inline-block";

}else{

loginBtn.style.display="inline-block";
logoutBtn.style.display="none";
createLink.style.display="none";
profileLink.style.display="none";

}

});



/* LOGIN BUTTON */

loginBtn.addEventListener("click",()=>{
window.location.href="login.html";
});



/* LOGOUT BUTTON */

logoutBtn.addEventListener("click",async()=>{

await firebase.auth().signOut();

window.location.replace("index.html");

});

});