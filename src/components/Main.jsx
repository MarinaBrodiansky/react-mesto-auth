import { useContext } from "react";
import Card from './Card'
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards}) {

  const currentUser = useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button 
          className="profile__avatar-container" 
          onClick={onEditAvatar}
          >
            <img
              src={currentUser.avatar}
              alt="фото профиля"
              className="profile__avatar"
            />
          </button>
          <div className="profile__form">
            <div className="profile__info">
              <h1 className="profile__user-name">{currentUser.name}</h1>
              <button
                onClick={onEditProfile}
                className="profile__edit-button"
                type="button"
                aria-label="кнопка редактировать"
              />
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="кнопка добавить"
        />
      </section>
      <section className="elements">
        <div className="elements__list">
          {cards.map((card) => 
            <Card 
            key={card._id} 
            card={card} 
            onCardClick={onCardClick} 
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            />
            )
          }
        </div>
      </section>
    </main>
  );
};

export default Main;
