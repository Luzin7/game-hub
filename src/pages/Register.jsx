import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Path from "../utils/pathNames";
import "../style/cadastro.css";

export default class Register extends Component {
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

  registerUser = ({ target }) => {
    const button = document.querySelector("button[type=button]");

    if (target.value.length >= 4) {
      localStorage.setItem("userName", target.value);
    } else if (target.value.length < 4) {
      button.setAttribute("disabled", true);
    }
  };

  registerEmail = ({ target }) => {
    let validaEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const password = document.querySelector("input[type=password]");

    if (!validaEmail.test(target.value) & (target.value.length > 6)) {
      target.setAttribute("id", "input__wrong");
      password.setAttribute("disabled", true);
    } else if (validaEmail.test(target.value)) {
      target.removeAttribute("id", "input__wrong");
      localStorage.setItem("userEmail", target.value);
      password.removeAttribute("disabled");
    }
  };

  registerPassword = ({ target }) => {
    const button = document.querySelector("button[type=button]");
    if (target.value.length >= 8) {
      localStorage.setItem("userPassword", target.value);
      button.removeAttribute("disabled");
      button.setAttribute("id", "button__active");
    } else if (target.value.length < 8) {
      button.setAttribute("disabled", true);
      button.removeAttribute("id", "button__active");
    }
  };
  render() {
    return (
      <div className="main__register">
        <div className="register">
          <h1>Cadastre-se</h1>
          <label className="register__label" htmlFor="nick">
            <span>Digite seu nome de usuário</span>
            <input
              className="input"
              name="nick"
              type="text"
              onFocus={this.handleFocus}
              onBlur={this.handleFocusOut}
              onInput={this.registerUser}
            />
          </label>
          <label className="register__label">
            <span>Digite seu melhor email</span>
            <input
              className="input"
              name="email"
              type="email"
              onFocus={this.handleFocus}
              onBlur={this.handleFocusOut}
              onInput={this.registerEmail}
            />
          </label>
          <label className="register__label">
            <span>Digite sua senha</span>
            <input
              className="input"
              name="password"
              type="password"
              onFocus={this.handleFocus}
              onBlur={this.handleFocusOut}
              disabled={true}
              onInput={this.registerPassword}
            />
          </label>
          <Link to={Path.LOGIN}>
            <button type="button" className="button" disabled={true} />
          </Link>

          <span className="login__link">
            <Link to={Path.LOGIN}>Já possui uma conta?</Link>
          </span>
        </div>
      </div>
    );
  }
}
