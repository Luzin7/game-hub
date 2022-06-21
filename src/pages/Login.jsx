import React, { Component } from "react";
import { Link } from "react-router-dom";
import getUser from "../utils/getUser";
import getPassword from "../utils/getPassword";
import "../style/login.css";

export default class Login extends Component {
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

  ablePassword = ({ target }) => {
    if (target.value.length >= 4) {
      this.verifyUsername(target);
    } else if (target.value.length < 4) {
      const password = document.querySelector("input[type=password]");
      password.setAttribute("disabled", true);
    }
  };

  verifyUsername = (target) => {
    if (target.value !== getUser()) {
      target.setAttribute("id", "input__wrong");
    } else if (target.value === getUser()) {
      const password = document.querySelector("input[type=password]");
      target.removeAttribute("id", "input__wrong");
      password.removeAttribute("disabled");
    }
  };

  ableButton = ({ target }) => {
    if (target.value.length >= 8) {
      this.verifyPassword(target);
    } else if (target.value.length < 8) {
      const button = document.querySelector("button[type=button]");
      button.setAttribute("disabled", true);
      button.removeAttribute("id", "button__active");
    }
  };

  verifyPassword = (target) => {
    getPassword();
    const button = document.querySelector("button[type=button]");
    const bg = document.querySelector("div[class=bg__wallpaper");
    if (target.value !== getPassword()) {
      target.setAttribute("id", "input__wrong");
      button.removeAttribute("id", "button__active");
      bg.removeAttribute("id", "bg__active");
    } else if (target.value === getPassword()) {
      target.removeAttribute("id", "input__wrong");
      button.removeAttribute("disabled");
      button.setAttribute("id", "button__active");
      bg.setAttribute("id", "bg__active");
    }
  };
  render() {
    return (
      <div className="main__login">
        <div className="login">
          <div className="login__logo">
            <img className="logo" src="" alt="Logo do projeto" />
          </div>
          <h1>Fazer login</h1>
          <form>
            <label className="login__label" htmlFor="nick">
              <span>Nome de usuário</span>
              <input
                className="input"
                name="nick"
                type="text"
                onFocus={this.handleFocus}
                onBlur={this.handleFocusOut}
                onInput={this.ablePassword}
              />
            </label>
            <label className="login__label">
              <span>Senha</span>
              <input
                className="input"
                name="password"
                type="password"
                onFocus={this.handleFocus}
                onBlur={this.handleFocusOut}
                disabled={true}
                onInput={this.ableButton}
              />
            </label>
          </form>
          <Link to="/home">
            <button type="button" className="button" disabled={true} />
          </Link>
          <div className="login__links">
            <Link to="/ajuda">
              <span className="login__link">
                Não consegue entrar na sua conta?
              </span>
            </Link>
            <Link to="/cadastro">
              <span className="login__link">Crie sua conta</span>
            </Link>
          </div>
        </div>
        <div className="bg__wallpaper"></div>
      </div>
    );
  }
}
