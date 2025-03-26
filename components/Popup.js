class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");

    console.log(this._popupElement)
  }

  

_handleEscClose(evt) {
  
    if (evt.key === "Escape") {
      this.close();
      
    }
  }
  

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
  close() {
    this._popupElement.classList.remove("popup_visible");

    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
  
  setEventListener() {
    this._popupCloseBtn.addEventListener("click", () => {
      
      this.close();
    });
  }
}

export default Popup;
