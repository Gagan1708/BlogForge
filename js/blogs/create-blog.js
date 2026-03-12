async function createBlog(){

const title = document.getElementById("title").value;
const content = document.getElementById("content").value;

const user = auth.currentUser;

await db.collection("blogs").add({

title: title,
content: content,
author: user.email,
authorId: user.uid,
likes: 0,
created: Date.now(),
likedUsers: []

});

alert("Blog published");

window.location = "index.html";

}