import React from 'react';
import * as Styled from './GeneralStyles';

export default function InputComponent(props) {
	const { type, name, value, handleOnChange, placeholder, label } = props;
	return (
		<>
			{label && <Styled.P fontSize="0.8em" bold margin="0 0 xs 0">{label}</Styled.P>}
			<Styled.Input
				type={type ? type : 'text'}
				name={name}
				value={value}
				margin="0 0 m 0"
				placeholder={placeholder}
				onChange={handleOnChange}
			/>
		</>
	);
}
