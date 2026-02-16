/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

const posts = [
    { title: "Post 1", content: "Content of post 1.", likes: 0 },
    { title: "Post 2", content: "Content of post 2.", likes: 0 },
    { title: "Post 3", content: "Content of post 3.", likes: 0 }
];


function displayPosts() {

    posts.forEach((post) => {
        
        // Create a div for each post
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Create the post title
        const title = document.createElement('h2');
        title.textContent = post.title;

        // Create the post content
        const content = document.createElement('p');
        content.textContent = post.content;

        // Create the likes count display
        const likes = document.createElement('p');
        likes.textContent = `Likes: ${post.likes}`;

        // Create the "Like" button

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.onclick = function () {
            // Increase the likes count for this post
            post.likes++;
            // Update the likes display
            likes.textContent = `Likes: ${post.likes}`;
        };

        // Append the elements to the postDiv
        postDiv.appendChild(title);
        postDiv.appendChild(content);
        postDiv.appendChild(likes);
        postDiv.appendChild(likeButton);

        // Append the postDiv to the postList
        postList.appendChild(postDiv);
    });
}
displayPosts();

