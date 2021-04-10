import React from "react";
import "./index.css";

function Skeleton({
  width = "100%",
  height = "5%",
  borderRadius = "5px",
  marginTop = "5px",
}) {
  const styles = { width, height, borderRadius, marginTop };
  return (
    <div className="skeleton" style={styles}>
      <div className="skeleton__animation"></div>
    </div>
  );
}

export default Skeleton;
