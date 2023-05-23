import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    
    const currentUser = useContext(CurrentUserContext);
    const { likes, owner } = card;    
    const isOwn = owner._id === currentUser._id;
    const isLiked = likes.some((i) => i._id === currentUser._id);
    const cardLikeButtonClassName = `element__like-button ${isLiked ? 'element__like-button_active' : ''}`;
        
    const handleClick = () => {
       onCardClick(card);
    }

    const handleLikeClick = () => {
        onCardLike(card);
    }
    const handleDeleteClick = () => {
        onCardDelete(card);
    }

    return (
      <div className="element">
        {isOwn && (
          <button
            className="element__trash"
            type="button"
            area-label="кнопка удалить элемент"
            onClick={handleDeleteClick}
          />
        )}
        <img
          src={card.link}
          alt={card.name}
          className="element__image"
          onClick={handleClick}
        />
        <div className="element__wrap">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
            <button
              className={cardLikeButtonClassName}
              type="button"
              onClick={handleLikeClick}
            />
            <span className="element__like-count">{card.likes.length}</span>
          </div>
        </div>
      </div>
    );
}

export default Card