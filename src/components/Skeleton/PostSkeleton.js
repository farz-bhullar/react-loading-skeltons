import React from "react";
import Skeleton from "./index";
import "./index.css";

function PostSkeleton() {
  return (
    <div className="skeletonWrapper">
      <Skeleton width="50%" height="20px" />
      <Skeleton height="15px" />
      <Skeleton height="15px" />
      <Skeleton height="15px" />
    </div>
  );
}

export default PostSkeleton;
