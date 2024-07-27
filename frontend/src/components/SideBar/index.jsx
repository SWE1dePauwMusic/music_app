import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Sidebar = () => {
  const categories = ["Playlist", "Artists", "Album", "Podcast & Shows"];
  return (
    <div className="sidebar-container">
      <div className="navigation-component">
        <div className="nav-link" href="#home">
          <FontAwesomeIcon icon={faHouse} className="icon" />
          <span>Home</span>
        </div>
        <div className="nav-link" href="#search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <span>Search</span>
        </div>
      </div>
      <div className="library-component">
        <div className="library-link">
          <FontAwesomeIcon icon={faBookmark} className="icon" />
          <span>Your Library</span>
          <div className="create-btn">
            <FontAwesomeIcon icon={faPlus} className="icon right" />
            <FontAwesomeIcon icon={faArrowRight} className="icon right" />
          </div>
        </div>
        <div className="search-sort">
          <div className="search-category">
            {categories.map((category) => {
              return (
                <button key={categories} className="category-btn">
                  {category}
                </button>
              );
            })}
          </div>
          <div className="filert-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <FontAwesomeIcon icon={faFilter} className="icon" />
          </div>
        </div>
        <div className="playlist-component"></div>
      </div>
    </div>
  );
};

export default Sidebar;
