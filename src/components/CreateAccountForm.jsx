import React, { useState, useContext } from 'react'
import FormComponent from './partials/FormComponent'
import InputComponent from './partials/InputComponent'
import UserKit from '../data/UserKit'
import { H1, Button, P } from './partials/GeneralStyles'

export default function CreateAccountForm(props) {
	const { toggle, show } = props
  const [formData, setFormData] = useState({
		email: '',
    password: '',
    firstName: '',
    lastName: '',
    organisationName: '',
    organisationKind: '',
  })
  
  function handleOnChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  function handleOnSubmit() {
    UserKit.createAccount(formData)
    .then(res => res.json())
    .then(data => console.log(data))
	}
	
	function handleToggle() {
		toggle(!show)
	}
  
  return (
    <FormComponent handleOnSubmit={handleOnSubmit}>
      <H1>Create Account</H1>
      <InputComponent
				name='email'
				label='E-mail *'
				placeholder='killenmedallt@hotmail.com'
				value={formData.email}
				handleOnChange={handleOnChange}
			/>
			<InputComponent
				name='password'
				label='Password *'
				type='password'
				placeholder='Enter password...'
				value={formData.password}
				handleOnChange={handleOnChange}
			/>
      <InputComponent
				name='firstName'
				label='First Name'
				placeholder='Enter first name...'
				value={formData.firstName}
				handleOnChange={handleOnChange}
			/>
      <InputComponent
				name='lastName'
				label='Last Name'
				placeholder='Enter last name...'
				value={formData.lastName}
				handleOnChange={handleOnChange}
			/>
      <InputComponent
				name='organisationName'
				label='Organisation Name *'
				placeholder='Enter Organisation Name...'
				value={formData.organisationName}
				handleOnChange={handleOnChange}
			/>
      <InputComponent
				name='organisationKind'
				label='Organisation Kind *'
				placeholder='Ex. 0, 1, 2'
				value={formData.organisationKind}
				handleOnChange={handleOnChange}
			/>
			<P>Already have an account?</P>
			<Button margin="0 0 5px" type="button" onClick={handleToggle}>Log In</Button>
    </FormComponent>
  )
}
