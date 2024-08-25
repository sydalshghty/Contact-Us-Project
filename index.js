let formContent = document.getElementById("form-Content");

formContent.onsubmit = function(){
    
    let firstName = document.getElementById("first-Name").value,
    firstNameRe = /^[a-zA-Z]+$/,
    validationFirstName = firstNameRe.test(firstName);

    sessionStorage.setItem("First-Name", firstName)

    let lastName = document.getElementById("last-Name").value,
    lastNameRe = /^[a-zA-Z]+$/,
    validationlastName = lastNameRe.test(lastName);

    sessionStorage.setItem("Last-Name", lastName);

    let emailAddress = document.getElementById("email-Address").value,
    emailAddressRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    validationemailAddress = emailAddressRe.test(emailAddress);

    sessionStorage.setItem("Email-Address", emailAddress);

    let phoneNumber = document.getElementById("phone-Number").value,
    phoneNumberRe = /^01[0-2,5]{1}[0-9]{8}$/,
    validationPhoneNumber = phoneNumberRe.test(phoneNumber);

    let textareaContent = document.getElementById("textarea-Content").value;

    sessionStorage.setItem("Content-TextArea", textareaContent);

    sessionStorage.setItem("Phone-Number", phoneNumber);

    if(validationFirstName === false){
        return false;
    }
    if(validationlastName === false){
        return false;
    }
    if(validationemailAddress === false){
        return false;
    }
    if(validationPhoneNumber === false){
        return false;
    }
        return true;
}

let firstNameInput = document.getElementById("first-Name");

let lastNameInput = document.getElementById("last-Name");

let emailAddressInput = document.getElementById("email-Address");

let phoneNumberInput = document.getElementById("phone-Number");

let textareaContentInput = document.getElementById("textarea-Content");

function addAndRemovePlaceholderAttribute(input){
    input.onfocus = function(){
        this.setAttribute("data-place", this.getAttribute("placeholder"));
    
        this.setAttribute("placeholder", "")
    }
    input.onblur = function(){
        this.setAttribute("placeholder", this.getAttribute("data-place"));
    
        this.setAttribute("data-place", "")
    }
}
addAndRemovePlaceholderAttribute(firstNameInput);
addAndRemovePlaceholderAttribute(lastNameInput);
addAndRemovePlaceholderAttribute(emailAddressInput);
addAndRemovePlaceholderAttribute(phoneNumberInput);
addAndRemovePlaceholderAttribute(textareaContentInput);