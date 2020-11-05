import React from 'react';
import * as Styled from './GeneralStyles';

export default function InputComponent(props) {
	const { type, name, value, handleOnChange, placeholder, label } = props;
	return (
		<>
			{label && <Styled.P bold margin="m 0 xs 0">{label}</Styled.P>}
			<Styled.Input
				type={type ? type : 'text'}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={handleOnChange}
			/>
		</>
	);
}
