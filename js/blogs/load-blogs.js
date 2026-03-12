let lastDoc=null;

async function loadBlogs(){

let query=db.collection("blogs")
.orderBy("created","desc")
.limit(5);

if(lastDoc){
query=query.startAfter(lastDoc);
}

const snapshot=await query.get();

const container=document.getElementById("blogs");

snapshot.forEach(doc=>{

const blog=doc.data();

container.innerHTML += `
<a class="blog-card-link" href="blog.html?id=${doc.id}">
<div class="blog">

<h2>${blog.title}</h2>

<div class="blog-author">
Written by ${blog.author}
</div>

<p>${blog.content.substring(0,150)}...</p>

</div>
</a>
`;

});

lastDoc=snapshot.docs[snapshot.docs.length-1];

}

function loadMoreBlogs(){
loadBlogs();
}

window.onload=loadBlogs;