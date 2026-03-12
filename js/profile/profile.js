// Wait until the page loads
window.addEventListener("DOMContentLoaded", () => {

    const auth = firebase.auth();
    const db = firebase.firestore();

    auth.onAuthStateChanged((user) => {

        console.log("Auth state changed:", user);

        if (!user) {
            window.location.href = "login.html";
            return;
        }

        // Display email
        const emailElement = document.getElementById("userEmail");

        if (emailElement) {
            emailElement.textContent = user.email || "No email found";
        }

        // Load user's blogs
        loadUserBlogs(user.uid);
    });


    function loadUserBlogs(uid) {

        const blogContainer = document.getElementById("userBlogs");

        if (!blogContainer) return;

        blogContainer.innerHTML = "Loading your blogs...";

        db.collection("blogs")
            .where("authorId", "==", uid)
            .get()
            .then((snapshot) => {

                blogContainer.innerHTML = "";

                if (snapshot.empty) {
                    blogContainer.innerHTML = "<p>You haven't written any blogs yet.</p>";
                    return;
                }

                snapshot.forEach((doc) => {

                    const blog = doc.data();

                    const blogCard = document.createElement("div");
                    blogCard.className = "user-blog-card";

                    blogCard.innerHTML = `
                        <a href="blog.html?id=${doc.id}" class="blog-card-link">

                        <h3>${blog.title}</h3>

                        <p>${blog.content.substring(0,120)}...</p>

                        </a>
                    `;

                    blogContainer.appendChild(blogCard);

                });

            })
            .catch((error) => {

                console.error("Error loading blogs:", error);
                blogContainer.innerHTML = "<p>Failed to load blogs.</p>";

            });

    }

});