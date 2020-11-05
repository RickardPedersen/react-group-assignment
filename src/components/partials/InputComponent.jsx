import React from 'react';
import {P} from './GeneralStyles'

export default function InputComponent(props) {
	const { type, name, value, handleOnChange, placeholder, label } = props;
	return (
		<>
			{label && <P>{label}</P>}
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
