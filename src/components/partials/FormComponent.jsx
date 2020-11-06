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
			<Styled.Div
				overflow="hidden auto"
			>
				{children}
			</Styled.Div>
			<Styled.Div flex justify="flex-end">
				<Styled.Button padding="s xxl">Submit</Styled.Button>
			</Styled.Div>
		</Styled.Form>
	);
}
