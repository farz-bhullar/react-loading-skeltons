import React, { useEffect, useState } from "react";
import PostSkeleton from "../Skeleton/PostSkeleton";
import "./index.css";
import { truncate } from "../../utils";
function Posts({ onPostClick }) {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts");
    var data = await response.json();

    setTimeout(() => {
      setPosts(data);
      onPostClick(data[0]);
    }, 5000);
  }, []);

  const renderPosts = () =>
    posts.map((post) => {
      return (
        <div className="posts__post" onClick={() => onPostClick(post)}>
          <h5 className="posts__title">{post.title}</h5>
          <p className="posts__body">{truncate(post.body, 95)}</p>
        </div>
      );
    });

  const renderPostsSkeleton = () =>
    Array(5)
      .fill()
      .map(() => {
        return (
          <div className="posts__post">
            <PostSkeleton />
          </div>
        );
      });

  return (
    <div className="posts">
      {posts.length ? renderPosts() : renderPostsSkeleton()}
    </div>
  );
}

export default Posts;
