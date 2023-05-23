import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function Register({onRegistrationSubmit}) {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onRegistrationSubmit(registerPassword, registerEmail);
  } 

  return (
    <>
      <Header>
        <Link to={'/sign-in'} className="header__enter-button">Войти</Link>
      </Header>
      <div className="popup__container-auth">
        <h2 className="popup__title_type_auth">Регистрация</h2>
        <form
          className={`popup__form`}
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
            id="email-input"
            value={registerEmail || ""}
            onChange={(evt) => setRegisterEmail(evt.target.value)}
          />
          <span className="popup__error" id="email-name-input-error" />
          <input
            required=""
            className="popup__input popup__input_type_auth popup__input_value_password"
            type="password"
            placeholder="Пароль"
            name="password"
            minLength={2}
            maxLength={200}
            id="job-input"
            value={registerPassword || ""}
            onChange={(evt) => setRegisterPassword(evt.target.value)}
          />
          <span className="popup__error" id="password-input-error" />
          <button className="popup__submit-button popup__submit-button_type_auth" type="submit">
            Зарегестрироваться
          </button>
          <p 
          className="popup__subtitle">Уже зарегестрированы? 
          <Link to={'/sign-in'} className="popup__link" href="#">Войти</Link>
          </p>
        </form>
        
      </div>
    </>
  );
}

export default Register;
