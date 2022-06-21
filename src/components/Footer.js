import React from "react";
import { Link, useParams } from "react-router-dom";
import * as Routers from '../constants/Routes'


import "../style/components/footer.css";

export default function Footer() {
  const params = useParams();
  return (
    <div className="navbar footer">
      {params.id === "valorant" || "league-of-legends" ? (
        <ul>
          <li><Link to={1}>Servidor</Link></li>
          <li><Link to={Routers.CHARACTERS}>Personagens</Link></li>
        </ul>
      ) : (
        <>
          <p>Eita</p>
        </>
      )}
    </div>
  );
}
