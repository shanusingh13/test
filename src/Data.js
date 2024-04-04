import React, { useEffect, useState } from 'react';

function Data() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  
  const getPokemonId = (url) => {
    const idPattern = /\/pokemon\/(\d+)\//;
    const match = url.match(idPattern);
    return match ? match[1] : null;
  };

  return (
    <>
      <div className="posts-container">
        {posts.map((post) => {
          const id = getPokemonId(post.url); 
        
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div className="post-card" key={id}>
              <h2 className="post-title">{post.name}</h2>
              <img src={imageUrl} alt={post.name} className="post-image" />
             
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;

