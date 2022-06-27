import React from "react";
import { Link, useParams } from "react-router-dom";
import { AGENTS } from ".././data/getAgents";

import "../style/agent/agent.css";
import "../style/agent/agentContent.css";
import "../style/agent/agentInfo.css";

function Agent() {
  const { id } = useParams();
  const agent = AGENTS.find((agent) => agent.id === id);
  return (
    <section className="agent">
      <header className="navbar game">
        <h1>
          <Link to={-1}>Voltar</Link>
        </h1>
        <p>{agent.name}</p>
      </header>
      <div className="agent__content">
        <div className="agent__info">
          <h1>Agente {agent.name}</h1>
          <img
            src={`https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/${agent.id}.png`}
            alt={agent.name}
          />
          <h2>Função: {agent.class}</h2>
          <div className="agent__description">
            <p>{agent.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agent;
