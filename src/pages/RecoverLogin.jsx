import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Path from "../utils/pathNames";
import "../style/recoverLogin.css";

export default class RecoverLogin extends Component {
  handleFocus = ({ target }) => {
    const inp = document.querySelectorAll("input");
    inp.forEach(() => {
      const span = target.previousElementSibling;
      span.classList.add("span__active");
    });
  };

  handleFocusOut = ({ target }) => {
    if (target.value === "") {
      const span = target.previousElementSibling;
      span.classList.remove("span__active");
    }
  };

  verifyEmail = ({ target }) => {
    let validaEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const button = document.querySelector("button[type=button]");

    if (!validaEmail.test(target.value) & (target.value.length > 6)) {
      button.setAttribute("disabled", true);
    } else if (validaEmail.test(target.value)) {
      if (target.value === localStorage.getItem("userEmail")) {
        let p = document.createElement("p");
        p.setAttribute("class", "download__text");
        p.textContent =
          "Clique no botão e faça o download das suas informações de login.";
        document.querySelector(".recoverLogin__label").appendChild(p);
        button.removeAttribute("disabled");
        button.setAttribute("id", "button__active");
      }
    }
  };

  downloadExport() {
    let userName = localStorage.getItem("userName");
    let data = "data:text;charset=utf-8," + JSON.stringify(localStorage);
    let a = document.createElement("a");
    a.setAttribute("href", data);
    a.setAttribute("download", `Login_recover_${userName}`);
    document.body.appendChild(a);
    a.click();
  }

  render() {
    return (
      <div className="main__recoverLogin">
        <div className="recoverLogin">
          <h1>Recuperar conta</h1>
          <label className="recoverLogin__label">
            <span>Digite o email cadastrado</span>
            <input
              className="input"
              name="email"
              type="email"
              onFocus={this.handleFocus}
              onBlur={this.handleFocusOut}
              onInput={this.verifyEmail}
            />
          </label>
          <Link onClick={this.downloadExport} to="/">
            <button type="button" className="button" disabled={true} />
          </Link>
          <span className="login__link">
            <Link to={Path.REGISTER}>Não possui uma conta?</Link>
          </span>
        </div>
      </div>
    );
  }
}
