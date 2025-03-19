class FormValidator {
    constructor(settings, formEl) {
this.formselector = settings.formSelector;
this.formEl = formEl;
    console.log(settings);
    console.log(formEl);

   
    this._inputSelector = settings.inputSelector;  
    this._submitButtonSelector = settings.submitButtonSelector;    
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this.formEL = formEl;

}
enableValidation() {}
}
export default FormValidator