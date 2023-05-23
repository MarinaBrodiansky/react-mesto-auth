import React from 'react';
import SuccessPic from '../images/SuccessPic.svg';
import FailPic from '../images/FailPic.svg';

export default function InfoTooltip({ isOpen, onClose, isSuccess }) {

return (
    <section
      className={`popup ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container popup__container-tooltip">
        <button
          className="popup__close-button"
          type="button"
          area-label="кнопка закрыть окно"
          onClick={onClose}
        />
        <img
          className="popup__infotooltip-image"
              src={isSuccess ? SuccessPic : FailPic}
              alt=""
        />
        <p className="popup__infotooltip-title">
          {isSuccess 
          ? "Вы успешно зарегестрировались!" 
          : "Что-то пошло не так! Попробуйте еще раз"
          }
        </p>        
      </div>
    </section>
  );
}    