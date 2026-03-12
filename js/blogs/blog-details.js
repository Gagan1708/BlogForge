const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadBlog(){

const doc = await db.collection("blogs").doc(id).get();
const blog = doc.data();

document.getElementById("blog").innerHTML = `

<h1>${blog.title}</h1>

<p>${marked.parse(blog.content)}</p>

<button onclick="likeBlog('${id}')">
❤️ ${blog.likes}
</button>

`;

}

loadBlog();