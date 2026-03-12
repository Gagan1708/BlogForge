export function initLikes(blogId){

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

const blogRef = firebase.firestore().collection("blogs").doc(blogId);


/* realtime like count */

blogRef.onSnapshot((doc)=>{

const data = doc.data();

if(!data) return;

likeCount.innerText = (data.likes || 0) + " Likes";

});



/* like click */

likeBtn.addEventListener("click", async ()=>{

const user = firebase.auth().currentUser;

if(!user){
alert("Login to like the blog");
return;
}

const doc = await blogRef.get();
const data = doc.data();

const likedUsers = data.likedUsers || [];


/* if user already liked */

if(likedUsers.includes(user.uid)){

alert("You already liked this blog");

return;

}


/* add like */

await blogRef.update({

likes: firebase.firestore.FieldValue.increment(1),

likedUsers: firebase.firestore.FieldValue.arrayUnion(user.uid)

});

});

}