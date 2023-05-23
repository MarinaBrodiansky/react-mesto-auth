import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function MainPage({
  userEmail,
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
  handleCardClick,
  cards,
  handleCardLike,
  handleCardDelete,
  isEditProfilePopupOpen,
  closeAllPopups,
  handleUpdateUser,
  isAddPlacePopupOpen,
  handleAddPlaceSubmit,
  isImagePopupOpen,
  selectedCard,
  isEditAvatarPopupOpen,
  handleUpdateAvatar,
  onSignOut
}) {
  return (
    <>
      <Header>
        <div className="header__container">
            <span>{userEmail}</span>
            <button onClick={onSignOut} className="header__sign-out">Выйти</button>
        </div>
      </Header>

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer />

      {/*попап редактировать профиль*/}
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      {/*попап добавить картинку*/}
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      {/*попап картинки*/}
      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />

      {/*попап вы уверены?*/}
      <PopupWithForm
        name={"confirm"}
        title={"Вы уверены?"}
        isOpen={false}
        onClose={closeAllPopups}
        buttonText={"Да"}
      ></PopupWithForm>

      {/*попап сменить аватар*/}
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
    </>
  );
}

export default MainPage;
