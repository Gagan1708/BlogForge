async function loadComments(){

const snapshot=await db.collection("comments")
.where("blogId","==",id)
.get();

const container=document.getElementById("comments");
container.innerHTML="";

snapshot.forEach(doc=>{

const c=doc.data();

container.innerHTML+=`
<p>${c.text}</p>
`;

});

}

loadComments();