import React from "react";
import { Component } from "react";
import { AGENTS } from "../data/getAgents";
import { Link } from "react-router-dom";

import "../style/characters/contentMain.css";
import "../style/characters/main.css";

const data = AGENTS;
export class ValorantAgents extends Component {
  render() {
    return (
      <section className="main">
        <h1 className="moreAbout">Conheça a equipe Valorant</h1>
        <div className="content__main">
          {data.map((char) => (
            <div key={char.id} className="characters__box">
              <div className="character__box__content">
                <Link to={`/jogos/valorant/agentes/${char.id}`}>
                  <img
                    src={`https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/${char.id}.png`}
                    alt={char.name}
                  />
                  <div className="character__info">
                    <h1>{char.name}</h1>
                    <div className="class">
                      <p>{char.class}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
