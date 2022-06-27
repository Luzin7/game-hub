import React from "react";
import { Link } from "react-router-dom";
import * as Path from "../utils/pathNames";

import "../style/components/navHelp.css";

export default function NavHelp() {
  return (
    <div className="navbar navHelp">
      <ul>
        <li>
          <Link to={Path.HOME}>Entrar</Link>
        </li>
        <li>
          <Link to={Path.REGISTER}>Cadastrar</Link>
        </li>
        <li>
          <Link to={Path.HELP}>Ajuda</Link>
        </li>
        <li>
          <Link to={Path.ABOUT}>Sobre</Link>
        </li>
      </ul>
    </div>
  );
}
