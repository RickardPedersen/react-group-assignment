import React from 'react';
import { H1, P, Span } from './partials/GeneralStyles';

export default function UserInfo(props) {
	const { firstName, lastName, email } = props.data;
	return (
		<div>
			<H1 margin='20px'>Welcome back {`${firstName} ${lastName}`}</H1>
			<Span margin='30px'>{email}</Span>
		</div>
	);
}
