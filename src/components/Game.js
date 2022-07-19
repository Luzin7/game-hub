import React from "react";
import { useParams, Outlet } from "react-router-dom";

import GameNavBar from ".././components/GameNavBar";
import Footer from ".././components/Footer";
import { GAMES } from ".././data/getGames";

import ".././style/game/main.css";
import ".././style/game/mainContent.css";

export function Game() {
  const { id } = useParams();
  const game = GAMES.find((game) => game.id === id);

  return (
    <div className="main">
      <GameNavBar />
      <div className="title">
        <h1>{game.name}</h1>
        <p>{game.description}</p>
        <span>
          <a href={game.url} target="_blank" rel="noreferrer">
            Baixe e saiba mais!
          </a>
        </span>
      </div>
      <div className="main__content">
        <div className="media">
          <img src={game.media} alt="" />
        </div>
        <div className="text__info">
          <h2>O que é {game.name}?</h2>
          <p className="desc">{game.description}</p>
          <h3>Desafie seus limites</h3>
          <p className="desc__long">{game.description__long}</p>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
