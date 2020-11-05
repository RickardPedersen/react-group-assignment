import React from 'react';
import InputComponent from '../components/partials/InputComponent';

export default function InputWrapper(props) {
    const { formData, setFormData } = props;
    
	function handleOnChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    function getFormattedLabel(label) {
        const uppercaseLetters = label.match(/[A-Z]/g);
        console.log(uppercaseLetters)
    }
    
	return (
		<>
			{Object.keys(formData).map((inputNameItem, index) => {
				return (
					<InputComponent
						key={index}
						type={'text'}
						name={inputNameItem}
						value={formData[inputNameItem]}
						placeholder={`enter ${inputNameItem}`}
						handleOnChange={handleOnChange}
					/>
				);
			})}
		</>
	);
}
