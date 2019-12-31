import React from "react";
import Post from "./Post";
import Axios from "axios";

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data);
      })
      .catch(err => {});
  }, []);

  return (
    <div className="App">
      {posts.map(post => (
        <Post title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  );
}

export default App;
