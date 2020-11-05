import React, { useState, useEffect, useContext } from 'react';
import { CustomerContext } from '../contexts/CustomerContext';
import UserKit from '../data/UserKit';
import UserInfo from './UserInfo';
import CustomerKit from '../data/CustomerKit';
import CustomerItem from './CustomerItem';
import TableComponent from './partials/TableComponent';
import { TableContainer } from './partials/TableStyles';
import CreateCustomer from './CreateCustomer';

export default function CustomerList() {
	const { customerDataList, setCustomerDataList } = useContext(CustomerContext);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	function fetchCustomers() {
		CustomerKit.getCustomerList()
			.then((res) => res.json())
			.then((data) => {
				console.log(typeof customerDataList);
				setCustomerDataList(data.results);
				setDataLoaded(true);
			});
	}
	useEffect(() => {
		fetchCustomers();

		UserKit.getMe()
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCurrentUser(data);
			});
	}, []);

	return (
		<>
			{currentUser && <UserInfo data={currentUser} />}
			<TableContainer>
				{dataLoaded && (
					<TableComponent>
						{customerDataList.map((customerItem, index) => {
							return <CustomerItem key={customerItem.id} index={index} data={customerItem} />;
						})}
					</TableComponent>
				)}
			</TableContainer>
			<CreateCustomer fetchCustomers={fetchCustomers} />
		</>
	);
}
