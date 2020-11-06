import React from 'react';
import CustomerList from '../components/CustomerList';
import Container from '../components/partials/Container';
import UserInfo from '../components/UserInfo';
import { Div } from '../components/partials/GeneralStyles';

export default function HomePage() {
	return (
		<div>
			<Container width="980px">
				<Div 
					width="100%"
					background="gray1"
					borderRadius="borderRadius"
					padding="m"
				>
					<UserInfo/>
					<CustomerList />
				</Div>
			</Container>
		</div>
	);
}
