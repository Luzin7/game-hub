import React from "react";
import NavHelp from "../components/NavHelp";
import "../style/about.css";

export default function About() {
  return (
    <div className="about">
      <NavHelp />
      <div className="about__content">
        <h1>Sobre o projeto</h1>
        <section className="sobre__projeto">
          <p className="desc__sobre__projeto">
            Uma aplicação desenvolvida para prática da ferramenta React.JS
            utlizando React Router como principal aprendizado. Aqui você
            consegue ter informações de todos os jogos disponíveis, desde sua
            descrição até o link de download.
          </p>
        </section>
        <h2>Sobre mim</h2>
        <section className="sobre__mim">
          <p className="desc__sobre__mim">
            Olá! meu nome é <strong>Luan Victor</strong> e estudo programação de
            forma autodidata. Desde criança sou interessado no mundo da
            programação, passando por <strong>desenvolvedor de jogos</strong> até{" "}
            <strong>desenvolvedor web</strong>, que é o que estou estudando no
            momento. Minhas práticas, no momento, estão sendo para o{" "}
            <strong>Front-End</strong>, porém, por amar sistemas de segurança e
            coisas relacionadas, não descarto a importância do Back-End e
            pretendo estudá-lo assim que possível.
          </p>
          <p className="mais__sobre__mim">
            Acesse{" "}
            <a
              href="https://github.com/Luzin7"
              target="_blank"
              rel="noreferrer"
            >
              meu perfil no GitHub
            </a>
            , saiba mais sobre mim, meus projetos e entre em contato!
          </p>
        </section>
      </div>
    </div>
  );
}
