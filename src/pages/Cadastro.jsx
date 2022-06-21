import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../style/cadastro.css'

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
    const password = document.querySelector("input[type=password]");
    if (target.value.length >= 4) {
      localStorage.setItem("userName", target.value);
      password.removeAttribute("disabled");
    } else if (target.value.length < 4) {
      password.setAttribute("disabled", true);
    }
  };

  registerEmail = ({ target }) => {
    if (target.value.length > 10) {
      localStorage.setItem("userEmail", target.value);
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
            <span>Digite seu email</span>
            <input
              className="input"
              name="password"
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
          {/* ajustar esse link do botão, da pra entrar mesmo sem fazer o cadastro */}
          <Link to="/">
            <button type="button" className="button" disabled={true} />
          </Link>
          <Link to="/">
              <span className="login__link">Já possui uma conta?</span>
            </Link>
        </div>
      </div>
    );
  }
}
