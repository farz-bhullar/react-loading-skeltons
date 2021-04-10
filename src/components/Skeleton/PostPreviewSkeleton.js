import React from "react";
import Skeleton from "./index";
import "./index.css";

function PostPreviewSkeleton() {
  return (
    <div className="skeletonWrapper">
      <Skeleton width="50%" height="25px" />
      <Skeleton width="100%" height="200px" marginTop="25px" />
      {Array(4)
        .fill()
        .map(() => (
          <Skeleton width="80%" height="20px" />
        ))}
    </div>
  );
}

export default PostPreviewSkeleton;
