import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="explore-container">
        <Link to="/explore">
          <h5>Explore</h5>
        </Link>
        <div className="nav-link">
          <FontAwesomeIcon icon={faPenFancy} className="icon" />
          <Link to="/explore" className="side-link">
            Artists
          </Link>
        </div>
        <div className="nav-link" href="#search">
          <FontAwesomeIcon icon={faLinesLeaning} className="icon" />
          <Link to="/explore" className="side-link">
            Albums
          </Link>
        </div>
        <div className="nav-link" href="#search">
          <FontAwesomeIcon icon={faMusic} className="icon" />
          <Link to="/explore" className="side-link">
            Genres
          </Link>
        </div>
      </div>
      <div className="library-container">
        <Link to="/library">
          <h5>My Library</h5>
        </Link>
        <div className="nav-link">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <Link to="/library" className="side-link">
            Recent
          </Link>
        </div>
        <div className="nav-link">
          <FontAwesomeIcon icon={faHeadphonesSimple} className="icon" />
          <Link to="/library" className="side-link">
            Playlist
          </Link>
        </div>
        <div className="nav-link">
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <Link to="/library" className="side-link">
            Favourite
          </Link>
        </div>
      </div>
      <div className="chat-container">
        <Link to="/library">
          <h5>My Chatbot</h5>
        </Link>
        <div className="nav-link">
          <FontAwesomeIcon icon={faTwitch} className="icon" />
          <Link to="/chat" className="side-link">
            Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
