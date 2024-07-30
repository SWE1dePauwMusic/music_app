import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./index.css";

const SidebarContainer = () => {
  return (
    <div className="sidebar-container">
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#d359ff",
                  backgroundColor: active ? "#eecef9" : undefined,
                };
            },
          }}
        >
         <SubMenu defaultOpen label="Charts" icon={<FontAwesomeIcon icon={faAnglesLeft} />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem active icon={<FontAwesomeIcon icon={faAnglesLeft} />}>
          Calendar (active)
        </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarContainer;
