import React from "react";
import { Image, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { songData } from "../../coreData";
import "./index.css";
const Song = () => {
  return (
    <div className="song-component-container">
      <div className="song-image-container">
        <Image src={songData.images.url} rounded className="song-image" />
      </div>
      <div className="song-name">
        <Nav>
          <Nav.Link href="">{songData.description}</Nav.Link>
          <Nav.Link href="">{songData.name}</Nav.Link>
        </Nav>
      </div>
      <div className="album-title">
        <Nav>
          <Nav.Link href="">{songData.description}</Nav.Link>
        </Nav>
      </div>
      <div className="song-duration">
        <p>Duration</p>
      </div>
      <Dropdown className="song-dropdown" drop="down">
        <Dropdown.Toggle
          id="dropdown-basic"
          variant="none"
          className="song-toggle-dropdown"
        >
          <FontAwesomeIcon icon={faEllipsis} className="more-btn" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="">Action</Dropdown.Item>
          <Dropdown.Item href="">Action</Dropdown.Item>
          <Dropdown.Item href="">Action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Song;
