export function getFormFields() {
    const fields = {
        name: "text",
        organisationNr: "number",
        vatNr: "text",
        paymentTerm: "number",
        reference: "text",
        website: "text",
        email: "text",
        phoneNumber: "text",
    }

    return {
        empty() {
            let emptyFields = {...fields};
            Object.keys(emptyFields).forEach(field => {
                emptyFields[field] = ""
            })

            return emptyFields;
        },
        fieldTypes() {
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