import React from "react";
import "./index.css";

import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import socialMediaLinks from "../../data/socialMediaLinks.json";

function Header() {
  return (
    <header className="app__header">
      <span className="app__logo">React Loading Skeleton 🚀</span>
      <div className="app__socialMedia">
        <a rel="noreferrer" href={socialMediaLinks.facebook} target="_blank">
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </a>
        <a rel="noreferrer" href={socialMediaLinks.instagram} target="_blank">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </a>
        <a rel="noreferrer" href={`mailto:${socialMediaLinks.email}`}>
          <IconButton>
            <EmailIcon />
          </IconButton>
        </a>
      </div>
    </header>
  );
}

export default Header;
