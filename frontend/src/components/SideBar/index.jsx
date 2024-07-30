import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaMicrophone, FaBookmark, FaMusic, FaClock, FaHeadphonesAlt, FaHeart, FaTwitch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const SidebarContainer = () => {
  return (
    <div className="sidebar-container">
      <Sidebar width="200px">
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#d359ff" : "#d359ff",
                  backgroundColor: active ? "#eecef9" : "#eecef9",
                };
            },
          }}
        >
         <SubMenu disabled="False" label="Explore" active>
          <MenuItem className="menu-item"><FaMicrophone className="icon sidebar-icon"/> Artists </MenuItem>
          <MenuItem className="menu-item"><FaBookmark className="icon sidebar-icon"/> Albums </MenuItem>
          <MenuItem className="menu-item"><FaMusic className="icon sidebar-icon"/>Genres </MenuItem>
        </SubMenu>
        <SubMenu disabled="False" label="My Library" active>
          <MenuItem className="menu-item"><FaClock className="icon sidebar-icon"/> Recent </MenuItem>
          <MenuItem className="menu-item"><FaHeadphonesAlt className="icon sidebar-icon"/>Playlist </MenuItem>
          <MenuItem className="menu-item"><FaHeart className="icon sidebar-icon"/>Favorite</MenuItem>
        </SubMenu>
        <SubMenu disabled="False" label="My Chatbot" active>
          <MenuItem className="menu-item"><FaTwitch className="icon sidebar-icon"/>Chat</MenuItem>
        </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarContainer;
