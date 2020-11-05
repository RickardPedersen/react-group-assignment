import React from 'react';
import { useHistory } from 'react-router-dom';
import { Th, Td, Tr } from './partials/TableStyles';

export default function CustomerItem(props) {
	const { id, email, name, organisationNr, phoneNumber, reference } = props.data;
	const history = useHistory();
	console.log(props.data);
	function handleOnClick(id) {
		console.log('Row clicked');
		history.push(`/customer/${id}`);
	}
	return (
		<Tr onClick={() => handleOnClick(id)}>
			<Th>{props.index + 1}</Th>
			<Td>{name}</Td>
			<Td>{organisationNr}</Td>
			<Td>{phoneNumber}</Td>
			<Td>{email}</Td>
			<Td>{reference}</Td>
		</Tr>
	);
}
