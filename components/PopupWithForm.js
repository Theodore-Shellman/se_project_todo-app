import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this.popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListener() {
    super.setEventListener();

    this.popupForm.addEventListener("submit", (evt) => {
      console.log("submit");
      evt.preventDefault();
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
