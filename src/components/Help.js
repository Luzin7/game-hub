import * as Path from "../utils/pathNames";
import NavHelp from "../components/NavHelp";

import "../style/ajuda.css";
import { Link } from "react-router-dom";

export function Help() {
  return (
    <div className="main__help">
      <NavHelp />
      <div className="help">
        <h1>Não consigo entrar na minha conta. O que faço?</h1>
        <p>
          Caso você não esteja conseguindo acessar sua conta, talvez seja porque
          você ainda não tenha uma.{" "}
          <Link to={Path.REGISTER}>Faça uma conta agora mesmo</Link> e tenha
          acesso ao Hub.
        </p>
        <p>
          Se tem uma conta mas não está conseguindo lembrar suas informações de
          login, basta{" "}
          <Link to={Path.RECOVER_LOGIN}>recuperar o login aqui</Link>.
        </p>
      </div>
    </div>
  );
}
