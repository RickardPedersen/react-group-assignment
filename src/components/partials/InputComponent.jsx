import React from 'react';
import * as Styled from './GeneralStyles';

export default function InputComponent(props) {
	const { type, name, value, handleOnChange, placeholder, label, required } = props;
	return (
		<>
			{label && <Styled.P fontSize="0.8em" bold margin="0 0 xs 0">{`${label}${required ? ' *' : ''}`}</Styled.P>}
			<Styled.Input
				type={type ? type : 'text'}
				name={name}
				value={value}
				margin="0 0 m 0"
				required={required}
				placeholder={placeholder}
				onChange={handleOnChange}
			/>
		</>
	);
}
