import React, { Component } from "react";
import NavHelp from "../components/NavHelp";

import "../style/ajuda.css";
import { Link } from "react-router-dom";

export default class Help extends Component {
  render() {
    return (
      <div className="main__help">
        <NavHelp />
        <div className="help">
          <h1>Não consigo entrar na minha conta. O que faço?</h1>
          <p>
            Caso você não esteja conseguindo acessar sua conta, talvez seja
            porque você ainda não tenha uma. <Link to="/cadastro">Faça uma conta agora mesmo</Link> e tenha acesso ao Hub.
          </p>
          <p>
            Se tem uma conta mas não está conseguindo lembrar suas
            informações de login, basta <Link to="/recuperar-login">recuperar o login aqui</Link>.
          </p>
        </div>
      </div>
    );
  }
}
