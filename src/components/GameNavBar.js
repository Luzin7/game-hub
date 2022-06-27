import React from "react";
import { Link, useParams } from "react-router-dom";

import { GAMES } from "../data/getGames";
import { AGENTS } from "../data/getAgents";

import "../style/components/gameNavBar.css";

export default function GameNavBar() {
  const params = useParams();
  const game = GAMES.find((game) => game.id === params.id);
  const agent = AGENTS.find((game) => game.id === params.id);

  return (
    <div className="main__nav">
      {params.id === "valorant" ? (
        <div className="navbar game">
          {" "}
          <h1>
            <Link to={-1}>Voltar</Link>
          </h1>
          <p>{game.name}</p>
        </div>
      ) : (
        <div className="navbar game">
          <h1>
            <Link to={-1}>Voltar</Link>
          </h1>
          <p>{agent.name}</p>
        </div>
      )}
    </div>
  );
}
