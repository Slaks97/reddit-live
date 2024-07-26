import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://www.reddit.com/r/reactjs.json');
        const data = response.data.data.children.map(obj => obj.data);
        setPosts(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href={post.url}>{post.title}</a>{post.score}{post.author_fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
