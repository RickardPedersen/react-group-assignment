import React from 'react';
import { Th } from '../partials/GeneralStyles';
export default function TableComponent(props) {
	return (
		<table>
			<thead>
				<tr>
					<Th scope='col'>#</Th>
					<Th scope='col'>Company</Th>
					<Th scope='col'>Corporate identity number</Th>
					<Th scope='col'>Phone</Th>
					<Th scope='col'>Email</Th>
				</tr>
			</thead>
			<tbody>{props.children}</tbody>
		</table>
	);
}
