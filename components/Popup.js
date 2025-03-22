class Popup {
    constructor({popupSelector}) {
        this._popupElement = document.querySelector(popupSelector);
       
        // this._handleEscClose = this._handleEscClose.bind(this);
        
    }
    open() {  this._popupElement.classList.add("popup_visible");}}

    export default Popup;