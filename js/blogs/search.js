document.addEventListener("DOMContentLoaded", () => {

const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("searchDropdown");

searchInput.addEventListener("input", async () => {

const query = searchInput.value.trim().toLowerCase();

if(query === ""){
dropdown.style.display = "none";
dropdown.innerHTML = "";
return;
}

const snapshot = await firebase.firestore()
.collection("blogs")
.get();

dropdown.innerHTML = "";

snapshot.forEach(doc => {

const blog = doc.data();

if(blog.title.toLowerCase().includes(query)){

const item = document.createElement("div");

item.className = "search-item";
item.innerText = blog.title;

item.onclick = () => {
window.location.href = `blog.html?id=${doc.id}`;
};

dropdown.appendChild(item);

}

});

dropdown.style.display = dropdown.children.length ? "block" : "none";

});


document.addEventListener("click",(e)=>{

if(!e.target.closest(".search-wrapper")){
dropdown.style.display="none";
}

});

});


async function searchBlogs(){

const query = document.getElementById("searchInput").value.trim().toLowerCase();

if(!query) return;

const snapshot = await firebase.firestore()
.collection("blogs")
.get();

const container = document.getElementById("blogs");

container.innerHTML = "";

snapshot.forEach(doc=>{

const blog = doc.data();

if(blog.title.toLowerCase().includes(query)){

container.innerHTML += `
<a href="blog.html?id=${doc.id}" class="blog-card-link">
<div class="blog">

<h2>${blog.title}</h2>

<p>${blog.content.substring(0,150)}...</p>

</div>
</a>
`;

}

});

}