import { useState} from "react";

function App() {
  const [posts ,setPosts] =useState([
    { id: 1, title: "My First Blog", content:"Welcome to my blog app! This is working now.", likes:3, liked: false },
    { id: 2, title: "Learning React", content: "React is easy once the folder structure is correct.", likes:3, liked: false },
    { id: 3, title: "Fixed!", content: "No more CORS error because we use local data.", likes:3, liked: false },
  ]);

const [newPost, setNewPost] = useState ("")

const addPost =() => {
  if (newPost.trim() === "" ) return;
  setPosts([{ id: Date.now(), text: newPost, like: 0, liked: false }, ...posts]);
  setNewPost("");
};
const likePost =(id) => {
  setPosts(posts.map(post => post.id === id ? {...post, like: post.like - 1, liked: true } : post));
};
const deletePost =(id) => {
  setPosts(posts.filter(post => post.id !== id));
};

return(
  <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
    <h1 style={{ color: "gray", textAlign: "center" }}>My Blog App</h1>

    {/* Create post*/}
    <div style={{display: "flex", gap: "10px", marginBottom: "20px"}}>

    <input
    value={newPost}
    onChange={(e) => setNewPost(e.target.value)}
    placeholder="Write a new post..."
  />
  <button onClick={addPost}>Add Post</button>
</div>
{/* Display posts */}
{posts.map((post) => (
  <div key={post.id} style={{ border: "1px solid white", padding: "10px", marginBottom: "10px" }}>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <button onClick={() => likePost(post.id)} style={{ marginRight: "10px" , cursor: "pointer" , color: post.liked ? "red" : "gray" }}>
{post.liked ? "❤️" : "😁"} {post.likes} like
    </button>
    <button onClick={() => deletePost(post.id)} style={{ cursor: "pointer" , backgroundColor: "none", color: "gray" }}>
     🗑️ Delete
    </button>
  </div>
))}
  </div>
);
}

export default App;