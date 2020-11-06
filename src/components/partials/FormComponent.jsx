import React, { useState } from 'react';
import * as Styled from './GeneralStyles';

export default function FormComponent(props) {
	const { handleOnSubmit, children } = props;
	return (
		<Styled.Form
			onSubmit={(e) => {
				e.preventDefault();
				handleOnSubmit(e);
			}}
			width="100%"
		>
			{children}
			<Styled.Button type='submit'>Submit</Styled.Button>
		</Styled.Form>
	);
}
