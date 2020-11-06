import React from 'react';
import InputComponent from '../components/partials/InputComponent';

export default function InputWrapper(props) {
    const { formData, setFormData } = props;
    
	function handleOnChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    function getFormattedLabel(label) {
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

	return (
		<>
			{Object.keys(formData).map((inputNameItem, index) => {
                const formattedLabel = getFormattedLabel(inputNameItem)
				return (
					<InputComponent
						key={index}
						type={'text'}
						name={inputNameItem}
						value={formData[inputNameItem]}
                        placeholder={`Enter ${formattedLabel}`}
                        label = {formattedLabel}
						handleOnChange={handleOnChange}
					/>
				);
			})}
		</>
	);
}
