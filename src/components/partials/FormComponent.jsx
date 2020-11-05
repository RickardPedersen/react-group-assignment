import React, { useState } from 'react';

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
			<button type='submit'>Submit</button>
		</form>
	);
}
