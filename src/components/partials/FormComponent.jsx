import React, { useState } from 'react';
import * as Styled from './GeneralStyles';

export default function FormComponent(props) {
	const { handleOnSubmit, children } = props;
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleOnSubmit(e);
			}}
		>
			{children}
			<Styled.Button margin="m 0 0 0" type='submit'>Submit</Styled.Button>
		</form>
	);
}
