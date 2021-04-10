import "./index.css";
import Posts from "../Posts";
import PostPreview from "../PostPreview";
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

function App() {
  const [previewPost, setPreviewPost] = useState(null);
  const handlePostClick = (post) => setPreviewPost(post);
  const handleClosePostPreviewClick = () => setPreviewPost(null);

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__logo">React Loading Skeleton 🚀</span>
        <div className="app__socialMedia">
          <a
            rel="noreferrer"
            href="https://facebook.com/farz.bhullar"
            target="_blank"
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
          <a
            rel="noreferrer"
            href="https://instagram.com/farz_bhullar"
            target="_blank"
          >
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
          <a rel="noreferrer" href="mailto:farz.bhullar@gmail.com">
            <IconButton>
              <EmailIcon />
            </IconButton>
          </a>
        </div>
      </header>

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
