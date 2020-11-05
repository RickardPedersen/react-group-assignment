import React from 'react';
import { Table, Tr, Th } from '../partials/TableStyles';
export default function TableComponent(props) {
	return (
		<Table>
			<thead>
				<Tr>
					<Th>#</Th>
					<Th>Company</Th>
					<Th>Corporate identity number</Th>
					<Th>Phone</Th>
					<Th>Email</Th>
					<Th>Visit</Th>
				</Tr>
			</thead>
			<tbody>{props.children}</tbody>
		</Table>
	);
}
