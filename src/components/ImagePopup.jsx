function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_type_big-image ${card ? "popup_opened" : ""}`}
    >
      <div className="popup__container popup__container-big-image">
        <button
          className="popup__close-button"
          type="button"
          area-label="кнопка закрыть окно"
          onClick={onClose}
        />
        {card && (
          <>
            <img
              className="popup__element-image"
              src={card.link}
              alt={card.name}
            />
            <p className="popup__element-title">{card.name}</p>
          </>
        )}
      </div>
    </section>
  );
}

export default ImagePopup;
