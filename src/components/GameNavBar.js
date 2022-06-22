import React from "react";
import { Link, useParams } from "react-router-dom";

import { GAMES } from "../data/getGames";

import "../style/components/gameNavBar.css";

export default function GameNavBar() {

  const params = useParams();
  const game = GAMES.find((game) => game.id === params.id)

  return (
    <div className="navbar game">
      <h1>
        <Link to={-1}>Voltar</Link>
      </h1>
      <p>{game.name}</p>
    </div>
  );
}
