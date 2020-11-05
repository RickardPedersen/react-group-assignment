import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import FormComponent from './partials/FormComponent'
import InputComponent from './partials/InputComponent'
import UserKit from '../data/UserKit';
import { UserContext } from '../contexts/UserContext'

export default function LoginForm() {
    const { setCurrentToken } = useContext(UserContext)

    const [formData, setFormData] = useState({
        email: "webb19@willandskill.se",
        password: "javascriptoramverk",
    })

    const history = useHistory()

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleOnSubmit() {
        UserKit.login(formData)
        .then(res => res.json())
        .then(data => {
            if(data.token) {
                UserKit.setToken(data.token)
                setCurrentToken(data.token)
                history.push('/home')
            }
        })
    }

    return (
        <FormComponent handleOnSubmit={ handleOnSubmit }>
            <InputComponent
                name="email"
                label="E-mail"
                placeholder="killenmedallt@hotmail.com"
                value={formData.email}
                handleOnChange={handleOnChange}
            />
            <InputComponent
                name="password"
                label="Password"
                type="password"
                placeholder="lololololol"
                value={formData.password}
                handleOnChange={handleOnChange}
            />
        </FormComponent>
    )
}
