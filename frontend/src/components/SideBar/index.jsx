import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

export const Sidebar = () => {
  const categories = ["Playlist", "Artists", "Album", "Podcast & Shows"];
  return (
    <div className="sidebar-container">
      <div className="search-container" href="#search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <span>Search</span>
      </div>
      <div className="navigation-component">
        <span>My Library</span>
        <div className="nav-link" href="#search">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <span>Recent</span>
        </div>
        <div className="nav-link" href="#search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <span>Playlists</span>
        </div>
        <div className="nav-link" href="#search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <span>Favourite</span>
        </div>
      </div>
      <div className="search-container" href="#search">
        <FontAwesomeIcon icon={faTwitch} className="icon" />
        <span>Search</span>
      </div>
    </div>
  );
};
