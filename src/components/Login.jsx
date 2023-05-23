import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

function Login({onLoginSubmit, loggedIn}) {

  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onLoginSubmit(loginPassword, loginEmail);
  }
  
  return (
    <>
      <Header>
        <Link to={'/sign-up'} className="header__enter-button">Регистрация</Link>
      </Header>
      <div className="popup__container-auth">
        <h2 className="popup__title_type_auth">Вход</h2>
        <form
          className="popup__form"
          noValidate=""
          onSubmit={handleFormSubmit}
        >
          <input
            required=""
            className="popup__input popup__input_type_auth popup__input_value_email"
            type="email"
            placeholder="Email"
            name="email"
            minLength={2}
            maxLength={40}
            id="user-name-input"
            value={loginEmail || ""}
            onChange={(evt) => setLoginEmail(evt.target.value)}
          />
          <span className="popup__error" id="email-name-input-error" />
          <input
            required=""
            className="popup__input popup__input_type_auth popup__input_value_password"
            type="password"
            placeholder="Пароль"
            name="password"
            minLength={4}
            maxLength={200}
            id="password-input"
            value={loginPassword || ""}
            onChange={(evt) => setLoginPassword(evt.target.value)}
          />
          <span className="popup__error" id="password-input-error" />
          <button className="popup__submit-button popup__submit-button_type_auth" type="submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
