import React, { useRef, useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const nameRef = useRef();
    const linkRef = useRef();

    useEffect(() => {
      setName('');
      setLink('');
    }, [isOpen]);

    useEffect(() => {
      if(nameRef.current && isOpen) {
        nameRef.current.focus();
      }
    }, [isOpen]);

    function handleNameChange(e) {
      setName(e.target.value);
    }

    function handleLinkChange(e) {
      setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: name, 
            link: link
        });
    }
    
    return(
        <PopupWithForm
        name={"add-element"}
        title={"Новое место"}
        isOpen={isOpen}
        onClose={onClose}
        buttonText={"Сохранить"}
        onSubmit={handleSubmit}
        >
          <input
            required
            className="popup__input popup__input_value_element-name"
            type="text"
            placeholder="Название"
            name="element-name"
            minLength={2}
            maxLength={30}
            id="element-name"
            onChange={handleNameChange}
            ref={nameRef}
            value={name}
          />
          <span className="popup__error" id="element-name-error" />
          <input
            required
            className="popup__input popup__input_value_element-link"
            placeholder="Ссылка на картинку"
            name="element-link"
            type="url"
            id="element-link"
            onChange={handleLinkChange}
            ref={linkRef}
            value={link}
          />
          <span className="popup__error" id="element-link-error" />
        </PopupWithForm>
    )
}

export default AddPlacePopup;