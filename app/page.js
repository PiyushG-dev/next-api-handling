"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = await response.json();
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  console.log(posts);

  return (
    <main className="w-full p-5">
      <h1 className="text-5xl">Api Handling</h1>
      <button
        onClick={fetchPosts}
        className="px-3 py-1 bg-white text-black b mt-3 rounded"
      >
        make api call
      </button>
      <div>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          posts.map((post) => <p key={post.id}>{post.title}</p>)
        )}
      </div>
    </main>
  );
}
