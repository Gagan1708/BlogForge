async function loadUserBlogs(){

const user=auth.currentUser;

const snapshot=await db.collection("blogs")
.where("authorId","==",user.uid)
.get();

const container=document.getElementById("userBlogs");

snapshot.forEach(doc=>{

const blog=doc.data();

container.innerHTML+=`

<div class="blog">

<h3>${blog.title}</h3>

</div>

`;

});

}

auth.onAuthStateChanged(()=>{
loadUserBlogs();
});