async function addComment(){

const text=document.getElementById("commentText").value;

await db.collection("comments").add({

blogId:id,
text,
created:Date.now()

});

loadComments();

}