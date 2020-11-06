import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormComponent from './partials/FormComponent';
import InputComponent from './partials/InputComponent';
import UserKit from '../data/UserKit';
import { UserContext } from '../contexts/UserContext';
import { H1, Button, P } from './partials/GeneralStyles'

export default function LoginForm(props) {
	const { toggle, show } = props
	const { setCurrentToken } = useContext(UserContext);

	const [formData, setFormData] = useState({
		email: 'webb19@willandskill.se',
		password: 'javascriptoramverk',
	});

	const history = useHistory();

	function handleOnChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleOnSubmit() {
		UserKit.login(formData)
			.then((res) => res.json())
			.then((data) => {
				if (data.token) {
					UserKit.setToken(data.token);
					setCurrentToken(data.token);
					console.log('LOGGAR IN')
					history.push('/home')
				}
			})
	}

	function handleToggle() {
		toggle(!show)
	}

	return (
		<FormComponent handleOnSubmit={handleOnSubmit}>
			<H1>Log In</H1>
			<InputComponent
				name='email'
				label='E-mail'
				placeholder='killenmedallt@hotmail.com'
				value={formData.email}
				handleOnChange={handleOnChange}
			/>
			<InputComponent
				name='password'
				label='Password'
				type='password'
				placeholder='lololololol'
				value={formData.password}
				handleOnChange={handleOnChange}
			/>
			<P>Don't have an account yet?</P>
			<Button margin="0 0 5px" type="button" onClick={handleToggle}>Create New Account</Button>
		</FormComponent>
	);
}
