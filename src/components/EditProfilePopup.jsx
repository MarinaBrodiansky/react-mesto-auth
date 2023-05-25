import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, isOpen]);
    
      function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeDescription(e) {
        setDescription(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name,
          about: description,
        });
      }
      
    return (
        <PopupWithForm
        name={"edit-profile"}
        title={"Редактировать профиль"}
        isOpen={isOpen}
        onClose={onClose}
        buttonText={"Сохранить"}
        onSubmit={handleSubmit}
        >
          <input
            required=""
            className="popup__input popup__input_value_user-name"
            type="text"
            placeholder="Ваше имя"
            name="profile__user-name"
            minLength={2}
            maxLength={40}
            id="user-name-input"
            value={name || ''}
            onChange={handleChangeName}
          />
          <span className="popup__error" id="user-name-input-error" />
          <input
            required=""
            className="popup__input popup__input_value_job"
            type="text"
            placeholder="О себе"
            name="profile__job"
            minLength={2}
            maxLength={200}
            id="job-input"
            value={description || ''}
            onChange={handleChangeDescription}
          />
          <span className="popup__error" id="job-input-error" />
        </PopupWithForm>
    )
}

export default EditProfilePopup;