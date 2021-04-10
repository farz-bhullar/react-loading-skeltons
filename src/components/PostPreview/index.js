import React, { useEffect, useState } from "react";
import "./index.css";
import PostPreviewSkeleton from "../Skeleton/PostPreviewSkeleton";
import CancelIcon from "@material-ui/icons/Cancel";
import { IconButton } from "@material-ui/core";
import { getRandomBanner } from "../../utils";

function PostPreview({ post, onCloseClick }) {
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
    return (
      <div className="postPreview__content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 className="postPreview__title">{post.title}</h4>
          <span className="postPreview__close" onClick={onCloseClick}>
            <IconButton>
              <CancelIcon />
            </IconButton>
          </span>
        </div>
        <div className="postPreview__banner">
          <img src={getRandomBanner(post.id)} alt={post.title} />
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
