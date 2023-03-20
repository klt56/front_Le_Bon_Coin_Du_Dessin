import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../pages/Test1$';

function Art() {
  const { Post, setPost } = useContext(AppContext);
  const [Info, setInfo] = useState({ title: "", description: "", category: "",artist: "" });

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data.image_url);
        setInfo({
            title: data.title,
            description: data.description,
            category: data.category,
            artist: data.artist
                                       });
      })
      .catch((error) => console.error(error));
  }, []);

  return (






    <div>
      <h2>{Info.title}</h2>
      <p>{Info.description}</p>
      <h3>{Info.category}</h3>
      <h3>{Info.artist}</h3>
      <img src={Post} alt="post" className="image"/>

    </div>
  )
}

export default Art;
