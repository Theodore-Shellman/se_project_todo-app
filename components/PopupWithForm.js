import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor({popupSelector , handleFormSubmit}) {
    
        super({ popupSelector });
        // this._handleFormSubmit = handleFormSubmit;
        // this._popupForm = this._popupElement.querySelector('.popup__form');
        // this._popupForm.addEventListener('submit', this._handleFormSubmit);
    }
}

    export default PopupWithForm;