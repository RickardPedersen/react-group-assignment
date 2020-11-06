export function getFormFields() {

    const fields = {
        name: {
            type: "text",
            required: true,
        },
        organisationNr: {
            type: "number",
            required: false,
        },
        vatNr: {
            type: "text",
            required: false,
        },
        paymentTerm: {
            type: "number",
            required: false,
        },
        reference: {
            type: "text",
            required: false,
        },
        website: {
            type: "text",
            required: false,
        },
        email: {
            type: "text",
            required: false,
        },
        phoneNumber: {
            type: "text",
            required: false,
        },
    }

    return {
        empty() {
            let emptyFields = {...fields};
            Object.keys(emptyFields).forEach(field => {
                emptyFields[field] = ""
            })

            return emptyFields;
        },
        settings() {
            return fields;
        }
    }
}

export function getFormattedLabel(label) {
    const uppercaseLetters = label.match(/[A-Z]/g);

    if(uppercaseLetters) {
        uppercaseLetters.forEach(letter => {
            label = label.replace(letter, ` ${letter}`)
        })
    }

    label = label.replace(/Nr/g, 'Number');

    label = label.charAt(0).toUpperCase() + label.slice(1); 

    return label;
}

export function validVatNumber(inputString) {
    let validString = (inputString.match(/SE([0-9]){10}$/gi));
    if(inputString.length === 0 || validString) {
        return true;
    }
    return false;
}