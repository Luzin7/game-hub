import React from "react";
import gitIcon from '../assets/icons/gitIcon.png'
import getUser from "../utils/getUser";

import "../style/components/homeNavBar.css";

export default function HomeNavBar() {
  return (
    <div className="navbar navHome">
      <div className="userArea">
        <div className="user">
          <h1>
            Olá, <span>{getUser()}</span>
          </h1>
        </div>
      </div>
        <i className="icon"><img src={gitIcon} alt="" /></i>
    </div>
  );
}
