import { initLikes } from "./likes.js";

firebase.auth().onAuthStateChanged((user) => {

if(!user){

alert("Please login to read the full article");

window.location.href = "login.html";

return;

}

loadBlog(); // only load blog if user logged in

});
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

initLikes(blogId);

console.log("Blog ID:", blogId);

const titleElement = document.getElementById("blogTitle");
const contentElement = document.getElementById("blogContent");
const authorElement = document.getElementById("blogAuthor");

if (!blogId) {
    titleElement.innerText = "Blog not found";
}

firebase.firestore()
.collection("blogs")
.doc(blogId)
.get()
.then((doc) => {

    if (!doc.exists) {
        titleElement.innerText = "Blog not found";
        return;
    }

    const blog = doc.data();

    console.log("Blog Data:", blog);

    titleElement.innerText = blog.title;
    contentElement.innerText = blog.content;
    authorElement.innerText = "Written by " + blog.author;

})
.catch((error) => {
    console.error("Error loading blog:", error);
});

document.addEventListener("DOMContentLoaded", () => {

const postBtn = document.getElementById("postCommentBtn");

postBtn.addEventListener("click", postComment);

});

async function postComment(){

const input = document.getElementById("commentInput");

const commentText = input.value.trim();

if(commentText === ""){
alert("Write a comment first");
return;
}

const blogId = new URLSearchParams(window.location.search).get("id");

const user = firebase.auth().currentUser;

if(!user){
alert("You must login to comment");
return;
}

await db.collection("blogs")
.doc(blogId)
.collection("comments")
.add({

text: commentText,
author: user.email,
created: Date.now()

});

input.value="";

loadComments();

}

async function loadComments(){

const blogId = new URLSearchParams(window.location.search).get("id");

const container = document.getElementById("commentsContainer");

container.innerHTML="";

const snapshot = await db.collection("blogs")
.doc(blogId)
.collection("comments")
.orderBy("created","desc")
.get();

snapshot.forEach(doc=>{

const comment = doc.data();

container.innerHTML += `

<div class="comment">

<div class="comment-author">
${comment.author}
</div>

<div class="comment-text">
${comment.text}
</div>

</div>

`;

});

}


loadComments();