import React from 'react';

export default function InputComponent(props) {
	const { type, name, value, handleOnChange, placeholder, label } = props;
	return (
		<>
			{label && <p>{label}</p>}
			<input
				type={type ? type : 'text'}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={handleOnChange}
			/>
		</>
	);
}
