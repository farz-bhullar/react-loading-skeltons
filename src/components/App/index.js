import "./index.css";
import Header from "../Header";
import Posts from "../Posts";
import PostPreview from "../PostPreview";
import { useState } from "react";

function App() {
  const [previewPost, setPreviewPost] = useState(null);
  const handlePostClick = (post) => setPreviewPost(post);
  const handleClosePostPreviewClick = () => setPreviewPost(null);

  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Posts
          key="posts-key-1"
          onPostClick={handlePostClick}
          previewPostId={previewPost?.id}
        />
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
