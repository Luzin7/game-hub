import React from "react";
import { Link } from "react-router-dom";
import { CHAMPIONS } from './../data/getChampions';

import HomeNavBar from "../components/HomeNavBar";

import "../style/characters/contentMain.css";
import "../style/characters/main.css";

const data = CHAMPIONS;
export default class LolChampions extends React.Component {
  render() {
    return (
      <section className="main">
        <HomeNavBar />
        <h1 className="moreAbout">Escolha seu campeão</h1>
        <div className="content__main">
          {data.map((char) => (
            <div key={char.id} className="characters__box">
              <div className="character__box__content">
                <Link to={"#"}>
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
