import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://consultingxglobal.wordpress.com/wp-json/wp/v2/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>Blogs</div>
      <ul>
        {posts.map((post)=>{
          <li key={post.id}>{post.title.rendered}</li>
        })}
      </ul>
    </div>
  )
}

export default Blog
