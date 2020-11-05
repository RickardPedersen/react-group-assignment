import React from 'react';
import { Table, Tr, Th } from '../partials/TableStyles';
export default function TableComponent(props) {
	return (
		<Table>
			<thead>
				<Tr>
					<Th scope='col'>#</Th>
					<Th scope='col'>Company</Th>
					<Th scope='col'>Corporate identity number</Th>
					<Th scope='col'>Phone</Th>
					<Th scope='col'>Email</Th>
					<Th scope='col'>Visit</Th>
				</Tr>
			</thead>
			<tbody>{props.children}</tbody>
		</Table>
	);
}
