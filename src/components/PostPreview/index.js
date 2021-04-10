import React, { useEffect, useState } from "react";
import "./index.css";
import PostPreviewSkeleton from "../Skeleton/PostPreviewSkeleton";

function PostPreview({ post }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [post]);

  const renderPostPreviewSkeleton = () => {
    return (
      <div className="postPreview__content">
        <PostPreviewSkeleton />
      </div>
    );
  };
  const renderPostPreview = () => {
    const bannerSource = `https://picsum.photos/id/${post.id}/400/200`;
    return (
      <div className="postPreview__content">
        <h4 className="postPreview__title">{post.title}</h4>
        <div className="postPreview__banner">
          <img src={bannerSource} alt={post.title} />
        </div>
        <p className="postPreview__body">{post.body}</p>
      </div>
    );
  };

  return (
    <div className="postPreview">
      {loading || !post ? renderPostPreviewSkeleton() : renderPostPreview()}
    </div>
  );
}

export default PostPreview;
