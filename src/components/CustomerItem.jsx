import React from 'react';
import { Link } from 'react-router-dom';
import { Th, Td } from './partials/GeneralStyles';

export default function CustomerItem(props) {
	const { id, email, name, organisationNr, phoneNumber } = props.data;
	return (
		<tr>
			<Th scope='row'>{props.index + 1}</Th>
			<Td>{name}</Td>
			<Td>{organisationNr}</Td>
			<Td>{phoneNumber}</Td>
			<Td>{email}</Td>
			<Td>
				<Link to={`customer/${id}`}>Visit</Link>{' '}
			</Td>
		</tr>
	);
}
