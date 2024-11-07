
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

// Function to generate post HTML
function generatePostHTML(post) {
    return `
        <section>
            <div class="heading">
                <img class="User" src="${post.avatar}" alt="${post.username}">
                <div>
                    <p class="p1">${post.name}</p>
                    <h2 class="p2">${post.location}</h2>
               </div>
            </div>
            <img class="img" src="${post.post}" alt="${post.username}">
            <div class="footing">
                <div class="icons">
                    <img src="images/icon-heart.png" class="icon">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                </div>
                <strong>${post.likes} likes</strong>
                <p><strong>${post.username}</strong> ${post.comment}</p>
            </div>
        </section>
    `;
}

// Function to render posts
function renderPosts() {
    const container = document.querySelector(".container");
    let postsHTML = '';

    // Loop through the posts array and create HTML for each post
    posts.forEach(post => {
        postsHTML += generatePostHTML(post);
    });

    // Append all the posts' HTML to the container
    container.innerHTML += postsHTML;
}

// Call the renderPosts function to add the posts to the page
renderPosts();

