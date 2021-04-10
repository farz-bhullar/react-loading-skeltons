import React, { useEffect, useState } from "react";
import PostSkeleton from "../Skeleton/PostSkeleton";
import "./index.css";
import { truncate } from "../../utils";
function Posts({ onPostClick }) {
  const [posts, setPosts] = useState([]);
  const [activePostId, setActivePostId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      var response = await fetch("https://jsonplaceholder.typicode.com/posts");
      var data = await response.json();

      setTimeout(() => {
        setPosts(data);
      }, 5000);
    };

    fetchData();
  }, []);

  const renderPosts = () =>
    posts.map((post) => {
      return (
        <div
          key={`post-key-${post.id}`}
          className={`posts__post ${
            post.id === activePostId ? "posts_post--active" : ""
          }`}
          onClick={() => {
            setActivePostId(post.id);
            onPostClick(post);
          }}
        >
          <h5 className="posts__title">{post.title}</h5>
          <p className="posts__body">{truncate(post.body, 95)}</p>
        </div>
      );
    });

  const renderPostsSkeleton = () =>
    Array(5)
      .fill()
      .map((_, index) => {
        return (
          <div className="posts__post posts_post-loading" key={`ps-k-${index}`}>
            <PostSkeleton key={`post-skeleton-key-${index}`} />
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
