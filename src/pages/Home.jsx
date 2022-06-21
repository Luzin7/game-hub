import React from "react";
import { Link } from "react-router-dom";
import HomeNavBar from "../components/HomeNavBar";

import { GAMES } from "../data/getGames";

import "../style/home/home.css";
import "../style/home/homeContent.css";
import "../style/home/gameCards.css";
import "../style/home/gameCard.css";

export default function Home() {
  const games = GAMES;

  return (
    <div className="home">
      <HomeNavBar />
      <div className="home__content">
        <h1>Jogos disponíveis</h1>
        <div className="game__cards">
          {games.map((game) => (
            <div id={game.name} className="game__card" key={game.id}>
              <Link to={`/jogos/${game.id}`}>
                <img src={game.img} alt={game.name} />
                <h1>{game.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
