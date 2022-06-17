import React from 'react'
import { Link } from "react-router-dom";

import '../style/components/navHelp.css'

export default function NavHelp() {
  return (
    <div className='navbar navHelp'>
      <ul>
        <li><Link to='/'>Entrar</Link></li>
        <li><Link to='/cadastro'>Cadastrar</Link></li>
        <li><Link to='/ajuda'>Ajuda</Link></li>
        <li><Link to='/sobre'>Sobre</Link></li>
      </ul>
    </div>
  )
}
