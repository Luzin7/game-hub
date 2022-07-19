import NavHelp from "./../components/NavHelp";

import "../style/notFound.css";

export function NotFound() {
  return (
    <div className="notFound">
      <NavHelp />
      <div className="notFound__content">
        <h1>Não estou conseguindo achar essa página... 🤔</h1>
        <p>Talvez os links acima te ajude! 😊</p>
      </div>
    </div>
  );
}
