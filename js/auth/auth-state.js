firebase.auth().onAuthStateChanged((user)=>{

const logoutBtn = document.getElementById("logoutBtn");

if(user){

// user logged in
if(logoutBtn){
logoutBtn.style.display="inline-block";
}

}else{

// user logged out
if(logoutBtn){
logoutBtn.style.display="none";
}

// hide protected features
const createLink = document.querySelector('a[href="create-blog.html"]');
const profileLink = document.querySelector('a[href="profile.html"]');

if(createLink) createLink.style.display="none";
if(profileLink) profileLink.style.display="none";

}

});