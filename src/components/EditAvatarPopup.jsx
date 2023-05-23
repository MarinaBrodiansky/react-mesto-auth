import React, { useRef } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar:avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
        name={"change-avatar"}
        title={"Обновить аватар"}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}        
        buttonText={"Сохранить"}
        >
          <input
            required=""
            className="popup__input popup__input_value_element-link"
            placeholder="Ссылка на картинку"
            name="avatar"
            type="url"
            id="avatar"
            ref={avatarRef}
          />
          <span className="popup__error" id="avatar-error" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
