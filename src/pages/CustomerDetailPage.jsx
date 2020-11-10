import React, { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CustomerContext } from '../contexts/CustomerContext';
import { H3, P, Div, Button, TextContainer } from '../components/partials/GeneralStyles';
import Container from '../components/partials/Container';
import CustomerKit from './../data/CustomerKit';
import CustomerEditModal from '../components/CustomerEditModal';
import { getFormattedLabel } from '../util';

export default function CustomerDetailPage() {
	const { id } = useParams();
	const history = useHistory();

	const { customerDataList } = useContext(CustomerContext);
	const [customer, setCustomer] = useState(null);
	const [editModalOpen, setEditModalOpen] = useState(false);

	const fetchCurrentCustomer = (id) => {
		const index = customerDataList.findIndex((customer) => customer.id == id);
		setCustomer(customerDataList[index]);
	};

	useEffect(() => {
		fetchCurrentCustomer(id);
	}, []);

	const handleDelete = () => {
		CustomerKit.deleteCustomer(id)
			.then(() => {
				history.push('/home');
			})
			.catch((e) => console.error(e));
	};

	const renderDeleteEditButtons = () => {
		return (
			<Div flex margin='l 0 0 0'>
				<Button onClick={handleDelete} background='danger' width='50%' margin='0 m 0 0'>
					Delete
				</Button>

				<Button onClick={handleEditModalOpen} background='success' width='50%'>
					Edit
				</Button>
			</Div>
		);
	};

	const handleEditModalOpen = () => {
		setEditModalOpen(true);
	};

	return (
		<Container>
			{customer && (
				<Div background='gray1' padding='m' borderRadius='borderRadius'>
					<H3 margin='0 0 l 0'>{customer.name}</H3>

					{Object.entries(customer).map((entry, index) => {
						if (typeof entry[1] == 'string' || typeof entry[1] == 'number') {
							return (
								<TextContainer key={index}>
									<P margin='m 0 0 0' fontSize='0.8em' bold>{`${getFormattedLabel(entry[0])}`}</P>
									{entry[1]}
								</TextContainer>
							);
						}
					})}
					{renderDeleteEditButtons()}
				</Div>
			)}
			<CustomerEditModal
				open={editModalOpen}
				customer={customer}
				setCustomer={setCustomer}
				setOpen={setEditModalOpen}
			/>
		</Container>
	);
}
