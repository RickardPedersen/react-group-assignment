import React, { useState, useEffect, useContext } from 'react';
import { ThemeConsumer } from 'styled-components';
import { CustomerContext } from '../contexts/CustomerContext';
import UserKit from '../data/UserKit';
// import CustomerKit from '../data/CustomerKit';

export default function HomeComponent() {
	const { customerDataList, setCustomerDataList } = useContext(CustomerContext);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		console.log(UserKit.getToken());
		UserKit.getMe()
			.then((res) => res.json())
			.then((data) => {
				setCurrentUser(data);
			});
	}, []);
	return <div>Hej Home</div>;
}
