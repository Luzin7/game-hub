import React from 'react'
import { useParams } from 'react-router-dom';
import { AGENTS } from ".././data/getAgents";


function Agent() {
  const { id } = useParams();
  const agent = AGENTS.find((agent) => agent.id === id);
  return (
    <div>
      <h1>esse é o agente {agent.name}</h1>
    </div>
  )
}

export default Agent