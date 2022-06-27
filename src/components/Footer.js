import React from "react";
import { Link, useParams } from "react-router-dom";
import * as Path from "../utils/pathNames";

import "../style/components/footer.css";

export default function Footer() {
  const { id } = useParams();
  return (
    <div className="footer">
      {id === "valorant" ? (
        <ul>
          <li>
            <Link to={Path.AGENTS}>Personagens do jogo</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={"#"}>Saber mais</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
