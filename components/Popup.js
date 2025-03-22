class Popup {
    constructor({popupSelector}) {
        this._popupElement = document.querySelector(popupSelector);
       console.log(this._popupElement);
        // this._handleEscClose = this._handleEscClose.bind(this);
    }}

    export default Popup;