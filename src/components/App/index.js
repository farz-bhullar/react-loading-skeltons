import "./index.css";
import Posts from "../Posts";
import PostPreview from "../PostPreview";
import { useState } from "react";

function App() {
  const [previewPost, setPreviewPost] = useState(null);
  const handlePostClick = (post) => setPreviewPost(post);
  const handleClosePostPreviewClick = () => setPreviewPost(null);

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__logo">React Loading Skelton 🚀</span>
      </header>

      <div className="app__body">
        <Posts key="posts-key-1" onPostClick={handlePostClick} />
        {previewPost && (
          <PostPreview
            post={previewPost}
            onCloseClick={handleClosePostPreviewClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
