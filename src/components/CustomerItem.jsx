import React from 'react';
import { Link } from 'react-router-dom';
import { Th, Td, Tr } from './partials/TableStyles';

export default function CustomerItem(props) {
	const { id, email, name, organisationNr, phoneNumber } = props.data;
	return (
		<Tr>
			<Th scope='row'>{props.index + 1}</Th>
			<Td>{name}</Td>
			<Td>{organisationNr}</Td>
			<Td>{phoneNumber}</Td>
			<Td>{email}</Td>
			<Td>
				<Link to={`customer/${id}`}>Link</Link>{' '}
			</Td>
		</Tr>
	);
}
