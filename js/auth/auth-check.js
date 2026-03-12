firebase.auth().onAuthStateChanged((user) => {

if(!user){

// user not logged in
window.location.replace("index.html");

}

});