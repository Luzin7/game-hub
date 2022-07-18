import React from "react";
import { Link, useParams } from "react-router-dom";
import { AGENTS } from "../data/getAgents";

import "../style/agent/agent.css";
import "../style/agent/agentContent.css";
import "../style/agent/agentInfo.css";

function Agent() {
  window.addEventListener("scroll", () => {
    const img = document.querySelector("img[name=agent__img]");
    let value = window.scrollY;
    img.style.paddingTop = value * 1 + "px";
  });

  const { id } = useParams();
  const agent = AGENTS.find((agent) => agent.id === id);
  return (
    <section className="agent">
      <header className="navbar agent__navbar">
        <h1>
          <Link to={-1}>Voltar</Link>
        </h1>
        <p>{agent.name}</p>
      </header>
      <div className="agent__content">
        <div className="agent__info">
          <h1>Agente {agent.name}</h1>
          <div className="agent__img">
            <img
              name="agent__img"
              src={`https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/${agent.id}.png`}
              alt={agent.name}
            />
          </div>
          <div className="agent__description">
            <h2>Função: {agent.class}</h2>
            <p>{agent.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agent;
