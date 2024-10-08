function onSubmit() {


    const nameElement = document.getElementById('name');

    const isNameFieldvalid = validateField(nameElement);

    const phoneElement = document.getElementById('phone');

    const isPhoneFieldvalid = validateField(phoneElement);

    const messageElement = document.getElementById('message');

    const isMesssageFieldvalid = validateField(messageElement);

    const isFormValid = isNameFieldvalid && isPhoneFieldvalid && isMesssageFieldvalid;

    onvalidFormSubmission(isFormValid, nameElement, phoneElement, messageElement);

}


// gebruik van rest operator
function onvalidFormSubmission(isFormValid, ...fields) {


    if (isFormValid) {

        fields.forEach(field=> {
            
            field.value = '';
        })

        const infoField = document.getElementById('info_label');

        infoField.textContent = "Message sent successfully!";

        infoField.setAttribute('class', 'success');

        
        setInterval(function () {

            infoField.removeAttribute('class', 'success');

            infoField.textContent = '';

        }, 2 * 1000);
    }
}



function validateField(field) {

    if (field.value == '') {

        field.setAttribute('class', 'error-input')

        setInterval(function () {

            field.removeAttribute('class', 'error-input')

        }, 2 * 1000);

        return false;

    }

    return true;

}


function goToURLInNewtab(location){

    switch(location) {

        case 'instagram': {
            window.open("https://www.instagram.com/");
            break;
        }

        case 'facebook': {
            window.open("https://www.facebook.com/");
            break;
        }

        case 'linkedin': {
            window.open("https://www.linkedin.com/");
            break;
        }
    }
 
}
